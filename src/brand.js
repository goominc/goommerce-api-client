// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';

export function loadBrand(auth, { brandId }) {
  return request(auth, 'get', `/api/v1/brands/${brandId}`);
}
