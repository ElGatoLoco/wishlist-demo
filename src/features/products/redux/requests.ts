import axios from 'axios';

import { environment } from '../../../environment';
import { ProductT } from '../../../shared/types';

type GetProductsRequest = () => Promise<ProductT[] | Error>;
export const getProductsRequest: GetProductsRequest = () => {
  return axios.get(`${environment.apiUrl}/products.json`).then((res) => res.data);
};
