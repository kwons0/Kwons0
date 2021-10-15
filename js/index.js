// 로딩 페이지
const MAE = document.querySelector('.loading article h3')
const mql = window.matchMedia("screen and (max-width: 1024px)");

$(document).ready(function() {

    // good morning afternoon evening
    let ndate = new Date();
    let hours = ndate.getHours();
    let message = hours < 12 ? 'Morning!' : hours < 18 ? 'Afternoon!' : 'Evening!';
    MAE.innerHTML = message;


    // ~ typing animation
    let typingIdx=0,
        typingTxt =  MAE.innerText;
        splitTxt = typingTxt.split("");

    let tyInt = setInterval(typing,200)

    function typing(){ 
       if(typingIdx<splitTxt.length){
            $(".typing").append(splitTxt[typingIdx]);
            typingIdx++; 
        }else{ 
            clearInterval(tyInt); 
        } 
    }  

    // 로딩페이지 사라짐 효과
    setTimeout(function(){
        $('.loadBg').addClass('active')
    },2500);
    $('.loading').delay(3600).fadeOut(1000);

    // setTimeout(function(){
    //     $('.loading').css({ transform: 'translateY(100%)'})
    // },3500);
});


// 메인 텍스트 ~~ 싶은 
setInterval( () => {
    $('.hello ul').animate({
       marginTop : -$('.hello').height()
    },() => {
        $('.hello ul li:nth-of-type(1)').appendTo('.hello ul');
        $('.hello ul').animate({
            marginTop : 0
        },0)
    })
},2000)


// 슬라이더
let len = $('.sl').length,
    delta, num = 0, move, asBtn = [], width, time;
const nav = document.querySelector('.nav');

// nav a 태그 페이지 수대로 넣기
for(let i=1; i<($('.sl').length-1); i++){
    asBtn += `<p>
                <span>Project&nbsp&nbsp${i}</span>
                <a></a>
            </p>`
}
nav.innerHTML = asBtn;


// 프로젝트 스크롤 이벤트
$(window).on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -40;
    if( mql.matches ) return;
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta < 0){
            if(num < len-1) num++; //down

        }else{
            if(num > 0) num--;   //up

            if( num == 1 ){
                $('html,body').animate({   scrollLeft : $(window).width() * (num-1)   });
            }
            if( num == (len-2) ){
                $('html,body').animate({  scrollTop : $(window).height()  });
            }
        }
        if(num < len-1) autoNext(0);
        ani();
        headColor();
    },100);
});

// 타임바
function autoNext(e){
    width = e;
    clearInterval(time)
    time = setInterval( () => {
        if( width == 100){ 
            width=e;
            num++;
            ani();
            headColor();
        }else{
            width++;
            $('.timeBar span').css({ 'width' : width + '%', transition : '.1s'})
        }
        if( num == len-1 || num == 0) clearInterval(time); return;
    },50)
}

// aside nav fuction
$('.nav p').on('click',function(){
    num = ($(this).index() + 1);
    ani();
    width=0;
    if( num == 1 ){
        $('html,body').animate({   scrollLeft : $(window).width() * (num-1)   });
    }
})

// top btn
$('.top a').on('click', () => {
    init();
})

// 새고고침 초기화
function init(){
    setTimeout(function(){
        num=0;
        $('html,body').scrollTop(0);
        $('html,body').scrollLeft(0)
    
        $('.warp').css({ 'transform': 'translateY(0px)'});
        $('.burger, .logo, .mail, .nav, .ps').removeClass('black')
        $('.nav').css({ opacity : '0'})
    },300)
}
init();

// num 맞춰서 화면 슬라이드 + nav
function ani(){
    if( num <= 1 || num == 6){
        $('html,body').animate({  scrollTop : $(window).height() * num  });
    }else{
        $('html,body').animate({   scrollLeft : $(window).width() * (num-1)   });
        $('footer').css({  transform : 'translateX(' + ($(window).width() * (num-1)) + 'px)'  })
    }

    $('.nav a').removeClass('active')
    $('.nav a').eq(num-1).addClass('active')
};


function headColor(){
    // 헤더 색  변경
    if( num != 0 ){
        //흰색로고
        $('.burger, .logo, .mail, .ps').addClass('black')
        $('.burger, .logo, .mail, .ps').css({ transition : '.5s'});

        // 메인 1페이지에서 네비게이션, top 보이기
        $('.nav, .top').css({ opacity : '1'})
    }else{
        $('.burger, .logo, .mail, .ps').removeClass('black')
        $('.burger, .logo, .mail, .ps').css({ transition : '.5s'});

        // 메인 1페이지에서 네비게이션, top 감추기
        $('.nav, .top').css({ opacity : '0'})
    }
    
    // 푸터 도달 했을 때 ps 가리기 & nav, top 위치 고정
    if( num == 6 ){
        $('.nav, .top').addClass('fixedOn')
        $('.nav a').eq(num-2).addClass('active') // 마지막 a active 고정

        $('.ps').css({ opacity : '0'})
        $('.ps, .nav, .top').css({ transition : '0s'});
    }else{
        $('.nav, .top').removeClass('fixedOn')

        $('.ps').css({ opacity : '1'})
        $('.ps, .nav, .top').css({ transition : '.5s'});
    };
}

// 프로젝트 제목 화살표→→→, tool 애니메이션
$('.sl article a').on({
    mouseenter : function(){
        $('.sl article > span').css({ 'margin-left':'30px'})
        $('.sl article > span').css({ 'opacity':'1'})

        $(this).siblings('.tool').find('small').eq(0).css({ 'transform' : 'translateY(-28px)'})
        $(this).siblings('.tool').find('small').eq(1).css({ 'transform' : 'translateY(-28px)'})
    },
    mouseleave : function(){
        $('.sl article > span').css({ 'margin-left':'0'})
        $('.sl article > span').css({ 'opacity':'0'})

        $(this).siblings('.tool').find('small').eq(0).css({ 'transform' : 'translateY(0)'})
        $(this).siblings('.tool').find('small').eq(1).css({ 'transform' : 'translateY(0)'})
    }
})

// 푸터 호버하면 텍스트 위로 슬라이드
$('.right div span').on({
    mouseenter : function(){
        $(this).children().eq(0).css({ 'transform' : 'translateY(-60px)'})
        $(this).children().eq(1).css({ 'transform' : 'translateY(-60px)'})
    },
    mouseleave : function(){
        $(this).children().eq(0).css({ 'transform' : 'translateY(0px)'})
        $(this).children().eq(1).css({ 'transform' : 'translateY(0px)'})
    }
})