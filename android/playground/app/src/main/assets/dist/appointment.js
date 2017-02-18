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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5)
	var __weex_template__ = __webpack_require__(114)
	var __weex_style__ = __webpack_require__(115)
	var __weex_script__ = __webpack_require__(116)
	
	__weex_define__('@weex-component/d341815d816de1df82b44855759a6435', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/d341815d816de1df82b44855759a6435',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)
	
	__weex_define__('@weex-component/selectaddress', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "mask"
	  ],
	  "events": {
	    "click": "closeaddresspage"
	  },
	  "shown": function () {return this.showaddress},
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "selectbutton"
	          ],
	          "attr": {
	            "value": "取消"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "selectbutton"
	          ],
	          "attr": {
	            "value": "确定"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "addresslist"
	      ],
	      "children": [
	        {
	          "type": "scroller",
	          "attr": {
	            "showScrollbar": "false"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "addresslistitem"
	              ],
	              "children": [
	                {
	                  "type": "list",
	                  "repeat": {
	                    "expression": function () {return this.provices},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "events": {
	                        "click": "selectprovice"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "itemstyle"
	                          ],
	                          "style": {
	                            "color": function () {return this.item.color}
	                          },
	                          "attr": {
	                            "value": function () {return this.item.provice}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "scroller",
	          "attr": {
	            "showScrollbar": "false"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "addresslistitem"
	              ],
	              "children": [
	                {
	                  "type": "list",
	                  "repeat": {
	                    "expression": function () {return this.cities},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "events": {
	                        "click": "selectcity"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "itemstyle"
	                          ],
	                          "attr": {
	                            "value": function () {return this.item}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "scroller",
	          "attr": {
	            "showScrollbar": "false"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "addresslistitem"
	              ],
	              "children": [
	                {
	                  "type": "list",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "repeat": {
	                    "expression": function () {return this.areas},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "events": {
	                        "click": "selectarea"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "itemstyle"
	                          ],
	                          "id": "area",
	                          "attr": {
	                            "value": function () {return this.item}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "footer"
	      ]
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "title": {
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "flexDirection": "row",
	    "backgroundColor": "#01cdff",
	    "height": 80,
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "selectbutton": {
	    "fontSize": 30,
	    "width": 100,
	    "height": 60,
	    "lineHeight": 60,
	    "margin": 5,
	    "textAlign": "center",
	    "backgroundColor": "#fecd01",
	    "borderRadius": 5
	  },
	  "mask": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "height": 740
	  },
	  "itemstyle": {
	    "fontSize": 40,
	    "margin": 10,
	    "lineHeight": 30,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "addresslist": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "flexDirection": "row",
	    "height": 600,
	    "backgroundColor": "#FFFFFF"
	  },
	  "addresslistitem": {
	    "flexDirection": "column"
	  },
	  "addressinput": {
	    "width": 400,
	    "height": 40,
	    "fontSize": 30,
	    "borderWidth": 1
	  },
	  "footer": {
	    "backgroundColor": "#01cdff",
	    "height": 60
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	var _getIterator2 = __webpack_require__(9);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addressmap = __webpack_require__(62);
	__webpack_require__(63);
	module.exports = {
	    data: function () {return {
	        showaddress: true,
	        proviceindex: 0,
	        cityindex: 0,
	        areaindex: 0,
	        provice: "北京",
	        city: "北京市",
	        area: "东城区",
	        street: "东直门东方银座23D",
	        personid: "9527",
	        personlist: [],
	        provices: ["北京"],
	        cities: ["市辖区"],
	        areas: ["东城区"]
	    }},
	    ready: function ready() {
	        this.provices = [];
	        var tempprovices = addressmap.address.Items["0"];
	        var index = 0;
	        for (var provice in addressmap.address.Items["0"]) {
	            var tempprovice = {};
	            tempprovice.index = index;
	            tempprovice.color = "black";
	            tempprovice.provice = addressmap.address.Items["0"][provice];
	            this.provices.push(tempprovice);
	            index++;
	        }
	    },
	    methods: {
	        showaddresspage: function showaddresspage() {
	            this.showaddress = true;
	        },
	
	        closeaddresspage: function closeaddresspage() {
	            this.showaddress = false;
	        },
	        selectprovice: function selectprovice(e) {
	            this.provice = e.target.children[0].attr.value;
	            console.log(this.provice);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = (0, _getIterator3.default)(this.provices), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var provice = _step.value;
	
	                    if (provice.provice == this.provice) {
	                        this.proviceindex = provice.index;
	                        provice.color = "red";
	                    } else {
	                        provice.color = "black";
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            var city = "0_" + this.proviceindex;
	            this.cities = [];
	
	            var index = 0;
	            for (var city in addressmap.address.Items[city]) {
	                var tempcity = {};
	                tempcity.index = index;
	                tempcity.color = "black";
	                tempcity.provice = addressmap.address.Items[city][city];
	                this.cities.push(tempcity);
	                index++;
	            }
	            this.areas = ["请选择"];
	        },
	        selectcity: function selectcity(e) {
	            this.city = e.target.children[0].attr.value;
	            console.log(this.city);
	            this.cityindex = this.cities.indexOf(this.city);
	            console.log(this.cities.indexOf(this.city));
	            var area = "0_" + this.proviceindex + "_" + this.cityindex;
	            this.areas = [];
	            this.areas = addressmap.address.Items[area];
	        },
	        selectarea: function selectarea(e) {
	            this.area = e.target.children[0].attr.value;
	            console.log(this.area);
	            this.areaindex = this.areas.indexOf(this.area);
	            console.log(this.areas.indexOf(this.area));
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	__webpack_require__(57);
	module.exports = __webpack_require__(59);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	var global        = __webpack_require__(23)
	  , hide          = __webpack_require__(27)
	  , Iterators     = __webpack_require__(15)
	  , TO_STRING_TAG = __webpack_require__(54)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(13)
	  , step             = __webpack_require__(14)
	  , Iterators        = __webpack_require__(15)
	  , toIObject        = __webpack_require__(16);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(20)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(17)
	  , defined = __webpack_require__(19);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(18);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(21)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(37)
	  , hide           = __webpack_require__(27)
	  , has            = __webpack_require__(38)
	  , Iterators      = __webpack_require__(15)
	  , $iterCreate    = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(55)
	  , ITERATOR       = __webpack_require__(54)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(23)
	  , core      = __webpack_require__(24)
	  , ctx       = __webpack_require__(25)
	  , hide      = __webpack_require__(27)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(28)
	  , createDesc = __webpack_require__(36);
	module.exports = __webpack_require__(32) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(35)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(32) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(32) && !__webpack_require__(33)(function(){
	  return Object.defineProperty(__webpack_require__(34)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(33)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , document = __webpack_require__(23).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(30);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);

/***/ },
/* 38 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(40)
	  , descriptor     = __webpack_require__(36)
	  , setToStringTag = __webpack_require__(53)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(27)(IteratorPrototype, __webpack_require__(54)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(29)
	  , dPs         = __webpack_require__(41)
	  , enumBugKeys = __webpack_require__(51)
	  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(34)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(52).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(28)
	  , anObject = __webpack_require__(29)
	  , getKeys  = __webpack_require__(42);
	
	module.exports = __webpack_require__(32) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(43)
	  , enumBugKeys = __webpack_require__(51);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(38)
	  , toIObject    = __webpack_require__(16)
	  , arrayIndexOf = __webpack_require__(44)(false)
	  , IE_PROTO     = __webpack_require__(48)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(16)
	  , toLength  = __webpack_require__(45)
	  , toIndex   = __webpack_require__(47);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(46)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(49)('keys')
	  , uid    = __webpack_require__(50);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(23)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(28).f
	  , has = __webpack_require__(38)
	  , TAG = __webpack_require__(54)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(49)('wks')
	  , uid        = __webpack_require__(50)
	  , Symbol     = __webpack_require__(23).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(38)
	  , toObject    = __webpack_require__(56)
	  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(19);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(58)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(20)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , defined   = __webpack_require__(19);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(29)
	  , get      = __webpack_require__(60);
	module.exports = __webpack_require__(24).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(61)
	  , ITERATOR  = __webpack_require__(54)('iterator')
	  , Iterators = __webpack_require__(15);
	module.exports = __webpack_require__(24).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(18)
	  , TAG = __webpack_require__(54)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	/*
	 *	全国三级城市联动 js版
	 */
	function Dsy() {
	    this.Items = {};
	}
	Dsy.prototype.add = function(id, iArray) {
	    this.Items[id] = iArray;
	}
	
	Dsy.prototype.Exists = function(id) {
	    if (typeof(this.Items[id]) == "undefined") return false;
	    return true;
	}
	
	var dsy = new Dsy();
	
	dsy.add("0", ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海省", "宁夏", "新疆", "香港", "澳门", "台湾省"]);
	dsy.add("0_0_0", ["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区"]);
	dsy.add("0_0_1", ["密云县", "延庆县"]);
	dsy.add("0_0", ["市辖区", "县"]);
	dsy.add("0_1_0", ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河区", "静海区"]);
	dsy.add("0_1_1", ["蓟县"]);
	dsy.add("0_1", ["市辖区", "县"]);
	dsy.add("0_2_0", ["黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区"]);
	dsy.add("0_2_1", ["崇明县"]);
	dsy.add("0_2", ["市辖区", "县"]);
	dsy.add("0_3_0", ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区", "璧山区", "铜梁区", "潼南区", "荣昌区"]);
	dsy.add("0_3_1", ["梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县"]);
	dsy.add("0_3", ["市辖区", "县"]);
	
	dsy.add("0_4_0", ["长安区", "桥西区", "新华区", "井陉矿区", "裕华区", "藁城区", "鹿泉区", "栾城区", "井陉县", "正定县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵县", "晋州市", "新乐市"]);
	dsy.add("0_4_1", ["桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县"]);
	dsy.add("0_4_2", ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县"]);
	dsy.add("0_4_3", ["海港区", "山海关区", "北戴河区", "抚宁区", "青龙满族自治县", "昌黎县", "卢龙县"]);
	dsy.add("0_4_4", ["路南区", "路北区", "古冶区", "开平区", "丰南区", "丰润区", "曹妃甸区", "滦县", "滦南县", "乐亭县", "迁西县", "玉田县", "遵化市", "迁安市"]);
	dsy.add("0_4_5", ["安次区", "广阳区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市"]);
	dsy.add("0_4_6", ["竞秀区", "莲池区", "满城区", "清苑区", "徐水区", "涞水县", "阜平县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易县", "曲阳县", "蠡县", "顺平县", "博野县", "雄县", "涿州市", "安国市", "高碑店市"]);
	dsy.add("0_4_7", ["桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景县", "阜城县", "冀州市", "深州市"]);
	dsy.add("0_4_8", ["新华区", "运河区", "沧县", "青县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市"]);
	dsy.add("0_4_9", ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威县", "清河县", "临西县", "南宫市", "沙河市"]);
	dsy.add("0_4_10", ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉县", "磁县", "肥乡县", "永年县", "邱县", "鸡泽县", "广平县", "馆陶县", "魏县", "曲周县", "武安市"]);
	dsy.add("0_4_11", ["定州市", "辛集市"]);
	dsy.add("0_4", ["石家庄市", "张家口市", "承德市", "秦皇岛市", "唐山市", "廊坊市", "保定市", "衡水市", "沧州市", "邢台市", "邯郸市", "省直辖县级行政区划"]);
	
	dsy.add("0_5_0", ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市"]);
	dsy.add("0_5_1", ["朔城区", "平鲁区", "山阴县", "应县", "右玉县", "怀仁县"]);
	dsy.add("0_5_2", ["城区", "矿区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县"]);
	dsy.add("0_5_3", ["城区", "矿区", "郊区", "平定县", "盂县"]);
	dsy.add("0_5_4", ["城区", "郊区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "潞城市"]);
	dsy.add("0_5_5", ["城区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市"]);
	dsy.add("0_5_6", ["忻府区", "定襄县", "五台县", "代县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县", "原平市"]);
	dsy.add("0_5_7", ["榆次区", "榆次区", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁县", "平遥县", "灵石县", "介休市"]);
	dsy.add("0_5_8", ["尧都区", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古县", "安泽县", "浮山县", "吉县", "乡宁县", "大宁县", "隰县", "永和县", "蒲县", "汾西县", "侯马市", "霍州市"]);
	dsy.add("0_5_9", ["离石区", "文水县", "交城县", "兴县", "临县", "柳林县", "石楼县", "岚县", "方山县", "中阳县", "交口县", "孝义市", "汾阳市"]);
	dsy.add("0_5_10", ["盐湖区", "临猗县", "万荣县", "闻喜县", "稷山县", "新绛县", "绛县", "垣曲县", "夏县", "平陆县", "芮城县", "永济市", "河津市"]);
	dsy.add("0_5", ["太原市", "朔州市", "大同市", "阳泉市", "长治市", "晋城市", "忻州市", "晋中市", "临汾市", "吕梁市", "运城市"]);
	
	dsy.add("0_6_0", ["新城区", "回民区", "玉泉区", "赛罕区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县"]);
	dsy.add("0_6_1", ["东河区", "昆都仑区", "青山区", "石拐区", "白云鄂博矿区", "九原区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗"]);
	dsy.add("0_6_2", ["海勃湾区", "海南区", "乌达区"]);
	dsy.add("0_6_3", ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗"]);
	dsy.add("0_6_4", ["科尔沁区", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗", "霍林郭勒市"]);
	dsy.add("0_6_5", ["海拉尔区", "扎赉诺尔区", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "陈巴尔虎旗", "新巴尔虎左旗", "新巴尔虎右旗", "满洲里市", "牙克石市", "扎兰屯市", "额尔古纳市", "根河市"]);
	dsy.add("0_6_6", ["东胜区", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗"]);
	dsy.add("0_6_7", ["集宁区", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗", "丰镇市"]);
	dsy.add("0_6_8", ["临河区", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗"]);
	dsy.add("0_6_9", ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县"]);
	dsy.add("0_6_10", ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县"]);
	dsy.add("0_6_11", ["阿拉善左旗", "阿拉善右旗", "额济纳旗"]);
	dsy.add("0_6", ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "呼伦贝尔市", "鄂尔多斯市", "乌兰察布市", "巴彦淖尔市", "兴安盟", "锡林郭勒盟", "阿拉善盟"]);
	
	dsy.add("0_7_0", ["和平区", "沈河区", "大东区", "皇姑区", "铁西区", "苏家屯区", "浑南区", "沈北新区", "于洪区", "辽中县", "康平县", "法库县", "新民市"]);
	dsy.add("0_7_1", ["双塔区", "龙城区", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "北票市", "凌源市"]);
	dsy.add("0_7_2", ["海州区", "新邱区", "太平区", "清河门区", "细河区", "阜新蒙古族自治县", "彰武县"]);
	dsy.add("0_7_3", ["银州区", "清河区", "铁岭县", "西丰县", "昌图县", "调兵山市", "开原市"]);
	dsy.add("0_7_4", ["新抚区", "东洲区", "望花区", "顺城区", "抚顺县", "新宾满族自治县", "清原满族自治县"]);
	dsy.add("0_7_5", ["平山区", "溪湖区", "明山区", "南芬区", "本溪满族自治县", "桓仁满族自治县"]);
	dsy.add("0_7_6", ["白塔区", "文圣区", "宏伟区", "弓长岭区", "太子河区", "辽阳县", "灯塔市"]);
	dsy.add("0_7_7", ["铁东区", "铁西区", "立山区", "千山区", "台安县", "岫岩满族自治县", "海城市"]);
	dsy.add("0_7_8", ["元宝区", "振兴区", "振安区", "宽甸满族自治县", "东港市", "凤城市"]);
	dsy.add("0_7_9", ["中山区", "西岗区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "长海县", "瓦房店市", "普兰店市", "庄河市"]);
	dsy.add("0_7_10", ["站前区", "西市区", "鲅鱼圈区", "老边区", "盖州市", "大石桥市"]);
	dsy.add("0_7_11", ["双台子区", "兴隆台区", "大洼县", "盘山县"]);
	dsy.add("0_7_12", ["古塔区", "凌河区", "太和区", "黑山县", "义县", "凌海市", "北镇市"]);
	dsy.add("0_7_13", ["连山区", "龙港区", "南票区", "绥中县", "建昌县", "兴城市"]);
	dsy.add("0_7", ["沈阳市", "朝阳市", "阜新市", "铁岭市", "抚顺市", "本溪市", "辽阳市", "鞍山市", "丹东市", "大连市", "营口市", "盘锦市", "锦州市", "葫芦岛市"]);
	
	dsy.add("0_8_0", ["南关区", "宽城区", "朝阳区", "二道区", "绿园区", "双阳区", "九台区", "农安县", "榆树市", "德惠市"]);
	dsy.add("0_8_1", ["洮北区", "镇赉县", "通榆县", "洮南市", "大安市"]);
	dsy.add("0_8_2", ["宁江区", "前郭尔罗斯蒙古族自治县", "长岭县", "乾安县", "扶余市"]);
	dsy.add("0_8_3", ["昌邑区", "龙潭区", "船营区", "丰满区", "永吉县", "蛟河市", "桦甸市", "舒兰市", "磐石市"]);
	dsy.add("0_8_4", ["铁西区", "铁东区", "梨树县", "伊通满族自治县", "公主岭市", "双辽市"]);
	dsy.add("0_8_5", ["龙山区", "西安区", "东丰县", "东辽县"]);
	dsy.add("0_8_6", ["东昌区", "二道江区", "通化县", "辉南县", "柳河县", "梅河口市", "集安市"]);
	dsy.add("0_8_7", ["浑江区", "江源区", "抚松县", "靖宇县", "长白朝鲜族自治县", "临江市"]);
	dsy.add("0_8_8", ["延吉市", "图们市", "敦化市", "珲春市", "龙井市", "和龙市", "汪清县", "安图县"]);
	dsy.add("0_8", ["长春市", "白城市", "松原市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "延边朝鲜族自治州"]);
	
	dsy.add("0_9_0", ["道里区", "南岗区", "道外区", "平房区", "松北区", "香坊区", "呼兰区", "阿城区", "双城区", "依兰县", "方正县", "宾县", "巴彦县", "木兰县", "通河县", "延寿县", "尚志市", "五常市"]);
	dsy.add("0_9_1", ["龙沙区", "建华区", "铁锋区", "昂昂溪区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "龙江县", "依安县", "泰来县", "甘南县", "富裕县", "克山县", "克东县", "拜泉县", "讷河市"]);
	dsy.add("0_9_2", ["新兴区", "桃山区", "茄子河区", "勃利县"]);
	dsy.add("0_9_3", ["爱辉区", "嫩江县", "逊克县", "孙吴县", "北安市", "五大连池市"]);
	dsy.add("0_9_4", ["萨尔图区", "龙凤区", "让胡路区", "红岗区", "大同区", "肇州县", "肇源县", "林甸县", "杜尔伯特蒙古族自治县"]);
	dsy.add("0_9_5", ["向阳区", "工农区", "南山区", "兴安区", "东山区", "兴山区", "萝北县", "绥滨县"]);
	dsy.add("0_9_6", ["伊春区", "南岔区", "友好区", "西林区", "翠峦区", "新青区", "美溪区", "金山屯区", "五营区", "乌马河区", "汤旺河区", "带岭区", "乌伊岭区", "红星区", "上甘岭区", "嘉荫县", "铁力市"]);
	dsy.add("0_9_7", ["向阳区", "前进区", "东风区", "郊区", "桦南县", "桦川县", "汤原县", "抚远县", "同江市", "富锦市"]);
	dsy.add("0_9_8", ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "友谊县", "宝清县", "饶河县"]);
	dsy.add("0_9_9", ["鸡冠区", "恒山区", "滴道区", "梨树区", "城子河区", "麻山区", "鸡东县", "虎林市", "密山市"]);
	dsy.add("0_9_10", ["东安区", "阳明区", "爱民区", "西安区", "东宁县", "林口县", "绥芬河市", "海林市", "宁安市", "穆棱市"]);
	dsy.add("0_9_11", ["北林区", "望奎县", "兰西县", "青冈县", "庆安县", "明水县", "绥棱县", "安达市", "肇东市", "海伦市"]);
	dsy.add("0_9_12", ["呼玛县", "塔河县", "漠河县"]);
	dsy.add("0_9", ["哈尔滨市", "齐齐哈尔市", "七台河市", "黑河市", "大庆市", "鹤岗市", "伊春市", "佳木斯市", "双鸭山市", "鸡西市", "牡丹江市", "绥化市", "大兴安岭地区"]);
	
	dsy.add("0_10_0", ["玄武区", "秦淮区", "建邺区", "鼓楼区", "浦口区", "栖霞区", "雨花台区", "江宁区", "六合区", "溧水区", "高淳区"]);
	dsy.add("0_10_1", ["鼓楼区", "云龙区", "贾汪区", "泉山区", "铜山区", "丰县", "沛县", "睢宁县", "新沂市", "邳州市"]);
	dsy.add("0_10_2", ["连云区", "海州区", "赣榆区", "东海县", "灌云县", "灌南县"]);
	dsy.add("0_10_3", ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县"]);
	dsy.add("0_10_4", ["清河区", "淮安区", "淮阴区", "清浦区", "涟水县", "洪泽县", "盱眙县", "金湖县"]);
	dsy.add("0_10_5", ["亭湖区", "盐都区", "大丰区", "响水县", "滨海县", "阜宁县", "射阳县", "建湖县", "东台市"]);
	dsy.add("0_10_6", ["广陵区", "邗江区", "江都区", "宝应县", "仪征市", "高邮市"]);
	dsy.add("0_10_7", ["海陵区", "高港区", "姜堰区", "兴化市", "靖江市", "泰兴市"]);
	dsy.add("0_10_8", ["崇川区", "港闸区", "通州区", "海安县", "如东县", "启东市", "如皋市", "海门市"]);
	dsy.add("0_10_9", ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市"]);
	dsy.add("0_10_10", ["天宁区", "钟楼区", "新北区", "武进区", "金坛区", "溧阳市"]);
	dsy.add("0_10_11", ["崇安区", "南长区", "北塘区", "锡山区", "惠山区", "滨湖区", "江阴市", "宜兴市"]);
	dsy.add("0_10_12", ["虎丘区", "吴中区", "相城区", "姑苏区", "吴江区", "常熟市", "张家港市", "昆山市", "太仓市"]);
	dsy.add("0_10", ["南京市", "徐州市", "连云港市", "宿迁市", "淮安市", "盐城市", "扬州市", "泰州市", "南通市", "镇江市", "常州市", "无锡市", "苏州市"]);
	
	dsy.add("0_11_0", ["上城区", "下城区", "江干区", "拱墅区", "西湖区", "滨江区", "萧山区", "余杭区", "富阳区", "桐庐县", "淳安县", "建德市", "临安市"]);
	dsy.add("0_11_1", ["吴兴区", "南浔区", "德清县", "长兴县", "安吉县"]);
	dsy.add("0_11_2", ["南湖区", "秀洲区", "嘉善县", "海盐县", "海宁市", "平湖市", "桐乡市"]);
	dsy.add("0_11_3", ["定海区", "普陀区", "岱山县", "嵊泗县"]);
	dsy.add("0_11_4", ["海曙区", "江东区", "江北区", "北仑区", "镇海区", "鄞州区", "象山县", "宁海县", "余姚市", "慈溪市", "奉化市"]);
	dsy.add("0_11_5", ["越城区", "柯桥区", "上虞区", "新昌县", "诸暨市", "嵊州市"]);
	dsy.add("0_11_6", ["柯城区", "衢江区", "常山县", "开化县", "龙游县", "江山市"]);
	dsy.add("0_11_7", ["婺城区", "金东区", "武义县", "浦江县", "磐安县", "兰溪市", "义乌市", "东阳市", "永康市"]);
	dsy.add("0_11_8", ["椒江区", "黄岩区", "路桥区", "玉环县", "三门县", "天台县", "仙居县", "温岭市", "临海市"]);
	dsy.add("0_11_9", ["鹿城区", "龙湾区", "瓯海区", "洞头区", "永嘉县", "平阳县", "苍南县", "文成县", "泰顺县", "瑞安市", "乐清市"]);
	dsy.add("0_11_10", ["莲都区", "青田县", "缙云县", "遂昌县", "松阳县", "云和县", "庆元县", "景宁畲族自治县", "龙泉市"]);
	dsy.add("0_11", ["杭州市", "湖州市", "嘉兴市", "舟山市", "宁波市", "绍兴市", "衢州市", "金华市", "台州市", "温州市", "丽水市"]);
	
	dsy.add("0_12_0", ["瑶海区", "庐阳区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "庐江县", "巢湖市"]);
	dsy.add("0_12_1", ["埇桥区", "砀山县", "萧县", "灵璧县", "泗县"]);
	dsy.add("0_12_2", ["杜集区", "相山区", "烈山区", "濉溪县"]);
	dsy.add("0_12_3", ["谯城区", "涡阳县", "蒙城县", "利辛县"]);
	dsy.add("0_12_4", ["颍州区", "颍东区", "颍泉区", "临泉县", "太和县", "阜南县", "颍上县", "界首市"]);
	dsy.add("0_12_5", ["龙子湖区", "蚌山区", "禹会区", "淮上区", "怀远县", "五河县", "固镇县"]);
	dsy.add("0_12_6", ["大通区", "田家庵区", "谢家集区", "八公山区", "潘集区", "凤台县"]);
	dsy.add("0_12_7", ["琅琊区", "南谯区", "来安县", "全椒县", "定远县", "凤阳县", "天长市", "明光市"]);
	dsy.add("0_12_8", ["花山区", "雨山区", "博望区", "当涂县", "含山县", "和县"]);
	dsy.add("0_12_9", ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "繁昌县", "南陵县", "无为县"]);
	dsy.add("0_12_10", ["铜官山区", "狮子山区", "郊区", "铜陵县"]);
	dsy.add("0_12_11", ["迎江区", "大观区", "宜秀区", "怀宁县", "枞阳县", "潜山县", "太湖县", "宿松县", "望江县", "岳西县", "桐城市"]);
	dsy.add("0_12_12", ["屯溪区", "黄山区", "徽州区", "歙县", "休宁县", "黟县", "祁门县"]);
	dsy.add("0_12_13", ["金安区", "裕安区", "寿县", "霍邱县", "舒城县", "金寨县", "霍山县"]);
	dsy.add("0_12_15", ["贵池区", "东至县", "石台县", "青阳县"]);
	dsy.add("0_12_16", ["宣州区", "郎溪县", "广德县", "泾县", "绩溪县", "旌德县", "宁国市"]);
	dsy.add("0_12", ["合肥市", "宿州市", "淮北市", "亳州市", "阜阳市", "蚌埠市", "淮南市", "滁州市", "马鞍山市", "芜湖市", "铜陵市", "安庆市", "黄山市", "六安市", "池州市", "宣城市"]);
	
	dsy.add("0_13_0", ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "闽侯县", "连江县", "罗源县", "闽清县", "永泰县", "平潭县", "福清市", "长乐市"]);
	dsy.add("0_13_1", ["延平区", "建阳区", "顺昌县", "浦城县", "光泽县", "松溪县", "政和县", "邵武市", "武夷山市", "建瓯市"]);
	dsy.add("0_13_2", ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县"]);
	dsy.add("0_13_3", ["梅列区", "三元区", "明溪县", "清流县", "宁化县", "大田县", "尤溪县", "沙县", "将乐县", "泰宁县", "建宁县", "永安市"]);
	dsy.add("0_13_4", ["鲤城区", "丰泽区", "洛江区", "泉港区", "惠安县", "安溪县", "永春县", "德化县", "金门县", "石狮市", "晋江市", "南安市"]);
	dsy.add("0_13_5", ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区"]);
	dsy.add("0_13_6", ["芗城区", "龙文区", "云霄县", "漳浦县", "诏安县", "长泰县", "东山县", "南靖县", "平和县", "华安县", "龙海市"]);
	dsy.add("0_13_7", ["新罗区", "永定区", "长汀县", "上杭县", "武平县", "连城县", "漳平市"]);
	dsy.add("0_13_8", ["蕉城区", "霞浦县", "古田县", "屏南县", "寿宁县", "周宁县", "柘荣县", "福安市", "福鼎市"]);
	dsy.add("0_13", ["福州市", "南平市", "莆田市", "三明市", "泉州市", "厦门市", "漳州市", "龙岩市", "宁德市"]);
	
	dsy.add("0_14_0", ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建区", "南昌县", "安义县", "进贤县"]);
	dsy.add("0_14_1", ["庐山区", "浔阳区", "九江县", "武宁县", "修水县", "永修县", "德安县", "星子县", "都昌县", "湖口县", "彭泽县", "瑞昌市", "共青城市"]);
	dsy.add("0_14_2", ["昌江区", "珠山区", "浮梁县", "乐平市"]);
	dsy.add("0_14_3", ["月湖区", "余江县", "贵溪市"]);
	dsy.add("0_14_4", ["渝水区", "分宜县"]);
	dsy.add("0_14_5", ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县"]);
	dsy.add("0_14_6", ["章贡区", "南康区", "赣县", "信丰县", "大余县", "上犹县", "崇义县", "安远县", "龙南县", "定南县", "全南县", "宁都县", "于都县", "兴国县", "会昌县", "寻乌县", "石城县", "瑞金市"]);
	dsy.add("0_14_7", ["信州区", "广丰区", "上饶县", "玉山县", "铅山县", "横峰县", "弋阳县", "余干县", "鄱阳县", "万年县", "婺源县", "德兴市"]);
	dsy.add("0_14_8", ["临川区", "南城县", "黎川县", "南丰县", "崇仁县", "乐安县", "宜黄县", "金溪县", "资溪县", "东乡县", "广昌县"]);
	dsy.add("0_14_9", ["袁州区", "奉新县", "万载县", "上高县", "宜丰县", "靖安县", "铜鼓县", "丰城市", "樟树市", "高安市"]);
	dsy.add("0_14_10", ["吉州区", "青原区", "吉安县", "吉水县", "峡江县", "新干县", "永丰县", "泰和县", "遂川县", "万安县", "安福县", "永新县", "井冈山市"]);
	dsy.add("0_14", ["南昌市", "九江市", "景德镇市", "鹰潭市", "新余市", "萍乡市", "赣州市", "上饶市", "抚州市", "宜春市", "吉安市"]);
	
	dsy.add("0_15_0", ["历下区", "市中区", "槐荫区", "天桥区", "历城区", "长清区", "平阴县", "济阳县", "商河县", "章丘市"]);
	dsy.add("0_15_1", ["市南区", "市北区", "黄岛区", "崂山区", "李沧区", "城阳区", "胶州市", "即墨市", "平度市", "莱西市"]);
	dsy.add("0_15_2", ["东昌府区", "阳谷县", "莘县", "茌平县", "东阿县", "冠县", "高唐县", "临清市"]);
	dsy.add("0_15_3", ["德城区", "陵城区", "宁津县", "庆云县", "临邑县", "齐河县", "平原县", "夏津县", "武城县", "乐陵市", "禹城市"]);
	dsy.add("0_15_4", ["东营区", "河口区", "垦利县", "利津县", "广饶县"]);
	dsy.add("0_15_5", ["淄川区", "张店区", "博山区", "临淄区", "周村区", "桓台县", "高青县", "沂源县"]);
	dsy.add("0_15_6", ["潍城区", "寒亭区", "坊子区", "奎文区", "临朐县", "昌乐县", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市"]);
	dsy.add("0_15_7", ["芝罘区", "福山区", "牟平区", "莱山区", "长岛县", "龙口市", "莱阳市", "莱州市", "蓬莱市", "招远市", "栖霞市", "海阳市"]);
	dsy.add("0_15_8", ["环翠区", "文登区", "荣成市", "乳山市"]);
	dsy.add("0_15_9", ["东港区", "岚山区", "五莲县", "莒县"]);
	dsy.add("0_15_10", ["兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "兰陵县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县"]);
	dsy.add("0_15_11", ["市中区", "薛城区", "峄城区", "台儿庄区", "山亭区", "滕州市"]);
	dsy.add("0_15_12", ["任城区", "兖州区", "微山县", "鱼台县", "金乡县", "嘉祥县", "汶上县", "泗水县", "梁山县", "曲阜市", "邹城市"]);
	dsy.add("0_15_13", ["泰山区", "岱岳区", "宁阳县", "东平县", "新泰市", "肥城市"]);
	dsy.add("0_15_14", ["莱城区", "钢城区"]);
	dsy.add("0_15_15", ["滨城区", "沾化区", "惠民县", "阳信县", "无棣县", "博兴县", "邹平县"]);
	dsy.add("0_15_16", ["牡丹区", "曹县", "单县", "成武县", "巨野县", "郓城县", "鄄城县", "定陶县", "东明县"]);
	dsy.add("0_15", ["济南市", "青岛市", "聊城市", "德州市", "东营市", "淄博市", "潍坊市", "烟台市", "威海市", "日照市", "临沂市", "枣庄市", "济宁市", "泰安市", "莱芜市", "滨州市", "菏泽市"]);
	
	dsy.add("0_16_0", ["中原区", "二七区", "管城回族区", "金水区", "上街区", "惠济区", "中牟县", "巩义市", "荥阳市", "新密市", "新郑市", "登封市"]);
	dsy.add("0_16_1", ["龙亭区", "顺河回族区", "鼓楼区", "禹王台区", "金明区", "祥符区", "杞县", "通许县", "尉氏县", "兰考县"]);
	dsy.add("0_16_2", ["湖滨区", "渑池县", "陕县", "卢氏县", "义马市", "灵宝市"]);
	dsy.add("0_16_3", ["老城区", "西工区", "瀍河回族区", "涧西区", "吉利区", "洛龙区", "孟津县", "新安县", "栾川县", "嵩县", "汝阳县", "宜阳县", "洛宁县", "伊川县", "偃师市"]);
	dsy.add("0_16_4", ["解放区", "中站区", "马村区", "山阳区", "修武县", "博爱县", "武陟县", "温县", "沁阳市", "孟州市"]);
	dsy.add("0_16_5", ["红旗区", "卫滨区", "凤泉区", "牧野区", "新乡县", "获嘉县", "原阳县", "延津县", "封丘县", "长垣县", "卫辉市", "辉县市"]);
	dsy.add("0_16_6", ["鹤山区", "山城区", "淇滨区", "浚县", "淇县"]);
	dsy.add("0_16_7", ["文峰区", "北关区", "殷都区", "龙安区", "安阳县", "汤阴县", "滑县", "内黄县", "林州市"]);
	dsy.add("0_16_8", ["华龙区", "清丰县", "南乐县", "范县", "台前县", "濮阳县"]);
	dsy.add("0_16_9", ["梁园区", "睢阳区", "民权县", "睢县", "宁陵县", "柘城县", "虞城县", "夏邑县", "永城市"]);
	dsy.add("0_16_10", ["魏都区", "许昌县", "鄢陵县", "襄城县", "禹州市", "长葛市"]);
	dsy.add("0_16_11", ["源汇区", "郾城区", "召陵区", "舞阳县", "临颍县"]);
	dsy.add("0_16_12", ["新华区", "卫东区", "石龙区", "湛河区", "宝丰县", "叶县", "鲁山县", "郏县", "舞钢市", "汝州市"]);
	dsy.add("0_16_13", ["宛城区", "卧龙区", "南召县", "方城县", "西峡县", "镇平县", "内乡县", "淅川县", "社旗县", "唐河县", "新野县", "桐柏县", "邓州市"]);
	dsy.add("0_16_14", ["浉河区", "平桥区", "罗山县", "光山县", "新县", "商城县", "固始县", "潢川县", "淮滨县", "息县"]);
	dsy.add("0_16_15", ["川汇区", "扶沟县", "西华县", "商水县", "沈丘县", "郸城县", "淮阳县", "太康县", "鹿邑县", "项城市"]);
	dsy.add("0_16_16", ["驿城区", "西平县", "上蔡县", "平舆县", "正阳县", "确山县", "泌阳县", "汝南县", "遂平县", "新蔡县"]);
	dsy.add("0_16_17", ["济源市"]);
	dsy.add("0_16", ["郑州市", "开封市", "三门峡市", "洛阳市", "焦作市", "新乡市", "鹤壁市", "安阳市", "濮阳市", "商丘市", "许昌市", "漯河市", "平顶山市", "南阳市", "信阳市", "周口市", "驻马店市", "省直辖县级行政区划"]);
	
	dsy.add("0_17_0", ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区"]);
	dsy.add("0_17_1", ["茅箭区", "张湾区", "郧阳区", "郧西县", "竹山县", "竹溪县", "房县", "丹江口市"]);
	dsy.add("0_17_2", ["襄城区", "樊城区", "襄州区", "南漳县", "谷城县", "保康县", "老河口市", "枣阳市", "宜城市"]);
	dsy.add("0_17_3", ["东宝区", "掇刀区", "京山县", "沙洋县", "钟祥市"]);
	dsy.add("0_17_4", ["孝南区", "孝昌县", "大悟县", "云梦县", "应城市", "安陆市", "汉川市"]);
	dsy.add("0_17_5", ["黄州区", "团风县", "红安县", "罗田县", "英山县", "浠水县", "蕲春县", "黄梅县", "麻城市", "武穴市"]);
	dsy.add("0_17_6", ["梁子湖区", "华容区", "鄂城区"]);
	dsy.add("0_17_7", ["黄石港区", "西塞山区", "下陆区", "铁山区", "阳新县", "大冶市"]);
	dsy.add("0_17_8", ["咸安区", "嘉鱼县", "通城县", "崇阳县", "通山县", "赤壁市"]);
	dsy.add("0_17_9", ["沙市区", "荆州区", "公安县", "监利县", "江陵县", "石首市", "洪湖市", "松滋市"]);
	dsy.add("0_17_10", ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "远安县", "兴山县", "秭归县", "长阳土家族自治县", "五峰土家族自治县", "宜都市", "当阳市", "枝江市"]);
	dsy.add("0_17_11", ["曾都区", "随县", "广水市"]);
	dsy.add("0_17_12", ["恩施市", "利川市", "建始县", "巴东县", "宣恩县", "咸丰县", "来凤县", "鹤峰县"]);
	dsy.add("0_17_13", ["仙桃市", "潜江市", "天门市", "神农架林区"]);
	dsy.add("0_17", ["武汉市", "十堰市", "襄樊市", "荆门市", "孝感市", "黄冈市", "鄂州市", "黄石市", "咸宁市", "荆州市", "宜昌市", "随州市", "恩施土家族苗族自治州", "省直辖县级行政单位"]);
	
	dsy.add("0_18_0", ["芙蓉区", "天心区", "岳麓区", "开福区", "雨花区", "望城区", "长沙县", "宁乡县", "浏阳市"]);
	dsy.add("0_18_1", ["永定区", "武陵源区", "慈利县", "桑植县"]);
	dsy.add("0_18_2", ["武陵区", "鼎城区", "安乡县", "汉寿县", "澧县", "临澧县", "桃源县", "石门县", "津市市"]);
	dsy.add("0_18_3", ["资阳区", "赫山区", "南县", "桃江县", "安化县", "沅江市"]);
	dsy.add("0_18_4", ["岳阳楼区", "云溪区", "君山区", "岳阳县", "华容县", "湘阴县", "平江县", "汨罗市", "临湘市"]);
	dsy.add("0_18_5", ["荷塘区", "芦淞区", "石峰区", "天元区", "株洲县", "攸县", "茶陵县", "炎陵县", "醴陵市"]);
	dsy.add("0_18_6", ["雨湖区", "岳塘区", "湘潭县", "湘乡市", "韶山市"]);
	dsy.add("0_18_7", ["珠晖区", "雁峰区", "石鼓区", "蒸湘区", "南岳区", "衡阳县", "衡南县", "衡山县", "衡东县", "祁东县", "耒阳市", "常宁市"]);
	dsy.add("0_18_8", ["北湖区", "苏仙区", "桂阳县", "宜章县", "永兴县", "嘉禾县", "临武县", "汝城县", "桂东县", "安仁县", "资兴市"]);
	dsy.add("0_18_9", ["零陵区", "冷水滩区", "祁阳县", "东安县", "双牌县", "道县", "江永县", "宁远县", "蓝山县", "新田县", "江华瑶族自治县"]);
	dsy.add("0_18_10", ["双清区", "大祥区", "北塔区", "邵东县", "新邵县", "邵阳县", "隆回县", "洞口县", "绥宁县", "新宁县", "城步苗族自治县", "武冈市"]);
	dsy.add("0_18_11", ["鹤城区", "中方县", "沅陵县", "辰溪县", "溆浦县", "会同县", "麻阳苗族自治县", "新晃侗族自治县", "芷江侗族自治县", "靖州苗族侗族自治县", "通道侗族自治县", "洪江市"]);
	dsy.add("0_18_12", ["娄星区", "双峰县", "新化县", "冷水江市", "涟源市"]);
	dsy.add("0_18_13", ["吉首市", "泸溪县", "凤凰县", "花垣县", "保靖县", "古丈县", "永顺县", "龙山县"]);
	dsy.add("0_18", ["长沙市", "张家界市", "常德市", "益阳市", "岳阳市", "株洲市", "湘潭市", "衡阳市", "郴州市", "永州市", "邵阳市", "怀化市", "娄底市", "湘西土家族苗族自治州"]);
	
	dsy.add("0_19_0", ["荔湾区", "越秀区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "从化区", "增城区"]);
	dsy.add("0_19_1", ["罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "盐田区"]);
	dsy.add("0_19_2", ["清城区", "清新区", "佛冈县", "阳山县", "连山壮族瑶族自治县", "连南瑶族自治县", "英德市", "连州市"]);
	dsy.add("0_19_3", ["武江区", "浈江区", "曲江区", "始兴县", "仁化县", "翁源县", "乳源瑶族自治县", "新丰县", "乐昌市", "南雄市"]);
	dsy.add("0_19_4", ["源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县"]);
	dsy.add("0_19_5", ["梅江区", "梅县区", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "兴宁市"]);
	dsy.add("0_19_6", ["湘桥区", "潮安区", "饶平县"]);
	dsy.add("0_19_7", ["龙湖区", "金平区", "濠江区", "潮阳区", "潮南区", "澄海区", "南澳县"]);
	dsy.add("0_19_8", ["榕城区", "揭东区", "揭西县", "惠来县", "普宁市"]);
	dsy.add("0_19_9", ["城区", "海丰县", "陆河县", "陆丰市"]);
	dsy.add("0_19_10", ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县"]);
	dsy.add("0_19_11", ["东莞市"]);
	dsy.add("0_19_12", ["香洲区", "斗门区", "金湾区"]);
	dsy.add("0_19_13", ["中山市"]);
	dsy.add("0_19_14", ["蓬江区", "江海区", "新会区", "台山市", "开平市", "鹤山市", "恩平市"]);
	dsy.add("0_19_15", ["禅城区", "南海区", "顺德区", "三水区", "高明区"]);
	dsy.add("0_19_16", ["端州区", "鼎湖区", "高要区", "广宁县", "怀集县", "封开县", "德庆县", "四会市"]);
	dsy.add("0_19_17", ["云城区", "云安区", "新兴县", "郁南县", "罗定市"]);
	dsy.add("0_19_18", ["江城区", "阳东区", "阳西县", "阳春市"]);
	dsy.add("0_19_19", ["茂南区", "电白区", "高州市", "化州市", "信宜市"]);
	dsy.add("0_19_20", ["赤坎区", "霞山区", "坡头区", "麻章区", "遂溪县", "徐闻县", "廉江市", "雷州市", "吴川市"]);
	dsy.add("0_19", ["广州市", "深圳市", "清远市", "韶关市", "河源市", "梅州市", "潮州市", "汕头市", "揭阳市", "汕尾市", "惠州市", "东莞市", "珠海市", "中山市", "江门市", "佛山市", "肇庆市", "云浮市", "阳江市", "茂名市", "湛江市"]);
	
	dsy.add("0_20_0", ["兴宁区", "青秀区", "江南区", "西乡塘区", "良庆区", "邕宁区", "武鸣区", "隆安县", "马山县", "上林县", "宾阳县", "横县"]);
	dsy.add("0_20_1", ["秀峰区", "叠彩区", "象山区", "七星区", "雁山区", "临桂区", "阳朔县", "灵川县", "全州县", "兴安县", "永福县", "灌阳县", "龙胜各族自治县", "资源县", "平乐县", "荔浦县", "恭城瑶族自治县"]);
	dsy.add("0_20_2", ["城中区", "鱼峰区", "柳南区", "柳北区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县"]);
	dsy.add("0_20_3", ["万秀区", "长洲区", "龙圩区", "苍梧县", "藤县", "蒙山县", "岑溪市"]);
	dsy.add("0_20_4", ["港北区", "港南区", "覃塘区", "平南县", "桂平市"]);
	dsy.add("0_20_5", ["玉州区", "福绵区", "容县", "陆川县", "博白县", "兴业县", "北流市"]);
	dsy.add("0_20_6", ["钦南区", "钦北区", "灵山县", "浦北县"]);
	dsy.add("0_20_7", ["海城区", "银海区", "铁山港区", "合浦县"]);
	dsy.add("0_20_8", ["港口区", "防城区", "上思县", "东兴市"]);
	dsy.add("0_20_9", ["江州区", "扶绥县", "宁明县", "龙州县", "大新县", "天等县", "凭祥市"]);
	dsy.add("0_20_10", ["右江区", "田阳县", "田东县", "平果县", "德保县", "那坡县", "凌云县", "乐业县", "田林县", "西林县", "隆林各族自治县", "靖西市"]);
	dsy.add("0_20_11", ["金城江区", "南丹县", "天峨县", "凤山县", "东兰县", "罗城仫佬族自治县", "环江毛南族自治县", "巴马瑶族自治县", "都安瑶族自治县", "大化瑶族自治县", "宜州市"]);
	dsy.add("0_20_12", ["兴宾区", "忻城县", "象州县", "武宣县", "金秀瑶族自治县", "合山市"]);
	dsy.add("0_20_13", ["八步区", "昭平县", "钟山县", "富川瑶族自治县"]);
	dsy.add("0_20", ["南宁市", "桂林市", "柳州市", "梧州市", "贵港市", "玉林市", "钦州市", "北海市", "防城港市", "崇左市", "百色市", "河池市", "来宾市", "贺州市"]);
	
	dsy.add("0_21_0", ["秀英区", "龙华区", "琼山区", "美兰区"]);
	dsy.add("0_21_1", ["海棠区", "吉阳区", "天涯区", "崖州区"]);
	dsy.add("0_21_2", ["西沙群岛", "南沙群岛", "中沙群岛的岛礁及其海域"]);
	dsy.add("0_21_3", ["五指山市", "琼海市", "儋州市", "文昌市", "万宁市", "东方市", "定安县", "屯昌县", "澄迈县", "临高县", "白沙黎族自治县", "昌江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县"]);
	dsy.add("0_21", ["海口市", "三亚市", "三沙市", "省直辖县级行政区划"]);
	
	dsy.add("0_22_0", ["锦江区", "青羊区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "金堂县", "双流县", "郫县", "大邑县", "蒲江县", "新津县", "都江堰市", "彭州市", "邛崃市", "崇州市"]);
	dsy.add("0_22_1", ["利州区", "昭化区", "朝天区", "旺苍县", "青川县", "剑阁县", "苍溪县"]);
	dsy.add("0_22_2", ["涪城区", "游仙区", "三台县", "盐亭县", "安县", "梓潼县", "北川羌族自治县", "平武县", "江油市"]);
	dsy.add("0_22_3", ["旌阳区", "中江县", "罗江县", "广汉市", "什邡市", "绵竹市"]);
	dsy.add("0_22_4", ["顺庆区", "高坪区", "嘉陵区", "南部县", "营山县", "蓬安县", "仪陇县", "西充县", "阆中市"]);
	dsy.add("0_22_5", ["广安区", "前锋区", "岳池县", "武胜县", "邻水县", "华蓥市"]);
	dsy.add("0_22_6", ["船山区", "安居区", "蓬溪县", "射洪县", "大英县"]);
	dsy.add("0_22_7", ["市中区", "东兴区", "威远县", "资中县", "隆昌县"]);
	dsy.add("0_22_8", ["市中区", "沙湾区", "五通桥区", "金口河区", "犍为县", "井研县", "夹江县", "沐川县", "峨边彝族自治县", "马边彝族自治县", "峨眉山市"]);
	dsy.add("0_22_9", ["自流井区", "贡井区", "大安区", "沿滩区", "荣县", "富顺县"]);
	dsy.add("0_22_10", ["江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县"]);
	dsy.add("0_22_11", ["翠屏区", "南溪区", "宜宾县", "江安县", "长宁县", "高县", "珙县", "筠连县", "兴文县", "屏山县"]);
	dsy.add("0_22_12", ["东区", "西区", "仁和区", "米易县", "盐边县"]);
	dsy.add("0_22_13", ["巴州区", "恩阳区", "通江县", "南江县", "平昌县"]);
	dsy.add("0_22_14", ["通川区", "达川区", "宣汉县", "开江县", "大竹县", "渠县", "万源市"]);
	dsy.add("0_22_15", ["雁江区", "安岳县", "乐至县", "简阳市"]);
	dsy.add("0_22_16", ["东坡区", "彭山区", "仁寿县", "洪雅县", "丹棱县", "青神县"]);
	dsy.add("0_22_17", ["雨城区", "名山区", "荥经县", "汉源县", "石棉县", "天全县", "芦山县", "宝兴县"]);
	dsy.add("0_22_18", ["汶川县", "理县", "茂县", "松潘县", "九寨沟县", "金川县", "小金县", "黑水县", "马尔康县", "壤塘县", "阿坝县", "若尔盖县", "红原县"]);
	dsy.add("0_22_19", ["康定市", "泸定县", "丹巴县", "九龙县", "雅江县", "道孚县", "炉霍县", "甘孜县", "新龙县", "德格县", "白玉县", "石渠县", "色达县", "理塘县", "巴塘县", "乡城县", "稻城县", "得荣县"]);
	dsy.add("0_22_20", ["西昌市", "木里藏族自治县", "盐源县", "德昌县", "会理县", "会东县", "宁南县", "普格县", "布拖县", "金阳县", "昭觉县", "喜德县", "冕宁县", "越西县", "甘洛县", "美姑县", "雷波县"]);
	dsy.add("0_22", ["成都市", "广元市", "绵阳市", "德阳市", "南充市", "广安市", "遂宁市", "内江市", "乐山市", "自贡市", "泸州市", "宜宾市", "攀枝花市", "巴中市", "达州市", "资阳市", "眉山市", "雅安市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"]);
	
	dsy.add("0_23_0", ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "观山湖区", "开阳县", "息烽县", "修文县", "清镇市"]);
	dsy.add("0_23_1", ["钟山区", "六枝特区", "水城县", "盘县"]);
	dsy.add("0_23_2", ["红花岗区", "汇川区", "遵义县", "桐梓县", "绥阳县", "正安县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "凤冈县", "湄潭县", "余庆县", "习水县", "赤水市", "仁怀市"]);
	dsy.add("0_23_3", ["西秀区", "平坝区", "普定县", "镇宁布依族苗族自治县", "关岭布依族苗族自治县", "紫云苗族布依族自治县"]);
	dsy.add("0_23_4", ["七星关区", "大方县", "黔西县", "金沙县", "织金县", "纳雍县", "威宁彝族回族苗族自治县", "赫章县"]);
	dsy.add("0_23_5", ["碧江区", "万山区", "江口县", "玉屏侗族自治县", "石阡县", "思南县", "印江土家族苗族自治县", "德江县", "沿河土家族自治县", "松桃苗族自治县"]);
	dsy.add("0_23_6", ["凯里市", "黄平县", "施秉县", "三穗县", "镇远县", "岑巩县", "天柱县", "锦屏县", "剑河县", "台江县", "黎平县", "榕江县", "从江县", "雷山县", "麻江县", "丹寨县"]);
	dsy.add("0_23_7", ["都匀市", "福泉市", "荔波县", "贵定县", "瓮安县", "独山县", "平塘县", "罗甸县", "长顺县", "龙里县", "惠水县", "三都水族自治县"]);
	dsy.add("0_23_8", ["兴义市", "兴仁县", "普安县", "晴隆县", "贞丰县", "望谟县", "册亨县", "安龙县"]);
	dsy.add("0_23", ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节地区", "铜仁地区", "黔东南苗族侗族自治州", "黔南布依族苗族自治州", "黔西南布依族苗族自治州"]);
	
	dsy.add("0_24_0", ["五华区", "盘龙区", "官渡区", "西山区", "东川区", "呈贡区", "晋宁县", "富民县", "宜良县", "石林彝族自治县", "嵩明县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "安宁市"]);
	dsy.add("0_24_1", ["麒麟区", "马龙县", "陆良县", "师宗县", "罗平县", "富源县", "会泽县", "沾益县", "宣威市"]);
	dsy.add("0_24_2", ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县"]);
	dsy.add("0_24_3", ["隆阳区", "施甸县", "龙陵县", "昌宁县", "腾冲市"]);
	dsy.add("0_24_4", ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县"]);
	dsy.add("0_24_5", ["古城区", "玉龙纳西族自治县", "永胜县", "华坪县", "宁蒗彝族自治县"]);
	dsy.add("0_24_6", ["思茅区", "宁洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县"]);
	dsy.add("0_24_7", ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县"]);
	dsy.add("0_24_8", ["瑞丽市", "芒市", "梁河县", "盈江县", "陇川县"]);
	dsy.add("0_24_9", ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县"]);
	dsy.add("0_24_10", ["香格里拉市", "德钦县", "维西傈僳族自治县"]);
	dsy.add("0_24_11", ["大理市", "漾濞彝族自治县", "祥云县", "宾川县", "弥渡县", "南涧彝族自治县", "巍山彝族回族自治县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县"]);
	dsy.add("0_24_12", ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县"]);
	dsy.add("0_24_13", ["个旧市", "开远市", "蒙自市", "弥勒市", "屏边苗族自治县", "建水县", "石屏县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "绿春县", "河口瑶族自治县"]);
	dsy.add("0_24_14", ["文山市", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县"]);
	dsy.add("0_24_15", ["景洪市", "勐海县", "勐腊县"]);
	dsy.add("0_24", ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州", "大理白族自治州", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州"]);
	
	dsy.add("0_25_0", ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县"]);
	dsy.add("0_25_1", ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "双湖县"]);
	dsy.add("0_25_2", ["卡若区", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县"]);
	dsy.add("0_25_3", ["巴宜区", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县"]);
	dsy.add("0_25_4", ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县"]);
	dsy.add("0_25_5", ["桑珠孜区", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县"]);
	dsy.add("0_25_6", ["普兰县", "札达县", "噶尔县", "日土县", "革吉县", "改则县", "措勤县"]);
	dsy.add("0_25", ["拉萨市", "那曲地区", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "阿里地区"]);
	
	dsy.add("0_26_0", ["新城区", "碑林区", "莲湖区", "灞桥区", "未央区", "雁塔区", "阎良区", "临潼区", "长安区", "高陵区", "蓝田县", "周至县", "户县"]);
	dsy.add("0_26_1", ["宝塔区", "延长县", "延川县", "子长县", "安塞县", "志丹县", "吴起县", "甘泉县", "富县", "洛川县", "宜川县", "黄龙县", "黄陵县"]);
	dsy.add("0_26_2", ["王益区", "印台区", "耀州区", "宜君县"]);
	dsy.add("0_26_3", ["临渭区", "华县", "潼关县", "大荔县", "合阳县", "澄城县", "蒲城县", "白水县", "富平县", "韩城市", "华阴市"]);
	dsy.add("0_26_4", ["秦都区", "杨陵区", "渭城区", "三原县", "泾阳县", "乾县", "礼泉县", "永寿县", "彬县", "长武县", "旬邑县", "淳化县", "武功县", "兴平市"]);
	dsy.add("0_26_5", ["渭滨区", "金台区", "陈仓区", "凤翔县", "岐山县", "扶风县", "眉县", "陇县", "千阳县", "麟游县", "凤县", "太白县"]);
	dsy.add("0_26_6", ["汉台区", "南郑县", "城固县", "洋县", "西乡县", "勉县", "宁强县", "略阳县", "镇巴县", "留坝县", "佛坪县"]);
	dsy.add("0_26_7", ["榆阳区", "神木县", "府谷县", "横山县", "靖边县", "定边县", "绥德县", "米脂县", "佳县", "吴堡县", "清涧县", "子洲县"]);
	dsy.add("0_26_8", ["汉滨区", "汉阴县", "石泉县", "宁陕县", "紫阳县", "岚皋县", "平利县", "镇坪县", "旬阳县", "白河县"]);
	dsy.add("0_26_9", ["商州区", "洛南县", "丹凤县", "商南县", "山阳县", "镇安县", "柞水县"]);
	dsy.add("0_26", ["西安市", "延安市", "铜川市", "渭南市", "咸阳市", "宝鸡市", "汉中市", "榆林市", "安康市", "商洛市"]);
	
	dsy.add("0_27_0", ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县"]);
	dsy.add("0_27_1", ["市辖区"]);
	dsy.add("0_27_2", ["白银区", "平川区", "靖远县", "会宁县", "景泰县"]);
	dsy.add("0_27_3", ["秦州区", "麦积区", "清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县"]);
	dsy.add("0_27_4", ["凉州区", "民勤县", "古浪县", "天祝藏族自治县"]);
	dsy.add("0_27_5", ["肃州区", "金塔县", "瓜州县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "玉门市", "敦煌市"]);
	dsy.add("0_27_6", ["甘州区", "肃南裕固族自治县", "民乐县", "临泽县", "高台县", "山丹县"]);
	dsy.add("0_27_7", ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县"]);
	dsy.add("0_27_8", ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县"]);
	dsy.add("0_27_9", ["安定区", "通渭县", "陇西县", "渭源县", "临洮县", "漳县", "岷县"]);
	dsy.add("0_27_10", ["武都区", "成县", "文县", "宕昌县", "康县", "西和县", "礼县", "徽县", "两当县"]);
	dsy.add("0_27_11", ["金川区", "永昌县"]);
	dsy.add("0_27_12", ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县"]);
	dsy.add("0_27_13", ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县"]);
	dsy.add("0_27", ["兰州市", "嘉峪关市", "白银市", "天水市", "武威市", "酒泉市", "张掖市", "庆阳市", "平凉市", "定西市", "陇南市", "金昌市", "临夏回族自治州", "甘南藏族自治州"]);
	
	dsy.add("0_28_0", ["城东区", "城中区", "城西区", "城北区", "大通回族土族自治县", "湟中县", "湟源县"]);
	dsy.add("0_28_1", ["乐都区", "平安区", "民和回族土族自治县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县"]);
	dsy.add("0_28_2", ["海晏县", "三角城镇", "祁连县", "八宝镇", "刚察县", "沙柳河镇", "门源回族自治县", "浩门镇"]);
	dsy.add("0_28_3", ["共和县", "同德县", "贵德县", "兴海县", "贵南县"]);
	dsy.add("0_28_4", ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县"]);
	dsy.add("0_28_5", ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县"]);
	dsy.add("0_28_6", ["玉树市", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县"]);
	dsy.add("0_28_7", ["格尔木市", "德令哈市", "乌兰县", "都兰县", "天峻县"]);
	dsy.add("0_28", ["西宁市", "海东市", "海北藏族自治州", "海南藏族自治州", "黄南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"]);
	
	dsy.add("0_29_0", ["兴庆区", "西夏区", "金凤区", "永宁县", "贺兰县", "灵武市"]);
	dsy.add("0_29_1", ["大武口区", "惠农区", "平罗县"]);
	dsy.add("0_29_2", ["利通区", "红寺堡区", "盐池县", "同心县", "青铜峡市"]);
	dsy.add("0_29_3", ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县"]);
	dsy.add("0_29_4", ["沙坡头区", "中宁县", "海原县"]);
	dsy.add("0_29", ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"]);
	
	dsy.add("0_30_0", ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "米东区", "乌鲁木齐县"]);
	dsy.add("0_30_1", ["独山子区", "克拉玛依区", "白碱滩区", "乌尔禾区"]);
	dsy.add("0_30_2", ["石河子市", "阿拉尔市", "图木舒克市", "五家渠市"]);
	dsy.add("0_30_3", ["喀什市", "疏附县", "疏勒县", "英吉沙县", "泽普县", "莎车县", "叶城县", "麦盖提县", "岳普湖县", "伽师县", "巴楚县", "塔什库尔干塔吉克自治县"]);
	dsy.add("0_30_4", ["阿克苏市", "温宿县", "库车县", "沙雅县", "新和县", "拜城县", "乌什县", "阿瓦提县", "柯坪县"]);
	dsy.add("0_30_5", ["和田市", "和田县", "墨玉县", "皮山县", "洛浦县", "策勒县", "于田县", "民丰县"]);
	dsy.add("0_30_6", ["高昌区", "鄯善县", "托克逊县"]);
	dsy.add("0_30_7", ["哈密市", "巴里坤哈萨克自治县", "伊吾县"]);
	dsy.add("0_30_8", ["阿图什市", "阿克陶县", "阿合奇县", "乌恰县"]);
	dsy.add("0_30_9", ["博乐市", "阿拉山口市", "精河县", "温泉县"]);
	dsy.add("0_30_10", ["昌吉市", "阜康市", "呼图壁县", "玛纳斯县", "奇台县", "吉木萨尔县", "木垒哈萨克自治县"]);
	dsy.add("0_30_11", ["库尔勒市", "轮台县", "尉犁县", "若羌县", "且末县", "焉耆回族自治县", "和静县", "和硕县", "博湖县"]);
	dsy.add("0_30_12", ["伊宁市", "奎屯市", "霍尔果斯市", "伊宁县", "察布查尔锡伯自治县", "霍城县", "巩留县", "新源县", "昭苏县", "特克斯县", "尼勒克县"]);
	dsy.add("0_30_13", ["塔城市", "乌苏市", "额敏县", "沙湾县", "托里县", "裕民县", "和布克赛尔蒙古自治县"]);
	dsy.add("0_30_14", ["阿勒泰市", "布尔津县", "富蕴县", "福海县", "哈巴河县", "青河县", "吉木乃县"]);
	dsy.add("0_30", ["乌鲁木齐市", "克拉玛依市", "自治区直辖县级行政单位", "喀什地区", "阿克苏地区", "和田地区", "吐鲁番地区", "哈密地区", "克孜勒苏柯尔克孜自治州", "博尔塔拉蒙古自治州", "昌吉回族自治州", "巴音郭楞蒙古自治州", "伊犁哈萨克自治州", "塔城地区", "阿勒泰地区"]);
	
	dsy.add("0_31_0", ["中西区", "东区", "九龙城区", "观塘区", "南区", "深水埗区", "湾仔区", "黄大仙区", "油尖旺区", "离岛区", "葵青区", "北区", "西贡区", "沙田区", "屯门区", "大埔区", "荃湾区", "元朗区"]);
	dsy.add("0_31", ["香港特别行政区"]);
	dsy.add("0_32_0", ["澳门特别行政区"]);
	dsy.add("0_32", ["澳门特别行政区"]);
	dsy.add("0_33_0", [" "]);
	dsy.add("0_33", ["台北", "高雄", "台中", "花莲", "基隆", "嘉义", "金门", "连江", "苗栗", "南投", "澎湖", "屏东", "台东", "台南", "桃园", "新竹", "宜兰", "云林", "彰化"]);
	dsy.add("0", ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海省", "宁夏", "新疆", "香港", "澳门", "台湾省"]);
	
	exports.address = dsy;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	__webpack_require__(68);
	__webpack_require__(72);
	__webpack_require__(76);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(94);
	__webpack_require__(98);
	__webpack_require__(102);
	__webpack_require__(106);
	__webpack_require__(107);


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(65)
	var __weex_style__ = __webpack_require__(66)
	var __weex_script__ = __webpack_require__(67)
	
	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(69)
	var __weex_style__ = __webpack_require__(70)
	var __weex_script__ = __webpack_require__(71)
	
	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(73)
	var __weex_style__ = __webpack_require__(74)
	var __weex_script__ = __webpack_require__(75)
	
	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(77)
	var __weex_style__ = __webpack_require__(78)
	var __weex_script__ = __webpack_require__(79)
	
	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(81)
	var __weex_style__ = __webpack_require__(82)
	var __weex_script__ = __webpack_require__(83)
	
	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(85)
	var __weex_style__ = __webpack_require__(86)
	var __weex_script__ = __webpack_require__(87)
	
	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _assign = __webpack_require__(88);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }
	
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);
	
	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	
	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(91)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(42)
	  , gOPS     = __webpack_require__(92)
	  , pIE      = __webpack_require__(93)
	  , toObject = __webpack_require__(56)
	  , IObject  = __webpack_require__(17)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(33)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 92 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 93 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(95)
	var __weex_style__ = __webpack_require__(96)
	var __weex_script__ = __webpack_require__(97)
	
	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(99)
	var __weex_style__ = __webpack_require__(100)
	var __weex_script__ = __webpack_require__(101)
	
	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	
	    backgroundColor: 'black',
	
	    height: 88,
	
	    title: "",
	
	    titleColor: 'black',
	
	    rightItemSrc: '',
	
	    rightItemTitle: '',
	
	    rightItemColor: 'black',
	
	    leftItemSrc: '',
	
	    leftItemTitle: '',
	
	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98)
	var __weex_template__ = __webpack_require__(103)
	var __weex_style__ = __webpack_require__(104)
	var __weex_script__ = __webpack_require__(105)
	
	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)
	var __weex_template__ = __webpack_require__(111)
	var __weex_style__ = __webpack_require__(112)
	var __weex_script__ = __webpack_require__(113)
	
	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(108)
	var __weex_style__ = __webpack_require__(109)
	var __weex_script__ = __webpack_require__(110)
	
	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);
	
	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);
	
	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "time"
	      ],
	      "attr": {
	        "value": function () {return '用户预期计划生效时间：' + (this.time)}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "messagebox"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "userinfo"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemtitle"
	              ],
	              "attr": {
	                "value": "用户信息"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '姓名：' + (this.username)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '身份证号：' + (this.idcard)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '手机号：' + (this.phone)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "carinfo"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemtitle"
	              ],
	              "attr": {
	                "value": "车辆信息"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '车牌号：' + (this.carid)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '品牌型号：' + (this.cartype)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '车架号：' + (this.carframeid)}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": function () {return '发动机号：' + (this.engineid)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "checkcar"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemtitle"
	              ],
	              "attr": {
	                "value": "验车预约信息"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "inputitem"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "checkitemname"
	                  ],
	                  "attr": {
	                    "value": "预约验车时间"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "inputtime"
	                  ],
	                  "events": {
	                    "click": "showtimepage"
	                  },
	                  "attr": {
	                    "value": function () {return this.checktime}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "inputitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "checkitemname"
	                      ],
	                      "attr": {
	                        "value": "预约验车地点"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "space",
	                        "addressinput"
	                      ],
	                      "events": {
	                        "click": "showaddresspage"
	                      },
	                      "attr": {
	                        "value": function () {return (this.provice) + ' / ' + (this.city) + ' / ' + (this.area)}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "input",
	                  "classList": [
	                    "street"
	                  ],
	                  "attr": {
	                    "placeholder": "街道",
	                    "value": function () {return this.street}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "inputitem"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "checkitemname"
	                  ],
	                  "attr": {
	                    "value": "预约验车人"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "checkitemname"
	                  ],
	                  "events": {
	                    "click": "showcheckerpage"
	                  },
	                  "attr": {
	                    "value": function () {return this.selectedmessage}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "savebox"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "save"
	              ],
	              "events": {
	                "click": "saveDate"
	              },
	              "attr": {
	                "value": "保存"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "events": {
	            "click": "showaddresspicker"
	          },
	          "attr": {
	            "value": "点击选择地址"
	          }
	        },
	        {
	          "type": "selectaddress",
	          "shown": function () {return this.showpicker}
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "events": {
	        "click": "closetimepage"
	      },
	      "shown": function () {return this.showtime},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "addresslist"
	          ],
	          "children": [
	            {
	              "type": "scroller",
	              "attr": {
	                "showScrollbar": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "list",
	                      "repeat": {
	                        "expression": function () {return this.years},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "cell",
	                          "append": "tree",
	                          "events": {
	                            "click": "selectyear"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "itemstyle"
	                              ],
	                              "attr": {
	                                "value": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "scroller",
	              "attr": {
	                "showScrollbar": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "list",
	                      "repeat": {
	                        "expression": function () {return this.months},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "cell",
	                          "append": "tree",
	                          "events": {
	                            "click": "selectmonth"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "itemstyle"
	                              ],
	                              "attr": {
	                                "value": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "scroller",
	              "attr": {
	                "showScrollbar": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "list",
	                      "classList": [
	                        "addresslistitem"
	                      ],
	                      "repeat": {
	                        "expression": function () {return this.daies},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "cell",
	                          "append": "tree",
	                          "events": {
	                            "click": "selectday"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "itemstyle"
	                              ],
	                              "attr": {
	                                "value": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "events": {
	        "click": "closeaddresspage"
	      },
	      "shown": function () {return this.showaddress},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "addresslist"
	          ],
	          "children": [
	            {
	              "type": "scroller",
	              "attr": {
	                "showScrollbar": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "list",
	                      "repeat": {
	                        "expression": function () {return this.provices},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "cell",
	                          "append": "tree",
	                          "events": {
	                            "click": "selectprovice"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "itemstyle"
	                              ],
	                              "id": "provice",
	                              "attr": {
	                                "value": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "scroller",
	              "attr": {
	                "showScrollbar": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "list",
	                      "repeat": {
	                        "expression": function () {return this.cities},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "cell",
	                          "append": "tree",
	                          "events": {
	                            "click": "selectcity"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "itemstyle"
	                              ],
	                              "id": "city",
	                              "attr": {
	                                "value": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "scroller",
	              "attr": {
	                "showScrollbar": "false"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "addresslistitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "list",
	                      "classList": [
	                        "addresslistitem"
	                      ],
	                      "repeat": {
	                        "expression": function () {return this.areas},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "cell",
	                          "append": "tree",
	                          "events": {
	                            "click": "selectarea"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "itemstyle"
	                              ],
	                              "id": "area",
	                              "attr": {
	                                "value": function () {return this.item}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "events": {
	        "click": "closecheckerpage"
	      },
	      "shown": function () {return this.show},
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "list"
	          ],
	          "children": [
	            {
	              "type": "list",
	              "repeat": {
	                "expression": function () {return this.personlist},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "cell",
	                  "append": "tree",
	                  "events": {
	                    "click": "selectchecker"
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "itemstyle"
	                      ],
	                      "id": "message",
	                      "attr": {
	                        "value": function () {return this.item.message}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
	  "inputitem": {
	    "flexDirection": "row"
	  },
	  "time": {
	    "fontSize": 25,
	    "paddingTop": 15,
	    "paddingLeft": 15,
	    "paddingBottom": 15
	  },
	  "itemtitle": {
	    "fontSize": 35
	  },
	  "itemname": {
	    "fontSize": 30
	  },
	  "iteminput": {
	    "backgroundColor": "#f1f1f1",
	    "fontSize": 25,
	    "width": 200,
	    "height": 35
	  },
	  "userinfo": {
	    "backgroundColor": "#f1f1f1",
	    "marginLeft": 15,
	    "marginRight": 15,
	    "marginBottom": 15,
	    "paddingLeft": 10,
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "carinfo": {
	    "backgroundColor": "#f1f1f1",
	    "marginLeft": 15,
	    "marginRight": 15,
	    "marginBottom": 15,
	    "paddingLeft": 10,
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "checkcar": {
	    "marginLeft": 15,
	    "paddingLeft": 10
	  },
	  "checkitemname": {
	    "fontSize": 30,
	    "width": 200
	  },
	  "selectperson": {
	    "fontSize": 25,
	    "width": 200,
	    "height": 35,
	    "marginLeft": 20,
	    "borderWidth": 1,
	    "borderColor": "#000000"
	  },
	  "inputtime": {
	    "height": 35,
	    "width": 200,
	    "fontSize": 25,
	    "marginLeft": 20,
	    "borderWidth": 1,
	    "borderColor": "#000000"
	  },
	  "inputaddress": {
	    "height": 35,
	    "fontSize": 20,
	    "marginLeft": 10,
	    "width": 80,
	    "borderWidth": 1,
	    "borderColor": "#000000"
	  },
	  "space": {
	    "marginLeft": 20
	  },
	  "street": {
	    "marginTop": 5,
	    "marginBottom": 5,
	    "fontSize": 30,
	    "width": 400,
	    "marginLeft": 220,
	    "height": 35,
	    "borderBottomWidth": 1
	  },
	  "savebox": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "save": {
	    "textAlign": "center",
	    "marginTop": 30,
	    "backgroundColor": "#ffde00",
	    "color": "#000000",
	    "width": 400,
	    "height": 50,
	    "padding": 5,
	    "fontSize": 25
	  },
	  "mask": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "backgroundColor": "#999999",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "list": {
	    "width": 500,
	    "borderRadius": 10,
	    "backgroundColor": "#FFFFFF"
	  },
	  "itemstyle": {
	    "fontSize": 40,
	    "margin": 10,
	    "lineHeight": 30,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "addresslist": {
	    "flexDirection": "row",
	    "height": 800,
	    "width": 600,
	    "borderRadius": 10,
	    "backgroundColor": "#FFFFFF"
	  },
	  "addresslistitem": {
	    "flexDirection": "column"
	  },
	  "addressinput": {
	    "width": 400,
	    "height": 40,
	    "fontSize": 30,
	    "borderWidth": 1
	  }
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	var addressmap = __webpack_require__(62);
	var utils = __webpack_require__(4);
	var picker = __weex_require__('@weex-module/picker');
	
	__webpack_require__(117), __webpack_require__(5);
	__webpack_require__(63);
	module.exports = {
	    data: function () {return {
	        show: false,
	        selectedmessage: "请选择验车人",
	        users: [],
	        showaddress: false,
	        oid: '',
	        value: '',
	        time: 'loading...',
	        username: "loading...",
	        idcard: "loading...",
	        phone: "loading...",
	        carid: "loading...",
	        cartype: "loading...",
	        carframeid: "loading...",
	        engineid: "loading...",
	        checktime: "2017-1-14",
	        proviceindex: 0,
	        cityindex: 0,
	        areaindex: 0,
	        provice: "北京",
	        city: "北京市",
	        area: "东城区",
	        street: "东直门东方银座23D",
	        personid: "9527",
	        personlist: [],
	        provices: ["北京"],
	        cities: ["市辖区"],
	        areas: ["东城区"],
	
	        years: [],
	        months: [],
	        daies: [],
	        year: 2017,
	        month: 1,
	        day: 18,
	        showtime: false,
	
	        showpicker: false
	    }},
	    ready: function ready() {
	        var storage = __weex_require__('@weex-module/storage');
	        var me = this;
	
	        storage.getItem('orderid', function (e) {
	            me.oid = e.data;
	            me.getdata(e.data);
	        });
	        this.provices = [];
	        this.provices = addressmap.address.Items["0"];
	        for (var i = 2010; i < 2025; i++) {
	            this.years.push(i);
	        }
	        for (var i = 1; i < 13; i++) {
	            this.months.push(i);
	        }
	        for (var i = 1; i < 29; i++) {
	            this.daies.push(i);
	        }
	    },
	    methods: {
	        getdata: function getdata(oid) {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                headers: document.cookie,
	                url: "http://api.fengchaohuzhu.com/order/validateView?" + "oid=" + oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                var info = response.data.data.info;
	                self.time = info.expect_at;
	                self.username = info.name;
	                self.idcard = info.identity_no;
	                self.phone = info.phone;
	                self.carid = info.license_no;
	                self.cartype = info.family_name;
	                self.carframeid = info.vin;
	                self.engineid = info.engine_no;
	
	                console.log(response.data.data.userlist);
	                self.users = response.data.data.userlist;
	                for (var user in self.users) {
	                    var item = {};
	                    item.message = self.users[user].trim();
	                    self.personlist.push(item);
	                }
	            });
	        },
	
	        showcheckerpage: function showcheckerpage() {
	            this.show = true;
	        },
	
	        selectchecker: function selectchecker(index) {
	            this.selectedmessage = index.target.children[0].attr.value;
	
	            for (var user in this.users) {
	                if (this.selectedmessage == this.users[user].trim()) {
	                    this.personid = user;
	                    console.log(user);
	                }
	            }
	            this.show = false;
	        },
	
	        closecheckerpage: function closecheckerpage() {
	            this.show = false;
	        },
	
	        showaddresspage: function showaddresspage() {
	            this.showaddress = true;
	        },
	
	        closeaddresspage: function closeaddresspage() {
	            this.showaddress = false;
	        },
	        selectyear: function selectyear(e) {
	            this.year = e.target.children[0].attr.value;
	            console.log("year" + this.year);
	        },
	        selectmonth: function selectmonth(e) {
	            this.month = e.target.children[0].attr.value;
	            console.log("month" + this.month);
	        },
	        selectday: function selectday(e) {
	            this.day = e.target.children[0].attr.value;
	            console.log("day" + this.day);
	        },
	        selectprovice: function selectprovice(e) {
	            this.provice = e.target.children[0].attr.value;
	            console.log(this.provice);
	            this.proviceindex = this.provices.indexOf(this.provice);
	            console.log(this.provices.indexOf(this.provice));
	            var city = "0_" + this.proviceindex;
	            this.cities = [];
	            this.cities = addressmap.address.Items[city];
	            this.areas = ["请选择"];
	        },
	        selectcity: function selectcity(e) {
	            this.city = e.target.children[0].attr.value;
	            console.log(this.city);
	            this.cityindex = this.cities.indexOf(this.city);
	            console.log(this.cities.indexOf(this.city));
	            var area = "0_" + this.proviceindex + "_" + this.cityindex;
	            this.areas = [];
	            this.areas = addressmap.address.Items[area];
	        },
	        selectarea: function selectarea(e) {
	            this.area = e.target.children[0].attr.value;
	            console.log(this.area);
	            this.areaindex = this.areas.indexOf(this.area);
	            console.log(this.areas.indexOf(this.area));
	        },
	        showtimepage: function showtimepage() {
	            this.showtime = true;
	        },
	        closetimepage: function closetimepage() {
	            this.checktime = this.year + "-" + this.month + "-" + this.day;
	            this.showtime = false;
	        },
	        saveDate: function saveDate() {
	            var stream = __weex_require__('@weex-module/stream');
	            var date = new Date(this.year, this.month - 1, this.day);
	            var time = date.getTime() / 1000;
	            var place = encodeURI(this.provice + this.city + this.area + "--" + this.street);
	            console.log("place" + place);
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                headers: document.cookie,
	                url: "http://api.fengchaohuzhu.com/order/saveValidate?" + "time=" + time + "&place=" + place + "&opid=" + self.personid + "&oid=" + self.oid,
	                type: 'json'
	            }, function (response) {
	                if (response.data.code == 1) {
	                    self.success();
	                } else {
	                    self.failed();
	                }
	                console.log(response);
	            });
	        },
	        success: function success() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	            this.$openURL(base + "savesuccess.js");
	        },
	        failed: function failed() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	            this.$openURL(base + "savefailed.js");
	        },
	
	        showaddresspicker: function showaddresspicker() {
	            this.showpicker = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(118)
	var __weex_style__ = __webpack_require__(119)
	var __weex_script__ = __webpack_require__(120)
	
	__weex_define__('@weex-component/select', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "bottombox"
	  ],
	  "children": [
	    {
	      "type": "input",
	      "id": "input",
	      "attr": {
	        "type": "text",
	        "value": function () {return this.selectedmessage}
	      },
	      "events": {
	        "focus": "showlist",
	        "blur": "dispote"
	      },
	      "classList": [
	        "input"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "list"
	      ],
	      "shown": function () {return this.show},
	      "children": [
	        {
	          "type": "list",
	          "repeat": {
	            "expression": function () {return this.items},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "events": {
	                "click": "selectitem"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "id": "message",
	                  "attr": {
	                    "value": function () {return this.item.message}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = {
	  "bottombox": {
	    "position": "relative"
	  },
	  "input": {
	    "fontSize": 25,
	    "width": 150,
	    "height": 40,
	    "lineHeight": 40,
	    "marginRight": 15,
	    "borderWidth": 1,
	    "borderColor": "#000000"
	  },
	  "list": {
	    "position": "relative",
	    "top": 0,
	    "left": 0,
	    "height": 200,
	    "width": 150,
	    "backgroundColor": "#FF0000"
	  }
	}

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";
	
	module.exports = {
	    data: function () {return {
	        selectedmessage: "请选择",
	        show: false,
	        items: [{ message: "列表数据1" }, { message: "列表数据2" }, { message: "列表数据3" }, { message: "列表数据4" }, { message: "列表数据5" }]
	    }},
	    created: function created() {},
	    methods: {
	        showlist: function showlist() {
	            this.show = true;
	        },
	        selectitem: function selectitem(index) {
	            this.selectedmessage = index.target.children[0].attr.value;
	
	            this.show = false;
	        },
	        dispote: function dispote() {
	            this.show = false;
	        }
	
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcG9pbnRtZW50LndlPzFkNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzP2EwMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdGFkZHJlc3Mud2U/ZjMxYyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0YWRkcmVzcy53ZT9lMjllIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3RhZGRyZXNzLndlP2QyNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdGFkZHJlc3Mud2UiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMC4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hcmVhLmpzIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/OTdkZiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/MDViYyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/ODQwNyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/OTcwMCIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT83YzI5Iiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2M1YTgiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2U/MzM4NCIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT9kYTliIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT84N2MyIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT84MzgwIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT81MjEzIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT8wNWJlIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlP2U5YmYiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/OWI2YyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT9kYTQwIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlP2NmOTAiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzcxOTkiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzZkZGEiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzM3MDMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlP2E2ZjkiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlP2UzMTIiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlPzcwODUiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlP2NmYjciLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlPzFjZDQiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMC4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlP2I5NmQiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT9iNzYzIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2U/MDVmMyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzY5ZTciLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2E0ZWEiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2ZjODMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2NkMDciLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2E1ODgiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT8yYWFiIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/OWYwNSIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzU5MTUiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT8xMDllIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT9iYzBhIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MDAxMiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlPzA2Y2MiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT81NGQwIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/Y2IzNiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/YmUxZCIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/Zjc1OCIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/OThlOSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwb2ludG1lbnQud2U/MTIzMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwb2ludG1lbnQud2U/OTM2YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwb2ludG1lbnQud2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC53ZT83ZDJlIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3Qud2U/ZjI0OCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0LndlPzcyNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC53ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7O0FDL2FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQSw2QkFBNEIsOERBQThEO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQywwRUFBMEU7QUFDMUc7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDY0E7OzBCQUdBO2VBQ0E7Z0JBQ0EsWUFDQSxzQkFDQSxzQkFDQSxzQkFDQSxzQkFHQTtBQVZBO2lDQVdBLENBQ0E7O3VDQUVBO3lCQUNBO0FBQ0E7Z0RBQ0E7a0VBRUE7O3lCQUNBO0FBQ0E7cUNBQ0E7eUJBQ0E7QUFHQTs7QUFiQTtBQWRBIiwiZmlsZSI6ImRpc3RcXGFwcG9pbnRtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTYiLCJyZXF1aXJlKFwiLi9zZWxlY3RhZGRyZXNzLndlXCIpXG52YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2FwcG9pbnRtZW50LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2FwcG9pbnRtZW50LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vYXBwb2ludG1lbnQud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvZDM0MTgxNWQ4MTZkZTFkZjgyYjQ0ODU1NzU5YTY0MzUnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvZDM0MTgxNWQ4MTZkZTFkZjgyYjQ0ODU1NzU5YTY0MzUnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwb2ludG1lbnQud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcclxuICogQ3JlYXRlZCBieSBodWJlbiBvbiAwMy8wMS8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZ2V0QmFzZVVybCA9IGZ1bmN0aW9uKGJ1bmRsZVVybCkge1xyXG4gICAgYnVuZGxlVXJsID0gbmV3IFN0cmluZyhidW5kbGVVcmwpO1xyXG4gICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuXHJcbiAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdoaXZlLmFwcCcpID4gMDtcclxuICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvZGlzdC8nO1xyXG4gICAgfSBlbHNlIGlmIChpc2lPU0Fzc2V0cykge1xyXG4gICAgICAgIG5hdGl2ZUJhc2UgPSBidW5kbGVVcmwuc3Vic3RyaW5nKDAsIGJ1bmRsZVVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBob3N0ID0gJzE3Mi4xNjguMS43MTo4MDgwJztcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5q2k5aSE6ZyA5rOo5oSP5LiA5LiLLHRhYmJhciDnlKjnmoTnm7TmjqXmmK9qc2J1bmRsZSDnmoTot6/lvoQs5L2G5pivbmF2aWdhdG9y5piv55u05o6l6Lez6L2s5Yiw5paw6aG16Z2i5LiK55qELlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgeyAvLyDmtY/op4jlmaggd2Vidmlld1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvd2ViL2luZGV4Lmh0bWw/cGFnZT0uLi9kaXN0Lyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyAnL2Rpc3QvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmF0aXZlQmFzZTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA2IDcgOCA5IDEwIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zZWxlY3RhZGRyZXNzLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NlbGVjdGFkZHJlc3Mud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9zZWxlY3RhZGRyZXNzLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3NlbGVjdGFkZHJlc3MnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdGFkZHJlc3Mud2Vcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJtYXNrXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiY2xpY2tcIjogXCJjbG9zZWFkZHJlc3NwYWdlXCJcbiAgfSxcbiAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2hvd2FkZHJlc3N9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZWxlY3RidXR0b25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLlj5bmtohcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlbGVjdGJ1dHRvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuehruWumlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJhZGRyZXNzbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzY3JvbGxlclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNob3dTY3JvbGxiYXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NsaXN0aXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wcm92aWNlc30sXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VsZWN0cHJvdmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0ucHJvdmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInNjcm9sbGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic2hvd1Njcm9sbGJhclwiOiBcImZhbHNlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWRkcmVzc2xpc3RpdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNpdGllc30sXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VsZWN0Y2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzY3JvbGxlclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNob3dTY3JvbGxiYXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NsaXN0aXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzbGlzdGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hcmVhc30sXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VsZWN0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImZvb3RlclwiXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvc2VsZWN0YWRkcmVzcy53ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMWNkZmZcIixcbiAgICBcImhlaWdodFwiOiA4MCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDIwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDIwXG4gIH0sXG4gIFwic2VsZWN0YnV0dG9uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwibGluZUhlaWdodFwiOiA2MCxcbiAgICBcIm1hcmdpblwiOiA1LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmVjZDAxXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNVxuICB9LFxuICBcIm1hc2tcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDc0MFxuICB9LFxuICBcIml0ZW1zdHlsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcIm1hcmdpblwiOiAxMCxcbiAgICBcImxpbmVIZWlnaHRcIjogMzAsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYWRkcmVzc2xpc3RcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjAsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogNjAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiYWRkcmVzc2xpc3RpdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImFkZHJlc3NpbnB1dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0MDAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJmb250U2l6ZVwiOiAzMCxcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfSxcbiAgXCJmb290ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAxY2RmZlwiLFxuICAgIFwiaGVpZ2h0XCI6IDYwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9zZWxlY3RhZGRyZXNzLndlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMiIsIjx0ZW1wbGF0ZT5cclxuICA8IS0tIHNob3cgYWRkcmVzcyBwaWNrZXIgLS0+XHJcbiAgIDxkaXYgY2xhc3M9XCJtYXNrXCIgb25jbGljaz0gXCJjbG9zZWFkZHJlc3NwYWdlXCIgIGlmPVwie3tzaG93YWRkcmVzc319XCI+XHJcbiAgIDxkaXYgY2xhc3MgPVwidGl0bGVcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcyA9XCJzZWxlY3RidXR0b25cIj7lj5bmtog8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3MgPVwic2VsZWN0YnV0dG9uXCI+56Gu5a6aPC90ZXh0PlxyXG4gICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3MgPVwiYWRkcmVzc2xpc3RcIj5cclxuICAgICAgICA8c2Nyb2xsZXIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiID5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3MgPSBcImFkZHJlc3NsaXN0aXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpc3QgcmVwZWF0PVwiaXRlbSBpbiBwcm92aWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjZWxsICBvbmNsaWNrPVwic2VsZWN0cHJvdmljZVwiPjx0ZXh0IGNsYXNzID1cIml0ZW1zdHlsZVwiICBzdHlsZT1cImNvbG9yOnt7aXRlbS5jb2xvcn19O1wiPnt7aXRlbS5wcm92aWNlfX08L3RleHQ+PC9jZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Njcm9sbGVyPlxyXG5cclxuICAgICAgICA8c2Nyb2xsZXIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiID4gXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzID0gXCJhZGRyZXNzbGlzdGl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxsaXN0ICByZXBlYXQ9XCJpdGVtIGluIGNpdGllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjZWxsIG9uY2xpY2s9XCJzZWxlY3RjaXR5XCI+PHRleHQgY2xhc3MgPVwiaXRlbXN0eWxlXCI+e3tpdGVtfX08L3RleHQ+PC9jZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Njcm9sbGVyPlxyXG5cclxuICAgICAgICA8c2Nyb2xsZXIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiID4gXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzID0gXCJhZGRyZXNzbGlzdGl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxsaXN0IGNsYXNzICA9XCJhZGRyZXNzbGlzdGl0ZW1cIiByZXBlYXQ9XCJpdGVtIGluIGFyZWFzXCIgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y2VsbCBvbmNsaWNrPVwic2VsZWN0YXJlYVwiPjx0ZXh0IGNsYXNzID1cIml0ZW1zdHlsZVwiIGlkPVwiYXJlYVwiPnt7aXRlbX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zY3JvbGxlcj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcyA9XCJmb290ZXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgYWRkcmVzc21hcCA9IHJlcXVpcmUoXCIuL3V0aWxzL2FyZWFcIik7XHJcbiAgcmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7ICAgIFxyXG4gICAgICAgIHNob3dhZGRyZXNzOnRydWUsXHJcbiAgICAgICAgcHJvdmljZWluZGV4OjAsXHJcbiAgICAgICAgY2l0eWluZGV4OjAsXHJcbiAgICAgICAgYXJlYWluZGV4OjAsXHJcbiAgICAgICAgcHJvdmljZTpcIuWMl+S6rFwiLFxyXG4gICAgICAgIGNpdHk6XCLljJfkuqzluIJcIixcclxuICAgICAgICBhcmVhOlwi5Lic5Z+O5Yy6XCIsXHJcbiAgICAgICAgc3RyZWV0Olwi5Lic55u06Zeo5Lic5pa56ZO25bqnMjNEXCIsXHJcbiAgICAgICAgcGVyc29uaWQ6XCI5NTI3XCIsXHJcbiAgICAgICAgcGVyc29ubGlzdDpbXSxcclxuICAgICAgICBwcm92aWNlczpbXCLljJfkuqxcIl0sXHJcbiAgICAgICAgY2l0aWVzOltcIuW4gui+luWMulwiXSxcclxuICAgICAgICBhcmVhczpbXCLkuJzln47ljLpcIl0sXHJcbiAgICB9LFxyXG4gICAgcmVhZHk6ZnVuY3Rpb24oKXsgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcm92aWNlcyA9IFtdO1xyXG4gICAgICAgIHZhciB0ZW1wcHJvdmljZXMgPSBhZGRyZXNzbWFwLmFkZHJlc3MuSXRlbXNbXCIwXCJdO1xyXG4gICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBwcm92aWNlIGluICBhZGRyZXNzbWFwLmFkZHJlc3MuSXRlbXNbXCIwXCJdKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHRlbXBwcm92aWNlID0ge307XHJcbiAgICAgICAgICAgIHRlbXBwcm92aWNlLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRlbXBwcm92aWNlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICB0ZW1wcHJvdmljZS5wcm92aWNlID0gYWRkcmVzc21hcC5hZGRyZXNzLkl0ZW1zW1wiMFwiXVtwcm92aWNlXTtcclxuICAgICAgICAgICAgdGhpcy5wcm92aWNlcy5wdXNoKHRlbXBwcm92aWNlKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgLyog5pi+56S65Zyw5Z2A6YCJ5oup55WM6Z2iICovICAgICAgXHJcbiAgICAgICAgIHNob3dhZGRyZXNzcGFnZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93YWRkcmVzcyA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8qIOWFs+mXreWcsOWdgOmAieaLqeeVjOmdoiAqL1xyXG4gICAgICAgICBjbG9zZWFkZHJlc3NwYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNob3dhZGRyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNlbGVjdHByb3ZpY2U6ZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm92aWNlID0gZS50YXJnZXQuY2hpbGRyZW5bMF0uYXR0ci52YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3ZpY2UpO1xyXG4gICAgICAgICAgICAgIGZvcih2YXIgcHJvdmljZSBvZiB0aGlzLnByb3ZpY2VzKXtcclxuICAgICAgICAgICAgICAgICAgaWYocHJvdmljZS5wcm92aWNlID09IHRoaXMucHJvdmljZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3ZpY2VpbmRleCA9IHByb3ZpY2UuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm92aWNlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvdmljZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL3RoaXMucHJvdmljZWluZGV4ID0gdGhpcy5wcm92aWNlcy5pbmRleE9mKHRoaXMucHJvdmljZSk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3ZpY2VzLmluZGV4T2YodGhpcy5wcm92aWNlKSk7XHJcbiAgICAgICAgICAgICAgdmFyIGNpdHkgPSBcIjBfXCIrIHRoaXMucHJvdmljZWluZGV4O1xyXG4gICAgICAgICAgICAgIHRoaXMuY2l0aWVzID0gW107XHJcbiAgICAgICAgICAgICAgLy90aGlzLmNpdGllcyA9IGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tjaXR5XTtcclxuICAgICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgIGZvcih2YXIgY2l0eSBpbiBhZGRyZXNzbWFwLmFkZHJlc3MuSXRlbXNbY2l0eV0peyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB2YXIgdGVtcGNpdHkgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgdGVtcGNpdHkuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgdGVtcGNpdHkuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgIHRlbXBjaXR5LnByb3ZpY2UgPSBhZGRyZXNzbWFwLmFkZHJlc3MuSXRlbXNbY2l0eV1bY2l0eV07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2l0aWVzLnB1c2godGVtcGNpdHkpO1xyXG4gICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmFyZWFzID0gW1wi6K+36YCJ5oupXCJdO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0Y2l0eTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICB0aGlzLmNpdHkgPSBlLnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2l0eSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaXR5aW5kZXggPSB0aGlzLmNpdGllcy5pbmRleE9mKHRoaXMuY2l0eSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaXRpZXMuaW5kZXhPZih0aGlzLmNpdHkpKTtcclxuICAgICAgICAgICAgICB2YXIgYXJlYSA9IFwiMF9cIisgdGhpcy5wcm92aWNlaW5kZXgrXCJfXCIrIHRoaXMuY2l0eWluZGV4O1xyXG4gICAgICAgICAgICAgIHRoaXMuYXJlYXMgPSBbXTtcclxuICAgICAgICAgICAgICB0aGlzLmFyZWFzID0gYWRkcmVzc21hcC5hZGRyZXNzLkl0ZW1zW2FyZWFdO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0YXJlYTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICB0aGlzLmFyZWEgPSBlLnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJlYSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5hcmVhaW5kZXggPSB0aGlzLmFyZWFzLmluZGV4T2YodGhpcy5hcmVhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFyZWFzLmluZGV4T2YodGhpcy5hcmVhKSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRpdGxle1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMWNkZmY7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG59XHJcbi5zZWxlY3RidXR0b257XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDo2MHB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmVjZDAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuLm1hc2t7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHJpZ2h0OjA7XHJcbiAgICAgIGJvdHRvbTowO1xyXG4gICAgICBoZWlnaHQ6NzQwcHg7ICBcclxuICB9XHJcbiAgLml0ZW1zdHlsZXtcclxuICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDozMHB4O1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIC5hZGRyZXNzbGlzdHtcclxuICAgICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MjBweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5hZGRyZXNzbGlzdGl0ZW17XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB9XHJcbiAgLmFkZHJlc3NpbnB1dHtcclxuICAgICAgd2lkdGg6NDAwcHg7XHJcbiAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgYm9yZGVyLXdpZHRoOjFweDtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxY2RmZjtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VsZWN0YWRkcmVzcy53ZT8yMzRhMGVjNCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjYuMjAuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA1IDEyIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIi8qXHJcbiAqXHTlhajlm73kuInnuqfln47luILogZTliqgganPniYhcclxuICovXHJcbmZ1bmN0aW9uIERzeSgpIHtcclxuICAgIHRoaXMuSXRlbXMgPSB7fTtcclxufVxyXG5Ec3kucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGlkLCBpQXJyYXkpIHtcclxuICAgIHRoaXMuSXRlbXNbaWRdID0gaUFycmF5O1xyXG59XHJcblxyXG5Ec3kucHJvdG90eXBlLkV4aXN0cyA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBpZiAodHlwZW9mKHRoaXMuSXRlbXNbaWRdKSA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxudmFyIGRzeSA9IG5ldyBEc3koKTtcclxuXHJcbmRzeS5hZGQoXCIwXCIsIFtcIuWMl+S6rOW4glwiLCBcIuWkqea0peW4glwiLCBcIuS4iua1t+W4glwiLCBcIumHjeW6huW4glwiLCBcIuays+WMl+ecgVwiLCBcIuWxseilv+ecgVwiLCBcIuWGheiSmeWPpFwiLCBcIui+veWugeecgVwiLCBcIuWQieael+ecgVwiLCBcIum7kem+meaxn+ecgVwiLCBcIuaxn+iLj+ecgVwiLCBcIua1meaxn+ecgVwiLCBcIuWuieW+veecgVwiLCBcIuemj+W7uuecgVwiLCBcIuaxn+ilv+ecgVwiLCBcIuWxseS4nOecgVwiLCBcIuays+WNl+ecgVwiLCBcIua5luWMl+ecgVwiLCBcIua5luWNl+ecgVwiLCBcIuW5v+S4nOecgVwiLCBcIuW5v+ilv1wiLCBcIua1t+WNl+ecgVwiLCBcIuWbm+W3neecgVwiLCBcIui0teW3nuecgVwiLCBcIuS6keWNl+ecgVwiLCBcIuilv+iXj1wiLCBcIumZleilv+ecgVwiLCBcIueUmOiCg+ecgVwiLCBcIumdkua1t+ecgVwiLCBcIuWugeWkj1wiLCBcIuaWsOeWhlwiLCBcIummmea4r1wiLCBcIua+s+mXqFwiLCBcIuWPsOa5vuecgVwiXSk7XHJcbmRzeS5hZGQoXCIwXzBfMFwiLCBbXCLkuJzln47ljLpcIiwgXCLopb/ln47ljLpcIiwgXCLmnJ3pmLPljLpcIiwgXCLkuLDlj7DljLpcIiwgXCLnn7Pmma/lsbHljLpcIiwgXCLmtbfmt4DljLpcIiwgXCLpl6jlpLTmsp/ljLpcIiwgXCLmiL/lsbHljLpcIiwgXCLpgJrlt57ljLpcIiwgXCLpobrkuYnljLpcIiwgXCLmmIzlubPljLpcIiwgXCLlpKflhbTljLpcIiwgXCLmgIDmn5TljLpcIiwgXCLlubPosLfljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8wXzFcIiwgW1wi5a+G5LqR5Y6/XCIsIFwi5bu25bqG5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMFwiLCBbXCLluILovpbljLpcIiwgXCLljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xXzBcIiwgW1wi5ZKM5bmz5Yy6XCIsIFwi5rKz5Lic5Yy6XCIsIFwi5rKz6KW/5Yy6XCIsIFwi5Y2X5byA5Yy6XCIsIFwi5rKz5YyX5Yy6XCIsIFwi57qi5qGl5Yy6XCIsIFwi5Lic5Li95Yy6XCIsIFwi6KW/6Z2S5Yy6XCIsIFwi5rSl5Y2X5Yy6XCIsIFwi5YyX6L6w5Yy6XCIsIFwi5q2m5riF5Yy6XCIsIFwi5a6d5Z275Yy6XCIsIFwi5ruo5rW35paw5Yy6XCIsIFwi5a6B5rKz5Yy6XCIsIFwi6Z2Z5rW35Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMV8xXCIsIFtcIuiTn+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzFcIiwgW1wi5biC6L6W5Yy6XCIsIFwi5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMl8wXCIsIFtcIum7hOa1puWMulwiLCBcIuW+kOaxh+WMulwiLCBcIumVv+WugeWMulwiLCBcIumdmeWuieWMulwiLCBcIuaZrumZgOWMulwiLCBcIumXuOWMl+WMulwiLCBcIuiZueWPo+WMulwiLCBcIuadqOa1puWMulwiLCBcIumXteihjOWMulwiLCBcIuWuneWxseWMulwiLCBcIuWYieWumuWMulwiLCBcIua1puS4nOaWsOWMulwiLCBcIumHkeWxseWMulwiLCBcIuadvuaxn+WMulwiLCBcIumdkua1puWMulwiLCBcIuWliei0pOWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzJfMVwiLCBbXCLltIfmmI7ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yXCIsIFtcIuW4gui+luWMulwiLCBcIuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzNfMFwiLCBbXCLkuIflt57ljLpcIiwgXCLmtqrpmbXljLpcIiwgXCLmuJ3kuK3ljLpcIiwgXCLlpKfmuKHlj6PljLpcIiwgXCLmsZ/ljJfljLpcIiwgXCLmspnlnarlnZ3ljLpcIiwgXCLkuZ3pvpnlnaHljLpcIiwgXCLljZflsrjljLpcIiwgXCLljJfnoprljLpcIiwgXCLntqbmsZ/ljLpcIiwgXCLlpKfotrPljLpcIiwgXCLmuJ3ljJfljLpcIiwgXCLlt7TljZfljLpcIiwgXCLpu5TmsZ/ljLpcIiwgXCLplb/lr7/ljLpcIiwgXCLmsZ/mtKXljLpcIiwgXCLlkIjlt53ljLpcIiwgXCLmsLjlt53ljLpcIiwgXCLljZflt53ljLpcIiwgXCLnkqflsbHljLpcIiwgXCLpk5zmooHljLpcIiwgXCLmvbzljZfljLpcIiwgXCLojaPmmIzljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8zXzFcIiwgW1wi5qKB5bmz5Y6/XCIsIFwi5Z+O5Y+j5Y6/XCIsIFwi5Liw6YO95Y6/XCIsIFwi5Z6r5rGf5Y6/XCIsIFwi5q2m6ZqG5Y6/XCIsIFwi5b+g5Y6/XCIsIFwi5byA5Y6/XCIsIFwi5LqR6Ziz5Y6/XCIsIFwi5aWJ6IqC5Y6/XCIsIFwi5ber5bGx5Y6/XCIsIFwi5ber5rqq5Y6/XCIsIFwi55+z5p+x5Zyf5a625peP6Ieq5rK75Y6/XCIsIFwi56eA5bGx5Zyf5a625peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi6YWJ6Ziz5Zyf5a625peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi5b2t5rC06IuX5peP5Zyf5a625peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfM1wiLCBbXCLluILovpbljLpcIiwgXCLljr9cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfNF8wXCIsIFtcIumVv+WuieWMulwiLCBcIuahpeilv+WMulwiLCBcIuaWsOWNjuWMulwiLCBcIuS6lemZieefv+WMulwiLCBcIuijleWNjuWMulwiLCBcIuiXgeWfjuWMulwiLCBcIum5v+azieWMulwiLCBcIuagvuWfjuWMulwiLCBcIuS6lemZieWOv1wiLCBcIuato+WumuWOv1wiLCBcIuihjOWUkOWOv1wiLCBcIueBteWvv+WOv1wiLCBcIumrmOmCkeWOv1wiLCBcIua3seazveWOv1wiLCBcIui1nueah+WOv1wiLCBcIuaXoOaegeWOv1wiLCBcIuW5s+WxseWOv1wiLCBcIuWFg+awj+WOv1wiLCBcIui1teWOv1wiLCBcIuaZi+W3nuW4glwiLCBcIuaWsOS5kOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzRfMVwiLCBbXCLmoaXkuJzljLpcIiwgXCLmoaXopb/ljLpcIiwgXCLlrqPljJbljLpcIiwgXCLkuIvoirHlm63ljLpcIiwgXCLlrqPljJbljr9cIiwgXCLlvKDljJfljr9cIiwgXCLlurfkv53ljr9cIiwgXCLmsr3mupDljr9cIiwgXCLlsJrkuYnljr9cIiwgXCLolJrljr9cIiwgXCLpmLPljp/ljr9cIiwgXCLmgIDlronljr9cIiwgXCLkuIflhajljr9cIiwgXCLmgIDmnaXljr9cIiwgXCLmtr/pub/ljr9cIiwgXCLotaTln47ljr9cIiwgXCLltIfnpLzljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF80XzJcIiwgW1wi5Y+M5qGl5Yy6XCIsIFwi5Y+M5rum5Yy6XCIsIFwi6bmw5omL6JCl5a2Q55+/5Yy6XCIsIFwi5om/5b635Y6/XCIsIFwi5YW06ZqG5Y6/XCIsIFwi5bmz5rOJ5Y6/XCIsIFwi5rum5bmz5Y6/XCIsIFwi6ZqG5YyW5Y6/XCIsIFwi5Liw5a6B5ruh5peP6Ieq5rK75Y6/XCIsIFwi5a695Z+O5ruh5peP6Ieq5rK75Y6/XCIsIFwi5Zu05Zy65ruh5peP6JKZ5Y+k5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfNF8zXCIsIFtcIua1t+a4r+WMulwiLCBcIuWxsea1t+WFs+WMulwiLCBcIuWMl+aItOays+WMulwiLCBcIuaKmuWugeWMulwiLCBcIumdkum+mea7oeaXj+iHquayu+WOv1wiLCBcIuaYjOm7juWOv1wiLCBcIuWNoum+meWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzRfNFwiLCBbXCLot6/ljZfljLpcIiwgXCLot6/ljJfljLpcIiwgXCLlj6TlhrbljLpcIiwgXCLlvIDlubPljLpcIiwgXCLkuLDljZfljLpcIiwgXCLkuLDmtqbljLpcIiwgXCLmm7nlpoPnlLjljLpcIiwgXCLmu6bljr9cIiwgXCLmu6bljZfljr9cIiwgXCLkuZDkuq3ljr9cIiwgXCLov4Hopb/ljr9cIiwgXCLnjonnlLDljr9cIiwgXCLpgbXljJbluIJcIiwgXCLov4HlronluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF80XzVcIiwgW1wi5a6J5qyh5Yy6XCIsIFwi5bm/6Ziz5Yy6XCIsIFwi5Zu65a6J5Y6/XCIsIFwi5rC45riF5Y6/XCIsIFwi6aaZ5rKz5Y6/XCIsIFwi5aSn5Z+O5Y6/XCIsIFwi5paH5a6J5Y6/XCIsIFwi5aSn5Y6C5Zue5peP6Ieq5rK75Y6/XCIsIFwi6Zy45bee5biCXCIsIFwi5LiJ5rKz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNF82XCIsIFtcIuernuengOWMulwiLCBcIuiOsuaxoOWMulwiLCBcIua7oeWfjuWMulwiLCBcIua4heiLkeWMulwiLCBcIuW+kOawtOWMulwiLCBcIua2nuawtOWOv1wiLCBcIumYnOW5s+WOv1wiLCBcIuWumuWFtOWOv1wiLCBcIuWUkOWOv1wiLCBcIumrmOmYs+WOv1wiLCBcIuWuueWfjuWOv1wiLCBcIua2nua6kOWOv1wiLCBcIuacm+mDveWOv1wiLCBcIuWuieaWsOWOv1wiLCBcIuaYk+WOv1wiLCBcIuabsumYs+WOv1wiLCBcIuigoeWOv1wiLCBcIumhuuW5s+WOv1wiLCBcIuWNmumHjuWOv1wiLCBcIumbhOWOv1wiLCBcIua2v+W3nuW4glwiLCBcIuWuieWbveW4glwiLCBcIumrmOeikeW6l+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzRfN1wiLCBbXCLmoYPln47ljLpcIiwgXCLmnqPlvLrljr9cIiwgXCLmrabpgpHljr9cIiwgXCLmrablvLrljr9cIiwgXCLppbbpmLPljr9cIiwgXCLlronlubPljr9cIiwgXCLmlYXln47ljr9cIiwgXCLmma/ljr9cIiwgXCLpmJzln47ljr9cIiwgXCLlhoDlt57luIJcIiwgXCLmt7Hlt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF80XzhcIiwgW1wi5paw5Y2O5Yy6XCIsIFwi6L+Q5rKz5Yy6XCIsIFwi5rKn5Y6/XCIsIFwi6Z2S5Y6/XCIsIFwi5Lic5YWJ5Y6/XCIsIFwi5rW35YW05Y6/XCIsIFwi55uQ5bGx5Y6/XCIsIFwi6IKD5a6B5Y6/XCIsIFwi5Y2X55qu5Y6/XCIsIFwi5ZC05qGl5Y6/XCIsIFwi54yu5Y6/XCIsIFwi5a2f5p2R5Zue5peP6Ieq5rK75Y6/XCIsIFwi5rOK5aS05biCXCIsIFwi5Lu75LiY5biCXCIsIFwi6buE6aqF5biCXCIsIFwi5rKz6Ze05biCXCJdKTtcclxuZHN5LmFkZChcIjBfNF85XCIsIFtcIuahpeS4nOWMulwiLCBcIuahpeilv+WMulwiLCBcIumCouWPsOWOv1wiLCBcIuS4tOWfjuWOv1wiLCBcIuWGheS4mOWOv1wiLCBcIuafj+S5oeWOv1wiLCBcIumahuWwp+WOv1wiLCBcIuS7u+WOv1wiLCBcIuWNl+WSjOWOv1wiLCBcIuWugeaZi+WOv1wiLCBcIuW3qOm5v+WOv1wiLCBcIuaWsOays+WOv1wiLCBcIuW5v+Wul+WOv1wiLCBcIuW5s+S5oeWOv1wiLCBcIuWogeWOv1wiLCBcIua4heays+WOv1wiLCBcIuS4tOilv+WOv1wiLCBcIuWNl+Wuq+W4glwiLCBcIuaymeays+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzRfMTBcIiwgW1wi6YKv5bGx5Yy6XCIsIFwi5Lib5Y+w5Yy6XCIsIFwi5aSN5YW05Yy6XCIsIFwi5bOw5bOw55+/5Yy6XCIsIFwi6YKv6YO45Y6/XCIsIFwi5Li05ryz5Y6/XCIsIFwi5oiQ5a6J5Y6/XCIsIFwi5aSn5ZCN5Y6/XCIsIFwi5raJ5Y6/XCIsIFwi56OB5Y6/XCIsIFwi6IKl5Lmh5Y6/XCIsIFwi5rC45bm05Y6/XCIsIFwi6YKx5Y6/XCIsIFwi6bih5rO95Y6/XCIsIFwi5bm/5bmz5Y6/XCIsIFwi6aaG6Zm25Y6/XCIsIFwi6a2P5Y6/XCIsIFwi5puy5ZGo5Y6/XCIsIFwi5q2m5a6J5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNF8xMVwiLCBbXCLlrprlt57luIJcIiwgXCLovpvpm4bluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF80XCIsIFtcIuefs+WutuW6hOW4glwiLCBcIuW8oOWutuWPo+W4glwiLCBcIuaJv+W+t+W4glwiLCBcIuenpueah+Wym+W4glwiLCBcIuWUkOWxseW4glwiLCBcIuW7iuWdiuW4glwiLCBcIuS/neWumuW4glwiLCBcIuihoeawtOW4glwiLCBcIuayp+W3nuW4glwiLCBcIumCouWPsOW4glwiLCBcIumCr+mDuOW4glwiLCBcIuecgeebtOi+luWOv+e6p+ihjOaUv+WMuuWIklwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF81XzBcIiwgW1wi5bCP5bqX5Yy6XCIsIFwi6L+O5rO95Yy6XCIsIFwi5p2P6Iqx5bKt5Yy6XCIsIFwi5bCW6I2J5Z2q5Yy6XCIsIFwi5LiH5p+P5p6X5Yy6XCIsIFwi5pmL5rqQ5Yy6XCIsIFwi5riF5b6Q5Y6/XCIsIFwi6Ziz5puy5Y6/XCIsIFwi5aiE54Om5Y6/XCIsIFwi5Y+k5Lqk5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNV8xXCIsIFtcIuaclOWfjuWMulwiLCBcIuW5s+mygeWMulwiLCBcIuWxsemYtOWOv1wiLCBcIuW6lOWOv1wiLCBcIuWPs+eOieWOv1wiLCBcIuaAgOS7geWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzVfMlwiLCBbXCLln47ljLpcIiwgXCLnn7/ljLpcIiwgXCLljZfpg4rljLpcIiwgXCLmlrDojaPljLpcIiwgXCLpmLPpq5jljr9cIiwgXCLlpKnplYfljr9cIiwgXCLlub/ngbXljr9cIiwgXCLngbXkuJjljr9cIiwgXCLmtZHmupDljr9cIiwgXCLlt6bkupHljr9cIiwgXCLlpKflkIzljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF81XzNcIiwgW1wi5Z+O5Yy6XCIsIFwi55+/5Yy6XCIsIFwi6YOK5Yy6XCIsIFwi5bmz5a6a5Y6/XCIsIFwi55uC5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfNV80XCIsIFtcIuWfjuWMulwiLCBcIumDiuWMulwiLCBcIumVv+ayu+WOv1wiLCBcIuilhOWeo+WOv1wiLCBcIuWxr+eVmeWOv1wiLCBcIuW5s+mhuuWOv1wiLCBcIum7juWfjuWOv1wiLCBcIuWjtuWFs+WOv1wiLCBcIumVv+WtkOWOv1wiLCBcIuatpuS5oeWOv1wiLCBcIuaygeWOv1wiLCBcIuaygea6kOWOv1wiLCBcIua9nuWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzVfNVwiLCBbXCLln47ljLpcIiwgXCLmsoHmsLTljr9cIiwgXCLpmLPln47ljr9cIiwgXCLpmbXlt53ljr9cIiwgXCLms73lt57ljr9cIiwgXCLpq5jlubPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF81XzZcIiwgW1wi5b+75bqc5Yy6XCIsIFwi5a6a6KWE5Y6/XCIsIFwi5LqU5Y+w5Y6/XCIsIFwi5Luj5Y6/XCIsIFwi57mB5bOZ5Y6/XCIsIFwi5a6B5q2m5Y6/XCIsIFwi6Z2Z5LmQ5Y6/XCIsIFwi56We5rGg5Y6/XCIsIFwi5LqU5a+o5Y6/XCIsIFwi5bKi5bKa5Y6/XCIsIFwi5rKz5puy5Y6/XCIsIFwi5L+d5b635Y6/XCIsIFwi5YGP5YWz5Y6/XCIsIFwi5Y6f5bmz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNV83XCIsIFtcIuamhuasoeWMulwiLCBcIuamhuasoeWMulwiLCBcIuamhuekvuWOv1wiLCBcIuW3puadg+WOv1wiLCBcIuWSjOmhuuWOv1wiLCBcIuaYlOmYs+WOv1wiLCBcIuWvv+mYs+WOv1wiLCBcIuWkquiwt+WOv1wiLCBcIuelgeWOv1wiLCBcIuW5s+mBpeWOv1wiLCBcIueBteefs+WOv1wiLCBcIuS7i+S8keW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzVfOFwiLCBbXCLlsKfpg73ljLpcIiwgXCLmm7LmsoPljr9cIiwgXCLnv7zln47ljr9cIiwgXCLopYTmsb7ljr9cIiwgXCLmtKrmtJ7ljr9cIiwgXCLlj6Tljr9cIiwgXCLlronms73ljr9cIiwgXCLmta7lsbHljr9cIiwgXCLlkInljr9cIiwgXCLkuaHlroHljr9cIiwgXCLlpKflroHljr9cIiwgXCLpmrDljr9cIiwgXCLmsLjlkozljr9cIiwgXCLokrLljr9cIiwgXCLmsb7opb/ljr9cIiwgXCLkvq/pqazluIJcIiwgXCLpnI3lt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF81XzlcIiwgW1wi56a755+z5Yy6XCIsIFwi5paH5rC05Y6/XCIsIFwi5Lqk5Z+O5Y6/XCIsIFwi5YW05Y6/XCIsIFwi5Li05Y6/XCIsIFwi5p+z5p6X5Y6/XCIsIFwi55+z5qW85Y6/XCIsIFwi5bKa5Y6/XCIsIFwi5pa55bGx5Y6/XCIsIFwi5Lit6Ziz5Y6/XCIsIFwi5Lqk5Y+j5Y6/XCIsIFwi5a2d5LmJ5biCXCIsIFwi5rG+6Ziz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNV8xMFwiLCBbXCLnm5DmuZbljLpcIiwgXCLkuLTnjJfljr9cIiwgXCLkuIfojaPljr9cIiwgXCLpl7vllpzljr9cIiwgXCLnqLflsbHljr9cIiwgXCLmlrDnu5vljr9cIiwgXCLnu5vljr9cIiwgXCLlnqPmm7Lljr9cIiwgXCLlpI/ljr9cIiwgXCLlubPpmYbljr9cIiwgXCLoiq7ln47ljr9cIiwgXCLmsLjmtY7luIJcIiwgXCLmsrPmtKXluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF81XCIsIFtcIuWkquWOn+W4glwiLCBcIuaclOW3nuW4glwiLCBcIuWkp+WQjOW4glwiLCBcIumYs+azieW4glwiLCBcIumVv+ayu+W4glwiLCBcIuaZi+WfjuW4glwiLCBcIuW/u+W3nuW4glwiLCBcIuaZi+S4reW4glwiLCBcIuS4tOaxvuW4glwiLCBcIuWQleaigeW4glwiLCBcIui/kOWfjuW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF82XzBcIiwgW1wi5paw5Z+O5Yy6XCIsIFwi5Zue5rCR5Yy6XCIsIFwi546J5rOJ5Yy6XCIsIFwi6LWb572V5Yy6XCIsIFwi5Zyf6buY54m55bem5peXXCIsIFwi5omY5YWL5omY5Y6/XCIsIFwi5ZKM5p6X5qC85bCU5Y6/XCIsIFwi5riF5rC05rKz5Y6/XCIsIFwi5q2m5bed5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfNl8xXCIsIFtcIuS4nOays+WMulwiLCBcIuaYhumDveS7keWMulwiLCBcIumdkuWxseWMulwiLCBcIuefs+aLkOWMulwiLCBcIueZveS6kemEguWNmuefv+WMulwiLCBcIuS5neWOn+WMulwiLCBcIuWcn+m7mOeJueWPs+aXl1wiLCBcIuWbuumYs+WOv1wiLCBcIui+vuWwlOe9leiMguaYjuWuieiBlOWQiOaXl1wiXSk7XHJcbmRzeS5hZGQoXCIwXzZfMlwiLCBbXCLmtbfli4Pmub7ljLpcIiwgXCLmtbfljZfljLpcIiwgXCLkuYzovr7ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF82XzNcIiwgW1wi57qi5bGx5Yy6XCIsIFwi5YWD5a6d5bGx5Yy6XCIsIFwi5p2+5bGx5Yy6XCIsIFwi6Zi/6bKB56eR5bCU5rKB5peXXCIsIFwi5be05p6X5bem5peXXCIsIFwi5be05p6X5Y+z5peXXCIsIFwi5p6X6KW/5Y6/XCIsIFwi5YWL5LuA5YWL6IW+5peXXCIsIFwi57+B54mb54m55peXXCIsIFwi5ZaA5ZaH5rKB5peXXCIsIFwi5a6B5Z+O5Y6/XCIsIFwi5pWW5rGJ5peXXCJdKTtcclxuZHN5LmFkZChcIjBfNl80XCIsIFtcIuenkeWwlOaygeWMulwiLCBcIuenkeWwlOaygeW3pue/vOS4reaXl1wiLCBcIuenkeWwlOaygeW3pue/vOWQjuaXl1wiLCBcIuW8gOmygeWOv1wiLCBcIuW6k+S8puaXl1wiLCBcIuWliOabvOaXl1wiLCBcIuaJjumygeeJueaXl1wiLCBcIumcjeael+mDreWLkuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzZfNVwiLCBbXCLmtbfmi4nlsJTljLpcIiwgXCLmiY7otYnor7rlsJTljLpcIiwgXCLpmL/ojaPml5dcIiwgXCLojqvlipvovr7nk6bovr7mlqHlsJTml4/oh6rmsrvml5dcIiwgXCLphILkvKbmmKXoh6rmsrvml5dcIiwgXCLphILmuKnlhYvml4/oh6rmsrvml5dcIiwgXCLpmYjlt7TlsJTomY7ml5dcIiwgXCLmlrDlt7TlsJTomY7lt6bml5dcIiwgXCLmlrDlt7TlsJTomY7lj7Pml5dcIiwgXCLmu6HmtLLph4zluIJcIiwgXCLniZnlhYvnn7PluIJcIiwgXCLmiY7lhbDlsa/luIJcIiwgXCLpop3lsJTlj6TnurPluIJcIiwgXCLmoLnmsrPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF82XzZcIiwgW1wi5Lic6IOc5Yy6XCIsIFwi6L6+5ouJ54m55peXXCIsIFwi5YeG5qC85bCU5peXXCIsIFwi6YSC5omY5YWL5YmN5peXXCIsIFwi6YSC5omY5YWL5peXXCIsIFwi5p2t6ZSm5peXXCIsIFwi5LmM5a6h5peXXCIsIFwi5LyK6YeR6ZyN5rSb5peXXCJdKTtcclxuZHN5LmFkZChcIjBfNl83XCIsIFtcIumbhuWugeWMulwiLCBcIuWNk+i1hOWOv1wiLCBcIuWMluW+t+WOv1wiLCBcIuWVhumDveWOv1wiLCBcIuWFtOWSjOWOv1wiLCBcIuWHieWfjuWOv1wiLCBcIuWvn+WTiOWwlOWPs+e/vOWJjeaXl1wiLCBcIuWvn+WTiOWwlOWPs+e/vOS4reaXl1wiLCBcIuWvn+WTiOWwlOWPs+e/vOWQjuaXl1wiLCBcIuWbm+WtkOeOi+aXl1wiLCBcIuS4sOmVh+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzZfOFwiLCBbXCLkuLTmsrPljLpcIiwgXCLkupTljp/ljr9cIiwgXCLno7Tlj6Pljr9cIiwgXCLkuYzmi4nnibnliY3ml5dcIiwgXCLkuYzmi4nnibnkuK3ml5dcIiwgXCLkuYzmi4nnibnlkI7ml5dcIiwgXCLmna3plKblkI7ml5dcIl0pO1xyXG5kc3kuYWRkKFwiMF82XzlcIiwgW1wi5LmM5YWw5rWp54m55biCXCIsIFwi6Zi/5bCU5bGx5biCXCIsIFwi56eR5bCU5rKB5Y+z57+85YmN5peXXCIsIFwi56eR5bCU5rKB5Y+z57+85Lit5peXXCIsIFwi5omO6LWJ54m55peXXCIsIFwi56qB5rOJ5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfNl8xMFwiLCBbXCLkuozov57mtannibnluIJcIiwgXCLplKHmnpfmtannibnluIJcIiwgXCLpmL/lt7TlmI7ml5dcIiwgXCLoi4/lsLznibnlt6bml5dcIiwgXCLoi4/lsLznibnlj7Pml5dcIiwgXCLkuJzkuYznj6DnqYbmsoHml5dcIiwgXCLopb/kuYznj6DnqYbmsoHml5dcIiwgXCLlpKrku4blr7rml5dcIiwgXCLplbbpu4Tml5dcIiwgXCLmraPplbbnmb3ml5dcIiwgXCLmraPok53ml5dcIiwgXCLlpJrkvKbljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF82XzExXCIsIFtcIumYv+aLieWWhOW3puaXl1wiLCBcIumYv+aLieWWhOWPs+aXl1wiLCBcIuminea1jue6s+aXl1wiXSk7XHJcbmRzeS5hZGQoXCIwXzZcIiwgW1wi5ZG85ZKM5rWp54m55biCXCIsIFwi5YyF5aS05biCXCIsIFwi5LmM5rW35biCXCIsIFwi6LWk5bOw5biCXCIsIFwi6YCa6L695biCXCIsIFwi5ZG85Lym6LSd5bCU5biCXCIsIFwi6YSC5bCU5aSa5pav5biCXCIsIFwi5LmM5YWw5a+f5biD5biCXCIsIFwi5be05b2m5reW5bCU5biCXCIsIFwi5YW05a6J55ufXCIsIFwi6ZSh5p6X6YOt5YuS55ufXCIsIFwi6Zi/5ouJ5ZaE55ufXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzdfMFwiLCBbXCLlkozlubPljLpcIiwgXCLmsojmsrPljLpcIiwgXCLlpKfkuJzljLpcIiwgXCLnmoflp5HljLpcIiwgXCLpk4Hopb/ljLpcIiwgXCLoi4/lrrblsa/ljLpcIiwgXCLmtZHljZfljLpcIiwgXCLmsojljJfmlrDljLpcIiwgXCLkuo7mtKrljLpcIiwgXCLovr3kuK3ljr9cIiwgXCLlurflubPljr9cIiwgXCLms5XlupPljr9cIiwgXCLmlrDmsJHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzFcIiwgW1wi5Y+M5aGU5Yy6XCIsIFwi6b6Z5Z+O5Yy6XCIsIFwi5pyd6Ziz5Y6/XCIsIFwi5bu65bmz5Y6/XCIsIFwi5ZaA5ZaH5rKB5bem57+86JKZ5Y+k5peP6Ieq5rK75Y6/XCIsIFwi5YyX56Wo5biCXCIsIFwi5YeM5rqQ5biCXCJdKTtcclxuZHN5LmFkZChcIjBfN18yXCIsIFtcIua1t+W3nuWMulwiLCBcIuaWsOmCseWMulwiLCBcIuWkquW5s+WMulwiLCBcIua4heays+mXqOWMulwiLCBcIue7huays+WMulwiLCBcIumYnOaWsOiSmeWPpOaXj+iHquayu+WOv1wiLCBcIuW9sOatpuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzdfM1wiLCBbXCLpk7blt57ljLpcIiwgXCLmuIXmsrPljLpcIiwgXCLpk4Hlsq3ljr9cIiwgXCLopb/kuLDljr9cIiwgXCLmmIzlm77ljr9cIiwgXCLosIPlhbXlsbHluIJcIiwgXCLlvIDljp/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzRcIiwgW1wi5paw5oqa5Yy6XCIsIFwi5Lic5rSy5Yy6XCIsIFwi5pyb6Iqx5Yy6XCIsIFwi6aG65Z+O5Yy6XCIsIFwi5oqa6aG65Y6/XCIsIFwi5paw5a6+5ruh5peP6Ieq5rK75Y6/XCIsIFwi5riF5Y6f5ruh5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfN181XCIsIFtcIuW5s+WxseWMulwiLCBcIua6qua5luWMulwiLCBcIuaYjuWxseWMulwiLCBcIuWNl+iKrOWMulwiLCBcIuacrOa6qua7oeaXj+iHquayu+WOv1wiLCBcIuahk+S7gea7oeaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzdfNlwiLCBbXCLnmb3loZTljLpcIiwgXCLmloflnKPljLpcIiwgXCLlro/kvJ/ljLpcIiwgXCLlvJPplb/lsq3ljLpcIiwgXCLlpKrlrZDmsrPljLpcIiwgXCLovr3pmLPljr9cIiwgXCLnga/loZTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzdcIiwgW1wi6ZOB5Lic5Yy6XCIsIFwi6ZOB6KW/5Yy6XCIsIFwi56uL5bGx5Yy6XCIsIFwi5Y2D5bGx5Yy6XCIsIFwi5Y+w5a6J5Y6/XCIsIFwi5bKr5bKp5ruh5peP6Ieq5rK75Y6/XCIsIFwi5rW35Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfN184XCIsIFtcIuWFg+WuneWMulwiLCBcIuaMr+WFtOWMulwiLCBcIuaMr+WuieWMulwiLCBcIuWuveeUuOa7oeaXj+iHquayu+WOv1wiLCBcIuS4nOa4r+W4glwiLCBcIuWHpOWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfOVwiLCBbXCLkuK3lsbHljLpcIiwgXCLopb/lspfljLpcIiwgXCLmspnmsrPlj6PljLpcIiwgXCLnlJjkupXlrZDljLpcIiwgXCLml4Xpobrlj6PljLpcIiwgXCLph5Hlt57ljLpcIiwgXCLplb/mtbfljr9cIiwgXCLnk6bmiL/lupfluIJcIiwgXCLmma7lhbDlupfluIJcIiwgXCLluoTmsrPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzEwXCIsIFtcIuermeWJjeWMulwiLCBcIuilv+W4guWMulwiLCBcIumyhemxvOWciOWMulwiLCBcIuiAgei+ueWMulwiLCBcIuebluW3nuW4glwiLCBcIuWkp+efs+ahpeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfMTFcIiwgW1wi5Y+M5Y+w5a2Q5Yy6XCIsIFwi5YW06ZqG5Y+w5Yy6XCIsIFwi5aSn5rS85Y6/XCIsIFwi55uY5bGx5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfN18xMlwiLCBbXCLlj6TloZTljLpcIiwgXCLlh4zmsrPljLpcIiwgXCLlpKrlkozljLpcIiwgXCLpu5HlsbHljr9cIiwgXCLkuYnljr9cIiwgXCLlh4zmtbfluIJcIiwgXCLljJfplYfluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzEzXCIsIFtcIui/nuWxseWMulwiLCBcIum+mea4r+WMulwiLCBcIuWNl+elqOWMulwiLCBcIue7peS4reWOv1wiLCBcIuW7uuaYjOWOv1wiLCBcIuWFtOWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdcIiwgW1wi5rKI6Ziz5biCXCIsIFwi5pyd6Ziz5biCXCIsIFwi6Zic5paw5biCXCIsIFwi6ZOB5bKt5biCXCIsIFwi5oqa6aG65biCXCIsIFwi5pys5rqq5biCXCIsIFwi6L696Ziz5biCXCIsIFwi6Z6N5bGx5biCXCIsIFwi5Li55Lic5biCXCIsIFwi5aSn6L+e5biCXCIsIFwi6JCl5Y+j5biCXCIsIFwi55uY6ZSm5biCXCIsIFwi6ZSm5bee5biCXCIsIFwi6JGr6Iqm5bKb5biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzhfMFwiLCBbXCLljZflhbPljLpcIiwgXCLlrr3ln47ljLpcIiwgXCLmnJ3pmLPljLpcIiwgXCLkuozpgZPljLpcIiwgXCLnu7/lm63ljLpcIiwgXCLlj4zpmLPljLpcIiwgXCLkuZ3lj7DljLpcIiwgXCLlhpzlronljr9cIiwgXCLmpobmoJHluIJcIiwgXCLlvrfmg6DluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF84XzFcIiwgW1wi5rSu5YyX5Yy6XCIsIFwi6ZWH6LWJ5Y6/XCIsIFwi6YCa5qaG5Y6/XCIsIFwi5rSu5Y2X5biCXCIsIFwi5aSn5a6J5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOF8yXCIsIFtcIuWugeaxn+WMulwiLCBcIuWJjemDreWwlOe9l+aWr+iSmeWPpOaXj+iHquayu+WOv1wiLCBcIumVv+WyreWOv1wiLCBcIuS5vuWuieWOv1wiLCBcIuaJtuS9meW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzhfM1wiLCBbXCLmmIzpgpHljLpcIiwgXCLpvpnmva3ljLpcIiwgXCLoiLnokKXljLpcIiwgXCLkuLDmu6HljLpcIiwgXCLmsLjlkInljr9cIiwgXCLom5/msrPluIJcIiwgXCLmoabnlLjluIJcIiwgXCLoiJLlhbDluIJcIiwgXCLno5Dnn7PluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF84XzRcIiwgW1wi6ZOB6KW/5Yy6XCIsIFwi6ZOB5Lic5Yy6XCIsIFwi5qKo5qCR5Y6/XCIsIFwi5LyK6YCa5ruh5peP6Ieq5rK75Y6/XCIsIFwi5YWs5Li75bKt5biCXCIsIFwi5Y+M6L695biCXCJdKTtcclxuZHN5LmFkZChcIjBfOF81XCIsIFtcIum+meWxseWMulwiLCBcIuilv+WuieWMulwiLCBcIuS4nOS4sOWOv1wiLCBcIuS4nOi+veWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzhfNlwiLCBbXCLkuJzmmIzljLpcIiwgXCLkuozpgZPmsZ/ljLpcIiwgXCLpgJrljJbljr9cIiwgXCLovonljZfljr9cIiwgXCLmn7PmsrPljr9cIiwgXCLmooXmsrPlj6PluIJcIiwgXCLpm4blronluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF84XzdcIiwgW1wi5rWR5rGf5Yy6XCIsIFwi5rGf5rqQ5Yy6XCIsIFwi5oqa5p2+5Y6/XCIsIFwi6Z2W5a6H5Y6/XCIsIFwi6ZW/55m95pyd6bKc5peP6Ieq5rK75Y6/XCIsIFwi5Li05rGf5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOF84XCIsIFtcIuW7tuWQieW4glwiLCBcIuWbvuS7rOW4glwiLCBcIuaVpuWMluW4glwiLCBcIuePsuaYpeW4glwiLCBcIum+meS6leW4glwiLCBcIuWSjOm+meW4glwiLCBcIuaxqua4heWOv1wiLCBcIuWuieWbvuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzhcIiwgW1wi6ZW/5pil5biCXCIsIFwi55m95Z+O5biCXCIsIFwi5p2+5Y6f5biCXCIsIFwi5ZCJ5p6X5biCXCIsIFwi5Zub5bmz5biCXCIsIFwi6L695rqQ5biCXCIsIFwi6YCa5YyW5biCXCIsIFwi55m95bGx5biCXCIsIFwi5bu26L655pyd6bKc5peP6Ieq5rK75beeXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzlfMFwiLCBbXCLpgZPph4zljLpcIiwgXCLljZflspfljLpcIiwgXCLpgZPlpJbljLpcIiwgXCLlubPmiL/ljLpcIiwgXCLmnb7ljJfljLpcIiwgXCLpppnlnYrljLpcIiwgXCLlkbzlhbDljLpcIiwgXCLpmL/ln47ljLpcIiwgXCLlj4zln47ljLpcIiwgXCLkvp3lhbDljr9cIiwgXCLmlrnmraPljr9cIiwgXCLlrr7ljr9cIiwgXCLlt7Tlvabljr9cIiwgXCLmnKjlhbDljr9cIiwgXCLpgJrmsrPljr9cIiwgXCLlu7blr7/ljr9cIiwgXCLlsJrlv5fluIJcIiwgXCLkupTluLjluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzFcIiwgW1wi6b6Z5rKZ5Yy6XCIsIFwi5bu65Y2O5Yy6XCIsIFwi6ZOB6ZSL5Yy6XCIsIFwi5piC5piC5rqq5Yy6XCIsIFwi5a+M5ouJ5bCU5Z+65Yy6XCIsIFwi56K+5a2Q5bGx5Yy6XCIsIFwi5qKF6YeM5pav6L6+5pah5bCU5peP5Yy6XCIsIFwi6b6Z5rGf5Y6/XCIsIFwi5L6d5a6J5Y6/XCIsIFwi5rOw5p2l5Y6/XCIsIFwi55SY5Y2X5Y6/XCIsIFwi5a+M6KOV5Y6/XCIsIFwi5YWL5bGx5Y6/XCIsIFwi5YWL5Lic5Y6/XCIsIFwi5ouc5rOJ5Y6/XCIsIFwi6K635rKz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOV8yXCIsIFtcIuaWsOWFtOWMulwiLCBcIuahg+WxseWMulwiLCBcIuiMhOWtkOays+WMulwiLCBcIuWLg+WIqeWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzlfM1wiLCBbXCLniLHovonljLpcIiwgXCLlq6nmsZ/ljr9cIiwgXCLpgIrlhYvljr9cIiwgXCLlrZnlkLTljr9cIiwgXCLljJflronluIJcIiwgXCLkupTlpKfov57msaDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzRcIiwgW1wi6JCo5bCU5Zu+5Yy6XCIsIFwi6b6Z5Yek5Yy6XCIsIFwi6K6p6IOh6Lev5Yy6XCIsIFwi57qi5bKX5Yy6XCIsIFwi5aSn5ZCM5Yy6XCIsIFwi6IKH5bee5Y6/XCIsIFwi6IKH5rqQ5Y6/XCIsIFwi5p6X55S45Y6/XCIsIFwi5p2c5bCU5Lyv54m56JKZ5Y+k5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfOV81XCIsIFtcIuWQkemYs+WMulwiLCBcIuW3peWGnOWMulwiLCBcIuWNl+WxseWMulwiLCBcIuWFtOWuieWMulwiLCBcIuS4nOWxseWMulwiLCBcIuWFtOWxseWMulwiLCBcIuiQneWMl+WOv1wiLCBcIue7pea7qOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzlfNlwiLCBbXCLkvIrmmKXljLpcIiwgXCLljZflspTljLpcIiwgXCLlj4vlpb3ljLpcIiwgXCLopb/mnpfljLpcIiwgXCLnv6Dls6bljLpcIiwgXCLmlrDpnZLljLpcIiwgXCLnvo7muqrljLpcIiwgXCLph5HlsbHlsa/ljLpcIiwgXCLkupTokKXljLpcIiwgXCLkuYzpqazmsrPljLpcIiwgXCLmsaTml7rmsrPljLpcIiwgXCLluKblsq3ljLpcIiwgXCLkuYzkvIrlsq3ljLpcIiwgXCLnuqLmmJ/ljLpcIiwgXCLkuIrnlJjlsq3ljLpcIiwgXCLlmInojavljr9cIiwgXCLpk4HlipvluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzdcIiwgW1wi5ZCR6Ziz5Yy6XCIsIFwi5YmN6L+b5Yy6XCIsIFwi5Lic6aOO5Yy6XCIsIFwi6YOK5Yy6XCIsIFwi5qGm5Y2X5Y6/XCIsIFwi5qGm5bed5Y6/XCIsIFwi5rGk5Y6f5Y6/XCIsIFwi5oqa6L+c5Y6/XCIsIFwi5ZCM5rGf5biCXCIsIFwi5a+M6ZSm5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOV84XCIsIFtcIuWwluWxseWMulwiLCBcIuWyreS4nOWMulwiLCBcIuWbm+aWueWPsOWMulwiLCBcIuWuneWxseWMulwiLCBcIumbhui0pOWOv1wiLCBcIuWPi+iwiuWOv1wiLCBcIuWunea4heWOv1wiLCBcIumltuays+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzlfOVwiLCBbXCLpuKHlhqDljLpcIiwgXCLmgZLlsbHljLpcIiwgXCLmu7TpgZPljLpcIiwgXCLmoqjmoJHljLpcIiwgXCLln47lrZDmsrPljLpcIiwgXCLpurvlsbHljLpcIiwgXCLpuKHkuJzljr9cIiwgXCLomY7mnpfluIJcIiwgXCLlr4blsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzEwXCIsIFtcIuS4nOWuieWMulwiLCBcIumYs+aYjuWMulwiLCBcIueIseawkeWMulwiLCBcIuilv+WuieWMulwiLCBcIuS4nOWugeWOv1wiLCBcIuael+WPo+WOv1wiLCBcIue7peiKrOays+W4glwiLCBcIua1t+ael+W4glwiLCBcIuWugeWuieW4glwiLCBcIuephuajseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzlfMTFcIiwgW1wi5YyX5p6X5Yy6XCIsIFwi5pyb5aWO5Y6/XCIsIFwi5YWw6KW/5Y6/XCIsIFwi6Z2S5YaI5Y6/XCIsIFwi5bqG5a6J5Y6/XCIsIFwi5piO5rC05Y6/XCIsIFwi57ul5qOx5Y6/XCIsIFwi5a6J6L6+5biCXCIsIFwi6IKH5Lic5biCXCIsIFwi5rW35Lym5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOV8xMlwiLCBbXCLlkbznjpvljr9cIiwgXCLloZTmsrPljr9cIiwgXCLmvKDmsrPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF85XCIsIFtcIuWTiOWwlOa7qOW4glwiLCBcIum9kOm9kOWTiOWwlOW4glwiLCBcIuS4g+WPsOays+W4glwiLCBcIum7keays+W4glwiLCBcIuWkp+W6huW4glwiLCBcIum5pOWyl+W4glwiLCBcIuS8iuaYpeW4glwiLCBcIuS9s+acqOaWr+W4glwiLCBcIuWPjOm4reWxseW4glwiLCBcIum4oeilv+W4glwiLCBcIueJoeS4ueaxn+W4glwiLCBcIue7peWMluW4glwiLCBcIuWkp+WFtOWuieWyreWcsOWMulwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xMF8wXCIsIFtcIueOhOatpuWMulwiLCBcIuenpua3ruWMulwiLCBcIuW7uumCuuWMulwiLCBcIum8k+alvOWMulwiLCBcIua1puWPo+WMulwiLCBcIuaglumcnuWMulwiLCBcIumbqOiKseWPsOWMulwiLCBcIuaxn+WugeWMulwiLCBcIuWFreWQiOWMulwiLCBcIua6p+awtOWMulwiLCBcIumrmOa3s+WMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzFcIiwgW1wi6byT5qW85Yy6XCIsIFwi5LqR6b6Z5Yy6XCIsIFwi6LS+5rGq5Yy6XCIsIFwi5rOJ5bGx5Yy6XCIsIFwi6ZOc5bGx5Yy6XCIsIFwi5Liw5Y6/XCIsIFwi5rKb5Y6/XCIsIFwi552i5a6B5Y6/XCIsIFwi5paw5rKC5biCXCIsIFwi6YKz5bee5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBfMlwiLCBbXCLov57kupHljLpcIiwgXCLmtbflt57ljLpcIiwgXCLotaPmpobljLpcIiwgXCLkuJzmtbfljr9cIiwgXCLngYzkupHljr9cIiwgXCLngYzljZfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMF8zXCIsIFtcIuWuv+WfjuWMulwiLCBcIuWuv+ixq+WMulwiLCBcIuayremYs+WOv1wiLCBcIuazl+mYs+WOv1wiLCBcIuazl+a0quWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzRcIiwgW1wi5riF5rKz5Yy6XCIsIFwi5reu5a6J5Yy6XCIsIFwi5reu6Zi05Yy6XCIsIFwi5riF5rWm5Yy6XCIsIFwi5raf5rC05Y6/XCIsIFwi5rSq5rO95Y6/XCIsIFwi55ux55yZ5Y6/XCIsIFwi6YeR5rmW5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTBfNVwiLCBbXCLkuq3muZbljLpcIiwgXCLnm5Dpg73ljLpcIiwgXCLlpKfkuLDljLpcIiwgXCLlk43msLTljr9cIiwgXCLmu6jmtbfljr9cIiwgXCLpmJzlroHljr9cIiwgXCLlsITpmLPljr9cIiwgXCLlu7rmuZbljr9cIiwgXCLkuJzlj7DluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMF82XCIsIFtcIuW5v+mZteWMulwiLCBcIumCl+axn+WMulwiLCBcIuaxn+mDveWMulwiLCBcIuWuneW6lOWOv1wiLCBcIuS7quW+geW4glwiLCBcIumrmOmCruW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzdcIiwgW1wi5rW36Zm15Yy6XCIsIFwi6auY5riv5Yy6XCIsIFwi5aec5aCw5Yy6XCIsIFwi5YW05YyW5biCXCIsIFwi6Z2W5rGf5biCXCIsIFwi5rOw5YW05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBfOFwiLCBbXCLltIflt53ljLpcIiwgXCLmuK/pl7jljLpcIiwgXCLpgJrlt57ljLpcIiwgXCLmtbflronljr9cIiwgXCLlpoLkuJzljr9cIiwgXCLlkK/kuJzluIJcIiwgXCLlpoLnmovluIJcIiwgXCLmtbfpl6jluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMF85XCIsIFtcIuS6rOWPo+WMulwiLCBcIua2puW3nuWMulwiLCBcIuS4ueW+kuWMulwiLCBcIuS4uemYs+W4glwiLCBcIuaJrOS4reW4glwiLCBcIuWPpeWuueW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzEwXCIsIFtcIuWkqeWugeWMulwiLCBcIumSn+alvOWMulwiLCBcIuaWsOWMl+WMulwiLCBcIuatpui/m+WMulwiLCBcIumHkeWdm+WMulwiLCBcIua6p+mYs+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzExXCIsIFtcIuW0h+WuieWMulwiLCBcIuWNl+mVv+WMulwiLCBcIuWMl+WhmOWMulwiLCBcIumUoeWxseWMulwiLCBcIuaDoOWxseWMulwiLCBcIua7qOa5luWMulwiLCBcIuaxn+mYtOW4glwiLCBcIuWunOWFtOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzEyXCIsIFtcIuiZjuS4mOWMulwiLCBcIuWQtOS4reWMulwiLCBcIuebuOWfjuWMulwiLCBcIuWnkeiLj+WMulwiLCBcIuWQtOaxn+WMulwiLCBcIuW4uOeGn+W4glwiLCBcIuW8oOWutua4r+W4glwiLCBcIuaYhuWxseW4glwiLCBcIuWkquS7k+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXCIsIFtcIuWNl+S6rOW4glwiLCBcIuW+kOW3nuW4glwiLCBcIui/nuS6kea4r+W4glwiLCBcIuWuv+i/geW4glwiLCBcIua3ruWuieW4glwiLCBcIuebkOWfjuW4glwiLCBcIuaJrOW3nuW4glwiLCBcIuazsOW3nuW4glwiLCBcIuWNl+mAmuW4glwiLCBcIumVh+axn+W4glwiLCBcIuW4uOW3nuW4glwiLCBcIuaXoOmUoeW4glwiLCBcIuiLj+W3nuW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xMV8wXCIsIFtcIuS4iuWfjuWMulwiLCBcIuS4i+WfjuWMulwiLCBcIuaxn+W5suWMulwiLCBcIuaLseWiheWMulwiLCBcIuilv+a5luWMulwiLCBcIua7qOaxn+WMulwiLCBcIuiQp+WxseWMulwiLCBcIuS9meadreWMulwiLCBcIuWvjOmYs+WMulwiLCBcIuahkOW6kOWOv1wiLCBcIua3s+WuieWOv1wiLCBcIuW7uuW+t+W4glwiLCBcIuS4tOWuieW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzFcIiwgW1wi5ZC05YW05Yy6XCIsIFwi5Y2X5rWU5Yy6XCIsIFwi5b635riF5Y6/XCIsIFwi6ZW/5YW05Y6/XCIsIFwi5a6J5ZCJ5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTFfMlwiLCBbXCLljZfmuZbljLpcIiwgXCLnp4DmtLLljLpcIiwgXCLlmInlloTljr9cIiwgXCLmtbfnm5Dljr9cIiwgXCLmtbflroHluIJcIiwgXCLlubPmuZbluIJcIiwgXCLmoZDkuaHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMV8zXCIsIFtcIuWumua1t+WMulwiLCBcIuaZrumZgOWMulwiLCBcIuWyseWxseWOv1wiLCBcIuW1iuazl+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzRcIiwgW1wi5rW35puZ5Yy6XCIsIFwi5rGf5Lic5Yy6XCIsIFwi5rGf5YyX5Yy6XCIsIFwi5YyX5LuR5Yy6XCIsIFwi6ZWH5rW35Yy6XCIsIFwi6YSe5bee5Yy6XCIsIFwi6LGh5bGx5Y6/XCIsIFwi5a6B5rW35Y6/XCIsIFwi5L2Z5aea5biCXCIsIFwi5oWI5rqq5biCXCIsIFwi5aWJ5YyW5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTFfNVwiLCBbXCLotorln47ljLpcIiwgXCLmn6/moaXljLpcIiwgXCLkuIromZ7ljLpcIiwgXCLmlrDmmIzljr9cIiwgXCLor7jmmqjluIJcIiwgXCLltYrlt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMV82XCIsIFtcIuafr+WfjuWMulwiLCBcIuihouaxn+WMulwiLCBcIuW4uOWxseWOv1wiLCBcIuW8gOWMluWOv1wiLCBcIum+mea4uOWOv1wiLCBcIuaxn+WxseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzdcIiwgW1wi5am65Z+O5Yy6XCIsIFwi6YeR5Lic5Yy6XCIsIFwi5q2m5LmJ5Y6/XCIsIFwi5rWm5rGf5Y6/XCIsIFwi56OQ5a6J5Y6/XCIsIFwi5YWw5rqq5biCXCIsIFwi5LmJ5LmM5biCXCIsIFwi5Lic6Ziz5biCXCIsIFwi5rC45bq35biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTFfOFwiLCBbXCLmpJLmsZ/ljLpcIiwgXCLpu4TlsqnljLpcIiwgXCLot6/moaXljLpcIiwgXCLnjonnjq/ljr9cIiwgXCLkuInpl6jljr9cIiwgXCLlpKnlj7Dljr9cIiwgXCLku5nlsYXljr9cIiwgXCLmuKnlsq3luIJcIiwgXCLkuLTmtbfluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMV85XCIsIFtcIum5v+WfjuWMulwiLCBcIum+mea5vuWMulwiLCBcIueTr+a1t+WMulwiLCBcIua0nuWktOWMulwiLCBcIuawuOWYieWOv1wiLCBcIuW5s+mYs+WOv1wiLCBcIuiLjeWNl+WOv1wiLCBcIuaWh+aIkOWOv1wiLCBcIuazsOmhuuWOv1wiLCBcIueRnuWuieW4glwiLCBcIuS5kOa4heW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzEwXCIsIFtcIuiOsumDveWMulwiLCBcIumdkueUsOWOv1wiLCBcIue8meS6keWOv1wiLCBcIumBguaYjOWOv1wiLCBcIuadvumYs+WOv1wiLCBcIuS6keWSjOWOv1wiLCBcIuW6huWFg+WOv1wiLCBcIuaZr+WugeeVsuaXj+iHquayu+WOv1wiLCBcIum+meazieW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXCIsIFtcIuadreW3nuW4glwiLCBcIua5luW3nuW4glwiLCBcIuWYieWFtOW4glwiLCBcIuiIn+WxseW4glwiLCBcIuWugeazouW4glwiLCBcIue7jeWFtOW4glwiLCBcIuihouW3nuW4glwiLCBcIumHkeWNjuW4glwiLCBcIuWPsOW3nuW4glwiLCBcIua4qeW3nuW4glwiLCBcIuS4veawtOW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xMl8wXCIsIFtcIueRtua1t+WMulwiLCBcIuW6kOmYs+WMulwiLCBcIuicgOWxseWMulwiLCBcIuWMheays+WMulwiLCBcIumVv+S4sOWOv1wiLCBcIuiCpeS4nOWOv1wiLCBcIuiCpeilv+WOv1wiLCBcIuW6kOaxn+WOv1wiLCBcIuW3oua5luW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzFcIiwgW1wi5Z+H5qGl5Yy6XCIsIFwi56CA5bGx5Y6/XCIsIFwi6JCn5Y6/XCIsIFwi54G155Kn5Y6/XCIsIFwi5rOX5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMlwiLCBbXCLmnZzpm4bljLpcIiwgXCLnm7jlsbHljLpcIiwgXCLng4jlsbHljLpcIiwgXCLmv4nmuqrljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMl8zXCIsIFtcIuiwr+WfjuWMulwiLCBcIua2oemYs+WOv1wiLCBcIuiSmeWfjuWOv1wiLCBcIuWIqei+m+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzRcIiwgW1wi6aKN5bee5Yy6XCIsIFwi6aKN5Lic5Yy6XCIsIFwi6aKN5rOJ5Yy6XCIsIFwi5Li05rOJ5Y6/XCIsIFwi5aSq5ZKM5Y6/XCIsIFwi6Zic5Y2X5Y6/XCIsIFwi6aKN5LiK5Y6/XCIsIFwi55WM6aaW5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTJfNVwiLCBbXCLpvpnlrZDmuZbljLpcIiwgXCLomozlsbHljLpcIiwgXCLnprnkvJrljLpcIiwgXCLmt67kuIrljLpcIiwgXCLmgIDov5zljr9cIiwgXCLkupTmsrPljr9cIiwgXCLlm7rplYfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMl82XCIsIFtcIuWkp+mAmuWMulwiLCBcIueUsOWutuW6teWMulwiLCBcIuiwouWutumbhuWMulwiLCBcIuWFq+WFrOWxseWMulwiLCBcIua9mOmbhuWMulwiLCBcIuWHpOWPsOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzdcIiwgW1wi55CF55CK5Yy6XCIsIFwi5Y2X6LCv5Yy6XCIsIFwi5p2l5a6J5Y6/XCIsIFwi5YWo5qSS5Y6/XCIsIFwi5a6a6L+c5Y6/XCIsIFwi5Yek6Ziz5Y6/XCIsIFwi5aSp6ZW/5biCXCIsIFwi5piO5YWJ5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTJfOFwiLCBbXCLoirHlsbHljLpcIiwgXCLpm6jlsbHljLpcIiwgXCLljZrmnJvljLpcIiwgXCLlvZPmtoLljr9cIiwgXCLlkKvlsbHljr9cIiwgXCLlkozljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMl85XCIsIFtcIumVnOa5luWMulwiLCBcIuW8i+axn+WMulwiLCBcIum4oOaxn+WMulwiLCBcIuS4ieWxseWMulwiLCBcIuiKnOa5luWOv1wiLCBcIue5geaYjOWOv1wiLCBcIuWNl+mZteWOv1wiLCBcIuaXoOS4uuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzEwXCIsIFtcIumTnOWumOWxseWMulwiLCBcIueLruWtkOWxseWMulwiLCBcIumDiuWMulwiLCBcIumTnOmZteWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzExXCIsIFtcIui/juaxn+WMulwiLCBcIuWkp+inguWMulwiLCBcIuWunOengOWMulwiLCBcIuaAgOWugeWOv1wiLCBcIuaenumYs+WOv1wiLCBcIua9nOWxseWOv1wiLCBcIuWkqua5luWOv1wiLCBcIuWuv+advuWOv1wiLCBcIuacm+axn+WOv1wiLCBcIuWys+ilv+WOv1wiLCBcIuahkOWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzEyXCIsIFtcIuWxr+a6quWMulwiLCBcIum7hOWxseWMulwiLCBcIuW+veW3nuWMulwiLCBcIuatmeWOv1wiLCBcIuS8keWugeWOv1wiLCBcIum7n+WOv1wiLCBcIuelgemXqOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzEzXCIsIFtcIumHkeWuieWMulwiLCBcIuijleWuieWMulwiLCBcIuWvv+WOv1wiLCBcIumcjemCseWOv1wiLCBcIuiIkuWfjuWOv1wiLCBcIumHkeWvqOWOv1wiLCBcIumcjeWxseWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzE1XCIsIFtcIui0teaxoOWMulwiLCBcIuS4nOiHs+WOv1wiLCBcIuefs+WPsOWOv1wiLCBcIumdkumYs+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzE2XCIsIFtcIuWuo+W3nuWMulwiLCBcIumDjua6quWOv1wiLCBcIuW5v+W+t+WOv1wiLCBcIuazvuWOv1wiLCBcIue7qea6quWOv1wiLCBcIuaXjOW+t+WOv1wiLCBcIuWugeWbveW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXCIsIFtcIuWQiOiCpeW4glwiLCBcIuWuv+W3nuW4glwiLCBcIua3ruWMl+W4glwiLCBcIuS6s+W3nuW4glwiLCBcIumYnOmYs+W4glwiLCBcIuiajOWfoOW4glwiLCBcIua3ruWNl+W4glwiLCBcIua7geW3nuW4glwiLCBcIumprOmejeWxseW4glwiLCBcIuiKnOa5luW4glwiLCBcIumTnOmZteW4glwiLCBcIuWuieW6huW4glwiLCBcIum7hOWxseW4glwiLCBcIuWFreWuieW4glwiLCBcIuaxoOW3nuW4glwiLCBcIuWuo+WfjuW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xM18wXCIsIFtcIum8k+alvOWMulwiLCBcIuWPsOaxn+WMulwiLCBcIuS7k+WxseWMulwiLCBcIumprOWwvuWMulwiLCBcIuaZi+WuieWMulwiLCBcIumXveS+r+WOv1wiLCBcIui/nuaxn+WOv1wiLCBcIue9l+a6kOWOv1wiLCBcIumXvea4heWOv1wiLCBcIuawuOazsOWOv1wiLCBcIuW5s+a9reWOv1wiLCBcIuemj+a4heW4glwiLCBcIumVv+S5kOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEzXzFcIiwgW1wi5bu25bmz5Yy6XCIsIFwi5bu66Ziz5Yy6XCIsIFwi6aG65piM5Y6/XCIsIFwi5rWm5Z+O5Y6/XCIsIFwi5YWJ5rO95Y6/XCIsIFwi5p2+5rqq5Y6/XCIsIFwi5pS/5ZKM5Y6/XCIsIFwi6YK15q2m5biCXCIsIFwi5q2m5aS35bGx5biCXCIsIFwi5bu655Ov5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTNfMlwiLCBbXCLln47ljqLljLpcIiwgXCLmtrXmsZ/ljLpcIiwgXCLojZTln47ljLpcIiwgXCLnp4Dlsb/ljLpcIiwgXCLku5nmuLjljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xM18zXCIsIFtcIuaiheWIl+WMulwiLCBcIuS4ieWFg+WMulwiLCBcIuaYjua6quWOv1wiLCBcIua4hea1geWOv1wiLCBcIuWugeWMluWOv1wiLCBcIuWkp+eUsOWOv1wiLCBcIuWwpOa6quWOv1wiLCBcIuaymeWOv1wiLCBcIuWwhuS5kOWOv1wiLCBcIuazsOWugeWOv1wiLCBcIuW7uuWugeWOv1wiLCBcIuawuOWuieW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEzXzRcIiwgW1wi6bKk5Z+O5Yy6XCIsIFwi5Liw5rO95Yy6XCIsIFwi5rSb5rGf5Yy6XCIsIFwi5rOJ5riv5Yy6XCIsIFwi5oOg5a6J5Y6/XCIsIFwi5a6J5rqq5Y6/XCIsIFwi5rC45pil5Y6/XCIsIFwi5b635YyW5Y6/XCIsIFwi6YeR6Zeo5Y6/XCIsIFwi55+z54uu5biCXCIsIFwi5pmL5rGf5biCXCIsIFwi5Y2X5a6J5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTNfNVwiLCBbXCLmgJ3mmI7ljLpcIiwgXCLmtbfmsqfljLpcIiwgXCLmuZbph4zljLpcIiwgXCLpm4bnvo7ljLpcIiwgXCLlkIzlronljLpcIiwgXCLnv5TlronljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xM182XCIsIFtcIuiKl+WfjuWMulwiLCBcIum+meaWh+WMulwiLCBcIuS6kemchOWOv1wiLCBcIua8s+a1puWOv1wiLCBcIuivj+WuieWOv1wiLCBcIumVv+azsOWOv1wiLCBcIuS4nOWxseWOv1wiLCBcIuWNl+mdluWOv1wiLCBcIuW5s+WSjOWOv1wiLCBcIuWNjuWuieWOv1wiLCBcIum+mea1t+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEzXzdcIiwgW1wi5paw572X5Yy6XCIsIFwi5rC45a6a5Yy6XCIsIFwi6ZW/5rGA5Y6/XCIsIFwi5LiK5p2t5Y6/XCIsIFwi5q2m5bmz5Y6/XCIsIFwi6L+e5Z+O5Y6/XCIsIFwi5ryz5bmz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTNfOFwiLCBbXCLolYnln47ljLpcIiwgXCLpnJ7mtabljr9cIiwgXCLlj6TnlLDljr9cIiwgXCLlsY/ljZfljr9cIiwgXCLlr7/lroHljr9cIiwgXCLlkajlroHljr9cIiwgXCLmn5jojaPljr9cIiwgXCLnpo/lronluIJcIiwgXCLnpo/pvI7luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xM1wiLCBbXCLnpo/lt57luIJcIiwgXCLljZflubPluIJcIiwgXCLojobnlLDluIJcIiwgXCLkuInmmI7luIJcIiwgXCLms4nlt57luIJcIiwgXCLljqbpl6jluIJcIiwgXCLmvLPlt57luIJcIiwgXCLpvpnlsqnluIJcIiwgXCLlroHlvrfluIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMTRfMFwiLCBbXCLkuJzmuZbljLpcIiwgXCLopb/muZbljLpcIiwgXCLpnZLkupHosLHljLpcIiwgXCLmub7ph4zljLpcIiwgXCLpnZLlsbHmuZbljLpcIiwgXCLmlrDlu7rljLpcIiwgXCLljZfmmIzljr9cIiwgXCLlronkuYnljr9cIiwgXCLov5votKTljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF8xXCIsIFtcIuW6kOWxseWMulwiLCBcIua1lOmYs+WMulwiLCBcIuS5neaxn+WOv1wiLCBcIuatpuWugeWOv1wiLCBcIuS/ruawtOWOv1wiLCBcIuawuOS/ruWOv1wiLCBcIuW+t+WuieWOv1wiLCBcIuaYn+WtkOWOv1wiLCBcIumDveaYjOWOv1wiLCBcIua5luWPo+WOv1wiLCBcIuW9reazveWOv1wiLCBcIueRnuaYjOW4glwiLCBcIuWFsemdkuWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzJcIiwgW1wi5piM5rGf5Yy6XCIsIFwi54+g5bGx5Yy6XCIsIFwi5rWu5qKB5Y6/XCIsIFwi5LmQ5bmz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTRfM1wiLCBbXCLmnIjmuZbljLpcIiwgXCLkvZnmsZ/ljr9cIiwgXCLotLXmuqrluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF80XCIsIFtcIua4neawtOWMulwiLCBcIuWIhuWunOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzVcIiwgW1wi5a6J5rqQ5Yy6XCIsIFwi5rmY5Lic5Yy6XCIsIFwi6I6y6Iqx5Y6/XCIsIFwi5LiK5qCX5Y6/XCIsIFwi6Iqm5rqq5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTRfNlwiLCBbXCLnq6DotKHljLpcIiwgXCLljZflurfljLpcIiwgXCLotaPljr9cIiwgXCLkv6HkuLDljr9cIiwgXCLlpKfkvZnljr9cIiwgXCLkuIrnirnljr9cIiwgXCLltIfkuYnljr9cIiwgXCLlronov5zljr9cIiwgXCLpvpnljZfljr9cIiwgXCLlrprljZfljr9cIiwgXCLlhajljZfljr9cIiwgXCLlroHpg73ljr9cIiwgXCLkuo7pg73ljr9cIiwgXCLlhbTlm73ljr9cIiwgXCLkvJrmmIzljr9cIiwgXCLlr7vkuYzljr9cIiwgXCLnn7Pln47ljr9cIiwgXCLnkZ7ph5HluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF83XCIsIFtcIuS/oeW3nuWMulwiLCBcIuW5v+S4sOWMulwiLCBcIuS4iumltuWOv1wiLCBcIueOieWxseWOv1wiLCBcIumTheWxseWOv1wiLCBcIuaoquWzsOWOv1wiLCBcIuW8i+mYs+WOv1wiLCBcIuS9meW5suWOv1wiLCBcIumEsemYs+WOv1wiLCBcIuS4h+W5tOWOv1wiLCBcIuWpuua6kOWOv1wiLCBcIuW+t+WFtOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzhcIiwgW1wi5Li05bed5Yy6XCIsIFwi5Y2X5Z+O5Y6/XCIsIFwi6buO5bed5Y6/XCIsIFwi5Y2X5Liw5Y6/XCIsIFwi5bSH5LuB5Y6/XCIsIFwi5LmQ5a6J5Y6/XCIsIFwi5a6c6buE5Y6/XCIsIFwi6YeR5rqq5Y6/XCIsIFwi6LWE5rqq5Y6/XCIsIFwi5Lic5Lmh5Y6/XCIsIFwi5bm/5piM5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTRfOVwiLCBbXCLoooHlt57ljLpcIiwgXCLlpYnmlrDljr9cIiwgXCLkuIfovb3ljr9cIiwgXCLkuIrpq5jljr9cIiwgXCLlrpzkuLDljr9cIiwgXCLpnZblronljr9cIiwgXCLpk5zpvJPljr9cIiwgXCLkuLDln47luIJcIiwgXCLmqJ/moJHluIJcIiwgXCLpq5jlronluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF8xMFwiLCBbXCLlkInlt57ljLpcIiwgXCLpnZLljp/ljLpcIiwgXCLlkInlronljr9cIiwgXCLlkInmsLTljr9cIiwgXCLls6HmsZ/ljr9cIiwgXCLmlrDlubLljr9cIiwgXCLmsLjkuLDljr9cIiwgXCLms7Dlkozljr9cIiwgXCLpgYLlt53ljr9cIiwgXCLkuIflronljr9cIiwgXCLlronnpo/ljr9cIiwgXCLmsLjmlrDljr9cIiwgXCLkupXlhojlsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNFwiLCBbXCLljZfmmIzluIJcIiwgXCLkuZ3msZ/luIJcIiwgXCLmma/lvrfplYfluIJcIiwgXCLpubDmva3luIJcIiwgXCLmlrDkvZnluIJcIiwgXCLokI3kuaHluIJcIiwgXCLotaPlt57luIJcIiwgXCLkuIrppbbluIJcIiwgXCLmiprlt57luIJcIiwgXCLlrpzmmKXluIJcIiwgXCLlkInlronluIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMTVfMFwiLCBbXCLljobkuIvljLpcIiwgXCLluILkuK3ljLpcIiwgXCLmp5DojavljLpcIiwgXCLlpKnmoaXljLpcIiwgXCLljobln47ljLpcIiwgXCLplb/muIXljLpcIiwgXCLlubPpmLTljr9cIiwgXCLmtY7pmLPljr9cIiwgXCLllYbmsrPljr9cIiwgXCLnq6DkuJjluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xXCIsIFtcIuW4guWNl+WMulwiLCBcIuW4guWMl+WMulwiLCBcIum7hOWym+WMulwiLCBcIuW0guWxseWMulwiLCBcIuadjuayp+WMulwiLCBcIuWfjumYs+WMulwiLCBcIuiDtuW3nuW4glwiLCBcIuWNs+WiqOW4glwiLCBcIuW5s+W6puW4glwiLCBcIuiOseilv+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzJcIiwgW1wi5Lic5piM5bqc5Yy6XCIsIFwi6Ziz6LC35Y6/XCIsIFwi6I6Y5Y6/XCIsIFwi6IyM5bmz5Y6/XCIsIFwi5Lic6Zi/5Y6/XCIsIFwi5Yag5Y6/XCIsIFwi6auY5ZSQ5Y6/XCIsIFwi5Li05riF5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTVfM1wiLCBbXCLlvrfln47ljLpcIiwgXCLpmbXln47ljLpcIiwgXCLlroHmtKXljr9cIiwgXCLluobkupHljr9cIiwgXCLkuLTpgpHljr9cIiwgXCLpvZDmsrPljr9cIiwgXCLlubPljp/ljr9cIiwgXCLlpI/mtKXljr9cIiwgXCLmrabln47ljr9cIiwgXCLkuZDpmbXluIJcIiwgXCLnprnln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV80XCIsIFtcIuS4nOiQpeWMulwiLCBcIuays+WPo+WMulwiLCBcIuWepuWIqeWOv1wiLCBcIuWIqea0peWOv1wiLCBcIuW5v+mltuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzVcIiwgW1wi5reE5bed5Yy6XCIsIFwi5byg5bqX5Yy6XCIsIFwi5Y2a5bGx5Yy6XCIsIFwi5Li05reE5Yy6XCIsIFwi5ZGo5p2R5Yy6XCIsIFwi5qGT5Y+w5Y6/XCIsIFwi6auY6Z2S5Y6/XCIsIFwi5rKC5rqQ5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTVfNlwiLCBbXCLmvY3ln47ljLpcIiwgXCLlr5Lkuq3ljLpcIiwgXCLlnYrlrZDljLpcIiwgXCLlpY7mlofljLpcIiwgXCLkuLTmnJDljr9cIiwgXCLmmIzkuZDljr9cIiwgXCLpnZLlt57luIJcIiwgXCLor7jln47luIJcIiwgXCLlr7/lhYnluIJcIiwgXCLlronkuJjluIJcIiwgXCLpq5jlr4bluIJcIiwgXCLmmIzpgpHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV83XCIsIFtcIuiKnee9mOWMulwiLCBcIuemj+WxseWMulwiLCBcIueJn+W5s+WMulwiLCBcIuiOseWxseWMulwiLCBcIumVv+Wym+WOv1wiLCBcIum+meWPo+W4glwiLCBcIuiOsemYs+W4glwiLCBcIuiOseW3nuW4glwiLCBcIuiTrOiOseW4glwiLCBcIuaLm+i/nOW4glwiLCBcIuaglumcnuW4glwiLCBcIua1t+mYs+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzhcIiwgW1wi546v57+g5Yy6XCIsIFwi5paH55m75Yy6XCIsIFwi6I2j5oiQ5biCXCIsIFwi5Lmz5bGx5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTVfOVwiLCBbXCLkuJzmuK/ljLpcIiwgXCLlsprlsbHljLpcIiwgXCLkupTojrLljr9cIiwgXCLojpLljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xMFwiLCBbXCLlhbDlsbHljLpcIiwgXCLnvZfluoTljLpcIiwgXCLmsrPkuJzljLpcIiwgXCLmsoLljZfljr9cIiwgXCLpg6/ln47ljr9cIiwgXCLmsoLmsLTljr9cIiwgXCLlhbDpmbXljr9cIiwgXCLotLnljr9cIiwgXCLlubPpgpHljr9cIiwgXCLojpLljZfljr9cIiwgXCLokpnpmLTljr9cIiwgXCLkuLTmsq3ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xMVwiLCBbXCLluILkuK3ljLpcIiwgXCLolpvln47ljLpcIiwgXCLls4Tln47ljLpcIiwgXCLlj7DlhL/luoTljLpcIiwgXCLlsbHkuq3ljLpcIiwgXCLmu5Xlt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xMlwiLCBbXCLku7vln47ljLpcIiwgXCLlhZblt57ljLpcIiwgXCLlvq7lsbHljr9cIiwgXCLpsbzlj7Dljr9cIiwgXCLph5HkuaHljr9cIiwgXCLlmInnpaXljr9cIiwgXCLmsbbkuIrljr9cIiwgXCLms5fmsLTljr9cIiwgXCLmooHlsbHljr9cIiwgXCLmm7LpmJzluIJcIiwgXCLpgrnln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xM1wiLCBbXCLms7DlsbHljLpcIiwgXCLlsrHlsrPljLpcIiwgXCLlroHpmLPljr9cIiwgXCLkuJzlubPljr9cIiwgXCLmlrDms7DluIJcIiwgXCLogqXln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xNFwiLCBbXCLojrHln47ljLpcIiwgXCLpkqLln47ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xNVwiLCBbXCLmu6jln47ljLpcIiwgXCLmsr7ljJbljLpcIiwgXCLmg6DmsJHljr9cIiwgXCLpmLPkv6Hljr9cIiwgXCLml6Dmo6Pljr9cIiwgXCLljZrlhbTljr9cIiwgXCLpgrnlubPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8xNlwiLCBbXCLniaHkuLnljLpcIiwgXCLmm7nljr9cIiwgXCLljZXljr9cIiwgXCLmiJDmrabljr9cIiwgXCLlt6jph47ljr9cIiwgXCLpg5Pln47ljr9cIiwgXCLphITln47ljr9cIiwgXCLlrprpmbbljr9cIiwgXCLkuJzmmI7ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNVwiLCBbXCLmtY7ljZfluIJcIiwgXCLpnZLlspvluIJcIiwgXCLogYrln47luIJcIiwgXCLlvrflt57luIJcIiwgXCLkuJzokKXluIJcIiwgXCLmt4TljZrluIJcIiwgXCLmvY3lnYrluIJcIiwgXCLng5/lj7DluIJcIiwgXCLlqIHmtbfluIJcIiwgXCLml6XnhafluIJcIiwgXCLkuLTmsoLluIJcIiwgXCLmnqPluoTluIJcIiwgXCLmtY7lroHluIJcIiwgXCLms7DlronluIJcIiwgXCLojrHoipzluIJcIiwgXCLmu6jlt57luIJcIiwgXCLoj4/ms73luIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMTZfMFwiLCBbXCLkuK3ljp/ljLpcIiwgXCLkuozkuIPljLpcIiwgXCLnrqHln47lm57ml4/ljLpcIiwgXCLph5HmsLTljLpcIiwgXCLkuIrooZfljLpcIiwgXCLmg6DmtY7ljLpcIiwgXCLkuK3niZ/ljr9cIiwgXCLlt6nkuYnluIJcIiwgXCLojaXpmLPluIJcIiwgXCLmlrDlr4bluIJcIiwgXCLmlrDpg5HluIJcIiwgXCLnmbvlsIHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xXCIsIFtcIum+meS6reWMulwiLCBcIumhuuays+WbnuaXj+WMulwiLCBcIum8k+alvOWMulwiLCBcIuemueeOi+WPsOWMulwiLCBcIumHkeaYjuWMulwiLCBcIuelpeespuWMulwiLCBcIuadnuWOv1wiLCBcIumAmuiuuOWOv1wiLCBcIuWwieawj+WOv1wiLCBcIuWFsOiAg+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzJcIiwgW1wi5rmW5ruo5Yy6XCIsIFwi5riR5rGg5Y6/XCIsIFwi6ZmV5Y6/XCIsIFwi5Y2i5rCP5Y6/XCIsIFwi5LmJ6ams5biCXCIsIFwi54G15a6d5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTZfM1wiLCBbXCLogIHln47ljLpcIiwgXCLopb/lt6XljLpcIiwgXCLngI3msrPlm57ml4/ljLpcIiwgXCLmtqfopb/ljLpcIiwgXCLlkInliKnljLpcIiwgXCLmtJvpvpnljLpcIiwgXCLlrZ/mtKXljr9cIiwgXCLmlrDlronljr9cIiwgXCLmoL7lt53ljr9cIiwgXCLltanljr9cIiwgXCLmsZ3pmLPljr9cIiwgXCLlrpzpmLPljr9cIiwgXCLmtJvlroHljr9cIiwgXCLkvIrlt53ljr9cIiwgXCLlgYPluIjluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl80XCIsIFtcIuino+aUvuWMulwiLCBcIuS4reermeWMulwiLCBcIumprOadkeWMulwiLCBcIuWxsemYs+WMulwiLCBcIuS/ruatpuWOv1wiLCBcIuWNmueIseWOv1wiLCBcIuatpumZn+WOv1wiLCBcIua4qeWOv1wiLCBcIuaygemYs+W4glwiLCBcIuWtn+W3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzVcIiwgW1wi57qi5peX5Yy6XCIsIFwi5Y2r5ruo5Yy6XCIsIFwi5Yek5rOJ5Yy6XCIsIFwi54mn6YeO5Yy6XCIsIFwi5paw5Lmh5Y6/XCIsIFwi6I635ZiJ5Y6/XCIsIFwi5Y6f6Ziz5Y6/XCIsIFwi5bu25rSl5Y6/XCIsIFwi5bCB5LiY5Y6/XCIsIFwi6ZW/5Z6j5Y6/XCIsIFwi5Y2r6L6J5biCXCIsIFwi6L6J5Y6/5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTZfNlwiLCBbXCLpuaTlsbHljLpcIiwgXCLlsbHln47ljLpcIiwgXCLmt4fmu6jljLpcIiwgXCLmtZrljr9cIiwgXCLmt4fljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl83XCIsIFtcIuaWh+WzsOWMulwiLCBcIuWMl+WFs+WMulwiLCBcIuaut+mDveWMulwiLCBcIum+meWuieWMulwiLCBcIuWuiemYs+WOv1wiLCBcIuaxpOmYtOWOv1wiLCBcIua7keWOv1wiLCBcIuWGhem7hOWOv1wiLCBcIuael+W3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzhcIiwgW1wi5Y2O6b6Z5Yy6XCIsIFwi5riF5Liw5Y6/XCIsIFwi5Y2X5LmQ5Y6/XCIsIFwi6IyD5Y6/XCIsIFwi5Y+w5YmN5Y6/XCIsIFwi5r+u6Ziz5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTZfOVwiLCBbXCLmooHlm63ljLpcIiwgXCLnnaLpmLPljLpcIiwgXCLmsJHmnYPljr9cIiwgXCLnnaLljr9cIiwgXCLlroHpmbXljr9cIiwgXCLmn5jln47ljr9cIiwgXCLomZ7ln47ljr9cIiwgXCLlpI/pgpHljr9cIiwgXCLmsLjln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xMFwiLCBbXCLprY/pg73ljLpcIiwgXCLorrjmmIzljr9cIiwgXCLphKLpmbXljr9cIiwgXCLopYTln47ljr9cIiwgXCLnprnlt57luIJcIiwgXCLplb/okZvluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xMVwiLCBbXCLmupDmsYfljLpcIiwgXCLpg77ln47ljLpcIiwgXCLlj6zpmbXljLpcIiwgXCLoiJ7pmLPljr9cIiwgXCLkuLTpoo3ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xMlwiLCBbXCLmlrDljY7ljLpcIiwgXCLljavkuJzljLpcIiwgXCLnn7PpvpnljLpcIiwgXCLmuZvmsrPljLpcIiwgXCLlrp3kuLDljr9cIiwgXCLlj7bljr9cIiwgXCLpsoHlsbHljr9cIiwgXCLpg4/ljr9cIiwgXCLoiJ7pkqLluIJcIiwgXCLmsZ3lt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xM1wiLCBbXCLlrpvln47ljLpcIiwgXCLljafpvpnljLpcIiwgXCLljZflj6zljr9cIiwgXCLmlrnln47ljr9cIiwgXCLopb/ls6Hljr9cIiwgXCLplYflubPljr9cIiwgXCLlhoXkuaHljr9cIiwgXCLmt4Xlt53ljr9cIiwgXCLnpL7ml5fljr9cIiwgXCLllJDmsrPljr9cIiwgXCLmlrDph47ljr9cIiwgXCLmoZDmn4/ljr9cIiwgXCLpgpPlt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xNFwiLCBbXCLmtYnmsrPljLpcIiwgXCLlubPmoaXljLpcIiwgXCLnvZflsbHljr9cIiwgXCLlhYnlsbHljr9cIiwgXCLmlrDljr9cIiwgXCLllYbln47ljr9cIiwgXCLlm7rlp4vljr9cIiwgXCLmvaLlt53ljr9cIiwgXCLmt67mu6jljr9cIiwgXCLmga/ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xNVwiLCBbXCLlt53msYfljLpcIiwgXCLmibbmsp/ljr9cIiwgXCLopb/ljY7ljr9cIiwgXCLllYbmsLTljr9cIiwgXCLmsojkuJjljr9cIiwgXCLpg7jln47ljr9cIiwgXCLmt67pmLPljr9cIiwgXCLlpKrlurfljr9cIiwgXCLpub/pgpHljr9cIiwgXCLpobnln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xNlwiLCBbXCLpqb/ln47ljLpcIiwgXCLopb/lubPljr9cIiwgXCLkuIrolKHljr9cIiwgXCLlubPoiIbljr9cIiwgXCLmraPpmLPljr9cIiwgXCLnoa7lsbHljr9cIiwgXCLms4zpmLPljr9cIiwgXCLmsZ3ljZfljr9cIiwgXCLpgYLlubPljr9cIiwgXCLmlrDolKHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8xN1wiLCBbXCLmtY7mupDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNlwiLCBbXCLpg5Hlt57luIJcIiwgXCLlvIDlsIHluIJcIiwgXCLkuInpl6jls6HluIJcIiwgXCLmtJvpmLPluIJcIiwgXCLnhKbkvZzluIJcIiwgXCLmlrDkuaHluIJcIiwgXCLpuaTlo4HluIJcIiwgXCLlronpmLPluIJcIiwgXCLmv67pmLPluIJcIiwgXCLllYbkuJjluIJcIiwgXCLorrjmmIzluIJcIiwgXCLmvK/msrPluIJcIiwgXCLlubPpobblsbHluIJcIiwgXCLljZfpmLPluIJcIiwgXCLkv6HpmLPluIJcIiwgXCLlkajlj6PluIJcIiwgXCLpqbvpqazlupfluIJcIiwgXCLnnIHnm7Tovpbljr/nuqfooYzmlL/ljLrliJJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMTdfMFwiLCBbXCLmsZ/lsrjljLpcIiwgXCLmsZ/msYnljLpcIiwgXCLnoZrlj6PljLpcIiwgXCLmsYnpmLPljLpcIiwgXCLmrabmmIzljLpcIiwgXCLpnZLlsbHljLpcIiwgXCLmtKrlsbHljLpcIiwgXCLkuJzopb/muZbljLpcIiwgXCLmsYnljZfljLpcIiwgXCLolKHnlLjljLpcIiwgXCLmsZ/lpI/ljLpcIiwgXCLpu4TpmYLljLpcIiwgXCLmlrDmtLLljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN18xXCIsIFtcIuiMheeureWMulwiLCBcIuW8oOa5vuWMulwiLCBcIumDp+mYs+WMulwiLCBcIumDp+ilv+WOv1wiLCBcIuerueWxseWOv1wiLCBcIueruea6quWOv1wiLCBcIuaIv+WOv1wiLCBcIuS4ueaxn+WPo+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzJcIiwgW1wi6KWE5Z+O5Yy6XCIsIFwi5qiK5Z+O5Yy6XCIsIFwi6KWE5bee5Yy6XCIsIFwi5Y2X5ryz5Y6/XCIsIFwi6LC35Z+O5Y6/XCIsIFwi5L+d5bq35Y6/XCIsIFwi6ICB5rKz5Y+j5biCXCIsIFwi5p6j6Ziz5biCXCIsIFwi5a6c5Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTdfM1wiLCBbXCLkuJzlrp3ljLpcIiwgXCLmjofliIDljLpcIiwgXCLkuqzlsbHljr9cIiwgXCLmspnmtIvljr9cIiwgXCLpkp/npaXluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN180XCIsIFtcIuWtneWNl+WMulwiLCBcIuWtneaYjOWOv1wiLCBcIuWkp+aCn+WOv1wiLCBcIuS6keaipuWOv1wiLCBcIuW6lOWfjuW4glwiLCBcIuWuiemZhuW4glwiLCBcIuaxieW3neW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzVcIiwgW1wi6buE5bee5Yy6XCIsIFwi5Zui6aOO5Y6/XCIsIFwi57qi5a6J5Y6/XCIsIFwi572X55Sw5Y6/XCIsIFwi6Iux5bGx5Y6/XCIsIFwi5rWg5rC05Y6/XCIsIFwi6JWy5pil5Y6/XCIsIFwi6buE5qKF5Y6/XCIsIFwi6bq75Z+O5biCXCIsIFwi5q2m56m05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTdfNlwiLCBbXCLmooHlrZDmuZbljLpcIiwgXCLljY7lrrnljLpcIiwgXCLphILln47ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN183XCIsIFtcIum7hOefs+a4r+WMulwiLCBcIuilv+WhnuWxseWMulwiLCBcIuS4i+mZhuWMulwiLCBcIumTgeWxseWMulwiLCBcIumYs+aWsOWOv1wiLCBcIuWkp+WGtuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzhcIiwgW1wi5ZK45a6J5Yy6XCIsIFwi5ZiJ6bG85Y6/XCIsIFwi6YCa5Z+O5Y6/XCIsIFwi5bSH6Ziz5Y6/XCIsIFwi6YCa5bGx5Y6/XCIsIFwi6LWk5aOB5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTdfOVwiLCBbXCLmspnluILljLpcIiwgXCLojYblt57ljLpcIiwgXCLlhazlronljr9cIiwgXCLnm5HliKnljr9cIiwgXCLmsZ/pmbXljr9cIiwgXCLnn7PpppbluIJcIiwgXCLmtKrmuZbluIJcIiwgXCLmnb7mu4vluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN18xMFwiLCBbXCLopb/pmbXljLpcIiwgXCLkvI3lrrblspfljLpcIiwgXCLngrnlhpvljLpcIiwgXCLnjIfkuq3ljLpcIiwgXCLlpLfpmbXljLpcIiwgXCLov5zlronljr9cIiwgXCLlhbTlsbHljr9cIiwgXCLnp63lvZLljr9cIiwgXCLplb/pmLPlnJ/lrrbml4/oh6rmsrvljr9cIiwgXCLkupTls7DlnJ/lrrbml4/oh6rmsrvljr9cIiwgXCLlrpzpg73luIJcIiwgXCLlvZPpmLPluIJcIiwgXCLmnp3msZ/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN18xMVwiLCBbXCLmm77pg73ljLpcIiwgXCLpmo/ljr9cIiwgXCLlub/msLTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN18xMlwiLCBbXCLmganmlr3luIJcIiwgXCLliKnlt53luIJcIiwgXCLlu7rlp4vljr9cIiwgXCLlt7TkuJzljr9cIiwgXCLlrqPmganljr9cIiwgXCLlkrjkuLDljr9cIiwgXCLmnaXlh6Tljr9cIiwgXCLpuaTls7Dljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xN18xM1wiLCBbXCLku5nmoYPluIJcIiwgXCLmvZzmsZ/luIJcIiwgXCLlpKnpl6jluIJcIiwgXCLnpZ7lhpzmnrbmnpfljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN1wiLCBbXCLmrabmsYnluIJcIiwgXCLljYHloLDluIJcIiwgXCLopYTmqIrluIJcIiwgXCLojYbpl6jluIJcIiwgXCLlrZ3mhJ/luIJcIiwgXCLpu4TlhojluIJcIiwgXCLphILlt57luIJcIiwgXCLpu4Tnn7PluIJcIiwgXCLlkrjlroHluIJcIiwgXCLojYblt57luIJcIiwgXCLlrpzmmIzluIJcIiwgXCLpmo/lt57luIJcIiwgXCLmganmlr3lnJ/lrrbml4/oi5fml4/oh6rmsrvlt55cIiwgXCLnnIHnm7Tovpbljr/nuqfooYzmlL/ljZXkvY1cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMThfMFwiLCBbXCLoipnok4nljLpcIiwgXCLlpKnlv4PljLpcIiwgXCLlsrPpupPljLpcIiwgXCLlvIDnpo/ljLpcIiwgXCLpm6joirHljLpcIiwgXCLmnJvln47ljLpcIiwgXCLplb/mspnljr9cIiwgXCLlroHkuaHljr9cIiwgXCLmtY/pmLPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF8xXCIsIFtcIuawuOWumuWMulwiLCBcIuatpumZtea6kOWMulwiLCBcIuaFiOWIqeWOv1wiLCBcIuahkeakjeWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzJcIiwgW1wi5q2m6Zm15Yy6XCIsIFwi6byO5Z+O5Yy6XCIsIFwi5a6J5Lmh5Y6/XCIsIFwi5rGJ5a+/5Y6/XCIsIFwi5r6n5Y6/XCIsIFwi5Li05r6n5Y6/XCIsIFwi5qGD5rqQ5Y6/XCIsIFwi55+z6Zeo5Y6/XCIsIFwi5rSl5biC5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMThfM1wiLCBbXCLotYTpmLPljLpcIiwgXCLotavlsbHljLpcIiwgXCLljZfljr9cIiwgXCLmoYPmsZ/ljr9cIiwgXCLlronljJbljr9cIiwgXCLmsoXmsZ/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF80XCIsIFtcIuWys+mYs+alvOWMulwiLCBcIuS6kea6quWMulwiLCBcIuWQm+WxseWMulwiLCBcIuWys+mYs+WOv1wiLCBcIuWNjuWuueWOv1wiLCBcIua5mOmYtOWOv1wiLCBcIuW5s+axn+WOv1wiLCBcIuaxqOe9l+W4glwiLCBcIuS4tOa5mOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzVcIiwgW1wi6I235aGY5Yy6XCIsIFwi6Iqm5ree5Yy6XCIsIFwi55+z5bOw5Yy6XCIsIFwi5aSp5YWD5Yy6XCIsIFwi5qCq5rSy5Y6/XCIsIFwi5pS45Y6/XCIsIFwi6Iy26Zm15Y6/XCIsIFwi54KO6Zm15Y6/XCIsIFwi6Ya06Zm15biCXCJdKTtcclxuZHN5LmFkZChcIjBfMThfNlwiLCBbXCLpm6jmuZbljLpcIiwgXCLlsrPloZjljLpcIiwgXCLmuZjmva3ljr9cIiwgXCLmuZjkuaHluIJcIiwgXCLpn7blsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF83XCIsIFtcIuePoOaZluWMulwiLCBcIumbgeWzsOWMulwiLCBcIuefs+m8k+WMulwiLCBcIuiSuOa5mOWMulwiLCBcIuWNl+Wys+WMulwiLCBcIuihoemYs+WOv1wiLCBcIuihoeWNl+WOv1wiLCBcIuihoeWxseWOv1wiLCBcIuihoeS4nOWOv1wiLCBcIuelgeS4nOWOv1wiLCBcIuiAkumYs+W4glwiLCBcIuW4uOWugeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzhcIiwgW1wi5YyX5rmW5Yy6XCIsIFwi6IuP5LuZ5Yy6XCIsIFwi5qGC6Ziz5Y6/XCIsIFwi5a6c56ug5Y6/XCIsIFwi5rC45YW05Y6/XCIsIFwi5ZiJ56a+5Y6/XCIsIFwi5Li05q2m5Y6/XCIsIFwi5rGd5Z+O5Y6/XCIsIFwi5qGC5Lic5Y6/XCIsIFwi5a6J5LuB5Y6/XCIsIFwi6LWE5YW05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMThfOVwiLCBbXCLpm7bpmbXljLpcIiwgXCLlhrfmsLTmu6nljLpcIiwgXCLnpYHpmLPljr9cIiwgXCLkuJzlronljr9cIiwgXCLlj4zniYzljr9cIiwgXCLpgZPljr9cIiwgXCLmsZ/msLjljr9cIiwgXCLlroHov5zljr9cIiwgXCLok53lsbHljr9cIiwgXCLmlrDnlLDljr9cIiwgXCLmsZ/ljY7nkbbml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF8xMFwiLCBbXCLlj4zmuIXljLpcIiwgXCLlpKfnpaXljLpcIiwgXCLljJfloZTljLpcIiwgXCLpgrXkuJzljr9cIiwgXCLmlrDpgrXljr9cIiwgXCLpgrXpmLPljr9cIiwgXCLpmoblm57ljr9cIiwgXCLmtJ7lj6Pljr9cIiwgXCLnu6XlroHljr9cIiwgXCLmlrDlroHljr9cIiwgXCLln47mraXoi5fml4/oh6rmsrvljr9cIiwgXCLmrablhojluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF8xMVwiLCBbXCLpuaTln47ljLpcIiwgXCLkuK3mlrnljr9cIiwgXCLmsoXpmbXljr9cIiwgXCLovrDmuqrljr9cIiwgXCLmuobmtabljr9cIiwgXCLkvJrlkIzljr9cIiwgXCLpurvpmLPoi5fml4/oh6rmsrvljr9cIiwgXCLmlrDmmYPkvpfml4/oh6rmsrvljr9cIiwgXCLoirfmsZ/kvpfml4/oh6rmsrvljr9cIiwgXCLpnZblt57oi5fml4/kvpfml4/oh6rmsrvljr9cIiwgXCLpgJrpgZPkvpfml4/oh6rmsrvljr9cIiwgXCLmtKrmsZ/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF8xMlwiLCBbXCLlqITmmJ/ljLpcIiwgXCLlj4zls7Dljr9cIiwgXCLmlrDljJbljr9cIiwgXCLlhrfmsLTmsZ/luIJcIiwgXCLmtp/mupDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF8xM1wiLCBbXCLlkInpppbluIJcIiwgXCLms7jmuqrljr9cIiwgXCLlh6Tlh7Dljr9cIiwgXCLoirHlnqPljr9cIiwgXCLkv53pnZbljr9cIiwgXCLlj6TkuIjljr9cIiwgXCLmsLjpobrljr9cIiwgXCLpvpnlsbHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xOFwiLCBbXCLplb/mspnluIJcIiwgXCLlvKDlrrbnlYzluIJcIiwgXCLluLjlvrfluIJcIiwgXCLnm4rpmLPluIJcIiwgXCLlsrPpmLPluIJcIiwgXCLmoKrmtLLluIJcIiwgXCLmuZjmva3luIJcIiwgXCLooaHpmLPluIJcIiwgXCLpg7Tlt57luIJcIiwgXCLmsLjlt57luIJcIiwgXCLpgrXpmLPluIJcIiwgXCLmgIDljJbluIJcIiwgXCLlqITlupXluIJcIiwgXCLmuZjopb/lnJ/lrrbml4/oi5fml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMTlfMFwiLCBbXCLojZTmub7ljLpcIiwgXCLotornp4DljLpcIiwgXCLmtbfnj6DljLpcIiwgXCLlpKnmsrPljLpcIiwgXCLnmb3kupHljLpcIiwgXCLpu4Tln5TljLpcIiwgXCLnlarnprrljLpcIiwgXCLoirHpg73ljLpcIiwgXCLljZfmspnljLpcIiwgXCLku47ljJbljLpcIiwgXCLlop7ln47ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xXCIsIFtcIue9l+a5luWMulwiLCBcIuemj+eUsOWMulwiLCBcIuWNl+WxseWMulwiLCBcIuWuneWuieWMulwiLCBcIum+meWyl+WMulwiLCBcIuebkOeUsOWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzJcIiwgW1wi5riF5Z+O5Yy6XCIsIFwi5riF5paw5Yy6XCIsIFwi5L2b5YaI5Y6/XCIsIFwi6Ziz5bGx5Y6/XCIsIFwi6L+e5bGx5aOu5peP55G25peP6Ieq5rK75Y6/XCIsIFwi6L+e5Y2X55G25peP6Ieq5rK75Y6/XCIsIFwi6Iux5b635biCXCIsIFwi6L+e5bee5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTlfM1wiLCBbXCLmrabmsZ/ljLpcIiwgXCLmtYjmsZ/ljLpcIiwgXCLmm7LmsZ/ljLpcIiwgXCLlp4vlhbTljr9cIiwgXCLku4HljJbljr9cIiwgXCLnv4HmupDljr9cIiwgXCLkubPmupDnkbbml4/oh6rmsrvljr9cIiwgXCLmlrDkuLDljr9cIiwgXCLkuZDmmIzluIJcIiwgXCLljZfpm4TluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV80XCIsIFtcIua6kOWfjuWMulwiLCBcIue0q+mHkeWOv1wiLCBcIum+meW3neWOv1wiLCBcIui/nuW5s+WOv1wiLCBcIuWSjOW5s+WOv1wiLCBcIuS4nOa6kOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzVcIiwgW1wi5qKF5rGf5Yy6XCIsIFwi5qKF5Y6/5Yy6XCIsIFwi5aSn5Z+U5Y6/XCIsIFwi5Liw6aG65Y6/XCIsIFwi5LqU5Y2O5Y6/XCIsIFwi5bmz6L+c5Y6/XCIsIFwi6JWJ5bKt5Y6/XCIsIFwi5YW05a6B5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTlfNlwiLCBbXCLmuZjmoaXljLpcIiwgXCLmva7lronljLpcIiwgXCLppbblubPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV83XCIsIFtcIum+mea5luWMulwiLCBcIumHkeW5s+WMulwiLCBcIua/oOaxn+WMulwiLCBcIua9rumYs+WMulwiLCBcIua9ruWNl+WMulwiLCBcIua+hOa1t+WMulwiLCBcIuWNl+a+s+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzhcIiwgW1wi5qaV5Z+O5Yy6XCIsIFwi5o+t5Lic5Yy6XCIsIFwi5o+t6KW/5Y6/XCIsIFwi5oOg5p2l5Y6/XCIsIFwi5pmu5a6B5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTlfOVwiLCBbXCLln47ljLpcIiwgXCLmtbfkuLDljr9cIiwgXCLpmYbmsrPljr9cIiwgXCLpmYbkuLDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xMFwiLCBbXCLmg6Dln47ljLpcIiwgXCLmg6DpmLPljLpcIiwgXCLljZrnvZfljr9cIiwgXCLmg6DkuJzljr9cIiwgXCLpvpnpl6jljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xMVwiLCBbXCLkuJzojp7luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xMlwiLCBbXCLpppnmtLLljLpcIiwgXCLmlpfpl6jljLpcIiwgXCLph5Hmub7ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xM1wiLCBbXCLkuK3lsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xNFwiLCBbXCLok6zmsZ/ljLpcIiwgXCLmsZ/mtbfljLpcIiwgXCLmlrDkvJrljLpcIiwgXCLlj7DlsbHluIJcIiwgXCLlvIDlubPluIJcIiwgXCLpuaTlsbHluIJcIiwgXCLmganlubPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xNVwiLCBbXCLnpoXln47ljLpcIiwgXCLljZfmtbfljLpcIiwgXCLpobrlvrfljLpcIiwgXCLkuInmsLTljLpcIiwgXCLpq5jmmI7ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xNlwiLCBbXCLnq6/lt57ljLpcIiwgXCLpvI7muZbljLpcIiwgXCLpq5jopoHljLpcIiwgXCLlub/lroHljr9cIiwgXCLmgIDpm4bljr9cIiwgXCLlsIHlvIDljr9cIiwgXCLlvrfluobljr9cIiwgXCLlm5vkvJrluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xN1wiLCBbXCLkupHln47ljLpcIiwgXCLkupHlronljLpcIiwgXCLmlrDlhbTljr9cIiwgXCLpg4HljZfljr9cIiwgXCLnvZflrprluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xOFwiLCBbXCLmsZ/ln47ljLpcIiwgXCLpmLPkuJzljLpcIiwgXCLpmLPopb/ljr9cIiwgXCLpmLPmmKXluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8xOVwiLCBbXCLojILljZfljLpcIiwgXCLnlLXnmb3ljLpcIiwgXCLpq5jlt57luIJcIiwgXCLljJblt57luIJcIiwgXCLkv6HlrpzluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8yMFwiLCBbXCLotaTlnY7ljLpcIiwgXCLpnJ7lsbHljLpcIiwgXCLlnaHlpLTljLpcIiwgXCLpurvnq6DljLpcIiwgXCLpgYLmuqrljr9cIiwgXCLlvpDpl7vljr9cIiwgXCLlu4nmsZ/luIJcIiwgXCLpm7flt57luIJcIiwgXCLlkLTlt53luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOVwiLCBbXCLlub/lt57luIJcIiwgXCLmt7HlnLPluIJcIiwgXCLmuIXov5zluIJcIiwgXCLpn7blhbPluIJcIiwgXCLmsrPmupDluIJcIiwgXCLmooXlt57luIJcIiwgXCLmva7lt57luIJcIiwgXCLmsZXlpLTluIJcIiwgXCLmj63pmLPluIJcIiwgXCLmsZXlsL7luIJcIiwgXCLmg6Dlt57luIJcIiwgXCLkuJzojp7luIJcIiwgXCLnj6DmtbfluIJcIiwgXCLkuK3lsbHluIJcIiwgXCLmsZ/pl6jluIJcIiwgXCLkvZvlsbHluIJcIiwgXCLogofluobluIJcIiwgXCLkupHmta7luIJcIiwgXCLpmLPmsZ/luIJcIiwgXCLojILlkI3luIJcIiwgXCLmuZvmsZ/luIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjBfMFwiLCBbXCLlhbTlroHljLpcIiwgXCLpnZLnp4DljLpcIiwgXCLmsZ/ljZfljLpcIiwgXCLopb/kuaHloZjljLpcIiwgXCLoia/luobljLpcIiwgXCLpgpXlroHljLpcIiwgXCLmrabpuKPljLpcIiwgXCLpmoblronljr9cIiwgXCLpqazlsbHljr9cIiwgXCLkuIrmnpfljr9cIiwgXCLlrr7pmLPljr9cIiwgXCLmqKrljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF8xXCIsIFtcIuengOWzsOWMulwiLCBcIuWPoOW9qeWMulwiLCBcIuixoeWxseWMulwiLCBcIuS4g+aYn+WMulwiLCBcIumbgeWxseWMulwiLCBcIuS4tOahguWMulwiLCBcIumYs+aclOWOv1wiLCBcIueBteW3neWOv1wiLCBcIuWFqOW3nuWOv1wiLCBcIuWFtOWuieWOv1wiLCBcIuawuOemj+WOv1wiLCBcIueBjOmYs+WOv1wiLCBcIum+meiDnOWQhOaXj+iHquayu+WOv1wiLCBcIui1hOa6kOWOv1wiLCBcIuW5s+S5kOWOv1wiLCBcIuiNlOa1puWOv1wiLCBcIuaBreWfjueRtuaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzJcIiwgW1wi5Z+O5Lit5Yy6XCIsIFwi6bG85bOw5Yy6XCIsIFwi5p+z5Y2X5Yy6XCIsIFwi5p+z5YyX5Yy6XCIsIFwi5p+z5rGf5Y6/XCIsIFwi5p+z5Z+O5Y6/XCIsIFwi6bm/5a+o5Y6/XCIsIFwi6J6N5a6J5Y6/XCIsIFwi6J6N5rC06IuX5peP6Ieq5rK75Y6/XCIsIFwi5LiJ5rGf5L6X5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjBfM1wiLCBbXCLkuIfnp4DljLpcIiwgXCLplb/mtLLljLpcIiwgXCLpvpnlnKnljLpcIiwgXCLoi43moqfljr9cIiwgXCLol6Tljr9cIiwgXCLokpnlsbHljr9cIiwgXCLlspHmuqrluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF80XCIsIFtcIua4r+WMl+WMulwiLCBcIua4r+WNl+WMulwiLCBcIuimg+WhmOWMulwiLCBcIuW5s+WNl+WOv1wiLCBcIuahguW5s+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzVcIiwgW1wi546J5bee5Yy6XCIsIFwi56aP57u15Yy6XCIsIFwi5a655Y6/XCIsIFwi6ZmG5bed5Y6/XCIsIFwi5Y2a55m95Y6/XCIsIFwi5YW05Lia5Y6/XCIsIFwi5YyX5rWB5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjBfNlwiLCBbXCLpkqbljZfljLpcIiwgXCLpkqbljJfljLpcIiwgXCLngbXlsbHljr9cIiwgXCLmtabljJfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF83XCIsIFtcIua1t+WfjuWMulwiLCBcIumTtua1t+WMulwiLCBcIumTgeWxsea4r+WMulwiLCBcIuWQiOa1puWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzhcIiwgW1wi5riv5Y+j5Yy6XCIsIFwi6Ziy5Z+O5Yy6XCIsIFwi5LiK5oCd5Y6/XCIsIFwi5Lic5YW05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjBfOVwiLCBbXCLmsZ/lt57ljLpcIiwgXCLmibbnu6Xljr9cIiwgXCLlroHmmI7ljr9cIiwgXCLpvpnlt57ljr9cIiwgXCLlpKfmlrDljr9cIiwgXCLlpKnnrYnljr9cIiwgXCLlh63npaXluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF8xMFwiLCBbXCLlj7PmsZ/ljLpcIiwgXCLnlLDpmLPljr9cIiwgXCLnlLDkuJzljr9cIiwgXCLlubPmnpzljr9cIiwgXCLlvrfkv53ljr9cIiwgXCLpgqPlnaHljr9cIiwgXCLlh4zkupHljr9cIiwgXCLkuZDkuJrljr9cIiwgXCLnlLDmnpfljr9cIiwgXCLopb/mnpfljr9cIiwgXCLpmobmnpflkITml4/oh6rmsrvljr9cIiwgXCLpnZbopb/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF8xMVwiLCBbXCLph5Hln47msZ/ljLpcIiwgXCLljZfkuLnljr9cIiwgXCLlpKnls6jljr9cIiwgXCLlh6TlsbHljr9cIiwgXCLkuJzlhbDljr9cIiwgXCLnvZfln47ku6vkvazml4/oh6rmsrvljr9cIiwgXCLnjq/msZ/mr5vljZfml4/oh6rmsrvljr9cIiwgXCLlt7Tpqaznkbbml4/oh6rmsrvljr9cIiwgXCLpg73lronnkbbml4/oh6rmsrvljr9cIiwgXCLlpKfljJbnkbbml4/oh6rmsrvljr9cIiwgXCLlrpzlt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF8xMlwiLCBbXCLlhbTlrr7ljLpcIiwgXCLlv7vln47ljr9cIiwgXCLosaHlt57ljr9cIiwgXCLmrablrqPljr9cIiwgXCLph5Hnp4Dnkbbml4/oh6rmsrvljr9cIiwgXCLlkIjlsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF8xM1wiLCBbXCLlhavmraXljLpcIiwgXCLmmK3lubPljr9cIiwgXCLpkp/lsbHljr9cIiwgXCLlr4zlt53nkbbml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMFwiLCBbXCLljZflroHluIJcIiwgXCLmoYLmnpfluIJcIiwgXCLmn7Plt57luIJcIiwgXCLmoqflt57luIJcIiwgXCLotLXmuK/luIJcIiwgXCLnjonmnpfluIJcIiwgXCLpkqblt57luIJcIiwgXCLljJfmtbfluIJcIiwgXCLpmLLln47muK/luIJcIiwgXCLltIflt6bluIJcIiwgXCLnmb7oibLluIJcIiwgXCLmsrPmsaDluIJcIiwgXCLmnaXlrr7luIJcIiwgXCLotLrlt57luIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjFfMFwiLCBbXCLnp4Doi7HljLpcIiwgXCLpvpnljY7ljLpcIiwgXCLnkLzlsbHljLpcIiwgXCLnvo7lhbDljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMV8xXCIsIFtcIua1t+ajoOWMulwiLCBcIuWQiemYs+WMulwiLCBcIuWkqea2r+WMulwiLCBcIuW0luW3nuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzIxXzJcIiwgW1wi6KW/5rKZ576k5bKbXCIsIFwi5Y2X5rKZ576k5bKbXCIsIFwi5Lit5rKZ576k5bKb55qE5bKb56SB5Y+K5YW25rW35Z+fXCJdKTtcclxuZHN5LmFkZChcIjBfMjFfM1wiLCBbXCLkupTmjIflsbHluIJcIiwgXCLnkLzmtbfluIJcIiwgXCLlhIvlt57luIJcIiwgXCLmlofmmIzluIJcIiwgXCLkuIflroHluIJcIiwgXCLkuJzmlrnluIJcIiwgXCLlrprlronljr9cIiwgXCLlsa/mmIzljr9cIiwgXCLmvoTov4jljr9cIiwgXCLkuLTpq5jljr9cIiwgXCLnmb3mspnpu47ml4/oh6rmsrvljr9cIiwgXCLmmIzmsZ/pu47ml4/oh6rmsrvljr9cIiwgXCLkuZDkuJzpu47ml4/oh6rmsrvljr9cIiwgXCLpmbXmsLTpu47ml4/oh6rmsrvljr9cIiwgXCLkv53kuq3pu47ml4/oi5fml4/oh6rmsrvljr9cIiwgXCLnkLzkuK3pu47ml4/oi5fml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMVwiLCBbXCLmtbflj6PluIJcIiwgXCLkuInkuprluIJcIiwgXCLkuInmspnluIJcIiwgXCLnnIHnm7Tovpbljr/nuqfooYzmlL/ljLrliJJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjJfMFwiLCBbXCLplKbmsZ/ljLpcIiwgXCLpnZLnvorljLpcIiwgXCLph5HniZvljLpcIiwgXCLmrabkvq/ljLpcIiwgXCLmiJDljY7ljLpcIiwgXCLpvpnms4npqb/ljLpcIiwgXCLpnZLnmb3msZ/ljLpcIiwgXCLmlrDpg73ljLpcIiwgXCLmuKnmsZ/ljLpcIiwgXCLph5HloILljr9cIiwgXCLlj4zmtYHljr9cIiwgXCLpg6vljr9cIiwgXCLlpKfpgpHljr9cIiwgXCLokrLmsZ/ljr9cIiwgXCLmlrDmtKXljr9cIiwgXCLpg73msZ/loLDluIJcIiwgXCLlva3lt57luIJcIiwgXCLpgpvltIPluIJcIiwgXCLltIflt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xXCIsIFtcIuWIqeW3nuWMulwiLCBcIuaYreWMluWMulwiLCBcIuacneWkqeWMulwiLCBcIuaXuuiLjeWOv1wiLCBcIumdkuW3neWOv1wiLCBcIuWJkemYgeWOv1wiLCBcIuiLjea6quWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzJcIiwgW1wi5raq5Z+O5Yy6XCIsIFwi5ri45LuZ5Yy6XCIsIFwi5LiJ5Y+w5Y6/XCIsIFwi55uQ5Lqt5Y6/XCIsIFwi5a6J5Y6/XCIsIFwi5qKT5r285Y6/XCIsIFwi5YyX5bed576M5peP6Ieq5rK75Y6/XCIsIFwi5bmz5q2m5Y6/XCIsIFwi5rGf5rK55biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjJfM1wiLCBbXCLml4zpmLPljLpcIiwgXCLkuK3msZ/ljr9cIiwgXCLnvZfmsZ/ljr9cIiwgXCLlub/msYnluIJcIiwgXCLku4DpgqHluIJcIiwgXCLnu7Xnq7nluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl80XCIsIFtcIumhuuW6huWMulwiLCBcIumrmOWdquWMulwiLCBcIuWYiemZteWMulwiLCBcIuWNl+mDqOWOv1wiLCBcIuiQpeWxseWOv1wiLCBcIuiTrOWuieWOv1wiLCBcIuS7qumZh+WOv1wiLCBcIuilv+WFheWOv1wiLCBcIumYhuS4reW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzVcIiwgW1wi5bm/5a6J5Yy6XCIsIFwi5YmN6ZSL5Yy6XCIsIFwi5bKz5rGg5Y6/XCIsIFwi5q2m6IOc5Y6/XCIsIFwi6YK75rC05Y6/XCIsIFwi5Y2O6JOl5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjJfNlwiLCBbXCLoiLnlsbHljLpcIiwgXCLlronlsYXljLpcIiwgXCLok6zmuqrljr9cIiwgXCLlsITmtKrljr9cIiwgXCLlpKfoi7Hljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl83XCIsIFtcIuW4guS4reWMulwiLCBcIuS4nOWFtOWMulwiLCBcIuWogei/nOWOv1wiLCBcIui1hOS4reWOv1wiLCBcIumahuaYjOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzhcIiwgW1wi5biC5Lit5Yy6XCIsIFwi5rKZ5rm+5Yy6XCIsIFwi5LqU6YCa5qGl5Yy6XCIsIFwi6YeR5Y+j5rKz5Yy6XCIsIFwi54qN5Li65Y6/XCIsIFwi5LqV56CU5Y6/XCIsIFwi5aS55rGf5Y6/XCIsIFwi5rKQ5bed5Y6/XCIsIFwi5bOo6L655b2d5peP6Ieq5rK75Y6/XCIsIFwi6ams6L655b2d5peP6Ieq5rK75Y6/XCIsIFwi5bOo55yJ5bGx5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjJfOVwiLCBbXCLoh6rmtYHkupXljLpcIiwgXCLotKHkupXljLpcIiwgXCLlpKflronljLpcIiwgXCLmsr/mu6nljLpcIiwgXCLojaPljr9cIiwgXCLlr4zpobrljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xMFwiLCBbXCLmsZ/pmLPljLpcIiwgXCLnurPmuqrljLpcIiwgXCLpvpnpqazmva3ljLpcIiwgXCLms7jljr9cIiwgXCLlkIjmsZ/ljr9cIiwgXCLlj5nmsLjljr9cIiwgXCLlj6TolLrljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xMVwiLCBbXCLnv6DlsY/ljLpcIiwgXCLljZfmuqrljLpcIiwgXCLlrpzlrr7ljr9cIiwgXCLmsZ/lronljr9cIiwgXCLplb/lroHljr9cIiwgXCLpq5jljr9cIiwgXCLnj5nljr9cIiwgXCLnraDov57ljr9cIiwgXCLlhbTmlofljr9cIiwgXCLlsY/lsbHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xMlwiLCBbXCLkuJzljLpcIiwgXCLopb/ljLpcIiwgXCLku4HlkozljLpcIiwgXCLnsbPmmJPljr9cIiwgXCLnm5Dovrnljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xM1wiLCBbXCLlt7Tlt57ljLpcIiwgXCLmganpmLPljLpcIiwgXCLpgJrmsZ/ljr9cIiwgXCLljZfmsZ/ljr9cIiwgXCLlubPmmIzljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xNFwiLCBbXCLpgJrlt53ljLpcIiwgXCLovr7lt53ljLpcIiwgXCLlrqPmsYnljr9cIiwgXCLlvIDmsZ/ljr9cIiwgXCLlpKfnq7nljr9cIiwgXCLmuKDljr9cIiwgXCLkuIfmupDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xNVwiLCBbXCLpm4HmsZ/ljLpcIiwgXCLlronlsrPljr9cIiwgXCLkuZDoh7Pljr9cIiwgXCLnroDpmLPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xNlwiLCBbXCLkuJzlnaHljLpcIiwgXCLlva3lsbHljLpcIiwgXCLku4Hlr7/ljr9cIiwgXCLmtKrpm4Xljr9cIiwgXCLkuLnmo7Hljr9cIiwgXCLpnZLnpZ7ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xN1wiLCBbXCLpm6jln47ljLpcIiwgXCLlkI3lsbHljLpcIiwgXCLojaXnu4/ljr9cIiwgXCLmsYnmupDljr9cIiwgXCLnn7Pmo4nljr9cIiwgXCLlpKnlhajljr9cIiwgXCLoiqblsbHljr9cIiwgXCLlrp3lhbTljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xOFwiLCBbXCLmsbblt53ljr9cIiwgXCLnkIbljr9cIiwgXCLojILljr9cIiwgXCLmnb7mvZjljr9cIiwgXCLkuZ3lr6jmsp/ljr9cIiwgXCLph5Hlt53ljr9cIiwgXCLlsI/ph5Hljr9cIiwgXCLpu5HmsLTljr9cIiwgXCLpqazlsJTlurfljr9cIiwgXCLlo6TloZjljr9cIiwgXCLpmL/lnZ3ljr9cIiwgXCLoi6XlsJTnm5bljr9cIiwgXCLnuqLljp/ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8xOVwiLCBbXCLlurflrprluIJcIiwgXCLms7jlrprljr9cIiwgXCLkuLnlt7Tljr9cIiwgXCLkuZ3pvpnljr9cIiwgXCLpm4XmsZ/ljr9cIiwgXCLpgZPlrZrljr9cIiwgXCLngonpnI3ljr9cIiwgXCLnlJjlrZzljr9cIiwgXCLmlrDpvpnljr9cIiwgXCLlvrfmoLzljr9cIiwgXCLnmb3njonljr9cIiwgXCLnn7PmuKDljr9cIiwgXCLoibLovr7ljr9cIiwgXCLnkIbloZjljr9cIiwgXCLlt7TloZjljr9cIiwgXCLkuaHln47ljr9cIiwgXCLnqLvln47ljr9cIiwgXCLlvpfojaPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8yMFwiLCBbXCLopb/mmIzluIJcIiwgXCLmnKjph4zol4/ml4/oh6rmsrvljr9cIiwgXCLnm5DmupDljr9cIiwgXCLlvrfmmIzljr9cIiwgXCLkvJrnkIbljr9cIiwgXCLkvJrkuJzljr9cIiwgXCLlroHljZfljr9cIiwgXCLmma7moLzljr9cIiwgXCLluIPmi5bljr9cIiwgXCLph5HpmLPljr9cIiwgXCLmmK3op4nljr9cIiwgXCLllpzlvrfljr9cIiwgXCLlhpXlroHljr9cIiwgXCLotoropb/ljr9cIiwgXCLnlJjmtJvljr9cIiwgXCLnvo7lp5Hljr9cIiwgXCLpm7fms6Lljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMlwiLCBbXCLmiJDpg73luIJcIiwgXCLlub/lhYPluIJcIiwgXCLnu7XpmLPluIJcIiwgXCLlvrfpmLPluIJcIiwgXCLljZflhYXluIJcIiwgXCLlub/lronluIJcIiwgXCLpgYLlroHluIJcIiwgXCLlhoXmsZ/luIJcIiwgXCLkuZDlsbHluIJcIiwgXCLoh6rotKHluIJcIiwgXCLms7jlt57luIJcIiwgXCLlrpzlrr7luIJcIiwgXCLmlIDmnp3oirHluIJcIiwgXCLlt7TkuK3luIJcIiwgXCLovr7lt57luIJcIiwgXCLotYTpmLPluIJcIiwgXCLnnInlsbHluIJcIiwgXCLpm4XlronluIJcIiwgXCLpmL/lnZ3ol4/ml4/nvozml4/oh6rmsrvlt55cIiwgXCLnlJjlrZzol4/ml4/oh6rmsrvlt55cIiwgXCLlh4nlsbHlvZ3ml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjNfMFwiLCBbXCLljZfmmI7ljLpcIiwgXCLkupHlsqnljLpcIiwgXCLoirHmuqrljLpcIiwgXCLkuYzlvZPljLpcIiwgXCLnmb3kupHljLpcIiwgXCLop4LlsbHmuZbljLpcIiwgXCLlvIDpmLPljr9cIiwgXCLmga/ng73ljr9cIiwgXCLkv67mlofljr9cIiwgXCLmuIXplYfluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yM18xXCIsIFtcIumSn+WxseWMulwiLCBcIuWFreaeneeJueWMulwiLCBcIuawtOWfjuWOv1wiLCBcIuebmOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIzXzJcIiwgW1wi57qi6Iqx5bKX5Yy6XCIsIFwi5rGH5bed5Yy6XCIsIFwi6YG15LmJ5Y6/XCIsIFwi5qGQ5qKT5Y6/XCIsIFwi57ul6Ziz5Y6/XCIsIFwi5q2j5a6J5Y6/XCIsIFwi6YGT55yf5Luh5L2s5peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi5Yqh5bed5Luh5L2s5peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi5Yek5YaI5Y6/XCIsIFwi5rmE5r2t5Y6/XCIsIFwi5L2Z5bqG5Y6/XCIsIFwi5Lmg5rC05Y6/XCIsIFwi6LWk5rC05biCXCIsIFwi5LuB5oCA5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjNfM1wiLCBbXCLopb/np4DljLpcIiwgXCLlubPlnZ3ljLpcIiwgXCLmma7lrprljr9cIiwgXCLplYflroHluIPkvp3ml4/oi5fml4/oh6rmsrvljr9cIiwgXCLlhbPlsq3luIPkvp3ml4/oi5fml4/oh6rmsrvljr9cIiwgXCLntKvkupHoi5fml4/luIPkvp3ml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yM180XCIsIFtcIuS4g+aYn+WFs+WMulwiLCBcIuWkp+aWueWOv1wiLCBcIum7lOilv+WOv1wiLCBcIumHkeaymeWOv1wiLCBcIue7h+mHkeWOv1wiLCBcIue6s+mbjeWOv1wiLCBcIuWogeWugeW9neaXj+WbnuaXj+iLl+aXj+iHquayu+WOv1wiLCBcIui1q+eroOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIzXzVcIiwgW1wi56Kn5rGf5Yy6XCIsIFwi5LiH5bGx5Yy6XCIsIFwi5rGf5Y+j5Y6/XCIsIFwi546J5bGP5L6X5peP6Ieq5rK75Y6/XCIsIFwi55+z6Zih5Y6/XCIsIFwi5oCd5Y2X5Y6/XCIsIFwi5Y2w5rGf5Zyf5a625peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi5b635rGf5Y6/XCIsIFwi5rK/5rKz5Zyf5a625peP6Ieq5rK75Y6/XCIsIFwi5p2+5qGD6IuX5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjNfNlwiLCBbXCLlh6/ph4zluIJcIiwgXCLpu4TlubPljr9cIiwgXCLmlr3np4nljr9cIiwgXCLkuInnqZfljr9cIiwgXCLplYfov5zljr9cIiwgXCLlspHlt6nljr9cIiwgXCLlpKnmn7Hljr9cIiwgXCLplKblsY/ljr9cIiwgXCLliZHmsrPljr9cIiwgXCLlj7DmsZ/ljr9cIiwgXCLpu47lubPljr9cIiwgXCLmppXmsZ/ljr9cIiwgXCLku47msZ/ljr9cIiwgXCLpm7flsbHljr9cIiwgXCLpurvmsZ/ljr9cIiwgXCLkuLnlr6jljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yM183XCIsIFtcIumDveWMgOW4glwiLCBcIuemj+azieW4glwiLCBcIuiNlOazouWOv1wiLCBcIui0teWumuWOv1wiLCBcIueTruWuieWOv1wiLCBcIueLrOWxseWOv1wiLCBcIuW5s+WhmOWOv1wiLCBcIue9l+eUuOWOv1wiLCBcIumVv+mhuuWOv1wiLCBcIum+memHjOWOv1wiLCBcIuaDoOawtOWOv1wiLCBcIuS4iemDveawtOaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIzXzhcIiwgW1wi5YW05LmJ5biCXCIsIFwi5YW05LuB5Y6/XCIsIFwi5pmu5a6J5Y6/XCIsIFwi5pm06ZqG5Y6/XCIsIFwi6LSe5Liw5Y6/XCIsIFwi5pyb6LCf5Y6/XCIsIFwi5YaM5Lqo5Y6/XCIsIFwi5a6J6b6Z5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjNcIiwgW1wi6LS16Ziz5biCXCIsIFwi5YWt55uY5rC05biCXCIsIFwi6YG15LmJ5biCXCIsIFwi5a6J6aG65biCXCIsIFwi5q+V6IqC5Zyw5Yy6XCIsIFwi6ZOc5LuB5Zyw5Yy6XCIsIFwi6buU5Lic5Y2X6IuX5peP5L6X5peP6Ieq5rK75beeXCIsIFwi6buU5Y2X5biD5L6d5peP6IuX5peP6Ieq5rK75beeXCIsIFwi6buU6KW/5Y2X5biD5L6d5peP6IuX5peP6Ieq5rK75beeXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzI0XzBcIiwgW1wi5LqU5Y2O5Yy6XCIsIFwi55uY6b6Z5Yy6XCIsIFwi5a6Y5rih5Yy6XCIsIFwi6KW/5bGx5Yy6XCIsIFwi5Lic5bed5Yy6XCIsIFwi5ZGI6LSh5Yy6XCIsIFwi5pmL5a6B5Y6/XCIsIFwi5a+M5rCR5Y6/XCIsIFwi5a6c6Imv5Y6/XCIsIFwi55+z5p6X5b2d5peP6Ieq5rK75Y6/XCIsIFwi5bWp5piO5Y6/XCIsIFwi56aE5Yqd5b2d5peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi5a+755S45Zue5peP5b2d5peP6Ieq5rK75Y6/XCIsIFwi5a6J5a6B5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMVwiLCBbXCLpupLpup/ljLpcIiwgXCLpqazpvpnljr9cIiwgXCLpmYboia/ljr9cIiwgXCLluIjlrpfljr9cIiwgXCLnvZflubPljr9cIiwgXCLlr4zmupDljr9cIiwgXCLkvJrms73ljr9cIiwgXCLmsr7nm4rljr9cIiwgXCLlrqPlqIHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8yXCIsIFtcIue6ouWhlOWMulwiLCBcIuaxn+W3neWOv1wiLCBcIua+hOaxn+WOv1wiLCBcIumAmua1t+WOv1wiLCBcIuWNjuWugeWOv1wiLCBcIuaYk+mXqOWOv1wiLCBcIuWzqOWxseW9neaXj+iHquayu+WOv1wiLCBcIuaWsOW5s+W9neaXj+WCo+aXj+iHquayu+WOv1wiLCBcIuWFg+axn+WTiOWwvOaXj+W9neaXj+WCo+aXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI0XzNcIiwgW1wi6ZqG6Ziz5Yy6XCIsIFwi5pa955S45Y6/XCIsIFwi6b6Z6Zm15Y6/XCIsIFwi5piM5a6B5Y6/XCIsIFwi6IW+5Yay5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjRfNFwiLCBbXCLmmK3pmLPljLpcIiwgXCLpsoHnlLjljr9cIiwgXCLlt6flrrbljr9cIiwgXCLnm5DmtKXljr9cIiwgXCLlpKflhbPljr9cIiwgXCLmsLjlloTljr9cIiwgXCLnu6XmsZ/ljr9cIiwgXCLplYfpm4Tljr9cIiwgXCLlvZ3oia/ljr9cIiwgXCLlqIHkv6Hljr9cIiwgXCLmsLTlr4zljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF81XCIsIFtcIuWPpOWfjuWMulwiLCBcIueOiem+mee6s+ilv+aXj+iHquayu+WOv1wiLCBcIuawuOiDnOWOv1wiLCBcIuWNjuWdquWOv1wiLCBcIuWugeiSl+W9neaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI0XzZcIiwgW1wi5oCd6IyF5Yy6XCIsIFwi5a6B5rSx5ZOI5bC85peP5b2d5peP6Ieq5rK75Y6/XCIsIFwi5aKo5rGf5ZOI5bC85peP6Ieq5rK75Y6/XCIsIFwi5pmv5Lic5b2d5peP6Ieq5rK75Y6/XCIsIFwi5pmv6LC35YKj5peP5b2d5peP6Ieq5rK75Y6/XCIsIFwi6ZWH5rKF5b2d5peP5ZOI5bC85peP5ouJ56Wc5peP6Ieq5rK75Y6/XCIsIFwi5rGf5Z+O5ZOI5bC85peP5b2d5peP6Ieq5rK75Y6/XCIsIFwi5a2f6L+e5YKj5peP5ouJ56Wc5peP5L2k5peP6Ieq5rK75Y6/XCIsIFwi5r6c5rKn5ouJ56Wc5peP6Ieq5rK75Y6/XCIsIFwi6KW/55uf5L2k5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfN1wiLCBbXCLkuLTnv5TljLpcIiwgXCLlh6Tluobljr9cIiwgXCLkupHljr9cIiwgXCLmsLjlvrfljr9cIiwgXCLplYflurfljr9cIiwgXCLlj4zmsZ/mi4nnpZzml4/kvaTml4/luIPmnJfml4/lgqPml4/oh6rmsrvljr9cIiwgXCLogL/pqazlgqPml4/kvaTml4/oh6rmsrvljr9cIiwgXCLmsqfmupDkvaTml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF84XCIsIFtcIueRnuS4veW4glwiLCBcIuiKkuW4glwiLCBcIuaigeays+WOv1wiLCBcIuebiOaxn+WOv1wiLCBcIumZh+W3neWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI0XzlcIiwgW1wi5rO45rC05Y6/XCIsIFwi56aP6LSh5Y6/XCIsIFwi6LSh5bGx54us6b6Z5peP5oCS5peP6Ieq5rK75Y6/XCIsIFwi5YWw5Z2q55m95peP5pmu57Gz5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMTBcIiwgW1wi6aaZ5qC86YeM5ouJ5biCXCIsIFwi5b636ZKm5Y6/XCIsIFwi57u06KW/5YKI5YOz5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMTFcIiwgW1wi5aSn55CG5biCXCIsIFwi5ry+5r+e5b2d5peP6Ieq5rK75Y6/XCIsIFwi56Wl5LqR5Y6/XCIsIFwi5a6+5bed5Y6/XCIsIFwi5byl5rih5Y6/XCIsIFwi5Y2X5ran5b2d5peP6Ieq5rK75Y6/XCIsIFwi5beN5bGx5b2d5peP5Zue5peP6Ieq5rK75Y6/XCIsIFwi5rC45bmz5Y6/XCIsIFwi5LqR6b6Z5Y6/XCIsIFwi5rSx5rqQ5Y6/XCIsIFwi5YmR5bed5Y6/XCIsIFwi6bmk5bqG5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMTJcIiwgW1wi5qWa6ZuE5biCXCIsIFwi5Y+M5p+P5Y6/XCIsIFwi54mf5a6a5Y6/XCIsIFwi5Y2X5Y2O5Y6/XCIsIFwi5aea5a6J5Y6/XCIsIFwi5aSn5aea5Y6/XCIsIFwi5rC45LuB5Y6/XCIsIFwi5YWD6LCL5Y6/XCIsIFwi5q2m5a6a5Y6/XCIsIFwi56aE5Liw5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMTNcIiwgW1wi5Liq5pen5biCXCIsIFwi5byA6L+c5biCXCIsIFwi6JKZ6Ieq5biCXCIsIFwi5byl5YuS5biCXCIsIFwi5bGP6L656IuX5peP6Ieq5rK75Y6/XCIsIFwi5bu65rC05Y6/XCIsIFwi55+z5bGP5Y6/XCIsIFwi5rO46KW/5Y6/XCIsIFwi5YWD6Ziz5Y6/XCIsIFwi57qi5rKz5Y6/XCIsIFwi6YeR5bmz6IuX5peP55G25peP5YKj5peP6Ieq5rK75Y6/XCIsIFwi57u/5pil5Y6/XCIsIFwi5rKz5Y+j55G25peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMTRcIiwgW1wi5paH5bGx5biCXCIsIFwi56Ca5bGx5Y6/XCIsIFwi6KW/55W05Y6/XCIsIFwi6bq75qCX5Z2h5Y6/XCIsIFwi6ams5YWz5Y6/XCIsIFwi5LiY5YyX5Y6/XCIsIFwi5bm/5Y2X5Y6/XCIsIFwi5a+M5a6B5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfMTVcIiwgW1wi5pmv5rSq5biCXCIsIFwi5YuQ5rW35Y6/XCIsIFwi5YuQ6IWK5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRcIiwgW1wi5piG5piO5biCXCIsIFwi5puy6Z2W5biCXCIsIFwi546J5rqq5biCXCIsIFwi5L+d5bGx5biCXCIsIFwi5pit6YCa5biCXCIsIFwi5Li95rGf5biCXCIsIFwi5pmu5rSx5biCXCIsIFwi5Li05rKn5biCXCIsIFwi5b635a6P5YKj5peP5pmv6aKH5peP6Ieq5rK75beeXCIsIFwi5oCS5rGf5YKI5YOz5peP6Ieq5rK75beeXCIsIFwi6L+q5bqG6JeP5peP6Ieq5rK75beeXCIsIFwi5aSn55CG55m95peP6Ieq5rK75beeXCIsIFwi5qWa6ZuE5b2d5peP6Ieq5rK75beeXCIsIFwi57qi5rKz5ZOI5bC85peP5b2d5peP6Ieq5rK75beeXCIsIFwi5paH5bGx5aOu5peP6IuX5peP6Ieq5rK75beeXCIsIFwi6KW/5Y+M54mI57qz5YKj5peP6Ieq5rK75beeXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzI1XzBcIiwgW1wi5Z+O5YWz5Yy6XCIsIFwi5p6X5ZGo5Y6/XCIsIFwi5b2T6ZuE5Y6/XCIsIFwi5bC85pyo5Y6/XCIsIFwi5puy5rC05Y6/XCIsIFwi5aCG6b6Z5b635bqG5Y6/XCIsIFwi6L6+5a2c5Y6/XCIsIFwi5aKo56u55bel5Y2h5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjVfMVwiLCBbXCLpgqPmm7Lljr9cIiwgXCLlmInpu47ljr9cIiwgXCLmr5TlpoLljr9cIiwgXCLogYLojaPljr9cIiwgXCLlronlpJrljr9cIiwgXCLnlLPmiY7ljr9cIiwgXCLntKLljr9cIiwgXCLnj63miIjljr9cIiwgXCLlt7TpnZLljr9cIiwgXCLlsLznjpvljr9cIiwgXCLlj4zmuZbljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNV8yXCIsIFtcIuWNoeiLpeWMulwiLCBcIuaxn+i+vuWOv1wiLCBcIui0oeinieWOv1wiLCBcIuexu+S5jOm9kOWOv1wiLCBcIuS4gemdkuWOv1wiLCBcIuWvn+mbheWOv1wiLCBcIuWFq+Wuv+WOv1wiLCBcIuW3pui0oeWOv1wiLCBcIuiKkuW6t+WOv1wiLCBcIua0m+mahuWOv1wiLCBcIui+ueWdneWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI1XzNcIiwgW1wi5be05a6c5Yy6XCIsIFwi5bel5biD5rGf6L6+5Y6/XCIsIFwi57Gz5p6X5Y6/XCIsIFwi5aKo6ISx5Y6/XCIsIFwi5rOi5a+G5Y6/XCIsIFwi5a+f6ZqF5Y6/XCIsIFwi5pyX5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjVfNFwiLCBbXCLkuYPkuJzljr9cIiwgXCLmiY7lm4rljr9cIiwgXCLotKHlmI7ljr9cIiwgXCLmoZHml6Xljr9cIiwgXCLnkLznu5Pljr9cIiwgXCLmm7Lmnb7ljr9cIiwgXCLmjqrnvo7ljr9cIiwgXCLmtJvmiY7ljr9cIiwgXCLliqDmn6Xljr9cIiwgXCLpmoblrZDljr9cIiwgXCLplJnpgqPljr9cIiwgXCLmtarljaHlrZDljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNV81XCIsIFtcIuahkeePoOWtnOWMulwiLCBcIuWNl+acqOael+WOv1wiLCBcIuaxn+WtnOWOv1wiLCBcIuWumuaXpeWOv1wiLCBcIuiQqOi/puWOv1wiLCBcIuaLieWtnOWOv1wiLCBcIuaYguS7geWOv1wiLCBcIuiwoumAmumXqOWOv1wiLCBcIueZveacl+WOv1wiLCBcIuS7geW4g+WOv1wiLCBcIuW6t+mprOWOv1wiLCBcIuWumue7k+WOv1wiLCBcIuS7suW3tOWOv1wiLCBcIuS6muS4nOWOv1wiLCBcIuWQiemahuWOv1wiLCBcIuiBguaLieacqOWOv1wiLCBcIuiQqOWYjuWOv1wiLCBcIuWyl+W3tOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI1XzZcIiwgW1wi5pmu5YWw5Y6/XCIsIFwi5pyt6L6+5Y6/XCIsIFwi5Zm25bCU5Y6/XCIsIFwi5pel5Zyf5Y6/XCIsIFwi6Z2p5ZCJ5Y6/XCIsIFwi5pS55YiZ5Y6/XCIsIFwi5o6q5Yuk5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjVcIiwgW1wi5ouJ6JCo5biCXCIsIFwi6YKj5puy5Zyw5Yy6XCIsIFwi5piM6YO95Zyw5Yy6XCIsIFwi5p6X6Iqd5Zyw5Yy6XCIsIFwi5bGx5Y2X5Zyw5Yy6XCIsIFwi5pel5ZaA5YiZ5Zyw5Yy6XCIsIFwi6Zi/6YeM5Zyw5Yy6XCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzI2XzBcIiwgW1wi5paw5Z+O5Yy6XCIsIFwi56KR5p6X5Yy6XCIsIFwi6I6y5rmW5Yy6XCIsIFwi54Ge5qGl5Yy6XCIsIFwi5pyq5aSu5Yy6XCIsIFwi6ZuB5aGU5Yy6XCIsIFwi6ZiO6Imv5Yy6XCIsIFwi5Li05r285Yy6XCIsIFwi6ZW/5a6J5Yy6XCIsIFwi6auY6Zm15Yy6XCIsIFwi6JOd55Sw5Y6/XCIsIFwi5ZGo6Iez5Y6/XCIsIFwi5oi35Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjZfMVwiLCBbXCLlrp3loZTljLpcIiwgXCLlu7bplb/ljr9cIiwgXCLlu7blt53ljr9cIiwgXCLlrZDplb/ljr9cIiwgXCLlronloZ7ljr9cIiwgXCLlv5fkuLnljr9cIiwgXCLlkLTotbfljr9cIiwgXCLnlJjms4nljr9cIiwgXCLlr4zljr9cIiwgXCLmtJvlt53ljr9cIiwgXCLlrpzlt53ljr9cIiwgXCLpu4Tpvpnljr9cIiwgXCLpu4TpmbXljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNl8yXCIsIFtcIueOi+ebiuWMulwiLCBcIuWNsOWPsOWMulwiLCBcIuiAgOW3nuWMulwiLCBcIuWunOWQm+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI2XzNcIiwgW1wi5Li05rit5Yy6XCIsIFwi5Y2O5Y6/XCIsIFwi5r285YWz5Y6/XCIsIFwi5aSn6I2U5Y6/XCIsIFwi5ZCI6Ziz5Y6/XCIsIFwi5r6E5Z+O5Y6/XCIsIFwi6JKy5Z+O5Y6/XCIsIFwi55m95rC05Y6/XCIsIFwi5a+M5bmz5Y6/XCIsIFwi6Z+p5Z+O5biCXCIsIFwi5Y2O6Zi05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjZfNFwiLCBbXCLnp6bpg73ljLpcIiwgXCLmnajpmbXljLpcIiwgXCLmuK3ln47ljLpcIiwgXCLkuInljp/ljr9cIiwgXCLms77pmLPljr9cIiwgXCLkub7ljr9cIiwgXCLnpLzms4nljr9cIiwgXCLmsLjlr7/ljr9cIiwgXCLlvazljr9cIiwgXCLplb/mrabljr9cIiwgXCLml6zpgpHljr9cIiwgXCLmt7PljJbljr9cIiwgXCLmrablip/ljr9cIiwgXCLlhbTlubPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yNl81XCIsIFtcIua4rea7qOWMulwiLCBcIumHkeWPsOWMulwiLCBcIumZiOS7k+WMulwiLCBcIuWHpOe/lOWOv1wiLCBcIuWykOWxseWOv1wiLCBcIuaJtumjjuWOv1wiLCBcIuecieWOv1wiLCBcIumZh+WOv1wiLCBcIuWNg+mYs+WOv1wiLCBcIum6n+a4uOWOv1wiLCBcIuWHpOWOv1wiLCBcIuWkqueZveWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI2XzZcIiwgW1wi5rGJ5Y+w5Yy6XCIsIFwi5Y2X6YOR5Y6/XCIsIFwi5Z+O5Zu65Y6/XCIsIFwi5rSL5Y6/XCIsIFwi6KW/5Lmh5Y6/XCIsIFwi5YuJ5Y6/XCIsIFwi5a6B5by65Y6/XCIsIFwi55Wl6Ziz5Y6/XCIsIFwi6ZWH5be05Y6/XCIsIFwi55WZ5Z2d5Y6/XCIsIFwi5L2b5Z2q5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjZfN1wiLCBbXCLmpobpmLPljLpcIiwgXCLnpZ7mnKjljr9cIiwgXCLlupzosLfljr9cIiwgXCLmqKrlsbHljr9cIiwgXCLpnZbovrnljr9cIiwgXCLlrprovrnljr9cIiwgXCLnu6Xlvrfljr9cIiwgXCLnsbPohILljr9cIiwgXCLkvbPljr9cIiwgXCLlkLTloKHljr9cIiwgXCLmuIXmtqfljr9cIiwgXCLlrZDmtLLljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNl84XCIsIFtcIuaxiea7qOWMulwiLCBcIuaxiemYtOWOv1wiLCBcIuefs+azieWOv1wiLCBcIuWugemZleWOv1wiLCBcIue0q+mYs+WOv1wiLCBcIuWymueai+WOv1wiLCBcIuW5s+WIqeWOv1wiLCBcIumVh+WdquWOv1wiLCBcIuaXrOmYs+WOv1wiLCBcIueZveays+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI2XzlcIiwgW1wi5ZWG5bee5Yy6XCIsIFwi5rSb5Y2X5Y6/XCIsIFwi5Li55Yek5Y6/XCIsIFwi5ZWG5Y2X5Y6/XCIsIFwi5bGx6Ziz5Y6/XCIsIFwi6ZWH5a6J5Y6/XCIsIFwi5p+e5rC05Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjZcIiwgW1wi6KW/5a6J5biCXCIsIFwi5bu25a6J5biCXCIsIFwi6ZOc5bed5biCXCIsIFwi5rit5Y2X5biCXCIsIFwi5ZK46Ziz5biCXCIsIFwi5a6d6bih5biCXCIsIFwi5rGJ5Lit5biCXCIsIFwi5qaG5p6X5biCXCIsIFwi5a6J5bq35biCXCIsIFwi5ZWG5rSb5biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzI3XzBcIiwgW1wi5Z+O5YWz5Yy6XCIsIFwi5LiD6YeM5rKz5Yy6XCIsIFwi6KW/5Zu65Yy6XCIsIFwi5a6J5a6B5Yy6XCIsIFwi57qi5Y+k5Yy6XCIsIFwi5rC455m75Y6/XCIsIFwi55qL5YWw5Y6/XCIsIFwi5qaG5Lit5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfMVwiLCBbXCLluILovpbljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8yN18yXCIsIFtcIueZvemTtuWMulwiLCBcIuW5s+W3neWMulwiLCBcIumdlui/nOWOv1wiLCBcIuS8muWugeWOv1wiLCBcIuaZr+azsOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI3XzNcIiwgW1wi56em5bee5Yy6XCIsIFwi6bqm56ev5Yy6XCIsIFwi5riF5rC05Y6/XCIsIFwi56em5a6J5Y6/XCIsIFwi55SY6LC35Y6/XCIsIFwi5q2m5bGx5Y6/XCIsIFwi5byg5a625bed5Zue5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfNFwiLCBbXCLlh4nlt57ljLpcIiwgXCLmsJHli6Tljr9cIiwgXCLlj6Tmtarljr9cIiwgXCLlpKnnpZ3ol4/ml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN181XCIsIFtcIuiCg+W3nuWMulwiLCBcIumHkeWhlOWOv1wiLCBcIueTnOW3nuWOv1wiLCBcIuiCg+WMl+iSmeWPpOaXj+iHquayu+WOv1wiLCBcIumYv+WFi+WhnuWTiOiQqOWFi+aXj+iHquayu+WOv1wiLCBcIueOiemXqOW4glwiLCBcIuaVpueFjOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzI3XzZcIiwgW1wi55SY5bee5Yy6XCIsIFwi6IKD5Y2X6KOV5Zu65peP6Ieq5rK75Y6/XCIsIFwi5rCR5LmQ5Y6/XCIsIFwi5Li05rO95Y6/XCIsIFwi6auY5Y+w5Y6/XCIsIFwi5bGx5Li55Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfN1wiLCBbXCLopb/ls7DljLpcIiwgXCLluobln47ljr9cIiwgXCLnjq/ljr9cIiwgXCLljY7msaDljr9cIiwgXCLlkIjmsLTljr9cIiwgXCLmraPlroHljr9cIiwgXCLlroHljr9cIiwgXCLplYfljp/ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN184XCIsIFtcIuW0huWzkuWMulwiLCBcIuazvuW3neWOv1wiLCBcIueBteWPsOWOv1wiLCBcIuW0h+S/oeWOv1wiLCBcIuWNjuS6reWOv1wiLCBcIuW6hOa1quWOv1wiLCBcIumdmeWugeWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI3XzlcIiwgW1wi5a6J5a6a5Yy6XCIsIFwi6YCa5rit5Y6/XCIsIFwi6ZmH6KW/5Y6/XCIsIFwi5rit5rqQ5Y6/XCIsIFwi5Li05rSu5Y6/XCIsIFwi5ryz5Y6/XCIsIFwi5bK35Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfMTBcIiwgW1wi5q2m6YO95Yy6XCIsIFwi5oiQ5Y6/XCIsIFwi5paH5Y6/XCIsIFwi5a6V5piM5Y6/XCIsIFwi5bq35Y6/XCIsIFwi6KW/5ZKM5Y6/XCIsIFwi56S85Y6/XCIsIFwi5b695Y6/XCIsIFwi5Lik5b2T5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfMTFcIiwgW1wi6YeR5bed5Yy6XCIsIFwi5rC45piM5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfMTJcIiwgW1wi5Li05aSP5biCXCIsIFwi5Li05aSP5Y6/XCIsIFwi5bq35LmQ5Y6/XCIsIFwi5rC46Z2W5Y6/XCIsIFwi5bm/5rKz5Y6/XCIsIFwi5ZKM5pS/5Y6/XCIsIFwi5Lic5Lmh5peP6Ieq5rK75Y6/XCIsIFwi56ev55+z5bGx5L+d5a6J5peP5Lic5Lmh5peP5pKS5ouJ5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfMTNcIiwgW1wi5ZCI5L2c5biCXCIsIFwi5Li05r2t5Y6/XCIsIFwi5Y2T5bC85Y6/XCIsIFwi6Iif5puy5Y6/XCIsIFwi6L+t6YOo5Y6/XCIsIFwi546b5puy5Y6/XCIsIFwi56KM5puy5Y6/XCIsIFwi5aSP5rKz5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdcIiwgW1wi5YWw5bee5biCXCIsIFwi5ZiJ5bOq5YWz5biCXCIsIFwi55m96ZO25biCXCIsIFwi5aSp5rC05biCXCIsIFwi5q2m5aiB5biCXCIsIFwi6YWS5rOJ5biCXCIsIFwi5byg5o6W5biCXCIsIFwi5bqG6Ziz5biCXCIsIFwi5bmz5YeJ5biCXCIsIFwi5a6a6KW/5biCXCIsIFwi6ZmH5Y2X5biCXCIsIFwi6YeR5piM5biCXCIsIFwi5Li05aSP5Zue5peP6Ieq5rK75beeXCIsIFwi55SY5Y2X6JeP5peP6Ieq5rK75beeXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzI4XzBcIiwgW1wi5Z+O5Lic5Yy6XCIsIFwi5Z+O5Lit5Yy6XCIsIFwi5Z+O6KW/5Yy6XCIsIFwi5Z+O5YyX5Yy6XCIsIFwi5aSn6YCa5Zue5peP5Zyf5peP6Ieq5rK75Y6/XCIsIFwi5rmf5Lit5Y6/XCIsIFwi5rmf5rqQ5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjhfMVwiLCBbXCLkuZDpg73ljLpcIiwgXCLlubPlronljLpcIiwgXCLmsJHlkozlm57ml4/lnJ/ml4/oh6rmsrvljr9cIiwgXCLkupLliqnlnJ/ml4/oh6rmsrvljr9cIiwgXCLljJbpmoblm57ml4/oh6rmsrvljr9cIiwgXCLlvqrljJbmkpLmi4nml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOF8yXCIsIFtcIua1t+aZj+WOv1wiLCBcIuS4ieinkuWfjumVh1wiLCBcIuelgei/nuWOv1wiLCBcIuWFq+WunemVh1wiLCBcIuWImuWvn+WOv1wiLCBcIuaymeafs+ays+mVh1wiLCBcIumXqOa6kOWbnuaXj+iHquayu+WOv1wiLCBcIua1qemXqOmVh1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI4XzNcIiwgW1wi5YWx5ZKM5Y6/XCIsIFwi5ZCM5b635Y6/XCIsIFwi6LS15b635Y6/XCIsIFwi5YW05rW35Y6/XCIsIFwi6LS15Y2X5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjhfNFwiLCBbXCLlkIzku4Hljr9cIiwgXCLlsJbmiY7ljr9cIiwgXCLms73lupPljr9cIiwgXCLmsrPljZfokpnlj6Tml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOF81XCIsIFtcIueOm+aygeWOv1wiLCBcIuePreeOm+WOv1wiLCBcIueUmOW+t+WOv1wiLCBcIui+vuaXpeWOv1wiLCBcIuS5heayu+WOv1wiLCBcIueOm+WkmuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI4XzZcIiwgW1wi546J5qCR5biCXCIsIFwi5p2C5aSa5Y6/XCIsIFwi56ew5aSa5Y6/XCIsIFwi5rK75aSa5Y6/XCIsIFwi5ZuK6LCm5Y6/XCIsIFwi5puy6bq76I6x5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjhfN1wiLCBbXCLmoLzlsJTmnKjluIJcIiwgXCLlvrfku6Tlk4jluIJcIiwgXCLkuYzlhbDljr9cIiwgXCLpg73lhbDljr9cIiwgXCLlpKnls7vljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOFwiLCBbXCLopb/lroHluIJcIiwgXCLmtbfkuJzluIJcIiwgXCLmtbfljJfol4/ml4/oh6rmsrvlt55cIiwgXCLmtbfljZfol4/ml4/oh6rmsrvlt55cIiwgXCLpu4TljZfol4/ml4/oh6rmsrvlt55cIiwgXCLmnpzmtJvol4/ml4/oh6rmsrvlt55cIiwgXCLnjonmoJHol4/ml4/oh6rmsrvlt55cIiwgXCLmtbfopb/okpnlj6Tml4/ol4/ml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjlfMFwiLCBbXCLlhbTluobljLpcIiwgXCLopb/lpI/ljLpcIiwgXCLph5Hlh6TljLpcIiwgXCLmsLjlroHljr9cIiwgXCLotLrlhbDljr9cIiwgXCLngbXmrabluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yOV8xXCIsIFtcIuWkp+atpuWPo+WMulwiLCBcIuaDoOWGnOWMulwiLCBcIuW5s+e9l+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI5XzJcIiwgW1wi5Yip6YCa5Yy6XCIsIFwi57qi5a+65aCh5Yy6XCIsIFwi55uQ5rGg5Y6/XCIsIFwi5ZCM5b+D5Y6/XCIsIFwi6Z2S6ZOc5bOh5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjlfM1wiLCBbXCLljp/lt57ljLpcIiwgXCLopb/lkInljr9cIiwgXCLpmoblvrfljr9cIiwgXCLms77mupDljr9cIiwgXCLlva3pmLPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOV80XCIsIFtcIuaymeWdoeWktOWMulwiLCBcIuS4reWugeWOv1wiLCBcIua1t+WOn+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI5XCIsIFtcIumTtuW3neW4glwiLCBcIuefs+WYtOWxseW4glwiLCBcIuWQtOW/oOW4glwiLCBcIuWbuuWOn+W4glwiLCBcIuS4reWNq+W4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8zMF8wXCIsIFtcIuWkqeWxseWMulwiLCBcIuaymeS+neW3tOWFi+WMulwiLCBcIuaWsOW4guWMulwiLCBcIuawtOejqOayn+WMulwiLCBcIuWktOWxr+ays+WMulwiLCBcIui+vuWdguWfjuWMulwiLCBcIuexs+S4nOWMulwiLCBcIuS5jOmygeacqOm9kOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzFcIiwgW1wi54us5bGx5a2Q5Yy6XCIsIFwi5YWL5ouJ546b5L6d5Yy6XCIsIFwi55m956Kx5rup5Yy6XCIsIFwi5LmM5bCU56a+5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMlwiLCBbXCLnn7PmsrPlrZDluIJcIiwgXCLpmL/mi4nlsJTluIJcIiwgXCLlm77mnKjoiJLlhYvluIJcIiwgXCLkupTlrrbmuKDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8zMF8zXCIsIFtcIuWWgOS7gOW4glwiLCBcIueWj+mZhOWOv1wiLCBcIueWj+WLkuWOv1wiLCBcIuiLseWQieaymeWOv1wiLCBcIuazveaZruWOv1wiLCBcIuiOjui9puWOv1wiLCBcIuWPtuWfjuWOv1wiLCBcIum6puebluaPkOWOv1wiLCBcIuWys+aZrua5luWOv1wiLCBcIuS8veW4iOWOv1wiLCBcIuW3tOalmuWOv1wiLCBcIuWhlOS7gOW6k+WwlOW5suWhlOWQieWFi+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzRcIiwgW1wi6Zi/5YWL6IuP5biCXCIsIFwi5rip5a6/5Y6/XCIsIFwi5bqT6L2m5Y6/XCIsIFwi5rKZ6ZuF5Y6/XCIsIFwi5paw5ZKM5Y6/XCIsIFwi5ouc5Z+O5Y6/XCIsIFwi5LmM5LuA5Y6/XCIsIFwi6Zi/55Om5o+Q5Y6/XCIsIFwi5p+v5Z2q5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfNVwiLCBbXCLlkoznlLDluIJcIiwgXCLlkoznlLDljr9cIiwgXCLloqjnjonljr9cIiwgXCLnmq7lsbHljr9cIiwgXCLmtJvmtabljr9cIiwgXCLnrZbli5Lljr9cIiwgXCLkuo7nlLDljr9cIiwgXCLmsJHkuLDljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8zMF82XCIsIFtcIumrmOaYjOWMulwiLCBcIumEr+WWhOWOv1wiLCBcIuaJmOWFi+mAiuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzdcIiwgW1wi5ZOI5a+G5biCXCIsIFwi5be06YeM5Z2k5ZOI6JCo5YWL6Ieq5rK75Y6/XCIsIFwi5LyK5ZC+5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfOFwiLCBbXCLpmL/lm77ku4DluIJcIiwgXCLpmL/lhYvpmbbljr9cIiwgXCLpmL/lkIjlpYfljr9cIiwgXCLkuYzmgbDljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8zMF85XCIsIFtcIuWNmuS5kOW4glwiLCBcIumYv+aLieWxseWPo+W4glwiLCBcIueyvuays+WOv1wiLCBcIua4qeazieWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzEwXCIsIFtcIuaYjOWQieW4glwiLCBcIumYnOW6t+W4glwiLCBcIuWRvOWbvuWjgeWOv1wiLCBcIueOm+e6s+aWr+WOv1wiLCBcIuWlh+WPsOWOv1wiLCBcIuWQieacqOiQqOWwlOWOv1wiLCBcIuacqOWekuWTiOiQqOWFi+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzExXCIsIFtcIuW6k+WwlOWLkuW4glwiLCBcIui9ruWPsOWOv1wiLCBcIuWwieeKgeWOv1wiLCBcIuiLpee+jOWOv1wiLCBcIuS4lOacq+WOv1wiLCBcIueEieiAhuWbnuaXj+iHquayu+WOv1wiLCBcIuWSjOmdmeWOv1wiLCBcIuWSjOehleWOv1wiLCBcIuWNmua5luWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzEyXCIsIFtcIuS8iuWugeW4glwiLCBcIuWljuWxr+W4glwiLCBcIumcjeWwlOaenOaWr+W4glwiLCBcIuS8iuWugeWOv1wiLCBcIuWvn+W4g+afpeWwlOmUoeS8r+iHquayu+WOv1wiLCBcIumcjeWfjuWOv1wiLCBcIuW3qeeVmeWOv1wiLCBcIuaWsOa6kOWOv1wiLCBcIuaYreiLj+WOv1wiLCBcIueJueWFi+aWr+WOv1wiLCBcIuWwvOWLkuWFi+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzEzXCIsIFtcIuWhlOWfjuW4glwiLCBcIuS5jOiLj+W4glwiLCBcIumineaVj+WOv1wiLCBcIuaymea5vuWOv1wiLCBcIuaJmOmHjOWOv1wiLCBcIuijleawkeWOv1wiLCBcIuWSjOW4g+WFi+i1m+WwlOiSmeWPpOiHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzE0XCIsIFtcIumYv+WLkuazsOW4glwiLCBcIuW4g+WwlOa0peWOv1wiLCBcIuWvjOiVtOWOv1wiLCBcIuemj+a1t+WOv1wiLCBcIuWTiOW3tOays+WOv1wiLCBcIumdkuays+WOv1wiLCBcIuWQieacqOS5g+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXCIsIFtcIuS5jOmygeacqOm9kOW4glwiLCBcIuWFi+aLieeOm+S+neW4glwiLCBcIuiHquayu+WMuuebtOi+luWOv+e6p+ihjOaUv+WNleS9jVwiLCBcIuWWgOS7gOWcsOWMulwiLCBcIumYv+WFi+iLj+WcsOWMulwiLCBcIuWSjOeUsOWcsOWMulwiLCBcIuWQkOmygeeVquWcsOWMulwiLCBcIuWTiOWvhuWcsOWMulwiLCBcIuWFi+WtnOWLkuiLj+afr+WwlOWFi+WtnOiHquayu+W3nlwiLCBcIuWNmuWwlOWhlOaLieiSmeWPpOiHquayu+W3nlwiLCBcIuaYjOWQieWbnuaXj+iHquayu+W3nlwiLCBcIuW3tOmfs+mDrealnuiSmeWPpOiHquayu+W3nlwiLCBcIuS8iueKgeWTiOiQqOWFi+iHquayu+W3nlwiLCBcIuWhlOWfjuWcsOWMulwiLCBcIumYv+WLkuazsOWcsOWMulwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8zMV8wXCIsIFtcIuS4reilv+WMulwiLCBcIuS4nOWMulwiLCBcIuS5nem+meWfjuWMulwiLCBcIuinguWhmOWMulwiLCBcIuWNl+WMulwiLCBcIua3seawtOWfl+WMulwiLCBcIua5vuS7lOWMulwiLCBcIum7hOWkp+S7meWMulwiLCBcIuayueWwluaXuuWMulwiLCBcIuemu+Wym+WMulwiLCBcIuiRtemdkuWMulwiLCBcIuWMl+WMulwiLCBcIuilv+i0oeWMulwiLCBcIuaymeeUsOWMulwiLCBcIuWxr+mXqOWMulwiLCBcIuWkp+WflOWMulwiLCBcIuiNg+a5vuWMulwiLCBcIuWFg+acl+WMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzMxXCIsIFtcIummmea4r+eJueWIq+ihjOaUv+WMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzMyXzBcIiwgW1wi5r6z6Zeo54m55Yir6KGM5pS/5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMzJcIiwgW1wi5r6z6Zeo54m55Yir6KGM5pS/5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMzNfMFwiLCBbXCIgXCJdKTtcclxuZHN5LmFkZChcIjBfMzNcIiwgW1wi5Y+w5YyXXCIsIFwi6auY6ZuEXCIsIFwi5Y+w5LitXCIsIFwi6Iqx6I6yXCIsIFwi5Z+66ZqGXCIsIFwi5ZiJ5LmJXCIsIFwi6YeR6ZeoXCIsIFwi6L+e5rGfXCIsIFwi6IuX5qCXXCIsIFwi5Y2X5oqVXCIsIFwi5r6O5rmWXCIsIFwi5bGP5LicXCIsIFwi5Y+w5LicXCIsIFwi5Y+w5Y2XXCIsIFwi5qGD5ZutXCIsIFwi5paw56u5XCIsIFwi5a6c5YWwXCIsIFwi5LqR5p6XXCIsIFwi5b2w5YyWXCJdKTtcclxuZHN5LmFkZChcIjBcIiwgW1wi5YyX5Lqs5biCXCIsIFwi5aSp5rSl5biCXCIsIFwi5LiK5rW35biCXCIsIFwi6YeN5bqG5biCXCIsIFwi5rKz5YyX55yBXCIsIFwi5bGx6KW/55yBXCIsIFwi5YaF6JKZ5Y+kXCIsIFwi6L695a6B55yBXCIsIFwi5ZCJ5p6X55yBXCIsIFwi6buR6b6Z5rGf55yBXCIsIFwi5rGf6IuP55yBXCIsIFwi5rWZ5rGf55yBXCIsIFwi5a6J5b6955yBXCIsIFwi56aP5bu655yBXCIsIFwi5rGf6KW/55yBXCIsIFwi5bGx5Lic55yBXCIsIFwi5rKz5Y2X55yBXCIsIFwi5rmW5YyX55yBXCIsIFwi5rmW5Y2X55yBXCIsIFwi5bm/5Lic55yBXCIsIFwi5bm/6KW/XCIsIFwi5rW35Y2X55yBXCIsIFwi5Zub5bed55yBXCIsIFwi6LS15bee55yBXCIsIFwi5LqR5Y2X55yBXCIsIFwi6KW/6JePXCIsIFwi6ZmV6KW/55yBXCIsIFwi55SY6IKD55yBXCIsIFwi6Z2S5rW355yBXCIsIFwi5a6B5aSPXCIsIFwi5paw55aGXCIsIFwi6aaZ5rivXCIsIFwi5r6z6ZeoXCIsIFwi5Y+w5rm+55yBXCJdKTtcclxuXHJcbmV4cG9ydHMuYWRkcmVzcyA9IGRzeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy9hcmVhLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTIiLCJyZXF1aXJlKCcuL3NyYy93eGMtYnV0dG9uLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtaG4ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1saXN0LWl0ZW0ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1wYW5lbC53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXRpcC53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWNvdW50ZG93bi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW1hcnF1ZWUud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1uYXZiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1uYXZwYWdlLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGFiYmFyLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGFiaXRlbS53ZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtYnV0dG9uLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1idXR0b24ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWJ1dHRvbi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtYnV0dG9uJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydidG4nLCAnYnRuLScgKyAodGhpcy50eXBlKSwgJ2J0bi1zei0nICsgKHRoaXMuc2l6ZSldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bi10eHQnLCAnYnRuLXR4dC0nICsgKHRoaXMudHlwZSksICdidG4tdHh0LXN6LScgKyAodGhpcy5zaXplKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2Vcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJ0bi1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcImJ0bi1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3NiwxNzQsNzYpXCJcbiAgfSxcbiAgXCJidG4taW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTEsMTkyLDIyMilcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDcwLDE4NCwyMTgpXCJcbiAgfSxcbiAgXCJidG4td2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIzOCwxNjIsNTQpXCJcbiAgfSxcbiAgXCJidG4tZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJidG4tbGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwiYnRuLXR4dC1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsMTIyLDE4MylcIlxuICB9LFxuICBcImJ0bi1zei1sYXJnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiA0MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNVxuICB9LFxuICBcImJ0bi1zei1taWRkbGVcIjoge1xuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMFxuICB9LFxuICBcImJ0bi1zei1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNzAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEyLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDI1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDI1LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDdcbiAgfSxcbiAgXCJidG4tdHh0LXN6LWxhcmdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQ1XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1taWRkbGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzVcbiAgfSxcbiAgXCJidG4tdHh0LXN6LXNtYWxsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJidG4gYnRuLXt7dHlwZX19IGJ0bi1zei17e3NpemV9fVwiPlxuICAgIDx0ZXh0IGNsYXNzPVwiYnRuLXR4dCBidG4tdHh0LXt7dHlwZX19IGJ0bi10eHQtc3ote3tzaXplfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgc2l6ZTogJ2xhcmdlJyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xuXG4gICAgLyp3aGl0ZS1zcGFjZTogbm93cmFwOyovXG4gICAgLyp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyovXG4gICAgLyp0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjsqL1xuICAgIC8qY3Vyc29yOiBwb2ludGVyOyovXG4gICAgLyotd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyovXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiBub25lOyovXG4gICAgLypib3JkZXItaW1hZ2Utc291cmNlOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utc2xpY2U6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS13aWR0aDogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLW91dHNldDogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXJlcGVhdDogaW5pdGlhbDsqL1xuICB9XG5cbiAgLmJ0bi10eHQge1xuXG4gIH1cblxuICAvKipUWVBFKiovXG5cbiAgLmJ0bi1kZWZhdWx0IHtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICB9XG5cbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgfVxuXG4gIC5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XG4gIH1cblxuICAuYnRuLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XG4gIH1cblxuICAuYnRuLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XG4gIH1cblxuICAuYnRuLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XG4gIH1cblxuICAuYnRuLWxpbmsge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5idG4tdHh0LWRlZmF1bHQge1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gIH1cblxuICAuYnRuLXR4dC1wcmltYXJ5IHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtc3VjY2VzcyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWluZm8ge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC13YXJuaW5nIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtbGluayB7XG4gICAgY29sb3I6IHJnYig1MSwgMTIyLCAxODMpO1xuICAgIC8qZm9udC13ZWlnaHQ6IDQwMDsqL1xuICB9XG5cbiAgLyoqU0laRSoqL1xuXG4gIC5idG4tc3otbGFyZ2Uge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIC8qbGluZS1oZWlnaHQ6IDEuMzMzMzM7Ki9cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cbiAgLmJ0bi1zei1taWRkbGUge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgLypsaW5lLWhlaWdodDogMS40Mjg1NzsqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuYnRuLXN6LXNtYWxsIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIC8qbGluZS1oZWlnaHQ6IDEuNTsqL1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIC5idG4tdHh0LXN6LWxhcmdlIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1taWRkbGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuXG4gIC5idG4tdHh0LXN6LXNtYWxsIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAvKkRJU0FCTEVEKi9cblxuICAuZGlzYWJsZWQge1xuXG4gIH1cblxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/YjlkZDA2YzIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1obi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtaG4ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWhuLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1obicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydoJyArICh0aGlzLmxldmVsKV19LFxuICBcInN0eWxlXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3R4dC1oJyArICh0aGlzLmxldmVsKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJoMVwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoMlwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoM1wiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJ0eHQtaDFcIjoge1xuICAgIFwiZm9udFNpemVcIjogNzBcbiAgfSxcbiAgXCJ0eHQtaDJcIjoge1xuICAgIFwiZm9udFNpemVcIjogNTJcbiAgfSxcbiAgXCJ0eHQtaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2Vcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaHt7bGV2ZWx9fVwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0eHQtaHt7bGV2ZWx9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge31cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmgxIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmgyIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmgzIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuXG4gIC50eHQtaDEge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuXG4gIC50eHQtaDIge1xuICAgIGZvbnQtc2l6ZTogNTJweDtcbiAgfVxuXG4gIC50eHQtaDMge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT9lYzMyOGUxYSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1saXN0LWl0ZW0ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWxpc3QtaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJpdGVtXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwidG91Y2hzdGFydFwiOiBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCI6IFwidG91Y2hlbmRcIlxuICB9LFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmdDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaXRlbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDI1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM1LFxuICAgIFwiaGVpZ2h0XCI6IDE2MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIml0ZW1cIiBvbnRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgb250b3VjaGVuZD1cInRvdWNoZW5kXCJcbiAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6e3tiZ0NvbG9yfX07XCI+XG4gICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGJnQ29sb3I6ICcjZmZmZmZmJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZJWE1FIGFuZHJvaWQgdG91Y2hcbiAgICAgICAgLy8gVE9ETyBhZGFwdGl2ZSBvcHBvc2l0ZSBiZ0NvbG9yXG4vLyAgICAgICAgdGhpcy5iZ0NvbG9yID0gJyNlNmU2ZTYnO1xuICAgICAgfSxcbiAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRklYTUUgYW5kcm9pZCB0b3VjaGVuZCBub3QgdHJpZ2dlcmVkXG4vLyAgICAgICAgdGhpcy5iZ0NvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLml0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyptYXJnaW4tYm90dG9tOiAxcHg7IEZVVFVSRSAqL1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlP2ExYzEyOTA2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtcGFuZWwud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXBhbmVsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1wYW5lbC53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtcGFuZWwnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwnLCAncGFuZWwtJyArICh0aGlzLnR5cGUpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvcmRlcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArICh0aGlzLnR5cGUpXX0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZH0sXG4gICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0hlYWR9LFxuICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZCoxLjV9LFxuICAgICAgICBcInBhZGRpbmdSaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0hlYWQqMS41fVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyAodGhpcy50eXBlKV19LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwicGFkZGluZ1RvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHl9LFxuICAgICAgICBcInBhZGRpbmdCb3R0b21cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdCb2R5fSxcbiAgICAgICAgXCJwYWRkaW5nTGVmdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHkqMS41fSxcbiAgICAgICAgXCJwYWRkaW5nUmlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdCb2R5KjEuNX1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYW5lbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfSxcbiAgXCJwYW5lbC1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcInBhbmVsLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzYsMTc0LDc2KVwiXG4gIH0sXG4gIFwicGFuZWwtaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3MCwxODQsMjE4KVwiXG4gIH0sXG4gIFwicGFuZWwtd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMzgsMTYyLDU0KVwiXG4gIH0sXG4gIFwicGFuZWwtZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIxMiw2Myw1OClcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjVmNWY1XCIsXG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkyLDE4NCw5MilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkxLDE5MiwyMjIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyNDAsMTczLDc4KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWJvZHlcIjoge31cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLXt7dHlwZX19XCIgc3R5bGU9XCJib3JkZXItd2lkdGg6e3tib3JkZXJ9fVwiPlxuICAgIDx0ZXh0IGNsYXNzPVwicGFuZWwtaGVhZGVyIHBhbmVsLWhlYWRlci17e3R5cGV9fVwiXG4gICAgICAgICAgc3R5bGU9XCJwYWRkaW5nLXRvcDp7e3BhZGRpbmdIZWFkfX07cGFkZGluZy1ib3R0b206e3twYWRkaW5nSGVhZH19O3BhZGRpbmctbGVmdDp7e3BhZGRpbmdIZWFkKjEuNX19O3BhZGRpbmctcmlnaHQ6e3twYWRkaW5nSGVhZCoxLjV9fVwiPlxuICAgICAge3t0aXRsZX19XG4gICAgPC90ZXh0PlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5IHBhbmVsLWJvZHkte3t0eXBlfX1cIlxuICAgICAgICAgc3R5bGU9XCJwYWRkaW5nLXRvcDp7e3BhZGRpbmdCb2R5fX07cGFkZGluZy1ib3R0b206e3twYWRkaW5nQm9keX19O3BhZGRpbmctbGVmdDp7e3BhZGRpbmdCb2R5KjEuNX19O3BhZGRpbmctcmlnaHQ6e3twYWRkaW5nQm9keSoxLjV9fVwiPlxuICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHBhZGRpbmdCb2R5OiAyMCxcbiAgICAgIHBhZGRpbmdIZWFkOiAyMCxcbiAgICAgIGRhdGFDbGFzczogJycsIC8vIEZJWE1FIHRyYW5zZmVyIGNsYXNzXG4gICAgICBib3JkZXI6IDBcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5wYW5lbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC8qYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7Ki9cbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cbiAgICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xuICAgIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgfVxuXG4gIC5wYW5lbC1kZWZhdWx0IHtcbiAgfVxuXG4gIC5wYW5lbC1wcmltYXJ5IHtcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gIH1cblxuICAucGFuZWwtc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xuXG4gIH1cblxuICAucGFuZWwtaW5mbyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcblxuICB9XG5cbiAgLnBhbmVsLXdhcm5pbmcge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XG5cbiAgfVxuXG4gIC5wYW5lbC1kYW5nZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcblxuICB9XG5cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1kZWZhdWx0IHtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cbiAgICAvKnBhZGRpbmctdG9wOiAyMHB4OyovXG4gICAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xuICB9XG5cbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtYm9keS1wcmltYXJ5IHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktaW5mbyB7XG4gIH1cblxuICAucGFuZWwtYm9keS13YXJuaW5nIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWRhbmdlciB7XG4gIH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT81ZGMxNmYxZiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRpcC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGlwLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy10aXAud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRpcCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwJywgJ3RpcC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3RpcC10eHQnLCAndGlwLXR4dC0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInRpcFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzNixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzNixcbiAgICBcInBhZGRpbmdUb3BcIjogMzYsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDM2LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwXG4gIH0sXG4gIFwidGlwLXR4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9LFxuICBcInRpcC1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkZmYwZDhcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Q2ZTljNlwiXG4gIH0sXG4gIFwidGlwLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzNjNzYzZFwiXG4gIH0sXG4gIFwidGlwLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Q5ZWRmN1wiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjYmNlOGYxXCJcbiAgfSxcbiAgXCJ0aXAtdHh0LWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzE3MDhmXCJcbiAgfSxcbiAgXCJ0aXAtd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmNmOGUzXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmYWViY2NcIlxuICB9LFxuICBcInRpcC10eHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4YTZkM2JcIlxuICB9LFxuICBcInRpcC1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YyZGVkZVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZWJjY2QxXCJcbiAgfSxcbiAgXCJ0aXAtdHh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNhOTQ0NDJcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidGlwIHRpcC17e3R5cGV9fVwiPlxuICAgIDx0ZXh0IGNsYXNzPVwidGlwLXR4dCB0aXAtdHh0LXt7dHlwZX19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnRpcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZy10b3A6IDM2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgLnRpcC10eHR7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgLnRpcC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xuICAgIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbiAgfVxuXG4gIC50aXAtdHh0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjM2M3NjNkO1xuICB9XG5cbiAgLnRpcC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xuICAgIGJvcmRlci1jb2xvcjogI2JjZThmMTtcbiAgfVxuXG4gIC50aXAtdHh0LWluZm8ge1xuICAgIGNvbG9yOiAjMzE3MDhmO1xuICB9XG5cbiAgLnRpcC13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xuICAgIGJvcmRlci1jb2xvcjogI2ZhZWJjYztcbiAgfVxuXG4gIC50aXAtdHh0LXdhcm5pbmcge1xuICAgIGNvbG9yOiAjOGE2ZDNiO1xuICB9XG5cbiAgLnRpcC1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWJjY2QxO1xuICB9XG5cbiAgLnRpcC10eHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2E5NDQ0MjtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MzUzNjdlMTQiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1jb3VudGRvd24ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtY291bnRkb3duLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1jb3VudGRvd24nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImFwcGVhclwiOiBcImFwcGVhcmVkXCIsXG4gICAgXCJkaXNhcHBlYXJcIjogXCJkaXNhcHBlYXJlZFwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuOyBmbGV4LWRpcmVjdGlvbjogcm93O1wiIG9uYXBwZWFyPVwiYXBwZWFyZWRcIiBvbmRpc2FwcGVhcj1cImRpc2FwcGVhcmVkXCI+XG4gICAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi53cmFwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgbm93OiAwLFxuICAgICAgICByZW1haW46IDAsXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIGVsYXBzZTogMCxcbiAgICAgICAgICAgIEQ6ICcwJyxcbiAgICAgICAgICAgIEREOiAnMCcsXG4gICAgICAgICAgICBoOiAnMCcsXG4gICAgICAgICAgICBoaDogJzAwJyxcbiAgICAgICAgICAgIEg6ICcwJyxcbiAgICAgICAgICAgIEhIOiAnMCcsXG4gICAgICAgICAgICBtOiAnMCcsXG4gICAgICAgICAgICBtbTogJzAwJyxcbiAgICAgICAgICAgIE06ICcwJyxcbiAgICAgICAgICAgIE1NOiAnMCcsXG4gICAgICAgICAgICBzOiAnMCcsXG4gICAgICAgICAgICBzczogJzAwJyxcbiAgICAgICAgICAgIFM6ICcwJyxcbiAgICAgICAgICAgIFNTOiAnMCdcbiAgICAgICAgfSxcbiAgICAgICAgb3V0b2Z2aWV3OiBmYWxzZVxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5yZW1haW4gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuaXNXZWIgPSB0aGlzLiRnZXRDb25maWcoKS5lbnYucGxhdGZvcm0gPT09ICdXZWInO1xuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubmV4dFRpY2soKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbmV4dFRpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0b2Z2aWV3KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRUaWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZWxhcHNlID0gcGFyc2VJbnQoKERhdGUubm93KCkgLSB0aGlzLm5vdykgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGMoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0aWNrJywgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50aW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0VGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhbGFybScsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hcHAudXBkYXRlQWN0aW9ucygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzAnICsgc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZW1haW4gPSB0aGlzLnJlbWFpbiAtIHRoaXMudGltZS5lbGFwc2U7XG4gICAgICAgICAgICBpZiAocmVtYWluIDwgMCkge1xuICAgICAgICAgICAgICAgIHJlbWFpbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWUuRCA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyA4NjQwMCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLkREID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLkQpO1xuICAgICAgICAgICAgdGhpcy50aW1lLmggPSBTdHJpbmcocGFyc2VJbnQoKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5EKSAqIDg2NDAwKSAvIDM2MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5oaCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5oKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5IID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDM2MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5ISCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5IKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5tID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuSCkgKiAzNjAwKSAvIDYwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUubW0gPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUubSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuTSA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyA2MCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLk1NID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLk0pO1xuICAgICAgICAgICAgdGhpcy50aW1lLnMgPSBTdHJpbmcocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLk0pICogNjApO1xuICAgICAgICAgICAgdGhpcy50aW1lLnNzID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLnMpO1xuICAgICAgICAgICAgdGhpcy50aW1lLlMgPSBTdHJpbmcocmVtYWluKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5TUyA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5TKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlbWFpbiwgdGhpcy5ELCB0aGlzLmgsIHRoaXMuaGgsIHRoaXMuSCwgdGhpcy5ISCwgdGhpcy5tLCB0aGlzLk1NLCB0aGlzLnMsIHRoaXMuc3MsIHRoaXMuUywgdGhpcy5TUyk7XG4gICAgICAgICAgICByZXR1cm4gcmVtYWluID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT85Y2VlYjc2OCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly42LjIwLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1tYXJxdWVlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1tYXJxdWVlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiYXBwZWFyXCI6IFwiYXBwZWFyZWRcIixcbiAgICBcImRpc2FwcGVhclwiOiBcImRpc2FwcGVhcmVkXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImlkXCI6IFwiYW5pbVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFuaW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiYW5pbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMClcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiIG9uYXBwZWFyPVwiYXBwZWFyZWRcIiBvbmRpc2FwcGVhcj1cImRpc2FwcGVhcmVkXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJhbmltXCIgY2xhc3M9XCJhbmltXCI+XG4gICAgICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuLndyYXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYW5pbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMCk7XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgb3V0b2Z2aWV3OiBmYWxzZVxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPiAwXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zdGVwID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRUaWNrKCk7ICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5leHRUaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLm91dG9mdmlldykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5uZXh0VGljay5iaW5kKHNlbGYpLCBzZWxmLmludGVydmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb24oc2VsZi5uZXh0VGljay5iaW5kKHNlbGYpKTtcbiAgICAgICAgICAgICAgICB9LCBzZWxmLmludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0aW9uOiBmdW5jdGlvbihjYikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IC1zZWxmLnN0ZXAgKiBzZWxmLmluZGV4O1xuICAgICAgICAgICAgdmFyICRhbmltYXRpb24gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICAkYW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kZWwoJ2FuaW0nKSwge1xuICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyBTdHJpbmcob2Zmc2V0KSArICdweCkgdHJhbnNsYXRlWigwKSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IHNlbGYuZHVyYXRpb25cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5kZXggPSAoc2VsZi5pbmRleCArIDEpICUgKHNlbGYuY291bnQpO1xuICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHNlbGYuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBzZWxmLmNvdW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT80NDM4YmE3ZCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1uYXZiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW5hdmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImF0dHJcIjoge1xuICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjZW50ZXItdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyOCxcbiAgICBcInJpZ2h0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI4LFxuICAgIFwibGVmdFwiOiAzMixcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJjZW50ZXItdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjUsXG4gICAgXCJsZWZ0XCI6IDE3MixcbiAgICBcInJpZ2h0XCI6IDE3MixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwibGVmdC1pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjAsXG4gICAgXCJsZWZ0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfSxcbiAgXCJyaWdodC1pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjAsXG4gICAgXCJyaWdodFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IDUwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3JpZ2h0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBpZj17eyFyaWdodEl0ZW1TcmN9fSBvbmNsaWNrID0gXCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyaWdodC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgc3JjPXt7cmlnaHRJdGVtU3JjfX0gaWY9e3tyaWdodEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgaWY9e3shbGVmdEl0ZW1TcmN9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImNlbnRlci10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3RpdGxlQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJjZW50ZXJcIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICB3aWR0aDogNzUwO1xuICAgIH1cbiAgICAucmlnaHQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICByaWdodDogMzI7IFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmxlZnQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICBsZWZ0IDozMjsgXG4gICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7ICBcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmNlbnRlci10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyNTsgXG4gICAgICAgIGxlZnQ6IDE3MjsgXG4gICAgICAgIHJpZ2h0OiAxNzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzY7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxlZnQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgbGVmdDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbiAgICAucmlnaHQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgcmlnaHQ6IDI4OyBcbiAgICAgICAgd2lkdGg6IDUwOyBcbiAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG5cbiAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxuICAgICAgICAgIGhlaWdodDogODgsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeagh+mimCBcbiAgICAgICAgICB0aXRsZTogXCJcIixcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXG4gICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7moIfpophcbiAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT81ZTQ0MTQ3ZCIsInJlcXVpcmUoXCIuL3d4Yy1uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLW5hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLW5hdnBhZ2Uud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW5hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid3hjLW5hdmJhclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9LFxuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn0sXG4gICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfSxcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICBcImxlZnRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICBcInJpZ2h0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIm1hcmdpblRvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICBcdDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgXHQgIDx3eGMtbmF2YmFyIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSB0aXRsZS1jb2xvcj17e3RpdGxlQ29sb3J9fSBsZWZ0LWl0ZW0tc3JjPXt7bGVmdEl0ZW1TcmN9fSBsZWZ0LWl0ZW0tdGl0bGU9e3tsZWZ0SXRlbVRpdGxlfX0gbGVmdC1pdGVtLWNvbG9yPXt7bGVmdEl0ZW1Db2xvcn19IHJpZ2h0LWl0ZW0tc3JjPXt7cmlnaHRJdGVtU3JjfX0gcmlnaHQtaXRlbS10aXRsZT17e3JpZ2h0SXRlbVRpdGxlfX0gcmlnaHQtaXRlbS1jb2xvcj17e3JpZ2h0SXRlbUNvbG9yfX0+PC93eGMtbmF2YmFyPlxuICAgIFx0ICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwibWFyZ2luLXRvcDp7e2hlaWdodH19XCI+XG4gICAgXHRcdCAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgXHQgIDwvZGl2PlxuICBcdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICBcdC53cmFwcGVyIHtcbiAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIFx0XHR0b3A6IDA7IFxuICBcdFx0bGVmdDogMDsgXG4gIFx0XHRyaWdodDogMDsgXG4gIFx0XHRib3R0b206IDA7IFxuICBcdFx0d2lkdGg6IDc1MDtcbiAgXHR9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICBoZWlnaHQ6IDg4LFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcbiAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXG4gICAgICAgICAgcmlnaHRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzMxOGZmYzhkIiwicmVxdWlyZShcIi4vd3hjLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRhYmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGFiYmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy10YWJiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRhYmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRhYml0ZW0ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRhYml0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcIm9uY2xpY2tpdGVtXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0b3AtbGluZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vZ3RtczAzLmFsaWNkbi5jb20vdHBzL2kzL1RCMW1kc2lNcFhYWFhYcFhYWFhOdzRKSVhYWC02NDAtNC5wbmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItaWNvblwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmljb259XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfSxcbiAgXCJ0b3AtbGluZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogMlxuICB9LFxuICBcInRhYi1pY29uXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiA1LFxuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDBcbiAgfSxcbiAgXCJ0YWItdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogNSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMjBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHt7YmFja2dyb3VuZENvbG9yfX1cIiAgb25jbGljaz1cIm9uY2xpY2tpdGVtXCI+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRvcC1saW5lXCIgc3JjID0gXCJodHRwOi8vZ3RtczAzLmFsaWNkbi5jb20vdHBzL2kzL1RCMW1kc2lNcFhYWFhYcFhYWFhOdzRKSVhYWC02NDAtNC5wbmdcIj48L2ltYWdlPlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ0YWItaWNvblwiIHNyYyA9IHt7aWNvbn19PjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGFiLXRleHRcIiBzdHlsZT1cImNvbG9yOiB7e3RpdGxlQ29sb3J9fVwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8L2Rpdj4gIFxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC5jb250YWluZXIge1xuICAgICAgICBmbGV4OiAxOyBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgICAgICBoZWlnaHQ6IDg4O1xuICAgIH1cbiAgICAudG9wLWxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBoZWlnaHQ6IDI7XG4gICAgfVxuICAgIC50YWItaWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDU7IFxuICAgICAgICB3aWR0aDogNDA7IFxuICAgICAgICBoZWlnaHQ6IDQwXG4gICAgfVxuICAgIC50YWItdGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDU7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tpdGVtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGluZGV4OiB2bS5pbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZtLiRkaXNwYXRjaCgndGFiSXRlbS5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlPzMyMWQzY2ZhIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZW1iZWRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52aXNpYmlsaXR5fVxuICAgICAgfSxcbiAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJJdGVtc30sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3JjfSxcbiAgICAgICAgXCJ0eXBlXCI6IFwid2VleFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWJiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ3eGMtdGFiaXRlbVwiLFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJJdGVtc30sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiaW5kZXhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmluZGV4fSxcbiAgICAgICAgICAgIFwiaWNvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaWNvbn0sXG4gICAgICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgICAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBwZXJcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDBcbiAgfSxcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogODhcbiAgfSxcbiAgXCJ0YWJiYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDg4XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxlbWJlZCBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cInZpc2liaWxpdHk6e3t2aXNpYmlsaXR5fX1cIiByZXBlYXQ9e3t0YWJJdGVtc319IHNyYz17e3NyY319IHR5cGU9XCJ3ZWV4XCI+PC9lbWJlZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiIGFwcGVuZCA9IFwidHJlZVwiPlxuICAgICAgICAgICAgPHd4Yy10YWJpdGVtIHJlcGVhdD17e3RhYkl0ZW1zfX0gaW5kZXg9e3tpbmRleH19IGljb249e3tpY29ufX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19Pjwvd3hjLXRhYkl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC53cmFwcGVyIHsgXG4gICAgICAgIHdpZHRoOiA3NTA7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jb250ZW50IHsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbWFyZ2luLXRvcDogMDsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4ODtcbiAgICB9XG4gICAgLnRhYmJhciB7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyAgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRhYkl0ZW1zOiBbIF0sXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICAgICAgdW5zZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgICB0aGlzLiRvbigndGFiSXRlbS5vbkNsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBkZXRhaWw9IGUuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZGV0YWlsLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChkZXRhaWwuaW5kZXgpO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbmRleDogZGV0YWlsLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ3RhYkJhci5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5zZWxlY3RlZEltYWdlO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnVuc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgIFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlPzVhNGEwYmNiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGltZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfnlKjmiLfpooTmnJ/orqHliJLnlJ/mlYjml7bpl7TvvJonICsgKHRoaXMudGltZSl9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtZXNzYWdlYm94XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidXNlcmluZm9cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbXRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi55So5oi35L+h5oGvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtbmFtZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICflp5PlkI3vvJonICsgKHRoaXMudXNlcm5hbWUpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIml0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+i6q+S7veivgeWPt++8micgKyAodGhpcy5pZGNhcmQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIml0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+aJi+acuuWPt++8micgKyAodGhpcy5waG9uZSl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNhcmluZm9cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbXRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2m6L6G5L+h5oGvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtbmFtZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfovabniYzlj7fvvJonICsgKHRoaXMuY2FyaWQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIml0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+WTgeeJjOWei+WPt++8micgKyAodGhpcy5jYXJ0eXBlKX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtbmFtZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfovabmnrblj7fvvJonICsgKHRoaXMuY2FyZnJhbWVpZCl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAn5Y+R5Yqo5py65Y+377yaJyArICh0aGlzLmVuZ2luZWlkKX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2hlY2tjYXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbXRpdGxlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aqM6L2m6aKE57qm5L+h5oGvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImlucHV0aXRlbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVja2l0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aKE57qm6aqM6L2m5pe26Ze0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dHRpbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3d0aW1lcGFnZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY2hlY2t0aW1lfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImlucHV0aXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVja2l0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aKE57qm6aqM6L2m5Zyw54K5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFjZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3dhZGRyZXNzcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnByb3ZpY2UpICsgJyAvICcgKyAodGhpcy5jaXR5KSArICcgLyAnICsgKHRoaXMuYXJlYSl9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInN0cmVldFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuihl+mBk1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zdHJlZXR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW5wdXRpdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNoZWNraXRlbW5hbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpooTnuqbpqozovabkurpcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImNoZWNraXRlbW5hbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3djaGVja2VycGFnZVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VsZWN0ZWRtZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2F2ZWJveFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJzYXZlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzYXZlRGF0ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS/neWtmFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hc2tcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzaG93YWRkcmVzc3BpY2tlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueCueWHu+mAieaLqeWcsOWdgFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic2VsZWN0YWRkcmVzc1wiLFxuICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dwaWNrZXJ9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hc2tcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsb3NldGltZXBhZ2VcIlxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3d0aW1lfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzbGlzdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2Nyb2xsZXJcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNob3dTY3JvbGxiYXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NsaXN0aXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy55ZWFyc30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3R5ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNjcm9sbGVyXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzaG93U2Nyb2xsYmFyXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzbGlzdGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubW9udGhzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNlbGVjdG1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInNjcm9sbGVyXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzaG93U2Nyb2xsYmFyXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGRyZXNzbGlzdGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc2xpc3RpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGFpZXN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2VsZWN0ZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hc2tcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsb3NlYWRkcmVzc3BhZ2VcIlxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dhZGRyZXNzfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzbGlzdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2Nyb2xsZXJcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNob3dTY3JvbGxiYXJcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NsaXN0aXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wcm92aWNlc30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3Rwcm92aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcInByb3ZpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzY3JvbGxlclwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic2hvd1Njcm9sbGJhclwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc2xpc3RpdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNpdGllc30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3RjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzY3JvbGxlclwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic2hvd1Njcm9sbGJhclwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzc2xpc3RpdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NsaXN0aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmFyZWFzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNlbGVjdGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm1hc2tcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsb3NlY2hlY2tlcnBhZ2VcIlxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3d9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxpc3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGVyc29ubGlzdH0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNlbGVjdGNoZWNrZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9hcHBvaW50bWVudC53ZVxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImlucHV0aXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ0aW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI1LFxuICAgIFwicGFkZGluZ1RvcFwiOiAxNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDE1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxNVxuICB9LFxuICBcIml0ZW10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAzNVxuICB9LFxuICBcIml0ZW1uYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwXG4gIH0sXG4gIFwiaXRlbWlucHV0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMWYxZjFcIixcbiAgICBcImZvbnRTaXplXCI6IDI1LFxuICAgIFwid2lkdGhcIjogMjAwLFxuICAgIFwiaGVpZ2h0XCI6IDM1XG4gIH0sXG4gIFwidXNlcmluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YxZjFmMVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxNSxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDE1LFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDE1LFxuICAgIFwicGFkZGluZ0xlZnRcIjogMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMFxuICB9LFxuICBcImNhcmluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YxZjFmMVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxNSxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDE1LFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDE1LFxuICAgIFwicGFkZGluZ0xlZnRcIjogMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMFxuICB9LFxuICBcImNoZWNrY2FyXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMTUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAxMFxuICB9LFxuICBcImNoZWNraXRlbW5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzAsXG4gICAgXCJ3aWR0aFwiOiAyMDBcbiAgfSxcbiAgXCJzZWxlY3RwZXJzb25cIjoge1xuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJ3aWR0aFwiOiAyMDAsXG4gICAgXCJoZWlnaHRcIjogMzUsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDIwLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMSxcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiaW5wdXR0aW1lXCI6IHtcbiAgICBcImhlaWdodFwiOiAzNSxcbiAgICBcIndpZHRoXCI6IDIwMCxcbiAgICBcImZvbnRTaXplXCI6IDI1LFxuICAgIFwibWFyZ2luTGVmdFwiOiAyMCxcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcImlucHV0YWRkcmVzc1wiOiB7XG4gICAgXCJoZWlnaHRcIjogMzUsXG4gICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMTAsXG4gICAgXCJ3aWR0aFwiOiA4MCxcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcInNwYWNlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMjBcbiAgfSxcbiAgXCJzdHJlZXRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogNSxcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwid2lkdGhcIjogNDAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAyMjAsXG4gICAgXCJoZWlnaHRcIjogMzUsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxXG4gIH0sXG4gIFwic2F2ZWJveFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwic2F2ZVwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiAzMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmRlMDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwid2lkdGhcIjogNDAwLFxuICAgIFwiaGVpZ2h0XCI6IDUwLFxuICAgIFwicGFkZGluZ1wiOiA1LFxuICAgIFwiZm9udFNpemVcIjogMjVcbiAgfSxcbiAgXCJtYXNrXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImxpc3RcIjoge1xuICAgIFwid2lkdGhcIjogNTAwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiaXRlbXN0eWxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQwLFxuICAgIFwibWFyZ2luXCI6IDEwLFxuICAgIFwibGluZUhlaWdodFwiOiAzMCxcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhZGRyZXNzbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogODAwLFxuICAgIFwid2lkdGhcIjogNjAwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiYWRkcmVzc2xpc3RpdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImFkZHJlc3NpbnB1dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA0MDAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJmb250U2l6ZVwiOiAzMCxcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2FwcG9pbnRtZW50LndlXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gICA8dGV4dCBjbGFzcz1cInRpbWVcIj7nlKjmiLfpooTmnJ/orqHliJLnlJ/mlYjml7bpl7TvvJp7e3RpbWV9fTwvdGV4dD5cclxuICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2Vib3hcIj5cclxuICAgICA8ZGl2IGNsYXNzPVwidXNlcmluZm9cIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIml0ZW10aXRsZVwiPueUqOaIt+S/oeaBrzwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIml0ZW1uYW1lXCI+5aeT5ZCN77yae3t1c2VybmFtZX19PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0ICBjbGFzcz1cIml0ZW1uYW1lXCI+6Lqr5Lu96K+B5Y+377yae3tpZGNhcmR9fTwvdGV4dD5cclxuICAgICAgICA8dGV4dCAgY2xhc3M9XCJpdGVtbmFtZVwiPuaJi+acuuWPt++8mnt7cGhvbmV9fTwvdGV4dD5cclxuICAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzPVwiY2FyaW5mb1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbXRpdGxlXCI+6L2m6L6G5L+h5oGvPC90ZXh0PiAgICAgICAgXHJcbiAgICAgICAgPHRleHQgIGNsYXNzPVwiaXRlbW5hbWVcIj7ovabniYzlj7fvvJp7e2NhcmlkfX08L3RleHQ+ICAgICAgIFxyXG4gICAgICAgIDx0ZXh0ICBjbGFzcz1cIml0ZW1uYW1lXCI+5ZOB54mM5Z6L5Y+377yae3tjYXJ0eXBlfX08L3RleHQ+ICAgICAgICAgIFxyXG4gICAgICAgIDx0ZXh0ICBjbGFzcz1cIml0ZW1uYW1lXCI+6L2m5p625Y+377yae3tjYXJmcmFtZWlkfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgIGNsYXNzPVwiaXRlbW5hbWVcIj7lj5HliqjmnLrlj7fvvJp7e2VuZ2luZWlkfX08L3RleHQ+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzcz1cImNoZWNrY2FyXCI+ICAgIFxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbXRpdGxlXCI+6aqM6L2m6aKE57qm5L+h5oGvPC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dGl0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVja2l0ZW1uYW1lXCI+6aKE57qm6aqM6L2m5pe26Ze0PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImlucHV0dGltZVwiIG9uY2xpY2sgPSBcInNob3d0aW1lcGFnZVwiPnt7Y2hlY2t0aW1lfX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0aXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVja2l0ZW1uYW1lXCIgPumihOe6pumqjOi9puWcsOeCuTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3BhY2UgYWRkcmVzc2lucHV0XCIgb25jbGljaz1cInNob3dhZGRyZXNzcGFnZVwiID57e3Byb3ZpY2V9fSAvIHt7Y2l0eX19IC8ge3thcmVhfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dGFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIuecgVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dGFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIuW4glwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dGFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIuWMulwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInN0cmVldFwiIHBsYWNlaG9sZGVyPVwi6KGX6YGTXCIgdmFsdWU9XCJ7e3N0cmVldH19XCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRpdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlY2tpdGVtbmFtZVwiPumihOe6pumqjOi9puS6ujwvdGV4dD5cclxuICAgICAgICAgICAgPCEtLSA8aW5wdXQgY2xhc3M9XCJzZWxlY3RwZXJzb25cIiBwbGFjZWhvbGRlcj1cIuivt+mAieaLqemqjOi9puS6ulwiPjwvaW5wdXQ+IC0tPlxyXG4gICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVja2l0ZW1uYW1lXCIgb25jbGljayA9XCJzaG93Y2hlY2tlcnBhZ2VcIj57e3NlbGVjdGVkbWVzc2FnZX19PC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzYXZlYm94XCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2F2ZVwiIG9uY2xpY2sgPSBcInt7c2F2ZURhdGV9fVwiPuS/neWtmDwvdGV4dD5cclxuICAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48ZGl2IGNsYXNzID1cIm1hc2tcIj5cclxuICA8dGV4dCBvbmNsaWNrID0gXCJ7e3Nob3dhZGRyZXNzcGlja2VyfX1cIj7ngrnlh7vpgInmi6nlnLDlnYA8L3RleHQ+XHJcbiAgPHNlbGVjdGFkZHJlc3MgIGlmPVwie3tzaG93cGlja2VyfX1cIj48L3NlbGVjdGFkZHJlc3M+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBzaG93IHRpbWUgcGlja2VyIC0tPlxyXG4gICA8ZGl2IGNsYXNzPVwibWFza1wiIG9uY2xpY2s9IFwiY2xvc2V0aW1lcGFnZVwiICBpZj1cInt7c2hvd3RpbWV9fVwiPlxyXG4gICAgPGRpdiBjbGFzcyA9XCJhZGRyZXNzbGlzdFwiPlxyXG4gICAgICAgIDxzY3JvbGxlciBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgPiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcyA9IFwiYWRkcmVzc2xpc3RpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlzdCByZXBlYXQ9XCJpdGVtIGluIHllYXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbGwgIG9uY2xpY2s9XCJzZWxlY3R5ZWFyXCI+PHRleHQgY2xhc3MgPVwiaXRlbXN0eWxlXCI+e3tpdGVtfX08L3RleHQ+PC9jZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Njcm9sbGVyPlxyXG5cclxuICAgICAgICA8c2Nyb2xsZXIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiID4gXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzID0gXCJhZGRyZXNzbGlzdGl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxsaXN0ICByZXBlYXQ9XCJpdGVtIGluIG1vbnRoc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjZWxsIG9uY2xpY2s9XCJzZWxlY3Rtb250aFwiPjx0ZXh0IGNsYXNzID1cIml0ZW1zdHlsZVwiPnt7aXRlbX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zY3JvbGxlcj5cclxuXHJcbiAgICAgICAgPHNjcm9sbGVyIHNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiA+IFxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcyA9IFwiYWRkcmVzc2xpc3RpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlzdCBjbGFzcyAgPVwiYWRkcmVzc2xpc3RpdGVtXCIgcmVwZWF0PVwiaXRlbSBpbiBkYWllc1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbGwgb25jbGljaz1cInNlbGVjdGRheVwiPjx0ZXh0IGNsYXNzID1cIml0ZW1zdHlsZVwiPnt7aXRlbX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zY3JvbGxlcj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBzaG93IGFkZHJlc3MgcGlja2VyIC0tPlxyXG4gICA8ZGl2IGNsYXNzPVwibWFza1wiIG9uY2xpY2s9IFwiY2xvc2VhZGRyZXNzcGFnZVwiICBpZj1cInt7c2hvd2FkZHJlc3N9fVwiPlxyXG4gICAgPGRpdiBjbGFzcyA9XCJhZGRyZXNzbGlzdFwiPlxyXG4gICAgICAgIDxzY3JvbGxlciBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgPiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcyA9IFwiYWRkcmVzc2xpc3RpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlzdCByZXBlYXQ9XCJpdGVtIGluIHByb3ZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbGwgIG9uY2xpY2s9XCJzZWxlY3Rwcm92aWNlXCI+PHRleHQgY2xhc3MgPVwiaXRlbXN0eWxlXCIgaWQ9XCJwcm92aWNlXCI+e3tpdGVtfX08L3RleHQ+PC9jZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Njcm9sbGVyPlxyXG5cclxuICAgICAgICA8c2Nyb2xsZXIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiID4gXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzID0gXCJhZGRyZXNzbGlzdGl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxsaXN0ICByZXBlYXQ9XCJpdGVtIGluIGNpdGllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjZWxsIG9uY2xpY2s9XCJzZWxlY3RjaXR5XCI+PHRleHQgY2xhc3MgPVwiaXRlbXN0eWxlXCIgaWQ9XCJjaXR5XCI+e3tpdGVtfX08L3RleHQ+PC9jZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Njcm9sbGVyPlxyXG5cclxuICAgICAgICA8c2Nyb2xsZXIgc2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiID4gXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzID0gXCJhZGRyZXNzbGlzdGl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxsaXN0IGNsYXNzICA9XCJhZGRyZXNzbGlzdGl0ZW1cIiByZXBlYXQ9XCJpdGVtIGluIGFyZWFzXCIgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y2VsbCBvbmNsaWNrPVwic2VsZWN0YXJlYVwiPjx0ZXh0IGNsYXNzID1cIml0ZW1zdHlsZVwiIGlkPVwiYXJlYVwiPnt7aXRlbX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zY3JvbGxlcj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8IS0tIGlzIHNob3cgY2hlY2tjYXIgcGVyc29uIGJveCAtLT5cclxuICA8ZGl2IGNsYXNzPVwibWFza1wiIG9uY2xpY2s9IFwiY2xvc2VjaGVja2VycGFnZVwiICBpZj1cInt7c2hvd319XCI+XHJcbiAgICA8ZGl2IGNsYXNzID1cImxpc3RcIj5cclxuICAgICAgICA8bGlzdCByZXBlYXQ9XCJpdGVtIGluIHBlcnNvbmxpc3RcIj5cclxuICAgICAgICAgICAgPGNlbGwgb25jbGljaz1cInNlbGVjdGNoZWNrZXJcIj48dGV4dCBjbGFzcyA9XCJpdGVtc3R5bGVcIiBpZD1cIm1lc3NhZ2VcIj57e2l0ZW0ubWVzc2FnZX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICA8L2xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG52YXIgYWRkcmVzc21hcCA9IHJlcXVpcmUoXCIuL3V0aWxzL2FyZWFcIik7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzL3V0aWxzXCIpO1xyXG52YXIgcGlja2VyID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3BpY2tlcicpO1xyXG5cclxucmVxdWlyZShcIi4vc2VsZWN0LndlXCIpLFxyXG5yZXF1aXJlKFwiLi9zZWxlY3RhZGRyZXNzLndlXCIpO1xyXG4gcmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRtZXNzYWdlOlwi6K+36YCJ5oup6aqM6L2m5Lq6XCIsXHJcbiAgICAgICAgdXNlcnM6W10sXHJcbiAgICAgICAgc2hvd2FkZHJlc3M6ZmFsc2UsXHJcbiAgICAgICAgb2lkOicnLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICB0aW1lOidsb2FkaW5nLi4uJyxcclxuICAgICAgICB1c2VybmFtZTpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBpZGNhcmQ6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgcGhvbmU6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgY2FyaWQ6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgY2FydHlwZTpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBjYXJmcmFtZWlkOlwibG9hZGluZy4uLlwiLFxyXG4gICAgICAgIGVuZ2luZWlkOlwibG9hZGluZy4uLlwiLFxyXG4gICAgICAgIGNoZWNrdGltZTpcIjIwMTctMS0xNFwiLFxyXG4gICAgICAgIHByb3ZpY2VpbmRleDowLFxyXG4gICAgICAgIGNpdHlpbmRleDowLFxyXG4gICAgICAgIGFyZWFpbmRleDowLFxyXG4gICAgICAgIHByb3ZpY2U6XCLljJfkuqxcIixcclxuICAgICAgICBjaXR5Olwi5YyX5Lqs5biCXCIsXHJcbiAgICAgICAgYXJlYTpcIuS4nOWfjuWMulwiLFxyXG4gICAgICAgIHN0cmVldDpcIuS4nOebtOmXqOS4nOaWuemTtuW6pzIzRFwiLFxyXG4gICAgICAgIHBlcnNvbmlkOlwiOTUyN1wiLFxyXG4gICAgICAgIHBlcnNvbmxpc3Q6W10sXHJcbiAgICAgICAgcHJvdmljZXM6W1wi5YyX5LqsXCJdLFxyXG4gICAgICAgIGNpdGllczpbXCLluILovpbljLpcIl0sXHJcbiAgICAgICAgYXJlYXM6W1wi5Lic5Z+O5Yy6XCJdLFxyXG4gICAgICAgIFxyXG4gICAgICAgIHllYXJzOltdLFxyXG4gICAgICAgIG1vbnRoczpbXSxcclxuICAgICAgICBkYWllczpbXSxcclxuICAgICAgICB5ZWFyOjIwMTcsXHJcbiAgICAgICAgbW9udGg6MSxcclxuICAgICAgICBkYXk6MTgsXHJcbiAgICAgICAgc2hvd3RpbWU6ZmFsc2UsXHJcblxyXG4gICAgICAgIHNob3dwaWNrZXI6ZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcmVhZHk6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJyk7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICAgLyogZ2V0IG9yZGVyaWQgb2YgZHJpdmVyICovXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKCdvcmRlcmlkJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgLyogZ2V0IGluZm8gb2YgZHJpdmVyICovXHJcbiAgICAgICAgICAgIG1lLm9pZCA9IGUuZGF0YTtcclxuICAgICAgICAgICAgbWUuZ2V0ZGF0YShlLmRhdGEpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICB0aGlzLnByb3ZpY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5wcm92aWNlcyA9IGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tcIjBcIl07XHJcbiAgICAgICAgZm9yKHZhciBpID0gMjAxMDtpPDIwMjU7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGkgPTE7aTwxMztpKyspe1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAxO2k8Mjk7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5kYWllcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIC8qIOiOt+WPlueUqOaIt+WfuuacrOS/oeaBryAgKi9cclxuICAgICAgICBnZXRkYXRhOmZ1bmN0aW9uKG9pZCl7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpczsgICBcclxuICAgICAgICAgICAgc3RyZWFtLmZldGNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZG9jdW1lbnQuY29va2llLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL29yZGVyL3ZhbGlkYXRlVmlldz9cIitcIm9pZD1cIitvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTonanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5jb2RlLHJlc3BvbnNlLmRhdGEubXNnLHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSByZXNwb25zZS5kYXRhLmRhdGEuaW5mbztcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZSA9IGluZm8uZXhwZWN0X2F0O1xyXG4gICAgICAgICAgICAgICAgc2VsZi51c2VybmFtZSA9IGluZm8ubmFtZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuaWRjYXJkID0gaW5mby5pZGVudGl0eV9ubztcclxuICAgICAgICAgICAgICAgIHNlbGYucGhvbmUgPSBpbmZvLnBob25lO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYXJpZCA9IGluZm8ubGljZW5zZV9ubztcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FydHlwZSA9IGluZm8uZmFtaWx5X25hbWU7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhcmZyYW1laWQgPSBpbmZvLnZpbjtcclxuICAgICAgICAgICAgICAgIHNlbGYuZW5naW5laWQgPSBpbmZvLmVuZ2luZV9ubztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLnVzZXJsaXN0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYudXNlcnMgPSByZXNwb25zZS5kYXRhLmRhdGEudXNlcmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBmb3IoIHZhciB1c2VyIGluIHNlbGYudXNlcnMpeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm1lc3NhZ2UgPSBzZWxmLnVzZXJzW3VzZXJdLnRyaW0oKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wZXJzb25saXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYucGVyc29ubGlzdCk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyog5pi+56S66aqM6L2m5Lq66YCJ5oup55WM6Z2iICovXHJcbiAgICAgICAgc2hvd2NoZWNrZXJwYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgLyog6YCJ5oup6aqM6L2m5Lq6ICovXHJcbiAgICAgICAgc2VsZWN0Y2hlY2tlcjpmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkbWVzc2FnZSA9IGluZGV4LnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgLy90aGlzLmVsKFwiaW5wdXRcIikudmFsdWUgPSB0aGlzLnNlbGVjdG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgZm9yKCB2YXIgdXNlciBpbiB0aGlzLnVzZXJzKXsgIFxyXG4gICAgICAgICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZG1lc3NhZ2UgPT0gdGhpcy51c2Vyc1t1c2VyXS50cmltKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uaWQgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgIC8qIOWFs+mXremqjOi9puS6uumAieaLqeeVjOmdoiAqL1xyXG4gICAgICAgICBjbG9zZWNoZWNrZXJwYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLyog5pi+56S65Zyw5Z2A6YCJ5oup55WM6Z2iICovICAgICAgXHJcbiAgICAgICAgIHNob3dhZGRyZXNzcGFnZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93YWRkcmVzcyA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8qIOWFs+mXreWcsOWdgOmAieaLqeeVjOmdoiAqL1xyXG4gICAgICAgICBjbG9zZWFkZHJlc3NwYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNob3dhZGRyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3R5ZWFyOmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgdGhpcy55ZWFyID0gZS50YXJnZXQuY2hpbGRyZW5bMF0uYXR0ci52YWx1ZTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVhclwiK3RoaXMueWVhcik7ICAgICAgICAgICBcclxuICAgICAgICAgfSxcclxuICAgICAgICAgIHNlbGVjdG1vbnRoOmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgdGhpcy5tb250aCA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLmF0dHIudmFsdWU7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb250aFwiK3RoaXMubW9udGgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0ZGF5OmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgdGhpcy5kYXkgPSBlLnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXlcIit0aGlzLmRheSk7IFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBzZWxlY3Rwcm92aWNlOmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvdmljZSA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLmF0dHIudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm92aWNlKTtcclxuICAgICAgICAgICAgICB0aGlzLnByb3ZpY2VpbmRleCA9IHRoaXMucHJvdmljZXMuaW5kZXhPZih0aGlzLnByb3ZpY2UpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvdmljZXMuaW5kZXhPZih0aGlzLnByb3ZpY2UpKTtcclxuICAgICAgICAgICAgICB2YXIgY2l0eSA9IFwiMF9cIisgdGhpcy5wcm92aWNlaW5kZXg7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaXRpZXMgPSBbXTtcclxuICAgICAgICAgICAgICB0aGlzLmNpdGllcyA9IGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tjaXR5XTtcclxuICAgICAgICAgICAgICB0aGlzLmFyZWFzID0gW1wi6K+36YCJ5oupXCJdO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0Y2l0eTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICB0aGlzLmNpdHkgPSBlLnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2l0eSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaXR5aW5kZXggPSB0aGlzLmNpdGllcy5pbmRleE9mKHRoaXMuY2l0eSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaXRpZXMuaW5kZXhPZih0aGlzLmNpdHkpKTtcclxuICAgICAgICAgICAgICB2YXIgYXJlYSA9IFwiMF9cIisgdGhpcy5wcm92aWNlaW5kZXgrXCJfXCIrIHRoaXMuY2l0eWluZGV4O1xyXG4gICAgICAgICAgICAgIHRoaXMuYXJlYXMgPSBbXTtcclxuICAgICAgICAgICAgICB0aGlzLmFyZWFzID0gYWRkcmVzc21hcC5hZGRyZXNzLkl0ZW1zW2FyZWFdO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0YXJlYTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICB0aGlzLmFyZWEgPSBlLnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJlYSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5hcmVhaW5kZXggPSB0aGlzLmFyZWFzLmluZGV4T2YodGhpcy5hcmVhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFyZWFzLmluZGV4T2YodGhpcy5hcmVhKSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNob3d0aW1lcGFnZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93dGltZSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGNsb3NldGltZXBhZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrdGltZSA9IHRoaXMueWVhciArXCItXCIrdGhpcy5tb250aCArXCItXCIrdGhpcy5kYXk7XHJcbiAgICAgICAgICAgICB0aGlzLnNob3d0aW1lID0gZmFsc2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgc2F2ZURhdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUgID0gbmV3IERhdGUodGhpcy55ZWFyLHRoaXMubW9udGggLSAxLHRoaXMuZGF5KTtcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSBkYXRlLmdldFRpbWUoKS8xMDAwO1xyXG4gICAgICAgICAgICB2YXIgcGxhY2UgPSBlbmNvZGVVUkkodGhpcy5wcm92aWNlK3RoaXMuY2l0eSt0aGlzLmFyZWErXCItLVwiK3RoaXMuc3RyZWV0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGFjZVwiKyBwbGFjZSk7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpczsgICBcclxuICAgICAgICAgICAgc3RyZWFtLmZldGNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZG9jdW1lbnQuY29va2llLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL29yZGVyL3NhdmVWYWxpZGF0ZT9cIitcInRpbWU9XCIrdGltZStcIiZwbGFjZT1cIitwbGFjZStcIiZvcGlkPVwiK3NlbGYucGVyc29uaWQrXCImb2lkPVwiK3NlbGYub2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmNvZGUgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZhaWxlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7ICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSAgdXRpbHMuZ2V0QmFzZVVybChidW5kbGVVcmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2VcIitiYXNlKTtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTChiYXNlICsgXCJzYXZlc3VjY2Vzcy5qc1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICBmYWlsZWQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSAgdXRpbHMuZ2V0QmFzZVVybChidW5kbGVVcmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2VcIitiYXNlKTtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTChiYXNlICsgXCJzYXZlZmFpbGVkLmpzXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNob3dhZGRyZXNzcGlja2VyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd3BpY2tlciA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmlucHV0aXRlbXtcclxuICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgfSAgICBcclxuICAgIC50aW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MTVweDtcclxuICAgIH1cclxuICAgIC5pdGVtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOjM1cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbWlucHV0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTtcclxuICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgIH1cclxuICAgIC51c2VyaW5mb3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmluZm97XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICAgIH1cclxuICAgIC5jaGVja2NhcntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNraXRlbW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0cGVyc29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOjFweDtcclxuICAgICAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAuaW5wdXR0aW1le1xyXG4gICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOjFweDtcclxuICAgICAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAuaW5wdXRhZGRyZXNze1xyXG4gICAgICAgIGhlaWdodDozNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6MXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIC5zcGFjZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnN0cmVldHtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMjBweDtcclxuICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcclxuXHJcbiAgICB9XHJcbiAgICAuc2F2ZWJveHtcclxuICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyAgIFxyXG4gICAgfVxyXG4gICAgLnNhdmV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7ICAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZGUwMDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICBwYWRkaW5nOjVweDsgXHJcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICB9ICBcclxuICAgICAubWFza3tcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOjA7XHJcbiAgICAgIHJpZ2h0OjA7XHJcbiAgICAgIGJvdHRvbTowO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5OTk5OTk7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICB9XHJcbiAgLmxpc3R7XHJcbiAgICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5pdGVtc3R5bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgICBtYXJnaW46MTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6MzBweDtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuICAuYWRkcmVzc2xpc3R7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgaGVpZ2h0OjgwMHB4O1xyXG4gICAgICB3aWR0aDo2MDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIH1cclxuICAuYWRkcmVzc2xpc3RpdGVte1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgfVxyXG4gIC5hZGRyZXNzaW5wdXR7XHJcbiAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHBvaW50bWVudC53ZT8wZWZmZWE3NiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc2VsZWN0LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NlbGVjdC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NlbGVjdC53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9zZWxlY3QnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlbGVjdC53ZVxuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiYm90dG9tYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiaWRcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWxlY3RlZG1lc3NhZ2V9XG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImZvY3VzXCI6IFwic2hvd2xpc3RcIixcbiAgICAgICAgXCJibHVyXCI6IFwiZGlzcG90ZVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImlucHV0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3d9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtc30sXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3RpdGVtXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9zZWxlY3Qud2Vcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJib3R0b21ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiaW5wdXRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJ3aWR0aFwiOiAxNTAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMTUsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCJsaXN0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICBcIndpZHRoXCI6IDE1MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRjAwMDBcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvc2VsZWN0LndlXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDExIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJib3R0b21ib3hcIj5cclxuICAgIDxpbnB1dCBpZD1cImlucHV0XCIgdHlwZT1cInRleHRcIiBvbmZvY3VzID1cInt7c2hvd2xpc3R9fVwiIG9uYmx1ciA9XCJ7e2Rpc3BvdGV9fVwiIGNsYXNzPVwiaW5wdXRcIiB2YWx1ZSA9XCJ7e3NlbGVjdGVkbWVzc2FnZX19XCI+PC9pbnB1dD5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0XCIgaWY9XCJ7e3Nob3d9fVwiPlxyXG4gICAgICAgIDxsaXN0ICByZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCIgID5cclxuICAgICAgICAgICAgPGNlbGwgb25jbGljaz1cInNlbGVjdGl0ZW1cIj48dGV4dCBpZD1cIm1lc3NhZ2VcIj57e2l0ZW0ubWVzc2FnZX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICA8L2xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuYm90dG9tYm94e1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgIGhlaWdodDo0MHB4OyBcclxuICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjpibGFjazsgICAgIFxyXG4gIH1cclxuICAubGlzdHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHRvcDowcHg7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzZWxlY3RlZG1lc3NhZ2U6XCLor7fpgInmi6lcIixcclxuICAgICAgICBzaG93OmZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOltcclxuICAgICAgICAgICAge21lc3NhZ2U6XCLliJfooajmlbDmja4xXCJ9LFxyXG4gICAgICAgICAgICB7bWVzc2FnZTpcIuWIl+ihqOaVsOaNrjJcIn0sXHJcbiAgICAgICAgICAgIHttZXNzYWdlOlwi5YiX6KGo5pWw5o2uM1wifSxcclxuICAgICAgICAgICAge21lc3NhZ2U6XCLliJfooajmlbDmja40XCJ9LFxyXG4gICAgICAgICAgICB7bWVzc2FnZTpcIuWIl+ihqOaVsOaNrjVcIn0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgIH0sXHJcbiAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICBzaG93bGlzdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNlbGVjdGl0ZW06ZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgICAgICAgdGhpcy5zZWxlY3RlZG1lc3NhZ2UgPSBpbmRleC50YXJnZXQuY2hpbGRyZW5bMF0uYXR0ci52YWx1ZTtcclxuICAgICAgICAgICAgIC8vdGhpcy5lbChcImlucHV0XCIpLnZhbHVlID0gdGhpcy5zZWxlY3RtZXNzYWdlO1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGRpc3BvdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3Qud2U/ZmRiM2E2ODQiXSwic291cmNlUm9vdCI6IiJ9