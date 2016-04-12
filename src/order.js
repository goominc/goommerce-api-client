// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';
import qs from 'qs';

export function loadBrandOrderStats(auth, { brandId }) {
  return request(auth, 'get', `/api/v1/brands/${brandId}/orders/stats`);
}

export function loadBrandOrder(auth, { brandId, orderId }) {
  return request(auth, 'get', `/api/v1/brands/${brandId}/orders/${orderId}`);
}

export function loadBrandOrders(auth, { brandId, offset, limit }) {
  const query = qs.stringify({ offset, limit });
  return request(auth, 'get', `/api/v1/brands/${brandId}/orders?${query}`);
}

export function updateBrandOrderStatus(auth, { brandId, orderId, from, to }) {
  return request(auth, 'put', `/api/v1/brands/${brandId}/orders/${orderId}/status`, { from, to });
}

export function createOrderProductLog(auth, { orderProductId, ...params }) {
  return request(auth, 'post', `/api/v1/order_products/${orderProductId}/logs`, params);
}
