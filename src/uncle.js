// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';

export function loadUncleOrders(auth, { date }) {
  return request(auth, 'get', `/api/v1/uncle/orders/${date}`);
}

export function unclePickUp(auth, { brandId, orderId, orderProducts }) {
  return request(auth, 'put', `/api/v1/brands/${brandId}/orders/${orderId}/pick_up`, { orderProducts });
}

export function uncleCancelPickUp(auth, { brandId, orderId, orderProducts }) {
  return request(auth, 'delete', `/api/v1/brands/${brandId}/orders/${orderId}/pick_up`, { orderProducts });
}
