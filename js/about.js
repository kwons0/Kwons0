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

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ (() => {

eval("const sense = document.querySelector('.hello > div'),\n    senseTyping = document.querySelector('.hello > div b:nth-of-type(1)'),\n    fire = document.querySelectorAll('.face > p'),\n    faceImg = document.querySelector('.face > figure');\nlet delta, num = 0, move, timer;\n\nconst mql = window.matchMedia(\"screen and (max-width: 1024px)\");\n\n\n\n$(document).ready(function() {\n    if( mql.matches ){\n        $(faceImg).addClass('active');\n    }\n});\n\n\n// ~ typing animation\nlet typingIdx=0,\n    typingTxt =  senseTyping.innerText;\n    splitTxt = typingTxt.split(\"\");\n\n// let tyInt = setInterval(typing,200)\n\nsetInterval(typing,200);\n\nfunction typing(){ \n    if(typingIdx<splitTxt.length){\n        $(\".typing\").append(splitTxt[typingIdx]);\n        typingIdx++; \n    }else{ \n        clearInterval(); \n    } \n} \n\n\n// 얼굴 바꾸기\n$(document).scroll(function() {\n    if( mql.matches ) return;\n    if( $(window).scrollTop() >= ($('.hello figure').offset().top)/2 ){\n        $(fire).addClass('active');\n        $(faceImg).addClass('active');\n    }else{\n        $(fire).removeClass('active');\n        $(faceImg).removeClass('active');\n    }\n});\n\n\n\n// 스크롤 \n$(window).on('mousewheel DOMMouseScroll',function(e){\n    if( mql.matches ){return;}\n    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -40;\n    clearTimeout(move);\n    move = setTimeout(function(){\n        if(delta < 0){\n            if(num < 3) num++; //down\n        }else{\n            if(num > 0) num--;   //up\n        }\n        $('html,body').animate({ \n            scrollTop : $(window).height() * num \n        });\n        if( num == 1){\n            setTimeout( ()=>{\n                $('.hello figure p').addClass('active');\n                $('.hello h2').addClass('active');\n            },500)\n        }else{\n            $('.hello figure p').removeClass('active');\n            $('.hello h2').removeClass('active');\n        }\n    },100);\n\n    //푸터 타임바\n    clearTimeout(timer);\n\n    if( num !== 2 ){\n        $('.timebar span').removeClass('active');\n        $('.timebar span').css({ 'transition' : '0s', 'transition-delay' : '.5s'})\n    }else{\n        $('.timebar span').addClass('active')\n        $('.timebar span').css({ 'transition' : '8s', 'transition-delay' : '0s'})\n        timer = setTimeout(function(){\n            location.href = '../kwons0/project.html'\n        },8000);\n    }\n\n\n});\n\n//# sourceURL=webpack://kwons0pack/./src/js/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/about.js"]();
/******/ 	
/******/ })()
;