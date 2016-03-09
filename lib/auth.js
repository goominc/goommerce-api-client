'use strict';

exports.__esModule = true;
exports.login = login;
exports.logout = logout;
exports.signup = signup;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;

var _util = require('./util');

function login(auth, _ref) {
  var email = _ref.email;
  var password = _ref.password;

  return _util.request(auth, 'post', '/api/v1/login', {
    email: email,
    password: password
  });
}

function logout(auth) {
  return _util.request(auth, 'delete', '/api/v1/login');
}

function signup(auth, params) {
  return _util.request(auth, 'post', '/api/v1/users', params);
}

function forgotPassword(auth, _ref2) {
  var email = _ref2.email;
  var resetBaseUrl = _ref2.resetBaseUrl;

  return _util.request(auth, 'post', '/api/v1/forgot', { email: email, resetBaseUrl: resetBaseUrl });
}

function resetPassword(auth, _ref3) {
  var access_token = _ref3.access_token;
  var password = _ref3.password;

  return _util.request(auth, 'put', '/api/v1/reset', { access_token: access_token, password: password });
}