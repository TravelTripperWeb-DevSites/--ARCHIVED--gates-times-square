//fallback ready document
function readyDoc(fn) {
  var d = document;
  (d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
}

readyDoc(function() {

  var weatherKey = 'b03f57fc9998146fc56895a9b59d1661';
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", 'https://api.darksky.net/forecast/' + weatherKey + '/25.792240,-80.134850?units=us', true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var weatherDetails = JSON.parse(this.responseText);
      console.log(weatherDetails);
      var html = '<div class="weather-wrap__weather__icon"><i class="wi ' + weatherDetails.hourly.icon + '"></i></div><div class="weather-wrap__weather__temp"><span>' + Math.round(weatherDetails.currently.temperature) + '&deg;F</span></div><div class="weather-wrap__weather__credits"><a href="https://darksky.net/poweredby/" aria-hidden="true" rel="nofollow" target="_blank">Powered by Dark Sky</a></div>';
      document.getElementById("weather").innerHTML = html;
    }
  };
  xhttp.send();


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
      "nextButton": "#pagesSliderNext",
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
      "onInit": function() {
        let roomTitles = document.querySelectorAll(".rooms-carousel__room-titles ul li");
        document.addEventListener('click', function(event) {
          if (event.target.classList.contains('rooms-carousel__room-titles__item')) {
            for (var i = 0; i < roomTitles.length; i++) {
              roomTitles[i].classList.remove("active");
            }
            event.target.classList.add("active");
            let gotoSlide = event.target.getAttribute("data-item");
            roomsSlider.goTo(gotoSlide);
          }
        });
      },
      "prevButton": "#roomsCarouselPrev",
      "nextButton": "#roomsCarouselNext",
    });
  }

  if (document.getElementsByClassName("items-carousel")[0]) {
    setTimeout(function() {
      var otherRoomsSlider = tns({
        container: '.items-carousel',
        "items": 1,
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400,
        "autoHeight": true,
        "nav": false,
        "prevButton": "#itemsSliderPrev",
        "nextButton": "#itemsSliderNext",
        "gutter": 25,
        "responsive": {
          "768": {
            "items": 2
          },
          "992": {
            "items": 3
          }
        },
      });
    }, 3000);
  }

});
