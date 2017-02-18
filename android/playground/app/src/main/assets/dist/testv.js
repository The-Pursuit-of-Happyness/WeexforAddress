// { "framework": "Vue" }

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

	
	    module.exports = {
	        data: {
	            img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg'
	        },
	        components: {
	            panel: __webpack_require__(151),
	            tip: __webpack_require__(152)
	        }
	    }
	
	module.exports.render = function() {with(this){return _h('scroller',[_h('panel',{attrs:{"title":"Hyperlink","type":"primary"}},[_h('a',{attrs:{"href":"http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js"}},[_h('tip',{staticStyle:{marginBottom:"20px"},attrs:{"type":"info","value":"Click me to see how 'A' element opens a new world."}})]),_m(0)])])}}
	module.exports.staticRenderFns = [function(){with(this){return _h('text',{staticClass:["txt"],staticStyle:{color:"#0f0"}},["#0f0"])}}]
	module.exports.el = "body"
	new Vue(module.exports)


/***/ },

/***/ 151:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'default' },
	      title: { default: '' },
	      paddingBody: { default: 20 },
	      paddingHead: { default: 20 },
	      dataClass: { default: '' }, // FIXME transfer class
	      border:{ default: 0 }
	    }
	  }
	
	module.exports.style = {
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
	module.exports.render = function() {with(this){return _h('div',{class:['panel', 'panel-' + type],style:{ borderWidth: border }},[_h('text',{class:['panel-header', 'panel-header-' + type],style:{
	        paddingTop: paddingHead,
	        paddingBottom: paddingHead,
	        paddingLeft: paddingHead*1.5,
	        paddingRight: paddingHead*1.5
	      }},[_s(title)]),_h('div',{class:['panel-body', 'panel-body-' + type],style:{
	        paddingTop: paddingBody,
	        paddingBottom: paddingBody,
	        paddingLeft: paddingBody*1.5,
	        paddingRight: paddingBody*1.5
	      }},[_t("default")])])}}
	delete module.exports.el


/***/ },

