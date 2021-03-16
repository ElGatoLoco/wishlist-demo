import './Product.css';

import { FC, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { environment } from '../../../environment';
import { useStopTouchPropagation } from '../../../shared/hooks/useStopTouchPropagation';
import { useWindowSize } from '../../../shared/hooks/useWindowSize';
import { ProductT } from '../../../shared/types';
import { formatDanishCrowns } from '../../../shared/utils/format-danish-crowns';
import { addToWishlist } from '../../wishlist/redux/actions';

type ProductProps = ProductT & {
  onButtonClick: () => void;
};
export const Product: FC<ProductProps> = ({
  id,
  title,
  colors,
  description,
  imageUrl,
  logoUrl,
  shops,
  advertisments,
  similarProducts,
  onButtonClick,
}) => {
  const dispatch = useDispatch();
  const { innerHeight } = useWindowSize();
  const productDataRef = useRef<HTMLDivElement | null>(null);
  const advertismentsRef = useRef<HTMLDivElement | null>(null);
  const wishesRef = useRef<HTMLDivElement | null>(null);

  useStopTouchPropagation([advertismentsRef, wishesRef]);

  const [productDataDivHeight, setProductDataDivHeight] = useState(0);
  const imageHeight = useMemo(() => {
    // Occupy total window height minus the button height and padding
    return `calc(${innerHeight}px - ${productDataDivHeight}px - 60px - 32px)`;
  }, [innerHeight, productDataDivHeight]);
  useLayoutEffect(() => {
    setProductDataDivHeight(productDataRef.current?.clientHeight || 0);
  }, []);

  const lowestPrice = useMemo(() => {
    return shops.reduce((acc, curr) => {
      return curr.price < acc ? curr.price : acc;
    }, Infinity);
  }, [shops]);

  const stockStatus = useMemo(() => {
    if (shops.some((shop) => shop.stock === 'In stock')) {
      return 'In stock';
    }
    if (shops.some((shop) => shop.stock === 'Stock unknown')) {
      return 'Stock unknown';
    }

    return 'Out of stock';
  }, [shops]);

  const addProductToWishlists = useCallback(() => {
    dispatch(addToWishlist(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="wrapper" style={{ height: `${innerHeight}px` }}>
        <div
          className="product-image-container"
          style={{
            height: imageHeight,
            backgroundImage: `${environment.staticUrl}${imageUrl}`,
          }}
        >
          <button className="back-button" />
          <img
            className="product-image"
            src={`${environment.staticUrl}${imageUrl}`}
            alt={title}
            style={{ height: imageHeight }}
          />
          {logoUrl && <img className="product-logo" src={`${environment.staticUrl}${logoUrl}`} alt={title} />}
          <button className="add-to-wishlist" onClick={addProductToWishlists}>
            Add to wishlist
          </button>
        </div>
        <div className="content">
          <div ref={productDataRef} className="product-data">
            <div className="product-details">
              <div className="product-info">
                <h3>{title}</h3>
                <h4>{colors}</h4>
              </div>
              <p className="availability">{stockStatus}</p>
            </div>
            <div className="price">
              {shops.length > 1 && 'from '}
              <b>{formatDanishCrowns(lowestPrice)}</b>
            </div>
          </div>
          <p className="product-text">{description}</p>
        </div>

        <div className="fixed">
          <button onClick={onButtonClick}>
            {shops.length > 1 ? `Available in ${shops.length} shops` : `Buy now on ${shops[0].url}`}
          </button>
        </div>
        <div className="product-related">
          <hr />
          <div className="advertisments" ref={advertismentsRef}>
            {advertisments.map((advrt) => (
              <div key={advrt} className="advertisment">
                <img src={`${environment.staticUrl}${advrt}`} alt={advrt} />
              </div>
            ))}
          </div>
          <hr />
          <p>Similar to your wishes</p>
          <div className="similar-wishes" ref={wishesRef}>
            {similarProducts.map((product) => (
              <div key={product.id} className="wish">
                <img className="wish-img" src={`${environment.staticUrl}${product.imageUrl}`} alt={product.title} />
                <p className="wish-title">{product.title}</p>
                <p className="wish-price">{formatDanishCrowns(product.price)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
