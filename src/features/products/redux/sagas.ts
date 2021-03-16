import { SagaIterator } from 'redux-saga';
import { StrictEffect, call, put, takeLatest } from 'redux-saga/effects';

import { ProductT } from '../../../shared/types';
import { getProductsError, getProductsSuccess } from './actions';
import { getProductsRequest } from './requests';
import { GET_PRODUCTS } from './types';

export function* getProductsSaga(): SagaIterator {
  try {
    const products: ProductT[] = yield call(getProductsRequest);
    yield put(getProductsSuccess(products));
  } catch (e) {
    yield put(getProductsError(e));
  }
}

export function* getProductsWatcher(): Generator<StrictEffect> {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
}
