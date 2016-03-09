// Copyright (C) 2016 Goom Inc. All rights reserved.

import { request } from './util';

export function login(auth, { email, password }) {
  return request(auth, 'post', '/api/v1/login', {
    email,
    password,
  });
}

export function logout(auth) {
  return request(auth, 'delete', '/api/v1/login');
}

export function signup(auth, params) {
  return request(auth, 'post', '/api/v1/users', params);
}

export function forgotPassword(auth, { email, resetBaseUrl }) {
  return request(auth, 'post', '/api/v1/forgot', { email, resetBaseUrl });
}

export function resetPassword(auth, { access_token, password }) {
  return request(auth, 'put', '/api/v1/reset', { access_token, password });
}