/***/ 152:
/***/ function(module, exports) {

	
	  module.exports = {
	    props: {
	      type: { default: 'success' },
	      value: { default: '' }
	    }
	  }
	
	module.exports.style = {
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
	module.exports.render = function() {with(this){return _h('div',{class:['tip', 'tip-' + type]},[_h('text',{class:['tip-txt', 'tip-txt-' + type]},[_s(value)])])}}
	delete module.exports.el


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdHYudnVlIiwid2VicGFjazovLy8uL34vLjAuMS4zQHdlZXgtdnVlLWNvbXBvbmVudHMvcGFuZWwudnVlIiwid2VicGFjazovLy8uL34vLjAuMS4zQHdlZXgtdnVlLWNvbXBvbmVudHMvdGlwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQW9DLFdBQVcsa0NBQWtDLE9BQU8sc0NBQXNDLFVBQVUsT0FBTyxnRUFBZ0UsWUFBWSxhQUFhLG9CQUFvQixRQUFRLDRFQUE0RTtBQUNoViw4Q0FBNkMsV0FBVyxrQkFBa0IsaUNBQWlDLGNBQWMsWUFBWTtBQUNySTtBQUNBOzs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0EsY0FBYSxxQkFBcUI7QUFDbEMsZUFBYyxjQUFjO0FBQzVCLHFCQUFvQixjQUFjO0FBQ2xDLHFCQUFvQixjQUFjO0FBQ2xDLG1CQUFrQixjQUFjO0FBQ2hDLGVBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EscUNBQW9DLFdBQVcsaUJBQWlCLHdDQUF3Qyx1QkFBdUIsYUFBYTtBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsd0JBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSOzs7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBLGNBQWEscUJBQXFCO0FBQ2xDLGVBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLFdBQVcsaUJBQWlCLDZCQUE2QixhQUFhLHFDQUFxQztBQUMvSSIsImZpbGUiOiJkaXN0XFx0ZXN0di5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyMzM2ODEzOTMzZTgwOWU0MjU2IiwiXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGltZzogJy8vZ3cuYWxpY2RuLmNvbS90cHMvaTIvVEIxRHBzbU1wWFhYWGFiYVhYWDIweVNRVlhYLTUxMi01MTIucG5nXzQwMHg0MDAuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBwYW5lbDogcmVxdWlyZSgnd2VleC12dWUtY29tcG9uZW50cy9wYW5lbC52dWUnKSxcclxuICAgICAgICAgICAgdGlwOiByZXF1aXJlKCd3ZWV4LXZ1ZS1jb21wb25lbnRzL3RpcC52dWUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbigpIHt3aXRoKHRoaXMpe3JldHVybiBfaCgnc2Nyb2xsZXInLFtfaCgncGFuZWwnLHthdHRyczp7XCJ0aXRsZVwiOlwiSHlwZXJsaW5rXCIsXCJ0eXBlXCI6XCJwcmltYXJ5XCJ9fSxbX2goJ2EnLHthdHRyczp7XCJocmVmXCI6XCJodHRwOi8vZy50YmNkbi5jbi9hbGktd2lyZWxlc3MtaDUvcmVzLzAuMC4xNi9oZWxsby5qc1wifX0sW19oKCd0aXAnLHtzdGF0aWNTdHlsZTp7bWFyZ2luQm90dG9tOlwiMjBweFwifSxhdHRyczp7XCJ0eXBlXCI6XCJpbmZvXCIsXCJ2YWx1ZVwiOlwiQ2xpY2sgbWUgdG8gc2VlIGhvdyAnQScgZWxlbWVudCBvcGVucyBhIG5ldyB3b3JsZC5cIn19KV0pLF9tKDApXSldKX19XG5tb2R1bGUuZXhwb3J0cy5zdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24oKXt3aXRoKHRoaXMpe3JldHVybiBfaCgndGV4dCcse3N0YXRpY0NsYXNzOltcInR4dFwiXSxzdGF0aWNTdHlsZTp7Y29sb3I6XCIjMGYwXCJ9fSxbXCIjMGYwXCJdKX19XVxubW9kdWxlLmV4cG9ydHMuZWwgPSBcImJvZHlcIlxubmV3IFZ1ZShtb2R1bGUuZXhwb3J0cylcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Rlc3R2LnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTMiLCJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXG4gICAgICB0aXRsZTogeyBkZWZhdWx0OiAnJyB9LFxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcbiAgICAgIHBhZGRpbmdIZWFkOiB7IGRlZmF1bHQ6IDIwIH0sXG4gICAgICBkYXRhQ2xhc3M6IHsgZGVmYXVsdDogJycgfSwgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxuICAgIH1cbiAgfVxuXG5tb2R1bGUuZXhwb3J0cy5zdHlsZSA9IHtcbiAgXCJwYW5lbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfSxcbiAgXCJwYW5lbC1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcInBhbmVsLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzYsMTc0LDc2KVwiXG4gIH0sXG4gIFwicGFuZWwtaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3MCwxODQsMjE4KVwiXG4gIH0sXG4gIFwicGFuZWwtd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMzgsMTYyLDU0KVwiXG4gIH0sXG4gIFwicGFuZWwtZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIxMiw2Myw1OClcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjVmNWY1XCIsXG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkyLDE4NCw5MilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkxLDE5MiwyMjIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyNDAsMTczLDc4KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWJvZHlcIjoge31cbn1cbm1vZHVsZS5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uKCkge3dpdGgodGhpcyl7cmV0dXJuIF9oKCdkaXYnLHtjbGFzczpbJ3BhbmVsJywgJ3BhbmVsLScgKyB0eXBlXSxzdHlsZTp7IGJvcmRlcldpZHRoOiBib3JkZXIgfX0sW19oKCd0ZXh0Jyx7Y2xhc3M6WydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXSxzdHlsZTp7XG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdIZWFkLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nSGVhZCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmdIZWFkKjEuNSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nSGVhZCoxLjVcbiAgICAgIH19LFtfcyh0aXRsZSldKSxfaCgnZGl2Jyx7Y2xhc3M6WydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArIHR5cGVdLHN0eWxlOntcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0JvZHksXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdCb2R5LFxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdCb2R5KjEuNVxuICAgICAgfX0sW190KFwiZGVmYXVsdFwiKV0pXSl9fVxuZGVsZXRlIG1vZHVsZS5leHBvcnRzLmVsXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMS4zQHdlZXgtdnVlLWNvbXBvbmVudHMvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMyIsIlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwcm9wczoge1xuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnc3VjY2VzcycgfSxcbiAgICAgIHZhbHVlOiB7IGRlZmF1bHQ6ICcnIH1cbiAgICB9XG4gIH1cblxubW9kdWxlLmV4cG9ydHMuc3R5bGUgPSB7XG4gIFwidGlwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM2LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM2LFxuICAgIFwicGFkZGluZ1RvcFwiOiAzNixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMzYsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJ0aXAtdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwidGlwLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RmZjBkOFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZDZlOWM2XCJcbiAgfSxcbiAgXCJ0aXAtdHh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjM2M3NjNkXCJcbiAgfSxcbiAgXCJ0aXAtaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDllZGY3XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNiY2U4ZjFcIlxuICB9LFxuICBcInRpcC10eHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMTcwOGZcIlxuICB9LFxuICBcInRpcC13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmY2Y4ZTNcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZhZWJjY1wiXG4gIH0sXG4gIFwidGlwLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzhhNmQzYlwiXG4gIH0sXG4gIFwidGlwLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJkZWRlXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYmNjZDFcIlxuICB9LFxuICBcInRpcC10eHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E5NDQ0MlwiXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uKCkge3dpdGgodGhpcyl7cmV0dXJuIF9oKCdkaXYnLHtjbGFzczpbJ3RpcCcsICd0aXAtJyArIHR5cGVdfSxbX2goJ3RleHQnLHtjbGFzczpbJ3RpcC10eHQnLCAndGlwLXR4dC0nICsgdHlwZV19LFtfcyh2YWx1ZSldKV0pfX1cbmRlbGV0ZSBtb2R1bGUuZXhwb3J0cy5lbFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjEuM0B3ZWV4LXZ1ZS1jb21wb25lbnRzL3RpcC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIl0sInNvdXJjZVJvb3QiOiIifQ==