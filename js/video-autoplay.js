$(document).ready(function() {
    $('.video').waypoint(function (direction) {
        var currentVideo = $(this).attr('id');
        if (direction==="down") {
            document.getElementById(currentVideo).play();    
        }else{
            document.getElementById(currentVideo).pause();
        }
    }, { offset: '20%' })
    $('.video').waypoint(function (direction) {
        var currentVideo = $(this).attr('id');
        if (direction==="down") {
            document.getElementById(currentVideo).pause();
        }else{
            document.getElementById(currentVideo).play();
        }
    }, { offset: '-40%'})
});