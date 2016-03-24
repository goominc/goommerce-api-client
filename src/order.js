// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';

export function loadBrandOrderStats(auth, { brandId }) {
  return request(auth, 'get', `/api/v1/brands/${brandId}/orders/stats`);
}

export function loadBrandOrders(auth, { brandId, start, end }) {
  const query = $.param({ start, end });
  return request(auth, 'get', `/api/v1/brands/${brandId}/orders?${query}`);
}

export function loadBrandPendingOrders(auth, { brandId }) {
  return request(auth, 'get', `/api/v1/brands/${brandId}/orders/pending`);
}

export function updateStock(auth, { orderProductId, count }) {
  return request(auth, 'put', `/api/v1/order_products/${orderProductId}/stock`, { count });
}
