'use strict';

//fallback ready document
function readyDoc(fn) {
  var d = document;
  d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
}

readyDoc(function () {
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
});
