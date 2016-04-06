// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';
import qs from 'qs';

export function loadProduct(auth, { productId }) {
  return request(auth, 'get', `/api/v1/products/${productId}`);
}

export function loadBrandProducts(auth, { brandId, offset, limit }) {
  const query = qs.stringify({ offset, limit });
  return request(auth, 'get', `/api/v1/brands/${brandId}/products?${query}`);
}
