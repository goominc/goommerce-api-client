// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.config = config;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _auth = require('./auth');

var authApi = _interopRequireWildcard(_auth);

var _brand = require('./brand');

var brandApi = _interopRequireWildcard(_brand);

var _order = require('./order');

var orderApi = _interopRequireWildcard(_order);

var _product = require('./product');

var productApi = _interopRequireWildcard(_product);

var _uncle = require('./uncle');

var uncleApi = _interopRequireWildcard(_uncle);

exports.authApi = authApi;
exports.brandApi = brandApi;
exports.orderApi = orderApi;
exports.productApi = productApi;
exports.uncleApi = uncleApi;

function config(_ref) {
  var apiRoot = _ref.apiRoot;

  require('./config').apiRoot = apiRoot;
}