// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

exports.__esModule = true;
exports.request = request;
function getAjaxData(auth, method, url, body) {
  var headers = {};
  if (auth) {
    headers.Authorization = auth.bearer ? 'Bearer ' + auth.bearer : '';
  }
  var res = {
    url: url,
    method: method,
    headers: headers,
    processData: false,
    contentType: 'application/json'
  };
  if (body) {
    res.data = JSON.stringify(body);
  }
  return res;
}

function request(auth, method, url, body) {
  return $.ajax(getAjaxData(auth, method, url, body)).fail(function (jqXHR, textStatus, errorThrown) {
    var error = jqXHR.responseJSON;
    if (!error) {
      if (errorThrown) {
        error = { message: errorThrown };
      } else if (jqXHR.status === 0) {
        error = { message: 'Network Error' };
      } else {
        error = { message: 'Unknown Error' };
      }
    }
    return Promise.reject(error);
  });
}