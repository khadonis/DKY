
/*! my custom javascript file */

//menu panel
$('.menu-toggle').click(function () {
  $('.menu').toggleClass('opened');
  $(this).toggleClass('active');
  $('.header').toggleClass('static');
  $('.krtl-header').toggleClass('static');
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
var swiperKrtl = new Swiper('.krtl-slider-container', {
  direction: 'vertical',
  speed: 400,
  nextButton: '.swiper-krtl-btn-next',
  prevButton: '.swiper-krtl-btn-prev',
  onSlideChangeStart: function () {
    $('.krtl-tnt-aciklama .head li').find('a').removeClass('active');
    $('.krtl-tnt-aciklama .head li').eq(swiperKrtl.activeIndex).find('a').addClass('active');
  }
});
var swiperKrtlVideo = new Swiper('.krtl-video-slider-container', {
  speed: 400,
  nextButton: '.swiper-krtl-btn-next',
  prevButton: '.swiper-krtl-btn-prev',
});
var swiperKrtlGaleri = new Swiper('.kartal-galeri-slider-container', {
  speed: 400,
  effect: 'fade',
  //prevButton: '.kg-btn-prev',
  //nextButton: '.kg-btn-next',
  onSlideChangeStart: function () {
    $('.kartal-galeri .head div').find('a').removeClass('active');
    $('.kartal-galeri .head div').eq(swiperKrtlGaleri.activeIndex).find('a').addClass('active');
  },
  spaceBetween: 40
});
var swiperKrtlMimari = new Swiper('.kg-mimari-slider-container', {
  speed: 400,
  nextButton: '.kg-btn-next',
  prevButton: '.kg-btn-prev',
  spaceBetween: 40
});
var swiperKrtlIcMimari = new Swiper('.kg-icmimari-slider-container', {
  speed: 400,
  nextButton: '.kg-btn-next',
  prevButton: '.kg-btn-prev',
  spaceBetween: 40
});
var swiperKrtlODaire = new Swiper('.kg-odaire-slider-container', {
  speed: 400,
  nextButton: '.kg-btn-next',
  prevButton: '.kg-btn-prev',
  spaceBetween: 40
});
var swiperKrtlPlans = new Swiper('.plans-slider-container', {
  speed: 400,
  spaceBetween: 40,
  onSlideChangeStart: function () {
    $('.plans-menu li').find('a').removeClass('active');
    $('.plans-menu li').eq(swiperKrtlPlans.activeIndex).find('a').addClass('active');
  },
});
var swiperKrtlPlan1 = new Swiper('.plan-1-slide-container', {
  speed: 400,
  //direction:'vertical',
  effect: 'fade',
  spaceBetween: 40,
  onSlideChangeStart: function () {
    $('.rooms li').find('a').removeClass('active');
    $('.rooms li').eq(swiperKrtlPlan1.activeIndex).find('a').addClass('active');
  },
});







var swiperKrtlPlan2 = new Swiper('.plan-2-slide-container', {
    speed: 400,
    //direction:'vertical',
    effect: 'fade',
    spaceBetween: 40,
    onSlideChangeStart: function () {
      $('.rooms2 li').find('a').removeClass('active');
      $('.rooms2 li').eq(swiperKrtlPlan2.activeIndex).find('a').addClass('active');
    },
  });

  var swiperKrtlPlan3 = new Swiper('.plan-3-slide-container', {
    speed: 400,
    //direction:'vertical',
    effect: 'fade',
    spaceBetween: 40,
    onSlideChangeStart: function () {
      $('.rooms3 li').find('a').removeClass('active');
      $('.rooms3 li').eq(swiperKrtlPlan3.activeIndex).find('a').addClass('active');
    },
  });
  var swiperKrtlPlan4 = new Swiper('.plan-4-slide-container', {
    speed: 400,
    //direction:'vertical',
    effect: 'fade',
    spaceBetween: 40,
    onSlideChangeStart: function () {
      $('.rooms4 li').find('a').removeClass('active');
      $('.rooms4 li').eq(swiperKrtlPlan4.activeIndex).find('a').addClass('active');
    },
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

function linkOutSlide(link, slider) {
  link.each(function (index) {
    link.eq(index).find('a').click(function () {
      slider.slideTo(index);
    });
  });
};
linkOutSlide($('.krtl-tnt-aciklama .head li'), swiperKrtl);
linkOutSlide($('.krtl-tnt-aciklama .head li'), swiperKrtlVideo);
linkOutSlide($('.kartal-galeri .head div'), swiperKrtlGaleri);
linkOutSlide($('.plans-menu li'), swiperKrtlPlans);
linkOutSlide($('.rooms li'), swiperKrtlPlan1);
linkOutSlide($('.rooms2 li'), swiperKrtlPlan2);
linkOutSlide($('.rooms3 li'), swiperKrtlPlan3);
linkOutSlide($('.rooms4 li'), swiperKrtlPlan4);






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


