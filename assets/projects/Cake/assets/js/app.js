$(document).ready(function() {
	
	var $canvas_btn = $('#mobile-menu-btn');
	var $canvas_frame = $('#mobile-menu-frame');

	$canvas_btn.on('click', function() {
		if($canvas_frame.hasClass('open')) {
			$canvas_frame.removeClass('open');
			return;
		}
		$canvas_frame.addClass('open');	
	});

	window.ontouchstart = function(e) {
	 	if(!e.target.matches('div.canvas-btn')) {
	 		if($canvas_frame.hasClass('open')) {
		 		$canvas_frame.removeClass('open');
				return;
	 		}
	 	}
	 }
});