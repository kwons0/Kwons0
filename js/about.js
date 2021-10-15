const sense = document.querySelector('.hello > div'),
    senseTyping = document.querySelector('.hello > div b:nth-of-type(1)'),
    fire = document.querySelectorAll('.face > p'),
    faceImg = document.querySelector('.face > figure');
let delta, num = 0, move, timer;

const mql = window.matchMedia("screen and (max-width: 1024px)");



$(document).ready(function() {
    if( mql.matches ){
        $(faceImg).addClass('active');
    }
});


// ~ typing animation
let typingIdx=0,
    typingTxt =  senseTyping.innerText;
    splitTxt = typingTxt.split("");

// let tyInt = setInterval(typing,200)

setInterval(typing,200);

function typing(){ 
    if(typingIdx<splitTxt.length){
        $(".typing").append(splitTxt[typingIdx]);
        typingIdx++; 
    }else{ 
        clearInterval(); 
    } 
} 


// 얼굴 바꾸기
$(document).scroll(function() {
    if( mql.matches ) return;
    if( $(window).scrollTop() >= ($('.hello figure').offset().top)/2 ){
        $(fire).addClass('active');
        $(faceImg).addClass('active');
    }else{
        $(fire).removeClass('active');
        $(faceImg).removeClass('active');
    }
});



// 스크롤 
$(window).on('mousewheel DOMMouseScroll',function(e){
    if( mql.matches ){return;}
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -40;
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta < 0){
            if(num < 3) num++; //down
        }else{
            if(num > 0) num--;   //up
        }
        $('html,body').animate({ 
            scrollTop : $(window).height() * num 
        });
        if( num == 1){
            setTimeout( ()=>{
                $('.hello figure p').addClass('active');
                $('.hello h2').addClass('active');
            },500)
        }else{
            $('.hello figure p').removeClass('active');
            $('.hello h2').removeClass('active');
        }
    },100);

    //푸터 타임바
    clearTimeout(timer);

    if( num !== 2 ){
        $('.timebar span').removeClass('active');
        $('.timebar span').css({ 'transition' : '0s', 'transition-delay' : '.5s'})
    }else{
        $('.timebar span').addClass('active')
        $('.timebar span').css({ 'transition' : '8s', 'transition-delay' : '0s'})
        timer = setTimeout(function(){
            location.href = '../project.html'
        },8000);
    }


});