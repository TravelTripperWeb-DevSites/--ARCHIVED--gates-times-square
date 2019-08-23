'use strict';

//fallback ready document
function readyDoc(fn) {
  var d = document;
  d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
}

readyDoc(function () {

  var weatherKey = 'b03f57fc9998146fc56895a9b59d1661';

  axios({
    method: 'get',
    url: 'https://cors.io/?https://api.darksky.net/forecast/' + weatherKey + '/24.5710009,-81.7566775?units=us',
    dataType: 'jsonp'
  }).then(function (localWeather) {
    var temF = localWeather.currently.temperature;
    var temC = (temF - 32) * (5 / 9);
    var html = '<p>Current Weather<br>Times Square, Florida</p><div class="visualtour__weather__icon"><i class="wi ' + localWeather.hourly.icon + '"></i></div><div class="visualtour__weather__temp">' + Math.round(temF) + '&deg;F ' + Math.round(temC) + '&#8451; <br> <a href="https://darksky.net/forecast/24.5711,-81.7531/us12/en" aria-hidden="true" rel="nofollow" target="_blank">Powered by Dark Sky</a></div>';
    document.getElementById("weather").innerHTML = html;
  }).catch(function (error) {
    // handle error
    console.log(error);
  }).finally(function () {
    // always executed
  });

  // Home page hero carousel
  if (document.getElementsByClassName("home-hero-slider")[0]) {
    var homeBannerSlider = tns({
      "container": '.home-hero-slider__inner',
      "items": 1,
      "slideBy": "page",
      "mouseDrag": true,
      "swipeAngle": true,
      "speed": 400,
      "nav": false,
      "prevButton": "#homeSliderPrev",
      "nextButton": "#homeSliderNext",
      "responsive": {
        "768": {
          "items": 1.5,
          "edgePadding": 45,
          "slideBy": 1
        },
        "992": {
          "items": 1.2,
          "edgePadding": 120,
          "slideBy": 1
        }
      }
    });
  }
  // Home page pages carousel
  if (document.getElementsByClassName("pages-slider")[0]) {
    var pagesSlider = tns({
      "container": '.pages-slider__inner',
      "items": 1,
      "slideBy": "page",
      "mouseDrag": true,
      "swipeAngle": true,
      "speed": 400,
      "nav": false,
      "prevButton": "#pagesSliderPrev",
      "nextButton": "#pagesSliderNext"
    });
  }
  // Home page Rooms carousel
  if (document.getElementsByClassName("rooms-carousel")[0]) {
    var roomsSlider = tns({
      "container": '.rooms-carousel__inner',
      "items": 1,
      "slideBy": "page",
      "mouseDrag": true,
      "swipeAngle": true,
      "speed": 400,
      "nav": false,
      "onInit": function onInit() {
        var roomTitles = document.querySelectorAll(".rooms-carousel__room-titles ul li");
        document.addEventListener('click', function (event) {
          if (event.target.classList.contains('rooms-carousel__room-titles__item')) {
            for (var i = 0; i < roomTitles.length; i++) {
              roomTitles[i].classList.remove("active");
            }
            event.target.classList.add("active");
            var gotoSlide = event.target.getAttribute("data-item");
            roomsSlider.goTo(gotoSlide);
          }
        });
      },
      "prevButton": "#roomsCarouselPrev",
      "nextButton": "#roomsCarouselNext"
    });
  }

  if (document.getElementsByClassName("offers-carousel")[0]) {
    setTimeout(function () {
      var otherRoomsSlider = tns({
        container: '.offers-carousel',
        "items": 1,
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        "autoHeight": true,
        "nav": false,
        "prevButton": "#offersSliderPrev",
        "nextButton": "#offersSliderNext",
        "gutter": 25,
        "responsive": {
          "768": {
            "items": 2
          },
          "992": {
            "items": 3
          }
        }
      });
    }, 3000);
  }
});
