"use strict";

// To get the cookie value which is already set. If not set, it returns null
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

// To set a cookie and it's expiry time in days
function setCookie(name, value, days) {
  var date, expires;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

//fallback ready document
function readyDoc(fn) {
  var d = document;
  d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
}

readyDoc(function () {
  // Home page hero carousel
  if (document.getElementsByClassName("home-hero-slider")[0]) {
    var offersSlider = tns({
      container: '.home-hero-slider',
      "items": 1.5,
      "slideBy": 1.5,
      "mouseDrag": true,
      "swipeAngle": false,
      "speed": 400,
      "nav": false
    });
  }

  // If we click on close button, the cookie exclusive-offer-viewed sets to "yes" with an expiry date 1 day.

  var offerCookie = getCookie("exclusive-offer-viewed");
  if (offerCookie == null) {
    // console.log("exclusive-offer-not-viewed");
    document.getElementsByClassName('top-banner')[0].classList.remove("hide");
  }

  document.getElementsByClassName("top-banner__close-btn")[0].onclick = function () {
    document.getElementsByClassName('top-banner')[0].classList.add("hide");
    setCookie("exclusive-offer-viewed", "yes", 1);
  };
});
