/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/22e5c3c3457ca25408c4e1e56746ac4c', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/22e5c3c3457ca25408c4e1e56746ac4c',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "content"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "message"
	      ],
	      "attr": {
	        "value": function () {return this.message}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "logbox"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "inputItem"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "用户名"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "input-style"
	              ],
	              "attr": {
	                "type": "text",
	                "placeholder": "请输入用户名"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "inputItem"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": "密码"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "input-style"
	              ],
	              "attr": {
	                "type": "password",
	                "placeholder": "请输入密码"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "login"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "logintext"
	              ],
	              "attr": {
	                "value": "登陆"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "message": {
	    "paddingBottom": 30,
	    "fontSize": 30,
	    "textAlign": "center"
	  },
	  "inputItem": {
	    "marginTop": 10,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "title": {
	    "width": 100,
	    "fontSize": 25
	  },
	  "input-style": {
	    "fontSize": 25,
	    "width": 200,
	    "height": 40
	  },
	  "content": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "logbox": {
	    "width": 400,
	    "padding": 20,
	    "border": "solid 1px black"
	  },
	  "login": {
	    "alignItems": "center"
	  },
	  "logintext": {
	    "marginTop": 30,
	    "background": "#ffde00",
	    "color": "#000000",
	    "width": 200,
	    "padding": 5,
	    "textAlign": "center"
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    message: '蜂巢互助验车工作台'
	  }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);