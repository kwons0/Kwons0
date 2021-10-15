$(function(){

    $('header').load('inc.html header > div',complete);
    $('.mail').load('inc.html .mail > div');

    function complete(){
        const menuBtn = document.querySelector('.burger'),
            menu = document.querySelector('.menu');

        menuBtn.addEventListener('click',function(){
            if( menuBtn.classList.contains('active')){
                menuBtn.classList.remove('active');
                menu.classList.remove('active');
            }else{
                menuBtn.classList.add('active');
                menu.classList.add('active');
            }
        })

        const mql = window.matchMedia("screen and (max-width: 1280px)");
        
        $('.menu > div span').on({
            mouseenter : function(){
                if( mql.matches ) return;
                $(this).children().css({ 'transform' : 'translateY('+ -$(this).height() +'px)'})
            },
            mouseleave : function(){
                $(this).children().css({ 'transform' : 'translateY(0px)'})
            }
        })
        
    }

});