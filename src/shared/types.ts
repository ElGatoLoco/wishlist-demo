export type ReduxAction<T, P = null> = {
  type: T;
  payload: P;
};

export type StockT = 'Stock unknown' | 'In stock' | 'Out of stock';

export type ShopT = {
  name: string;
  url: string;
  logo?: string;
  stock: StockT;
  price: number;
};

type AdvertismentBannerUrl = string;
export type ProductT = {
  id: number;
  title: string;
  colors: string;
  description: string;
  imageUrl: string;
  logoUrl?: string;
  shops: ShopT[];
  advertisments: AdvertismentBannerUrl[];
  similarProducts: (Partial<ProductT> & { price: number })[];
};
