import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { productsReducer } from './features/products/redux/reducer';
import { getProductsWatcher } from './features/products/redux/sagas';
import { wishlistReducer } from './features/wishlist/redux/reducer';
import { combineWatchers } from './shared/utils/combine-watchers';

export const rootReducer = combineReducers({
  productsReducer,
  wishlistReducer,
});

function* rootSaga() {
  yield all(combineWatchers(getProductsWatcher));
}
const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
