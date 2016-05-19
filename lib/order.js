// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadBrandOrderStats = loadBrandOrderStats;
exports.loadBrandOrder = loadBrandOrder;
exports.loadBrandOrders = loadBrandOrders;
exports.updateBrandOrderStatus = updateBrandOrderStatus;
exports.brandOrderReadyToPickUp = brandOrderReadyToPickUp;
exports.createOrderProductLog = createOrderProductLog;
exports.updateOrderProductStock = updateOrderProductStock;
exports.deleteOrderProductStock = deleteOrderProductStock;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

function updateBrandOrderStatus(auth, _ref4) {
  var brandId = _ref4.brandId;
  var orderId = _ref4.orderId;
  var from = _ref4.from;
  var to = _ref4.to;

  return _util.request(auth, 'put', '/api/v1/brands/' + brandId + '/orders/' + orderId + '/status', { from: from, to: to });
}

function brandOrderReadyToPickUp(auth, _ref5) {
  var brandId = _ref5.brandId;
  var orderId = _ref5.orderId;
  var orderProducts = _ref5.orderProducts;

  return _util.request(auth, 'put', '/api/v1/brands/' + brandId + '/orders/' + orderId + '/ready2pickup', { orderProducts: orderProducts });
}

function createOrderProductLog(auth, _ref6) {
  var orderProductId = _ref6.orderProductId;

  var params = _objectWithoutProperties(_ref6, ['orderProductId']);

  return _util.request(auth, 'post', '/api/v1/order_products/' + orderProductId + '/logs', params);
}

function updateOrderProductStock(auth, _ref7) {
  var orderProductId = _ref7.orderProductId;
  var quantity = _ref7.quantity;
  var reason = _ref7.reason;

  return _util.request(auth, 'put', '/api/v1/order_products/' + orderProductId + '/stock', { quantity: quantity, reason: reason });
}

function deleteOrderProductStock(auth, _ref8) {
  var orderProductId = _ref8.orderProductId;

  return _util.request(auth, 'delete', '/api/v1/order_products/' + orderProductId + '/stock');
}