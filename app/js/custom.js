
/*! my custom javascript file */

$('.menu-toggle').click(function () {
  $('.menu').toggleClass('opened');
  $(this).toggleClass('active');
  $('.header').toggleClass('static');
});

//Slider

var activeClassTxt = '.swiper-pagination-bullet-active .res', bullts = ".swiper-pagination-bullet";
function addTxt(sira, txtM) {
  $(bullts + ':eq(' + (sira - 1) + ')').html('<div class="res">' + txtM + '</div>');
}
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  watchSlidesProgress: true,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  keyboardControl: true,
  //effect: "fade",
  speed: 1000,
  loop: true,
  autoplay: 3000,
  queueStartCallbacks: true,
  onInit: function (swiper) {
    setTimeout(function () {
      addTxt(1, 'DKY Sahil');
      addTxt(2, 'DKY On');
      addTxt(3, 'DKY Kartal');
      $(activeClassTxt).show();
    }, 500);
  },
  onAfterResize: function (swiper) {
    addTxt(1, 'DKY Sahil');
    addTxt(2, 'DKY On');
    addTxt(3, 'DKY Kartal');
    $(activeClassTxt).show();
  },
  onSlideChangeStart: function (swiper) {
    $('.res').hide();
    $(activeClassTxt).show();
  }
});
var searchButon = '.languages .search-btn', searchDiv = '.search', closeButon = '.close-search';
$(searchButon).click(function () {
  $(searchDiv).addClass('opened');
  
});
$(closeButon).click(function () {
  $(searchDiv).removeClass('opened');
});