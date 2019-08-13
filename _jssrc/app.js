//fallback ready document
function readyDoc(fn) {
  var d = document;
  (d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
}

readyDoc(function() {
  // Home page hero carousel
  if (document.getElementsByClassName("home-hero-slider")[0]) {
    var offersSlider = tns({
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
    var offersSlider = tns({
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
});
