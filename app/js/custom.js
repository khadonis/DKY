
/*! my custom javascript file */

//menu panel
$('.menu-toggle').click(function () {
  $('.menu').toggleClass('opened');
  $(this).toggleClass('active');
  $('.header').toggleClass('static');
  $('.krtl-header').toggleClass('static');
});

//Youtube Videos

var player;
var player2;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video1', {
    height: '450',
    width: '585',
    videoId: videoId_1,
    events: {
      'onReady': onPlayerReady
    }
  });
  player2 = new YT.Player('video2', {
    height: '450',
    width: '585',
    videoId: videoId_2,
    events: {
      'onReady': onPlayerReady2
    }
  });
}
var videoId_1 = 'NBldK9HYe6k';
var videoId_2 = 'NhsJY7Zf6cc';
var linkVideo = 'http://img.youtube.com/vi/' + videoId_1 + '/0.jpg';
var linkVideo2 = 'http://img.youtube.com/vi/' + videoId_2 + '/0.jpg';
$('#videoRun').css('background-image', 'url(' + linkVideo + ')');
$('#videoRun2').css('background-image', 'url(' + linkVideo2 + ')');
function onPlayerReady(event) {
  $('#videoRun').click(function () {
    $(this).hide();
    player.playVideo();
  });
}
function onPlayerReady2(event) {
  $('#videoRun2').click(function () {
    $(this).hide();
    player2.playVideo();
  });
}






//Sliders
var vid = document.getElementById('video1'),vid2 = document.getElementById('video2');

function playVid(vid) {
  vid.play();
}
function pauseVid(vid) {
  vid.pause();
}
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

    if (swiper.realIndex == 0 ) {
      playVid(vid);
    } else {
      pauseVid(vid);
    };
    if (swiper.realIndex == 1 ) {
      playVid(vid2);
    } else {
      pauseVid(vid2);
    };

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
  prevButton: '.swiper-krtl-btn-prev'
  /* onSlideChangeStart: function () {
    $('.krtl-tnt-aciklama .head li').find('a').removeClass('active');
    $('.krtl-tnt-aciklama .head li').eq(swiperKrtl.activeIndex).find('a').addClass('active');
  } */
});


var swiperKrtlVideo = new Swiper('.krtl-video-slider-container', {
  speed: 400,
  nextButton: '.swiper-krtl-btn-next',
  prevButton: '.swiper-krtl-btn-prev',
  onSlideChangeStart: function () {
    $('.krtl-tnt-aciklama .head li').find('a').removeClass('active');
    $('.krtl-tnt-aciklama .head li').eq(swiperKrtlVideo.activeIndex).find('a').addClass('active');
    if (swiperKrtlVideo.activeIndex == 0) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
    if (swiperKrtlVideo.activeIndex == 1) {
      player2.playVideo();
    } else {
      player2.pauseVideo();
    }
  }
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
  spaceBetween: 40,
  breakpoints: {
    425: {
      spaceBetween: 0
    }
  }
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
    $('#plans li').find('a').removeClass('active');
    $('#plans li').eq(swiperKrtlPlans.activeIndex).find('a').addClass('active');
    $('#plansMobile li').find('a').removeClass('active');
    $('#plansMobile li').eq(swiperKrtlPlans.activeIndex).find('a').addClass('active');
  }
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
linkOutSlide($('#plans li'), swiperKrtlPlans);
linkOutSlide($('#plansMobile li'), swiperKrtlPlans);
linkOutSlide($('.rooms li'), swiperKrtlPlan1);
linkOutSlide($('.rooms2 li'), swiperKrtlPlan2);
linkOutSlide($('.rooms3 li'), swiperKrtlPlan3);
linkOutSlide($('.rooms4 li'), swiperKrtlPlan4);

//html5 video






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
// function setWidths(wrapperDiv) {
//   var width = $(wrapperDiv + ' img').width();
//   $(wrapperDiv).width(width);
//   $(wrapperDiv + ' .mask').width(width);

// };
// setWidths('.hero-proj');
// setWidths('.standart-proj');

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


//bootstrap modal popup convert to lightbox
$('a.thumb').click(function (event) {
  event.preventDefault();
  var src = $(this).attr('href');
  var content = $('.modal-body');
  content.empty();
  content.html('<img src="' + src + '">');
  $('.modal-profile').modal('{show:true}');
});

/*  $('.krtl-video-slider-container .videoFrame').each(function () {
  var src = $(this).attr('src');
  vidcode = src.split('/').pop().split('?').shift();
  var link = 'http://img.youtube.com/vi/' + vidcode + '/0.jpg';
  var $this = $(this);
  $this.siblings().css('background-image', 'url(' + link + ')');
  $this.siblings('.iframe-image').click(function () {
    $(this).hide();
    $this.attr('src', src + '&autoplay=1');
  });
  swiperKrtlVideo.slideNext(function () {
    $this.stopVideo();
  });
  swiperKrtlVideo.slidePrev(function () {
    $this.stopVideo();
  });
});  */


