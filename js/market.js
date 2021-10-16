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

/***/ "./src/js/market.js":
/*!**************************!*\
  !*** ./src/js/market.js ***!
  \**************************/
/***/ (() => {

eval("let timer ;\nconst mql = window.matchMedia(\"screen and (max-width: 1024px)\");\n\n$(document).ready(function() {\n    $('.start').css({ 'opacity':'1', 'transform' : 'translateY(0px)'})\n});\n\n\n$(document).scroll(function() {\n\n    var innerHeight = $(window).innerHeight(),\n        scrollTop = $(window).scrollTop();\n\n    // contit 스크롤 이벤트\n    const contit = document.querySelectorAll('.contit'),\n        contitH = document.querySelectorAll('.contit h2'),\n        contitP = document.querySelectorAll('.contit p');\n\n    for( let i=0; i<contit.length; i++){\n        if( (innerHeight + scrollTop) > $(contit).eq(i).offset().top + ($(contit).eq(i).outerHeight()/2) ){\n            $(contitH).eq(i).css({'opacity':'1'});\n            $(contitH).eq(i).css({ 'transform' : 'translateY(0)'})\n\n            $(contitP).eq(i).css({'opacity':'1'});\n            $(contitP).eq(i).css({ 'transform' : 'translateY(0)'})\n\n            if( i == contit.length - 1 ){\n                $('.mark p').css({'opacity':'1', 'transform' : 'translateY(0)'});\n            }\n        }\n    }\n    \n\n    // 메인 이미지 width 조정\n    if( ( innerHeight - scrollTop ) <  ($('.detail').offset().top -30) ){\n        $('.start p').addClass('active');\n    }else{\n        $('.start p').removeClass('active');\n    }\n\n    // 시장 목록 가로 이동\n    var market = $('.row1 > div'),\n        mHeight = market.offset().top,\n        mWidth = market.width(),\n        marketY = ((innerHeight + scrollTop - mHeight) / mWidth) *200 ;\n    if( ((innerHeight) + scrollTop ) >= $('.row1 > div').offset().top  ){\n        $('.row1 > div').css({ 'transform' : 'translateX(-' + marketY * 2 +'px)'})\n    };\n\n\n    // 메인 디바이스 이미지 세로 이동\n    var main1 = $('.line2 li:nth-of-type(1) p img'),\n        main2 = $('.line2 li:nth-of-type(2) p img'),\n\n        deHeight1 = main1.offset().top,\n        deWidth1 = main1.width(),\n        device1Y = ((innerHeight + scrollTop - deHeight1) / deWidth1) ;\n    if( !mql.matches && (innerHeight + scrollTop ) >= main1.offset().top  ){\n        main1.css({ 'transform' : 'translateY( -' + device1Y * 40 +'px)'})\n        main2.css({ 'transform' : 'translateY( -' + device1Y * 70 +'px)'})\n    };\n\n    if( mql.matches && (innerHeight + scrollTop ) >= main1.offset().top  ){\n        main1.css({ 'transform' : 'translateY( -' + device1Y * 20 +'px)'})\n        main2.css({ 'transform' : 'translateY( -' + device1Y * 40 +'px)'})\n    };\n\n    // 배경색\n    if( ((innerHeight/3) + scrollTop ) >= $('.row3').offset().top ){\n        $('body').css({ 'background-color' : '#eaeaea'});\n        if( scrollTop  >= $('.row5').offset().top - innerHeight){\n            $('body').css({ 'background-color' : 'transparent'})\n        }\n    }else{\n        $('body').css({ 'background-color' : 'transparent'})\n    }\n\n    // 뉴스 스와이프 가로 이동\n    var newsCon = $('.line5 div p:nth-of-type(2)'),\n        height = newsCon.offset().top,\n        newsWidth = newsCon.width(),\n        calc = ((innerHeight + scrollTop - height) / newsWidth) *200 ;\n\n    if( !mql.matches && ((innerHeight) + scrollTop ) >= newsCon.offset().top  ){\n        newsCon.css({ 'transform' : 'translateX(-' + calc *5 +'px)'})\n        $('.line5 div span:nth-of-type(2)').css({ 'width': 'calc(10% + ' + calc*2 + 'px)' });\n    };\n\n    if( mql.matches && ((innerHeight) + scrollTop ) >= newsCon.offset().top  ){\n        newsCon.css({ 'transform' : 'translateX(-' + calc/2 +'px)'})\n        $('.line5 div span:nth-of-type(2)').css({ 'width': 'calc(10% + ' + calc/5 + '%)' });\n    };\n\n    // footer 배경 opacity, scale\n    var height = $('footer').offset().top,\n    footerHeight = $('footer').height();\n    calc = (innerHeight + scrollTop - height) / footerHeight;\n\n    $('.spanBg').css({ 'opacity': 1.8 - calc });\n    \n    var scale = (100 * (calc/8 + 1) );\n    $('footer a').css({'background-size': scale + '%'});\n\n\n    // next 푸터 타임바\n    clearTimeout(timer);\n    if( mql.matches) return;\n    if( scrollTop + innerHeight < ($('footer').offset().top + ($('footer').height()/3)) ){\n        $('.timebar span').removeClass('active');\n        $('.timebar span').css({ 'transition' : '0s'})\n    }else{\n        $('.timebar span').addClass('active')\n        $('.timebar span').css({ 'transition' : '8s'})\n        timer = setTimeout(function(){\n            location.href = '../star.html'\n        },8000);\n    }\n\n});\n\n//# sourceURL=webpack://kwons0pack/./src/js/market.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/market.js"]();
/******/ 	
/******/ })()
;