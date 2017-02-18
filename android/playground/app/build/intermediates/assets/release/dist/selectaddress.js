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

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)
	
	__weex_define__('@weex-component/b4681d51ad356060a9342b351eebd825', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/b4681d51ad356060a9342b351eebd825',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3RhZGRyZXNzLndlPzMwODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdGFkZHJlc3Mud2U/ZTI5ZSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdGFkZHJlc3Mud2U/ZDI2OSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdGFkZHJlc3Mud2U/MGYwZiIsIndlYnBhY2s6Ly8vLi9+Ly42LjIwLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcz9iNWI2KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzP2M1NTcqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanM/NTdhMCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzlkOGUqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/OWY3YioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcz85ODJmKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzPzMzYzgqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzQzM2QqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz9iNTVlKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz8xYTAzKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/YTczNioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcz8wNGE3KiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcz9lODMwKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2UxOTUqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzP2FlYzQqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz85NDU0KioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/ZGU0NCoqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzP2UzNDMqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9kNTQ1KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz83ZTgxKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz9lMDBmKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz85MTBkKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzPzFmODkqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/NDBhOSoqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz83YjE4KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/Y2E3NCoqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanM/Y2U1MSoqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzMwNzkqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanM/ODBjOCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcz85ODEyKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzP2RmZGYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzPzRhNDAqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzPzlhNWYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9jZTAzKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2QwNTMqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/N2RjNioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/YmEwMCoqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzPzQ1MWMqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanM/MWU5MSoqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzEwYjQqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzIxMjkqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzPzM1M2EqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcz8xOTA1KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanM/NzY2NyoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2FjMDcqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanM/MzI0ZSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanM/NzcxOCoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz83ZDhjKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcz8wNDRmKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzNkOWIqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzPzQ4NzEqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcz84OWRhKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz8zNWIwKiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXJlYS5qcz8wYTZiIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9pbmRleC5qcz8wMzE0KiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/OTdkZioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT8wNWJjKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlPzg0MDcqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2UiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2U/N2MyOSoqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2M1YTgqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT8zMzg0KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2UiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzg3YzIqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/ODM4MCoqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT81MjEzKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlP2U5YmYqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT85YjZjKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/ZGE0MCoqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT83MTk5KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzZkZGEqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MzcwMyoqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZSIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/ZTMxMioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT83MDg1KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlP2NmYjcqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2UiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMC4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzP2ZkNWYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzFkZmMqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzP2QyMDEqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzP2M4YTYqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz80NWFjKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz81MGY0KiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlP2I5NmQqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlP2I3NjMqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzA1ZjMqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT9hNGVhKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2ZjODMqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/Y2QwNyoqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZSIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzJhYWIqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzlmMDUqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzU5MTUqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT9iYzBhKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8wMDEyKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8wNmNjKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT81NGQwKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZSIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/YmUxZCoqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT9mNzU4KioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4y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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7QUMvYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDV0E7O2VBR0E7b0JBQ0E7b0JBQ0E7c0JBRUE7QUFMQTsrQkFNQTt3QkFFQTs7OENBQ0E7c0JBQ0E7bUNBQ0E7NEJBRUE7Ozt1QkFHQTtBQUZBO3dDQUdBO0FBQ0E7QUFDQTs7d0NBRUE7c0RBQ0E7cUNBQ0E7eUJBQ0E7a0NBQ0E7cUNBQ0E7Z0NBQ0E7QUFDQSxnQkFDQTtrQ0FDQTtxQ0FDQTtnQ0FDQTtBQUNBO0FBQ0E7QUFFQTtBQWhCQTtBQXJCQSIsImZpbGUiOiJkaXN0XFxzZWxlY3RhZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NlbGVjdGFkZHJlc3Mud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc2VsZWN0YWRkcmVzcy53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NlbGVjdGFkZHJlc3Mud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvYjQ2ODFkNTFhZDM1NjA2MGE5MzQyYjM1MWVlYmQ4MjUnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvYjQ2ODFkNTFhZDM1NjA2MGE5MzQyYjM1MWVlYmQ4MjUnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0YWRkcmVzcy53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIm1hc2tcIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcImNsb3NlYWRkcmVzc3BhZ2VcIlxuICB9LFxuICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaG93YWRkcmVzc30sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNlbGVjdGJ1dHRvblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWPlua2iFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VsZWN0YnV0dG9uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi56Gu5a6aXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFkZHJlc3NsaXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInNjcm9sbGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic2hvd1Njcm9sbGJhclwiOiBcImZhbHNlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWRkcmVzc2xpc3RpdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnByb3ZpY2VzfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3Rwcm92aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5wcm92aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic2Nyb2xsZXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzaG93U2Nyb2xsYmFyXCI6IFwiZmFsc2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzbGlzdGl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY2l0aWVzfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3RjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInNjcm9sbGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic2hvd1Njcm9sbGJhclwiOiBcImZhbHNlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWRkcmVzc2xpc3RpdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3NsaXN0aXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmFyZWFzfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3RhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJhcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiZm9vdGVyXCJcbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9zZWxlY3RhZGRyZXNzLndlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInRpdGxlXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAxY2RmZlwiLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMjAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjBcbiAgfSxcbiAgXCJzZWxlY3RidXR0b25cIjoge1xuICAgIFwiZm9udFNpemVcIjogMzAsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDYwLFxuICAgIFwibWFyZ2luXCI6IDUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZWNkMDFcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiA1XG4gIH0sXG4gIFwibWFza1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJoZWlnaHRcIjogNzQwXG4gIH0sXG4gIFwiaXRlbXN0eWxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQwLFxuICAgIFwibWFyZ2luXCI6IDEwLFxuICAgIFwibGluZUhlaWdodFwiOiAzMCxcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhZGRyZXNzbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiA2MDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJhZGRyZXNzbGlzdGl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiYWRkcmVzc2lucHV0XCI6IHtcbiAgICBcIndpZHRoXCI6IDQwMCxcbiAgICBcImhlaWdodFwiOiA0MCxcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMVxuICB9LFxuICBcImZvb3RlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDFjZGZmXCIsXG4gICAgXCJoZWlnaHRcIjogNjBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL3NlbGVjdGFkZHJlc3Mud2Vcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDEyIiwiPHRlbXBsYXRlPlxyXG4gIDwhLS0gc2hvdyBhZGRyZXNzIHBpY2tlciAtLT5cclxuICAgPGRpdiBjbGFzcz1cIm1hc2tcIiBvbmNsaWNrPSBcImNsb3NlYWRkcmVzc3BhZ2VcIiAgaWY9XCJ7e3Nob3dhZGRyZXNzfX1cIj5cclxuICAgPGRpdiBjbGFzcyA9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzID1cInNlbGVjdGJ1dHRvblwiPuWPlua2iDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcyA9XCJzZWxlY3RidXR0b25cIj7noa7lrpo8L3RleHQ+XHJcbiAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcyA9XCJhZGRyZXNzbGlzdFwiPlxyXG4gICAgICAgIDxzY3JvbGxlciBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcyA9IFwiYWRkcmVzc2xpc3RpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGlzdCByZXBlYXQ9XCJpdGVtIGluIHByb3ZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbGwgIG9uY2xpY2s9XCJzZWxlY3Rwcm92aWNlXCI+PHRleHQgY2xhc3MgPVwiaXRlbXN0eWxlXCIgIHN0eWxlPVwiY29sb3I6e3tpdGVtLmNvbG9yfX07XCI+e3tpdGVtLnByb3ZpY2V9fTwvdGV4dD48L2NlbGw+XHJcbiAgICAgICAgICAgICAgICA8L2xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2Nyb2xsZXI+XHJcblxyXG4gICAgICAgIDxzY3JvbGxlciBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgPiBcclxuICAgICAgICAgICAgPGRpdiAgY2xhc3MgPSBcImFkZHJlc3NsaXN0aXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpc3QgIHJlcGVhdD1cIml0ZW0gaW4gY2l0aWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbGwgb25jbGljaz1cInNlbGVjdGNpdHlcIj48dGV4dCBjbGFzcyA9XCJpdGVtc3R5bGVcIj57e2l0ZW19fTwvdGV4dD48L2NlbGw+XHJcbiAgICAgICAgICAgICAgICA8L2xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2Nyb2xsZXI+XHJcblxyXG4gICAgICAgIDxzY3JvbGxlciBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgPiBcclxuICAgICAgICAgICAgPGRpdiAgY2xhc3MgPSBcImFkZHJlc3NsaXN0aXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpc3QgY2xhc3MgID1cImFkZHJlc3NsaXN0aXRlbVwiIHJlcGVhdD1cIml0ZW0gaW4gYXJlYXNcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjZWxsIG9uY2xpY2s9XCJzZWxlY3RhcmVhXCI+PHRleHQgY2xhc3MgPVwiaXRlbXN0eWxlXCIgaWQ9XCJhcmVhXCI+e3tpdGVtfX08L3RleHQ+PC9jZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9saXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Njcm9sbGVyPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzID1cImZvb3RlclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIHZhciBhZGRyZXNzbWFwID0gcmVxdWlyZShcIi4vdXRpbHMvYXJlYVwiKTtcclxuICByZXF1aXJlKCd3ZWV4LWNvbXBvbmVudHMnKTtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHsgICAgXHJcbiAgICAgICAgc2hvd2FkZHJlc3M6dHJ1ZSxcclxuICAgICAgICBwcm92aWNlaW5kZXg6MCxcclxuICAgICAgICBjaXR5aW5kZXg6MCxcclxuICAgICAgICBhcmVhaW5kZXg6MCxcclxuICAgICAgICBwcm92aWNlOlwi5YyX5LqsXCIsXHJcbiAgICAgICAgY2l0eTpcIuWMl+S6rOW4glwiLFxyXG4gICAgICAgIGFyZWE6XCLkuJzln47ljLpcIixcclxuICAgICAgICBzdHJlZXQ6XCLkuJznm7Tpl6jkuJzmlrnpk7bluqcyM0RcIixcclxuICAgICAgICBwZXJzb25pZDpcIjk1MjdcIixcclxuICAgICAgICBwZXJzb25saXN0OltdLFxyXG4gICAgICAgIHByb3ZpY2VzOltcIuWMl+S6rFwiXSxcclxuICAgICAgICBjaXRpZXM6W1wi5biC6L6W5Yy6XCJdLFxyXG4gICAgICAgIGFyZWFzOltcIuS4nOWfjuWMulwiXSxcclxuICAgIH0sXHJcbiAgICByZWFkeTpmdW5jdGlvbigpeyAgICAgICBcclxuICAgICAgICB0aGlzLnByb3ZpY2VzID0gW107XHJcbiAgICAgICAgdmFyIHRlbXBwcm92aWNlcyA9IGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tcIjBcIl07XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICBmb3IodmFyIHByb3ZpY2UgaW4gIGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tcIjBcIl0peyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdGVtcHByb3ZpY2UgPSB7fTtcclxuICAgICAgICAgICAgdGVtcHByb3ZpY2UuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGVtcHByb3ZpY2UuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgIHRlbXBwcm92aWNlLnByb3ZpY2UgPSBhZGRyZXNzbWFwLmFkZHJlc3MuSXRlbXNbXCIwXCJdW3Byb3ZpY2VdO1xyXG4gICAgICAgICAgICB0aGlzLnByb3ZpY2VzLnB1c2godGVtcHByb3ZpY2UpO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAvKiDmmL7npLrlnLDlnYDpgInmi6nnlYzpnaIgKi8gICAgICBcclxuICAgICAgICAgc2hvd2FkZHJlc3NwYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNob3dhZGRyZXNzID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLyog5YWz6Zet5Zyw5Z2A6YCJ5oup55WM6Z2iICovXHJcbiAgICAgICAgIGNsb3NlYWRkcmVzc3BhZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHRoaXMuc2hvd2FkZHJlc3MgPSBmYWxzZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgc2VsZWN0cHJvdmljZTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICB0aGlzLnByb3ZpY2UgPSBlLnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvdmljZSk7XHJcbiAgICAgICAgICAgICAgZm9yKHZhciBwcm92aWNlIG9mIHRoaXMucHJvdmljZXMpe1xyXG4gICAgICAgICAgICAgICAgICBpZihwcm92aWNlLnByb3ZpY2UgPT0gdGhpcy5wcm92aWNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdmljZWluZGV4ID0gcHJvdmljZS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb3ZpY2UuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICBwcm92aWNlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vdGhpcy5wcm92aWNlaW5kZXggPSB0aGlzLnByb3ZpY2VzLmluZGV4T2YodGhpcy5wcm92aWNlKTtcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvdmljZXMuaW5kZXhPZih0aGlzLnByb3ZpY2UpKTtcclxuICAgICAgICAgICAgICB2YXIgY2l0eSA9IFwiMF9cIisgdGhpcy5wcm92aWNlaW5kZXg7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaXRpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAvL3RoaXMuY2l0aWVzID0gYWRkcmVzc21hcC5hZGRyZXNzLkl0ZW1zW2NpdHldO1xyXG4gICAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgZm9yKHZhciBjaXR5IGluIGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tjaXR5XSl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wY2l0eSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICB0ZW1wY2l0eS5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICB0ZW1wY2l0eS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgdGVtcGNpdHkucHJvdmljZSA9IGFkZHJlc3NtYXAuYWRkcmVzcy5JdGVtc1tjaXR5XVtjaXR5XTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jaXRpZXMucHVzaCh0ZW1wY2l0eSk7XHJcbiAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuYXJlYXMgPSBbXCLor7fpgInmi6lcIl07XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RjaXR5OmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgIHRoaXMuY2l0eSA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLmF0dHIudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaXR5KTtcclxuICAgICAgICAgICAgICB0aGlzLmNpdHlpbmRleCA9IHRoaXMuY2l0aWVzLmluZGV4T2YodGhpcy5jaXR5KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNpdGllcy5pbmRleE9mKHRoaXMuY2l0eSkpO1xyXG4gICAgICAgICAgICAgIHZhciBhcmVhID0gXCIwX1wiKyB0aGlzLnByb3ZpY2VpbmRleCtcIl9cIisgdGhpcy5jaXR5aW5kZXg7XHJcbiAgICAgICAgICAgICAgdGhpcy5hcmVhcyA9IFtdO1xyXG4gICAgICAgICAgICAgIHRoaXMuYXJlYXMgPSBhZGRyZXNzbWFwLmFkZHJlc3MuSXRlbXNbYXJlYV07XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RhcmVhOmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgIHRoaXMuYXJlYSA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdLmF0dHIudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcmVhKTtcclxuICAgICAgICAgICAgICB0aGlzLmFyZWFpbmRleCA9IHRoaXMuYXJlYXMuaW5kZXhPZih0aGlzLmFyZWEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJlYXMuaW5kZXhPZih0aGlzLmFyZWEpKTtcclxuICAgICAgICAgfSxcclxuICAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udGl0bGV7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAxY2RmZjtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbn1cclxuLnNlbGVjdGJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjYwcHg7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZWNkMDE7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4ubWFza3tcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgcmlnaHQ6MDtcclxuICAgICAgYm90dG9tOjA7XHJcbiAgICAgIGhlaWdodDo3NDBweDsgIFxyXG4gIH1cclxuICAuaXRlbXN0eWxle1xyXG4gICAgICBmb250LXNpemU6NDBweDtcclxuICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbiAgLmFkZHJlc3NsaXN0e1xyXG4gICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgIGhlaWdodDo2MDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgLmFkZHJlc3NsaXN0aXRlbXtcclxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIH1cclxuICAuYWRkcmVzc2lucHV0e1xyXG4gICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6MXB4O1xyXG4gIH1cclxuICAuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDFjZGZmO1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3RhZGRyZXNzLndlPzIzNGEwZWM0IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNi4yMC4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDUgMTIiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDUgMTIiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA1IDEyIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNSAxMiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgNSAxMiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUgMTIiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSA1IDEyIiwiLypcclxuICpcdOWFqOWbveS4iee6p+WfjuW4guiBlOWKqCBqc+eJiFxyXG4gKi9cclxuZnVuY3Rpb24gRHN5KCkge1xyXG4gICAgdGhpcy5JdGVtcyA9IHt9O1xyXG59XHJcbkRzeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oaWQsIGlBcnJheSkge1xyXG4gICAgdGhpcy5JdGVtc1tpZF0gPSBpQXJyYXk7XHJcbn1cclxuXHJcbkRzeS5wcm90b3R5cGUuRXhpc3RzID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGlmICh0eXBlb2YodGhpcy5JdGVtc1tpZF0pID09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG52YXIgZHN5ID0gbmV3IERzeSgpO1xyXG5cclxuZHN5LmFkZChcIjBcIiwgW1wi5YyX5Lqs5biCXCIsIFwi5aSp5rSl5biCXCIsIFwi5LiK5rW35biCXCIsIFwi6YeN5bqG5biCXCIsIFwi5rKz5YyX55yBXCIsIFwi5bGx6KW/55yBXCIsIFwi5YaF6JKZ5Y+kXCIsIFwi6L695a6B55yBXCIsIFwi5ZCJ5p6X55yBXCIsIFwi6buR6b6Z5rGf55yBXCIsIFwi5rGf6IuP55yBXCIsIFwi5rWZ5rGf55yBXCIsIFwi5a6J5b6955yBXCIsIFwi56aP5bu655yBXCIsIFwi5rGf6KW/55yBXCIsIFwi5bGx5Lic55yBXCIsIFwi5rKz5Y2X55yBXCIsIFwi5rmW5YyX55yBXCIsIFwi5rmW5Y2X55yBXCIsIFwi5bm/5Lic55yBXCIsIFwi5bm/6KW/XCIsIFwi5rW35Y2X55yBXCIsIFwi5Zub5bed55yBXCIsIFwi6LS15bee55yBXCIsIFwi5LqR5Y2X55yBXCIsIFwi6KW/6JePXCIsIFwi6ZmV6KW/55yBXCIsIFwi55SY6IKD55yBXCIsIFwi6Z2S5rW355yBXCIsIFwi5a6B5aSPXCIsIFwi5paw55aGXCIsIFwi6aaZ5rivXCIsIFwi5r6z6ZeoXCIsIFwi5Y+w5rm+55yBXCJdKTtcclxuZHN5LmFkZChcIjBfMF8wXCIsIFtcIuS4nOWfjuWMulwiLCBcIuilv+WfjuWMulwiLCBcIuacnemYs+WMulwiLCBcIuS4sOWPsOWMulwiLCBcIuefs+aZr+WxseWMulwiLCBcIua1t+a3gOWMulwiLCBcIumXqOWktOayn+WMulwiLCBcIuaIv+WxseWMulwiLCBcIumAmuW3nuWMulwiLCBcIumhuuS5ieWMulwiLCBcIuaYjOW5s+WMulwiLCBcIuWkp+WFtOWMulwiLCBcIuaAgOaflOWMulwiLCBcIuW5s+iwt+WMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzBfMVwiLCBbXCLlr4bkupHljr9cIiwgXCLlu7bluobljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8wXCIsIFtcIuW4gui+luWMulwiLCBcIuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzFfMFwiLCBbXCLlkozlubPljLpcIiwgXCLmsrPkuJzljLpcIiwgXCLmsrPopb/ljLpcIiwgXCLljZflvIDljLpcIiwgXCLmsrPljJfljLpcIiwgXCLnuqLmoaXljLpcIiwgXCLkuJzkuL3ljLpcIiwgXCLopb/pnZLljLpcIiwgXCLmtKXljZfljLpcIiwgXCLljJfovrDljLpcIiwgXCLmrabmuIXljLpcIiwgXCLlrp3lnbvljLpcIiwgXCLmu6jmtbfmlrDljLpcIiwgXCLlroHmsrPljLpcIiwgXCLpnZnmtbfljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8xXzFcIiwgW1wi6JOf5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMVwiLCBbXCLluILovpbljLpcIiwgXCLljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yXzBcIiwgW1wi6buE5rWm5Yy6XCIsIFwi5b6Q5rGH5Yy6XCIsIFwi6ZW/5a6B5Yy6XCIsIFwi6Z2Z5a6J5Yy6XCIsIFwi5pmu6ZmA5Yy6XCIsIFwi6Ze45YyX5Yy6XCIsIFwi6Jm55Y+j5Yy6XCIsIFwi5p2o5rWm5Yy6XCIsIFwi6Ze16KGM5Yy6XCIsIFwi5a6d5bGx5Yy6XCIsIFwi5ZiJ5a6a5Yy6XCIsIFwi5rWm5Lic5paw5Yy6XCIsIFwi6YeR5bGx5Yy6XCIsIFwi5p2+5rGf5Yy6XCIsIFwi6Z2S5rWm5Yy6XCIsIFwi5aWJ6LSk5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMl8xXCIsIFtcIuW0h+aYjuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzJcIiwgW1wi5biC6L6W5Yy6XCIsIFwi5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfM18wXCIsIFtcIuS4h+W3nuWMulwiLCBcIua2qumZteWMulwiLCBcIua4neS4reWMulwiLCBcIuWkp+a4oeWPo+WMulwiLCBcIuaxn+WMl+WMulwiLCBcIuaymeWdquWdneWMulwiLCBcIuS5nem+meWdoeWMulwiLCBcIuWNl+WyuOWMulwiLCBcIuWMl+eimuWMulwiLCBcIue2puaxn+WMulwiLCBcIuWkp+i2s+WMulwiLCBcIua4neWMl+WMulwiLCBcIuW3tOWNl+WMulwiLCBcIum7lOaxn+WMulwiLCBcIumVv+Wvv+WMulwiLCBcIuaxn+a0peWMulwiLCBcIuWQiOW3neWMulwiLCBcIuawuOW3neWMulwiLCBcIuWNl+W3neWMulwiLCBcIueSp+WxseWMulwiLCBcIumTnOaigeWMulwiLCBcIua9vOWNl+WMulwiLCBcIuiNo+aYjOWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzNfMVwiLCBbXCLmooHlubPljr9cIiwgXCLln47lj6Pljr9cIiwgXCLkuLDpg73ljr9cIiwgXCLlnqvmsZ/ljr9cIiwgXCLmrabpmobljr9cIiwgXCLlv6Dljr9cIiwgXCLlvIDljr9cIiwgXCLkupHpmLPljr9cIiwgXCLlpYnoioLljr9cIiwgXCLlt6vlsbHljr9cIiwgXCLlt6vmuqrljr9cIiwgXCLnn7Pmn7HlnJ/lrrbml4/oh6rmsrvljr9cIiwgXCLnp4DlsbHlnJ/lrrbml4/oi5fml4/oh6rmsrvljr9cIiwgXCLphYnpmLPlnJ/lrrbml4/oi5fml4/oh6rmsrvljr9cIiwgXCLlva3msLToi5fml4/lnJ/lrrbml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8zXCIsIFtcIuW4gui+luWMulwiLCBcIuWOv1wiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF80XzBcIiwgW1wi6ZW/5a6J5Yy6XCIsIFwi5qGl6KW/5Yy6XCIsIFwi5paw5Y2O5Yy6XCIsIFwi5LqV6ZmJ55+/5Yy6XCIsIFwi6KOV5Y2O5Yy6XCIsIFwi6JeB5Z+O5Yy6XCIsIFwi6bm/5rOJ5Yy6XCIsIFwi5qC+5Z+O5Yy6XCIsIFwi5LqV6ZmJ5Y6/XCIsIFwi5q2j5a6a5Y6/XCIsIFwi6KGM5ZSQ5Y6/XCIsIFwi54G15a+/5Y6/XCIsIFwi6auY6YKR5Y6/XCIsIFwi5rex5rO95Y6/XCIsIFwi6LWe55qH5Y6/XCIsIFwi5peg5p6B5Y6/XCIsIFwi5bmz5bGx5Y6/XCIsIFwi5YWD5rCP5Y6/XCIsIFwi6LW15Y6/XCIsIFwi5pmL5bee5biCXCIsIFwi5paw5LmQ5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNF8xXCIsIFtcIuahpeS4nOWMulwiLCBcIuahpeilv+WMulwiLCBcIuWuo+WMluWMulwiLCBcIuS4i+iKseWbreWMulwiLCBcIuWuo+WMluWOv1wiLCBcIuW8oOWMl+WOv1wiLCBcIuW6t+S/neWOv1wiLCBcIuayvea6kOWOv1wiLCBcIuWwmuS5ieWOv1wiLCBcIuiUmuWOv1wiLCBcIumYs+WOn+WOv1wiLCBcIuaAgOWuieWOv1wiLCBcIuS4h+WFqOWOv1wiLCBcIuaAgOadpeWOv1wiLCBcIua2v+m5v+WOv1wiLCBcIui1pOWfjuWOv1wiLCBcIuW0h+ekvOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzRfMlwiLCBbXCLlj4zmoaXljLpcIiwgXCLlj4zmu6bljLpcIiwgXCLpubDmiYvokKXlrZDnn7/ljLpcIiwgXCLmib/lvrfljr9cIiwgXCLlhbTpmobljr9cIiwgXCLlubPms4nljr9cIiwgXCLmu6blubPljr9cIiwgXCLpmobljJbljr9cIiwgXCLkuLDlroHmu6Hml4/oh6rmsrvljr9cIiwgXCLlrr3ln47mu6Hml4/oh6rmsrvljr9cIiwgXCLlm7TlnLrmu6Hml4/okpnlj6Tml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF80XzNcIiwgW1wi5rW35riv5Yy6XCIsIFwi5bGx5rW35YWz5Yy6XCIsIFwi5YyX5oi05rKz5Yy6XCIsIFwi5oqa5a6B5Yy6XCIsIFwi6Z2S6b6Z5ruh5peP6Ieq5rK75Y6/XCIsIFwi5piM6buO5Y6/XCIsIFwi5Y2i6b6Z5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfNF80XCIsIFtcIui3r+WNl+WMulwiLCBcIui3r+WMl+WMulwiLCBcIuWPpOWGtuWMulwiLCBcIuW8gOW5s+WMulwiLCBcIuS4sOWNl+WMulwiLCBcIuS4sOa2puWMulwiLCBcIuabueWmg+eUuOWMulwiLCBcIua7puWOv1wiLCBcIua7puWNl+WOv1wiLCBcIuS5kOS6reWOv1wiLCBcIui/geilv+WOv1wiLCBcIueOieeUsOWOv1wiLCBcIumBteWMluW4glwiLCBcIui/geWuieW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzRfNVwiLCBbXCLlronmrKHljLpcIiwgXCLlub/pmLPljLpcIiwgXCLlm7rlronljr9cIiwgXCLmsLjmuIXljr9cIiwgXCLpppnmsrPljr9cIiwgXCLlpKfln47ljr9cIiwgXCLmloflronljr9cIiwgXCLlpKfljoLlm57ml4/oh6rmsrvljr9cIiwgXCLpnLjlt57luIJcIiwgXCLkuInmsrPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF80XzZcIiwgW1wi56ue56eA5Yy6XCIsIFwi6I6y5rGg5Yy6XCIsIFwi5ruh5Z+O5Yy6XCIsIFwi5riF6IuR5Yy6XCIsIFwi5b6Q5rC05Yy6XCIsIFwi5rae5rC05Y6/XCIsIFwi6Zic5bmz5Y6/XCIsIFwi5a6a5YW05Y6/XCIsIFwi5ZSQ5Y6/XCIsIFwi6auY6Ziz5Y6/XCIsIFwi5a655Z+O5Y6/XCIsIFwi5rae5rqQ5Y6/XCIsIFwi5pyb6YO95Y6/XCIsIFwi5a6J5paw5Y6/XCIsIFwi5piT5Y6/XCIsIFwi5puy6Ziz5Y6/XCIsIFwi6KCh5Y6/XCIsIFwi6aG65bmz5Y6/XCIsIFwi5Y2a6YeO5Y6/XCIsIFwi6ZuE5Y6/XCIsIFwi5ra/5bee5biCXCIsIFwi5a6J5Zu95biCXCIsIFwi6auY56KR5bqX5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNF83XCIsIFtcIuahg+WfjuWMulwiLCBcIuaeo+W8uuWOv1wiLCBcIuatpumCkeWOv1wiLCBcIuatpuW8uuWOv1wiLCBcIumltumYs+WOv1wiLCBcIuWuieW5s+WOv1wiLCBcIuaVheWfjuWOv1wiLCBcIuaZr+WOv1wiLCBcIumYnOWfjuWOv1wiLCBcIuWGgOW3nuW4glwiLCBcIua3seW3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzRfOFwiLCBbXCLmlrDljY7ljLpcIiwgXCLov5DmsrPljLpcIiwgXCLmsqfljr9cIiwgXCLpnZLljr9cIiwgXCLkuJzlhYnljr9cIiwgXCLmtbflhbTljr9cIiwgXCLnm5DlsbHljr9cIiwgXCLogoPlroHljr9cIiwgXCLljZfnmq7ljr9cIiwgXCLlkLTmoaXljr9cIiwgXCLnjK7ljr9cIiwgXCLlrZ/mnZHlm57ml4/oh6rmsrvljr9cIiwgXCLms4rlpLTluIJcIiwgXCLku7vkuJjluIJcIiwgXCLpu4TpqoXluIJcIiwgXCLmsrPpl7TluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF80XzlcIiwgW1wi5qGl5Lic5Yy6XCIsIFwi5qGl6KW/5Yy6XCIsIFwi6YKi5Y+w5Y6/XCIsIFwi5Li05Z+O5Y6/XCIsIFwi5YaF5LiY5Y6/XCIsIFwi5p+P5Lmh5Y6/XCIsIFwi6ZqG5bCn5Y6/XCIsIFwi5Lu75Y6/XCIsIFwi5Y2X5ZKM5Y6/XCIsIFwi5a6B5pmL5Y6/XCIsIFwi5beo6bm/5Y6/XCIsIFwi5paw5rKz5Y6/XCIsIFwi5bm/5a6X5Y6/XCIsIFwi5bmz5Lmh5Y6/XCIsIFwi5aiB5Y6/XCIsIFwi5riF5rKz5Y6/XCIsIFwi5Li06KW/5Y6/XCIsIFwi5Y2X5a6r5biCXCIsIFwi5rKZ5rKz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNF8xMFwiLCBbXCLpgq/lsbHljLpcIiwgXCLkuJvlj7DljLpcIiwgXCLlpI3lhbTljLpcIiwgXCLls7Dls7Dnn7/ljLpcIiwgXCLpgq/pg7jljr9cIiwgXCLkuLTmvLPljr9cIiwgXCLmiJDlronljr9cIiwgXCLlpKflkI3ljr9cIiwgXCLmtonljr9cIiwgXCLno4Hljr9cIiwgXCLogqXkuaHljr9cIiwgXCLmsLjlubTljr9cIiwgXCLpgrHljr9cIiwgXCLpuKHms73ljr9cIiwgXCLlub/lubPljr9cIiwgXCLppobpmbbljr9cIiwgXCLprY/ljr9cIiwgXCLmm7Llkajljr9cIiwgXCLmrablronluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF80XzExXCIsIFtcIuWumuW3nuW4glwiLCBcIui+m+mbhuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzRcIiwgW1wi55+z5a625bqE5biCXCIsIFwi5byg5a625Y+j5biCXCIsIFwi5om/5b635biCXCIsIFwi56em55qH5bKb5biCXCIsIFwi5ZSQ5bGx5biCXCIsIFwi5buK5Z2K5biCXCIsIFwi5L+d5a6a5biCXCIsIFwi6KGh5rC05biCXCIsIFwi5rKn5bee5biCXCIsIFwi6YKi5Y+w5biCXCIsIFwi6YKv6YO45biCXCIsIFwi55yB55u06L6W5Y6/57qn6KGM5pS/5Yy65YiSXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzVfMFwiLCBbXCLlsI/lupfljLpcIiwgXCLov47ms73ljLpcIiwgXCLmnY/oirHlsq3ljLpcIiwgXCLlsJbojYnlnarljLpcIiwgXCLkuIfmn4/mnpfljLpcIiwgXCLmmYvmupDljLpcIiwgXCLmuIXlvpDljr9cIiwgXCLpmLPmm7Lljr9cIiwgXCLlqITng6bljr9cIiwgXCLlj6TkuqTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF81XzFcIiwgW1wi5pyU5Z+O5Yy6XCIsIFwi5bmz6bKB5Yy6XCIsIFwi5bGx6Zi05Y6/XCIsIFwi5bqU5Y6/XCIsIFwi5Y+z546J5Y6/XCIsIFwi5oCA5LuB5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfNV8yXCIsIFtcIuWfjuWMulwiLCBcIuefv+WMulwiLCBcIuWNl+mDiuWMulwiLCBcIuaWsOiNo+WMulwiLCBcIumYs+mrmOWOv1wiLCBcIuWkqemVh+WOv1wiLCBcIuW5v+eBteWOv1wiLCBcIueBteS4mOWOv1wiLCBcIua1kea6kOWOv1wiLCBcIuW3puS6keWOv1wiLCBcIuWkp+WQjOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzVfM1wiLCBbXCLln47ljLpcIiwgXCLnn7/ljLpcIiwgXCLpg4rljLpcIiwgXCLlubPlrprljr9cIiwgXCLnm4Lljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF81XzRcIiwgW1wi5Z+O5Yy6XCIsIFwi6YOK5Yy6XCIsIFwi6ZW/5rK75Y6/XCIsIFwi6KWE5Z6j5Y6/XCIsIFwi5bGv55WZ5Y6/XCIsIFwi5bmz6aG65Y6/XCIsIFwi6buO5Z+O5Y6/XCIsIFwi5aO25YWz5Y6/XCIsIFwi6ZW/5a2Q5Y6/XCIsIFwi5q2m5Lmh5Y6/XCIsIFwi5rKB5Y6/XCIsIFwi5rKB5rqQ5Y6/XCIsIFwi5r2e5Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNV81XCIsIFtcIuWfjuWMulwiLCBcIuaygeawtOWOv1wiLCBcIumYs+WfjuWOv1wiLCBcIumZteW3neWOv1wiLCBcIuazveW3nuWOv1wiLCBcIumrmOW5s+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzVfNlwiLCBbXCLlv7vlupzljLpcIiwgXCLlrpropYTljr9cIiwgXCLkupTlj7Dljr9cIiwgXCLku6Pljr9cIiwgXCLnuYHls5nljr9cIiwgXCLlroHmrabljr9cIiwgXCLpnZnkuZDljr9cIiwgXCLnpZ7msaDljr9cIiwgXCLkupTlr6jljr9cIiwgXCLlsqLlsprljr9cIiwgXCLmsrPmm7Lljr9cIiwgXCLkv53lvrfljr9cIiwgXCLlgY/lhbPljr9cIiwgXCLljp/lubPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF81XzdcIiwgW1wi5qaG5qyh5Yy6XCIsIFwi5qaG5qyh5Yy6XCIsIFwi5qaG56S+5Y6/XCIsIFwi5bem5p2D5Y6/XCIsIFwi5ZKM6aG65Y6/XCIsIFwi5piU6Ziz5Y6/XCIsIFwi5a+/6Ziz5Y6/XCIsIFwi5aSq6LC35Y6/XCIsIFwi56WB5Y6/XCIsIFwi5bmz6YGl5Y6/XCIsIFwi54G155+z5Y6/XCIsIFwi5LuL5LyR5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNV84XCIsIFtcIuWwp+mDveWMulwiLCBcIuabsuayg+WOv1wiLCBcIue/vOWfjuWOv1wiLCBcIuilhOaxvuWOv1wiLCBcIua0qua0nuWOv1wiLCBcIuWPpOWOv1wiLCBcIuWuieazveWOv1wiLCBcIua1ruWxseWOv1wiLCBcIuWQieWOv1wiLCBcIuS5oeWugeWOv1wiLCBcIuWkp+WugeWOv1wiLCBcIumasOWOv1wiLCBcIuawuOWSjOWOv1wiLCBcIuiSsuWOv1wiLCBcIuaxvuilv+WOv1wiLCBcIuS+r+mprOW4glwiLCBcIumcjeW3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzVfOVwiLCBbXCLnprvnn7PljLpcIiwgXCLmlofmsLTljr9cIiwgXCLkuqTln47ljr9cIiwgXCLlhbTljr9cIiwgXCLkuLTljr9cIiwgXCLmn7Pmnpfljr9cIiwgXCLnn7Pmpbzljr9cIiwgXCLlsprljr9cIiwgXCLmlrnlsbHljr9cIiwgXCLkuK3pmLPljr9cIiwgXCLkuqTlj6Pljr9cIiwgXCLlrZ3kuYnluIJcIiwgXCLmsb7pmLPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF81XzEwXCIsIFtcIuebkOa5luWMulwiLCBcIuS4tOeMl+WOv1wiLCBcIuS4h+iNo+WOv1wiLCBcIumXu+WWnOWOv1wiLCBcIueot+WxseWOv1wiLCBcIuaWsOe7m+WOv1wiLCBcIue7m+WOv1wiLCBcIuWeo+absuWOv1wiLCBcIuWkj+WOv1wiLCBcIuW5s+mZhuWOv1wiLCBcIuiKruWfjuWOv1wiLCBcIuawuOa1juW4glwiLCBcIuays+a0peW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzVcIiwgW1wi5aSq5Y6f5biCXCIsIFwi5pyU5bee5biCXCIsIFwi5aSn5ZCM5biCXCIsIFwi6Ziz5rOJ5biCXCIsIFwi6ZW/5rK75biCXCIsIFwi5pmL5Z+O5biCXCIsIFwi5b+75bee5biCXCIsIFwi5pmL5Lit5biCXCIsIFwi5Li05rG+5biCXCIsIFwi5ZCV5qKB5biCXCIsIFwi6L+Q5Z+O5biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzZfMFwiLCBbXCLmlrDln47ljLpcIiwgXCLlm57msJHljLpcIiwgXCLnjonms4nljLpcIiwgXCLotZvnvZXljLpcIiwgXCLlnJ/pu5jnibnlt6bml5dcIiwgXCLmiZjlhYvmiZjljr9cIiwgXCLlkozmnpfmoLzlsJTljr9cIiwgXCLmuIXmsLTmsrPljr9cIiwgXCLmrablt53ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF82XzFcIiwgW1wi5Lic5rKz5Yy6XCIsIFwi5piG6YO95LuR5Yy6XCIsIFwi6Z2S5bGx5Yy6XCIsIFwi55+z5ouQ5Yy6XCIsIFwi55m95LqR6YSC5Y2a55+/5Yy6XCIsIFwi5Lmd5Y6f5Yy6XCIsIFwi5Zyf6buY54m55Y+z5peXXCIsIFwi5Zu66Ziz5Y6/XCIsIFwi6L6+5bCU572V6IyC5piO5a6J6IGU5ZCI5peXXCJdKTtcclxuZHN5LmFkZChcIjBfNl8yXCIsIFtcIua1t+WLg+a5vuWMulwiLCBcIua1t+WNl+WMulwiLCBcIuS5jOi+vuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzZfM1wiLCBbXCLnuqLlsbHljLpcIiwgXCLlhYPlrp3lsbHljLpcIiwgXCLmnb7lsbHljLpcIiwgXCLpmL/psoHnp5HlsJTmsoHml5dcIiwgXCLlt7Tmnpflt6bml5dcIiwgXCLlt7Tmnpflj7Pml5dcIiwgXCLmnpfopb/ljr9cIiwgXCLlhYvku4DlhYvohb7ml5dcIiwgXCLnv4HniZvnibnml5dcIiwgXCLlloDllofmsoHml5dcIiwgXCLlroHln47ljr9cIiwgXCLmlZbmsYnml5dcIl0pO1xyXG5kc3kuYWRkKFwiMF82XzRcIiwgW1wi56eR5bCU5rKB5Yy6XCIsIFwi56eR5bCU5rKB5bem57+85Lit5peXXCIsIFwi56eR5bCU5rKB5bem57+85ZCO5peXXCIsIFwi5byA6bKB5Y6/XCIsIFwi5bqT5Lym5peXXCIsIFwi5aWI5pu85peXXCIsIFwi5omO6bKB54m55peXXCIsIFwi6ZyN5p6X6YOt5YuS5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNl81XCIsIFtcIua1t+aLieWwlOWMulwiLCBcIuaJjui1ieivuuWwlOWMulwiLCBcIumYv+iNo+aXl1wiLCBcIuiOq+WKm+i+vueTpui+vuaWoeWwlOaXj+iHquayu+aXl1wiLCBcIumEguS8puaYpeiHquayu+aXl1wiLCBcIumEgua4qeWFi+aXj+iHquayu+aXl1wiLCBcIumZiOW3tOWwlOiZjuaXl1wiLCBcIuaWsOW3tOWwlOiZjuW3puaXl1wiLCBcIuaWsOW3tOWwlOiZjuWPs+aXl1wiLCBcIua7oea0sumHjOW4glwiLCBcIueJmeWFi+efs+W4glwiLCBcIuaJjuWFsOWxr+W4glwiLCBcIumineWwlOWPpOe6s+W4glwiLCBcIuagueays+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzZfNlwiLCBbXCLkuJzog5zljLpcIiwgXCLovr7mi4nnibnml5dcIiwgXCLlh4bmoLzlsJTml5dcIiwgXCLphILmiZjlhYvliY3ml5dcIiwgXCLphILmiZjlhYvml5dcIiwgXCLmna3plKbml5dcIiwgXCLkuYzlrqHml5dcIiwgXCLkvIrph5HpnI3mtJvml5dcIl0pO1xyXG5kc3kuYWRkKFwiMF82XzdcIiwgW1wi6ZuG5a6B5Yy6XCIsIFwi5Y2T6LWE5Y6/XCIsIFwi5YyW5b635Y6/XCIsIFwi5ZWG6YO95Y6/XCIsIFwi5YW05ZKM5Y6/XCIsIFwi5YeJ5Z+O5Y6/XCIsIFwi5a+f5ZOI5bCU5Y+z57+85YmN5peXXCIsIFwi5a+f5ZOI5bCU5Y+z57+85Lit5peXXCIsIFwi5a+f5ZOI5bCU5Y+z57+85ZCO5peXXCIsIFwi5Zub5a2Q546L5peXXCIsIFwi5Liw6ZWH5biCXCJdKTtcclxuZHN5LmFkZChcIjBfNl84XCIsIFtcIuS4tOays+WMulwiLCBcIuS6lOWOn+WOv1wiLCBcIuejtOWPo+WOv1wiLCBcIuS5jOaLieeJueWJjeaXl1wiLCBcIuS5jOaLieeJueS4reaXl1wiLCBcIuS5jOaLieeJueWQjuaXl1wiLCBcIuadremUpuWQjuaXl1wiXSk7XHJcbmRzeS5hZGQoXCIwXzZfOVwiLCBbXCLkuYzlhbDmtannibnluIJcIiwgXCLpmL/lsJTlsbHluIJcIiwgXCLnp5HlsJTmsoHlj7Pnv7zliY3ml5dcIiwgXCLnp5HlsJTmsoHlj7Pnv7zkuK3ml5dcIiwgXCLmiY7otYnnibnml5dcIiwgXCLnqoHms4nljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF82XzEwXCIsIFtcIuS6jOi/nua1qeeJueW4glwiLCBcIumUoeael+a1qeeJueW4glwiLCBcIumYv+W3tOWYjuaXl1wiLCBcIuiLj+WwvOeJueW3puaXl1wiLCBcIuiLj+WwvOeJueWPs+aXl1wiLCBcIuS4nOS5jOePoOephuaygeaXl1wiLCBcIuilv+S5jOePoOephuaygeaXl1wiLCBcIuWkquS7huWvuuaXl1wiLCBcIumVtum7hOaXl1wiLCBcIuato+mVtueZveaXl1wiLCBcIuato+iTneaXl1wiLCBcIuWkmuS8puWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzZfMTFcIiwgW1wi6Zi/5ouJ5ZaE5bem5peXXCIsIFwi6Zi/5ouJ5ZaE5Y+z5peXXCIsIFwi6aKd5rWO57qz5peXXCJdKTtcclxuZHN5LmFkZChcIjBfNlwiLCBbXCLlkbzlkozmtannibnluIJcIiwgXCLljIXlpLTluIJcIiwgXCLkuYzmtbfluIJcIiwgXCLotaTls7DluIJcIiwgXCLpgJrovr3luIJcIiwgXCLlkbzkvKbotJ3lsJTluIJcIiwgXCLphILlsJTlpJrmlq/luIJcIiwgXCLkuYzlhbDlr5/luIPluIJcIiwgXCLlt7Tlvabmt5blsJTluIJcIiwgXCLlhbTlronnm59cIiwgXCLplKHmnpfpg63li5Lnm59cIiwgXCLpmL/mi4nlloTnm59cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfN18wXCIsIFtcIuWSjOW5s+WMulwiLCBcIuayiOays+WMulwiLCBcIuWkp+S4nOWMulwiLCBcIueah+WnkeWMulwiLCBcIumTgeilv+WMulwiLCBcIuiLj+WutuWxr+WMulwiLCBcIua1keWNl+WMulwiLCBcIuayiOWMl+aWsOWMulwiLCBcIuS6jua0quWMulwiLCBcIui+veS4reWOv1wiLCBcIuW6t+W5s+WOv1wiLCBcIuazleW6k+WOv1wiLCBcIuaWsOawkeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfMVwiLCBbXCLlj4zloZTljLpcIiwgXCLpvpnln47ljLpcIiwgXCLmnJ3pmLPljr9cIiwgXCLlu7rlubPljr9cIiwgXCLlloDllofmsoHlt6bnv7zokpnlj6Tml4/oh6rmsrvljr9cIiwgXCLljJfnpajluIJcIiwgXCLlh4zmupDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzJcIiwgW1wi5rW35bee5Yy6XCIsIFwi5paw6YKx5Yy6XCIsIFwi5aSq5bmz5Yy6XCIsIFwi5riF5rKz6Zeo5Yy6XCIsIFwi57uG5rKz5Yy6XCIsIFwi6Zic5paw6JKZ5Y+k5peP6Ieq5rK75Y6/XCIsIFwi5b2w5q2m5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfN18zXCIsIFtcIumTtuW3nuWMulwiLCBcIua4heays+WMulwiLCBcIumTgeWyreWOv1wiLCBcIuilv+S4sOWOv1wiLCBcIuaYjOWbvuWOv1wiLCBcIuiwg+WFteWxseW4glwiLCBcIuW8gOWOn+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfNFwiLCBbXCLmlrDmiprljLpcIiwgXCLkuJzmtLLljLpcIiwgXCLmnJvoirHljLpcIiwgXCLpobrln47ljLpcIiwgXCLmiprpobrljr9cIiwgXCLmlrDlrr7mu6Hml4/oh6rmsrvljr9cIiwgXCLmuIXljp/mu6Hml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF83XzVcIiwgW1wi5bmz5bGx5Yy6XCIsIFwi5rqq5rmW5Yy6XCIsIFwi5piO5bGx5Yy6XCIsIFwi5Y2X6Iqs5Yy6XCIsIFwi5pys5rqq5ruh5peP6Ieq5rK75Y6/XCIsIFwi5qGT5LuB5ruh5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfN182XCIsIFtcIueZveWhlOWMulwiLCBcIuaWh+Wco+WMulwiLCBcIuWuj+S8n+WMulwiLCBcIuW8k+mVv+WyreWMulwiLCBcIuWkquWtkOays+WMulwiLCBcIui+vemYs+WOv1wiLCBcIueBr+WhlOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfN1wiLCBbXCLpk4HkuJzljLpcIiwgXCLpk4Hopb/ljLpcIiwgXCLnq4vlsbHljLpcIiwgXCLljYPlsbHljLpcIiwgXCLlj7Dlronljr9cIiwgXCLlsqvlsqnmu6Hml4/oh6rmsrvljr9cIiwgXCLmtbfln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF83XzhcIiwgW1wi5YWD5a6d5Yy6XCIsIFwi5oyv5YW05Yy6XCIsIFwi5oyv5a6J5Yy6XCIsIFwi5a6955S45ruh5peP6Ieq5rK75Y6/XCIsIFwi5Lic5riv5biCXCIsIFwi5Yek5Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfN185XCIsIFtcIuS4reWxseWMulwiLCBcIuilv+Wyl+WMulwiLCBcIuaymeays+WPo+WMulwiLCBcIueUmOS6leWtkOWMulwiLCBcIuaXhemhuuWPo+WMulwiLCBcIumHkeW3nuWMulwiLCBcIumVv+a1t+WOv1wiLCBcIueTpuaIv+W6l+W4glwiLCBcIuaZruWFsOW6l+W4glwiLCBcIuW6hOays+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfMTBcIiwgW1wi56uZ5YmN5Yy6XCIsIFwi6KW/5biC5Yy6XCIsIFwi6bKF6bG85ZyI5Yy6XCIsIFwi6ICB6L655Yy6XCIsIFwi55uW5bee5biCXCIsIFwi5aSn55+z5qGl5biCXCJdKTtcclxuZHN5LmFkZChcIjBfN18xMVwiLCBbXCLlj4zlj7DlrZDljLpcIiwgXCLlhbTpmoblj7DljLpcIiwgXCLlpKfmtLzljr9cIiwgXCLnm5jlsbHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF83XzEyXCIsIFtcIuWPpOWhlOWMulwiLCBcIuWHjOays+WMulwiLCBcIuWkquWSjOWMulwiLCBcIum7keWxseWOv1wiLCBcIuS5ieWOv1wiLCBcIuWHjOa1t+W4glwiLCBcIuWMl+mVh+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzdfMTNcIiwgW1wi6L+e5bGx5Yy6XCIsIFwi6b6Z5riv5Yy6XCIsIFwi5Y2X56Wo5Yy6XCIsIFwi57ul5Lit5Y6/XCIsIFwi5bu65piM5Y6/XCIsIFwi5YW05Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfN1wiLCBbXCLmsojpmLPluIJcIiwgXCLmnJ3pmLPluIJcIiwgXCLpmJzmlrDluIJcIiwgXCLpk4Hlsq3luIJcIiwgXCLmiprpobrluIJcIiwgXCLmnKzmuqrluIJcIiwgXCLovr3pmLPluIJcIiwgXCLpno3lsbHluIJcIiwgXCLkuLnkuJzluIJcIiwgXCLlpKfov57luIJcIiwgXCLokKXlj6PluIJcIiwgXCLnm5jplKbluIJcIiwgXCLplKblt57luIJcIiwgXCLokavoiqblspvluIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfOF8wXCIsIFtcIuWNl+WFs+WMulwiLCBcIuWuveWfjuWMulwiLCBcIuacnemYs+WMulwiLCBcIuS6jOmBk+WMulwiLCBcIue7v+WbreWMulwiLCBcIuWPjOmYs+WMulwiLCBcIuS5neWPsOWMulwiLCBcIuWGnOWuieWOv1wiLCBcIuamhuagkeW4glwiLCBcIuW+t+aDoOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzhfMVwiLCBbXCLmtK7ljJfljLpcIiwgXCLplYfotYnljr9cIiwgXCLpgJrmpobljr9cIiwgXCLmtK7ljZfluIJcIiwgXCLlpKflronluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF84XzJcIiwgW1wi5a6B5rGf5Yy6XCIsIFwi5YmN6YOt5bCU572X5pav6JKZ5Y+k5peP6Ieq5rK75Y6/XCIsIFwi6ZW/5bKt5Y6/XCIsIFwi5Lm+5a6J5Y6/XCIsIFwi5om25L2Z5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOF8zXCIsIFtcIuaYjOmCkeWMulwiLCBcIum+mea9reWMulwiLCBcIuiIueiQpeWMulwiLCBcIuS4sOa7oeWMulwiLCBcIuawuOWQieWOv1wiLCBcIuibn+ays+W4glwiLCBcIuahpueUuOW4glwiLCBcIuiIkuWFsOW4glwiLCBcIuejkOefs+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzhfNFwiLCBbXCLpk4Hopb/ljLpcIiwgXCLpk4HkuJzljLpcIiwgXCLmoqjmoJHljr9cIiwgXCLkvIrpgJrmu6Hml4/oh6rmsrvljr9cIiwgXCLlhazkuLvlsq3luIJcIiwgXCLlj4zovr3luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF84XzVcIiwgW1wi6b6Z5bGx5Yy6XCIsIFwi6KW/5a6J5Yy6XCIsIFwi5Lic5Liw5Y6/XCIsIFwi5Lic6L695Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfOF82XCIsIFtcIuS4nOaYjOWMulwiLCBcIuS6jOmBk+axn+WMulwiLCBcIumAmuWMluWOv1wiLCBcIui+ieWNl+WOv1wiLCBcIuafs+ays+WOv1wiLCBcIuaiheays+WPo+W4glwiLCBcIumbhuWuieW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzhfN1wiLCBbXCLmtZHmsZ/ljLpcIiwgXCLmsZ/mupDljLpcIiwgXCLmiprmnb7ljr9cIiwgXCLpnZblrofljr9cIiwgXCLplb/nmb3mnJ3pspzml4/oh6rmsrvljr9cIiwgXCLkuLTmsZ/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF84XzhcIiwgW1wi5bu25ZCJ5biCXCIsIFwi5Zu+5Lus5biCXCIsIFwi5pWm5YyW5biCXCIsIFwi54+y5pil5biCXCIsIFwi6b6Z5LqV5biCXCIsIFwi5ZKM6b6Z5biCXCIsIFwi5rGq5riF5Y6/XCIsIFwi5a6J5Zu+5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfOFwiLCBbXCLplb/mmKXluIJcIiwgXCLnmb3ln47luIJcIiwgXCLmnb7ljp/luIJcIiwgXCLlkInmnpfluIJcIiwgXCLlm5vlubPluIJcIiwgXCLovr3mupDluIJcIiwgXCLpgJrljJbluIJcIiwgXCLnmb3lsbHluIJcIiwgXCLlu7bovrnmnJ3pspzml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfOV8wXCIsIFtcIumBk+mHjOWMulwiLCBcIuWNl+Wyl+WMulwiLCBcIumBk+WkluWMulwiLCBcIuW5s+aIv+WMulwiLCBcIuadvuWMl+WMulwiLCBcIummmeWdiuWMulwiLCBcIuWRvOWFsOWMulwiLCBcIumYv+WfjuWMulwiLCBcIuWPjOWfjuWMulwiLCBcIuS+neWFsOWOv1wiLCBcIuaWueato+WOv1wiLCBcIuWuvuWOv1wiLCBcIuW3tOW9puWOv1wiLCBcIuacqOWFsOWOv1wiLCBcIumAmuays+WOv1wiLCBcIuW7tuWvv+WOv1wiLCBcIuWwmuW/l+W4glwiLCBcIuS6lOW4uOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzlfMVwiLCBbXCLpvpnmspnljLpcIiwgXCLlu7rljY7ljLpcIiwgXCLpk4HplIvljLpcIiwgXCLmmILmmILmuqrljLpcIiwgXCLlr4zmi4nlsJTln7rljLpcIiwgXCLnor7lrZDlsbHljLpcIiwgXCLmooXph4zmlq/ovr7mlqHlsJTml4/ljLpcIiwgXCLpvpnmsZ/ljr9cIiwgXCLkvp3lronljr9cIiwgXCLms7DmnaXljr9cIiwgXCLnlJjljZfljr9cIiwgXCLlr4zoo5Xljr9cIiwgXCLlhYvlsbHljr9cIiwgXCLlhYvkuJzljr9cIiwgXCLmi5zms4nljr9cIiwgXCLorrfmsrPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzJcIiwgW1wi5paw5YW05Yy6XCIsIFwi5qGD5bGx5Yy6XCIsIFwi6IyE5a2Q5rKz5Yy6XCIsIFwi5YuD5Yip5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfOV8zXCIsIFtcIueIsei+ieWMulwiLCBcIuWrqeaxn+WOv1wiLCBcIumAiuWFi+WOv1wiLCBcIuWtmeWQtOWOv1wiLCBcIuWMl+WuieW4glwiLCBcIuS6lOWkp+i/nuaxoOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzlfNFwiLCBbXCLokKjlsJTlm77ljLpcIiwgXCLpvpnlh6TljLpcIiwgXCLorqnog6Hot6/ljLpcIiwgXCLnuqLlspfljLpcIiwgXCLlpKflkIzljLpcIiwgXCLogoflt57ljr9cIiwgXCLogofmupDljr9cIiwgXCLmnpfnlLjljr9cIiwgXCLmnZzlsJTkvK/nibnokpnlj6Tml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF85XzVcIiwgW1wi5ZCR6Ziz5Yy6XCIsIFwi5bel5Yac5Yy6XCIsIFwi5Y2X5bGx5Yy6XCIsIFwi5YW05a6J5Yy6XCIsIFwi5Lic5bGx5Yy6XCIsIFwi5YW05bGx5Yy6XCIsIFwi6JCd5YyX5Y6/XCIsIFwi57ul5ruo5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfOV82XCIsIFtcIuS8iuaYpeWMulwiLCBcIuWNl+WylOWMulwiLCBcIuWPi+WlveWMulwiLCBcIuilv+ael+WMulwiLCBcIue/oOWzpuWMulwiLCBcIuaWsOmdkuWMulwiLCBcIue+jua6quWMulwiLCBcIumHkeWxseWxr+WMulwiLCBcIuS6lOiQpeWMulwiLCBcIuS5jOmprOays+WMulwiLCBcIuaxpOaXuuays+WMulwiLCBcIuW4puWyreWMulwiLCBcIuS5jOS8iuWyreWMulwiLCBcIue6ouaYn+WMulwiLCBcIuS4iueUmOWyreWMulwiLCBcIuWYieiNq+WOv1wiLCBcIumTgeWKm+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzlfN1wiLCBbXCLlkJHpmLPljLpcIiwgXCLliY3ov5vljLpcIiwgXCLkuJzpo47ljLpcIiwgXCLpg4rljLpcIiwgXCLmoabljZfljr9cIiwgXCLmoablt53ljr9cIiwgXCLmsaTljp/ljr9cIiwgXCLmiprov5zljr9cIiwgXCLlkIzmsZ/luIJcIiwgXCLlr4zplKbluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzhcIiwgW1wi5bCW5bGx5Yy6XCIsIFwi5bKt5Lic5Yy6XCIsIFwi5Zub5pa55Y+w5Yy6XCIsIFwi5a6d5bGx5Yy6XCIsIFwi6ZuG6LSk5Y6/XCIsIFwi5Y+L6LCK5Y6/XCIsIFwi5a6d5riF5Y6/XCIsIFwi6aW25rKz5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfOV85XCIsIFtcIum4oeWGoOWMulwiLCBcIuaBkuWxseWMulwiLCBcIua7tOmBk+WMulwiLCBcIuaiqOagkeWMulwiLCBcIuWfjuWtkOays+WMulwiLCBcIum6u+WxseWMulwiLCBcIum4oeS4nOWOv1wiLCBcIuiZjuael+W4glwiLCBcIuWvhuWxseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzlfMTBcIiwgW1wi5Lic5a6J5Yy6XCIsIFwi6Ziz5piO5Yy6XCIsIFwi54ix5rCR5Yy6XCIsIFwi6KW/5a6J5Yy6XCIsIFwi5Lic5a6B5Y6/XCIsIFwi5p6X5Y+j5Y6/XCIsIFwi57ul6Iqs5rKz5biCXCIsIFwi5rW35p6X5biCXCIsIFwi5a6B5a6J5biCXCIsIFwi56mG5qOx5biCXCJdKTtcclxuZHN5LmFkZChcIjBfOV8xMVwiLCBbXCLljJfmnpfljLpcIiwgXCLmnJvlpY7ljr9cIiwgXCLlhbDopb/ljr9cIiwgXCLpnZLlhojljr9cIiwgXCLluoblronljr9cIiwgXCLmmI7msLTljr9cIiwgXCLnu6Xmo7Hljr9cIiwgXCLlronovr7luIJcIiwgXCLogofkuJzluIJcIiwgXCLmtbfkvKbluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF85XzEyXCIsIFtcIuWRvOeOm+WOv1wiLCBcIuWhlOays+WOv1wiLCBcIua8oOays+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzlcIiwgW1wi5ZOI5bCU5ruo5biCXCIsIFwi6b2Q6b2Q5ZOI5bCU5biCXCIsIFwi5LiD5Y+w5rKz5biCXCIsIFwi6buR5rKz5biCXCIsIFwi5aSn5bqG5biCXCIsIFwi6bmk5bKX5biCXCIsIFwi5LyK5pil5biCXCIsIFwi5L2z5pyo5pav5biCXCIsIFwi5Y+M6bit5bGx5biCXCIsIFwi6bih6KW/5biCXCIsIFwi54mh5Li55rGf5biCXCIsIFwi57ul5YyW5biCXCIsIFwi5aSn5YW05a6J5bKt5Zyw5Yy6XCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzEwXzBcIiwgW1wi546E5q2m5Yy6XCIsIFwi56em5reu5Yy6XCIsIFwi5bu66YK65Yy6XCIsIFwi6byT5qW85Yy6XCIsIFwi5rWm5Y+j5Yy6XCIsIFwi5qCW6Zye5Yy6XCIsIFwi6Zuo6Iqx5Y+w5Yy6XCIsIFwi5rGf5a6B5Yy6XCIsIFwi5YWt5ZCI5Yy6XCIsIFwi5rqn5rC05Yy6XCIsIFwi6auY5rez5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMTBfMVwiLCBbXCLpvJPmpbzljLpcIiwgXCLkupHpvpnljLpcIiwgXCLotL7msarljLpcIiwgXCLms4nlsbHljLpcIiwgXCLpk5zlsbHljLpcIiwgXCLkuLDljr9cIiwgXCLmspvljr9cIiwgXCLnnaLlroHljr9cIiwgXCLmlrDmsoLluIJcIiwgXCLpgrPlt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMF8yXCIsIFtcIui/nuS6keWMulwiLCBcIua1t+W3nuWMulwiLCBcIui1o+amhuWMulwiLCBcIuS4nOa1t+WOv1wiLCBcIueBjOS6keWOv1wiLCBcIueBjOWNl+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzNcIiwgW1wi5a6/5Z+O5Yy6XCIsIFwi5a6/6LGr5Yy6XCIsIFwi5rKt6Ziz5Y6/XCIsIFwi5rOX6Ziz5Y6/XCIsIFwi5rOX5rSq5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTBfNFwiLCBbXCLmuIXmsrPljLpcIiwgXCLmt67lronljLpcIiwgXCLmt67pmLTljLpcIiwgXCLmuIXmtabljLpcIiwgXCLmtp/msLTljr9cIiwgXCLmtKrms73ljr9cIiwgXCLnm7HnnJnljr9cIiwgXCLph5HmuZbljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMF81XCIsIFtcIuS6rea5luWMulwiLCBcIuebkOmDveWMulwiLCBcIuWkp+S4sOWMulwiLCBcIuWTjeawtOWOv1wiLCBcIua7qOa1t+WOv1wiLCBcIumYnOWugeWOv1wiLCBcIuWwhOmYs+WOv1wiLCBcIuW7uua5luWOv1wiLCBcIuS4nOWPsOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzZcIiwgW1wi5bm/6Zm15Yy6XCIsIFwi6YKX5rGf5Yy6XCIsIFwi5rGf6YO95Yy6XCIsIFwi5a6d5bqU5Y6/XCIsIFwi5Luq5b6B5biCXCIsIFwi6auY6YKu5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBfN1wiLCBbXCLmtbfpmbXljLpcIiwgXCLpq5jmuK/ljLpcIiwgXCLlp5zloLDljLpcIiwgXCLlhbTljJbluIJcIiwgXCLpnZbmsZ/luIJcIiwgXCLms7DlhbTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMF84XCIsIFtcIuW0h+W3neWMulwiLCBcIua4r+mXuOWMulwiLCBcIumAmuW3nuWMulwiLCBcIua1t+WuieWOv1wiLCBcIuWmguS4nOWOv1wiLCBcIuWQr+S4nOW4glwiLCBcIuWmgueai+W4glwiLCBcIua1t+mXqOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEwXzlcIiwgW1wi5Lqs5Y+j5Yy6XCIsIFwi5ram5bee5Yy6XCIsIFwi5Li55b6S5Yy6XCIsIFwi5Li56Ziz5biCXCIsIFwi5oms5Lit5biCXCIsIFwi5Y+l5a655biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBfMTBcIiwgW1wi5aSp5a6B5Yy6XCIsIFwi6ZKf5qW85Yy6XCIsIFwi5paw5YyX5Yy6XCIsIFwi5q2m6L+b5Yy6XCIsIFwi6YeR5Z2b5Yy6XCIsIFwi5rqn6Ziz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBfMTFcIiwgW1wi5bSH5a6J5Yy6XCIsIFwi5Y2X6ZW/5Yy6XCIsIFwi5YyX5aGY5Yy6XCIsIFwi6ZSh5bGx5Yy6XCIsIFwi5oOg5bGx5Yy6XCIsIFwi5ruo5rmW5Yy6XCIsIFwi5rGf6Zi05biCXCIsIFwi5a6c5YW05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBfMTJcIiwgW1wi6JmO5LiY5Yy6XCIsIFwi5ZC05Lit5Yy6XCIsIFwi55u45Z+O5Yy6XCIsIFwi5aeR6IuP5Yy6XCIsIFwi5ZC05rGf5Yy6XCIsIFwi5bi454af5biCXCIsIFwi5byg5a625riv5biCXCIsIFwi5piG5bGx5biCXCIsIFwi5aSq5LuT5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTBcIiwgW1wi5Y2X5Lqs5biCXCIsIFwi5b6Q5bee5biCXCIsIFwi6L+e5LqR5riv5biCXCIsIFwi5a6/6L+B5biCXCIsIFwi5reu5a6J5biCXCIsIFwi55uQ5Z+O5biCXCIsIFwi5oms5bee5biCXCIsIFwi5rOw5bee5biCXCIsIFwi5Y2X6YCa5biCXCIsIFwi6ZWH5rGf5biCXCIsIFwi5bi45bee5biCXCIsIFwi5peg6ZSh5biCXCIsIFwi6IuP5bee5biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzExXzBcIiwgW1wi5LiK5Z+O5Yy6XCIsIFwi5LiL5Z+O5Yy6XCIsIFwi5rGf5bmy5Yy6XCIsIFwi5oux5aKF5Yy6XCIsIFwi6KW/5rmW5Yy6XCIsIFwi5ruo5rGf5Yy6XCIsIFwi6JCn5bGx5Yy6XCIsIFwi5L2Z5p2t5Yy6XCIsIFwi5a+M6Ziz5Yy6XCIsIFwi5qGQ5bqQ5Y6/XCIsIFwi5rez5a6J5Y6/XCIsIFwi5bu65b635biCXCIsIFwi5Li05a6J5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTFfMVwiLCBbXCLlkLTlhbTljLpcIiwgXCLljZfmtZTljLpcIiwgXCLlvrfmuIXljr9cIiwgXCLplb/lhbTljr9cIiwgXCLlronlkInljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMV8yXCIsIFtcIuWNl+a5luWMulwiLCBcIuengOa0suWMulwiLCBcIuWYieWWhOWOv1wiLCBcIua1t+ebkOWOv1wiLCBcIua1t+WugeW4glwiLCBcIuW5s+a5luW4glwiLCBcIuahkOS5oeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzNcIiwgW1wi5a6a5rW35Yy6XCIsIFwi5pmu6ZmA5Yy6XCIsIFwi5bKx5bGx5Y6/XCIsIFwi5bWK5rOX5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTFfNFwiLCBbXCLmtbfmm5nljLpcIiwgXCLmsZ/kuJzljLpcIiwgXCLmsZ/ljJfljLpcIiwgXCLljJfku5HljLpcIiwgXCLplYfmtbfljLpcIiwgXCLphJ7lt57ljLpcIiwgXCLosaHlsbHljr9cIiwgXCLlroHmtbfljr9cIiwgXCLkvZnlp5rluIJcIiwgXCLmhYjmuqrluIJcIiwgXCLlpYnljJbluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMV81XCIsIFtcIui2iuWfjuWMulwiLCBcIuafr+ahpeWMulwiLCBcIuS4iuiZnuWMulwiLCBcIuaWsOaYjOWOv1wiLCBcIuivuOaaqOW4glwiLCBcIuW1iuW3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzZcIiwgW1wi5p+v5Z+O5Yy6XCIsIFwi6KGi5rGf5Yy6XCIsIFwi5bi45bGx5Y6/XCIsIFwi5byA5YyW5Y6/XCIsIFwi6b6Z5ri45Y6/XCIsIFwi5rGf5bGx5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTFfN1wiLCBbXCLlqbrln47ljLpcIiwgXCLph5HkuJzljLpcIiwgXCLmrabkuYnljr9cIiwgXCLmtabmsZ/ljr9cIiwgXCLno5Dlronljr9cIiwgXCLlhbDmuqrluIJcIiwgXCLkuYnkuYzluIJcIiwgXCLkuJzpmLPluIJcIiwgXCLmsLjlurfluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMV84XCIsIFtcIuakkuaxn+WMulwiLCBcIum7hOWyqeWMulwiLCBcIui3r+ahpeWMulwiLCBcIueOieeOr+WOv1wiLCBcIuS4iemXqOWOv1wiLCBcIuWkqeWPsOWOv1wiLCBcIuS7meWxheWOv1wiLCBcIua4qeWyreW4glwiLCBcIuS4tOa1t+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzExXzlcIiwgW1wi6bm/5Z+O5Yy6XCIsIFwi6b6Z5rm+5Yy6XCIsIFwi55Ov5rW35Yy6XCIsIFwi5rSe5aS05Yy6XCIsIFwi5rC45ZiJ5Y6/XCIsIFwi5bmz6Ziz5Y6/XCIsIFwi6IuN5Y2X5Y6/XCIsIFwi5paH5oiQ5Y6/XCIsIFwi5rOw6aG65Y6/XCIsIFwi55Ge5a6J5biCXCIsIFwi5LmQ5riF5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTFfMTBcIiwgW1wi6I6y6YO95Yy6XCIsIFwi6Z2S55Sw5Y6/XCIsIFwi57yZ5LqR5Y6/XCIsIFwi6YGC5piM5Y6/XCIsIFwi5p2+6Ziz5Y6/XCIsIFwi5LqR5ZKM5Y6/XCIsIFwi5bqG5YWD5Y6/XCIsIFwi5pmv5a6B55Wy5peP6Ieq5rK75Y6/XCIsIFwi6b6Z5rOJ5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTFcIiwgW1wi5p2t5bee5biCXCIsIFwi5rmW5bee5biCXCIsIFwi5ZiJ5YW05biCXCIsIFwi6Iif5bGx5biCXCIsIFwi5a6B5rOi5biCXCIsIFwi57uN5YW05biCXCIsIFwi6KGi5bee5biCXCIsIFwi6YeR5Y2O5biCXCIsIFwi5Y+w5bee5biCXCIsIFwi5rip5bee5biCXCIsIFwi5Li95rC05biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzEyXzBcIiwgW1wi55G25rW35Yy6XCIsIFwi5bqQ6Ziz5Yy6XCIsIFwi6JyA5bGx5Yy6XCIsIFwi5YyF5rKz5Yy6XCIsIFwi6ZW/5Liw5Y6/XCIsIFwi6IKl5Lic5Y6/XCIsIFwi6IKl6KW/5Y6/XCIsIFwi5bqQ5rGf5Y6/XCIsIFwi5bei5rmW5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMVwiLCBbXCLln4fmoaXljLpcIiwgXCLnoIDlsbHljr9cIiwgXCLokKfljr9cIiwgXCLngbXnkqfljr9cIiwgXCLms5fljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xMl8yXCIsIFtcIuadnOmbhuWMulwiLCBcIuebuOWxseWMulwiLCBcIueDiOWxseWMulwiLCBcIua/iea6quWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzNcIiwgW1wi6LCv5Z+O5Yy6XCIsIFwi5rah6Ziz5Y6/XCIsIFwi6JKZ5Z+O5Y6/XCIsIFwi5Yip6L6b5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfNFwiLCBbXCLpoo3lt57ljLpcIiwgXCLpoo3kuJzljLpcIiwgXCLpoo3ms4nljLpcIiwgXCLkuLTms4nljr9cIiwgXCLlpKrlkozljr9cIiwgXCLpmJzljZfljr9cIiwgXCLpoo3kuIrljr9cIiwgXCLnlYzpppbluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMl81XCIsIFtcIum+meWtkOa5luWMulwiLCBcIuiajOWxseWMulwiLCBcIuemueS8muWMulwiLCBcIua3ruS4iuWMulwiLCBcIuaAgOi/nOWOv1wiLCBcIuS6lOays+WOv1wiLCBcIuWbuumVh+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzZcIiwgW1wi5aSn6YCa5Yy6XCIsIFwi55Sw5a625bq15Yy6XCIsIFwi6LCi5a626ZuG5Yy6XCIsIFwi5YWr5YWs5bGx5Yy6XCIsIFwi5r2Y6ZuG5Yy6XCIsIFwi5Yek5Y+w5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfN1wiLCBbXCLnkIXnkIrljLpcIiwgXCLljZfosK/ljLpcIiwgXCLmnaXlronljr9cIiwgXCLlhajmpJLljr9cIiwgXCLlrprov5zljr9cIiwgXCLlh6TpmLPljr9cIiwgXCLlpKnplb/luIJcIiwgXCLmmI7lhYnluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xMl84XCIsIFtcIuiKseWxseWMulwiLCBcIumbqOWxseWMulwiLCBcIuWNmuacm+WMulwiLCBcIuW9k+a2guWOv1wiLCBcIuWQq+WxseWOv1wiLCBcIuWSjOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEyXzlcIiwgW1wi6ZWc5rmW5Yy6XCIsIFwi5byL5rGf5Yy6XCIsIFwi6big5rGf5Yy6XCIsIFwi5LiJ5bGx5Yy6XCIsIFwi6Iqc5rmW5Y6/XCIsIFwi57mB5piM5Y6/XCIsIFwi5Y2X6Zm15Y6/XCIsIFwi5peg5Li65Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMTBcIiwgW1wi6ZOc5a6Y5bGx5Yy6XCIsIFwi54uu5a2Q5bGx5Yy6XCIsIFwi6YOK5Yy6XCIsIFwi6ZOc6Zm15Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMTFcIiwgW1wi6L+O5rGf5Yy6XCIsIFwi5aSn6KeC5Yy6XCIsIFwi5a6c56eA5Yy6XCIsIFwi5oCA5a6B5Y6/XCIsIFwi5p6e6Ziz5Y6/XCIsIFwi5r2c5bGx5Y6/XCIsIFwi5aSq5rmW5Y6/XCIsIFwi5a6/5p2+5Y6/XCIsIFwi5pyb5rGf5Y6/XCIsIFwi5bKz6KW/5Y6/XCIsIFwi5qGQ5Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMTJcIiwgW1wi5bGv5rqq5Yy6XCIsIFwi6buE5bGx5Yy6XCIsIFwi5b695bee5Yy6XCIsIFwi5q2Z5Y6/XCIsIFwi5LyR5a6B5Y6/XCIsIFwi6buf5Y6/XCIsIFwi56WB6Zeo5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMTNcIiwgW1wi6YeR5a6J5Yy6XCIsIFwi6KOV5a6J5Yy6XCIsIFwi5a+/5Y6/XCIsIFwi6ZyN6YKx5Y6/XCIsIFwi6IiS5Z+O5Y6/XCIsIFwi6YeR5a+o5Y6/XCIsIFwi6ZyN5bGx5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMTVcIiwgW1wi6LS15rGg5Yy6XCIsIFwi5Lic6Iez5Y6/XCIsIFwi55+z5Y+w5Y6/XCIsIFwi6Z2S6Ziz5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTJfMTZcIiwgW1wi5a6j5bee5Yy6XCIsIFwi6YOO5rqq5Y6/XCIsIFwi5bm/5b635Y6/XCIsIFwi5rO+5Y6/XCIsIFwi57up5rqq5Y6/XCIsIFwi5peM5b635Y6/XCIsIFwi5a6B5Zu95biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTJcIiwgW1wi5ZCI6IKl5biCXCIsIFwi5a6/5bee5biCXCIsIFwi5reu5YyX5biCXCIsIFwi5Lqz5bee5biCXCIsIFwi6Zic6Ziz5biCXCIsIFwi6JqM5Z+g5biCXCIsIFwi5reu5Y2X5biCXCIsIFwi5ruB5bee5biCXCIsIFwi6ams6Z6N5bGx5biCXCIsIFwi6Iqc5rmW5biCXCIsIFwi6ZOc6Zm15biCXCIsIFwi5a6J5bqG5biCXCIsIFwi6buE5bGx5biCXCIsIFwi5YWt5a6J5biCXCIsIFwi5rGg5bee5biCXCIsIFwi5a6j5Z+O5biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzEzXzBcIiwgW1wi6byT5qW85Yy6XCIsIFwi5Y+w5rGf5Yy6XCIsIFwi5LuT5bGx5Yy6XCIsIFwi6ams5bC+5Yy6XCIsIFwi5pmL5a6J5Yy6XCIsIFwi6Ze95L6v5Y6/XCIsIFwi6L+e5rGf5Y6/XCIsIFwi572X5rqQ5Y6/XCIsIFwi6Ze95riF5Y6/XCIsIFwi5rC45rOw5Y6/XCIsIFwi5bmz5r2t5Y6/XCIsIFwi56aP5riF5biCXCIsIFwi6ZW/5LmQ5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTNfMVwiLCBbXCLlu7blubPljLpcIiwgXCLlu7rpmLPljLpcIiwgXCLpobrmmIzljr9cIiwgXCLmtabln47ljr9cIiwgXCLlhYnms73ljr9cIiwgXCLmnb7muqrljr9cIiwgXCLmlL/lkozljr9cIiwgXCLpgrXmrabluIJcIiwgXCLmrablpLflsbHluIJcIiwgXCLlu7rnk6/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xM18yXCIsIFtcIuWfjuWOouWMulwiLCBcIua2teaxn+WMulwiLCBcIuiNlOWfjuWMulwiLCBcIuengOWxv+WMulwiLCBcIuS7mea4uOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzEzXzNcIiwgW1wi5qKF5YiX5Yy6XCIsIFwi5LiJ5YWD5Yy6XCIsIFwi5piO5rqq5Y6/XCIsIFwi5riF5rWB5Y6/XCIsIFwi5a6B5YyW5Y6/XCIsIFwi5aSn55Sw5Y6/XCIsIFwi5bCk5rqq5Y6/XCIsIFwi5rKZ5Y6/XCIsIFwi5bCG5LmQ5Y6/XCIsIFwi5rOw5a6B5Y6/XCIsIFwi5bu65a6B5Y6/XCIsIFwi5rC45a6J5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTNfNFwiLCBbXCLpsqTln47ljLpcIiwgXCLkuLDms73ljLpcIiwgXCLmtJvmsZ/ljLpcIiwgXCLms4nmuK/ljLpcIiwgXCLmg6Dlronljr9cIiwgXCLlronmuqrljr9cIiwgXCLmsLjmmKXljr9cIiwgXCLlvrfljJbljr9cIiwgXCLph5Hpl6jljr9cIiwgXCLnn7Pni67luIJcIiwgXCLmmYvmsZ/luIJcIiwgXCLljZflronluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xM181XCIsIFtcIuaAneaYjuWMulwiLCBcIua1t+ayp+WMulwiLCBcIua5lumHjOWMulwiLCBcIumbhue+juWMulwiLCBcIuWQjOWuieWMulwiLCBcIue/lOWuieWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzEzXzZcIiwgW1wi6IqX5Z+O5Yy6XCIsIFwi6b6Z5paH5Yy6XCIsIFwi5LqR6ZyE5Y6/XCIsIFwi5ryz5rWm5Y6/XCIsIFwi6K+P5a6J5Y6/XCIsIFwi6ZW/5rOw5Y6/XCIsIFwi5Lic5bGx5Y6/XCIsIFwi5Y2X6Z2W5Y6/XCIsIFwi5bmz5ZKM5Y6/XCIsIFwi5Y2O5a6J5Y6/XCIsIFwi6b6Z5rW35biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTNfN1wiLCBbXCLmlrDnvZfljLpcIiwgXCLmsLjlrprljLpcIiwgXCLplb/msYDljr9cIiwgXCLkuIrmna3ljr9cIiwgXCLmrablubPljr9cIiwgXCLov57ln47ljr9cIiwgXCLmvLPlubPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xM184XCIsIFtcIuiVieWfjuWMulwiLCBcIumcnua1puWOv1wiLCBcIuWPpOeUsOWOv1wiLCBcIuWxj+WNl+WOv1wiLCBcIuWvv+WugeWOv1wiLCBcIuWRqOWugeWOv1wiLCBcIuafmOiNo+WOv1wiLCBcIuemj+WuieW4glwiLCBcIuemj+m8juW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzEzXCIsIFtcIuemj+W3nuW4glwiLCBcIuWNl+W5s+W4glwiLCBcIuiOhueUsOW4glwiLCBcIuS4ieaYjuW4glwiLCBcIuazieW3nuW4glwiLCBcIuWOpumXqOW4glwiLCBcIua8s+W3nuW4glwiLCBcIum+meWyqeW4glwiLCBcIuWugeW+t+W4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xNF8wXCIsIFtcIuS4nOa5luWMulwiLCBcIuilv+a5luWMulwiLCBcIumdkuS6keiwseWMulwiLCBcIua5vumHjOWMulwiLCBcIumdkuWxsea5luWMulwiLCBcIuaWsOW7uuWMulwiLCBcIuWNl+aYjOWOv1wiLCBcIuWuieS5ieWOv1wiLCBcIui/m+i0pOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzFcIiwgW1wi5bqQ5bGx5Yy6XCIsIFwi5rWU6Ziz5Yy6XCIsIFwi5Lmd5rGf5Y6/XCIsIFwi5q2m5a6B5Y6/XCIsIFwi5L+u5rC05Y6/XCIsIFwi5rC45L+u5Y6/XCIsIFwi5b635a6J5Y6/XCIsIFwi5pif5a2Q5Y6/XCIsIFwi6YO95piM5Y6/XCIsIFwi5rmW5Y+j5Y6/XCIsIFwi5b2t5rO95Y6/XCIsIFwi55Ge5piM5biCXCIsIFwi5YWx6Z2S5Z+O5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTRfMlwiLCBbXCLmmIzmsZ/ljLpcIiwgXCLnj6DlsbHljLpcIiwgXCLmta7mooHljr9cIiwgXCLkuZDlubPluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF8zXCIsIFtcIuaciOa5luWMulwiLCBcIuS9meaxn+WOv1wiLCBcIui0tea6quW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzRcIiwgW1wi5rid5rC05Yy6XCIsIFwi5YiG5a6c5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTRfNVwiLCBbXCLlronmupDljLpcIiwgXCLmuZjkuJzljLpcIiwgXCLojrLoirHljr9cIiwgXCLkuIrmoJfljr9cIiwgXCLoiqbmuqrljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF82XCIsIFtcIueroOi0oeWMulwiLCBcIuWNl+W6t+WMulwiLCBcIui1o+WOv1wiLCBcIuS/oeS4sOWOv1wiLCBcIuWkp+S9meWOv1wiLCBcIuS4iueKueWOv1wiLCBcIuW0h+S5ieWOv1wiLCBcIuWuiei/nOWOv1wiLCBcIum+meWNl+WOv1wiLCBcIuWumuWNl+WOv1wiLCBcIuWFqOWNl+WOv1wiLCBcIuWugemDveWOv1wiLCBcIuS6jumDveWOv1wiLCBcIuWFtOWbveWOv1wiLCBcIuS8muaYjOWOv1wiLCBcIuWvu+S5jOWOv1wiLCBcIuefs+WfjuWOv1wiLCBcIueRnumHkeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzdcIiwgW1wi5L+h5bee5Yy6XCIsIFwi5bm/5Liw5Yy6XCIsIFwi5LiK6aW25Y6/XCIsIFwi546J5bGx5Y6/XCIsIFwi6ZOF5bGx5Y6/XCIsIFwi5qiq5bOw5Y6/XCIsIFwi5byL6Ziz5Y6/XCIsIFwi5L2Z5bmy5Y6/XCIsIFwi6YSx6Ziz5Y6/XCIsIFwi5LiH5bm05Y6/XCIsIFwi5am65rqQ5Y6/XCIsIFwi5b635YW05biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTRfOFwiLCBbXCLkuLTlt53ljLpcIiwgXCLljZfln47ljr9cIiwgXCLpu47lt53ljr9cIiwgXCLljZfkuLDljr9cIiwgXCLltIfku4Hljr9cIiwgXCLkuZDlronljr9cIiwgXCLlrpzpu4Tljr9cIiwgXCLph5Hmuqrljr9cIiwgXCLotYTmuqrljr9cIiwgXCLkuJzkuaHljr9cIiwgXCLlub/mmIzljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNF85XCIsIFtcIuiigeW3nuWMulwiLCBcIuWlieaWsOWOv1wiLCBcIuS4h+i9veWOv1wiLCBcIuS4iumrmOWOv1wiLCBcIuWunOS4sOWOv1wiLCBcIumdluWuieWOv1wiLCBcIumTnOm8k+WOv1wiLCBcIuS4sOWfjuW4glwiLCBcIuaon+agkeW4glwiLCBcIumrmOWuieW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XzEwXCIsIFtcIuWQieW3nuWMulwiLCBcIumdkuWOn+WMulwiLCBcIuWQieWuieWOv1wiLCBcIuWQieawtOWOv1wiLCBcIuWzoeaxn+WOv1wiLCBcIuaWsOW5suWOv1wiLCBcIuawuOS4sOWOv1wiLCBcIuazsOWSjOWOv1wiLCBcIumBguW3neWOv1wiLCBcIuS4h+WuieWOv1wiLCBcIuWuieemj+WOv1wiLCBcIuawuOaWsOWOv1wiLCBcIuS6leWGiOWxseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE0XCIsIFtcIuWNl+aYjOW4glwiLCBcIuS5neaxn+W4glwiLCBcIuaZr+W+t+mVh+W4glwiLCBcIum5sOa9reW4glwiLCBcIuaWsOS9meW4glwiLCBcIuiQjeS5oeW4glwiLCBcIui1o+W3nuW4glwiLCBcIuS4iumltuW4glwiLCBcIuaKmuW3nuW4glwiLCBcIuWunOaYpeW4glwiLCBcIuWQieWuieW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xNV8wXCIsIFtcIuWOhuS4i+WMulwiLCBcIuW4guS4reWMulwiLCBcIuankOiNq+WMulwiLCBcIuWkqeahpeWMulwiLCBcIuWOhuWfjuWMulwiLCBcIumVv+a4heWMulwiLCBcIuW5s+mYtOWOv1wiLCBcIua1jumYs+WOv1wiLCBcIuWVhuays+WOv1wiLCBcIueroOS4mOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzFcIiwgW1wi5biC5Y2X5Yy6XCIsIFwi5biC5YyX5Yy6XCIsIFwi6buE5bKb5Yy6XCIsIFwi5bSC5bGx5Yy6XCIsIFwi5p2O5rKn5Yy6XCIsIFwi5Z+O6Ziz5Yy6XCIsIFwi6IO25bee5biCXCIsIFwi5Y2z5aKo5biCXCIsIFwi5bmz5bqm5biCXCIsIFwi6I6x6KW/5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTVfMlwiLCBbXCLkuJzmmIzlupzljLpcIiwgXCLpmLPosLfljr9cIiwgXCLojpjljr9cIiwgXCLojIzlubPljr9cIiwgXCLkuJzpmL/ljr9cIiwgXCLlhqDljr9cIiwgXCLpq5jllJDljr9cIiwgXCLkuLTmuIXluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV8zXCIsIFtcIuW+t+WfjuWMulwiLCBcIumZteWfjuWMulwiLCBcIuWugea0peWOv1wiLCBcIuW6huS6keWOv1wiLCBcIuS4tOmCkeWOv1wiLCBcIum9kOays+WOv1wiLCBcIuW5s+WOn+WOv1wiLCBcIuWkj+a0peWOv1wiLCBcIuatpuWfjuWOv1wiLCBcIuS5kOmZteW4glwiLCBcIuemueWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzRcIiwgW1wi5Lic6JCl5Yy6XCIsIFwi5rKz5Y+j5Yy6XCIsIFwi5Z6m5Yip5Y6/XCIsIFwi5Yip5rSl5Y6/XCIsIFwi5bm/6aW25Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTVfNVwiLCBbXCLmt4Tlt53ljLpcIiwgXCLlvKDlupfljLpcIiwgXCLljZrlsbHljLpcIiwgXCLkuLTmt4TljLpcIiwgXCLlkajmnZHljLpcIiwgXCLmoZPlj7Dljr9cIiwgXCLpq5jpnZLljr9cIiwgXCLmsoLmupDljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV82XCIsIFtcIua9jeWfjuWMulwiLCBcIuWvkuS6reWMulwiLCBcIuWdiuWtkOWMulwiLCBcIuWljuaWh+WMulwiLCBcIuS4tOackOWOv1wiLCBcIuaYjOS5kOWOv1wiLCBcIumdkuW3nuW4glwiLCBcIuivuOWfjuW4glwiLCBcIuWvv+WFieW4glwiLCBcIuWuieS4mOW4glwiLCBcIumrmOWvhuW4glwiLCBcIuaYjOmCkeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzdcIiwgW1wi6Iqd572Y5Yy6XCIsIFwi56aP5bGx5Yy6XCIsIFwi54mf5bmz5Yy6XCIsIFwi6I6x5bGx5Yy6XCIsIFwi6ZW/5bKb5Y6/XCIsIFwi6b6Z5Y+j5biCXCIsIFwi6I6x6Ziz5biCXCIsIFwi6I6x5bee5biCXCIsIFwi6JOs6I6x5biCXCIsIFwi5oub6L+c5biCXCIsIFwi5qCW6Zye5biCXCIsIFwi5rW36Ziz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTVfOFwiLCBbXCLnjq/nv6DljLpcIiwgXCLmlofnmbvljLpcIiwgXCLojaPmiJDluIJcIiwgXCLkubPlsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNV85XCIsIFtcIuS4nOa4r+WMulwiLCBcIuWymuWxseWMulwiLCBcIuS6lOiOsuWOv1wiLCBcIuiOkuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzEwXCIsIFtcIuWFsOWxseWMulwiLCBcIue9l+W6hOWMulwiLCBcIuays+S4nOWMulwiLCBcIuayguWNl+WOv1wiLCBcIumDr+WfjuWOv1wiLCBcIuayguawtOWOv1wiLCBcIuWFsOmZteWOv1wiLCBcIui0ueWOv1wiLCBcIuW5s+mCkeWOv1wiLCBcIuiOkuWNl+WOv1wiLCBcIuiSmemYtOWOv1wiLCBcIuS4tOayreWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzExXCIsIFtcIuW4guS4reWMulwiLCBcIuiWm+WfjuWMulwiLCBcIuWzhOWfjuWMulwiLCBcIuWPsOWEv+W6hOWMulwiLCBcIuWxseS6reWMulwiLCBcIua7leW3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzEyXCIsIFtcIuS7u+WfjuWMulwiLCBcIuWFluW3nuWMulwiLCBcIuW+ruWxseWOv1wiLCBcIumxvOWPsOWOv1wiLCBcIumHkeS5oeWOv1wiLCBcIuWYieelpeWOv1wiLCBcIuaxtuS4iuWOv1wiLCBcIuazl+awtOWOv1wiLCBcIuaigeWxseWOv1wiLCBcIuabsumYnOW4glwiLCBcIumCueWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzEzXCIsIFtcIuazsOWxseWMulwiLCBcIuWyseWys+WMulwiLCBcIuWugemYs+WOv1wiLCBcIuS4nOW5s+WOv1wiLCBcIuaWsOazsOW4glwiLCBcIuiCpeWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzE0XCIsIFtcIuiOseWfjuWMulwiLCBcIumSouWfjuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzE1XCIsIFtcIua7qOWfjuWMulwiLCBcIuayvuWMluWMulwiLCBcIuaDoOawkeWOv1wiLCBcIumYs+S/oeWOv1wiLCBcIuaXoOajo+WOv1wiLCBcIuWNmuWFtOWOv1wiLCBcIumCueW5s+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XzE2XCIsIFtcIueJoeS4ueWMulwiLCBcIuabueWOv1wiLCBcIuWNleWOv1wiLCBcIuaIkOatpuWOv1wiLCBcIuW3qOmHjuWOv1wiLCBcIumDk+WfjuWOv1wiLCBcIumEhOWfjuWOv1wiLCBcIuWumumZtuWOv1wiLCBcIuS4nOaYjuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE1XCIsIFtcIua1juWNl+W4glwiLCBcIumdkuWym+W4glwiLCBcIuiBiuWfjuW4glwiLCBcIuW+t+W3nuW4glwiLCBcIuS4nOiQpeW4glwiLCBcIua3hOWNmuW4glwiLCBcIua9jeWdiuW4glwiLCBcIueDn+WPsOW4glwiLCBcIuWogea1t+W4glwiLCBcIuaXpeeFp+W4glwiLCBcIuS4tOayguW4glwiLCBcIuaeo+W6hOW4glwiLCBcIua1juWugeW4glwiLCBcIuazsOWuieW4glwiLCBcIuiOseiKnOW4glwiLCBcIua7qOW3nuW4glwiLCBcIuiPj+azveW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xNl8wXCIsIFtcIuS4reWOn+WMulwiLCBcIuS6jOS4g+WMulwiLCBcIueuoeWfjuWbnuaXj+WMulwiLCBcIumHkeawtOWMulwiLCBcIuS4iuihl+WMulwiLCBcIuaDoOa1juWMulwiLCBcIuS4reeJn+WOv1wiLCBcIuW3qeS5ieW4glwiLCBcIuiNpemYs+W4glwiLCBcIuaWsOWvhuW4glwiLCBcIuaWsOmDkeW4glwiLCBcIueZu+WwgeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzFcIiwgW1wi6b6Z5Lqt5Yy6XCIsIFwi6aG65rKz5Zue5peP5Yy6XCIsIFwi6byT5qW85Yy6XCIsIFwi56a5546L5Y+w5Yy6XCIsIFwi6YeR5piO5Yy6XCIsIFwi56Wl56ym5Yy6XCIsIFwi5p2e5Y6/XCIsIFwi6YCa6K645Y6/XCIsIFwi5bCJ5rCP5Y6/XCIsIFwi5YWw6ICD5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTZfMlwiLCBbXCLmuZbmu6jljLpcIiwgXCLmuJHmsaDljr9cIiwgXCLpmZXljr9cIiwgXCLljaLmsI/ljr9cIiwgXCLkuYnpqazluIJcIiwgXCLngbXlrp3luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl8zXCIsIFtcIuiAgeWfjuWMulwiLCBcIuilv+W3peWMulwiLCBcIueAjeays+WbnuaXj+WMulwiLCBcIua2p+ilv+WMulwiLCBcIuWQieWIqeWMulwiLCBcIua0m+m+meWMulwiLCBcIuWtn+a0peWOv1wiLCBcIuaWsOWuieWOv1wiLCBcIuagvuW3neWOv1wiLCBcIuW1qeWOv1wiLCBcIuaxnemYs+WOv1wiLCBcIuWunOmYs+WOv1wiLCBcIua0m+WugeWOv1wiLCBcIuS8iuW3neWOv1wiLCBcIuWBg+W4iOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzRcIiwgW1wi6Kej5pS+5Yy6XCIsIFwi5Lit56uZ5Yy6XCIsIFwi6ams5p2R5Yy6XCIsIFwi5bGx6Ziz5Yy6XCIsIFwi5L+u5q2m5Y6/XCIsIFwi5Y2a54ix5Y6/XCIsIFwi5q2m6Zmf5Y6/XCIsIFwi5rip5Y6/XCIsIFwi5rKB6Ziz5biCXCIsIFwi5a2f5bee5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTZfNVwiLCBbXCLnuqLml5fljLpcIiwgXCLljavmu6jljLpcIiwgXCLlh6Tms4nljLpcIiwgXCLniafph47ljLpcIiwgXCLmlrDkuaHljr9cIiwgXCLojrflmInljr9cIiwgXCLljp/pmLPljr9cIiwgXCLlu7bmtKXljr9cIiwgXCLlsIHkuJjljr9cIiwgXCLplb/lnqPljr9cIiwgXCLljavovonluIJcIiwgXCLovonljr/luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl82XCIsIFtcIum5pOWxseWMulwiLCBcIuWxseWfjuWMulwiLCBcIua3h+a7qOWMulwiLCBcIua1muWOv1wiLCBcIua3h+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzdcIiwgW1wi5paH5bOw5Yy6XCIsIFwi5YyX5YWz5Yy6XCIsIFwi5q636YO95Yy6XCIsIFwi6b6Z5a6J5Yy6XCIsIFwi5a6J6Ziz5Y6/XCIsIFwi5rGk6Zi05Y6/XCIsIFwi5ruR5Y6/XCIsIFwi5YaF6buE5Y6/XCIsIFwi5p6X5bee5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTZfOFwiLCBbXCLljY7pvpnljLpcIiwgXCLmuIXkuLDljr9cIiwgXCLljZfkuZDljr9cIiwgXCLojIPljr9cIiwgXCLlj7DliY3ljr9cIiwgXCLmv67pmLPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8xNl85XCIsIFtcIuaigeWbreWMulwiLCBcIuedoumYs+WMulwiLCBcIuawkeadg+WOv1wiLCBcIuedouWOv1wiLCBcIuWugemZteWOv1wiLCBcIuafmOWfjuWOv1wiLCBcIuiZnuWfjuWOv1wiLCBcIuWkj+mCkeWOv1wiLCBcIuawuOWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzEwXCIsIFtcIumtj+mDveWMulwiLCBcIuiuuOaYjOWOv1wiLCBcIumEoumZteWOv1wiLCBcIuilhOWfjuWOv1wiLCBcIuemueW3nuW4glwiLCBcIumVv+iRm+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzExXCIsIFtcIua6kOaxh+WMulwiLCBcIumDvuWfjuWMulwiLCBcIuWPrOmZteWMulwiLCBcIuiInumYs+WOv1wiLCBcIuS4tOmijeWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzEyXCIsIFtcIuaWsOWNjuWMulwiLCBcIuWNq+S4nOWMulwiLCBcIuefs+m+meWMulwiLCBcIua5m+ays+WMulwiLCBcIuWuneS4sOWOv1wiLCBcIuWPtuWOv1wiLCBcIumygeWxseWOv1wiLCBcIumDj+WOv1wiLCBcIuiInumSouW4glwiLCBcIuaxneW3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzEzXCIsIFtcIuWum+WfjuWMulwiLCBcIuWNp+m+meWMulwiLCBcIuWNl+WPrOWOv1wiLCBcIuaWueWfjuWOv1wiLCBcIuilv+WzoeWOv1wiLCBcIumVh+W5s+WOv1wiLCBcIuWGheS5oeWOv1wiLCBcIua3heW3neWOv1wiLCBcIuekvuaXl+WOv1wiLCBcIuWUkOays+WOv1wiLCBcIuaWsOmHjuWOv1wiLCBcIuahkOafj+WOv1wiLCBcIumCk+W3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzE0XCIsIFtcIua1ieays+WMulwiLCBcIuW5s+ahpeWMulwiLCBcIue9l+WxseWOv1wiLCBcIuWFieWxseWOv1wiLCBcIuaWsOWOv1wiLCBcIuWVhuWfjuWOv1wiLCBcIuWbuuWni+WOv1wiLCBcIua9ouW3neWOv1wiLCBcIua3rua7qOWOv1wiLCBcIuaBr+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzE1XCIsIFtcIuW3neaxh+WMulwiLCBcIuaJtuayn+WOv1wiLCBcIuilv+WNjuWOv1wiLCBcIuWVhuawtOWOv1wiLCBcIuayiOS4mOWOv1wiLCBcIumDuOWfjuWOv1wiLCBcIua3rumYs+WOv1wiLCBcIuWkquW6t+WOv1wiLCBcIum5v+mCkeWOv1wiLCBcIumhueWfjuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzE2XCIsIFtcIumpv+WfjuWMulwiLCBcIuilv+W5s+WOv1wiLCBcIuS4iuiUoeWOv1wiLCBcIuW5s+iIhuWOv1wiLCBcIuato+mYs+WOv1wiLCBcIuehruWxseWOv1wiLCBcIuazjOmYs+WOv1wiLCBcIuaxneWNl+WOv1wiLCBcIumBguW5s+WOv1wiLCBcIuaWsOiUoeWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XzE3XCIsIFtcIua1jua6kOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE2XCIsIFtcIumDkeW3nuW4glwiLCBcIuW8gOWwgeW4glwiLCBcIuS4iemXqOWzoeW4glwiLCBcIua0m+mYs+W4glwiLCBcIueEpuS9nOW4glwiLCBcIuaWsOS5oeW4glwiLCBcIum5pOWjgeW4glwiLCBcIuWuiemYs+W4glwiLCBcIua/rumYs+W4glwiLCBcIuWVhuS4mOW4glwiLCBcIuiuuOaYjOW4glwiLCBcIua8r+ays+W4glwiLCBcIuW5s+mhtuWxseW4glwiLCBcIuWNl+mYs+W4glwiLCBcIuS/oemYs+W4glwiLCBcIuWRqOWPo+W4glwiLCBcIumpu+mprOW6l+W4glwiLCBcIuecgeebtOi+luWOv+e6p+ihjOaUv+WMuuWIklwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xN18wXCIsIFtcIuaxn+WyuOWMulwiLCBcIuaxn+axieWMulwiLCBcIuehmuWPo+WMulwiLCBcIuaxiemYs+WMulwiLCBcIuatpuaYjOWMulwiLCBcIumdkuWxseWMulwiLCBcIua0quWxseWMulwiLCBcIuS4nOilv+a5luWMulwiLCBcIuaxieWNl+WMulwiLCBcIuiUoeeUuOWMulwiLCBcIuaxn+Wkj+WMulwiLCBcIum7hOmZguWMulwiLCBcIuaWsOa0suWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzFcIiwgW1wi6IyF566t5Yy6XCIsIFwi5byg5rm+5Yy6XCIsIFwi6YOn6Ziz5Yy6XCIsIFwi6YOn6KW/5Y6/XCIsIFwi56u55bGx5Y6/XCIsIFwi56u55rqq5Y6/XCIsIFwi5oi/5Y6/XCIsIFwi5Li55rGf5Y+j5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTdfMlwiLCBbXCLopYTln47ljLpcIiwgXCLmqIrln47ljLpcIiwgXCLopYTlt57ljLpcIiwgXCLljZfmvLPljr9cIiwgXCLosLfln47ljr9cIiwgXCLkv53lurfljr9cIiwgXCLogIHmsrPlj6PluIJcIiwgXCLmnqPpmLPluIJcIiwgXCLlrpzln47luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN18zXCIsIFtcIuS4nOWuneWMulwiLCBcIuaOh+WIgOWMulwiLCBcIuS6rOWxseWOv1wiLCBcIuaymea0i+WOv1wiLCBcIumSn+elpeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzRcIiwgW1wi5a2d5Y2X5Yy6XCIsIFwi5a2d5piM5Y6/XCIsIFwi5aSn5oKf5Y6/XCIsIFwi5LqR5qKm5Y6/XCIsIFwi5bqU5Z+O5biCXCIsIFwi5a6J6ZmG5biCXCIsIFwi5rGJ5bed5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTdfNVwiLCBbXCLpu4Tlt57ljLpcIiwgXCLlm6Lpo47ljr9cIiwgXCLnuqLlronljr9cIiwgXCLnvZfnlLDljr9cIiwgXCLoi7HlsbHljr9cIiwgXCLmtaDmsLTljr9cIiwgXCLolbLmmKXljr9cIiwgXCLpu4TmooXljr9cIiwgXCLpurvln47luIJcIiwgXCLmrabnqbTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN182XCIsIFtcIuaigeWtkOa5luWMulwiLCBcIuWNjuWuueWMulwiLCBcIumEguWfjuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzdcIiwgW1wi6buE55+z5riv5Yy6XCIsIFwi6KW/5aGe5bGx5Yy6XCIsIFwi5LiL6ZmG5Yy6XCIsIFwi6ZOB5bGx5Yy6XCIsIFwi6Ziz5paw5Y6/XCIsIFwi5aSn5Ya25biCXCJdKTtcclxuZHN5LmFkZChcIjBfMTdfOFwiLCBbXCLlkrjlronljLpcIiwgXCLlmInpsbzljr9cIiwgXCLpgJrln47ljr9cIiwgXCLltIfpmLPljr9cIiwgXCLpgJrlsbHljr9cIiwgXCLotaTlo4HluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xN185XCIsIFtcIuaymeW4guWMulwiLCBcIuiNhuW3nuWMulwiLCBcIuWFrOWuieWOv1wiLCBcIuebkeWIqeWOv1wiLCBcIuaxn+mZteWOv1wiLCBcIuefs+mmluW4glwiLCBcIua0qua5luW4glwiLCBcIuadvua7i+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzEwXCIsIFtcIuilv+mZteWMulwiLCBcIuS8jeWutuWyl+WMulwiLCBcIueCueWGm+WMulwiLCBcIueMh+S6reWMulwiLCBcIuWkt+mZteWMulwiLCBcIui/nOWuieWOv1wiLCBcIuWFtOWxseWOv1wiLCBcIuenreW9kuWOv1wiLCBcIumVv+mYs+Wcn+WutuaXj+iHquayu+WOv1wiLCBcIuS6lOWzsOWcn+WutuaXj+iHquayu+WOv1wiLCBcIuWunOmDveW4glwiLCBcIuW9k+mYs+W4glwiLCBcIuaeneaxn+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzExXCIsIFtcIuabvumDveWMulwiLCBcIumaj+WOv1wiLCBcIuW5v+awtOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzEyXCIsIFtcIuaBqeaWveW4glwiLCBcIuWIqeW3neW4glwiLCBcIuW7uuWni+WOv1wiLCBcIuW3tOS4nOWOv1wiLCBcIuWuo+aBqeWOv1wiLCBcIuWSuOS4sOWOv1wiLCBcIuadpeWHpOWOv1wiLCBcIum5pOWzsOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XzEzXCIsIFtcIuS7meahg+W4glwiLCBcIua9nOaxn+W4glwiLCBcIuWkqemXqOW4glwiLCBcIuelnuWGnOaetuael+WMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE3XCIsIFtcIuatpuaxieW4glwiLCBcIuWNgeWgsOW4glwiLCBcIuilhOaoiuW4glwiLCBcIuiNhumXqOW4glwiLCBcIuWtneaEn+W4glwiLCBcIum7hOWGiOW4glwiLCBcIumEguW3nuW4glwiLCBcIum7hOefs+W4glwiLCBcIuWSuOWugeW4glwiLCBcIuiNhuW3nuW4glwiLCBcIuWunOaYjOW4glwiLCBcIumaj+W3nuW4glwiLCBcIuaBqeaWveWcn+WutuaXj+iLl+aXj+iHquayu+W3nlwiLCBcIuecgeebtOi+luWOv+e6p+ihjOaUv+WNleS9jVwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xOF8wXCIsIFtcIuiKmeiTieWMulwiLCBcIuWkqeW/g+WMulwiLCBcIuWys+m6k+WMulwiLCBcIuW8gOemj+WMulwiLCBcIumbqOiKseWMulwiLCBcIuacm+WfjuWMulwiLCBcIumVv+aymeWOv1wiLCBcIuWugeS5oeWOv1wiLCBcIua1j+mYs+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzFcIiwgW1wi5rC45a6a5Yy6XCIsIFwi5q2m6Zm15rqQ5Yy6XCIsIFwi5oWI5Yip5Y6/XCIsIFwi5qGR5qSN5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMThfMlwiLCBbXCLmrabpmbXljLpcIiwgXCLpvI7ln47ljLpcIiwgXCLlronkuaHljr9cIiwgXCLmsYnlr7/ljr9cIiwgXCLmvqfljr9cIiwgXCLkuLTmvqfljr9cIiwgXCLmoYPmupDljr9cIiwgXCLnn7Ppl6jljr9cIiwgXCLmtKXluILluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF8zXCIsIFtcIui1hOmYs+WMulwiLCBcIui1q+WxseWMulwiLCBcIuWNl+WOv1wiLCBcIuahg+axn+WOv1wiLCBcIuWuieWMluWOv1wiLCBcIuayheaxn+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzRcIiwgW1wi5bKz6Ziz5qW85Yy6XCIsIFwi5LqR5rqq5Yy6XCIsIFwi5ZCb5bGx5Yy6XCIsIFwi5bKz6Ziz5Y6/XCIsIFwi5Y2O5a655Y6/XCIsIFwi5rmY6Zi05Y6/XCIsIFwi5bmz5rGf5Y6/XCIsIFwi5rGo572X5biCXCIsIFwi5Li05rmY5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMThfNVwiLCBbXCLojbfloZjljLpcIiwgXCLoiqbmt57ljLpcIiwgXCLnn7Pls7DljLpcIiwgXCLlpKnlhYPljLpcIiwgXCLmoKrmtLLljr9cIiwgXCLmlLjljr9cIiwgXCLojLbpmbXljr9cIiwgXCLngo7pmbXljr9cIiwgXCLphrTpmbXluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF82XCIsIFtcIumbqOa5luWMulwiLCBcIuWys+WhmOWMulwiLCBcIua5mOa9reWOv1wiLCBcIua5mOS5oeW4glwiLCBcIumftuWxseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzdcIiwgW1wi54+g5pmW5Yy6XCIsIFwi6ZuB5bOw5Yy6XCIsIFwi55+z6byT5Yy6XCIsIFwi6JK45rmY5Yy6XCIsIFwi5Y2X5bKz5Yy6XCIsIFwi6KGh6Ziz5Y6/XCIsIFwi6KGh5Y2X5Y6/XCIsIFwi6KGh5bGx5Y6/XCIsIFwi6KGh5Lic5Y6/XCIsIFwi56WB5Lic5Y6/XCIsIFwi6ICS6Ziz5biCXCIsIFwi5bi45a6B5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMThfOFwiLCBbXCLljJfmuZbljLpcIiwgXCLoi4/ku5nljLpcIiwgXCLmoYLpmLPljr9cIiwgXCLlrpznq6Dljr9cIiwgXCLmsLjlhbTljr9cIiwgXCLlmInnpr7ljr9cIiwgXCLkuLTmrabljr9cIiwgXCLmsZ3ln47ljr9cIiwgXCLmoYLkuJzljr9cIiwgXCLlronku4Hljr9cIiwgXCLotYTlhbTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOF85XCIsIFtcIumbtumZteWMulwiLCBcIuWGt+awtOa7qeWMulwiLCBcIuelgemYs+WOv1wiLCBcIuS4nOWuieWOv1wiLCBcIuWPjOeJjOWOv1wiLCBcIumBk+WOv1wiLCBcIuaxn+awuOWOv1wiLCBcIuWugei/nOWOv1wiLCBcIuiTneWxseWOv1wiLCBcIuaWsOeUsOWOv1wiLCBcIuaxn+WNjueRtuaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzEwXCIsIFtcIuWPjOa4heWMulwiLCBcIuWkp+elpeWMulwiLCBcIuWMl+WhlOWMulwiLCBcIumCteS4nOWOv1wiLCBcIuaWsOmCteWOv1wiLCBcIumCtemYs+WOv1wiLCBcIumahuWbnuWOv1wiLCBcIua0nuWPo+WOv1wiLCBcIue7peWugeWOv1wiLCBcIuaWsOWugeWOv1wiLCBcIuWfjuatpeiLl+aXj+iHquayu+WOv1wiLCBcIuatpuWGiOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzExXCIsIFtcIum5pOWfjuWMulwiLCBcIuS4reaWueWOv1wiLCBcIuayhemZteWOv1wiLCBcIui+sOa6quWOv1wiLCBcIua6hua1puWOv1wiLCBcIuS8muWQjOWOv1wiLCBcIum6u+mYs+iLl+aXj+iHquayu+WOv1wiLCBcIuaWsOaZg+S+l+aXj+iHquayu+WOv1wiLCBcIuiKt+axn+S+l+aXj+iHquayu+WOv1wiLCBcIumdluW3nuiLl+aXj+S+l+aXj+iHquayu+WOv1wiLCBcIumAmumBk+S+l+aXj+iHquayu+WOv1wiLCBcIua0quaxn+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzEyXCIsIFtcIuWohOaYn+WMulwiLCBcIuWPjOWzsOWOv1wiLCBcIuaWsOWMluWOv1wiLCBcIuWGt+awtOaxn+W4glwiLCBcIua2n+a6kOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XzEzXCIsIFtcIuWQiemmluW4glwiLCBcIuazuOa6quWOv1wiLCBcIuWHpOWHsOWOv1wiLCBcIuiKseWeo+WOv1wiLCBcIuS/nemdluWOv1wiLCBcIuWPpOS4iOWOv1wiLCBcIuawuOmhuuWOv1wiLCBcIum+meWxseWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE4XCIsIFtcIumVv+aymeW4glwiLCBcIuW8oOWutueVjOW4glwiLCBcIuW4uOW+t+W4glwiLCBcIuebiumYs+W4glwiLCBcIuWys+mYs+W4glwiLCBcIuagqua0suW4glwiLCBcIua5mOa9reW4glwiLCBcIuihoemYs+W4glwiLCBcIumDtOW3nuW4glwiLCBcIuawuOW3nuW4glwiLCBcIumCtemYs+W4glwiLCBcIuaAgOWMluW4glwiLCBcIuWohOW6leW4glwiLCBcIua5mOilv+Wcn+WutuaXj+iLl+aXj+iHquayu+W3nlwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8xOV8wXCIsIFtcIuiNlOa5vuWMulwiLCBcIui2iuengOWMulwiLCBcIua1t+ePoOWMulwiLCBcIuWkqeays+WMulwiLCBcIueZveS6keWMulwiLCBcIum7hOWflOWMulwiLCBcIueVquemuuWMulwiLCBcIuiKsemDveWMulwiLCBcIuWNl+aymeWMulwiLCBcIuS7juWMluWMulwiLCBcIuWinuWfjuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzFcIiwgW1wi572X5rmW5Yy6XCIsIFwi56aP55Sw5Yy6XCIsIFwi5Y2X5bGx5Yy6XCIsIFwi5a6d5a6J5Yy6XCIsIFwi6b6Z5bKX5Yy6XCIsIFwi55uQ55Sw5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMTlfMlwiLCBbXCLmuIXln47ljLpcIiwgXCLmuIXmlrDljLpcIiwgXCLkvZvlhojljr9cIiwgXCLpmLPlsbHljr9cIiwgXCLov57lsbHlo67ml4/nkbbml4/oh6rmsrvljr9cIiwgXCLov57ljZfnkbbml4/oh6rmsrvljr9cIiwgXCLoi7HlvrfluIJcIiwgXCLov57lt57luIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV8zXCIsIFtcIuatpuaxn+WMulwiLCBcIua1iOaxn+WMulwiLCBcIuabsuaxn+WMulwiLCBcIuWni+WFtOWOv1wiLCBcIuS7geWMluWOv1wiLCBcIue/gea6kOWOv1wiLCBcIuS5s+a6kOeRtuaXj+iHquayu+WOv1wiLCBcIuaWsOS4sOWOv1wiLCBcIuS5kOaYjOW4glwiLCBcIuWNl+mbhOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzRcIiwgW1wi5rqQ5Z+O5Yy6XCIsIFwi57Sr6YeR5Y6/XCIsIFwi6b6Z5bed5Y6/XCIsIFwi6L+e5bmz5Y6/XCIsIFwi5ZKM5bmz5Y6/XCIsIFwi5Lic5rqQ5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTlfNVwiLCBbXCLmooXmsZ/ljLpcIiwgXCLmooXljr/ljLpcIiwgXCLlpKfln5Tljr9cIiwgXCLkuLDpobrljr9cIiwgXCLkupTljY7ljr9cIiwgXCLlubPov5zljr9cIiwgXCLolYnlsq3ljr9cIiwgXCLlhbTlroHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV82XCIsIFtcIua5mOahpeWMulwiLCBcIua9ruWuieWMulwiLCBcIumltuW5s+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzdcIiwgW1wi6b6Z5rmW5Yy6XCIsIFwi6YeR5bmz5Yy6XCIsIFwi5r+g5rGf5Yy6XCIsIFwi5r2u6Ziz5Yy6XCIsIFwi5r2u5Y2X5Yy6XCIsIFwi5r6E5rW35Yy6XCIsIFwi5Y2X5r6z5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMTlfOFwiLCBbXCLmppXln47ljLpcIiwgXCLmj63kuJzljLpcIiwgXCLmj63opb/ljr9cIiwgXCLmg6DmnaXljr9cIiwgXCLmma7lroHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8xOV85XCIsIFtcIuWfjuWMulwiLCBcIua1t+S4sOWOv1wiLCBcIumZhuays+WOv1wiLCBcIumZhuS4sOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzEwXCIsIFtcIuaDoOWfjuWMulwiLCBcIuaDoOmYs+WMulwiLCBcIuWNmue9l+WOv1wiLCBcIuaDoOS4nOWOv1wiLCBcIum+memXqOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzExXCIsIFtcIuS4nOiOnuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzEyXCIsIFtcIummmea0suWMulwiLCBcIuaWl+mXqOWMulwiLCBcIumHkea5vuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzEzXCIsIFtcIuS4reWxseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzE0XCIsIFtcIuiTrOaxn+WMulwiLCBcIuaxn+a1t+WMulwiLCBcIuaWsOS8muWMulwiLCBcIuWPsOWxseW4glwiLCBcIuW8gOW5s+W4glwiLCBcIum5pOWxseW4glwiLCBcIuaBqeW5s+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzE1XCIsIFtcIuemheWfjuWMulwiLCBcIuWNl+a1t+WMulwiLCBcIumhuuW+t+WMulwiLCBcIuS4ieawtOWMulwiLCBcIumrmOaYjuWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzE2XCIsIFtcIuerr+W3nuWMulwiLCBcIum8jua5luWMulwiLCBcIumrmOimgeWMulwiLCBcIuW5v+WugeWOv1wiLCBcIuaAgOmbhuWOv1wiLCBcIuWwgeW8gOWOv1wiLCBcIuW+t+W6huWOv1wiLCBcIuWbm+S8muW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzE3XCIsIFtcIuS6keWfjuWMulwiLCBcIuS6keWuieWMulwiLCBcIuaWsOWFtOWOv1wiLCBcIumDgeWNl+WOv1wiLCBcIue9l+WumuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzE4XCIsIFtcIuaxn+WfjuWMulwiLCBcIumYs+S4nOWMulwiLCBcIumYs+ilv+WOv1wiLCBcIumYs+aYpeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzE5XCIsIFtcIuiMguWNl+WMulwiLCBcIueUteeZveWMulwiLCBcIumrmOW3nuW4glwiLCBcIuWMluW3nuW4glwiLCBcIuS/oeWunOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XzIwXCIsIFtcIui1pOWdjuWMulwiLCBcIumcnuWxseWMulwiLCBcIuWdoeWktOWMulwiLCBcIum6u+eroOWMulwiLCBcIumBgua6quWOv1wiLCBcIuW+kOmXu+WOv1wiLCBcIuW7ieaxn+W4glwiLCBcIumbt+W3nuW4glwiLCBcIuWQtOW3neW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzE5XCIsIFtcIuW5v+W3nuW4glwiLCBcIua3seWcs+W4glwiLCBcIua4hei/nOW4glwiLCBcIumftuWFs+W4glwiLCBcIuays+a6kOW4glwiLCBcIuaiheW3nuW4glwiLCBcIua9ruW3nuW4glwiLCBcIuaxleWktOW4glwiLCBcIuaPremYs+W4glwiLCBcIuaxleWwvuW4glwiLCBcIuaDoOW3nuW4glwiLCBcIuS4nOiOnuW4glwiLCBcIuePoOa1t+W4glwiLCBcIuS4reWxseW4glwiLCBcIuaxn+mXqOW4glwiLCBcIuS9m+WxseW4glwiLCBcIuiCh+W6huW4glwiLCBcIuS6kea1ruW4glwiLCBcIumYs+axn+W4glwiLCBcIuiMguWQjeW4glwiLCBcIua5m+axn+W4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8yMF8wXCIsIFtcIuWFtOWugeWMulwiLCBcIumdkuengOWMulwiLCBcIuaxn+WNl+WMulwiLCBcIuilv+S5oeWhmOWMulwiLCBcIuiJr+W6huWMulwiLCBcIumCleWugeWMulwiLCBcIuatpum4o+WMulwiLCBcIumahuWuieWOv1wiLCBcIumprOWxseWOv1wiLCBcIuS4iuael+WOv1wiLCBcIuWuvumYs+WOv1wiLCBcIuaoquWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzFcIiwgW1wi56eA5bOw5Yy6XCIsIFwi5Y+g5b2p5Yy6XCIsIFwi6LGh5bGx5Yy6XCIsIFwi5LiD5pif5Yy6XCIsIFwi6ZuB5bGx5Yy6XCIsIFwi5Li05qGC5Yy6XCIsIFwi6Ziz5pyU5Y6/XCIsIFwi54G15bed5Y6/XCIsIFwi5YWo5bee5Y6/XCIsIFwi5YW05a6J5Y6/XCIsIFwi5rC456aP5Y6/XCIsIFwi54GM6Ziz5Y6/XCIsIFwi6b6Z6IOc5ZCE5peP6Ieq5rK75Y6/XCIsIFwi6LWE5rqQ5Y6/XCIsIFwi5bmz5LmQ5Y6/XCIsIFwi6I2U5rWm5Y6/XCIsIFwi5oGt5Z+O55G25peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjBfMlwiLCBbXCLln47kuK3ljLpcIiwgXCLpsbzls7DljLpcIiwgXCLmn7PljZfljLpcIiwgXCLmn7PljJfljLpcIiwgXCLmn7PmsZ/ljr9cIiwgXCLmn7Pln47ljr9cIiwgXCLpub/lr6jljr9cIiwgXCLono3lronljr9cIiwgXCLono3msLToi5fml4/oh6rmsrvljr9cIiwgXCLkuInmsZ/kvpfml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF8zXCIsIFtcIuS4h+engOWMulwiLCBcIumVv+a0suWMulwiLCBcIum+meWcqeWMulwiLCBcIuiLjeaip+WOv1wiLCBcIuiXpOWOv1wiLCBcIuiSmeWxseWOv1wiLCBcIuWykea6quW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzRcIiwgW1wi5riv5YyX5Yy6XCIsIFwi5riv5Y2X5Yy6XCIsIFwi6KaD5aGY5Yy6XCIsIFwi5bmz5Y2X5Y6/XCIsIFwi5qGC5bmz5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjBfNVwiLCBbXCLnjonlt57ljLpcIiwgXCLnpo/nu7XljLpcIiwgXCLlrrnljr9cIiwgXCLpmYblt53ljr9cIiwgXCLljZrnmb3ljr9cIiwgXCLlhbTkuJrljr9cIiwgXCLljJfmtYHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF82XCIsIFtcIumSpuWNl+WMulwiLCBcIumSpuWMl+WMulwiLCBcIueBteWxseWOv1wiLCBcIua1puWMl+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzdcIiwgW1wi5rW35Z+O5Yy6XCIsIFwi6ZO25rW35Yy6XCIsIFwi6ZOB5bGx5riv5Yy6XCIsIFwi5ZCI5rWm5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjBfOFwiLCBbXCLmuK/lj6PljLpcIiwgXCLpmLLln47ljLpcIiwgXCLkuIrmgJ3ljr9cIiwgXCLkuJzlhbTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMF85XCIsIFtcIuaxn+W3nuWMulwiLCBcIuaJtue7peWOv1wiLCBcIuWugeaYjuWOv1wiLCBcIum+meW3nuWOv1wiLCBcIuWkp+aWsOWOv1wiLCBcIuWkqeetieWOv1wiLCBcIuWHreelpeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzEwXCIsIFtcIuWPs+axn+WMulwiLCBcIueUsOmYs+WOv1wiLCBcIueUsOS4nOWOv1wiLCBcIuW5s+aenOWOv1wiLCBcIuW+t+S/neWOv1wiLCBcIumCo+WdoeWOv1wiLCBcIuWHjOS6keWOv1wiLCBcIuS5kOS4muWOv1wiLCBcIueUsOael+WOv1wiLCBcIuilv+ael+WOv1wiLCBcIumahuael+WQhOaXj+iHquayu+WOv1wiLCBcIumdluilv+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzExXCIsIFtcIumHkeWfjuaxn+WMulwiLCBcIuWNl+S4ueWOv1wiLCBcIuWkqeWzqOWOv1wiLCBcIuWHpOWxseWOv1wiLCBcIuS4nOWFsOWOv1wiLCBcIue9l+WfjuS7q+S9rOaXj+iHquayu+WOv1wiLCBcIueOr+axn+avm+WNl+aXj+iHquayu+WOv1wiLCBcIuW3tOmprOeRtuaXj+iHquayu+WOv1wiLCBcIumDveWuieeRtuaXj+iHquayu+WOv1wiLCBcIuWkp+WMlueRtuaXj+iHquayu+WOv1wiLCBcIuWunOW3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzEyXCIsIFtcIuWFtOWuvuWMulwiLCBcIuW/u+WfjuWOv1wiLCBcIuixoeW3nuWOv1wiLCBcIuatpuWuo+WOv1wiLCBcIumHkeengOeRtuaXj+iHquayu+WOv1wiLCBcIuWQiOWxseW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXzEzXCIsIFtcIuWFq+atpeWMulwiLCBcIuaYreW5s+WOv1wiLCBcIumSn+WxseWOv1wiLCBcIuWvjOW3neeRtuaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIwXCIsIFtcIuWNl+WugeW4glwiLCBcIuahguael+W4glwiLCBcIuafs+W3nuW4glwiLCBcIuaip+W3nuW4glwiLCBcIui0tea4r+W4glwiLCBcIueOieael+W4glwiLCBcIumSpuW3nuW4glwiLCBcIuWMl+a1t+W4glwiLCBcIumYsuWfjua4r+W4glwiLCBcIuW0h+W3puW4glwiLCBcIueZvuiJsuW4glwiLCBcIuays+axoOW4glwiLCBcIuadpeWuvuW4glwiLCBcIui0uuW3nuW4glwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8yMV8wXCIsIFtcIuengOiLseWMulwiLCBcIum+meWNjuWMulwiLCBcIueQvOWxseWMulwiLCBcIue+juWFsOWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzIxXzFcIiwgW1wi5rW35qOg5Yy6XCIsIFwi5ZCJ6Ziz5Yy6XCIsIFwi5aSp5rav5Yy6XCIsIFwi5bSW5bee5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMjFfMlwiLCBbXCLopb/mspnnvqTlsptcIiwgXCLljZfmspnnvqTlsptcIiwgXCLkuK3mspnnvqTlspvnmoTlspvnpIHlj4rlhbbmtbfln59cIl0pO1xyXG5kc3kuYWRkKFwiMF8yMV8zXCIsIFtcIuS6lOaMh+WxseW4glwiLCBcIueQvOa1t+W4glwiLCBcIuWEi+W3nuW4glwiLCBcIuaWh+aYjOW4glwiLCBcIuS4h+WugeW4glwiLCBcIuS4nOaWueW4glwiLCBcIuWumuWuieWOv1wiLCBcIuWxr+aYjOWOv1wiLCBcIua+hOi/iOWOv1wiLCBcIuS4tOmrmOWOv1wiLCBcIueZveaymem7juaXj+iHquayu+WOv1wiLCBcIuaYjOaxn+m7juaXj+iHquayu+WOv1wiLCBcIuS5kOS4nOm7juaXj+iHquayu+WOv1wiLCBcIumZteawtOm7juaXj+iHquayu+WOv1wiLCBcIuS/neS6rem7juaXj+iLl+aXj+iHquayu+WOv1wiLCBcIueQvOS4rem7juaXj+iLl+aXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIxXCIsIFtcIua1t+WPo+W4glwiLCBcIuS4ieS6muW4glwiLCBcIuS4ieaymeW4glwiLCBcIuecgeebtOi+luWOv+e6p+ihjOaUv+WMuuWIklwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8yMl8wXCIsIFtcIumUpuaxn+WMulwiLCBcIumdkue+iuWMulwiLCBcIumHkeeJm+WMulwiLCBcIuatpuS+r+WMulwiLCBcIuaIkOWNjuWMulwiLCBcIum+meaziempv+WMulwiLCBcIumdkueZveaxn+WMulwiLCBcIuaWsOmDveWMulwiLCBcIua4qeaxn+WMulwiLCBcIumHkeWgguWOv1wiLCBcIuWPjOa1geWOv1wiLCBcIumDq+WOv1wiLCBcIuWkp+mCkeWOv1wiLCBcIuiSsuaxn+WOv1wiLCBcIuaWsOa0peWOv1wiLCBcIumDveaxn+WgsOW4glwiLCBcIuW9reW3nuW4glwiLCBcIumCm+W0g+W4glwiLCBcIuW0h+W3nuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzFcIiwgW1wi5Yip5bee5Yy6XCIsIFwi5pit5YyW5Yy6XCIsIFwi5pyd5aSp5Yy6XCIsIFwi5pe66IuN5Y6/XCIsIFwi6Z2S5bed5Y6/XCIsIFwi5YmR6ZiB5Y6/XCIsIFwi6IuN5rqq5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjJfMlwiLCBbXCLmtqrln47ljLpcIiwgXCLmuLjku5nljLpcIiwgXCLkuInlj7Dljr9cIiwgXCLnm5Dkuq3ljr9cIiwgXCLlronljr9cIiwgXCLmopPmvbzljr9cIiwgXCLljJflt53nvozml4/oh6rmsrvljr9cIiwgXCLlubPmrabljr9cIiwgXCLmsZ/msrnluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl8zXCIsIFtcIuaXjOmYs+WMulwiLCBcIuS4reaxn+WOv1wiLCBcIue9l+axn+WOv1wiLCBcIuW5v+axieW4glwiLCBcIuS7gOmCoeW4glwiLCBcIue7teerueW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzRcIiwgW1wi6aG65bqG5Yy6XCIsIFwi6auY5Z2q5Yy6XCIsIFwi5ZiJ6Zm15Yy6XCIsIFwi5Y2X6YOo5Y6/XCIsIFwi6JCl5bGx5Y6/XCIsIFwi6JOs5a6J5Y6/XCIsIFwi5Luq6ZmH5Y6/XCIsIFwi6KW/5YWF5Y6/XCIsIFwi6ZiG5Lit5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjJfNVwiLCBbXCLlub/lronljLpcIiwgXCLliY3plIvljLpcIiwgXCLlsrPmsaDljr9cIiwgXCLmrabog5zljr9cIiwgXCLpgrvmsLTljr9cIiwgXCLljY7ok6XluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl82XCIsIFtcIuiIueWxseWMulwiLCBcIuWuieWxheWMulwiLCBcIuiTrOa6quWOv1wiLCBcIuWwhOa0quWOv1wiLCBcIuWkp+iLseWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzdcIiwgW1wi5biC5Lit5Yy6XCIsIFwi5Lic5YW05Yy6XCIsIFwi5aiB6L+c5Y6/XCIsIFwi6LWE5Lit5Y6/XCIsIFwi6ZqG5piM5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjJfOFwiLCBbXCLluILkuK3ljLpcIiwgXCLmspnmub7ljLpcIiwgXCLkupTpgJrmoaXljLpcIiwgXCLph5Hlj6PmsrPljLpcIiwgXCLnio3kuLrljr9cIiwgXCLkupXnoJTljr9cIiwgXCLlpLnmsZ/ljr9cIiwgXCLmspDlt53ljr9cIiwgXCLls6jovrnlvZ3ml4/oh6rmsrvljr9cIiwgXCLpqazovrnlvZ3ml4/oh6rmsrvljr9cIiwgXCLls6jnnInlsbHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yMl85XCIsIFtcIuiHqua1geS6leWMulwiLCBcIui0oeS6leWMulwiLCBcIuWkp+WuieWMulwiLCBcIuayv+a7qeWMulwiLCBcIuiNo+WOv1wiLCBcIuWvjOmhuuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzEwXCIsIFtcIuaxn+mYs+WMulwiLCBcIue6s+a6quWMulwiLCBcIum+memprOa9reWMulwiLCBcIuazuOWOv1wiLCBcIuWQiOaxn+WOv1wiLCBcIuWPmeawuOWOv1wiLCBcIuWPpOiUuuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzExXCIsIFtcIue/oOWxj+WMulwiLCBcIuWNl+a6quWMulwiLCBcIuWunOWuvuWOv1wiLCBcIuaxn+WuieWOv1wiLCBcIumVv+WugeWOv1wiLCBcIumrmOWOv1wiLCBcIuePmeWOv1wiLCBcIuetoOi/nuWOv1wiLCBcIuWFtOaWh+WOv1wiLCBcIuWxj+WxseWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzEyXCIsIFtcIuS4nOWMulwiLCBcIuilv+WMulwiLCBcIuS7geWSjOWMulwiLCBcIuexs+aYk+WOv1wiLCBcIuebkOi+ueWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzEzXCIsIFtcIuW3tOW3nuWMulwiLCBcIuaBqemYs+WMulwiLCBcIumAmuaxn+WOv1wiLCBcIuWNl+axn+WOv1wiLCBcIuW5s+aYjOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzE0XCIsIFtcIumAmuW3neWMulwiLCBcIui+vuW3neWMulwiLCBcIuWuo+axieWOv1wiLCBcIuW8gOaxn+WOv1wiLCBcIuWkp+erueWOv1wiLCBcIua4oOWOv1wiLCBcIuS4h+a6kOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzE1XCIsIFtcIumbgeaxn+WMulwiLCBcIuWuieWys+WOv1wiLCBcIuS5kOiHs+WOv1wiLCBcIueugOmYs+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzE2XCIsIFtcIuS4nOWdoeWMulwiLCBcIuW9reWxseWMulwiLCBcIuS7geWvv+WOv1wiLCBcIua0qumbheWOv1wiLCBcIuS4ueajseWOv1wiLCBcIumdkuelnuWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzE3XCIsIFtcIumbqOWfjuWMulwiLCBcIuWQjeWxseWMulwiLCBcIuiNpee7j+WOv1wiLCBcIuaxiea6kOWOv1wiLCBcIuefs+ajieWOv1wiLCBcIuWkqeWFqOWOv1wiLCBcIuiKpuWxseWOv1wiLCBcIuWuneWFtOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzE4XCIsIFtcIuaxtuW3neWOv1wiLCBcIueQhuWOv1wiLCBcIuiMguWOv1wiLCBcIuadvua9mOWOv1wiLCBcIuS5neWvqOayn+WOv1wiLCBcIumHkeW3neWOv1wiLCBcIuWwj+mHkeWOv1wiLCBcIum7keawtOWOv1wiLCBcIumprOWwlOW6t+WOv1wiLCBcIuWjpOWhmOWOv1wiLCBcIumYv+WdneWOv1wiLCBcIuiLpeWwlOebluWOv1wiLCBcIue6ouWOn+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzE5XCIsIFtcIuW6t+WumuW4glwiLCBcIuazuOWumuWOv1wiLCBcIuS4ueW3tOWOv1wiLCBcIuS5nem+meWOv1wiLCBcIumbheaxn+WOv1wiLCBcIumBk+WtmuWOv1wiLCBcIueCiemcjeWOv1wiLCBcIueUmOWtnOWOv1wiLCBcIuaWsOm+meWOv1wiLCBcIuW+t+agvOWOv1wiLCBcIueZveeOieWOv1wiLCBcIuefs+a4oOWOv1wiLCBcIuiJsui+vuWOv1wiLCBcIueQhuWhmOWOv1wiLCBcIuW3tOWhmOWOv1wiLCBcIuS5oeWfjuWOv1wiLCBcIueou+WfjuWOv1wiLCBcIuW+l+iNo+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXzIwXCIsIFtcIuilv+aYjOW4glwiLCBcIuacqOmHjOiXj+aXj+iHquayu+WOv1wiLCBcIuebkOa6kOWOv1wiLCBcIuW+t+aYjOWOv1wiLCBcIuS8mueQhuWOv1wiLCBcIuS8muS4nOWOv1wiLCBcIuWugeWNl+WOv1wiLCBcIuaZruagvOWOv1wiLCBcIuW4g+aLluWOv1wiLCBcIumHkemYs+WOv1wiLCBcIuaYreinieWOv1wiLCBcIuWWnOW+t+WOv1wiLCBcIuWGleWugeWOv1wiLCBcIui2iuilv+WOv1wiLCBcIueUmOa0m+WOv1wiLCBcIue+juWnkeWOv1wiLCBcIumbt+azouWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIyXCIsIFtcIuaIkOmDveW4glwiLCBcIuW5v+WFg+W4glwiLCBcIue7temYs+W4glwiLCBcIuW+t+mYs+W4glwiLCBcIuWNl+WFheW4glwiLCBcIuW5v+WuieW4glwiLCBcIumBguWugeW4glwiLCBcIuWGheaxn+W4glwiLCBcIuS5kOWxseW4glwiLCBcIuiHqui0oeW4glwiLCBcIuazuOW3nuW4glwiLCBcIuWunOWuvuW4glwiLCBcIuaUgOaeneiKseW4glwiLCBcIuW3tOS4reW4glwiLCBcIui+vuW3nuW4glwiLCBcIui1hOmYs+W4glwiLCBcIuecieWxseW4glwiLCBcIumbheWuieW4glwiLCBcIumYv+WdneiXj+aXj+e+jOaXj+iHquayu+W3nlwiLCBcIueUmOWtnOiXj+aXj+iHquayu+W3nlwiLCBcIuWHieWxseW9neaXj+iHquayu+W3nlwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8yM18wXCIsIFtcIuWNl+aYjuWMulwiLCBcIuS6keWyqeWMulwiLCBcIuiKsea6quWMulwiLCBcIuS5jOW9k+WMulwiLCBcIueZveS6keWMulwiLCBcIuinguWxsea5luWMulwiLCBcIuW8gOmYs+WOv1wiLCBcIuaBr+eDveWOv1wiLCBcIuS/ruaWh+WOv1wiLCBcIua4hemVh+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzIzXzFcIiwgW1wi6ZKf5bGx5Yy6XCIsIFwi5YWt5p6d54m55Yy6XCIsIFwi5rC05Z+O5Y6/XCIsIFwi55uY5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjNfMlwiLCBbXCLnuqLoirHlspfljLpcIiwgXCLmsYflt53ljLpcIiwgXCLpgbXkuYnljr9cIiwgXCLmoZDmopPljr9cIiwgXCLnu6XpmLPljr9cIiwgXCLmraPlronljr9cIiwgXCLpgZPnnJ/ku6Hkvazml4/oi5fml4/oh6rmsrvljr9cIiwgXCLliqHlt53ku6Hkvazml4/oi5fml4/oh6rmsrvljr9cIiwgXCLlh6Tlhojljr9cIiwgXCLmuYTmva3ljr9cIiwgXCLkvZnluobljr9cIiwgXCLkuaDmsLTljr9cIiwgXCLotaTmsLTluIJcIiwgXCLku4HmgIDluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yM18zXCIsIFtcIuilv+engOWMulwiLCBcIuW5s+WdneWMulwiLCBcIuaZruWumuWOv1wiLCBcIumVh+WugeW4g+S+neaXj+iLl+aXj+iHquayu+WOv1wiLCBcIuWFs+WyreW4g+S+neaXj+iLl+aXj+iHquayu+WOv1wiLCBcIue0q+S6keiLl+aXj+W4g+S+neaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIzXzRcIiwgW1wi5LiD5pif5YWz5Yy6XCIsIFwi5aSn5pa55Y6/XCIsIFwi6buU6KW/5Y6/XCIsIFwi6YeR5rKZ5Y6/XCIsIFwi57uH6YeR5Y6/XCIsIFwi57qz6ZuN5Y6/XCIsIFwi5aiB5a6B5b2d5peP5Zue5peP6IuX5peP6Ieq5rK75Y6/XCIsIFwi6LWr56ug5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjNfNVwiLCBbXCLnoqfmsZ/ljLpcIiwgXCLkuIflsbHljLpcIiwgXCLmsZ/lj6Pljr9cIiwgXCLnjonlsY/kvpfml4/oh6rmsrvljr9cIiwgXCLnn7PpmKHljr9cIiwgXCLmgJ3ljZfljr9cIiwgXCLljbDmsZ/lnJ/lrrbml4/oi5fml4/oh6rmsrvljr9cIiwgXCLlvrfmsZ/ljr9cIiwgXCLmsr/msrPlnJ/lrrbml4/oh6rmsrvljr9cIiwgXCLmnb7moYPoi5fml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yM182XCIsIFtcIuWHr+mHjOW4glwiLCBcIum7hOW5s+WOv1wiLCBcIuaWveenieWOv1wiLCBcIuS4ieepl+WOv1wiLCBcIumVh+i/nOWOv1wiLCBcIuWykeW3qeWOv1wiLCBcIuWkqeafseWOv1wiLCBcIumUpuWxj+WOv1wiLCBcIuWJkeays+WOv1wiLCBcIuWPsOaxn+WOv1wiLCBcIum7juW5s+WOv1wiLCBcIuamleaxn+WOv1wiLCBcIuS7juaxn+WOv1wiLCBcIumbt+WxseWOv1wiLCBcIum6u+axn+WOv1wiLCBcIuS4ueWvqOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzIzXzdcIiwgW1wi6YO95YyA5biCXCIsIFwi56aP5rOJ5biCXCIsIFwi6I2U5rOi5Y6/XCIsIFwi6LS15a6a5Y6/XCIsIFwi55Ou5a6J5Y6/XCIsIFwi54us5bGx5Y6/XCIsIFwi5bmz5aGY5Y6/XCIsIFwi572X55S45Y6/XCIsIFwi6ZW/6aG65Y6/XCIsIFwi6b6Z6YeM5Y6/XCIsIFwi5oOg5rC05Y6/XCIsIFwi5LiJ6YO95rC05peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjNfOFwiLCBbXCLlhbTkuYnluIJcIiwgXCLlhbTku4Hljr9cIiwgXCLmma7lronljr9cIiwgXCLmmbTpmobljr9cIiwgXCLotJ7kuLDljr9cIiwgXCLmnJvosJ/ljr9cIiwgXCLlhozkuqjljr9cIiwgXCLlronpvpnljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yM1wiLCBbXCLotLXpmLPluIJcIiwgXCLlha3nm5jmsLTluIJcIiwgXCLpgbXkuYnluIJcIiwgXCLlronpobrluIJcIiwgXCLmr5XoioLlnLDljLpcIiwgXCLpk5zku4HlnLDljLpcIiwgXCLpu5TkuJzljZfoi5fml4/kvpfml4/oh6rmsrvlt55cIiwgXCLpu5TljZfluIPkvp3ml4/oi5fml4/oh6rmsrvlt55cIiwgXCLpu5Topb/ljZfluIPkvp3ml4/oi5fml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjRfMFwiLCBbXCLkupTljY7ljLpcIiwgXCLnm5jpvpnljLpcIiwgXCLlrpjmuKHljLpcIiwgXCLopb/lsbHljLpcIiwgXCLkuJzlt53ljLpcIiwgXCLlkYjotKHljLpcIiwgXCLmmYvlroHljr9cIiwgXCLlr4zmsJHljr9cIiwgXCLlrpzoia/ljr9cIiwgXCLnn7PmnpflvZ3ml4/oh6rmsrvljr9cIiwgXCLltanmmI7ljr9cIiwgXCLnpoTlip3lvZ3ml4/oi5fml4/oh6rmsrvljr9cIiwgXCLlr7vnlLjlm57ml4/lvZ3ml4/oh6rmsrvljr9cIiwgXCLlronlroHluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xXCIsIFtcIum6kum6n+WMulwiLCBcIumprOm+meWOv1wiLCBcIumZhuiJr+WOv1wiLCBcIuW4iOWul+WOv1wiLCBcIue9l+W5s+WOv1wiLCBcIuWvjOa6kOWOv1wiLCBcIuS8muazveWOv1wiLCBcIuayvuebiuWOv1wiLCBcIuWuo+WogeW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzI0XzJcIiwgW1wi57qi5aGU5Yy6XCIsIFwi5rGf5bed5Y6/XCIsIFwi5r6E5rGf5Y6/XCIsIFwi6YCa5rW35Y6/XCIsIFwi5Y2O5a6B5Y6/XCIsIFwi5piT6Zeo5Y6/XCIsIFwi5bOo5bGx5b2d5peP6Ieq5rK75Y6/XCIsIFwi5paw5bmz5b2d5peP5YKj5peP6Ieq5rK75Y6/XCIsIFwi5YWD5rGf5ZOI5bC85peP5b2d5peP5YKj5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfM1wiLCBbXCLpmobpmLPljLpcIiwgXCLmlr3nlLjljr9cIiwgXCLpvpnpmbXljr9cIiwgXCLmmIzlroHljr9cIiwgXCLohb7lhrLluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF80XCIsIFtcIuaYremYs+WMulwiLCBcIumygeeUuOWOv1wiLCBcIuW3p+WutuWOv1wiLCBcIuebkOa0peWOv1wiLCBcIuWkp+WFs+WOv1wiLCBcIuawuOWWhOWOv1wiLCBcIue7peaxn+WOv1wiLCBcIumVh+mbhOWOv1wiLCBcIuW9neiJr+WOv1wiLCBcIuWogeS/oeWOv1wiLCBcIuawtOWvjOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI0XzVcIiwgW1wi5Y+k5Z+O5Yy6XCIsIFwi546J6b6Z57qz6KW/5peP6Ieq5rK75Y6/XCIsIFwi5rC46IOc5Y6/XCIsIFwi5Y2O5Z2q5Y6/XCIsIFwi5a6B6JKX5b2d5peP6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfNlwiLCBbXCLmgJ3ojIXljLpcIiwgXCLlroHmtLHlk4jlsLzml4/lvZ3ml4/oh6rmsrvljr9cIiwgXCLloqjmsZ/lk4jlsLzml4/oh6rmsrvljr9cIiwgXCLmma/kuJzlvZ3ml4/oh6rmsrvljr9cIiwgXCLmma/osLflgqPml4/lvZ3ml4/oh6rmsrvljr9cIiwgXCLplYfmsoXlvZ3ml4/lk4jlsLzml4/mi4nnpZzml4/oh6rmsrvljr9cIiwgXCLmsZ/ln47lk4jlsLzml4/lvZ3ml4/oh6rmsrvljr9cIiwgXCLlrZ/ov57lgqPml4/mi4nnpZzml4/kvaTml4/oh6rmsrvljr9cIiwgXCLmvpzmsqfmi4nnpZzml4/oh6rmsrvljr9cIiwgXCLopb/nm5/kvaTml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF83XCIsIFtcIuS4tOe/lOWMulwiLCBcIuWHpOW6huWOv1wiLCBcIuS6keWOv1wiLCBcIuawuOW+t+WOv1wiLCBcIumVh+W6t+WOv1wiLCBcIuWPjOaxn+aLieelnOaXj+S9pOaXj+W4g+acl+aXj+WCo+aXj+iHquayu+WOv1wiLCBcIuiAv+mprOWCo+aXj+S9pOaXj+iHquayu+WOv1wiLCBcIuayp+a6kOS9pOaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI0XzhcIiwgW1wi55Ge5Li95biCXCIsIFwi6IqS5biCXCIsIFwi5qKB5rKz5Y6/XCIsIFwi55uI5rGf5Y6/XCIsIFwi6ZmH5bed5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjRfOVwiLCBbXCLms7jmsLTljr9cIiwgXCLnpo/otKHljr9cIiwgXCLotKHlsbHni6zpvpnml4/mgJLml4/oh6rmsrvljr9cIiwgXCLlhbDlnarnmb3ml4/mma7nsbPml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xMFwiLCBbXCLpppnmoLzph4zmi4nluIJcIiwgXCLlvrfpkqbljr9cIiwgXCLnu7Topb/lgojlg7Pml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xMVwiLCBbXCLlpKfnkIbluIJcIiwgXCLmvL7mv57lvZ3ml4/oh6rmsrvljr9cIiwgXCLnpaXkupHljr9cIiwgXCLlrr7lt53ljr9cIiwgXCLlvKXmuKHljr9cIiwgXCLljZfmtqflvZ3ml4/oh6rmsrvljr9cIiwgXCLlt43lsbHlvZ3ml4/lm57ml4/oh6rmsrvljr9cIiwgXCLmsLjlubPljr9cIiwgXCLkupHpvpnljr9cIiwgXCLmtLHmupDljr9cIiwgXCLliZHlt53ljr9cIiwgXCLpuaTluobljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xMlwiLCBbXCLmpZrpm4TluIJcIiwgXCLlj4zmn4/ljr9cIiwgXCLniZ/lrprljr9cIiwgXCLljZfljY7ljr9cIiwgXCLlp5rlronljr9cIiwgXCLlpKflp5rljr9cIiwgXCLmsLjku4Hljr9cIiwgXCLlhYPosIvljr9cIiwgXCLmrablrprljr9cIiwgXCLnpoTkuLDljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xM1wiLCBbXCLkuKrml6fluIJcIiwgXCLlvIDov5zluIJcIiwgXCLokpnoh6rluIJcIiwgXCLlvKXli5LluIJcIiwgXCLlsY/ovrnoi5fml4/oh6rmsrvljr9cIiwgXCLlu7rmsLTljr9cIiwgXCLnn7PlsY/ljr9cIiwgXCLms7jopb/ljr9cIiwgXCLlhYPpmLPljr9cIiwgXCLnuqLmsrPljr9cIiwgXCLph5HlubPoi5fml4/nkbbml4/lgqPml4/oh6rmsrvljr9cIiwgXCLnu7/mmKXljr9cIiwgXCLmsrPlj6Pnkbbml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xNFwiLCBbXCLmloflsbHluIJcIiwgXCLnoJrlsbHljr9cIiwgXCLopb/nlbTljr9cIiwgXCLpurvmoJflnaHljr9cIiwgXCLpqazlhbPljr9cIiwgXCLkuJjljJfljr9cIiwgXCLlub/ljZfljr9cIiwgXCLlr4zlroHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNF8xNVwiLCBbXCLmma/mtKrluIJcIiwgXCLli5Dmtbfljr9cIiwgXCLli5DohYrljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNFwiLCBbXCLmmIbmmI7luIJcIiwgXCLmm7LpnZbluIJcIiwgXCLnjonmuqrluIJcIiwgXCLkv53lsbHluIJcIiwgXCLmmK3pgJrluIJcIiwgXCLkuL3msZ/luIJcIiwgXCLmma7mtLHluIJcIiwgXCLkuLTmsqfluIJcIiwgXCLlvrflro/lgqPml4/mma/poofml4/oh6rmsrvlt55cIiwgXCLmgJLmsZ/lgojlg7Pml4/oh6rmsrvlt55cIiwgXCLov6rluobol4/ml4/oh6rmsrvlt55cIiwgXCLlpKfnkIbnmb3ml4/oh6rmsrvlt55cIiwgXCLmpZrpm4TlvZ3ml4/oh6rmsrvlt55cIiwgXCLnuqLmsrPlk4jlsLzml4/lvZ3ml4/oh6rmsrvlt55cIiwgXCLmloflsbHlo67ml4/oi5fml4/oh6rmsrvlt55cIiwgXCLopb/lj4zniYjnurPlgqPml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjVfMFwiLCBbXCLln47lhbPljLpcIiwgXCLmnpflkajljr9cIiwgXCLlvZPpm4Tljr9cIiwgXCLlsLzmnKjljr9cIiwgXCLmm7LmsLTljr9cIiwgXCLloIbpvpnlvrfluobljr9cIiwgXCLovr7lrZzljr9cIiwgXCLloqjnq7nlt6XljaHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNV8xXCIsIFtcIumCo+absuWOv1wiLCBcIuWYiem7juWOv1wiLCBcIuavlOWmguWOv1wiLCBcIuiBguiNo+WOv1wiLCBcIuWuieWkmuWOv1wiLCBcIueUs+aJjuWOv1wiLCBcIue0ouWOv1wiLCBcIuePreaIiOWOv1wiLCBcIuW3tOmdkuWOv1wiLCBcIuWwvOeOm+WOv1wiLCBcIuWPjOa5luWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI1XzJcIiwgW1wi5Y2h6Iul5Yy6XCIsIFwi5rGf6L6+5Y6/XCIsIFwi6LSh6KeJ5Y6/XCIsIFwi57G75LmM6b2Q5Y6/XCIsIFwi5LiB6Z2S5Y6/XCIsIFwi5a+f6ZuF5Y6/XCIsIFwi5YWr5a6/5Y6/XCIsIFwi5bem6LSh5Y6/XCIsIFwi6IqS5bq35Y6/XCIsIFwi5rSb6ZqG5Y6/XCIsIFwi6L655Z2d5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjVfM1wiLCBbXCLlt7TlrpzljLpcIiwgXCLlt6XluIPmsZ/ovr7ljr9cIiwgXCLnsbPmnpfljr9cIiwgXCLloqjohLHljr9cIiwgXCLms6Llr4bljr9cIiwgXCLlr5/pmoXljr9cIiwgXCLmnJfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNV80XCIsIFtcIuS5g+S4nOWOv1wiLCBcIuaJjuWbiuWOv1wiLCBcIui0oeWYjuWOv1wiLCBcIuahkeaXpeWOv1wiLCBcIueQvOe7k+WOv1wiLCBcIuabsuadvuWOv1wiLCBcIuaOque+juWOv1wiLCBcIua0m+aJjuWOv1wiLCBcIuWKoOafpeWOv1wiLCBcIumahuWtkOWOv1wiLCBcIumUmemCo+WOv1wiLCBcIua1quWNoeWtkOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI1XzVcIiwgW1wi5qGR54+g5a2c5Yy6XCIsIFwi5Y2X5pyo5p6X5Y6/XCIsIFwi5rGf5a2c5Y6/XCIsIFwi5a6a5pel5Y6/XCIsIFwi6JCo6L+m5Y6/XCIsIFwi5ouJ5a2c5Y6/XCIsIFwi5piC5LuB5Y6/XCIsIFwi6LCi6YCa6Zeo5Y6/XCIsIFwi55m95pyX5Y6/XCIsIFwi5LuB5biD5Y6/XCIsIFwi5bq36ams5Y6/XCIsIFwi5a6a57uT5Y6/XCIsIFwi5Luy5be05Y6/XCIsIFwi5Lqa5Lic5Y6/XCIsIFwi5ZCJ6ZqG5Y6/XCIsIFwi6IGC5ouJ5pyo5Y6/XCIsIFwi6JCo5ZiO5Y6/XCIsIFwi5bKX5be05Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjVfNlwiLCBbXCLmma7lhbDljr9cIiwgXCLmnK3ovr7ljr9cIiwgXCLlmbblsJTljr9cIiwgXCLml6XlnJ/ljr9cIiwgXCLpnanlkInljr9cIiwgXCLmlLnliJnljr9cIiwgXCLmjqrli6Tljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNVwiLCBbXCLmi4nokKjluIJcIiwgXCLpgqPmm7LlnLDljLpcIiwgXCLmmIzpg73lnLDljLpcIiwgXCLmnpfoip3lnLDljLpcIiwgXCLlsbHljZflnLDljLpcIiwgXCLml6XlloDliJnlnLDljLpcIiwgXCLpmL/ph4zlnLDljLpcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjZfMFwiLCBbXCLmlrDln47ljLpcIiwgXCLnopHmnpfljLpcIiwgXCLojrLmuZbljLpcIiwgXCLngZ7moaXljLpcIiwgXCLmnKrlpK7ljLpcIiwgXCLpm4HloZTljLpcIiwgXCLpmI7oia/ljLpcIiwgXCLkuLTmvbzljLpcIiwgXCLplb/lronljLpcIiwgXCLpq5jpmbXljLpcIiwgXCLok53nlLDljr9cIiwgXCLlkajoh7Pljr9cIiwgXCLmiLfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNl8xXCIsIFtcIuWuneWhlOWMulwiLCBcIuW7tumVv+WOv1wiLCBcIuW7tuW3neWOv1wiLCBcIuWtkOmVv+WOv1wiLCBcIuWuieWhnuWOv1wiLCBcIuW/l+S4ueWOv1wiLCBcIuWQtOi1t+WOv1wiLCBcIueUmOazieWOv1wiLCBcIuWvjOWOv1wiLCBcIua0m+W3neWOv1wiLCBcIuWunOW3neWOv1wiLCBcIum7hOm+meWOv1wiLCBcIum7hOmZteWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI2XzJcIiwgW1wi546L55uK5Yy6XCIsIFwi5Y2w5Y+w5Yy6XCIsIFwi6ICA5bee5Yy6XCIsIFwi5a6c5ZCb5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjZfM1wiLCBbXCLkuLTmuK3ljLpcIiwgXCLljY7ljr9cIiwgXCLmvbzlhbPljr9cIiwgXCLlpKfojZTljr9cIiwgXCLlkIjpmLPljr9cIiwgXCLmvoTln47ljr9cIiwgXCLokrLln47ljr9cIiwgXCLnmb3msLTljr9cIiwgXCLlr4zlubPljr9cIiwgXCLpn6nln47luIJcIiwgXCLljY7pmLTluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yNl80XCIsIFtcIuenpumDveWMulwiLCBcIuadqOmZteWMulwiLCBcIua4reWfjuWMulwiLCBcIuS4ieWOn+WOv1wiLCBcIuazvumYs+WOv1wiLCBcIuS5vuWOv1wiLCBcIuekvOazieWOv1wiLCBcIuawuOWvv+WOv1wiLCBcIuW9rOWOv1wiLCBcIumVv+atpuWOv1wiLCBcIuaXrOmCkeWOv1wiLCBcIua3s+WMluWOv1wiLCBcIuatpuWKn+WOv1wiLCBcIuWFtOW5s+W4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzI2XzVcIiwgW1wi5rit5ruo5Yy6XCIsIFwi6YeR5Y+w5Yy6XCIsIFwi6ZmI5LuT5Yy6XCIsIFwi5Yek57+U5Y6/XCIsIFwi5bKQ5bGx5Y6/XCIsIFwi5om26aOO5Y6/XCIsIFwi55yJ5Y6/XCIsIFwi6ZmH5Y6/XCIsIFwi5Y2D6Ziz5Y6/XCIsIFwi6bqf5ri45Y6/XCIsIFwi5Yek5Y6/XCIsIFwi5aSq55m95Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjZfNlwiLCBbXCLmsYnlj7DljLpcIiwgXCLljZfpg5Hljr9cIiwgXCLln47lm7rljr9cIiwgXCLmtIvljr9cIiwgXCLopb/kuaHljr9cIiwgXCLli4nljr9cIiwgXCLlroHlvLrljr9cIiwgXCLnlaXpmLPljr9cIiwgXCLplYflt7Tljr9cIiwgXCLnlZnlnZ3ljr9cIiwgXCLkvZvlnarljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNl83XCIsIFtcIuamhumYs+WMulwiLCBcIuelnuacqOWOv1wiLCBcIuW6nOiwt+WOv1wiLCBcIuaoquWxseWOv1wiLCBcIumdlui+ueWOv1wiLCBcIuWumui+ueWOv1wiLCBcIue7peW+t+WOv1wiLCBcIuexs+iEguWOv1wiLCBcIuS9s+WOv1wiLCBcIuWQtOWgoeWOv1wiLCBcIua4hea2p+WOv1wiLCBcIuWtkOa0suWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI2XzhcIiwgW1wi5rGJ5ruo5Yy6XCIsIFwi5rGJ6Zi05Y6/XCIsIFwi55+z5rOJ5Y6/XCIsIFwi5a6B6ZmV5Y6/XCIsIFwi57Sr6Ziz5Y6/XCIsIFwi5bKa55qL5Y6/XCIsIFwi5bmz5Yip5Y6/XCIsIFwi6ZWH5Z2q5Y6/XCIsIFwi5pes6Ziz5Y6/XCIsIFwi55m95rKz5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjZfOVwiLCBbXCLllYblt57ljLpcIiwgXCLmtJvljZfljr9cIiwgXCLkuLnlh6Tljr9cIiwgXCLllYbljZfljr9cIiwgXCLlsbHpmLPljr9cIiwgXCLplYflronljr9cIiwgXCLmn57msLTljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yNlwiLCBbXCLopb/lronluIJcIiwgXCLlu7blronluIJcIiwgXCLpk5zlt53luIJcIiwgXCLmuK3ljZfluIJcIiwgXCLlkrjpmLPluIJcIiwgXCLlrp3puKHluIJcIiwgXCLmsYnkuK3luIJcIiwgXCLmpobmnpfluIJcIiwgXCLlronlurfluIJcIiwgXCLllYbmtJvluIJcIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjdfMFwiLCBbXCLln47lhbPljLpcIiwgXCLkuIPph4zmsrPljLpcIiwgXCLopb/lm7rljLpcIiwgXCLlronlroHljLpcIiwgXCLnuqLlj6TljLpcIiwgXCLmsLjnmbvljr9cIiwgXCLnmovlhbDljr9cIiwgXCLmpobkuK3ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN18xXCIsIFtcIuW4gui+luWMulwiXSk7XHJcbmRzeS5hZGQoXCIwXzI3XzJcIiwgW1wi55m96ZO25Yy6XCIsIFwi5bmz5bed5Yy6XCIsIFwi6Z2W6L+c5Y6/XCIsIFwi5Lya5a6B5Y6/XCIsIFwi5pmv5rOw5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfM1wiLCBbXCLnp6blt57ljLpcIiwgXCLpuqbnp6/ljLpcIiwgXCLmuIXmsLTljr9cIiwgXCLnp6blronljr9cIiwgXCLnlJjosLfljr9cIiwgXCLmrablsbHljr9cIiwgXCLlvKDlrrblt53lm57ml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN180XCIsIFtcIuWHieW3nuWMulwiLCBcIuawkeWLpOWOv1wiLCBcIuWPpOa1quWOv1wiLCBcIuWkqeelneiXj+aXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI3XzVcIiwgW1wi6IKD5bee5Yy6XCIsIFwi6YeR5aGU5Y6/XCIsIFwi55Oc5bee5Y6/XCIsIFwi6IKD5YyX6JKZ5Y+k5peP6Ieq5rK75Y6/XCIsIFwi6Zi/5YWL5aGe5ZOI6JCo5YWL5peP6Ieq5rK75Y6/XCIsIFwi546J6Zeo5biCXCIsIFwi5pWm54WM5biCXCJdKTtcclxuZHN5LmFkZChcIjBfMjdfNlwiLCBbXCLnlJjlt57ljLpcIiwgXCLogoPljZfoo5Xlm7rml4/oh6rmsrvljr9cIiwgXCLmsJHkuZDljr9cIiwgXCLkuLTms73ljr9cIiwgXCLpq5jlj7Dljr9cIiwgXCLlsbHkuLnljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN183XCIsIFtcIuilv+WzsOWMulwiLCBcIuW6huWfjuWOv1wiLCBcIueOr+WOv1wiLCBcIuWNjuaxoOWOv1wiLCBcIuWQiOawtOWOv1wiLCBcIuato+WugeWOv1wiLCBcIuWugeWOv1wiLCBcIumVh+WOn+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI3XzhcIiwgW1wi5bSG5bOS5Yy6XCIsIFwi5rO+5bed5Y6/XCIsIFwi54G15Y+w5Y6/XCIsIFwi5bSH5L+h5Y6/XCIsIFwi5Y2O5Lqt5Y6/XCIsIFwi5bqE5rWq5Y6/XCIsIFwi6Z2Z5a6B5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjdfOVwiLCBbXCLlronlrprljLpcIiwgXCLpgJrmuK3ljr9cIiwgXCLpmYfopb/ljr9cIiwgXCLmuK3mupDljr9cIiwgXCLkuLTmtK7ljr9cIiwgXCLmvLPljr9cIiwgXCLlsrfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN18xMFwiLCBbXCLmrabpg73ljLpcIiwgXCLmiJDljr9cIiwgXCLmlofljr9cIiwgXCLlrpXmmIzljr9cIiwgXCLlurfljr9cIiwgXCLopb/lkozljr9cIiwgXCLnpLzljr9cIiwgXCLlvr3ljr9cIiwgXCLkuKTlvZPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN18xMVwiLCBbXCLph5Hlt53ljLpcIiwgXCLmsLjmmIzljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN18xMlwiLCBbXCLkuLTlpI/luIJcIiwgXCLkuLTlpI/ljr9cIiwgXCLlurfkuZDljr9cIiwgXCLmsLjpnZbljr9cIiwgXCLlub/msrPljr9cIiwgXCLlkozmlL/ljr9cIiwgXCLkuJzkuaHml4/oh6rmsrvljr9cIiwgXCLnp6/nn7PlsbHkv53lronml4/kuJzkuaHml4/mkpLmi4nml4/oh6rmsrvljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN18xM1wiLCBbXCLlkIjkvZzluIJcIiwgXCLkuLTmva3ljr9cIiwgXCLljZPlsLzljr9cIiwgXCLoiJ/mm7Lljr9cIiwgXCLov63pg6jljr9cIiwgXCLnjpvmm7Lljr9cIiwgXCLnoozmm7Lljr9cIiwgXCLlpI/msrPljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yN1wiLCBbXCLlhbDlt57luIJcIiwgXCLlmInls6rlhbPluIJcIiwgXCLnmb3pk7bluIJcIiwgXCLlpKnmsLTluIJcIiwgXCLmrablqIHluIJcIiwgXCLphZLms4nluIJcIiwgXCLlvKDmjpbluIJcIiwgXCLluobpmLPluIJcIiwgXCLlubPlh4nluIJcIiwgXCLlrpropb/luIJcIiwgXCLpmYfljZfluIJcIiwgXCLph5HmmIzluIJcIiwgXCLkuLTlpI/lm57ml4/oh6rmsrvlt55cIiwgXCLnlJjljZfol4/ml4/oh6rmsrvlt55cIl0pO1xyXG5cclxuZHN5LmFkZChcIjBfMjhfMFwiLCBbXCLln47kuJzljLpcIiwgXCLln47kuK3ljLpcIiwgXCLln47opb/ljLpcIiwgXCLln47ljJfljLpcIiwgXCLlpKfpgJrlm57ml4/lnJ/ml4/oh6rmsrvljr9cIiwgXCLmuZ/kuK3ljr9cIiwgXCLmuZ/mupDljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOF8xXCIsIFtcIuS5kOmDveWMulwiLCBcIuW5s+WuieWMulwiLCBcIuawkeWSjOWbnuaXj+Wcn+aXj+iHquayu+WOv1wiLCBcIuS6kuWKqeWcn+aXj+iHquayu+WOv1wiLCBcIuWMlumahuWbnuaXj+iHquayu+WOv1wiLCBcIuW+quWMluaSkuaLieaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI4XzJcIiwgW1wi5rW35pmP5Y6/XCIsIFwi5LiJ6KeS5Z+O6ZWHXCIsIFwi56WB6L+e5Y6/XCIsIFwi5YWr5a6d6ZWHXCIsIFwi5Yia5a+f5Y6/XCIsIFwi5rKZ5p+z5rKz6ZWHXCIsIFwi6Zeo5rqQ5Zue5peP6Ieq5rK75Y6/XCIsIFwi5rWp6Zeo6ZWHXCJdKTtcclxuZHN5LmFkZChcIjBfMjhfM1wiLCBbXCLlhbHlkozljr9cIiwgXCLlkIzlvrfljr9cIiwgXCLotLXlvrfljr9cIiwgXCLlhbTmtbfljr9cIiwgXCLotLXljZfljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOF80XCIsIFtcIuWQjOS7geWOv1wiLCBcIuWwluaJjuWOv1wiLCBcIuazveW6k+WOv1wiLCBcIuays+WNl+iSmeWPpOaXj+iHquayu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI4XzVcIiwgW1wi546b5rKB5Y6/XCIsIFwi54+t546b5Y6/XCIsIFwi55SY5b635Y6/XCIsIFwi6L6+5pel5Y6/XCIsIFwi5LmF5rK75Y6/XCIsIFwi546b5aSa5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjhfNlwiLCBbXCLnjonmoJHluIJcIiwgXCLmnYLlpJrljr9cIiwgXCLnp7DlpJrljr9cIiwgXCLmsrvlpJrljr9cIiwgXCLlm4rosKbljr9cIiwgXCLmm7LpurvojrHljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8yOF83XCIsIFtcIuagvOWwlOacqOW4glwiLCBcIuW+t+S7pOWTiOW4glwiLCBcIuS5jOWFsOWOv1wiLCBcIumDveWFsOWOv1wiLCBcIuWkqeWzu+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI4XCIsIFtcIuilv+WugeW4glwiLCBcIua1t+S4nOW4glwiLCBcIua1t+WMl+iXj+aXj+iHquayu+W3nlwiLCBcIua1t+WNl+iXj+aXj+iHquayu+W3nlwiLCBcIum7hOWNl+iXj+aXj+iHquayu+W3nlwiLCBcIuaenOa0m+iXj+aXj+iHquayu+W3nlwiLCBcIueOieagkeiXj+aXj+iHquayu+W3nlwiLCBcIua1t+ilv+iSmeWPpOaXj+iXj+aXj+iHquayu+W3nlwiXSk7XHJcblxyXG5kc3kuYWRkKFwiMF8yOV8wXCIsIFtcIuWFtOW6huWMulwiLCBcIuilv+Wkj+WMulwiLCBcIumHkeWHpOWMulwiLCBcIuawuOWugeWOv1wiLCBcIui0uuWFsOWOv1wiLCBcIueBteatpuW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzI5XzFcIiwgW1wi5aSn5q2m5Y+j5Yy6XCIsIFwi5oOg5Yac5Yy6XCIsIFwi5bmz572X5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjlfMlwiLCBbXCLliKnpgJrljLpcIiwgXCLnuqLlr7rloKHljLpcIiwgXCLnm5DmsaDljr9cIiwgXCLlkIzlv4Pljr9cIiwgXCLpnZLpk5zls6HluIJcIl0pO1xyXG5kc3kuYWRkKFwiMF8yOV8zXCIsIFtcIuWOn+W3nuWMulwiLCBcIuilv+WQieWOv1wiLCBcIumahuW+t+WOv1wiLCBcIuazvua6kOWOv1wiLCBcIuW9remYs+WOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzI5XzRcIiwgW1wi5rKZ5Z2h5aS05Yy6XCIsIFwi5Lit5a6B5Y6/XCIsIFwi5rW35Y6f5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMjlcIiwgW1wi6ZO25bed5biCXCIsIFwi55+z5Zi05bGx5biCXCIsIFwi5ZC05b+g5biCXCIsIFwi5Zu65Y6f5biCXCIsIFwi5Lit5Y2r5biCXCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzMwXzBcIiwgW1wi5aSp5bGx5Yy6XCIsIFwi5rKZ5L6d5be05YWL5Yy6XCIsIFwi5paw5biC5Yy6XCIsIFwi5rC056Oo5rKf5Yy6XCIsIFwi5aS05bGv5rKz5Yy6XCIsIFwi6L6+5Z2C5Z+O5Yy6XCIsIFwi57Gz5Lic5Yy6XCIsIFwi5LmM6bKB5pyo6b2Q5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMVwiLCBbXCLni6zlsbHlrZDljLpcIiwgXCLlhYvmi4nnjpvkvp3ljLpcIiwgXCLnmb3norHmu6nljLpcIiwgXCLkuYzlsJTnpr7ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8zMF8yXCIsIFtcIuefs+ays+WtkOW4glwiLCBcIumYv+aLieWwlOW4glwiLCBcIuWbvuacqOiIkuWFi+W4glwiLCBcIuS6lOWutua4oOW4glwiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzNcIiwgW1wi5ZaA5LuA5biCXCIsIFwi55aP6ZmE5Y6/XCIsIFwi55aP5YuS5Y6/XCIsIFwi6Iux5ZCJ5rKZ5Y6/XCIsIFwi5rO95pmu5Y6/XCIsIFwi6I6O6L2m5Y6/XCIsIFwi5Y+25Z+O5Y6/XCIsIFwi6bqm55uW5o+Q5Y6/XCIsIFwi5bKz5pmu5rmW5Y6/XCIsIFwi5Ly95biI5Y6/XCIsIFwi5be05qWa5Y6/XCIsIFwi5aGU5LuA5bqT5bCU5bmy5aGU5ZCJ5YWL6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfNFwiLCBbXCLpmL/lhYvoi4/luIJcIiwgXCLmuKnlrr/ljr9cIiwgXCLlupPovabljr9cIiwgXCLmspnpm4Xljr9cIiwgXCLmlrDlkozljr9cIiwgXCLmi5zln47ljr9cIiwgXCLkuYzku4Dljr9cIiwgXCLpmL/nk6bmj5Dljr9cIiwgXCLmn6/lnarljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8zMF81XCIsIFtcIuWSjOeUsOW4glwiLCBcIuWSjOeUsOWOv1wiLCBcIuWiqOeOieWOv1wiLCBcIuearuWxseWOv1wiLCBcIua0m+a1puWOv1wiLCBcIuetluWLkuWOv1wiLCBcIuS6jueUsOWOv1wiLCBcIuawkeS4sOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzZcIiwgW1wi6auY5piM5Yy6XCIsIFwi6YSv5ZaE5Y6/XCIsIFwi5omY5YWL6YCK5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfN1wiLCBbXCLlk4jlr4bluIJcIiwgXCLlt7Tph4zlnaTlk4jokKjlhYvoh6rmsrvljr9cIiwgXCLkvIrlkL7ljr9cIl0pO1xyXG5kc3kuYWRkKFwiMF8zMF84XCIsIFtcIumYv+WbvuS7gOW4glwiLCBcIumYv+WFi+mZtuWOv1wiLCBcIumYv+WQiOWlh+WOv1wiLCBcIuS5jOaBsOWOv1wiXSk7XHJcbmRzeS5hZGQoXCIwXzMwXzlcIiwgW1wi5Y2a5LmQ5biCXCIsIFwi6Zi/5ouJ5bGx5Y+j5biCXCIsIFwi57K+5rKz5Y6/XCIsIFwi5rip5rOJ5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMTBcIiwgW1wi5piM5ZCJ5biCXCIsIFwi6Zic5bq35biCXCIsIFwi5ZG85Zu+5aOB5Y6/XCIsIFwi546b57qz5pav5Y6/XCIsIFwi5aWH5Y+w5Y6/XCIsIFwi5ZCJ5pyo6JCo5bCU5Y6/XCIsIFwi5pyo5Z6S5ZOI6JCo5YWL6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMTFcIiwgW1wi5bqT5bCU5YuS5biCXCIsIFwi6L2u5Y+w5Y6/XCIsIFwi5bCJ54qB5Y6/XCIsIFwi6Iul576M5Y6/XCIsIFwi5LiU5pyr5Y6/XCIsIFwi54SJ6ICG5Zue5peP6Ieq5rK75Y6/XCIsIFwi5ZKM6Z2Z5Y6/XCIsIFwi5ZKM56GV5Y6/XCIsIFwi5Y2a5rmW5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMTJcIiwgW1wi5LyK5a6B5biCXCIsIFwi5aWO5bGv5biCXCIsIFwi6ZyN5bCU5p6c5pav5biCXCIsIFwi5LyK5a6B5Y6/XCIsIFwi5a+f5biD5p+l5bCU6ZSh5Lyv6Ieq5rK75Y6/XCIsIFwi6ZyN5Z+O5Y6/XCIsIFwi5bep55WZ5Y6/XCIsIFwi5paw5rqQ5Y6/XCIsIFwi5pit6IuP5Y6/XCIsIFwi54m55YWL5pav5Y6/XCIsIFwi5bC85YuS5YWL5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMTNcIiwgW1wi5aGU5Z+O5biCXCIsIFwi5LmM6IuP5biCXCIsIFwi6aKd5pWP5Y6/XCIsIFwi5rKZ5rm+5Y6/XCIsIFwi5omY6YeM5Y6/XCIsIFwi6KOV5rCR5Y6/XCIsIFwi5ZKM5biD5YWL6LWb5bCU6JKZ5Y+k6Ieq5rK75Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBfMTRcIiwgW1wi6Zi/5YuS5rOw5biCXCIsIFwi5biD5bCU5rSl5Y6/XCIsIFwi5a+M6JW05Y6/XCIsIFwi56aP5rW35Y6/XCIsIFwi5ZOI5be05rKz5Y6/XCIsIFwi6Z2S5rKz5Y6/XCIsIFwi5ZCJ5pyo5LmD5Y6/XCJdKTtcclxuZHN5LmFkZChcIjBfMzBcIiwgW1wi5LmM6bKB5pyo6b2Q5biCXCIsIFwi5YWL5ouJ546b5L6d5biCXCIsIFwi6Ieq5rK75Yy655u06L6W5Y6/57qn6KGM5pS/5Y2V5L2NXCIsIFwi5ZaA5LuA5Zyw5Yy6XCIsIFwi6Zi/5YWL6IuP5Zyw5Yy6XCIsIFwi5ZKM55Sw5Zyw5Yy6XCIsIFwi5ZCQ6bKB55Wq5Zyw5Yy6XCIsIFwi5ZOI5a+G5Zyw5Yy6XCIsIFwi5YWL5a2c5YuS6IuP5p+v5bCU5YWL5a2c6Ieq5rK75beeXCIsIFwi5Y2a5bCU5aGU5ouJ6JKZ5Y+k6Ieq5rK75beeXCIsIFwi5piM5ZCJ5Zue5peP6Ieq5rK75beeXCIsIFwi5be06Z+z6YOt5qWe6JKZ5Y+k6Ieq5rK75beeXCIsIFwi5LyK54qB5ZOI6JCo5YWL6Ieq5rK75beeXCIsIFwi5aGU5Z+O5Zyw5Yy6XCIsIFwi6Zi/5YuS5rOw5Zyw5Yy6XCJdKTtcclxuXHJcbmRzeS5hZGQoXCIwXzMxXzBcIiwgW1wi5Lit6KW/5Yy6XCIsIFwi5Lic5Yy6XCIsIFwi5Lmd6b6Z5Z+O5Yy6XCIsIFwi6KeC5aGY5Yy6XCIsIFwi5Y2X5Yy6XCIsIFwi5rex5rC05Z+X5Yy6XCIsIFwi5rm+5LuU5Yy6XCIsIFwi6buE5aSn5LuZ5Yy6XCIsIFwi5rK55bCW5pe65Yy6XCIsIFwi56a75bKb5Yy6XCIsIFwi6JG16Z2S5Yy6XCIsIFwi5YyX5Yy6XCIsIFwi6KW/6LSh5Yy6XCIsIFwi5rKZ55Sw5Yy6XCIsIFwi5bGv6Zeo5Yy6XCIsIFwi5aSn5Z+U5Yy6XCIsIFwi6I2D5rm+5Yy6XCIsIFwi5YWD5pyX5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMzFcIiwgW1wi6aaZ5riv54m55Yir6KGM5pS/5Yy6XCJdKTtcclxuZHN5LmFkZChcIjBfMzJfMFwiLCBbXCLmvrPpl6jnibnliKvooYzmlL/ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8zMlwiLCBbXCLmvrPpl6jnibnliKvooYzmlL/ljLpcIl0pO1xyXG5kc3kuYWRkKFwiMF8zM18wXCIsIFtcIiBcIl0pO1xyXG5kc3kuYWRkKFwiMF8zM1wiLCBbXCLlj7DljJdcIiwgXCLpq5jpm4RcIiwgXCLlj7DkuK1cIiwgXCLoirHojrJcIiwgXCLln7rpmoZcIiwgXCLlmInkuYlcIiwgXCLph5Hpl6hcIiwgXCLov57msZ9cIiwgXCLoi5fmoJdcIiwgXCLljZfmipVcIiwgXCLmvo7muZZcIiwgXCLlsY/kuJxcIiwgXCLlj7DkuJxcIiwgXCLlj7DljZdcIiwgXCLmoYPlm61cIiwgXCLmlrDnq7lcIiwgXCLlrpzlhbBcIiwgXCLkupHmnpdcIiwgXCLlvbDljJZcIl0pO1xyXG5kc3kuYWRkKFwiMFwiLCBbXCLljJfkuqzluIJcIiwgXCLlpKnmtKXluIJcIiwgXCLkuIrmtbfluIJcIiwgXCLph43luobluIJcIiwgXCLmsrPljJfnnIFcIiwgXCLlsbHopb/nnIFcIiwgXCLlhoXokpnlj6RcIiwgXCLovr3lroHnnIFcIiwgXCLlkInmnpfnnIFcIiwgXCLpu5HpvpnmsZ/nnIFcIiwgXCLmsZ/oi4/nnIFcIiwgXCLmtZnmsZ/nnIFcIiwgXCLlronlvr3nnIFcIiwgXCLnpo/lu7rnnIFcIiwgXCLmsZ/opb/nnIFcIiwgXCLlsbHkuJznnIFcIiwgXCLmsrPljZfnnIFcIiwgXCLmuZbljJfnnIFcIiwgXCLmuZbljZfnnIFcIiwgXCLlub/kuJznnIFcIiwgXCLlub/opb9cIiwgXCLmtbfljZfnnIFcIiwgXCLlm5vlt53nnIFcIiwgXCLotLXlt57nnIFcIiwgXCLkupHljZfnnIFcIiwgXCLopb/ol49cIiwgXCLpmZXopb/nnIFcIiwgXCLnlJjogoPnnIFcIiwgXCLpnZLmtbfnnIFcIiwgXCLlroHlpI9cIiwgXCLmlrDnloZcIiwgXCLpppnmuK9cIiwgXCLmvrPpl6hcIiwgXCLlj7Dmub7nnIFcIl0pO1xyXG5cclxuZXhwb3J0cy5hZGRyZXNzID0gZHN5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxzL2FyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAxMiIsInJlcXVpcmUoJy4vc3JjL3d4Yy1idXR0b24ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1obi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWxpc3QtaXRlbS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXBhbmVsLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGlwLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtY291bnRkb3duLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtbWFycXVlZS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdmJhci53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdnBhZ2Uud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJpdGVtLndlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1idXR0b24ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWJ1dHRvbi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtYnV0dG9uLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1idXR0b24nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bicsICdidG4tJyArICh0aGlzLnR5cGUpLCAnYnRuLXN6LScgKyAodGhpcy5zaXplKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnYnRuLXR4dCcsICdidG4tdHh0LScgKyAodGhpcy50eXBlKSwgJ2J0bi10eHQtc3otJyArICh0aGlzLnNpemUpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJidG5cIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMSxcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiYnRuLWRlZmF1bHRcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsNTEsNTEpXCJcbiAgfSxcbiAgXCJidG4tcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoNDAsOTYsMTQ0KVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNDAsOTYsMTQ0KVwiXG4gIH0sXG4gIFwiYnRuLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkyLDE4NCw5MilcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDc2LDE3NCw3NilcIlxuICB9LFxuICBcImJ0bi1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MSwxOTIsMjIyKVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzAsMTg0LDIxOClcIlxuICB9LFxuICBcImJ0bi13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyNDAsMTczLDc4KVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoMjM4LDE2Miw1NClcIlxuICB9LFxuICBcImJ0bi1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDIxNyw4Myw3OSlcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIxMiw2Myw1OClcIlxuICB9LFxuICBcImJ0bi1saW5rXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDBcbiAgfSxcbiAgXCJidG4tdHh0LWRlZmF1bHRcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsNTEsNTEpXCJcbiAgfSxcbiAgXCJidG4tdHh0LXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LXdhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigyNTUsMjU1LDI1NSlcIlxuICB9LFxuICBcImJ0bi10eHQtbGlua1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYig1MSwxMjIsMTgzKVwiXG4gIH0sXG4gIFwiYnRuLXN6LWxhcmdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDMwMCxcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDI1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDQwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDQwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDE1XG4gIH0sXG4gIFwiYnRuLXN6LW1pZGRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAyNDAsXG4gICAgXCJoZWlnaHRcIjogODAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDE1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDMwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDMwLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwXG4gIH0sXG4gIFwiYnRuLXN6LXNtYWxsXCI6IHtcbiAgICBcIndpZHRoXCI6IDE3MCxcbiAgICBcImhlaWdodFwiOiA2MCxcbiAgICBcInBhZGRpbmdUb3BcIjogMTIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDEyLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMjUsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjUsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogN1xuICB9LFxuICBcImJ0bi10eHQtc3otbGFyZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDVcbiAgfSxcbiAgXCJidG4tdHh0LXN6LW1pZGRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAzNVxuICB9LFxuICBcImJ0bi10eHQtc3otc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJ0biBidG4te3t0eXBlfX0gYnRuLXN6LXt7c2l6ZX19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJidG4tdHh0IGJ0bi10eHQte3t0eXBlfX0gYnRuLXR4dC1zei17e3NpemV9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XG5cbiAgICAvKndoaXRlLXNwYWNlOiBub3dyYXA7Ki9cbiAgICAvKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cbiAgICAvKnRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uOyovXG4gICAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cbiAgICAvKi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Ki9cbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IG5vbmU7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1zb3VyY2U6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1zbGljZTogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXdpZHRoOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utb3V0c2V0OiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2UtcmVwZWF0OiBpbml0aWFsOyovXG4gIH1cblxuICAuYnRuLXR4dCB7XG5cbiAgfVxuXG4gIC8qKlRZUEUqKi9cblxuICAuYnRuLWRlZmF1bHQge1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcbiAgfVxuXG4gIC5idG4taW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcbiAgfVxuXG4gIC5idG4td2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcbiAgfVxuXG4gIC5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmJ0bi10eHQtZGVmYXVsdCB7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgfVxuXG4gIC5idG4tdHh0LXByaW1hcnkge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1zdWNjZXNzIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtaW5mbyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LXdhcm5pbmcge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1kYW5nZXIge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1saW5rIHtcbiAgICBjb2xvcjogcmdiKDUxLCAxMjIsIDE4Myk7XG4gICAgLypmb250LXdlaWdodDogNDAwOyovXG4gIH1cblxuICAvKipTSVpFKiovXG5cbiAgLmJ0bi1zei1sYXJnZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgLypsaW5lLWhlaWdodDogMS4zMzMzMzsqL1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuYnRuLXN6LW1pZGRsZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjQyODU3OyovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5idG4tc3otc21hbGwge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgLypsaW5lLWhlaWdodDogMS41OyovXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgfVxuXG4gIC5idG4tdHh0LXN6LW1pZGRsZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC8qRElTQUJMRUQqL1xuXG4gIC5kaXNhYmxlZCB7XG5cbiAgfVxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9iOWRkMDZjMiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWhuLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1obi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtaG4ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWhuJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2gnICsgKHRoaXMubGV2ZWwpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndHh0LWgnICsgKHRoaXMubGV2ZWwpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImgxXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMFxuICB9LFxuICBcImgyXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMFxuICB9LFxuICBcImgzXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMFxuICB9LFxuICBcInR4dC1oMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA3MFxuICB9LFxuICBcInR4dC1oMlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA1MlxuICB9LFxuICBcInR4dC1oM1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0MlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJoe3tsZXZlbH19XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICA8dGV4dCBjbGFzcz1cInR4dC1oe3tsZXZlbH19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7fVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaDEge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaDIge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaDMge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG5cbiAgLnR4dC1oMSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG5cbiAgLnR4dC1oMiB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICB9XG5cbiAgLnR4dC1oMyB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2VjMzI4ZTFhIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1saXN0LWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbGlzdC1pdGVtJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIml0ZW1cIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJ0b3VjaHN0YXJ0XCI6IFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIjogXCJ0b3VjaGVuZFwiXG4gIH0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iZ0NvbG9yfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpdGVtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMjUsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDI1LFxuICAgIFwicGFkZGluZ0xlZnRcIjogMzUsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMzUsXG4gICAgXCJoZWlnaHRcIjogMTYwLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZGRkZGRcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaXRlbVwiIG9udG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIiBvbnRvdWNoZW5kPVwidG91Y2hlbmRcIlxuICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7e2JnQ29sb3J9fTtcIj5cbiAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgYmdDb2xvcjogJyNmZmZmZmYnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRklYTUUgYW5kcm9pZCB0b3VjaFxuICAgICAgICAvLyBUT0RPIGFkYXB0aXZlIG9wcG9zaXRlIGJnQ29sb3Jcbi8vICAgICAgICB0aGlzLmJnQ29sb3IgPSAnI2U2ZTZlNic7XG4gICAgICB9LFxuICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoZW5kIG5vdCB0cmlnZ2VyZWRcbi8vICAgICAgICB0aGlzLmJnQ29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1ib3R0b206IDFweDsgRlVUVVJFICovXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/YTFjMTI5MDYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1wYW5lbC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtcGFuZWwud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXBhbmVsLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1wYW5lbCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbCcsICdwYW5lbC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInBhZGRpbmdUb3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkfSxcbiAgICAgICAgXCJwYWRkaW5nQm90dG9tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZH0sXG4gICAgICAgIFwicGFkZGluZ0xlZnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkKjEuNX0sXG4gICAgICAgIFwicGFkZGluZ1JpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZCoxLjV9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArICh0aGlzLnR5cGUpXX0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keX0sXG4gICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHl9LFxuICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keSoxLjV9LFxuICAgICAgICBcInBhZGRpbmdSaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHkqMS41fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInBhbmVsXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAyMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMVxuICB9LFxuICBcInBhbmVsLXByaW1hcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNDAsOTYsMTQ0KVwiXG4gIH0sXG4gIFwicGFuZWwtc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3NiwxNzQsNzYpXCJcbiAgfSxcbiAgXCJwYW5lbC1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDcwLDE4NCwyMTgpXCJcbiAgfSxcbiAgXCJwYW5lbC13YXJuaW5nXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIzOCwxNjIsNTQpXCJcbiAgfSxcbiAgXCJwYW5lbC1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoMjEyLDYzLDU4KVwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmNWY1ZjVcIixcbiAgICBcImZvbnRTaXplXCI6IDQwLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoNDAsOTYsMTQ0KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTIsMTg0LDkyKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTEsMTkyLDIyMilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDI0MCwxNzMsNzgpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDIxNyw4Myw3OSlcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtYm9keVwiOiB7fVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwte3t0eXBlfX1cIiBzdHlsZT1cImJvcmRlci13aWR0aDp7e2JvcmRlcn19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJwYW5lbC1oZWFkZXIgcGFuZWwtaGVhZGVyLXt7dHlwZX19XCJcbiAgICAgICAgICBzdHlsZT1cInBhZGRpbmctdG9wOnt7cGFkZGluZ0hlYWR9fTtwYWRkaW5nLWJvdHRvbTp7e3BhZGRpbmdIZWFkfX07cGFkZGluZy1sZWZ0Ont7cGFkZGluZ0hlYWQqMS41fX07cGFkZGluZy1yaWdodDp7e3BhZGRpbmdIZWFkKjEuNX19XCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L3RleHQ+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHkgcGFuZWwtYm9keS17e3R5cGV9fVwiXG4gICAgICAgICBzdHlsZT1cInBhZGRpbmctdG9wOnt7cGFkZGluZ0JvZHl9fTtwYWRkaW5nLWJvdHRvbTp7e3BhZGRpbmdCb2R5fX07cGFkZGluZy1sZWZ0Ont7cGFkZGluZ0JvZHkqMS41fX07cGFkZGluZy1yaWdodDp7e3BhZGRpbmdCb2R5KjEuNX19XCI+XG4gICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgcGFkZGluZ0JvZHk6IDIwLFxuICAgICAgcGFkZGluZ0hlYWQ6IDIwLFxuICAgICAgZGF0YUNsYXNzOiAnJywgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcbiAgICAgIGJvcmRlcjogMFxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG5cbiAgLnBhbmVsLWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLXByaW1hcnkge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgfVxuXG4gIC5wYW5lbC1zdWNjZXNzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XG5cbiAgfVxuXG4gIC5wYW5lbC1pbmZvIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xuXG4gIH1cblxuICAucGFuZWwtd2FybmluZyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcblxuICB9XG5cbiAgLnBhbmVsLWRhbmdlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xuXG4gIH1cblxuICAucGFuZWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXG4gIH1cblxuICAucGFuZWwtYm9keS1kZWZhdWx0IHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LXByaW1hcnkge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktc3VjY2VzcyB7XG4gIH1cblxuICAucGFuZWwtYm9keS1pbmZvIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LXdhcm5pbmcge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktZGFuZ2VyIHtcbiAgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlPzVkYzE2ZjFmIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGlwLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10aXAud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRpcC53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGlwJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWyd0aXAnLCAndGlwLScgKyAodGhpcy50eXBlKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwLXR4dCcsICd0aXAtdHh0LScgKyAodGhpcy50eXBlKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidGlwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM2LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM2LFxuICAgIFwicGFkZGluZ1RvcFwiOiAzNixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMzYsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJ0aXAtdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwidGlwLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RmZjBkOFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZDZlOWM2XCJcbiAgfSxcbiAgXCJ0aXAtdHh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjM2M3NjNkXCJcbiAgfSxcbiAgXCJ0aXAtaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDllZGY3XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNiY2U4ZjFcIlxuICB9LFxuICBcInRpcC10eHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMTcwOGZcIlxuICB9LFxuICBcInRpcC13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmY2Y4ZTNcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZhZWJjY1wiXG4gIH0sXG4gIFwidGlwLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzhhNmQzYlwiXG4gIH0sXG4gIFwidGlwLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJkZWRlXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYmNjZDFcIlxuICB9LFxuICBcInRpcC10eHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E5NDQ0MlwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZVxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0aXAgdGlwLXt7dHlwZX19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXAtdHh0IHRpcC10eHQte3t0eXBlfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAudGlwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzZweDtcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAudGlwLXR4dHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAudGlwLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xuICB9XG5cbiAgLnRpcC10eHQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICMzYzc2M2Q7XG4gIH1cblxuICAudGlwLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xuICB9XG5cbiAgLnRpcC10eHQtaW5mbyB7XG4gICAgY29sb3I6ICMzMTcwOGY7XG4gIH1cblxuICAudGlwLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xuICB9XG5cbiAgLnRpcC10eHQtd2FybmluZyB7XG4gICAgY29sb3I6ICM4YTZkM2I7XG4gIH1cblxuICAudGlwLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gIH1cblxuICAudGlwLXR4dC1kYW5nZXIge1xuICAgIGNvbG9yOiAjYTk0NDQyO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT8zNTM2N2UxNCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtY291bnRkb3duLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1jb3VudGRvd24ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWNvdW50ZG93bicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcInN0eWxlXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiYXBwZWFyXCI6IFwiYXBwZWFyZWRcIixcbiAgICBcImRpc2FwcGVhclwiOiBcImRpc2FwcGVhcmVkXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZVxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47IGZsZXgtZGlyZWN0aW9uOiByb3c7XCIgb25hcHBlYXI9XCJhcHBlYXJlZFwiIG9uZGlzYXBwZWFyPVwiZGlzYXBwZWFyZWRcIj5cbiAgICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuLndyYXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBub3c6IDAsXG4gICAgICAgIHJlbWFpbjogMCxcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgZWxhcHNlOiAwLFxuICAgICAgICAgICAgRDogJzAnLFxuICAgICAgICAgICAgREQ6ICcwJyxcbiAgICAgICAgICAgIGg6ICcwJyxcbiAgICAgICAgICAgIGhoOiAnMDAnLFxuICAgICAgICAgICAgSDogJzAnLFxuICAgICAgICAgICAgSEg6ICcwJyxcbiAgICAgICAgICAgIG06ICcwJyxcbiAgICAgICAgICAgIG1tOiAnMDAnLFxuICAgICAgICAgICAgTTogJzAnLFxuICAgICAgICAgICAgTU06ICcwJyxcbiAgICAgICAgICAgIHM6ICcwJyxcbiAgICAgICAgICAgIHNzOiAnMDAnLFxuICAgICAgICAgICAgUzogJzAnLFxuICAgICAgICAgICAgU1M6ICcwJ1xuICAgICAgICB9LFxuICAgICAgICBvdXRvZnZpZXc6IGZhbHNlXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbWFpbiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5pc1dlYiA9IHRoaXMuJGdldENvbmZpZygpLmVudi5wbGF0Zm9ybSA9PT0gJ1dlYic7XG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5uZXh0VGljaygpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuZXh0VGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRvZnZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dFRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZS5lbGFwc2UgPSBwYXJzZUludCgoRGF0ZS5ub3coKSAtIHRoaXMubm93KSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RpY2snLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRUaWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FsYXJtJywgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50aW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcC51cGRhdGVBY3Rpb25zKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnMCcgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlbWFpbiA9IHRoaXMucmVtYWluIC0gdGhpcy50aW1lLmVsYXBzZTtcbiAgICAgICAgICAgIGlmIChyZW1haW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmVtYWluID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGltZS5EID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDg2NDAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuREQgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuRCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuaCA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLkQpICogODY0MDApIC8gMzYwMCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLmhoID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLmgpO1xuICAgICAgICAgICAgdGhpcy50aW1lLkggPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gMzYwMCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLkhIID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLkgpO1xuICAgICAgICAgICAgdGhpcy50aW1lLm0gPSBTdHJpbmcocGFyc2VJbnQoKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5IKSAqIDM2MDApIC8gNjApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5tbSA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5tKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5NID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDYwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuTU0gPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuTSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUucyA9IFN0cmluZyhyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuTSkgKiA2MCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuc3MgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUucyk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuUyA9IFN0cmluZyhyZW1haW4pO1xuICAgICAgICAgICAgdGhpcy50aW1lLlNTID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLlMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVtYWluLCB0aGlzLkQsIHRoaXMuaCwgdGhpcy5oaCwgdGhpcy5ILCB0aGlzLkhILCB0aGlzLm0sIHRoaXMuTU0sIHRoaXMucywgdGhpcy5zcywgdGhpcy5TLCB0aGlzLlNTKTtcbiAgICAgICAgICAgIHJldHVybiByZW1haW4gPiAwO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlPzljZWViNzY4IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjYuMjAuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW1hcnF1ZWUud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLW1hcnF1ZWUud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLW1hcnF1ZWUud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW1hcnF1ZWUnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBcIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJhcHBlYXJcIjogXCJhcHBlYXJlZFwiLFxuICAgIFwiZGlzYXBwZWFyXCI6IFwiZGlzYXBwZWFyZWRcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiaWRcIjogXCJhbmltXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYW5pbVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJhbmltXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWigwKVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwXCIgb25hcHBlYXI9XCJhcHBlYXJlZFwiIG9uZGlzYXBwZWFyPVwiZGlzYXBwZWFyZWRcIj5cbiAgICAgICAgPGRpdiBpZD1cImFuaW1cIiBjbGFzcz1cImFuaW1cIj5cbiAgICAgICAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4ud3JhcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbmltIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWigwKTtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIGludGVydmFsOiAwLFxuICAgICAgICBvdXRvZnZpZXc6IGZhbHNlXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA+IDBcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnN0ZXAgPiAwXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFRpY2soKTsgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbmV4dFRpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0b2Z2aWV3KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChzZWxmLm5leHRUaWNrLmJpbmQoc2VsZiksIHNlbGYuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGlvbihzZWxmLm5leHRUaWNrLmJpbmQoc2VsZikpO1xuICAgICAgICAgICAgICAgIH0sIHNlbGYuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRpb246IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gLXNlbGYuc3RlcCAqIHNlbGYuaW5kZXg7XG4gICAgICAgICAgICB2YXIgJGFuaW1hdGlvbiA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9hbmltYXRpb24nKTtcbiAgICAgICAgICAgICRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRlbCgnYW5pbScpLCB7XG4gICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoJyArIFN0cmluZyhvZmZzZXQpICsgJ3B4KSB0cmFuc2xhdGVaKDApJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogc2VsZi5kdXJhdGlvblxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pbmRleCA9IChzZWxmLmluZGV4ICsgMSkgJSAoc2VsZi5jb3VudCk7XG4gICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc2VsZi5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHNlbGYuY291bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzQ0MzhiYTdkIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLW5hdmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbmF2YmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtaW1hZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNlbnRlci10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcInJpZ2h0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI4LFxuICAgIFwicmlnaHRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImxlZnQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjgsXG4gICAgXCJsZWZ0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNSxcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcImxlZnRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcImhlaWdodFwiOiA1MFxuICB9LFxuICBcInJpZ2h0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcInJpZ2h0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiaGVpZ2h0Ont7aGVpZ2h0fX07IGJhY2tncm91bmQtY29sb3I6e3tiYWNrZ3JvdW5kQ29sb3J9fTtcIiBkYXRhLXJvbGU9e3tkYXRhUm9sZX19PlxuICAgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7cmlnaHRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIGlmPXt7IXJpZ2h0SXRlbVNyY319IG9uY2xpY2sgPSBcIm9uY2xpY2tyaWdodGl0ZW1cIj57e3JpZ2h0SXRlbVRpdGxlfX08L3RleHQ+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInJpZ2h0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBzcmM9e3tyaWdodEl0ZW1TcmN9fSBpZj17e3JpZ2h0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7bGVmdEl0ZW1Db2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImxlZnRcIiBpZj17eyFsZWZ0SXRlbVNyY319IG9uY2xpY2s9IFwib25jbGlja2xlZnRpdGVtXCI+e3tsZWZ0SXRlbVRpdGxlfX08L3RleHQ+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImxlZnQtaW1hZ2VcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgc3JjPXt7bGVmdEl0ZW1TcmN9fSBpZj17e2xlZnRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyLXRleHRcIiBzdHlsZT1cImNvbG9yOnt7dGl0bGVDb2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImNlbnRlclwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIHdpZHRoOiA3NTA7XG4gICAgfVxuICAgIC5yaWdodC10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyODsgXG4gICAgICAgIHJpZ2h0OiAzMjsgXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDMyOyBcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAubGVmdC10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyODsgXG4gICAgICAgIGxlZnQgOjMyOyBcbiAgICAgICAgdGV4dC1hbGlnbiA6bGVmdDsgIFxuICAgICAgICBmb250LXNpemU6IDMyOyBcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAuY2VudGVyLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDI1OyBcbiAgICAgICAgbGVmdDogMTcyOyBcbiAgICAgICAgcmlnaHQ6IDE3MjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgZm9udC1zaXplOiAzNjsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAubGVmdC1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjA7IFxuICAgICAgICBsZWZ0OiAyODsgXG4gICAgICAgIHdpZHRoOiA1MDsgXG4gICAgICAgIGhlaWdodDogNTA7XG4gICAgfVxuICAgIC5yaWdodC1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjA7IFxuICAgICAgICByaWdodDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeiDjOaZr+iJslxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5a+86Iiq5p2h6auY5bqmXG4gICAgICAgICAgaGVpZ2h0OiA4OCxcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKYIFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHmoIfpopjpopzoibJcbiAgICAgICAgICB0aXRsZUNvbG9yOiAnYmxhY2snLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7lm77niYdcbiAgICAgICAgICByaWdodEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpophcbiAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXG5cbiAgICAgICAgICAvL+WPs+S+p+aMiemSruagh+mimOminOiJslxuICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7lm77niYdcbiAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXG5cbiAgICAgICAgICAvL+W3puS+p+aMiemSruagh+mimFxuICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7popzoibJcbiAgICAgICAgICBsZWZ0SXRlbUNvbG9yOiAnYmxhY2snLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgb25jbGlja3JpZ2h0aXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLnJpZ2h0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzVlNDQxNDdkIiwicmVxdWlyZShcIi4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbmF2cGFnZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbmF2cGFnZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ3eGMtbmF2YmFyXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX0sXG4gICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfSxcbiAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9LFxuICAgICAgICBcImxlZnRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICAgIFwibGVmdEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgICBcInJpZ2h0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX0sXG4gICAgICAgIFwicmlnaHRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwibWFyZ2luVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8dGVtcGxhdGU+XG4gIFx0PGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICBcdCAgPHd4Yy1uYXZiYXIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fSBoZWlnaHQ9e3toZWlnaHR9fSBiYWNrZ3JvdW5kLWNvbG9yPXt7YmFja2dyb3VuZENvbG9yfX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19IGxlZnQtaXRlbS1zcmM9e3tsZWZ0SXRlbVNyY319IGxlZnQtaXRlbS10aXRsZT17e2xlZnRJdGVtVGl0bGV9fSBsZWZ0LWl0ZW0tY29sb3I9e3tsZWZ0SXRlbUNvbG9yfX0gcmlnaHQtaXRlbS1zcmM9e3tyaWdodEl0ZW1TcmN9fSByaWdodC1pdGVtLXRpdGxlPXt7cmlnaHRJdGVtVGl0bGV9fSByaWdodC1pdGVtLWNvbG9yPXt7cmlnaHRJdGVtQ29sb3J9fT48L3d4Yy1uYXZiYXI+XG4gICAgXHQgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOnt7aGVpZ2h0fX1cIj5cbiAgICBcdFx0ICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICBcdCAgPC9kaXY+XG4gIFx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIFx0LndyYXBwZXIge1xuICBcdFx0cG9zaXRpb246IGFic29sdXRlOyBcbiAgXHRcdHRvcDogMDsgXG4gIFx0XHRsZWZ0OiAwOyBcbiAgXHRcdHJpZ2h0OiAwOyBcbiAgXHRcdGJvdHRvbTogMDsgXG4gIFx0XHR3aWR0aDogNzUwO1xuICBcdH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgICAgICAgIGhlaWdodDogODgsXG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICByaWdodEl0ZW1TcmM6ICcnLFxuICAgICAgICAgIHJpZ2h0SXRlbVRpdGxlOiAnJyxcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXG4gICAgICAgICAgbGVmdEl0ZW1UaXRsZTogJycsXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/MzE4ZmZjOGQiLCJyZXF1aXJlKFwiLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGFiYmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRhYmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiYmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGFiaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImNsaWNrXCI6IFwib25jbGlja2l0ZW1cIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRvcC1saW5lXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcImh0dHA6Ly9ndG1zMDMuYWxpY2RuLmNvbS90cHMvaTMvVEIxbWRzaU1wWFhYWFhwWFhYWE53NEpJWFhYLTY0MC00LnBuZ1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYi1pY29uXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaWNvbn1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA4OFxuICB9LFxuICBcInRvcC1saW5lXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImhlaWdodFwiOiAyXG4gIH0sXG4gIFwidGFiLWljb25cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ3aWR0aFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiA0MFxuICB9LFxuICBcInRhYi10ZXh0XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiA1LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyMFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3tiYWNrZ3JvdW5kQ29sb3J9fVwiICBvbmNsaWNrPVwib25jbGlja2l0ZW1cIj5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwidG9wLWxpbmVcIiBzcmMgPSBcImh0dHA6Ly9ndG1zMDMuYWxpY2RuLmNvbS90cHMvaTMvVEIxbWRzaU1wWFhYWFhwWFhYWE53NEpJWFhYLTY0MC00LnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRhYi1pY29uXCIgc3JjID0ge3tpY29ufX0+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19XCI+e3t0aXRsZX19PC90ZXh0PlxuICAgIDwvZGl2PiAgXG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDE7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuICAgIC50b3AtbGluZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIGhlaWdodDogMjtcbiAgICB9XG4gICAgLnRhYi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHdpZHRoOiA0MDsgXG4gICAgICAgIGhlaWdodDogNDBcbiAgICB9XG4gICAgLnRhYi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgb25jbGlja2l0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IHZtLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdm0uJGRpc3BhdGNoKCd0YWJJdGVtLm9uQ2xpY2snLCBwYXJhbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MzIxZDNjZmEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJlbWJlZFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpc2liaWxpdHl9XG4gICAgICB9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zcmN9LFxuICAgICAgICBcInR5cGVcIjogXCJ3ZWV4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYmJhclwiXG4gICAgICBdLFxuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInd4Yy10YWJpdGVtXCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5kZXh9LFxuICAgICAgICAgICAgXCJpY29uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufSxcbiAgICAgICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA4OFxuICB9LFxuICBcInRhYmJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPGVtYmVkIGNsYXNzPVwiY29udGVudFwiIHN0eWxlPVwidmlzaWJpbGl0eTp7e3Zpc2liaWxpdHl9fVwiIHJlcGVhdD17e3RhYkl0ZW1zfX0gc3JjPXt7c3JjfX0gdHlwZT1cIndlZXhcIj48L2VtYmVkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiYmFyXCIgYXBwZW5kID0gXCJ0cmVlXCI+XG4gICAgICAgICAgICA8d3hjLXRhYml0ZW0gcmVwZWF0PXt7dGFiSXRlbXN9fSBpbmRleD17e2luZGV4fX0gaWNvbj17e2ljb259fSB0aXRsZT17e3RpdGxlfX0gdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0+PC93eGMtdGFiSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLndyYXBwZXIgeyBcbiAgICAgICAgd2lkdGg6IDc1MDsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgLmNvbnRlbnQgeyBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgdG9wOiAwOyBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7IFxuICAgICAgICBtYXJnaW4tdG9wOiAwOyAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDg4O1xuICAgIH1cbiAgICAudGFiYmFyIHsgXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICBib3R0b206IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7ICBcbiAgICAgICAgaGVpZ2h0OiA4ODtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGFiSXRlbXM6IFsgXSxcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjZmYwMDAwJyxcbiAgICAgICAgICB1bnNlbGVjdGVkQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQodGhpcy5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICAgIHRoaXMuJG9uKCd0YWJJdGVtLm9uQ2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGRldGFpbD0gZS5kZXRhaWw7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBkZXRhaWwuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkKGRldGFpbC5pbmRleCk7XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBkZXRhaWwuaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgndGFiQmFyLm9uQ2xpY2snLCBwYXJhbXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudGFiSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFiSXRlbSA9IHRoaXMudGFiSXRlbXNbaV07XG4gICAgICAgICAgICAgICAgaWYoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLnNlbGVjdGVkSW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnNlbGVjdGVkQ29sb3I7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udGl0bGVDb2xvciA9IHRoaXMudW5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAgXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/NWE0YTBiY2IiXSwic291cmNlUm9vdCI6IiJ9