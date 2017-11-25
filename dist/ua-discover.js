(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ua"] = factory();
	else
		root["ua"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ua = window.navigator.userAgent;
/* harmony default export */ __webpack_exports__["a"] = (ua);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_browser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_device__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return __WEBPACK_IMPORTED_MODULE_0__core_browser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return __WEBPACK_IMPORTED_MODULE_1__core_device__["a"]; });





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ua__ = __webpack_require__(0);

var isAlipay = /alipay/i.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isBrowser = typeof window !== 'undefined';
var isMobile = /mobile/i.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isQQ = /qq/i.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isWechat = /micromessenger/i.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isWeibo = /weibo/i.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
    isAlipay: isAlipay,
    isBrowser: isBrowser,
    isMobile: isMobile,
    isQQ: isQQ,
    isWechat: isWechat,
    isWeibo: isWeibo
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ua__ = __webpack_require__(0);

var isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isIpad = /(iPad).*OS\s([\d_]+)/.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
var isIos = /(iPhone|iPad|iPod|iOS)/i.test(__WEBPACK_IMPORTED_MODULE_0__ua__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = ({
    isAndroid: isAndroid,
    isIos: isIos,
    isIpad: isIpad,
    isIpod: isIpod,
    isIphone: isIphone
});


/***/ })
/******/ ]);
});