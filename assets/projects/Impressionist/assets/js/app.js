;(function(win,doc,$){


$(document).ready(function()  {

		var $canvas_btn = $('.mobile-canvas');
		var $canvas_frame = $('#mobile-menu');
		var $close_btn = $('#close-menu');
		var $mobile_logo = $('#mobile-logo');
		var $home = $('#home');
		var $sdemo = $('#sdemo');
		var $fwidth =$('#fwidth');
		var $ddown = $('#ddown');
		var $portfolio = $('#portfolio');
		var $gallery = $('#gallery');
		var $iphone = $('#iphone');
		var $ipad = $('#ipad');
		var $ipod = $('#ipod');
		var $mac = $('#mac');
		var $laptop = $('#laptop');

			/*Mobile menu canvas frame*/

			$canvas_btn.on('click', function() {
			if($canvas_frame.hasClass('open')) {
				$canvas_frame.removeClass('open');
				return;
			}
			$canvas_frame.addClass('open');	
		});


			/*Logo Effects*/

			$laptop.on('mouseenter',function(){
				$mobile_logo.addClass('visible_twelve');
			})
			$laptop.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_twelve');
			})


			$mac.on('mouseenter',function(){
				$mobile_logo.addClass('visible_eleven');
			})
			$mac.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_eleven');
			})


			$ipod.on('mouseenter',function(){
				$mobile_logo.addClass('visible_ten');
			})
			$ipod.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_ten');
			})

			$ipad.on('mouseenter',function(){
				$mobile_logo.addClass('visible_nine');
			})
			$ipad.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_nine');
			})

			$iphone.on('mouseenter',function(){
				$mobile_logo.addClass('visible_eight');
			})
			$iphone.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_eight');
			})

			$home.on('mouseenter',function(){
				$mobile_logo.addClass('visible_two');
			})
			$home.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_two');
			})


			$sdemo.on('mouseenter',function(){
				$mobile_logo.addClass('visible_three');
			})
			$sdemo.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_three');
			})


			$fwidth.on('mouseenter',function(){
				$mobile_logo.addClass('visible_four');
			})
			$fwidth.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_four');
			})


			$ddown.on('mouseenter',function(){
				$mobile_logo.addClass('visible_five');
			})
			$ddown.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_five');
			})


			$portfolio.on('mouseenter',function(){
				$mobile_logo.addClass('visible_six');
			})
			$portfolio.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_six');
			})


			$gallery.on('mouseenter',function(){
				$mobile_logo.addClass('visible_seven');
			})
			$gallery.on('mouseleave',function(){
				$mobile_logo.removeClass('visible_seven');
			})

			/*Mobile menu canvas frame CLOSE button*/


			$close_btn.on('click',function() {
				if($canvas_frame.hasClass('open')) {
				$canvas_frame.removeClass('open');
				return;
				}
			})

			/*Carousel*/

		var $h_carousel = $('#h-carousel');

			$h_carousel.owlCarousel({
	 		items: 1, 
	 		autoplay: true,
	 		autoplayTimeout: 5000,
	 		autoplaySpeed: 1900,
	 		autoplayHoverPause: true,
	 		nav: true,
	 		loop: true,
	 		dots: true,
 		});

			/*Form keyup not to overlap our writing*/

			var formField = $('.form-field');
				formField.each(function(){
					var $this= $(this);

					$this.find('input').on('keyup',function(){
						var $self = $(this)
						if( !!$self.val() ) {
							$this.addClass('not_empty')
							return;
						}
						$this.removeClass('not_empty');
					})
				})

			/*Form Validation*/
				

				var submitForm = $('#submit-form');

				var errorStatus = null;
				var errorMessage = '';
				var isValid = false;
				var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

				var validateField = function( settings ) {

					if( !('selector' in settings) || !('pattern' in settings) ) {
						return false;
					}

					var $selector = settings.selector,
						pattern = settings.pattern,
						emailErField = $selector.closest('.form-field').find('p'),
						value = $selector.val(),
						errorMessage = '',
						isValid = true;

					if ( !value ) {
						errorMessage = 'Email field is required !'
						isValid = false;
					} else if ( !pattern.test($selector.val()) ) {
						errorMessage = 'Invalid Email !';
						isValid = false;
					} else {
						errorMessage = '';
						isValid = true;
					}
					emailErField.text(errorMessage);
					return isValid;
				}

				var validateFieldNames = function( settings ) {

					if( !('selector' in settings) || !('pattern' in settings) ) {
						return false;
					}

					var $selector = settings.selector,
						pattern = settings.pattern,
						nameErField = $selector.closest('.form-field').find('p'),
						value = $selector.val(),
						errorMessage = '',
						isValid = true;

					if ( !value ) {
						errorMessage = 'Name fields are required !'
						isValid = false;
					} else if ( !pattern.test($selector.val()) ) {
						errorMessage = 'First letter must be capital !';
						isValid = false;
					} else {
						errorMessage = '';
						isValid = true;
					}
					nameErField.text(errorMessage);
					return isValid;
				}

				/*Checking two conditions : change and submit*/

					var $email = $('#email');
					var $firstName = $('#first_name');
					var $surName = $('#last_name');

						$email.on('change',function(){

						validateField({
							selector: $(this),
							pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
						});

					});	
						$firstName.on('change',function(){

						validateFieldNames({
							selector: $(this),
							pattern: /^[A-Z]/
						});

					});
						$surName.on('change',function(){

						validateFieldNames({
							selector: $(this),
							pattern: /^[A-Z]/
						});

					});

						submitForm.on('submit',function(e){
							var isValid = true;
							var checkIt = false;

							checkIt = validateField({
							selector: $email,
							pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
						});

							if (!checkIt) {	isValid = false; }

							checkIt = validateFieldNames({
							selector: $firstName,
							pattern: /^[A-Z]/
						});

							if (!checkIt) {	isValid = false; }

							checkIt = validateFieldNames({
							selector: $surName,
							pattern: /^[A-Z]/
						});

							if (!checkIt) { isValid = false; }

							if(!isValid) {
								e.preventDefault();
							}
					})

	});

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
							template +=				'<img src="assets/img/carousel/first_image.png">'
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

							var modal = $(template);

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
							var message = '"There is a great deal of advertising <br> that is much better than the product.<br> When that happens, all that the good <br>advertising will do is put you out<br> of business faster."<br> - Jerry Della Femina'

								$doc.ready(function(){
									var $btn = $('#btn');
										$btn.on('click',function(){
											var modal = new createModal({
												title: 'Impressionist',
												message: message
											});
											modal.open();
										})
								})

})(window,document,jQuery)