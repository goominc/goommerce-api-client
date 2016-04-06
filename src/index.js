// Copyright (C) 2016 Goom Inc. All rights reserved.

import * as authApi from './auth';
import * as orderApi from './order';
import * as productApi from './product';

export {
  authApi,
  orderApi,
  productApi,
};

export function config({ apiRoot }) {
  require('./config').apiRoot = apiRoot;
}
