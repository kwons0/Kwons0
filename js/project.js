
setTimeout(function() {
    $('.con').addClass('active')
}, 300);


setTimeout(function() {
    $('.con article h2').css({ 'transform' : 'translateX(70px)'})
    $('.con article h2').css({ 'opacity' : '1'})
}, 500);

setTimeout(function() {
    $('.con article p').css({ 'transform' : 'translateX(70px)'})
    $('.con article p').css({ 'opacity' : '1'})
}, 700);

setTimeout(function() {
    $('.con article span').css({ 'transform' : 'translateX(70px)'})
    $('.con article span').css({ 'opacity' : '1'})
}, 1000);


$('.con').on({
    mouseenter : function(){
        $(this).children().find('small').eq(0).css({ 'transform' : 'translateY(-20px)'})
        $(this).children().find('small').eq(1).css({ 'transform' : 'translateY(-20px)'})
    },
    mouseleave : function(){
        $(this).children().find('small').eq(0).css({ 'transform' : 'translateY(0)'})
        $(this).children().find('small').eq(1).css({ 'transform' : 'translateY(0)'})
    }
})

let timer;

$(document).scroll(function() {

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