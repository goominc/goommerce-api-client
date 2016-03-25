// Copyright (C) 2016 Goom Inc. All rights reserved.

const config = require('./config');

if (global.fetch) {
  exports.request = (auth, method, url, body) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    if (auth) {
      headers.Authorization = auth.bearer ? `Bearer ${auth.bearer}` : '';
    }
    return fetch(config.apiRoot + url, {
      method,
      headers,
      body: JSON.stringify(body),
    }).then((response) => {
      const contentType = response.headers.get('content-type');
      if(contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then((json) => response.ok ? json : Promise.reject(json));
      }
      return response.text().then((message) => Promise.reject({ message }));
    });
  };
} else {
  function getAjaxData(auth, method, url, body) {
    const headers = {};
    if (auth) {
      headers.Authorization = auth.bearer ? `Bearer ${auth.bearer}` : '';
    }
    const res = {
      url: config.apiRoot + url,
      method,
      headers,
      processData: false,
      contentType: 'application/json',
    };
    if (body) {
      res.data = JSON.stringify(body);
    }
    return res;
  }

  exports.request = (auth, method, url, body) => {
    return $.ajax(getAjaxData(auth, method, url, body)).fail(
      (jqXHR, textStatus, errorThrown) => {
        let error = jqXHR.responseJSON;
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
      }
    );
  };
}
