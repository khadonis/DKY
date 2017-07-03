
/*! my custom javascript file */

//menu panel
$('.menu-toggle').click(function () {
  $('.menu').toggleClass('opened');
  $(this).toggleClass('active');
  $('.header').toggleClass('static');
});

//Sliders

var activeClassTxt = '.swiper-pagination-bullet-active .res', bullts = ".swiper-pagination-bullet";
function addTxt(sira, txtM) {
  $(bullts + ':eq(' + (sira - 1) + ')').html('<div class="res">' + txtM + '</div>');
}
var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  watchSlidesProgress: true,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  //keyboardControl: true,
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

var swiperOduller = new Swiper('.odul-slide-container', {
  speed: 400,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});


//search panel
var searchButon = '.languages .search-btn', searchDiv = '.search', closeButon = '.close-search';
$(searchButon).click(function () {
  $(searchDiv).addClass('opened');

});
$(closeButon).click(function () {
  $(searchDiv).removeClass('opened');
});

//video
$('.video-wrapper .mask').click(function (params) {
  $('.video').attr('src','https://www.youtube.com/embed/hAxZF94QFks?autoplay=1').siblings().hide();
});