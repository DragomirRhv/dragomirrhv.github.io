;(function(win,doc,$){

	var $win = $(win);
	var $doc = $(doc);


		/*Fixed menu*/

		$doc.ready(function(){
			var $mainNav = $('#main-navigation');
			var $openNav = $('#menu');
			var $closeNav = $('#close');
			

				$openNav.on('click',function(){
					$mainNav.addClass('open');
				})

				$closeNav.on('click',function(){
					$mainNav.removeClass('open');
				})
		})

		/*Scroll Button*/
			var scrlButton = $('.scroll');

				$win.scroll(function() {
				  if ($win.scrollTop() > 1200) {
				    scrlButton.addClass('show');
				  } else {
				    scrlButton.removeClass('show');
				  }
				});

				scrlButton.on('click', function(e) {
				  e.preventDefault();
				  $('html, body').animate({scrollTop:0,behaviour:'smooth'},3000);
				});

		/*Expand Images Variables*/

			var $firstImage = $('.first');
			var $secondImage = $('.second');
			var $thirdImage = $('.third');
			var $fourthImage = $('.fourth');
			var $fifthImage = $('.fifth');
			var $sixthImage = $('.sixth');
			var $seventhImage = $('.seventh');
			var $eightImage = $('.eight');

			var $showSection = $('.show-section')

			var $showSectionOne = $('#show-section-one');
			var $showSectionTwo = $('#show-section-two');
			var $showSectionThree = $('#show-section-three');
			var $showSectionFour = $('#show-section-four');
			var $showSectionFive = $('#show-section-five');
			var $showSectionSix = $('#show-section-six');
			var $showSectionSeven = $('#show-section-seven');
			var $showSectionEight = $('#show-section-eight');

			var $closeExpandFrame = $('#close-expand-frame');
			var $closeExpandFrameTwo = $('#close-expand-frame-two');
			var $closeExpandFrameThree = $('#close-expand-frame-three');
			var $closeExpandFrameFour = $('#close-expand-frame-four');
			var $closeExpandFrameFive = $('#close-expand-frame-five');
			var $closeExpandFrameSix = $('#close-expand-frame-six');
			var $closeExpandFrameSeven = $('#close-expand-frame-seven');
			var $closeExpandFrameEight = $('#close-expand-frame-eight');

				$firstImage.on('click',function(){
					if($showSectionTwo.hasClass('visible_two') || $showSectionThree.hasClass('visible_three') || $showSectionFour.hasClass('visible_four') || $showSectionFive.hasClass('visible_five') || $showSectionSix.hasClass('visible_six') || $showSectionSeven.hasClass('visible_seven') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_two visible_three visible_four visible_five visible_six visible_seven visible_eight ')
						}
						$showSectionOne.addClass('visible_one');
				})

				$secondImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionThree.hasClass('visible_three') || $showSectionFour.hasClass('visible_four') || $showSectionFive.hasClass('visible_five') || $showSectionSix.hasClass('visible_six') || $showSectionSeven.hasClass('visible_seven') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_one visible_three visible_four visible_five visible_six visible_seven visible_eight ')
						}
						$showSectionTwo.addClass('visible_two');
				})

				$thirdImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionTwo.hasClass('visible_two') || $showSectionFour.hasClass('visible_four') || $showSectionFive.hasClass('visible_five') || $showSectionSix.hasClass('visible_six') || $showSectionSeven.hasClass('visible_seven') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_one visible_two visible_four visible_five visible_six visible_seven visible_eight ')
						}
						$showSectionThree.addClass('visible_three');
				})

				$fourthImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionTwo.hasClass('visible_two') || $showSectionThree.hasClass('visible_three') || $showSectionFive.hasClass('visible_five') || $showSectionSix.hasClass('visible_six') || $showSectionSeven.hasClass('visible_seven') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_one visible_two visible_three visible_five visible_six visible_seven visible_eight ')
						}
						$showSectionFour.addClass('visible_four');
				})

				$fifthImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionTwo.hasClass('visible_two') || $showSectionThree.hasClass('visible_three') || $showSectionFour.hasClass('visible_four') || $showSectionSix.hasClass('visible_six') || $showSectionSeven.hasClass('visible_seven') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_one visible_two visible_three visible_four visible_six visible_seven visible_eight ')
						}
						$showSectionFive.addClass('visible_five');
				})

				$sixthImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionTwo.hasClass('visible_two') || $showSectionThree.hasClass('visible_three') || $showSectionFour.hasClass('visible_four') || $showSectionFive.hasClass('visible_five') || $showSectionSeven.hasClass('visible_seven') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_one visible_two visible_three visible_four visible_five visible_seven visible_eight ')
						}
						$showSectionSix.addClass('visible_six');
				})

				$seventhImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionTwo.hasClass('visible_two') || $showSectionThree.hasClass('visible_three') || $showSectionFour.hasClass('visible_four') || $showSectionFive.hasClass('visible_five') || $showSectionSix.hasClass('visible_six') || $showSectionEight.hasClass('visible_eight')){
						$showSection.removeClass('visible_one visible_two visible_three visible_four visible_five visible_six visible_eight ')
						}
						$showSectionSeven.addClass('visible_seven');
				})

				$eightImage.on('click',function(){
					if($showSectionOne.hasClass('visible_one') || $showSectionTwo.hasClass('visible_two') || $showSectionThree.hasClass('visible_three') || $showSectionFour.hasClass('visible_four') || $showSectionFive.hasClass('visible_five') || $showSectionSix.hasClass('visible_six') || $showSectionSeven.hasClass('visible_seven')){
						$showSection.removeClass('visible_one visible_two visible_three visible_four visible_five visible_six visible_seven ')
						}
						$showSectionEight.addClass('visible_eight');
				})

				/*Close Buttons Expand Frames*/

				$closeExpandFrame.on('click',function(){
					$showSectionOne.removeClass('visible_one');				
				})


				$closeExpandFrameTwo.on('click',function(){
					$showSectionTwo.removeClass('visible_two');
				})

				$closeExpandFrameThree.on('click',function(){
					$showSectionThree.removeClass('visible_three');
				})

				$closeExpandFrameFour.on('click',function(){
					$showSectionFour.removeClass('visible_four');
				})

				$closeExpandFrameFive.on('click',function(){
					$showSectionFive.removeClass('visible_five');
				})

				$closeExpandFrameSix.on('click',function(){
					$showSectionSix.removeClass('visible_six');
				})

				$closeExpandFrameSeven.on('click',function(){
					$showSectionSeven.removeClass('visible_seven');
				})

				$closeExpandFrameEight.on('click',function(){
					$showSectionEight.removeClass('visible_eight');
				})


				






				/*Expand Team */
				var $personOne = $('#person-one');
				var $personTwo = $('#person-two');
				var $personThree = $('#person-three');
				var $personFour = $('#person-four');

				var $expandTeamOne = $('.expand-team-one');				
				var $closeExpandTeam = $('#close-expand-team');

				var $expandTeamTwo = $('.expand-team-two');
				var $closeExpandTeamTwo = $('#close-expand-team-two');

				var $expandTeamThree = $('.expand-team-three');
				var $closeExpandTeamThree = $('#close-expand-team-three');

				var $expandTeamFour = $('.expand-team-four');
				var $closeExpandTeamFour = $('#close-expand-team-four');


					

					$personFour.on('mouseenter',function(){
						if($expandTeamOne.hasClass('open-team-one') || $expandTeamTwo.hasClass('open-team-two') || $expandTeamThree.hasClass('open-team-three')){
							$expandTeamOne.removeClass('open-team-one');
							$expandTeamTwo.removeClass('open-team-two');
							$expandTeamThree.removeClass('open-team-three');
						}
						$expandTeamFour.addClass('open-team-four');
					})

					$closeExpandTeamFour.on('click',function(){
						$expandTeamFour.removeClass('open-team-four');
					})

					
					$personThree.on('mouseenter',function(){
						if($expandTeamOne.hasClass('open-team-one') || $expandTeamTwo.hasClass('open-team-two') || $expandTeamFour.hasClass('open-team-four')){
							$expandTeamOne.removeClass('open-team-one');
							$expandTeamTwo.removeClass('open-team-two');
							$expandTeamFour.removeClass('open-team-four');
						}
						$expandTeamThree.addClass('open-team-three');
					})

					$closeExpandTeamThree.on('click',function(){
						$expandTeamThree.removeClass('open-team-three');
					})

					$personTwo.on('mouseenter',function(){
						if($expandTeamOne.hasClass('open-team-one') || $expandTeamThree.hasClass('open-team-three') || $expandTeamFour.hasClass('open-team-four')){
							$expandTeamOne.removeClass('open-team-one');
							$expandTeamThree.removeClass('open-team-three');
							$expandTeamFour.removeClass('open-team-four');
						}
						$expandTeamTwo.addClass('open-team-two');
					})					

					$closeExpandTeamTwo.on('click',function(){
						$expandTeamTwo.removeClass('open-team-two');
					})

					$closeExpandTeam.on('click',function(){
						$expandTeamOne.removeClass('open-team-one')
					})

					$personOne.on('mouseenter',function(){
						if($expandTeamTwo.hasClass('open-team-two') || $expandTeamThree.hasClass('open-team-three') || $expandTeamFour.hasClass('open-team-four')){
							$expandTeamTwo.removeClass('open-team-two');
							$expandTeamThree.removeClass('open-team-three');
							$expandTeamFour.removeClass('open-team-four');
						}
						$expandTeamOne.addClass('open-team-one');
					})


					/*Form keyup not to overlap what you are writting*/

					var $writtingField = $('.w-field');
						$writtingField.each(function(){
							var $this = $(this);

							$this.find('input').on('keyup',function(){
								var $self = $(this)
								if( !!$self.val() ) {
									$this.addClass('not-empty')
									return;
								}
								$this.removeClass('not-empty');
							})

							$this.find('textarea').on('keyup',function(){
								var $self = $(this)
								if( !!$self.val() ) {
									$this.addClass('not-empty')
									return;
								}
								$this.removeClass('not-empty');
							})
						})

						/*Form Validation*/
						var subscribeForm = $('#subscribe');

						var errorStatus = null;
						var errorMessage = '';
						var isValid = false;
						var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


						/*Emails*/
						var validateField = function( settings ) {

							if( !('selector' in settings) || !('pattern' in settings) ) {
								return false;
							}

							var $selector = settings.selector,
								pattern = settings.pattern,
								emailErField = $selector.closest('.w-field').find('p'),
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

						
						/*Subscirbe Form*/
						var $submail = $('#email');
							$submail.on('change',function(){
								validateField({
									selector: $(this),
									pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
								});
							});

							subscribeForm.on('submit',function(e){
								var isValid = true;
								var checkIt = false;

								checkIt = validateField ({
									selector: $submail,
									pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
								})

								if (!checkIt) { isValid = false; }
								if (!isValid) {
									e.preventDefault();
								}
							})

						
})(window,document,jQuery)