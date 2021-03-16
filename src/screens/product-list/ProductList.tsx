import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { Popup } from '../../features/products/components/Popup';
import { Product } from '../../features/products/components/Product';
import { ProductsState } from '../../features/products/redux/types';
import { RootState } from '../../store';

export const ProductList: FC = () => {
  const { products } = useSelector<RootState, ProductsState>((state) => state.productsReducer);
  const [swipedisabled, setSwipeDisabled] = useState(false);
  const [activeProductId, setActiveProductId] = useState(-1);

  const showPopup = (productId: number) => {
    setActiveProductId(productId);
    setSwipeDisabled(true);
  };
  const hidePopup = useCallback(() => {
    setActiveProductId(-1);
    setSwipeDisabled(false);
  }, []);

  const onProductButtonClick = useCallback((product) => {
    return product.shops.length > 1
      ? () => showPopup(product.id)
      : () => window.open('https://' + product.shops[0].url, '_blank');
  }, []);

  return (
    <>
      <SwipeableViews style={{ overflow: 'hidden' }} disabled={swipedisabled}>
        {products.map((product) => (
          <Product key={product.id} {...product} onButtonClick={onProductButtonClick(product)} />
        ))}
      </SwipeableViews>
      <Popup
        isShown={activeProductId > -1}
        hide={hidePopup}
        shops={products.find(({ id }) => id === activeProductId)?.shops || []}
      />
    </>
  );
};
