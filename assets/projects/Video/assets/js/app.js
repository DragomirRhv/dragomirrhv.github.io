;(function(win,doc,$){

    var $win = $(win);
    var $doc = $(doc);

    $doc.ready(function(){

        var $video = $('video');
        var $playBtn = $('.play');
        var $timeSpan = $('.time-span');
        var $duration = $('.duration');
        var $videoFrame = $('.video-frame');

        $playBtn.on('click',function(){
            $(this).removeClass('repeat');

            if(!$video[0].paused) {
                $video[0].pause();
                $(this).removeClass('pause');
                return;
            }
            
            $video[0].play();
            $(this).addClass('pause');
        });
        
        $video.on('timeupdate', function(){
           var currentLenght = - 1 * (100 - ((this.currentTime / this.duration)*100));
           $timeSpan.css({
               left: currentLenght + '%'
           })

           if( !this.ended) {
               $videoFrame.removeClass('ended');
               $playBtn.removeClass('repeat');
           }
        });

        $video.on('ended', function(){
                $playBtn.removeClass('pause');
                $playBtn.addClass('repeat');
                $videoFrame.addClass('ended');
        });
        
        var timeSpanHandler = function(event) {
            var full_Width = $(this).width();
            console.log(full_Width);
            var ratio = (event.pageX - $(this).offset().left) / full_Width
            var time = ratio * $video[0].duration;


            if(ratio < 0) { ratio < 0 }
            if(ratio > 100) { ratio > 100 }

            $video[0].currentTime = time;
        }

        $duration.on('click', timeSpanHandler); 

        /* $doc.on('click',function(){
            alert();
        }) */

        /* $doc.on('click', function(e){
            console.log(e.pageX);
        }) */

    });

})(window,document,jQuery)