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

	var __weex_template__ = __webpack_require__(118)
	var __weex_style__ = __webpack_require__(119)
	var __weex_script__ = __webpack_require__(120)
	
	__weex_define__('@weex-component/407e2f0a6e2b00d5937ad1e98646d238', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/407e2f0a6e2b00d5937ad1e98646d238',undefined,undefined)

/***/ },

/***/ 118:
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

/***/ 119:
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

/***/ 120:
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC53ZT80OGJjIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3Qud2U/ZjI0OCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC53ZT83MjcxKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0LndlPzNhNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7QUNjQTs7MEJBR0E7ZUFDQTtnQkFDQSxZQUNBLHNCQUNBLHNCQUNBLHNCQUNBLHNCQUdBO0FBVkE7aUNBV0EsQ0FDQTs7dUNBRUE7eUJBQ0E7QUFDQTtnREFDQTtrRUFFQTs7eUJBQ0E7QUFDQTtxQ0FDQTt5QkFDQTtBQUdBOztBQWJBO0FBZEEiLCJmaWxlIjoiZGlzdFxcc2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NlbGVjdC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zZWxlY3Qud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9zZWxlY3Qud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvNDA3ZTJmMGE2ZTJiMDBkNTkzN2FkMWU5ODY0NmQyMzgnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvNDA3ZTJmMGE2ZTJiMDBkNTkzN2FkMWU5ODY0NmQyMzgnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VsZWN0LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiYm90dG9tYm94XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgIFwiaWRcIjogXCJpbnB1dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWxlY3RlZG1lc3NhZ2V9XG4gICAgICB9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImZvY3VzXCI6IFwic2hvd2xpc3RcIixcbiAgICAgICAgXCJibHVyXCI6IFwiZGlzcG90ZVwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImlucHV0XCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3d9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtc30sXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3RpdGVtXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9zZWxlY3Qud2Vcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMTEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJib3R0b21ib3hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiaW5wdXRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJ3aWR0aFwiOiAxNTAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMTUsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfSxcbiAgXCJsaXN0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDIwMCxcbiAgICBcIndpZHRoXCI6IDE1MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRjAwMDBcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvc2VsZWN0LndlXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDExIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJib3R0b21ib3hcIj5cclxuICAgIDxpbnB1dCBpZD1cImlucHV0XCIgdHlwZT1cInRleHRcIiBvbmZvY3VzID1cInt7c2hvd2xpc3R9fVwiIG9uYmx1ciA9XCJ7e2Rpc3BvdGV9fVwiIGNsYXNzPVwiaW5wdXRcIiB2YWx1ZSA9XCJ7e3NlbGVjdGVkbWVzc2FnZX19XCI+PC9pbnB1dD5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0XCIgaWY9XCJ7e3Nob3d9fVwiPlxyXG4gICAgICAgIDxsaXN0ICByZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCIgID5cclxuICAgICAgICAgICAgPGNlbGwgb25jbGljaz1cInNlbGVjdGl0ZW1cIj48dGV4dCBpZD1cIm1lc3NhZ2VcIj57e2l0ZW0ubWVzc2FnZX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICA8L2xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuYm90dG9tYm94e1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgLmlucHV0e1xyXG4gICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgIGhlaWdodDo0MHB4OyBcclxuICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjpibGFjazsgICAgIFxyXG4gIH1cclxuICAubGlzdHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHRvcDowcHg7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzZWxlY3RlZG1lc3NhZ2U6XCLor7fpgInmi6lcIixcclxuICAgICAgICBzaG93OmZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOltcclxuICAgICAgICAgICAge21lc3NhZ2U6XCLliJfooajmlbDmja4xXCJ9LFxyXG4gICAgICAgICAgICB7bWVzc2FnZTpcIuWIl+ihqOaVsOaNrjJcIn0sXHJcbiAgICAgICAgICAgIHttZXNzYWdlOlwi5YiX6KGo5pWw5o2uM1wifSxcclxuICAgICAgICAgICAge21lc3NhZ2U6XCLliJfooajmlbDmja40XCJ9LFxyXG4gICAgICAgICAgICB7bWVzc2FnZTpcIuWIl+ihqOaVsOaNrjVcIn0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgIH0sXHJcbiAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICBzaG93bGlzdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNlbGVjdGl0ZW06ZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgICAgICAgdGhpcy5zZWxlY3RlZG1lc3NhZ2UgPSBpbmRleC50YXJnZXQuY2hpbGRyZW5bMF0uYXR0ci52YWx1ZTtcclxuICAgICAgICAgICAgIC8vdGhpcy5lbChcImlucHV0XCIpLnZhbHVlID0gdGhpcy5zZWxlY3RtZXNzYWdlO1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGRpc3BvdGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3Qud2U/ZmRiM2E2ODQiXSwic291cmNlUm9vdCI6IiJ9