// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadUncleOrders = loadUncleOrders;

var _util = require('./util');

function loadUncleOrders(auth, _ref) {
  var date = _ref.date;

  return _util.request(auth, 'get', '/api/v1/uncle/orders/' + date);
}