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

	var __weex_template__ = __webpack_require__(121)
	var __weex_style__ = __webpack_require__(122)
	var __weex_script__ = __webpack_require__(123)
	
	__weex_define__('@weex-component/06a998e04fd56e45da10c95e7d171928', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/06a998e04fd56e45da10c95e7d171928',undefined,undefined)

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

/***/ 24:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "checkcar"
	          ],
	          "attr": {
	            "value": "验车"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "车牌号"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.carid}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "订单编号"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.oid}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "车辆及计划信息"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "seedetails"
	              ],
	              "events": {
	                "click": "showplanmassage"
	              },
	              "attr": {
	                "value": "点击查看详情"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "预约验车时间"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.checktime}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "orderaddressitem"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "预约验车地点"
	              }
	            },
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "ordercheckaddress"
	                  ],
	                  "attr": {
	                    "value": function () {return this.ordercheckaddress}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "ordercheckaddress"
	                  ],
	                  "attr": {
	                    "value": function () {return this.ordercheckstreet}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "addressitem"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "addressitemcheck"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "itemname"
	                  ],
	                  "attr": {
	                    "value": "实际验车地点"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "和预约验车地点相同"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "addressitemcheck"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "checkaddress"
	                  ],
	                  "attr": {
	                    "value": function () {return this.checkaddress}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "checkaddress"
	                  ],
	                  "attr": {
	                    "value": function () {return this.checkstreet}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "验车工作人员"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "checkerselect"
	              ],
	              "events": {
	                "click": "showcheckerpage"
	              },
	              "attr": {
	                "value": function () {return this.selectedchecker}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "用户证件上传情况"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "uploadusercard"
	              ],
	              "style": {
	                "color": function () {return this.uploadcolor}
	              },
	              "attr": {
	                "value": function () {return this.uploadtext}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "autoshare"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "自动分摊授权情况"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "autoshareitem"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "openshare"
	                  ],
	                  "style": {
	                    "color": function () {return this.opensharecolor}
	                  },
	                  "attr": {
	                    "value": function () {return this.opensharetext}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "opensharebutton"
	                  ],
	                  "events": {
	                    "click": "reflashOpenShare"
	                  },
	                  "attr": {
	                    "value": "刷新"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "订单包含代买保险"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "seedetails"
	              ],
	              "events": {
	                "click": "showquotebox"
	              },
	              "attr": {
	                "value": "点击查看详情"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "车辆存在问题类型"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "message"
	              ],
	              "events": {
	                "click": "showproblempage"
	              },
	              "attr": {
	                "value": function () {return this.selectedproblem}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "problemdescrible"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "车辆存在问题描述"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "message"
	              ],
	              "attr": {
	                "placeholder": "请输入"
	              }
	            }
	          ],
	          "attr": {
	            "value": function () {return this.problemmessage}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "problemdescrible"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "itemname"
	              ],
	              "attr": {
	                "value": "备注"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "message"
	              ],
	              "attr": {
	                "placeholder": "请输入"
	              }
	            }
	          ],
	          "attr": {
	            "value": function () {return this.notemessage}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "selectpicture"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "imgbox"
	              ],
	              "children": [
	                {
	                  "type": "input",
	                  "events": {
	                    "click": "upload"
	                  },
	                  "id": "inputfile",
	                  "classList": [
	                    "img"
	                  ],
	                  "attr": {
	                    "type": "file",
	                    "placeholder": "请选择文件"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "img"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "imgbox"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "img"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "imgbox"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "img"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "submitbox"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "submit"
	              ],
	              "events": {
	                "click": "submit"
	              },
	              "attr": {
	                "value": "提交"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "mask"
	          ],
	          "shown": function () {return this.isshowquotebox},
	          "events": {
	            "click": "shutdownquotebox"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "quotebox"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "quoteitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "交强险+车船税"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "orangetext"
	                      ],
	                      "attr": {
	                        "value": function () {return this.jiaoqiang}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "quoteitem",
	                    "line"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "第三者责任险"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "orangetext"
	                      ],
	                      "attr": {
	                        "value": function () {return this.sanzhe}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "quoteitem"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "合计"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "orangetext"
	                      ],
	                      "attr": {
	                        "value": function () {return this.total}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "okbox"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "okbutton"
	                      ],
	                      "attr": {
	                        "value": "知道了"
	                      }
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
	          "shown": function () {return this.isshowpalanmassage},
	          "events": {
	            "click": "shutdownplanmassage"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "messagebox"
	              ],
	              "children": [
	                {
	                  "type": "scroller",
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "messagetext"
	                      ],
	                      "attr": {
	                        "value": "用户预期计划生效时间"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "messagetext"
	                      ],
	                      "attr": {
	                        "value": function () {return this.plantime}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车主姓名"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.drivername}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车主性别"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.driversex}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车主手机号"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.driverphone}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageidcardbox"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车主身份证号"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.driveridcar}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "messagetitle"
	                      ],
	                      "attr": {
	                        "value": "车辆信息"
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车牌号"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.plancarid}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车辆型号"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.plancartype}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "车架号"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.plancarframe}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messageitem"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "发动机号"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.plancarengine}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "messagetitle"
	                      ],
	                      "attr": {
	                        "value": "计划信息"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "messagetext"
	                      ],
	                      "attr": {
	                        "value": "订单金额：(支付的金额)"
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "item"
	                          ],
	                          "repeat": {
	                            "expression": function () {return this.plancarinfolist},
	                            "value": "item"
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return this.item.title}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return this.item.count}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "messagetotalbox"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return '合计：' + (this.plantotal)}
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
	          "type": "div",
	          "classList": [
	            "mask"
	          ],
	          "events": {
	            "click": "closecheckerpage"
	          },
	          "shown": function () {return this.showchecker},
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
	          "type": "div",
	          "classList": [
	            "mask"
	          ],
	          "events": {
	            "click": "closeproblempage"
	          },
	          "shown": function () {return this.showproblem},
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
	                    "expression": function () {return this.problemlist},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "events": {
	                        "click": "selectproblem"
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
	          "type": "text",
	          "events": {
	            "click": "fileinput"
	          },
	          "attr": {
	            "value": "图片上传"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 122:
/***/ function(module, exports) {

	module.exports = {
	  "checkcar": {
	    "textAlign": "center",
	    "marginTop": 30,
	    "fontSize": 30,
	    "lineHeight": 60,
	    "borderBottomWidth": 1
	  },
	  "item": {
	    "height": 60,
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "marginLeft": 30,
	    "marginRight": 30,
	    "justifyContent": "space-between",
	    "alignItems": "flex-end"
	  },
	  "itemname": {
	    "width": 300,
	    "paddingBottom": 5
	  },
	  "uploadusercard": {
	    "width": 200,
	    "textAlign": "center",
	    "fontSize": 20,
	    "height": 44,
	    "lineHeight": 44,
	    "backgroundColor": "#eeeeee",
	    "marginBottom": 6
	  },
	  "carid": {
	    "textAlign": "right",
	    "width": 200,
	    "fontSize": 20,
	    "height": 44,
	    "marginBottom": 5
	  },
	  "seedetails": {
	    "color": "#0000FF",
	    "borderBottomWidth": 1,
	    "borderColor": "#0000FF",
	    "marginBottom": 6
	  },
	  "checkerselect": {
	    "textAlign": "right",
	    "width": 200,
	    "fontSize": 25,
	    "height": 44,
	    "lineHeight": 44,
	    "marginBottom": 5
	  },
	  "orderaddressitem": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "flex-end",
	    "marginLeft": 30,
	    "marginRight": 30,
	    "fontSize": 20,
	    "marginBottom": 5,
	    "borderBottomWidth": 1
	  },
	  "addressitem": {
	    "marginLeft": 30,
	    "marginRight": 30,
	    "borderBottomWidth": 1
	  },
	  "addressitemcheck": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "flex-start"
	  },
	  "ordercheckaddress": {
	    "textAlign": "right"
	  },
	  "autoshare": {
	    "marginLeft": 30,
	    "marginRight": 30,
	    "borderBottomWidth": 1
	  },
	  "autoshareitem": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "flex-end"
	  },
	  "problemdescrible": {
	    "marginLeft": 30,
	    "marginRight": 30,
	    "borderBottomWidth": 1
	  },
	  "message": {
	    "fontSize": 20,
	    "height": 40,
	    "textAlign": "right",
	    "justifyContent": "flex-end",
	    "borderBottomWidth": 0
	  },
	  "selectpicture": {
	    "marginTop": 30,
	    "marginBottom": 30,
	    "marginRight": 30,
	    "marginLeft": 30
	  },
	  "openshare": {
	    "width": 150,
	    "height": 44,
	    "lineHeight": 44,
	    "textAlign": "center",
	    "backgroundColor": "#eeeeee"
	  },
	  "opensharebutton": {
	    "width": 100,
	    "height": 40,
	    "lineHeight": 40,
	    "fontSize": 25,
	    "textAlign": "center",
	    "backgroundColor": "#ffde00",
	    "marginBottom": 6
	  },
	  "imgbox": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-end",
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "img": {
	    "width": 250,
	    "height": 120,
	    "marginLeft": 15,
	    "marginRight": 15,
	    "backgroundColor": "#FFC0CB"
	  },
	  "submitbox": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "submit": {
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginBottom": 50,
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
	    "height": 800,
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
	  "quotebox": {
	    "width": 500,
	    "padding": 15,
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 20
	  },
	  "quoteitem": {
	    "height": 60,
	    "flexDirection": "row",
	    "marginLeft": 30,
	    "marginRight": 30,
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "line": {
	    "marginBottom": 10,
	    "borderBottomWidth": 1
	  },
	  "okbox": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "okbutton": {
	    "width": 150,
	    "padding": 5,
	    "borderWidth": 1,
	    "textAlign": "center"
	  },
	  "messagebox": {
	    "width": 500,
	    "height": 800,
	    "padding": 15,
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 20
	  },
	  "orangetext": {
	    "color": "#FFA500"
	  },
	  "messagetext": {
	    "marginLeft": 30
	  },
	  "messageitem": {
	    "height": 60,
	    "flexDirection": "row",
	    "borderBottomWidth": 1,
	    "marginLeft": 30,
	    "marginRight": 30,
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "messagetitle": {
	    "fontSize": 30,
	    "marginLeft": 30
	  },
	  "messageidcardbox": {
	    "marginLeft": 30,
	    "marginRight": 30,
	    "borderBottomWidth": 1
	  },
	  "messagetotalbox": {
	    "alignItems": "flex-end"
	  }
	}

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _stringify = __webpack_require__(124);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var utils = __webpack_require__(4);
	var modal;
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    modal = __weex_require__('@weex-module/modal');
	});
	module.exports = {
	    data: function () {return {
	        checktime: "2016年10月8日 11:42:12",
	        oid: "loading...",
	        carid: "loading...",
	        ordercheckaddress: "北京市北京东城区",
	        ordercheckstreet: "东直门外大街48号东方银座",
	        checkaddress: "辽宁省大连市金州区",
	        checkstreet: "金石滩街道金石路30号",
	        notemessage: "",
	        problemmessage: "",
	
	        isshowquotebox: false,
	        sanzhe: "loading...",
	        jiaoqiang: "loading...",
	        total: "loading...",
	
	        showchecker: false,
	        personid: "",
	        selectedchecker: "请选择验车工作人员",
	        personlist: [],
	        users: [],
	
	        uploadtext: "未完整上传",
	        uploadcolor: "red",
	
	        isopenshare: false,
	        opensharecolor: "red",
	        opensharetext: "未开启",
	
	        isshowpalanmassage: false,
	        plantime: "loading...",
	        drivername: "loading...",
	        driversex: "loading...",
	        driverphone: "loading...",
	        driveridcar: "loading...",
	        plancarid: "loading...",
	        plancartype: "loading...",
	        plancarframe: "loading...",
	        plancarengine: "loading...",
	        plancarinfolist: [{ title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }, { title: "loading", count: "loading" }],
	        plantotal: "loading...",
	
	        problemlist: ["划痕", "刮蹭", "掉漆", "老化"],
	        showproblem: false,
	        selectedproblem: "请选择",
	
	        accessid: "",
	        dir: "",
	        expire: "",
	        host: "",
	        policy: "",
	        signature: ""
	    }},
	    created: function created() {},
	    ready: function ready() {
	        var storage = __weex_require__('@weex-module/storage');
	        var me = this;
	
	        storage.getItem('orderid', function (e) {
	            me.oid = e.data;
	            me.getdata(e.data);
	            me.getOosMessage();
	            me.getPlanAndUserInfo();
	        });
	    },
	    methods: {
	
	        fileinput: function fileinput() {
	            var _this = this;
	
	            __weex_require__('@weex-module/fileinput').select(1, function (path) {
	                _this.fileUpload(path);
	            });
	        },
	
	        fileUpload: function fileUpload(path) {
	            var obj = {
	                url: 'http://192.168.1.180:9000/upload',
	                method: 'POST',
	                headers: {
	                    'Accept': 'application/json'
	                },
	                fields: {
	                    'hello': 'world'
	                },
	                files: [{
	                    name: 'file',
	                    filename: 'file.jpg',
	                    filepath: path,
	                    filetype: 'images/*' }]
	            };
	            __weex_require__('@weex-module/fileupload').upload((0, _stringify2.default)(obj), function (res) {});
	        },
	
	        getOosMessage: function getOosMessage() {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                url: "http://api.fengchaohuzhu.com/order/push_oss",
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    console.log(response.data);
	                    var data = response.data.data;
	                    self.accessid = data.accessid;
	                    self.dir = data.dir;
	                    self.expire = data.expire;
	                    self.host = data.host;
	                    self.policy = data.policy;
	                    self.signature = data.signature;
	                }
	            });
	        },
	
	        submit: function submit() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            var base = utils.getBaseUrl(bundleUrl);
	            console.log("base" + base);
	
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'POST',
	                url: "http://api.fengchaohuzhu.com/order/saveOrder",
	                type: 'json',
	                body: "oid=" + self.oid + "&real_place=" + self.checkaddress + "--" + self.checkstreet + "&opid=" + self.personid + "&problem_type=" + self.selectedproblem + "&problem_description=" + self.problemmessage + "&note=" + self.notemessage + "&photo=" + null
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    self.$openURL(base + "result.js");
	                }
	            });
	        },
	
	        getdata: function getdata(oid) {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                headers: document.cookie,
	                url: "http://api.fengchaohuzhu.com/order/OrderDetails?" + "oid=" + oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    var data = response.data.data;
	                    self.checktime = data.plan_time;
	                    self.oid = data.oid.trim();
	                    self.carid = data.license_no.trim();
	
	                    var storage = __weex_require__('@weex-module/storage');
	                    storage.setItem('carno', self.carid, function (e) {
	                        self.setItemResult = self.setItemResult + 'carno:' + (0, _stringify2.default)(e);
	                    });
	                    self.ordercheckaddress = data.validate_place.trim().split("--")[0];
	                    self.ordercheckstreet = data.validate_place.trim().split("--")[1];
	                    self.users = [];
	                    self.personlist = [];
	                    self.users = response.data.data.userlist;
	                    console.log(response.data.data.userlist);
	                    for (var user in self.users) {
	                        self.personlist.push(self.users[user].trim());
	                    }
	                    if (response.data.data.view == 1) {
	                        self.uploadcolor = "green";
	                        self.uploadtext = "已完整上传";
	                    } else {
	                        self.uploadcolor = "red";
	                        self.uploadtext = "未完整上传";
	                    }
	                }
	            });
	        },
	
	        getPlanAndUserInfo: function getPlanAndUserInfo() {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                headers: document.cookie,
	                url: "http://api.fengchaohuzhu.com/order/getVehiclesInfo?" + "oid=" + self.oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    var data = response.data.data;
	                    self.plantime = data.expect_at;
	                    self.drivername = data.name.trim();
	                    self.driverphone = data.phone.trim();
	
	                    self.driveridcar = data.identity_no.trim();
	                    var sexnum = self.driveridcar.charAt(16);
	                    if (sexnum % 2 == 0) {
	                        self.driversex = "女";
	                    } else {
	                        self.driversex = "男";
	                    }
	                    self.plancarid = data.license_no.trim();
	                    self.plancartype = data.family_name.trim();
	                    self.plancarframe = data.vin.trim();
	                    self.plancarengine = data.engine_no.trim();
	                    self.plancarinfolist = [];
	                    for (var item in data.itemlist) {
	                        var tempitem = {};
	                        if (item == "00000000-0000-0000-0000-000000000001") {
	                            tempitem.title = "机动车自燃损失";
	                        } else if (item == "00000000-0000-0000-0000-000000000002") {
	                            tempitem.title = "机动车发动机涉水损失";
	                        } else if (item == "00000000-0000-0000-0000-000000000003") {
	                            tempitem.title = "机动车车身划痕损失";
	                        } else if (item == "00000000-0000-0000-0000-000000000004") {
	                            tempitem.title = "玻璃单独破碎";
	                        } else if (item == "00000000-0000-0000-0000-000000000005") {
	                            tempitem.title = "车损";
	                        } else if (item == "00000000-0000-0000-0000-000000000006") {
	                            tempitem.title = "机动车全车盗抢";
	                        } else if (item == "00000000-0000-0000-0000-000000000007") {
	                            tempitem.title = "无法找到第三方特约";
	                        } else if (item == "00000000-0000-0000-0000-000000000008") {
	                            tempitem.title = "交强险+车船税";
	                        } else if (item == "00000000-0000-0000-0000-000000000009") {
	                            tempitem.title = "第三方责任险";
	                        }
	                        tempitem.count = data.itemlist[item];
	                        self.plancarinfolist.push(tempitem);
	
	                        var storage = __weex_require__('@weex-module/storage');
	                        storage.setItem('name', self.drivername, function (e) {
	                            self.setItemResult = self.setItemResult + 'name:' + (0, _stringify2.default)(e);
	                        });
	                        storage.setItem('no', self.plancartype, function (e) {
	                            self.setItemResult = self.setItemResult + 'no:' + (0, _stringify2.default)(e);
	                        });
	                    }
	                    self.plantotal = data.payment;
	                }
	            });
	        },
	        showplanmassage: function showplanmassage() {
	            this.isshowpalanmassage = true;
	        },
	        shutdownplanmassage: function shutdownplanmassage() {
	            this.isshowpalanmassage = false;
	        },
	
	        reflashOpenShare: function reflashOpenShare() {
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                headers: document.cookie,
	                url: "http://api.fengchaohuzhu.com/order/getTenderOpened?" + "oid=" + self.oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    if (response.data.data.tender_opened == 1) {
	                        self.opensharecolor = "green";
	                        self.opensharetext = "已开启";
	                    } else {
	                        self.opensharecolor = "red";
	                        self.opensharetext = "未开启";
	                    }
	                }
	            });
	        },
	        showquotebox: function showquotebox() {
	            this.isshowquotebox = true;
	
	            var stream = __weex_require__('@weex-module/stream');
	            var self = this;
	            stream.fetch({
	                method: 'get',
	                headers: document.cookie,
	                url: "http://api.fengchaohuzhu.com/order/getinsurance?" + "oid=" + self.oid,
	                type: 'json'
	            }, function (response) {
	                console.log(response.data.code, response.data.msg, response.data);
	                if (response.data.code == 1) {
	                    self.sanzhe = response.data.data.jq;
	                    self.jiaoqiang = response.data.data.sz;
	                    self.total = ((response.data.data.jq * 100 + response.data.data.sz * 100) / 100).toFixed(2);
	                }
	            });
	        },
	        shutdownquotebox: function shutdownquotebox() {
	            this.isshowquotebox = false;
	        },
	
	        showcheckerpage: function showcheckerpage() {
	            this.showchecker = true;
	        },
	
	        selectchecker: function selectchecker(index) {
	            this.selectedchecker = index.target.children[0].attr.value;
	
	            for (var user in this.users) {
	                if (this.selectedchecker == this.users[user].trim()) {
	                    this.personid = user;
	                    console.log(user);
	                }
	            }
	            this.showchecker = false;
	        },
	
	        closecheckerpage: function closecheckerpage() {
	            this.showchecker = false;
	        },
	
	        showproblempage: function showproblempage() {
	            this.showproblem = true;
	        },
	
	        selectproblem: function selectproblem(index) {
	            this.selectedproblem = index.target.children[0].attr.value;
	            this.personid = this.problemlist.indexOf(this.selectedproblem);
	            this.showproblem = false;
	        },
	
	        closeproblempage: function closeproblempage() {
	            this.showproblem = false;
	        },
	        upload: function upload() {
	            console.log("上传");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(24)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIzMzY4MTM5MzNlODA5ZTQyNTY/ZTI5OSoqIiwid2VicGFjazovLy8uL3NyYy9jaGVja21lc3NhZ2Uud2U/MjgyMyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanM/YTAwNSoiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/OTQ1NCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2ttZXNzYWdlLndlP2ZhYWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrbWVzc2FnZS53ZT85YTU3Iiwid2VicGFjazovLy8uL3NyYy9jaGVja21lc3NhZ2Uud2UiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yMC4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7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O0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7NEJBQ0E7K0NBQ0E7OENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsrQ0FDQTttQ0FFQTs7a0NBQ0E7d0JBQ0E7b0JBQ0E7eUJBRUE7bUNBQ0E7eUZBQ0E7dUJBQ0E7QUFKQSxvQ0FLQTs2RUFDQTs4Q0FDQTtzREFDQTt5REFDQTs4R0FDQTtBQUNBO0FBQ0E7QUFDQTt1REFDQTttQ0FDQTtBQUVBOztxREFDQTtnQ0FDQTtBQUVBOztzREFDQTtrRUFFQTs7MENBQ0E7c0VBQ0E7cUNBQ0E7aUNBQ0E7QUFDQTtBQUNBO2dDQUNBO0FBRUE7O3VEQUNBO2dDQUNBO0FBR0E7O3FEQUNBO2dDQUNBO0FBRUE7O3NEQUNBO2tFQUNBOzJEQUNBO2dDQUNBO0FBRUE7O3VEQUNBO2dDQUNBO0FBQ0E7bUNBQ0E7eUJBQ0E7QUFFQTtBQXhSQTtBQXZGQTs7Ozs7Ozs7O0FDeE1BLG1CQUFrQix5RDs7Ozs7OztBQ0FsQjtBQUNBLHdDQUF1QywwQkFBMEI7QUFDakUseUNBQXdDO0FBQ3hDO0FBQ0EsRyIsImZpbGUiOiJkaXN0XFxjaGVja21lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MjMzNjgxMzkzM2U4MDllNDI1NiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vY2hlY2ttZXNzYWdlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2NoZWNrbWVzc2FnZS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RDpcXFxcd29ya3NwYWNlXFxcXGdpdGh1YlxcXFx3ZWV4dGVzdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1EOlxcXFx3b3Jrc3BhY2VcXFxcZ2l0aHViXFxcXHdlZXh0ZXN0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUQ6XFxcXHdvcmtzcGFjZVxcXFxnaXRodWJcXFxcd2VleHRlc3RcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NoZWNrbWVzc2FnZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC8wNmE5OThlMDRmZDU2ZTQ1ZGExMGM5NWU3ZDE3MTkyOCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC8wNmE5OThlMDRmZDU2ZTQ1ZGExMGM5NWU3ZDE3MTkyOCcsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jaGVja21lc3NhZ2Uud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcclxuICogQ3JlYXRlZCBieSBodWJlbiBvbiAwMy8wMS8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZ2V0QmFzZVVybCA9IGZ1bmN0aW9uKGJ1bmRsZVVybCkge1xyXG4gICAgYnVuZGxlVXJsID0gbmV3IFN0cmluZyhidW5kbGVVcmwpO1xyXG4gICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuXHJcbiAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdoaXZlLmFwcCcpID4gMDtcclxuICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvZGlzdC8nO1xyXG4gICAgfSBlbHNlIGlmIChpc2lPU0Fzc2V0cykge1xyXG4gICAgICAgIG5hdGl2ZUJhc2UgPSBidW5kbGVVcmwuc3Vic3RyaW5nKDAsIGJ1bmRsZVVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBob3N0ID0gJzE3Mi4xNjguMS43MTo4MDgwJztcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5q2k5aSE6ZyA5rOo5oSP5LiA5LiLLHRhYmJhciDnlKjnmoTnm7TmjqXmmK9qc2J1bmRsZSDnmoTot6/lvoQs5L2G5pivbmF2aWdhdG9y5piv55u05o6l6Lez6L2s5Yiw5paw6aG16Z2i5LiK55qELlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgeyAvLyDmtY/op4jlmaggd2Vidmlld1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvd2ViL2luZGV4Lmh0bWw/cGFnZT0uLi9kaXN0Lyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyAnL2Rpc3QvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmF0aXZlQmFzZTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA2IDcgOCA5IDEwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNSAxMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwic2Nyb2xsZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY2hlY2tjYXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLpqozovaZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtbmFtZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui9pueJjOWPt1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jYXJpZH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtbmFtZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuiuouWNlee8luWPt1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5vaWR9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLovabovoblj4rorqHliJLkv6Hmga9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlZWRldGFpbHNcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3dwbGFubWFzc2FnZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueCueWHu+afpeeci+ivpuaDhVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpooTnuqbpqozovabml7bpl7RcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY2hlY2t0aW1lfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJvcmRlcmFkZHJlc3NpdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIml0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6aKE57qm6aqM6L2m5Zyw54K5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJvcmRlcmNoZWNrYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMub3JkZXJjaGVja2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwib3JkZXJjaGVja2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm9yZGVyY2hlY2tzdHJlZXR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhZGRyZXNzaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NpdGVtY2hlY2tcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlrp7pmYXpqozovablnLDngrlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWSjOmihOe6pumqjOi9puWcsOeCueebuOWQjFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWRkcmVzc2l0ZW1jaGVja1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVja2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNoZWNrYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVja2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNoZWNrc3RyZWV0fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpdGVtbmFtZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumqjOi9puW3peS9nOS6uuWRmFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2hlY2tlcnNlbGVjdFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic2hvd2NoZWNrZXJwYWdlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWxlY3RlZGNoZWNrZXJ9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnlKjmiLfor4Hku7bkuIrkvKDmg4XlhrVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInVwbG9hZHVzZXJjYXJkXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXBsb2FkY29sb3J9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXBsb2FkdGV4dH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYXV0b3NoYXJlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuiHquWKqOWIhuaRiuaOiOadg+aDheWGtVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhdXRvc2hhcmVpdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIm9wZW5zaGFyZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm9wZW5zaGFyZWNvbG9yfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm9wZW5zaGFyZXRleHR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwib3BlbnNoYXJlYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJyZWZsYXNoT3BlblNoYXJlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yi35pawXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLorqLljZXljIXlkKvku6PkubDkv53pmalcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlZWRldGFpbHNcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3dxdW90ZWJveFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueCueWHu+afpeeci+ivpuaDhVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLovabovoblrZjlnKjpl67popjnsbvlnotcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInNob3dwcm9ibGVtcGFnZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VsZWN0ZWRwcm9ibGVtfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwcm9ibGVtZGVzY3JpYmxlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIml0ZW1uYW1lXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2m6L6G5a2Y5Zyo6Zeu6aKY5o+P6L+wXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+i+k+WFpVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wcm9ibGVtbWVzc2FnZX1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInByb2JsZW1kZXNjcmlibGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaXRlbW5hbWVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlpIfms6hcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwi6K+36L6T5YWlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm5vdGVtZXNzYWdlfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2VsZWN0cGljdHVyZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltZ2JveFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJ1cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJpbnB1dGZpbGVcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWdcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIuivt+mAieaLqeaWh+S7tlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWdcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltZ2JveFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImltZ1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWdcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImltZ2JveFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImltZ1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWdcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic3VibWl0Ym94XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwic3VibWl0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5o+Q5LqkXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibWFza1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc3Nob3dxdW90ZWJveH0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInNodXRkb3ducXVvdGVib3hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJxdW90ZWJveFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInF1b3RlaXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLkuqTlvLrpmakr6L2m6Ii556iOXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmFuZ2V0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5qaWFvcWlhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJxdW90ZWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuesrOS4ieiAhei0o+S7u+mZqVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3JhbmdldGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2FuemhlfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicXVvdGVpdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWQiOiuoVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3JhbmdldGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJva2JveFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJva2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuefpemBk+S6hlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJtYXNrXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlzc2hvd3BhbGFubWFzc2FnZX0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInNodXRkb3ducGxhbm1hc3NhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlYm94XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2Nyb2xsZXJcIixcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnlKjmiLfpooTmnJ/orqHliJLnlJ/mlYjml7bpl7RcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2V0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wbGFudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui9puS4u+Wnk+WQjVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kcml2ZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLovabkuLvmgKfliKtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZHJpdmVyc2V4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLovabkuLvmiYvmnLrlj7dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZHJpdmVycGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VpZGNhcmRib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2m5Li76Lqr5Lu96K+B5Y+3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRyaXZlcmlkY2FyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2m6L6G5L+h5oGvXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui9pueJjOWPt1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wbGFuY2FyaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui9pui+huWei+WPt1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wbGFuY2FydHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2m5p625Y+3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYW5jYXJmcmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Y+R5Yqo5py65Y+3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYW5jYXJlbmdpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdldGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLorqHliJLkv6Hmga9cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2V0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6K6i5Y2V6YeR6aKd77yaKOaUr+S7mOeahOmHkeminSlcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYW5jYXJpbmZvbGlzdH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2V0b3RhbGJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAn5ZCI6K6h77yaJyArICh0aGlzLnBsYW50b3RhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm1hc2tcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsb3NlY2hlY2tlcnBhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2hvd2NoZWNrZXJ9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGlzdFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wZXJzb25saXN0fSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3RjaGVja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibWFza1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiY2xvc2Vwcm9ibGVtcGFnZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zaG93cHJvYmxlbX0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsaXN0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnByb2JsZW1saXN0fSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJzZWxlY3Rwcm9ibGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiZmlsZWlucHV0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5Zu+54mH5LiK5LygXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9jaGVja21lc3NhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjaGVja2NhclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblRvcFwiOiAzMCxcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwibGluZUhlaWdodFwiOiA2MCxcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDFcbiAgfSxcbiAgXCJpdGVtXCI6IHtcbiAgICBcImhlaWdodFwiOiA2MCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDMwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMzAsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiaXRlbW5hbWVcIjoge1xuICAgIFwid2lkdGhcIjogMzAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiA1XG4gIH0sXG4gIFwidXBsb2FkdXNlcmNhcmRcIjoge1xuICAgIFwid2lkdGhcIjogMjAwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICBcImhlaWdodFwiOiA0NCxcbiAgICBcImxpbmVIZWlnaHRcIjogNDQsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVlZWVlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogNlxuICB9LFxuICBcImNhcmlkXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJ3aWR0aFwiOiAyMDAsXG4gICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICBcImhlaWdodFwiOiA0NCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA1XG4gIH0sXG4gIFwic2VlZGV0YWlsc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwRkZcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMwMDAwRkZcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA2XG4gIH0sXG4gIFwiY2hlY2tlcnNlbGVjdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwid2lkdGhcIjogMjAwLFxuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJoZWlnaHRcIjogNDQsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQ0LFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDVcbiAgfSxcbiAgXCJvcmRlcmFkZHJlc3NpdGVtXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDMwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMzAsXG4gICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA1LFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcImFkZHJlc3NpdGVtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMzAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAzMCxcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDFcbiAgfSxcbiAgXCJhZGRyZXNzaXRlbWNoZWNrXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcIm9yZGVyY2hlY2thZGRyZXNzXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJhdXRvc2hhcmVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDMwLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcImF1dG9zaGFyZWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcInByb2JsZW1kZXNjcmlibGVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDMwLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcIm1lc3NhZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMFxuICB9LFxuICBcInNlbGVjdHBpY3R1cmVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDMwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDMwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMzAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDMwXG4gIH0sXG4gIFwib3BlbnNoYXJlXCI6IHtcbiAgICBcIndpZHRoXCI6IDE1MCxcbiAgICBcImhlaWdodFwiOiA0NCxcbiAgICBcImxpbmVIZWlnaHRcIjogNDQsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcIm9wZW5zaGFyZWJ1dHRvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJoZWlnaHRcIjogNDAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmRlMDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA2XG4gIH0sXG4gIFwiaW1nYm94XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICBcIm1hcmdpblRvcFwiOiAxMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAxMFxuICB9LFxuICBcImltZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAyNTAsXG4gICAgXCJoZWlnaHRcIjogMTIwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxNSxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDE1LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGQzBDQlwiXG4gIH0sXG4gIFwic3VibWl0Ym94XCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJzdWJtaXRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMzAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogNTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZkZTAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcIndpZHRoXCI6IDQwMCxcbiAgICBcImhlaWdodFwiOiA1MCxcbiAgICBcInBhZGRpbmdcIjogNSxcbiAgICBcImZvbnRTaXplXCI6IDI1XG4gIH0sXG4gIFwibWFza1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJsaXN0XCI6IHtcbiAgICBcIndpZHRoXCI6IDUwMCxcbiAgICBcImhlaWdodFwiOiA4MDAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJpdGVtc3R5bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDAsXG4gICAgXCJtYXJnaW5cIjogMTAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDMwLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInF1b3RlYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IDUwMCxcbiAgICBcInBhZGRpbmdcIjogMTUsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMjBcbiAgfSxcbiAgXCJxdW90ZWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDMwLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJsaW5lXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAxMCxcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDFcbiAgfSxcbiAgXCJva2JveFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwib2tidXR0b25cIjoge1xuICAgIFwid2lkdGhcIjogMTUwLFxuICAgIFwicGFkZGluZ1wiOiA1LFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibWVzc2FnZWJveFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA1MDAsXG4gICAgXCJoZWlnaHRcIjogODAwLFxuICAgIFwicGFkZGluZ1wiOiAxNSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAyMFxuICB9LFxuICBcIm9yYW5nZXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjRkZBNTAwXCJcbiAgfSxcbiAgXCJtZXNzYWdldGV4dFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDMwXG4gIH0sXG4gIFwibWVzc2FnZWl0ZW1cIjoge1xuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMSxcbiAgICBcIm1hcmdpbkxlZnRcIjogMzAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAzMCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwibWVzc2FnZXRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAzMFxuICB9LFxuICBcIm1lc3NhZ2VpZGNhcmRib3hcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDMwLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMVxuICB9LFxuICBcIm1lc3NhZ2V0b3RhbGJveFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvY2hlY2ttZXNzYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgIDxzY3JvbGxlciA+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlY2tjYXJcIj7pqozovaY8L3RleHQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbW5hbWVcIj7ovabniYzlj7c8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0Pnt7Y2FyaWR9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cIml0ZW1uYW1lXCI+6K6i5Y2V57yW5Y+3PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dD4ge3tvaWR9fTwvaW5wdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPui9pui+huWPiuiuoeWIkuS/oeaBrzwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3MgPVwic2VlZGV0YWlsc1wiIG9uY2xpY2sgPSBcInNob3dwbGFubWFzc2FnZVwiPueCueWHu+afpeeci+ivpuaDhTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPumihOe6pumqjOi9puaXtumXtDwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQ+e3tjaGVja3RpbWV9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwib3JkZXJhZGRyZXNzaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cIml0ZW1uYW1lXCI+6aKE57qm6aqM6L2m5Zyw54K5PC90ZXh0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJvcmRlcmNoZWNrYWRkcmVzc1wiPnt7b3JkZXJjaGVja2FkZHJlc3N9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwib3JkZXJjaGVja2FkZHJlc3NcIj57e29yZGVyY2hlY2tzdHJlZXR9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc2l0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc2l0ZW1jaGVja1wiPiBcclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPuWunumZhemqjOi9puWcsOeCuTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQ+5ZKM6aKE57qm6aqM6L2m5Zyw54K555u45ZCMPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzaXRlbWNoZWNrXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hlY2thZGRyZXNzXCI+e3tjaGVja2FkZHJlc3N9fTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVja2FkZHJlc3NcIj57e2NoZWNrc3RyZWV0fX08L3RleHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPumqjOi9puW3peS9nOS6uuWRmDwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjaGVja2Vyc2VsZWN0XCIgIG9uY2xpY2sgPSBcInNob3djaGVja2VycGFnZVwiPnt7c2VsZWN0ZWRjaGVja2VyfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPueUqOaIt+ivgeS7tuS4iuS8oOaDheWGtTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ1cGxvYWR1c2VyY2FyZFwiIHN0eWxlPVwiY29sb3I6e3t1cGxvYWRjb2xvcn19O1wiPnt7dXBsb2FkdGV4dH19PC9pbnB1dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXV0b3NoYXJlXCI+XHJcbiAgICAgICAgPHRleHQ+6Ieq5Yqo5YiG5pGK5o6I5p2D5oOF5Ya1PC90ZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvc2hhcmVpdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwib3BlbnNoYXJlXCIgc3R5bGUgPVwiY29sb3I6e3tvcGVuc2hhcmVjb2xvcn19O1wiPnt7b3BlbnNoYXJldGV4dH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm9wZW5zaGFyZWJ1dHRvblwiIG9uY2xpY2sgPVwicmVmbGFzaE9wZW5TaGFyZVwiPuWIt+aWsDwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPuiuouWNleWMheWQq+S7o+S5sOS/nemZqTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgIGNsYXNzID0gXCJzZWVkZXRhaWxzXCIgb25jbGljaz1cInNob3dxdW90ZWJveFwiPueCueWHu+afpeeci+ivpuaDhTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPui9pui+huWtmOWcqOmXrumimOexu+WeizwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJtZXNzYWdlXCIgb25jbGljayA9XCJzaG93cHJvYmxlbXBhZ2VcIj57e3NlbGVjdGVkcHJvYmxlbX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ibGVtZGVzY3JpYmxlXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbW5hbWVcIj7ovabovoblrZjlnKjpl67popjmj4/ov7A8L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiPnt7cHJvYmxlbW1lc3NhZ2V9fTwvaW5wdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2JsZW1kZXNjcmlibGVcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtbmFtZVwiPuWkh+azqDwvdGV4dD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCI+e3tub3RlbWVzc2FnZX19PC9pbnB1dD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RwaWN0dXJlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImltZ2JveFwiPlxyXG4gICAgICAgIDxpbnB1dCAgb25jbGljayA9XCJ1cGxvYWRcIiBpZCA9XCJpbnB1dGZpbGVcIiBjbGFzcyA9XCJpbWdcIiB0eXBlID0gXCJmaWxlXCIgcGxhY2Vob2xkZXIgPVwi6K+36YCJ5oup5paH5Lu2XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJpbWdcIj48L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiaW1nXCI+PC9kaXY+ICAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWdib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3VibWl0Ym94XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJzdWJtaXRcIiBvbmNsaWNrPVwic3VibWl0XCI+5o+Q5LqkPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcyA9XCJtYXNrXCIgaWYgPVwiaXNzaG93cXVvdGVib3hcIiBvbmNsaWNrID0gXCJzaHV0ZG93bnF1b3RlYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1b3RlYm94XCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cInF1b3RlaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0PuS6pOW8uumZqSvovaboiLnnqI48L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+e3tqaWFvcWlhbmd9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cInF1b3RlaXRlbSBsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+56ys5LiJ6ICF6LSj5Lu76ZmpPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwib3JhbmdldGV4dFwiPnt7c2FuemhlfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJxdW90ZWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dD7lkIjorqE8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+e3t0b3RhbH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJva2JveFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcyA9IFwib2tidXR0b25cIj7nn6XpgZPkuoY8L3RleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3MgPVwibWFza1wiIGlmPVwie3tpc3Nob3dwYWxhbm1hc3NhZ2V9fVwiIG9uY2xpY2s9XCJzaHV0ZG93bnBsYW5tYXNzYWdlXCI+ICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJtZXNzYWdlYm94XCI+XHJcbiAgICAgICAgICAgPHNjcm9sbGVyPlxyXG4gICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2V0ZXh0XCI+55So5oi36aKE5pyf6K6h5YiS55Sf5pWI5pe26Ze0PC90ZXh0PlxyXG4gICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2V0ZXh0XCI+e3twbGFudGltZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cIm1lc3NhZ2VpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+6L2m5Li75aeT5ZCNPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pnt7ZHJpdmVybmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwibWVzc2FnZWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dD7ovabkuLvmgKfliKs8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+e3tkcml2ZXJzZXh9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cIm1lc3NhZ2VpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+6L2m5Li75omL5py65Y+3PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pnt7ZHJpdmVycGhvbmV9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZWlkY2FyZGJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pui9puS4u+i6q+S7veivgeWPtzwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dD57e2RyaXZlcmlkY2FyfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2V0aXRsZVwiPui9pui+huS/oeaBrzwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzID1cIm1lc3NhZ2VpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+6L2m54mM5Y+3PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pnt7cGxhbmNhcmlkfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3MgPVwibWVzc2FnZWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dD7ovabovoblnovlj7c8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+e3twbGFuY2FydHlwZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzID1cIm1lc3NhZ2VpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+6L2m5p625Y+3PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pnt7cGxhbmNhcmZyYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3MgPVwibWVzc2FnZWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dD7lj5HliqjmnLrlj7c8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+e3twbGFuY2FyZW5naW5lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3MgPVwibWVzc2FnZXRpdGxlXCI+6K6h5YiS5L+h5oGvPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJtZXNzYWdldGV4dFwiPuiuouWNlemHkemine+8mijmlK/ku5jnmoTph5Hpop0pPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJpdGVtXCIgcmVwZWF0ID0gXCJpdGVtIGluIHBsYW5jYXJpbmZvbGlzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQ+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0Pnt7aXRlbS5jb3VudH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXRvdGFsYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+5ZCI6K6h77yae3twbGFudG90YWx9fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zY3JvbGxlcj5cclxuICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gaXMgc2hvdyBjaGVja2NhciBwZXJzb24gYm94IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCIgb25jbGljaz0gXCJjbG9zZWNoZWNrZXJwYWdlXCIgIGlmPVwie3tzaG93Y2hlY2tlcn19XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpc3QgcmVwZWF0PVwiaXRlbSBpbiBwZXJzb25saXN0XCIgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y2VsbCBvbmNsaWNrPVwic2VsZWN0Y2hlY2tlclwiPjx0ZXh0IGNsYXNzID1cIml0ZW1zdHlsZVwiPnt7aXRlbX19PC90ZXh0PjwvY2VsbD5cclxuICAgICAgICAgICAgICAgIDwvbGlzdD5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8IS0tIGlzIHNob3cgdGhlIHR5cGUgb2YgY2FyIGhhdmUgIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCIgb25jbGljaz0gXCJjbG9zZXByb2JsZW1wYWdlXCIgIGlmPVwie3tzaG93cHJvYmxlbX19XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpc3QgcmVwZWF0PVwiaXRlbSBpbiBwcm9ibGVtbGlzdFwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNlbGwgb25jbGljaz1cInNlbGVjdHByb2JsZW1cIj48dGV4dCBjbGFzcyA9XCJpdGVtc3R5bGVcIj57e2l0ZW19fTwvdGV4dD48L2NlbGw+XHJcbiAgICAgICAgICAgICAgICA8L2xpc3Q+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHRleHQgb25jbGljaz0nZmlsZWlucHV0Jz7lm77niYfkuIrkvKA8L3RleHQ+XHJcblxyXG4gICA8L3Njcm9sbGVyPiAgXHJcbiAgIFxyXG4gICA8L2Rpdj4gXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy91dGlsc1wiKTtcclxuIHZhciBtb2RhbFxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvYXBpJywgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXykge1xyXG4gIG1vZGFsID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL21vZGFsJylcclxufSk7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY2hlY2t0aW1lOlwiMjAxNuW5tDEw5pyIOOaXpSAxMTo0MjoxMlwiLFxyXG4gICAgICAgIG9pZDpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBjYXJpZDpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBvcmRlcmNoZWNrYWRkcmVzczpcIuWMl+S6rOW4guWMl+S6rOS4nOWfjuWMulwiLFxyXG4gICAgICAgIG9yZGVyY2hlY2tzdHJlZXQ6XCLkuJznm7Tpl6jlpJblpKfooZc0OOWPt+S4nOaWuemTtuW6p1wiLFxyXG4gICAgICAgIGNoZWNrYWRkcmVzczpcIui+veWugeecgeWkp+i/nuW4gumHkeW3nuWMulwiLFxyXG4gICAgICAgIGNoZWNrc3RyZWV0Olwi6YeR55+z5rup6KGX6YGT6YeR55+z6LevMzDlj7dcIixcclxuICAgICAgICBub3RlbWVzc2FnZTpcIlwiLFxyXG4gICAgICAgIHByb2JsZW1tZXNzYWdlOlwiXCIsXHJcblxyXG4gICAgICAgIC8qIOaYvuekuuiuouWNleWMheWQq+S/nemZqeivpuaDhSAqL1xyXG4gICAgICAgIGlzc2hvd3F1b3RlYm94OmZhbHNlLFxyXG4gICAgICAgIHNhbnpoZTpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBqaWFvcWlhbmc6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgdG90YWw6XCJsb2FkaW5nLi4uXCIsICAgICAgIFxyXG5cclxuICAgICAgICAvKiDpgInmi6npqozovabkurrlkZggKi9cclxuICAgICAgICBzaG93Y2hlY2tlcjpmYWxzZSxcclxuICAgICAgICBwZXJzb25pZDpcIlwiLFxyXG4gICAgICAgIHNlbGVjdGVkY2hlY2tlcjpcIuivt+mAieaLqemqjOi9puW3peS9nOS6uuWRmFwiLFxyXG4gICAgICAgIHBlcnNvbmxpc3Q6W10sXHJcbiAgICAgICAgdXNlcnM6W10sXHJcblxyXG4gICAgICAgIC8qIOivgeS7tuS4iuS8oOaDheWGtSAqL1xyXG4gICAgICAgIHVwbG9hZHRleHQ6XCLmnKrlrozmlbTkuIrkvKBcIixcclxuICAgICAgICB1cGxvYWRjb2xvcjpcInJlZFwiLFxyXG5cclxuICAgICAgICAvKiDoh6rliqjliIbmkYrmmK/lkKblvIDlkK8gKi9cclxuICAgICAgICBpc29wZW5zaGFyZTpmYWxzZSxcclxuICAgICAgICBvcGVuc2hhcmVjb2xvcjpcInJlZFwiLFxyXG4gICAgICAgIG9wZW5zaGFyZXRleHQ6XCLmnKrlvIDlkK9cIixcclxuXHJcbiAgICAgICAgLyogY2FyIGFuZCBwbGFuIGluZm8qL1xyXG4gICAgICAgIGlzc2hvd3BhbGFubWFzc2FnZTpmYWxzZSwgICAgICAgXHJcbiAgICAgICAgcGxhbnRpbWU6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgZHJpdmVybmFtZTpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBkcml2ZXJzZXg6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgZHJpdmVycGhvbmU6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgZHJpdmVyaWRjYXI6XCJsb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgcGxhbmNhcmlkOlwibG9hZGluZy4uLlwiLFxyXG4gICAgICAgIHBsYW5jYXJ0eXBlOlwibG9hZGluZy4uLlwiLFxyXG4gICAgICAgIHBsYW5jYXJmcmFtZTpcImxvYWRpbmcuLi5cIixcclxuICAgICAgICBwbGFuY2FyZW5naW5lOlwibG9hZGluZy4uLlwiLFxyXG4gICAgICAgIHBsYW5jYXJpbmZvbGlzdDpbXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn0sXHJcbiAgICAgICAgICAgIHt0aXRsZTpcImxvYWRpbmdcIixjb3VudDpcImxvYWRpbmdcIn1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBwbGFudG90YWw6XCJsb2FkaW5nLi4uXCIsXHJcblxyXG4gICAgICAgIC8qIHByb2JsZW0gYm94IG1lc3NhZ2UgKi9cclxuICAgICAgICBwcm9ibGVtbGlzdDpbXCLliJLnl5VcIixcIuWIrui5rVwiLFwi5o6J5ryGXCIsXCLogIHljJZcIl0sXHJcbiAgICAgICAgc2hvd3Byb2JsZW06ZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWRwcm9ibGVtOlwi6K+36YCJ5oupXCIsXHJcblxyXG4gICAgICAgIC8qIG9vcyBjb25maWcgKi9cclxuICAgICAgICBhY2Nlc3NpZDpcIlwiLFxyXG4gICAgICAgIGRpcjpcIlwiLFxyXG4gICAgICAgIGV4cGlyZTpcIlwiLFxyXG4gICAgICAgIGhvc3Q6XCJcIixcclxuICAgICAgICBwb2xpY3k6XCJcIixcclxuICAgICAgICBzaWduYXR1cmU6XCJcIixcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHsgICAgXHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICAgcmVhZHk6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJyk7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICAgLyogZ2V0IG9yZGVyaWQgb2YgZHJpdmVyICovXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKCdvcmRlcmlkJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgLyogZ2V0IGluZm8gb2YgZHJpdmVyICovXHJcbiAgICAgICAgICAgIG1lLm9pZCA9IGUuZGF0YTtcclxuICAgICAgICAgICAgbWUuZ2V0ZGF0YShlLmRhdGEpO1xyXG4gICAgICAgICAgICBtZS5nZXRPb3NNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIG1lLmdldFBsYW5BbmRVc2VySW5mbygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICBmaWxlaW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2ZpbGVpbnB1dCcpLnNlbGVjdCgxLCAocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkKHBhdGgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZpbGVVcGxvYWQ6IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuMTgwOjkwMDAvdXBsb2FkJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBkZWZhdWx0ICdQT1NUJyxzdXBwb3J0ICdQT1NUJyBhbmQgJ1BVVCdcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgJ2hlbGxvJzogJ3dvcmxkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsIC8vIG9wdGlvbmFsLCBpZiBub25lIHRoZW4gYGZpbGVuYW1lYCBpcyB1c2VkIGluc3RlYWRcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogJ2ZpbGUuanBnJywgLy8gcmVxdWlyZSwgZmlsZSBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXBhdGg6IHBhdGgsIC8vIHJlcXVpcmUsIGZpbGUgYWJzb2x1ZXRlIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxldHlwZTogJ2ltYWdlcy8qJywgLy8gb3B0aW9ucywgaWYgbm9uZSwgd2lsbCBnZXQgbWltZXR5cGUgZnJvbSBgZmlsZXBhdGhgIGV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1aXJlKCdAd2VleC1tb2R1bGUvZmlsZXVwbG9hZCcpLnVwbG9hZChKU09OLnN0cmluZ2lmeShvYmopLCAocmVzKSA9PiB7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldE9vc01lc3NhZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKTtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzOyAgIFxyXG4gICAgICAgICAgICBzdHJlYW0uZmV0Y2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL2FwaS5mZW5nY2hhb2h1emh1LmNvbS9vcmRlci9wdXNoX29zc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuY29kZSxyZXNwb25zZS5kYXRhLm1zZyxyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWNjZXNzaWQgPSBkYXRhLmFjY2Vzc2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLmRpciA9IGRhdGEuZGlyO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLmV4cGlyZSA9IGRhdGEuZXhwaXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLmhvc3QgPSBkYXRhLmhvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYucG9saWN5ID0gZGF0YS5wb2xpY3k7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2lnbmF0dXJlID0gZGF0YS5zaWduYXR1cmU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKiDmj5DkuqTpqozovabkv6Hmga8gKi9cclxuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSAgdXRpbHMuZ2V0QmFzZVVybChidW5kbGVVcmwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhc2VcIitiYXNlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpczsgICBcclxuICAgICAgICAgICAgc3RyZWFtLmZldGNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL29yZGVyL3NhdmVPcmRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIm9pZD1cIisgc2VsZi5vaWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCImcmVhbF9wbGFjZT1cIitzZWxmLmNoZWNrYWRkcmVzcytcIi0tXCIrc2VsZi5jaGVja3N0cmVldCtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiJm9waWQ9XCIrc2VsZi5wZXJzb25pZCtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiJnByb2JsZW1fdHlwZT1cIisgc2VsZi5zZWxlY3RlZHByb2JsZW0rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiZwcm9ibGVtX2Rlc2NyaXB0aW9uPVwiKyBzZWxmLnByb2JsZW1tZXNzYWdlK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCImbm90ZT1cIitzZWxmLm5vdGVtZXNzYWdlK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCImcGhvdG89XCIrbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNvZGUscmVzcG9uc2UuZGF0YS5tc2cscmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmNvZGUgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi4kb3BlblVSTChiYXNlICsgXCJyZXN1bHQuanNcIik7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKiDojrflj5borqLljZXln7rmnKzkv6Hmga8gKi9cclxuICAgICAgICBnZXRkYXRhOmZ1bmN0aW9uKG9pZCl7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpczsgICBcclxuICAgICAgICAgICAgc3RyZWFtLmZldGNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZG9jdW1lbnQuY29va2llLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL29yZGVyL09yZGVyRGV0YWlscz9cIitcIm9pZD1cIitvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTonanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5jb2RlLHJlc3BvbnNlLmRhdGEubXNnLHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGVja3RpbWUgPSBkYXRhLnBsYW5fdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9pZCA9IGRhdGEub2lkLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhcmlkID0gZGF0YS5saWNlbnNlX25vLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiDlrZjlgqjovabniYzkv6Hmga8gKi9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmFnZSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdG9yYWdlJyk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSgnY2Fybm8nLCBzZWxmLmNhcmlkLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEl0ZW1SZXN1bHQgPSBzZWxmLnNldEl0ZW1SZXN1bHQgKyAnY2Fybm86JytKU09OLnN0cmluZ2lmeShlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcmRlcmNoZWNrYWRkcmVzcyA9IGRhdGEudmFsaWRhdGVfcGxhY2UudHJpbSgpLnNwbGl0KFwiLS1cIilbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcmRlcmNoZWNrc3RyZWV0ID0gZGF0YS52YWxpZGF0ZV9wbGFjZS50cmltKCkuc3BsaXQoXCItLVwiKVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wZXJzb25saXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YS51c2VybGlzdDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEudXNlcmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciggdmFyIHVzZXIgaW4gc2VsZi51c2Vycyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGVyc29ubGlzdC5wdXNoKHNlbGYudXNlcnNbdXNlcl0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5kYXRhLnZpZXcgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGxvYWRjb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGxvYWR0ZXh0ID1cIuW3suWujOaVtOS4iuS8oFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwbG9hZGNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGxvYWR0ZXh0ID0gXCLmnKrlrozmlbTkuIrkvKBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qIOiOt+WPlueUqOaIt+WSjOi9pui+huS/oeaBryAqL1xyXG4gICAgICAgIGdldFBsYW5BbmRVc2VySW5mbzpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3N0cmVhbScpO1xyXG4gICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzOyAgIFxyXG4gICAgICAgICAgICAgc3RyZWFtLmZldGNoKFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZG9jdW1lbnQuY29va2llLFxyXG4gICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL2FwaS5mZW5nY2hhb2h1emh1LmNvbS9vcmRlci9nZXRWZWhpY2xlc0luZm8/XCIrXCJvaWQ9XCIrc2VsZi5vaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5jb2RlLHJlc3BvbnNlLmRhdGEubXNnLHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYW50aW1lID0gZGF0YS5leHBlY3RfYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRyaXZlcm5hbWUgPSBkYXRhLm5hbWUudHJpbSgpOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcml2ZXJwaG9uZSA9IGRhdGEucGhvbmUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRyaXZlcmlkY2FyID0gZGF0YS5pZGVudGl0eV9uby50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2V4bnVtID0gc2VsZi5kcml2ZXJpZGNhci5jaGFyQXQoMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoc2V4bnVtJTI9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRyaXZlcnNleCA9IFwi5aWzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcml2ZXJzZXggPSBcIueUt1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGFuY2FyaWQgPSBkYXRhLmxpY2Vuc2Vfbm8udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGFuY2FydHlwZSA9IGRhdGEuZmFtaWx5X25hbWUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGFuY2FyZnJhbWUgPWRhdGEudmluLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxhbmNhcmVuZ2luZSA9IGRhdGEuZW5naW5lX25vLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxhbmNhcmluZm9saXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGl0ZW0gaW4gZGF0YS5pdGVtbGlzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBpdGVtID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbSA9PSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGl0ZW0udGl0bGUgPSBcIuacuuWKqOi9puiHqueHg+aNn+WksVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGl0ZW0gPT0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBpdGVtLnRpdGxlID0gXCLmnLrliqjovablj5HliqjmnLrmtonmsLTmjZ/lpLFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihpdGVtID09IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAzXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1waXRlbS50aXRsZSA9IFwi5py65Yqo6L2m6L2m6Lqr5YiS55eV5o2f5aSxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaXRlbSA9PSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwNFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGl0ZW0udGl0bGUgPSBcIueOu+eSg+WNleeLrOegtOeijlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGl0ZW0gPT0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBpdGVtLnRpdGxlID0gXCLovabmjZ9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihpdGVtID09IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDA2XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1waXRlbS50aXRsZSA9IFwi5py65Yqo6L2m5YWo6L2m55uX5oqiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaXRlbSA9PSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwN1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGl0ZW0udGl0bGUgPSBcIuaXoOazleaJvuWIsOesrOS4ieaWueeJuee6plwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGl0ZW0gPT0gXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDhcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBpdGVtLnRpdGxlID0gXCLkuqTlvLrpmakr6L2m6Ii556iOXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaXRlbSA9PSBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwOVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGl0ZW0udGl0bGUgPSBcIuesrOS4ieaWuei0o+S7u+mZqVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1waXRlbS5jb3VudCA9IGRhdGEuaXRlbWxpc3RbaXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGFuY2FyaW5mb2xpc3QucHVzaCh0ZW1waXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvKiDlrZjlgqjnlKjmiLflkI3lkozovabovoblnovlj7fkv6Hmga8gKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3N0b3JhZ2UnKTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBzZWxmLmRyaXZlcm5hbWUsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRJdGVtUmVzdWx0ID0gc2VsZi5zZXRJdGVtUmVzdWx0ICsgJ25hbWU6JytKU09OLnN0cmluZ2lmeShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKCdubycsIHNlbGYucGxhbmNhcnR5cGUsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0SXRlbVJlc3VsdCA9IHNlbGYuc2V0SXRlbVJlc3VsdCArICdubzonK0pTT04uc3RyaW5naWZ5KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYW50b3RhbCA9IGRhdGEucGF5bWVudDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd3BsYW5tYXNzYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNzaG93cGFsYW5tYXNzYWdlID0gdHJ1ZTsgICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNodXRkb3ducGxhbm1hc3NhZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5pc3Nob3dwYWxhbm1hc3NhZ2UgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKiDliLfmlrDoh6rliqjliIbmkYrmjojmnYPlvIDlkK/mg4XlhrUgKi9cclxuICAgICAgICByZWZsYXNoT3BlblNoYXJlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7ICAgXHJcbiAgICAgICAgICAgICBzdHJlYW0uZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBkb2N1bWVudC5jb29raWUsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL29yZGVyL2dldFRlbmRlck9wZW5lZD9cIitcIm9pZD1cIitzZWxmLm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgdHlwZTonanNvbicsXHJcbiAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNvZGUscmVzcG9uc2UuZGF0YS5tc2cscmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuZGF0YS50ZW5kZXJfb3BlbmVkID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuc2hhcmVjb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub3BlbnNoYXJldGV4dCA9XCLlt7LlvIDlkK9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuc2hhcmVjb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW5zaGFyZXRleHQgPVwi5pyq5byA5ZCvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd3F1b3RlYm94OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNzaG93cXVvdGVib3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAvKiDojrflj5bnlKjmiLflkozovabovobkv6Hmga8gKi9cclxuICAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvc3RyZWFtJyk7XHJcbiAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7ICAgXHJcbiAgICAgICAgICAgICBzdHJlYW0uZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBkb2N1bWVudC5jb29raWUsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXBpLmZlbmdjaGFvaHV6aHUuY29tL29yZGVyL2dldGluc3VyYW5jZT9cIitcIm9pZD1cIitzZWxmLm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgdHlwZTonanNvbicsXHJcbiAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNvZGUscmVzcG9uc2UuZGF0YS5tc2cscmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2FuemhlID0gcmVzcG9uc2UuZGF0YS5kYXRhLmpxO1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLmppYW9xaWFuZyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5zejsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLnRvdGFsID0gKChyZXNwb25zZS5kYXRhLmRhdGEuanEgKjEwMCArIHJlc3BvbnNlLmRhdGEuZGF0YS5zeiAqMTAwKS8xMDApLnRvRml4ZWQoMik7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaHV0ZG93bnF1b3RlYm94OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNzaG93cXVvdGVib3ggPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qIOaYvuekuumqjOi9puS6uumAieaLqeeVjOmdoiAqL1xyXG4gICAgICAgIHNob3djaGVja2VycGFnZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3djaGVja2VyID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAvKiDpgInmi6npqozovabkurogKi9cclxuICAgICAgICBzZWxlY3RjaGVja2VyOmZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRjaGVja2VyID0gaW5kZXgudGFyZ2V0LmNoaWxkcmVuWzBdLmF0dHIudmFsdWU7XHJcbiAgICAgICAgICAgICAvL3RoaXMuZWwoXCJpbnB1dFwiKS52YWx1ZSA9IHRoaXMuc2VsZWN0bWVzc2FnZTtcclxuICAgICAgICAgICAgICBmb3IoIHZhciB1c2VyIGluIHRoaXMudXNlcnMpeyAgXHJcbiAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkY2hlY2tlciA9PSB0aGlzLnVzZXJzW3VzZXJdLnRyaW0oKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25pZCA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgIHRoaXMuc2hvd2NoZWNrZXIgPSBmYWxzZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgIC8qIOWFs+mXremqjOi9puS6uumAieaLqeeVjOmdoiAqL1xyXG4gICAgICAgICBjbG9zZWNoZWNrZXJwYWdlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNob3djaGVja2VyID0gZmFsc2U7XHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvKiDmmL7npLrovabovobpl67popjpgInmi6nnlYzpnaIgKi9cclxuICAgICAgICBzaG93cHJvYmxlbXBhZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93cHJvYmxlbSA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgLyog6YCJ5oup6L2m6L6G6Zeu6aKYICovXHJcbiAgICAgICAgc2VsZWN0cHJvYmxlbTpmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkcHJvYmxlbSA9IGluZGV4LnRhcmdldC5jaGlsZHJlblswXS5hdHRyLnZhbHVlOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHRoaXMucGVyc29uaWQgPSB0aGlzLnByb2JsZW1saXN0LmluZGV4T2YodGhpcy5zZWxlY3RlZHByb2JsZW0pO1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93cHJvYmxlbSA9IGZhbHNlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAgLyog5YWz6Zet6L2m6L6G6Zeu6aKY6YCJ5oup55WM6Z2iICovXHJcbiAgICAgICAgIGNsb3NlcHJvYmxlbXBhZ2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgIHRoaXMuc2hvd3Byb2JsZW0gPSBmYWxzZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICB1cGxvYWQ6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuIrkvKBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPiBcclxuICAgIC5jaGVja2NhcntcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6NjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcclxuICAgIH1cclxuICAgIC5pdGVte1xyXG4gICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgLml0ZW1uYW1le1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjVweDtcclxuICAgIH1cclxuICAgIC51cGxvYWR1c2VyY2FyZHtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBoZWlnaHQ6NDRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjZweDtcclxuICAgIH1cclxuICAgIC5jYXJpZHtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIGhlaWdodDo0NHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuc2VlZGV0YWlsc3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjpibHVlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NnB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrZXJzZWxlY3R7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICBoZWlnaHQ6NDRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgfVxyXG4gICAgLm9yZGVyYWRkcmVzc2l0ZW17XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3NpdGVte1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDoxcHg7XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzc2l0ZW1jaGVja3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5vcmRlcmNoZWNrYWRkcmVzc3tcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmF1dG9zaGFyZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xyXG4gICAgfVxyXG4gICAgLmF1dG9zaGFyZWl0ZW17XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgLnByb2JsZW1kZXNjcmlibGV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcclxuICAgIH0gICAgXHJcbiAgICAubWVzc2FnZXtcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6MHB4O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdHBpY3R1cmV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgfVxyXG4gICAgLm9wZW5zaGFyZXtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6NDRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxuICAgIH1cclxuICAgIC5vcGVuc2hhcmVidXR0b257ICAgICAgICBcclxuICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDo0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZGUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjZweDtcclxuICAgIH1cclxuICAgIC5pbWdib3h7XHJcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZ3sgICAgICAgXHJcbiAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpwaW5rO1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdGJveHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxyXG4gICAgfVxyXG4gICAgLnN1Ym1pdHtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjsgICAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZGUwMDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICBwYWRkaW5nOjVweDsgXHJcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICB9XHJcbiAgICAgLm1hc2t7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDowO1xyXG4gICAgICByaWdodDowO1xyXG4gICAgICBib3R0b206MDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojOTk5OTk5O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgfVxyXG4gIC5saXN0e1xyXG4gICAgICB3aWR0aDo1MDBweDtcclxuICAgICAgaGVpZ2h0OjgwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaXRlbXN0eWxle1xyXG4gICAgICBmb250LXNpemU6NDBweDtcclxuICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbiAgLnF1b3RlYm94e1xyXG4gICAgICB3aWR0aDo1MDBweDsgXHJcbiAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gIH1cclxuICAucXVvdGVpdGVte1xyXG4gICAgICBoZWlnaHQ6NjBweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICB9XHJcbiAgLmxpbmV7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDoxcHg7XHJcbiAgfVxyXG4gIC5va2JveHtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgfVxyXG4gIC5va2J1dHRvbntcclxuICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6MXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbiAgLm1lc3NhZ2Vib3h7ICAgICBcclxuICAgICAgd2lkdGg6NTAwcHg7ICAgICAgXHJcbiAgICAgIGhlaWdodDo4MDBweDtcclxuICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjIwcHg7ICAgICBcclxuICB9XHJcbiAgLm9yYW5nZXRleHR7XHJcbiAgICAgIGNvbG9yOm9yYW5nZTtcclxuICB9XHJcbiAgLm1lc3NhZ2V0ZXh0e1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2VpdGVte1xyXG4gICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIH1cclxuICAubWVzc2FnZXRpdGxle1xyXG4gICAgICBmb250LXNpemU6MzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2VpZGNhcmRib3h7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDozMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcclxuICB9XHJcbiAgLm1lc3NhZ2V0b3RhbGJveHsgICAgICBcclxuICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jaGVja21lc3NhZ2Uud2U/MzM4NmUyYzEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjYuMjAuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiXSwic291cmNlUm9vdCI6IiJ9