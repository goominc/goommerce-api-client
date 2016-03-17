// Copyright (C) 2016 Goom Inc. All rights reserved.

import * as authApi from './auth';
import * as orderApi from './order';

export {
  authApi,
  orderApi,
};

export function config({ apiRoot }) {
  require('./config').apiRoot = apiRoot;
}
