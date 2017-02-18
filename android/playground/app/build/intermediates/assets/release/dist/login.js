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

	var __weex_template__ = __webpack_require__(138)
	var __weex_style__ = __webpack_require__(139)
	var __weex_script__ = __webpack_require__(140)
	
	__weex_define__('@weex-component/ac827e6b21867f96b8e08dcd7305527c', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/ac827e6b21867f96b8e08dcd7305527c',undefined,undefined)

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

/***/ 138:
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
	                "placeholder": "请输入用户名",
	                "value": function () {return this.username}
	              },
	              "events": {
	                "input": "usernameoninput"
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
	                "placeholder": "请输入密码",
	                "value": function () {return this.password}
	              },
	              "events": {
	                "input": "passwordoninput"
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
	                "value": "验证码"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "imgcode"
	              ],
	              "attr": {
	                "type": "text",
	                "value": function () {return this.vcode},
	                "placeholder": "验证码"
	              },
	              "events": {
	                "input": "vcodeinput"
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "imgstyle"
	              ],
	              "attr": {
	                "src": function () {return this.imgurl}
	              },
	              "events": {
	                "click": "changecode"
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
	              "events": {
	                "click": "login"
	              },
	              "attr": {
	                "value": "登陆"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "warning"
	      ],
	      "attr": {
	        "value": function () {return this.warning}
	      }
	    }
	  ]
	}

/***/ },

