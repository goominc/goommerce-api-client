// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.login = login;
exports.whoami = whoami;
exports.logout = logout;
exports.signup = signup;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;

var _util = require('./util');

function login(auth, _ref) {
  var email = _ref.email;
  var password = _ref.password;
  var onesignal = _ref.onesignal;

  return _util.request(auth, 'post', '/api/v1/login', {
    email: email,
    password: password,
    onesignal: onesignal
  });
}

function whoami(auth) {
  return _util.request(auth, 'get', '/api/v1/login');
}

function logout(auth, _ref2) {
  var onesignal = _ref2.onesignal;

  return _util.request(auth, 'delete', '/api/v1/login', { onesignal: onesignal });
}

function signup(auth, params) {
  return _util.request(auth, 'post', '/api/v1/users', params);
}

function forgotPassword(auth, _ref3) {
  var email = _ref3.email;
  var resetBaseUrl = _ref3.resetBaseUrl;

  return _util.request(auth, 'post', '/api/v1/forgot', { email: email, resetBaseUrl: resetBaseUrl });
}

function resetPassword(auth, _ref4) {
  var access_token = _ref4.access_token;
  var password = _ref4.password;

  return _util.request(auth, 'put', '/api/v1/reset', { access_token: access_token, password: password });
}