$(document).scroll(function() {

    var innerHeight = $(window).innerHeight(),
        scrollTop = $(window).scrollTop();

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

    // 메인 이미지 width 조정
    if( ( innerHeight - scrollTop ) <  ($('.detail').offset().top -30) ){
        $('.start p').addClass('active');
    }else{
        $('.start p').removeClass('active');
    }

    // 시장 목록 가로 이동
    var market = $('.row1 > div'),
        mHeight = market.offset().top,
        mWidth = market.width(),
        marketY = ((innerHeight + scrollTop - mHeight) / mWidth) *200 ;
    if( ((innerHeight) + scrollTop ) >= $('.row1 > div').offset().top  ){
        $('.row1 > div').css({ 'transform' : 'translateX(-' + marketY * 2 +'px)'})
    };


    // 메인 디바이스 이미지 세로 이동
    var main1 = $('.line2 li:nth-of-type(1) p img'),
        main2 = $('.line2 li:nth-of-type(2) p img'),

        deHeight1 = main1.offset().top,
        deWidth1 = main1.width(),
        device1Y = ((innerHeight + scrollTop - deHeight1) / deWidth1) ;
    if( (innerHeight + scrollTop ) >= main1.offset().top  ){
        main1.css({ 'transform' : 'translateY( -' + device1Y * 40 +'px)'})
        main2.css({ 'transform' : 'translateY( -' + device1Y * 70 +'px)'})
    };

    // 배경색
    if( ((innerHeight/3) + scrollTop ) >= $('.row3').offset().top ){
        $('body').css({ 'background-color' : '#eaeaea'});
        if( scrollTop  >= $('.row5').offset().top - innerHeight){
            $('body').css({ 'background-color' : 'transparent'})
        }
    }else{
        $('body').css({ 'background-color' : 'transparent'})
    }

    // 뉴스 스와이프 가로 이동
    var newsCon = $('.line5 div p:nth-of-type(2)'),
        height = newsCon.offset().top,
        newsWidth = newsCon.width(),
        calc = ((innerHeight + scrollTop - height) / newsWidth) *200 ;

    if( ((innerHeight) + scrollTop ) >= newsCon.offset().top  ){
        newsCon.css({ 'transform' : 'translateX(-' + calc *5 +'px)'})
        $('.line5 div span:nth-of-type(2)').css({ 'width': 'calc(10% + ' + calc*2 + 'px)' });
    };

    // footer 배경 opacity, scale
    var height = $('footer').offset().top,
    footerHeight = $('footer').height();
    calc = (innerHeight + scrollTop - height) / footerHeight;

    $('.spanBg').css({ 'opacity': 1.8 - calc });
    
    var scale = (100 * (calc/8 + 1) );
    $('footer a').css({'background-size': scale + '%'});

});