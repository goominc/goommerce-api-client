// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadBrandProducts = loadBrandProducts;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _util = require('./util');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function loadBrandProducts(auth, _ref) {
  var brandId = _ref.brandId;
  var offset = _ref.offset;
  var limit = _ref.limit;

  var query = _qs2['default'].stringify({ offset: offset, limit: limit });
  return _util.request(auth, 'get', '/api/v1/brands/' + brandId + '/products?' + query);
}