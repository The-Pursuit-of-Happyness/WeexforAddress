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

	var __weex_template__ = __webpack_require__(142)
	var __weex_style__ = __webpack_require__(143)
	var __weex_script__ = __webpack_require__(144)
	
	__weex_define__('@weex-component/5924697f04382301b990a14107e4e503', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/5924697f04382301b990a14107e4e503',undefined,undefined)

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

/***/ 142:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "checkcar"
	      ],
	      "attr": {
	        "value": "验车结果选择"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "resultbox"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "resultbut"
	          ],
	          "events": {
	            "click": "passcheck"
	          },
	          "attr": {
	            "value": "通过"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "resultbox"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "events": {
	            "click": "failed"
	          },
	          "classList": [
	            "resultbut"
	          ],
	          "attr": {
	            "value": "未通过"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 143:
/***/ function(module, exports) {

	module.exports = {
	  "checkcar": {
	    "textAlign": "center",
	    "marginTop": 30,
	    "fontSize": 30,
	    "lineHeight": 60
	  },
	  "resultbox": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "resultbut": {
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginBottom": 50,
	    "backgroundColor": "#ffde00",
	    "color": "#000000",
	    "width": 400,
	    "height": 60,
	    "padding": 10,
	    "fontSize": 25
	  }
	}

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	var utils = __webpack_require__(4);
	module.exports = {
	    data: function () {return {
	        oid: "",
	
	        no: "",
	
	        carno: "",
	
	        name: ""
	    }},
	    ready: function ready() {
	        var storage = __weex_require__('@weex-module/storage');
	        var me = this;
	
	        storage.getItem('orderid', function (e) {
	            me.oid = e.data;
	        });
	        storage.getItem('name', function (e) {
	            me.name = e.data;
	        });
	        storage.getItem('carno', function (e) {
	            me.carno = e.data;
	        });
	        storage.getItem('no', function (e) {
	            me.no = e.data;
	        });
	        console.log(this.oid);
	        console.log(this.name);
	        console.log(this.carno);
	        console.log(this.no);
	    },
	    created: function created() {},
	    methods: {
	        goSite: function goSite() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	            this.$openURL(base + "checkmessage.js");
	        },
	        passcheck: function passcheck() {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                url: "http://api.fengchaohuzhu.com/order/changeStatusOrder?oid=" + self.oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    console.log(response.data);
	                    self.infouser();
	                    self.success();
	                } else {
	                    self.failed();
	                }
	            });
	        },
	
	        infouser: function infouser() {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                url: "http://dev.fengchaohuzhu.com/wx/tmsgUnderwriting?No=" + encodeURI(self.no) + "&CarNo=" + encodeURI(self.carno) + "&Name=" + encodeURI(self.name) + "&orderId=" + self.oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    console.log(response.data);
	                }
	            });
	        },
	        success: function success() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	            this.$openURL(base + "accomplish.js");
	        },
	        failed: function failed() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	            this.$openURL(base + "failed.js");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3VsdC53ZT80NTk3Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcz9hMDA1KioqKioqIiwid2VicGFjazovLy8uL3NyYy9yZXN1bHQud2U/MmQ4NiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzdWx0LndlPzIyZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3VsdC53ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7OztBQ1RBLGlDQUNBOzs7Y0FJQTs7YUFFQTs7Z0JBRUE7O2VBRUE7QUFSQTs2QkFVQTsrQkFDQTtrQkFFQTs7aURBRUE7d0JBQ0E7QUFDQTs4Q0FFQTt5QkFDQTtBQUNBOytDQUVBOzBCQUNBO0FBQ0E7NENBRUE7dUJBQ0E7QUFDQTswQkFDQTswQkFDQTswQkFDQTswQkFDQTtBQUNBO2lDQUVBLENBQ0E7O21DQUVBOytDQUNBO3lDQUNBO2tDQUNBO2tDQUNBO0FBQ0E7eUNBQ0E7a0NBQ0E7d0JBQ0E7O3lCQUVBO3lGQUNBO3VCQUNBO0FBSEEsb0NBSUE7NkVBQ0E7OENBQ0E7MENBQ0E7MEJBQ0E7MEJBQ0E7d0JBQ0E7MEJBQ0E7QUFDQTtBQUNBO0FBRUE7O3VDQUNBO2tDQUNBO3dCQUNBO29CQUNBO3lCQUVBOzZMQUNBO3VCQUNBO0FBSEEsb0NBSUE7NkVBQ0E7OENBQ0E7MENBQ0E7QUFDQTtBQUNBO0FBQ0E7cUNBQ0E7K0NBQ0E7eUNBQ0E7a0NBQ0E7a0NBQ0E7QUFDQTttQ0FDQTsrQ0FDQTt5Q0FDQTtrQ0FDQTtrQ0FDQTtBQUVBO0FBckRBO0FBdkNBIiwiZmlsZSI6ImRpc3RcXHJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyMzM2ODEzOTMzZTgwOWU0MjU2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9yZXN1bHQud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vcmVzdWx0LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vcmVzdWx0LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzU5MjQ2OTdmMDQzODIzMDFiOTkwYTE0MTA3ZTRlNTAzJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzU5MjQ2OTdmMDQzODIzMDFiOTkwYTE0MTA3ZTRlNTAzJyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Jlc3VsdC53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGh1YmVuIG9uIDAzLzAxLzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5nZXRCYXNlVXJsID0gZnVuY3Rpb24oYnVuZGxlVXJsKSB7XHJcbiAgICBidW5kbGVVcmwgPSBuZXcgU3RyaW5nKGJ1bmRsZVVybCk7XHJcbiAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKSA+PSAwO1xyXG5cclxuICAgIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ2hpdmUuYXBwJykgPiAwO1xyXG4gICAgaWYgKGlzQW5kcm9pZEFzc2V0cykge1xyXG4gICAgICAgIG5hdGl2ZUJhc2UgPSAnZmlsZTovL2Fzc2V0cy9kaXN0Lyc7XHJcbiAgICB9IGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSAnMTcyLjE2OC4xLjcxOjgwODAnO1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWMoYnVuZGxlVXJsKTtcclxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIGhvc3QgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraTlpITpnIDms6jmhI/kuIDkuIssdGFiYmFyIOeUqOeahOebtOaOpeaYr2pzYnVuZGxlIOeahOi3r+W+hCzkvYbmmK9uYXZpZ2F0b3LmmK/nm7TmjqXot7PovazliLDmlrDpobXpnaLkuIrnmoQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7IC8vIOa1j+iniOWZqCB3ZWJ2aWV3XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy93ZWIvaW5kZXguaHRtbD9wYWdlPS4uL2Rpc3QvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVCYXNlO1xyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDYgNyA4IDkgMTAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjaGVja2NhclwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIumqjOi9pue7k+aenOmAieaLqVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyZXN1bHRib3hcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVzdWx0YnV0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwYXNzY2hlY2tcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLpgJrov4dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmVzdWx0Ym94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZmFpbGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicmVzdWx0YnV0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5pyq6YCa6L+HXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9yZXN1bHQud2Vcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjaGVja2NhclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiAzMCxcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwibGluZUhlaWdodFwiOiA2MFxuICB9LFxuICBcInJlc3VsdGJveFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwicmVzdWx0YnV0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDMwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZGUwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJ3aWR0aFwiOiA0MDAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nXCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMjVcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL3Jlc3VsdC53ZVxuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIjx0ZW1wbGF0ZT4gXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImNoZWNrY2FyXCI+6aqM6L2m57uT5p6c6YCJ5oupPC90ZXh0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0Ym94XCI+IFxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJyZXN1bHRidXRcIiBvbmNsaWNrID1cInBhc3NjaGVja1wiPumAmui/hzwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRib3hcIj5cclxuICAgICAgICAgIDx0ZXh0IG9uY2xpY2sgPVwiZmFpbGVkXCIgY2xhc3M9XCJyZXN1bHRidXRcIj7mnKrpgJrov4c8L3RleHQ+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMvdXRpbHNcIik7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgb2lkOlwiXCIsXHJcbiAgICAgICAgLy/ovabniYzlj7dcclxuICAgICAgICBubzpcIlwiLFxyXG4gICAgICAgIC8v6L2m6L6G5Z6L5Y+3XHJcbiAgICAgICAgY2Fybm86XCJcIixcclxuICAgICAgICAvL1x06L2m5Li75aeT5ZCNXHJcbiAgICAgICAgbmFtZTpcIlwiLFxyXG4gICAgfSxcclxuICAgICByZWFkeTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAvKiDojrflj5blrZjlgqjnmoRvaWQgKi9cclxuICAgICAgICB2YXIgc3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJyk7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICAgLyogZ2V0IG9yZGVyaWQgb2YgZHJpdmVyICovXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKCdvcmRlcmlkJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgLyogZ2V0IGluZm8gb2YgZHJpdmVyICovXHJcbiAgICAgICAgICAgIG1lLm9pZCA9IGUuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oJ25hbWUnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAvKiBnZXQgbmFtZSBmbyBvZiBkcml2ZXIgKi9cclxuICAgICAgICAgICAgbWUubmFtZSA9IGUuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oJ2Nhcm5vJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgLyogZ2V0IGNhcnR5cGUgIG9mIGNhciAqL1xyXG4gICAgICAgICAgICBtZS5jYXJubyA9IGUuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oJ25vJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgLyogZ2V0IG5vIG9mIGNhciAqL1xyXG4gICAgICAgICAgICBtZS5ubyA9IGUuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcm5vKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHsgICAgXHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdvU2l0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYnVuZGxlVXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9ICB1dGlscy5nZXRCYXNlVXJsKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFzZVwiK2Jhc2UpO1xyXG4gICAgICAgICAgICB0aGlzLiRvcGVuVVJMKGJhc2UgKyBcImNoZWNrbWVzc2FnZS5qc1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhc3NjaGVjazpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3N0cmVhbScpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7ICAgICAgICBcclxuICAgICAgICAgICAgc3RyZWFtLmZldGNoKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL2FwaS5mZW5nY2hhb2h1emh1LmNvbS9vcmRlci9jaGFuZ2VTdGF0dXNPcmRlcj9vaWQ9XCIrc2VsZi5vaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTonanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuY29kZSxyZXNwb25zZS5kYXRhLm1zZyxyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmNvZGUgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5mb3VzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmFpbGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5mb3VzZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpczsgXHJcbiAgICAgICAgICAgICBzdHJlYW0uZmV0Y2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL2Rldi5mZW5nY2hhb2h1emh1LmNvbS93eC90bXNnVW5kZXJ3cml0aW5nP05vPVwiK2VuY29kZVVSSShzZWxmLm5vKStcIiZDYXJObz1cIitlbmNvZGVVUkkoc2VsZi5jYXJubykrXCImTmFtZT1cIitlbmNvZGVVUkkoc2VsZi5uYW1lKStcIiZvcmRlcklkPVwiK3NlbGYub2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuY29kZSxyZXNwb25zZS5kYXRhLm1zZyxyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBidW5kbGVVcmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmw7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gIHV0aWxzLmdldEJhc2VVcmwoYnVuZGxlVXJsKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYXNlXCIrYmFzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwoYmFzZSArIFwiYWNjb21wbGlzaC5qc1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICBmYWlsZWQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSAgdXRpbHMuZ2V0QmFzZVVybChidW5kbGVVcmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2VcIitiYXNlKTtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTChiYXNlICsgXCJmYWlsZWQuanNcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPiBcclxuICAgIC5jaGVja2NhcntcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6NjBweDtcclxuICAgIH1cclxuICAgIC5yZXN1bHRib3h7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcclxuICAgIH1cclxuICAgIC5yZXN1bHRidXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7ICAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmRlMDA7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgd2lkdGg6NDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4OyBcclxuICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVzdWx0LndlPzc2MTQxNjVmIl0sInNvdXJjZVJvb3QiOiIifQ==