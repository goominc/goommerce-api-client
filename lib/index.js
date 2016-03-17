// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.config = config;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _auth = require('./auth');

var authApi = _interopRequireWildcard(_auth);

var _order = require('./order');

var orderApi = _interopRequireWildcard(_order);

exports.authApi = authApi;
exports.orderApi = orderApi;

function config(_ref) {
  var apiRoot = _ref.apiRoot;

  require('./config').apiRoot = apiRoot;
}