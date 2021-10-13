let timer;

$(document).ready(function() {
    $('.start').css({ 'opacity':'1', 'transform' : 'translateY(0px)'})
});

$(document).scroll(function() {

    var innerHeight = $(window).innerHeight(),
        scrollTop = $(window).scrollTop();


    // 메인 이미지 width 조정
    if( ( innerHeight - scrollTop ) <  ($('.detail').offset().top -30) ){
        $('.start p').addClass('active');
    }else{
        $('.start p').removeClass('active');
    }


    var height = $('.line3').offset().top,
        lineHeight = $('.line3').height();
        calc = ((innerHeight + scrollTop - height) / lineHeight) *200 ;

        if( ((innerHeight) + scrollTop ) >= $('.line3').offset().top  ){
            $('.swipePz').css({ 'transform' : 'translate(-50%,' + calc *2 +'px)'})
        }

    // 빨간 배경
    if( ((innerHeight/3) + scrollTop ) >= $('.row3').offset().top ){
        $('body').css({ 'background-color' : '#d91a33'});
        if( scrollTop  >= $('.row4').offset().top ){
            $('body').css({ 'background-color' : 'transparent'})
        }
    }else{
        $('body').css({ 'background-color' : 'transparent'})
    }

    // 배경 바뀔 때 헤더 색 변경
    if( scrollTop >= $('.row3 > article').offset().top ){
        $('.burger, .logo, .mail').addClass('black')
        if( scrollTop >= $('.row4').offset().top ){
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
        if( (innerHeight + scrollTop) > $(contit).eq(i).offset().top + ($(contit).eq(i).outerHeight()/2) ){
            $(contitH).eq(i).css({'opacity':'1'});
            $(contitH).eq(i).css({ 'transform' : 'translateY(0)'})

            $(contitP).eq(i).css({'opacity':'1'});
            $(contitP).eq(i).css({ 'transform' : 'translateY(0)'})
        }
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

    if( scrollTop + innerHeight < ($('footer').offset().top + ($('footer').height()/3)) ){
        $('.timebar span').removeClass('active');
        $('.timebar span').css({ 'transition' : '0s'})
    }else{
        $('.timebar span').addClass('active')
        $('.timebar span').css({ 'transition' : '8s'})
        timer = setTimeout(function(){
            location.href = '../market.html'
        },8000);
    }

});