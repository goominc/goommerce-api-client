// Copyright (C) 2016 Goom Inc. All rights reserved.

function getAjaxData(auth, method, url, body) {
  const headers = {};
  if (auth) {
    headers.Authorization = auth.bearer ? `Bearer ${auth.bearer}` : '';
  }
  const res = {
    url,
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

export function request(auth, method, url, body) {
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
}
