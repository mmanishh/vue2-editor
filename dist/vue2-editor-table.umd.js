/*!
 * vue2-editor-table v2.10.6 
 * (c) 2022 Manish Maharjan
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Vue2EditorTable = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var quill=createCommonjsModule(function(module,exports){/*!
   * Quill Editor v2.0.0-dev.3
   * https://quilljs.com/
   * Copyright (c) 2014, Jason Chen
   * Copyright (c) 2013, salesforce.com
   */(function webpackUniversalModuleDefinition(root,factory){module.exports=factory();})(window,function(){return(/******/function(modules){// webpackBootstrap
  /******/ // The module cache
  /******/var installedModules={};/******/ /******/ // The require function
  /******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
  /******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
  /******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
  /******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
  /******/module.l=true;/******/ /******/ // Return the exports of the module
  /******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
  /******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
  /******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
  /******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
  /******/__webpack_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s=0);/******/}/************************************************************************/ /******/({/***/"./assets/icons/align-center.svg":/*!***************************************!*\
    !*** ./assets/icons/align-center.svg ***!
    \***************************************/ /*! no static exports found */ /***/function assetsIconsAlignCenterSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-center.svg?");/***/},/***/"./assets/icons/align-justify.svg":/*!****************************************!*\
    !*** ./assets/icons/align-justify.svg ***!
    \****************************************/ /*! no static exports found */ /***/function assetsIconsAlignJustifySvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-justify.svg?");/***/},/***/"./assets/icons/align-left.svg":/*!*************************************!*\
    !*** ./assets/icons/align-left.svg ***!
    \*************************************/ /*! no static exports found */ /***/function assetsIconsAlignLeftSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-left.svg?");/***/},/***/"./assets/icons/align-right.svg":/*!**************************************!*\
    !*** ./assets/icons/align-right.svg ***!
    \**************************************/ /*! no static exports found */ /***/function assetsIconsAlignRightSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-right.svg?");/***/},/***/"./assets/icons/background.svg":/*!*************************************!*\
    !*** ./assets/icons/background.svg ***!
    \*************************************/ /*! no static exports found */ /***/function assetsIconsBackgroundSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <g class=\\\"ql-fill ql-color-label\\\"> <polygon points=\\\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\\\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\\\"6.817 5 6 5 6 6 6.38 6 6.817 5\\\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\\\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\\\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\\\"4.63 10 4 10 4 11 4.192 11 4.63 10\\\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\\\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\\\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\\\"12 6.868 12 6 11.62 6 12 6.868\\\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\\\"12.933 9 13 9 13 8 12.495 8 12.933 9\\\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\\\"5.5 13 9 5 12.5 13\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/background.svg?");/***/},/***/"./assets/icons/blockquote.svg":/*!*************************************!*\
    !*** ./assets/icons/blockquote.svg ***!
    \*************************************/ /*! no static exports found */ /***/function assetsIconsBlockquoteSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=4 y=5></rect> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=11 y=5></rect> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M14,8c0,4.031-3,5-3,5></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/blockquote.svg?");/***/},/***/"./assets/icons/bold.svg":/*!*******************************!*\
    !*** ./assets/icons/bold.svg ***!
    \*******************************/ /*! no static exports found */ /***/function assetsIconsBoldSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/bold.svg?");/***/},/***/"./assets/icons/clean.svg":/*!********************************!*\
    !*** ./assets/icons/clean.svg ***!
    \********************************/ /*! no static exports found */ /***/function assetsIconsCleanSvg(module,exports){eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/clean.svg?");/***/},/***/"./assets/icons/code.svg":/*!*******************************!*\
    !*** ./assets/icons/code.svg ***!
    \*******************************/ /*! no static exports found */ /***/function assetsIconsCodeSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"5 7 3 9 5 11\\\"></polyline> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"13 7 15 9 13 11\\\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/code.svg?");/***/},/***/"./assets/icons/color.svg":/*!********************************!*\
    !*** ./assets/icons/color.svg ***!
    \********************************/ /*! no static exports found */ /***/function assetsIconsColorSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-color-label ql-stroke ql-transparent\\\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\\\"5.5 11 9 3 12.5 11\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/color.svg?");/***/},/***/"./assets/icons/direction-ltr.svg":/*!****************************************!*\
    !*** ./assets/icons/direction-ltr.svg ***!
    \****************************************/ /*! no static exports found */ /***/function assetsIconsDirectionLtrSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"3 11 5 9 3 7 3 11\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-ltr.svg?");/***/},/***/"./assets/icons/direction-rtl.svg":/*!****************************************!*\
    !*** ./assets/icons/direction-rtl.svg ***!
    \****************************************/ /*! no static exports found */ /***/function assetsIconsDirectionRtlSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"15 12 13 10 15 8 15 12\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-rtl.svg?");/***/},/***/"./assets/icons/dropdown.svg":/*!***********************************!*\
    !*** ./assets/icons/dropdown.svg ***!
    \***********************************/ /*! no static exports found */ /***/function assetsIconsDropdownSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=ql-stroke points=\\\"7 11 9 13 11 11 7 11\\\"></polygon> <polygon class=ql-stroke points=\\\"7 7 9 5 11 7 7 7\\\"></polygon> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/dropdown.svg?");/***/},/***/"./assets/icons/formula.svg":/*!**********************************!*\
    !*** ./assets/icons/formula.svg ***!
    \**********************************/ /*! no static exports found */ /***/function assetsIconsFormulaSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/formula.svg?");/***/},/***/"./assets/icons/header-2.svg":/*!***********************************!*\
    !*** ./assets/icons/header-2.svg ***!
    \***********************************/ /*! no static exports found */ /***/function assetsIconsHeader2Svg(module,exports){eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header-2.svg?");/***/},/***/"./assets/icons/header.svg":/*!*********************************!*\
    !*** ./assets/icons/header.svg ***!
    \*********************************/ /*! no static exports found */ /***/function assetsIconsHeaderSvg(module,exports){eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header.svg?");/***/},/***/"./assets/icons/image.svg":/*!********************************!*\
    !*** ./assets/icons/image.svg ***!
    \********************************/ /*! no static exports found */ /***/function assetsIconsImageSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\\\"ql-even ql-fill\\\" points=\\\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/image.svg?");/***/},/***/"./assets/icons/indent.svg":/*!*********************************!*\
    !*** ./assets/icons/indent.svg ***!
    \*********************************/ /*! no static exports found */ /***/function assetsIconsIndentSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\\\"ql-fill ql-stroke\\\" points=\\\"3 7 3 11 5 9 3 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/indent.svg?");/***/},/***/"./assets/icons/italic.svg":/*!*********************************!*\
    !*** ./assets/icons/italic.svg ***!
    \*********************************/ /*! no static exports found */ /***/function assetsIconsItalicSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/italic.svg?");/***/},/***/"./assets/icons/link.svg":/*!*******************************!*\
    !*** ./assets/icons/link.svg ***!
    \*******************************/ /*! no static exports found */ /***/function assetsIconsLinkSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\\\"ql-even ql-stroke\\\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\\\"ql-even ql-stroke\\\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/link.svg?");/***/},/***/"./assets/icons/list-bullet.svg":/*!**************************************!*\
    !*** ./assets/icons/list-bullet.svg ***!
    \**************************************/ /*! no static exports found */ /***/function assetsIconsListBulletSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-bullet.svg?");/***/},/***/"./assets/icons/list-check.svg":/*!*************************************!*\
    !*** ./assets/icons/list-check.svg ***!
    \*************************************/ /*! no static exports found */ /***/function assetsIconsListCheckSvg(module,exports){eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\\\"3 4 4 5 6 3\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\\\"3 14 4 15 6 13\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"3 9 4 10 6 8\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-check.svg?");/***/},/***/"./assets/icons/list-ordered.svg":/*!***************************************!*\
    !*** ./assets/icons/list-ordered.svg ***!
    \***************************************/ /*! no static exports found */ /***/function assetsIconsListOrderedSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\\\"ql-stroke ql-thin\\\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\\\"ql-stroke ql-thin\\\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\\\"ql-stroke ql-thin\\\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-ordered.svg?");/***/},/***/"./assets/icons/outdent.svg":/*!**********************************!*\
    !*** ./assets/icons/outdent.svg ***!
    \**********************************/ /*! no static exports found */ /***/function assetsIconsOutdentSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"5 7 5 11 3 9 5 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/outdent.svg?");/***/},/***/"./assets/icons/strike.svg":/*!*********************************!*\
    !*** ./assets/icons/strike.svg ***!
    \*********************************/ /*! no static exports found */ /***/function assetsIconsStrikeSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-stroke ql-thin\\\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/strike.svg?");/***/},/***/"./assets/icons/subscript.svg":/*!************************************!*\
    !*** ./assets/icons/subscript.svg ***!
    \************************************/ /*! no static exports found */ /***/function assetsIconsSubscriptSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/subscript.svg?");/***/},/***/"./assets/icons/superscript.svg":/*!**************************************!*\
    !*** ./assets/icons/superscript.svg ***!
    \**************************************/ /*! no static exports found */ /***/function assetsIconsSuperscriptSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/superscript.svg?");/***/},/***/"./assets/icons/table.svg":/*!********************************!*\
    !*** ./assets/icons/table.svg ***!
    \********************************/ /*! no static exports found */ /***/function assetsIconsTableSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class=\\\"ql-fill ql-transparent\\\"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/table.svg?");/***/},/***/"./assets/icons/underline.svg":/*!************************************!*\
    !*** ./assets/icons/underline.svg ***!
    \************************************/ /*! no static exports found */ /***/function assetsIconsUnderlineSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/underline.svg?");/***/},/***/"./assets/icons/video.svg":/*!********************************!*\
    !*** ./assets/icons/video.svg ***!
    \********************************/ /*! no static exports found */ /***/function assetsIconsVideoSvg(module,exports){eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/video.svg?");/***/},/***/"./blots/block.js":/*!************************!*\
    !*** ./blots/block.js ***!
    \************************/ /*! exports provided: blockDelta, bubbleFormats, BlockEmbed, default */ /***/function blotsBlockJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockDelta\", function() { return blockDelta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleFormats\", function() { return bubbleFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlockEmbed\", function() { return BlockEmbed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ \"./blots/inline.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\n\n\nconst NEWLINE_LENGTH = 1;\n\nclass Block extends parchment__WEBPACK_IMPORTED_MODULE_2__[\"BlockBlot\"] {\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    this.cache = {};\n  }\n\n  delta() {\n    if (this.cache.delta == null) {\n      this.cache.delta = blockDelta(this);\n    }\n\n    return this.cache.delta;\n  }\n\n  deleteAt(index, length) {\n    super.deleteAt(index, length);\n    this.cache = {};\n  }\n\n  formatAt(index, length, name, value) {\n    if (length <= 0) return;\n\n    if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK)) {\n      if (index + length === this.length()) {\n        this.format(name, value);\n      }\n    } else {\n      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);\n    }\n\n    this.cache = {};\n  }\n\n  insertAt(index, value, def) {\n    if (def != null) {\n      super.insertAt(index, value, def);\n      this.cache = {};\n      return;\n    }\n\n    if (value.length === 0) return;\n    const lines = value.split('\\n');\n    const text = lines.shift();\n\n    if (text.length > 0) {\n      if (index < this.length() - 1 || this.children.tail == null) {\n        super.insertAt(Math.min(index, this.length() - 1), text);\n      } else {\n        this.children.tail.insertAt(this.children.tail.length(), text);\n      }\n\n      this.cache = {};\n    }\n\n    let block = this;\n    lines.reduce((lineIndex, line) => {\n      block = block.split(lineIndex, true);\n      block.insertAt(0, line);\n      return line.length;\n    }, index + text.length);\n  }\n\n  insertBefore(blot, ref) {\n    const {\n      head\n    } = this.children;\n    super.insertBefore(blot, ref);\n\n    if (head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      head.remove();\n    }\n\n    this.cache = {};\n  }\n\n  length() {\n    if (this.cache.length == null) {\n      this.cache.length = super.length() + NEWLINE_LENGTH;\n    }\n\n    return this.cache.length;\n  }\n\n  moveChildren(target, ref) {\n    super.moveChildren(target, ref);\n    this.cache = {};\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    this.cache = {};\n  }\n\n  path(index) {\n    return super.path(index, true);\n  }\n\n  removeChild(child) {\n    super.removeChild(child);\n    this.cache = {};\n  }\n\n  split(index, force = false) {\n    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {\n      const clone = this.clone();\n\n      if (index === 0) {\n        this.parent.insertBefore(clone, this);\n        return this;\n      }\n\n      this.parent.insertBefore(clone, this.next);\n      return clone;\n    }\n\n    const next = super.split(index, force);\n    this.cache = {};\n    return next;\n  }\n\n}\n\nBlock.blotName = 'block';\nBlock.tagName = 'P';\nBlock.defaultChild = _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nBlock.allowedChildren = [_break__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _inline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n\nclass BlockEmbed extends parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"] {\n  attach() {\n    super.attach();\n    this.attributes = new parchment__WEBPACK_IMPORTED_MODULE_2__[\"AttributorStore\"](this.domNode);\n  }\n\n  delta() {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(this.value(), extend__WEBPACK_IMPORTED_MODULE_0___default()(this.formats(), this.attributes.values()));\n  }\n\n  format(name, value) {\n    const attribute = this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK_ATTRIBUTE);\n\n    if (attribute != null) {\n      this.attributes.attribute(attribute, value);\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    this.format(name, value);\n  }\n\n  insertAt(index, value, def) {\n    if (typeof value === 'string' && value.endsWith('\\n')) {\n      const block = this.scroll.create(Block.blotName);\n      this.parent.insertBefore(block, index === 0 ? this : this.next);\n      block.insertAt(0, value.slice(0, -1));\n    } else {\n      super.insertAt(index, value, def);\n    }\n  }\n\n}\n\nBlockEmbed.scope = parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK_BLOT; // It is important for cursor behavior BlockEmbeds use tags that are block level elements\n\nfunction blockDelta(blot, filter = true) {\n  return blot.descendants(parchment__WEBPACK_IMPORTED_MODULE_2__[\"LeafBlot\"]).reduce((delta, leaf) => {\n    if (leaf.length() === 0) {\n      return delta;\n    }\n\n    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()).insert('\\n', bubbleFormats(blot));\n}\n\nfunction bubbleFormats(blot, formats = {}, filter = true) {\n  if (blot == null) return formats;\n\n  if (typeof blot.formats === 'function') {\n    formats = extend__WEBPACK_IMPORTED_MODULE_0___default()(formats, blot.formats());\n\n    if (filter) {\n      // exclude syntax highlighting from deltas and getFormat()\n      delete formats['code-token'];\n    }\n  }\n\n  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {\n    return formats;\n  }\n\n  return bubbleFormats(blot.parent, formats, filter);\n}\n\n\n\n//# sourceURL=webpack://Quill/./blots/block.js?");/***/},/***/"./blots/break.js":/*!************************!*\
    !*** ./blots/break.js ***!
    \************************/ /*! exports provided: default */ /***/function blotsBreakJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Break extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n\n  optimize() {\n    if (this.prev || this.next) {\n      this.remove();\n    }\n  }\n\n  length() {\n    return 0;\n  }\n\n  value() {\n    return '';\n  }\n\n}\n\nBreak.blotName = 'break';\nBreak.tagName = 'BR';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Break);\n\n//# sourceURL=webpack://Quill/./blots/break.js?");/***/},/***/"./blots/container.js":/*!****************************!*\
    !*** ./blots/container.js ***!
    \****************************/ /*! exports provided: default */ /***/function blotsContainerJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Container extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"] {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack://Quill/./blots/container.js?");/***/},/***/"./blots/cursor.js":/*!*************************!*\
    !*** ./blots/cursor.js ***!
    \*************************/ /*! exports provided: default */ /***/function blotsCursorJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\nclass Cursor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n\n  constructor(scroll, domNode, selection) {\n    super(scroll, domNode);\n    this.selection = selection;\n    this.textNode = document.createTextNode(Cursor.CONTENTS);\n    this.domNode.appendChild(this.textNode);\n    this.savedLength = 0;\n  }\n\n  detach() {\n    // super.detach() will also clear domNode.__blot\n    if (this.parent != null) this.parent.removeChild(this);\n  }\n\n  format(name, value) {\n    if (this.savedLength !== 0) {\n      super.format(name, value);\n      return;\n    }\n\n    let target = this;\n    let index = 0;\n\n    while (target != null && target.statics.scope !== parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK_BLOT) {\n      index += target.offset(target.parent);\n      target = target.parent;\n    }\n\n    if (target != null) {\n      this.savedLength = Cursor.CONTENTS.length;\n      target.optimize();\n      target.formatAt(index, Cursor.CONTENTS.length, name, value);\n      this.savedLength = 0;\n    }\n  }\n\n  index(node, offset) {\n    if (node === this.textNode) return 0;\n    return super.index(node, offset);\n  }\n\n  length() {\n    return this.savedLength;\n  }\n\n  position() {\n    return [this.textNode, this.textNode.data.length];\n  }\n\n  remove() {\n    super.remove();\n    this.parent = null;\n  }\n\n  restore() {\n    if (this.selection.composing || this.parent == null) return null;\n    const range = this.selection.getNativeRange(); // Link format will insert text outside of anchor tag\n\n    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {\n      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);\n    }\n\n    const prevTextBlot = this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.prev : null;\n    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;\n    const nextTextBlot = this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.next : null;\n    const nextText = nextTextBlot ? nextTextBlot.text : '';\n    const {\n      textNode\n    } = this; // take text from inside this blot and reset it\n\n    const newText = textNode.data.split(Cursor.CONTENTS).join('');\n    textNode.data = Cursor.CONTENTS; // proactively merge TextBlots around cursor so that optimization\n    // doesn't lose the cursor.  the reason we are here in cursor.restore\n    // could be that the user clicked in prevTextBlot or nextTextBlot, or\n    // the user typed something.\n\n    let mergedTextBlot;\n\n    if (prevTextBlot) {\n      mergedTextBlot = prevTextBlot;\n\n      if (newText || nextTextBlot) {\n        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);\n\n        if (nextTextBlot) {\n          nextTextBlot.remove();\n        }\n      }\n    } else if (nextTextBlot) {\n      mergedTextBlot = nextTextBlot;\n      nextTextBlot.insertAt(0, newText);\n    } else {\n      const newTextNode = document.createTextNode(newText);\n      mergedTextBlot = this.scroll.create(newTextNode);\n      this.parent.insertBefore(mergedTextBlot, this);\n    }\n\n    this.remove();\n\n    if (range) {\n      // calculate selection to restore\n      const remapOffset = (node, offset) => {\n        if (prevTextBlot && node === prevTextBlot.domNode) {\n          return offset;\n        }\n\n        if (node === textNode) {\n          return prevTextLength + offset - 1;\n        }\n\n        if (nextTextBlot && node === nextTextBlot.domNode) {\n          return prevTextLength + newText.length + offset;\n        }\n\n        return null;\n      };\n\n      const start = remapOffset(range.start.node, range.start.offset);\n      const end = remapOffset(range.end.node, range.end.offset);\n\n      if (start !== null && end !== null) {\n        return {\n          startNode: mergedTextBlot.domNode,\n          startOffset: start,\n          endNode: mergedTextBlot.domNode,\n          endOffset: end\n        };\n      }\n    }\n\n    return null;\n  }\n\n  update(mutations, context) {\n    if (mutations.some(mutation => {\n      return mutation.type === 'characterData' && mutation.target === this.textNode;\n    })) {\n      const range = this.restore();\n      if (range) context.range = range;\n    }\n  }\n\n  value() {\n    return '';\n  }\n\n}\n\nCursor.blotName = 'cursor';\nCursor.className = 'ql-cursor';\nCursor.tagName = 'span';\nCursor.CONTENTS = '\\uFEFF'; // Zero width no break space\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack://Quill/./blots/cursor.js?");/***/},/***/"./blots/embed.js":/*!************************!*\
    !*** ./blots/embed.js ***!
    \************************/ /*! exports provided: default */ /***/function blotsEmbedJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\nconst GUARD_TEXT = '\\uFEFF';\n\nclass Embed extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  constructor(scroll, node) {\n    super(scroll, node);\n    this.contentNode = document.createElement('span');\n    this.contentNode.setAttribute('contenteditable', false);\n    Array.from(this.domNode.childNodes).forEach(childNode => {\n      this.contentNode.appendChild(childNode);\n    });\n    this.leftGuard = document.createTextNode(GUARD_TEXT);\n    this.rightGuard = document.createTextNode(GUARD_TEXT);\n    this.domNode.appendChild(this.leftGuard);\n    this.domNode.appendChild(this.contentNode);\n    this.domNode.appendChild(this.rightGuard);\n  }\n\n  index(node, offset) {\n    if (node === this.leftGuard) return 0;\n    if (node === this.rightGuard) return 1;\n    return super.index(node, offset);\n  }\n\n  restore(node) {\n    let range;\n    let textNode;\n    const text = node.data.split(GUARD_TEXT).join('');\n\n    if (node === this.leftGuard) {\n      if (this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        const prevLength = this.prev.length();\n        this.prev.insertAt(prevLength, text);\n        range = {\n          startNode: this.prev.domNode,\n          startOffset: prevLength + text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    } else if (node === this.rightGuard) {\n      if (this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.next.insertAt(0, text);\n        range = {\n          startNode: this.next.domNode,\n          startOffset: text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this.next);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    }\n\n    node.data = GUARD_TEXT;\n    return range;\n  }\n\n  update(mutations, context) {\n    mutations.forEach(mutation => {\n      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {\n        const range = this.restore(mutation.target);\n        if (range) context.range = range;\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Embed);\n\n//# sourceURL=webpack://Quill/./blots/embed.js?");/***/},/***/"./blots/inline.js":/*!*************************!*\
    !*** ./blots/inline.js ***!
    \*************************/ /*! exports provided: default */ /***/function blotsInlineJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\nclass Inline extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"InlineBlot\"] {\n  static compare(self, other) {\n    const selfIndex = Inline.order.indexOf(self);\n    const otherIndex = Inline.order.indexOf(other);\n\n    if (selfIndex >= 0 || otherIndex >= 0) {\n      return selfIndex - otherIndex;\n    }\n\n    if (self === other) {\n      return 0;\n    }\n\n    if (self < other) {\n      return -1;\n    }\n\n    return 1;\n  }\n\n  formatAt(index, length, name, value) {\n    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOT)) {\n      const blot = this.isolate(index, length);\n\n      if (value) {\n        blot.wrap(name, value);\n      }\n    } else {\n      super.formatAt(index, length, name, value);\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {\n      const parent = this.parent.isolate(this.offset(), this.length());\n      this.moveChildren(parent);\n      parent.wrap(this);\n    }\n  }\n\n}\n\nInline.allowedChildren = [Inline, _break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]; // Lower index means deeper in the DOM tree, since not found (-1) is for embeds\n\nInline.order = ['cursor', 'inline', // Must be lower\n'link', // Chrome wants <a> to be lower\n'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inline);\n\n//# sourceURL=webpack://Quill/./blots/inline.js?");/***/},/***/"./blots/scroll.js":/*!*************************!*\
    !*** ./blots/scroll.js ***!
    \*************************/ /*! exports provided: default */ /***/function blotsScrollJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ \"./blots/block.js\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./blots/container.js\");\n\n\n\n\n\n\nfunction isLine(blot) {\n  return blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"] || blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"];\n}\n\nclass Scroll extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ScrollBlot\"] {\n  constructor(registry, domNode, {\n    emitter\n  }) {\n    super(registry, domNode);\n    this.emitter = emitter;\n    this.batch = false;\n    this.optimize();\n    this.enable();\n    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));\n  }\n\n  batchStart() {\n    if (!Array.isArray(this.batch)) {\n      this.batch = [];\n    }\n  }\n\n  batchEnd() {\n    const mutations = this.batch;\n    this.batch = false;\n    this.update(mutations);\n  }\n\n  emitMount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_MOUNT, blot);\n  }\n\n  emitUnmount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_UNMOUNT, blot);\n  }\n\n  deleteAt(index, length) {\n    const [first, offset] = this.line(index);\n    const [last] = this.line(index + length);\n    super.deleteAt(index, length);\n\n    if (last != null && first !== last && offset > 0) {\n      if (first instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"] || last instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"]) {\n        this.optimize();\n        return;\n      }\n\n      const ref = last.children.head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"] ? null : last.children.head;\n      first.moveChildren(last, ref);\n      first.remove();\n    }\n\n    this.optimize();\n  }\n\n  enable(enabled = true) {\n    this.domNode.setAttribute('contenteditable', enabled);\n  }\n\n  formatAt(index, length, format, value) {\n    super.formatAt(index, length, format, value);\n    this.optimize();\n  }\n\n  handleDragStart(event) {\n    event.preventDefault();\n  }\n\n  insertAt(index, value, def) {\n    if (index >= this.length()) {\n      if (def == null || this.scroll.query(value, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) == null) {\n        const blot = this.scroll.create(this.statics.defaultChild.blotName);\n        this.appendChild(blot);\n\n        if (def == null && value.endsWith('\\n')) {\n          blot.insertAt(0, value.slice(0, -1), def);\n        } else {\n          blot.insertAt(0, value, def);\n        }\n      } else {\n        const embed = this.scroll.create(value, def);\n        this.appendChild(embed);\n      }\n    } else {\n      super.insertAt(index, value, def);\n    }\n\n    this.optimize();\n  }\n\n  insertBefore(blot, ref) {\n    if (blot.statics.scope === parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE_BLOT) {\n      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);\n      wrapper.appendChild(blot);\n      super.insertBefore(wrapper, ref);\n    } else {\n      super.insertBefore(blot, ref);\n    }\n  }\n\n  isEnabled() {\n    return this.domNode.getAttribute('contenteditable') === 'true';\n  }\n\n  leaf(index) {\n    return this.path(index).pop() || [null, -1];\n  }\n\n  line(index) {\n    if (index === this.length()) {\n      return this.line(index - 1);\n    }\n\n    return this.descendant(isLine, index);\n  }\n\n  lines(index = 0, length = Number.MAX_VALUE) {\n    const getLines = (blot, blotIndex, blotLength) => {\n      let lines = [];\n      let lengthLeft = blotLength;\n      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {\n        if (isLine(child)) {\n          lines.push(child);\n        } else if (child instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"]) {\n          lines = lines.concat(getLines(child, childIndex, lengthLeft));\n        }\n\n        lengthLeft -= childLength;\n      });\n      return lines;\n    };\n\n    return getLines(this, index, length);\n  }\n\n  optimize(mutations = [], context = {}) {\n    if (this.batch) return;\n    super.optimize(mutations, context);\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations, context);\n    }\n  }\n\n  path(index) {\n    return super.path(index).slice(1); // Exclude self\n  }\n\n  remove() {// Never remove self\n  }\n\n  update(mutations) {\n    if (this.batch) {\n      if (Array.isArray(mutations)) {\n        this.batch = this.batch.concat(mutations);\n      }\n\n      return;\n    }\n\n    let source = _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER;\n\n    if (typeof mutations === 'string') {\n      source = mutations;\n    }\n\n    if (!Array.isArray(mutations)) {\n      mutations = this.observer.takeRecords();\n    }\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BEFORE_UPDATE, source, mutations);\n    }\n\n    super.update(mutations.concat([])); // pass copy\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_UPDATE, source, mutations);\n    }\n  }\n\n}\n\nScroll.blotName = 'scroll';\nScroll.className = 'ql-editor';\nScroll.tagName = 'DIV';\nScroll.defaultChild = _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nScroll.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"], _container__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scroll);\n\n//# sourceURL=webpack://Quill/./blots/scroll.js?");/***/},/***/"./blots/text.js":/*!***********************!*\
    !*** ./blots/text.js ***!
    \***********************/ /*! exports provided: default, escapeText */ /***/function blotsTextJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeText\", function() { return escapeText; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Text extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"TextBlot\"] {}\n\nfunction escapeText(text) {\n  return text.replace(/[&<>\"']/g, s => {\n    // https://lodash.com/docs#escape\n    const entityMap = {\n      '&': '&amp;',\n      '<': '&lt;',\n      '>': '&gt;',\n      '\"': '&quot;',\n      \"'\": '&#39;'\n    };\n    return entityMap[s];\n  });\n}\n\n\n\n//# sourceURL=webpack://Quill/./blots/text.js?");/***/},/***/"./core.js":/*!*****************!*\
    !*** ./core.js ***!
    \*****************/ /*! exports provided: default */ /***/function coreJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/quill */ \"./core/quill.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blots/container */ \"./blots/container.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blots/embed */ \"./blots/embed.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blots/scroll */ \"./blots/scroll.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blots/text */ \"./blots/text.js\");\n/* harmony import */ var _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clipboard */ \"./modules/clipboard.js\");\n/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/history */ \"./modules/history.js\");\n/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/keyboard */ \"./modules/keyboard.js\");\n/* harmony import */ var _modules_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/uploader */ \"./modules/uploader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'blots/block': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'blots/block/embed': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"BlockEmbed\"],\n  'blots/break': _blots_break__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'blots/container': _blots_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'blots/cursor': _blots_cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'blots/embed': _blots_embed__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'blots/inline': _blots_inline__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'blots/scroll': _blots_scroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  'blots/text': _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  'modules/clipboard': _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  'modules/history': _modules_history__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  'modules/keyboard': _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'modules/uploader': _modules_uploader__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./core.js?");/***/},/***/"./core/editor.js":/*!************************!*\
    !*** ./core/editor.js ***!
    \************************/ /*! exports provided: default */ /***/function coreEditorJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n\n\n\n\n\n\n\n\n\n\nconst ASCII = /^[ -~]*$/;\n\nclass Editor {\n  constructor(scroll) {\n    this.scroll = scroll;\n    this.delta = this.getDelta();\n  }\n\n  applyDelta(delta) {\n    let consumeNextNewline = false;\n    this.scroll.update();\n    let scrollLength = this.scroll.length();\n    this.scroll.batchStart();\n    const normalizedDelta = normalizeDelta(delta);\n    normalizedDelta.reduce((index, op) => {\n      const length = op.retain || op.delete || op.insert.length || 1;\n      let attributes = op.attributes || {};\n\n      if (op.insert != null) {\n        if (typeof op.insert === 'string') {\n          let text = op.insert;\n\n          if (text.endsWith('\\n') && consumeNextNewline) {\n            consumeNextNewline = false;\n            text = text.slice(0, -1);\n          }\n\n          if ((index >= scrollLength || this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"BlockEmbed\"], index)[0]) && !text.endsWith('\\n')) {\n            consumeNextNewline = true;\n          }\n\n          this.scroll.insertAt(index, text);\n          const [line, offset] = this.scroll.line(index);\n          let formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(line));\n\n          if (line instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n            const [leaf] = line.descendant(parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"], offset);\n            formats = extend__WEBPACK_IMPORTED_MODULE_2___default()(formats, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(leaf));\n          }\n\n          attributes = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(formats, attributes) || {};\n        } else if (typeof op.insert === 'object') {\n          const key = Object.keys(op.insert)[0]; // There should only be one key\n\n          if (key == null) return index;\n          this.scroll.insertAt(index, key, op.insert[key]);\n        }\n\n        scrollLength += length;\n      }\n\n      Object.keys(attributes).forEach(name => {\n        this.scroll.formatAt(index, length, name, attributes[name]);\n      });\n      return index + length;\n    }, 0);\n    normalizedDelta.reduce((index, op) => {\n      if (typeof op.delete === 'number') {\n        this.scroll.deleteAt(index, op.delete);\n        return index;\n      }\n\n      return index + (op.retain || op.insert.length || 1);\n    }, 0);\n    this.scroll.batchEnd();\n    this.scroll.optimize();\n    return this.update(normalizedDelta);\n  }\n\n  deleteText(index, length) {\n    this.scroll.deleteAt(index, length);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).delete(length));\n  }\n\n  formatLine(index, length, formats = {}) {\n    this.scroll.update();\n    Object.keys(formats).forEach(format => {\n      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {\n        line.format(format, formats[format]);\n      });\n    });\n    this.scroll.optimize();\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n\n  formatText(index, length, formats = {}) {\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, length, format, formats[format]);\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n\n  getContents(index, length) {\n    return this.delta.slice(index, index + length);\n  }\n\n  getDelta() {\n    return this.scroll.lines().reduce((delta, line) => {\n      return delta.concat(line.delta());\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n  }\n\n  getFormat(index, length = 0) {\n    let lines = [];\n    let leaves = [];\n\n    if (length === 0) {\n      this.scroll.path(index).forEach(path => {\n        const [blot] = path;\n\n        if (blot instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n          lines.push(blot);\n        } else if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"]) {\n          leaves.push(blot);\n        }\n      });\n    } else {\n      lines = this.scroll.lines(index, length);\n      leaves = this.scroll.descendants(parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"], index, length);\n    }\n\n    const formatsArr = [lines, leaves].map(blots => {\n      if (blots.length === 0) return {};\n      let formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(blots.shift());\n\n      while (Object.keys(formats).length > 0) {\n        const blot = blots.shift();\n        if (blot == null) return formats;\n        formats = combineFormats(Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(blot), formats);\n      }\n\n      return formats;\n    });\n    return extend__WEBPACK_IMPORTED_MODULE_2___default.a.apply(extend__WEBPACK_IMPORTED_MODULE_2___default.a, formatsArr);\n  }\n\n  getHTML(index, length) {\n    const [line, lineOffset] = this.scroll.line(index);\n\n    if (line.length() >= lineOffset + length) {\n      return convertHTML(line, lineOffset, length, true);\n    }\n\n    return convertHTML(this.scroll, index, length, true);\n  }\n\n  getText(index, length) {\n    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');\n  }\n\n  insertEmbed(index, embed, value) {\n    this.scroll.insertAt(index, embed, value);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert({\n      [embed]: value\n    }));\n  }\n\n  insertText(index, text, formats = {}) {\n    text = text.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n    this.scroll.insertAt(index, text);\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, text.length, format, formats[format]);\n    });\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert(text, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats)));\n  }\n\n  isBlank() {\n    if (this.scroll.children.length === 0) return true;\n    if (this.scroll.children.length > 1) return false;\n    const block = this.scroll.children.head;\n    if (block.statics.blotName !== _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"].blotName) return false;\n    if (block.children.length > 1) return false;\n    return block.children.head instanceof _blots_break__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n  }\n\n  removeFormat(index, length) {\n    const text = this.getText(index, length);\n    const [line, offset] = this.scroll.line(index + length);\n    let suffixLength = 0;\n    let suffix = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();\n\n    if (line != null) {\n      suffixLength = line.length() - offset;\n      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\\n');\n    }\n\n    const contents = this.getContents(index, length + suffixLength);\n    const diff = contents.diff(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(text).concat(suffix));\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(diff);\n    return this.applyDelta(delta);\n  }\n\n  update(change, mutations = [], selectionInfo = undefined) {\n    const oldDelta = this.delta;\n\n    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {\n      // Optimization for character changes\n      const textBlot = this.scroll.find(mutations[0].target);\n      const formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(textBlot);\n      const index = textBlot.offset(this.scroll);\n      const oldValue = mutations[0].oldValue.replace(_blots_cursor__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONTENTS, '');\n      const oldText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(oldValue);\n      const newText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(textBlot.value());\n      const relativeSelectionInfo = selectionInfo && {\n        oldRange: shiftRange(selectionInfo.oldRange, -index),\n        newRange: shiftRange(selectionInfo.newRange, -index)\n      };\n      const diffDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));\n      change = diffDelta.reduce((delta, op) => {\n        if (op.insert) {\n          return delta.insert(op.insert, formats);\n        }\n\n        return delta.push(op);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n      this.delta = oldDelta.compose(change);\n    } else {\n      this.delta = this.getDelta();\n\n      if (!change || !deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(oldDelta.compose(change), this.delta)) {\n        change = oldDelta.diff(this.delta, selectionInfo);\n      }\n    }\n\n    return change;\n  }\n\n}\n\nfunction convertListHTML(items, lastIndent, types) {\n  if (items.length === 0) {\n    const [endTag] = getListType(types.pop());\n\n    if (lastIndent <= 0) {\n      return \"</li></\".concat(endTag, \">\");\n    }\n\n    return \"</li></\".concat(endTag, \">\").concat(convertListHTML([], lastIndent - 1, types));\n  }\n\n  const [{\n    child,\n    offset,\n    length,\n    indent,\n    type\n  }, ...rest] = items;\n  const [tag, attribute] = getListType(type);\n\n  if (indent > lastIndent) {\n    types.push(type);\n\n    if (indent === lastIndent + 1) {\n      return \"<\".concat(tag, \"><li\").concat(attribute, \">\").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));\n    }\n\n    return \"<\".concat(tag, \"><li>\").concat(convertListHTML(items, lastIndent + 1, types));\n  }\n\n  const previousType = types[types.length - 1];\n\n  if (indent === lastIndent && type === previousType) {\n    return \"</li><li\".concat(attribute, \">\").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));\n  }\n\n  const [endTag] = getListType(types.pop());\n  return \"</li></\".concat(endTag, \">\").concat(convertListHTML(items, lastIndent - 1, types));\n}\n\nfunction convertHTML(blot, index, length, isRoot = false) {\n  if (typeof blot.html === 'function') {\n    return blot.html(index, length);\n  }\n\n  if (blot instanceof _blots_text__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) {\n    return Object(_blots_text__WEBPACK_IMPORTED_MODULE_9__[\"escapeText\"])(blot.value().slice(index, index + length));\n  }\n\n  if (blot.children) {\n    // TODO fix API\n    if (blot.statics.blotName === 'list-container') {\n      const items = [];\n      blot.children.forEachAt(index, length, (child, offset, childLength) => {\n        const formats = child.formats();\n        items.push({\n          child,\n          offset,\n          length: childLength,\n          indent: formats.indent || 0,\n          type: formats.list\n        });\n      });\n      return convertListHTML(items, -1, []);\n    }\n\n    const parts = [];\n    blot.children.forEachAt(index, length, (child, offset, childLength) => {\n      parts.push(convertHTML(child, offset, childLength));\n    });\n\n    if (isRoot || blot.statics.blotName === 'list') {\n      return parts.join('');\n    }\n\n    const {\n      outerHTML,\n      innerHTML\n    } = blot.domNode;\n    const [start, end] = outerHTML.split(\">\".concat(innerHTML, \"<\")); // TODO cleanup\n\n    if (start === '<table') {\n      return \"<table style=\\\"border: 1px solid #000;\\\">\".concat(parts.join(''), \"<\").concat(end);\n    }\n\n    return \"\".concat(start, \">\").concat(parts.join(''), \"<\").concat(end);\n  }\n\n  return blot.domNode.outerHTML;\n}\n\nfunction combineFormats(formats, combined) {\n  return Object.keys(combined).reduce((merged, name) => {\n    if (formats[name] == null) return merged;\n\n    if (combined[name] === formats[name]) {\n      merged[name] = combined[name];\n    } else if (Array.isArray(combined[name])) {\n      if (combined[name].indexOf(formats[name]) < 0) {\n        merged[name] = combined[name].concat([formats[name]]);\n      }\n    } else {\n      merged[name] = [combined[name], formats[name]];\n    }\n\n    return merged;\n  }, {});\n}\n\nfunction getListType(type) {\n  const tag = type === 'ordered' ? 'ol' : 'ul';\n\n  switch (type) {\n    case 'checked':\n      return [tag, ' data-list=\"checked\"'];\n\n    case 'unchecked':\n      return [tag, ' data-list=\"unchecked\"'];\n\n    default:\n      return [tag, ''];\n  }\n}\n\nfunction normalizeDelta(delta) {\n  return delta.reduce((normalizedDelta, op) => {\n    if (typeof op.insert === 'string') {\n      const text = op.insert.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n      return normalizedDelta.insert(text, op.attributes);\n    }\n\n    return normalizedDelta.push(op);\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n}\n\nfunction shiftRange({\n  index,\n  length\n}, amount) {\n  return new _selection__WEBPACK_IMPORTED_MODULE_5__[\"Range\"](index + amount, length);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack://Quill/./core/editor.js?");/***/},/***/"./core/emitter.js":/*!*************************!*\
    !*** ./core/emitter.js ***!
    \*************************/ /*! exports provided: default */ /***/function coreEmitterJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('quill:events');\nconst EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];\nEVENTS.forEach(eventName => {\n  document.addEventListener(eventName, (...args) => {\n    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {\n      const quill = _instances__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(node);\n\n      if (quill && quill.emitter) {\n        quill.emitter.handleDOM(...args);\n      }\n    });\n  });\n});\n\nclass Emitter extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor() {\n    super();\n    this.listeners = {};\n    this.on('error', debug.error);\n  }\n\n  emit(...args) {\n    debug.log.call(debug, ...args);\n    super.emit(...args);\n  }\n\n  handleDOM(event, ...args) {\n    (this.listeners[event.type] || []).forEach(({\n      node,\n      handler\n    }) => {\n      if (event.target === node || node.contains(event.target)) {\n        handler(event, ...args);\n      }\n    });\n  }\n\n  listenDOM(eventName, node, handler) {\n    if (!this.listeners[eventName]) {\n      this.listeners[eventName] = [];\n    }\n\n    this.listeners[eventName].push({\n      node,\n      handler\n    });\n  }\n\n}\n\nEmitter.events = {\n  EDITOR_CHANGE: 'editor-change',\n  SCROLL_BEFORE_UPDATE: 'scroll-before-update',\n  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',\n  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',\n  SCROLL_OPTIMIZE: 'scroll-optimize',\n  SCROLL_UPDATE: 'scroll-update',\n  SELECTION_CHANGE: 'selection-change',\n  TEXT_CHANGE: 'text-change'\n};\nEmitter.sources = {\n  API: 'api',\n  SILENT: 'silent',\n  USER: 'user'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emitter);\n\n//# sourceURL=webpack://Quill/./core/emitter.js?");/***/},/***/"./core/instances.js":/*!***************************!*\
    !*** ./core/instances.js ***!
    \***************************/ /*! exports provided: default */ /***/function coreInstancesJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new WeakMap());\n\n//# sourceURL=webpack://Quill/./core/instances.js?");/***/},/***/"./core/logger.js":/*!************************!*\
    !*** ./core/logger.js ***!
    \************************/ /*! exports provided: default */ /***/function coreLoggerJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nconst levels = ['error', 'warn', 'log', 'info'];\nlet level = 'warn';\n\nfunction debug(method, ...args) {\n  if (levels.indexOf(method) <= levels.indexOf(level)) {\n    console[method](...args); // eslint-disable-line no-console\n  }\n}\n\nfunction namespace(ns) {\n  return levels.reduce((logger, method) => {\n    logger[method] = debug.bind(console, method, ns);\n    return logger;\n  }, {});\n}\n\nnamespace.level = newLevel => {\n  level = newLevel;\n};\n\ndebug.level = namespace.level;\n/* harmony default export */ __webpack_exports__[\"default\"] = (namespace);\n\n//# sourceURL=webpack://Quill/./core/logger.js?");/***/},/***/"./core/module.js":/*!************************!*\
    !*** ./core/module.js ***!
    \************************/ /*! exports provided: default */ /***/function coreModuleJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nclass Module {\n  constructor(quill, options = {}) {\n    this.quill = quill;\n    this.options = options;\n  }\n\n}\n\nModule.DEFAULTS = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack://Quill/./core/module.js?");/***/},/***/"./core/quill.js":/*!***********************!*\
    !*** ./core/quill.js ***!
    \***********************/ /*! exports provided: globalRegistry, expandConfig, overload, default */ /***/function coreQuillJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalRegistry\", function() { return globalRegistry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandConfig\", function() { return expandConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overload\", function() { return overload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quill; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ \"./core/editor.js\");\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ \"./core/module.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ \"./core/theme.js\");\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('quill');\nconst globalRegistry = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"Registry\"]();\nparchment__WEBPACK_IMPORTED_MODULE_1__[\"ParentBlot\"].uiClass = 'ql-ui';\n\nclass Quill {\n  static debug(limit) {\n    if (limit === true) {\n      limit = 'log';\n    }\n\n    _logger__WEBPACK_IMPORTED_MODULE_8__[\"default\"].level(limit);\n  }\n\n  static find(node) {\n    return _instances__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(node) || globalRegistry.find(node);\n  }\n\n  static import(name) {\n    if (this.imports[name] == null) {\n      debug.error(\"Cannot import \".concat(name, \". Are you sure it was registered?\"));\n    }\n\n    return this.imports[name];\n  }\n\n  static register(path, target, overwrite = false) {\n    if (typeof path !== 'string') {\n      const name = path.attrName || path.blotName;\n\n      if (typeof name === 'string') {\n        // register(Blot | Attributor, overwrite)\n        this.register(\"formats/\".concat(name), path, target);\n      } else {\n        Object.keys(path).forEach(key => {\n          this.register(key, path[key], target);\n        });\n      }\n    } else {\n      if (this.imports[path] != null && !overwrite) {\n        debug.warn(\"Overwriting \".concat(path, \" with\"), target);\n      }\n\n      this.imports[path] = target;\n\n      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {\n        globalRegistry.register(target);\n      }\n\n      if (typeof target.register === 'function') {\n        target.register(globalRegistry);\n      }\n    }\n  }\n\n  constructor(container, options = {}) {\n    this.options = expandConfig(container, options);\n    this.container = this.options.container;\n\n    if (this.container == null) {\n      return debug.error('Invalid Quill container', container);\n    }\n\n    if (this.options.debug) {\n      Quill.debug(this.options.debug);\n    }\n\n    const html = this.container.innerHTML.trim();\n    this.container.classList.add('ql-container');\n    this.container.innerHTML = '';\n    _instances__WEBPACK_IMPORTED_MODULE_7__[\"default\"].set(this.container, this);\n    this.root = this.addContainer('ql-editor');\n    this.root.classList.add('ql-blank');\n    this.root.setAttribute('data-gramm', false);\n    this.scrollingContainer = this.options.scrollingContainer || this.root;\n    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    const ScrollBlot = this.options.registry.query(parchment__WEBPACK_IMPORTED_MODULE_1__[\"ScrollBlot\"].blotName);\n    this.scroll = new ScrollBlot(this.options.registry, this.root, {\n      emitter: this.emitter\n    });\n    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scroll);\n    this.selection = new _selection__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.scroll, this.emitter);\n    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap\n\n    this.keyboard = this.theme.addModule('keyboard');\n    this.clipboard = this.theme.addModule('clipboard');\n    this.history = this.theme.addModule('history');\n    this.uploader = this.theme.addModule('uploader');\n    this.theme.init();\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.EDITOR_CHANGE, type => {\n      if (type === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.TEXT_CHANGE) {\n        this.root.classList.toggle('ql-blank', this.editor.isBlank());\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.SCROLL_UPDATE, (source, mutations) => {\n      const oldRange = this.selection.lastRange;\n      const [newRange] = this.selection.getRange();\n      const selectionInfo = oldRange && newRange ? {\n        oldRange,\n        newRange\n      } : undefined;\n      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);\n    });\n    const contents = this.clipboard.convert({\n      html: \"\".concat(html, \"<p><br></p>\"),\n      text: '\\n'\n    });\n    this.setContents(contents);\n    this.history.clear();\n\n    if (this.options.placeholder) {\n      this.root.setAttribute('data-placeholder', this.options.placeholder);\n    }\n\n    if (this.options.readOnly) {\n      this.disable();\n    }\n\n    this.allowReadOnlyEdits = false;\n  }\n\n  addContainer(container, refNode = null) {\n    if (typeof container === 'string') {\n      const className = container;\n      container = document.createElement('div');\n      container.classList.add(className);\n    }\n\n    this.container.insertBefore(container, refNode);\n    return container;\n  }\n\n  blur() {\n    this.selection.setRange(null);\n  }\n\n  deleteText(index, length, source) {\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      return this.editor.deleteText(index, length);\n    }, source, index, -1 * length);\n  }\n\n  disable() {\n    this.enable(false);\n  }\n\n  editReadOnly(modifier) {\n    this.allowReadOnlyEdits = true;\n    const value = modifier();\n    this.allowReadOnlyEdits = false;\n    return value;\n  }\n\n  enable(enabled = true) {\n    this.scroll.enable(enabled);\n    this.container.classList.toggle('ql-disabled', !enabled);\n  }\n\n  focus() {\n    const {\n      scrollTop\n    } = this.scrollingContainer;\n    this.selection.focus();\n    this.scrollingContainer.scrollTop = scrollTop;\n    this.scrollIntoView();\n  }\n\n  format(name, value, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      const range = this.getSelection(true);\n      let change = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();\n      if (range == null) return change;\n\n      if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].BLOCK)) {\n        change = this.editor.formatLine(range.index, range.length, {\n          [name]: value\n        });\n      } else if (range.length === 0) {\n        this.selection.format(name, value);\n        return change;\n      } else {\n        change = this.editor.formatText(range.index, range.length, {\n          [name]: value\n        });\n      }\n\n      this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n      return change;\n    }, source);\n  }\n\n  formatLine(index, length, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index, length, formats, source] = overload(index, length, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatLine(index, length, formats);\n    }, source, index, 0);\n  }\n\n  formatText(index, length, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index, length, formats, source] = overload(index, length, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatText(index, length, formats);\n    }, source, index, 0);\n  }\n\n  getBounds(index, length = 0) {\n    let bounds;\n\n    if (typeof index === 'number') {\n      bounds = this.selection.getBounds(index, length);\n    } else {\n      bounds = this.selection.getBounds(index.index, index.length);\n    }\n\n    const containerBounds = this.container.getBoundingClientRect();\n    return {\n      bottom: bounds.bottom - containerBounds.top,\n      height: bounds.height,\n      left: bounds.left - containerBounds.left,\n      right: bounds.right - containerBounds.left,\n      top: bounds.top - containerBounds.top,\n      width: bounds.width\n    };\n  }\n\n  getContents(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getContents(index, length);\n  }\n\n  getFormat(index = this.getSelection(true), length = 0) {\n    if (typeof index === 'number') {\n      return this.editor.getFormat(index, length);\n    }\n\n    return this.editor.getFormat(index.index, index.length);\n  }\n\n  getIndex(blot) {\n    return blot.offset(this.scroll);\n  }\n\n  getLength() {\n    return this.scroll.length();\n  }\n\n  getLeaf(index) {\n    return this.scroll.leaf(index);\n  }\n\n  getLine(index) {\n    return this.scroll.line(index);\n  }\n\n  getLines(index = 0, length = Number.MAX_VALUE) {\n    if (typeof index !== 'number') {\n      return this.scroll.lines(index.index, index.length);\n    }\n\n    return this.scroll.lines(index, length);\n  }\n\n  getModule(name) {\n    return this.theme.modules[name];\n  }\n\n  getSelection(focus = false) {\n    if (focus) this.focus();\n    this.update(); // Make sure we access getRange with editor in consistent state\n\n    return this.selection.getRange()[0];\n  }\n\n  getSemanticHTML(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getHTML(index, length);\n  }\n\n  getText(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getText(index, length);\n  }\n\n  hasFocus() {\n    return this.selection.hasFocus();\n  }\n\n  insertEmbed(index, embed, value, source = Quill.sources.API) {\n    return modify.call(this, () => {\n      return this.editor.insertEmbed(index, embed, value);\n    }, source, index);\n  }\n\n  insertText(index, text, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index,, formats, source] = overload(index, 0, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.insertText(index, text, formats);\n    }, source, index, text.length);\n  }\n\n  isEnabled() {\n    return this.scroll.isEnabled();\n  }\n\n  off(...args) {\n    return this.emitter.off(...args);\n  }\n\n  on(...args) {\n    return this.emitter.on(...args);\n  }\n\n  once(...args) {\n    return this.emitter.once(...args);\n  }\n\n  removeFormat(index, length, source) {\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      return this.editor.removeFormat(index, length);\n    }, source, index);\n  }\n\n  scrollIntoView() {\n    this.selection.scrollIntoView(this.scrollingContainer);\n  }\n\n  setContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);\n      const length = this.getLength();\n      const deleted = this.editor.deleteText(0, length);\n      const applied = this.editor.applyDelta(delta);\n      const lastOp = applied.ops[applied.ops.length - 1];\n\n      if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\\n') {\n        this.editor.deleteText(this.getLength() - 1, 1);\n        applied.delete(1);\n      }\n\n      return deleted.compose(applied);\n    }, source);\n  }\n\n  setSelection(index, length, source) {\n    if (index == null) {\n      this.selection.setRange(null, length || Quill.sources.API);\n    } else {\n      [index, length,, source] = overload(index, length, source);\n      this.selection.setRange(new _selection__WEBPACK_IMPORTED_MODULE_6__[\"Range\"](Math.max(0, index), length), source);\n\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT) {\n        this.selection.scrollIntoView(this.scrollingContainer);\n      }\n    }\n  }\n\n  setText(text, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().insert(text);\n    return this.setContents(delta, source);\n  }\n\n  update(source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER) {\n    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes\n\n    this.selection.update(source); // TODO this is usually undefined\n\n    return change;\n  }\n\n  updateContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);\n      return this.editor.applyDelta(delta, source);\n    }, source, true);\n  }\n\n}\n\nQuill.DEFAULTS = {\n  bounds: null,\n  modules: {},\n  placeholder: '',\n  readOnly: false,\n  registry: globalRegistry,\n  scrollingContainer: null,\n  theme: 'default'\n};\nQuill.events = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events;\nQuill.sources = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources; // eslint-disable-next-line no-undef\n\nQuill.version =  false ? undefined : \"2.0.0-dev.3\";\nQuill.imports = {\n  delta: quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a,\n  parchment: parchment__WEBPACK_IMPORTED_MODULE_1__,\n  'core/module': _module__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'core/theme': _theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n};\n\nfunction expandConfig(container, userConfig) {\n  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {\n    container,\n    modules: {\n      clipboard: true,\n      keyboard: true,\n      history: true,\n      uploader: true\n    }\n  }, userConfig);\n\n  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {\n    userConfig.theme = _theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n  } else {\n    userConfig.theme = Quill.import(\"themes/\".concat(userConfig.theme));\n\n    if (userConfig.theme == null) {\n      throw new Error(\"Invalid theme \".concat(userConfig.theme, \". Did you register it?\"));\n    }\n  }\n\n  const themeConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, userConfig.theme.DEFAULTS);\n  [themeConfig, userConfig].forEach(config => {\n    config.modules = config.modules || {};\n    Object.keys(config.modules).forEach(module => {\n      if (config.modules[module] === true) {\n        config.modules[module] = {};\n      }\n    });\n  });\n  const moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));\n  const moduleConfig = moduleNames.reduce((config, name) => {\n    const moduleClass = Quill.import(\"modules/\".concat(name));\n\n    if (moduleClass == null) {\n      debug.error(\"Cannot load \".concat(name, \" module. Are you sure you registered it?\"));\n    } else {\n      config[name] = moduleClass.DEFAULTS || {};\n    }\n\n    return config;\n  }, {}); // Special case toolbar shorthand\n\n  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {\n    userConfig.modules.toolbar = {\n      container: userConfig.modules.toolbar\n    };\n  }\n\n  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, Quill.DEFAULTS, {\n    modules: moduleConfig\n  }, themeConfig, userConfig);\n  ['bounds', 'container', 'scrollingContainer'].forEach(key => {\n    if (typeof userConfig[key] === 'string') {\n      userConfig[key] = document.querySelector(userConfig[key]);\n    }\n  });\n  userConfig.modules = Object.keys(userConfig.modules).reduce((config, name) => {\n    if (userConfig.modules[name]) {\n      config[name] = userConfig.modules[name];\n    }\n\n    return config;\n  }, {});\n  return userConfig;\n} // Handle selection preservation and TEXT_CHANGE emission\n// common to modification APIs\n\n\nfunction modify(modifier, source, index, shift) {\n  if (!this.isEnabled() && source === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER && !this.allowReadOnlyEdits) {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();\n  }\n\n  let range = index == null ? null : this.getSelection();\n  const oldDelta = this.editor.delta;\n  const change = modifier();\n\n  if (range != null) {\n    if (index === true) {\n      index = range.index; // eslint-disable-line prefer-destructuring\n    }\n\n    if (shift == null) {\n      range = shiftRange(range, change, source);\n    } else if (shift !== 0) {\n      range = shiftRange(range, index, shift, source);\n    }\n\n    this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n  }\n\n  if (change.length() > 0) {\n    const args = [_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.TEXT_CHANGE, change, oldDelta, source];\n    this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.EDITOR_CHANGE, ...args);\n\n    if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT) {\n      this.emitter.emit(...args);\n    }\n  }\n\n  return change;\n}\n\nfunction overload(index, length, name, value, source) {\n  let formats = {};\n\n  if (typeof index.index === 'number' && typeof index.length === 'number') {\n    // Allow for throwaway end (used by insertText/insertEmbed)\n    if (typeof length !== 'number') {\n      source = value;\n      value = name;\n      name = length;\n      length = index.length; // eslint-disable-line prefer-destructuring\n\n      index = index.index; // eslint-disable-line prefer-destructuring\n    } else {\n      length = index.length; // eslint-disable-line prefer-destructuring\n\n      index = index.index; // eslint-disable-line prefer-destructuring\n    }\n  } else if (typeof length !== 'number') {\n    source = value;\n    value = name;\n    name = length;\n    length = 0;\n  } // Handle format being object, two format name/value strings or excluded\n\n\n  if (typeof name === 'object') {\n    formats = name;\n    source = value;\n  } else if (typeof name === 'string') {\n    if (value != null) {\n      formats[name] = value;\n    } else {\n      source = name;\n    }\n  } // Handle optional source\n\n\n  source = source || _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API;\n  return [index, length, formats, source];\n}\n\nfunction shiftRange(range, index, length, source) {\n  if (range == null) return null;\n  let start;\n  let end;\n\n  if (index instanceof quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a) {\n    [start, end] = [range.index, range.index + range.length].map(pos => index.transformPosition(pos, source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER));\n  } else {\n    [start, end] = [range.index, range.index + range.length].map(pos => {\n      if (pos < index || pos === index && source === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER) return pos;\n\n      if (length >= 0) {\n        return pos + length;\n      }\n\n      return Math.max(index, pos + length);\n    });\n  }\n\n  return new _selection__WEBPACK_IMPORTED_MODULE_6__[\"Range\"](start, end - start);\n}\n\n\n\n//# sourceURL=webpack://Quill/./core/quill.js?");/***/},/***/"./core/selection.js":/*!***************************!*\
    !*** ./core/selection.js ***!
    \***************************/ /*! exports provided: Range, default */ /***/function coreSelectionJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Range\", function() { return Range; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Selection; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('quill:selection');\n\nclass Range {\n  constructor(index, length = 0) {\n    this.index = index;\n    this.length = length;\n  }\n\n}\n\nclass Selection {\n  constructor(scroll, emitter) {\n    this.emitter = emitter;\n    this.scroll = scroll;\n    this.composing = false;\n    this.mouseDown = false;\n    this.root = this.scroll.domNode;\n    this.cursor = this.scroll.create('cursor', this); // savedRange is last non-null range\n\n    this.savedRange = new Range(0, 0);\n    this.lastRange = this.savedRange;\n    this.lastNative = null;\n    this.handleComposition();\n    this.handleDragging();\n    this.emitter.listenDOM('selectionchange', document, () => {\n      if (!this.mouseDown && !this.composing) {\n        setTimeout(this.update.bind(this, _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER), 1);\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BEFORE_UPDATE, () => {\n      if (!this.hasFocus()) return;\n      const native = this.getNativeRange();\n      if (native == null) return;\n      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle\n\n      this.emitter.once(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_UPDATE, () => {\n        try {\n          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {\n            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);\n          }\n\n          this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n        } catch (ignored) {// ignore\n        }\n      });\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, (mutations, context) => {\n      if (context.range) {\n        const {\n          startNode,\n          startOffset,\n          endNode,\n          endOffset\n        } = context.range;\n        this.setNativeRange(startNode, startOffset, endNode, endOffset);\n        this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n      }\n    });\n    this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n  }\n\n  handleComposition() {\n    this.root.addEventListener('compositionstart', () => {\n      this.composing = true;\n      this.scroll.batchStart();\n    });\n    this.root.addEventListener('compositionend', () => {\n      this.scroll.batchEnd();\n      this.composing = false;\n\n      if (this.cursor.parent) {\n        const range = this.cursor.restore();\n        if (!range) return;\n        setTimeout(() => {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }, 1);\n      }\n    });\n  }\n\n  handleDragging() {\n    this.emitter.listenDOM('mousedown', document.body, () => {\n      this.mouseDown = true;\n    });\n    this.emitter.listenDOM('mouseup', document.body, () => {\n      this.mouseDown = false;\n      this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    });\n  }\n\n  focus() {\n    if (this.hasFocus()) return;\n    this.root.focus();\n    this.setRange(this.savedRange);\n  }\n\n  format(format, value) {\n    this.scroll.update();\n    const nativeRange = this.getNativeRange();\n    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK)) return;\n\n    if (nativeRange.start.node !== this.cursor.textNode) {\n      const blot = this.scroll.find(nativeRange.start.node, false);\n      if (blot == null) return; // TODO Give blot ability to not split\n\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        const after = blot.split(nativeRange.start.offset);\n        blot.parent.insertBefore(this.cursor, after);\n      } else {\n        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen\n      }\n\n      this.cursor.attach();\n    }\n\n    this.cursor.format(format, value);\n    this.scroll.optimize();\n    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);\n    this.update();\n  }\n\n  getBounds(index, length = 0) {\n    const scrollLength = this.scroll.length();\n    index = Math.min(index, scrollLength - 1);\n    length = Math.min(index + length, scrollLength - 1) - index;\n    let node;\n    let [leaf, offset] = this.scroll.leaf(index);\n    if (leaf == null) return null;\n    [node, offset] = leaf.position(offset, true);\n    const range = document.createRange();\n\n    if (length > 0) {\n      range.setStart(node, offset);\n      [leaf, offset] = this.scroll.leaf(index + length);\n      if (leaf == null) return null;\n      [node, offset] = leaf.position(offset, true);\n      range.setEnd(node, offset);\n      return range.getBoundingClientRect();\n    }\n\n    let side = 'left';\n    let rect;\n\n    if (node instanceof Text) {\n      if (offset < node.data.length) {\n        range.setStart(node, offset);\n        range.setEnd(node, offset + 1);\n      } else {\n        range.setStart(node, offset - 1);\n        range.setEnd(node, offset);\n        side = 'right';\n      }\n\n      rect = range.getBoundingClientRect();\n    } else {\n      rect = leaf.domNode.getBoundingClientRect();\n      if (offset > 0) side = 'right';\n    }\n\n    return {\n      bottom: rect.top + rect.height,\n      height: rect.height,\n      left: rect[side],\n      right: rect[side],\n      top: rect.top,\n      width: 0\n    };\n  }\n\n  getNativeRange() {\n    const selection = document.getSelection();\n    if (selection == null || selection.rangeCount <= 0) return null;\n    const nativeRange = selection.getRangeAt(0);\n    if (nativeRange == null) return null;\n    const range = this.normalizeNative(nativeRange);\n    debug.info('getNativeRange', range);\n    return range;\n  }\n\n  getRange() {\n    const normalized = this.getNativeRange();\n    if (normalized == null) return [null, null];\n    const range = this.normalizedToRange(normalized);\n    return [range, normalized];\n  }\n\n  hasFocus() {\n    return document.activeElement === this.root || contains(this.root, document.activeElement);\n  }\n\n  normalizedToRange(range) {\n    const positions = [[range.start.node, range.start.offset]];\n\n    if (!range.native.collapsed) {\n      positions.push([range.end.node, range.end.offset]);\n    }\n\n    const indexes = positions.map(position => {\n      const [node, offset] = position;\n      const blot = this.scroll.find(node, true);\n      const index = blot.offset(this.scroll);\n\n      if (offset === 0) {\n        return index;\n      }\n\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        return index + blot.index(node, offset);\n      }\n\n      return index + blot.length();\n    });\n    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);\n    const start = Math.min(end, ...indexes);\n    return new Range(start, end - start);\n  }\n\n  normalizeNative(nativeRange) {\n    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {\n      return null;\n    }\n\n    const range = {\n      start: {\n        node: nativeRange.startContainer,\n        offset: nativeRange.startOffset\n      },\n      end: {\n        node: nativeRange.endContainer,\n        offset: nativeRange.endOffset\n      },\n      native: nativeRange\n    };\n    [range.start, range.end].forEach(position => {\n      let {\n        node,\n        offset\n      } = position;\n\n      while (!(node instanceof Text) && node.childNodes.length > 0) {\n        if (node.childNodes.length > offset) {\n          node = node.childNodes[offset];\n          offset = 0;\n        } else if (node.childNodes.length === offset) {\n          node = node.lastChild;\n\n          if (node instanceof Text) {\n            offset = node.data.length;\n          } else if (node.childNodes.length > 0) {\n            // Container case\n            offset = node.childNodes.length;\n          } else {\n            // Embed case\n            offset = node.childNodes.length + 1;\n          }\n        } else {\n          break;\n        }\n      }\n\n      position.node = node;\n      position.offset = offset;\n    });\n    return range;\n  }\n\n  rangeToNative(range) {\n    const indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];\n    const args = [];\n    const scrollLength = this.scroll.length();\n    indexes.forEach((index, i) => {\n      index = Math.min(scrollLength - 1, index);\n      const [leaf, leafOffset] = this.scroll.leaf(index);\n      const [node, offset] = leaf.position(leafOffset, i !== 0);\n      args.push(node, offset);\n    });\n\n    if (args.length < 2) {\n      return args.concat(args);\n    }\n\n    return args;\n  }\n\n  scrollIntoView(scrollingContainer) {\n    const range = this.lastRange;\n    if (range == null) return;\n    const bounds = this.getBounds(range.index, range.length);\n    if (bounds == null) return;\n    const limit = this.scroll.length() - 1;\n    const [first] = this.scroll.line(Math.min(range.index, limit));\n    let last = first;\n\n    if (range.length > 0) {\n      [last] = this.scroll.line(Math.min(range.index + range.length, limit));\n    }\n\n    if (first == null || last == null) return;\n    const scrollBounds = scrollingContainer.getBoundingClientRect();\n\n    if (bounds.top < scrollBounds.top) {\n      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;\n    } else if (bounds.bottom > scrollBounds.bottom) {\n      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;\n    }\n  }\n\n  setNativeRange(startNode, startOffset, endNode = startNode, endOffset = startOffset, force = false) {\n    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);\n\n    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {\n      return;\n    }\n\n    const selection = document.getSelection();\n    if (selection == null) return;\n\n    if (startNode != null) {\n      if (!this.hasFocus()) this.root.focus();\n      const {\n        native\n      } = this.getNativeRange() || {};\n\n      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {\n        if (startNode.tagName === 'BR') {\n          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);\n          startNode = startNode.parentNode;\n        }\n\n        if (endNode.tagName === 'BR') {\n          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);\n          endNode = endNode.parentNode;\n        }\n\n        const range = document.createRange();\n        range.setStart(startNode, startOffset);\n        range.setEnd(endNode, endOffset);\n        selection.removeAllRanges();\n        selection.addRange(range);\n      }\n    } else {\n      selection.removeAllRanges();\n      this.root.blur();\n    }\n  }\n\n  setRange(range, force = false, source = _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.API) {\n    if (typeof force === 'string') {\n      source = force;\n      force = false;\n    }\n\n    debug.info('setRange', range);\n\n    if (range != null) {\n      const args = this.rangeToNative(range);\n      this.setNativeRange(...args, force);\n    } else {\n      this.setNativeRange(null);\n    }\n\n    this.update(source);\n  }\n\n  update(source = _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER) {\n    const oldRange = this.lastRange;\n    const [lastRange, nativeRange] = this.getRange();\n    this.lastRange = lastRange;\n    this.lastNative = nativeRange;\n\n    if (this.lastRange != null) {\n      this.savedRange = this.lastRange;\n    }\n\n    if (!deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(oldRange, this.lastRange)) {\n      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {\n        const range = this.cursor.restore();\n\n        if (range) {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }\n      }\n\n      const args = [_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SELECTION_CHANGE, clone__WEBPACK_IMPORTED_MODULE_1___default()(this.lastRange), clone__WEBPACK_IMPORTED_MODULE_1___default()(oldRange), source];\n      this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.EDITOR_CHANGE, ...args);\n\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT) {\n        this.emitter.emit(...args);\n      }\n    }\n  }\n\n}\n\nfunction contains(parent, descendant) {\n  try {\n    // Firefox inserts inaccessible nodes around video elements\n    descendant.parentNode; // eslint-disable-line no-unused-expressions\n  } catch (e) {\n    return false;\n  }\n\n  return parent.contains(descendant);\n}\n\n\n\n//# sourceURL=webpack://Quill/./core/selection.js?");/***/},/***/"./core/theme.js":/*!***********************!*\
    !*** ./core/theme.js ***!
    \***********************/ /*! exports provided: default */ /***/function coreThemeJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nclass Theme {\n  constructor(quill, options) {\n    this.quill = quill;\n    this.options = options;\n    this.modules = {};\n  }\n\n  init() {\n    Object.keys(this.options.modules).forEach(name => {\n      if (this.modules[name] == null) {\n        this.addModule(name);\n      }\n    });\n  }\n\n  addModule(name) {\n    const ModuleClass = this.quill.constructor.import(\"modules/\".concat(name));\n    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});\n    return this.modules[name];\n  }\n\n}\n\nTheme.DEFAULTS = {\n  modules: {}\n};\nTheme.themes = {\n  default: Theme\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\n\n//# sourceURL=webpack://Quill/./core/theme.js?");/***/},/***/"./formats/align.js":/*!**************************!*\
    !*** ./formats/align.js ***!
    \**************************/ /*! exports provided: AlignAttribute, AlignClass, AlignStyle */ /***/function formatsAlignJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignAttribute\", function() { return AlignAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignClass\", function() { return AlignClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignStyle\", function() { return AlignStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['right', 'center', 'justify']\n};\nconst AlignAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('align', 'align', config);\nconst AlignClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('align', 'ql-align', config);\nconst AlignStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('align', 'text-align', config);\n\n\n//# sourceURL=webpack://Quill/./formats/align.js?");/***/},/***/"./formats/background.js":/*!*******************************!*\
    !*** ./formats/background.js ***!
    \*******************************/ /*! exports provided: BackgroundClass, BackgroundStyle */ /***/function formatsBackgroundJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundClass\", function() { return BackgroundClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundStyle\", function() { return BackgroundStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./formats/color.js\");\n\n\nconst BackgroundClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('background', 'ql-bg', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst BackgroundStyle = new _color__WEBPACK_IMPORTED_MODULE_1__[\"ColorAttributor\"]('background', 'background-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/background.js?");/***/},/***/"./formats/blockquote.js":/*!*******************************!*\
    !*** ./formats/blockquote.js ***!
    \*******************************/ /*! exports provided: default */ /***/function formatsBlockquoteJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n\nclass Blockquote extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nBlockquote.blotName = 'blockquote';\nBlockquote.tagName = 'blockquote';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blockquote);\n\n//# sourceURL=webpack://Quill/./formats/blockquote.js?");/***/},/***/"./formats/bold.js":/*!*************************!*\
    !*** ./formats/bold.js ***!
    \*************************/ /*! exports provided: default */ /***/function formatsBoldJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Bold extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create() {\n    return super.create();\n  }\n\n  static formats() {\n    return true;\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.domNode.tagName !== this.statics.tagName[0]) {\n      this.replaceWith(this.statics.blotName);\n    }\n  }\n\n}\n\nBold.blotName = 'bold';\nBold.tagName = ['STRONG', 'B'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bold);\n\n//# sourceURL=webpack://Quill/./formats/bold.js?");/***/},/***/"./formats/code.js":/*!*************************!*\
    !*** ./formats/code.js ***!
    \*************************/ /*! exports provided: Code, CodeBlockContainer, default */ /***/function formatsCodeJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Code\", function() { return Code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlockContainer\", function() { return CodeBlockContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\n\n\n\n\nclass CodeBlockContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n    domNode.setAttribute('spellcheck', false);\n    return domNode;\n  }\n\n  html(index, length) {\n    const text = this.children.map(child => child.domNode.innerText).join('\\n').slice(index, index + length);\n    return \"<pre>\".concat(Object(_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"escapeText\"])(text), \"</pre>\");\n  }\n\n}\n\nclass CodeBlock extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_6__[\"default\"].register(CodeBlockContainer);\n  }\n\n}\n\nclass Code extends _blots_inline__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {}\n\nCode.blotName = 'code';\nCode.tagName = 'CODE';\nCodeBlock.blotName = 'code-block';\nCodeBlock.className = 'ql-code-block';\nCodeBlock.tagName = 'DIV';\nCodeBlockContainer.blotName = 'code-block-container';\nCodeBlockContainer.className = 'ql-code-block-container';\nCodeBlockContainer.tagName = 'DIV';\nCodeBlockContainer.allowedChildren = [CodeBlock];\nCodeBlock.allowedChildren = [_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _blots_cursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nCodeBlock.requiredContainer = CodeBlockContainer;\nCodeBlock.TAB = '  ';\n\n\n//# sourceURL=webpack://Quill/./formats/code.js?");/***/},/***/"./formats/color.js":/*!**************************!*\
    !*** ./formats/color.js ***!
    \**************************/ /*! exports provided: ColorAttributor, ColorClass, ColorStyle */ /***/function formatsColorJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorAttributor\", function() { return ColorAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorClass\", function() { return ColorClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorStyle\", function() { return ColorStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass ColorAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(domNode) {\n    let value = super.value(domNode);\n    if (!value.startsWith('rgb(')) return value;\n    value = value.replace(/^[^\\d]+/, '').replace(/[^\\d]+$/, '');\n    const hex = value.split(',').map(component => \"00\".concat(parseInt(component, 10).toString(16)).slice(-2)).join('');\n    return \"#\".concat(hex);\n  }\n\n}\n\nconst ColorClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('color', 'ql-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst ColorStyle = new ColorAttributor('color', 'color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/color.js?");/***/},/***/"./formats/direction.js":/*!******************************!*\
    !*** ./formats/direction.js ***!
    \******************************/ /*! exports provided: DirectionAttribute, DirectionClass, DirectionStyle */ /***/function formatsDirectionJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionAttribute\", function() { return DirectionAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionClass\", function() { return DirectionClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionStyle\", function() { return DirectionStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['rtl']\n};\nconst DirectionAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('direction', 'dir', config);\nconst DirectionClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('direction', 'ql-direction', config);\nconst DirectionStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('direction', 'direction', config);\n\n\n//# sourceURL=webpack://Quill/./formats/direction.js?");/***/},/***/"./formats/font.js":/*!*************************!*\
    !*** ./formats/font.js ***!
    \*************************/ /*! exports provided: FontStyle, FontClass */ /***/function formatsFontJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontStyle\", function() { return FontStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontClass\", function() { return FontClass; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['serif', 'monospace']\n};\nconst FontClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('font', 'ql-font', config);\n\nclass FontStyleAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(node) {\n    return super.value(node).replace(/[\"']/g, '');\n  }\n\n}\n\nconst FontStyle = new FontStyleAttributor('font', 'font-family', config);\n\n\n//# sourceURL=webpack://Quill/./formats/font.js?");/***/},/***/"./formats/formula.js":/*!****************************!*\
    !*** ./formats/formula.js ***!
    \****************************/ /*! exports provided: default */ /***/function formatsFormulaJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/embed */ \"./blots/embed.js\");\n\n\nclass Formula extends _blots_embed__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (window.katex == null) {\n      throw new Error('Formula module requires KaTeX.');\n    }\n\n    const node = super.create(value);\n\n    if (typeof value === 'string') {\n      window.katex.render(value, node, {\n        throwOnError: false,\n        errorColor: '#f00'\n      });\n      node.setAttribute('data-value', value);\n    }\n\n    return node;\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('data-value');\n  }\n\n  html() {\n    const {\n      formula\n    } = this.value();\n    return \"<span>\".concat(formula, \"</span>\");\n  }\n\n}\n\nFormula.blotName = 'formula';\nFormula.className = 'ql-formula';\nFormula.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formula);\n\n//# sourceURL=webpack://Quill/./formats/formula.js?");/***/},/***/"./formats/header.js":/*!***************************!*\
    !*** ./formats/header.js ***!
    \***************************/ /*! exports provided: default */ /***/function formatsHeaderJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n\nclass Header extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static formats(domNode) {\n    return this.tagName.indexOf(domNode.tagName) + 1;\n  }\n\n}\n\nHeader.blotName = 'header';\nHeader.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack://Quill/./formats/header.js?");/***/},/***/"./formats/image.js":/*!**************************!*\
    !*** ./formats/image.js ***!
    \**************************/ /*! exports provided: default */ /***/function formatsImageJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['alt', 'height', 'width'];\n\nclass Image extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static create(value) {\n    const node = super.create(value);\n\n    if (typeof value === 'string') {\n      node.setAttribute('src', this.sanitize(value));\n    }\n\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n\n      return formats;\n    }, {});\n  }\n\n  static match(url) {\n    return /\\.(jpe?g|gif|png)$/.test(url) || /^data:image\\/.+;base64/.test(url);\n  }\n\n  static register() {\n    if (/Firefox/i.test(navigator.userAgent)) {\n      setTimeout(() => {\n        // Disable image resizing in Firefox\n        document.execCommand('enableObjectResizing', false, false);\n      }, 1);\n    }\n  }\n\n  static sanitize(url) {\n    return Object(_link__WEBPACK_IMPORTED_MODULE_1__[\"sanitize\"])(url, ['http', 'https', 'data']) ? url : '//:0';\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n}\n\nImage.blotName = 'image';\nImage.tagName = 'IMG';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack://Quill/./formats/image.js?");/***/},/***/"./formats/indent.js":/*!***************************!*\
    !*** ./formats/indent.js ***!
    \***************************/ /*! exports provided: default */ /***/function formatsIndentJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass IndentAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"] {\n  add(node, value) {\n    if (value === '+1' || value === '-1') {\n      const indent = this.value(node) || 0;\n      value = value === '+1' ? indent + 1 : indent - 1;\n    }\n\n    if (value === 0) {\n      this.remove(node);\n      return true;\n    }\n\n    return super.add(node, value);\n  }\n\n  canAdd(node, value) {\n    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));\n  }\n\n  value(node) {\n    return parseInt(super.value(node), 10) || undefined; // Don't return NaN\n  }\n\n}\n\nconst IndentClass = new IndentAttributor('indent', 'ql-indent', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndentClass);\n\n//# sourceURL=webpack://Quill/./formats/indent.js?");/***/},/***/"./formats/italic.js":/*!***************************!*\
    !*** ./formats/italic.js ***!
    \***************************/ /*! exports provided: default */ /***/function formatsItalicJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\n\nclass Italic extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nItalic.blotName = 'italic';\nItalic.tagName = ['EM', 'I'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Italic);\n\n//# sourceURL=webpack://Quill/./formats/italic.js?");/***/},/***/"./formats/link.js":/*!*************************!*\
    !*** ./formats/link.js ***!
    \*************************/ /*! exports provided: default, sanitize */ /***/function formatsLinkJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitize\", function() { return sanitize; });\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Link extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('href', this.sanitize(value));\n    node.setAttribute('rel', 'noopener noreferrer');\n    node.setAttribute('target', '_blank');\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('href');\n  }\n\n  static sanitize(url) {\n    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;\n  }\n\n  format(name, value) {\n    if (name !== this.statics.blotName || !value) {\n      super.format(name, value);\n    } else {\n      this.domNode.setAttribute('href', this.constructor.sanitize(value));\n    }\n  }\n\n}\n\nLink.blotName = 'link';\nLink.tagName = 'A';\nLink.SANITIZED_URL = 'about:blank';\nLink.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];\n\nfunction sanitize(url, protocols) {\n  const anchor = document.createElement('a');\n  anchor.href = url;\n  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));\n  return protocols.indexOf(protocol) > -1;\n}\n\n\n\n//# sourceURL=webpack://Quill/./formats/link.js?");/***/},/***/"./formats/list.js":/*!*************************!*\
    !*** ./formats/list.js ***!
    \*************************/ /*! exports provided: ListContainer, default */ /***/function formatsListJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListContainer\", function() { return ListContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\nclass ListContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\n\nListContainer.blotName = 'list-container';\nListContainer.tagName = 'OL';\n\nclass ListItem extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create();\n    node.setAttribute('data-list', value);\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-list') || undefined;\n  }\n\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(ListContainer);\n  }\n\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    const ui = domNode.ownerDocument.createElement('span');\n\n    const listEventHandler = e => {\n      if (!scroll.isEnabled()) return;\n      const format = this.statics.formats(domNode, scroll);\n\n      if (format === 'checked') {\n        this.format('list', 'unchecked');\n        e.preventDefault();\n      } else if (format === 'unchecked') {\n        this.format('list', 'checked');\n        e.preventDefault();\n      }\n    };\n\n    ui.addEventListener('mousedown', listEventHandler);\n    ui.addEventListener('touchstart', listEventHandler);\n    this.attachUI(ui);\n  }\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-list', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n}\n\nListItem.blotName = 'list';\nListItem.tagName = 'LI';\nListContainer.allowedChildren = [ListItem];\nListItem.requiredContainer = ListContainer;\n\n\n//# sourceURL=webpack://Quill/./formats/list.js?");/***/},/***/"./formats/script.js":/*!***************************!*\
    !*** ./formats/script.js ***!
    \***************************/ /*! exports provided: default */ /***/function formatsScriptJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Script extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (value === 'super') {\n      return document.createElement('sup');\n    }\n\n    if (value === 'sub') {\n      return document.createElement('sub');\n    }\n\n    return super.create(value);\n  }\n\n  static formats(domNode) {\n    if (domNode.tagName === 'SUB') return 'sub';\n    if (domNode.tagName === 'SUP') return 'super';\n    return undefined;\n  }\n\n}\n\nScript.blotName = 'script';\nScript.tagName = ['SUB', 'SUP'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Script);\n\n//# sourceURL=webpack://Quill/./formats/script.js?");/***/},/***/"./formats/size.js":/*!*************************!*\
    !*** ./formats/size.js ***!
    \*************************/ /*! exports provided: SizeClass, SizeStyle */ /***/function formatsSizeJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeClass\", function() { return SizeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeStyle\", function() { return SizeStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst SizeClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('size', 'ql-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['small', 'large', 'huge']\n});\nconst SizeStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('size', 'font-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['10px', '18px', '32px']\n});\n\n\n//# sourceURL=webpack://Quill/./formats/size.js?");/***/},/***/"./formats/strike.js":/*!***************************!*\
    !*** ./formats/strike.js ***!
    \***************************/ /*! exports provided: default */ /***/function formatsStrikeJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\n\nclass Strike extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nStrike.blotName = 'strike';\nStrike.tagName = ['S', 'STRIKE'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strike);\n\n//# sourceURL=webpack://Quill/./formats/strike.js?");/***/},/***/"./formats/table.js":/*!**************************!*\
    !*** ./formats/table.js ***!
    \**************************/ /*! exports provided: TableCell, TableRow, TableBody, TableContainer, tableId */ /***/function formatsTableJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableCell\", function() { return TableCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableRow\", function() { return TableRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableBody\", function() { return TableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableContainer\", function() { return TableContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableId\", function() { return tableId; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\n\n\nclass TableCell extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create();\n\n    if (value) {\n      node.setAttribute('data-row', value);\n    } else {\n      node.setAttribute('data-row', tableId());\n    }\n\n    return node;\n  }\n\n  static formats(domNode) {\n    if (domNode.hasAttribute('data-row')) {\n      return domNode.getAttribute('data-row');\n    }\n\n    return undefined;\n  }\n\n  cellOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n\n    return -1;\n  }\n\n  format(name, value) {\n    if (name === TableCell.blotName && value) {\n      this.domNode.setAttribute('data-row', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  row() {\n    return this.parent;\n  }\n\n  rowOffset() {\n    if (this.row()) {\n      return this.row().rowOffset();\n    }\n\n    return -1;\n  }\n\n  table() {\n    return this.row() && this.row().table();\n  }\n\n}\n\nTableCell.blotName = 'table';\nTableCell.tagName = 'TD';\n\nclass TableRow extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats();\n      const thisTail = this.children.tail.formats();\n      const nextHead = this.next.children.head.formats();\n      const nextTail = this.next.children.tail.formats();\n      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;\n    }\n\n    return false;\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n    this.children.forEach(child => {\n      if (child.next == null) return;\n      const childFormats = child.formats();\n      const nextFormats = child.next.formats();\n\n      if (childFormats.table !== nextFormats.table) {\n        const next = this.splitAfter(child);\n\n        if (next) {\n          next.optimize();\n        } // We might be able to merge with prev now\n\n\n        if (this.prev) {\n          this.prev.optimize();\n        }\n      }\n    });\n  }\n\n  rowOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n\n    return -1;\n  }\n\n  table() {\n    return this.parent && this.parent.parent;\n  }\n\n}\n\nTableRow.blotName = 'table-row';\nTableRow.tagName = 'TR';\n\nclass TableBody extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\n\nTableBody.blotName = 'table-body';\nTableBody.tagName = 'TBODY';\n\nclass TableContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  balanceCells() {\n    const rows = this.descendants(TableRow);\n    const maxColumns = rows.reduce((max, row) => {\n      return Math.max(row.children.length, max);\n    }, 0);\n    rows.forEach(row => {\n      new Array(maxColumns - row.children.length).fill(0).forEach(() => {\n        let value;\n\n        if (row.children.head != null) {\n          value = TableCell.formats(row.children.head.domNode);\n        }\n\n        const blot = this.scroll.create(TableCell.blotName, value);\n        row.appendChild(blot);\n        blot.optimize(); // Add break blot\n      });\n    });\n  }\n\n  cells(column) {\n    return this.rows().map(row => row.children.at(column));\n  }\n\n  deleteColumn(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const cell = row.children.at(index);\n\n      if (cell != null) {\n        cell.remove();\n      }\n    });\n  }\n\n  insertColumn(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const ref = row.children.at(index);\n      const value = TableCell.formats(row.children.head.domNode);\n      const cell = this.scroll.create(TableCell.blotName, value);\n      row.insertBefore(cell, ref);\n    });\n  }\n\n  insertRow(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    const id = tableId();\n    const row = this.scroll.create(TableRow.blotName);\n    body.children.head.children.forEach(() => {\n      const cell = this.scroll.create(TableCell.blotName, id);\n      row.appendChild(cell);\n    });\n    const ref = body.children.at(index);\n    body.insertBefore(row, ref);\n  }\n\n  rows() {\n    const body = this.children.head;\n    if (body == null) return [];\n    return body.children.map(row => row);\n  }\n\n}\n\nTableContainer.blotName = 'table-container';\nTableContainer.tagName = 'TABLE';\nTableContainer.allowedChildren = [TableBody];\nTableBody.requiredContainer = TableContainer;\nTableBody.allowedChildren = [TableRow];\nTableRow.requiredContainer = TableBody;\nTableRow.allowedChildren = [TableCell];\nTableCell.requiredContainer = TableRow;\n\nfunction tableId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return \"row-\".concat(id);\n}\n\n\n\n//# sourceURL=webpack://Quill/./formats/table.js?");/***/},/***/"./formats/underline.js":/*!******************************!*\
    !*** ./formats/underline.js ***!
    \******************************/ /*! exports provided: default */ /***/function formatsUnderlineJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Underline extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nUnderline.blotName = 'underline';\nUnderline.tagName = 'U';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Underline);\n\n//# sourceURL=webpack://Quill/./formats/underline.js?");/***/},/***/"./formats/video.js":/*!**************************!*\
    !*** ./formats/video.js ***!
    \**************************/ /*! exports provided: default */ /***/function formatsVideoJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['height', 'width'];\n\nclass Video extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"BlockEmbed\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('frameborder', '0');\n    node.setAttribute('allowfullscreen', true);\n    node.setAttribute('src', this.sanitize(value));\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n\n      return formats;\n    }, {});\n  }\n\n  static sanitize(url) {\n    return _link__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sanitize(url); // eslint-disable-line import/no-named-as-default-member\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  html() {\n    const {\n      video\n    } = this.value();\n    return \"<a href=\\\"\".concat(video, \"\\\">\").concat(video, \"</a>\");\n  }\n\n}\n\nVideo.blotName = 'video';\nVideo.className = 'ql-video';\nVideo.tagName = 'IFRAME';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack://Quill/./formats/video.js?");/***/},/***/"./modules/clipboard.js":/*!******************************!*\
    !*** ./modules/clipboard.js ***!
    \******************************/ /*! exports provided: default, matchAttributor, matchBlot, matchNewline, matchText, traverse */ /***/function modulesClipboardJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clipboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchAttributor\", function() { return matchAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchBlot\", function() { return matchBlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchNewline\", function() { return matchNewline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchText\", function() { return matchText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return traverse; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formats/size */ \"./formats/size.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('quill:clipboard');\nconst CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['strike', matchAlias.bind(matchAlias, 'strike')], ['style', matchIgnore]];\nconst ATTRIBUTE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__[\"AlignAttribute\"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__[\"DirectionAttribute\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\nconst STYLE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__[\"AlignStyle\"], _formats_background__WEBPACK_IMPORTED_MODULE_8__[\"BackgroundStyle\"], _formats_color__WEBPACK_IMPORTED_MODULE_10__[\"ColorStyle\"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__[\"DirectionStyle\"], _formats_font__WEBPACK_IMPORTED_MODULE_12__[\"FontStyle\"], _formats_size__WEBPACK_IMPORTED_MODULE_13__[\"SizeStyle\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\n\nclass Clipboard extends _core_module__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));\n    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));\n    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));\n    this.matchers = [];\n    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(([selector, matcher]) => {\n      this.addMatcher(selector, matcher);\n    });\n  }\n\n  addMatcher(selector, matcher) {\n    this.matchers.push([selector, matcher]);\n  }\n\n  convert({\n    html,\n    text\n  }, formats = {}) {\n    if (formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text, {\n        [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]\n      });\n    }\n\n    if (!html) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text || '');\n    }\n\n    const doc = new DOMParser().parseFromString(html, 'text/html');\n    const container = doc.body;\n    const nodeMatches = new WeakMap();\n    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);\n    const delta = traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches); // Remove trailing newline\n\n    if (deltaEndsWith(delta, '\\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {\n      return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(delta.length() - 1).delete(1));\n    }\n\n    return delta;\n  }\n\n  dangerouslyPasteHTML(index, html, source = _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    if (typeof index === 'string') {\n      const delta = this.convert({\n        html: index,\n        text: ''\n      });\n      this.quill.setContents(delta, html);\n      this.quill.setSelection(0, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    } else {\n      const paste = this.convert({\n        html,\n        text: ''\n      });\n      this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(index).concat(paste), source);\n      this.quill.setSelection(index + paste.length(), _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    }\n  }\n\n  onCaptureCopy(e, isCut = false) {\n    if (e.defaultPrevented) return;\n    e.preventDefault();\n    const [range] = this.quill.selection.getRange();\n    if (range == null) return;\n    const {\n      html,\n      text\n    } = this.onCopy(range, isCut);\n    e.clipboardData.setData('text/plain', text);\n    e.clipboardData.setData('text/html', html);\n\n    if (isCut) {\n      this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    }\n  }\n\n  onCapturePaste(e) {\n    if (e.defaultPrevented || !this.quill.isEnabled()) return;\n    e.preventDefault();\n    const range = this.quill.getSelection(true);\n    if (range == null) return;\n    const html = e.clipboardData.getData('text/html');\n    const text = e.clipboardData.getData('text/plain');\n    const files = Array.from(e.clipboardData.files || []);\n\n    if (!html && files.length > 0) {\n      this.quill.uploader.upload(range, files);\n    } else {\n      this.onPaste(range, {\n        html,\n        text\n      });\n    }\n  }\n\n  onCopy(range) {\n    const text = this.quill.getText(range);\n    const html = this.quill.getSemanticHTML(range);\n    return {\n      html,\n      text\n    };\n  }\n\n  onPaste(range, {\n    text,\n    html\n  }) {\n    const formats = this.quill.getFormat(range.index);\n    const pastedDelta = this.convert({\n      text,\n      html\n    }, formats);\n    debug.log('onPaste', pastedDelta, {\n      text,\n      html\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(range.index).delete(range.length).concat(pastedDelta);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER); // range.length contributes to delta.length()\n\n    this.quill.setSelection(delta.length() - range.length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    this.quill.scrollIntoView();\n  }\n\n  prepareMatching(container, nodeMatches) {\n    const elementMatchers = [];\n    const textMatchers = [];\n    this.matchers.forEach(pair => {\n      const [selector, matcher] = pair;\n\n      switch (selector) {\n        case Node.TEXT_NODE:\n          textMatchers.push(matcher);\n          break;\n\n        case Node.ELEMENT_NODE:\n          elementMatchers.push(matcher);\n          break;\n\n        default:\n          Array.from(container.querySelectorAll(selector)).forEach(node => {\n            if (nodeMatches.has(node)) {\n              const matches = nodeMatches.get(node);\n              matches.push(matcher);\n            } else {\n              nodeMatches.set(node, [matcher]);\n            }\n          });\n          break;\n      }\n    });\n    return [elementMatchers, textMatchers];\n  }\n\n}\n\nClipboard.DEFAULTS = {\n  matchers: []\n};\n\nfunction applyFormat(delta, format, value) {\n  if (typeof format === 'object') {\n    return Object.keys(format).reduce((newDelta, key) => {\n      return applyFormat(newDelta, key, format[key]);\n    }, delta);\n  }\n\n  return delta.reduce((newDelta, op) => {\n    if (op.attributes && op.attributes[format]) {\n      return newDelta.push(op);\n    }\n\n    return newDelta.insert(op.insert, extend__WEBPACK_IMPORTED_MODULE_0___default()({}, {\n      [format]: value\n    }, op.attributes));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\n\nfunction deltaEndsWith(delta, text) {\n  let endText = '';\n\n  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus\n  ) {\n    const op = delta.ops[i];\n    if (typeof op.insert !== 'string') break;\n    endText = op.insert + endText;\n  }\n\n  return endText.slice(-1 * text.length) === text;\n}\n\nfunction isLine(node) {\n  if (node.childNodes.length === 0) return false; // Exclude embed blocks\n\n  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());\n}\n\nconst preNodes = new WeakMap();\n\nfunction isPre(node) {\n  if (node == null) return false;\n\n  if (!preNodes.has(node)) {\n    if (node.tagName === 'PRE') {\n      preNodes.set(node, true);\n    } else {\n      preNodes.set(node, isPre(node.parentNode));\n    }\n  }\n\n  return preNodes.get(node);\n}\n\nfunction traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {\n  // Post-order\n  if (node.nodeType === node.TEXT_NODE) {\n    return textMatchers.reduce((delta, matcher) => {\n      return matcher(node, delta, scroll);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n\n  if (node.nodeType === node.ELEMENT_NODE) {\n    return Array.from(node.childNodes || []).reduce((delta, childNode) => {\n      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);\n\n      if (childNode.nodeType === node.ELEMENT_NODE) {\n        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n      }\n\n      return delta.concat(childrenDelta);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\n\nfunction matchAlias(format, node, delta) {\n  return applyFormat(delta, format, true);\n}\n\nfunction matchAttributor(node, delta, scroll) {\n  const attributes = parchment__WEBPACK_IMPORTED_MODULE_2__[\"Attributor\"].keys(node);\n  const classes = parchment__WEBPACK_IMPORTED_MODULE_2__[\"ClassAttributor\"].keys(node);\n  const styles = parchment__WEBPACK_IMPORTED_MODULE_2__[\"StyleAttributor\"].keys(node);\n  const formats = {};\n  attributes.concat(classes).concat(styles).forEach(name => {\n    let attr = scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].ATTRIBUTE);\n\n    if (attr != null) {\n      formats[attr.attrName] = attr.value(node);\n      if (formats[attr.attrName]) return;\n    }\n\n    attr = ATTRIBUTE_ATTRIBUTORS[name];\n\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n\n    attr = STYLE_ATTRIBUTORS[name];\n\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      attr = STYLE_ATTRIBUTORS[name];\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n  });\n\n  if (Object.keys(formats).length > 0) {\n    return applyFormat(delta, formats);\n  }\n\n  return delta;\n}\n\nfunction matchBlot(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null) return delta;\n\n  if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"]) {\n    const embed = {};\n    const value = match.value(node);\n\n    if (value != null) {\n      embed[match.blotName] = value;\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(embed, match.formats(node, scroll));\n    }\n  } else {\n    if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__[\"BlockBlot\"] && !deltaEndsWith(delta, '\\n')) {\n      delta.insert('\\n');\n    }\n\n    if (typeof match.formats === 'function') {\n      return applyFormat(delta, match.blotName, match.formats(node, scroll));\n    }\n  }\n\n  return delta;\n}\n\nfunction matchBreak(node, delta) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    delta.insert('\\n');\n  }\n\n  return delta;\n}\n\nfunction matchCodeBlock(node, delta, scroll) {\n  const match = scroll.query('code-block');\n  const language = match ? match.formats(node, scroll) : true;\n  return applyFormat(delta, 'code-block', language);\n}\n\nfunction matchIgnore() {\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\n\nfunction matchIndent(node, delta, scroll) {\n  const match = scroll.query(node);\n\n  if (match == null || match.blotName !== 'list' || !deltaEndsWith(delta, '\\n')) {\n    return delta;\n  }\n\n  let indent = -1;\n  let parent = node.parentNode;\n\n  while (parent != null) {\n    if (['OL', 'UL'].includes(parent.tagName)) {\n      indent += 1;\n    }\n\n    parent = parent.parentNode;\n  }\n\n  if (indent <= 0) return delta;\n  return delta.reduce((composed, op) => {\n    if (op.attributes && op.attributes.list) {\n      return composed.push(op);\n    }\n\n    return composed.insert(op.insert, {\n      indent,\n      ...(op.attributes || {})\n    });\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\n\nfunction matchList(node, delta) {\n  const list = node.tagName === 'OL' ? 'ordered' : 'bullet';\n  return applyFormat(delta, 'list', list);\n}\n\nfunction matchNewline(node, delta, scroll) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    if (isLine(node)) {\n      return delta.insert('\\n');\n    }\n\n    if (delta.length() > 0 && node.nextSibling) {\n      let {\n        nextSibling\n      } = node;\n\n      while (nextSibling != null) {\n        if (isLine(nextSibling)) {\n          return delta.insert('\\n');\n        }\n\n        const match = scroll.query(nextSibling);\n\n        if (match && match.prototype instanceof _blots_block__WEBPACK_IMPORTED_MODULE_3__[\"BlockEmbed\"]) {\n          return delta.insert('\\n');\n        }\n\n        nextSibling = nextSibling.firstChild;\n      }\n    }\n  }\n\n  return delta;\n}\n\nfunction matchStyles(node, delta) {\n  const formats = {};\n  const style = node.style || {};\n\n  if (style.fontStyle === 'italic') {\n    formats.italic = true;\n  }\n\n  if (style.textDecoration === 'underline') {\n    formats.underline = true;\n  }\n\n  if (style.textDecoration === 'line-through') {\n    formats.strike = true;\n  }\n\n  if (style.fontWeight.startsWith('bold') || parseInt(style.fontWeight, 10) >= 700) {\n    formats.bold = true;\n  }\n\n  if (Object.keys(formats).length > 0) {\n    delta = applyFormat(delta, formats);\n  }\n\n  if (parseFloat(style.textIndent || 0) > 0) {\n    // Could be 0.5in\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert('\\t').concat(delta);\n  }\n\n  return delta;\n}\n\nfunction matchTable(node, delta) {\n  const table = node.parentNode.tagName === 'TABLE' ? node.parentNode : node.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll('tr'));\n  const row = rows.indexOf(node) + 1;\n  return applyFormat(delta, 'table', row);\n}\n\nfunction matchText(node, delta) {\n  let text = node.data; // Word represents empty line with <o:p>&nbsp;</o:p>\n\n  if (node.parentNode.tagName === 'O:P') {\n    return delta.insert(text.trim());\n  }\n\n  if (text.trim().length === 0 && text.includes('\\n')) {\n    return delta;\n  }\n\n  if (!isPre(node)) {\n    const replacer = (collapse, match) => {\n      const replaced = match.replace(/[^\\u00a0]/g, ''); // \\u00a0 is nbsp;\n\n      return replaced.length < 1 && collapse ? ' ' : replaced;\n    };\n\n    text = text.replace(/\\r\\n/g, ' ').replace(/\\n/g, ' ');\n    text = text.replace(/\\s\\s+/g, replacer.bind(replacer, true)); // collapse whitespace\n\n    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {\n      text = text.replace(/^\\s+/, replacer.bind(replacer, false));\n    }\n\n    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {\n      text = text.replace(/\\s+$/, replacer.bind(replacer, false));\n    }\n  }\n\n  return delta.insert(text);\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/clipboard.js?");/***/},/***/"./modules/history.js":/*!****************************!*\
    !*** ./modules/history.js ***!
    \****************************/ /*! exports provided: default, getLastChangeIndex */ /***/function modulesHistoryJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return History; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastChangeIndex\", function() { return getLastChangeIndex; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\nclass History extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.lastRecorded = 0;\n    this.ignoreChange = false;\n    this.clear();\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {\n      if (eventName !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE || this.ignoreChange) return;\n\n      if (!this.options.userOnly || source === _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.record(delta, oldDelta);\n      } else {\n        this.transform(delta);\n      }\n    });\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true\n    }, this.undo.bind(this));\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true,\n      shiftKey: true\n    }, this.redo.bind(this));\n\n    if (/Win/i.test(navigator.platform)) {\n      this.quill.keyboard.addBinding({\n        key: 'y',\n        shortKey: true\n      }, this.redo.bind(this));\n    }\n  }\n\n  change(source, dest) {\n    if (this.stack[source].length === 0) return;\n    const delta = this.stack[source].pop();\n    const base = this.quill.getContents();\n    const inverseDelta = delta.invert(base);\n    this.stack[dest].push(inverseDelta);\n    this.lastRecorded = 0;\n    this.ignoreChange = true;\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.ignoreChange = false;\n    const index = getLastChangeIndex(this.quill.scroll, delta);\n    this.quill.setSelection(index);\n  }\n\n  clear() {\n    this.stack = {\n      undo: [],\n      redo: []\n    };\n  }\n\n  cutoff() {\n    this.lastRecorded = 0;\n  }\n\n  record(changeDelta, oldDelta) {\n    if (changeDelta.ops.length === 0) return;\n    this.stack.redo = [];\n    let undoDelta = changeDelta.invert(oldDelta);\n    const timestamp = Date.now();\n\n    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {\n      const delta = this.stack.undo.pop();\n      undoDelta = undoDelta.compose(delta);\n    } else {\n      this.lastRecorded = timestamp;\n    }\n\n    if (undoDelta.length() === 0) return;\n    this.stack.undo.push(undoDelta);\n\n    if (this.stack.undo.length > this.options.maxStack) {\n      this.stack.undo.shift();\n    }\n  }\n\n  redo() {\n    this.change('redo', 'undo');\n  }\n\n  transform(delta) {\n    transformStack(this.stack.undo, delta);\n    transformStack(this.stack.redo, delta);\n  }\n\n  undo() {\n    this.change('undo', 'redo');\n  }\n\n}\n\nHistory.DEFAULTS = {\n  delay: 1000,\n  maxStack: 100,\n  userOnly: false\n};\n\nfunction transformStack(stack, delta) {\n  let remoteDelta = delta;\n\n  for (let i = stack.length - 1; i >= 0; i -= 1) {\n    const oldDelta = stack[i];\n    stack[i] = remoteDelta.transform(oldDelta, true);\n    remoteDelta = oldDelta.transform(remoteDelta);\n\n    if (stack[i].length() === 0) {\n      stack.splice(i, 1);\n    }\n  }\n}\n\nfunction endsWithNewlineChange(scroll, delta) {\n  const lastOp = delta.ops[delta.ops.length - 1];\n  if (lastOp == null) return false;\n\n  if (lastOp.insert != null) {\n    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\\n');\n  }\n\n  if (lastOp.attributes != null) {\n    return Object.keys(lastOp.attributes).some(attr => {\n      return scroll.query(attr, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) != null;\n    });\n  }\n\n  return false;\n}\n\nfunction getLastChangeIndex(scroll, delta) {\n  const deleteLength = delta.reduce((length, op) => {\n    return length + (op.delete || 0);\n  }, 0);\n  let changeIndex = delta.length() - deleteLength;\n\n  if (endsWithNewlineChange(scroll, delta)) {\n    changeIndex -= 1;\n  }\n\n  return changeIndex;\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/history.js?");/***/},/***/"./modules/keyboard.js":/*!*****************************!*\
    !*** ./modules/keyboard.js ***!
    \*****************************/ /*! exports provided: default, SHORTKEY, normalize */ /***/function modulesKeyboardJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHORTKEY\", function() { return SHORTKEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('quill:keyboard');\nconst SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';\n\nclass Keyboard extends _core_module__WEBPACK_IMPORTED_MODULE_7__[\"default\"] {\n  static match(evt, binding) {\n    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {\n      return !!binding[key] !== evt[key] && binding[key] !== null;\n    })) {\n      return false;\n    }\n\n    return binding.key === evt.key || binding.key === evt.which;\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n    this.bindings = {};\n    Object.keys(this.options.bindings).forEach(name => {\n      if (this.options.bindings[name]) {\n        this.addBinding(this.options.bindings[name]);\n      }\n    });\n    this.addBinding({\n      key: 'Enter',\n      shiftKey: null\n    }, this.handleEnter);\n    this.addBinding({\n      key: 'Enter',\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null\n    }, () => {});\n\n    if (/Firefox/i.test(navigator.userAgent)) {\n      // Need to handle delete and backspace for Firefox in the general case #1171\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true\n      }, this.handleDelete);\n    } else {\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true,\n        prefix: /^.?$/\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true,\n        suffix: /^.?$/\n      }, this.handleDelete);\n    }\n\n    this.addBinding({\n      key: 'Backspace'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Delete'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Backspace',\n      altKey: null,\n      ctrlKey: null,\n      metaKey: null,\n      shiftKey: null\n    }, {\n      collapsed: true,\n      offset: 0\n    }, this.handleBackspace);\n    this.listen();\n  }\n\n  addBinding(keyBinding, context = {}, handler = {}) {\n    const binding = normalize(keyBinding);\n\n    if (binding == null) {\n      debug.warn('Attempted to add invalid keyboard binding', binding);\n      return;\n    }\n\n    if (typeof context === 'function') {\n      context = {\n        handler: context\n      };\n    }\n\n    if (typeof handler === 'function') {\n      handler = {\n        handler\n      };\n    }\n\n    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];\n    keys.forEach(key => {\n      const singleBinding = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, binding, {\n        key\n      }, context, handler);\n      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];\n      this.bindings[singleBinding.key].push(singleBinding);\n    });\n  }\n\n  listen() {\n    this.quill.root.addEventListener('keydown', evt => {\n      if (evt.defaultPrevented || evt.isComposing) return;\n      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);\n      const matches = bindings.filter(binding => Keyboard.match(evt, binding));\n      if (matches.length === 0) return;\n      const range = this.quill.getSelection();\n      if (range == null || !this.quill.hasFocus()) return;\n      const [line, offset] = this.quill.getLine(range.index);\n      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);\n      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);\n      const prefixText = leafStart instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"TextBlot\"] ? leafStart.value().slice(0, offsetStart) : '';\n      const suffixText = leafEnd instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"TextBlot\"] ? leafEnd.value().slice(offsetEnd) : '';\n      const curContext = {\n        collapsed: range.length === 0,\n        empty: range.length === 0 && line.length() <= 1,\n        format: this.quill.getFormat(range),\n        line,\n        offset,\n        prefix: prefixText,\n        suffix: suffixText,\n        event: evt\n      };\n      const prevented = matches.some(binding => {\n        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {\n          return false;\n        }\n\n        if (binding.empty != null && binding.empty !== curContext.empty) {\n          return false;\n        }\n\n        if (binding.offset != null && binding.offset !== curContext.offset) {\n          return false;\n        }\n\n        if (Array.isArray(binding.format)) {\n          // any format is present\n          if (binding.format.every(name => curContext.format[name] == null)) {\n            return false;\n          }\n        } else if (typeof binding.format === 'object') {\n          // all formats must match\n          if (!Object.keys(binding.format).every(name => {\n            if (binding.format[name] === true) return curContext.format[name] != null;\n            if (binding.format[name] === false) return curContext.format[name] == null;\n            return deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(binding.format[name], curContext.format[name]);\n          })) {\n            return false;\n          }\n        }\n\n        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {\n          return false;\n        }\n\n        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {\n          return false;\n        }\n\n        return binding.handler.call(this, range, curContext, binding) !== true;\n      });\n\n      if (prevented) {\n        evt.preventDefault();\n      }\n    });\n  }\n\n  handleBackspace(range, context) {\n    // Check for astral symbols\n    const length = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]$/.test(context.prefix) ? 2 : 1;\n    if (range.index === 0 || this.quill.getLength() <= 1) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - length).delete(length);\n\n    if (context.offset === 0) {\n      // Always deleting newline here, length always 1\n      const [prev] = this.quill.getLine(range.index - 1);\n\n      if (prev) {\n        const curFormats = line.formats();\n        const prevFormats = this.quill.getFormat(range.index - 1, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(curFormats, prevFormats) || {};\n\n        if (Object.keys(formats).length > 0) {\n          // line.length() - 1 targets \\n in line, another -1 for newline being deleted\n          const formatDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - 2).retain(1, formats);\n          delta = delta.compose(formatDelta);\n        }\n      }\n    }\n\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n\n  handleDelete(range, context) {\n    // Check for astral symbols\n    const length = /^[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/.test(context.suffix) ? 2 : 1;\n    if (range.index >= this.quill.getLength() - length) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(length);\n\n    if (context.offset >= line.length() - 1) {\n      const [next] = this.quill.getLine(range.index + 1);\n\n      if (next) {\n        const curFormats = line.formats();\n        const nextFormats = this.quill.getFormat(range.index, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(curFormats, nextFormats) || {};\n\n        if (Object.keys(formats).length > 0) {\n          delta = delta.retain(next.length() - 1).retain(1, formats);\n        }\n      }\n    }\n\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n\n  handleDeleteRange(range) {\n    const lines = this.quill.getLines(range);\n    let formats = {};\n\n    if (lines.length > 1) {\n      const firstFormats = lines[0].formats();\n      const lastFormats = lines[lines.length - 1].formats();\n      formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(lastFormats, firstFormats) || {};\n    }\n\n    this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n\n    if (Object.keys(formats).length > 0) {\n      this.quill.formatLine(range.index, 1, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    }\n\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.focus();\n  }\n\n  handleEnter(range, context) {\n    const lineFormats = Object.keys(context.format).reduce((formats, format) => {\n      if (this.quill.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_4__[\"Scope\"].BLOCK) && !Array.isArray(context.format[format])) {\n        formats[format] = context.format[format];\n      }\n\n      return formats;\n    }, {});\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\n', lineFormats);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.focus();\n    Object.keys(context.format).forEach(name => {\n      if (lineFormats[name] != null) return;\n      if (Array.isArray(context.format[name])) return;\n      if (name === 'code' || name === 'link') return;\n      this.quill.format(name, context.format[name], _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    });\n  }\n\n}\n\nKeyboard.DEFAULTS = {\n  bindings: {\n    bold: makeFormatHandler('bold'),\n    italic: makeFormatHandler('italic'),\n    underline: makeFormatHandler('underline'),\n    indent: {\n      // highlight tab or tab at beginning of list, indent or blockquote\n      key: 'Tab',\n      format: ['blockquote', 'indent', 'list'],\n\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '+1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        return false;\n      }\n\n    },\n    outdent: {\n      key: 'Tab',\n      shiftKey: true,\n      format: ['blockquote', 'indent', 'list'],\n\n      // highlight tab or tab at beginning of list, indent or blockquote\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        return false;\n      }\n\n    },\n    'outdent backspace': {\n      key: 'Backspace',\n      collapsed: true,\n      shiftKey: null,\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null,\n      format: ['indent', 'list'],\n      offset: 0,\n\n      handler(range, context) {\n        if (context.format.indent != null) {\n          this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else if (context.format.list != null) {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      }\n\n    },\n    'indent code-block': makeCodeBlockHandler(true),\n    'outdent code-block': makeCodeBlockHandler(false),\n    'remove tab': {\n      key: 'Tab',\n      shiftKey: true,\n      collapsed: true,\n      prefix: /\\t$/,\n\n      handler(range) {\n        this.quill.deleteText(range.index - 1, 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    tab: {\n      key: 'Tab',\n\n      handler(range, context) {\n        if (context.format.table) return true;\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\t');\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        return false;\n      }\n\n    },\n    'blockquote empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['blockquote'],\n      empty: true,\n\n      handler() {\n        this.quill.format('blockquote', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    'list empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['list'],\n      empty: true,\n\n      handler(range, context) {\n        const formats = {\n          list: false\n        };\n\n        if (context.format.indent) {\n          formats.indent = false;\n        }\n\n        this.quill.formatLine(range.index, range.length, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    'checklist enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: {\n        list: 'checked'\n      },\n\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, line.formats(), {\n          list: 'checked'\n        });\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', formats).retain(line.length() - offset - 1).retain(1, {\n          list: 'unchecked'\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n\n    },\n    'header enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['header'],\n      suffix: /^$/,\n\n      handler(range, context) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', context.format).retain(line.length() - offset - 1).retain(1, {\n          header: null\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n\n    },\n    'table backspace': {\n      key: 'Backspace',\n      format: ['table'],\n      collapsed: true,\n      offset: 0,\n\n      handler() {}\n\n    },\n    'table delete': {\n      key: 'Delete',\n      format: ['table'],\n      collapsed: true,\n      suffix: /^$/,\n\n      handler() {}\n\n    },\n    'table enter': {\n      key: 'Enter',\n      shiftKey: null,\n      format: ['table'],\n\n      handler(range) {\n        const module = this.quill.getModule('table');\n\n        if (module) {\n          const [table, row, cell, offset] = module.getTable(range);\n          const shift = tableSide(table, row, cell, offset);\n          if (shift == null) return;\n          let index = table.offset();\n\n          if (shift < 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index + 1, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n          } else if (shift > 0) {\n            index += table.length();\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(index, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          }\n        }\n      }\n\n    },\n    'table tab': {\n      key: 'Tab',\n      shiftKey: null,\n      format: ['table'],\n\n      handler(range, context) {\n        const {\n          event,\n          line: cell\n        } = context;\n        const offset = cell.offset(this.quill.scroll);\n\n        if (event.shiftKey) {\n          this.quill.setSelection(offset - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(offset + cell.length(), _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      }\n\n    },\n    'list autofill': {\n      key: ' ',\n      shiftKey: null,\n      collapsed: true,\n      format: {\n        list: false,\n        'code-block': false,\n        blockquote: false,\n        header: false,\n        table: false\n      },\n      prefix: /^\\s*?(\\d+\\.|-|\\*|\\[ ?\\]|\\[x\\])$/,\n\n      handler(range, context) {\n        if (this.quill.scroll.query('list') == null) return true;\n        const {\n          length\n        } = context.prefix;\n        const [line, offset] = this.quill.getLine(range.index);\n        if (offset > length) return true;\n        let value;\n\n        switch (context.prefix.trim()) {\n          case '[]':\n          case '[ ]':\n            value = 'unchecked';\n            break;\n\n          case '[x]':\n            value = 'checked';\n            break;\n\n          case '-':\n          case '*':\n            value = 'bullet';\n            break;\n\n          default:\n            value = 'ordered';\n        }\n\n        this.quill.insertText(range.index, ' ', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {\n          list: value\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index - length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        return false;\n      }\n\n    },\n    'code exit': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['code-block'],\n      prefix: /^$/,\n      suffix: /^\\s*$/,\n\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        let numLines = 2;\n        let cur = line;\n\n        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {\n          cur = cur.prev;\n          numLines -= 1; // Requisite prev lines are empty\n\n          if (numLines <= 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - offset - 2).retain(1, {\n              'code-block': null\n            }).delete(1);\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n            return false;\n          }\n        }\n\n        return true;\n      }\n\n    },\n    'embed left': makeEmbedArrowHandler('ArrowLeft', false),\n    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),\n    'embed right': makeEmbedArrowHandler('ArrowRight', false),\n    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),\n    'table down': makeTableArrowHandler(false),\n    'table up': makeTableArrowHandler(true)\n  }\n};\n\nfunction makeCodeBlockHandler(indent) {\n  return {\n    key: 'Tab',\n    shiftKey: !indent,\n    format: {\n      'code-block': true\n    },\n\n    handler(range) {\n      const CodeBlock = this.quill.scroll.query('code-block');\n      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);\n      let {\n        index,\n        length\n      } = range;\n      lines.forEach((line, i) => {\n        if (indent) {\n          line.insertAt(0, CodeBlock.TAB);\n\n          if (i === 0) {\n            index += CodeBlock.TAB.length;\n          } else {\n            length += CodeBlock.TAB.length;\n          }\n        } else if (line.domNode.textContent.startsWith(CodeBlock.TAB)) {\n          line.deleteAt(0, CodeBlock.TAB.length);\n\n          if (i === 0) {\n            index -= CodeBlock.TAB.length;\n          } else {\n            length -= CodeBlock.TAB.length;\n          }\n        }\n      });\n      this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      this.quill.setSelection(index, length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    }\n\n  };\n}\n\nfunction makeEmbedArrowHandler(key, shiftKey) {\n  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';\n  return {\n    key,\n    shiftKey,\n    altKey: null,\n    [where]: /^$/,\n\n    handler(range) {\n      let {\n        index\n      } = range;\n\n      if (key === 'ArrowRight') {\n        index += range.length + 1;\n      }\n\n      const [leaf] = this.quill.getLeaf(index);\n      if (!(leaf instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"EmbedBlot\"])) return true;\n\n      if (key === 'ArrowLeft') {\n        if (shiftKey) {\n          this.quill.setSelection(range.index - 1, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      } else if (shiftKey) {\n        this.quill.setSelection(range.index, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      } else {\n        this.quill.setSelection(range.index + range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n      return false;\n    }\n\n  };\n}\n\nfunction makeFormatHandler(format) {\n  return {\n    key: format[0],\n    shortKey: true,\n\n    handler(range, context) {\n      this.quill.format(format, !context.format[format], _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    }\n\n  };\n}\n\nfunction makeTableArrowHandler(up) {\n  return {\n    key: up ? 'ArrowUp' : 'ArrowDown',\n    collapsed: true,\n    format: ['table'],\n\n    handler(range, context) {\n      // TODO move to table module\n      const key = up ? 'prev' : 'next';\n      const cell = context.line;\n      const targetRow = cell.parent[key];\n\n      if (targetRow != null) {\n        if (targetRow.statics.blotName === 'table-row') {\n          let targetCell = targetRow.children.head;\n          let cur = cell;\n\n          while (cur.prev != null) {\n            cur = cur.prev;\n            targetCell = targetCell.next;\n          }\n\n          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);\n          this.quill.setSelection(index, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      } else {\n        const targetLine = cell.table()[key];\n\n        if (targetLine != null) {\n          if (up) {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          } else {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          }\n        }\n      }\n\n      return false;\n    }\n\n  };\n}\n\nfunction normalize(binding) {\n  if (typeof binding === 'string' || typeof binding === 'number') {\n    binding = {\n      key: binding\n    };\n  } else if (typeof binding === 'object') {\n    binding = clone__WEBPACK_IMPORTED_MODULE_0___default()(binding, false);\n  } else {\n    return null;\n  }\n\n  if (binding.shortKey) {\n    binding[SHORTKEY] = binding.shortKey;\n    delete binding.shortKey;\n  }\n\n  return binding;\n}\n\nfunction tableSide(table, row, cell, offset) {\n  if (row.prev == null && row.next == null) {\n    if (cell.prev == null && cell.next == null) {\n      return offset === 0 ? -1 : 1;\n    }\n\n    return cell.prev == null ? -1 : 1;\n  }\n\n  if (row.prev == null) {\n    return -1;\n  }\n\n  if (row.next == null) {\n    return 1;\n  }\n\n  return null;\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/keyboard.js?");/***/},/***/"./modules/syntax.js":/*!***************************!*\
    !*** ./modules/syntax.js ***!
    \***************************/ /*! exports provided: CodeBlock, CodeToken, default */ /***/function modulesSyntaxJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlock\", function() { return SyntaxCodeBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeToken\", function() { return CodeToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Syntax; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clipboard */ \"./modules/clipboard.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst TokenAttributor = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"ClassAttributor\"]('code-token', 'hljs', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE\n});\n\nclass CodeToken extends _blots_inline__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static formats(node, scroll) {\n    while (node != null && node !== scroll.domNode) {\n      if (node.classList && node.classList.contains(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className)) {\n        return super.formats(node, scroll);\n      }\n\n      node = node.parentNode;\n    }\n\n    return undefined;\n  }\n\n  constructor(scroll, domNode, value) {\n    super(scroll, domNode, value);\n    TokenAttributor.add(this.domNode, value);\n  }\n\n  format(format, value) {\n    if (format !== CodeToken.blotName) {\n      super.format(format, value);\n    } else if (value) {\n      TokenAttributor.add(this.domNode, value);\n    } else {\n      TokenAttributor.remove(this.domNode);\n      this.domNode.classList.remove(this.statics.className);\n    }\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n\n    if (!TokenAttributor.value(this.domNode)) {\n      this.unwrap();\n    }\n  }\n\n}\n\nCodeToken.blotName = 'code-token';\nCodeToken.className = 'ql-token';\n\nclass SyntaxCodeBlock extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n\n    if (typeof value === 'string') {\n      domNode.setAttribute('data-language', value);\n    }\n\n    return domNode;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-language') || 'plain';\n  }\n\n  static register() {} // Syntax module will register\n\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-language', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  replaceWith(name, value) {\n    this.formatAt(0, this.length(), CodeToken.blotName, false);\n    return super.replaceWith(name, value);\n  }\n\n}\n\nclass SyntaxCodeBlockContainer extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"CodeBlockContainer\"] {\n  attach() {\n    super.attach();\n    this.forceNext = false;\n    this.scroll.emitMount(this);\n  }\n\n  format(name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n      this.children.forEach(child => {\n        child.format(name, value);\n      });\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n    }\n\n    super.formatAt(index, length, name, value);\n  }\n\n  highlight(highlight, forced = false) {\n    if (this.children.head == null) return;\n    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);\n    const text = \"\".concat(nodes.map(node => node.textContent).join('\\n'), \"\\n\");\n    const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n\n    if (forced || this.forceNext || this.cachedText !== text) {\n      if (text.trim().length > 0 || this.cachedText == null) {\n        const oldDelta = this.children.reduce((delta, child) => {\n          return delta.concat(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"blockDelta\"])(child, false));\n        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n        const delta = highlight(text, language);\n        oldDelta.diff(delta).reduce((index, {\n          retain,\n          attributes\n        }) => {\n          // Should be all retains\n          if (!retain) return index;\n\n          if (attributes) {\n            Object.keys(attributes).forEach(format => {\n              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {\n                this.formatAt(index, retain, format, attributes[format]);\n              }\n            });\n          }\n\n          return index + retain;\n        }, 0);\n      }\n\n      this.cachedText = text;\n      this.forceNext = false;\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.parent != null && this.children.head != null && this.uiNode != null) {\n      const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n\n      if (language !== this.uiNode.value) {\n        this.uiNode.value = language;\n      }\n    }\n  }\n\n}\n\nSyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];\nSyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;\nSyntaxCodeBlock.allowedChildren = [CodeToken, _blots_cursor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n\nclass Syntax extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(CodeToken, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlock, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlockContainer, true);\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n\n    if (this.options.hljs == null) {\n      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');\n    }\n\n    this.languages = this.options.languages.reduce((memo, {\n      key\n    }) => {\n      memo[key] = true;\n      return memo;\n    }, {});\n    this.highlightBlot = this.highlightBlot.bind(this);\n    this.initListener();\n    this.initTimer();\n  }\n\n  initListener() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BLOT_MOUNT, blot => {\n      if (!(blot instanceof SyntaxCodeBlockContainer)) return;\n      const select = this.quill.root.ownerDocument.createElement('select');\n      this.options.languages.forEach(({\n        key,\n        label\n      }) => {\n        const option = select.ownerDocument.createElement('option');\n        option.textContent = label;\n        option.setAttribute('value', key);\n        select.appendChild(option);\n      });\n      select.addEventListener('change', () => {\n        blot.format(SyntaxCodeBlock.blotName, select.value);\n        this.quill.root.focus(); // Prevent scrolling\n\n        this.highlight(blot, true);\n      });\n\n      if (blot.uiNode == null) {\n        blot.attachUI(select);\n\n        if (blot.children.head) {\n          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);\n        }\n      }\n    });\n  }\n\n  initTimer() {\n    let timer = null;\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      clearTimeout(timer);\n      timer = setTimeout(() => {\n        this.highlight();\n        timer = null;\n      }, this.options.interval);\n    });\n  }\n\n  highlight(blot = null, force = false) {\n    if (this.quill.selection.composing) return;\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    const range = this.quill.getSelection();\n    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];\n    blots.forEach(container => {\n      container.highlight(this.highlightBlot, force);\n    });\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n\n    if (range != null) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n    }\n  }\n\n  highlightBlot(text, language = 'plain') {\n    language = this.languages[language] ? language : 'plain';\n\n    if (language === 'plain') {\n      return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__[\"escapeText\"])(text).split('\\n').reduce((delta, line, i) => {\n        if (i !== 0) {\n          delta.insert('\\n', {\n            [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n          });\n        }\n\n        return delta.insert(line);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n    }\n\n    const container = this.quill.root.ownerDocument.createElement('div');\n    container.classList.add(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className);\n    container.innerHTML = this.options.hljs.highlight(language, text).value;\n    return Object(_clipboard__WEBPACK_IMPORTED_MODULE_10__[\"traverse\"])(this.quill.scroll, container, [(node, delta) => {\n      const value = TokenAttributor.value(node);\n\n      if (value) {\n        return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(delta.length(), {\n          [CodeToken.blotName]: value\n        }));\n      }\n\n      return delta;\n    }], [(node, delta) => {\n      return node.data.split('\\n').reduce((memo, nodeText, i) => {\n        if (i !== 0) memo.insert('\\n', {\n          [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n        });\n        return memo.insert(nodeText);\n      }, delta);\n    }], new WeakMap());\n  }\n\n}\n\nSyntax.DEFAULTS = {\n  hljs: (() => {\n    return window.hljs;\n  })(),\n  interval: 1000,\n  languages: [{\n    key: 'plain',\n    label: 'Plain'\n  }, {\n    key: 'bash',\n    label: 'Bash'\n  }, {\n    key: 'cpp',\n    label: 'C++'\n  }, {\n    key: 'cs',\n    label: 'C#'\n  }, {\n    key: 'css',\n    label: 'CSS'\n  }, {\n    key: 'diff',\n    label: 'Diff'\n  }, {\n    key: 'xml',\n    label: 'HTML/XML'\n  }, {\n    key: 'java',\n    label: 'Java'\n  }, {\n    key: 'javascript',\n    label: 'Javascript'\n  }, {\n    key: 'markdown',\n    label: 'Markdown'\n  }, {\n    key: 'php',\n    label: 'PHP'\n  }, {\n    key: 'python',\n    label: 'Python'\n  }, {\n    key: 'ruby',\n    label: 'Ruby'\n  }, {\n    key: 'sql',\n    label: 'SQL'\n  }]\n};\n\n\n//# sourceURL=webpack://Quill/./modules/syntax.js?");/***/},/***/"./modules/table.js":/*!**************************!*\
    !*** ./modules/table.js ***!
    \**************************/ /*! exports provided: default */ /***/function modulesTableJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/table */ \"./formats/table.js\");\n\n\n\n\n\nclass Table extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableRow\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableBody\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]);\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.listenBalanceCells();\n  }\n\n  balanceTables() {\n    this.quill.scroll.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]).forEach(table => {\n      table.balanceCells();\n    });\n  }\n\n  deleteColumn() {\n    const [table,, cell] = this.getTable();\n    if (cell == null) return;\n    table.deleteColumn(cell.cellOffset());\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n\n  deleteRow() {\n    const [, row] = this.getTable();\n    if (row == null) return;\n    row.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n\n  deleteTable() {\n    const [table] = this.getTable();\n    if (table == null) return;\n    const offset = table.offset();\n    table.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(offset, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n\n  getTable(range = this.quill.getSelection()) {\n    if (range == null) return [null, null, null, -1];\n    const [cell, offset] = this.quill.getLine(range.index);\n\n    if (cell == null || cell.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"].blotName) {\n      return [null, null, null, -1];\n    }\n\n    const row = cell.parent;\n    const table = row.parent.parent;\n    return [table, row, cell, offset];\n  }\n\n  insertColumn(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const column = cell.cellOffset();\n    table.insertColumn(column + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    let shift = row.rowOffset();\n\n    if (offset === 0) {\n      shift += 1;\n    }\n\n    this.quill.setSelection(range.index + shift, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n\n  insertColumnLeft() {\n    this.insertColumn(0);\n  }\n\n  insertColumnRight() {\n    this.insertColumn(1);\n  }\n\n  insertRow(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const index = row.rowOffset();\n    table.insertRow(index + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n\n    if (offset > 0) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    } else {\n      this.quill.setSelection(range.index + row.children.length, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    }\n  }\n\n  insertRowAbove() {\n    this.insertRow(0);\n  }\n\n  insertRowBelow() {\n    this.insertRow(1);\n  }\n\n  insertTable(rows, columns) {\n    const range = this.quill.getSelection();\n    if (range == null) return;\n    const delta = new Array(rows).fill(0).reduce(memo => {\n      const text = new Array(columns).fill('\\n').join('');\n      return memo.insert(text, {\n        table: Object(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"tableId\"])()\n      });\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index));\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    this.balanceTables();\n  }\n\n  listenBalanceCells() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations => {\n      mutations.some(mutation => {\n        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {\n          this.quill.once(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE, (delta, old, source) => {\n            if (source !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) return;\n            this.balanceTables();\n          });\n          return true;\n        }\n\n        return false;\n      });\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack://Quill/./modules/table.js?");/***/},/***/"./modules/toolbar.js":/*!****************************!*\
    !*** ./modules/toolbar.js ***!
    \****************************/ /*! exports provided: default, addControls */ /***/function modulesToolbarJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addControls\", function() { return addControls; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('quill:toolbar');\n\nclass Toolbar extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n\n    if (Array.isArray(this.options.container)) {\n      const container = document.createElement('div');\n      addControls(container, this.options.container);\n      quill.container.parentNode.insertBefore(container, quill.container);\n      this.container = container;\n    } else if (typeof this.options.container === 'string') {\n      this.container = document.querySelector(this.options.container);\n    } else {\n      this.container = this.options.container;\n    }\n\n    if (!(this.container instanceof HTMLElement)) {\n      return debug.error('Container required for toolbar', this.options);\n    }\n\n    this.container.classList.add('ql-toolbar');\n    this.controls = [];\n    this.handlers = {};\n    Object.keys(this.options.handlers).forEach(format => {\n      this.addHandler(format, this.options.handlers[format]);\n    });\n    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {\n      this.attach(input);\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.EDITOR_CHANGE, (type, range) => {\n      if (type === _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SELECTION_CHANGE) {\n        this.update(range);\n      }\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update\n\n      this.update(range);\n    });\n  }\n\n  addHandler(format, handler) {\n    this.handlers[format] = handler;\n  }\n\n  attach(input) {\n    let format = Array.from(input.classList).find(className => {\n      return className.indexOf('ql-') === 0;\n    });\n    if (!format) return;\n    format = format.slice('ql-'.length);\n\n    if (input.tagName === 'BUTTON') {\n      input.setAttribute('type', 'button');\n    }\n\n    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {\n      debug.warn('ignoring attaching to nonexistent format', format, input);\n      return;\n    }\n\n    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';\n    input.addEventListener(eventName, e => {\n      let value;\n\n      if (input.tagName === 'SELECT') {\n        if (input.selectedIndex < 0) return;\n        const selected = input.options[input.selectedIndex];\n\n        if (selected.hasAttribute('selected')) {\n          value = false;\n        } else {\n          value = selected.value || false;\n        }\n      } else {\n        if (input.classList.contains('ql-active')) {\n          value = false;\n        } else {\n          value = input.value || !input.hasAttribute('value');\n        }\n\n        e.preventDefault();\n      }\n\n      this.quill.focus();\n      const [range] = this.quill.selection.getRange();\n\n      if (this.handlers[format] != null) {\n        this.handlers[format].call(this, value);\n      } else if (this.quill.scroll.query(format).prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_1__[\"EmbedBlot\"]) {\n        value = prompt(\"Enter \".concat(format)); // eslint-disable-line no-alert\n\n        if (!value) return;\n        this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length).insert({\n          [format]: value\n        }), _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else {\n        this.quill.format(format, value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n\n      this.update(range);\n    });\n    this.controls.push([format, input]);\n  }\n\n  update(range) {\n    const formats = range == null ? {} : this.quill.getFormat(range);\n    this.controls.forEach(pair => {\n      const [format, input] = pair;\n\n      if (input.tagName === 'SELECT') {\n        let option;\n\n        if (range == null) {\n          option = null;\n        } else if (formats[format] == null) {\n          option = input.querySelector('option[selected]');\n        } else if (!Array.isArray(formats[format])) {\n          let value = formats[format];\n\n          if (typeof value === 'string') {\n            value = value.replace(/\"/g, '\\\\\"');\n          }\n\n          option = input.querySelector(\"option[value=\\\"\".concat(value, \"\\\"]\"));\n        }\n\n        if (option == null) {\n          input.value = ''; // TODO make configurable?\n\n          input.selectedIndex = -1;\n        } else {\n          option.selected = true;\n        }\n      } else if (range == null) {\n        input.classList.remove('ql-active');\n      } else if (input.hasAttribute('value')) {\n        // both being null should match (default values)\n        // '1' should match with 1 (headers)\n        const isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');\n        input.classList.toggle('ql-active', isActive);\n      } else {\n        input.classList.toggle('ql-active', formats[format] != null);\n      }\n    });\n  }\n\n}\n\nToolbar.DEFAULTS = {};\n\nfunction addButton(container, format, value) {\n  const input = document.createElement('button');\n  input.setAttribute('type', 'button');\n  input.classList.add(\"ql-\".concat(format));\n\n  if (value != null) {\n    input.value = value;\n  }\n\n  container.appendChild(input);\n}\n\nfunction addControls(container, groups) {\n  if (!Array.isArray(groups[0])) {\n    groups = [groups];\n  }\n\n  groups.forEach(controls => {\n    const group = document.createElement('span');\n    group.classList.add('ql-formats');\n    controls.forEach(control => {\n      if (typeof control === 'string') {\n        addButton(group, control);\n      } else {\n        const format = Object.keys(control)[0];\n        const value = control[format];\n\n        if (Array.isArray(value)) {\n          addSelect(group, format, value);\n        } else {\n          addButton(group, format, value);\n        }\n      }\n    });\n    container.appendChild(group);\n  });\n}\n\nfunction addSelect(container, format, values) {\n  const input = document.createElement('select');\n  input.classList.add(\"ql-\".concat(format));\n  values.forEach(value => {\n    const option = document.createElement('option');\n\n    if (value !== false) {\n      option.setAttribute('value', value);\n    } else {\n      option.setAttribute('selected', 'selected');\n    }\n\n    input.appendChild(option);\n  });\n  container.appendChild(input);\n}\n\nToolbar.DEFAULTS = {\n  container: null,\n  handlers: {\n    clean() {\n      const range = this.quill.getSelection();\n      if (range == null) return;\n\n      if (range.length === 0) {\n        const formats = this.quill.getFormat();\n        Object.keys(formats).forEach(name => {\n          // Clean functionality in existing apps only clean inline formats\n          if (this.quill.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE) != null) {\n            this.quill.format(name, false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n          }\n        });\n      } else {\n        this.quill.removeFormat(range, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n\n    direction(value) {\n      const {\n        align\n      } = this.quill.getFormat();\n\n      if (value === 'rtl' && align == null) {\n        this.quill.format('align', 'right', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else if (!value && align === 'right') {\n        this.quill.format('align', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n\n      this.quill.format('direction', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n\n    indent(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      const indent = parseInt(formats.indent || 0, 10);\n\n      if (value === '+1' || value === '-1') {\n        let modifier = value === '+1' ? 1 : -1;\n        if (formats.direction === 'rtl') modifier *= -1;\n        this.quill.format('indent', indent + modifier, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n\n    link(value) {\n      if (value === true) {\n        value = prompt('Enter link URL:'); // eslint-disable-line no-alert\n      }\n\n      this.quill.format('link', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n\n    list(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n\n      if (value === 'check') {\n        if (formats.list === 'checked' || formats.list === 'unchecked') {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        } else {\n          this.quill.format('list', 'unchecked', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        }\n      } else {\n        this.quill.format('list', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    }\n\n  }\n};\n\n\n//# sourceURL=webpack://Quill/./modules/toolbar.js?");/***/},/***/"./modules/uploader.js":/*!*****************************!*\
    !*** ./modules/uploader.js ***!
    \*****************************/ /*! exports provided: default */ /***/function modulesUploaderJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\nclass Uploader extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    quill.root.addEventListener('drop', e => {\n      e.preventDefault();\n      let native;\n\n      if (document.caretRangeFromPoint) {\n        native = document.caretRangeFromPoint(e.clientX, e.clientY);\n      } else if (document.caretPositionFromPoint) {\n        const position = document.caretPositionFromPoint(e.clientX, e.clientY);\n        native = document.createRange();\n        native.setStart(position.offsetNode, position.offset);\n        native.setEnd(position.offsetNode, position.offset);\n      } else {\n        return;\n      }\n\n      const normalized = quill.selection.normalizeNative(native);\n      const range = quill.selection.normalizedToRange(normalized);\n      this.upload(range, e.dataTransfer.files);\n    });\n  }\n\n  upload(range, files) {\n    const uploads = [];\n    Array.from(files).forEach(file => {\n      if (file && this.options.mimetypes.includes(file.type)) {\n        uploads.push(file);\n      }\n    });\n\n    if (uploads.length > 0) {\n      this.options.handler.call(this, range, uploads);\n    }\n  }\n\n}\n\nUploader.DEFAULTS = {\n  mimetypes: ['image/png', 'image/jpeg'],\n\n  handler(range, files) {\n    const promises = files.map(file => {\n      return new Promise(resolve => {\n        const reader = new FileReader();\n\n        reader.onload = e => {\n          resolve(e.target.result);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    });\n    Promise.all(promises).then(images => {\n      const update = images.reduce((delta, image) => {\n        return delta.insert({\n          image\n        });\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length));\n      this.quill.updateContents(update, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n      this.quill.setSelection(range.index + images.length, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    });\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploader);\n\n//# sourceURL=webpack://Quill/./modules/uploader.js?");/***/},/***/"./node_modules/array-filter/index.js":/*!********************************************!*\
    !*** ./node_modules/array-filter/index.js ***!
    \********************************************/ /*! no static exports found */ /***/function node_modulesArrayFilterIndexJs(module,exports){eval("\n/**\n * Array#filter.\n *\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object=} self\n * @return {Array}\n * @throw TypeError\n */\n\nmodule.exports = function (arr, fn, self) {\n  if (arr.filter) return arr.filter(fn, self);\n  if (void 0 === arr || null === arr) throw new TypeError;\n  if ('function' != typeof fn) throw new TypeError;\n  var ret = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (!hasOwn.call(arr, i)) continue;\n    var val = arr[i];\n    if (fn.call(self, val, i, arr)) ret.push(val);\n  }\n  return ret;\n};\n\nvar hasOwn = Object.prototype.hasOwnProperty;\n\n\n//# sourceURL=webpack://Quill/./node_modules/array-filter/index.js?");/***/},/***/"./node_modules/available-typed-arrays/index.js":/*!******************************************************!*\
    !*** ./node_modules/available-typed-arrays/index.js ***!
    \******************************************************/ /*! no static exports found */ /***/function node_modulesAvailableTypedArraysIndexJs(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar filter = __webpack_require__(/*! array-filter */ \"./node_modules/array-filter/index.js\");\n\nmodule.exports = function availableTypedArrays() {\n\treturn filter([\n\t\t'BigInt64Array',\n\t\t'BigUint64Array',\n\t\t'Float32Array',\n\t\t'Float64Array',\n\t\t'Int16Array',\n\t\t'Int32Array',\n\t\t'Int8Array',\n\t\t'Uint16Array',\n\t\t'Uint32Array',\n\t\t'Uint8Array',\n\t\t'Uint8ClampedArray'\n\t], function (typedArray) {\n\t\treturn typeof global[typedArray] === 'function';\n\t});\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/available-typed-arrays/index.js?");/***/},/***/"./node_modules/clone/clone.js":/*!*************************************!*\
    !*** ./node_modules/clone/clone.js ***!
    \*************************************/ /*! no static exports found */ /***/function node_modulesCloneCloneJs(module,exports){eval("var clone = (function() {\n'use strict';\n\nfunction _instanceof(obj, type) {\n  return type != null && obj instanceof type;\n}\n\nvar nativeMap;\ntry {\n  nativeMap = Map;\n} catch(_) {\n  // maybe a reference error because no `Map`. Give it a dummy value that no\n  // value will ever be an instanceof.\n  nativeMap = function() {};\n}\n\nvar nativeSet;\ntry {\n  nativeSet = Set;\n} catch(_) {\n  nativeSet = function() {};\n}\n\nvar nativePromise;\ntry {\n  nativePromise = Promise;\n} catch(_) {\n  nativePromise = function() {};\n}\n\n/**\n * Clones (copies) an Object using deep copying.\n *\n * This function supports circular references by default, but if you are certain\n * there are no circular references in your object, you can save some CPU time\n * by calling clone(obj, false).\n *\n * Caution: if `circular` is false and `parent` contains circular references,\n * your program may enter an infinite loop and crash.\n *\n * @param `parent` - the object to be cloned\n * @param `circular` - set to true if the object to be cloned may contain\n *    circular references. (optional - true by default)\n * @param `depth` - set to a number if the object is only to be cloned to\n *    a particular depth. (optional - defaults to Infinity)\n * @param `prototype` - sets the prototype to be used when cloning an object.\n *    (optional - defaults to parent prototype).\n * @param `includeNonEnumerable` - set to true if the non-enumerable properties\n *    should be cloned as well. Non-enumerable properties on the prototype\n *    chain will be ignored. (optional - false by default)\n*/\nfunction clone(parent, circular, depth, prototype, includeNonEnumerable) {\n  if (typeof circular === 'object') {\n    depth = circular.depth;\n    prototype = circular.prototype;\n    includeNonEnumerable = circular.includeNonEnumerable;\n    circular = circular.circular;\n  }\n  // maintain two arrays for circular references, where corresponding parents\n  // and children have the same index\n  var allParents = [];\n  var allChildren = [];\n\n  var useBuffer = typeof Buffer != 'undefined';\n\n  if (typeof circular == 'undefined')\n    circular = true;\n\n  if (typeof depth == 'undefined')\n    depth = Infinity;\n\n  // recurse this function so we don't reset allParents and allChildren\n  function _clone(parent, depth) {\n    // cloning null always returns null\n    if (parent === null)\n      return null;\n\n    if (depth === 0)\n      return parent;\n\n    var child;\n    var proto;\n    if (typeof parent != 'object') {\n      return parent;\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      child = new nativeMap();\n    } else if (_instanceof(parent, nativeSet)) {\n      child = new nativeSet();\n    } else if (_instanceof(parent, nativePromise)) {\n      child = new nativePromise(function (resolve, reject) {\n        parent.then(function(value) {\n          resolve(_clone(value, depth - 1));\n        }, function(err) {\n          reject(_clone(err, depth - 1));\n        });\n      });\n    } else if (clone.__isArray(parent)) {\n      child = [];\n    } else if (clone.__isRegExp(parent)) {\n      child = new RegExp(parent.source, __getRegExpFlags(parent));\n      if (parent.lastIndex) child.lastIndex = parent.lastIndex;\n    } else if (clone.__isDate(parent)) {\n      child = new Date(parent.getTime());\n    } else if (useBuffer && Buffer.isBuffer(parent)) {\n      if (Buffer.allocUnsafe) {\n        // Node.js >= 4.5.0\n        child = Buffer.allocUnsafe(parent.length);\n      } else {\n        // Older Node.js versions\n        child = new Buffer(parent.length);\n      }\n      parent.copy(child);\n      return child;\n    } else if (_instanceof(parent, Error)) {\n      child = Object.create(parent);\n    } else {\n      if (typeof prototype == 'undefined') {\n        proto = Object.getPrototypeOf(parent);\n        child = Object.create(proto);\n      }\n      else {\n        child = Object.create(prototype);\n        proto = prototype;\n      }\n    }\n\n    if (circular) {\n      var index = allParents.indexOf(parent);\n\n      if (index != -1) {\n        return allChildren[index];\n      }\n      allParents.push(parent);\n      allChildren.push(child);\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      parent.forEach(function(value, key) {\n        var keyChild = _clone(key, depth - 1);\n        var valueChild = _clone(value, depth - 1);\n        child.set(keyChild, valueChild);\n      });\n    }\n    if (_instanceof(parent, nativeSet)) {\n      parent.forEach(function(value) {\n        var entryChild = _clone(value, depth - 1);\n        child.add(entryChild);\n      });\n    }\n\n    for (var i in parent) {\n      var attrs;\n      if (proto) {\n        attrs = Object.getOwnPropertyDescriptor(proto, i);\n      }\n\n      if (attrs && attrs.set == null) {\n        continue;\n      }\n      child[i] = _clone(parent[i], depth - 1);\n    }\n\n    if (Object.getOwnPropertySymbols) {\n      var symbols = Object.getOwnPropertySymbols(parent);\n      for (var i = 0; i < symbols.length; i++) {\n        // Don't need to worry about cloning a symbol because it is a primitive,\n        // like a number or string.\n        var symbol = symbols[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);\n        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {\n          continue;\n        }\n        child[symbol] = _clone(parent[symbol], depth - 1);\n        if (!descriptor.enumerable) {\n          Object.defineProperty(child, symbol, {\n            enumerable: false\n          });\n        }\n      }\n    }\n\n    if (includeNonEnumerable) {\n      var allPropertyNames = Object.getOwnPropertyNames(parent);\n      for (var i = 0; i < allPropertyNames.length; i++) {\n        var propertyName = allPropertyNames[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);\n        if (descriptor && descriptor.enumerable) {\n          continue;\n        }\n        child[propertyName] = _clone(parent[propertyName], depth - 1);\n        Object.defineProperty(child, propertyName, {\n          enumerable: false\n        });\n      }\n    }\n\n    return child;\n  }\n\n  return _clone(parent, depth);\n}\n\n/**\n * Simple flat clone using prototype, accepts only objects, usefull for property\n * override on FLAT configuration object (no nested props).\n *\n * USE WITH CAUTION! This may not behave as you wish if you do not know how this\n * works.\n */\nclone.clonePrototype = function clonePrototype(parent) {\n  if (parent === null)\n    return null;\n\n  var c = function () {};\n  c.prototype = parent;\n  return new c();\n};\n\n// private utility functions\n\nfunction __objToStr(o) {\n  return Object.prototype.toString.call(o);\n}\nclone.__objToStr = __objToStr;\n\nfunction __isDate(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Date]';\n}\nclone.__isDate = __isDate;\n\nfunction __isArray(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Array]';\n}\nclone.__isArray = __isArray;\n\nfunction __isRegExp(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';\n}\nclone.__isRegExp = __isRegExp;\n\nfunction __getRegExpFlags(re) {\n  var flags = '';\n  if (re.global) flags += 'g';\n  if (re.ignoreCase) flags += 'i';\n  if (re.multiline) flags += 'm';\n  return flags;\n}\nclone.__getRegExpFlags = __getRegExpFlags;\n\nreturn clone;\n})();\n\nif (typeof module === 'object' && module.exports) {\n  module.exports = clone;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/clone/clone.js?");/***/},/***/"./node_modules/deep-equal/index.js":/*!******************************************!*\
    !*** ./node_modules/deep-equal/index.js ***!
    \******************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualIndexJs(module,exports,__webpack_require__){eval("\n\nvar objectKeys = __webpack_require__(/*! object-keys */ \"./node_modules/deep-equal/node_modules/object-keys/index.js\");\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar is = __webpack_require__(/*! object-is */ \"./node_modules/object-is/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/deep-equal/node_modules/is-regex/index.js\");\nvar flags = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/deep-equal/node_modules/isarray/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/deep-equal/node_modules/is-date-object/index.js\");\nvar whichBoxedPrimitive = __webpack_require__(/*! which-boxed-primitive */ \"./node_modules/which-boxed-primitive/index.js\");\nvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js\");\nvar whichCollection = __webpack_require__(/*! which-collection */ \"./node_modules/which-collection/index.js\");\nvar getIterator = __webpack_require__(/*! es-get-iterator */ \"./node_modules/es-get-iterator/index.js\");\nvar getSideChannel = __webpack_require__(/*! side-channel */ \"./node_modules/side-channel/index.js\");\nvar whichTypedArray = __webpack_require__(/*! which-typed-array */ \"./node_modules/which-typed-array/index.js\");\nvar assign = __webpack_require__(/*! object.assign */ \"./node_modules/object.assign/index.js\");\n\nvar $getTime = callBound('Date.prototype.getTime');\nvar gPO = Object.getPrototypeOf;\nvar $objToString = callBound('Object.prototype.toString');\n\nvar $Set = GetIntrinsic('%Set%', true);\nvar $mapHas = callBound('Map.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSize = callBound('Map.prototype.size', true);\nvar $setAdd = callBound('Set.prototype.add', true);\nvar $setDelete = callBound('Set.prototype.delete', true);\nvar $setHas = callBound('Set.prototype.has', true);\nvar $setSize = callBound('Set.prototype.size', true);\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414\nfunction setHasEqualElement(set, val1, opts, channel) {\n  var i = getIterator(set);\n  var result;\n  while ((result = i.next()) && !result.done) {\n    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define\n      // Remove the matching element to make sure we do not check that again.\n      $setDelete(set, result.value);\n      return true;\n    }\n  }\n\n  return false;\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439\nfunction findLooseMatchingPrimitives(prim) {\n  if (typeof prim === 'undefined') {\n    return null;\n  }\n  if (typeof prim === 'object') { // Only pass in null as object!\n    return void 0;\n  }\n  if (typeof prim === 'symbol') {\n    return false;\n  }\n  if (typeof prim === 'string' || typeof prim === 'number') {\n    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.\n    return +prim === +prim; // eslint-disable-line no-implicit-coercion\n  }\n  return true;\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460\nfunction mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {\n  var altValue = findLooseMatchingPrimitives(prim);\n  if (altValue != null) {\n    return altValue;\n  }\n  var curB = $mapGet(b, altValue);\n  var looseOpts = assign({}, opts, { strict: false });\n  if (\n    (typeof curB === 'undefined' && !$mapHas(b, altValue))\n    // eslint-disable-next-line no-use-before-define\n    || !internalDeepEqual(item, curB, looseOpts, channel)\n  ) {\n    return false;\n  }\n  // eslint-disable-next-line no-use-before-define\n  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447\nfunction setMightHaveLoosePrim(a, b, prim) {\n  var altValue = findLooseMatchingPrimitives(prim);\n  if (altValue != null) {\n    return altValue;\n  }\n\n  return $setHas(b, altValue) && !$setHas(a, altValue);\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533\nfunction mapHasEqualEntry(set, map, key1, item1, opts, channel) {\n  var i = getIterator(set);\n  var result;\n  var key2;\n  while ((result = i.next()) && !result.done) {\n    key2 = result.value;\n    if (\n      // eslint-disable-next-line no-use-before-define\n      internalDeepEqual(key1, key2, opts, channel)\n      // eslint-disable-next-line no-use-before-define\n      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)\n    ) {\n      $setDelete(set, key2);\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction internalDeepEqual(actual, expected, options, channel) {\n  var opts = options || {};\n\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (opts.strict ? is(actual, expected) : actual === expected) {\n    return true;\n  }\n\n  var actualBoxed = whichBoxedPrimitive(actual);\n  var expectedBoxed = whichBoxedPrimitive(expected);\n  if (actualBoxed !== expectedBoxed) {\n    return false;\n  }\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.\n  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {\n    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq\n  }\n\n  /*\n   * 7.4. For all other Object pairs, including Array objects, equivalence is\n   * determined by having the same number of owned properties (as verified\n   * with Object.prototype.hasOwnProperty.call), the same set of keys\n   * (although not necessarily the same order), equivalent values for every\n   * corresponding key, and an identical 'prototype' property. Note: this\n   * accounts for both named and indexed properties on Arrays.\n   */\n  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration\n\n  var hasActual = channel.has(actual);\n  var hasExpected = channel.has(expected);\n  var sentinel;\n  if (hasActual && hasExpected) {\n    if (channel.get(actual) === channel.get(expected)) {\n      return true;\n    }\n  } else {\n    sentinel = {};\n  }\n  if (!hasActual) { channel.set(actual, sentinel); }\n  if (!hasExpected) { channel.set(expected, sentinel); }\n\n  // eslint-disable-next-line no-use-before-define\n  return objEquiv(actual, expected, opts, channel);\n}\n\nfunction isBuffer(x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {\n    return false;\n  }\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') {\n    return false;\n  }\n\n  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));\n}\n\nfunction setEquiv(a, b, opts, channel) {\n  if ($setSize(a) !== $setSize(b)) {\n    return false;\n  }\n  var iA = getIterator(a);\n  var iB = getIterator(b);\n  var resultA;\n  var resultB;\n  var set;\n  while ((resultA = iA.next()) && !resultA.done) {\n    if (resultA.value && typeof resultA.value === 'object') {\n      if (!set) { set = new $Set(); }\n      $setAdd(set, resultA.value);\n    } else if (!$setHas(b, resultA.value)) {\n      if (opts.strict) { return false; }\n      if (!setMightHaveLoosePrim(a, b, resultA.value)) {\n        return false;\n      }\n      if (!set) { set = new $Set(); }\n      $setAdd(set, resultA.value);\n    }\n  }\n  if (set) {\n    while ((resultB = iB.next()) && !resultB.done) {\n      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.\n      if (resultB.value && typeof resultB.value === 'object') {\n        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {\n          return false;\n        }\n      } else if (\n        !opts.strict\n        && !$setHas(a, resultB.value)\n        && !setHasEqualElement(set, resultB.value, opts.strict, channel)\n      ) {\n        return false;\n      }\n    }\n    return $setSize(set) === 0;\n  }\n  return true;\n}\n\nfunction mapEquiv(a, b, opts, channel) {\n  if ($mapSize(a) !== $mapSize(b)) {\n    return false;\n  }\n  var iA = getIterator(a);\n  var iB = getIterator(b);\n  var resultA;\n  var resultB;\n  var set;\n  var key;\n  var item1;\n  var item2;\n  while ((resultA = iA.next()) && !resultA.done) {\n    key = resultA.value[0];\n    item1 = resultA.value[1];\n    if (key && typeof key === 'object') {\n      if (!set) { set = new $Set(); }\n      $setAdd(set, key);\n    } else {\n      item2 = $mapGet(b, key);\n      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {\n        if (opts.strict) {\n          return false;\n        }\n        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {\n          return false;\n        }\n        if (!set) { set = new $Set(); }\n        $setAdd(set, key);\n      }\n    }\n  }\n\n  if (set) {\n    while ((resultB = iB.next()) && !resultB.done) {\n      key = resultB.value[0];\n      item2 = resultB.value[1];\n      if (key && typeof key === 'object') {\n        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {\n          return false;\n        }\n      } else if (\n        !opts.strict\n        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))\n        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)\n      ) {\n        return false;\n      }\n    }\n    return $setSize(set) === 0;\n  }\n  return true;\n}\n\nfunction objEquiv(a, b, opts, channel) {\n  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */\n  var i, key;\n\n  if (typeof a !== typeof b) { return false; }\n  if (a == null || b == null) { return false; }\n\n  if ($objToString(a) !== $objToString(b)) { return false; }\n\n  if (isArguments(a) !== isArguments(b)) { return false; }\n\n  var aIsArray = isArray(a);\n  var bIsArray = isArray(b);\n  if (aIsArray !== bIsArray) { return false; }\n\n  // TODO: replace when a cross-realm brand check is available\n  var aIsError = a instanceof Error;\n  var bIsError = b instanceof Error;\n  if (aIsError !== bIsError) { return false; }\n  if (aIsError || bIsError) {\n    if (a.name !== b.name || a.message !== b.message) { return false; }\n  }\n\n  var aIsRegex = isRegex(a);\n  var bIsRegex = isRegex(b);\n  if (aIsRegex !== bIsRegex) { return false; }\n  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {\n    return false;\n  }\n\n  var aIsDate = isDate(a);\n  var bIsDate = isDate(b);\n  if (aIsDate !== bIsDate) { return false; }\n  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here\n    if ($getTime(a) !== $getTime(b)) { return false; }\n  }\n  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }\n\n  if (whichTypedArray(a) !== whichTypedArray(b)) {\n    return false;\n  }\n\n  var aIsBuffer = isBuffer(a);\n  var bIsBuffer = isBuffer(b);\n  if (aIsBuffer !== bIsBuffer) { return false; }\n  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here\n    if (a.length !== b.length) { return false; }\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) { return false; }\n    }\n    return true;\n  }\n\n  if (typeof a !== typeof b) { return false; }\n\n  var ka = objectKeys(a);\n  var kb = objectKeys(b);\n  // having the same number of owned properties (keys incorporates hasOwnProperty)\n  if (ka.length !== kb.length) { return false; }\n\n  // the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  // ~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq\n  }\n\n  // equivalent values for every corresponding key, and ~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }\n  }\n\n  var aCollection = whichCollection(a);\n  var bCollection = whichCollection(b);\n  if (aCollection !== bCollection) {\n    return false;\n  }\n  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection\n    return setEquiv(a, b, opts, channel);\n  }\n  if (aCollection === 'Map') { // aCollection === bCollection\n    return mapEquiv(a, b, opts, channel);\n  }\n\n  return true;\n}\n\nmodule.exports = function deepEqual(a, b, opts) {\n  return internalDeepEqual(a, b, opts, getSideChannel());\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/index.js?");/***/},/***/"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js":/*!**************************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js ***!
    \**************************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesEsAbstractGetIntrinsicJs(module,exports,__webpack_require__){eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js?");/***/},/***/"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js":/*!******************************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js ***!
    \******************************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesEsAbstractHelpersCallBindJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js?");/***/},/***/"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js":/*!*******************************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js ***!
    \*******************************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesEsAbstractHelpersCallBoundJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js?");/***/},/***/"./node_modules/deep-equal/node_modules/is-date-object/index.js":/*!**********************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/is-date-object/index.js ***!
    \**********************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesIsDateObjectIndexJs(module,exports,__webpack_require__){eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateGetDayCall(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-date-object/index.js?");/***/},/***/"./node_modules/deep-equal/node_modules/is-regex/index.js":/*!****************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/is-regex/index.js ***!
    \****************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesIsRegexIndexJs(module,exports,__webpack_require__){eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar regexExec = RegExp.prototype.exec;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar tryRegexExecCall = function tryRegexExec(value) {\n\ttry {\n\t\tvar lastIndex = value.lastIndex;\n\t\tvalue.lastIndex = 0; // eslint-disable-line no-param-reassign\n\n\t\tregexExec.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t} finally {\n\t\tvalue.lastIndex = lastIndex; // eslint-disable-line no-param-reassign\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar regexClass = '[object RegExp]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isRegex(value) {\n\tif (!value || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\tif (!hasToStringTag) {\n\t\treturn toStr.call(value) === regexClass;\n\t}\n\n\tvar descriptor = gOPD(value, 'lastIndex');\n\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\tif (!hasLastIndexDataProperty) {\n\t\treturn false;\n\t}\n\n\treturn tryRegexExecCall(value);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-regex/index.js?");/***/},/***/"./node_modules/deep-equal/node_modules/isarray/index.js":/*!***************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/isarray/index.js ***!
    \***************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesIsarrayIndexJs(module,exports){eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/isarray/index.js?");/***/},/***/"./node_modules/deep-equal/node_modules/object-keys/implementation.js":/*!****************************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/object-keys/implementation.js ***!
    \****************************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesObjectKeysImplementationJs(module,exports,__webpack_require__){eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/deep-equal/node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/implementation.js?");/***/},/***/"./node_modules/deep-equal/node_modules/object-keys/index.js":/*!*******************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/object-keys/index.js ***!
    \*******************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesObjectKeysIndexJs(module,exports,__webpack_require__){eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/deep-equal/node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/deep-equal/node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/index.js?");/***/},/***/"./node_modules/deep-equal/node_modules/object-keys/isArguments.js":/*!*************************************************************************!*\
    !*** ./node_modules/deep-equal/node_modules/object-keys/isArguments.js ***!
    \*************************************************************************/ /*! no static exports found */ /***/function node_modulesDeepEqualNode_modulesObjectKeysIsArgumentsJs(module,exports,__webpack_require__){eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/isArguments.js?");/***/},/***/"./node_modules/define-properties/index.js":/*!*************************************************!*\
    !*** ./node_modules/define-properties/index.js ***!
    \*************************************************/ /*! no static exports found */ /***/function node_modulesDefinePropertiesIndexJs(module,exports,__webpack_require__){eval("\n\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar origDefineProperty = Object.defineProperty;\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar arePropertyDescriptorsSupported = function () {\n\tvar obj = {};\n\ttry {\n\t\torigDefineProperty(obj, 'x', { enumerable: false, value: obj });\n\t\t// eslint-disable-next-line no-unused-vars, no-restricted-syntax\n\t\tfor (var _ in obj) { // jscs:ignore disallowUnusedVariables\n\t\t\treturn false;\n\t\t}\n\t\treturn obj.x === obj;\n\t} catch (e) { /* this is IE 8. */\n\t\treturn false;\n\t}\n};\nvar supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object && (!isFunction(predicate) || !predicate())) {\n\t\treturn;\n\t}\n\tif (supportsDescriptors) {\n\t\torigDefineProperty(object, name, {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tvalue: value,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\tobject[name] = value;\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n\n\n//# sourceURL=webpack://Quill/./node_modules/define-properties/index.js?");/***/},/***/"./node_modules/es-get-iterator/index.js":/*!***********************************************!*\
    !*** ./node_modules/es-get-iterator/index.js ***!
    \***********************************************/ /*! no static exports found */ /***/function node_modulesEsGetIteratorIndexJs(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n/* eslint global-require: 0 */\n// the code is structured this way so that bundlers can\n// alias out `has-symbols` to `() => true` or `() => false` if your target\n// environments' Symbol capabilities are known, and then use\n// dead code elimination on the rest of this module.\n//\n// Similarly, `isarray` can be aliased to `Array.isArray` if\n// available in all target environments.\n\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\n\nif (__webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")() || __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")()) {\n\tvar $iterator = Symbol.iterator;\n\t// Symbol is available natively or shammed\n\t// natively:\n\t//  - Chrome >= 38\n\t//  - Edge 12-14?, Edge >= 15 for sure\n\t//  - FF >= 36\n\t//  - Safari >= 9\n\t//  - node >= 0.12\n\tmodule.exports = function getIterator(iterable) {\n\t\t// alternatively, `iterable[$iterator]?.()`\n\t\tif (iterable != null && typeof iterable[$iterator] !== 'undefined') {\n\t\t\treturn iterable[$iterator]();\n\t\t}\n\t\tif (isArguments(iterable)) {\n\t\t\t// arguments objects lack Symbol.iterator\n\t\t\t// - node 0.12\n\t\t\treturn Array.prototype[$iterator].call(iterable);\n\t\t}\n\t};\n} else {\n\t// Symbol is not available, native or shammed\n\tvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/es-get-iterator/node_modules/isarray/index.js\");\n\tvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\n\tvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\tvar $Map = GetIntrinsic('%Map%', true);\n\tvar $Set = GetIntrinsic('%Set%', true);\n\tvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js\");\n\tvar $arrayPush = callBound('Array.prototype.push');\n\tvar $charCodeAt = callBound('String.prototype.charCodeAt');\n\tvar $stringSlice = callBound('String.prototype.slice');\n\n\tvar advanceStringIndex = function advanceStringIndex(S, index) {\n\t\tvar length = S.length;\n\t\tif ((index + 1) >= length) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar first = $charCodeAt(S, index);\n\t\tif (first < 0xD800 || first > 0xDBFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar second = $charCodeAt(S, index + 1);\n\t\tif (second < 0xDC00 || second > 0xDFFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\treturn index + 2;\n\t};\n\n\tvar getArrayIterator = function getArrayIterator(arraylike) {\n\t\tvar i = 0;\n\t\treturn {\n\t\t\tnext: function next() {\n\t\t\t\tvar done = i >= arraylike.length;\n\t\t\t\tvar value;\n\t\t\t\tif (!done) {\n\t\t\t\t\tvalue = arraylike[i];\n\t\t\t\t\ti += 1;\n\t\t\t\t}\n\t\t\t\treturn {\n\t\t\t\t\tdone: done,\n\t\t\t\t\tvalue: value\n\t\t\t\t};\n\t\t\t}\n\t\t};\n\t};\n\n\tvar getNonCollectionIterator = function getNonCollectionIterator(iterable) {\n\t\tif (isArray(iterable) || isArguments(iterable)) {\n\t\t\treturn getArrayIterator(iterable);\n\t\t}\n\t\tif (isString(iterable)) {\n\t\t\tvar i = 0;\n\t\t\treturn {\n\t\t\t\tnext: function next() {\n\t\t\t\t\tvar nextIndex = advanceStringIndex(iterable, i);\n\t\t\t\t\tvar value = $stringSlice(iterable, i, nextIndex);\n\t\t\t\t\ti = nextIndex;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tdone: nextIndex > iterable.length,\n\t\t\t\t\t\tvalue: value\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t};\n\n\tif (!$Map && !$Set) {\n\t\t// the only language iterables are Array, String, arguments\n\t\t// - Safari <= 6.0\n\t\t// - Chrome < 38\n\t\t// - node < 0.12\n\t\t// - FF < 13\n\t\t// - IE < 11\n\t\t// - Edge < 11\n\n\t\tmodule.exports = getNonCollectionIterator;\n\t} else {\n\t\t// either Map or Set are available, but Symbol is not\n\t\t// - es6-shim on an ES5 browser\n\t\t// - Safari 6.2 (maybe 6.1?)\n\t\t// - FF v[13, 36)\n\t\t// - IE 11\n\t\t// - Edge 11\n\t\t// - Safari v[6, 9)\n\n\t\tvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\n\t\tvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\n\n\t\t// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach\n\t\tvar $mapForEach = callBound('Map.prototype.forEach', true);\n\t\tvar $setForEach = callBound('Set.prototype.forEach', true);\n\t\tif (typeof process === 'undefined' || !process.versions || !process.versions.node) { // \"if is not node\"\n\n\t\t\t// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either\n\t\t\t// returns a value, or throws a StopIteration object. These browsers\n\t\t\t// do not have any other mechanism for iteration.\n\t\t\tvar $mapIterator = callBound('Map.prototype.iterator', true);\n\t\t\tvar $setIterator = callBound('Set.prototype.iterator', true);\n\t\t\tvar getStopIterationIterator = function (iterator) {\n\t\t\t\tvar done = false;\n\t\t\t\treturn {\n\t\t\t\t\tnext: function next() {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tdone: done,\n\t\t\t\t\t\t\t\tvalue: done ? undefined : iterator.next()\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\tdone = true;\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tdone: true,\n\t\t\t\t\t\t\t\tvalue: undefined\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t};\n\t\t}\n\t\t// Firefox 27-35, and some older es6-shim versions, use a string \"@@iterator\" property\n\t\t// this returns a proper iterator object, so we should use it instead of forEach.\n\t\t// newer es6-shim versions use a string \"_es6-shim iterator_\" property.\n\t\tvar $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);\n\t\tvar $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);\n\n\t\tvar getCollectionIterator = function getCollectionIterator(iterable) {\n\t\t\tif (isMap(iterable)) {\n\t\t\t\tif ($mapIterator) {\n\t\t\t\t\treturn getStopIterationIterator($mapIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($mapAtAtIterator) {\n\t\t\t\t\treturn $mapAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($mapForEach) {\n\t\t\t\t\tvar entries = [];\n\t\t\t\t\t$mapForEach(iterable, function (v, k) {\n\t\t\t\t\t\t$arrayPush(entries, [k, v]);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(entries);\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (isSet(iterable)) {\n\t\t\t\tif ($setIterator) {\n\t\t\t\t\treturn getStopIterationIterator($setIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($setAtAtIterator) {\n\t\t\t\t\treturn $setAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($setForEach) {\n\t\t\t\t\tvar values = [];\n\t\t\t\t\t$setForEach(iterable, function (v) {\n\t\t\t\t\t\t$arrayPush(values, v);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(values);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tmodule.exports = function getIterator(iterable) {\n\t\t\treturn getCollectionIterator(iterable) || getNonCollectionIterator(iterable);\n\t\t};\n\t}\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/index.js?");/***/},/***/"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js":/*!*******************************************************************************!*\
    !*** ./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js ***!
    \*******************************************************************************/ /*! no static exports found */ /***/function node_modulesEsGetIteratorNode_modulesEsAbstractGetIntrinsicJs(module,exports,__webpack_require__){eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js?");/***/},/***/"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js":/*!***********************************************************************************!*\
    !*** ./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js ***!
    \***********************************************************************************/ /*! no static exports found */ /***/function node_modulesEsGetIteratorNode_modulesEsAbstractHelpersCallBindJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js?");/***/},/***/"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js":/*!************************************************************************************!*\
    !*** ./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js ***!
    \************************************************************************************/ /*! no static exports found */ /***/function node_modulesEsGetIteratorNode_modulesEsAbstractHelpersCallBoundJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js?");/***/},/***/"./node_modules/es-get-iterator/node_modules/isarray/index.js":/*!********************************************************************!*\
    !*** ./node_modules/es-get-iterator/node_modules/isarray/index.js ***!
    \********************************************************************/ /*! no static exports found */ /***/function node_modulesEsGetIteratorNode_modulesIsarrayIndexJs(module,exports){eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/isarray/index.js?");/***/},/***/"./node_modules/eventemitter3/index.js":/*!*********************************************!*\
    !*** ./node_modules/eventemitter3/index.js ***!
    \*********************************************/ /*! no static exports found */ /***/function node_modulesEventemitter3IndexJs(module,exports){eval("'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Add a listener for a given event.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} once Specify if the listener is a one-time listener.\n * @returns {EventEmitter}\n * @private\n */\nfunction addListener(emitter, event, fn, context, once) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('The listener must be a function');\n  }\n\n  var listener = new EE(fn, context || emitter, once)\n    , evt = prefix ? prefix + event : event;\n\n  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;\n  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);\n  else emitter._events[evt] = [emitter._events[evt], listener];\n\n  return emitter;\n}\n\n/**\n * Clear event by name.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} evt The Event name.\n * @private\n */\nfunction clearEvent(emitter, evt) {\n  if (--emitter._eventsCount === 0) emitter._events = new Events();\n  else delete emitter._events[evt];\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Array} The registered listeners.\n * @public\n */\nEventEmitter.prototype.listeners = function listeners(event) {\n  var evt = prefix ? prefix + event : event\n    , handlers = this._events[evt];\n\n  if (!handlers) return [];\n  if (handlers.fn) return [handlers.fn];\n\n  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {\n    ee[i] = handlers[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Return the number of listeners listening to a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Number} The number of listeners.\n * @public\n */\nEventEmitter.prototype.listenerCount = function listenerCount(event) {\n  var evt = prefix ? prefix + event : event\n    , listeners = this._events[evt];\n\n  if (!listeners) return 0;\n  if (listeners.fn) return 1;\n  return listeners.length;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  return addListener(this, event, fn, context, false);\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  return addListener(this, event, fn, context, true);\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {*} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    clearEvent(this, evt);\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n      listeners.fn === fn &&\n      (!once || listeners.once) &&\n      (!context || listeners.context === context)\n    ) {\n      clearEvent(this, evt);\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n        listeners[i].fn !== fn ||\n        (once && !listeners[i].once) ||\n        (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else clearEvent(this, evt);\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {(String|Symbol)} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) clearEvent(this, evt);\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif ('undefined' !== typeof module) {\n  module.exports = EventEmitter;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/eventemitter3/index.js?");/***/},/***/"./node_modules/extend/index.js":/*!**************************************!*\
    !*** ./node_modules/extend/index.js ***!
    \**************************************/ /*! no static exports found */ /***/function node_modulesExtendIndexJs(module,exports){eval("'use strict';\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n\tif (typeof Array.isArray === 'function') {\n\t\treturn Array.isArray(arr);\n\t}\n\n\treturn toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n\tif (!obj || toStr.call(obj) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tvar hasOwnConstructor = hasOwn.call(obj, 'constructor');\n\tvar hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');\n\t// Not own constructor property must be Object\n\tif (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n\t\treturn false;\n\t}\n\n\t// Own properties are enumerated firstly, so to speed up,\n\t// if last one is own, then all properties are own.\n\tvar key;\n\tfor (key in obj) { /**/ }\n\n\treturn typeof key === 'undefined' || hasOwn.call(obj, key);\n};\n\n// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\nvar setProperty = function setProperty(target, options) {\n\tif (defineProperty && options.name === '__proto__') {\n\t\tdefineProperty(target, options.name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\t\t\tvalue: options.newValue,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\ttarget[options.name] = options.newValue;\n\t}\n};\n\n// Return undefined instead of __proto__ if '__proto__' is not an own property\nvar getProperty = function getProperty(obj, name) {\n\tif (name === '__proto__') {\n\t\tif (!hasOwn.call(obj, name)) {\n\t\t\treturn void 0;\n\t\t} else if (gOPD) {\n\t\t\t// In early versions of node, obj['__proto__'] is buggy when obj has\n\t\t\t// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n\t\t\treturn gOPD(obj, name).value;\n\t\t}\n\t}\n\n\treturn obj[name];\n};\n\nmodule.exports = function extend() {\n\tvar options, name, src, copy, copyIsArray, clone;\n\tvar target = arguments[0];\n\tvar i = 1;\n\tvar length = arguments.length;\n\tvar deep = false;\n\n\t// Handle a deep copy situation\n\tif (typeof target === 'boolean') {\n\t\tdeep = target;\n\t\ttarget = arguments[1] || {};\n\t\t// skip the boolean and the target\n\t\ti = 2;\n\t}\n\tif (target == null || (typeof target !== 'object' && typeof target !== 'function')) {\n\t\ttarget = {};\n\t}\n\n\tfor (; i < length; ++i) {\n\t\toptions = arguments[i];\n\t\t// Only deal with non-null/undefined values\n\t\tif (options != null) {\n\t\t\t// Extend the base object\n\t\t\tfor (name in options) {\n\t\t\t\tsrc = getProperty(target, name);\n\t\t\t\tcopy = getProperty(options, name);\n\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif (target !== copy) {\n\t\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\t\tif (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && isArray(src) ? src : [];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: extend(deep, clone, copy) });\n\n\t\t\t\t\t// Don't bring in undefined values\n\t\t\t\t\t} else if (typeof copy !== 'undefined') {\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: copy });\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/extend/index.js?");/***/},/***/"./node_modules/fast-diff/diff.js":/*!****************************************!*\
    !*** ./node_modules/fast-diff/diff.js ***!
    \****************************************/ /*! no static exports found */ /***/function node_modulesFastDiffDiffJs(module,exports){eval("/**\n * This library modifies the diff-patch-match library by Neil Fraser\n * by removing the patch and match functionality and certain advanced\n * options in the diff function. The original license is as follows:\n *\n * ===\n *\n * Diff Match and Patch\n *\n * Copyright 2006 Google Inc.\n * http://code.google.com/p/google-diff-match-patch/\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/**\n * The data structure representing a diff is an array of tuples:\n * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]\n * which means: delete 'Hello', add 'Goodbye' and keep ' world.'\n */\nvar DIFF_DELETE = -1;\nvar DIFF_INSERT = 1;\nvar DIFF_EQUAL = 0;\n\n\n/**\n * Find the differences between two texts.  Simplifies the problem by stripping\n * any common prefix or suffix off the texts before diffing.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info\n * @return {Array} Array of diff tuples.\n */\nfunction diff_main(text1, text2, cursor_pos, _fix_unicode) {\n  // Check for equality\n  if (text1 === text2) {\n    if (text1) {\n      return [[DIFF_EQUAL, text1]];\n    }\n    return [];\n  }\n\n  if (cursor_pos != null) {\n    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);\n    if (editdiff) {\n      return editdiff;\n    }\n  }\n\n  // Trim off common prefix (speedup).\n  var commonlength = diff_commonPrefix(text1, text2);\n  var commonprefix = text1.substring(0, commonlength);\n  text1 = text1.substring(commonlength);\n  text2 = text2.substring(commonlength);\n\n  // Trim off common suffix (speedup).\n  commonlength = diff_commonSuffix(text1, text2);\n  var commonsuffix = text1.substring(text1.length - commonlength);\n  text1 = text1.substring(0, text1.length - commonlength);\n  text2 = text2.substring(0, text2.length - commonlength);\n\n  // Compute the diff on the middle block.\n  var diffs = diff_compute_(text1, text2);\n\n  // Restore the prefix and suffix.\n  if (commonprefix) {\n    diffs.unshift([DIFF_EQUAL, commonprefix]);\n  }\n  if (commonsuffix) {\n    diffs.push([DIFF_EQUAL, commonsuffix]);\n  }\n  diff_cleanupMerge(diffs, _fix_unicode);\n  return diffs;\n};\n\n\n/**\n * Find the differences between two texts.  Assumes that the texts do not\n * have any common prefix or suffix.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_compute_(text1, text2) {\n  var diffs;\n\n  if (!text1) {\n    // Just add some text (speedup).\n    return [[DIFF_INSERT, text2]];\n  }\n\n  if (!text2) {\n    // Just delete some text (speedup).\n    return [[DIFF_DELETE, text1]];\n  }\n\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  var i = longtext.indexOf(shorttext);\n  if (i !== -1) {\n    // Shorter text is inside the longer text (speedup).\n    diffs = [\n      [DIFF_INSERT, longtext.substring(0, i)],\n      [DIFF_EQUAL, shorttext],\n      [DIFF_INSERT, longtext.substring(i + shorttext.length)]\n    ];\n    // Swap insertions for deletions if diff is reversed.\n    if (text1.length > text2.length) {\n      diffs[0][0] = diffs[2][0] = DIFF_DELETE;\n    }\n    return diffs;\n  }\n\n  if (shorttext.length === 1) {\n    // Single character string.\n    // After the previous speedup, the character can't be an equality.\n    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n  }\n\n  // Check to see if the problem can be split in two.\n  var hm = diff_halfMatch_(text1, text2);\n  if (hm) {\n    // A half-match was found, sort out the return data.\n    var text1_a = hm[0];\n    var text1_b = hm[1];\n    var text2_a = hm[2];\n    var text2_b = hm[3];\n    var mid_common = hm[4];\n    // Send both pairs off for separate processing.\n    var diffs_a = diff_main(text1_a, text2_a);\n    var diffs_b = diff_main(text1_b, text2_b);\n    // Merge the results.\n    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);\n  }\n\n  return diff_bisect_(text1, text2);\n};\n\n\n/**\n * Find the 'middle snake' of a diff, split the problem in two\n * and return the recursively constructed diff.\n * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n * @private\n */\nfunction diff_bisect_(text1, text2) {\n  // Cache the text lengths to prevent multiple calls.\n  var text1_length = text1.length;\n  var text2_length = text2.length;\n  var max_d = Math.ceil((text1_length + text2_length) / 2);\n  var v_offset = max_d;\n  var v_length = 2 * max_d;\n  var v1 = new Array(v_length);\n  var v2 = new Array(v_length);\n  // Setting all elements to -1 is faster in Chrome & Firefox than mixing\n  // integers and undefined.\n  for (var x = 0; x < v_length; x++) {\n    v1[x] = -1;\n    v2[x] = -1;\n  }\n  v1[v_offset + 1] = 0;\n  v2[v_offset + 1] = 0;\n  var delta = text1_length - text2_length;\n  // If the total number of characters is odd, then the front path will collide\n  // with the reverse path.\n  var front = (delta % 2 !== 0);\n  // Offsets for start and end of k loop.\n  // Prevents mapping of space beyond the grid.\n  var k1start = 0;\n  var k1end = 0;\n  var k2start = 0;\n  var k2end = 0;\n  for (var d = 0; d < max_d; d++) {\n    // Walk the front path one step.\n    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {\n      var k1_offset = v_offset + k1;\n      var x1;\n      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {\n        x1 = v1[k1_offset + 1];\n      } else {\n        x1 = v1[k1_offset - 1] + 1;\n      }\n      var y1 = x1 - k1;\n      while (\n        x1 < text1_length && y1 < text2_length &&\n        text1.charAt(x1) === text2.charAt(y1)\n      ) {\n        x1++;\n        y1++;\n      }\n      v1[k1_offset] = x1;\n      if (x1 > text1_length) {\n        // Ran off the right of the graph.\n        k1end += 2;\n      } else if (y1 > text2_length) {\n        // Ran off the bottom of the graph.\n        k1start += 2;\n      } else if (front) {\n        var k2_offset = v_offset + delta - k1;\n        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {\n          // Mirror x2 onto top-left coordinate system.\n          var x2 = text1_length - v2[k2_offset];\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n\n    // Walk the reverse path one step.\n    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {\n      var k2_offset = v_offset + k2;\n      var x2;\n      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {\n        x2 = v2[k2_offset + 1];\n      } else {\n        x2 = v2[k2_offset - 1] + 1;\n      }\n      var y2 = x2 - k2;\n      while (\n        x2 < text1_length && y2 < text2_length &&\n        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)\n      ) {\n        x2++;\n        y2++;\n      }\n      v2[k2_offset] = x2;\n      if (x2 > text1_length) {\n        // Ran off the left of the graph.\n        k2end += 2;\n      } else if (y2 > text2_length) {\n        // Ran off the top of the graph.\n        k2start += 2;\n      } else if (!front) {\n        var k1_offset = v_offset + delta - k2;\n        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {\n          var x1 = v1[k1_offset];\n          var y1 = v_offset + x1 - k1_offset;\n          // Mirror x2 onto top-left coordinate system.\n          x2 = text1_length - x2;\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n  }\n  // Diff took too long and hit the deadline or\n  // number of diffs equals number of characters, no commonality at all.\n  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n};\n\n\n/**\n * Given the location of the 'middle snake', split the diff in two parts\n * and recurse.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {number} x Index of split point in text1.\n * @param {number} y Index of split point in text2.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_bisectSplit_(text1, text2, x, y) {\n  var text1a = text1.substring(0, x);\n  var text2a = text2.substring(0, y);\n  var text1b = text1.substring(x);\n  var text2b = text2.substring(y);\n\n  // Compute both diffs serially.\n  var diffs = diff_main(text1a, text2a);\n  var diffsb = diff_main(text1b, text2b);\n\n  return diffs.concat(diffsb);\n};\n\n\n/**\n * Determine the common prefix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the start of each\n *     string.\n */\nfunction diff_commonPrefix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerstart = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(pointerstart, pointermid) ==\n      text2.substring(pointerstart, pointermid)\n    ) {\n      pointermin = pointermid;\n      pointerstart = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Determine the common suffix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the end of each string.\n */\nfunction diff_commonSuffix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerend = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(text1.length - pointermid, text1.length - pointerend) ==\n      text2.substring(text2.length - pointermid, text2.length - pointerend)\n    ) {\n      pointermin = pointermid;\n      pointerend = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Do the two texts share a substring which is at least half the length of the\n * longer text?\n * This speedup can produce non-minimal diffs.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {Array.<string>} Five element Array, containing the prefix of\n *     text1, the suffix of text1, the prefix of text2, the suffix of\n *     text2 and the common middle.  Or null if there was no match.\n */\nfunction diff_halfMatch_(text1, text2) {\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {\n    return null;  // Pointless.\n  }\n\n  /**\n   * Does a substring of shorttext exist within longtext such that the substring\n   * is at least half the length of longtext?\n   * Closure, but does not reference any external variables.\n   * @param {string} longtext Longer string.\n   * @param {string} shorttext Shorter string.\n   * @param {number} i Start index of quarter length substring within longtext.\n   * @return {Array.<string>} Five element Array, containing the prefix of\n   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix\n   *     of shorttext and the common middle.  Or null if there was no match.\n   * @private\n   */\n  function diff_halfMatchI_(longtext, shorttext, i) {\n    // Start with a 1/4 length substring at position i as a seed.\n    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));\n    var j = -1;\n    var best_common = '';\n    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;\n    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {\n      var prefixLength = diff_commonPrefix(\n        longtext.substring(i), shorttext.substring(j));\n      var suffixLength = diff_commonSuffix(\n        longtext.substring(0, i), shorttext.substring(0, j));\n      if (best_common.length < suffixLength + prefixLength) {\n        best_common = shorttext.substring(\n          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);\n        best_longtext_a = longtext.substring(0, i - suffixLength);\n        best_longtext_b = longtext.substring(i + prefixLength);\n        best_shorttext_a = shorttext.substring(0, j - suffixLength);\n        best_shorttext_b = shorttext.substring(j + prefixLength);\n      }\n    }\n    if (best_common.length * 2 >= longtext.length) {\n      return [\n        best_longtext_a, best_longtext_b,\n        best_shorttext_a, best_shorttext_b, best_common\n      ];\n    } else {\n      return null;\n    }\n  }\n\n  // First check if the second quarter is the seed for a half-match.\n  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));\n  // Check again based on the third quarter.\n  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));\n  var hm;\n  if (!hm1 && !hm2) {\n    return null;\n  } else if (!hm2) {\n    hm = hm1;\n  } else if (!hm1) {\n    hm = hm2;\n  } else {\n    // Both matched.  Select the longest.\n    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;\n  }\n\n  // A half-match was found, sort out the return data.\n  var text1_a, text1_b, text2_a, text2_b;\n  if (text1.length > text2.length) {\n    text1_a = hm[0];\n    text1_b = hm[1];\n    text2_a = hm[2];\n    text2_b = hm[3];\n  } else {\n    text2_a = hm[0];\n    text2_b = hm[1];\n    text1_a = hm[2];\n    text1_b = hm[3];\n  }\n  var mid_common = hm[4];\n  return [text1_a, text1_b, text2_a, text2_b, mid_common];\n};\n\n\n/**\n * Reorder and merge like edit sections.  Merge equalities.\n * Any edit section can move as long as it doesn't cross an equality.\n * @param {Array} diffs Array of diff tuples.\n * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff\n */\nfunction diff_cleanupMerge(diffs, fix_unicode) {\n  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.\n  var pointer = 0;\n  var count_delete = 0;\n  var count_insert = 0;\n  var text_delete = '';\n  var text_insert = '';\n  var commonlength;\n  while (pointer < diffs.length) {\n    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n      diffs.splice(pointer, 1);\n      continue;\n    }\n    switch (diffs[pointer][0]) {\n      case DIFF_INSERT:\n\n        count_insert++;\n        text_insert += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_DELETE:\n        count_delete++;\n        text_delete += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_EQUAL:\n        var previous_equality = pointer - count_insert - count_delete - 1;\n        if (fix_unicode) {\n          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,\n          // we assume that the old and new text in the diff are complete and correct\n          // unicode-encoded JS strings, but the tuple boundaries may fall between\n          // surrogate pairs.  we fix this by shaving off stray surrogates from the end\n          // of the previous equality and the beginning of this equality.  this may create\n          // empty equalities or a common prefix or suffix.  for example, if AB and AC are\n          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and\n          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this\n          // particular case, both equalities go away, we absorb any previous inequalities,\n          // and we keep scanning for the next equality before rewriting the tuples.\n          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {\n            var stray = diffs[previous_equality][1].slice(-1);\n            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);\n            text_delete = stray + text_delete;\n            text_insert = stray + text_insert;\n            if (!diffs[previous_equality][1]) {\n              // emptied out previous equality, so delete it and include previous delete/insert\n              diffs.splice(previous_equality, 1);\n              pointer--;\n              var k = previous_equality - 1;\n              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {\n                count_insert++;\n                text_insert = diffs[k][1] + text_insert;\n                k--;\n              }\n              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {\n                count_delete++;\n                text_delete = diffs[k][1] + text_delete;\n                k--;\n              }\n              previous_equality = k;\n            }\n          }\n          if (starts_with_pair_end(diffs[pointer][1])) {\n            var stray = diffs[pointer][1].charAt(0);\n            diffs[pointer][1] = diffs[pointer][1].slice(1);\n            text_delete += stray;\n            text_insert += stray;\n          }\n        }\n        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n          // for empty equality not at end, wait for next equality\n          diffs.splice(pointer, 1);\n          break;\n        }\n        if (text_delete.length > 0 || text_insert.length > 0) {\n          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware\n          if (text_delete.length > 0 && text_insert.length > 0) {\n            // Factor out any common prefixes.\n            commonlength = diff_commonPrefix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              if (previous_equality >= 0) {\n                diffs[previous_equality][1] += text_insert.substring(0, commonlength);\n              } else {\n                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);\n                pointer++;\n              }\n              text_insert = text_insert.substring(commonlength);\n              text_delete = text_delete.substring(commonlength);\n            }\n            // Factor out any common suffixes.\n            commonlength = diff_commonSuffix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              diffs[pointer][1] =\n                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];\n              text_insert = text_insert.substring(0, text_insert.length - commonlength);\n              text_delete = text_delete.substring(0, text_delete.length - commonlength);\n            }\n          }\n          // Delete the offending records and add the merged ones.\n          var n = count_insert + count_delete;\n          if (text_delete.length === 0 && text_insert.length === 0) {\n            diffs.splice(pointer - n, n);\n            pointer = pointer - n;\n          } else if (text_delete.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 1;\n          } else if (text_insert.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);\n            pointer = pointer - n + 1;\n          } else {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 2;\n          }\n        }\n        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {\n          // Merge this equality with the previous one.\n          diffs[pointer - 1][1] += diffs[pointer][1];\n          diffs.splice(pointer, 1);\n        } else {\n          pointer++;\n        }\n        count_insert = 0;\n        count_delete = 0;\n        text_delete = '';\n        text_insert = '';\n        break;\n    }\n  }\n  if (diffs[diffs.length - 1][1] === '') {\n    diffs.pop();  // Remove the dummy entry at the end.\n  }\n\n  // Second pass: look for single edits surrounded on both sides by equalities\n  // which can be shifted sideways to eliminate an equality.\n  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC\n  var changes = false;\n  pointer = 1;\n  // Intentionally ignore the first and last element (don't need checking).\n  while (pointer < diffs.length - 1) {\n    if (diffs[pointer - 1][0] === DIFF_EQUAL &&\n      diffs[pointer + 1][0] === DIFF_EQUAL) {\n      // This is a single edit surrounded by equalities.\n      if (diffs[pointer][1].substring(diffs[pointer][1].length -\n        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {\n        // Shift the edit over the previous equality.\n        diffs[pointer][1] = diffs[pointer - 1][1] +\n          diffs[pointer][1].substring(0, diffs[pointer][1].length -\n            diffs[pointer - 1][1].length);\n        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];\n        diffs.splice(pointer - 1, 1);\n        changes = true;\n      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==\n        diffs[pointer + 1][1]) {\n        // Shift the edit over the next equality.\n        diffs[pointer - 1][1] += diffs[pointer + 1][1];\n        diffs[pointer][1] =\n          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +\n          diffs[pointer + 1][1];\n        diffs.splice(pointer + 1, 1);\n        changes = true;\n      }\n    }\n    pointer++;\n  }\n  // If shifts were made, the diff needs reordering and another shift sweep.\n  if (changes) {\n    diff_cleanupMerge(diffs, fix_unicode);\n  }\n};\n\nfunction is_surrogate_pair_start(charCode) {\n  return charCode >= 0xD800 && charCode <= 0xDBFF;\n}\n\nfunction is_surrogate_pair_end(charCode) {\n  return charCode >= 0xDC00 && charCode <= 0xDFFF;\n}\n\nfunction starts_with_pair_end(str) {\n  return is_surrogate_pair_end(str.charCodeAt(0));\n}\n\nfunction ends_with_pair_start(str) {\n  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));\n}\n\nfunction remove_empty_tuples(tuples) {\n  var ret = [];\n  for (var i = 0; i < tuples.length; i++) {\n    if (tuples[i][1].length > 0) {\n      ret.push(tuples[i]);\n    }\n  }\n  return ret;\n}\n\nfunction make_edit_splice(before, oldMiddle, newMiddle, after) {\n  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {\n    return null;\n  }\n  return remove_empty_tuples([\n    [DIFF_EQUAL, before],\n    [DIFF_DELETE, oldMiddle],\n    [DIFF_INSERT, newMiddle],\n    [DIFF_EQUAL, after]\n  ]);\n}\n\nfunction find_cursor_edit_diff(oldText, newText, cursor_pos) {\n  // note: this runs after equality check has ruled out exact equality\n  var oldRange = typeof cursor_pos === 'number' ?\n    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;\n  var newRange = typeof cursor_pos === 'number' ?\n    null : cursor_pos.newRange;\n  // take into account the old and new selection to generate the best diff\n  // possible for a text edit.  for example, a text change from \"xxx\" to \"xx\"\n  // could be a delete or forwards-delete of any one of the x's, or the\n  // result of selecting two of the x's and typing \"x\".\n  var oldLength = oldText.length;\n  var newLength = newText.length;\n  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {\n    // see if we have an insert or delete before or after cursor\n    var oldCursor = oldRange.index;\n    var oldBefore = oldText.slice(0, oldCursor);\n    var oldAfter = oldText.slice(oldCursor);\n    var maybeNewCursor = newRange ? newRange.index : null;\n    editBefore: {\n      // is this an insert or delete right before oldCursor?\n      var newCursor = oldCursor + newLength - oldLength;\n      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {\n        break editBefore;\n      }\n      if (newCursor < 0 || newCursor > newLength) {\n        break editBefore;\n      }\n      var newBefore = newText.slice(0, newCursor);\n      var newAfter = newText.slice(newCursor);\n      if (newAfter !== oldAfter) {\n        break editBefore;\n      }\n      var prefixLength = Math.min(oldCursor, newCursor);\n      var oldPrefix = oldBefore.slice(0, prefixLength);\n      var newPrefix = newBefore.slice(0, prefixLength);\n      if (oldPrefix !== newPrefix) {\n        break editBefore;\n      }\n      var oldMiddle = oldBefore.slice(prefixLength);\n      var newMiddle = newBefore.slice(prefixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);\n    }\n    editAfter: {\n      // is this an insert or delete right after oldCursor?\n      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {\n        break editAfter;\n      }\n      var cursor = oldCursor;\n      var newBefore = newText.slice(0, cursor);\n      var newAfter = newText.slice(cursor);\n      if (newBefore !== oldBefore) {\n        break editAfter;\n      }\n      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);\n      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);\n      var newSuffix = newAfter.slice(newAfter.length - suffixLength);\n      if (oldSuffix !== newSuffix) {\n        break editAfter;\n      }\n      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);\n      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);\n      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n  if (oldRange.length > 0 && newRange && newRange.length === 0) {\n    replaceRange: {\n      // see if diff could be a splice of the old selection range\n      var oldPrefix = oldText.slice(0, oldRange.index);\n      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);\n      var prefixLength = oldPrefix.length;\n      var suffixLength = oldSuffix.length;\n      if (newLength < prefixLength + suffixLength) {\n        break replaceRange;\n      }\n      var newPrefix = newText.slice(0, prefixLength);\n      var newSuffix = newText.slice(newLength - suffixLength);\n      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {\n        break replaceRange;\n      }\n      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);\n      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n\n  return null;\n}\n\nfunction diff(text1, text2, cursor_pos) {\n  // only pass fix_unicode=true at the top level, not when diff_main is\n  // recursively invoked\n  return diff_main(text1, text2, cursor_pos, true);\n}\n\ndiff.INSERT = DIFF_INSERT;\ndiff.DELETE = DIFF_DELETE;\ndiff.EQUAL = DIFF_EQUAL;\n\nmodule.exports = diff;\n\n\n//# sourceURL=webpack://Quill/./node_modules/fast-diff/diff.js?");/***/},/***/"./node_modules/foreach/index.js":/*!***************************************!*\
    !*** ./node_modules/foreach/index.js ***!
    \***************************************/ /*! no static exports found */ /***/function node_modulesForeachIndexJs(module,exports){eval("\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toString = Object.prototype.toString;\n\nmodule.exports = function forEach (obj, fn, ctx) {\n    if (toString.call(fn) !== '[object Function]') {\n        throw new TypeError('iterator must be a function');\n    }\n    var l = obj.length;\n    if (l === +l) {\n        for (var i = 0; i < l; i++) {\n            fn.call(ctx, obj[i], i, obj);\n        }\n    } else {\n        for (var k in obj) {\n            if (hasOwn.call(obj, k)) {\n                fn.call(ctx, obj[k], k, obj);\n            }\n        }\n    }\n};\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/foreach/index.js?");/***/},/***/"./node_modules/function-bind/implementation.js":/*!******************************************************!*\
    !*** ./node_modules/function-bind/implementation.js ***!
    \******************************************************/ /*! no static exports found */ /***/function node_modulesFunctionBindImplementationJs(module,exports,__webpack_require__){eval("\n\n/* eslint no-invalid-this: 1 */\n\nvar ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';\nvar slice = Array.prototype.slice;\nvar toStr = Object.prototype.toString;\nvar funcType = '[object Function]';\n\nmodule.exports = function bind(that) {\n    var target = this;\n    if (typeof target !== 'function' || toStr.call(target) !== funcType) {\n        throw new TypeError(ERROR_MESSAGE + target);\n    }\n    var args = slice.call(arguments, 1);\n\n    var bound;\n    var binder = function () {\n        if (this instanceof bound) {\n            var result = target.apply(\n                this,\n                args.concat(slice.call(arguments))\n            );\n            if (Object(result) === result) {\n                return result;\n            }\n            return this;\n        } else {\n            return target.apply(\n                that,\n                args.concat(slice.call(arguments))\n            );\n        }\n    };\n\n    var boundLength = Math.max(0, target.length - args.length);\n    var boundArgs = [];\n    for (var i = 0; i < boundLength; i++) {\n        boundArgs.push('$' + i);\n    }\n\n    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);\n\n    if (target.prototype) {\n        var Empty = function Empty() {};\n        Empty.prototype = target.prototype;\n        bound.prototype = new Empty();\n        Empty.prototype = null;\n    }\n\n    return bound;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/function-bind/implementation.js?");/***/},/***/"./node_modules/function-bind/index.js":/*!*********************************************!*\
    !*** ./node_modules/function-bind/index.js ***!
    \*********************************************/ /*! no static exports found */ /***/function node_modulesFunctionBindIndexJs(module,exports,__webpack_require__){eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/function-bind/implementation.js\");\n\nmodule.exports = Function.prototype.bind || implementation;\n\n\n//# sourceURL=webpack://Quill/./node_modules/function-bind/index.js?");/***/},/***/"./node_modules/has-symbols/index.js":/*!*******************************************!*\
    !*** ./node_modules/has-symbols/index.js ***!
    \*******************************************/ /*! no static exports found */ /***/function node_modulesHasSymbolsIndexJs(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar origSymbol = global.Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/has-symbols/index.js?");/***/},/***/"./node_modules/has-symbols/shams.js":/*!*******************************************!*\
    !*** ./node_modules/has-symbols/shams.js ***!
    \*******************************************/ /*! no static exports found */ /***/function node_modulesHasSymbolsShamsJs(module,exports,__webpack_require__){eval("\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/has-symbols/shams.js?");/***/},/***/"./node_modules/has/src/index.js":/*!***************************************!*\
    !*** ./node_modules/has/src/index.js ***!
    \***************************************/ /*! no static exports found */ /***/function node_modulesHasSrcIndexJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nmodule.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);\n\n\n//# sourceURL=webpack://Quill/./node_modules/has/src/index.js?");/***/},/***/"./node_modules/is-arguments/index.js":/*!********************************************!*\
    !*** ./node_modules/is-arguments/index.js ***!
    \********************************************/ /*! no static exports found */ /***/function node_modulesIsArgumentsIndexJs(module,exports,__webpack_require__){eval("\n\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\nvar toStr = Object.prototype.toString;\n\nvar isStandardArguments = function isArguments(value) {\n\tif (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {\n\t\treturn false;\n\t}\n\treturn toStr.call(value) === '[object Arguments]';\n};\n\nvar isLegacyArguments = function isArguments(value) {\n\tif (isStandardArguments(value)) {\n\t\treturn true;\n\t}\n\treturn value !== null &&\n\t\ttypeof value === 'object' &&\n\t\ttypeof value.length === 'number' &&\n\t\tvalue.length >= 0 &&\n\t\ttoStr.call(value) !== '[object Array]' &&\n\t\ttoStr.call(value.callee) === '[object Function]';\n};\n\nvar supportsStandardArguments = (function () {\n\treturn isStandardArguments(arguments);\n}());\n\nisStandardArguments.isLegacyArguments = isLegacyArguments; // for tests\n\nmodule.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-arguments/index.js?");/***/},/***/"./node_modules/is-bigint/index.js":/*!*****************************************!*\
    !*** ./node_modules/is-bigint/index.js ***!
    \*****************************************/ /*! no static exports found */ /***/function node_modulesIsBigintIndexJs(module,exports,__webpack_require__){eval("\n\nif (typeof BigInt === 'function') {\n\tvar bigIntValueOf = BigInt.prototype.valueOf;\n\tvar tryBigInt = function tryBigIntObject(value) {\n\t\ttry {\n\t\t\tbigIntValueOf.call(value);\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t}\n\t\treturn false;\n\t};\n\n\tmodule.exports = function isBigInt(value) {\n\t\tif (\n\t\t\tvalue === null\n\t\t\t|| typeof value === 'undefined'\n\t\t\t|| typeof value === 'boolean'\n\t\t\t|| typeof value === 'string'\n\t\t\t|| typeof value === 'number'\n\t\t\t|| typeof value === 'symbol'\n\t\t\t|| typeof value === 'function'\n\t\t) {\n\t\t\treturn false;\n\t\t}\n\t\tif (typeof value === 'bigint') { // eslint-disable-line valid-typeof\n\t\t\treturn true;\n\t\t}\n\n\t\treturn tryBigInt(value);\n\t};\n} else {\n\tmodule.exports = function isBigInt(value) {\n\t\treturn  false && false;\n\t};\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-bigint/index.js?");/***/},/***/"./node_modules/is-boolean-object/index.js":/*!*************************************************!*\
    !*** ./node_modules/is-boolean-object/index.js ***!
    \*************************************************/ /*! no static exports found */ /***/function node_modulesIsBooleanObjectIndexJs(module,exports,__webpack_require__){eval("\n\nvar boolToStr = Boolean.prototype.toString;\n\nvar tryBooleanObject = function booleanBrandCheck(value) {\n\ttry {\n\t\tboolToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar boolClass = '[object Boolean]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isBoolean(value) {\n\tif (typeof value === 'boolean') {\n\t\treturn true;\n\t}\n\tif (value === null || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-boolean-object/index.js?");/***/},/***/"./node_modules/is-date-object/index.js":/*!**********************************************!*\
    !*** ./node_modules/is-date-object/index.js ***!
    \**********************************************/ /*! no static exports found */ /***/function node_modulesIsDateObjectIndexJs(module,exports,__webpack_require__){eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateObject(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) { return false; }\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-date-object/index.js?");/***/},/***/"./node_modules/is-map/index.js":/*!**************************************!*\
    !*** ./node_modules/is-map/index.js ***!
    \**************************************/ /*! no static exports found */ /***/function node_modulesIsMapIndexJs(module,exports,__webpack_require__){eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Map) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$mapHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Map; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-map/index.js?");/***/},/***/"./node_modules/is-number-object/index.js":/*!************************************************!*\
    !*** ./node_modules/is-number-object/index.js ***!
    \************************************************/ /*! no static exports found */ /***/function node_modulesIsNumberObjectIndexJs(module,exports,__webpack_require__){eval("\n\nvar numToStr = Number.prototype.toString;\nvar tryNumberObject = function tryNumberObject(value) {\n\ttry {\n\t\tnumToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar numClass = '[object Number]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isNumberObject(value) {\n\tif (typeof value === 'number') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-number-object/index.js?");/***/},/***/"./node_modules/is-regex/index.js":/*!****************************************!*\
    !*** ./node_modules/is-regex/index.js ***!
    \****************************************/ /*! no static exports found */ /***/function node_modulesIsRegexIndexJs(module,exports,__webpack_require__){eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar regexExec = RegExp.prototype.exec;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar tryRegexExecCall = function tryRegexExec(value) {\n\ttry {\n\t\tvar lastIndex = value.lastIndex;\n\t\tvalue.lastIndex = 0;\n\n\t\tregexExec.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t} finally {\n\t\tvalue.lastIndex = lastIndex;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar regexClass = '[object RegExp]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isRegex(value) {\n\tif (!value || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\tif (!hasToStringTag) {\n\t\treturn toStr.call(value) === regexClass;\n\t}\n\n\tvar descriptor = gOPD(value, 'lastIndex');\n\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\tif (!hasLastIndexDataProperty) {\n\t\treturn false;\n\t}\n\n\treturn tryRegexExecCall(value);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-regex/index.js?");/***/},/***/"./node_modules/is-set/index.js":/*!**************************************!*\
    !*** ./node_modules/is-set/index.js ***!
    \**************************************/ /*! no static exports found */ /***/function node_modulesIsSetIndexJs(module,exports,__webpack_require__){eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Set) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Set; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-set/index.js?");/***/},/***/"./node_modules/is-string/index.js":/*!*****************************************!*\
    !*** ./node_modules/is-string/index.js ***!
    \*****************************************/ /*! no static exports found */ /***/function node_modulesIsStringIndexJs(module,exports,__webpack_require__){eval("\n\nvar strValue = String.prototype.valueOf;\nvar tryStringObject = function tryStringObject(value) {\n\ttry {\n\t\tstrValue.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar strClass = '[object String]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isString(value) {\n\tif (typeof value === 'string') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-string/index.js?");/***/},/***/"./node_modules/is-typed-array/index.js":/*!**********************************************!*\
    !*** ./node_modules/is-typed-array/index.js ***!
    \**********************************************/ /*! no static exports found */ /***/function node_modulesIsTypedArrayIndexJs(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar forEach = __webpack_require__(/*! foreach */ \"./node_modules/foreach/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"./node_modules/available-typed-arrays/index.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';\n\nvar typedArrays = availableTypedArrays();\n\nvar $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {\n\tfor (var i = 0; i < array.length; i += 1) {\n\t\tif (array[i] === value) {\n\t\t\treturn i;\n\t\t}\n\t}\n\treturn -1;\n};\nvar $slice = callBound('String.prototype.slice');\nvar toStrTags = {};\nvar gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js\");\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tvar arr = new global[typedArray]();\n\t\tif (!(Symbol.toStringTag in arr)) {\n\t\t\tthrow new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');\n\t\t}\n\t\tvar proto = getPrototypeOf(arr);\n\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\tif (!descriptor) {\n\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t}\n\t\ttoStrTags[typedArray] = descriptor.get;\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar anyTrue = false;\n\tforEach(toStrTags, function (getter, typedArray) {\n\t\tif (!anyTrue) {\n\t\t\ttry {\n\t\t\t\tanyTrue = getter.call(value) === typedArray;\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t});\n\treturn anyTrue;\n};\n\nmodule.exports = function isTypedArray(value) {\n\tif (!value || typeof value !== 'object') { return false; }\n\tif (!hasToStringTag) {\n\t\tvar tag = $slice($toString(value), 8, -1);\n\t\treturn $indexOf(typedArrays, tag) > -1;\n\t}\n\tif (!gOPD) { return false; }\n\treturn tryTypedArrays(value);\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/index.js?");/***/},/***/"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js":/*!******************************************************************************!*\
    !*** ./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js ***!
    \******************************************************************************/ /*! no static exports found */ /***/function node_modulesIsTypedArrayNode_modulesEsAbstractGetIntrinsicJs(module,exports,__webpack_require__){eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js?");/***/},/***/"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js":/*!**********************************************************************************!*\
    !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js ***!
    \**********************************************************************************/ /*! no static exports found */ /***/function node_modulesIsTypedArrayNode_modulesEsAbstractHelpersCallBindJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js?");/***/},/***/"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js":/*!***********************************************************************************!*\
    !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js ***!
    \***********************************************************************************/ /*! no static exports found */ /***/function node_modulesIsTypedArrayNode_modulesEsAbstractHelpersCallBoundJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js?");/***/},/***/"./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":/*!**************************************************************************************************!*\
    !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
    \**************************************************************************************************/ /*! no static exports found */ /***/function node_modulesIsTypedArrayNode_modulesEsAbstractHelpersGetOwnPropertyDescriptorJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?");/***/},/***/"./node_modules/is-weakmap/index.js":/*!******************************************!*\
    !*** ./node_modules/is-weakmap/index.js ***!
    \******************************************/ /*! no static exports found */ /***/function node_modulesIsWeakmapIndexJs(module,exports,__webpack_require__){eval("\n\nvar $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;\nvar $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;\n\nvar exported;\n\nif (!$WeakMap) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakMap(x) {\n\t\t// `WeakMap` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $WeakMap ? $WeakMap.prototype.has : null;\nvar $setHas = $WeakSet ? $WeakSet.prototype.has : null;\nif (!exported && !$mapHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakMap(x) {\n\t\t// `WeakMap` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isWeakMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x, $mapHas);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x, $setHas);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $WeakMap; // core-js workaround, pre-v3\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-weakmap/index.js?");/***/},/***/"./node_modules/is-weakset/index.js":/*!******************************************!*\
    !*** ./node_modules/is-weakset/index.js ***!
    \******************************************/ /*! no static exports found */ /***/function node_modulesIsWeaksetIndexJs(module,exports,__webpack_require__){eval("\n\nvar $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;\nvar $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;\n\nvar exported;\n\nif (!$WeakMap) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakSet(x) {\n\t\t// `WeakSet` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $WeakMap ? $WeakMap.prototype.has : null;\nvar $setHas = $WeakSet ? $WeakSet.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\tmodule.exports = function isWeakSet(x) {\n\t\t// `WeakSet` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isWeakSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x, $setHas);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x, $mapHas);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $WeakSet; // core-js workaround, pre-v3\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-weakset/index.js?");/***/},/***/"./node_modules/object-inspect/index.js":/*!**********************************************!*\
    !*** ./node_modules/object-inspect/index.js ***!
    \**********************************************/ /*! no static exports found */ /***/function node_modulesObjectInspectIndexJs(module,exports,__webpack_require__){eval("var hasMap = typeof Map === 'function' && Map.prototype;\nvar mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;\nvar mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;\nvar mapForEach = hasMap && Map.prototype.forEach;\nvar hasSet = typeof Set === 'function' && Set.prototype;\nvar setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;\nvar setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;\nvar setForEach = hasSet && Set.prototype.forEach;\nvar hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;\nvar weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;\nvar hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;\nvar weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;\nvar booleanValueOf = Boolean.prototype.valueOf;\nvar objectToString = Object.prototype.toString;\nvar match = String.prototype.match;\nvar bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;\n\nvar inspectCustom = __webpack_require__(/*! ./util.inspect */ 1).custom;\nvar inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;\n\nmodule.exports = function inspect_(obj, options, depth, seen) {\n    var opts = options || {};\n\n    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {\n        throw new TypeError('option \"quoteStyle\" must be \"single\" or \"double\"');\n    }\n\n    if (typeof obj === 'undefined') {\n        return 'undefined';\n    }\n    if (obj === null) {\n        return 'null';\n    }\n    if (typeof obj === 'boolean') {\n        return obj ? 'true' : 'false';\n    }\n\n    if (typeof obj === 'string') {\n        return inspectString(obj, opts);\n    }\n    if (typeof obj === 'number') {\n        if (obj === 0) {\n            return Infinity / obj > 0 ? '0' : '-0';\n        }\n        return String(obj);\n    }\n    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof\n        return String(obj) + 'n';\n    }\n\n    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;\n    if (typeof depth === 'undefined') { depth = 0; }\n    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {\n        return '[Object]';\n    }\n\n    if (typeof seen === 'undefined') {\n        seen = [];\n    } else if (indexOf(seen, obj) >= 0) {\n        return '[Circular]';\n    }\n\n    function inspect(value, from) {\n        if (from) {\n            seen = seen.slice();\n            seen.push(from);\n        }\n        return inspect_(value, opts, depth + 1, seen);\n    }\n\n    if (typeof obj === 'function') {\n        var name = nameOf(obj);\n        return '[Function' + (name ? ': ' + name : '') + ']';\n    }\n    if (isSymbol(obj)) {\n        var symString = Symbol.prototype.toString.call(obj);\n        return typeof obj === 'object' ? markBoxed(symString) : symString;\n    }\n    if (isElement(obj)) {\n        var s = '<' + String(obj.nodeName).toLowerCase();\n        var attrs = obj.attributes || [];\n        for (var i = 0; i < attrs.length; i++) {\n            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);\n        }\n        s += '>';\n        if (obj.childNodes && obj.childNodes.length) { s += '...'; }\n        s += '</' + String(obj.nodeName).toLowerCase() + '>';\n        return s;\n    }\n    if (isArray(obj)) {\n        if (obj.length === 0) { return '[]'; }\n        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';\n    }\n    if (isError(obj)) {\n        var parts = arrObjKeys(obj, inspect);\n        if (parts.length === 0) { return '[' + String(obj) + ']'; }\n        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';\n    }\n    if (typeof obj === 'object') {\n        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {\n            return obj[inspectSymbol]();\n        } else if (typeof obj.inspect === 'function') {\n            return obj.inspect();\n        }\n    }\n    if (isMap(obj)) {\n        var mapParts = [];\n        mapForEach.call(obj, function (value, key) {\n            mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));\n        });\n        return collectionOf('Map', mapSize.call(obj), mapParts);\n    }\n    if (isSet(obj)) {\n        var setParts = [];\n        setForEach.call(obj, function (value) {\n            setParts.push(inspect(value, obj));\n        });\n        return collectionOf('Set', setSize.call(obj), setParts);\n    }\n    if (isWeakMap(obj)) {\n        return weakCollectionOf('WeakMap');\n    }\n    if (isWeakSet(obj)) {\n        return weakCollectionOf('WeakSet');\n    }\n    if (isNumber(obj)) {\n        return markBoxed(inspect(Number(obj)));\n    }\n    if (isBigInt(obj)) {\n        return markBoxed(inspect(bigIntValueOf.call(obj)));\n    }\n    if (isBoolean(obj)) {\n        return markBoxed(booleanValueOf.call(obj));\n    }\n    if (isString(obj)) {\n        return markBoxed(inspect(String(obj)));\n    }\n    if (!isDate(obj) && !isRegExp(obj)) {\n        var xs = arrObjKeys(obj, inspect);\n        if (xs.length === 0) { return '{}'; }\n        return '{ ' + xs.join(', ') + ' }';\n    }\n    return String(obj);\n};\n\nfunction wrapQuotes(s, defaultStyle, opts) {\n    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '\"' : \"'\";\n    return quoteChar + s + quoteChar;\n}\n\nfunction quote(s) {\n    return String(s).replace(/\"/g, '&quot;');\n}\n\nfunction isArray(obj) { return toStr(obj) === '[object Array]'; }\nfunction isDate(obj) { return toStr(obj) === '[object Date]'; }\nfunction isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }\nfunction isError(obj) { return toStr(obj) === '[object Error]'; }\nfunction isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }\nfunction isString(obj) { return toStr(obj) === '[object String]'; }\nfunction isNumber(obj) { return toStr(obj) === '[object Number]'; }\nfunction isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }\nfunction isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }\n\nvar hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };\nfunction has(obj, key) {\n    return hasOwn.call(obj, key);\n}\n\nfunction toStr(obj) {\n    return objectToString.call(obj);\n}\n\nfunction nameOf(f) {\n    if (f.name) { return f.name; }\n    var m = match.call(f, /^function\\s*([\\w$]+)/);\n    if (m) { return m[1]; }\n    return null;\n}\n\nfunction indexOf(xs, x) {\n    if (xs.indexOf) { return xs.indexOf(x); }\n    for (var i = 0, l = xs.length; i < l; i++) {\n        if (xs[i] === x) { return i; }\n    }\n    return -1;\n}\n\nfunction isMap(x) {\n    if (!mapSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        mapSize.call(x);\n        try {\n            setSize.call(x);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof Map; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakMap(x) {\n    if (!weakMapHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakMapHas.call(x, weakMapHas);\n        try {\n            weakSetHas.call(x, weakSetHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isSet(x) {\n    if (!setSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        setSize.call(x);\n        try {\n            mapSize.call(x);\n        } catch (m) {\n            return true;\n        }\n        return x instanceof Set; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakSet(x) {\n    if (!weakSetHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakSetHas.call(x, weakSetHas);\n        try {\n            weakMapHas.call(x, weakMapHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isElement(x) {\n    if (!x || typeof x !== 'object') { return false; }\n    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {\n        return true;\n    }\n    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';\n}\n\nfunction inspectString(str, opts) {\n    // eslint-disable-next-line no-control-regex\n    var s = str.replace(/(['\\\\])/g, '\\\\$1').replace(/[\\x00-\\x1f]/g, lowbyte);\n    return wrapQuotes(s, 'single', opts);\n}\n\nfunction lowbyte(c) {\n    var n = c.charCodeAt(0);\n    var x = {\n        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'\n    }[n];\n    if (x) { return '\\\\' + x; }\n    return '\\\\x' + (n < 0x10 ? '0' : '') + n.toString(16);\n}\n\nfunction markBoxed(str) {\n    return 'Object(' + str + ')';\n}\n\nfunction weakCollectionOf(type) {\n    return type + ' { ? }';\n}\n\nfunction collectionOf(type, size, entries) {\n    return type + ' (' + size + ') {' + entries.join(', ') + '}';\n}\n\nfunction arrObjKeys(obj, inspect) {\n    var isArr = isArray(obj);\n    var xs = [];\n    if (isArr) {\n        xs.length = obj.length;\n        for (var i = 0; i < obj.length; i++) {\n            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';\n        }\n    }\n    for (var key in obj) { // eslint-disable-line no-restricted-syntax\n        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if ((/[^\\w$]/).test(key)) {\n            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));\n        } else {\n            xs.push(key + ': ' + inspect(obj[key], obj));\n        }\n    }\n    return xs;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-inspect/index.js?");/***/},/***/"./node_modules/object-is/index.js":/*!*****************************************!*\
    !*** ./node_modules/object-is/index.js ***!
    \*****************************************/ /*! no static exports found */ /***/function node_modulesObjectIsIndexJs(module,exports,__webpack_require__){eval("\n\n// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is\n\nvar numberIsNaN = function (value) {\n\treturn value !== value;\n};\n\nmodule.exports = function is(a, b) {\n\tif (a === 0 && b === 0) {\n\t\treturn 1 / a === 1 / b;\n\t}\n\tif (a === b) {\n\t\treturn true;\n\t}\n\tif (numberIsNaN(a) && numberIsNaN(b)) {\n\t\treturn true;\n\t}\n\treturn false;\n};\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-is/index.js?");/***/},/***/"./node_modules/object-keys/index.js":/*!*******************************************!*\
    !*** ./node_modules/object-keys/index.js ***!
    \*******************************************/ /*! no static exports found */ /***/function node_modulesObjectKeysIndexJs(module,exports,__webpack_require__){eval("\n\n// modified from https://github.com/es-shims/es5-shim\nvar has = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\");\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\nvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\nvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\nvar dontEnums = [\n\t'toString',\n\t'toLocaleString',\n\t'valueOf',\n\t'hasOwnProperty',\n\t'isPrototypeOf',\n\t'propertyIsEnumerable',\n\t'constructor'\n];\nvar equalsConstructorPrototype = function (o) {\n\tvar ctor = o.constructor;\n\treturn ctor && ctor.prototype === o;\n};\nvar excludedKeys = {\n\t$applicationCache: true,\n\t$console: true,\n\t$external: true,\n\t$frame: true,\n\t$frameElement: true,\n\t$frames: true,\n\t$innerHeight: true,\n\t$innerWidth: true,\n\t$outerHeight: true,\n\t$outerWidth: true,\n\t$pageXOffset: true,\n\t$pageYOffset: true,\n\t$parent: true,\n\t$scrollLeft: true,\n\t$scrollTop: true,\n\t$scrollX: true,\n\t$scrollY: true,\n\t$self: true,\n\t$webkitIndexedDB: true,\n\t$webkitStorageInfo: true,\n\t$window: true\n};\nvar hasAutomationEqualityBug = (function () {\n\t/* global window */\n\tif (typeof window === 'undefined') { return false; }\n\tfor (var k in window) {\n\t\ttry {\n\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\ttry {\n\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t} catch (e) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}());\nvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t/* global window */\n\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\treturn equalsConstructorPrototype(o);\n\t}\n\ttry {\n\t\treturn equalsConstructorPrototype(o);\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar keysShim = function keys(object) {\n\tvar isObject = object !== null && typeof object === 'object';\n\tvar isFunction = toStr.call(object) === '[object Function]';\n\tvar isArguments = isArgs(object);\n\tvar isString = isObject && toStr.call(object) === '[object String]';\n\tvar theKeys = [];\n\n\tif (!isObject && !isFunction && !isArguments) {\n\t\tthrow new TypeError('Object.keys called on a non-object');\n\t}\n\n\tvar skipProto = hasProtoEnumBug && isFunction;\n\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\ttheKeys.push(String(i));\n\t\t}\n\t}\n\n\tif (isArguments && object.length > 0) {\n\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\ttheKeys.push(String(j));\n\t\t}\n\t} else {\n\t\tfor (var name in object) {\n\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\ttheKeys.push(String(name));\n\t\t\t}\n\t\t}\n\t}\n\n\tif (hasDontEnumBug) {\n\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t}\n\t\t}\n\t}\n\treturn theKeys;\n};\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\treturn (Object.keys(arguments) || '').length === 2;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tvar originalKeys = Object.keys;\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t} else {\n\t\t\t\t\treturn originalKeys(object);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-keys/index.js?");/***/},/***/"./node_modules/object-keys/isArguments.js":/*!*************************************************!*\
    !*** ./node_modules/object-keys/isArguments.js ***!
    \*************************************************/ /*! no static exports found */ /***/function node_modulesObjectKeysIsArgumentsJs(module,exports,__webpack_require__){eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-keys/isArguments.js?");/***/},/***/"./node_modules/object.assign/implementation.js":/*!******************************************************!*\
    !*** ./node_modules/object.assign/implementation.js ***!
    \******************************************************/ /*! no static exports found */ /***/function node_modulesObjectAssignImplementationJs(module,exports,__webpack_require__){eval("\n\n// modified from https://github.com/es-shims/es6-shim\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar canBeObject = function (obj) {\n\treturn typeof obj !== 'undefined' && obj !== null;\n};\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")();\nvar toObject = Object;\nvar push = bind.call(Function.call, Array.prototype.push);\nvar propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);\nvar originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;\n\nmodule.exports = function assign(target, source1) {\n\tif (!canBeObject(target)) { throw new TypeError('target must be an object'); }\n\tvar objTarget = toObject(target);\n\tvar s, source, i, props, syms, value, key;\n\tfor (s = 1; s < arguments.length; ++s) {\n\t\tsource = toObject(arguments[s]);\n\t\tprops = keys(source);\n\t\tvar getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);\n\t\tif (getSymbols) {\n\t\t\tsyms = getSymbols(source);\n\t\t\tfor (i = 0; i < syms.length; ++i) {\n\t\t\t\tkey = syms[i];\n\t\t\t\tif (propIsEnumerable(source, key)) {\n\t\t\t\t\tpush(props, key);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tfor (i = 0; i < props.length; ++i) {\n\t\t\tkey = props[i];\n\t\t\tvalue = source[key];\n\t\t\tif (propIsEnumerable(source, key)) {\n\t\t\t\tobjTarget[key] = value;\n\t\t\t}\n\t\t}\n\t}\n\treturn objTarget;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/implementation.js?");/***/},/***/"./node_modules/object.assign/index.js":/*!*********************************************!*\
    !*** ./node_modules/object.assign/index.js ***!
    \*********************************************/ /*! no static exports found */ /***/function node_modulesObjectAssignIndexJs(module,exports,__webpack_require__){eval("\n\nvar defineProperties = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.assign/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.assign/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/object.assign/shim.js\");\n\nvar polyfill = getPolyfill();\n\ndefineProperties(polyfill, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = polyfill;\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/index.js?");/***/},/***/"./node_modules/object.assign/polyfill.js":/*!************************************************!*\
    !*** ./node_modules/object.assign/polyfill.js ***!
    \************************************************/ /*! no static exports found */ /***/function node_modulesObjectAssignPolyfillJs(module,exports,__webpack_require__){eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.assign/implementation.js\");\n\nvar lacksProperEnumerationOrder = function () {\n\tif (!Object.assign) {\n\t\treturn false;\n\t}\n\t// v8, specifically in node 4.x, has a bug with incorrect property enumeration order\n\t// note: this does not detect the bug unless there's 20 characters\n\tvar str = 'abcdefghijklmnopqrst';\n\tvar letters = str.split('');\n\tvar map = {};\n\tfor (var i = 0; i < letters.length; ++i) {\n\t\tmap[letters[i]] = letters[i];\n\t}\n\tvar obj = Object.assign({}, map);\n\tvar actual = '';\n\tfor (var k in obj) {\n\t\tactual += k;\n\t}\n\treturn str !== actual;\n};\n\nvar assignHasPendingExceptions = function () {\n\tif (!Object.assign || !Object.preventExtensions) {\n\t\treturn false;\n\t}\n\t// Firefox 37 still has \"pending exception\" logic in its Object.assign implementation,\n\t// which is 72% slower than our shim, and Firefox 40's native implementation.\n\tvar thrower = Object.preventExtensions({ 1: 2 });\n\ttry {\n\t\tObject.assign(thrower, 'xy');\n\t} catch (e) {\n\t\treturn thrower[1] === 'y';\n\t}\n\treturn false;\n};\n\nmodule.exports = function getPolyfill() {\n\tif (!Object.assign) {\n\t\treturn implementation;\n\t}\n\tif (lacksProperEnumerationOrder()) {\n\t\treturn implementation;\n\t}\n\tif (assignHasPendingExceptions()) {\n\t\treturn implementation;\n\t}\n\treturn Object.assign;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/polyfill.js?");/***/},/***/"./node_modules/object.assign/shim.js":/*!********************************************!*\
    !*** ./node_modules/object.assign/shim.js ***!
    \********************************************/ /*! no static exports found */ /***/function node_modulesObjectAssignShimJs(module,exports,__webpack_require__){eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.assign/polyfill.js\");\n\nmodule.exports = function shimAssign() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ assign: polyfill },\n\t\t{ assign: function () { return Object.assign !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/shim.js?");/***/},/***/"./node_modules/parchment/src/attributor/attributor.ts":/*!*************************************************************!*\
    !*** ./node_modules/parchment/src/attributor/attributor.ts ***!
    \*************************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcAttributorAttributorTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Attributor; });\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n\nclass Attributor {\n    constructor(attrName, keyName, options = {}) {\n        this.attrName = attrName;\n        this.keyName = keyName;\n        const attributeBit = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TYPE & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        this.scope =\n            options.scope != null\n                ? // Ignore type bits, force attribute bit\n                    (options.scope & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LEVEL) | attributeBit\n                : _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        if (options.whitelist != null) {\n            this.whitelist = options.whitelist;\n        }\n    }\n    static keys(node) {\n        return Array.from(node.attributes).map((item) => item.name);\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        node.setAttribute(this.keyName, value);\n        return true;\n    }\n    canAdd(_node, value) {\n        if (this.whitelist == null) {\n            return true;\n        }\n        if (typeof value === 'string') {\n            return this.whitelist.indexOf(value.replace(/[\"']/g, '')) > -1;\n        }\n        else {\n            return this.whitelist.indexOf(value) > -1;\n        }\n    }\n    remove(node) {\n        node.removeAttribute(this.keyName);\n    }\n    value(node) {\n        const value = node.getAttribute(this.keyName);\n        if (this.canAdd(node, value) && value) {\n            return value;\n        }\n        return '';\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/attributor.ts?");/***/},/***/"./node_modules/parchment/src/attributor/class.ts":/*!********************************************************!*\
    !*** ./node_modules/parchment/src/attributor/class.ts ***!
    \********************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcAttributorClassTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction match(node, prefix) {\n    const className = node.getAttribute('class') || '';\n    return className\n        .split(/\\s+/)\n        .filter((name) => name.indexOf(`${prefix}-`) === 0);\n}\nclass ClassAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('class') || '')\n            .split(/\\s+/)\n            .map((name) => name.split('-').slice(0, -1).join('-'));\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        this.remove(node);\n        node.classList.add(`${this.keyName}-${value}`);\n        return true;\n    }\n    remove(node) {\n        const matches = match(node, this.keyName);\n        matches.forEach((name) => {\n            node.classList.remove(name);\n        });\n        if (node.classList.length === 0) {\n            node.removeAttribute('class');\n        }\n    }\n    value(node) {\n        const result = match(node, this.keyName)[0] || '';\n        const value = result.slice(this.keyName.length + 1); // +1 for hyphen\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/class.ts?");/***/},/***/"./node_modules/parchment/src/attributor/store.ts":/*!********************************************************!*\
    !*** ./node_modules/parchment/src/attributor/store.ts ***!
    \********************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcAttributorStoreTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./node_modules/parchment/src/attributor/style.ts\");\n\n\n\n\n\nclass AttributorStore {\n    constructor(domNode) {\n        this.attributes = {};\n        this.domNode = domNode;\n        this.build();\n    }\n    attribute(attribute, value) {\n        // verb\n        if (value) {\n            if (attribute.add(this.domNode, value)) {\n                if (attribute.value(this.domNode) != null) {\n                    this.attributes[attribute.attrName] = attribute;\n                }\n                else {\n                    delete this.attributes[attribute.attrName];\n                }\n            }\n        }\n        else {\n            attribute.remove(this.domNode);\n            delete this.attributes[attribute.attrName];\n        }\n    }\n    build() {\n        this.attributes = {};\n        const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.domNode);\n        if (blot == null) {\n            return;\n        }\n        const attributes = _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].keys(this.domNode);\n        const classes = _class__WEBPACK_IMPORTED_MODULE_3__[\"default\"].keys(this.domNode);\n        const styles = _style__WEBPACK_IMPORTED_MODULE_4__[\"default\"].keys(this.domNode);\n        attributes\n            .concat(classes)\n            .concat(styles)\n            .forEach((name) => {\n            const attr = blot.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ATTRIBUTE);\n            if (attr instanceof _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n                this.attributes[attr.attrName] = attr;\n            }\n        });\n    }\n    copy(target) {\n        Object.keys(this.attributes).forEach((key) => {\n            const value = this.attributes[key].value(this.domNode);\n            target.format(key, value);\n        });\n    }\n    move(target) {\n        this.copy(target);\n        Object.keys(this.attributes).forEach((key) => {\n            this.attributes[key].remove(this.domNode);\n        });\n        this.attributes = {};\n    }\n    values() {\n        return Object.keys(this.attributes).reduce((attributes, name) => {\n            attributes[name] = this.attributes[name].value(this.domNode);\n            return attributes;\n        }, {});\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributorStore);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/store.ts?");/***/},/***/"./node_modules/parchment/src/attributor/style.ts":/*!********************************************************!*\
    !*** ./node_modules/parchment/src/attributor/style.ts ***!
    \********************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcAttributorStyleTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction camelize(name) {\n    const parts = name.split('-');\n    const rest = parts\n        .slice(1)\n        .map((part) => part[0].toUpperCase() + part.slice(1))\n        .join('');\n    return parts[0] + rest;\n}\nclass StyleAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('style') || '').split(';').map((value) => {\n            const arr = value.split(':');\n            return arr[0].trim();\n        });\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = value;\n        return true;\n    }\n    remove(node) {\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = '';\n        if (!node.getAttribute('style')) {\n            node.removeAttribute('style');\n        }\n    }\n    value(node) {\n        // @ts-ignore\n        const value = node.style[camelize(this.keyName)];\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyleAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/style.ts?");/***/},/***/"./node_modules/parchment/src/blot/abstract/container.ts":/*!***************************************************************!*\
    !*** ./node_modules/parchment/src/blot/abstract/container.ts ***!
    \***************************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotAbstractContainerTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\nclass ContainerBlot extends _parent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    checkMerge() {\n        return (this.next !== null && this.next.statics.blotName === this.statics.blotName);\n    }\n    deleteAt(index, length) {\n        super.deleteAt(index, length);\n        this.enforceAllowedChildren();\n    }\n    formatAt(index, length, name, value) {\n        super.formatAt(index, length, name, value);\n        this.enforceAllowedChildren();\n    }\n    insertAt(index, value, def) {\n        super.insertAt(index, value, def);\n        this.enforceAllowedChildren();\n    }\n    optimize(context) {\n        super.optimize(context);\n        if (this.children.length > 0 && this.next != null && this.checkMerge()) {\n            this.next.moveChildren(this);\n            this.next.remove();\n        }\n    }\n}\nContainerBlot.blotName = 'container';\nContainerBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLOCK_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/container.ts?");/***/},/***/"./node_modules/parchment/src/blot/abstract/leaf.ts":/*!**********************************************************!*\
    !*** ./node_modules/parchment/src/blot/abstract/leaf.ts ***!
    \**********************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotAbstractLeafTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\nclass LeafBlot extends _shadow__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    static value(_domNode) {\n        return true;\n    }\n    index(node, offset) {\n        if (this.domNode === node ||\n            this.domNode.compareDocumentPosition(node) &\n                Node.DOCUMENT_POSITION_CONTAINED_BY) {\n            return Math.min(offset, 1);\n        }\n        return -1;\n    }\n    position(index, _inclusive) {\n        const childNodes = Array.from(this.parent.domNode.childNodes);\n        let offset = childNodes.indexOf(this.domNode);\n        if (index > 0) {\n            offset += 1;\n        }\n        return [this.parent.domNode, offset];\n    }\n    value() {\n        return {\n            [this.statics.blotName]: this.statics.value(this.domNode) || true,\n        };\n    }\n}\nLeafBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeafBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/leaf.ts?");/***/},/***/"./node_modules/parchment/src/blot/abstract/parent.ts":/*!************************************************************!*\
    !*** ./node_modules/parchment/src/blot/abstract/parent.ts ***!
    \************************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotAbstractParentTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection/linked-list */ \"./node_modules/parchment/src/collection/linked-list.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\n\n\nfunction makeAttachedBlot(node, scroll) {\n    let blot = scroll.find(node);\n    if (blot == null) {\n        try {\n            blot = scroll.create(node);\n        }\n        catch (e) {\n            blot = scroll.create(_scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            Array.from(node.childNodes).forEach((child) => {\n                // @ts-ignore\n                blot.domNode.appendChild(child);\n            });\n            if (node.parentNode) {\n                node.parentNode.replaceChild(blot.domNode, node);\n            }\n            blot.attach();\n        }\n    }\n    return blot;\n}\nclass ParentBlot extends _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.uiNode = null;\n        this.build();\n    }\n    appendChild(other) {\n        this.insertBefore(other);\n    }\n    attach() {\n        super.attach();\n        this.children.forEach((child) => {\n            child.attach();\n        });\n    }\n    attachUI(node) {\n        if (this.uiNode != null) {\n            this.uiNode.remove();\n        }\n        this.uiNode = node;\n        if (ParentBlot.uiClass) {\n            this.uiNode.classList.add(ParentBlot.uiClass);\n        }\n        this.uiNode.setAttribute('contenteditable', 'false');\n        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n    }\n    build() {\n        this.children = new _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        // Need to be reversed for if DOM nodes already in order\n        Array.from(this.domNode.childNodes)\n            .filter((node) => node !== this.uiNode)\n            .reverse()\n            .forEach((node) => {\n            try {\n                const child = makeAttachedBlot(node, this.scroll);\n                this.insertBefore(child, this.children.head || undefined);\n            }\n            catch (err) {\n                if (err instanceof _error__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                    return;\n                }\n                else {\n                    throw err;\n                }\n            }\n        });\n    }\n    deleteAt(index, length) {\n        if (index === 0 && length === this.length()) {\n            return this.remove();\n        }\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.deleteAt(offset, childLength);\n        });\n    }\n    descendant(criteria, index = 0) {\n        const [child, offset] = this.children.find(index);\n        if ((criteria.blotName == null && criteria(child)) ||\n            (criteria.blotName != null && child instanceof criteria)) {\n            return [child, offset];\n        }\n        else if (child instanceof ParentBlot) {\n            return child.descendant(criteria, offset);\n        }\n        else {\n            return [null, -1];\n        }\n    }\n    descendants(criteria, index = 0, length = Number.MAX_VALUE) {\n        let descendants = [];\n        let lengthLeft = length;\n        this.children.forEachAt(index, length, (child, childIndex, childLength) => {\n            if ((criteria.blotName == null && criteria(child)) ||\n                (criteria.blotName != null && child instanceof criteria)) {\n                descendants.push(child);\n            }\n            if (child instanceof ParentBlot) {\n                descendants = descendants.concat(child.descendants(criteria, childIndex, lengthLeft));\n            }\n            lengthLeft -= childLength;\n        });\n        return descendants;\n    }\n    detach() {\n        this.children.forEach((child) => {\n            child.detach();\n        });\n        super.detach();\n    }\n    enforceAllowedChildren() {\n        let done = false;\n        this.children.forEach((child) => {\n            if (done) {\n                return;\n            }\n            const allowed = this.statics.allowedChildren.some((def) => child instanceof def);\n            if (allowed) {\n                return;\n            }\n            if (child.statics.scope === _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT) {\n                if (child.next != null) {\n                    this.splitAfter(child);\n                }\n                if (child.prev != null) {\n                    this.splitAfter(child.prev);\n                }\n                child.parent.unwrap();\n                done = true;\n            }\n            else if (child instanceof ParentBlot) {\n                child.unwrap();\n            }\n            else {\n                child.remove();\n            }\n        });\n    }\n    formatAt(index, length, name, value) {\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.formatAt(offset, childLength, name, value);\n        });\n    }\n    insertAt(index, value, def) {\n        const [child, offset] = this.children.find(index);\n        if (child) {\n            child.insertAt(offset, value, def);\n        }\n        else {\n            const blot = def == null\n                ? this.scroll.create('text', value)\n                : this.scroll.create(value, def);\n            this.appendChild(blot);\n        }\n    }\n    insertBefore(childBlot, refBlot) {\n        if (childBlot.parent != null) {\n            childBlot.parent.children.remove(childBlot);\n        }\n        let refDomNode = null;\n        this.children.insertBefore(childBlot, refBlot || null);\n        childBlot.parent = this;\n        if (refBlot != null) {\n            refDomNode = refBlot.domNode;\n        }\n        if (this.domNode.parentNode !== childBlot.domNode ||\n            this.domNode.nextSibling !== refDomNode) {\n            this.domNode.insertBefore(childBlot.domNode, refDomNode);\n        }\n        childBlot.attach();\n    }\n    length() {\n        return this.children.reduce((memo, child) => {\n            return memo + child.length();\n        }, 0);\n    }\n    moveChildren(targetParent, refNode) {\n        this.children.forEach((child) => {\n            targetParent.insertBefore(child, refNode);\n        });\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.enforceAllowedChildren();\n        if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {\n            this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n        }\n        if (this.children.length === 0) {\n            if (this.statics.defaultChild != null) {\n                const child = this.scroll.create(this.statics.defaultChild.blotName);\n                this.appendChild(child);\n                // TODO double check if necessary\n                // child.optimize(context);\n            }\n            else {\n                this.remove();\n            }\n        }\n    }\n    path(index, inclusive = false) {\n        const [child, offset] = this.children.find(index, inclusive);\n        const position = [[this, index]];\n        if (child instanceof ParentBlot) {\n            return position.concat(child.path(offset, inclusive));\n        }\n        else if (child != null) {\n            position.push([child, offset]);\n        }\n        return position;\n    }\n    removeChild(child) {\n        this.children.remove(child);\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (replacement instanceof ParentBlot) {\n            this.moveChildren(replacement);\n        }\n        return super.replaceWith(replacement);\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.clone();\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        this.children.forEachAt(index, this.length(), (child, offset, _length) => {\n            const split = child.split(offset, force);\n            if (split != null) {\n                after.appendChild(split);\n            }\n        });\n        return after;\n    }\n    splitAfter(child) {\n        const after = this.clone();\n        while (child.next != null) {\n            after.appendChild(child.next);\n        }\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        return after;\n    }\n    unwrap() {\n        if (this.parent) {\n            this.moveChildren(this.parent, this.next || undefined);\n        }\n        this.remove();\n    }\n    update(mutations, _context) {\n        const addedNodes = [];\n        const removedNodes = [];\n        mutations.forEach((mutation) => {\n            if (mutation.target === this.domNode && mutation.type === 'childList') {\n                addedNodes.push(...mutation.addedNodes);\n                removedNodes.push(...mutation.removedNodes);\n            }\n        });\n        removedNodes.forEach((node) => {\n            // Check node has actually been removed\n            // One exception is Chrome does not immediately remove IFRAMEs\n            // from DOM but MutationRecord is correct in its reported removal\n            if (node.parentNode != null &&\n                // @ts-ignore\n                node.tagName !== 'IFRAME' &&\n                document.body.compareDocumentPosition(node) &\n                    Node.DOCUMENT_POSITION_CONTAINED_BY) {\n                return;\n            }\n            const blot = this.scroll.find(node);\n            if (blot == null) {\n                return;\n            }\n            if (blot.domNode.parentNode == null ||\n                blot.domNode.parentNode === this.domNode) {\n                blot.detach();\n            }\n        });\n        addedNodes\n            .filter((node) => {\n            return node.parentNode === this.domNode || node === this.uiNode;\n        })\n            .sort((a, b) => {\n            if (a === b) {\n                return 0;\n            }\n            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {\n                return 1;\n            }\n            return -1;\n        })\n            .forEach((node) => {\n            let refBlot = null;\n            if (node.nextSibling != null) {\n                refBlot = this.scroll.find(node.nextSibling);\n            }\n            const blot = makeAttachedBlot(node, this.scroll);\n            if (blot.next !== refBlot || blot.next == null) {\n                if (blot.parent != null) {\n                    blot.parent.removeChild(this);\n                }\n                this.insertBefore(blot, refBlot || undefined);\n            }\n        });\n        this.enforceAllowedChildren();\n    }\n}\nParentBlot.uiClass = '';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParentBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/parent.ts?");/***/},/***/"./node_modules/parchment/src/blot/abstract/shadow.ts":/*!************************************************************!*\
    !*** ./node_modules/parchment/src/blot/abstract/shadow.ts ***!
    \************************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotAbstractShadowTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\n\nclass ShadowBlot {\n    constructor(scroll, domNode) {\n        this.scroll = scroll;\n        this.domNode = domNode;\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.set(domNode, this);\n        this.prev = null;\n        this.next = null;\n    }\n    static create(value) {\n        if (this.tagName == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Blot definition missing tagName');\n        }\n        let node;\n        if (Array.isArray(this.tagName)) {\n            if (typeof value === 'string') {\n                value = value.toUpperCase();\n                if (parseInt(value, 10).toString() === value) {\n                    value = parseInt(value, 10);\n                }\n            }\n            if (typeof value === 'number') {\n                node = document.createElement(this.tagName[value - 1]);\n            }\n            else if (this.tagName.indexOf(value) > -1) {\n                node = document.createElement(value);\n            }\n            else {\n                node = document.createElement(this.tagName[0]);\n            }\n        }\n        else {\n            node = document.createElement(this.tagName);\n        }\n        if (this.className) {\n            node.classList.add(this.className);\n        }\n        return node;\n    }\n    // Hack for accessing inherited static methods\n    get statics() {\n        return this.constructor;\n    }\n    attach() {\n        // Nothing to do\n    }\n    clone() {\n        const domNode = this.domNode.cloneNode(false);\n        return this.scroll.create(domNode);\n    }\n    detach() {\n        if (this.parent != null) {\n            this.parent.removeChild(this);\n        }\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.delete(this.domNode);\n    }\n    deleteAt(index, length) {\n        const blot = this.isolate(index, length);\n        blot.remove();\n    }\n    formatAt(index, length, name, value) {\n        const blot = this.isolate(index, length);\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOT) != null && value) {\n            blot.wrap(name, value);\n        }\n        else if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE) != null) {\n            const parent = this.scroll.create(this.statics.scope);\n            blot.wrap(parent);\n            parent.format(name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        const blot = def == null\n            ? this.scroll.create('text', value)\n            : this.scroll.create(value, def);\n        const ref = this.split(index);\n        this.parent.insertBefore(blot, ref || undefined);\n    }\n    isolate(index, length) {\n        const target = this.split(index);\n        if (target == null) {\n            throw new Error('Attempt to isolate at end');\n        }\n        target.split(length);\n        return target;\n    }\n    length() {\n        return 1;\n    }\n    offset(root = this.parent) {\n        if (this.parent == null || this === root) {\n            return 0;\n        }\n        return this.parent.children.offset(this) + this.parent.offset(root);\n    }\n    optimize(_context) {\n        if (this.statics.requiredContainer &&\n            !(this.parent instanceof this.statics.requiredContainer)) {\n            this.wrap(this.statics.requiredContainer.blotName);\n        }\n    }\n    remove() {\n        if (this.domNode.parentNode != null) {\n            this.domNode.parentNode.removeChild(this.domNode);\n        }\n        this.detach();\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(replacement, this.next || undefined);\n            this.remove();\n        }\n        return replacement;\n    }\n    split(index, _force) {\n        return index === 0 ? this : this.next;\n    }\n    update(_mutations, _context) {\n        // Nothing to do by default\n    }\n    wrap(name, value) {\n        const wrapper = typeof name === 'string'\n            ? this.scroll.create(name, value)\n            : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(wrapper, this.next || undefined);\n        }\n        if (typeof wrapper.appendChild !== 'function') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Cannot wrap ${name}`);\n        }\n        wrapper.appendChild(this);\n        return wrapper;\n    }\n}\nShadowBlot.blotName = 'abstract';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShadowBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/shadow.ts?");/***/},/***/"./node_modules/parchment/src/blot/block.ts":/*!**************************************************!*\
    !*** ./node_modules/parchment/src/blot/block.ts ***!
    \**************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotBlockTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n\n\n\n\n\n\nclass BlockBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(BlockBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n    }\n    format(name, value) {\n        const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK);\n        if (format == null) {\n            return;\n        }\n        else if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.attributes.attribute(format, value);\n        }\n        else if (name === this.statics.blotName && !value) {\n            this.replaceWith(BlockBlot.blotName);\n        }\n        else if (value &&\n            (name !== this.statics.blotName || this.formats()[name] !== value)) {\n            this.replaceWith(name, value);\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK) != null) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        if (def == null || this.scroll.query(value, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE) != null) {\n            // Insert text or inline\n            super.insertAt(index, value, def);\n        }\n        else {\n            const after = this.split(index);\n            if (after != null) {\n                const blot = this.scroll.create(value, def);\n                after.parent.insertBefore(blot, after);\n            }\n            else {\n                throw new Error('Attempt to insertAt after block boundaries');\n            }\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n}\nBlockBlot.blotName = 'block';\nBlockBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT;\nBlockBlot.tagName = 'P';\nBlockBlot.allowedChildren = [\n    _inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    BlockBlot,\n    _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/block.ts?");/***/},/***/"./node_modules/parchment/src/blot/embed.ts":/*!**************************************************!*\
    !*** ./node_modules/parchment/src/blot/embed.ts ***!
    \**************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotEmbedTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\nclass EmbedBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static formats(_domNode, _scroll) {\n        return undefined;\n    }\n    format(name, value) {\n        // super.formatAt wraps, which is what we want in general,\n        // but this allows subclasses to overwrite for formats\n        // that just apply to particular embeds\n        super.formatAt(0, this.length(), name, value);\n    }\n    formatAt(index, length, name, value) {\n        if (index === 0 && length === this.length()) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    formats() {\n        return this.statics.formats(this.domNode, this.scroll);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/embed.ts?");/***/},/***/"./node_modules/parchment/src/blot/inline.ts":/*!***************************************************!*\
    !*** ./node_modules/parchment/src/blot/inline.ts ***!
    \***************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotInlineTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\n\n\n\n// Shallow object comparison\nfunction isEqual(obj1, obj2) {\n    if (Object.keys(obj1).length !== Object.keys(obj2).length) {\n        return false;\n    }\n    // @ts-ignore\n    for (const prop in obj1) {\n        // @ts-ignore\n        if (obj1[prop] !== obj2[prop]) {\n            return false;\n        }\n    }\n    return true;\n}\nclass InlineBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(InlineBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n        return undefined;\n    }\n    format(name, value) {\n        if (name === this.statics.blotName && !value) {\n            this.children.forEach((child) => {\n                if (!(child instanceof InlineBlot)) {\n                    child = child.wrap(InlineBlot.blotName, true);\n                }\n                this.attributes.copy(child);\n            });\n            this.unwrap();\n        }\n        else {\n            const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            if (format == null) {\n                return;\n            }\n            if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n                this.attributes.attribute(format, value);\n            }\n            else if (value &&\n                (name !== this.statics.blotName || this.formats()[name] !== value)) {\n                this.replaceWith(name, value);\n            }\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.formats()[name] != null ||\n            this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE)) {\n            const blot = this.isolate(index, length);\n            blot.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    optimize(context) {\n        super.optimize(context);\n        const formats = this.formats();\n        if (Object.keys(formats).length === 0) {\n            return this.unwrap(); // unformatted span\n        }\n        const next = this.next;\n        if (next instanceof InlineBlot &&\n            next.prev === this &&\n            isEqual(formats, next.formats())) {\n            next.moveChildren(this);\n            next.remove();\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n    wrap(name, value) {\n        const wrapper = super.wrap(name, value);\n        if (wrapper instanceof InlineBlot) {\n            this.attributes.move(wrapper);\n        }\n        return wrapper;\n    }\n}\nInlineBlot.allowedChildren = [InlineBlot, _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\nInlineBlot.blotName = 'inline';\nInlineBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE_BLOT;\nInlineBlot.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (InlineBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/inline.ts?");/***/},/***/"./node_modules/parchment/src/blot/scroll.ts":/*!***************************************************!*\
    !*** ./node_modules/parchment/src/blot/scroll.ts ***!
    \***************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotScrollTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./node_modules/parchment/src/blot/block.ts\");\n\n\n\n\n\nconst OBSERVER_CONFIG = {\n    attributes: true,\n    characterData: true,\n    characterDataOldValue: true,\n    childList: true,\n    subtree: true,\n};\nconst MAX_OPTIMIZE_ITERATIONS = 100;\nclass ScrollBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(registry, node) {\n        // @ts-ignore\n        super(null, node);\n        this.registry = registry;\n        this.scroll = this;\n        this.build();\n        this.observer = new MutationObserver((mutations) => {\n            this.update(mutations);\n        });\n        this.observer.observe(this.domNode, OBSERVER_CONFIG);\n        this.attach();\n    }\n    create(input, value) {\n        return this.registry.create(this, input, value);\n    }\n    find(node, bubble = false) {\n        return this.registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        return this.registry.query(query, scope);\n    }\n    register(...definitions) {\n        return this.registry.register(...definitions);\n    }\n    build() {\n        if (this.scroll == null) {\n            return;\n        }\n        super.build();\n    }\n    detach() {\n        super.detach();\n        this.observer.disconnect();\n    }\n    deleteAt(index, length) {\n        this.update();\n        if (index === 0 && length === this.length()) {\n            this.children.forEach((child) => {\n                child.remove();\n            });\n        }\n        else {\n            super.deleteAt(index, length);\n        }\n    }\n    formatAt(index, length, name, value) {\n        this.update();\n        super.formatAt(index, length, name, value);\n    }\n    insertAt(index, value, def) {\n        this.update();\n        super.insertAt(index, value, def);\n    }\n    optimize(mutations = [], context = {}) {\n        super.optimize(context);\n        const mutationsMap = context.mutationsMap || new WeakMap();\n        // We must modify mutations directly, cannot make copy and then modify\n        let records = Array.from(this.observer.takeRecords());\n        // Array.push currently seems to be implemented by a non-tail recursive function\n        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());\n        while (records.length > 0) {\n            mutations.push(records.pop());\n        }\n        const mark = (blot, markParent = true) => {\n            if (blot == null || blot === this) {\n                return;\n            }\n            if (blot.domNode.parentNode == null) {\n                return;\n            }\n            if (!mutationsMap.has(blot.domNode)) {\n                mutationsMap.set(blot.domNode, []);\n            }\n            if (markParent) {\n                mark(blot.parent);\n            }\n        };\n        const optimize = (blot) => {\n            // Post-order traversal\n            if (!mutationsMap.has(blot.domNode)) {\n                return;\n            }\n            if (blot instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                blot.children.forEach(optimize);\n            }\n            mutationsMap.delete(blot.domNode);\n            blot.optimize(context);\n        };\n        let remaining = mutations;\n        for (let i = 0; remaining.length > 0; i += 1) {\n            if (i >= MAX_OPTIMIZE_ITERATIONS) {\n                throw new Error('[Parchment] Maximum optimize iterations reached');\n            }\n            remaining.forEach((mutation) => {\n                const blot = this.find(mutation.target, true);\n                if (blot == null) {\n                    return;\n                }\n                if (blot.domNode === mutation.target) {\n                    if (mutation.type === 'childList') {\n                        mark(this.find(mutation.previousSibling, false));\n                        Array.from(mutation.addedNodes).forEach((node) => {\n                            const child = this.find(node, false);\n                            mark(child, false);\n                            if (child instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                                child.children.forEach((grandChild) => {\n                                    mark(grandChild, false);\n                                });\n                            }\n                        });\n                    }\n                    else if (mutation.type === 'attributes') {\n                        mark(blot.prev);\n                    }\n                }\n                mark(blot);\n            });\n            this.children.forEach(optimize);\n            remaining = Array.from(this.observer.takeRecords());\n            records = remaining.slice();\n            while (records.length > 0) {\n                mutations.push(records.pop());\n            }\n        }\n    }\n    update(mutations, context = {}) {\n        mutations = mutations || this.observer.takeRecords();\n        const mutationsMap = new WeakMap();\n        mutations\n            .map((mutation) => {\n            const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(mutation.target, true);\n            if (blot == null) {\n                return null;\n            }\n            if (mutationsMap.has(blot.domNode)) {\n                mutationsMap.get(blot.domNode).push(mutation);\n                return null;\n            }\n            else {\n                mutationsMap.set(blot.domNode, [mutation]);\n                return blot;\n            }\n        })\n            .forEach((blot) => {\n            if (blot != null && blot !== this && mutationsMap.has(blot.domNode)) {\n                blot.update(mutationsMap.get(blot.domNode) || [], context);\n            }\n        });\n        context.mutationsMap = mutationsMap;\n        if (mutationsMap.has(this.domNode)) {\n            super.update(mutationsMap.get(this.domNode), context);\n        }\n        this.optimize(mutations, context);\n    }\n}\nScrollBlot.blotName = 'scroll';\nScrollBlot.defaultChild = _block__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nScrollBlot.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _abstract_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nScrollBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK_BLOT;\nScrollBlot.tagName = 'DIV';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/scroll.ts?");/***/},/***/"./node_modules/parchment/src/blot/text.ts":/*!*************************************************!*\
    !*** ./node_modules/parchment/src/blot/text.ts ***!
    \*************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcBlotTextTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\n\nclass TextBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(scroll, node) {\n        super(scroll, node);\n        this.text = this.statics.value(this.domNode);\n    }\n    static create(value) {\n        return document.createTextNode(value);\n    }\n    static value(domNode) {\n        return domNode.data;\n    }\n    deleteAt(index, length) {\n        this.domNode.data = this.text =\n            this.text.slice(0, index) + this.text.slice(index + length);\n    }\n    index(node, offset) {\n        if (this.domNode === node) {\n            return offset;\n        }\n        return -1;\n    }\n    insertAt(index, value, def) {\n        if (def == null) {\n            this.text = this.text.slice(0, index) + value + this.text.slice(index);\n            this.domNode.data = this.text;\n        }\n        else {\n            super.insertAt(index, value, def);\n        }\n    }\n    length() {\n        return this.text.length;\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.text = this.statics.value(this.domNode);\n        if (this.text.length === 0) {\n            this.remove();\n        }\n        else if (this.next instanceof TextBlot && this.next.prev === this) {\n            this.insertAt(this.length(), this.next.value());\n            this.next.remove();\n        }\n    }\n    position(index, _inclusive = false) {\n        return [this.domNode, index];\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.scroll.create(this.domNode.splitText(index));\n        this.parent.insertBefore(after, this.next || undefined);\n        this.text = this.statics.value(this.domNode);\n        return after;\n    }\n    update(mutations, _context) {\n        if (mutations.some((mutation) => {\n            return (mutation.type === 'characterData' && mutation.target === this.domNode);\n        })) {\n            this.text = this.statics.value(this.domNode);\n        }\n    }\n    value() {\n        return this.text;\n    }\n}\nTextBlot.blotName = 'text';\nTextBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/text.ts?");/***/},/***/"./node_modules/parchment/src/collection/linked-list.ts":/*!**************************************************************!*\
    !*** ./node_modules/parchment/src/collection/linked-list.ts ***!
    \**************************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcCollectionLinkedListTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nclass LinkedList {\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n    }\n    append(...nodes) {\n        this.insertBefore(nodes[0], null);\n        if (nodes.length > 1) {\n            const rest = nodes.slice(1);\n            this.append(...rest);\n        }\n    }\n    at(index) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur && index > 0) {\n            index -= 1;\n            cur = next();\n        }\n        return cur;\n    }\n    contains(node) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            if (cur === node) {\n                return true;\n            }\n            cur = next();\n        }\n        return false;\n    }\n    indexOf(node) {\n        const next = this.iterator();\n        let cur = next();\n        let index = 0;\n        while (cur) {\n            if (cur === node) {\n                return index;\n            }\n            index += 1;\n            cur = next();\n        }\n        return -1;\n    }\n    insertBefore(node, refNode) {\n        if (node == null) {\n            return;\n        }\n        this.remove(node);\n        node.next = refNode;\n        if (refNode != null) {\n            node.prev = refNode.prev;\n            if (refNode.prev != null) {\n                refNode.prev.next = node;\n            }\n            refNode.prev = node;\n            if (refNode === this.head) {\n                this.head = node;\n            }\n        }\n        else if (this.tail != null) {\n            this.tail.next = node;\n            node.prev = this.tail;\n            this.tail = node;\n        }\n        else {\n            node.prev = null;\n            this.head = this.tail = node;\n        }\n        this.length += 1;\n    }\n    offset(target) {\n        let index = 0;\n        let cur = this.head;\n        while (cur != null) {\n            if (cur === target) {\n                return index;\n            }\n            index += cur.length();\n            cur = cur.next;\n        }\n        return -1;\n    }\n    remove(node) {\n        if (!this.contains(node)) {\n            return;\n        }\n        if (node.prev != null) {\n            node.prev.next = node.next;\n        }\n        if (node.next != null) {\n            node.next.prev = node.prev;\n        }\n        if (node === this.head) {\n            this.head = node.next;\n        }\n        if (node === this.tail) {\n            this.tail = node.prev;\n        }\n        this.length -= 1;\n    }\n    iterator(curNode = this.head) {\n        // TODO use yield when we can\n        return () => {\n            const ret = curNode;\n            if (curNode != null) {\n                curNode = curNode.next;\n            }\n            return ret;\n        };\n    }\n    find(index, inclusive = false) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            const length = cur.length();\n            if (index < length ||\n                (inclusive &&\n                    index === length &&\n                    (cur.next == null || cur.next.length() !== 0))) {\n                return [cur, index];\n            }\n            index -= length;\n            cur = next();\n        }\n        return [null, 0];\n    }\n    forEach(callback) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            callback(cur);\n            cur = next();\n        }\n    }\n    forEachAt(index, length, callback) {\n        if (length <= 0) {\n            return;\n        }\n        const [startNode, offset] = this.find(index);\n        let curIndex = index - offset;\n        const next = this.iterator(startNode);\n        let cur = next();\n        while (cur && curIndex < index + length) {\n            const curLength = cur.length();\n            if (index > curIndex) {\n                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));\n            }\n            else {\n                callback(cur, 0, Math.min(curLength, index + length - curIndex));\n            }\n            curIndex += curLength;\n            cur = next();\n        }\n    }\n    map(callback) {\n        return this.reduce((memo, cur) => {\n            memo.push(callback(cur));\n            return memo;\n        }, []);\n    }\n    reduce(callback, memo) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            memo = callback(memo, cur);\n            cur = next();\n        }\n        return memo;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedList);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/collection/linked-list.ts?");/***/},/***/"./node_modules/parchment/src/error.ts":/*!*********************************************!*\
    !*** ./node_modules/parchment/src/error.ts ***!
    \*********************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcErrorTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParchmentError; });\nclass ParchmentError extends Error {\n    constructor(message) {\n        message = '[Parchment] ' + message;\n        super(message);\n        this.message = message;\n        this.name = this.constructor.name;\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/error.ts?");/***/},/***/"./node_modules/parchment/src/parchment.ts":/*!*************************************************!*\
    !*** ./node_modules/parchment/src/parchment.ts ***!
    \*************************************************/ /*! exports provided: ParentBlot, ContainerBlot, LeafBlot, EmbedBlot, ScrollBlot, BlockBlot, InlineBlot, TextBlot, Attributor, ClassAttributor, StyleAttributor, AttributorStore, Registry, Scope */ /***/function node_modulesParchmentSrcParchmentTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blot/abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ContainerBlot\", function() { return _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blot/abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LeafBlot\", function() { return _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blot/abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParentBlot\", function() { return _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _blot_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blot/block */ \"./node_modules/parchment/src/blot/block.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlockBlot\", function() { return _blot_block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _blot_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blot/embed */ \"./node_modules/parchment/src/blot/embed.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EmbedBlot\", function() { return _blot_embed__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _blot_inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blot/inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InlineBlot\", function() { return _blot_inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _blot_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blot/scroll */ \"./node_modules/parchment/src/blot/scroll.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScrollBlot\", function() { return _blot_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _blot_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blot/text */ \"./node_modules/parchment/src/blot/text.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextBlot\", function() { return _blot_text__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Attributor\", function() { return _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _attributor_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributor/class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ClassAttributor\", function() { return _attributor_class__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AttributorStore\", function() { return _attributor_store__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _attributor_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributor/style */ \"./node_modules/parchment/src/attributor/style.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StyleAttributor\", function() { return _attributor_style__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Registry\", function() { return _registry__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scope\", function() { return _scope__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/parchment.ts?");/***/},/***/"./node_modules/parchment/src/registry.ts":/*!************************************************!*\
    !*** ./node_modules/parchment/src/registry.ts ***!
    \************************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcRegistryTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Registry; });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\nclass Registry {\n    constructor() {\n        this.attributes = {};\n        this.classes = {};\n        this.tags = {};\n        this.types = {};\n    }\n    static find(node, bubble = false) {\n        if (node == null) {\n            return null;\n        }\n        if (this.blots.has(node)) {\n            return this.blots.get(node) || null;\n        }\n        if (bubble) {\n            return this.find(node.parentNode, bubble);\n        }\n        return null;\n    }\n    create(scroll, input, value) {\n        const match = this.query(input);\n        if (match == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Unable to create ${input} blot`);\n        }\n        const blotClass = match;\n        const node = \n        // @ts-ignore\n        input instanceof Node || input.nodeType === Node.TEXT_NODE\n            ? input\n            : blotClass.create(value);\n        const blot = new blotClass(scroll, node, value);\n        Registry.blots.set(blot.domNode, blot);\n        return blot;\n    }\n    find(node, bubble = false) {\n        return Registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        let match;\n        if (typeof query === 'string') {\n            match = this.types[query] || this.attributes[query];\n            // @ts-ignore\n        }\n        else if (query instanceof Text || query.nodeType === Node.TEXT_NODE) {\n            match = this.types.text;\n        }\n        else if (typeof query === 'number') {\n            if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK) {\n                match = this.types.block;\n            }\n            else if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].INLINE) {\n                match = this.types.inline;\n            }\n        }\n        else if (query instanceof HTMLElement) {\n            const names = (query.getAttribute('class') || '').split(/\\s+/);\n            names.some((name) => {\n                match = this.classes[name];\n                if (match) {\n                    return true;\n                }\n                return false;\n            });\n            match = match || this.tags[query.tagName];\n        }\n        if (match == null) {\n            return null;\n        }\n        // @ts-ignore\n        if (scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & match.scope && scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TYPE & match.scope) {\n            return match;\n        }\n        return null;\n    }\n    register(...definitions) {\n        if (definitions.length > 1) {\n            return definitions.map((d) => {\n                return this.register(d);\n            });\n        }\n        const definition = definitions[0];\n        if (typeof definition.blotName !== 'string' &&\n            typeof definition.attrName !== 'string') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Invalid definition');\n        }\n        else if (definition.blotName === 'abstract') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Cannot register abstract class');\n        }\n        this.types[definition.blotName || definition.attrName] = definition;\n        if (typeof definition.keyName === 'string') {\n            this.attributes[definition.keyName] = definition;\n        }\n        else {\n            if (definition.className != null) {\n                this.classes[definition.className] = definition;\n            }\n            if (definition.tagName != null) {\n                if (Array.isArray(definition.tagName)) {\n                    definition.tagName = definition.tagName.map((tagName) => {\n                        return tagName.toUpperCase();\n                    });\n                }\n                else {\n                    definition.tagName = definition.tagName.toUpperCase();\n                }\n                const tagNames = Array.isArray(definition.tagName)\n                    ? definition.tagName\n                    : [definition.tagName];\n                tagNames.forEach((tag) => {\n                    if (this.tags[tag] == null || definition.className == null) {\n                        this.tags[tag] = definition;\n                    }\n                });\n            }\n        }\n        return definition;\n    }\n}\nRegistry.blots = new WeakMap();\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/registry.ts?");/***/},/***/"./node_modules/parchment/src/scope.ts":/*!*********************************************!*\
    !*** ./node_modules/parchment/src/scope.ts ***!
    \*********************************************/ /*! exports provided: default */ /***/function node_modulesParchmentSrcScopeTs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nvar Scope;\n(function (Scope) {\n    Scope[Scope[\"TYPE\"] = 3] = \"TYPE\";\n    Scope[Scope[\"LEVEL\"] = 12] = \"LEVEL\";\n    Scope[Scope[\"ATTRIBUTE\"] = 13] = \"ATTRIBUTE\";\n    Scope[Scope[\"BLOT\"] = 14] = \"BLOT\";\n    Scope[Scope[\"INLINE\"] = 7] = \"INLINE\";\n    Scope[Scope[\"BLOCK\"] = 11] = \"BLOCK\";\n    Scope[Scope[\"BLOCK_BLOT\"] = 10] = \"BLOCK_BLOT\";\n    Scope[Scope[\"INLINE_BLOT\"] = 6] = \"INLINE_BLOT\";\n    Scope[Scope[\"BLOCK_ATTRIBUTE\"] = 9] = \"BLOCK_ATTRIBUTE\";\n    Scope[Scope[\"INLINE_ATTRIBUTE\"] = 5] = \"INLINE_ATTRIBUTE\";\n    Scope[Scope[\"ANY\"] = 15] = \"ANY\";\n})(Scope || (Scope = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scope);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/scope.ts?");/***/},/***/"./node_modules/process/browser.js":/*!*****************************************!*\
    !*** ./node_modules/process/browser.js ***!
    \*****************************************/ /*! no static exports found */ /***/function node_modulesProcessBrowserJs(module,exports){eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://Quill/./node_modules/process/browser.js?");/***/},/***/"./node_modules/quill-delta/dist/AttributeMap.js":/*!*******************************************************!*\
    !*** ./node_modules/quill-delta/dist/AttributeMap.js ***!
    \*******************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaDistAttributeMapJs(module,exports,__webpack_require__){eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/quill-delta/node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar AttributeMap;\n(function (AttributeMap) {\n    function compose(a, b, keepNull) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = extend_1.default(true, {}, b);\n        if (!keepNull) {\n            attributes = Object.keys(attributes).reduce(function (copy, key) {\n                if (attributes[key] != null) {\n                    copy[key] = attributes[key];\n                }\n                return copy;\n            }, {});\n        }\n        for (var key in a) {\n            if (a[key] !== undefined && b[key] === undefined) {\n                attributes[key] = a[key];\n            }\n        }\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.compose = compose;\n    function diff(a, b) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = Object.keys(a)\n            .concat(Object.keys(b))\n            .reduce(function (attrs, key) {\n            if (!deep_equal_1.default(a[key], b[key])) {\n                attrs[key] = b[key] === undefined ? null : b[key];\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.diff = diff;\n    function invert(attr, base) {\n        if (attr === void 0) { attr = {}; }\n        if (base === void 0) { base = {}; }\n        attr = attr || {};\n        var baseInverted = Object.keys(base).reduce(function (memo, key) {\n            if (base[key] !== attr[key] && attr[key] !== undefined) {\n                memo[key] = base[key];\n            }\n            return memo;\n        }, {});\n        return Object.keys(attr).reduce(function (memo, key) {\n            if (attr[key] !== base[key] && base[key] === undefined) {\n                memo[key] = null;\n            }\n            return memo;\n        }, baseInverted);\n    }\n    AttributeMap.invert = invert;\n    function transform(a, b, priority) {\n        if (priority === void 0) { priority = false; }\n        if (typeof a !== 'object') {\n            return b;\n        }\n        if (typeof b !== 'object') {\n            return undefined;\n        }\n        if (!priority) {\n            return b; // b simply overwrites us without priority\n        }\n        var attributes = Object.keys(b).reduce(function (attrs, key) {\n            if (a[key] === undefined) {\n                attrs[key] = b[key]; // null is a valid value\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.transform = transform;\n})(AttributeMap || (AttributeMap = {}));\nexports.default = AttributeMap;\n//# sourceMappingURL=AttributeMap.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/AttributeMap.js?");/***/},/***/"./node_modules/quill-delta/dist/Delta.js":/*!************************************************!*\
    !*** ./node_modules/quill-delta/dist/Delta.js ***!
    \************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaDistDeltaJs(module,exports,__webpack_require__){eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/quill-delta/node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar fast_diff_1 = __importDefault(__webpack_require__(/*! fast-diff */ \"./node_modules/fast-diff/diff.js\"));\nvar AttributeMap_1 = __importDefault(__webpack_require__(/*! ./AttributeMap */ \"./node_modules/quill-delta/dist/AttributeMap.js\"));\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()\nvar Delta = /** @class */ (function () {\n    function Delta(ops) {\n        // Assume we are given a well formed ops\n        if (Array.isArray(ops)) {\n            this.ops = ops;\n        }\n        else if (ops != null && Array.isArray(ops.ops)) {\n            this.ops = ops.ops;\n        }\n        else {\n            this.ops = [];\n        }\n    }\n    Delta.prototype.insert = function (arg, attributes) {\n        var newOp = {};\n        if (typeof arg === 'string' && arg.length === 0) {\n            return this;\n        }\n        newOp.insert = arg;\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.delete = function (length) {\n        if (length <= 0) {\n            return this;\n        }\n        return this.push({ delete: length });\n    };\n    Delta.prototype.retain = function (length, attributes) {\n        if (length <= 0) {\n            return this;\n        }\n        var newOp = { retain: length };\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.push = function (newOp) {\n        var index = this.ops.length;\n        var lastOp = this.ops[index - 1];\n        newOp = extend_1.default(true, {}, newOp);\n        if (typeof lastOp === 'object') {\n            if (typeof newOp.delete === 'number' &&\n                typeof lastOp.delete === 'number') {\n                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };\n                return this;\n            }\n            // Since it does not matter if we insert before or after deleting at the same index,\n            // always prefer to insert first\n            if (typeof lastOp.delete === 'number' && newOp.insert != null) {\n                index -= 1;\n                lastOp = this.ops[index - 1];\n                if (typeof lastOp !== 'object') {\n                    this.ops.unshift(newOp);\n                    return this;\n                }\n            }\n            if (deep_equal_1.default(newOp.attributes, lastOp.attributes)) {\n                if (typeof newOp.insert === 'string' &&\n                    typeof lastOp.insert === 'string') {\n                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n                else if (typeof newOp.retain === 'number' &&\n                    typeof lastOp.retain === 'number') {\n                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n            }\n        }\n        if (index === this.ops.length) {\n            this.ops.push(newOp);\n        }\n        else {\n            this.ops.splice(index, 0, newOp);\n        }\n        return this;\n    };\n    Delta.prototype.chop = function () {\n        var lastOp = this.ops[this.ops.length - 1];\n        if (lastOp && lastOp.retain && !lastOp.attributes) {\n            this.ops.pop();\n        }\n        return this;\n    };\n    Delta.prototype.filter = function (predicate) {\n        return this.ops.filter(predicate);\n    };\n    Delta.prototype.forEach = function (predicate) {\n        this.ops.forEach(predicate);\n    };\n    Delta.prototype.map = function (predicate) {\n        return this.ops.map(predicate);\n    };\n    Delta.prototype.partition = function (predicate) {\n        var passed = [];\n        var failed = [];\n        this.forEach(function (op) {\n            var target = predicate(op) ? passed : failed;\n            target.push(op);\n        });\n        return [passed, failed];\n    };\n    Delta.prototype.reduce = function (predicate, initialValue) {\n        return this.ops.reduce(predicate, initialValue);\n    };\n    Delta.prototype.changeLength = function () {\n        return this.reduce(function (length, elem) {\n            if (elem.insert) {\n                return length + Op_1.default.length(elem);\n            }\n            else if (elem.delete) {\n                return length - elem.delete;\n            }\n            return length;\n        }, 0);\n    };\n    Delta.prototype.length = function () {\n        return this.reduce(function (length, elem) {\n            return length + Op_1.default.length(elem);\n        }, 0);\n    };\n    Delta.prototype.slice = function (start, end) {\n        if (start === void 0) { start = 0; }\n        if (end === void 0) { end = Infinity; }\n        var ops = [];\n        var iter = Op_1.default.iterator(this.ops);\n        var index = 0;\n        while (index < end && iter.hasNext()) {\n            var nextOp = void 0;\n            if (index < start) {\n                nextOp = iter.next(start - index);\n            }\n            else {\n                nextOp = iter.next(end - index);\n                ops.push(nextOp);\n            }\n            index += Op_1.default.length(nextOp);\n        }\n        return new Delta(ops);\n    };\n    Delta.prototype.compose = function (other) {\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var ops = [];\n        var firstOther = otherIter.peek();\n        if (firstOther != null &&\n            typeof firstOther.retain === 'number' &&\n            firstOther.attributes == null) {\n            var firstLeft = firstOther.retain;\n            while (thisIter.peekType() === 'insert' &&\n                thisIter.peekLength() <= firstLeft) {\n                firstLeft -= thisIter.peekLength();\n                ops.push(thisIter.next());\n            }\n            if (firstOther.retain - firstLeft > 0) {\n                otherIter.next(firstOther.retain - firstLeft);\n            }\n        }\n        var delta = new Delta(ops);\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else if (thisIter.peekType() === 'delete') {\n                delta.push(thisIter.next());\n            }\n            else {\n                var length_1 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_1);\n                var otherOp = otherIter.next(length_1);\n                if (typeof otherOp.retain === 'number') {\n                    var newOp = {};\n                    if (typeof thisOp.retain === 'number') {\n                        newOp.retain = length_1;\n                    }\n                    else {\n                        newOp.insert = thisOp.insert;\n                    }\n                    // Preserve null when composing with a retain, otherwise remove it for inserts\n                    var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');\n                    if (attributes) {\n                        newOp.attributes = attributes;\n                    }\n                    delta.push(newOp);\n                    // Optimization if rest of other is just retain\n                    if (!otherIter.hasNext() &&\n                        deep_equal_1.default(delta.ops[delta.ops.length - 1], newOp)) {\n                        var rest = new Delta(thisIter.rest());\n                        return delta.concat(rest).chop();\n                    }\n                    // Other op should be delete, we could be an insert or retain\n                    // Insert + delete cancels out\n                }\n                else if (typeof otherOp.delete === 'number' &&\n                    typeof thisOp.retain === 'number') {\n                    delta.push(otherOp);\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.concat = function (other) {\n        var delta = new Delta(this.ops.slice());\n        if (other.ops.length > 0) {\n            delta.push(other.ops[0]);\n            delta.ops = delta.ops.concat(other.ops.slice(1));\n        }\n        return delta;\n    };\n    Delta.prototype.diff = function (other, cursor) {\n        if (this.ops === other.ops) {\n            return new Delta();\n        }\n        var strings = [this, other].map(function (delta) {\n            return delta\n                .map(function (op) {\n                if (op.insert != null) {\n                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;\n                }\n                var prep = delta === other ? 'on' : 'with';\n                throw new Error('diff() called ' + prep + ' non-document');\n            })\n                .join('');\n        });\n        var retDelta = new Delta();\n        var diffResult = fast_diff_1.default(strings[0], strings[1], cursor);\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        diffResult.forEach(function (component) {\n            var length = component[1].length;\n            while (length > 0) {\n                var opLength = 0;\n                switch (component[0]) {\n                    case fast_diff_1.default.INSERT:\n                        opLength = Math.min(otherIter.peekLength(), length);\n                        retDelta.push(otherIter.next(opLength));\n                        break;\n                    case fast_diff_1.default.DELETE:\n                        opLength = Math.min(length, thisIter.peekLength());\n                        thisIter.next(opLength);\n                        retDelta.delete(opLength);\n                        break;\n                    case fast_diff_1.default.EQUAL:\n                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);\n                        var thisOp = thisIter.next(opLength);\n                        var otherOp = otherIter.next(opLength);\n                        if (deep_equal_1.default(thisOp.insert, otherOp.insert)) {\n                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));\n                        }\n                        else {\n                            retDelta.push(otherOp).delete(opLength);\n                        }\n                        break;\n                }\n                length -= opLength;\n            }\n        });\n        return retDelta.chop();\n    };\n    Delta.prototype.eachLine = function (predicate, newline) {\n        if (newline === void 0) { newline = '\\n'; }\n        var iter = Op_1.default.iterator(this.ops);\n        var line = new Delta();\n        var i = 0;\n        while (iter.hasNext()) {\n            if (iter.peekType() !== 'insert') {\n                return;\n            }\n            var thisOp = iter.peek();\n            var start = Op_1.default.length(thisOp) - iter.peekLength();\n            var index = typeof thisOp.insert === 'string'\n                ? thisOp.insert.indexOf(newline, start) - start\n                : -1;\n            if (index < 0) {\n                line.push(iter.next());\n            }\n            else if (index > 0) {\n                line.push(iter.next(index));\n            }\n            else {\n                if (predicate(line, iter.next(1).attributes || {}, i) === false) {\n                    return;\n                }\n                i += 1;\n                line = new Delta();\n            }\n        }\n        if (line.length() > 0) {\n            predicate(line, {}, i);\n        }\n    };\n    Delta.prototype.invert = function (base) {\n        var inverted = new Delta();\n        this.reduce(function (baseIndex, op) {\n            if (op.insert) {\n                inverted.delete(Op_1.default.length(op));\n            }\n            else if (op.retain && op.attributes == null) {\n                inverted.retain(op.retain);\n                return baseIndex + op.retain;\n            }\n            else if (op.delete || (op.retain && op.attributes)) {\n                var length_2 = (op.delete || op.retain);\n                var slice = base.slice(baseIndex, baseIndex + length_2);\n                slice.forEach(function (baseOp) {\n                    if (op.delete) {\n                        inverted.push(baseOp);\n                    }\n                    else if (op.retain && op.attributes) {\n                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));\n                    }\n                });\n                return baseIndex + length_2;\n            }\n            return baseIndex;\n        }, 0);\n        return inverted.chop();\n    };\n    Delta.prototype.transform = function (arg, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        if (typeof arg === 'number') {\n            return this.transformPosition(arg, priority);\n        }\n        var other = arg;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var delta = new Delta();\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (thisIter.peekType() === 'insert' &&\n                (priority || otherIter.peekType() !== 'insert')) {\n                delta.retain(Op_1.default.length(thisIter.next()));\n            }\n            else if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else {\n                var length_3 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_3);\n                var otherOp = otherIter.next(length_3);\n                if (thisOp.delete) {\n                    // Our delete either makes their delete redundant or removes their retain\n                    continue;\n                }\n                else if (otherOp.delete) {\n                    delta.push(otherOp);\n                }\n                else {\n                    // We retain either their retain or insert\n                    delta.retain(length_3, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.transformPosition = function (index, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var offset = 0;\n        while (thisIter.hasNext() && offset <= index) {\n            var length_4 = thisIter.peekLength();\n            var nextType = thisIter.peekType();\n            thisIter.next();\n            if (nextType === 'delete') {\n                index -= Math.min(length_4, index - offset);\n                continue;\n            }\n            else if (nextType === 'insert' && (offset < index || !priority)) {\n                index += length_4;\n            }\n            offset += length_4;\n        }\n        return index;\n    };\n    Delta.Op = Op_1.default;\n    Delta.AttributeMap = AttributeMap_1.default;\n    return Delta;\n}());\nmodule.exports = Delta;\n//# sourceMappingURL=Delta.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Delta.js?");/***/},/***/"./node_modules/quill-delta/dist/Iterator.js":/*!***************************************************!*\
    !*** ./node_modules/quill-delta/dist/Iterator.js ***!
    \***************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaDistIteratorJs(module,exports,__webpack_require__){eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar Iterator = /** @class */ (function () {\n    function Iterator(ops) {\n        this.ops = ops;\n        this.index = 0;\n        this.offset = 0;\n    }\n    Iterator.prototype.hasNext = function () {\n        return this.peekLength() < Infinity;\n    };\n    Iterator.prototype.next = function (length) {\n        if (!length) {\n            length = Infinity;\n        }\n        var nextOp = this.ops[this.index];\n        if (nextOp) {\n            var offset = this.offset;\n            var opLength = Op_1.default.length(nextOp);\n            if (length >= opLength - offset) {\n                length = opLength - offset;\n                this.index += 1;\n                this.offset = 0;\n            }\n            else {\n                this.offset += length;\n            }\n            if (typeof nextOp.delete === 'number') {\n                return { delete: length };\n            }\n            else {\n                var retOp = {};\n                if (nextOp.attributes) {\n                    retOp.attributes = nextOp.attributes;\n                }\n                if (typeof nextOp.retain === 'number') {\n                    retOp.retain = length;\n                }\n                else if (typeof nextOp.insert === 'string') {\n                    retOp.insert = nextOp.insert.substr(offset, length);\n                }\n                else {\n                    // offset should === 0, length should === 1\n                    retOp.insert = nextOp.insert;\n                }\n                return retOp;\n            }\n        }\n        else {\n            return { retain: Infinity };\n        }\n    };\n    Iterator.prototype.peek = function () {\n        return this.ops[this.index];\n    };\n    Iterator.prototype.peekLength = function () {\n        if (this.ops[this.index]) {\n            // Should never return 0 if our index is being managed correctly\n            return Op_1.default.length(this.ops[this.index]) - this.offset;\n        }\n        else {\n            return Infinity;\n        }\n    };\n    Iterator.prototype.peekType = function () {\n        if (this.ops[this.index]) {\n            if (typeof this.ops[this.index].delete === 'number') {\n                return 'delete';\n            }\n            else if (typeof this.ops[this.index].retain === 'number') {\n                return 'retain';\n            }\n            else {\n                return 'insert';\n            }\n        }\n        return 'retain';\n    };\n    Iterator.prototype.rest = function () {\n        if (!this.hasNext()) {\n            return [];\n        }\n        else if (this.offset === 0) {\n            return this.ops.slice(this.index);\n        }\n        else {\n            var offset = this.offset;\n            var index = this.index;\n            var next = this.next();\n            var rest = this.ops.slice(this.index);\n            this.offset = offset;\n            this.index = index;\n            return [next].concat(rest);\n        }\n    };\n    return Iterator;\n}());\nexports.default = Iterator;\n//# sourceMappingURL=Iterator.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Iterator.js?");/***/},/***/"./node_modules/quill-delta/dist/Op.js":/*!*********************************************!*\
    !*** ./node_modules/quill-delta/dist/Op.js ***!
    \*********************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaDistOpJs(module,exports,__webpack_require__){eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Iterator_1 = __importDefault(__webpack_require__(/*! ./Iterator */ \"./node_modules/quill-delta/dist/Iterator.js\"));\nvar Op;\n(function (Op) {\n    function iterator(ops) {\n        return new Iterator_1.default(ops);\n    }\n    Op.iterator = iterator;\n    function length(op) {\n        if (typeof op.delete === 'number') {\n            return op.delete;\n        }\n        else if (typeof op.retain === 'number') {\n            return op.retain;\n        }\n        else {\n            return typeof op.insert === 'string' ? op.insert.length : 1;\n        }\n    }\n    Op.length = length;\n})(Op || (Op = {}));\nexports.default = Op;\n//# sourceMappingURL=Op.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Op.js?");/***/},/***/"./node_modules/quill-delta/node_modules/deep-equal/index.js":/*!*******************************************************************!*\
    !*** ./node_modules/quill-delta/node_modules/deep-equal/index.js ***!
    \*******************************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaNode_modulesDeepEqualIndexJs(module,exports,__webpack_require__){eval("var objectKeys = __webpack_require__(/*! object-keys */ \"./node_modules/quill-delta/node_modules/object-keys/index.js\");\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar is = __webpack_require__(/*! object-is */ \"./node_modules/object-is/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/is-regex/index.js\");\nvar flags = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/is-date-object/index.js\");\n\nvar getTime = Date.prototype.getTime;\n\nfunction deepEqual(actual, expected, options) {\n  var opts = options || {};\n\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (opts.strict ? is(actual, expected) : actual === expected) {\n    return true;\n  }\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.\n  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {\n    return opts.strict ? is(actual, expected) : actual == expected;\n  }\n\n  /*\n   * 7.4. For all other Object pairs, including Array objects, equivalence is\n   * determined by having the same number of owned properties (as verified\n   * with Object.prototype.hasOwnProperty.call), the same set of keys\n   * (although not necessarily the same order), equivalent values for every\n   * corresponding key, and an identical 'prototype' property. Note: this\n   * accounts for both named and indexed properties on Arrays.\n   */\n  // eslint-disable-next-line no-use-before-define\n  return objEquiv(actual, expected, opts);\n}\n\nfunction isUndefinedOrNull(value) {\n  return value === null || value === undefined;\n}\n\nfunction isBuffer(x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {\n    return false;\n  }\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') {\n    return false;\n  }\n  return true;\n}\n\nfunction objEquiv(a, b, opts) {\n  /* eslint max-statements: [2, 50] */\n  var i, key;\n  if (typeof a !== typeof b) { return false; }\n  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }\n\n  // an identical 'prototype' property.\n  if (a.prototype !== b.prototype) { return false; }\n\n  if (isArguments(a) !== isArguments(b)) { return false; }\n\n  var aIsRegex = isRegex(a);\n  var bIsRegex = isRegex(b);\n  if (aIsRegex !== bIsRegex) { return false; }\n  if (aIsRegex || bIsRegex) {\n    return a.source === b.source && flags(a) === flags(b);\n  }\n\n  if (isDate(a) && isDate(b)) {\n    return getTime.call(a) === getTime.call(b);\n  }\n\n  var aIsBuffer = isBuffer(a);\n  var bIsBuffer = isBuffer(b);\n  if (aIsBuffer !== bIsBuffer) { return false; }\n  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here\n    if (a.length !== b.length) { return false; }\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) { return false; }\n    }\n    return true;\n  }\n\n  if (typeof a !== typeof b) { return false; }\n\n  try {\n    var ka = objectKeys(a);\n    var kb = objectKeys(b);\n  } catch (e) { // happens when one is a string literal and the other isn't\n    return false;\n  }\n  // having the same number of owned properties (keys incorporates hasOwnProperty)\n  if (ka.length !== kb.length) { return false; }\n\n  // the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  // ~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i]) { return false; }\n  }\n  // equivalent values for every corresponding key, and ~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key], opts)) { return false; }\n  }\n\n  return true;\n}\n\nmodule.exports = deepEqual;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/deep-equal/index.js?");/***/},/***/"./node_modules/quill-delta/node_modules/object-keys/implementation.js":/*!*****************************************************************************!*\
    !*** ./node_modules/quill-delta/node_modules/object-keys/implementation.js ***!
    \*****************************************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaNode_modulesObjectKeysImplementationJs(module,exports,__webpack_require__){eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/quill-delta/node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/implementation.js?");/***/},/***/"./node_modules/quill-delta/node_modules/object-keys/index.js":/*!********************************************************************!*\
    !*** ./node_modules/quill-delta/node_modules/object-keys/index.js ***!
    \********************************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaNode_modulesObjectKeysIndexJs(module,exports,__webpack_require__){eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/quill-delta/node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/quill-delta/node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/index.js?");/***/},/***/"./node_modules/quill-delta/node_modules/object-keys/isArguments.js":/*!**************************************************************************!*\
    !*** ./node_modules/quill-delta/node_modules/object-keys/isArguments.js ***!
    \**************************************************************************/ /*! no static exports found */ /***/function node_modulesQuillDeltaNode_modulesObjectKeysIsArgumentsJs(module,exports,__webpack_require__){eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/isArguments.js?");/***/},/***/"./node_modules/regexp.prototype.flags/implementation.js":/*!***************************************************************!*\
    !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
    \***************************************************************/ /*! no static exports found */ /***/function node_modulesRegexpPrototypeFlagsImplementationJs(module,exports,__webpack_require__){eval("\n\nvar $Object = Object;\nvar $TypeError = TypeError;\n\nmodule.exports = function flags() {\n\tif (this != null && this !== $Object(this)) {\n\t\tthrow new $TypeError('RegExp.prototype.flags getter called on non-object');\n\t}\n\tvar result = '';\n\tif (this.global) {\n\t\tresult += 'g';\n\t}\n\tif (this.ignoreCase) {\n\t\tresult += 'i';\n\t}\n\tif (this.multiline) {\n\t\tresult += 'm';\n\t}\n\tif (this.dotAll) {\n\t\tresult += 's';\n\t}\n\tif (this.unicode) {\n\t\tresult += 'u';\n\t}\n\tif (this.sticky) {\n\t\tresult += 'y';\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/implementation.js?");/***/},/***/"./node_modules/regexp.prototype.flags/index.js":/*!******************************************************!*\
    !*** ./node_modules/regexp.prototype.flags/index.js ***!
    \******************************************************/ /*! no static exports found */ /***/function node_modulesRegexpPrototypeFlagsIndexJs(module,exports,__webpack_require__){eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ \"./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/regexp.prototype.flags/shim.js\");\n\nvar flagsBound = callBind(implementation);\n\ndefine(flagsBound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = flagsBound;\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/index.js?");/***/},/***/"./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js":/*!**************************************************************************************!*\
    !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js ***!
    \**************************************************************************************/ /*! no static exports found */ /***/function node_modulesRegexpPrototypeFlagsNode_modulesEsAbstractGetIntrinsicJs(module,exports,__webpack_require__){eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js?");/***/},/***/"./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js":/*!******************************************************************************************!*\
    !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js ***!
    \******************************************************************************************/ /*! no static exports found */ /***/function node_modulesRegexpPrototypeFlagsNode_modulesEsAbstractHelpersCallBindJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js?");/***/},/***/"./node_modules/regexp.prototype.flags/polyfill.js":/*!*********************************************************!*\
    !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
    \*********************************************************/ /*! no static exports found */ /***/function node_modulesRegexpPrototypeFlagsPolyfillJs(module,exports,__webpack_require__){eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors;\nvar $gOPD = Object.getOwnPropertyDescriptor;\nvar $TypeError = TypeError;\n\nmodule.exports = function getPolyfill() {\n\tif (!supportsDescriptors) {\n\t\tthrow new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tif ((/a/mig).flags === 'gim') {\n\t\tvar descriptor = $gOPD(RegExp.prototype, 'flags');\n\t\tif (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {\n\t\t\treturn descriptor.get;\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/polyfill.js?");/***/},/***/"./node_modules/regexp.prototype.flags/shim.js":/*!*****************************************************!*\
    !*** ./node_modules/regexp.prototype.flags/shim.js ***!
    \*****************************************************/ /*! no static exports found */ /***/function node_modulesRegexpPrototypeFlagsShimJs(module,exports,__webpack_require__){eval("\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors;\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar defineProperty = Object.defineProperty;\nvar TypeErr = TypeError;\nvar getProto = Object.getPrototypeOf;\nvar regex = /a/;\n\nmodule.exports = function shimFlags() {\n\tif (!supportsDescriptors || !getProto) {\n\t\tthrow new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tvar polyfill = getPolyfill();\n\tvar proto = getProto(regex);\n\tvar descriptor = gOPD(proto, 'flags');\n\tif (!descriptor || descriptor.get !== polyfill) {\n\t\tdefineProperty(proto, 'flags', {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tget: polyfill\n\t\t});\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/shim.js?");/***/},/***/"./node_modules/side-channel/index.js":/*!********************************************!*\
    !*** ./node_modules/side-channel/index.js ***!
    \********************************************/ /*! no static exports found */ /***/function node_modulesSideChannelIndexJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js\");\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $WeakMap = GetIntrinsic('%WeakMap%', true);\nvar $Map = GetIntrinsic('%Map%', true);\nvar $push = callBound('Array.prototype.push');\n\nvar $weakMapGet = callBound('WeakMap.prototype.get', true);\nvar $weakMapSet = callBound('WeakMap.prototype.set', true);\nvar $weakMapHas = callBound('WeakMap.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSet = callBound('Map.prototype.set', true);\nvar $mapHas = callBound('Map.prototype.has', true);\nvar objectGet = function (objects, key) { // eslint-disable-line consistent-return\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\treturn objects[i].value;\n\t\t}\n\t}\n};\nvar objectSet = function (objects, key, value) {\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\tobjects[i].value = value; // eslint-disable-line no-param-reassign\n\t\t\treturn;\n\t\t}\n\t}\n\t$push(objects, {\n\t\tkey: key,\n\t\tvalue: value\n\t});\n};\nvar objectHas = function (objects, key) {\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n};\n\nmodule.exports = function getSideChannel() {\n\tvar $wm;\n\tvar $m;\n\tvar $o;\n\tvar channel = {\n\t\tassert: function (key) {\n\t\t\tif (!channel.has(key)) {\n\t\t\t\tthrow new $TypeError('Side channel does not contain ' + inspect(key));\n\t\t\t}\n\t\t},\n\t\tget: function (key) { // eslint-disable-line consistent-return\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapGet($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapGet($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn objectGet($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\thas: function (key) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapHas($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapHas($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn objectHas($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t},\n\t\tset: function (key, value) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif (!$wm) {\n\t\t\t\t\t$wm = new $WeakMap();\n\t\t\t\t}\n\t\t\t\t$weakMapSet($wm, key, value);\n\t\t\t} else if ($Map) {\n\t\t\t\tif (!$m) {\n\t\t\t\t\t$m = new $Map();\n\t\t\t\t}\n\t\t\t\t$mapSet($m, key, value);\n\t\t\t} else {\n\t\t\t\tif (!$o) {\n\t\t\t\t\t$o = [];\n\t\t\t\t}\n\t\t\t\tobjectSet($o, key, value);\n\t\t\t}\n\t\t}\n\t};\n\treturn channel;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/index.js?");/***/},/***/"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js":/*!****************************************************************************!*\
    !*** ./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js ***!
    \****************************************************************************/ /*! no static exports found */ /***/function node_modulesSideChannelNode_modulesEsAbstractGetIntrinsicJs(module,exports,__webpack_require__){eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js?");/***/},/***/"./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js":/*!********************************************************************************!*\
    !*** ./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js ***!
    \********************************************************************************/ /*! no static exports found */ /***/function node_modulesSideChannelNode_modulesEsAbstractHelpersCallBindJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js?");/***/},/***/"./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js":/*!*********************************************************************************!*\
    !*** ./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js ***!
    \*********************************************************************************/ /*! no static exports found */ /***/function node_modulesSideChannelNode_modulesEsAbstractHelpersCallBoundJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js?");/***/},/***/"./node_modules/webpack/buildin/global.js":/*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/ /*! no static exports found */ /***/function node_modulesWebpackBuildinGlobalJs(module,exports){eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Quill/(webpack)/buildin/global.js?");/***/},/***/"./node_modules/which-boxed-primitive/index.js":/*!*****************************************************!*\
    !*** ./node_modules/which-boxed-primitive/index.js ***!
    \*****************************************************/ /*! no static exports found */ /***/function node_modulesWhichBoxedPrimitiveIndexJs(module,exports,__webpack_require__){eval("\n\nvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\nvar isNumber = __webpack_require__(/*! is-number-object */ \"./node_modules/is-number-object/index.js\");\nvar isBoolean = __webpack_require__(/*! is-boolean-object */ \"./node_modules/is-boolean-object/index.js\");\nvar isSymbol = __webpack_require__(/*! is-symbol */ \"./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js\");\nvar isBigInt = __webpack_require__(/*! is-bigint */ \"./node_modules/is-bigint/index.js\");\n\n// eslint-disable-next-line consistent-return\nmodule.exports = function whichBoxedPrimitive(value) {\n\t// eslint-disable-next-line eqeqeq\n\tif (value == null || (typeof value !== 'object' && typeof value !== 'function')) {\n\t\treturn null;\n\t}\n\tif (isString(value)) {\n\t\treturn 'String';\n\t}\n\tif (isNumber(value)) {\n\t\treturn 'Number';\n\t}\n\tif (isBoolean(value)) {\n\t\treturn 'Boolean';\n\t}\n\tif (isSymbol(value)) {\n\t\treturn 'Symbol';\n\t}\n\tif (isBigInt(value)) {\n\t\treturn 'BigInt';\n\t}\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/index.js?");/***/},/***/"./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js":/*!****************************************************************************!*\
    !*** ./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js ***!
    \****************************************************************************/ /*! no static exports found */ /***/function node_modulesWhichBoxedPrimitiveNode_modulesIsSymbolIndexJs(module,exports,__webpack_require__){eval("\n\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nif (hasSymbols) {\n\tvar symToStr = Symbol.prototype.toString;\n\tvar symStringRegex = /^Symbol\\(.*\\)$/;\n\tvar isSymbolObject = function isRealSymbolObject(value) {\n\t\tif (typeof value.valueOf() !== 'symbol') {\n\t\t\treturn false;\n\t\t}\n\t\treturn symStringRegex.test(symToStr.call(value));\n\t};\n\n\tmodule.exports = function isSymbol(value) {\n\t\tif (typeof value === 'symbol') {\n\t\t\treturn true;\n\t\t}\n\t\tif (toStr.call(value) !== '[object Symbol]') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\treturn isSymbolObject(value);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n} else {\n\n\tmodule.exports = function isSymbol(value) {\n\t\t// this environment does not support Symbols.\n\t\treturn  false && false;\n\t};\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js?");/***/},/***/"./node_modules/which-collection/index.js":/*!************************************************!*\
    !*** ./node_modules/which-collection/index.js ***!
    \************************************************/ /*! no static exports found */ /***/function node_modulesWhichCollectionIndexJs(module,exports,__webpack_require__){eval("\n\nvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\nvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\nvar isWeakMap = __webpack_require__(/*! is-weakmap */ \"./node_modules/is-weakmap/index.js\");\nvar isWeakSet = __webpack_require__(/*! is-weakset */ \"./node_modules/is-weakset/index.js\");\n\nmodule.exports = function whichCollection(value) {\n\tif (value && typeof value === 'object') {\n\t\tif (isMap(value)) {\n\t\t\treturn 'Map';\n\t\t}\n\t\tif (isSet(value)) {\n\t\t\treturn 'Set';\n\t\t}\n\t\tif (isWeakMap(value)) {\n\t\t\treturn 'WeakMap';\n\t\t}\n\t\tif (isWeakSet(value)) {\n\t\t\treturn 'WeakSet';\n\t\t}\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-collection/index.js?");/***/},/***/"./node_modules/which-typed-array/index.js":/*!*************************************************!*\
    !*** ./node_modules/which-typed-array/index.js ***!
    \*************************************************/ /*! no static exports found */ /***/function node_modulesWhichTypedArrayIndexJs(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar forEach = __webpack_require__(/*! foreach */ \"./node_modules/foreach/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"./node_modules/available-typed-arrays/index.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';\n\nvar typedArrays = availableTypedArrays();\n\nvar $slice = callBound('String.prototype.slice');\nvar toStrTags = {};\nvar gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js\");\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tif (typeof global[typedArray] === 'function') {\n\t\t\tvar arr = new global[typedArray]();\n\t\t\tif (!(Symbol.toStringTag in arr)) {\n\t\t\t\tthrow new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');\n\t\t\t}\n\t\t\tvar proto = getPrototypeOf(arr);\n\t\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\t\tif (!descriptor) {\n\t\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t\t}\n\t\t\ttoStrTags[typedArray] = descriptor.get;\n\t\t}\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar foundName = false;\n\tforEach(toStrTags, function (getter, typedArray) {\n\t\tif (!foundName) {\n\t\t\ttry {\n\t\t\t\tvar name = getter.call(value);\n\t\t\t\tif (name === typedArray) {\n\t\t\t\t\tfoundName = name;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\t\t}\n\t});\n\treturn foundName;\n};\n\nvar isTypedArray = __webpack_require__(/*! is-typed-array */ \"./node_modules/is-typed-array/index.js\");\n\nmodule.exports = function whichTypedArray(value) {\n\tif (!isTypedArray(value)) { return false; }\n\tif (!hasToStringTag) { return $slice($toString(value), 8, -1); }\n\treturn tryTypedArrays(value);\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/index.js?");/***/},/***/"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js":/*!*********************************************************************************!*\
    !*** ./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js ***!
    \*********************************************************************************/ /*! no static exports found */ /***/function node_modulesWhichTypedArrayNode_modulesEsAbstractGetIntrinsicJs(module,exports,__webpack_require__){eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js?");/***/},/***/"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js":/*!*************************************************************************************!*\
    !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js ***!
    \*************************************************************************************/ /*! no static exports found */ /***/function node_modulesWhichTypedArrayNode_modulesEsAbstractHelpersCallBindJs(module,exports,__webpack_require__){eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js?");/***/},/***/"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js":/*!**************************************************************************************!*\
    !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js ***!
    \**************************************************************************************/ /*! no static exports found */ /***/function node_modulesWhichTypedArrayNode_modulesEsAbstractHelpersCallBoundJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js?");/***/},/***/"./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":/*!*****************************************************************************************************!*\
    !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
    \*****************************************************************************************************/ /*! no static exports found */ /***/function node_modulesWhichTypedArrayNode_modulesEsAbstractHelpersGetOwnPropertyDescriptorJs(module,exports,__webpack_require__){eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?");/***/},/***/"./quill.js":/*!******************!*\
    !*** ./quill.js ***!
    \******************/ /*! exports provided: default */ /***/function quillJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./core.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_indent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/indent */ \"./formats/indent.js\");\n/* harmony import */ var _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats/blockquote */ \"./formats/blockquote.js\");\n/* harmony import */ var _formats_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats/header */ \"./formats/header.js\");\n/* harmony import */ var _formats_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/list */ \"./formats/list.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/size */ \"./formats/size.js\");\n/* harmony import */ var _formats_bold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formats/bold */ \"./formats/bold.js\");\n/* harmony import */ var _formats_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formats/italic */ \"./formats/italic.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formats/link */ \"./formats/link.js\");\n/* harmony import */ var _formats_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formats/script */ \"./formats/script.js\");\n/* harmony import */ var _formats_strike__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formats/strike */ \"./formats/strike.js\");\n/* harmony import */ var _formats_underline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formats/underline */ \"./formats/underline.js\");\n/* harmony import */ var _formats_formula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formats/formula */ \"./formats/formula.js\");\n/* harmony import */ var _formats_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formats/image */ \"./formats/image.js\");\n/* harmony import */ var _formats_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formats/video */ \"./formats/video.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formats/code */ \"./formats/code.js\");\n/* harmony import */ var _modules_syntax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/syntax */ \"./modules/syntax.js\");\n/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/table */ \"./modules/table.js\");\n/* harmony import */ var _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/toolbar */ \"./modules/toolbar.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/icons */ \"./ui/icons.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/tooltip */ \"./ui/tooltip.js\");\n/* harmony import */ var _themes_bubble__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/bubble */ \"./themes/bubble.js\");\n/* harmony import */ var _themes_snow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/snow */ \"./themes/snow.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'attributors/attribute/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionAttribute\"],\n  'attributors/class/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n  'attributors/class/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundClass\"],\n  'attributors/class/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorClass\"],\n  'attributors/class/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n  'attributors/class/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n  'attributors/class/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n  'attributors/style/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignStyle\"],\n  'attributors/style/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n  'attributors/style/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n  'attributors/style/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionStyle\"],\n  'attributors/style/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontStyle\"],\n  'attributors/style/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeStyle\"]\n}, true);\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'formats/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n  'formats/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n  'formats/indent': _formats_indent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'formats/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n  'formats/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n  'formats/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n  'formats/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n  'formats/blockquote': _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'formats/code-block': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  'formats/header': _formats_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'formats/list': _formats_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'formats/bold': _formats_bold__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'formats/code': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"Code\"],\n  'formats/italic': _formats_italic__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  'formats/link': _formats_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  'formats/script': _formats_script__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  'formats/strike': _formats_strike__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  'formats/underline': _formats_underline__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  'formats/formula': _formats_formula__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  'formats/image': _formats_image__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  'formats/video': _formats_video__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  'modules/syntax': _modules_syntax__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  'modules/table': _modules_table__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  'modules/toolbar': _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  'themes/bubble': _themes_bubble__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  'themes/snow': _themes_snow__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n  'ui/icons': _ui_icons__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  'ui/picker': _ui_picker__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  'ui/icon-picker': _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  'ui/color-picker': _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  'ui/tooltip': _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__[\"default\"]\n}, true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./quill.js?");/***/},/***/"./themes/base.js":/*!************************!*\
    !*** ./themes/base.js ***!
    \************************/ /*! exports provided: BaseTooltip, default */ /***/function themesBaseJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseTooltip\", function() { return BaseTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseTheme; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/theme */ \"./core/theme.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/tooltip */ \"./ui/tooltip.js\");\n\n\n\n\n\n\n\nconst ALIGNS = [false, 'center', 'right', 'justify'];\nconst COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];\nconst FONTS = [false, 'serif', 'monospace'];\nconst HEADERS = ['1', '2', '3', false];\nconst SIZES = ['small', false, 'large', 'huge'];\n\nclass BaseTheme extends _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n\n    const listener = e => {\n      if (!document.body.contains(quill.root)) {\n        document.body.removeEventListener('click', listener);\n        return;\n      }\n\n      if (this.tooltip != null && !this.tooltip.root.contains(e.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {\n        this.tooltip.hide();\n      }\n\n      if (this.pickers != null) {\n        this.pickers.forEach(picker => {\n          if (!picker.container.contains(e.target)) {\n            picker.close();\n          }\n        });\n      }\n    };\n\n    quill.emitter.listenDOM('click', document.body, listener);\n  }\n\n  addModule(name) {\n    const module = super.addModule(name);\n\n    if (name === 'toolbar') {\n      this.extendToolbar(module);\n    }\n\n    return module;\n  }\n\n  buildButtons(buttons, icons) {\n    Array.from(buttons).forEach(button => {\n      const className = button.getAttribute('class') || '';\n      className.split(/\\s+/).forEach(name => {\n        if (!name.startsWith('ql-')) return;\n        name = name.slice('ql-'.length);\n        if (icons[name] == null) return;\n\n        if (name === 'direction') {\n          button.innerHTML = icons[name][''] + icons[name].rtl;\n        } else if (typeof icons[name] === 'string') {\n          button.innerHTML = icons[name];\n        } else {\n          const value = button.value || '';\n\n          if (value != null && icons[name][value]) {\n            button.innerHTML = icons[name][value];\n          }\n        }\n      });\n    });\n  }\n\n  buildPickers(selects, icons) {\n    this.pickers = Array.from(selects).map(select => {\n      if (select.classList.contains('ql-align')) {\n        if (select.querySelector('option') == null) {\n          fillSelect(select, ALIGNS);\n        }\n\n        return new _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](select, icons.align);\n      }\n\n      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {\n        const format = select.classList.contains('ql-background') ? 'background' : 'color';\n\n        if (select.querySelector('option') == null) {\n          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');\n        }\n\n        return new _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__[\"default\"](select, icons[format]);\n      }\n\n      if (select.querySelector('option') == null) {\n        if (select.classList.contains('ql-font')) {\n          fillSelect(select, FONTS);\n        } else if (select.classList.contains('ql-header')) {\n          fillSelect(select, HEADERS);\n        } else if (select.classList.contains('ql-size')) {\n          fillSelect(select, SIZES);\n        }\n      }\n\n      return new _ui_picker__WEBPACK_IMPORTED_MODULE_5__[\"default\"](select);\n    });\n\n    const update = () => {\n      this.pickers.forEach(picker => {\n        picker.update();\n      });\n    };\n\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, update);\n  }\n\n}\n\nBaseTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        formula() {\n          this.quill.theme.tooltip.edit('formula');\n        },\n\n        image() {\n          let fileInput = this.container.querySelector('input.ql-image[type=file]');\n\n          if (fileInput == null) {\n            fileInput = document.createElement('input');\n            fileInput.setAttribute('type', 'file');\n            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));\n            fileInput.classList.add('ql-image');\n            fileInput.addEventListener('change', () => {\n              const range = this.quill.getSelection(true);\n              this.quill.uploader.upload(range, fileInput.files);\n              fileInput.value = '';\n            });\n            this.container.appendChild(fileInput);\n          }\n\n          fileInput.click();\n        },\n\n        video() {\n          this.quill.theme.tooltip.edit('video');\n        }\n\n      }\n    }\n  }\n});\n\nclass BaseTooltip extends _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, boundsContainer) {\n    super(quill, boundsContainer);\n    this.textbox = this.root.querySelector('input[type=\"text\"]');\n    this.listen();\n  }\n\n  listen() {\n    this.textbox.addEventListener('keydown', event => {\n      if (event.key === 'Enter') {\n        this.save();\n        event.preventDefault();\n      } else if (event.key === 'Escape') {\n        this.cancel();\n        event.preventDefault();\n      }\n    });\n  }\n\n  cancel() {\n    this.hide();\n  }\n\n  edit(mode = 'link', preview = null) {\n    this.root.classList.remove('ql-hidden');\n    this.root.classList.add('ql-editing');\n\n    if (preview != null) {\n      this.textbox.value = preview;\n    } else if (mode !== this.root.getAttribute('data-mode')) {\n      this.textbox.value = '';\n    }\n\n    this.position(this.quill.getBounds(this.quill.selection.savedRange));\n    this.textbox.select();\n    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(\"data-\".concat(mode)) || '');\n    this.root.setAttribute('data-mode', mode);\n  }\n\n  restoreFocus() {\n    const {\n      scrollTop\n    } = this.quill.scrollingContainer;\n    this.quill.focus();\n    this.quill.scrollingContainer.scrollTop = scrollTop;\n  }\n\n  save() {\n    let {\n      value\n    } = this.textbox;\n\n    switch (this.root.getAttribute('data-mode')) {\n      case 'link':\n        {\n          const {\n            scrollTop\n          } = this.quill.root;\n\n          if (this.linkRange) {\n            this.quill.formatText(this.linkRange, 'link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            delete this.linkRange;\n          } else {\n            this.restoreFocus();\n            this.quill.format('link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n\n          this.quill.root.scrollTop = scrollTop;\n          break;\n        }\n\n      case 'video':\n        {\n          value = extractVideoUrl(value);\n        }\n      // eslint-disable-next-line no-fallthrough\n\n      case 'formula':\n        {\n          if (!value) break;\n          const range = this.quill.getSelection(true);\n\n          if (range != null) {\n            const index = range.index + range.length;\n            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n\n            if (this.root.getAttribute('data-mode') === 'formula') {\n              this.quill.insertText(index + 1, ' ', _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            }\n\n            this.quill.setSelection(index + 2, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n\n          break;\n        }\n\n      default:\n    }\n\n    this.textbox.value = '';\n    this.hide();\n  }\n\n}\n\nfunction extractVideoUrl(url) {\n  let match = url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtube\\.com\\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtu\\.be\\/([a-zA-Z0-9_-]+)/);\n\n  if (match) {\n    return \"\".concat(match[1] || 'https', \"://www.youtube.com/embed/\").concat(match[2], \"?showinfo=0\");\n  } // eslint-disable-next-line no-cond-assign\n\n\n  if (match = url.match(/^(?:(https?):\\/\\/)?(?:www\\.)?vimeo\\.com\\/(\\d+)/)) {\n    return \"\".concat(match[1] || 'https', \"://player.vimeo.com/video/\").concat(match[2], \"/\");\n  }\n\n  return url;\n}\n\nfunction fillSelect(select, values, defaultValue = false) {\n  values.forEach(value => {\n    const option = document.createElement('option');\n\n    if (value === defaultValue) {\n      option.setAttribute('selected', 'selected');\n    } else {\n      option.setAttribute('value', value);\n    }\n\n    select.appendChild(option);\n  });\n}\n\n\n\n//# sourceURL=webpack://Quill/./themes/base.js?");/***/},/***/"./themes/bubble.js":/*!**************************!*\
    !*** ./themes/bubble.js ***!
    \**************************/ /*! exports provided: BubbleTooltip, default */ /***/function themesBubbleJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BubbleTooltip\", function() { return BubbleTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BubbleTheme; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\nconst TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{\n  header: 1\n}, {\n  header: 2\n}, 'blockquote']];\n\nclass BubbleTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (type, range, oldRange, source) => {\n      if (type !== _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE) return;\n\n      if (range != null && range.length > 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.show(); // Lock our width so we will expand beyond our offsetParent boundaries\n\n        this.root.style.left = '0px';\n        this.root.style.width = '';\n        this.root.style.width = \"\".concat(this.root.offsetWidth, \"px\");\n        const lines = this.quill.getLines(range.index, range.length);\n\n        if (lines.length === 1) {\n          this.position(this.quill.getBounds(range));\n        } else {\n          const lastLine = lines[lines.length - 1];\n          const index = this.quill.getIndex(lastLine);\n          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);\n          const indexBounds = this.quill.getBounds(new _core_selection__WEBPACK_IMPORTED_MODULE_3__[\"Range\"](index, length));\n          this.position(indexBounds);\n        }\n      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {\n        this.hide();\n      }\n    });\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('.ql-close').addEventListener('click', () => {\n      this.root.classList.remove('ql-editing');\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      // Let selection be restored by toolbar handlers before repositioning\n      setTimeout(() => {\n        if (this.root.classList.contains('ql-hidden')) return;\n        const range = this.quill.getSelection();\n\n        if (range != null) {\n          this.position(this.quill.getBounds(range));\n        }\n      }, 1);\n    });\n  }\n\n  cancel() {\n    this.show();\n  }\n\n  position(reference) {\n    const shift = super.position(reference);\n    const arrow = this.root.querySelector('.ql-tooltip-arrow');\n    arrow.style.marginLeft = '';\n\n    if (shift !== 0) {\n      arrow.style.marginLeft = \"\".concat(-1 * shift - arrow.offsetWidth / 2, \"px\");\n    }\n\n    return shift;\n  }\n\n}\n\nBubbleTooltip.TEMPLATE = ['<span class=\"ql-tooltip-arrow\"></span>', '<div class=\"ql-tooltip-editor\">', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-close\"></a>', '</div>'].join('');\n\nclass BubbleTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n\n    super(quill, options);\n    this.quill.container.classList.add('ql-bubble');\n  }\n\n  extendToolbar(toolbar) {\n    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);\n    this.tooltip.root.appendChild(toolbar.container);\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  }\n\n}\n\nBubbleTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (!value) {\n            this.quill.format('link', false);\n          } else {\n            this.quill.theme.tooltip.edit();\n          }\n        }\n\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Quill/./themes/bubble.js?");/***/},/***/"./themes/snow.js":/*!************************!*\
    !*** ./themes/snow.js ***!
    \************************/ /*! exports provided: default */ /***/function themesSnowJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/link */ \"./formats/link.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\n\nconst TOOLBAR_CONFIG = [[{\n  header: ['1', '2', '3', false]\n}], ['bold', 'italic', 'underline', 'link'], [{\n  list: 'ordered'\n}, {\n  list: 'bullet'\n}], ['clean']];\n\nclass SnowTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.preview = this.root.querySelector('a.ql-preview');\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('a.ql-action').addEventListener('click', event => {\n      if (this.root.classList.contains('ql-editing')) {\n        this.save();\n      } else {\n        this.edit('link', this.preview.textContent);\n      }\n\n      event.preventDefault();\n    });\n    this.root.querySelector('a.ql-remove').addEventListener('click', event => {\n      if (this.linkRange != null) {\n        const range = this.linkRange;\n        this.restoreFocus();\n        this.quill.formatText(range, 'link', false, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n        delete this.linkRange;\n      }\n\n      event.preventDefault();\n      this.hide();\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE, (range, oldRange, source) => {\n      if (range == null) return;\n\n      if (range.length === 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        const [link, offset] = this.quill.scroll.descendant(_formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], range.index);\n\n        if (link != null) {\n          this.linkRange = new _core_selection__WEBPACK_IMPORTED_MODULE_4__[\"Range\"](range.index - offset, link.length());\n          const preview = _formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formats(link.domNode);\n          this.preview.textContent = preview;\n          this.preview.setAttribute('href', preview);\n          this.show();\n          this.position(this.quill.getBounds(this.linkRange));\n          return;\n        }\n      } else {\n        delete this.linkRange;\n      }\n\n      this.hide();\n    });\n  }\n\n  show() {\n    super.show();\n    this.root.removeAttribute('data-mode');\n  }\n\n}\n\nSnowTooltip.TEMPLATE = ['<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-action\"></a>', '<a class=\"ql-remove\"></a>'].join('');\n\nclass SnowTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n\n    super(quill, options);\n    this.quill.container.classList.add('ql-snow');\n  }\n\n  extendToolbar(toolbar) {\n    toolbar.container.classList.add('ql-snow');\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);\n\n    if (toolbar.container.querySelector('.ql-link')) {\n      this.quill.keyboard.addBinding({\n        key: 'k',\n        shortKey: true\n      }, (range, context) => {\n        toolbar.handlers.link.call(toolbar, !context.format.link);\n      });\n    }\n  }\n\n}\n\nSnowTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (value) {\n            const range = this.quill.getSelection();\n            if (range == null || range.length === 0) return;\n            let preview = this.quill.getText(range);\n\n            if (/^\\S+@\\S+\\.\\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {\n              preview = \"mailto:\".concat(preview);\n            }\n\n            const {\n              tooltip\n            } = this.quill.theme;\n            tooltip.edit('link', preview);\n          } else {\n            this.quill.format('link', false);\n          }\n        }\n\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnowTheme);\n\n//# sourceURL=webpack://Quill/./themes/snow.js?");/***/},/***/"./ui/color-picker.js":/*!****************************!*\
    !*** ./ui/color-picker.js ***!
    \****************************/ /*! exports provided: default */ /***/function uiColorPickerJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\n\nclass ColorPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, label) {\n    super(select);\n    this.label.innerHTML = label;\n    this.container.classList.add('ql-color-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {\n      item.classList.add('ql-primary');\n    });\n  }\n\n  buildItem(option) {\n    const item = super.buildItem(option);\n    item.style.backgroundColor = option.getAttribute('value') || '';\n    return item;\n  }\n\n  selectItem(item, trigger) {\n    super.selectItem(item, trigger);\n    const colorLabel = this.label.querySelector('.ql-color-label');\n    const value = item ? item.getAttribute('data-value') || '' : '';\n\n    if (colorLabel) {\n      if (colorLabel.tagName === 'line') {\n        colorLabel.style.stroke = value;\n      } else {\n        colorLabel.style.fill = value;\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\n\n//# sourceURL=webpack://Quill/./ui/color-picker.js?");/***/},/***/"./ui/icon-picker.js":/*!***************************!*\
    !*** ./ui/icon-picker.js ***!
    \***************************/ /*! exports provided: default */ /***/function uiIconPickerJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\n\nclass IconPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, icons) {\n    super(select);\n    this.container.classList.add('ql-icon-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {\n      item.innerHTML = icons[item.getAttribute('data-value') || ''];\n    });\n    this.defaultItem = this.container.querySelector('.ql-selected');\n    this.selectItem(this.defaultItem);\n  }\n\n  selectItem(target, trigger) {\n    super.selectItem(target, trigger);\n    const item = target || this.defaultItem;\n    if (this.label.innerHTML === item.innerHTML) return;\n    this.label.innerHTML = item.innerHTML;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconPicker);\n\n//# sourceURL=webpack://Quill/./ui/icon-picker.js?");/***/},/***/"./ui/icons.js":/*!*********************!*\
    !*** ./ui/icons.js ***!
    \*********************/ /*! exports provided: default */ /***/function uiIconsJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/align-left.svg */ \"./assets/icons/align-left.svg\");\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/align-center.svg */ \"./assets/icons/align-center.svg\");\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/align-right.svg */ \"./assets/icons/align-right.svg\");\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/align-justify.svg */ \"./assets/icons/align-justify.svg\");\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/background.svg */ \"./assets/icons/background.svg\");\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/blockquote.svg */ \"./assets/icons/blockquote.svg\");\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/bold.svg */ \"./assets/icons/bold.svg\");\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/clean.svg */ \"./assets/icons/clean.svg\");\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/code.svg */ \"./assets/icons/code.svg\");\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/color.svg */ \"./assets/icons/color.svg\");\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ \"./assets/icons/direction-ltr.svg\");\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ \"./assets/icons/direction-rtl.svg\");\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/formula.svg */ \"./assets/icons/formula.svg\");\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/header.svg */ \"./assets/icons/header.svg\");\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/header-2.svg */ \"./assets/icons/header-2.svg\");\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/italic.svg */ \"./assets/icons/italic.svg\");\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/image.svg */ \"./assets/icons/image.svg\");\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/indent.svg */ \"./assets/icons/indent.svg\");\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/outdent.svg */ \"./assets/icons/outdent.svg\");\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/link.svg */ \"./assets/icons/link.svg\");\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ \"./assets/icons/list-bullet.svg\");\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/list-check.svg */ \"./assets/icons/list-check.svg\");\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ \"./assets/icons/list-ordered.svg\");\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/subscript.svg */ \"./assets/icons/subscript.svg\");\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/superscript.svg */ \"./assets/icons/superscript.svg\");\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/strike.svg */ \"./assets/icons/strike.svg\");\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/table.svg */ \"./assets/icons/table.svg\");\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/underline.svg */ \"./assets/icons/underline.svg\");\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/video.svg */ \"./assets/icons/video.svg\");\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  align: {\n    '': _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a,\n    center: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    right: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    justify: _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n  },\n  background: _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  blockquote: _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  bold: _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  clean: _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n  code: _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  'code-block': _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  color: _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default.a,\n  direction: {\n    '': _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default.a,\n    rtl: _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default.a\n  },\n  formula: _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default.a,\n  header: {\n    '1': _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default.a,\n    '2': _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default.a\n  },\n  italic: _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default.a,\n  image: _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default.a,\n  indent: {\n    '+1': _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default.a,\n    '-1': _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default.a\n  },\n  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default.a,\n  list: {\n    bullet: _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default.a,\n    check: _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default.a,\n    ordered: _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default.a\n  },\n  script: {\n    sub: _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default.a,\n    super: _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default.a\n  },\n  strike: _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default.a,\n  table: _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default.a,\n  underline: _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,\n  video: _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default.a\n});\n\n//# sourceURL=webpack://Quill/./ui/icons.js?");/***/},/***/"./ui/picker.js":/*!**********************!*\
    !*** ./ui/picker.js ***!
    \**********************/ /*! exports provided: default */ /***/function uiPickerJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dropdown.svg */ \"./assets/icons/dropdown.svg\");\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nlet optionsCounter = 0;\n\nfunction toggleAriaAttribute(element, attribute) {\n  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));\n}\n\nclass Picker {\n  constructor(select) {\n    this.select = select;\n    this.container = document.createElement('span');\n    this.buildPicker();\n    this.select.style.display = 'none';\n    this.select.parentNode.insertBefore(this.container, this.select);\n    this.label.addEventListener('mousedown', () => {\n      this.togglePicker();\n    });\n    this.label.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.togglePicker();\n          break;\n\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n\n        default:\n      }\n    });\n    this.select.addEventListener('change', this.update.bind(this));\n  }\n\n  togglePicker() {\n    this.container.classList.toggle('ql-expanded'); // Toggle aria-expanded and aria-hidden to make the picker accessible\n\n    toggleAriaAttribute(this.label, 'aria-expanded');\n    toggleAriaAttribute(this.options, 'aria-hidden');\n  }\n\n  buildItem(option) {\n    const item = document.createElement('span');\n    item.tabIndex = '0';\n    item.setAttribute('role', 'button');\n    item.classList.add('ql-picker-item');\n\n    if (option.hasAttribute('value')) {\n      item.setAttribute('data-value', option.getAttribute('value'));\n    }\n\n    if (option.textContent) {\n      item.setAttribute('data-label', option.textContent);\n    }\n\n    item.addEventListener('click', () => {\n      this.selectItem(item, true);\n    });\n    item.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.selectItem(item, true);\n          event.preventDefault();\n          break;\n\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n\n        default:\n      }\n    });\n    return item;\n  }\n\n  buildLabel() {\n    const label = document.createElement('span');\n    label.classList.add('ql-picker-label');\n    label.innerHTML = _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\n    label.tabIndex = '0';\n    label.setAttribute('role', 'button');\n    label.setAttribute('aria-expanded', 'false');\n    this.container.appendChild(label);\n    return label;\n  }\n\n  buildOptions() {\n    const options = document.createElement('span');\n    options.classList.add('ql-picker-options'); // Don't want screen readers to read this until options are visible\n\n    options.setAttribute('aria-hidden', 'true');\n    options.tabIndex = '-1'; // Need a unique id for aria-controls\n\n    options.id = \"ql-picker-options-\".concat(optionsCounter);\n    optionsCounter += 1;\n    this.label.setAttribute('aria-controls', options.id);\n    this.options = options;\n    Array.from(this.select.options).forEach(option => {\n      const item = this.buildItem(option);\n      options.appendChild(item);\n\n      if (option.selected === true) {\n        this.selectItem(item);\n      }\n    });\n    this.container.appendChild(options);\n  }\n\n  buildPicker() {\n    Array.from(this.select.attributes).forEach(item => {\n      this.container.setAttribute(item.name, item.value);\n    });\n    this.container.classList.add('ql-picker');\n    this.label = this.buildLabel();\n    this.buildOptions();\n  }\n\n  escape() {\n    // Close menu and return focus to trigger label\n    this.close(); // Need setTimeout for accessibility to ensure that the browser executes\n    // focus on the next process thread and after any DOM content changes\n\n    setTimeout(() => this.label.focus(), 1);\n  }\n\n  close() {\n    this.container.classList.remove('ql-expanded');\n    this.label.setAttribute('aria-expanded', 'false');\n    this.options.setAttribute('aria-hidden', 'true');\n  }\n\n  selectItem(item, trigger = false) {\n    const selected = this.container.querySelector('.ql-selected');\n    if (item === selected) return;\n\n    if (selected != null) {\n      selected.classList.remove('ql-selected');\n    }\n\n    if (item == null) return;\n    item.classList.add('ql-selected');\n    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);\n\n    if (item.hasAttribute('data-value')) {\n      this.label.setAttribute('data-value', item.getAttribute('data-value'));\n    } else {\n      this.label.removeAttribute('data-value');\n    }\n\n    if (item.hasAttribute('data-label')) {\n      this.label.setAttribute('data-label', item.getAttribute('data-label'));\n    } else {\n      this.label.removeAttribute('data-label');\n    }\n\n    if (trigger) {\n      this.select.dispatchEvent(new Event('change'));\n      this.close();\n    }\n  }\n\n  update() {\n    let option;\n\n    if (this.select.selectedIndex > -1) {\n      const item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];\n      option = this.select.options[this.select.selectedIndex];\n      this.selectItem(item);\n    } else {\n      this.selectItem(null);\n    }\n\n    const isActive = option != null && option !== this.select.querySelector('option[selected]');\n    this.label.classList.toggle('ql-active', isActive);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Picker);\n\n//# sourceURL=webpack://Quill/./ui/picker.js?");/***/},/***/"./ui/tooltip.js":/*!***********************!*\
    !*** ./ui/tooltip.js ***!
    \***********************/ /*! exports provided: default */ /***/function uiTooltipJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nclass Tooltip {\n  constructor(quill, boundsContainer) {\n    this.quill = quill;\n    this.boundsContainer = boundsContainer || document.body;\n    this.root = quill.addContainer('ql-tooltip');\n    this.root.innerHTML = this.constructor.TEMPLATE;\n\n    if (this.quill.root === this.quill.scrollingContainer) {\n      this.quill.root.addEventListener('scroll', () => {\n        this.root.style.marginTop = \"\".concat(-1 * this.quill.root.scrollTop, \"px\");\n      });\n    }\n\n    this.hide();\n  }\n\n  hide() {\n    this.root.classList.add('ql-hidden');\n  }\n\n  position(reference) {\n    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2; // root.scrollTop should be 0 if scrollContainer !== root\n\n    const top = reference.bottom + this.quill.root.scrollTop;\n    this.root.style.left = \"\".concat(left, \"px\");\n    this.root.style.top = \"\".concat(top, \"px\");\n    this.root.classList.remove('ql-flip');\n    const containerBounds = this.boundsContainer.getBoundingClientRect();\n    const rootBounds = this.root.getBoundingClientRect();\n    let shift = 0;\n\n    if (rootBounds.right > containerBounds.right) {\n      shift = containerBounds.right - rootBounds.right;\n      this.root.style.left = \"\".concat(left + shift, \"px\");\n    }\n\n    if (rootBounds.left < containerBounds.left) {\n      shift = containerBounds.left - rootBounds.left;\n      this.root.style.left = \"\".concat(left + shift, \"px\");\n    }\n\n    if (rootBounds.bottom > containerBounds.bottom) {\n      const height = rootBounds.bottom - rootBounds.top;\n      const verticalShift = reference.bottom - reference.top + height;\n      this.root.style.top = \"\".concat(top - verticalShift, \"px\");\n      this.root.classList.add('ql-flip');\n    }\n\n    return shift;\n  }\n\n  show() {\n    this.root.classList.remove('ql-editing');\n    this.root.classList.remove('ql-hidden');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tooltip);\n\n//# sourceURL=webpack://Quill/./ui/tooltip.js?");/***/},/***/0:/*!************************!*\
    !*** multi ./quill.js ***!
    \************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(/*! ./quill.js */\"./quill.js\");\n\n\n//# sourceURL=webpack://Quill/multi_./quill.js?");/***/},/***/1:/*!********************************!*\
    !*** ./util.inspect (ignored) ***!
    \********************************/ /*! no static exports found */ /***/function _(module,exports){eval("/* (ignored) */\n\n//# sourceURL=webpack://Quill/./util.inspect_(ignored)?");/***/}/******/})["default"]);});});var Quill = unwrapExports(quill);

  var defaultToolbar = [[{
    header: [false, 1, 2, 3, 4, 5, 6]
  }], ["bold", "italic", "underline", "strike"], // toggled buttons
  [{
    align: ""
  }, {
    align: "center"
  }, {
    align: "right"
  }, {
    align: "justify"
  }], ["blockquote", "code-block"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    list: "check"
  }], [{
    indent: "-1"
  }, {
    indent: "+1"
  }], // outdent/indent
  [{
    color: []
  }, {
    background: []
  }], // dropdown with defaults from theme
  ["link", "image", "video"], ["clean"] // remove formatting button
  ];

  var oldApi = {
    props: {
      customModules: Array
    },
    methods: {
      registerCustomModules: function registerCustomModules(Quill) {
        if (this.customModules !== undefined) {
          this.customModules.forEach(function (customModule) {
            Quill.register("modules/" + customModule.alias, customModule.module);
          });
        }
      }
    }
  };

  /**
   * Performs a deep merge of `source` into `target`.
   * Mutates `target` only but not its objects and arrays.
   *
   */
  function mergeDeep(target, source) {
    var isObject = function isObject(obj) {
      return obj && _typeof(obj) === "object";
    };

    if (!isObject(target) || !isObject(source)) {
      return source;
    }

    Object.keys(source).forEach(function (key) {
      var targetValue = target[key];
      var sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });
    return target;
  }

  var BlockEmbed = Quill.import("blots/block/embed");

  var HorizontalRule = /*#__PURE__*/function (_BlockEmbed) {
    _inherits(HorizontalRule, _BlockEmbed);

    var _super = _createSuper(HorizontalRule);

    function HorizontalRule() {
      _classCallCheck(this, HorizontalRule);

      return _super.apply(this, arguments);
    }

    return _createClass(HorizontalRule);
  }(BlockEmbed);

  HorizontalRule.blotName = "hr";
  HorizontalRule.tagName = "hr";
  Quill.register("formats/horizontal", HorizontalRule);

  var MarkdownShortcuts = /*#__PURE__*/function () {
    function MarkdownShortcuts(quill, options) {
      var _this = this;

      _classCallCheck(this, MarkdownShortcuts);

      this.quill = quill;
      this.options = options;
      this.ignoreTags = ["PRE"];
      this.matches = [{
        name: "header",
        pattern: /^(#){1,6}\s/g,
        action: function action(text, selection, pattern) {
          var match = pattern.exec(text);
          if (!match) return;
          var size = match[0].length; // Need to defer this action https://github.com/quilljs/quill/issues/1134

          setTimeout(function () {
            _this.quill.formatLine(selection.index, 0, "header", size - 1);

            _this.quill.deleteText(selection.index - size, size);
          }, 0);
        }
      }, {
        name: "blockquote",
        pattern: /^(>)\s/g,
        action: function action(_text, selection) {
          // Need to defer this action https://github.com/quilljs/quill/issues/1134
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 1, "blockquote", true);

            _this.quill.deleteText(selection.index - 2, 2);
          }, 0);
        }
      }, {
        name: "code-block",
        pattern: /^`{3}(?:\s|\n)/g,
        action: function action(_text, selection) {
          // Need to defer this action https://github.com/quilljs/quill/issues/1134
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 1, "code-block", true);

            _this.quill.deleteText(selection.index - 4, 4);
          }, 0);
        }
      }, {
        name: "bolditalic",
        pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);

            _this.quill.insertText(startIndex, matchedText, {
              bold: true,
              italic: true
            });

            _this.quill.format("bold", false);
          }, 0);
        }
      }, {
        name: "bold",
        pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);

            _this.quill.insertText(startIndex, matchedText, {
              bold: true
            });

            _this.quill.format("bold", false);
          }, 0);
        }
      }, {
        name: "italic",
        pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);

            _this.quill.insertText(startIndex, matchedText, {
              italic: true
            });

            _this.quill.format("italic", false);
          }, 0);
        }
      }, {
        name: "strikethrough",
        pattern: /(?:~~)(.+?)(?:~~)/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);

            _this.quill.insertText(startIndex, matchedText, {
              strike: true
            });

            _this.quill.format("strike", false);
          }, 0);
        }
      }, {
        name: "code",
        pattern: /(?:`)(.+?)(?:`)/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);

            _this.quill.insertText(startIndex, matchedText, {
              code: true
            });

            _this.quill.format("code", false);

            _this.quill.insertText(_this.quill.getSelection(), " ");
          }, 0);
        }
      }, {
        name: "hr",
        pattern: /^([-*]\s?){3}/g,
        action: function action(text, selection) {
          var startIndex = selection.index - text.length;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, text.length);

            _this.quill.insertEmbed(startIndex + 1, "hr", true, Quill.sources.USER);

            _this.quill.insertText(startIndex + 2, "\n", Quill.sources.SILENT);

            _this.quill.setSelection(startIndex + 2, Quill.sources.SILENT);
          }, 0);
        }
      }, {
        name: "asterisk-ul",
        pattern: /^(\*|\+)\s$/g,
        // eslint-disable-next-line no-unused-vars
        action: function action(_text, selection, _pattern) {
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 1, "list", "unordered");

            _this.quill.deleteText(selection.index - 2, 2);
          }, 0);
        }
      }, {
        name: "image",
        pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
        action: function action(text, selection, pattern) {
          var startIndex = text.search(pattern);
          var matchedText = text.match(pattern)[0]; // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]

          var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
          var start = selection.index - matchedText.length - 1;

          if (startIndex !== -1) {
            setTimeout(function () {
              _this.quill.deleteText(start, matchedText.length);

              _this.quill.insertEmbed(start, "image", hrefLink.slice(1, hrefLink.length - 1));
            }, 0);
          }
        }
      }, {
        name: "link",
        pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
        action: function action(text, selection, pattern) {
          var startIndex = text.search(pattern);
          var matchedText = text.match(pattern)[0];
          var hrefText = text.match(/(?:\[(.*?)\])/g)[0];
          var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
          var start = selection.index - matchedText.length - 1;

          if (startIndex !== -1) {
            setTimeout(function () {
              _this.quill.deleteText(start, matchedText.length);

              _this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), "link", hrefLink.slice(1, hrefLink.length - 1));
            }, 0);
          }
        }
      }]; // Handler that looks for insert deltas that match specific characters
      // eslint-disable-next-line no-unused-vars

      this.quill.on("text-change", function (delta, _oldContents, _source) {
        for (var i = 0; i < delta.ops.length; i++) {
          if (delta.ops[i].hasOwnProperty("insert")) {
            if (delta.ops[i].insert === " ") {
              _this.onSpace();
            } else if (delta.ops[i].insert === "\n") {
              _this.onEnter();
            }
          }
        }
      });
    }

    _createClass(MarkdownShortcuts, [{
      key: "isValid",
      value: function isValid(text, tagName) {
        return typeof text !== "undefined" && text && this.ignoreTags.indexOf(tagName) === -1;
      }
    }, {
      key: "onSpace",
      value: function onSpace() {
        var selection = this.quill.getSelection();
        if (!selection) return;

        var _this$quill$getLine = this.quill.getLine(selection.index),
            _this$quill$getLine2 = _slicedToArray(_this$quill$getLine, 2),
            line = _this$quill$getLine2[0],
            offset = _this$quill$getLine2[1];

        var text = line.domNode.textContent;
        var lineStart = selection.index - offset;

        if (this.isValid(text, line.domNode.tagName)) {
          var _iterator = _createForOfIteratorHelper(this.matches),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var match = _step.value;
              var matchedText = text.match(match.pattern);

              if (matchedText) {
                // We need to replace only matched text not the whole line
                console.log("matched:", match.name, text);
                match.action(text, selection, match.pattern, lineStart);
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "onEnter",
      value: function onEnter() {
        var selection = this.quill.getSelection();
        if (!selection) return;

        var _this$quill$getLine3 = this.quill.getLine(selection.index),
            _this$quill$getLine4 = _slicedToArray(_this$quill$getLine3, 2),
            line = _this$quill$getLine4[0],
            offset = _this$quill$getLine4[1];

        var text = line.domNode.textContent + " ";
        var lineStart = selection.index - offset;
        selection.length = selection.index++;

        if (this.isValid(text, line.domNode.tagName)) {
          var _iterator2 = _createForOfIteratorHelper(this.matches),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var match = _step2.value;
              var matchedText = text.match(match.pattern);

              if (matchedText) {
                console.log("matched", match.name, text);
                match.action(text, selection, match.pattern, lineStart);
                return;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }]);

    return MarkdownShortcuts;
  }(); // module.exports = MarkdownShortcuts;

  var quillBetterTable = createCommonjsModule(function (module, exports) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory(quill);
    })(window, function (__WEBPACK_EXTERNAL_MODULE__0__) {
      return (
        /******/
        function (modules) {
          // webpackBootstrap

          /******/
          function hotDisposeChunk(chunkId) {
            /******/
            delete installedChunks[chunkId];
            /******/
          }
          /******/


          var parentHotUpdateCallback = window["webpackHotUpdatequillBetterTable"];
          /******/

          window["webpackHotUpdatequillBetterTable"] = // eslint-disable-next-line no-unused-vars

          /******/
          function webpackHotUpdateCallback(chunkId, moreModules) {
            /******/
            hotAddUpdateChunk(chunkId, moreModules);
            /******/

            if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
            /******/
          };
          /******/

          /******/
          // eslint-disable-next-line no-unused-vars

          /******/


          function hotDownloadUpdateChunk(chunkId) {
            /******/
            var script = document.createElement("script");
            /******/

            script.charset = "utf-8";
            /******/

            script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
            /******/

            document.head.appendChild(script);
            /******/
          }
          /******/

          /******/
          // eslint-disable-next-line no-unused-vars

          /******/


          function hotDownloadManifest(requestTimeout) {
            /******/
            requestTimeout = requestTimeout || 10000;
            /******/

            return new Promise(function (resolve, reject) {
              /******/
              if (typeof XMLHttpRequest === "undefined") {
                /******/
                return reject(new Error("No browser support"));
                /******/
              }
              /******/


              try {
                /******/
                var request = new XMLHttpRequest();
                /******/

                var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
                /******/

                request.open("GET", requestPath, true);
                /******/

                request.timeout = requestTimeout;
                /******/

                request.send(null);
                /******/
              } catch (err) {
                /******/
                return reject(err);
                /******/
              }
              /******/


              request.onreadystatechange = function () {
                /******/
                if (request.readyState !== 4) return;
                /******/

                if (request.status === 0) {
                  /******/
                  // timeout

                  /******/
                  reject(
                  /******/
                  new Error("Manifest request to " + requestPath + " timed out.")
                  /******/
                  );
                  /******/
                } else if (request.status === 404) {
                  /******/
                  // no update available

                  /******/
                  resolve();
                  /******/
                } else if (request.status !== 200 && request.status !== 304) {
                  /******/
                  // other failure

                  /******/
                  reject(new Error("Manifest request to " + requestPath + " failed."));
                  /******/
                } else {
                  /******/
                  // success

                  /******/
                  try {
                    /******/
                    var update = JSON.parse(request.responseText);
                    /******/
                  } catch (e) {
                    /******/
                    reject(e);
                    /******/

                    return;
                    /******/
                  }
                  /******/


                  resolve(update);
                  /******/
                }
                /******/

              };
              /******/

            });
            /******/
          }
          /******/

          /******/


          var hotApplyOnUpdate = true;
          /******/
          // eslint-disable-next-line no-unused-vars

          /******/

          var hotCurrentHash = "ced44c7892a78034ffe4";
          /******/

          var hotRequestTimeout = 10000;
          /******/

          var hotCurrentModuleData = {};
          /******/

          var hotCurrentChildModule;
          /******/
          // eslint-disable-next-line no-unused-vars

          /******/

          var hotCurrentParents = [];
          /******/
          // eslint-disable-next-line no-unused-vars

          /******/

          var hotCurrentParentsTemp = [];
          /******/

          /******/
          // eslint-disable-next-line no-unused-vars

          /******/

          function hotCreateRequire(moduleId) {
            /******/
            var me = installedModules[moduleId];
            /******/

            if (!me) return __webpack_require__;
            /******/

            var fn = function fn(request) {
              /******/
              if (me.hot.active) {
                /******/
                if (installedModules[request]) {
                  /******/
                  if (installedModules[request].parents.indexOf(moduleId) === -1) {
                    /******/
                    installedModules[request].parents.push(moduleId);
                    /******/
                  }
                  /******/

                } else {
                  /******/
                  hotCurrentParents = [moduleId];
                  /******/

                  hotCurrentChildModule = request;
                  /******/
                }
                /******/


                if (me.children.indexOf(request) === -1) {
                  /******/
                  me.children.push(request);
                  /******/
                }
                /******/

              } else {
                /******/
                console.warn(
                /******/
                "[HMR] unexpected require(" +
                /******/
                request +
                /******/
                ") from disposed module " +
                /******/
                moduleId
                /******/
                );
                /******/

                hotCurrentParents = [];
                /******/
              }
              /******/


              return __webpack_require__(request);
              /******/
            };
            /******/


            var ObjectFactory = function ObjectFactory(name) {
              /******/
              return {
                /******/
                configurable: true,

                /******/
                enumerable: true,

                /******/
                get: function get() {
                  /******/
                  return __webpack_require__[name];
                  /******/
                },

                /******/
                set: function set(value) {
                  /******/
                  __webpack_require__[name] = value;
                  /******/
                }
                /******/

              };
              /******/
            };
            /******/


            for (var name in __webpack_require__) {
              /******/
              if (
              /******/
              Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
              /******/
              name !== "e" &&
              /******/
              name !== "t"
              /******/
              ) {
                /******/
                Object.defineProperty(fn, name, ObjectFactory(name));
                /******/
              }
              /******/

            }
            /******/


            fn.e = function (chunkId) {
              /******/
              if (hotStatus === "ready") hotSetStatus("prepare");
              /******/

              hotChunksLoading++;
              /******/

              return __webpack_require__.e(chunkId).then(finishChunkLoading, function (err) {
                /******/
                finishChunkLoading();
                /******/

                throw err;
                /******/
              });
              /******/

              /******/

              function finishChunkLoading() {
                /******/
                hotChunksLoading--;
                /******/

                if (hotStatus === "prepare") {
                  /******/
                  if (!hotWaitingFilesMap[chunkId]) {
                    /******/
                    hotEnsureUpdateChunk(chunkId);
                    /******/
                  }
                  /******/


                  if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
                    /******/
                    hotUpdateDownloaded();
                    /******/
                  }
                  /******/

                }
                /******/

              }
              /******/

            };
            /******/


            fn.t = function (value, mode) {
              /******/
              if (mode & 1) value = fn(value);
              /******/

              return __webpack_require__.t(value, mode & ~1);
              /******/
            };
            /******/


            return fn;
            /******/
          }
          /******/

          /******/
          // eslint-disable-next-line no-unused-vars

          /******/


          function hotCreateModule(moduleId) {
            /******/
            var hot = {
              /******/
              // private stuff

              /******/
              _acceptedDependencies: {},

              /******/
              _declinedDependencies: {},

              /******/
              _selfAccepted: false,

              /******/
              _selfDeclined: false,

              /******/
              _disposeHandlers: [],

              /******/
              _main: hotCurrentChildModule !== moduleId,

              /******/

              /******/
              // Module API

              /******/
              active: true,

              /******/
              accept: function accept(dep, callback) {
                /******/
                if (dep === undefined) hot._selfAccepted = true;
                /******/
                else if (typeof dep === "function") hot._selfAccepted = dep;
                /******/
                else if (_typeof(dep) === "object")
                  /******/
                  for (var i = 0; i < dep.length; i++) {
                    /******/
                    hot._acceptedDependencies[dep[i]] = callback || function () {};
                  }
                  /******/
                else hot._acceptedDependencies[dep] = callback || function () {};
                /******/
              },

              /******/
              decline: function decline(dep) {
                /******/
                if (dep === undefined) hot._selfDeclined = true;
                /******/
                else if (_typeof(dep) === "object")
                  /******/
                  for (var i = 0; i < dep.length; i++) {
                    /******/
                    hot._declinedDependencies[dep[i]] = true;
                  }
                  /******/
                else hot._declinedDependencies[dep] = true;
                /******/
              },

              /******/
              dispose: function dispose(callback) {
                /******/
                hot._disposeHandlers.push(callback);
                /******/

              },

              /******/
              addDisposeHandler: function addDisposeHandler(callback) {
                /******/
                hot._disposeHandlers.push(callback);
                /******/

              },

              /******/
              removeDisposeHandler: function removeDisposeHandler(callback) {
                /******/
                var idx = hot._disposeHandlers.indexOf(callback);
                /******/


                if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
                /******/
              },

              /******/

              /******/
              // Management API

              /******/
              check: hotCheck,

              /******/
              apply: hotApply,

              /******/
              status: function status(l) {
                /******/
                if (!l) return hotStatus;
                /******/

                hotStatusHandlers.push(l);
                /******/
              },

              /******/
              addStatusHandler: function addStatusHandler(l) {
                /******/
                hotStatusHandlers.push(l);
                /******/
              },

              /******/
              removeStatusHandler: function removeStatusHandler(l) {
                /******/
                var idx = hotStatusHandlers.indexOf(l);
                /******/

                if (idx >= 0) hotStatusHandlers.splice(idx, 1);
                /******/
              },

              /******/

              /******/
              //inherit from previous dispose call

              /******/
              data: hotCurrentModuleData[moduleId]
              /******/

            };
            /******/

            hotCurrentChildModule = undefined;
            /******/

            return hot;
            /******/
          }
          /******/

          /******/


          var hotStatusHandlers = [];
          /******/

          var hotStatus = "idle";
          /******/

          /******/

          function hotSetStatus(newStatus) {
            /******/
            hotStatus = newStatus;
            /******/

            for (var i = 0; i < hotStatusHandlers.length; i++) {
              /******/
              hotStatusHandlers[i].call(null, newStatus);
            }
            /******/

          }
          /******/

          /******/
          // while downloading

          /******/


          var hotWaitingFiles = 0;
          /******/

          var hotChunksLoading = 0;
          /******/

          var hotWaitingFilesMap = {};
          /******/

          var hotRequestedFilesMap = {};
          /******/

          var hotAvailableFilesMap = {};
          /******/

          var hotDeferred;
          /******/

          /******/
          // The update info

          /******/

          var hotUpdate, hotUpdateNewHash;
          /******/

          /******/

          function toModuleId(id) {
            /******/
            var isNumber = +id + "" === id;
            /******/

            return isNumber ? +id : id;
            /******/
          }
          /******/

          /******/


          function hotCheck(apply) {
            /******/
            if (hotStatus !== "idle") {
              /******/
              throw new Error("check() is only allowed in idle status");
              /******/
            }
            /******/


            hotApplyOnUpdate = apply;
            /******/

            hotSetStatus("check");
            /******/

            return hotDownloadManifest(hotRequestTimeout).then(function (update) {
              /******/
              if (!update) {
                /******/
                hotSetStatus("idle");
                /******/

                return null;
                /******/
              }
              /******/


              hotRequestedFilesMap = {};
              /******/

              hotWaitingFilesMap = {};
              /******/

              hotAvailableFilesMap = update.c;
              /******/

              hotUpdateNewHash = update.h;
              /******/

              /******/

              hotSetStatus("prepare");
              /******/

              var promise = new Promise(function (resolve, reject) {
                /******/
                hotDeferred = {
                  /******/
                  resolve: resolve,

                  /******/
                  reject: reject
                  /******/

                };
                /******/
              });
              /******/

              hotUpdate = {};
              /******/

              var chunkId = 2;
              /******/
              // eslint-disable-next-line no-lone-blocks

              /******/

              {
                /******/

                /*globals chunkId */

                /******/
                hotEnsureUpdateChunk(chunkId);
                /******/
              }
              /******/

              if (
              /******/
              hotStatus === "prepare" &&
              /******/
              hotChunksLoading === 0 &&
              /******/
              hotWaitingFiles === 0
              /******/
              ) {
                /******/
                hotUpdateDownloaded();
                /******/
              }
              /******/


              return promise;
              /******/
            });
            /******/
          }
          /******/

          /******/
          // eslint-disable-next-line no-unused-vars

          /******/


          function hotAddUpdateChunk(chunkId, moreModules) {
            /******/
            if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
              /******/
              return;
            /******/

            hotRequestedFilesMap[chunkId] = false;
            /******/

            for (var moduleId in moreModules) {
              /******/
              if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                /******/
                hotUpdate[moduleId] = moreModules[moduleId];
                /******/
              }
              /******/

            }
            /******/


            if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
              /******/
              hotUpdateDownloaded();
              /******/
            }
            /******/

          }
          /******/

          /******/


          function hotEnsureUpdateChunk(chunkId) {
            /******/
            if (!hotAvailableFilesMap[chunkId]) {
              /******/
              hotWaitingFilesMap[chunkId] = true;
              /******/
            } else {
              /******/
              hotRequestedFilesMap[chunkId] = true;
              /******/

              hotWaitingFiles++;
              /******/

              hotDownloadUpdateChunk(chunkId);
              /******/
            }
            /******/

          }
          /******/

          /******/


          function hotUpdateDownloaded() {
            /******/
            hotSetStatus("ready");
            /******/

            var deferred = hotDeferred;
            /******/

            hotDeferred = null;
            /******/

            if (!deferred) return;
            /******/

            if (hotApplyOnUpdate) {
              /******/
              // Wrap deferred object in Promise to mark it as a well-handled Promise to

              /******/
              // avoid triggering uncaught exception warning in Chrome.

              /******/
              // See https://bugs.chromium.org/p/chromium/issues/detail?id=465666

              /******/
              Promise.resolve()
              /******/
              .then(function () {
                /******/
                return hotApply(hotApplyOnUpdate);
                /******/
              })
              /******/
              .then(
              /******/
              function (result) {
                /******/
                deferred.resolve(result);
                /******/
              },
              /******/
              function (err) {
                /******/
                deferred.reject(err);
                /******/
              }
              /******/
              );
              /******/
            } else {
              /******/
              var outdatedModules = [];
              /******/

              for (var id in hotUpdate) {
                /******/
                if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
                  /******/
                  outdatedModules.push(toModuleId(id));
                  /******/
                }
                /******/

              }
              /******/


              deferred.resolve(outdatedModules);
              /******/
            }
            /******/

          }
          /******/

          /******/


          function hotApply(options) {
            /******/
            if (hotStatus !== "ready")
              /******/
              throw new Error("apply() is only allowed in ready status");
            /******/

            options = options || {};
            /******/

            /******/

            var cb;
            /******/

            var i;
            /******/

            var j;
            /******/

            var module;
            /******/

            var moduleId;
            /******/

            /******/

            function getAffectedStuff(updateModuleId) {
              /******/
              var outdatedModules = [updateModuleId];
              /******/

              var outdatedDependencies = {};
              /******/

              /******/

              var queue = outdatedModules.map(function (id) {
                /******/
                return {
                  /******/
                  chain: [id],

                  /******/
                  id: id
                  /******/

                };
                /******/
              });
              /******/

              while (queue.length > 0) {
                /******/
                var queueItem = queue.pop();
                /******/

                var moduleId = queueItem.id;
                /******/

                var chain = queueItem.chain;
                /******/

                module = installedModules[moduleId];
                /******/

                if (!module || module.hot._selfAccepted) continue;
                /******/

                if (module.hot._selfDeclined) {
                  /******/
                  return {
                    /******/
                    type: "self-declined",

                    /******/
                    chain: chain,

                    /******/
                    moduleId: moduleId
                    /******/

                  };
                  /******/
                }
                /******/


                if (module.hot._main) {
                  /******/
                  return {
                    /******/
                    type: "unaccepted",

                    /******/
                    chain: chain,

                    /******/
                    moduleId: moduleId
                    /******/

                  };
                  /******/
                }
                /******/


                for (var i = 0; i < module.parents.length; i++) {
                  /******/
                  var parentId = module.parents[i];
                  /******/

                  var parent = installedModules[parentId];
                  /******/

                  if (!parent) continue;
                  /******/

                  if (parent.hot._declinedDependencies[moduleId]) {
                    /******/
                    return {
                      /******/
                      type: "declined",

                      /******/
                      chain: chain.concat([parentId]),

                      /******/
                      moduleId: moduleId,

                      /******/
                      parentId: parentId
                      /******/

                    };
                    /******/
                  }
                  /******/


                  if (outdatedModules.indexOf(parentId) !== -1) continue;
                  /******/

                  if (parent.hot._acceptedDependencies[moduleId]) {
                    /******/
                    if (!outdatedDependencies[parentId])
                      /******/
                      outdatedDependencies[parentId] = [];
                    /******/

                    addAllToSet(outdatedDependencies[parentId], [moduleId]);
                    /******/

                    continue;
                    /******/
                  }
                  /******/


                  delete outdatedDependencies[parentId];
                  /******/

                  outdatedModules.push(parentId);
                  /******/

                  queue.push({
                    /******/
                    chain: chain.concat([parentId]),

                    /******/
                    id: parentId
                    /******/

                  });
                  /******/
                }
                /******/

              }
              /******/

              /******/


              return {
                /******/
                type: "accepted",

                /******/
                moduleId: updateModuleId,

                /******/
                outdatedModules: outdatedModules,

                /******/
                outdatedDependencies: outdatedDependencies
                /******/

              };
              /******/
            }
            /******/

            /******/


            function addAllToSet(a, b) {
              /******/
              for (var i = 0; i < b.length; i++) {
                /******/
                var item = b[i];
                /******/

                if (a.indexOf(item) === -1) a.push(item);
                /******/
              }
              /******/

            }
            /******/

            /******/
            // at begin all updates modules are outdated

            /******/
            // the "outdated" status can propagate to parents if they don't accept the children

            /******/


            var outdatedDependencies = {};
            /******/

            var outdatedModules = [];
            /******/

            var appliedUpdate = {};
            /******/

            /******/

            var warnUnexpectedRequire = function warnUnexpectedRequire() {
              /******/
              console.warn(
              /******/
              "[HMR] unexpected require(" + result.moduleId + ") to disposed module"
              /******/
              );
              /******/
            };
            /******/

            /******/


            for (var id in hotUpdate) {
              /******/
              if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
                /******/
                moduleId = toModuleId(id);
                /******/

                /** @type {TODO} */

                /******/

                var result;
                /******/

                if (hotUpdate[id]) {
                  /******/
                  result = getAffectedStuff(moduleId);
                  /******/
                } else {
                  /******/
                  result = {
                    /******/
                    type: "disposed",

                    /******/
                    moduleId: id
                    /******/

                  };
                  /******/
                }
                /******/

                /** @type {Error|false} */

                /******/


                var abortError = false;
                /******/

                var doApply = false;
                /******/

                var doDispose = false;
                /******/

                var chainInfo = "";
                /******/

                if (result.chain) {
                  /******/
                  chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
                  /******/
                }
                /******/


                switch (result.type) {
                  /******/
                  case "self-declined":
                    /******/
                    if (options.onDeclined) options.onDeclined(result);
                    /******/

                    if (!options.ignoreDeclined)
                      /******/
                      abortError = new Error(
                      /******/
                      "Aborted because of self decline: " +
                      /******/
                      result.moduleId +
                      /******/
                      chainInfo
                      /******/
                      );
                    /******/

                    break;

                  /******/

                  case "declined":
                    /******/
                    if (options.onDeclined) options.onDeclined(result);
                    /******/

                    if (!options.ignoreDeclined)
                      /******/
                      abortError = new Error(
                      /******/
                      "Aborted because of declined dependency: " +
                      /******/
                      result.moduleId +
                      /******/
                      " in " +
                      /******/
                      result.parentId +
                      /******/
                      chainInfo
                      /******/
                      );
                    /******/

                    break;

                  /******/

                  case "unaccepted":
                    /******/
                    if (options.onUnaccepted) options.onUnaccepted(result);
                    /******/

                    if (!options.ignoreUnaccepted)
                      /******/
                      abortError = new Error(
                      /******/
                      "Aborted because " + moduleId + " is not accepted" + chainInfo
                      /******/
                      );
                    /******/

                    break;

                  /******/

                  case "accepted":
                    /******/
                    if (options.onAccepted) options.onAccepted(result);
                    /******/

                    doApply = true;
                    /******/

                    break;

                  /******/

                  case "disposed":
                    /******/
                    if (options.onDisposed) options.onDisposed(result);
                    /******/

                    doDispose = true;
                    /******/

                    break;

                  /******/

                  default:
                    /******/
                    throw new Error("Unexception type " + result.type);

                  /******/
                }
                /******/


                if (abortError) {
                  /******/
                  hotSetStatus("abort");
                  /******/

                  return Promise.reject(abortError);
                  /******/
                }
                /******/


                if (doApply) {
                  /******/
                  appliedUpdate[moduleId] = hotUpdate[moduleId];
                  /******/

                  addAllToSet(outdatedModules, result.outdatedModules);
                  /******/

                  for (moduleId in result.outdatedDependencies) {
                    /******/
                    if (
                    /******/
                    Object.prototype.hasOwnProperty.call(
                    /******/
                    result.outdatedDependencies,
                    /******/
                    moduleId
                    /******/
                    )
                    /******/
                    ) {
                      /******/
                      if (!outdatedDependencies[moduleId])
                        /******/
                        outdatedDependencies[moduleId] = [];
                      /******/

                      addAllToSet(
                      /******/
                      outdatedDependencies[moduleId],
                      /******/
                      result.outdatedDependencies[moduleId]
                      /******/
                      );
                      /******/
                    }
                    /******/

                  }
                  /******/

                }
                /******/


                if (doDispose) {
                  /******/
                  addAllToSet(outdatedModules, [result.moduleId]);
                  /******/

                  appliedUpdate[moduleId] = warnUnexpectedRequire;
                  /******/
                }
                /******/

              }
              /******/

            }
            /******/

            /******/
            // Store self accepted outdated modules to require them later by the module system

            /******/


            var outdatedSelfAcceptedModules = [];
            /******/

            for (i = 0; i < outdatedModules.length; i++) {
              /******/
              moduleId = outdatedModules[i];
              /******/

              if (
              /******/
              installedModules[moduleId] &&
              /******/
              installedModules[moduleId].hot._selfAccepted &&
              /******/
              // removed self-accepted modules should not be required

              /******/
              appliedUpdate[moduleId] !== warnUnexpectedRequire
              /******/
              ) {
                /******/
                outdatedSelfAcceptedModules.push({
                  /******/
                  module: moduleId,

                  /******/
                  errorHandler: installedModules[moduleId].hot._selfAccepted
                  /******/

                });
                /******/
              }
              /******/

            }
            /******/

            /******/
            // Now in "dispose" phase

            /******/


            hotSetStatus("dispose");
            /******/

            Object.keys(hotAvailableFilesMap).forEach(function (chunkId) {
              /******/
              if (hotAvailableFilesMap[chunkId] === false) {
                /******/
                hotDisposeChunk(chunkId);
                /******/
              }
              /******/

            });
            /******/

            /******/

            var idx;
            /******/

            var queue = outdatedModules.slice();
            /******/

            while (queue.length > 0) {
              /******/
              moduleId = queue.pop();
              /******/

              module = installedModules[moduleId];
              /******/

              if (!module) continue;
              /******/

              /******/

              var data = {};
              /******/

              /******/
              // Call dispose handlers

              /******/

              var disposeHandlers = module.hot._disposeHandlers;
              /******/

              for (j = 0; j < disposeHandlers.length; j++) {
                /******/
                cb = disposeHandlers[j];
                /******/

                cb(data);
                /******/
              }
              /******/


              hotCurrentModuleData[moduleId] = data;
              /******/

              /******/
              // disable module (this disables requires from this module)

              /******/

              module.hot.active = false;
              /******/

              /******/
              // remove module from cache

              /******/

              delete installedModules[moduleId];
              /******/

              /******/
              // when disposing there is no need to call dispose handler

              /******/

              delete outdatedDependencies[moduleId];
              /******/

              /******/
              // remove "parents" references from all children

              /******/

              for (j = 0; j < module.children.length; j++) {
                /******/
                var child = installedModules[module.children[j]];
                /******/

                if (!child) continue;
                /******/

                idx = child.parents.indexOf(moduleId);
                /******/

                if (idx >= 0) {
                  /******/
                  child.parents.splice(idx, 1);
                  /******/
                }
                /******/

              }
              /******/

            }
            /******/

            /******/
            // remove outdated dependency from module children

            /******/


            var dependency;
            /******/

            var moduleOutdatedDependencies;
            /******/

            for (moduleId in outdatedDependencies) {
              /******/
              if (
              /******/
              Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
              /******/
              ) {
                /******/
                module = installedModules[moduleId];
                /******/

                if (module) {
                  /******/
                  moduleOutdatedDependencies = outdatedDependencies[moduleId];
                  /******/

                  for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                    /******/
                    dependency = moduleOutdatedDependencies[j];
                    /******/

                    idx = module.children.indexOf(dependency);
                    /******/

                    if (idx >= 0) module.children.splice(idx, 1);
                    /******/
                  }
                  /******/

                }
                /******/

              }
              /******/

            }
            /******/

            /******/
            // Now in "apply" phase

            /******/


            hotSetStatus("apply");
            /******/

            /******/

            hotCurrentHash = hotUpdateNewHash;
            /******/

            /******/
            // insert new code

            /******/

            for (moduleId in appliedUpdate) {
              /******/
              if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
                /******/
                modules[moduleId] = appliedUpdate[moduleId];
                /******/
              }
              /******/

            }
            /******/

            /******/
            // call accept handlers

            /******/


            var error = null;
            /******/

            for (moduleId in outdatedDependencies) {
              /******/
              if (
              /******/
              Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
              /******/
              ) {
                /******/
                module = installedModules[moduleId];
                /******/

                if (module) {
                  /******/
                  moduleOutdatedDependencies = outdatedDependencies[moduleId];
                  /******/

                  var callbacks = [];
                  /******/

                  for (i = 0; i < moduleOutdatedDependencies.length; i++) {
                    /******/
                    dependency = moduleOutdatedDependencies[i];
                    /******/

                    cb = module.hot._acceptedDependencies[dependency];
                    /******/

                    if (cb) {
                      /******/
                      if (callbacks.indexOf(cb) !== -1) continue;
                      /******/

                      callbacks.push(cb);
                      /******/
                    }
                    /******/

                  }
                  /******/


                  for (i = 0; i < callbacks.length; i++) {
                    /******/
                    cb = callbacks[i];
                    /******/

                    try {
                      /******/
                      cb(moduleOutdatedDependencies);
                      /******/
                    } catch (err) {
                      /******/
                      if (options.onErrored) {
                        /******/
                        options.onErrored({
                          /******/
                          type: "accept-errored",

                          /******/
                          moduleId: moduleId,

                          /******/
                          dependencyId: moduleOutdatedDependencies[i],

                          /******/
                          error: err
                          /******/

                        });
                        /******/
                      }
                      /******/


                      if (!options.ignoreErrored) {
                        /******/
                        if (!error) error = err;
                        /******/
                      }
                      /******/

                    }
                    /******/

                  }
                  /******/

                }
                /******/

              }
              /******/

            }
            /******/

            /******/
            // Load self accepted modules

            /******/


            for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
              /******/
              var item = outdatedSelfAcceptedModules[i];
              /******/

              moduleId = item.module;
              /******/

              hotCurrentParents = [moduleId];
              /******/

              try {
                /******/
                __webpack_require__(moduleId);
                /******/

              } catch (err) {
                /******/
                if (typeof item.errorHandler === "function") {
                  /******/
                  try {
                    /******/
                    item.errorHandler(err);
                    /******/
                  } catch (err2) {
                    /******/
                    if (options.onErrored) {
                      /******/
                      options.onErrored({
                        /******/
                        type: "self-accept-error-handler-errored",

                        /******/
                        moduleId: moduleId,

                        /******/
                        error: err2,

                        /******/
                        originalError: err
                        /******/

                      });
                      /******/
                    }
                    /******/


                    if (!options.ignoreErrored) {
                      /******/
                      if (!error) error = err2;
                      /******/
                    }
                    /******/


                    if (!error) error = err;
                    /******/
                  }
                  /******/

                } else {
                  /******/
                  if (options.onErrored) {
                    /******/
                    options.onErrored({
                      /******/
                      type: "self-accept-errored",

                      /******/
                      moduleId: moduleId,

                      /******/
                      error: err
                      /******/

                    });
                    /******/
                  }
                  /******/


                  if (!options.ignoreErrored) {
                    /******/
                    if (!error) error = err;
                    /******/
                  }
                  /******/

                }
                /******/

              }
              /******/

            }
            /******/

            /******/
            // handle errors in accept handlers and self accepted module load

            /******/


            if (error) {
              /******/
              hotSetStatus("fail");
              /******/

              return Promise.reject(error);
              /******/
            }
            /******/

            /******/


            hotSetStatus("idle");
            /******/

            return new Promise(function (resolve) {
              /******/
              resolve(outdatedModules);
              /******/
            });
            /******/
          }
          /******/

          /******/
          // The module cache

          /******/


          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {},

              /******/
              hot: hotCreateModule(moduleId),

              /******/
              parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),

              /******/
              children: []
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // define __esModule on exports

          /******/


          __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/


            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/

          /******/
          // create a fake namespace object

          /******/
          // mode & 1: value is a module id, require it

          /******/
          // mode & 2: merge all properties of value into the ns

          /******/
          // mode & 4: return value when already ns object

          /******/
          // mode & 8|1: behave like require

          /******/


          __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/

            if (mode & 8) return value;
            /******/

            if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
            /******/

            var ns = Object.create(null);
            /******/

            __webpack_require__.r(ns);
            /******/


            Object.defineProperty(ns, 'default', {
              enumerable: true,
              value: value
            });
            /******/

            if (mode & 2 && typeof value != 'string') for (var key in value) {
              __webpack_require__.d(ns, key, function (key) {
                return value[key];
              }.bind(null, key));
            }
            /******/

            return ns;
            /******/
          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "";
          /******/

          /******/
          // __webpack_hash__

          /******/

          __webpack_require__.h = function () {
            return hotCurrentHash;
          };
          /******/

          /******/

          /******/
          // Load entry module and return exports

          /******/


          return hotCreateRequire(12)(__webpack_require__.s = 12);
          /******/
        }
        /************************************************************************/

        /******/
        ([
          /* 11 */

        /* 0 */

        /***/
        function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
          /***/
        },
        /* 1 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M73.142857 336.64h526.628572v43.885714H73.142857zM73.142857 643.657143h526.628572v43.885714H73.142857zM336.457143 117.028571h43.885714v789.942858h-43.885714zM204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.771429 87.771429 0 0 0 87.771429 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM819.2 73.142857h-219.428571v877.714286h219.428571a131.657143 131.657143 0 0 0 131.657143-131.657143V204.8A131.84 131.84 0 0 0 819.2 73.142857z m44.068571 460.982857h-65.828571v65.828572H753.371429v-65.828572h-65.828572V490.057143h65.828572v-65.828572h44.068571v65.828572h65.828571z\"/></svg>";
          /***/
        },
        /* 2 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M380.342857 336.457143h526.811429v43.885714H380.342857z m0 307.2h526.811429v43.885714H380.342857zM643.657143 117.028571h43.885714v789.942858h-43.885714zM204.8 73.142857h614.582857A131.474286 131.474286 0 0 1 950.857143 204.8v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.657143 131.657143 0 0 1 204.8 73.142857z m0 43.885714a87.588571 87.588571 0 0 0-87.588571 87.771429v614.4a87.588571 87.588571 0 0 0 87.588571 87.771429h614.582857a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM204.8 73.142857A131.657143 131.657143 0 0 0 73.142857 204.8v614.4a131.657143 131.657143 0 0 0 131.657143 131.657143h219.428571V73.142857z m131.84 460.8h-65.828571v65.828572h-43.885715v-65.828572h-65.828571v-43.885714h65.828571v-65.828572h43.885715v65.828572h65.828571z\"/></svg>";
          /***/
        },
        /* 3 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M73.142857 599.771429h877.714286v43.885714H73.142857zM336.457143 380.342857h43.885714v526.628572h-43.885714z m307.2 0h43.885714v526.628572h-43.885714zM204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.657143 131.657143 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.588571 87.588571 0 0 0 87.771429 87.771429h614.4a87.588571 87.588571 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM819.2 73.142857H204.8A131.657143 131.657143 0 0 0 73.142857 204.8v219.428571h877.714286v-219.428571A131.657143 131.657143 0 0 0 819.2 73.142857z m-219.428571 197.485714h-65.828572v65.828572h-43.885714v-65.828572h-65.828572v-43.885714h65.828572V160.914286h43.885714v65.828571h65.828572z\"/></svg>";
          /***/
        },
        /* 4 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.771429 87.771429 0 0 0 87.771429 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM73.142857 336.457143h877.714286v44.068571H73.142857zM336.64 117.028571h43.885714v526.628572h-43.885714z m307.017143 0h44.068571v526.628572H643.657143zM73.142857 599.771429v219.428571a131.657143 131.657143 0 0 0 131.657143 131.657143h614.4a131.657143 131.657143 0 0 0 131.657143-131.657143v-219.428571z m526.628572 197.485714h-65.645715v65.828571H490.057143v-65.828571h-65.828572v-43.885714h65.828572v-65.828572h44.068571v65.828572h65.645715z\"/></svg>";
          /***/
        },
        /* 5 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M925.99596 99.038384c-25.470707-25.6-60.121212-39.822222-96.323233-39.822222H194.19798c-36.072727 0-70.723232 14.351515-96.323233 39.822222-25.6 25.6-39.822222 60.121212-39.822222 96.323232v635.474748c0 36.072727 14.351515 70.723232 39.822222 96.323232C123.474747 952.759596 158.125253 967.111111 194.19798 967.111111h635.474747c36.072727 0 70.723232-14.351515 96.323233-39.951515 25.6-25.6 39.951515-60.121212 39.951515-96.323232V195.361616c0-36.072727-14.351515-70.723232-39.951515-96.323232z m-277.850505 5.559596v226.909091H375.725253V104.59798h272.420202zM103.434343 195.361616c0-24.048485 9.567677-47.191919 26.634344-64.129293 17.066667-17.066667 40.080808-26.634343 64.129293-26.634343h136.145454v226.909091H103.434343V195.361616z m90.763637 726.367677c-24.048485 0-47.191919-9.567677-64.129293-26.634344-17.066667-17.066667-26.634343-40.080808-26.634344-64.129292V649.309091h226.909091v272.420202H194.19798z m181.527273 0V649.309091h272.290909v272.420202H375.725253z m544.711111-90.892929c0 24.048485-9.567677 47.191919-26.634344 64.129293-17.066667 17.066667-40.080808 26.634343-64.129293 26.634343H693.527273V649.309091h226.909091v181.527273zM693.527273 331.507071V104.59798h136.145454c24.048485 0 47.191919 9.567677 64.129293 26.634343 17.066667 17.066667 26.634343 40.080808 26.634344 64.129293v136.145455H693.527273z\"/></svg>";
          /***/
        },
        /* 6 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M336.457143 73.142857h43.885714v877.714286h-43.885714z m307.382857 0h43.702857v877.714286h-43.702857z m-438.857143 0h614.4A131.657143 131.657143 0 0 1 950.857143 204.8v614.4a131.474286 131.474286 0 0 1-131.474286 131.657143h-614.4A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.982857 73.142857z m0 43.885714a87.588571 87.588571 0 0 0-87.771428 87.771429v614.4a87.588571 87.588571 0 0 0 87.771428 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM73.142857 336.457143h877.714286v307.2H73.142857z m292.571429 43.885714v219.428572h292.571428v-219.428572z\"/></svg>";
          /***/
        },
        /* 7 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M925.996 99.038c-25.47-25.6-60.121-39.822-96.323-39.822H194.198c-75.12 0.13-136.016 61.026-136.145 136.146v635.345c0 36.073 14.351 70.723 39.822 96.323 25.6 25.73 60.25 40.081 96.323 40.081h635.475c36.072 0 70.723-14.351 96.323-39.951 25.6-25.6 39.951-60.122 39.951-96.324V195.362c0-36.073-14.351-70.724-39.951-96.324z m-365.77 494.287L512 545.228l-48.226 48.097-32.194-31.935 48.355-48.226-48.226-48.097 32.194-32.194L512 480.97l48.097-48.097 32.194 32.194-48.097 48.097 48.226 48.226-32.194 31.935zM103.434 195.362c0-24.049 9.568-47.192 26.635-64.13 17.066-17.066 40.08-26.634 64.129-26.634h136.145v226.91H103.434V195.361z m0 181.656h226.91V649.31h-226.91V377.02z m90.764 544.84c-24.049 0-47.192-9.567-64.13-26.634-17.066-17.066-26.634-40.08-26.634-64.258V694.69h226.91v227.168H194.197z m726.238-90.763c0 24.048-9.438 47.192-26.505 64.259-17.066 17.066-40.21 26.634-64.258 26.505H693.527V694.69h226.91v136.404z m0-181.786H693.527V377.02h226.91v272.29zM693.527 331.507V104.598h136.146c24.048 0 47.192 9.438 64.258 26.505 17.067 17.067 26.635 40.21 26.505 64.259v136.145H693.527z\"/></svg>";
          /***/
        },
        /* 8 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M925.99596 99.038384c-25.470707-25.6-60.121212-39.822222-96.323233-39.822222H194.19798c-36.072727 0-70.723232 14.351515-96.323233 39.822222-25.6 25.6-39.822222 60.121212-39.822222 96.323232v635.474748c0 36.072727 14.351515 70.723232 39.822222 96.323232C123.474747 952.759596 158.125253 967.111111 194.19798 967.111111h635.474747c36.072727 0 70.723232-14.351515 96.323233-39.951515 25.6-25.6 39.951515-60.121212 39.951515-96.323232V195.361616c0-36.072727-14.351515-70.723232-39.951515-96.323232z m-550.270707 5.559596h272.290909v227.167677H375.725253V104.59798z m56.242424 360.468687l31.935353-32.19394 48.09697 48.226263 48.09697-48.226263 32.193939 32.19394-48.09697 48.096969 48.226263 48.226263-32.193939 31.935354-48.226263-48.09697-48.226263 48.09697-31.935353-31.935354 48.226262-48.226263-48.096969-48.096969zM103.434343 195.361616c0-24.048485 9.567677-47.191919 26.634344-64.129293 17.066667-17.066667 40.080808-26.634343 64.129293-26.634343h136.145454v227.167677H103.434343V195.361616z m817.002021 635.733333c0 24.048485-9.567677 47.191919-26.634344 64.258586-17.066667 17.066667-40.080808 26.634343-64.129293 26.634344H194.19798c-24.048485 0-47.191919-9.567677-64.258586-26.634344C112.872727 878.157576 103.434343 855.014141 103.434343 830.836364V694.690909h226.909091v226.909091h45.381819V694.690909h272.290909v226.909091h45.381818V694.690909h226.909091v136.40404z m0-499.329292H693.527273V104.59798h136.145454c24.048485 0 47.191919 9.567677 64.129293 26.634343 17.066667 17.066667 26.634343 40.080808 26.634344 64.129293v136.404041z\"/></svg>";
          /***/
        },
        /* 9 */

        /***/
        function (module, exports) {
          module.exports = "<?xml version=\"1.0\" standalone=\"no\"?><!doctype html><svg class=icon width=20px height=20.00px viewBox=\"0 0 1024 1024\" version=1.1 xmlns=http://www.w3.org/2000/svg><path fill=#595959 d=\"M764.42168889 830.5152c0 30.23530667-24.61013333 54.84430222-54.84316444 54.84430222H314.42147555c-30.23416889 0-54.84316445-24.61013333-54.84316444-54.84430222V248.32796445h504.84337778v582.18723555zM369.26577778 149.89084445c0-6.32832 4.92202667-11.25034667 11.25034667-11.25034667H644.18702222c6.32832 0 11.25034667 4.92202667 11.25034667 11.25034667v33.04675555H369.26577778V149.89084445z m559.68768 33.04675555H720.82773333V149.89084445c0-42.1888-34.45191111-76.64071111-76.64071111-76.64071112H380.51612445c-42.1888 0-76.64071111 34.45191111-76.64071112 76.64071112v33.04675555h-208.82773333c-18.28181333 0-33.04789333 14.76608-33.04789333 33.04675555s14.76608 33.04675555 33.04675555 33.04675556h98.43825778v581.48408889c0 66.79779555 54.14001778 120.93781333 120.93667555 120.93781333h395.1570489c66.79665778 0 120.93667555-54.14001778 120.93667555-120.93781333V248.32796445h98.43825778c18.28067555 0 33.04675555-14.76494222 33.04675555-33.04675556s-14.76608-32.34360889-33.04675555-32.34360889zM512 786.21923555c18.28181333 0 33.04675555-14.76608 33.04675555-33.04789333v-351.56195555c0-18.28181333-14.76494222-33.04675555-33.04675555-33.04675556s-33.04675555 14.76494222-33.04675555 33.04675556v351.56195555c0 18.28181333 14.76494222 33.04789333 33.04675555 33.04789333m-153.98456889 0c18.28181333 0 33.04675555-14.76608 33.04675556-33.04789333v-351.56195555c0-18.28181333-14.76494222-33.04675555-33.04675556-33.04675556s-33.04675555 14.76494222-33.04675556 33.04675556v351.56195555c0.70314667 18.28181333 15.46922667 33.04789333 33.04675556 33.04789333m307.96913778 0c18.28067555 0 33.04675555-14.76608 33.04675556-33.04789333v-351.56195555c0-18.28181333-14.76608-33.04675555-33.04675556-33.04675556s-33.04675555 14.76494222-33.04675556 33.04675556v351.56195555c0 18.28181333 14.76494222 33.04789333 33.04675556 33.04789333\"/></svg>";
          /***/
        },
        /* 10 */

        /***/
        function (module, __webpack_exports__, __webpack_require__) {

          __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: external {"commonjs":"quill","commonjs2":"quill","amd":"quill","root":"Quill"}


          var external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_ = __webpack_require__(0);

          var external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_); // CONCATENATED MODULE: ./src/utils/index.js


          function css(domNode, rules) {
            if (_typeof(rules) === 'object') {
              for (var prop in rules) {
                domNode.style[prop] = rules[prop];
              }
            }
          }
          /**
           * getRelativeRect
           * @param  {Object} targetRect  rect data for target element
           * @param  {Element} container  container element
           * @return {Object}             an object with rect data
           */


          function getRelativeRect(targetRect, container) {
            var containerRect = container.getBoundingClientRect();
            return {
              x: targetRect.x - containerRect.x - container.scrollLeft,
              y: targetRect.y - containerRect.y - container.scrollTop,
              x1: targetRect.x - containerRect.x - container.scrollLeft + targetRect.width,
              y1: targetRect.y - containerRect.y - container.scrollTop + targetRect.height,
              width: targetRect.width,
              height: targetRect.height
            };
          }
          /**
           * _omit
           * @param  {Object} obj         target Object
           * @param  {Array} uselessKeys  keys of removed properties
           * @return {Object}             new Object without useless properties
           */


          function _omit(obj, uselessKeys) {
            return obj && Object.keys(obj).reduce(function (acc, key) {
              return uselessKeys.includes(key) ? acc : Object.assign({}, acc, _defineProperty({}, key, obj[key]));
            }, {});
          }
          /**
           * getEventComposedPath
           *  compatibility fixed for Event.path/Event.composedPath
           *  Event.path is only for chrome/opera
           *  Event.composedPath is for Safari, FF
           *  Neither for Micro Edge
           * @param {Event} evt
           * @return {Array} an array of event.path
           */


          function getEventComposedPath(evt) {
            var path; // chrome, opera, safari, firefox

            path = evt.path || evt.composedPath && evt.composedPath(); // other: edge

            if (path == undefined && evt.target) {
              path = [];
              var target = evt.target;
              path.push(target);

              while (target && target.parentNode) {
                target = target.parentNode;
                path.push(target);
              }
            }

            return path;
          }

          function convertToHex(rgb) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/; // if rgb

            if (/^(rgb|RGB)/.test(rgb)) {
              var color = rgb.toString().match(/\d+/g);
              var hex = "#";

              for (var i = 0; i < 3; i++) {
                hex += ("0" + Number(color[i]).toString(16)).slice(-2);
              }

              return hex;
            } else if (reg.test(rgb)) {
              var aNum = rgb.replace(/#/, "").split("");

              if (aNum.length === 6) {
                return rgb;
              } else if (aNum.length === 3) {
                var numHex = "#";

                for (var i = 0; i < aNum.length; i += 1) {
                  numHex += aNum[i] + aNum[i];
                }

                return numHex;
              }
            }

            return rgb;
          } // CONCATENATED MODULE: ./src/modules/table-column-tool.js


          var COL_TOOL_HEIGHT = 12;
          var COL_TOOL_CELL_HEIGHT = 12;
          var CELL_MIN_WIDTH = 50;
          var PRIMARY_COLOR = '#35A7ED';

          var table_column_tool_TableColumnTool = /*#__PURE__*/function () {
            function table_column_tool_TableColumnTool(table, quill, options) {
              _classCallCheck(this, table_column_tool_TableColumnTool);

              if (!table) return null;
              this.table = table;
              this.quill = quill;
              this.options = options;
              this.domNode = null;
              this.initColTool();
            }

            _createClass(table_column_tool_TableColumnTool, [{
              key: "initColTool",
              value: function initColTool() {
                var parent = this.quill.root.parentNode;
                var tableRect = this.table.getBoundingClientRect();
                var containerRect = parent.getBoundingClientRect();
                var tableViewRect = this.table.parentNode.getBoundingClientRect();
                this.domNode = document.createElement('div');
                this.domNode.classList.add('qlbt-col-tool');
                this.updateToolCells();
                parent.appendChild(this.domNode);
                css(this.domNode, {
                  width: "".concat(tableViewRect.width, "px"),
                  height: "".concat(COL_TOOL_HEIGHT, "px"),
                  left: "".concat(tableViewRect.left - containerRect.left + parent.scrollLeft, "px"),
                  top: "".concat(tableViewRect.top - containerRect.top + parent.scrollTop - COL_TOOL_HEIGHT - 5, "px")
                });
              }
            }, {
              key: "createToolCell",
              value: function createToolCell() {
                var toolCell = document.createElement('div');
                toolCell.classList.add('qlbt-col-tool-cell');
                var resizeHolder = document.createElement('div');
                resizeHolder.classList.add('qlbt-col-tool-cell-holder');
                css(toolCell, {
                  'height': "".concat(COL_TOOL_CELL_HEIGHT, "px")
                });
                toolCell.appendChild(resizeHolder);
                return toolCell;
              }
            }, {
              key: "updateToolCells",
              value: function updateToolCells() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var CellsInFirstRow = tableContainer.children.tail.children.head.children;
                var tableCols = tableContainer.colGroup().children;
                var cellsNumber = computeCellsNumber(CellsInFirstRow);
                var existCells = Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));

                for (var index = 0; index < Math.max(cellsNumber, existCells.length); index++) {
                  var col = tableCols.at(index);
                  var colWidth = col && parseInt(col.formats()[col.statics.blotName].width, 10); // if cell already exist

                  var toolCell = null;

                  if (!existCells[index]) {
                    toolCell = this.createToolCell();
                    this.domNode.appendChild(toolCell);
                    this.addColCellHolderHandler(toolCell); // set tool cell min-width

                    css(toolCell, {
                      'min-width': "".concat(colWidth, "px")
                    });
                  } else if (existCells[index] && index >= cellsNumber) {
                    existCells[index].remove();
                  } else {
                    toolCell = existCells[index]; // set tool cell min-width

                    css(toolCell, {
                      'min-width': "".concat(colWidth, "px")
                    });
                  }
                }
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.domNode.remove();
                return null;
              }
            }, {
              key: "addColCellHolderHandler",
              value: function addColCellHolderHandler(cell) {
                var _this = this;

                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var $holder = cell.querySelector(".qlbt-col-tool-cell-holder");
                var dragging = false;
                var x0 = 0;
                var x = 0;
                var delta = 0;
                var width0 = 0; // helpLine relation varrible

                var tableRect = {};
                var cellRect = {};
                var $helpLine = null;

                var handleDrag = function handleDrag(e) {
                  e.preventDefault();

                  if (dragging) {
                    x = e.clientX;

                    if (width0 + x - x0 >= CELL_MIN_WIDTH) {
                      delta = x - x0;
                    } else {
                      delta = CELL_MIN_WIDTH - width0;
                    }

                    css($helpLine, {
                      'left': "".concat(cellRect.left + cellRect.width - 1 + delta, "px")
                    });
                  }
                };

                var handleMouseup = function handleMouseup(e) {
                  e.preventDefault();
                  var existCells = Array.from(_this.domNode.querySelectorAll('.qlbt-col-tool-cell'));
                  var colIndex = existCells.indexOf(cell);
                  var colBlot = tableContainer.colGroup().children.at(colIndex);

                  if (dragging) {
                    colBlot.format('width', width0 + delta);
                    css(cell, {
                      'min-width': "".concat(width0 + delta, "px")
                    });
                    x0 = 0;
                    x = 0;
                    delta = 0;
                    width0 = 0;
                    dragging = false;
                    $holder.classList.remove('dragging');
                  }

                  document.removeEventListener('mousemove', handleDrag, false);
                  document.removeEventListener('mouseup', handleMouseup, false);
                  tableRect = {};
                  cellRect = {};
                  $helpLine.remove();
                  $helpLine = null;
                  tableContainer.updateTableWidth();

                  var tableSelection = _this.quill.getModule('better-table').tableSelection;

                  tableSelection && tableSelection.clearSelection();
                };

                var handleMousedown = function handleMousedown(e) {
                  document.addEventListener('mousemove', handleDrag, false);
                  document.addEventListener('mouseup', handleMouseup, false);
                  tableRect = _this.table.getBoundingClientRect();
                  cellRect = cell.getBoundingClientRect();
                  $helpLine = document.createElement('div');
                  css($helpLine, {
                    position: 'fixed',
                    top: "".concat(cellRect.top, "px"),
                    left: "".concat(cellRect.left + cellRect.width - 1, "px"),
                    zIndex: '100',
                    height: "".concat(tableRect.height + COL_TOOL_HEIGHT + 4, "px"),
                    width: '1px',
                    backgroundColor: PRIMARY_COLOR
                  });
                  document.body.appendChild($helpLine);
                  dragging = true;
                  x0 = e.clientX;
                  width0 = cellRect.width;
                  $holder.classList.add('dragging');
                };

                $holder.addEventListener('mousedown', handleMousedown, false);
              }
            }, {
              key: "colToolCells",
              value: function colToolCells() {
                return Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));
              }
            }]);

            return table_column_tool_TableColumnTool;
          }();

          function computeCellsNumber(CellsInFirstRow) {
            return CellsInFirstRow.reduce(function (sum, cell) {
              var cellColspan = cell.formats().colspan;
              sum = sum + parseInt(cellColspan, 10);
              return sum;
            }, 0);
          } // CONCATENATED MODULE: ./src/formats/header.js


          var Block = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import("blots/block");

          var header_Header = /*#__PURE__*/function (_Block) {
            _inherits(header_Header, _Block);

            var _super = _createSuper(header_Header);

            function header_Header() {
              _classCallCheck(this, header_Header);

              return _super.apply(this, arguments);
            }

            _createClass(header_Header, [{
              key: "format",
              value: function format(name, value) {
                var _header_Header$format = header_Header.formats(this.domNode),
                    row = _header_Header$format.row,
                    cell = _header_Header$format.cell,
                    rowspan = _header_Header$format.rowspan,
                    colspan = _header_Header$format.colspan;

                if (name === header_Header.blotName) {
                  if (value) {
                    _get(_getPrototypeOf(header_Header.prototype), "format", this).call(this, name, {
                      value: value,
                      row: row,
                      cell: cell,
                      rowspan: rowspan,
                      colspan: colspan
                    });
                  } else {
                    if (row) {
                      this.replaceWith(TableCellLine.blotName, {
                        row: row,
                        cell: cell,
                        rowspan: rowspan,
                        colspan: colspan
                      });
                    } else {
                      _get(_getPrototypeOf(header_Header.prototype), "format", this).call(this, name, value);
                    }
                  }
                } else {
                  _get(_getPrototypeOf(header_Header.prototype), "format", this).call(this, name, value);
                }
              }
            }, {
              key: "optimize",
              value: function optimize(context) {
                var _header_Header$format2 = header_Header.formats(this.domNode),
                    row = _header_Header$format2.row,
                    rowspan = _header_Header$format2.rowspan,
                    colspan = _header_Header$format2.colspan;

                if (row && !(this.parent instanceof TableCell)) {
                  this.wrap(TableCell.blotName, {
                    row: row,
                    colspan: colspan,
                    rowspan: rowspan
                  });
                } // ShadowBlot optimize


                this.enforceAllowedChildren();

                if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {
                  this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
                }

                if (this.children.length === 0) {
                  if (this.statics.defaultChild != null) {
                    var child = this.scroll.create(this.statics.defaultChild.blotName);
                    this.appendChild(child); // TODO double check if necessary
                    // child.optimize(context);
                  } else {
                    this.remove();
                  }
                } // Block optimize


                this.cache = {};
              }
            }], [{
              key: "create",
              value: function create(value) {
                if (typeof value === 'string') {
                  value = {
                    value: value
                  };
                }

                var node = _get(_getPrototypeOf(header_Header), "create", this).call(this, value.value);

                CELL_IDENTITY_KEYS.forEach(function (key) {
                  if (value[key]) node.setAttribute("data-".concat(key), value[key]);
                });
                CELL_ATTRIBUTES.forEach(function (key) {
                  if (value[key]) node.setAttribute("data-".concat(key), value[key]);
                });
                return node;
              }
            }, {
              key: "formats",
              value: function formats(domNode) {
                var formats = {};
                formats.value = this.tagName.indexOf(domNode.tagName) + 1;
                return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).reduce(function (formats, attribute) {
                  if (domNode.hasAttribute("data-".concat(attribute))) {
                    formats[attribute] = domNode.getAttribute("data-".concat(attribute)) || undefined;
                  }

                  return formats;
                }, formats);
              }
            }]);

            return header_Header;
          }(Block);

          header_Header.blotName = 'header';
          header_Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
          /* harmony default export */

          var header = header_Header; // CONCATENATED MODULE: ./src/formats/table.js

          var Break = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import("blots/break");
          var table_Block = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import("blots/block");
          var Container = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import("blots/container");
          var COL_ATTRIBUTES = ["width"];
          var COL_DEFAULT = {
            width: 100
          };
          var CELL_IDENTITY_KEYS = ["row", "cell"];
          var CELL_ATTRIBUTES = ["rowspan", "colspan"];
          var CELL_DEFAULT = {
            rowspan: 1,
            colspan: 1
          };
          var ERROR_LIMIT = 5;

          var TableCellLine = /*#__PURE__*/function (_table_Block) {
            _inherits(TableCellLine, _table_Block);

            var _super2 = _createSuper(TableCellLine);

            function TableCellLine() {
              _classCallCheck(this, TableCellLine);

              return _super2.apply(this, arguments);
            }

            _createClass(TableCellLine, [{
              key: "format",
              value: function format(name, value) {
                if (CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).indexOf(name) > -1) {
                  if (value) {
                    this.domNode.setAttribute("data-".concat(name), value);
                  } else {
                    this.domNode.removeAttribute("data-".concat(name));
                  }
                } else if (name === 'cell-bg') {
                  if (value) {
                    this.domNode.setAttribute('data-cell-bg', value);
                  } else {
                    this.domNode.removeAttribute('data-cell-bg');
                  }
                } else if (name === 'header') {
                  if (!value) return;

                  var _TableCellLine$format = TableCellLine.formats(this.domNode),
                      row = _TableCellLine$format.row,
                      cell = _TableCellLine$format.cell,
                      rowspan = _TableCellLine$format.rowspan,
                      colspan = _TableCellLine$format.colspan;

                  _get(_getPrototypeOf(TableCellLine.prototype), "format", this).call(this, name, {
                    value: value,
                    row: row,
                    cell: cell,
                    rowspan: rowspan,
                    colspan: colspan
                  });
                } else {
                  _get(_getPrototypeOf(TableCellLine.prototype), "format", this).call(this, name, value);
                }
              }
            }, {
              key: "optimize",
              value: function optimize(context) {
                // cover shadowBlot's wrap call, pass params parentBlot initialize
                // needed
                var rowId = this.domNode.getAttribute('data-row');
                var rowspan = this.domNode.getAttribute('data-rowspan');
                var colspan = this.domNode.getAttribute('data-colspan');
                var cellBg = this.domNode.getAttribute('data-cell-bg');

                if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {
                  this.wrap(this.statics.requiredContainer.blotName, {
                    row: rowId,
                    colspan: colspan,
                    rowspan: rowspan,
                    'cell-bg': cellBg
                  });
                }

                _get(_getPrototypeOf(TableCellLine.prototype), "optimize", this).call(this, context);
              }
            }, {
              key: "tableCell",
              value: function tableCell() {
                return this.parent;
              }
            }], [{
              key: "create",
              value: function create(value) {
                var node = _get(_getPrototypeOf(TableCellLine), "create", this).call(this, value);

                CELL_IDENTITY_KEYS.forEach(function (key) {
                  var identityMaker = key === 'row' ? table_rowId : table_cellId;
                  node.setAttribute("data-".concat(key), value[key] || identityMaker());
                });
                CELL_ATTRIBUTES.forEach(function (attrName) {
                  node.setAttribute("data-".concat(attrName), value[attrName] || CELL_DEFAULT[attrName]);
                });

                if (value['cell-bg']) {
                  node.setAttribute('data-cell-bg', value['cell-bg']);
                }

                return node;
              }
            }, {
              key: "formats",
              value: function formats(domNode) {
                var formats = {};
                return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).concat(['cell-bg']).reduce(function (formats, attribute) {
                  if (domNode.hasAttribute("data-".concat(attribute))) {
                    formats[attribute] = domNode.getAttribute("data-".concat(attribute)) || undefined;
                  }

                  return formats;
                }, formats);
              }
            }]);

            return TableCellLine;
          }(table_Block);

          TableCellLine.blotName = "table-cell-line";
          TableCellLine.className = "qlbt-cell-line";
          TableCellLine.tagName = "P";

          var TableCell = /*#__PURE__*/function (_Container) {
            _inherits(TableCell, _Container);

            var _super3 = _createSuper(TableCell);

            function TableCell() {
              _classCallCheck(this, TableCell);

              return _super3.apply(this, arguments);
            }

            _createClass(TableCell, [{
              key: "checkMerge",
              value: function checkMerge() {
                if (_get(_getPrototypeOf(TableCell.prototype), "checkMerge", this).call(this) && this.next.children.head != null) {
                  var thisHead = this.children.head.formats()[this.children.head.statics.blotName];
                  var thisTail = this.children.tail.formats()[this.children.tail.statics.blotName];
                  var nextHead = this.next.children.head.formats()[this.next.children.head.statics.blotName];
                  var nextTail = this.next.children.tail.formats()[this.next.children.tail.statics.blotName];
                  return thisHead.cell === thisTail.cell && thisHead.cell === nextHead.cell && thisHead.cell === nextTail.cell;
                }

                return false;
              }
            }, {
              key: "cellOffset",
              value: function cellOffset() {
                if (this.parent) {
                  return this.parent.children.indexOf(this);
                }

                return -1;
              }
            }, {
              key: "formats",
              value: function formats() {
                var _this2 = this;

                var formats = {};

                if (this.domNode.hasAttribute("data-row")) {
                  formats["row"] = this.domNode.getAttribute("data-row");
                }

                if (this.domNode.hasAttribute("data-cell-bg")) {
                  formats["cell-bg"] = this.domNode.getAttribute("data-cell-bg");
                }

                return CELL_ATTRIBUTES.reduce(function (formats, attribute) {
                  if (_this2.domNode.hasAttribute(attribute)) {
                    formats[attribute] = _this2.domNode.getAttribute(attribute);
                  }

                  return formats;
                }, formats);
              }
            }, {
              key: "toggleAttribute",
              value: function toggleAttribute(name, value) {
                if (value) {
                  this.domNode.setAttribute(name, value);
                } else {
                  this.domNode.removeAttribute(name);
                }
              }
            }, {
              key: "formatChildren",
              value: function formatChildren(name, value) {
                this.children.forEach(function (child) {
                  child.format(name, value);
                });
              }
            }, {
              key: "format",
              value: function format(name, value) {
                if (CELL_ATTRIBUTES.indexOf(name) > -1) {
                  this.toggleAttribute(name, value);
                  this.formatChildren(name, value);
                } else if (['row'].indexOf(name) > -1) {
                  this.toggleAttribute("data-".concat(name), value);
                  this.formatChildren(name, value);
                } else if (name === 'cell-bg') {
                  this.toggleAttribute('data-cell-bg', value);
                  this.formatChildren(name, value);

                  if (value) {
                    this.domNode.style.backgroundColor = value;
                  } else {
                    this.domNode.style.backgroundColor = 'initial';
                  }
                } else {
                  _get(_getPrototypeOf(TableCell.prototype), "format", this).call(this, name, value);
                }
              }
            }, {
              key: "optimize",
              value: function optimize(context) {
                var rowId = this.domNode.getAttribute("data-row");

                if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {
                  this.wrap(this.statics.requiredContainer.blotName, {
                    row: rowId
                  });
                }

                _get(_getPrototypeOf(TableCell.prototype), "optimize", this).call(this, context);
              }
            }, {
              key: "row",
              value: function row() {
                return this.parent;
              }
            }, {
              key: "rowOffset",
              value: function rowOffset() {
                if (this.row()) {
                  return this.row().rowOffset();
                }

                return -1;
              }
            }, {
              key: "table",
              value: function table() {
                return this.row() && this.row().table();
              }
            }], [{
              key: "create",
              value: function create(value) {
                var node = _get(_getPrototypeOf(TableCell), "create", this).call(this, value);

                node.setAttribute("data-row", value.row);
                CELL_ATTRIBUTES.forEach(function (attrName) {
                  if (value[attrName]) {
                    node.setAttribute(attrName, value[attrName]);
                  }
                });

                if (value['cell-bg']) {
                  node.setAttribute('data-cell-bg', value['cell-bg']);
                  node.style.backgroundColor = value['cell-bg'];
                }

                return node;
              }
            }, {
              key: "formats",
              value: function formats(domNode) {
                var formats = {};

                if (domNode.hasAttribute("data-row")) {
                  formats["row"] = domNode.getAttribute("data-row");
                }

                if (domNode.hasAttribute("data-cell-bg")) {
                  formats["cell-bg"] = domNode.getAttribute("data-cell-bg");
                }

                return CELL_ATTRIBUTES.reduce(function (formats, attribute) {
                  if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                  }

                  return formats;
                }, formats);
              }
            }]);

            return TableCell;
          }(Container);

          TableCell.blotName = "table";
          TableCell.tagName = "TD";

          var TableRow = /*#__PURE__*/function (_Container2) {
            _inherits(TableRow, _Container2);

            var _super4 = _createSuper(TableRow);

            function TableRow() {
              _classCallCheck(this, TableRow);

              return _super4.apply(this, arguments);
            }

            _createClass(TableRow, [{
              key: "checkMerge",
              value: function checkMerge() {
                if (_get(_getPrototypeOf(TableRow.prototype), "checkMerge", this).call(this) && this.next.children.head != null) {
                  var thisHead = this.children.head.formats();
                  var thisTail = this.children.tail.formats();
                  var nextHead = this.next.children.head.formats();
                  var nextTail = this.next.children.tail.formats();
                  return thisHead.row === thisTail.row && thisHead.row === nextHead.row && thisHead.row === nextTail.row;
                }

                return false;
              }
            }, {
              key: "formats",
              value: function formats() {
                var _this3 = this;

                return ["row"].reduce(function (formats, attrName) {
                  if (_this3.domNode.hasAttribute("data-".concat(attrName))) {
                    formats[attrName] = _this3.domNode.getAttribute("data-".concat(attrName));
                  }

                  return formats;
                }, {});
              }
            }, {
              key: "optimize",
              value: function optimize(context) {
                // optimize function of ShadowBlot
                if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {
                  this.wrap(this.statics.requiredContainer.blotName);
                } // optimize function of ParentBlot
                // note: modified this optimize function because
                // TableRow should not be removed when the length of its children was 0


                this.enforceAllowedChildren();

                if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {
                  this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
                } // optimize function of ContainerBlot


                if (this.children.length > 0 && this.next != null && this.checkMerge()) {
                  this.next.moveChildren(this);
                  this.next.remove();
                }
              }
            }, {
              key: "rowOffset",
              value: function rowOffset() {
                if (this.parent) {
                  return this.parent.children.indexOf(this);
                }

                return -1;
              }
            }, {
              key: "table",
              value: function table() {
                return this.parent && this.parent.parent;
              }
            }], [{
              key: "create",
              value: function create(value) {
                var node = _get(_getPrototypeOf(TableRow), "create", this).call(this, value);

                node.setAttribute("data-row", value.row);
                return node;
              }
            }]);

            return TableRow;
          }(Container);

          TableRow.blotName = "table-row";
          TableRow.tagName = "TR";

          var TableBody = /*#__PURE__*/function (_Container3) {
            _inherits(TableBody, _Container3);

            var _super5 = _createSuper(TableBody);

            function TableBody() {
              _classCallCheck(this, TableBody);

              return _super5.apply(this, arguments);
            }

            return _createClass(TableBody);
          }(Container);

          TableBody.blotName = "table-body";
          TableBody.tagName = "TBODY";

          var TableCol = /*#__PURE__*/function (_table_Block2) {
            _inherits(TableCol, _table_Block2);

            var _super6 = _createSuper(TableCol);

            function TableCol() {
              _classCallCheck(this, TableCol);

              return _super6.apply(this, arguments);
            }

            _createClass(TableCol, [{
              key: "format",
              value: function format(name, value) {
                if (COL_ATTRIBUTES.indexOf(name) > -1) {
                  this.domNode.setAttribute("".concat(name), value || COL_DEFAULT[name]);
                } else {
                  _get(_getPrototypeOf(TableCol.prototype), "format", this).call(this, name, value);
                }
              }
            }, {
              key: "html",
              value: function html() {
                return this.domNode.outerHTML;
              }
            }], [{
              key: "create",
              value: function create(value) {
                var node = _get(_getPrototypeOf(TableCol), "create", this).call(this, value);

                COL_ATTRIBUTES.forEach(function (attrName) {
                  node.setAttribute("".concat(attrName), value[attrName] || COL_DEFAULT[attrName]);
                });
                return node;
              }
            }, {
              key: "formats",
              value: function formats(domNode) {
                return COL_ATTRIBUTES.reduce(function (formats, attribute) {
                  if (domNode.hasAttribute("".concat(attribute))) {
                    formats[attribute] = domNode.getAttribute("".concat(attribute)) || undefined;
                  }

                  return formats;
                }, {});
              }
            }]);

            return TableCol;
          }(table_Block);

          TableCol.blotName = "table-col";
          TableCol.tagName = "col";

          var TableColGroup = /*#__PURE__*/function (_Container4) {
            _inherits(TableColGroup, _Container4);

            var _super7 = _createSuper(TableColGroup);

            function TableColGroup() {
              _classCallCheck(this, TableColGroup);

              return _super7.apply(this, arguments);
            }

            return _createClass(TableColGroup);
          }(Container);

          TableColGroup.blotName = "table-col-group";
          TableColGroup.tagName = "colgroup";

          var table_TableContainer = /*#__PURE__*/function (_Container5) {
            _inherits(table_TableContainer, _Container5);

            var _super8 = _createSuper(table_TableContainer);

            function table_TableContainer(scroll, domNode) {
              var _this4;

              _classCallCheck(this, table_TableContainer);

              _this4 = _super8.call(this, scroll, domNode);

              _this4.updateTableWidth();

              return _this4;
            }

            _createClass(table_TableContainer, [{
              key: "updateTableWidth",
              value: function updateTableWidth() {
                var _this5 = this;

                setTimeout(function () {
                  var colGroup = _this5.colGroup();

                  if (!colGroup) return;
                  var tableWidth = colGroup.children.reduce(function (sumWidth, col) {
                    sumWidth = sumWidth + parseInt(col.formats()[TableCol.blotName].width, 10);
                    return sumWidth;
                  }, 0);
                  _this5.domNode.style.width = "".concat(tableWidth, "px");
                }, 0);
              }
            }, {
              key: "cells",
              value: function cells(column) {
                return this.rows().map(function (row) {
                  return row.children.at(column);
                });
              }
            }, {
              key: "colGroup",
              value: function colGroup() {
                return this.children.head;
              }
            }, {
              key: "deleteColumns",
              value: function deleteColumns(compareRect) {
                var _this6 = this;

                var delIndexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                var editorWrapper = arguments.length > 2 ? arguments[2] : undefined;

                var _this$descendants = this.descendants(TableBody),
                    _this$descendants2 = _slicedToArray(_this$descendants, 1),
                    body = _this$descendants2[0];

                if (body == null || body.children.head == null) return;
                var tableCells = this.descendants(TableCell);
                var removedCells = [];
                var modifiedCells = [];
                tableCells.forEach(function (cell) {
                  var cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

                  if (cellRect.x + ERROR_LIMIT > compareRect.x && cellRect.x1 - ERROR_LIMIT < compareRect.x1) {
                    removedCells.push(cell);
                  } else if (cellRect.x < compareRect.x + ERROR_LIMIT && cellRect.x1 > compareRect.x1 - ERROR_LIMIT) {
                    modifiedCells.push(cell);
                  }
                });

                if (removedCells.length === tableCells.length) {
                  this.tableDestroy();
                  return true;
                } // remove the matches column tool cell


                delIndexes.forEach(function (delIndex) {
                  _this6.colGroup().children.at(delIndexes[0]).remove();
                });
                removedCells.forEach(function (cell) {
                  cell.remove();
                });
                modifiedCells.forEach(function (cell) {
                  var cellColspan = parseInt(cell.formats().colspan, 10);
                  var cellWidth = parseInt(cell.formats().width, 10);
                  cell.format('colspan', cellColspan - delIndexes.length);
                });
                this.updateTableWidth();
              }
            }, {
              key: "deleteRow",
              value: function deleteRow(compareRect, editorWrapper) {
                var _this$descendants3 = this.descendants(TableBody),
                    _this$descendants4 = _slicedToArray(_this$descendants3, 1),
                    body = _this$descendants4[0];

                if (body == null || body.children.head == null) return;
                var tableCells = this.descendants(TableCell);
                var tableRows = this.descendants(TableRow);
                var removedCells = []; // cells to be removed

                var modifiedCells = []; // cells to be modified

                var fallCells = []; // cells to fall into next row
                // compute rows to remove
                // bugfix: #21 There will be a empty tr left if delete the last row of a table

                var removedRows = tableRows.filter(function (row) {
                  var rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), editorWrapper);
                  return rowRect.y > compareRect.y - ERROR_LIMIT && rowRect.y1 < compareRect.y1 + ERROR_LIMIT;
                });
                tableCells.forEach(function (cell) {
                  var cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

                  if (cellRect.y > compareRect.y - ERROR_LIMIT && cellRect.y1 < compareRect.y1 + ERROR_LIMIT) {
                    removedCells.push(cell);
                  } else if (cellRect.y < compareRect.y + ERROR_LIMIT && cellRect.y1 > compareRect.y1 - ERROR_LIMIT) {
                    modifiedCells.push(cell);

                    if (Math.abs(cellRect.y - compareRect.y) < ERROR_LIMIT) {
                      fallCells.push(cell);
                    }
                  }
                });

                if (removedCells.length === tableCells.length) {
                  this.tableDestroy();
                  return;
                } // compute length of removed rows


                var removedRowsLength = this.rows().reduce(function (sum, row) {
                  var rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), editorWrapper);

                  if (rowRect.y > compareRect.y - ERROR_LIMIT && rowRect.y1 < compareRect.y1 + ERROR_LIMIT) {
                    sum += 1;
                  }

                  return sum;
                }, 0); // it must excute before the table layout changed with other operation

                fallCells.forEach(function (cell) {
                  var cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);
                  var nextRow = cell.parent.next;
                  var cellsInNextRow = nextRow.children;
                  var refCell = cellsInNextRow.reduce(function (ref, compareCell) {
                    var compareRect = getRelativeRect(compareCell.domNode.getBoundingClientRect(), editorWrapper);

                    if (Math.abs(cellRect.x1 - compareRect.x) < ERROR_LIMIT) {
                      ref = compareCell;
                    }

                    return ref;
                  }, null);
                  nextRow.insertBefore(cell, refCell);
                  cell.format('row', nextRow.formats().row);
                });
                removedCells.forEach(function (cell) {
                  cell.remove();
                });
                modifiedCells.forEach(function (cell) {
                  var cellRowspan = parseInt(cell.formats().rowspan, 10);
                  cell.format("rowspan", cellRowspan - removedRowsLength);
                }); // remove selected rows

                removedRows.forEach(function (row) {
                  return row.remove();
                });
              }
            }, {
              key: "tableDestroy",
              value: function tableDestroy() {
                var quill = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.scroll.domNode.parentNode);
                var tableModule = quill.getModule("better-table");
                this.remove();
                tableModule.hideTableTools();
                quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
              }
            }, {
              key: "insertCell",
              value: function insertCell(tableRow, ref) {
                var id = table_cellId();
                var rId = tableRow.formats().row;
                var tableCell = this.scroll.create(TableCell.blotName, Object.assign({}, CELL_DEFAULT, {
                  row: rId
                }));
                var cellLine = this.scroll.create(TableCellLine.blotName, {
                  row: rId,
                  cell: id
                });
                tableCell.appendChild(cellLine);

                if (ref) {
                  tableRow.insertBefore(tableCell, ref);
                } else {
                  tableRow.appendChild(tableCell);
                }
              }
            }, {
              key: "insertColumn",
              value: function insertColumn(compareRect, colIndex) {
                var _this7 = this;

                var isRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                var editorWrapper = arguments.length > 3 ? arguments[3] : undefined;

                var _this$descendants5 = this.descendants(TableBody),
                    _this$descendants6 = _slicedToArray(_this$descendants5, 1),
                    body = _this$descendants6[0];

                var _this$descendants7 = this.descendants(TableColGroup),
                    _this$descendants8 = _slicedToArray(_this$descendants7, 1),
                    tableColGroup = _this$descendants8[0];

                var tableCols = this.descendants(TableCol);
                var addAsideCells = [];
                var modifiedCells = [];
                var affectedCells = [];
                if (body == null || body.children.head == null) return;
                var tableCells = this.descendants(TableCell);
                tableCells.forEach(function (cell) {
                  var cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

                  if (isRight) {
                    if (Math.abs(cellRect.x1 - compareRect.x1) < ERROR_LIMIT) {
                      // the right of selected boundary equal to the right of table cell,
                      // add a new table cell right aside this table cell
                      addAsideCells.push(cell);
                    } else if (compareRect.x1 - cellRect.x > ERROR_LIMIT && compareRect.x1 - cellRect.x1 < -ERROR_LIMIT) {
                      // the right of selected boundary is inside this table cell
                      // colspan of this table cell will increase 1
                      modifiedCells.push(cell);
                    }
                  } else {
                    if (Math.abs(cellRect.x - compareRect.x) < ERROR_LIMIT) {
                      // left of selected boundary equal to left of table cell,
                      // add a new table cell left aside this table cell
                      addAsideCells.push(cell);
                    } else if (compareRect.x - cellRect.x > ERROR_LIMIT && compareRect.x - cellRect.x1 < -ERROR_LIMIT) {
                      // the left of selected boundary is inside this table cell
                      // colspan of this table cell will increase 1
                      modifiedCells.push(cell);
                    }
                  }
                });
                addAsideCells.forEach(function (cell) {
                  var ref = isRight ? cell.next : cell;
                  var id = table_cellId();
                  var tableRow = cell.parent;
                  var rId = tableRow.formats().row;
                  var cellFormats = cell.formats();

                  var tableCell = _this7.scroll.create(TableCell.blotName, Object.assign({}, CELL_DEFAULT, {
                    row: rId,
                    rowspan: cellFormats.rowspan
                  }));

                  var cellLine = _this7.scroll.create(TableCellLine.blotName, {
                    row: rId,
                    cell: id,
                    rowspan: cellFormats.rowspan
                  });

                  tableCell.appendChild(cellLine);

                  if (ref) {
                    tableRow.insertBefore(tableCell, ref);
                  } else {
                    tableRow.appendChild(tableCell);
                  }

                  affectedCells.push(tableCell);
                }); // insert new tableCol

                var tableCol = this.scroll.create(TableCol.blotName, true);
                var colRef = isRight ? tableCols[colIndex].next : tableCols[colIndex];

                if (colRef) {
                  tableColGroup.insertBefore(tableCol, colRef);
                } else {
                  tableColGroup.appendChild(tableCol);
                }

                modifiedCells.forEach(function (cell) {
                  var cellColspan = cell.formats().colspan;
                  cell.format('colspan', parseInt(cellColspan, 10) + 1);
                  affectedCells.push(cell);
                });
                affectedCells.sort(function (cellA, cellB) {
                  var y1 = cellA.domNode.getBoundingClientRect().y;
                  var y2 = cellB.domNode.getBoundingClientRect().y;
                  return y1 - y2;
                });
                this.updateTableWidth();
                return affectedCells;
              }
            }, {
              key: "insertRow",
              value: function insertRow(compareRect, isDown, editorWrapper) {
                var _this8 = this;

                var _this$descendants9 = this.descendants(TableBody),
                    _this$descendants10 = _slicedToArray(_this$descendants9, 1),
                    body = _this$descendants10[0];

                if (body == null || body.children.head == null) return;
                var tableCells = this.descendants(TableCell);
                var rId = table_rowId();
                var newRow = this.scroll.create(TableRow.blotName, {
                  row: rId
                });
                var addBelowCells = [];
                var modifiedCells = [];
                var affectedCells = [];
                tableCells.forEach(function (cell) {
                  var cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

                  if (isDown) {
                    if (Math.abs(cellRect.y1 - compareRect.y1) < ERROR_LIMIT) {
                      addBelowCells.push(cell);
                    } else if (compareRect.y1 - cellRect.y > ERROR_LIMIT && compareRect.y1 - cellRect.y1 < -ERROR_LIMIT) {
                      modifiedCells.push(cell);
                    }
                  } else {
                    if (Math.abs(cellRect.y - compareRect.y) < ERROR_LIMIT) {
                      addBelowCells.push(cell);
                    } else if (compareRect.y - cellRect.y > ERROR_LIMIT && compareRect.y - cellRect.y1 < -ERROR_LIMIT) {
                      modifiedCells.push(cell);
                    }
                  }
                }); // ordered table cells with rect.x, fix error for inserting
                // new table cell in complicated table with wrong order.

                var sortFunc = function sortFunc(cellA, cellB) {
                  var x1 = cellA.domNode.getBoundingClientRect().x;
                  var x2 = cellB.domNode.getBoundingClientRect().x;
                  return x1 - x2;
                };

                addBelowCells.sort(sortFunc);
                addBelowCells.forEach(function (cell) {
                  var cId = table_cellId();
                  var cellFormats = cell.formats();

                  var tableCell = _this8.scroll.create(TableCell.blotName, Object.assign({}, CELL_DEFAULT, {
                    row: rId,
                    colspan: cellFormats.colspan
                  }));

                  var cellLine = _this8.scroll.create(TableCellLine.blotName, {
                    row: rId,
                    cell: cId,
                    colspan: cellFormats.colspan
                  });

                  var empty = _this8.scroll.create(Break.blotName);

                  cellLine.appendChild(empty);
                  tableCell.appendChild(cellLine);
                  newRow.appendChild(tableCell);
                  affectedCells.push(tableCell);
                });
                modifiedCells.forEach(function (cell) {
                  var cellRowspan = parseInt(cell.formats().rowspan, 10);
                  cell.format("rowspan", cellRowspan + 1);
                  affectedCells.push(cell);
                });
                var refRow = this.rows().find(function (row) {
                  var rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), editorWrapper);

                  if (isDown) {
                    return Math.abs(rowRect.y - compareRect.y - compareRect.height) < ERROR_LIMIT;
                  } else {
                    return Math.abs(rowRect.y - compareRect.y) < ERROR_LIMIT;
                  }
                });
                body.insertBefore(newRow, refRow); // reordering affectedCells

                affectedCells.sort(sortFunc);
                return affectedCells;
              }
            }, {
              key: "mergeCells",
              value: function mergeCells(compareRect, mergingCells, rowspan, colspan, editorWrapper) {
                var mergedCell = mergingCells.reduce(function (result, tableCell, index) {
                  if (index !== 0) {
                    result && tableCell.moveChildren(result);
                    tableCell.remove();
                  } else {
                    tableCell.format('colspan', colspan);
                    tableCell.format('rowspan', rowspan);
                    result = tableCell;
                  }

                  return result;
                }, null);
                var rowId = mergedCell.domNode.getAttribute('data-row');
                var cellId = mergedCell.children.head.domNode.getAttribute('data-cell');
                mergedCell.children.forEach(function (cellLine) {
                  cellLine.format('cell', cellId);
                  cellLine.format('row', rowId);
                  cellLine.format('colspan', colspan);
                  cellLine.format('rowspan', rowspan);
                });
                return mergedCell;
              }
            }, {
              key: "unmergeCells",
              value: function unmergeCells(unmergingCells, editorWrapper) {
                var _this9 = this;

                var cellFormats = {};
                var cellRowspan = 1;
                var cellColspan = 1;
                unmergingCells.forEach(function (tableCell) {
                  cellFormats = tableCell.formats();
                  cellRowspan = cellFormats.rowspan;
                  cellColspan = cellFormats.colspan;

                  if (cellColspan > 1) {
                    var ref = tableCell.next;
                    var row = tableCell.row();
                    tableCell.format('colspan', 1);

                    for (var i = cellColspan; i > 1; i--) {
                      _this9.insertCell(row, ref);
                    }
                  }

                  if (cellRowspan > 1) {
                    var _i = cellRowspan;
                    var nextRow = tableCell.row().next;

                    while (_i > 1) {
                      var refInNextRow = nextRow.children.reduce(function (result, cell) {
                        var compareRect = getRelativeRect(tableCell.domNode.getBoundingClientRect(), editorWrapper);
                        var cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

                        if (Math.abs(compareRect.x1 - cellRect.x) < ERROR_LIMIT) {
                          result = cell;
                        }

                        return result;
                      }, null);

                      for (var _i2 = cellColspan; _i2 > 0; _i2--) {
                        _this9.insertCell(nextRow, refInNextRow);
                      }

                      _i -= 1;
                      nextRow = nextRow.next;
                    }

                    tableCell.format('rowspan', 1);
                  }
                });
              }
            }, {
              key: "rows",
              value: function rows() {
                var body = this.children.tail;
                if (body == null) return [];
                return body.children.map(function (row) {
                  return row;
                });
              }
            }], [{
              key: "create",
              value: function create() {
                var node = _get(_getPrototypeOf(table_TableContainer), "create", this).call(this);

                return node;
              }
            }]);

            return table_TableContainer;
          }(Container);

          table_TableContainer.blotName = "table-container";
          table_TableContainer.className = "quill-better-table";
          table_TableContainer.tagName = "TABLE";

          var table_TableViewWrapper = /*#__PURE__*/function (_Container6) {
            _inherits(table_TableViewWrapper, _Container6);

            var _super9 = _createSuper(table_TableViewWrapper);

            function table_TableViewWrapper(scroll, domNode) {
              var _this10;

              _classCallCheck(this, table_TableViewWrapper);

              _this10 = _super9.call(this, scroll, domNode);
              var quill = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(scroll.domNode.parentNode);
              domNode.addEventListener('scroll', function (e) {
                var tableModule = quill.getModule('better-table');

                if (tableModule.columnTool) {
                  tableModule.columnTool.domNode.scrollLeft = e.target.scrollLeft;
                }

                if (tableModule.tableSelection && tableModule.tableSelection.selectedTds.length > 0) {
                  tableModule.tableSelection.repositionHelpLines();
                }
              }, false);
              return _this10;
            }

            _createClass(table_TableViewWrapper, [{
              key: "table",
              value: function table() {
                return this.children.head;
              }
            }]);

            return table_TableViewWrapper;
          }(Container);

          table_TableViewWrapper.blotName = "table-view";
          table_TableViewWrapper.className = "quill-better-table-wrapper";
          table_TableViewWrapper.tagName = "DIV";
          table_TableViewWrapper.allowedChildren = [table_TableContainer];
          table_TableContainer.requiredContainer = table_TableViewWrapper;
          table_TableContainer.allowedChildren = [TableBody, TableColGroup];
          TableBody.requiredContainer = table_TableContainer;
          TableBody.allowedChildren = [TableRow];
          TableRow.requiredContainer = TableBody;
          TableRow.allowedChildren = [TableCell];
          TableCell.requiredContainer = TableRow;
          TableCell.allowedChildren = [TableCellLine, header];
          TableCellLine.requiredContainer = TableCell;
          TableColGroup.allowedChildren = [TableCol];
          TableColGroup.requiredContainer = table_TableContainer;
          TableCol.requiredContainer = TableColGroup;

          function table_rowId() {
            var id = Math.random().toString(36).slice(2, 6);
            return "row-".concat(id);
          }

          function table_cellId() {
            var id = Math.random().toString(36).slice(2, 6);
            return "cell-".concat(id);
          } // CONCATENATED MODULE: ./src/modules/table-selection.js


          var table_selection_PRIMARY_COLOR = '#0589f3';
          var LINE_POSITIONS = ['left', 'right', 'top', 'bottom'];
          var table_selection_ERROR_LIMIT = 2;

          var table_selection_TableSelection = /*#__PURE__*/function () {
            function table_selection_TableSelection(table, quill, options) {
              _classCallCheck(this, table_selection_TableSelection);

              if (!table) return null;
              this.table = table;
              this.quill = quill;
              this.options = options;
              this.boundary = {}; // params for selected square

              this.selectedTds = []; // array for selected table-cells

              this.dragging = false;
              this.selectingHandler = this.mouseDownHandler.bind(this);
              this.clearSelectionHandler = this.clearSelection.bind(this);
              this.helpLinesInitial();
              this.quill.root.addEventListener('mousedown', this.selectingHandler, false);
              this.quill.on('text-change', this.clearSelectionHandler);
            }

            _createClass(table_selection_TableSelection, [{
              key: "helpLinesInitial",
              value: function helpLinesInitial() {
                var _this11 = this;

                var parent = this.quill.root.parentNode;
                LINE_POSITIONS.forEach(function (direction) {
                  _this11[direction] = document.createElement('div');

                  _this11[direction].classList.add('qlbt-selection-line');

                  _this11[direction].classList.add('qlbt-selection-line-' + direction);

                  css(_this11[direction], {
                    position: 'absolute',
                    display: 'none',
                    'background-color': table_selection_PRIMARY_COLOR
                  });
                  parent.appendChild(_this11[direction]);
                });
              }
            }, {
              key: "mouseDownHandler",
              value: function mouseDownHandler(e) {
                if (e.button !== 0 || !e.target.closest(".quill-better-table")) return;
                this.quill.root.addEventListener('mousemove', mouseMoveHandler, false);
                this.quill.root.addEventListener('mouseup', mouseUpHandler, false);
                var self = this;
                var startTd = e.target.closest('td[data-row]');
                var startTdRect = getRelativeRect(startTd.getBoundingClientRect(), this.quill.root.parentNode);
                this.dragging = true;
                this.boundary = computeBoundaryFromRects(startTdRect, startTdRect);
                this.correctBoundary();
                this.selectedTds = this.computeSelectedTds();
                this.repositionHelpLines();

                function mouseMoveHandler(e) {
                  if (e.button !== 0 || !e.target.closest(".quill-better-table")) return;
                  var endTd = e.target.closest('td[data-row]');
                  var endTdRect = getRelativeRect(endTd.getBoundingClientRect(), self.quill.root.parentNode);
                  self.boundary = computeBoundaryFromRects(startTdRect, endTdRect);
                  self.correctBoundary();
                  self.selectedTds = self.computeSelectedTds();
                  self.repositionHelpLines(); // avoid select text in multiple table-cell

                  if (startTd !== endTd) {
                    self.quill.blur();
                  }
                }

                function mouseUpHandler(e) {
                  self.quill.root.removeEventListener('mousemove', mouseMoveHandler, false);
                  self.quill.root.removeEventListener('mouseup', mouseUpHandler, false);
                  self.dragging = false;
                }
              }
            }, {
              key: "correctBoundary",
              value: function correctBoundary() {
                var _this12 = this;

                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var tableCells = tableContainer.descendants(TableCell);
                tableCells.forEach(function (tableCell) {
                  var _getRelativeRect = getRelativeRect(tableCell.domNode.getBoundingClientRect(), _this12.quill.root.parentNode),
                      x = _getRelativeRect.x,
                      y = _getRelativeRect.y,
                      width = _getRelativeRect.width,
                      height = _getRelativeRect.height;

                  var isCellIntersected = (x + table_selection_ERROR_LIMIT >= _this12.boundary.x && x + table_selection_ERROR_LIMIT <= _this12.boundary.x1 || x - table_selection_ERROR_LIMIT + width >= _this12.boundary.x && x - table_selection_ERROR_LIMIT + width <= _this12.boundary.x1) && (y + table_selection_ERROR_LIMIT >= _this12.boundary.y && y + table_selection_ERROR_LIMIT <= _this12.boundary.y1 || y - table_selection_ERROR_LIMIT + height >= _this12.boundary.y && y - table_selection_ERROR_LIMIT + height <= _this12.boundary.y1);

                  if (isCellIntersected) {
                    _this12.boundary = computeBoundaryFromRects(_this12.boundary, {
                      x: x,
                      y: y,
                      width: width,
                      height: height
                    });
                  }
                });
              }
            }, {
              key: "computeSelectedTds",
              value: function computeSelectedTds() {
                var _this13 = this;

                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var tableCells = tableContainer.descendants(TableCell);
                return tableCells.reduce(function (selectedCells, tableCell) {
                  var _getRelativeRect2 = getRelativeRect(tableCell.domNode.getBoundingClientRect(), _this13.quill.root.parentNode),
                      x = _getRelativeRect2.x,
                      y = _getRelativeRect2.y,
                      width = _getRelativeRect2.width,
                      height = _getRelativeRect2.height;

                  var isCellIncluded = x + table_selection_ERROR_LIMIT >= _this13.boundary.x && x - table_selection_ERROR_LIMIT + width <= _this13.boundary.x1 && y + table_selection_ERROR_LIMIT >= _this13.boundary.y && y - table_selection_ERROR_LIMIT + height <= _this13.boundary.y1;

                  if (isCellIncluded) {
                    selectedCells.push(tableCell);
                  }

                  return selectedCells;
                }, []);
              }
            }, {
              key: "repositionHelpLines",
              value: function repositionHelpLines() {
                var tableViewScrollLeft = this.table.parentNode.scrollLeft;
                css(this.left, {
                  display: 'block',
                  left: "".concat(this.boundary.x - tableViewScrollLeft - 1, "px"),
                  top: "".concat(this.boundary.y, "px"),
                  height: "".concat(this.boundary.height + 1, "px"),
                  width: '1px'
                });
                css(this.right, {
                  display: 'block',
                  left: "".concat(this.boundary.x1 - tableViewScrollLeft, "px"),
                  top: "".concat(this.boundary.y, "px"),
                  height: "".concat(this.boundary.height + 1, "px"),
                  width: '1px'
                });
                css(this.top, {
                  display: 'block',
                  left: "".concat(this.boundary.x - 1 - tableViewScrollLeft, "px"),
                  top: "".concat(this.boundary.y, "px"),
                  width: "".concat(this.boundary.width + 1, "px"),
                  height: '1px'
                });
                css(this.bottom, {
                  display: 'block',
                  left: "".concat(this.boundary.x - 1 - tableViewScrollLeft, "px"),
                  top: "".concat(this.boundary.y1 + 1, "px"),
                  width: "".concat(this.boundary.width + 1, "px"),
                  height: '1px'
                });
              } // based on selectedTds compute positions of help lines
              // It is useful when selectedTds are not changed

            }, {
              key: "refreshHelpLinesPosition",
              value: function refreshHelpLinesPosition() {
                var startRect = getRelativeRect(this.selectedTds[0].domNode.getBoundingClientRect(), this.quill.root.parentNode);
                var endRect = getRelativeRect(this.selectedTds[this.selectedTds.length - 1].domNode.getBoundingClientRect(), this.quill.root.parentNode);
                this.boundary = computeBoundaryFromRects(startRect, endRect);
                this.repositionHelpLines();
              }
            }, {
              key: "destroy",
              value: function destroy() {
                var _this14 = this;

                LINE_POSITIONS.forEach(function (direction) {
                  _this14[direction].remove();

                  _this14[direction] = null;
                });
                this.quill.root.removeEventListener('mousedown', this.selectingHandler, false);
                this.quill.off('text-change', this.clearSelectionHandler);
                return null;
              }
            }, {
              key: "setSelection",
              value: function setSelection(startRect, endRect) {
                this.boundary = computeBoundaryFromRects(getRelativeRect(startRect, this.quill.root.parentNode), getRelativeRect(endRect, this.quill.root.parentNode));
                this.correctBoundary();
                this.selectedTds = this.computeSelectedTds();
                this.repositionHelpLines();
              }
            }, {
              key: "clearSelection",
              value: function clearSelection() {
                var _this15 = this;

                this.boundary = {};
                this.selectedTds = [];
                LINE_POSITIONS.forEach(function (direction) {
                  _this15[direction] && css(_this15[direction], {
                    display: 'none'
                  });
                });
              }
            }]);

            return table_selection_TableSelection;
          }();

          function computeBoundaryFromRects(startRect, endRect) {
            var x = Math.min(startRect.x, endRect.x, startRect.x + startRect.width - 1, endRect.x + endRect.width - 1);
            var x1 = Math.max(startRect.x, endRect.x, startRect.x + startRect.width - 1, endRect.x + endRect.width - 1);
            var y = Math.min(startRect.y, endRect.y, startRect.y + startRect.height - 1, endRect.y + endRect.height - 1);
            var y1 = Math.max(startRect.y, endRect.y, startRect.y + startRect.height - 1, endRect.y + endRect.height - 1);
            var width = x1 - x;
            var height = y1 - y;
            return {
              x: x,
              x1: x1,
              y: y,
              y1: y1,
              width: width,
              height: height
            };
          } // EXTERNAL MODULE: ./src/assets/icons/icon_operation_1.svg


          var icon_operation_1 = __webpack_require__(1);

          var icon_operation_1_default = /*#__PURE__*/__webpack_require__.n(icon_operation_1); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_2.svg


          var icon_operation_2 = __webpack_require__(2);

          var icon_operation_2_default = /*#__PURE__*/__webpack_require__.n(icon_operation_2); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_3.svg


          var icon_operation_3 = __webpack_require__(3);

          var icon_operation_3_default = /*#__PURE__*/__webpack_require__.n(icon_operation_3); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_4.svg


          var icon_operation_4 = __webpack_require__(4);

          var icon_operation_4_default = /*#__PURE__*/__webpack_require__.n(icon_operation_4); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_5.svg


          var icon_operation_5 = __webpack_require__(5);

          var icon_operation_5_default = /*#__PURE__*/__webpack_require__.n(icon_operation_5); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_6.svg


          var icon_operation_6 = __webpack_require__(6);

          var icon_operation_6_default = /*#__PURE__*/__webpack_require__.n(icon_operation_6); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_7.svg


          var icon_operation_7 = __webpack_require__(7);

          var icon_operation_7_default = /*#__PURE__*/__webpack_require__.n(icon_operation_7); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_8.svg


          var icon_operation_8 = __webpack_require__(8);

          var icon_operation_8_default = /*#__PURE__*/__webpack_require__.n(icon_operation_8); // EXTERNAL MODULE: ./src/assets/icons/icon_operation_9.svg


          var icon_operation_9 = __webpack_require__(9);

          var icon_operation_9_default = /*#__PURE__*/__webpack_require__.n(icon_operation_9); // CONCATENATED MODULE: ./src/modules/table-operation-menu.js
          // svg icons


          var MENU_MIN_HEIHGT = 150;
          var MENU_WIDTH = 200;
          var table_operation_menu_ERROR_LIMIT = 5;
          var DEFAULT_CELL_COLORS = ['white', 'red', 'yellow', 'blue'];
          var DEFAULT_COLOR_SUBTITLE = 'Background Colors';
          var MENU_ITEMS_DEFAULT = {
            insertColumnRight: {
              text: 'Insert column right',
              iconSrc: icon_operation_1_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var colIndex = getColToolCellIndexByBoundary(this.columnToolCells, this.boundary, function (cellRect, boundary) {
                  return Math.abs(cellRect.x + cellRect.width - boundary.x1) <= table_operation_menu_ERROR_LIMIT;
                }, this.quill.root.parentNode);
                var newColumn = tableContainer.insertColumn(this.boundary, colIndex, true, this.quill.root.parentNode);
                this.tableColumnTool.updateToolCells();
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.quill.setSelection(this.quill.getIndex(newColumn[0]), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.SILENT);
                this.tableSelection.setSelection(newColumn[0].domNode.getBoundingClientRect(), newColumn[0].domNode.getBoundingClientRect());
              }
            },
            insertColumnLeft: {
              text: 'Insert column left',
              iconSrc: icon_operation_2_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var colIndex = getColToolCellIndexByBoundary(this.columnToolCells, this.boundary, function (cellRect, boundary) {
                  return Math.abs(cellRect.x - boundary.x) <= table_operation_menu_ERROR_LIMIT;
                }, this.quill.root.parentNode);
                var newColumn = tableContainer.insertColumn(this.boundary, colIndex, false, this.quill.root.parentNode);
                this.tableColumnTool.updateToolCells();
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.quill.setSelection(this.quill.getIndex(newColumn[0]), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.SILENT);
                this.tableSelection.setSelection(newColumn[0].domNode.getBoundingClientRect(), newColumn[0].domNode.getBoundingClientRect());
              }
            },
            insertRowUp: {
              text: 'Insert row up',
              iconSrc: icon_operation_3_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var affectedCells = tableContainer.insertRow(this.boundary, false, this.quill.root.parentNode);
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.quill.setSelection(this.quill.getIndex(affectedCells[0]), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.SILENT);
                this.tableSelection.setSelection(affectedCells[0].domNode.getBoundingClientRect(), affectedCells[0].domNode.getBoundingClientRect());
              }
            },
            insertRowDown: {
              text: 'Insert row down',
              iconSrc: icon_operation_4_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var affectedCells = tableContainer.insertRow(this.boundary, true, this.quill.root.parentNode);
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.quill.setSelection(this.quill.getIndex(affectedCells[0]), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.SILENT);
                this.tableSelection.setSelection(affectedCells[0].domNode.getBoundingClientRect(), affectedCells[0].domNode.getBoundingClientRect());
              }
            },
            mergeCells: {
              text: 'Merge selected cells',
              iconSrc: icon_operation_5_default.a,
              handler: function handler() {
                var _this16 = this;

                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table); // compute merged Cell rowspan, equal to length of selected rows

                var rowspan = tableContainer.rows().reduce(function (sum, row) {
                  var rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), _this16.quill.root.parentNode);

                  if (rowRect.y > _this16.boundary.y - table_operation_menu_ERROR_LIMIT && rowRect.y + rowRect.height < _this16.boundary.y + _this16.boundary.height + table_operation_menu_ERROR_LIMIT) {
                    sum += 1;
                  }

                  return sum;
                }, 0); // compute merged cell colspan, equal to length of selected cols

                var colspan = this.columnToolCells.reduce(function (sum, cell) {
                  var cellRect = getRelativeRect(cell.getBoundingClientRect(), _this16.quill.root.parentNode);

                  if (cellRect.x > _this16.boundary.x - table_operation_menu_ERROR_LIMIT && cellRect.x + cellRect.width < _this16.boundary.x + _this16.boundary.width + table_operation_menu_ERROR_LIMIT) {
                    sum += 1;
                  }

                  return sum;
                }, 0);
                var mergedCell = tableContainer.mergeCells(this.boundary, this.selectedTds, rowspan, colspan, this.quill.root.parentNode);
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.tableSelection.setSelection(mergedCell.domNode.getBoundingClientRect(), mergedCell.domNode.getBoundingClientRect());
              }
            },
            unmergeCells: {
              text: 'Unmerge cells',
              iconSrc: icon_operation_6_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                tableContainer.unmergeCells(this.selectedTds, this.quill.root.parentNode);
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.tableSelection.clearSelection();
              }
            },
            deleteColumn: {
              text: 'Delete selected columns',
              iconSrc: icon_operation_7_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                var colIndexes = getColToolCellIndexesByBoundary(this.columnToolCells, this.boundary, function (cellRect, boundary) {
                  return cellRect.x + table_operation_menu_ERROR_LIMIT > boundary.x && cellRect.x + cellRect.width - table_operation_menu_ERROR_LIMIT < boundary.x1;
                }, this.quill.root.parentNode);
                var isDeleteTable = tableContainer.deleteColumns(this.boundary, colIndexes, this.quill.root.parentNode);

                if (!isDeleteTable) {
                  this.tableColumnTool.updateToolCells();
                  this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                  this.tableSelection.clearSelection();
                }
              }
            },
            deleteRow: {
              text: 'Delete selected rows',
              iconSrc: icon_operation_8_default.a,
              handler: function handler() {
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                tableContainer.deleteRow(this.boundary, this.quill.root.parentNode);
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.tableSelection.clearSelection();
              }
            },
            deleteTable: {
              text: 'Delete table',
              iconSrc: icon_operation_9_default.a,
              handler: function handler() {
                var betterTableModule = this.quill.getModule('better-table');
                var tableContainer = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.find(this.table);
                betterTableModule.hideTableTools();
                tableContainer.remove();
                this.quill.update(external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
              }
            }
          };

          var table_operation_menu_TableOperationMenu = /*#__PURE__*/function () {
            function table_operation_menu_TableOperationMenu(params, quill, options) {
              _classCallCheck(this, table_operation_menu_TableOperationMenu);

              var betterTableModule = quill.getModule('better-table');
              this.tableSelection = betterTableModule.tableSelection;
              this.table = params.table;
              this.quill = quill;
              this.options = options;
              this.menuItems = Object.assign({}, MENU_ITEMS_DEFAULT, options.items);
              this.tableColumnTool = betterTableModule.columnTool;
              this.boundary = this.tableSelection.boundary;
              this.selectedTds = this.tableSelection.selectedTds;
              this.destroyHandler = this.destroy.bind(this);
              this.columnToolCells = this.tableColumnTool.colToolCells();
              this.colorSubTitle = options.color && options.color.text ? options.color.text : DEFAULT_COLOR_SUBTITLE;
              this.cellColors = options.color && options.color.colors ? options.color.colors : DEFAULT_CELL_COLORS;
              this.menuInitial(params);
              this.mount();
              document.addEventListener("click", this.destroyHandler, false);
            }

            _createClass(table_operation_menu_TableOperationMenu, [{
              key: "mount",
              value: function mount() {
                document.body.appendChild(this.domNode);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.domNode.remove();
                document.removeEventListener("click", this.destroyHandler, false);
                return null;
              }
            }, {
              key: "menuInitial",
              value: function menuInitial(_ref) {
                var table = _ref.table,
                    left = _ref.left,
                    top = _ref.top;
                this.domNode = document.createElement('div');
                this.domNode.classList.add('qlbt-operation-menu');
                css(this.domNode, {
                  position: 'absolute',
                  left: "".concat(left, "px"),
                  top: "".concat(top, "px"),
                  'min-height': "".concat(MENU_MIN_HEIHGT, "px"),
                  width: "".concat(MENU_WIDTH, "px")
                });

                for (var name in this.menuItems) {
                  if (this.menuItems[name]) {
                    this.domNode.appendChild(this.menuItemCreator(Object.assign({}, MENU_ITEMS_DEFAULT[name], this.menuItems[name])));

                    if (['insertRowDown', 'unmergeCells'].indexOf(name) > -1) {
                      this.domNode.appendChild(dividingCreator());
                    }
                  }
                } // if colors option is false, disabled bg color


                if (this.options.color && this.options.color !== false) {
                  this.domNode.appendChild(dividingCreator());
                  this.domNode.appendChild(subTitleCreator(this.colorSubTitle));
                  this.domNode.appendChild(this.colorsItemCreator(this.cellColors));
                } // create dividing line


                function dividingCreator() {
                  var dividing = document.createElement('div');
                  dividing.classList.add('qlbt-operation-menu-dividing');
                  return dividing;
                } // create subtitle for menu


                function subTitleCreator(title) {
                  var subTitle = document.createElement('div');
                  subTitle.classList.add('qlbt-operation-menu-subtitle');
                  subTitle.innerText = title;
                  return subTitle;
                }
              }
            }, {
              key: "colorsItemCreator",
              value: function colorsItemCreator(colors) {
                var self = this;
                var node = document.createElement('div');
                node.classList.add('qlbt-operation-color-picker');
                colors.forEach(function (color) {
                  var colorBox = colorBoxCreator(color);
                  node.appendChild(colorBox);
                });

                function colorBoxCreator(color) {
                  var box = document.createElement('div');
                  box.classList.add('qlbt-operation-color-picker-item');
                  box.setAttribute('data-color', color);
                  box.style.backgroundColor = color;
                  box.addEventListener('click', function () {
                    var selectedTds = self.tableSelection.selectedTds;

                    if (selectedTds && selectedTds.length > 0) {
                      selectedTds.forEach(function (tableCell) {
                        tableCell.format('cell-bg', color);
                      });
                    }
                  }, false);
                  return box;
                }

                return node;
              }
            }, {
              key: "menuItemCreator",
              value: function menuItemCreator(_ref2) {
                var text = _ref2.text,
                    iconSrc = _ref2.iconSrc,
                    handler = _ref2.handler;
                var node = document.createElement('div');
                node.classList.add('qlbt-operation-menu-item');
                var iconSpan = document.createElement('span');
                iconSpan.classList.add('qlbt-operation-menu-icon');
                iconSpan.innerHTML = iconSrc;
                var textSpan = document.createElement('span');
                textSpan.classList.add('qlbt-operation-menu-text');
                textSpan.innerText = text;
                node.appendChild(iconSpan);
                node.appendChild(textSpan);
                node.addEventListener('click', handler.bind(this), false);
                return node;
              }
            }]);

            return table_operation_menu_TableOperationMenu;
          }();

          function getColToolCellIndexByBoundary(cells, boundary, conditionFn, container) {
            return cells.reduce(function (findIndex, cell) {
              var cellRect = getRelativeRect(cell.getBoundingClientRect(), container);

              if (conditionFn(cellRect, boundary)) {
                findIndex = cells.indexOf(cell);
              }

              return findIndex;
            }, false);
          }

          function getColToolCellIndexesByBoundary(cells, boundary, conditionFn, container) {
            return cells.reduce(function (findIndexes, cell) {
              var cellRect = getRelativeRect(cell.getBoundingClientRect(), container);

              if (conditionFn(cellRect, boundary)) {
                findIndexes.push(cells.indexOf(cell));
              }

              return findIndexes;
            }, []);
          } // CONCATENATED MODULE: ./src/utils/node-matchers.js


          var Delta = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import('delta'); // rebuild delta

          function matchTableCell(node, delta, scroll) {
            var row = node.parentNode;
            var table = row.parentNode.tagName === 'TABLE' ? row.parentNode : row.parentNode.parentNode;
            var rows = Array.from(table.querySelectorAll('tr'));
            var cells = Array.from(row.querySelectorAll('td'));
            var rowId = rows.indexOf(row) + 1;
            var cellId = cells.indexOf(node) + 1;
            var colspan = node.getAttribute('colspan') || false;
            var rowspan = node.getAttribute('rowspan') || false;
            var cellBg = node.getAttribute('data-cell-bg') || node.style.backgroundColor; // The td from external table has no 'data-cell-bg' 
            // bugfix: empty table cells copied from other place will be removed unexpectedly

            if (delta.length() === 0) {
              delta = new Delta().insert('\n', {
                'table-cell-line': {
                  row: rowId,
                  cell: cellId,
                  rowspan: rowspan,
                  colspan: colspan
                }
              });
              return delta;
            }

            delta = delta.reduce(function (newDelta, op) {
              if (op.insert && typeof op.insert === 'string') {
                var lines = [];
                var insertStr = op.insert;
                var start = 0;

                for (var i = 0; i < op.insert.length; i++) {
                  if (insertStr.charAt(i) === '\n') {
                    if (i === 0) {
                      lines.push('\n');
                    } else {
                      lines.push(insertStr.substring(start, i));
                      lines.push('\n');
                    }

                    start = i + 1;
                  }
                }

                var tailStr = insertStr.substring(start);
                if (tailStr) lines.push(tailStr);
                lines.forEach(function (text) {
                  text === '\n' ? newDelta.insert('\n', op.attributes) : newDelta.insert(text, _omit(op.attributes, ['table', 'table-cell-line']));
                });
              } else {
                newDelta.insert(op.insert, op.attributes);
              }

              return newDelta;
            }, new Delta());
            return delta.reduce(function (newDelta, op) {
              if (op.insert && typeof op.insert === 'string' && op.insert.startsWith('\n')) {
                newDelta.insert(op.insert, Object.assign({}, Object.assign({}, {
                  row: rowId
                }, op.attributes.table), {
                  'table-cell-line': {
                    row: rowId,
                    cell: cellId,
                    rowspan: rowspan,
                    colspan: colspan,
                    'cell-bg': cellBg
                  }
                }, _omit(op.attributes, ['table'])));
              } else {
                // bugfix: remove background attr from the delta of table cell
                //         to prevent unexcepted background attr append.
                if (op.attributes && op.attributes.background && op.attributes.background === convertToHex(cellBg)) {
                  newDelta.insert(op.insert, Object.assign({}, _omit(op.attributes, ['table', 'table-cell-line', 'background'])));
                } else {
                  newDelta.insert(op.insert, Object.assign({}, _omit(op.attributes, ['table', 'table-cell-line'])));
                }
              }

              return newDelta;
            }, new Delta());
          } // replace th tag with td tag


          function matchTableHeader(node, delta, scroll) {
            var row = node.parentNode;
            var table = row.parentNode.tagName === 'TABLE' ? row.parentNode : row.parentNode.parentNode;
            var rows = Array.from(table.querySelectorAll('tr'));
            var cells = Array.from(row.querySelectorAll('th'));
            var rowId = rows.indexOf(row) + 1;
            var cellId = cells.indexOf(node) + 1;
            var colspan = node.getAttribute('colspan') || false;
            var rowspan = node.getAttribute('rowspan') || false; // bugfix: empty table cells copied from other place will be removed unexpectedly

            if (delta.length() === 0) {
              delta = new Delta().insert('\n', {
                'table-cell-line': {
                  row: rowId,
                  cell: cellId,
                  rowspan: rowspan,
                  colspan: colspan
                }
              });
              return delta;
            }

            delta = delta.reduce(function (newDelta, op) {
              if (op.insert && typeof op.insert === 'string') {
                var lines = [];
                var insertStr = op.insert;
                var start = 0;

                for (var i = 0; i < op.insert.length; i++) {
                  if (insertStr.charAt(i) === '\n') {
                    if (i === 0) {
                      lines.push('\n');
                    } else {
                      lines.push(insertStr.substring(start, i));
                      lines.push('\n');
                    }

                    start = i + 1;
                  }
                }

                var tailStr = insertStr.substring(start);
                if (tailStr) lines.push(tailStr); // bugfix: no '\n' in op.insert, push a '\n' to lines

                if (lines.indexOf('\n') < 0) {
                  lines.push('\n');
                }

                lines.forEach(function (text) {
                  text === '\n' ? newDelta.insert('\n', {
                    'table-cell-line': {
                      row: rowId,
                      cell: cellId,
                      rowspan: rowspan,
                      colspan: colspan
                    }
                  }) : newDelta.insert(text, op.attributes);
                });
              } else {
                newDelta.insert(op.insert, op.attributes);
              }

              return newDelta;
            }, new Delta());
            return delta.reduce(function (newDelta, op) {
              if (op.insert && typeof op.insert === 'string' && op.insert.startsWith('\n')) {
                newDelta.insert(op.insert, Object.assign({}, {
                  'table-cell-line': {
                    row: rowId,
                    cell: cellId,
                    rowspan: rowspan,
                    colspan: colspan
                  }
                }));
              } else {
                newDelta.insert(op.insert, Object.assign({}, _omit(op.attributes, ['table', 'table-cell-line'])));
              }

              return newDelta;
            }, new Delta());
          } // supplement colgroup and col


          function matchTable(node, delta, scroll) {
            var newColDelta = new Delta();
            var topRow = node.querySelector('tr'); // bugfix: empty table will return empty delta

            if (topRow === null) return newColDelta;
            var cellsInTopRow = Array.from(topRow.querySelectorAll('td')).concat(Array.from(topRow.querySelectorAll('th')));
            var maxCellsNumber = cellsInTopRow.reduce(function (sum, cell) {
              var cellColspan = cell.getAttribute('colspan') || 1;
              sum = sum + parseInt(cellColspan, 10);
              return sum;
            }, 0);
            var colsNumber = node.querySelectorAll('col').length; // issue #2
            // bugfix: the table copied from Excel had some default col tags missing
            //         add missing col tags

            if (colsNumber === maxCellsNumber) {
              return delta;
            } else {
              for (var i = 0; i < maxCellsNumber - colsNumber; i++) {
                newColDelta.insert('\n', {
                  'table-col': true
                });
              }

              if (colsNumber === 0) return newColDelta.concat(delta);
              var lastNumber = 0;
              return delta.reduce(function (finalDelta, op) {
                finalDelta.insert(op.insert, op.attributes);

                if (op.attributes && op.attributes['table-col']) {
                  lastNumber += op.insert.length;

                  if (lastNumber === colsNumber) {
                    finalDelta = finalDelta.concat(newColDelta);
                  }
                }

                return finalDelta;
              }, new Delta());
            }
          } // CONCATENATED MODULE: ./src/quill-better-table.js
          // import table node matchers


          var Module = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import('core/module');
          var quill_better_table_Delta = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.import('delta');

          var quill_better_table_BetterTable = /*#__PURE__*/function (_Module) {
            _inherits(quill_better_table_BetterTable, _Module);

            var _super10 = _createSuper(quill_better_table_BetterTable);

            function quill_better_table_BetterTable(quill, options) {
              var _this17;

              _classCallCheck(this, quill_better_table_BetterTable);

              _this17 = _super10.call(this, quill, options); // handle click on quill-better-table

              _this17.quill.root.addEventListener('click', function (evt) {
                // bugfix: evt.path is undefined in Safari, FF, Micro Edge
                var path = getEventComposedPath(evt);
                if (!path || path.length <= 0) return;
                var tableNode = path.filter(function (node) {
                  return node.tagName && node.tagName.toUpperCase() === 'TABLE' && node.classList.contains('quill-better-table');
                })[0];

                if (tableNode) {
                  // current table clicked
                  if (_this17.table === tableNode) return; // other table clicked

                  if (_this17.table) _this17.hideTableTools();

                  _this17.showTableTools(tableNode, quill, options);
                } else if (_this17.table) {
                  // other clicked
                  _this17.hideTableTools();
                }
              }, false); // handle right click on quill-better-table


              _this17.quill.root.addEventListener('contextmenu', function (evt) {
                if (!_this17.table) return true;
                evt.preventDefault(); // bugfix: evt.path is undefined in Safari, FF, Micro Edge

                var path = getEventComposedPath(evt);
                if (!path || path.length <= 0) return;
                var tableNode = path.filter(function (node) {
                  return node.tagName && node.tagName.toUpperCase() === 'TABLE' && node.classList.contains('quill-better-table');
                })[0];
                var rowNode = path.filter(function (node) {
                  return node.tagName && node.tagName.toUpperCase() === 'TR' && node.getAttribute('data-row');
                })[0];
                var cellNode = path.filter(function (node) {
                  return node.tagName && node.tagName.toUpperCase() === 'TD' && node.getAttribute('data-row');
                })[0];

                var isTargetCellSelected = _this17.tableSelection.selectedTds.map(function (tableCell) {
                  return tableCell.domNode;
                }).includes(cellNode);

                if (_this17.tableSelection.selectedTds.length <= 0 || !isTargetCellSelected) {
                  _this17.tableSelection.setSelection(cellNode.getBoundingClientRect(), cellNode.getBoundingClientRect());
                }

                if (_this17.tableOperationMenu) _this17.tableOperationMenu = _this17.tableOperationMenu.destroy();

                if (tableNode) {
                  _this17.tableOperationMenu = new table_operation_menu_TableOperationMenu({
                    table: tableNode,
                    row: rowNode,
                    cell: cellNode,
                    left: evt.pageX,
                    top: evt.pageY
                  }, quill, options.operationMenu);
                }
              }, false); // add keyboard binding：Backspace
              // prevent user hits backspace to delete table cell


              var KeyBoard = quill.getModule('keyboard');
              quill.keyboard.addBinding({
                key: 'Backspace'
              }, {}, function (range, context) {
                if (range.index === 0 || this.quill.getLength() <= 1) return true;

                var _this$quill$getLine = this.quill.getLine(range.index),
                    _this$quill$getLine2 = _slicedToArray(_this$quill$getLine, 1),
                    line = _this$quill$getLine2[0];

                if (context.offset === 0) {
                  var _this$quill$getLine3 = this.quill.getLine(range.index - 1),
                      _this$quill$getLine4 = _slicedToArray(_this$quill$getLine3, 1),
                      prev = _this$quill$getLine4[0];

                  if (prev != null) {
                    if (prev.statics.blotName === 'table-cell-line' && line.statics.blotName !== 'table-cell-line') return false;
                  }
                }

                return true;
              }); // since only one matched bindings callback will excute.
              // expected my binding callback excute first
              // I changed the order of binding callbacks

              var thisBinding = quill.keyboard.bindings['Backspace'].pop();
              quill.keyboard.bindings['Backspace'].splice(0, 1, thisBinding); // add Matchers to match and render quill-better-table for initialization
              // or pasting

              quill.clipboard.addMatcher('td', matchTableCell);
              quill.clipboard.addMatcher('th', matchTableHeader);
              quill.clipboard.addMatcher('table', matchTable); // quill.clipboard.addMatcher('h1, h2, h3, h4, h5, h6', matchHeader)
              // remove matcher for tr tag

              quill.clipboard.matchers = quill.clipboard.matchers.filter(function (matcher) {
                return matcher[0] !== 'tr';
              });
              return _this17;
            }

            _createClass(quill_better_table_BetterTable, [{
              key: "getTable",
              value: function getTable() {
                var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.quill.getSelection();
                if (range == null) return [null, null, null, -1];

                var _this$quill$getLine5 = this.quill.getLine(range.index),
                    _this$quill$getLine6 = _slicedToArray(_this$quill$getLine5, 2),
                    cellLine = _this$quill$getLine6[0],
                    offset = _this$quill$getLine6[1];

                if (cellLine == null || cellLine.statics.blotName !== TableCellLine.blotName) {
                  return [null, null, null, -1];
                }

                var cell = cellLine.tableCell();
                var row = cell.row();
                var table = row.table();
                return [table, row, cell, offset];
              }
            }, {
              key: "insertTable",
              value: function insertTable(rows, columns) {
                var range = this.quill.getSelection(true);
                if (range == null) return;
                var currentBlot = this.quill.getLeaf(range.index)[0];
                var delta = new quill_better_table_Delta().retain(range.index);

                if (isInTableCell(currentBlot)) {
                  console.warn("Can not insert table into a table cell.");
                  return;
                }

                delta.insert('\n'); // insert table column

                delta = new Array(columns).fill('\n').reduce(function (memo, text) {
                  memo.insert(text, {
                    'table-col': true
                  });
                  return memo;
                }, delta); // insert table cell line with empty line

                delta = new Array(rows).fill(0).reduce(function (memo) {
                  var tableRowId = table_rowId();
                  return new Array(columns).fill('\n').reduce(function (memo, text) {
                    memo.insert(text, {
                      'table-cell-line': {
                        row: tableRowId,
                        cell: table_cellId()
                      }
                    });
                    return memo;
                  }, memo);
                }, delta);
                this.quill.updateContents(delta, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                this.quill.setSelection(range.index + columns + 1, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.API);
              }
            }, {
              key: "showTableTools",
              value: function showTableTools(table, quill, options) {
                this.table = table;
                this.columnTool = new table_column_tool_TableColumnTool(table, quill, options);
                this.tableSelection = new table_selection_TableSelection(table, quill, options);
              }
            }, {
              key: "hideTableTools",
              value: function hideTableTools() {
                this.columnTool && this.columnTool.destroy();
                this.tableSelection && this.tableSelection.destroy();
                this.tableOperationMenu && this.tableOperationMenu.destroy();
                this.columnTool = null;
                this.tableSelection = null;
                this.tableOperationMenu = null;
                this.table = null;
              }
            }], [{
              key: "register",
              value: function register() {
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(TableCol, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(TableColGroup, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(TableCellLine, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(TableCell, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(TableRow, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(TableBody, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(table_TableContainer, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(table_TableViewWrapper, true);
                external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.register(table_TableViewWrapper, true); // register customized Header，overwriting quill built-in Header
                // Quill.register('formats/header', Header, true);
              }
            }]);

            return quill_better_table_BetterTable;
          }(Module);

          quill_better_table_BetterTable.keyboardBindings = {
            'table-cell-line backspace': {
              key: 'Backspace',
              format: ['table-cell-line'],
              collapsed: true,
              offset: 0,
              handler: function handler(range, context) {
                var _this$quill$getLine7 = this.quill.getLine(range.index),
                    _this$quill$getLine8 = _slicedToArray(_this$quill$getLine7, 2),
                    line = _this$quill$getLine8[0],
                    offset = _this$quill$getLine8[1];

                if (!line.prev || line.prev.statics.blotName !== 'table-cell-line') {
                  return false;
                }

                return true;
              }
            },
            'table-cell-line delete': {
              key: 'Delete',
              format: ['table-cell-line'],
              collapsed: true,
              suffix: /^$/,
              handler: function handler() {}
            },
            'table-cell-line enter': {
              key: 'Enter',
              shiftKey: null,
              format: ['table-cell-line'],
              handler: function handler(range, context) {
                var _this18 = this;

                // bugfix: a unexpected new line inserted when user compositionend with hitting Enter
                if (this.quill.selection && this.quill.selection.composing) return;
                var Scope = external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.imports.parchment.Scope;

                if (range.length > 0) {
                  this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
                }

                var lineFormats = Object.keys(context.format).reduce(function (formats, format) {
                  if (_this18.quill.scroll.query(format, Scope.BLOCK) && !Array.isArray(context.format[format])) {
                    formats[format] = context.format[format];
                  }

                  return formats;
                }, {}); // insert new cellLine with lineFormats

                this.quill.insertText(range.index, '\n', lineFormats['table-cell-line'], external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER); // Earlier scroll.deleteAt might have messed up our selection,
                // so insertText's built in selection preservation is not reliable

                this.quill.setSelection(range.index + 1, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.SILENT);
                this.quill.focus();
                Object.keys(context.format).forEach(function (name) {
                  if (lineFormats[name] != null) return;
                  if (Array.isArray(context.format[name])) return;
                  if (name === 'link') return;

                  _this18.quill.format(name, context.format[name], external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                });
              }
            },
            'table-cell-line up': makeTableArrowHandler(true),
            'table-cell-line down': makeTableArrowHandler(false),
            'down-to-table': {
              key: 'ArrowDown',
              collapsed: true,
              handler: function handler(range, context) {
                var target = context.line.next;

                if (target && target.statics.blotName === 'table-view') {
                  var targetCell = target.table().rows()[0].children.head;
                  var targetLine = targetCell.children.head;
                  this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                  return false;
                }

                return true;
              }
            },
            'up-to-table': {
              key: 'ArrowUp',
              collapsed: true,
              handler: function handler(range, context) {
                var target = context.line.prev;

                if (target && target.statics.blotName === 'table-view') {
                  var rows = target.table().rows();
                  var targetCell = rows[rows.length - 1].children.head;
                  var targetLine = targetCell.children.head;
                  this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                  return false;
                }

                return true;
              }
            }
          };

          function makeTableArrowHandler(up) {
            return {
              key: up ? 'ArrowUp' : 'ArrowDown',
              collapsed: true,
              format: ['table-cell-line'],
              handler: function handler(range, context) {
                // TODO move to table module
                var key = up ? 'prev' : 'next';
                var targetLine = context.line[key];
                if (targetLine != null) return true;
                var cell = context.line.parent;
                var targetRow = cell.parent[key];

                if (targetRow != null && targetRow.statics.blotName === 'table-row') {
                  var targetCell = targetRow.children.head;
                  var totalColspanOfTargetCell = parseInt(targetCell.formats()['colspan'], 10);
                  var cur = cell;
                  var totalColspanOfCur = parseInt(cur.formats()['colspan'], 10); // get targetCell above current cell depends on colspan

                  while (cur.prev != null) {
                    cur = cur.prev;
                    totalColspanOfCur += parseInt(cur.formats()['colspan'], 10);
                  }

                  while (targetCell.next != null && totalColspanOfTargetCell < totalColspanOfCur) {
                    targetCell = targetCell.next;
                    totalColspanOfTargetCell += parseInt(targetCell.formats()['colspan'], 10);
                  }

                  var index = targetCell.offset(this.quill.scroll);
                  this.quill.setSelection(index, 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                } else {
                  var _targetLine = cell.table().parent[key];

                  if (_targetLine != null) {
                    if (up) {
                      this.quill.setSelection(_targetLine.offset(this.quill.scroll) + _targetLine.length() - 1, 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                    } else {
                      this.quill.setSelection(_targetLine.offset(this.quill.scroll), 0, external_commonjs_quill_commonjs2_quill_amd_quill_root_Quill_default.a.sources.USER);
                    }
                  }
                }

                return false;
              }
            };
          }

          function isTableCell(blot) {
            return blot.statics.blotName === TableCell.blotName;
          }

          function isInTableCell(current) {
            return current && current.parent ? isTableCell(current.parent) ? true : isInTableCell(current.parent) : false;
          }
          /* harmony default export */


          var quill_better_table = __webpack_exports__["default"] = quill_better_table_BetterTable;
          /***/
        },,
        /* 12 */

        /***/
        function (module, exports, __webpack_require__) {
          module.exports = __webpack_require__(10);
          /***/
        }
        /******/
        ])["default"]
      );
    });
  });
  var QuillBetterTable = unwrapExports(quillBetterTable);

  /* eslint-disable no-unused-vars */

  /** @class Abstract class representing a tool for a Quill Editor toolbar. */
  var QuillToolbarItem = /*#__PURE__*/function () {
    function QuillToolbarItem(options) {
      _classCallCheck(this, QuillToolbarItem);

      var me = this;
      me.options = options;
      me.qlFormatsEl = document.createElement("span");
      me.qlFormatsEl.className = "ql-formats";
    }
    /**
     * Attaches this tool to the given Quill Editor instance.
     *
     * @param {Quill} quill - The Quill Editor instance that this tool should get added to.
     */


    _createClass(QuillToolbarItem, [{
      key: "attach",
      value: function attach(quill) {
        var me = this;
        me.quill = quill;
        me.toolbar = quill.getModule("toolbar");
        me.toolbarEl = me.toolbar.container;
        me.toolbarEl.appendChild(me.qlFormatsEl);
      }
      /**
       * Detaches this tool from the given Quill Editor instance.
       *
       * @param {Quill} quill - The Quill Editor instance that this tool should get added to.
       */

    }, {
      key: "detach",
      value: function detach(quill) {
        var me = this;
        me.toolbarEl.removeChild(me.qlFormatsEl);
      }
      /**
       * Calculate the width of text.
       *
       * @param {string} text - The text of which the length should be calculated.
       * @param {string} [font="500 14px 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"] - The font css that shuold be applied to the text before calculating the width.
       */

    }, {
      key: "_getTextWidth",
      value: function _getTextWidth(text) {
        var font = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "500 14px 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
        var canvas = this._getTextWidth.canvas || (this._getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = font;
        var metrics = context.measureText(text);
        return metrics.width;
      }
      /**
       * Add a global css rule to the document.
       *
       * @param {string} cssRule - CSS rules
       */

    }, {
      key: "_addCssRule",
      value: function _addCssRule(cssRule) {
        var style = document.createElement("style");
        document.head.appendChild(style);
        style.sheet.insertRule(cssRule, 0);
      }
      /**
       * Generate a random ID.
       *
       * @returns {string} random 10 digit ID
       */

    }, {
      key: "_generateId",
      value: function _generateId() {
        return Math.random().toString().substr(2, 10);
      }
    }]);

    return QuillToolbarItem;
  }();
  /** @class Class representing a button tool for a Quill Editor toolbar. */


  var QuillToolbarButton = /*#__PURE__*/function (_QuillToolbarItem2) {
    _inherits(QuillToolbarButton, _QuillToolbarItem2);

    var _super2 = _createSuper(QuillToolbarButton);

    /**
     * Creates an instance of QuillToolbarButton.
     *
     * @constructor
     * @param {object} [options] - The options/settings for this QuillToolbarButton.
     * @param {string} [options.id=`button-${random10digitNumber}`] - The id of the quill tool.
     * @param {string} [options.value] - The default hidden value of the button.
     * @param {string} options.icon - The default icon this button tool will have.
     */
    function QuillToolbarButton(options) {
      var _this2;

      _classCallCheck(this, QuillToolbarButton);

      _this2 = _super2.call(this, options);

      var me = _assertThisInitialized(_this2);

      me.id = me.options.id || "button-".concat(me._generateId());
      me.qlButton = document.createElement("button");
      me.qlButton.className = "ql-".concat(me.id);
      me.setValue(me.options.value);
      me.setIcon(me.options.icon);

      me.qlButton.onclick = function (evt) {
        evt.preventDefault();
        me.onClick(me.quill);
      };

      me.qlFormatsEl.appendChild(me.qlButton);
      return _this2;
    }
    /**
     * Set the icon for this button tool.
     *
     * @param {string} newLabel - The <svg> or <img> html tag to use as an icon. (Make sure it's 18x18 in size.)
     */


    _createClass(QuillToolbarButton, [{
      key: "setIcon",
      value: function setIcon(imageHtml) {
        var me = this;
        me.qlButton.innerHTML = imageHtml;
      }
      /**
       * Set the hidden value of this button tool.
       *
       * @param {string} newLabel - The <svg> or <img> html tag to use as an icon. (Make sure it's 18x18 in size.)
       */

    }, {
      key: "setValue",
      value: function setValue(value) {
        var me = this;
        me.qlButton.value = value;
      }
      /**
       * Set the hidden value of this button tool.
       *
       * @param {string} newLabel - The <svg> or <img> html tag to use as an icon. (Make sure it's 18x18 in size.)
       */

    }, {
      key: "getValue",
      value: function getValue() {
        var me = this;
        return me.qlButton.value;
      }
      /**
       * A callback that gets called automatically when the button is clicked, tapped or triggered witht he keyboard etc. This callback is expected to be overwritten.
       *
       * @param {Quill} quill - The quill instance the dropdown tool is attached to.
       */

    }, {
      key: "onClick",
      value: function onClick(button, quill) {}
    }]);

    return QuillToolbarButton;
  }(QuillToolbarItem);

  //
  var script = {
    name: "VueEditor",
    mixins: [oldApi],
    props: {
      id: {
        type: String,
        default: "quill-container"
      },
      placeholder: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean
      },
      editorToolbar: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      editorOptions: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      },
      useCustomImageHandler: {
        type: Boolean,
        default: false
      },
      useMarkdownShortcuts: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        quill: null
      };
    },
    watch: {
      value: function value(val) {
        if (val != this.quill.root.innerHTML && !this.quill.hasFocus()) {
          this.quill.root.innerHTML = val;
        }
      },
      disabled: function disabled(status) {
        this.quill.enable(!status);
      }
    },
    mounted: function mounted() {
      this.registerCustomModules(Quill);
      this.registerPrototypes();
      this.initializeEditor();
    },
    beforeDestroy: function beforeDestroy() {
      this.quill = null;
      delete this.quill;
    },
    methods: {
      initializeEditor: function initializeEditor() {
        this.setupQuillEditor();
        this.checkForCustomImageHandler();
        this.handleInitialContent();
        this.registerEditorEventListeners();
        this.$emit("ready", this.quill);
      },
      setupQuillEditor: function setupQuillEditor() {
        var editorConfig = {
          debug: false,
          modules: this.setModules(),
          theme: "snow",
          placeholder: this.placeholder ? this.placeholder : "",
          readOnly: this.disabled ? this.disabled : false
        };
        this.prepareEditorConfig(editorConfig);
        this.quill = new Quill(this.$refs.quillContainer, editorConfig);
        this.addCustomToolbar();
      },
      setModules: function setModules() {
        var modules = {
          toolbar: this.editorToolbar.length ? this.editorToolbar : defaultToolbar
        };

        if (this.useMarkdownShortcuts) {
          Quill.register("modules/markdownShortcuts", MarkdownShortcuts, true);
          modules["markdownShortcuts"] = {};
        }

        modules["table"] = false; // better-table module config

        Quill.register({
          "modules/better-table": QuillBetterTable
        }, true);
        modules["better-table"] = {
          operationMenu: {
            items: {
              unmergeCells: {
                text: "Another unmerge cells name"
              }
            }
          }
        };
        modules["keyboard"] = {
          bindings: QuillBetterTable.keyboardBindings
        }; // better-table module config end

        return modules;
      },
      addCustomToolbar: function addCustomToolbar() {
        var myButton = new QuillToolbarButton({
          icon: "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M8,5 L8,23 M16,5 L16,23 M1,11 L23,11 M1,5 L23,5 M1,17 L23,17 M1,1 L23,1 L23,23 L1,23 L1,1 Z\"/>\n</svg>"
        });

        myButton.onClick = function (quill) {
          // adding better vue table
          var tableModule = quill.getModule("better-table");
          tableModule.insertTable(3, 3); // For example, get the selected text and convert it to uppercase:
        };

        myButton.attach(this.quill);
      },
      prepareEditorConfig: function prepareEditorConfig(editorConfig) {
        if (Object.keys(this.editorOptions).length > 0 && this.editorOptions.constructor === Object) {
          if (this.editorOptions.modules && typeof this.editorOptions.modules.toolbar !== "undefined") {
            // We don't want to merge default toolbar with provided toolbar.
            delete editorConfig.modules.toolbar;
          }

          mergeDeep(editorConfig, this.editorOptions);
        }
      },
      registerPrototypes: function registerPrototypes() {
        Quill.prototype.getHTML = function () {
          return this.container.querySelector(".ql-editor").innerHTML;
        };

        Quill.prototype.getWordCount = function () {
          return this.container.querySelector(".ql-editor").innerText.length;
        };
      },
      registerEditorEventListeners: function registerEditorEventListeners() {
        this.quill.on("text-change", this.handleTextChange);
        this.quill.on("selection-change", this.handleSelectionChange);
        this.listenForEditorEvent("text-change");
        this.listenForEditorEvent("selection-change");
        this.listenForEditorEvent("editor-change");
      },
      listenForEditorEvent: function listenForEditorEvent(type) {
        var _this = this;

        this.quill.on(type, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.$emit.apply(_this, [type].concat(args));
        });
      },
      handleInitialContent: function handleInitialContent() {
        if (this.value) this.quill.root.innerHTML = this.value; // Set initial editor content
      },
      handleSelectionChange: function handleSelectionChange(range, oldRange) {
        if (!range && oldRange) this.$emit("blur", this.quill);else if (range && !oldRange) this.$emit("focus", this.quill);
      },
      handleTextChange: function handleTextChange(delta, oldContents) {
        var editorContent = this.quill.getHTML() === "<p><br></p>" ? "" : this.quill.getHTML();
        this.$emit("input", editorContent);
        if (this.useCustomImageHandler) this.handleImageRemoved(delta, oldContents);
      },
      handleImageRemoved: function handleImageRemoved(delta, oldContents) {
        var _this2 = this;

        var currrentContents = this.quill.getContents();
        var deletedContents = currrentContents.diff(oldContents);
        var operations = deletedContents.ops;
        operations.map(function (operation) {
          if (operation.insert && operation.insert.hasOwnProperty("image")) {
            var image = operation.insert.image;

            _this2.$emit("image-removed", image);
          }
        });
      },
      checkForCustomImageHandler: function checkForCustomImageHandler() {
        this.useCustomImageHandler === true ? this.setupCustomImageHandler() : "";
      },
      setupCustomImageHandler: function setupCustomImageHandler() {
        var toolbar = this.quill.getModule("toolbar");
        toolbar.addHandler("image", this.customImageHandler);
      },
      customImageHandler: function customImageHandler() {
        this.$refs.fileInput.click();
      },
      emitImageInfo: function emitImageInfo($event) {
        var resetUploader = function resetUploader() {
          var uploader = document.getElementById("file-upload");
          uploader.value = "";
        };

        var file = $event.target.files[0];
        var Editor = this.quill;
        var range = Editor.getSelection();
        var cursorLocation = range.index;
        this.$emit("image-added", file, Editor, cursorLocation, resetUploader);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quillWrapper"},[_vm._t("toolbar"),_vm._v(" "),_c('div',{ref:"quillContainer",attrs:{"id":_vm.id}}),_vm._v(" "),(_vm.useCustomImageHandler)?_c('input',{ref:"fileInput",staticStyle:{"display":"none"},attrs:{"id":"file-upload","type":"file","accept":"image/*"},on:{"change":function($event){return _vm.emitImageInfo($event)}}}):_vm._e()],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-1f096d3c_0", { source: "/*!\n * Quill Editor v2.0.0-dev.3\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container:not(.ql-disabled) li[data-list=checked]>.ql-ui,.ql-container:not(.ql-disabled) li[data-list=unchecked]>.ql-ui{cursor:pointer}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;counter-reset:list-0;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre{margin:0;padding:0}.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor p{counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor table{border-collapse:collapse}.ql-editor td{border:1px solid #000;padding:2px 5px}.ql-editor ol{padding-left:1.5em}.ql-editor li{list-style-type:none;padding-left:1.5em;position:relative}.ql-editor li>.ql-ui:before{display:inline-block;margin-left:-1.5em;margin-right:.3em;text-align:right;white-space:nowrap;width:1.2em}.ql-editor li[data-list=checked]>.ql-ui,.ql-editor li[data-list=unchecked]>.ql-ui{color:#777}.ql-editor li[data-list=bullet]>.ql-ui:before{content:'\\2022'}.ql-editor li[data-list=checked]>.ql-ui:before{content:'\\2611'}.ql-editor li[data-list=unchecked]>.ql-ui:before{content:'\\2610'}.ql-editor li[data-list=ordered]{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor li[data-list=ordered]>.ql-ui:before{content:counter(list-0,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-increment:list-1}.ql-editor li[data-list=ordered].ql-indent-1>.ql-ui:before{content:counter(list-1,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-2{counter-increment:list-2}.ql-editor li[data-list=ordered].ql-indent-2>.ql-ui:before{content:counter(list-2,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-3{counter-increment:list-3}.ql-editor li[data-list=ordered].ql-indent-3>.ql-ui:before{content:counter(list-3,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-4{counter-increment:list-4}.ql-editor li[data-list=ordered].ql-indent-4>.ql-ui:before{content:counter(list-4,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-5{counter-increment:list-5}.ql-editor li[data-list=ordered].ql-indent-5>.ql-ui:before{content:counter(list-5,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-6{counter-increment:list-6}.ql-editor li[data-list=ordered].ql-indent-6>.ql-ui:before{content:counter(list-6,decimal) '. '}.ql-editor li[data-list=ordered].ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-7{counter-increment:list-7}.ql-editor li[data-list=ordered].ql-indent-7>.ql-ui:before{content:counter(list-7,lower-alpha) '. '}.ql-editor li[data-list=ordered].ql-indent-7{counter-reset:list-8 list-9}.ql-editor li[data-list=ordered].ql-indent-8{counter-increment:list-8}.ql-editor li[data-list=ordered].ql-indent-8>.ql-ui:before{content:counter(list-8,lower-roman) '. '}.ql-editor li[data-list=ordered].ql-indent-8{counter-reset:list-9}.ql-editor li[data-list=ordered].ql-indent-9{counter-increment:list-9}.ql-editor li[data-list=ordered].ql-indent-9>.ql-ui:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor li.ql-direction-rtl{padding-right:1.5em}.ql-editor li.ql-direction-rtl>.ql-ui:before{margin-left:.3em;margin-right:-1.5em;text-align:left}.ql-editor table{table-layout:fixed;width:100%}.ql-editor table td{outline:0}.ql-editor .ql-code-block-container{font-family:monospace}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor .ql-ui{position:absolute}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor .ql-code-block-container,.ql-snow .ql-editor code{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor .ql-code-block-container{margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor .ql-code-block-container{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-code-block-container{position:relative}.ql-code-block-container .ql-ui{right:5px;top:5px}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", map: undefined, media: undefined })
  ,inject("data-v-1f096d3c_1", { source: ".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li::before,.quillWrapper .ql-editor ul[data-checked=true]>li::before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}", map: undefined, media: undefined })
  ,inject("data-v-1f096d3c_2", { source: ".ql-container .qlbt-selection-line.qlbt-selection-line-left::before{position:absolute;left:-2px;top:-2px;content:'';width:5px;height:5px;background-color:#0589f3;border-radius:5px}.ql-container .qlbt-selection-line.qlbt-selection-line-right::before{position:absolute;right:-2px;bottom:-3px;content:'';width:5px;height:5px;background-color:#0589f3;border-radius:5px}.quill-better-table-wrapper{overflow-x:auto}table.quill-better-table{table-layout:fixed;border-collapse:collapse}table.quill-better-table td{border:1px solid #000;padding:2px 5px}.qlbt-operation-menu{background-color:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);font-size:14px;z-index:100;overflow:hidden}.qlbt-operation-menu .qlbt-operation-menu-dividing{height:1px;background-color:#efefef}.qlbt-operation-menu .qlbt-operation-menu-subtitle{color:#999;font-size:14px;padding:5px 16px}.qlbt-operation-menu .qlbt-operation-color-picker{display:flex;align-items:center;flex-wrap:wrap;padding:0 16px 10px;background-color:#fff;overflow:hidden}.qlbt-operation-menu .qlbt-operation-color-picker .qlbt-operation-color-picker-item{width:20px;height:20px;border:1px solid #595959;margin-right:5px;margin-bottom:5px;cursor:pointer}.qlbt-operation-menu .qlbt-operation-menu-item{display:flex;align-items:center;padding:10px 16px;background-color:#fff;cursor:pointer;color:#595959;overflow:hidden;text-overflow:ellipsis}.qlbt-operation-menu .qlbt-operation-menu-item:hover{background-color:#efefef}.qlbt-operation-menu .qlbt-operation-menu-item .qlbt-operation-menu-icon{margin-right:8px;height:20px;width:20px;font-size:0}.qlbt-col-tool{position:absolute;display:flex;align-items:flex-end;overflow:hidden;z-index:99;height:16px}.qlbt-col-tool .qlbt-col-tool-cell{position:relative;background-color:#fff;border-top:1px solid #000;border-right:1px solid #000;border-bottom:1px solid #000}.qlbt-col-tool .qlbt-col-tool-cell:first-child{border-left:1px solid #000}.qlbt-col-tool .qlbt-col-tool-cell-holder{position:absolute;right:-1px;top:0;bottom:0;z-index:3;width:1px;background-color:transparent;cursor:ew-resize}.qlbt-col-tool .qlbt-col-tool-cell-holder:hover{background-color:#0589f3}.qlbt-col-tool .qlbt-col-tool-cell-holder::before{content:\"\";position:absolute;top:0;left:-6px;display:block;width:8px;height:100%}.qlbt-col-tool .qlbt-col-tool-cell-holder::after{content:\"\";position:absolute;top:0;right:-6px;display:block;width:8px;height:100%}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  var version = "2.10.6"; // Declare install function executed by Vue.use()

  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("VueEditor", __vue_component__);
  }
  var VPlugin = {
    install: install,
    version: version,
    Quill: Quill,
    VueEditor: __vue_component__
  }; // Auto-install when vue is found (eg. in browser via <script> tag)

  var GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(VPlugin);
  }
  /*************************************************/

  exports.Quill = Quill;
  exports.VueEditor = __vue_component__;
  exports.default = VPlugin;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
