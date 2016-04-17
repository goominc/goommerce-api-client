// Copyright (C) 2016 Goom Inc. All rights reserved.

import * as authApi from './auth';
import * as brandApi from './brand';
import * as orderApi from './order';
import * as productApi from './product';

export {
  authApi,
  brandApi,
  orderApi,
  productApi,
};

export function config({ apiRoot }) {
  require('./config').apiRoot = apiRoot;
}
