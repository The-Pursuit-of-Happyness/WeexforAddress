/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(145)
	var __weex_style__ = __webpack_require__(146)
	var __weex_script__ = __webpack_require__(147)
	
	__weex_define__('@weex-component/000bcb6db69caa95f9387aa789e13106', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/000bcb6db69caa95f9387aa789e13106',undefined,undefined)

/***/ },

/***/ 4:
/***/ function(module, exports) {

	/**
	 * Created by huben on 03/01/2017.
	 */
	
	exports.getBaseUrl = function(bundleUrl) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('hive.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    } else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    } else {
	        var host = '172.168.1.71:8080';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }
	
	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') { // 浏览器 webview
	            nativeBase = 'http://' + host + '/web/index.html?page=../dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }
	    return nativeBase;
	};

/***/ },

/***/ 145:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "bottombox"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": function () {return this.message}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "buttonbox"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "button"
	          ],
	          "events": {
	            "click": "backhome"
	          },
	          "attr": {
	            "value": function () {return this.backtext}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 146:
/***/ function(module, exports) {

	module.exports = {
	  "bottombox": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "title": {
	    "fontSize": 40,
	    "alignItems": "center",
	    "textAlign": "center"
	  },
	  "buttonbox": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "button": {
	    "fontSize": 30,
	    "marginTop": 150,
	    "width": 300,
	    "height": 60,
	    "lineHeight": 60,
	    "textAlign": "center",
	    "backgroundColor": "#ffde00"
	  }
	}

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	var utils = __webpack_require__(4);
	module.exports = {
	    data: function () {return {
	        message: "保存失败",
	        backtext: "返回首页"
	    }},
	    created: function created() {},
	    methods: {
	        backhome: function backhome() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	            this.$openURL(base + "home.js");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9zYXZlZmFpbGVkLndlPzVhZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzP2EwMDUqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9zYXZlZmFpbGVkLndlPzE1NWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmVmYWlsZWQud2U/MjAyNiIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZWZhaWxlZC53ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7OztBQ2JBLGlDQUNBOzs7a0JBR0E7bUJBRUE7QUFIQTtpQ0FJQSxDQUNBOzt1Q0FFQTsrQ0FDQTt5Q0FDQTtrQ0FDQTtrQ0FDQTtBQUVBO0FBUEE7QUFQQSIsImZpbGUiOiJkaXN0XFxzYXZlZmFpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NhdmVmYWlsZWQud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc2F2ZWZhaWxlZC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NhdmVmYWlsZWQud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvMDAwYmNiNmRiNjljYWE5NWY5Mzg3YWE3ODllMTMxMDYnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvMDAwYmNiNmRiNjljYWE5NWY5Mzg3YWE3ODllMTMxMDYnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2F2ZWZhaWxlZC53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGh1YmVuIG9uIDAzLzAxLzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5nZXRCYXNlVXJsID0gZnVuY3Rpb24oYnVuZGxlVXJsKSB7XHJcbiAgICBidW5kbGVVcmwgPSBuZXcgU3RyaW5nKGJ1bmRsZVVybCk7XHJcbiAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKSA+PSAwO1xyXG5cclxuICAgIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ2hpdmUuYXBwJykgPiAwO1xyXG4gICAgaWYgKGlzQW5kcm9pZEFzc2V0cykge1xyXG4gICAgICAgIG5hdGl2ZUJhc2UgPSAnZmlsZTovL2Fzc2V0cy9kaXN0Lyc7XHJcbiAgICB9IGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSAnMTcyLjE2OC4xLjcxOjgwODAnO1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWMoYnVuZGxlVXJsKTtcclxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIGhvc3QgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraTlpITpnIDms6jmhI/kuIDkuIssdGFiYmFyIOeUqOeahOebtOaOpeaYr2pzYnVuZGxlIOeahOi3r+W+hCzkvYbmmK9uYXZpZ2F0b3LmmK/nm7TmjqXot7PovazliLDmlrDpobXpnaLkuIrnmoQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7IC8vIOa1j+iniOWZqCB3ZWJ2aWV3XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy93ZWIvaW5kZXguaHRtbD9wYWdlPS4uL2Rpc3QvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVCYXNlO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImJvdHRvbWJveFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWVzc2FnZX1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJ1dHRvbmJveFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidXR0b25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImJhY2tob21lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrdGV4dH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9zYXZlZmFpbGVkLndlXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYm90dG9tYm94XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYnV0dG9uYm94XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidXR0b25cIjoge1xuICAgIFwiZm9udFNpemVcIjogMzAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMTUwLFxuICAgIFwid2lkdGhcIjogMzAwLFxuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwibGluZUhlaWdodFwiOiA2MCxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZGUwMFwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9zYXZlZmFpbGVkLndlXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJib3R0b21ib3hcIj5cclxuICAgIDx0ZXh0IGNsYXNzID1cInRpdGxlXCI+e3ttZXNzYWdlfX08L3RleHQ+XHJcbiAgIDxkaXYgY2xhc3MgPVwiYnV0dG9uYm94XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3MgPVwiYnV0dG9uXCIgb25jbGljayA9XCJiYWNraG9tZVwiPnt7YmFja3RleHR9fTwvdGV4dD5cclxuICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy91dGlsc1wiKTtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBtZXNzYWdlOlwi5L+d5a2Y5aSx6LSlXCIsXHJcbiAgICAgICAgYmFja3RleHQ6XCLov5Tlm57pppbpobVcIixcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgIH0sXHJcbiAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIGJhY2tob21lOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBidW5kbGVVcmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmw7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gIHV0aWxzLmdldEJhc2VVcmwoYnVuZGxlVXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlXCIrYmFzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwoYmFzZSArIFwiaG9tZS5qc1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgLmJvdHRvbWJveHtcclxuICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgIH1cclxuICAgLnRpdGxle1xyXG4gICAgICBmb250LXNpemU6NDBweDtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgfVxyXG4gICAuYnV0dG9uYm94e1xyXG4gICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgfVxyXG4gICAuYnV0dG9ue1xyXG4gICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICBtYXJnaW4tdG9wOjE1MHB4O1xyXG4gICAgICB3aWR0aDozMDBweDtcclxuICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjYwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmRlMDA7XHJcbiAgIH1cclxuPC9zdHlsZT5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zYXZlZmFpbGVkLndlPzMwNzMwN2JjIl0sInNvdXJjZVJvb3QiOiIifQ==