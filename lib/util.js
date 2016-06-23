// Copyright (C) 2016 Goom Inc. All rights reserved.

'use strict';

var config = require('./config');

if (global.fetch) {
  exports.request = function (auth, method, url, body) {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    if (auth) {
      headers.Authorization = auth.bearer ? 'Bearer ' + auth.bearer : '';
    }
    return fetch(config.apiRoot + url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    }).then(function (response) {
      var contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(function (json) {
          return response.ok ? json : Promise.reject(json);
        });
      }
      return response.text().then(function (message) {
        return Promise.reject({
          status: response.status,
          message: message
        });
      });
    });
  };
} else {
  (function () {
    var getAjaxData = function getAjaxData(auth, method, url, body) {
      var headers = {};
      if (auth) {
        headers.Authorization = auth.bearer ? 'Bearer ' + auth.bearer : '';
      }
      var res = {
        url: config.apiRoot + url,
        method: method,
        headers: headers,
        processData: false,
        contentType: 'application/json'
      };
      if (body) {
        res.data = JSON.stringify(body);
      }
      return res;
    };

    exports.request = function (auth, method, url, body) {
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
    };
  })();
}