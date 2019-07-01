;(function(win,doc,$){

	var $win = $(win);
	var $doc = $(doc);

		$doc.ready(function(){
			var $faArrows = $('.fa-arrows-alt');
			var $firstP = $('#fl-resp');

				$faArrows.on('click',function(){
					$firstP.animate({
						opacity: 1
					})
				})
				$faArrows.on('mouseleave',function(){
					$firstP.animate({
						opacity: 0
					},500);
				})

			var $grid = $('.fa-th');
			var $scndP = $('#scnd-p');

				$grid.on('click',function(){
					$scndP.animate({
						opacity: 1
					})
				})
				$grid.on('mouseleave',function(){
					$scndP.animate({
						opacity: 0
					},500);
				})

			var $jQue = $('.fa-archive');
			var $trdP = $('#trd-p');

				$jQue.on('click',function(){
					$trdP.animate({
						opacity: 1
					})
				})
				$jQue.on('mouseleave',function(){
					$trdP.animate({
						opacity: 0
					},500);
				})

			var $code = $('.fa-code');
			var $frthP = $('#frth-p');
				$code.on('click',function(){
					$frthP.animate({
						opacity: 1
					})
				})
				$code.on('mouseleave',function(){
					$frthP.animate({
						opacity: 0
					},500);
				})
		})
								
})(window,document,jQuery)