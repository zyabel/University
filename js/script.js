$(document).ready(function(){
	var h = $(window).height();

	$(".block .anim").addClass('animated zoomIn');
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $("#ex2").offset().top) {
			$("#ex2 .post").css({visibility:"visible"});
			$("#ex2 .post").eq(0).addClass('animated bounceInLeft');
			$("#ex2 .post").eq(1).addClass('animated bounceInRight');
		} 
		if ( ($(this).scrollTop()+h) >= $("#ex3").offset().top) {
			$("#ex3 .post").css({visibility:"visible"});
			$("#ex3 .post").eq(0).addClass('animated bounceInLeft');
			$("#ex3 .post").eq(1).addClass('animated bounceInRight');
		} 
		if ( ($(this).scrollTop()+h) >= $("#ex4").offset().top) {
			$("#ex4 .post").css({visibility:"visible"});
			$("#ex4 .post").addClass('animated zoomIn');
		} 
		
		if ( $(this).scrollTop() == 0 ) {
			$("#ex2 .post, #ex3 .post, #ex4 .post").each(function(){
				if ( $(this).hasClass('last') ) {
					$(this).removeClass().addClass('post last');
				} else {
					$(this).removeClass().addClass('post');
				}
				$(this).css({visibility:"hidden"});
			});
		}
	});
});

$(document).ready(function(){
  $('.slider').bxSlider({
    slideWidth: 278,
    minSlides: 1,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 50
  });

  $(document).ready(function(){
    PopUpHide();
  });
  function PopUpShow(){
      $(".popup-wrap").show();
  }
  function PopUpHide(){
      $(".popup-wrap").hide();
  }

  $(document).ready(function(){
    PopUpHide1();
  });
  function PopUpShow1(){
      $(".popup-2-wrap").show();
  }
  function PopUpHide1(){
      $(".popup-2-wrap").hide();
  }

});

