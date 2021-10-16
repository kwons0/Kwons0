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

/***/ "./src/js/inc.js":
/*!***********************!*\
  !*** ./src/js/inc.js ***!
  \***********************/
/***/ (() => {

eval("$(function(){\n\n    $('header').load('inc.html header > div',complete);\n    $('.mail').load('inc.html .mail > div');\n\n    function complete(){\n        const menuBtn = document.querySelector('.burger'),\n            menu = document.querySelector('.menu');\n\n        menuBtn.addEventListener('click',function(){\n            if( menuBtn.classList.contains('active')){\n                menuBtn.classList.remove('active');\n                menu.classList.remove('active');\n            }else{\n                menuBtn.classList.add('active');\n                menu.classList.add('active');\n            }\n        })\n\n        const mql = window.matchMedia(\"screen and (max-width: 1280px)\");\n        \n        $('.menu > div span').on({\n            mouseenter : function(){\n                if( mql.matches ) return;\n                $(this).children().css({ 'transform' : 'translateY('+ -$(this).height() +'px)'})\n            },\n            mouseleave : function(){\n                $(this).children().css({ 'transform' : 'translateY(0px)'})\n            }\n        })\n        \n    }\n\n});\n\n//# sourceURL=webpack://kwons0pack/./src/js/inc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/inc.js"]();
/******/ 	
/******/ })()
;