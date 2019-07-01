;(function(doc,win, $){

	$(document).ready(function()  {

		var $mobile_menu_btn = $('#mobile-menu-btn');
 		var $mobile_menu_frame = $('#mobile-menu-frame');
 		var $document_wrap = $('.document-wrap');


 			$mobile_menu_btn.on('click', function() {
	 		
	 		if($mobile_menu_frame.hasClass( 'open' )) {
	 			$mobile_menu_frame.removeClass('open');
	 			$document_wrap.hasClass('blur-effect');
	 			$document_wrap.removeClass('blur-effect');
	 			return;
	 		}
	 		    $mobile_menu_frame.addClass('open');
	 		    $document_wrap.addClass('blur-effect');
	 		    return;
	 		    
	 	});

			var $h_carousel = $('#h-carousel');
			
			$h_carousel.owlCarousel({
	 		items: 1, 
	 		autoplay: true,
	 		autoplayTimeout: 5000,
	 		autoplaySpeed: 1900,
	 		autoplayHoverPause: true,
	 		nav: true,
	 		loop: true,
	 		dots: true
 		});
	});


    /*POP UP WINDOW*/
	var $doc = $(doc);
	var $win = $(win);

	var createModal = function(data) {

		var template = '<div class="modal screen">';
			template +=		'<div class="modal-shell">';
			template +=			'<button class="close-btn"></button>';
			template +=			'<div class="head">';
			if(!!data) {
			template +=				'<h4> '+ data.title  + '</h4>';
			}
			template +=			'</div>';
			template +=			'<div class="content">';
			if(!!data){
			template +=				'<p>' + data.message + '</p>';
			}
			template +=			'<div>';
			template +=			'<div class="footer">';
			template +=				'<button class="btn_blue close-btn"><span>Close</span></button>';
			template +=				'<button class="btn_green"><span>Ok</span></button>';
			template +=			'<div>';
			template +=		'<div>';
			template +=	'<div>';

			var modal = $(template)
			return {
				template: template,
				open:function() {
					$('body').append(modal);

					var self = this;
					var $closeButton = $('.close-btn');
					$closeButton.on('click',function(){
						self.close();
					});

					modal.on('click',function(e){
						if($(e.target).hasClass('screen')) {
							self.close();
						}
					})
					
				},
				close:function() {
					modal.remove();
				}
			}
	}


	$doc.ready(function(){
		var $btn = $('#btn');
			$btn.on('click',function(){
				var modal = new createModal({
					title: 'You want to learn more ....',
					message: 'But the only thing you could do , is to close the pop up window :)))'
				});
				modal.open();
			})
	})


})(document,window,jQuery)