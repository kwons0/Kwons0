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

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ (() => {

eval("const mql = window.matchMedia(\"screen and (max-width: 1024px)\"),\n    mqlM = window.matchMedia(\"screen and (max-width: 700px)\");\n// if( mql.matches ) return;\nsetTimeout(function() {\n    $('.con').addClass('active')\n}, 300);\n\nsetTimeout(function() {\n    if( mqlM.matches ) return;\n    $('.con article h2').css({ 'transform' : 'translateX(70px)'})\n    $('.con article h2').css({ 'opacity' : '1'})\n    if( mql.matches ){\n        $('.con article h2').css({ 'transform' : 'translateX(40px)'})\n    }\n}, 500);\n\nsetTimeout(function() {\n    if( mqlM.matches ) return;\n    $('.con article p').css({ 'transform' : 'translateX(70px)'})\n    $('.con article p').css({ 'opacity' : '1'})\n    if( mql.matches ){\n        $('.con article p').css({ 'transform' : 'translateX(40px)'})\n    }\n}, 700);\n\nsetTimeout(function() {\n    if( mqlM.matches ) return;\n    $('.con article span').css({ 'transform' : 'translateX(70px)'})\n    $('.con article span').css({ 'opacity' : '1'})\n    if( mql.matches ){\n        $('.con article span').css({ 'transform' : 'translateX(40px)'})\n    }\n}, 1000);\n\n\n$('.con').on({\n    mouseenter : function(){\n        if( mql.matches ) return;\n        $(this).children().find('small').eq(0).css({ 'transform' : 'translateY(-20px)'})\n        $(this).children().find('small').eq(1).css({ 'transform' : 'translateY(-20px)'})\n    },\n    mouseleave : function(){\n        if( mql.matches ) return;\n        $(this).children().find('small').eq(0).css({ 'transform' : 'translateY(0)'})\n        $(this).children().find('small').eq(1).css({ 'transform' : 'translateY(0)'})\n    }\n})\n\nlet timer;\n\n$(document).scroll(function() {\n    if( mql.matches ) return;\n    var innerHeight = $(window).innerHeight(),\n        scrollTop = $(window).scrollTop();\n\n    // next 푸터 타임바\n    clearTimeout(timer);\n\n    if( scrollTop + innerHeight < ($('footer').offset().top + 150) ){\n        $('.timebar span').removeClass('active');\n        $('.timebar span').css({ 'transition' : '0s'})\n    }else{\n        $('.timebar span').addClass('active')\n        $('.timebar span').css({ 'transition' : '8s'})\n        timer = setTimeout(function(){\n            location.href = '../contact.html'\n        },8000);\n    }\n});\n\n//# sourceURL=webpack://kwons0pack/./src/js/project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/project.js"]();
/******/ 	
/******/ })()
;