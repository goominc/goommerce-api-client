// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadBrandOrderStats = loadBrandOrderStats;
exports.loadBrandOrders = loadBrandOrders;
exports.loadBrandPendingOrders = loadBrandPendingOrders;
exports.updateStock = updateStock;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _util = require('./util');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function loadBrandOrderStats(auth, _ref) {
  var brandId = _ref.brandId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders/stats');
}

function loadBrandOrders(auth, _ref2) {
  var brandId = _ref2.brandId;
  var start = _ref2.start;
  var end = _ref2.end;

  var query = _qs2['default'].stringify({ start: start, end: end });
  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders?' + query);
}

function loadBrandPendingOrders(auth, _ref3) {
  var brandId = _ref3.brandId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders/pending');
}

function updateStock(auth, _ref4) {
  var orderProductId = _ref4.orderProductId;
  var count = _ref4.count;

  return _util.request(auth, 'put', '/api/v1/order_products/' + orderProductId + '/stock', { count: count });
}