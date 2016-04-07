// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadBrandOrderStats = loadBrandOrderStats;
exports.loadBrandOrder = loadBrandOrder;
exports.loadBrandOrders = loadBrandOrders;
exports.updateStock = updateStock;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _util = require('./util');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function loadBrandOrderStats(auth, _ref) {
  var brandId = _ref.brandId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders/stats');
}

function loadBrandOrder(auth, _ref2) {
  var brandId = _ref2.brandId;
  var orderId = _ref2.orderId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders/' + orderId);
}

function loadBrandOrders(auth, _ref3) {
  var brandId = _ref3.brandId;
  var offset = _ref3.offset;
  var limit = _ref3.limit;

  var query = _qs2['default'].stringify({ offset: offset, limit: limit });
  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders?' + query);
}

function updateStock(auth, _ref4) {
  var orderProductId = _ref4.orderProductId;
  var count = _ref4.count;

  return _util.request(auth, 'put', '/api/v1/order_products/' + orderProductId + '/stock', { count: count });
}