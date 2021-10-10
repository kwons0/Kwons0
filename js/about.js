const sense = document.querySelector('.hello > div'),
    fire = document.querySelectorAll('.face > p'),
    faceImg = document.querySelector('.face > figure');

$(document).scroll(function() {
    if( $(window).scrollTop() >= ($('.hello figure').offset().top)/2 ){
        $(fire).addClass('active');
        $(faceImg).addClass('active');
    }else{
        $(fire).removeClass('active');
        $(faceImg).removeClass('active');
    }
});



let delta, num = 0, move;

$(window).on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -40;
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta < 0){
            if(num < 3) num++; //down
        }else{
            if(num > 0) num--;   //up
        }
        ani();
    },100);
});

function ani(){
    $('html,body').animate({ 
        scrollTop : $(window).height() * num 
    });
};