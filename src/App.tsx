import './App.css';

import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from './features/products/redux/actions';
import { ProductList } from './screens/product-list/ProductList';
import { isMobile } from './shared/utils/is-mobile';

export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!isMobile) {
    return (
      <div className="unavailable">
        <h1>App is currently only available on mobile.</h1>
      </div>
    );
  }

  return <ProductList />;
};
