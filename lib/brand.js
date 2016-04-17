// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.loadBrand = loadBrand;

var _util = require('./util');

function loadBrand(auth, _ref) {
  var brandId = _ref.brandId;

  return _util.request(auth, 'get', '/api/v1/brands/' + brandId);
}