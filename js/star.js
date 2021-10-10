$(document).scroll(function() {

    var innerHeight = $(window).innerHeight(),
        scrollTop = $(window).scrollTop();


    // 메인 이미지 width 조정
    if( ( innerHeight - scrollTop ) <  ($('.detail').offset().top -30) ){
        $('.start p').addClass('active');
    }else{
        $('.start p').removeClass('active');
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
    
});