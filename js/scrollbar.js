$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        dh = $(document).height();
        wh = $(window).height();
        scrollPercent = (scroll / (dh-wh)) * 100 ;
        $('#progressbar').css('height' , scrollPercent + '%')
    })
})