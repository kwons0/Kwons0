const mql = window.matchMedia("screen and (max-width: 1024px)"),
    mqlM = window.matchMedia("screen and (max-width: 700px)");
// if( mql.matches ) return;
setTimeout(function() {
    $('.con').addClass('active')
}, 300);

setTimeout(function() {
    if( mqlM.matches ) return;
    $('.con article h2').css({ 'transform' : 'translateX(70px)'})
    $('.con article h2').css({ 'opacity' : '1'})
    if( mql.matches ){
        $('.con article h2').css({ 'transform' : 'translateX(40px)'})
    }
}, 500);

setTimeout(function() {
    if( mqlM.matches ) return;
    $('.con article p').css({ 'transform' : 'translateX(70px)'})
    $('.con article p').css({ 'opacity' : '1'})
    if( mql.matches ){
        $('.con article p').css({ 'transform' : 'translateX(40px)'})
    }
}, 700);

setTimeout(function() {
    if( mqlM.matches ) return;
    $('.con article span').css({ 'transform' : 'translateX(70px)'})
    $('.con article span').css({ 'opacity' : '1'})
    if( mql.matches ){
        $('.con article span').css({ 'transform' : 'translateX(40px)'})
    }
}, 1000);


$('.con').on({
    mouseenter : function(){
        if( mql.matches ) return;
        $(this).children().find('small').eq(0).css({ 'transform' : 'translateY(-20px)'})
        $(this).children().find('small').eq(1).css({ 'transform' : 'translateY(-20px)'})
    },
    mouseleave : function(){
        if( mql.matches ) return;
        $(this).children().find('small').eq(0).css({ 'transform' : 'translateY(0)'})
        $(this).children().find('small').eq(1).css({ 'transform' : 'translateY(0)'})
    }
})

let timer;

$(document).scroll(function() {
    if( mql.matches ) return;
    var innerHeight = $(window).innerHeight(),
        scrollTop = $(window).scrollTop();

    // next 푸터 타임바
    clearTimeout(timer);

    if( scrollTop + innerHeight < ($('footer').offset().top + 150) ){
        $('.timebar span').removeClass('active');
        $('.timebar span').css({ 'transition' : '0s'})
    }else{
        $('.timebar span').addClass('active')
        $('.timebar span').css({ 'transition' : '8s'})
        timer = setTimeout(function(){
            location.href = '../contact.html'
        },8000);
    }
});