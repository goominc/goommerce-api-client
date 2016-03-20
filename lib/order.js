// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadBrandOrderStats = loadBrandOrderStats;
exports.loadBrandOrders = loadBrandOrders;
exports.loadBrandPendingOrders = loadBrandPendingOrders;

var _util = require('./util');

function loadBrandOrderStats(auth, _ref) {
  var brandId = _ref.brandId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders/stats');
}

function loadBrandOrders(auth, _ref2) {
  var brandId = _ref2.brandId;
  var start = _ref2.start;
  var end = _ref2.end;

  var query = $.param({ start: start, end: end });
  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders?' + query);
}

function loadBrandPendingOrders(auth, _ref3) {
  var brandId = _ref3.brandId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/orders/pending');
}