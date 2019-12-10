/*!
 * Tools JavaScript Library v2.1.0
 * version
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */


function Tools() {
  this.x = 'xxx'
  this.y = 'yyy'
}

Tools.prototype.getCookie = function (key) {
  var cookieArr = document.cookie.split('; ')
  for (var i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i].split('=')[0] === key) {
      return cookieArr[i].split('=')[1]
    }
  }
}

Tools.prototype.getQuery = function (key) {
  var queryArr = location.search.slice(1).split('&')
  for (var i = 0; i < queryArr.length; i++) {
    if (queryArr[i].split('=')[0] === key) {
      return queryArr[i].split('=')[1]
    }
  }
}


