
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
  //nextButton: '.swiper-button-next',
  //prevButton: '.swiper-button-prev',
  autoplay: 3000,
  loop: true
});

var swiperHaberler = new Swiper('.basin-slide-container', {
  speed: 400,
  nextButton: '.swiper-haber-btn-next',
  prevButton: '.swiper-haber-btn-prev',
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: 2000,
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 15
    }
  }
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
  $('.video').attr('src', 'https://www.youtube.com/embed/hAxZF94QFks?autoplay=1').siblings().hide();
});

//kurumsal side menu
if ($(window).width() > 767) {
  $('.side-menu').height($('.content-inner').height() - 60);
}

$(function () {
  var current = location.pathname;
  $('.side-menu a').each(function () {
    var $this = $(this);
    var pieces = current.split(/[\s/]+/);
    // if the current path is like this link, make it active
    if ($this.attr('href').indexOf(pieces[pieces.length - 1]) !== -1) {
      $('.side-menu a').removeClass('active');
      $this.addClass('active');
    }
  });
});

//projeler responsive set
/*function setWidths(wrapperDiv) {
  var width = $(wrapperDiv + ' img').width();
  $(wrapperDiv).width(width);
  $(wrapperDiv + ' .mask').width(width);

};
setWidths('.hero-proj');
setWidths('.standart-proj');*/

function resizes(targetEl) {
  $(targetEl).each(function () {
    var h = $(this).width();
    var ph = $(this).parent().width();
    $(this).height(h);
    $(this).parent().height(ph);
    $(this).find('img').height(h);
  });
};
resizes('.tp-box-field a');
$(window).resize(function () {
  resizes('.tp-box-field a');
});
//yasal uyari
var yUyariDiv = $('.y-uyari'), yUyariBtn = $('.y-uyari-btn');
yUyariBtn.click(function () {
  yUyariDiv.slideDown();
});


