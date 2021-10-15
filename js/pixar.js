let timer;
const mql = window.matchMedia("screen and (max-width: 1024px)");

$(document).ready(function() {
 $('.start').css({ 'opacity':'1', 'transform' : 'translateY(0px)'})
});

$(document).on("touchstart",function(){
    var scrollTop = $(window).scrollTop();
  
    if( mql.matches ){
        if( scrollTop > 100 ){
            $('.start p').addClass('active');
        }else{
            $('.start p').removeClass('active');
        }
    }
});



// 스크롤이벤트
$(document).scroll(function() {

    var innerHeight = $(window).innerHeight(),
        scrollTop = $(window).scrollTop();

    // 메인 이미지 width 조정
    if( !mql.matches ){
        if( ( innerHeight - scrollTop ) <  ($('.detail').offset().top -30) ){
            $('.start p').addClass('active');
        }else{
            
            $('.start p').removeClass('active');
        }
    }

    // 배경 바뀔 때 헤더 색 변경
    if( scrollTop >= $('.row2').offset().top ){
        $('.burger, .logo, .mail').addClass('black')
        if( scrollTop >= $('.row3').offset().top ){
            $('.burger, .logo, .mail').removeClass('black')
        }
    }else{
        $('.burger, .logo, .mail').removeClass('black')
    }


    // contit 스크롤 이벤트
    const contit = document.querySelectorAll('.contit'),
        contitH = document.querySelectorAll('.contit h2'),
        contitP = document.querySelectorAll('.contit p');

    for( let i=0; i<contit.length; i++){
        if( (innerHeight + scrollTop) > $(contit).eq(i).offset().top + ($(contit).eq(i).outerHeight()/3) ){
            $(contitH).eq(i).css({'opacity':'1'});
            $(contitH).eq(i).css({ 'transform' : 'translateY(0)'})

            $(contitP).eq(i).css({'opacity':'1'});
            $(contitP).eq(i).css({ 'transform' : 'translateY(0)'})
        }
    }

    

    // 영화 가로스크롤
    var leftOffset = $('.line7 .contit').offset().top,
        halfHeight = $('.line7').height()/2,
        mleft = (innerHeight + scrollTop - leftOffset)/10 + (halfHeight/5),
        leftStart = leftOffset - halfHeight +130;

    if( (innerHeight + scrollTop ) > leftStart ){
        $('.slmov').css({'transform' : 'translateX(-' + mleft + 'px)'})
    }


    // footer 배경 opacity, scale
    var height = $('footer').offset().top,
        footerHeight = $('footer').height();
        calc = (innerHeight + scrollTop - height) / footerHeight;

    $('.spanBg').css({ 'opacity': 1.8 - calc });

    var scale = (100 * (calc/8 + 1) );
    $('footer a').css({'background-size': scale + '%'});


    // next 푸터 타임바
    clearTimeout(timer);

    if( mql.matches ) return;
    if( scrollTop + innerHeight < ($('footer').offset().top + ($('footer').height()/3)) ){
        $('.timebar span').removeClass('active');
        $('.timebar span').css({ 'transition' : '0s'})
    }else{
        $('.timebar span').addClass('active')
        $('.timebar span').css({ 'transition' : '8s'})
        timer = setTimeout(function(){
            location.href = '../pizza.html'
        },8000);
    }

});