/***/ 139:
/***/ function(module, exports) {

	module.exports = {
	  "message": {
	    "paddingBottom": 30,
	    "fontSize": 35,
	    "textAlign": "center"
	  },
	  "inputItem": {
	    "marginTop": 10,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "title": {
	    "width": 130,
	    "fontSize": 30
	  },
	  "input-style": {
	    "fontSize": 30,
	    "width": 200,
	    "height": 40
	  },
	  "imgcode": {
	    "fontSize": 30,
	    "width": 100,
	    "height": 40,
	    "marginLeft": 10,
	    "marginRight": 10
	  },
	  "imgstyle": {
	    "width": 100,
	    "height": 40
	  },
	  "content": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "logbox": {
	    "width": 500,
	    "padding": 20,
	    "borderWidth": 1,
	    "borderColor": "#000000"
	  },
	  "login": {
	    "alignItems": "center"
	  },
	  "logintext": {
	    "marginTop": 30,
	    "backgroundColor": "#ffde00",
	    "color": "#000000",
	    "width": 200,
	    "padding": 5,
	    "textAlign": "center",
	    "fontSize": 30
	  },
	  "warning": {
	    "color": "#FF0000"
	  }
	}

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	var md5 = __webpack_require__(141);
	var utils = __webpack_require__(4);
	module.exports = {
	  data: function () {return {
	    message: '蜂巢互助验车工作台',
	    username: "fengchao",
	    password: "123456",
	    vcode: "",
	    imgurl: "http://api.fengchaohuzhu.com/auth/getlogincode?code=" + Math.random(),
	    warning: ""
	  }},
	  created: function created() {},
	  methods: {
	    login: function login(e) {
	      console.log("go to home!");
	      console.log("cookie" + document.cookie);
	
	      var bundleUrl = this.$getConfig().bundleUrl;
	      var base = utils.getBaseUrl(bundleUrl);
	
	      var storage = __weex_require__('@weex-module/storage');
	      var self = this;
	      storage.setItem('username', self.username, function (e) {
	        console.log("vcode" + self.vcode);
	        self.$openURL(base + "home.js");
	      });
	    },
	    usernameoninput: function usernameoninput(e) {
	      this.username = e.value;
	    },
	    passwordoninput: function passwordoninput(e) {
	      this.password = e.value;
	    },
	    vcodeinput: function vcodeinput(e) {
	      this.vcode = e.value;
	    },
	    changecode: function changecode(e) {
	      console.log("change img code");
	      this.imgurl = "http://api.fengchaohuzhu.com/auth/getlogincode?code=" + Math.random();
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 141:
/***/ function(module, exports) {

	exports.hex_md5 = function(s) {
	    var hexcase = 0;
	    var b64pad = "";
	    var chrsz = 8;
	
	    function core_md5(x, len) {
	
	        x[len >> 5] |= 0x80 << ((len) % 32);
	        x[(((len + 64) >>> 9) << 4) + 14] = len;
	        var a = 1732584193;
	        var b = -271733879;
	        var c = -1732584194;
	        var d = 271733878;
	        for (var i = 0; i < x.length; i += 16) {
	            var olda = a;
	            var oldb = b;
	            var oldc = c;
	            var oldd = d;
	
	            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
	            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
	            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
	            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
	            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
	            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
	            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
	            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
	
	            a = safe_add(a, olda);
	            b = safe_add(b, oldb);
	            c = safe_add(c, oldc);
	            d = safe_add(d, oldd);
	        }
	        return Array(a, b, c, d);
	
	    }
	
	    function md5_cmn(q, a, b, x, s, t) {
	        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	    }
	
	    function md5_ff(a, b, c, d, x, s, t) {
	        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	    }
	
	    function md5_gg(a, b, c, d, x, s, t) {
	        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	    }
	
	    function md5_hh(a, b, c, d, x, s, t) {
	        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	    }
	
	    function md5_ii(a, b, c, d, x, s, t) {
	        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	    }
	
	    function core_hmac_md5(key, data) {
	        var bkey = str2binl(key);
	        if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
	
	        var ipad = Array(16),
	            opad = Array(16);
	        for (var i = 0; i < 16; i++) {
	            ipad[i] = bkey[i] ^ 0x36363636;
	            opad[i] = bkey[i] ^ 0x5C5C5C5C;
	        }
	
	        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	        return core_md5(opad.concat(hash), 512 + 128);
	    }
	
	    function safe_add(x, y) {
	        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return (msw << 16) | (lsw & 0xFFFF);
	    }
	
	    function bit_rol(num, cnt) {
	        return (num << cnt) | (num >>> (32 - cnt));
	    }
	
	    function str2binl(str) {
	        var bin = Array();
	        var mask = (1 << chrsz) - 1;
	        for (var i = 0; i < str.length * chrsz; i += chrsz)
	            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
	        return bin;
	    }
	
	    function binl2hex(binarray) {
	        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	        var str = "";
	        for (var i = 0; i < binarray.length * 4; i++) {
	            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
	                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
	        }
	        return str;
	    }
	
	    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZ2luLndlPzE0ZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzP2EwMDUqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4ud2U/ZTUwZSIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4ud2U/M2M1NCIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4ud2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL21kNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRSIsImZpbGUiOiJkaXN0XFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyMzM2ODEzOTMzZTgwOWU0MjU2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9sb2dpbi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9sb2dpbi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2xvZ2luLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2FjODI3ZTZiMjE4NjdmOTZiOGUwOGRjZDczMDU1MjdjJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50L2FjODI3ZTZiMjE4NjdmOTZiOGUwOGRjZDczMDU1MjdjJyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xvZ2luLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgaHViZW4gb24gMDMvMDEvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnRzLmdldEJhc2VVcmwgPSBmdW5jdGlvbihidW5kbGVVcmwpIHtcclxuICAgIGJ1bmRsZVVybCA9IG5ldyBTdHJpbmcoYnVuZGxlVXJsKTtcclxuICAgIHZhciBuYXRpdmVCYXNlO1xyXG4gICAgdmFyIGlzQW5kcm9pZEFzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vYXNzZXRzLycpID49IDA7XHJcblxyXG4gICAgdmFyIGlzaU9TQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly8vJykgPj0gMCAmJiBidW5kbGVVcmwuaW5kZXhPZignaGl2ZS5hcHAnKSA+IDA7XHJcbiAgICBpZiAoaXNBbmRyb2lkQXNzZXRzKSB7XHJcbiAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzL2Rpc3QvJztcclxuICAgIH0gZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgaG9zdCA9ICcxNzIuMTY4LjEuNzE6ODA4MCc7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSAvXFwvXFwvKFteXFwvXSs/KVxcLy8uZXhlYyhidW5kbGVVcmwpO1xyXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgaG9zdCA9IG1hdGNoZXNbMV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+atpOWkhOmcgOazqOaEj+S4gOS4iyx0YWJiYXIg55So55qE55u05o6l5pivanNidW5kbGUg55qE6Lev5b6ELOS9huaYr25hdmlnYXRvcuaYr+ebtOaOpei3s+i9rOWIsOaWsOmhtemdouS4iueahC5cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHsgLy8g5rWP6KeI5ZmoIHdlYnZpZXdcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyAnL3dlYi9pbmRleC5odG1sP3BhZ2U9Li4vZGlzdC8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy9kaXN0Lyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hdGl2ZUJhc2U7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbHMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNiA3IDggOSAxMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGVudFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtZXNzYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tZXNzYWdlfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibG9nYm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXRJdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55So5oi35ZCNXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5wdXQtc3R5bGVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWl55So5oi35ZCNXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcm5hbWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImlucHV0XCI6IFwidXNlcm5hbWVvbmlucHV0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXRJdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5a+G56CBXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5wdXQtc3R5bGVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+i+k+WFpeWvhueggVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJpbnB1dFwiOiBcInBhc3N3b3Jkb25pbnB1dFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImlucHV0SXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumqjOivgeeggVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltZ2NvZGVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52Y29kZX0sXG4gICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIumqjOivgeeggVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImlucHV0XCI6IFwidmNvZGVpbnB1dFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltZ3N0eWxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1ndXJsfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNoYW5nZWNvZGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsb2dpblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsb2dpbnRleHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImxvZ2luXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55m76ZmGXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndhcm5pbmdcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLndhcm5pbmd9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvbG9naW4ud2Vcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJtZXNzYWdlXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMzAsXG4gICAgXCJmb250U2l6ZVwiOiAzNSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiaW5wdXRJdGVtXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAxMCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMzAsXG4gICAgXCJmb250U2l6ZVwiOiAzMFxuICB9LFxuICBcImlucHV0LXN0eWxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwid2lkdGhcIjogMjAwLFxuICAgIFwiaGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwiaW1nY29kZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAzMCxcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiA0MCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMTAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAxMFxuICB9LFxuICBcImltZ3N0eWxlXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiA0MFxuICB9LFxuICBcImNvbnRlbnRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImxvZ2JveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA1MDAsXG4gICAgXCJwYWRkaW5nXCI6IDIwLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMSxcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwibG9naW5cIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibG9naW50ZXh0XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAzMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmRlMDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwid2lkdGhcIjogMjAwLFxuICAgIFwicGFkZGluZ1wiOiA1LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMFxuICB9LFxuICBcIndhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkYwMDAwXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2xvZ2luLndlXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2VcIj57eyBtZXNzYWdlIH19PC90ZXh0PlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2JveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEl0ZW1cIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7nlKjmiLflkI08L3RleHQ+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImlucHV0LXN0eWxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeeUqOaIt+WQjVwiICB2YWx1ZT1cInt7dXNlcm5hbWV9fVwiICBvbmlucHV0PVwidXNlcm5hbWVvbmlucHV0XCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRJdGVtXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+5a+G56CBPC90ZXh0PlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJpbnB1dC1zdHlsZVwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCIgdmFsdWU9XCJ7e3Bhc3N3b3JkfX1cIiBvbmlucHV0PVwicGFzc3dvcmRvbmlucHV0XCI+PC9pbnB1dD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dEl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPumqjOivgeeggTwvdGV4dD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJpbWdjb2RlXCIgdHlwZT1cInRleHRcIiB2YWx1ZSA9XCJ7e3Zjb2RlfX1cIiAgb25pbnB1dD1cInZjb2RlaW5wdXRcIiBwbGFjZWhvbGRlcj1cIumqjOivgeeggVwiPjwvaW5wdXQ+IFxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdzdHlsZVwiIHNyYz1cInt7aW1ndXJsfX1cIiBvbmNsaWNrPSBcImNoYW5nZWNvZGVcIj48L2ltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpblwiPiAgICAgXHJcbiAgICAgICAgICAgPHRleHQgY2xhc3MgPVwibG9naW50ZXh0XCIgb25jbGljayA9IFwie3tsb2dpbn19XCI+55m76ZmGPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dGV4dCBjbGFzcz1cIndhcm5pbmdcIj57e3dhcm5pbmd9fTwvdGV4dD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuwqDCoFxyXG48c2NyaXB0PlxyXG52YXIgbWQ1ID0gcmVxdWlyZShcIi4vdXRpbHMvbWQ1LmpzXCIpXHJcbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL3V0aWxzXCIpO1xyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YToge1xyXG4gICAgICBtZXNzYWdlOiAn6JyC5bei5LqS5Yqp6aqM6L2m5bel5L2c5Y+wJyxcclxuICAgICAgdXNlcm5hbWU6XCJmZW5nY2hhb1wiLFxyXG4gICAgICBwYXNzd29yZDpcIjEyMzQ1NlwiLFxyXG4gICAgICB2Y29kZTpcIlwiLFxyXG4gICAgICBpbWd1cmw6XCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL2F1dGgvZ2V0bG9naW5jb2RlP2NvZGU9XCIrwqBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICB3YXJuaW5nOlwiXCIsXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB9LFxyXG4gICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvIHRvIGhvbWUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvb2tpZVwiK2RvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJnbyBob21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgYnVuZGxlVXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgYmFzZSA9ICB1dGlscy5nZXRCYXNlVXJsKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJiYXNlXCIrYmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vdGhpcy4kb3BlblVSTChiYXNlICsgXCJob21lLmpzXCIpO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpczsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBzZWxmLnVzZXJuYW1lLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2Y29kZVwiK3NlbGYudmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJG9wZW5VUkwoYmFzZSArIFwiaG9tZS5qc1wiKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuJG9wZW5VUkwoYmFzZSArIFwiZGlhbG9nLmpzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGRvY3VtZW50LmNvb2tpZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hcGkuZmVuZ2NoYW9odXpodS5jb20vYXV0aC9sb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL2F1dGgvbG9naW4/cHA9ZmVuZ2NoYW8mcHdkPWUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlJnZjb2RlPVwiK3NlbGYudmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OlwicHA9XCIrc2VsZi51c2VybmFtZStcIiZwd2Q9XCIrbWQ1LmhleF9tZDUoc2VsZi5wYXNzd29yZCkrXCImdmNvZGU9XCIrc2VsZi52Y29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYm9keSA9ICByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5jb2RlLHJlc3BvbnNlLm1zZyxyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJG9wZW5VUkwoYmFzZSArIFwiaG9tZS5qc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53YXJuaW5nID0gcmVzcG9uc2UubXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7ICBcclxuICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1c2VybmFtZW9uaW5wdXQ6ZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGUudmFsdWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGFzc3dvcmRvbmlucHV0OmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBlLnZhbHVlO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZjb2RlaW5wdXQ6ZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgdGhpcy52Y29kZSA9IGUudmFsdWU7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2hhbmdlY29kZTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBpbWcgY29kZVwiKTtcclxuICAgICAgICAgICAgICB0aGlzLmltZ3VybCA9IFwiaHR0cDovL2FwaS5mZW5nY2hhb2h1emh1LmNvbS9hdXRoL2dldGxvZ2luY29kZT9jb2RlPVwiwqArwqBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PsKgXHJcblxyXG48c3R5bGU+XHJcbiAgLm1lc3NhZ2UgeyAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206MzBweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuICAuaW5wdXRJdGVte1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICB9XHJcbiAgLnRpdGxle1xyXG4gICAgd2lkdGg6MTMwcHg7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICB9XHJcbiAgLmlucHV0LXN0eWxle1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDo0MHB4OyAgICBcclxuICB9XHJcbiAgLmltZ2NvZGV7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIC5pbWdzdHlsZXtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgLyp0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7ICAgIFxyXG4gIH1cclxuICAubG9nYm94e1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6MXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICAubG9naW57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIH1cclxuICAubG9naW50ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZkZTAwO1xyXG4gICAgY29sb3I6YmxhY2s7ICAgIFxyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBwYWRkaW5nOjVweDsgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gIH1cclxuICAud2FybmluZ3tcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sb2dpbi53ZT80NDVkMzVlMiIsImV4cG9ydHMuaGV4X21kNSA9IGZ1bmN0aW9uKHMpIHtcclxuICAgIHZhciBoZXhjYXNlID0gMDtcclxuICAgIHZhciBiNjRwYWQgPSBcIlwiO1xyXG4gICAgdmFyIGNocnN6ID0gODtcclxuXHJcbiAgICBmdW5jdGlvbiBjb3JlX21kNSh4LCBsZW4pIHtcclxuXHJcbiAgICAgICAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCAoKGxlbikgJSAzMik7XHJcbiAgICAgICAgeFsoKChsZW4gKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbGVuO1xyXG4gICAgICAgIHZhciBhID0gMTczMjU4NDE5MztcclxuICAgICAgICB2YXIgYiA9IC0yNzE3MzM4Nzk7XHJcbiAgICAgICAgdmFyIGMgPSAtMTczMjU4NDE5NDtcclxuICAgICAgICB2YXIgZCA9IDI3MTczMzg3ODtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XHJcbiAgICAgICAgICAgIHZhciBvbGRhID0gYTtcclxuICAgICAgICAgICAgdmFyIG9sZGIgPSBiO1xyXG4gICAgICAgICAgICB2YXIgb2xkYyA9IGM7XHJcbiAgICAgICAgICAgIHZhciBvbGRkID0gZDtcclxuXHJcbiAgICAgICAgICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpICsgMF0sIDcsIC02ODA4NzY5MzYpO1xyXG4gICAgICAgICAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgICAgICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICAgICAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcclxuICAgICAgICAgICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xyXG4gICAgICAgICAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgICAgICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XHJcbiAgICAgICAgICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcclxuICAgICAgICAgICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XHJcbiAgICAgICAgICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcclxuICAgICAgICAgICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICAgICAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgICAgICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcclxuICAgICAgICAgICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgICAgICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSArIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbiAgICAgICAgICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xyXG4gICAgICAgICAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xyXG4gICAgICAgICAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XHJcbiAgICAgICAgICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XHJcbiAgICAgICAgICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgICAgICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xyXG4gICAgICAgICAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICAgICAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xyXG4gICAgICAgICAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XHJcbiAgICAgICAgICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xyXG4gICAgICAgICAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcclxuICAgICAgICAgICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuICAgICAgICAgICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcclxuICAgICAgICAgICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICAgICAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcclxuICAgICAgICAgICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuICAgICAgICAgICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpICsgMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuICAgICAgICAgICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xyXG4gICAgICAgICAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcclxuICAgICAgICAgICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcclxuICAgICAgICAgICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcbiAgICAgICAgICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpICsgMF0sIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICAgICAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XHJcbiAgICAgICAgICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xyXG4gICAgICAgICAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgICAgICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xyXG4gICAgICAgICAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICAgICAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgICAgICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcclxuICAgICAgICAgICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcclxuICAgICAgICAgICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuICAgICAgICAgICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcclxuICAgICAgICAgICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XHJcbiAgICAgICAgICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4gICAgICAgICAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcclxuICAgICAgICAgICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG5cclxuICAgICAgICAgICAgYSA9IHNhZmVfYWRkKGEsIG9sZGEpO1xyXG4gICAgICAgICAgICBiID0gc2FmZV9hZGQoYiwgb2xkYik7XHJcbiAgICAgICAgICAgIGMgPSBzYWZlX2FkZChjLCBvbGRjKTtcclxuICAgICAgICAgICAgZCA9IHNhZmVfYWRkKGQsIG9sZGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXJyYXkoYSwgYiwgYywgZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1kNV9jbW4ocSwgYSwgYiwgeCwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiBzYWZlX2FkZChiaXRfcm9sKHNhZmVfYWRkKHNhZmVfYWRkKGEsIHEpLCBzYWZlX2FkZCh4LCB0KSksIHMpLCBiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtZDVfZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiBtZDVfY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtZDVfZ2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiBtZDVfY21uKChiICYgZCkgfCAoYyAmICh+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtZDVfaGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiBtZDVfY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWQ1X2lpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgICAgICByZXR1cm4gbWQ1X2NtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29yZV9obWFjX21kNShrZXksIGRhdGEpIHtcclxuICAgICAgICB2YXIgYmtleSA9IHN0cjJiaW5sKGtleSk7XHJcbiAgICAgICAgaWYgKGJrZXkubGVuZ3RoID4gMTYpIGJrZXkgPSBjb3JlX21kNShia2V5LCBrZXkubGVuZ3RoICogY2hyc3opO1xyXG5cclxuICAgICAgICB2YXIgaXBhZCA9IEFycmF5KDE2KSxcclxuICAgICAgICAgICAgb3BhZCA9IEFycmF5KDE2KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgaXBhZFtpXSA9IGJrZXlbaV0gXiAweDM2MzYzNjM2O1xyXG4gICAgICAgICAgICBvcGFkW2ldID0gYmtleVtpXSBeIDB4NUM1QzVDNUM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaGFzaCA9IGNvcmVfbWQ1KGlwYWQuY29uY2F0KHN0cjJiaW5sKGRhdGEpKSwgNTEyICsgZGF0YS5sZW5ndGggKiBjaHJzeik7XHJcbiAgICAgICAgcmV0dXJuIGNvcmVfbWQ1KG9wYWQuY29uY2F0KGhhc2gpLCA1MTIgKyAxMjgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhZmVfYWRkKHgsIHkpIHtcclxuICAgICAgICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpO1xyXG4gICAgICAgIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcclxuICAgICAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaXRfcm9sKG51bSwgY250KSB7XHJcbiAgICAgICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cjJiaW5sKHN0cikge1xyXG4gICAgICAgIHZhciBiaW4gPSBBcnJheSgpO1xyXG4gICAgICAgIHZhciBtYXNrID0gKDEgPDwgY2hyc3opIC0gMTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGggKiBjaHJzejsgaSArPSBjaHJzeilcclxuICAgICAgICAgICAgYmluW2kgPj4gNV0gfD0gKHN0ci5jaGFyQ29kZUF0KGkgLyBjaHJzeikgJiBtYXNrKSA8PCAoaSAlIDMyKTtcclxuICAgICAgICByZXR1cm4gYmluO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmwyaGV4KGJpbmFycmF5KSB7XHJcbiAgICAgICAgdmFyIGhleF90YWIgPSBoZXhjYXNlID8gXCIwMTIzNDU2Nzg5QUJDREVGXCIgOiBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcclxuICAgICAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFycmF5Lmxlbmd0aCAqIDQ7IGkrKykge1xyXG4gICAgICAgICAgICBzdHIgKz0gaGV4X3RhYi5jaGFyQXQoKGJpbmFycmF5W2kgPj4gMl0gPj4gKChpICUgNCkgKiA4ICsgNCkpICYgMHhGKSArXHJcbiAgICAgICAgICAgICAgICBoZXhfdGFiLmNoYXJBdCgoYmluYXJyYXlbaSA+PiAyXSA+PiAoKGkgJSA0KSAqIDgpKSAmIDB4Rik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJpbmwyaGV4KGNvcmVfbWQ1KHN0cjJiaW5sKHMpLCBzLmxlbmd0aCAqIGNocnN6KSk7XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9tZDUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9