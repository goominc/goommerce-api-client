// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';

export function loadUncleOrders(auth, { date }) {
  return request(auth, 'get', `/api/v1/uncle/orders/${date}`);
}
