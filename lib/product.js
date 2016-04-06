// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadProduct = loadProduct;
exports.loadBrandProducts = loadBrandProducts;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _util = require('./util');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function loadProduct(auth, _ref) {
  var productId = _ref.productId;

  return _util.request(auth, 'get', '/api/v1/products/' + productId);
}

function loadBrandProducts(auth, _ref2) {
  var brandId = _ref2.brandId;
  var offset = _ref2.offset;
  var limit = _ref2.limit;

  var query = _qs2['default'].stringify({ offset: offset, limit: limit });
  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/products?' + query);
}