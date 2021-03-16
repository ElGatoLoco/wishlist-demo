import './Popup.css';

import { FC } from 'react';

import { environment } from '../../../environment';
import { ShopT, StockT } from '../../../shared/types';
import { formatDanishCrowns } from '../../../shared/utils/format-danish-crowns';

const getStockIcon = (stockStatus: StockT) => {
  switch (stockStatus) {
    case 'In stock':
      return `${environment.staticUrl}/svg/in-stock.svg`;
    case 'Out of stock':
      return `${environment.staticUrl}/svg/no-stock.svg`;
    default:
      return `${environment.staticUrl}/svg/stock-unknown.svg`;
  }
};

type PopupT = FC<{
  isShown: boolean;
  hide: () => void;
  shops: ShopT[];
}>;
export const Popup: PopupT = ({ isShown, hide, shops }) => {
  return (
    <>
      <div className={`overlay ${isShown ? 'show' : ''}`} onClick={hide} />
      <div className={`modal ${isShown ? 'show' : ''}`}>
        <img onClick={hide} className="close" src={`${environment.staticUrl}/svg/close.svg`} alt="Close popup" />
        <h3>Shops</h3>
        <hr />
        {shops.map((shop) => {
          return (
            <div key={shop.name}>
              <div className="shop">
                <div className="shop-name">
                  {shop.logo ? (
                    <img className="shop-logo" src={`${environment.staticUrl}${shop.logo}`} alt={shop.name} />
                  ) : (
                    shop.name
                  )}
                </div>
                <div className="stock-status">
                  <img src={getStockIcon(shop.stock)} alt={shop.stock} />
                  {shop.stock}
                </div>
                <div className="shop-price">{formatDanishCrowns(shop.price)}</div>
                <a className="shop-link" href={'https://' + shop.url} target="_blank" rel="noreferrer">
                  <img src={`${environment.staticUrl}/svg/navigation-open.svg`} alt={`open on ${shop.name}`} />
                </a>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};
