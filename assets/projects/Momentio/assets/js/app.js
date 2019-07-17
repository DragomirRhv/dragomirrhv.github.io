;(function(win,doc,$){

	var $doc = $(doc);
	var $win = $(win);

	var $menuHolder = $('.menu-holder');
	var $menu = $('.menu');
	var $navMenu = $('.nav-menu');

		$menuHolder.on('click',function(){
			if($menu.hasClass('open') || $navMenu.hasClass('visible')){
				setTimeout(function(){
				$menu.removeClass('open');
				},1550);
				$navMenu.removeClass('visible')
				return;
			}
			$menu.addClass('open');
			$navMenu.addClass('visible');
		})

	var $h_carousel = $('#h-carousel');

			$h_carousel.owlCarousel({
	 		items: 1, 
	 		autoplay: true,
	 		autoplayTimeout: 3000,
	 		autoplaySpeed: 1900,
	 		autoplayHoverPause: true,
	 		nav: true,
	 		loop: true,
	 		dots: true,
 		});

	var $wrapper = $('.wrapped');

	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

    if (scroll >= $('.separator2').offset().top) { 
      $wrapper.addClass('slide');
    } else if(scroll <= $('.separator2').offset().top+$('.separator2').height()){ 
      $wrapper.removeClass('slide')
    }
});

})(window,document,jQuery)