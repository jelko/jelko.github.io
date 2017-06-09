"use strict";
define(function() {
  return {
    setCookie: function(cookiename, cookievalue, hours) {
      var date = new Date();
      date.setTime(date.getTime() + Number(hours) * 3600 * 1000);
      document.cookie = cookiename + "=" + cookievalue + "; path=/;expires = " + date.toGMTString();
    },
    getCookie: function(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    },
  }
});
