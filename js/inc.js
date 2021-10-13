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


        $('.menu > div span').on({
            mouseenter : function(){
                $(this).children().css({ 'transform' : 'translateY(-110px)'})
            },
            mouseleave : function(){
                $(this).children().css({ 'transform' : 'translateY(0px)'})
            }
        })
        
    }

});