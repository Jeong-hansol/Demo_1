var bannerOffset = $('.menu').offset();
  $(window).scroll( function() {  // window에 스크롤링이 발생하면
    if($(document).scrollTop() > bannerOffset.top ) {   // 위치 및 사이즈를 파악하여 미리 정한 css class를 add 또는 remove 한다.
      $('.menu').addClass('menuFixed');
    }
    else {
      $('.menu').removeClass('menuFixed');
    }
  });

  // Mobile Menu
  $("#menu-media").hide();
  $("#menu-btn").click(function(){
  $("#menu-media").slideToggle();
  });

  jQuery.fn.niceScroll = function() {
  	$(this).click(function(e) {
  		var h = $(this).attr('href'),
  		target;

  		if (h.charAt(0) == '#' && h.length > 1 && (target = $(h)).length > 0){
  			var pos = Math.max(target.offset().top, 0);
  			e.preventDefault();
  			$('body,html').animate({
  				scrollTop : pos
  			}, 'slow', 'swing');
  		}
  	});
  };
  $('.scroll').niceScroll();


$(function() {
  $('.pofol_box > li > a').on('mouseover focus', function(){
    $(this).children('figure').addClass('pofol_hover');
  });

  $('.pofol_box > li > a').on('mouseleave', function(){
    $(this).children('figure').removeClass('pofol_hover');
  });
});


setInterval(function () {
  $(".date").text(moment().tz("Asia/seoul").format("MMM Do"));
  $(".clock").text(moment().tz("Asia/seoul").format("HH:mm:ss"));
}, 0);
