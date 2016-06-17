// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadUncleOrders = loadUncleOrders;
exports.unclePickUp = unclePickUp;
exports.uncleCancelPickUp = uncleCancelPickUp;

var _util = require('./util');

function loadUncleOrders(auth, _ref) {
  var date = _ref.date;

  return _util.request(auth, 'get', '/api/v1/uncle/orders/' + date);
}

function unclePickUp(auth, _ref2) {
  var brandId = _ref2.brandId;
  var orderId = _ref2.orderId;
  var orderProducts = _ref2.orderProducts;

  return _util.request(auth, 'put', '/api/v1/brands/' + brandId + '/orders/' + orderId + '/pick_up', { orderProducts: orderProducts });
}

function uncleCancelPickUp(auth, _ref3) {
  var brandId = _ref3.brandId;
  var orderId = _ref3.orderId;
  var orderProducts = _ref3.orderProducts;

  return _util.request(auth, 'delete', '/api/v1/brands/' + brandId + '/orders/' + orderId + '/pick_up', { orderProducts: orderProducts });
}