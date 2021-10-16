/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/pixar.js":
/*!*************************!*\
  !*** ./src/js/pixar.js ***!
  \*************************/
/***/ (() => {

eval("let timer;\nconst mql = window.matchMedia(\"screen and (max-width: 1024px)\");\n\n$(document).ready(function() {\n $('.start').css({ 'opacity':'1', 'transform' : 'translateY(0px)'})\n});\n\n$(document).on(\"touchstart\",function(){\n    var scrollTop = $(window).scrollTop();\n  \n    if( mql.matches ){\n        if( scrollTop > 100 ){\n            $('.start p').addClass('active');\n        }else{\n            $('.start p').removeClass('active');\n        }\n    }\n});\n\n\n\n// 스크롤이벤트\n$(document).scroll(function() {\n\n    var innerHeight = $(window).innerHeight(),\n        scrollTop = $(window).scrollTop();\n\n    // 메인 이미지 width 조정\n    if( !mql.matches ){\n        if( ( innerHeight - scrollTop ) <  ($('.detail').offset().top -30) ){\n            $('.start p').addClass('active');\n        }else{\n            \n            $('.start p').removeClass('active');\n        }\n    }\n\n    // 배경 바뀔 때 헤더 색 변경\n    if( scrollTop >= $('.row2').offset().top ){\n        $('.burger, .logo, .mail').addClass('black')\n        if( scrollTop >= $('.row3').offset().top ){\n            $('.burger, .logo, .mail').removeClass('black')\n        }\n    }else{\n        $('.burger, .logo, .mail').removeClass('black')\n    }\n\n\n    // contit 스크롤 이벤트\n    const contit = document.querySelectorAll('.contit'),\n        contitH = document.querySelectorAll('.contit h2'),\n        contitP = document.querySelectorAll('.contit p');\n\n    for( let i=0; i<contit.length; i++){\n        if( (innerHeight + scrollTop) > $(contit).eq(i).offset().top + ($(contit).eq(i).outerHeight()/3) ){\n            $(contitH).eq(i).css({'opacity':'1'});\n            $(contitH).eq(i).css({ 'transform' : 'translateY(0)'})\n\n            $(contitP).eq(i).css({'opacity':'1'});\n            $(contitP).eq(i).css({ 'transform' : 'translateY(0)'})\n        }\n    }\n\n    \n\n    // 영화 가로스크롤\n    var leftOffset = $('.line7 .contit').offset().top,\n        halfHeight = $('.line7').height()/2,\n        mleft = (innerHeight + scrollTop - leftOffset)/10 + (halfHeight/5),\n        leftStart = leftOffset - halfHeight +130;\n\n    if( (innerHeight + scrollTop ) > leftStart ){\n        $('.slmov').css({'transform' : 'translateX(-' + mleft + 'px)'})\n    }\n\n\n    // footer 배경 opacity, scale\n    var height = $('footer').offset().top,\n        footerHeight = $('footer').height();\n        calc = (innerHeight + scrollTop - height) / footerHeight;\n\n    $('.spanBg').css({ 'opacity': 1.8 - calc });\n\n    var scale = (100 * (calc/8 + 1) );\n    $('footer a').css({'background-size': scale + '%'});\n\n\n    // next 푸터 타임바\n    clearTimeout(timer);\n\n    if( mql.matches ) return;\n    if( scrollTop + innerHeight < ($('footer').offset().top + ($('footer').height()/3)) ){\n        $('.timebar span').removeClass('active');\n        $('.timebar span').css({ 'transition' : '0s'})\n    }else{\n        $('.timebar span').addClass('active')\n        $('.timebar span').css({ 'transition' : '8s'})\n        timer = setTimeout(function(){\n            location.href = '../pizza.html'\n        },8000);\n    }\n\n});\n\n//# sourceURL=webpack://kwons0pack/./src/js/pixar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pixar.js"]();
/******/ 	
/******/ })()
;