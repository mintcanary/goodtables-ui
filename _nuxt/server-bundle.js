module.exports =
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/goodtables-ui/_nuxt/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(32)('wks')
  , uid        = __webpack_require__(22)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(20);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(44)
  , toPrimitive    = __webpack_require__(35)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(45)
  , defined = __webpack_require__(27);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(49)
  , enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(17)
  , hide      = __webpack_require__(8)
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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(170)

module.exports = function (parentId, list, isProduction) {
  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    var context = __VUE_SSR_CONTEXT__
    var styles = context._styles

    if (!styles) {
      styles = context._styles = {}
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get () {
          return (
            context._renderedStyles ||
            (context._renderedStyles = renderStyles(styles))
          )
        }
      })
    }

    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        style.ids.push(part.id)
        style.css += '\n' + part.css
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += `<style data-vue-ssr-id="${
      style.ids.join(' ')
    }"${
      style.media ? ` media="${style.media}"` : ''
    }>${style.css}</style>`
  }
  return css
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys')
  , uid    = __webpack_require__(22);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(3)
  , LIBRARY        = __webpack_require__(18)
  , wksExt         = __webpack_require__(37)
  , defineProperty = __webpack_require__(9).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(157),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/components/Logo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Logo.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var transitionsKeys = ['name', 'mode', 'css', 'type', 'enterClass', 'leaveClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'enterToClass', 'leaveToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];

/* harmony default export */ __webpack_exports__["a"] = {
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;

    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key];
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13)
  , TAG = __webpack_require__(1)('toStringTag')
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

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(18)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(50)
  , hide           = __webpack_require__(8)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(16)
  , $iterCreate    = __webpack_require__(101)
  , setToStringTag = __webpack_require__(21)
  , getPrototypeOf = __webpack_require__(111)
  , ITERATOR       = __webpack_require__(1)('iterator')
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

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(108)
  , enumBugKeys = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(31)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(43).appendChild(iframe);
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


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(49)
  , hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(10)
  , arrayIndexOf = __webpack_require__(94)(false)
  , IE_PROTO     = __webpack_require__(31)('IE_PROTO');

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

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(17)
  , invoke             = __webpack_require__(97)
  , html               = __webpack_require__(43)
  , cel                = __webpack_require__(28)
  , global             = __webpack_require__(2)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(13)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(116)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function(iterated){
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

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(119);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(8)
  , Iterators     = __webpack_require__(16)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.e43f6e3.eot";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(163),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/components/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(160),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/components/source_list_item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] source_list_item.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__App_vue__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__router_js__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });













// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__components_nuxt_child_js__["a" /* default */]);
// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__components_nuxt_link_js__["a" /* default */]);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_7__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

if (false) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Includes external plugins


// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_4__router_js__["a" /* default */],

  _nuxt: {
    defaultTransition: defaultTransition,
    transitions: [defaultTransition],
    setTransitions: function setTransitions(transitions) {
      if (!Array.isArray(transitions)) {
        transitions = [transitions];
      }
      transitions = transitions.map(function (transition) {
        if (!transition) {
          transition = defaultTransition;
        } else if (typeof transition === 'string') {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
        } else {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
        }
        return transition;
      });
      this.$options._nuxt.transitions = transitions;
      return transitions;
    },

    err: null,
    dateErr: null,
    error: function error(err) {
      err = err || null;
      if (typeof err === 'string') {
        err = { statusCode: 500, message: err };
      }
      this.$options._nuxt.dateErr = Date.now();
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_8__App_vue___default.a);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ __webpack_exports__["c"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ __webpack_exports__["b"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["d"] = promiseSeries;
/* harmony export (immutable) */ __webpack_exports__["e"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ __webpack_exports__["a"] = urlJoin;
/* unused harmony export compile */






function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,

    route: context.to ? context.to : context.route,
    error: context.error,
    base: '/goodtables-ui/',
    env: {}
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    ctx._redirected = true;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promiseSeries(promises, context) {
  if (!promises.length || context._redirected) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve();
  }
  return promisify(promises[0], context).then(function () {
    return promiseSeries(promises.slice(1), context);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a)) {
    promise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ __webpack_exports__["a"] = {
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _881866a8 =  false ? function () {
  return System.import('/Users/sam/www/okfn/goodtables-ui/pages/index.vue');
} : __webpack_require__(149);

var _2298d73a =  false ? function () {
  return System.import('/Users/sam/www/okfn/goodtables-ui/pages/style-guide.vue');
} : __webpack_require__(150);

var _c2b42724 =  false ? function () {
  return System.import('/Users/sam/www/okfn/goodtables-ui/pages/dashboard.vue');
} : __webpack_require__(148);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition;
  } else {
    var position = {};
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 };
    } else if (to.matched.some(function (r) {
      return r.components.default.options.scrollToTop;
    })) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 };
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash };
    }
    return position;
  }
};

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  base: '/goodtables-ui/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior: scrollBehavior,
  routes: [{
    path: "/",
    component: _881866a8,
    name: "index"
  }, {
    path: "/style-guide",
    component: _2298d73a,
    name: "style-guide"
  }, {
    path: "/dashboard",
    component: _c2b42724,
    name: "dashboard"
  }]
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue__);

//
//
//
//
//
//
//



var layouts = {

  "_dashboard":  false ? function () {
    return System.import('/Users/sam/www/okfn/goodtables-ui/layouts/dashboard.vue');
  } : __webpack_require__(144),

  "_default":  false ? function () {
    return System.import('/Users/sam/www/okfn/goodtables-ui/layouts/default.vue');
  } : __webpack_require__(145),

  "_landing":  false ? function () {
    return System.import('/Users/sam/www/okfn/goodtables-ui/layouts/landing.vue');
  } : __webpack_require__(147)

};

/* harmony default export */ __webpack_exports__["default"] = {
  head: { "title": "starter", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "name": "description", "content": "Nuxt.js project" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }] },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },

  mounted: function mounted() {
    this.$loading = this.$refs.loading;
    this.$nuxt.$loading = this.$loading;
  },


  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout);
      }
      this.layout = layouts[_layout];
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this.layout);
    },
    loadLayout: function loadLayout(_layout) {
      var _this = this;

      return layouts[_layout]().then(function (Component) {
        layouts[_layout] = Component;
        _this.layout = layouts[_layout];
        return _this.layout;
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
        console.error(e);
      });
    }
  },
  components: {
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue___default.a
  }
};

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#1595BC',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_sam_www_okfn_goodtables_ui_layouts_error_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_sam_www_okfn_goodtables_ui_layouts_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_sam_www_okfn_goodtables_ui_layouts_error_vue__);
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // Bind $nuxt.setLayout(layout) to $root.setLayout
    this.setLayout = this.$root.setLayout.bind(this.$root);
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    if (this.$root.$loading && this.$root.$loading.start) {
      this.$loading = this.$root.$loading;
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__Users_sam_www_okfn_goodtables_ui_layouts_error_vue___default.a
  }
};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  props: ['title', 'count', 'description', 'helptitle', 'type'],
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[rel="popover"]').popover({
      html: true
    });
  }
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_source_list_item_contents_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_source_list_item_contents_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_source_list_item_contents_vue__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  props: ['title', 'integration', 'jobnumber', 'jobtotal', 'status', 'time', 'source', 'job'],
  components: {
    SourceItemContent: __WEBPACK_IMPORTED_MODULE_0__components_source_list_item_contents_vue___default.a
  }
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['title', 'integration', 'jobnumber', 'jobtotal', 'status', 'time', 'source', 'job']
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_source_list_item_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_source_list_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_source_list_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    Logo: __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default.a,
    SourceItem: __WEBPACK_IMPORTED_MODULE_1__components_source_list_item_vue___default.a
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()(function () {
      __WEBPACK_IMPORTED_MODULE_2_jquery___default()('[data-toggle="tooltip"]').tooltip();
    });
  },
  data: function data() {
    return {
      view: 'default-view',
      repos: [{
        'active': true,
        'id': '5246d166-0cd8-469e-a953-e7e174690837',
        'name': 'frictionlessdata/ADB-User-Study'
      }, {
        'active': true,
        'id': 'efab972f-af97-47c2-94cd-a9d9d6636d4f',
        'name': 'frictionlessdata/datapackage-ckan-js'
      }, {
        'active': true,
        'id': '2639b85d-a17f-43b7-afce-ada7ea20db39',
        'name': 'frictionlessdata/example-goodtables.io'
      }, {
        'active': false,
        'id': '3d53c8ac-0750-4320-b3db-5ec90a8e9a16',
        'name': 'adamamyl/ckanpages'
      }, {
        'active': false,
        'id': '70f7b61a-f411-4c90-b4e9-d93a432f259c',
        'name': 'ckan/ckanext-pages'
      }, {
        'active': false,
        'id': '402cae81-6eb0-4aa9-9902-e70430a4b140',
        'name': 'frictionlessdata/datapackage-from-remote-js'
      }, {
        'active': false,
        'id': '7dc38c79-f53a-4a5b-bbf9-86cb2e8ad13a',
        'name': 'frictionlessdata/datapackage-identifier-js'
      }, {
        'active': false,
        'id': '3f700b03-8796-4b63-8534-1b7535de9bf6',
        'name': 'frictionlessdata/datapackage-init-js'
      }, {
        'active': false,
        'id': '7ef45990-c0ff-48ca-b592-ed220d443b9a',
        'name': 'frictionlessdata/datapackage-js'
      }, {
        'active': false,
        'id': 'b769deec-8015-4d1a-ae1f-0999154d8fe6',
        'name': 'frictionlessdata/datapackage-outfile-js'
      }, {
        'active': false,
        'id': '7708e227-a7bd-4ee6-b743-a888ce529b33',
        'name': 'frictionlessdata/datapackage-pipelines'
      }, {
        'active': false,
        'id': '8428c096-b18e-4ae5-983a-0fc2066e6e2a',
        'name': 'frictionlessdata/datapackage-py'
      }, {
        'active': false,
        'id': 'aa9f8ad6-0bb2-4b23-8fa8-7b7ffa5687c0',
        'name': 'frictionlessdata/datapackage-r'
      }, {
        'active': false,
        'id': 'bc54dbd7-f8fd-4859-b61f-a90f45406cec',
        'name': 'frictionlessdata/datapackage-rb'
      }, {
        'active': false,
        'id': '9618ed67-70f3-4b09-bea1-4cf36f9e10fc',
        'name': 'frictionlessdata/datapackage-read-js'
      }, {
        'active': false,
        'id': '7bcf4b19-fa2f-43ab-b430-2755a70897ad',
        'name': 'frictionlessdata/datapackage-registry-js'
      }, {
        'active': false,
        'id': 'b9613d2b-56d6-4500-85b5-9069915a3dce',
        'name': 'frictionlessdata/datapackage-render-js'
      }, {
        'active': false,
        'id': '0b1f9825-38d3-4b7c-9e4a-0871ec12f89f',
        'name': 'frictionlessdata/datapackage-to-google-spreadsheet'
      }, {
        'active': false,
        'id': '2450d2b7-24dd-411a-a56c-6785922b037a',
        'name': 'frictionlessdata/datapackage-validate-js'
      }, {
        'active': false,
        'id': '30836a77-e756-4a58-b8cf-979c09c3125f',
        'name': 'frictionlessdata/datapackagist'
      }, {
        'active': false,
        'id': 'de586ba5-9f75-40b8-8b92-74d98e7b1f4f',
        'name': 'frictionlessdata/data-quality-cli'
      }, {
        'active': false,
        'id': '99bb10a9-7642-4052-afdb-ce8d0c77f81c',
        'name': 'frictionlessdata/data-quality-dashboard'
      }, {
        'active': false,
        'id': '3a76b6af-4453-456d-9f7e-ce9289dba462',
        'name': 'frictionlessdata/data-quality-databases'
      }, {
        'active': false,
        'id': 'b3ec02da-36f6-40e8-99d5-198d6b164e4d',
        'name': 'frictionlessdata/data-quality-spec'
      }, {
        'active': false,
        'id': '600e073b-71fa-4f22-91c9-944946a7a443',
        'name': 'frictionlessdata/dpm-js'
      }, {
        'active': false,
        'id': 'bef46b8c-8585-4e5b-9a57-f01b60f285fa',
        'name': 'frictionlessdata/dpm-py'
      }, {
        'active': false,
        'id': '92b8054e-aa79-4885-98af-0b395e629480',
        'name': 'frictionlessdata/dpr-api'
      }, {
        'active': false,
        'id': 'db2c8a5a-225a-43d7-bafd-0cb026d35734',
        'name': 'frictionlessdata/dpr-docs'
      }, {
        'active': false,
        'id': 'a12d90a2-5998-49bd-9ed9-b300ac4ec294',
        'name': 'frictionlessdata/dpr-js'
      }, {
        'active': false,
        'id': '40124b36-ed6b-410d-bf3d-a9434e2b9af4',
        'name': 'frictionlessdata/example-continuous-data-integration'
      }, {
        'active': false,
        'id': '51834e07-b24b-4155-b0ed-118138ef9cfb',
        'name': 'frictionlessdata/example-data-packages'
      }, {
        'active': false,
        'id': 'c447dfb1-1961-4951-a1d9-8301dfb7eadb',
        'name': 'frictionlessdata/example-geojson'
      }, {
        'active': false,
        'id': '5833ae73-5f02-4cdb-a53c-4081c8d217ff',
        'name': 'frictionlessdata/example-simple-tabular-data'
      }, {
        'active': false,
        'id': 'd0bf7282-6e22-4f2c-a825-161563eb699c',
        'name': 'frictionlessdata/example-topojson'
      }, {
        'active': false,
        'id': '4a07d259-a08e-4096-804d-4fcb5fe44395',
        'name': 'frictionlessdata/frictionlessdata.io'
      }, {
        'active': false,
        'id': 'd250a761-e3ba-4619-910c-44fed5bd03fd',
        'name': 'frictionlessdata/goodtables-angular-js'
      }, {
        'active': false,
        'id': '6a1ff227-30e9-449c-b848-7afa16eeed45',
        'name': 'frictionlessdata/goodtables.io'
      }, {
        'active': false,
        'id': 'dc37b793-0580-4a2c-9738-38a858a63fc7',
        'name': 'frictionlessdata/goodtables-js'
      }, {
        'active': false,
        'id': 'ba65c74d-e000-41dd-94ef-0d4838d52aa6',
        'name': 'frictionlessdata/goodtables-py'
      }, {
        'active': false,
        'id': 'f9ff0daa-191d-4ea3-b25f-82506479f95b',
        'name': 'frictionlessdata/goodtables-react-js'
      }, {
        'active': false,
        'id': 'a87e83ce-b40c-48d2-ad5b-50753acf4ef3',
        'name': 'frictionlessdata/goodtables-server-py'
      }, {
        'active': false,
        'id': 'f7161dce-0839-4048-be12-b4a0f29bf177',
        'name': 'frictionlessdata/goodtables-vue-js'
      }, {
        'active': false,
        'id': 'ef21971c-e846-45ee-8bf4-5c38fede806a',
        'name': 'frictionlessdata/goodtables-web'
      }, {
        'active': false,
        'id': '65366001-6826-4fbf-8ab0-85eac04e6a02',
        'name': 'frictionlessdata/jsontableschema-bigquery-py'
      }, {
        'active': false,
        'id': '038e0900-0c5c-4f87-a413-2811a5441725',
        'name': 'frictionlessdata/jsontableschema-js'
      }, {
        'active': false,
        'id': 'f07f32a0-7bdb-403d-9da3-8bd43bd6c7ee',
        'name': 'frictionlessdata/jsontableschema-models-js'
      }, {
        'active': false,
        'id': 'b6157416-fd1c-465b-90d5-a98b170b7fad',
        'name': 'frictionlessdata/jsontableschema-openrefine-py'
      }, {
        'active': false,
        'id': '4b8fda9e-d758-4a7b-91dd-51268e2d01bd',
        'name': 'frictionlessdata/jsontableschema-pandas-py'
      }, {
        'active': false,
        'id': 'f95df547-c07c-429c-bf24-e0bd75ad0708',
        'name': 'frictionlessdata/jsontableschema-py'
      }, {
        'active': false,
        'id': '7fa3a279-f028-4df0-b4d8-07c1fda835d6',
        'name': 'frictionlessdata/jsontableschema-rb'
      }, {
        'active': false,
        'id': '023ca0f0-d617-4052-9a3d-4ad986d25697',
        'name': 'frictionlessdata/jsontableschema-sql-py'
      }, {
        'active': false,
        'id': 'fff43766-2837-4c92-90e5-44709e478916',
        'name': 'frictionlessdata/pilot-dm4t'
      }, {
        'active': false,
        'id': '099481de-9ca0-4989-8de6-1c76f8c37c92',
        'name': 'frictionlessdata/pilot-open-archaeology'
      }, {
        'active': false,
        'id': '36f676aa-4085-4184-be9f-7a2e663a9788',
        'name': 'frictionlessdata/pilot-pnnl'
      }, {
        'active': false,
        'id': '443b0e1a-78db-4707-8eb2-fac2ada6279b',
        'name': 'frictionlessdata/pilot-wprdc'
      }, {
        'active': false,
        'id': '96c7e2fe-3dcd-47d8-bfb9-f67a9ac58f14',
        'name': 'frictionlessdata/project'
      }, {
        'active': false,
        'id': 'f31021a8-0fb8-4b40-b23b-806aaa3a1274',
        'name': 'frictionlessdata/schemas'
      }, {
        'active': false,
        'id': '29309268-a463-4c81-9ada-92c97ad38cb4',
        'name': 'frictionlessdata/specs'
      }, {
        'active': false,
        'id': 'a8b0bbe4-2c8b-427e-bed1-7c355115f1e6',
        'name': 'frictionlessdata/stack'
      }, {
        'active': false,
        'id': 'ffa0fd77-1fc2-41d5-958f-e15de3667398',
        'name': 'frictionlessdata/tabulator-py'
      }, {
        'active': false,
        'id': '28ca3392-b5e5-4dde-897a-fd3a3bf2a805',
        'name': 'frictionlessdata/testsuite-py'
      }, {
        'active': false,
        'id': '496794ec-9be9-4281-80db-5e9b5906ad18',
        'name': 'frictionlessdata/toolfund'
      }]
    };
  }
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    MyFooter: __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default.a,
    Logo: __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default.a
  }
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['error']
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Logo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var Vue = __webpack_require__(4);
var VueScrollTo = __webpack_require__(173);

Vue.use(VueScrollTo);

/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    MyFooter: __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default.a,
    Logo: __WEBPACK_IMPORTED_MODULE_0__components_Logo_vue___default.a
  }
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_source_list_item_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_source_list_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_source_list_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_report_error_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_report_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_report_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  layout: 'dashboard',
  components: {
    SourceItem: __WEBPACK_IMPORTED_MODULE_0__components_source_list_item_vue___default.a,
    ReportError: __WEBPACK_IMPORTED_MODULE_1__components_report_error_vue___default.a
  },
  head: function head() {
    return {
      title: 'GoodTables'
    };
  },

  mounted: function mounted() {
    function stickyHeading() {
      // TODO: Needs offset for subsequent headings, once a sticky heading is active
      __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.file-heading').each(function () {
        var windowTop = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(window).scrollTop();
        var divTop = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).offset().top;
        if (windowTop > divTop) {
          __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.file-heading span').removeClass('stick');
          __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.file-heading span').width('100%');
          __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).children('span').addClass('stick');
          __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).children('span').width(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).parents('.report').outerWidth());
        } else {
          __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).children('span').removeClass('stick');
          __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this).children('span').width('100%');
        }
      });
    }
    __WEBPACK_IMPORTED_MODULE_2_jquery___default()(function () {
      __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.source-view > div').scroll(stickyHeading);
      stickyHeading();
    });
  }
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  layout: 'landing',
  head: function head() {
    return {
      title: 'GoodTables'
    };
  }
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  data: function data(_ref) {
    var req = _ref.req;

    return {
      name: req ? 'server' : 'client'
    };
  },
  head: function head() {
    return {
      title: 'Style Guide (' + this.name + '-side)'
    };
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(41);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(83);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(82);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(3)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
module.exports = __webpack_require__(3).Object.assign;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(3).Object.keys;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(122);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
__webpack_require__(53);
__webpack_require__(124);
__webpack_require__(125);
module.exports = __webpack_require__(3).Symbol;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(55);
module.exports = __webpack_require__(37).f('iterator');

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10)
  , toLength  = __webpack_require__(52)
  , toIndex   = __webpack_require__(117);
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

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12)
  , gOPS    = __webpack_require__(30)
  , pIE     = __webpack_require__(19);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(17)
  , call        = __webpack_require__(100)
  , isArrayIter = __webpack_require__(98)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(52)
  , getIterFn   = __webpack_require__(118)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(16)
  , ITERATOR   = __webpack_require__(1)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(13);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(47)
  , descriptor     = __webpack_require__(20)
  , setToStringTag = __webpack_require__(21)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(1)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(12)
  , toIObject = __webpack_require__(10);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(22)('meta')
  , isObject = __webpack_require__(15)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(9).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , macrotask = __webpack_require__(51).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(13)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(12)
  , gOPS     = __webpack_require__(30)
  , pIE      = __webpack_require__(19)
  , toObject = __webpack_require__(34)
  , IObject  = __webpack_require__(45)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
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

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(9)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(12);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(19)
  , createDesc     = __webpack_require__(20)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(35)
  , has            = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(44)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10)
  , gOPN      = __webpack_require__(48).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(34)
  , IE_PROTO    = __webpack_require__(31)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(14)
  , core    = __webpack_require__(3)
  , fails   = __webpack_require__(11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(2)
  , core        = __webpack_require__(3)
  , dP          = __webpack_require__(9)
  , DESCRIPTORS = __webpack_require__(6)
  , SPECIES     = __webpack_require__(1)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(26)
  , SPECIES   = __webpack_require__(1)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33)
  , defined   = __webpack_require__(27);
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

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(42)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(16);
module.exports = __webpack_require__(3).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(92)
  , step             = __webpack_require__(103)
  , Iterators        = __webpack_require__(16)
  , toIObject        = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(46)(Array, 'Array', function(iterated, kind){
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

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(107)});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34)
  , $keys    = __webpack_require__(12);

__webpack_require__(112)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(18)
  , global             = __webpack_require__(2)
  , ctx                = __webpack_require__(17)
  , classof            = __webpack_require__(42)
  , $export            = __webpack_require__(14)
  , isObject           = __webpack_require__(15)
  , aFunction          = __webpack_require__(26)
  , anInstance         = __webpack_require__(93)
  , forOf              = __webpack_require__(96)
  , speciesConstructor = __webpack_require__(115)
  , task               = __webpack_require__(51).set
  , microtask          = __webpack_require__(106)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(113)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(114)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(102)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(7)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(50)
  , META           = __webpack_require__(105).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(32)
  , setToStringTag = __webpack_require__(21)
  , uid            = __webpack_require__(22)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(37)
  , wksDefine      = __webpack_require__(36)
  , keyOf          = __webpack_require__(104)
  , enumKeys       = __webpack_require__(95)
  , isArray        = __webpack_require__(99)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(35)
  , createDesc     = __webpack_require__(20)
  , _create        = __webpack_require__(47)
  , gOPNExt        = __webpack_require__(110)
  , $GOPD          = __webpack_require__(109)
  , $DP            = __webpack_require__(9)
  , $keys          = __webpack_require__(12)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(48).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(19).f  = $propertyIsEnumerable;
  __webpack_require__(30).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(18)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('asyncIterator');

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('observable');

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "\n.progress[data-v-0571f91f] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n", ""]);

// exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n*,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n}\na,\n  a:visited {\n    text-decoration: underline;\n}\na[href]:after {\n    content: \" (\" attr(href) \")\";\n}\nabbr[title]:after {\n    content: \" (\" attr(title) \")\";\n}\na[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n}\npre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n}\nthead {\n    display: table-header-group;\n}\ntr,\n  img {\n    page-break-inside: avoid;\n}\nimg {\n    max-width: 100% !important;\n}\np,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n}\nh2,\n  h3 {\n    page-break-after: avoid;\n}\n.navbar {\n    display: none;\n}\n.btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n}\n.label {\n    border: 1px solid #000;\n}\n.table {\n    border-collapse: collapse !important;\n}\n.table td,\n    .table th {\n      background-color: #fff !important;\n}\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n}\n}\n* {\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\nbody {\n  font-family: frictionlessdata, Raleway, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #2f3135;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #01CD81;\n  text-decoration: none;\n}\na:hover, a:focus {\n    color: #018151;\n    text-decoration: underline;\n}\na:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 3px;\n}\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0px;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #e3e4e6;\n}\n.sr-only, [class^=\"icon-\"] i, [class*=\" icon-\"] i {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: frictionlessdata, Raleway, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  line-height: 1.2;\n  color: inherit;\n}\nh1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #898d96;\n}\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%;\n}\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%;\n}\nh1, .h1 {\n  font-size: 36px;\n}\nh2, .h2 {\n  font-size: 30px;\n}\nh3, .h3 {\n  font-size: 24px;\n}\nh4, .h4 {\n  font-size: 18px;\n}\nh5, .h5 {\n  font-size: 14px;\n}\nh6, .h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n.lead {\n      font-size: 21px;\n}\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  background-color: #fdf3e4;\n  padding: .2em;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase, .initialism {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #898d96;\n}\n.text-primary {\n  color: #01CD81;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #019a61;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #F13C3F;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #e91114;\n}\n.bg-primary {\n  color: #fff;\n}\n.bg-primary {\n  background-color: #01CD81;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #019a61;\n}\n.bg-success {\n  background-color: #87fed2;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #54febf;\n}\n.bg-info {\n  background-color: #95ddf3;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #68cfee;\n}\n.bg-warning {\n  background-color: #fdf3e4;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f9ddb5;\n}\n.bg-danger {\n  background-color: #fde7e8;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #fab8b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #e3e4e6;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n.dl-horizontal dd:after {\n  clear: both;\n}\n@media (min-width: 768px) {\n.dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.dl-horizontal dd {\n    margin-left: 180px;\n}\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #898d96;\n}\n.initialism {\n  font-size: 90%;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #e3e4e6;\n}\nblockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0;\n}\nblockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #898d96;\n}\nblockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #e3e4e6;\n  border-left: 0;\n  text-align: right;\n}\n.blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: '';\n}\n.blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 0px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 1px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #2f3135;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n}\npre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.container:before, .container:after {\n    content: \" \";\n    display: table;\n}\n.container:after {\n    clear: both;\n}\n@media (min-width: 768px) {\n.container {\n      width: 750px;\n}\n}\n@media (min-width: 992px) {\n.container {\n      width: 970px;\n}\n}\n@media (min-width: 1200px) {\n.container {\n      width: 1170px;\n}\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table;\n}\n.container-fluid:after {\n    clear: both;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.row:before, .row:after {\n    content: \" \";\n    display: table;\n}\n.row:after {\n    clear: both;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-1 {\n  width: 8.33333%;\n}\n.col-xs-2 {\n  width: 16.66667%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-4 {\n  width: 33.33333%;\n}\n.col-xs-5 {\n  width: 41.66667%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-7 {\n  width: 58.33333%;\n}\n.col-xs-8 {\n  width: 66.66667%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-10 {\n  width: 83.33333%;\n}\n.col-xs-11 {\n  width: 91.66667%;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n@media (min-width: 768px) {\n.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n}\n.col-sm-1 {\n    width: 8.33333%;\n}\n.col-sm-2 {\n    width: 16.66667%;\n}\n.col-sm-3 {\n    width: 25%;\n}\n.col-sm-4 {\n    width: 33.33333%;\n}\n.col-sm-5 {\n    width: 41.66667%;\n}\n.col-sm-6 {\n    width: 50%;\n}\n.col-sm-7 {\n    width: 58.33333%;\n}\n.col-sm-8 {\n    width: 66.66667%;\n}\n.col-sm-9 {\n    width: 75%;\n}\n.col-sm-10 {\n    width: 83.33333%;\n}\n.col-sm-11 {\n    width: 91.66667%;\n}\n.col-sm-12 {\n    width: 100%;\n}\n.col-sm-pull-0 {\n    right: auto;\n}\n.col-sm-pull-1 {\n    right: 8.33333%;\n}\n.col-sm-pull-2 {\n    right: 16.66667%;\n}\n.col-sm-pull-3 {\n    right: 25%;\n}\n.col-sm-pull-4 {\n    right: 33.33333%;\n}\n.col-sm-pull-5 {\n    right: 41.66667%;\n}\n.col-sm-pull-6 {\n    right: 50%;\n}\n.col-sm-pull-7 {\n    right: 58.33333%;\n}\n.col-sm-pull-8 {\n    right: 66.66667%;\n}\n.col-sm-pull-9 {\n    right: 75%;\n}\n.col-sm-pull-10 {\n    right: 83.33333%;\n}\n.col-sm-pull-11 {\n    right: 91.66667%;\n}\n.col-sm-pull-12 {\n    right: 100%;\n}\n.col-sm-push-0 {\n    left: auto;\n}\n.col-sm-push-1 {\n    left: 8.33333%;\n}\n.col-sm-push-2 {\n    left: 16.66667%;\n}\n.col-sm-push-3 {\n    left: 25%;\n}\n.col-sm-push-4 {\n    left: 33.33333%;\n}\n.col-sm-push-5 {\n    left: 41.66667%;\n}\n.col-sm-push-6 {\n    left: 50%;\n}\n.col-sm-push-7 {\n    left: 58.33333%;\n}\n.col-sm-push-8 {\n    left: 66.66667%;\n}\n.col-sm-push-9 {\n    left: 75%;\n}\n.col-sm-push-10 {\n    left: 83.33333%;\n}\n.col-sm-push-11 {\n    left: 91.66667%;\n}\n.col-sm-push-12 {\n    left: 100%;\n}\n.col-sm-offset-0 {\n    margin-left: 0%;\n}\n.col-sm-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-sm-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-sm-offset-3 {\n    margin-left: 25%;\n}\n.col-sm-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-sm-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-sm-offset-6 {\n    margin-left: 50%;\n}\n.col-sm-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-sm-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-sm-offset-9 {\n    margin-left: 75%;\n}\n.col-sm-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-sm-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-sm-offset-12 {\n    margin-left: 100%;\n}\n}\n@media (min-width: 992px) {\n.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n}\n.col-md-1 {\n    width: 8.33333%;\n}\n.col-md-2 {\n    width: 16.66667%;\n}\n.col-md-3 {\n    width: 25%;\n}\n.col-md-4 {\n    width: 33.33333%;\n}\n.col-md-5 {\n    width: 41.66667%;\n}\n.col-md-6 {\n    width: 50%;\n}\n.col-md-7 {\n    width: 58.33333%;\n}\n.col-md-8 {\n    width: 66.66667%;\n}\n.col-md-9 {\n    width: 75%;\n}\n.col-md-10 {\n    width: 83.33333%;\n}\n.col-md-11 {\n    width: 91.66667%;\n}\n.col-md-12 {\n    width: 100%;\n}\n.col-md-pull-0 {\n    right: auto;\n}\n.col-md-pull-1 {\n    right: 8.33333%;\n}\n.col-md-pull-2 {\n    right: 16.66667%;\n}\n.col-md-pull-3 {\n    right: 25%;\n}\n.col-md-pull-4 {\n    right: 33.33333%;\n}\n.col-md-pull-5 {\n    right: 41.66667%;\n}\n.col-md-pull-6 {\n    right: 50%;\n}\n.col-md-pull-7 {\n    right: 58.33333%;\n}\n.col-md-pull-8 {\n    right: 66.66667%;\n}\n.col-md-pull-9 {\n    right: 75%;\n}\n.col-md-pull-10 {\n    right: 83.33333%;\n}\n.col-md-pull-11 {\n    right: 91.66667%;\n}\n.col-md-pull-12 {\n    right: 100%;\n}\n.col-md-push-0 {\n    left: auto;\n}\n.col-md-push-1 {\n    left: 8.33333%;\n}\n.col-md-push-2 {\n    left: 16.66667%;\n}\n.col-md-push-3 {\n    left: 25%;\n}\n.col-md-push-4 {\n    left: 33.33333%;\n}\n.col-md-push-5 {\n    left: 41.66667%;\n}\n.col-md-push-6 {\n    left: 50%;\n}\n.col-md-push-7 {\n    left: 58.33333%;\n}\n.col-md-push-8 {\n    left: 66.66667%;\n}\n.col-md-push-9 {\n    left: 75%;\n}\n.col-md-push-10 {\n    left: 83.33333%;\n}\n.col-md-push-11 {\n    left: 91.66667%;\n}\n.col-md-push-12 {\n    left: 100%;\n}\n.col-md-offset-0 {\n    margin-left: 0%;\n}\n.col-md-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-md-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-md-offset-3 {\n    margin-left: 25%;\n}\n.col-md-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-md-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-md-offset-6 {\n    margin-left: 50%;\n}\n.col-md-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-md-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-md-offset-9 {\n    margin-left: 75%;\n}\n.col-md-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-md-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-md-offset-12 {\n    margin-left: 100%;\n}\n}\n@media (min-width: 1200px) {\n.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n}\n.col-lg-1 {\n    width: 8.33333%;\n}\n.col-lg-2 {\n    width: 16.66667%;\n}\n.col-lg-3 {\n    width: 25%;\n}\n.col-lg-4 {\n    width: 33.33333%;\n}\n.col-lg-5 {\n    width: 41.66667%;\n}\n.col-lg-6 {\n    width: 50%;\n}\n.col-lg-7 {\n    width: 58.33333%;\n}\n.col-lg-8 {\n    width: 66.66667%;\n}\n.col-lg-9 {\n    width: 75%;\n}\n.col-lg-10 {\n    width: 83.33333%;\n}\n.col-lg-11 {\n    width: 91.66667%;\n}\n.col-lg-12 {\n    width: 100%;\n}\n.col-lg-pull-0 {\n    right: auto;\n}\n.col-lg-pull-1 {\n    right: 8.33333%;\n}\n.col-lg-pull-2 {\n    right: 16.66667%;\n}\n.col-lg-pull-3 {\n    right: 25%;\n}\n.col-lg-pull-4 {\n    right: 33.33333%;\n}\n.col-lg-pull-5 {\n    right: 41.66667%;\n}\n.col-lg-pull-6 {\n    right: 50%;\n}\n.col-lg-pull-7 {\n    right: 58.33333%;\n}\n.col-lg-pull-8 {\n    right: 66.66667%;\n}\n.col-lg-pull-9 {\n    right: 75%;\n}\n.col-lg-pull-10 {\n    right: 83.33333%;\n}\n.col-lg-pull-11 {\n    right: 91.66667%;\n}\n.col-lg-pull-12 {\n    right: 100%;\n}\n.col-lg-push-0 {\n    left: auto;\n}\n.col-lg-push-1 {\n    left: 8.33333%;\n}\n.col-lg-push-2 {\n    left: 16.66667%;\n}\n.col-lg-push-3 {\n    left: 25%;\n}\n.col-lg-push-4 {\n    left: 33.33333%;\n}\n.col-lg-push-5 {\n    left: 41.66667%;\n}\n.col-lg-push-6 {\n    left: 50%;\n}\n.col-lg-push-7 {\n    left: 58.33333%;\n}\n.col-lg-push-8 {\n    left: 66.66667%;\n}\n.col-lg-push-9 {\n    left: 75%;\n}\n.col-lg-push-10 {\n    left: 83.33333%;\n}\n.col-lg-push-11 {\n    left: 91.66667%;\n}\n.col-lg-push-12 {\n    left: 100%;\n}\n.col-lg-offset-0 {\n    margin-left: 0%;\n}\n.col-lg-offset-1 {\n    margin-left: 8.33333%;\n}\n.col-lg-offset-2 {\n    margin-left: 16.66667%;\n}\n.col-lg-offset-3 {\n    margin-left: 25%;\n}\n.col-lg-offset-4 {\n    margin-left: 33.33333%;\n}\n.col-lg-offset-5 {\n    margin-left: 41.66667%;\n}\n.col-lg-offset-6 {\n    margin-left: 50%;\n}\n.col-lg-offset-7 {\n    margin-left: 58.33333%;\n}\n.col-lg-offset-8 {\n    margin-left: 66.66667%;\n}\n.col-lg-offset-9 {\n    margin-left: 75%;\n}\n.col-lg-offset-10 {\n    margin-left: 83.33333%;\n}\n.col-lg-offset-11 {\n    margin-left: 91.66667%;\n}\n.col-lg-offset-12 {\n    margin-left: 100%;\n}\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #898d96;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0;\n}\n.table > tbody + tbody {\n    border-top: 2px solid #ddd;\n}\n.table .table {\n    background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #87fed2;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #6efec8;\n}\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #95ddf3;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #7ed6f1;\n}\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fdf3e4;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #fbe8cd;\n}\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #fde7e8;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #fcd0d0;\n}\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n@media screen and (max-width: 767px) {\n.table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd;\n}\n.table-responsive > .table {\n        margin-bottom: 0;\n}\n.table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap;\n}\n.table-responsive > .table-bordered {\n        border: 0;\n}\n.table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0;\n}\n.table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0;\n}\n.table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0;\n}\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #2f3135;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #404248;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #404248;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n    color: #999;\n}\n.form-control::-webkit-input-placeholder {\n    color: #999;\n}\n.form-control::-ms-expand {\n    border: 0;\n    background-color: transparent;\n}\n.form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #e3e4e6;\n    opacity: 1;\n}\n.form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\ninput[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n}\ninput[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n}\ninput[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n}\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n.form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0;\n}\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 1px;\n}\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 1px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 3px;\n}\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 3px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n    padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control:focus {\n    border-color: #2b542c;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #87fed2;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-warning .form-control:focus {\n    border-color: #66512c;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fdf3e4;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #F13C3F;\n}\n.has-error .form-control {\n  border-color: #F13C3F;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control:focus {\n    border-color: #e91114;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #f89b9d;\n}\n.has-error .input-group-addon {\n  color: #F13C3F;\n  border-color: #F13C3F;\n  background-color: #fde7e8;\n}\n.has-error .form-control-feedback {\n  color: #F13C3F;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #6b6f79;\n}\n@media (min-width: 768px) {\n.form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n}\n.form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n}\n.form-inline .form-control-static {\n    display: inline-block;\n}\n.form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n}\n.form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto;\n}\n.form-inline .input-group > .form-control {\n    width: 100%;\n}\n.form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n}\n.form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n}\n.form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0;\n}\n.form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n}\n.form-inline .has-feedback .form-control-feedback {\n    top: 0;\n}\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table;\n}\n.form-horizontal .form-group:after {\n    clear: both;\n}\n@media (min-width: 768px) {\n.form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n}\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n.form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n}\n}\n@media (min-width: 768px) {\n.form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n}\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.btn:hover, .btn:focus, .btn.focus {\n    color: #2f3135;\n    text-decoration: none;\n}\n.btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #2f3135;\n  background-color: rgba(255, 255, 255, 0);\n  border-color: #2f3135;\n}\n.btn-default:focus, .btn-default.focus {\n    color: #2f3135;\n    background-color: rgba(230, 230, 230, 0);\n    border-color: black;\n}\n.btn-default:hover {\n    color: #2f3135;\n    background-color: rgba(230, 230, 230, 0);\n    border-color: #121315;\n}\n.btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #2f3135;\n    background-color: rgba(230, 230, 230, 0);\n    border-color: #121315;\n}\n.btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #2f3135;\n      background-color: rgba(212, 212, 212, 0);\n      border-color: black;\n}\n.btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none;\n}\n.btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: rgba(255, 255, 255, 0);\n    border-color: #2f3135;\n}\n.btn-default .badge {\n    color: rgba(255, 255, 255, 0);\n    background-color: #2f3135;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #2f3135;\n  border-color: #232428;\n}\n.btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #17181a;\n    border-color: black;\n}\n.btn-primary:hover {\n    color: #fff;\n    background-color: #17181a;\n    border-color: #060707;\n}\n.btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #17181a;\n    border-color: #060707;\n}\n.btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #060707;\n      border-color: black;\n}\n.btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none;\n}\n.btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #2f3135;\n    border-color: #232428;\n}\n.btn-primary .badge {\n    color: #2f3135;\n    background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #01CD81;\n  border-color: #01b471;\n}\n.btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #019a61;\n    border-color: #003521;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #019a61;\n    border-color: #01774b;\n}\n.btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #019a61;\n    border-color: #01774b;\n}\n.btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #01774b;\n      border-color: #003521;\n}\n.btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none;\n}\n.btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #01CD81;\n    border-color: #01b471;\n}\n.btn-success .badge {\n    color: #01CD81;\n    background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #1595BC;\n  border-color: #1283a5;\n}\n.btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #10718e;\n    border-color: #062832;\n}\n.btn-info:hover {\n    color: #fff;\n    background-color: #10718e;\n    border-color: #0c576e;\n}\n.btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #10718e;\n    border-color: #0c576e;\n}\n.btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #0c576e;\n      border-color: #062832;\n}\n.btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none;\n}\n.btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #1595BC;\n    border-color: #1283a5;\n}\n.btn-info .badge {\n    color: #1595BC;\n    background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d;\n}\n.btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512;\n}\n.btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512;\n}\n.btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d;\n}\n.btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none;\n}\n.btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236;\n}\n.btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #F13C3F;\n  border-color: #ef2428;\n}\n.btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #e91114;\n    border-color: #8a0a0c;\n}\n.btn-danger:hover {\n    color: #fff;\n    background-color: #e91114;\n    border-color: #c80e11;\n}\n.btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #e91114;\n    border-color: #c80e11;\n}\n.btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #c80e11;\n      border-color: #8a0a0c;\n}\n.btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none;\n}\n.btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #F13C3F;\n    border-color: #ef2428;\n}\n.btn-danger .badge {\n    color: #F13C3F;\n    background-color: #fff;\n}\n.btn-link {\n  color: #01CD81;\n  font-weight: normal;\n  border-radius: 0;\n}\n.btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    box-shadow: none;\n}\n.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent;\n}\n.btn-link:hover, .btn-link:focus {\n    color: #018151;\n    text-decoration: underline;\n    background-color: transparent;\n}\n.btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #898d96;\n    text-decoration: none;\n}\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 3px;\n}\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 1px;\n}\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 1px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.fade.in {\n    opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n    display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-property: height, visibility;\n  transition-duration: 0.35s;\n  transition-timing-function: ease;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu.pull-right {\n    right: 0;\n    left: auto;\n}\n.dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #2f3135;\n    white-space: nowrap;\n}\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #232428;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #01CD81;\n}\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #898d96;\n}\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #898d96;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n.navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n}\n.navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n}\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left;\n}\n.btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table;\n}\n.btn-toolbar:after {\n    clear: both;\n}\n.btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left;\n}\n.btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n    box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n    width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n    left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0;\n}\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0;\n}\n.input-group .form-control:focus {\n      z-index: 3;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #404248;\n  text-align: center;\n  background-color: #e3e4e6;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n}\n.input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 1px;\n}\n.input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 3px;\n}\n.input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n    position: relative;\n}\n.input-group-btn > .btn + .btn {\n      margin-left: -1px;\n}\n.input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px;\n}\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.nav:before, .nav:after {\n    content: \" \";\n    display: table;\n}\n.nav:after {\n    clear: both;\n}\n.nav > li {\n    position: relative;\n    display: block;\n}\n.nav > li > a {\n      position: relative;\n      display: block;\n      padding: 6px 16px;\n}\n.nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: rgba(255, 255, 255, 0.2);\n}\n.nav > li.disabled > a {\n      color: #898d96;\n}\n.nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #898d96;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed;\n}\n.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-color: #01CD81;\n}\n.nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5;\n}\n.nav > li > a > img {\n    max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #fff;\n}\n.nav-tabs > li {\n    float: left;\n    margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 0px 0px 0 0;\n}\n.nav-tabs > li > a:hover {\n        border-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) #fff;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #2f3135;\n      background-color: #fff;\n      border: 1px solid transparent;\n      border-bottom-color: transparent;\n      cursor: default;\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n    border-radius: 0px;\n}\n.nav-pills > li + li {\n    margin-left: 2px;\n}\n.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #01CD81;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0;\n}\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%;\n}\n.nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none;\n}\n.nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px;\n}\n.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto;\n}\n@media (min-width: 768px) {\n.nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%;\n}\n.nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0;\n}\n}\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 0px;\n}\n.nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n.nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 0px 0px 0 0;\n}\n.nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff;\n}\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n.navbar:before, .navbar:after {\n    content: \" \";\n    display: table;\n}\n.navbar:after {\n    clear: both;\n}\n@media (min-width: 768px) {\n.navbar {\n      border-radius: 0px;\n}\n}\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table;\n}\n.navbar-header:after {\n  clear: both;\n}\n@media (min-width: 768px) {\n.navbar-header {\n    float: left;\n}\n}\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table;\n}\n.navbar-collapse:after {\n    clear: both;\n}\n.navbar-collapse.in {\n    overflow-y: auto;\n}\n@media (min-width: 768px) {\n.navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none;\n}\n.navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important;\n}\n.navbar-collapse.in {\n        overflow-y: visible;\n}\n.navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0;\n}\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n.navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px;\n}\n}\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n.container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0;\n}\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n.navbar-static-top {\n      border-radius: 0;\n}\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n.navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0;\n}\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none;\n}\n.navbar-brand > img {\n    display: block;\n}\n@media (min-width: 768px) {\n.navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px;\n}\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0px;\n}\n.navbar-toggle:focus {\n    outline: 0;\n}\n.navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px;\n}\n@media (min-width: 768px) {\n.navbar-toggle {\n      display: none;\n}\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px;\n}\n@media (max-width: 767px) {\n.navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none;\n}\n.navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px;\n}\n.navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px;\n}\n.navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none;\n}\n}\n@media (min-width: 768px) {\n.navbar-nav {\n      float: left;\n      margin: 0;\n}\n.navbar-nav > li {\n        float: left;\n}\n.navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px;\n}\n}\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@media (min-width: 768px) {\n.navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle;\n}\n.navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n}\n.navbar-form .form-control-static {\n      display: inline-block;\n}\n.navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle;\n}\n.navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto;\n}\n.navbar-form .input-group > .form-control {\n      width: 100%;\n}\n.navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle;\n}\n.navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle;\n}\n.navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0;\n}\n.navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0;\n}\n.navbar-form .has-feedback .form-control-feedback {\n      top: 0;\n}\n}\n@media (max-width: 767px) {\n.navbar-form .form-group {\n      margin-bottom: 5px;\n}\n.navbar-form .form-group:last-child {\n        margin-bottom: 0;\n}\n}\n@media (min-width: 768px) {\n.navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      box-shadow: none;\n}\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n.navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px;\n}\n}\n@media (min-width: 768px) {\n.navbar-left {\n    float: left !important;\n}\n.navbar-right {\n    float: right !important;\n    margin-right: -15px;\n}\n.navbar-right ~ .navbar-right {\n      margin-right: 0;\n}\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n    color: #777;\n}\n.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent;\n}\n.navbar-default .navbar-text {\n    color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n    color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n    border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n      background-color: #888;\n}\n.navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555;\n}\n@media (max-width: 767px) {\n.navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777;\n}\n.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent;\n}\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent;\n}\n}\n.navbar-default .navbar-link {\n    color: #777;\n}\n.navbar-default .navbar-link:hover {\n      color: #333;\n}\n.navbar-default .btn-link {\n    color: #777;\n}\n.navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333;\n}\n.navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n.navbar-inverse .navbar-brand {\n    color: #b1b4ba;\n}\n.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n    color: #b1b4ba;\n}\n.navbar-inverse .navbar-nav > li > a {\n    color: #b1b4ba;\n}\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n}\n.navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n    border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff;\n}\n@media (max-width: 767px) {\n.navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909;\n}\n.navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909;\n}\n.navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #b1b4ba;\n}\n.navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent;\n}\n.navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909;\n}\n.navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent;\n}\n}\n.navbar-inverse .navbar-link {\n    color: #b1b4ba;\n}\n.navbar-inverse .navbar-link:hover {\n      color: #fff;\n}\n.navbar-inverse .btn-link {\n    color: #b1b4ba;\n}\n.navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 0px;\n}\n.breadcrumb > li {\n    display: inline-block;\n}\n.breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc;\n}\n.breadcrumb > .active {\n    color: #898d96;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 0px;\n}\n.pagination > li {\n    display: inline;\n}\n.pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #01CD81;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px;\n}\n.pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 0px;\n}\n.pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 0px;\n      border-top-right-radius: 0px;\n}\n.pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #018151;\n    background-color: #e3e4e6;\n    border-color: #ddd;\n}\n.pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #01CD81;\n    border-color: #01CD81;\n    cursor: default;\n}\n.pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #898d96;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 1px;\n  border-top-left-radius: 1px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 1px;\n  border-top-right-radius: 1px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n.pager:before, .pager:after {\n    content: \" \";\n    display: table;\n}\n.pager:after {\n    clear: both;\n}\n.pager li {\n    display: inline;\n}\n.pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px;\n}\n.pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #e3e4e6;\n}\n.pager .next > a,\n  .pager .next > span {\n    float: right;\n}\n.pager .previous > a,\n  .pager .previous > span {\n    float: left;\n}\n.pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #898d96;\n    background-color: #fff;\n    cursor: not-allowed;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n.label:empty {\n    display: none;\n}\n.btn .label {\n    position: relative;\n    top: -1px;\n}\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label-default {\n  background-color: #898d96;\n}\n.label-default[href]:hover, .label-default[href]:focus {\n    background-color: #6f747d;\n}\n.label-primary {\n  background-color: #01CD81;\n}\n.label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #019a61;\n}\n.label-success {\n  background-color: #01CD81;\n}\n.label-success[href]:hover, .label-success[href]:focus {\n    background-color: #019a61;\n}\n.label-info {\n  background-color: #1595BC;\n}\n.label-info[href]:hover, .label-info[href]:focus {\n    background-color: #10718e;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f;\n}\n.label-danger {\n  background-color: #F13C3F;\n}\n.label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #e91114;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #898d96;\n  border-radius: 10px;\n}\n.badge:empty {\n    display: none;\n}\n.btn .badge {\n    position: relative;\n    top: -1px;\n}\n.btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px;\n}\n.list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #01CD81;\n    background-color: #fff;\n}\n.list-group-item > .badge {\n    float: right;\n}\n.list-group-item > .badge + .badge {\n    margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n    margin-left: 3px;\n}\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #e3e4e6;\n}\n.jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit;\n}\n.jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200;\n}\n.jumbotron > hr {\n    border-top-color: #c8cace;\n}\n.container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 3px;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.jumbotron .container {\n    max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n.jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px;\n}\n.container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px;\n}\n.jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px;\n}\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0px;\n  transition: border 0.2s ease-in-out;\n}\n.thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto;\n}\n.thumbnail .caption {\n    padding: 9px;\n    color: #2f3135;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #01CD81;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 0px;\n}\n.alert h4 {\n    margin-top: 0;\n    color: inherit;\n}\n.alert .alert-link {\n    font-weight: bold;\n}\n.alert > p,\n  .alert > ul {\n    margin-bottom: 0;\n}\n.alert > p + p {\n    margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n}\n.alert-success {\n  background-color: #87fed2;\n  border-color: #01CD81;\n  color: #3c763d;\n}\n.alert-success hr {\n    border-top-color: #01b471;\n}\n.alert-success .alert-link {\n    color: #2b542c;\n}\n.alert-info {\n  background-color: #95ddf3;\n  border-color: #1595BC;\n  color: #31708f;\n}\n.alert-info hr {\n    border-top-color: #1283a5;\n}\n.alert-info .alert-link {\n    color: #245269;\n}\n.alert-warning {\n  background-color: #fdf3e4;\n  border-color: #f0ad4e;\n  color: #8a6d3b;\n}\n.alert-warning hr {\n    border-top-color: #eea236;\n}\n.alert-warning .alert-link {\n    color: #66512c;\n}\n.alert-danger {\n  background-color: #fde7e8;\n  border-color: #F13C3F;\n  color: #F13C3F;\n}\n.alert-danger hr {\n    border-top-color: #ef2428;\n}\n.alert-danger .alert-link {\n    color: #e91114;\n}\n@keyframes progress-bar-stripes {\nfrom {\n    background-position: 40px 0;\n}\nto {\n    background-position: 0 0;\n}\n}\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 0px;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #01CD81;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  transition: width 0.6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #01CD81;\n}\n.progress-striped .progress-bar-success {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #1595BC;\n}\n.progress-striped .progress-bar-info {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #F13C3F;\n}\n.progress-striped .progress-bar-danger {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n    margin-top: 0;\n}\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n    max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n    border-top-right-radius: 0px;\n    border-top-left-radius: 0px;\n}\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333;\n}\na.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #e3e4e6;\n  color: #898d96;\n  cursor: not-allowed;\n}\n.list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit;\n}\n.list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #898d96;\n}\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #01CD81;\n  border-color: #01CD81;\n}\n.list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit;\n}\n.list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #9bffda;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #87fed2;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #6efec8;\n}\na.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #95ddf3;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #7ed6f1;\n}\na.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fdf3e4;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #fbe8cd;\n}\na.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #F13C3F;\n  background-color: #fde7e8;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #F13C3F;\n}\na.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit;\n}\na.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #F13C3F;\n    background-color: #fcd0d0;\n}\na.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #F13C3F;\n    border-color: #F13C3F;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #2f3135;\n  border: 1px solid transparent;\n  border-radius: 0px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table;\n}\n.panel-body:after {\n    clear: both;\n}\n.panel-heading {\n  padding: 16px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: -1px;\n  border-top-left-radius: -1px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n    color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit;\n}\n.panel-footer {\n  padding: 16px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: -1px;\n  border-bottom-left-radius: -1px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: -1px;\n    border-top-left-radius: -1px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: -1px;\n    border-bottom-left-radius: -1px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: -1px;\n  border-top-left-radius: -1px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: -1px;\n    border-top-right-radius: -1px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: -1px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: -1px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: -1px;\n  border-bottom-left-radius: -1px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: -1px;\n    border-bottom-right-radius: -1px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: -1px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: -1px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0;\n}\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 0px;\n}\n.panel-group .panel + .panel {\n      margin-top: 5px;\n}\n.panel-group .panel-heading {\n    border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n    border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #2f3135;\n}\n.panel-default > .panel-heading {\n    color: #fff;\n    background-color: transparent;\n    border-color: #2f3135;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #2f3135;\n}\n.panel-default > .panel-heading .badge {\n      color: transparent;\n      background-color: #fff;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #2f3135;\n}\n.panel-primary {\n  border-color: #01CD81;\n}\n.panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #01CD81;\n    border-color: #01CD81;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #01CD81;\n}\n.panel-primary > .panel-heading .badge {\n      color: #01CD81;\n      background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #01CD81;\n}\n.panel-success {\n  border-color: #01CD81;\n}\n.panel-success > .panel-heading {\n    color: #2f3135;\n    background-color: #87fed2;\n    border-color: #01CD81;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #01CD81;\n}\n.panel-success > .panel-heading .badge {\n      color: #87fed2;\n      background-color: #2f3135;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #01CD81;\n}\n.panel-info {\n  border-color: #1595BC;\n}\n.panel-info > .panel-heading {\n    color: #2f3135;\n    background-color: #95ddf3;\n    border-color: #1595BC;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #1595BC;\n}\n.panel-info > .panel-heading .badge {\n      color: #95ddf3;\n      background-color: #2f3135;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #1595BC;\n}\n.panel-warning {\n  border-color: #f0ad4e;\n}\n.panel-warning > .panel-heading {\n    color: #2f3135;\n    background-color: #fdf3e4;\n    border-color: #f0ad4e;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #f0ad4e;\n}\n.panel-warning > .panel-heading .badge {\n      color: #fdf3e4;\n      background-color: #2f3135;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #f0ad4e;\n}\n.panel-danger {\n  border-color: #F13C3F;\n}\n.panel-danger > .panel-heading {\n    color: #2f3135;\n    background-color: #fde7e8;\n    border-color: #F13C3F;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #F13C3F;\n}\n.panel-danger > .panel-heading .badge {\n      color: #fde7e8;\n      background-color: #2f3135;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #F13C3F;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 0px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 3px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 1px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n}\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n    -ms-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    transition: transform 0.3s ease-out;\n}\n.modal.in .modal-dialog {\n    -ms-transform: translate(0, 0);\n    transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n.modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table;\n}\n.modal-header:after {\n    clear: both;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table;\n}\n.modal-footer:after {\n    clear: both;\n}\n.modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0;\n}\n.modal-footer .btn-group .btn + .btn {\n    margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n    margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n.modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n}\n.modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n}\n.modal-sm {\n    width: 300px;\n}\n}\n@media (min-width: 992px) {\n.modal-lg {\n    width: 900px;\n}\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: frictionlessdata, Raleway, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90);\n}\n.tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0;\n}\n.tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px;\n}\n.tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0;\n}\n.tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: frictionlessdata, Raleway, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #2f3135;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.popover.top {\n    margin-top: -10px;\n}\n.popover.right {\n    margin-left: 10px;\n}\n.popover.bottom {\n    margin-top: 10px;\n}\n.popover.left {\n    margin-left: -10px;\n}\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #28292d;\n  border-bottom: 1px solid #1c1d1f;\n  border-radius: 2px 2px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  bottom: -11px;\n}\n.popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #2f3135;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.05);\n}\n.popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #2f3135;\n}\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.05);\n  top: -11px;\n}\n.popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #2f3135;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.05);\n}\n.popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #2f3135;\n    bottom: -10px;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-inner > .item {\n    display: none;\n    position: relative;\n    transition: 0.6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n.carousel-inner > .item {\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        perspective: 1000px;\n}\n.carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          transform: translate3d(100%, 0, 0);\n          left: 0;\n}\n.carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          transform: translate3d(-100%, 0, 0);\n          left: 0;\n}\n.carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          transform: translate3d(0, 0, 0);\n          left: 0;\n}\n}\n.carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block;\n}\n.carousel-inner > .active {\n    left: 0;\n}\n.carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.carousel-inner > .next {\n    left: 100%;\n}\n.carousel-inner > .prev {\n    left: -100%;\n}\n.carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0;\n}\n.carousel-inner > .active.left {\n    left: -100%;\n}\n.carousel-inner > .active.right {\n    left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent;\n}\n.carousel-control.left {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n.carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n.carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90);\n}\n.carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block;\n}\n.carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px;\n}\n.carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px;\n}\n.carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif;\n}\n.carousel-control .icon-prev:before {\n    content: '\\2039';\n}\n.carousel-control .icon-next:before {\n    content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent;\n}\n.carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-caption .btn {\n    text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n.carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n}\n.carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n}\n.carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n}\n.carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n}\n.carousel-indicators {\n    bottom: 20px;\n}\n}\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs {\n  display: none !important;\n}\n.visible-sm {\n  display: none !important;\n}\n.visible-md {\n  display: none !important;\n}\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n.visible-xs {\n    display: block !important;\n}\ntable.visible-xs {\n    display: table !important;\n}\ntr.visible-xs {\n    display: table-row !important;\n}\nth.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n}\n}\n@media (max-width: 767px) {\n.visible-xs-block {\n    display: block !important;\n}\n}\n@media (max-width: 767px) {\n.visible-xs-inline {\n    display: inline !important;\n}\n}\n@media (max-width: 767px) {\n.visible-xs-inline-block {\n    display: inline-block !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.visible-sm {\n    display: block !important;\n}\ntable.visible-sm {\n    display: table !important;\n}\ntr.visible-sm {\n    display: table-row !important;\n}\nth.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.visible-sm-block {\n    display: block !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.visible-sm-inline {\n    display: inline !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.visible-sm-inline-block {\n    display: inline-block !important;\n}\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n.visible-md {\n    display: block !important;\n}\ntable.visible-md {\n    display: table !important;\n}\ntr.visible-md {\n    display: table-row !important;\n}\nth.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n}\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n.visible-md-block {\n    display: block !important;\n}\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n.visible-md-inline {\n    display: inline !important;\n}\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n.visible-md-inline-block {\n    display: inline-block !important;\n}\n}\n@media (min-width: 1200px) {\n.visible-lg {\n    display: block !important;\n}\ntable.visible-lg {\n    display: table !important;\n}\ntr.visible-lg {\n    display: table-row !important;\n}\nth.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n}\n}\n@media (min-width: 1200px) {\n.visible-lg-block {\n    display: block !important;\n}\n}\n@media (min-width: 1200px) {\n.visible-lg-inline {\n    display: inline !important;\n}\n}\n@media (min-width: 1200px) {\n.visible-lg-inline-block {\n    display: inline-block !important;\n}\n}\n@media (max-width: 767px) {\n.hidden-xs {\n    display: none !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.hidden-sm {\n    display: none !important;\n}\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n.hidden-md {\n    display: none !important;\n}\n}\n@media (min-width: 1200px) {\n.hidden-lg {\n    display: none !important;\n}\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n.visible-print {\n    display: block !important;\n}\ntable.visible-print {\n    display: table !important;\n}\ntr.visible-print {\n    display: table-row !important;\n}\nth.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n}\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n.visible-print-block {\n      display: block !important;\n}\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n.visible-print-inline {\n      display: inline !important;\n}\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n.visible-print-inline-block {\n      display: inline-block !important;\n}\n}\n@media print {\n.hidden-print {\n    display: none !important;\n}\n}\n@font-face {\n  font-family: 'icomoon';\n  src: url(" + __webpack_require__(56) + ");\n  src: url(" + __webpack_require__(56) + "#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(132) + ") format(\"truetype\"), url(" + __webpack_require__(133) + ") format(\"woff\"), url(" + __webpack_require__(131) + "#icomoon) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  position: relative;\n  top: 0.1em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-keyboard_arrow_down:before {\n  content: \"\\E907\";\n}\n.icon-keyboard_arrow_right:before {\n  content: \"\\E904\";\n}\n.icon-keyboard_arrow_left:before {\n  content: \"\\E903\";\n}\n.icon-shield:before {\n  content: \"\\E905\";\n}\n.icon-mouse-pointer:before {\n  content: \"\\E908\";\n}\n.icon-enter:before {\n  content: \"\\E909\";\n}\n.icon-signin:before {\n  content: \"\\E909\";\n}\n.icon-login:before {\n  content: \"\\E909\";\n}\n.icon-goodtables:before {\n  content: \"\\E906\";\n}\n.icon-exit:before {\n  content: \"\\E902\";\n}\n.icon-signout:before {\n  content: \"\\E902\";\n}\n.icon-logout:before {\n  content: \"\\E902\";\n}\n.icon-quit:before {\n  content: \"\\E902\";\n}\n.icon-close:before {\n  content: \"\\E902\";\n}\n.icon-clock:before {\n  content: \"\\E94E\";\n}\n.icon-spinner11:before {\n  content: \"\\E984\";\n}\n.icon-equalizer:before {\n  content: \"\\E992\";\n}\n.icon-plus:before {\n  content: \"\\EA0A\";\n}\n.icon-info:before {\n  content: \"\\EA0C\";\n}\n.icon-cross:before {\n  content: \"\\EA0F\";\n}\n.icon-checkmark:before {\n  content: \"\\EA10\";\n}\n.icon-amazon:before {\n  content: \"\\EA87\";\n}\n.icon-github:before {\n  content: \"\\EAB0\";\n}\n.icon-grid:before {\n  content: \"\\E900\";\n}\n.icon-list:before {\n  content: \"\\E901\";\n}\n@font-face {\n  font-family: frictionlessdata;\n  src: url(" + __webpack_require__(137) + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: frictionlessdata;\n  src: url(" + __webpack_require__(136) + ") format(\"truetype\");\n  font-style: italic;\n  font-weight: 400;\n}\n@font-face {\n  font-family: frictionlessdata;\n  src: url(" + __webpack_require__(135) + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: 500;\n}\n@font-face {\n  font-family: frictionlessdata;\n  src: url(" + __webpack_require__(138) + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: 600;\n}\n@font-face {\n  font-family: frictionlessdata;\n  src: url(" + __webpack_require__(134) + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: 700;\n}\nbody {\n  font-feature-settings: \"lnum\" 1;\n  text-rendering: optimizeLegibility;\n}\n.nav > li > a [class^=\"icon-\"]:first-child, .nav > li > a [class*=\" icon-\"]:first-child {\n  margin-right: 8px;\n}\n.nav-stacked > li + li {\n  margin: 0;\n}\n.nav-tabs > li > a {\n  padding: 10px 15px;\n  color: #2f3135;\n}\n.panel {\n  overflow: hidden;\n  box-shadow: none;\n  border-width: 0;\n}\n.panel .github,\n  .panel .aws {\n    position: relative;\n}\n.panel .github .integration,\n    .panel .aws .integration {\n      position: absolute;\n      top: 1px;\n      right: 0;\n      font-size: 15px;\n      text-decoration: none;\n      padding: 11px 10px;\n}\n.panel.source-item {\n    white-space: nowrap;\n    border-width: 0;\n}\n.panel.source-item .label {\n      margin-right: 10px;\n}\n.panel.source-item .panel-title {\n      display: inline-block;\n      font-weight: 600;\n}\n.panel.source-item .source,\n    .panel.source-item .job {\n      display: block;\n      text-decoration: none;\n}\n@media screen and (min-width: 768px) {\n.panel.source-item .source.active,\n        .panel.source-item .job.active {\n          color: #fff;\n          background-color: #f0ad4e;\n          border-color: #f0ad4e;\n}\n}\n.panel.source-item .source {\n      padding: 10px;\n}\n.panel.source-item .job {\n      border-top: solid 1px #25272a;\n      padding: 3px 10px;\n      font-size: 12px;\n      font-weight: 500;\n}\n.panel.source-item .job .jobcount {\n        float: right;\n}\n@media screen and (min-width: 768px) {\n.panel.source-item.panel-success .source,\n      .panel.source-item.panel-success .job {\n        display: block;\n}\n.panel.source-item.panel-success .source.active,\n        .panel.source-item.panel-success .job.active {\n          background-color: #01CD81;\n          border-color: #01CD81;\n}\n.panel.source-item.panel-success .source.active .label {\n        background-color: #fff;\n        color: #01CD81;\n}\n}\n@media screen and (min-width: 768px) and (min-width: 768px) {\n.panel.source-item.panel-success .source.active + .job.active {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n@media screen and (min-width: 768px) {\n.panel.source-item.panel-success .source.active ~ .integration {\n        color: rgba(255, 255, 255, 0.8);\n        background-image: linear-gradient(to right, rgba(1, 205, 129, 0) 0%, #01CD81 25%);\n        background-repeat: repeat-x;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0001CD81', endColorstr='#FF01CD81', GradientType=1);\n}\n.panel.source-item.panel-success .source.active ~ .integration:hover {\n          color: #fff;\n}\n}\n.source-view .panel.source-item.panel-success .source,\n    .source-view .panel.source-item.panel-success .job {\n      display: block;\n}\n.source-view .panel.source-item.panel-success .source.active,\n      .source-view .panel.source-item.panel-success .job.active {\n        background-color: #01CD81;\n        border-color: #01CD81;\n}\n.source-view .panel.source-item.panel-success .source.active .label {\n      background-color: #fff;\n      color: #01CD81;\n}\n@media screen and (min-width: 768px) {\n.source-view .panel.source-item.panel-success .source.active + .job.active {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n.source-view .panel.source-item.panel-success .source.active ~ .integration {\n      color: rgba(255, 255, 255, 0.8);\n      background-image: linear-gradient(to right, rgba(1, 205, 129, 0) 0%, #01CD81 25%);\n      background-repeat: repeat-x;\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0001CD81', endColorstr='#FF01CD81', GradientType=1);\n}\n.source-view .panel.source-item.panel-success .source.active ~ .integration:hover {\n        color: #fff;\n}\n@media screen and (min-width: 768px) {\n.panel.source-item.panel-danger .source,\n      .panel.source-item.panel-danger .job {\n        display: block;\n}\n.panel.source-item.panel-danger .source.active,\n        .panel.source-item.panel-danger .job.active {\n          background-color: #F13C3F;\n          border-color: #F13C3F;\n}\n.panel.source-item.panel-danger .source.active .label {\n        background-color: #fff;\n        color: #F13C3F;\n}\n}\n@media screen and (min-width: 768px) and (min-width: 768px) {\n.panel.source-item.panel-danger .source.active + .job.active {\n    border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n@media screen and (min-width: 768px) {\n.panel.source-item.panel-danger .source.active ~ .integration {\n        color: rgba(255, 255, 255, 0.8);\n        background-image: linear-gradient(to right, rgba(241, 60, 63, 0) 0%, #F13C3F 25%);\n        background-repeat: repeat-x;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00F13C3F', endColorstr='#FFF13C3F', GradientType=1);\n}\n.panel.source-item.panel-danger .source.active ~ .integration:hover {\n          color: #fff;\n}\n}\n.source-view .panel.source-item.panel-danger .source,\n    .source-view .panel.source-item.panel-danger .job {\n      display: block;\n}\n.source-view .panel.source-item.panel-danger .source.active,\n      .source-view .panel.source-item.panel-danger .job.active {\n        background-color: #F13C3F;\n        border-color: #F13C3F;\n}\n.source-view .panel.source-item.panel-danger .source.active .label {\n      background-color: #fff;\n      color: #F13C3F;\n}\n@media screen and (min-width: 768px) {\n.source-view .panel.source-item.panel-danger .source.active + .job.active {\n        border-top-color: rgba(255, 255, 255, 0.2);\n}\n}\n.source-view .panel.source-item.panel-danger .source.active ~ .integration {\n      color: rgba(255, 255, 255, 0.8);\n      background-image: linear-gradient(to right, rgba(241, 60, 63, 0) 0%, #F13C3F 25%);\n      background-repeat: repeat-x;\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00F13C3F', endColorstr='#FFF13C3F', GradientType=1);\n}\n.source-view .panel.source-item.panel-danger .source.active ~ .integration:hover {\n        color: #fff;\n}\n@media screen and (min-width: 768px) {\n.panel.source-item.active {\n        background-color: #fff;\n        color: #2f3135;\n        border-left-width: 5px;\n}\n.panel.source-item.active .source:not(.active):hover,\n        .panel.source-item.active .job:not(.active):hover {\n          background-color: inherit;\n}\n.panel.source-item.active .source:hover ~ .integration {\n          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 25%);\n          background-repeat: repeat-x;\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00FFFFFF', endColorstr='#FFFFFFFF', GradientType=1);\n}\n.panel.source-item.active .integration {\n          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 25%);\n          background-repeat: repeat-x;\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00FFFFFF', endColorstr='#FFFFFFFF', GradientType=1);\n          color: rgba(47, 49, 53, 0.8);\n}\n.panel.source-item.active .integration:hover {\n            color: #2f3135;\n}\n.panel.source-item.active.panel-success .source.active:hover ~ .integration {\n          background-image: linear-gradient(to right, rgba(1, 205, 129, 0) 0%, #01CD81 25%);\n          background-repeat: repeat-x;\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0001CD81', endColorstr='#FF01CD81', GradientType=1);\n}\n.panel.source-item.active.panel-danger .source.active:hover ~ .integration {\n          background-image: linear-gradient(to right, rgba(241, 60, 63, 0) 0%, #F13C3F 25%);\n          background-repeat: repeat-x;\n          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00F13C3F', endColorstr='#FFF13C3F', GradientType=1);\n}\n}\n.panel .table {\n    font-size: 11px;\n    background-color: #fff;\n}\n.panel .table:last-child {\n      margin-bottom: 0;\n}\n.panel .table .result-header-row {\n      font-weight: 600;\n}\n.panel .table .result-row-index {\n      font-weight: normal;\n      width: 1em;\n}\n.panel.result .panel-heading {\n    text-align: right;\n    font-size: 15px;\n    line-height: 1.2;\n}\n.panel.result .panel-heading:before, .panel.result .panel-heading:after {\n      content: \" \";\n      display: table;\n}\n.panel.result .panel-heading:after {\n      clear: both;\n}\n.panel.result .panel-heading .label,\n    .panel.result .panel-heading .panel-title {\n      float: left;\n      margin-right: 0.5em;\n}\n.panel.result .panel-heading .count {\n      background-color: #fff;\n      color: currentColor;\n}\n.panel.result .panel-heading .panel-title {\n      font-size: inherit;\n}\n.panel.result .panel-heading .panel-title small {\n        font-size: 14px;\n}\n.panel.result .panel-heading .help {\n      font-size: 12px;\n}\n.panel.result .popover {\n    font-size: 13px;\n}\n.panel.result .popover .label {\n      float: right;\n      margin-left: 0.5em;\n      margin-right: 0;\n}\n.panel-body {\n  background-color: #fff;\n  color: #2f3135;\n}\n.panel-danger .panel-body {\n    background-color: #fef6f6;\n}\n.panel-warning .panel-body {\n    background-color: #fef9f3;\n}\n.btn {\n  border-width: 0.25em;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.label {\n  padding: .3em .6em;\n}\n.popover {\n  color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.popover svg {\n    fill: #fff;\n}\n.popover .btn {\n    border-color: #fff;\n    background-color: #fff;\n    color: #2f3135;\n}\n.popover .btn.btn-default {\n      color: #fff;\n      background-color: rgba(47, 49, 53, 0);\n}\n.main-header {\n  background-color: #1595BC;\n  color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-image: linear-gradient(to right, #1595BC 0%, #01CD81 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1595BC', endColorstr='#FF01CD81', GradientType=1);\n}\n.main-header svg {\n    fill: #fff;\n}\n.main-header .btn {\n    border-color: #fff;\n    background-color: #fff;\n    color: #1595BC;\n}\n.main-header .btn.btn-default {\n      color: #fff;\n      background-color: rgba(21, 149, 188, 0);\n}\n.main-header .inner {\n    background-image: linear-gradient(to right, #1595BC 0%, rgba(1, 205, 129, 0) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1595BC', endColorstr='#0001CD81', GradientType=1);\n}\n.main-header .logo {\n    display: block;\n    width: 200px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    box-sizing: content-box;\n}\n.pattern {\n  background-image: url(" + __webpack_require__(130) + ");\n  background-size: 135px 135px;\n  background-position: top center;\n}\n.landing {\n  overflow-x: hidden;\n}\n.landing .container {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.landing .next {\n    position: absolute;\n    bottom: 4vh;\n    display: block;\n    width: 100%;\n    left: 0;\n    color: inherit;\n    text-decoration: none;\n}\n.landing .next h1 {\n      font-weight: 600;\n      font-size: 2em;\n      margin-bottom: 5vh;\n      opacity: 0.9;\n      padding-left: 30px;\n      padding-right: 30px;\n}\n.landing .next h1 strong {\n        font-weight: 700;\n}\n.landing .next h1 small {\n        color: inherit;\n        font-weight: 600;\n}\n.landing .next > span {\n      font-size: 2em;\n      opacity: 0.9;\n}\n.landing .next:hover > span {\n      opacity: 1;\n}\n.landing .main-header {\n    text-align: center;\n}\n.landing .main-header .inner > div {\n      min-height: 100vh;\n}\n.landing .main-header a {\n      text-decoration: none;\n}\n.landing .main-header .main-nav {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      text-align: right;\n}\n.landing .main-header .main-nav .logo {\n        float: left;\n}\n.landing .main-header .main-nav nav {\n        padding-top: 30px;\n}\n.landing .main-header .main-nav nav a {\n          color: inherit;\n          opacity: 0.9;\n}\n.landing .main-header .main-nav nav a .link-icon {\n            font-size: 2.5em;\n            top: 0;\n            float: right;\n}\n@media screen and (min-width: 992px) {\n.landing .main-header .main-nav nav a .link-icon {\n                display: none;\n}\n}\n.landing .main-header .main-nav nav a .link-text {\n            display: none;\n}\n@media screen and (min-width: 992px) {\n.landing .main-header .main-nav nav a .link-text {\n                display: inline-block;\n                font-size: 1.2em;\n                font-weight: 600;\n                border: solid 4px #fff;\n                padding: 0.2em 1em;\n                margin-left: 0.5em;\n}\n}\n.landing .main-header .main-nav nav a:hover {\n            opacity: 1;\n}\n.landing .main-header .source-item {\n      animation-duration: 0.7s;\n      animation-fill-mode: both;\n      animation-name: bounceInRight;\n      text-align: left;\n      font-size: 8vmin;\n      border-radius: 0.1em 0 0 0.1em;\n      width: 100vw;\n      margin-top: 33vh;\n}\n@keyframes bounceInRight {\nfrom, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\nfrom {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n}\n60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n}\n75% {\n    transform: translate3d(10px, 0, 0);\n}\n90% {\n    transform: translate3d(-5px, 0, 0);\n}\nto {\n    transform: none;\n}\n}\n.landing .main-header .source-item .source {\n        padding: 0.6em 0.5em;\n}\n.landing .main-header .source-item .label {\n        font-size: 1em;\n        padding: .1em .45em;\n        border-radius: 0.1em;\n}\n.landing .main-header .source-item .panel-title {\n        display: inline-block;\n        font-size: 1em;\n        font-weight: 700;\n        margin-left: 0.3em;\n}\n.landing .main-header .source-item .job {\n        font-size: 1em;\n        padding: 0.2em 0.5em;\n        border-top-width: 0.07em;\n        line-height: 1.3;\n}\n.landing .main-header .source-item .job .icon-clock {\n          font-size: 0.7em;\n          top: 0em;\n          opacity: 0.7;\n}\n.landing .main-header .source-item .job .time {\n          font-size: 0.6em;\n          font-weight: 600;\n          position: relative;\n          top: -0.2em;\n          opacity: 0.7;\n          margin-left: 0.2em;\n}\n.landing .feature-list {\n    margin: 0;\n    padding: 0;\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.landing .feature-list:before, .landing .feature-list:after {\n      content: \" \";\n      display: table;\n}\n.landing .feature-list:after {\n      clear: both;\n}\n.landing .feature-list li {\n      display: block;\n      position: relative;\n      min-height: 1px;\n      padding-left: 15px;\n      padding-right: 15px;\n      margin-bottom: 5vh;\n}\n@media (min-width: 768px) {\n.landing .feature-list li {\n          float: left;\n          width: 33.33333%;\n}\n}\n.landing .feature-list li p {\n        font-size: 1.5em;\n        font-weight: 600;\n        max-width: 14em;\n        margin: 2vh auto 0 auto;\n}\n.landing .feature-list li > span {\n        display: inline-block;\n        width: 160px;\n        height: 160px;\n}\n.landing .feature-list li > span[class^=\"icon-\"] {\n          font-size: 160px;\n          top: 0;\n}\n.landing .feature-list li .wrapper {\n        background-color: #2f3135;\n        color: #fff;\n        border-radius: 50%;\n}\n.landing .feature-list li .wrapper [class^=\"icon-\"] {\n          display: block;\n          font-size: 120px;\n          top: 22px;\n}\n.landing .feature-list li.check .wrapper {\n        background-color: #01CD81;\n        background-image: linear-gradient(to bottom, #01CD81 0%, rgba(21, 149, 188, 0.3) 100%);\n        background-repeat: repeat-x;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF01CD81', endColorstr='#4D1595BC', GradientType=0);\n}\n.landing .feature-list li.validate [class^=\"icon-\"] {\n        font-size: 100px;\n        top: 34px;\n        left: 5px;\n}\n.landing .feature-list li.trust .wrapper {\n        background-color: #01CD81;\n        background-image: linear-gradient(to bottom, #01CD81 0%, rgba(21, 149, 188, 0.3) 100%);\n        background-repeat: repeat-x;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF01CD81', endColorstr='#4D1595BC', GradientType=0);\n}\n.landing .feature-list li.trust [class^=\"icon-\"] {\n        top: 28px;\n}\n.landing .feature-list li.quality .wrapper {\n        background-color: #01CD81;\n        background-image: linear-gradient(to bottom, #01CD81 0%, rgba(21, 149, 188, 0.3) 100%);\n        background-repeat: repeat-x;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF01CD81', endColorstr='#4D1595BC', GradientType=0);\n}\n.landing .feature-list li.quality [class^=\"icon-\"] {\n        font-size: 80px;\n        top: 18px;\n}\n.landing .feature-list li.quality [class^=\"icon-\"] + [class^=\"icon-\"] {\n          top: -12px;\n}\n.landing .features {\n    text-align: center;\n    position: relative;\n}\n.landing .features h2 {\n      font-weight: 600;\n      margin: 6vh 0;\n      font-size: 2em;\n}\n.landing .features .next {\n      display: none;\n}\n@media screen and (min-width: 992px) {\n.landing .features .container {\n        position: relative;\n        padding-top: 14vh;\n}\n.landing .features h2 {\n        position: absolute;\n        width: 100%;\n        top: 0;\n}\n.landing .features .content {\n        display: table;\n        height: 86vh;\n}\n.landing .features .content .inner {\n          display: table-cell;\n          vertical-align: middle;\n}\n}\n@media screen and (min-width: 992px) and (min-height: 640px) {\n.landing .features .next {\n        display: block;\n}\n}\n@media screen and (min-height: 820px) {\n.landing .features .feature-list li {\n        margin-bottom: 7vh;\n}\n}\n@media screen and (min-height: 840px) {\n.landing .features .feature-list li {\n        margin-bottom: 9vh;\n}\n}\n.landing .text {\n    background-color: #1595BC;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    line-height: 1.6;\n}\n.landing .text svg {\n      fill: #fff;\n}\n.landing .text .btn {\n      border-color: #fff;\n      background-color: #fff;\n      color: #01CD81;\n}\n.landing .text .btn.btn-default {\n        color: #fff;\n        background-color: rgba(1, 205, 129, 0);\n}\n.landing .text h2 {\n      font-weight: 600;\n      line-height: 1.4;\n      margin-bottom: 4vh;\n}\n.landing .text p {\n      font-size: 1.1em;\n}\n.landing .text .container {\n      display: table;\n      height: 100vh;\n}\n.landing .text .content,\n    .landing .text .cta {\n      display: table-row;\n}\n.landing .text .content .inner,\n      .landing .text .cta .inner {\n        display: table-cell;\n        vertical-align: middle;\n}\n.landing .text .content {\n      height: 99%;\n}\n.landing .text .content .inner {\n        padding-top: 1em;\n        padding-bottom: 1em;\n}\n.landing .text .cta {\n      height: 1%;\n      background-color: #01CD81;\n}\n.landing .text .cta h2 {\n        margin-bottom: 0;\n        font-size: 2em;\n}\n@media screen and (min-width: 768px) {\n.landing .text .cta h2 {\n            font-size: 2.4em;\n}\n}\n.landing .text .cta .btn {\n        font-size: 20px;\n        margin-top: 30px;\n}\n.landing .text .cta small {\n        margin-bottom: 22.5px;\n        line-height: 1.2;\n        display: block;\n}\n.landing .text .cta .inner {\n        position: relative;\n        z-index: 1;\n}\n.landing .text .cta .inner:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: -100vw;\n          width: 300vw;\n          background-color: #01CD81;\n          z-index: -1;\n}\n@media screen and (min-width: 768px) {\n.landing .text .btn {\n        float: right;\n        margin-left: 30px;\n}\n.landing .text h2 {\n        font-size: 34px;\n}\n.landing .text p {\n        font-size: 1.4em;\n}\n}\n@media screen and (min-width: 992px) {\n.landing .text h2 {\n        font-size: 38px;\n}\n}\n@media screen and (min-width: 992px) and (min-height: 820px) {\n.landing .text h2 {\n        font-size: 42px;\n}\n}\n.site-footer {\n  background-color: #2f3135;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 30px 0;\n  font-size: 14px;\n}\n.site-footer a {\n    color: rgba(255, 255, 255, 0.9);\n}\n.site-footer a:hover {\n      color: #fff;\n}\n.site-footer .footer-primary {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.site-footer .footer-primary:before, .site-footer .footer-primary:after {\n      content: \" \";\n      display: table;\n}\n.site-footer .footer-primary:after {\n      clear: both;\n}\n.site-footer .footer-primary .footer-logo {\n      position: relative;\n      min-height: 1px;\n      padding-left: 15px;\n      padding-right: 15px;\n      opacity: 0.9;\n}\n@media (min-width: 992px) {\n.site-footer .footer-primary .footer-logo {\n          float: left;\n          width: 16.66667%;\n}\n}\n.site-footer .footer-primary .footer-logo:hover {\n        opacity: 1;\n}\n.site-footer .footer-primary .footer-logo img {\n        width: 130px;\n        max-width: 100%;\n}\n.site-footer .footer-primary .footer-links {\n      margin: 10px;\n      padding: 0 5px;\n}\n@media (min-width: 992px) {\n.site-footer .footer-primary .footer-links {\n          position: relative;\n          min-height: 1px;\n          padding-left: 15px;\n          padding-right: 15px;\n          text-align: right;\n          margin: 0;\n}\n}\n@media (min-width: 992px) and (min-width: 992px) {\n.site-footer .footer-primary .footer-links {\n      float: left;\n      width: 83.33333%;\n}\n}\n.site-footer .footer-primary .footer-links li {\n        display: block;\n}\n@media (min-width: 992px) {\n.site-footer .footer-primary .footer-links li {\n            display: inline-block;\n            padding: 7px;\n}\n.site-footer .footer-primary .footer-links li:last-child {\n              padding-right: 0;\n}\n}\n.site-footer .footer-secondary {\n    font-size: 13px;\n    border-top: solid 1px rgba(255, 255, 255, 0.4);\n    margin-top: 15px;\n    padding-top: 15px;\n}\n.report .file-heading {\n  font-size: 13px;\n  font-weight: 500;\n  padding-bottom: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.report .file-heading span {\n    display: table;\n    width: 100%;\n}\n.report .file-heading span :last-child {\n      text-align: right;\n}\n.report .file-heading .file-count,\n  .report .file-heading .file-name {\n    display: table-cell;\n    color: #2f3135;\n    text-decoration: none;\n    height: 64px;\n    vertical-align: middle;\n}\n.report .file-heading .file-count:hover,\n    .report .file-heading .file-name:hover {\n      color: inherit;\n}\n.report .file-heading .file-name {\n    font-weight: 600;\n    font-size: 15px;\n}\n.report .panel + .file-heading {\n  margin-top: 30px;\n  border-top: solid 1px rgba(47, 49, 53, 0.3);\n}\n.default-view .file-heading span.stick {\n  position: fixed;\n  top: 0;\n  background-color: #fff;\n  z-index: 99;\n}\n.default-view .file-heading span.stick:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 1px;\n    left: -30px;\n    right: -30px;\n    background-color: #fff;\n    z-index: -1;\n    border-bottom: solid 1px #F13C3F;\n}\n.app {\n  overflow-x: hidden;\n}\n.app .default {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.app .default:before, .app .default:after {\n      content: \" \";\n      display: table;\n}\n.app .default:after {\n      clear: both;\n}\n@media screen and (min-width: 768px) {\n.app .default {\n        height: 100vh;\n        overflow: hidden;\n}\n}\n.app .main-nav {\n    overflow: hidden;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    transition: width 0.2s ease;\n    min-height: 100vh;\n}\n@media (min-width: 768px) {\n.app .main-nav {\n        float: left;\n        width: 33.33333%;\n}\n}\n@media screen and (min-width: 768px) {\n.app .main-nav {\n        height: 100vh;\n        padding-right: 0;\n}\n}\n.app .main-nav a {\n      color: inherit;\n}\n.app .main-nav .panel {\n      margin-bottom: 0;\n      border-radius: 0;\n}\n.app .main-nav .tab-pane:before, .app .main-nav .tab-pane:after {\n      content: \" \";\n      display: table;\n}\n.app .main-nav .tab-pane:after {\n      clear: both;\n}\n.app .main-nav .source-item {\n      margin-bottom: 4px;\n}\n.app .main-nav .source-item .status {\n        display: none;\n}\n.app .main-nav .source-item .panel-title .jobnumber {\n        display: none;\n}\n@media screen and (min-width: 768px) {\n.app .main-nav .source-item .source,\n        .app .main-nav .source-item .job {\n          border-right-style: solid;\n          border-right-width: 4px;\n}\n}\n.app .main-nav .source-item .job {\n        border-bottom: solid 0 #25272a;\n}\n.app .main-nav .source-item .job .jobtotal {\n          font: 0/0 a;\n          color: transparent;\n          text-shadow: none;\n          background-color: transparent;\n          border: 0;\n          display: block;\n}\n.app .main-nav .source-item:hover {\n        border-left-width: 5px;\n}\n.app .main-nav .source-item + .source-item .source {\n        border-top: solid 0 #25272a;\n}\n@media screen and (min-width: 768px) {\n.app .main-nav .source-item + .source-item.active .source {\n          border-top-color: #fff;\n}\n.app .main-nav .source-item + .source-item.active.panel-danger .source.active {\n          border-top-color: #F13C3F;\n          border-right-color: #F13C3F;\n}\n.app .main-nav .source-item + .source-item.active.panel-success .source.active {\n          border-top-color: #01CD81;\n          border-right-color: #01CD81;\n}\n}\n@media screen and (min-width: 768px) {\n.app .main-nav .source-item.active {\n          position: relative;\n}\n.app .main-nav .source-item.active .source {\n            border-right-color: #fff;\n}\n.app .main-nav .source-item.active:after {\n            content: '';\n            display: block;\n            width: 4px;\n            position: absolute;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            pointer-events: none;\n            background-color: rgba(0, 0, 0, 0.1);\n            z-index: 3;\n}\n}\n.app .main-nav .integration {\n      right: 4px;\n      padding-right: 8px;\n      top: 0;\n}\n@media screen and (min-width: 768px) {\n.app .main-nav:after {\n        content: '';\n        height: 50px;\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        pointer-events: none;\n}\n}\n.app .main-nav.invalid .main-header {\n      background-color: #F13C3F;\n}\n.app .source-view {\n    display: none;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    transition: width 0.2s ease;\n}\n@media (min-width: 768px) {\n.app .source-view {\n        float: left;\n        width: 66.66667%;\n}\n}\n@media screen and (min-width: 768px) {\n.app .source-view {\n        display: block;\n        padding-left: 0;\n}\n.app .source-view > div {\n          height: 100vh;\n          overflow-x: hidden;\n          overflow-y: auto;\n          position: relative;\n}\n}\n.app .source-view .main-header {\n      background-color: #01CD81;\n}\n.app .main-header {\n    height: 54px;\n    background-image: none;\n    position: relative;\n}\n@media screen and (min-width: 768px) {\n.app .main-header {\n        height: 64px;\n        box-shadow: inset -4px 0px 0px 0px rgba(0, 0, 0, 0.1);\n}\n}\n.app .main-header .logo {\n      padding: 15px 10px 0;\n      overflow: hidden;\n}\n.app .main-header .logo svg {\n        width: 150px;\n}\n@media screen and (min-width: 768px) {\n.app .main-header .logo {\n          display: none;\n}\n}\n.app .main-header .nav-tabs {\n      margin-right: 5px;\n      display: none;\n}\n@media screen and (min-width: 768px) {\n.app .main-header .nav-tabs {\n          display: block;\n          position: absolute;\n          width: 100%;\n          bottom: 0;\n          pointer-events: none;\n}\n.app .main-header .nav-tabs li {\n            pointer-events: auto;\n}\n.app .main-header .nav-tabs li:only-child {\n              display: none;\n}\n}\n.app .secondary-nav {\n    display: none;\n}\n.app .secondary-nav a {\n      color: #fff;\n}\n.app .secondary-nav a:hover {\n        background-color: transparent;\n        cursor: pointer;\n}\n@media screen and (min-width: 768px) {\n.app .secondary-nav {\n        display: table;\n        overflow: hidden;\n        padding: 15px 0 0 0;\n        margin: 0;\n        position: absolute;\n        bottom: 0;\n        right: 4px;\n        z-index: 2;\n        width: 100%;\n}\n.app .secondary-nav [class*=\" icon-\"],\n        .app .secondary-nav [class^=icon-] {\n          display: inline-block;\n          border-radius: 50%;\n          padding: 0.4em;\n}\n.app .secondary-nav li {\n          display: table-cell;\n          padding-top: 8px;\n          padding-bottom: 11px;\n          border-top: solid 4px #2f3135;\n}\n.app .secondary-nav li:first-of-type {\n            padding-left: 30px;\n}\n.app .secondary-nav li a {\n            text-decoration: none;\n}\n.app .secondary-nav .label {\n          font-size: 13px;\n          background-color: transparent;\n          position: relative;\n          top: -1px;\n          color: #2f3135;\n}\n}\n.app .source-view > div > .inner {\n    padding: 0 30px 15px 30px;\n}\n.app .source-view > div > .inner.banner {\n      padding-top: 37.5px;\n}\n.app .source-view > div.invalid .main-header {\n    background-color: #F13C3F;\n}\n.app .source-view > div.invalid .banner {\n    background-color: #F13C3F;\n    padding-bottom: 10px;\n}\n.app .source-view > div.invalid .banner + .inner > div > .nav-tabs {\n      background-color: #F13C3F;\n}\n.app .source-view > div.invalid .banner + .inner > div > .nav-tabs > li.active > a {\n        color: #F13C3F;\n}\n.app .source-view .banner {\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: #01CD81;\n}\n.app .source-view .banner svg {\n      fill: #fff;\n}\n.app .source-view .banner .btn {\n      border-color: #fff;\n      background-color: #fff;\n      color: #2f3135;\n}\n.app .source-view .banner .btn.btn-default {\n        color: #fff;\n        background-color: rgba(47, 49, 53, 0);\n}\n.app .source-view .banner .source-title small {\n      color: inherit;\n}\n.app .source-view .banner .source-item {\n      margin-left: -10px;\n      margin-right: -10px;\n      background-color: inherit;\n}\n.app .source-view .banner + .inner > div > .nav-tabs {\n      background-color: #01CD81;\n      margin-left: -30px;\n      margin-right: -30px;\n      padding-left: 30px;\n      padding-right: 30px;\n}\n.app .source-view .banner + .inner > div > .nav-tabs > li > a {\n        color: #fff;\n}\n.app .source-view .banner + .inner > div > .nav-tabs > li.active > a {\n        color: #01CD81;\n}\n.app .source-view .source-title {\n    margin-top: 0;\n}\n.app .source-view .integration {\n    float: right;\n    font-size: 22px;\n    color: #fff;\n    text-decoration: none;\n    padding: 4px;\n}\n.app .source-view .source-item {\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.app .source-view .source-item .status {\n      float: right;\n      text-transform: capitalize;\n      font-weight: bold;\n}\n.app .source-view .source-item .integration {\n      display: none;\n}\n.app .source-view .source-item .source {\n      padding-top: 15px;\n      padding-bottom: 15px;\n}\n.app .source-view .source-item .job {\n      padding-top: 7.5px;\n      padding-bottom: 7.5px;\n}\n.app .source-view .tab-pane {\n    padding: 30px 0;\n}\n.app .source-view .meta {\n    padding: 0;\n    margin: 0;\n}\n.app .source-view .meta li {\n      display: inline-block;\n      padding: 2px 10px;\n      margin-top: 16px;\n      font-size: 13px;\n      border-right: solid 1px #2f3135;\n}\n.app .source-view .meta li:last-child {\n        border: none;\n}\n.app section.add-source,\n  .app section.settings {\n    width: 0;\n    height: 100vh;\n    transition: width 0.2s ease;\n    overflow: hidden;\n    float: left;\n    margin-left: -15px;\n    position: relative;\n}\n.app section.add-source .main-header .heading,\n    .app section.settings .main-header .heading {\n      margin: 0;\n      font-size: 18px;\n      padding: 20px;\n}\n.app section.add-source .main-header .nav-tabs > li > a,\n    .app section.settings .main-header .nav-tabs > li > a {\n      color: #e3e4e6;\n}\n.app section.add-source .main-header .nav-tabs > li.active > a,\n    .app section.settings .main-header .nav-tabs > li.active > a {\n      background-color: #e3e4e6;\n      color: #2f3135;\n}\n.app section.add-source .main-header .close,\n    .app section.settings .main-header .close {\n      padding: 20px 10px;\n      text-shadow: none;\n}\n.app section.add-source .tool-bar {\n    padding: 15px;\n    display: table;\n    width: 100%;\n    background-color: #e3e4e6;\n    border-bottom: solid 5px #2f3135;\n}\n.app section.add-source .tool-bar > span {\n      display: table-cell;\n      vertical-align: middle;\n}\n.app section.add-source .tool-bar > span.sync {\n        width: 40px;\n        text-align: right;\n}\n.app section.add-source .tool-bar > span.sync button {\n          width: 26px;\n          height: 26px;\n          border-radius: 50%;\n          border: none;\n          line-height: 1;\n          background-color: #898d96;\n}\n.app section.add-source .tool-bar > span.sync button:hover {\n            background-color: #1595BC;\n}\n.app section.add-source .repos {\n    padding: 0;\n    margin: 0;\n}\n.app section.add-source .repos li {\n      position: relative;\n      border-bottom: solid 5px #2f3135;\n      overflow: hidden;\n}\n.app section.add-source .repos li .repo-title {\n        font-size: 16px;\n        font-weight: 600;\n        margin: 0;\n        padding: 12px 0 0 15px;\n}\n.app section.add-source .repos li .repo-body {\n        display: block;\n        font-size: 13px;\n        padding: 1px 0 12px 15px;\n}\n.app section.add-source .repos li .repo-body a {\n          color: inherit;\n}\n.app section.add-source .repos li .activate {\n        position: absolute;\n        top: 50%;\n        right: 14px;\n        width: 26px;\n        height: 26px;\n        border: none;\n        margin-top: -13px;\n        border-radius: 50%;\n        background-color: #fff;\n        color: #404248;\n        line-height: 1;\n        box-shadow: 10px 0px 10px 20px #404248;\n}\n.app section.add-source .repos li .activate:hover {\n          background-color: #01CD81;\n          color: #fff;\n          box-shadow: 10px 0px 10px 20px #70747e;\n}\n.app section.add-source .repos li .activate:hover + .repo-title {\n            background-color: #70747e;\n            border-left: solid 4px #01CD81;\n}\n.app section.add-source .repos li .activate:hover + .repo-title + .repo-body {\n              background-color: #70747e;\n              border-left: solid 4px #01CD81;\n}\n.app section.settings .avatar {\n    width: 50%;\n    max-width: 128px;\n}\n.app [class^='show-view-'] {\n    float: right;\n    text-decoration: none;\n    cursor: pointer;\n    margin-top: 4px;\n    display: none;\n}\n.app [class^='show-view-'] span {\n      font: 0/0 a;\n      color: transparent;\n      text-shadow: none;\n      background-color: transparent;\n      border: 0;\n      display: block;\n}\n.app [class^='show-view-']:before {\n      font-family: 'icomoon' !important;\n      speak: none;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n      position: relative;\n      top: 0.1em;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      font-size: 32px;\n      padding: 10px;\n      display: inline-block;\n}\n.app .show-view-default:before {\n    content: \"\\E901\";\n}\n.app .show-view-list:before {\n    content: \"\\E900\";\n}\n@media screen and (min-width: 768px) {\n.app .show-view-list {\n      display: inline-block;\n}\n}\n.app.list-view .show-view-list {\n    display: none;\n}\n@media screen and (min-width: 768px) {\n.app.list-view .show-view-default {\n      display: inline-block;\n}\n}\n@media screen and (min-width: 768px) {\n.app.list-view .default {\n      width: 200%;\n      margin-right: 0;\n}\n}\n@media screen and (min-width: 768px) {\n.app.list-view .main-nav {\n      width: 50%;\n      height: auto;\n      min-height: 100vh;\n}\n}\n.app.list-view .main-nav .panel {\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-left: 0;\n    padding-right: 0;\n}\n@media (min-width: 768px) {\n.app.list-view .main-nav .panel {\n        float: left;\n        width: 50%;\n}\n}\n@media (min-width: 992px) {\n.app.list-view .main-nav .panel {\n        float: left;\n        width: 33.33333%;\n}\n}\n@media (min-width: 1200px) {\n.app.list-view .main-nav .panel {\n        float: left;\n        width: 25%;\n}\n}\n.app.list-view .main-nav .panel + .source-item .source {\n      border-top: none;\n}\n.app.list-view .main-nav .panel .job {\n      border-bottom-width: 0;\n}\n.app.list-view .main-nav:after {\n    display: none;\n}\n@media screen and (min-width: 768px) {\n.app.list-view .source-view {\n      width: 50%;\n      height: 100vh;\n      overflow: hidden;\n}\n}\n.app.add-view .inner, .app.settings-view .inner {\n    width: 200vw;\n    transition: width 0.2s ease;\n}\n.app.add-view .inner .default, .app.settings-view .inner .default {\n      width: 100vw;\n      float: left;\n      margin-left: 0;\n}\n.app.add-view .inner .default .main-nav, .app.settings-view .inner .default .main-nav {\n        padding-left: 0;\n}\n@media screen and (min-width: 768px) {\n.app.add-view section.add-source {\n      width: 33vw;\n      padding-left: 15px;\n}\n}\n@media screen and (min-width: 768px) {\n.app.settings-view section.settings {\n      width: 33vw;\n      padding-left: 15px;\n}\n}\n.panel .github .integration,\n.panel .aws .integration {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 25%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00FFFFFF', endColorstr='#FFFFFFFF', GradientType=1);\n  color: rgba(47, 49, 53, 0.8);\n}\n.panel .github .integration:hover,\n  .panel .aws .integration:hover {\n    color: #2f3135;\n}\n.panel.source-item {\n  background-color: #fff;\n  color: #2f3135;\n}\n.panel.source-item .source,\n  .panel.source-item .job {\n    border-right-color: #e3e4e6;\n}\n.panel.source-item .source:hover,\n    .panel.source-item .job:hover {\n      background-color: #fff;\n}\n.panel.source-item .source:hover ~ .integration {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 25%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00FFFFFF', endColorstr='#FFFFFFFF', GradientType=1);\n}\n.panel.source-item .job {\n    border-top: solid 1px #e3e4e6;\n}\n.app .main-nav {\n  background-color: #f3f4f4;\n  background-image: linear-gradient(to bottom, #f3f4f4 0%, #fff 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF3F4F4', endColorstr='#FFFFFFFF', GradientType=0);\n}\n.app .main-nav .main-header {\n    background-color: #01CD81;\n}\n.app .main-nav .nav-tabs {\n    border-bottom-color: #f3f4f4;\n}\n.app .main-nav .nav-tabs > li.active > a,\n    .app .main-nav .nav-tabs > li.active > a:hover,\n    .app .main-nav .nav-tabs > li.active > a:focus {\n      color: #2f3135;\n      background-color: #fff;\n      border-color: #fff;\n}\n.app .main-nav .tab-pane {\n    background-color: #e3e4e6;\n}\n.app .main-nav .source-item .job {\n    border-bottom-color: #e3e4e6;\n}\n.app .main-nav .source-item + .source-item .source {\n    border-top-color: #e3e4e6;\n}\n@media screen and (min-width: 768px) {\n.app .main-nav {\n      box-shadow: inset -4px 0px 0px 0px #e3e4e6;\n}\n.app .main-nav:after {\n        background-image: linear-gradient(to bottom, rgba(243, 244, 244, 0) 0%, #f3f4f4 100%);\n        background-repeat: repeat-x;\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00F3F4F4', endColorstr='#FFF3F4F4', GradientType=0);\n}\n}\n@media screen and (min-width: 768px) {\n.app .secondary-nav {\n    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 20px);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00FFFFFF', endColorstr='#FFFFFFFF', GradientType=0);\n}\n.app .secondary-nav li {\n      border-top-color: #e3e4e6;\n}\n}\n.app section.add-source .main-header,\n.app section.settings .main-header {\n  box-shadow: none;\n}\n.app section.add-source:after,\n.app section.settings:after {\n  content: '';\n  width: 4px;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.app section.add-source {\n  background-color: #404248;\n  color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.app section.add-source svg {\n    fill: #fff;\n}\n.app section.add-source .btn {\n    border-color: #fff;\n    background-color: #fff;\n    color: #404248;\n}\n.app section.add-source .btn.btn-default {\n      color: #fff;\n      background-color: rgba(64, 66, 72, 0);\n}\n.app section.add-source .main-header {\n    background-color: #2f3135;\n}\n.app section.add-source .close {\n    color: #fff;\n}\n.app section.settings {\n  background-color: #25272a;\n}\n.app.list-view .main-nav .source,\n.app.list-view .main-nav .job {\n  border-right-color: #e3e4e6;\n}\n", ""]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "\n.title[data-v-16d4deb4]\n{\n  margin-top: 15px;\n  font-size: 5em;\n}\n.info[data-v-16d4deb4]\n{\n  font-weight: 300;\n  color: #9aabb1;\n  margin: 0;\n}\n.button[data-v-16d4deb4]\n{\n  margin-top: 50px;\n}\n", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "\n.loaded-from {\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  display: block;\n  text-align: right;\n  pointer-events: none;\n}\n.loaded-from span {\n    display: block;\n    max-width: 1170px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 15px;\n}\n.btn {\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pattern.4fbe178.png";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icomoon.4661cb0.svg";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.e2b0020.ttf";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.ec78229.woff";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-Bold.f5c9c1a.ttf";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-Medium.2e763f8.ttf";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-Regular-Italic.b1f58e1.ttf";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-Regular.2d4cd87.ttf";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Raleway-SemiBold.e18d388.ttf";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(167)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(153),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/.nuxt/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(166)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(152),
  /* scopeId */
  "data-v-0571f91f",
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/.nuxt/components/nuxt-loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(162),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/.nuxt/components/nuxt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(161),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/components/report_error.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] report_error.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(165),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/components/source_list_item_contents.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] source_list_item_contents.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(151),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/layouts/dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(155),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/layouts/default.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] default.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(168)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(154),
  /* scopeId */
  "data-v-16d4deb4",
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/layouts/error.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] error.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(159),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/layouts/landing.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] landing.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/pages/dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(156),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/pages/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(169)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(158),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sam/www/okfn/goodtables-ui/pages/style-guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] style-guide.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app",
    class: _vm.view
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('section', {
    staticClass: "add-source"
  }, [_c('header', {
    staticClass: "main-header"
  }, [_c('a', {
    staticClass: "close",
    on: {
      "click": function($event) {
        _vm.view = 'default-view'
      }
    }
  }, [_vm._m(0)]), _vm._m(1)]), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "github tab-pane active",
    attrs: {
      "role": "tabpanel",
      "id": "addGithub"
    }
  }, [_vm._m(2), _c('ul', {
    staticClass: "repos"
  }, _vm._l((_vm.repos), function(repo) {
    return (!repo.active) ? _c('li', [_c('button', {
      staticClass: "activate",
      on: {
        "click": function($event) {
          _vm.activateRepo(repo)
        }
      }
    }, [_vm._m(3, true)]), _c('h3', {
      staticClass: "repo-title"
    }, [_vm._v(_vm._s(repo.name))]), _c('span', {
      staticClass: "repo-body"
    }, [_c('a', {
      attrs: {
        "href": ("https://github.com/" + (repo.name))
      }
    }, [_vm._v("View repository")])])]) : _vm._e()
  }))]), _c('div', {
    staticClass: "amazon tab-pane",
    attrs: {
      "role": "tabpanel",
      "id": "addAmazon"
    }
  }, [_vm._v("\n          amazon\n        ")])])]), _vm._m(4), _c('div', {
    staticClass: "default"
  }, [_c('nav', {
    staticClass: "main-nav invalid"
  }, [_c('header', {
    staticClass: "main-header"
  }, [_c('a', {
    staticClass: "show-view-default",
    on: {
      "click": function($event) {
        _vm.view = 'default-view'
      }
    }
  }, [_c('span', [_vm._v("Default view")])]), _c('a', {
    staticClass: "show-view-list",
    on: {
      "click": function($event) {
        _vm.view = 'list-view'
      }
    }
  }, [_c('span', [_vm._v("List view")])]), _c('logo'), _vm._m(5)], 1), _c('ul', {
    staticClass: "secondary-nav"
  }, [(_vm.view != 'add-view') ? _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.view = 'add-view'
      }
    }
  }, [_c('span', {
    staticClass: "icon-plus label-success"
  }), _c('span', {
    staticClass: "label label-success"
  }, [_vm._v("Add source")])])]) : _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.view = 'default-view'
      }
    }
  }, [_c('span', {
    staticClass: "icon-keyboard_arrow_left label-success"
  }), _c('span', {
    staticClass: "label label-success"
  }, [_vm._v("Close")])])]), (_vm.view != 'settings-view') ? _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.view = 'settings-view'
      }
    }
  }, [_c('span', {
    staticClass: "icon-equalizer label-info"
  }), _c('span', {
    staticClass: "label label-info"
  }, [_vm._v("Settings")])])]) : _c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.view = 'default-view'
      }
    }
  }, [_c('span', {
    staticClass: "icon-keyboard_arrow_left label-info"
  }), _c('span', {
    staticClass: "label label-info"
  }, [_vm._v("Close")])])])]), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "role": "tabpanel",
      "id": "sources"
    }
  }, [_c('source-item', {
    attrs: {
      "title": "okfn/my-data",
      "integration": "github",
      "jobnumber": "77",
      "jobtotal": "77",
      "status": "valid",
      "time": "7 minutes ago"
    }
  }), _c('source-item', {
    attrs: {
      "title": "okfn/some-data",
      "integration": "aws",
      "jobnumber": "2",
      "jobtotal": "2",
      "status": "valid",
      "time": "20 minutes ago"
    }
  }), _c('source-item', {
    attrs: {
      "title": "okfn/test-data",
      "integration": "github",
      "jobnumber": "8",
      "jobtotal": "8",
      "status": "invalid",
      "time": "1 day ago",
      "job": "active"
    }
  }), _c('source-item', {
    attrs: {
      "title": "okfn/more-data",
      "integration": "aws",
      "jobnumber": "1",
      "jobtotal": "1",
      "status": "invalid",
      "time": "2 days ago"
    }
  })], 1)])]), _c('main', {
    staticClass: "source-view"
  }, [_c('nuxt')], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon-keyboard_arrow_left"
  }, [_c('i', [_vm._v("Close")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav nav-tabs",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "active",
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#addGithub",
      "aria-controls": "addGithub",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("GitHub")])]), _c('li', {
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#addAmazon",
      "aria-controls": "addAmazon",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("Amazon")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tool-bar"
  }, [_c('span', [_c('input', {
    staticClass: "form-control search",
    attrs: {
      "type": "search",
      "placeholder": "Filter"
    }
  })]), _c('span', {
    staticClass: "sync"
  }, [_c('button', {
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "left",
      "title": "Refresh your organizations and repositories"
    }
  }, [_c('span', {
    staticClass: "icon-spinner11"
  }, [_c('i', [_vm._v("Sync account")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon-plus"
  }, [_c('i', [_vm._v("Activate")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "settings"
  }, [_c('header', {
    staticClass: "main-header"
  }, [_vm._v("\n        Settings\n      ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav nav-tabs",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "active",
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#sources",
      "aria-controls": "sources",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("Sources")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [_c('nuxt-loading', {
    ref: "loading"
  }), (_vm.layout) ? _c(_vm.layout, {
    tag: "component"
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n    " + _vm._s(_vm.error.statusCode) + "\n  ")]), _c('h2', {
    staticClass: "info"
  }, [_vm._v("\n    " + _vm._s(_vm.error.message) + "\n  ")]), (_vm.error.statusCode === 404) ? _c('nuxt-link', {
    staticClass: "button",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n    Homepage\n  ")]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: "main-header"
  }, [_c('div', {
    staticClass: "pattern"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('logo')], 1)])])]), _c('nuxt'), _c('my-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "inner"
  }, [_c('h2', [_vm._v("\"How can one ensure, in a detailed and automated fashion, that data sources meet the quality requirements for further analysis and integration?\"")]), _c('p', [_vm._v("\n    GoodTables is part of the Frictionless Data project from Open Knowledge International, which supports a wider discussion around open data quality. We believe that GoodTables can reduce the processing time of your data publication workflow, whatever it may be. For us it answers one the most consistent questions we have encountered in our work with data over the last 10 years: How can one ensure, in a detailed and automated fashion, that data sources meet the quality requirements for further analysis and integration?\n  ")]), _c('p', [_c('em', [_vm._v("(the answer is goodTables.io)")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "logo",
    attrs: {
      "href": "./"
    }
  }, [_c('svg', {
    staticStyle: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "1.41421"
    },
    attrs: {
      "width": "100%",
      "height": "100%",
      "viewBox": "0 0 498 82",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    staticClass: "icon",
    attrs: {
      "d": "M81.16,81.16L0,81.16L0,0L81.16,0L81.16,16.001L65.28,15.88L15.88,15.88L15.88,65.28L65.28,65.28L65.28,52.175L58.066,59.389L46.837,48.16L73.225,21.772L99.603,48.149L88.374,59.378L81.16,52.164L81.16,81.16Z"
    }
  }), _c('path', {
    staticClass: "good",
    attrs: {
      "d": "M145.478,24.013C145.587,24.05 145.618,24.054 145.719,24.112C145.947,24.244 146.116,24.465 146.185,24.72C146.215,24.832 146.211,24.863 146.219,24.979L146.219,57.835C146.215,58.489 146.188,59.141 146.123,59.792C145.999,61.029 145.749,62.255 145.352,63.435C144.948,64.633 144.391,65.778 143.714,66.845C143.172,67.701 142.549,68.505 141.855,69.243C141.356,69.772 140.822,70.266 140.257,70.723C137.523,72.935 134.137,74.221 130.692,74.793C130.193,74.875 129.692,74.943 129.189,74.997C128.589,75.062 127.987,75.106 127.384,75.132C126.643,75.164 125.901,75.168 125.159,75.148C122.346,75.074 119.5,74.642 116.894,73.54C116.242,73.264 115.608,72.945 114.991,72.596C113.615,71.817 112.334,70.874 111.178,69.795C110.521,69.181 109.909,68.524 109.333,67.835L109.242,67.724C109.155,67.616 109.069,67.513 109.013,67.385C108.886,67.094 108.906,66.752 109.066,66.478C109.127,66.375 109.152,66.356 109.232,66.267L114.038,61.592C114.073,61.563 114.106,61.531 114.143,61.503C114.217,61.449 114.299,61.405 114.385,61.373C114.689,61.259 115.038,61.302 115.305,61.488C115.436,61.578 115.527,61.699 115.627,61.819C115.666,61.866 115.705,61.911 115.744,61.957C115.863,62.094 115.863,62.093 115.984,62.228C116.31,62.58 116.651,62.917 117.015,63.232C117.661,63.791 118.365,64.282 119.11,64.701C119.94,65.169 120.818,65.553 121.725,65.844C122.448,66.076 123.189,66.247 123.939,66.358C124.447,66.432 124.959,66.479 125.472,66.499C125.865,66.514 126.258,66.515 126.65,66.498C126.998,66.483 127.345,66.454 127.691,66.411C128.218,66.345 128.741,66.247 129.255,66.114C129.683,66.003 130.104,65.871 130.513,65.705C131.129,65.456 131.716,65.136 132.256,64.749C132.617,64.49 132.957,64.202 133.265,63.881C133.55,63.583 133.807,63.259 134.034,62.915C134.378,62.397 134.66,61.835 134.869,61.249C135.26,60.153 135.39,58.988 135.396,57.83L135.396,56.471C135.302,56.568 135.206,56.664 135.11,56.758C135.001,56.863 134.891,56.965 134.78,57.066C134.385,57.419 133.971,57.75 133.536,58.053C132.808,58.56 132.028,58.991 131.218,59.353C130.135,59.838 128.997,60.195 127.831,60.413C126.578,60.646 125.3,60.717 124.028,60.653C122.36,60.568 120.704,60.238 119.151,59.621C118.564,59.387 117.994,59.112 117.441,58.807C116.414,58.241 115.45,57.564 114.57,56.79C113.522,55.868 112.593,54.812 111.801,53.664C110.28,51.46 109.27,48.915 108.774,46.289C108.491,44.791 108.377,43.265 108.407,41.741C108.438,40.174 108.624,38.608 108.99,37.083C109.22,36.127 109.522,35.19 109.89,34.277C111.095,31.292 113.015,28.562 115.599,26.616C116.567,25.886 117.619,25.268 118.725,24.771C119.727,24.321 120.778,23.981 121.852,23.753C122.887,23.534 123.943,23.418 125,23.392C125.846,23.371 126.693,23.405 127.533,23.506C128.91,23.672 130.266,24.019 131.539,24.574C132.301,24.906 133.026,25.314 133.717,25.775C134.736,26.456 135.675,27.252 136.516,28.144L136.516,24.979C136.523,24.863 136.519,24.832 136.55,24.72C136.629,24.422 136.848,24.173 137.133,24.055C137.214,24.021 137.298,23.998 137.385,23.987C137.428,23.981 137.472,23.981 137.516,23.979L145.219,23.979L145.349,23.987C145.392,23.996 145.435,24.004 145.478,24.013ZM266.23,10.424C266.343,10.447 266.374,10.447 266.482,10.492C266.725,10.593 266.922,10.79 267.023,11.033C267.056,11.114 267.079,11.199 267.091,11.285C267.096,11.328 267.096,11.372 267.099,11.416C267.099,24.106 266.897,36.798 267.101,49.487C267.105,49.658 267.115,49.83 267.136,50C267.151,50.114 267.17,50.227 267.198,50.338C267.23,50.462 267.27,50.598 267.349,50.7C267.405,50.772 267.488,50.818 267.57,50.852C267.736,50.921 267.916,50.949 268.094,50.966L268.146,50.971L268.207,50.975L268.342,50.993C268.459,51.026 268.491,51.028 268.599,51.084C268.844,51.21 269.029,51.437 269.103,51.702C269.136,51.82 269.132,51.852 269.14,51.973L269.14,59.478C269.132,59.6 269.136,59.632 269.102,59.75C269.027,60.017 268.84,60.245 268.592,60.37C268.483,60.426 268.45,60.428 268.332,60.459C268.045,60.516 268.046,60.516 267.758,60.57C267.485,60.619 267.211,60.667 266.937,60.709C265.332,60.959 263.665,61.088 262.082,60.641C261.845,60.574 261.612,60.495 261.385,60.403C261.071,60.277 260.767,60.126 260.478,59.95C260.112,59.728 259.769,59.467 259.458,59.173C259.09,58.825 258.768,58.428 258.511,57.991C258.301,57.635 258.136,57.255 258.015,56.861C257.961,56.683 257.919,56.503 257.88,56.321L257.863,56.23C257.761,56.347 257.657,56.463 257.551,56.577C257.44,56.695 257.327,56.812 257.213,56.927C256.609,57.523 255.956,58.065 255.251,58.539C254.445,59.081 253.579,59.531 252.683,59.907C251.055,60.591 249.318,61.003 247.555,61.109C246.854,61.15 246.151,61.144 245.45,61.101C244.102,61.017 242.763,60.78 241.474,60.377C240.49,60.069 239.539,59.664 238.63,59.178C237.553,58.602 236.538,57.91 235.614,57.112C233.461,55.254 231.824,52.847 230.747,50.224C230.369,49.305 230.058,48.359 229.821,47.393C229.388,45.626 229.2,43.804 229.218,41.985C229.234,40.339 229.413,38.693 229.788,37.09C230.044,35.992 230.394,34.917 230.828,33.876C231.433,32.422 232.203,31.036 233.143,29.771C233.769,28.93 234.466,28.142 235.238,27.432C236.562,26.212 238.103,25.216 239.765,24.522C241.549,23.777 243.471,23.412 245.401,23.387C246.343,23.375 247.286,23.441 248.215,23.598C249.201,23.766 250.169,24.036 251.096,24.411C251.909,24.74 252.685,25.15 253.421,25.623C254.105,26.062 254.754,26.554 255.358,27.097C255.669,27.377 255.966,27.671 256.252,27.976L256.277,28.002L256.277,11.416L256.285,11.285C256.308,11.171 256.308,11.141 256.353,11.033C256.454,10.79 256.651,10.593 256.894,10.492C256.975,10.458 257.06,10.436 257.146,10.424C257.189,10.419 257.233,10.419 257.277,10.416L266.099,10.416C266.143,10.419 266.186,10.421 266.23,10.424ZM168.733,23.387C169.093,23.393 169.452,23.403 169.81,23.423C170.591,23.466 171.369,23.549 172.14,23.677C173.164,23.846 174.174,24.096 175.155,24.434C175.725,24.631 176.284,24.859 176.831,25.112C177.812,25.567 178.756,26.1 179.645,26.716C180.575,27.359 181.443,28.091 182.231,28.902C183.371,30.075 184.351,31.403 185.138,32.838C186.045,34.496 186.7,36.292 187.083,38.143C187.35,39.43 187.484,40.743 187.499,42.057C187.517,43.74 187.334,45.423 186.932,47.057C186.448,49.025 185.656,50.923 184.583,52.642C184.035,53.52 183.412,54.351 182.725,55.124C182.127,55.795 181.479,56.42 180.783,56.989C179.712,57.863 178.535,58.602 177.293,59.209C176.272,59.707 175.21,60.115 174.114,60.416C172.275,60.921 170.365,61.137 168.46,61.137C166.679,61.137 164.895,60.949 163.167,60.512C162.49,60.34 161.822,60.13 161.169,59.881C160.571,59.653 159.986,59.391 159.415,59.104C158.113,58.45 156.885,57.648 155.776,56.702C154.865,55.924 154.038,55.048 153.303,54.102C151.599,51.91 150.418,49.325 149.819,46.616C149.488,45.121 149.339,43.588 149.355,42.057C149.37,40.743 149.504,39.43 149.771,38.143C150.154,36.292 150.809,34.496 151.716,32.838C152.502,31.403 153.483,30.075 154.623,28.901C155.414,28.089 156.285,27.356 157.219,26.714C158.115,26.098 159.067,25.564 160.055,25.111C160.607,24.857 161.17,24.63 161.744,24.433C162.771,24.082 163.829,23.826 164.9,23.656C165.632,23.54 166.369,23.464 167.109,23.423C167.468,23.403 167.827,23.393 168.187,23.387C168.46,23.386 168.459,23.386 168.733,23.387ZM208.632,23.387C208.991,23.393 209.35,23.403 209.709,23.423C210.489,23.466 211.268,23.549 212.039,23.677C213.062,23.846 214.073,24.096 215.054,24.434C215.624,24.631 216.182,24.859 216.729,25.112C217.71,25.567 218.655,26.1 219.544,26.716C220.473,27.359 221.341,28.091 222.129,28.902C223.27,30.075 224.25,31.403 225.036,32.838C225.944,34.496 226.599,36.292 226.982,38.143C227.248,39.43 227.383,40.743 227.397,42.057C227.415,43.74 227.232,45.423 226.831,47.057C226.347,49.025 225.555,50.923 224.481,52.642C223.933,53.52 223.311,54.351 222.623,55.124C221.975,55.852 221.268,56.524 220.505,57.131C219.482,57.943 218.365,58.635 217.192,59.209C216.17,59.707 215.109,60.115 214.012,60.416C212.173,60.921 210.263,61.137 208.358,61.137C206.578,61.137 204.793,60.949 203.065,60.512C202.388,60.34 201.72,60.13 201.067,59.881C200.47,59.653 199.885,59.391 199.313,59.104C198.012,58.45 196.783,57.648 195.675,56.702C194.764,55.924 193.936,55.048 193.201,54.102C191.497,51.91 190.316,49.325 189.717,46.616C189.387,45.121 189.237,43.588 189.254,42.057C189.268,40.743 189.403,39.43 189.669,38.143C190.052,36.292 190.707,34.496 191.615,32.838C192.401,31.403 193.381,30.075 194.522,28.901C195.312,28.089 196.184,27.356 197.117,26.714C198.014,26.098 198.966,25.564 199.954,25.111C200.543,24.84 201.144,24.599 201.759,24.394C202.749,24.063 203.768,23.82 204.799,23.656C205.53,23.54 206.268,23.464 207.007,23.423C207.366,23.403 207.725,23.393 208.085,23.387C208.358,23.386 208.358,23.386 208.632,23.387ZM168.354,32.892C168.077,32.898 167.802,32.914 167.527,32.947C167.032,33.007 166.543,33.118 166.071,33.281C165.567,33.456 165.084,33.69 164.629,33.968C164.203,34.227 163.802,34.528 163.432,34.864C162.033,36.135 161.125,37.883 160.713,39.717C160.485,40.735 160.41,41.784 160.45,42.825C160.492,43.911 160.668,44.997 161.031,46.023C161.57,47.544 162.47,48.955 163.731,49.977C164.037,50.226 164.363,50.449 164.704,50.646C165.077,50.861 165.468,51.044 165.872,51.191C166.701,51.492 167.58,51.631 168.46,51.631C169.307,51.631 170.153,51.502 170.954,51.224C171.454,51.051 171.934,50.821 172.385,50.545C172.778,50.305 173.149,50.028 173.491,49.72C174.46,48.845 175.188,47.735 175.682,46.531C175.874,46.066 176.031,45.587 176.152,45.098C176.382,44.16 176.48,43.193 176.48,42.228C176.48,41.683 176.447,41.137 176.375,40.596C176.265,39.778 176.064,38.974 175.767,38.204C175.442,37.362 175.01,36.56 174.457,35.846C174.085,35.367 173.661,34.927 173.189,34.545C172.498,33.985 171.705,33.547 170.861,33.267C170.386,33.109 169.895,33.003 169.398,32.945C169.122,32.913 168.844,32.897 168.566,32.892C168.46,32.892 168.46,32.892 168.354,32.892ZM208.252,32.892C207.976,32.898 207.7,32.914 207.425,32.947C206.93,33.007 206.441,33.118 205.97,33.281C205.465,33.456 204.983,33.69 204.527,33.968C204.101,34.227 203.7,34.528 203.33,34.864C201.931,36.135 201.023,37.883 200.612,39.717C200.384,40.735 200.308,41.784 200.348,42.825C200.39,43.911 200.566,44.997 200.93,46.023C201.48,47.575 202.406,49.013 203.706,50.039C203.99,50.263 204.289,50.466 204.602,50.646C204.975,50.861 205.366,51.044 205.771,51.191C206.599,51.492 207.478,51.631 208.358,51.631C209.205,51.631 210.052,51.502 210.853,51.224C211.352,51.051 211.833,50.821 212.284,50.545C212.677,50.305 213.047,50.028 213.389,49.72C214.359,48.845 215.086,47.735 215.581,46.531C215.772,46.066 215.93,45.587 216.05,45.098C216.281,44.16 216.378,43.193 216.378,42.228C216.378,41.683 216.345,41.137 216.273,40.596C216.164,39.778 215.963,38.974 215.666,38.204C215.341,37.362 214.909,36.56 214.355,35.846C213.983,35.367 213.559,34.927 213.088,34.545C212.397,33.985 211.604,33.547 210.759,33.267C210.284,33.109 209.793,33.003 209.296,32.945C209.02,32.913 208.743,32.897 208.465,32.892C208.359,32.892 208.359,32.892 208.252,32.892ZM127.263,32.892C126.555,32.907 125.853,33.004 125.179,33.225C124.63,33.405 124.114,33.665 123.628,33.976C122.415,34.754 121.438,35.855 120.747,37.114C120.35,37.837 120.049,38.61 119.832,39.405C119.588,40.296 119.454,41.216 119.427,42.139C119.406,42.88 119.453,43.623 119.587,44.352C119.933,46.243 120.864,48.033 122.257,49.363C122.732,49.816 123.259,50.214 123.826,50.545C124.457,50.914 125.133,51.203 125.842,51.383C126.404,51.526 126.981,51.603 127.56,51.625C128.068,51.643 128.576,51.62 129.078,51.542C129.663,51.45 130.23,51.283 130.777,51.06C131.394,50.808 131.983,50.486 132.528,50.102C133.757,49.235 134.788,48.055 135.386,46.667L135.396,46.643L135.396,38.8C135.338,38.657 135.276,38.517 135.212,38.377C134.901,37.707 134.527,37.069 134.079,36.482C133.478,35.695 132.753,35.009 131.943,34.44C131.08,33.834 130.121,33.354 129.094,33.101C128.556,32.968 128.006,32.901 127.452,32.892C127.357,32.892 127.358,32.892 127.263,32.892ZM248.279,32.892C247.684,32.905 247.093,32.976 246.517,33.129C245.397,33.427 244.357,34.023 243.502,34.801C243.062,35.202 242.672,35.654 242.327,36.138C241.836,36.828 241.439,37.581 241.131,38.368C240.866,39.047 240.666,39.751 240.539,40.469C240.41,41.197 240.356,41.937 240.371,42.675C240.388,43.499 240.494,44.323 240.708,45.119C240.844,45.625 241.025,46.116 241.242,46.593C241.553,47.276 241.941,47.925 242.404,48.516C242.787,49.005 243.221,49.454 243.704,49.844C244.299,50.324 244.965,50.719 245.67,51.014C246.232,51.25 246.823,51.415 247.425,51.514C247.8,51.575 248.179,51.611 248.559,51.625C248.883,51.636 249.207,51.632 249.53,51.601C250.037,51.553 250.539,51.447 251.026,51.298C251.658,51.105 252.266,50.839 252.833,50.499C253.493,50.105 254.098,49.616 254.638,49.071C254.995,48.71 255.328,48.324 255.613,47.903C255.87,47.523 256.085,47.118 256.26,46.693L256.277,46.652L256.277,38.788C256.236,38.681 256.191,38.575 256.146,38.469C255.975,38.077 255.778,37.697 255.552,37.334C255.308,36.941 255.03,36.569 254.73,36.217C253.896,35.241 252.877,34.434 251.742,33.832C251.065,33.473 250.344,33.177 249.592,33.019C249.218,32.941 248.84,32.899 248.458,32.892C248.368,32.892 248.369,32.892 248.279,32.892Z"
    }
  }), _c('path', {
    staticClass: "tables",
    attrs: {
      "d": "M351.821,60.478L344.118,60.478C344.075,60.475 344.031,60.475 343.988,60.47C343.901,60.458 343.816,60.435 343.736,60.402C343.451,60.284 343.232,60.035 343.152,59.737C343.122,59.624 343.126,59.594 343.118,59.478L343.118,11.416C343.121,11.372 343.121,11.328 343.127,11.285C343.138,11.199 343.161,11.114 343.194,11.033C343.312,10.748 343.562,10.53 343.86,10.45C343.972,10.42 344.003,10.423 344.118,10.416L352.941,10.416C352.984,10.419 353.028,10.421 353.071,10.424C353.185,10.447 353.216,10.447 353.323,10.492C353.567,10.593 353.764,10.79 353.865,11.033C353.898,11.114 353.921,11.199 353.932,11.285C353.938,11.328 353.938,11.372 353.941,11.416L353.941,27.971C354.051,27.849 354.165,27.729 354.279,27.61C354.387,27.499 354.497,27.39 354.607,27.283C355.727,26.212 357.014,25.316 358.425,24.672C360.177,23.874 362.088,23.482 364.006,23.402C364.925,23.364 365.847,23.392 366.76,23.509C367.917,23.656 369.055,23.944 370.138,24.377C370.945,24.7 371.717,25.104 372.454,25.563C374.449,26.806 376.157,28.483 377.465,30.433C378.396,31.821 379.121,33.339 379.66,34.919C380.003,35.922 380.273,36.949 380.469,37.991C380.725,39.353 380.855,40.739 380.868,42.125C380.883,43.782 380.729,45.443 380.369,47.062C380.105,48.249 379.729,49.409 379.251,50.526C378.762,51.667 378.168,52.762 377.465,53.785C376.617,55.02 375.613,56.15 374.478,57.128C373.511,57.961 372.448,58.682 371.319,59.277C370.296,59.817 369.22,60.253 368.104,60.561C366.23,61.077 364.261,61.236 362.326,61.081C360.937,60.969 359.562,60.682 358.257,60.195C356.665,59.6 355.18,58.711 353.9,57.594C353.55,57.288 353.217,56.964 352.898,56.625L352.821,56.542L352.821,59.478L352.813,59.609C352.804,59.651 352.799,59.695 352.787,59.737C352.765,59.821 352.731,59.902 352.688,59.978C352.556,60.206 352.335,60.376 352.08,60.444C351.968,60.474 351.937,60.471 351.821,60.478ZM456.625,23.321C457.367,23.331 458.108,23.365 458.847,23.434C460.195,23.56 461.533,23.796 462.84,24.152C463.596,24.358 464.343,24.602 465.07,24.896C466.095,25.31 467.08,25.819 468.014,26.411C468.764,26.887 469.48,27.416 470.159,27.989C470.222,28.041 470.285,28.095 470.347,28.149C470.463,28.249 470.587,28.346 470.678,28.47C470.854,28.711 470.914,29.025 470.838,29.313C470.82,29.385 470.793,29.454 470.759,29.52C470.742,29.553 470.722,29.583 470.703,29.615L467.148,34.948C467.124,34.979 467.103,35.011 467.078,35.041C467.028,35.1 466.971,35.153 466.909,35.199C466.658,35.384 466.326,35.441 466.027,35.351C465.953,35.329 465.882,35.298 465.815,35.259C465.782,35.24 465.751,35.217 465.718,35.196C465.56,35.078 465.401,34.961 465.241,34.845C464.135,34.059 462.976,33.347 461.736,32.792C460.118,32.067 458.366,31.62 456.589,31.578C456.291,31.571 455.992,31.575 455.694,31.595C455.466,31.611 455.238,31.635 455.012,31.671C454.452,31.76 453.901,31.919 453.394,32.174C453.195,32.274 453,32.385 452.826,32.525C452.545,32.75 452.335,33.044 452.21,33.382C452.096,33.691 452.048,34.025 452.042,34.354C452.036,34.702 452.057,35.079 452.223,35.394C452.279,35.5 452.353,35.597 452.435,35.684C452.66,35.926 452.944,36.106 453.233,36.26C453.557,36.434 453.895,36.58 454.237,36.713C454.741,36.909 455.258,37.074 455.777,37.228C456.534,37.452 457.3,37.648 458.067,37.835C458.363,37.913 458.659,37.991 458.955,38.069C460.277,38.428 461.594,38.808 462.895,39.238C464.468,39.757 466.027,40.341 467.464,41.175C468.335,41.68 469.159,42.274 469.865,42.996C470.484,43.629 471.007,44.357 471.383,45.161C472.045,46.576 472.233,48.165 472.179,49.713C472.146,50.627 472.023,51.54 471.787,52.424C471.549,53.318 471.195,54.181 470.727,54.979C469.792,56.573 468.418,57.869 466.846,58.827C466.517,59.027 466.179,59.213 465.834,59.384C463.304,60.64 460.447,61.093 457.645,61.134C454.798,61.175 451.954,60.778 449.228,59.959C447.513,59.443 445.845,58.764 444.283,57.884C443.18,57.262 442.138,56.541 441.167,55.727L441.069,55.644C440.977,55.565 440.888,55.489 440.816,55.39C440.656,55.169 440.592,54.886 440.643,54.617C440.658,54.541 440.681,54.466 440.713,54.395C440.729,54.36 440.749,54.327 440.767,54.292L444.059,48.762C444.081,48.729 444.101,48.695 444.125,48.664C444.172,48.602 444.227,48.546 444.288,48.496C444.535,48.297 444.869,48.225 445.175,48.307C445.251,48.327 445.324,48.356 445.393,48.393C445.428,48.412 445.46,48.435 445.493,48.455C445.685,48.59 445.877,48.724 446.071,48.856C447.433,49.775 448.853,50.609 450.353,51.281C450.995,51.568 451.65,51.827 452.318,52.045C453.176,52.324 454.056,52.535 454.949,52.664C455.525,52.748 456.105,52.798 456.686,52.812C457.227,52.825 457.769,52.809 458.306,52.745C458.907,52.673 459.507,52.541 460.062,52.297C460.36,52.167 460.647,52.004 460.898,51.797C461.08,51.647 461.242,51.471 461.367,51.27C461.482,51.087 461.565,50.885 461.617,50.675C461.673,50.452 461.693,50.224 461.694,49.995C461.696,49.692 461.643,49.382 461.507,49.11C461.431,48.959 461.331,48.822 461.213,48.701C460.948,48.43 460.613,48.255 460.272,48.1C459.978,47.967 459.68,47.845 459.379,47.728C458.212,47.277 457.013,46.912 455.813,46.559C455.084,46.349 454.352,46.148 453.623,45.941C452.747,45.688 451.873,45.427 451.005,45.148C450.561,45.005 450.117,44.858 449.675,44.705C449.315,44.58 448.956,44.453 448.6,44.316C448.309,44.204 448.02,44.087 447.735,43.962C446.144,43.268 444.595,42.348 443.485,40.988C443.338,40.807 443.199,40.619 443.07,40.425C442.857,40.106 442.671,39.769 442.515,39.419C441.998,38.257 441.81,36.974 441.811,35.71C441.812,34.47 441.971,33.229 442.338,32.043C442.592,31.221 442.945,30.433 443.382,29.693C443.73,29.105 444.13,28.548 444.579,28.032C444.961,27.593 445.377,27.183 445.821,26.807C447.736,25.182 450.111,24.165 452.562,23.679C453.756,23.443 454.968,23.337 456.185,23.321C456.405,23.32 456.405,23.32 456.625,23.321ZM413.746,46.059C413.862,46.65 414.033,47.232 414.267,47.787C414.407,48.118 414.571,48.44 414.753,48.751C415.118,49.372 415.563,49.946 416.083,50.446C416.503,50.851 416.97,51.209 417.47,51.512C418.398,52.073 419.444,52.441 420.517,52.597C421.021,52.67 421.531,52.695 422.04,52.68C423.206,52.644 424.357,52.386 425.427,51.92C426.613,51.403 427.744,50.653 428.48,49.568C428.681,49.273 428.846,48.958 428.982,48.628L429.03,48.528C429.05,48.496 429.068,48.463 429.09,48.433C429.133,48.372 429.182,48.316 429.238,48.266C429.432,48.091 429.693,47.998 429.955,48.011C430.054,48.016 430.078,48.025 430.175,48.046L437.746,50.153C437.783,50.166 437.821,50.176 437.857,50.191C437.929,50.221 437.997,50.259 438.061,50.304C438.35,50.511 438.51,50.867 438.473,51.22C438.465,51.298 438.447,51.374 438.421,51.448C438.409,51.485 438.391,51.52 438.376,51.556C438.313,51.686 438.248,51.816 438.182,51.945C438,52.289 437.81,52.629 437.604,52.96C437.219,53.582 436.788,54.175 436.318,54.735C435.346,55.893 434.208,56.904 432.969,57.767C432.311,58.225 431.626,58.645 430.914,59.014C430.087,59.443 429.224,59.803 428.34,60.096C426.348,60.755 424.253,61.068 422.159,61.126C420.442,61.174 418.717,61.057 417.032,60.717C416.146,60.539 415.273,60.299 414.422,59.994C413.673,59.726 412.941,59.406 412.231,59.046C411.274,58.561 410.356,57.997 409.497,57.353C407.821,56.098 406.376,54.537 405.241,52.778C404.055,50.941 403.203,48.885 402.719,46.753C402.239,44.637 402.133,42.445 402.346,40.288C402.624,37.469 403.488,34.701 404.943,32.267C405.867,30.72 407.027,29.312 408.374,28.115C409.291,27.3 410.294,26.584 411.356,25.973C412.325,25.415 413.343,24.936 414.394,24.555C415.135,24.286 415.894,24.067 416.664,23.894C417.629,23.678 418.611,23.536 419.597,23.458C420.132,23.416 420.669,23.396 421.206,23.387C421.479,23.386 421.479,23.386 421.752,23.387C422.464,23.399 423.172,23.435 423.88,23.506C425.258,23.643 426.627,23.923 427.943,24.356C428.816,24.643 429.663,25.004 430.484,25.419C431.439,25.902 432.355,26.462 433.214,27.1C434.115,27.769 434.95,28.524 435.706,29.353C437.007,30.779 438.062,32.418 438.83,34.189C439.638,36.048 440.15,38.038 440.352,40.055C440.405,40.582 440.437,41.11 440.448,41.64C440.458,42.078 440.454,42.517 440.445,42.956C440.43,43.714 440.411,44.475 440.246,45.218L440.228,45.293C440.2,45.388 440.196,45.413 440.152,45.502C440.037,45.736 439.83,45.919 439.583,46.004C439.513,46.029 439.441,46.045 439.367,46.053C439.33,46.057 439.293,46.057 439.256,46.059L413.746,46.059ZM321.117,23.387C322.33,23.401 323.541,23.477 324.741,23.655C326.861,23.968 328.95,24.593 330.817,25.66C331.306,25.939 331.779,26.249 332.23,26.586C332.776,26.995 333.292,27.445 333.767,27.934C334.325,28.509 334.826,29.138 335.261,29.81C335.876,30.761 336.357,31.795 336.709,32.87C337.11,34.09 337.347,35.36 337.461,36.638C337.514,37.218 337.538,37.8 337.546,38.383C337.563,42.084 337.485,45.785 337.549,49.486C337.553,49.655 337.563,49.823 337.586,49.991C337.599,50.089 337.617,50.186 337.64,50.281C337.674,50.416 337.719,50.565 337.809,50.674C337.85,50.723 337.901,50.763 337.956,50.794C338.01,50.825 338.067,50.85 338.125,50.87C338.193,50.894 338.263,50.913 338.334,50.927C338.462,50.953 338.591,50.966 338.72,50.975L338.835,50.989C338.935,51.013 338.961,51.015 339.056,51.057C339.305,51.166 339.502,51.377 339.594,51.632C339.62,51.705 339.638,51.78 339.647,51.857C339.651,51.895 339.651,51.934 339.654,51.973L339.654,59.478C339.648,59.579 339.651,59.606 339.628,59.705C339.567,59.966 339.399,60.197 339.169,60.335C339.104,60.374 339.034,60.406 338.961,60.43C338.925,60.441 338.888,60.449 338.851,60.459C338.569,60.515 338.569,60.515 338.286,60.569C337.925,60.635 337.563,60.697 337.199,60.749C336.545,60.843 335.885,60.909 335.223,60.931C334.585,60.953 333.943,60.932 333.31,60.84C332.376,60.705 331.453,60.411 330.667,59.88C330.353,59.668 330.064,59.419 329.801,59.147C329.472,58.806 329.187,58.425 328.953,58.013C328.651,57.48 328.446,56.905 328.309,56.309C328.189,56.43 328.067,56.548 327.944,56.665C327.15,57.408 326.289,58.076 325.363,58.647C323.793,59.615 322.055,60.314 320.257,60.717C319.153,60.965 318.025,61.1 316.894,61.13C315.807,61.159 314.719,61.088 313.65,60.887C311.686,60.518 309.786,59.718 308.194,58.504C306.522,57.23 305.198,55.503 304.417,53.55C303.963,52.419 303.712,51.214 303.638,49.998C303.583,49.083 303.623,48.161 303.783,47.257C303.979,46.15 304.355,45.08 304.891,44.092C305.5,42.967 306.302,41.954 307.251,41.096C308.239,40.204 309.376,39.481 310.577,38.91C312.667,37.915 314.947,37.358 317.248,37.164C318.765,37.037 320.296,37.055 321.81,37.196C323.457,37.35 325.094,37.651 326.673,38.145L326.724,38.161C326.724,37.79 326.729,37.418 326.709,37.047C326.675,36.43 326.581,35.814 326.398,35.223C326.262,34.786 326.075,34.364 325.831,33.977C325.661,33.706 325.463,33.453 325.24,33.223C325.097,33.075 324.944,32.936 324.782,32.808C323.791,32.027 322.524,31.692 321.288,31.569C321.048,31.545 320.808,31.529 320.567,31.519C320.278,31.508 319.988,31.506 319.699,31.513C319.271,31.522 318.844,31.551 318.418,31.599C317.888,31.659 317.361,31.75 316.84,31.869C316.206,32.015 315.583,32.205 314.973,32.433C314.156,32.739 313.362,33.103 312.591,33.51C311.622,34.02 310.692,34.599 309.789,35.218L309.691,35.278C309.656,35.293 309.622,35.311 309.587,35.325C309.515,35.353 309.441,35.373 309.365,35.383C309.059,35.427 308.743,35.323 308.523,35.107C308.468,35.053 308.42,34.993 308.379,34.928C308.358,34.896 308.342,34.861 308.323,34.828L305.624,29.232C305.609,29.198 305.593,29.164 305.581,29.13C305.557,29.06 305.54,28.988 305.531,28.914C305.501,28.656 305.574,28.392 305.733,28.186C305.778,28.128 305.829,28.074 305.886,28.027C305.914,28.004 305.945,27.984 305.975,27.962C306.188,27.821 306.188,27.822 306.402,27.683C307.115,27.231 307.843,26.804 308.591,26.412C310.048,25.65 311.572,25.016 313.144,24.533C314.699,24.055 316.299,23.725 317.916,23.547C318.734,23.457 319.556,23.409 320.379,23.39C320.625,23.387 320.871,23.386 321.117,23.387ZM394.089,10.424C394.203,10.447 394.233,10.447 394.341,10.492C394.584,10.593 394.782,10.79 394.882,11.033C394.916,11.114 394.939,11.199 394.95,11.285C394.956,11.328 394.956,11.372 394.958,11.416C394.958,23.784 394.868,36.153 394.959,48.52C394.969,48.958 395.013,49.396 395.144,49.815C395.217,50.05 395.317,50.276 395.451,50.482C395.538,50.614 395.638,50.737 395.752,50.846C395.819,50.911 395.891,50.97 395.967,51.024C396.367,51.306 396.861,51.411 397.343,51.43C397.48,51.435 397.618,51.434 397.756,51.426C397.872,51.419 397.988,51.407 398.104,51.392C398.264,51.37 398.423,51.342 398.58,51.308C398.756,51.27 398.93,51.225 399.102,51.175C399.318,51.114 399.531,51.046 399.743,50.971C400.017,50.875 400.286,50.766 400.552,50.648L400.655,50.601C400.695,50.586 400.735,50.568 400.777,50.555C400.86,50.53 400.946,50.515 401.033,50.512C401.385,50.5 401.725,50.679 401.913,50.976C401.96,51.049 401.997,51.129 402.023,51.211C402.036,51.253 402.044,51.296 402.054,51.338L403.239,58.053C403.252,58.168 403.26,58.197 403.251,58.313C403.228,58.574 403.101,58.82 402.902,58.989C402.813,59.064 402.784,59.074 402.684,59.13C402.564,59.187 402.444,59.243 402.324,59.297C401.272,59.761 400.176,60.108 399.056,60.365C398.41,60.513 397.758,60.632 397.103,60.734C396.631,60.807 396.156,60.867 395.681,60.912C395.366,60.942 395.05,60.966 394.734,60.982C392.7,61.084 390.592,60.867 388.746,59.951C388.439,59.798 388.141,59.627 387.855,59.438C387.478,59.188 387.122,58.906 386.793,58.595C386.354,58.181 385.963,57.716 385.632,57.212C385.23,56.601 384.917,55.935 384.686,55.242C384.301,54.083 384.153,52.864 384.137,51.647L384.136,51.514L384.136,11.416L384.145,11.285C384.153,11.242 384.159,11.199 384.17,11.157C384.193,11.072 384.226,10.991 384.27,10.916C384.402,10.688 384.623,10.518 384.877,10.45C384.99,10.42 385.02,10.423 385.136,10.416L393.958,10.416C394.002,10.419 394.045,10.421 394.089,10.424ZM295.002,60.478L285.983,60.478C285.867,60.471 285.836,60.474 285.724,60.444C285.426,60.364 285.177,60.146 285.059,59.861C285.025,59.78 285.002,59.695 284.991,59.609C284.985,59.565 284.985,59.522 284.983,59.478L284.983,21.699L271.037,21.699L270.907,21.69C270.793,21.668 270.762,21.668 270.654,21.623C270.411,21.522 270.214,21.325 270.113,21.082C270.08,21.001 270.057,20.916 270.046,20.83C270.04,20.786 270.04,20.742 270.037,20.699L270.037,12.732C270.04,12.689 270.04,12.645 270.046,12.602C270.057,12.515 270.08,12.431 270.113,12.35C270.231,12.065 270.48,11.846 270.778,11.767C270.891,11.736 270.921,11.74 271.037,11.732L309.948,11.732C309.991,11.735 310.035,11.738 310.078,11.741C310.192,11.764 310.223,11.764 310.331,11.809C310.574,11.909 310.771,12.106 310.872,12.35C310.905,12.431 310.928,12.515 310.939,12.602C310.945,12.645 310.945,12.689 310.948,12.732L310.948,20.699C310.94,20.815 310.944,20.845 310.914,20.958C310.834,21.256 310.615,21.505 310.331,21.623C310.25,21.656 310.165,21.679 310.078,21.69C310.035,21.696 309.992,21.696 309.948,21.699L296.002,21.699L296.002,59.478L295.994,59.609C295.985,59.651 295.98,59.695 295.968,59.737C295.946,59.821 295.912,59.902 295.868,59.978C295.737,60.206 295.516,60.376 295.261,60.444C295.149,60.474 295.118,60.471 295.002,60.478ZM320.646,44.019C319.486,44.031 318.316,44.177 317.226,44.589C316.609,44.822 316.023,45.141 315.504,45.549C315.105,45.862 314.744,46.23 314.477,46.663C314.27,46.997 314.124,47.366 314.047,47.751C313.983,48.066 313.966,48.39 313.982,48.711C314.01,49.278 314.151,49.837 314.425,50.337C314.761,50.947 315.276,51.452 315.853,51.835C316.528,52.284 317.306,52.544 318.109,52.639C318.583,52.695 319.063,52.693 319.54,52.667C320.445,52.616 321.343,52.452 322.205,52.171C323.212,51.843 324.2,51.369 324.999,50.663C325.185,50.499 325.357,50.321 325.52,50.133L325.585,50.064C325.681,49.981 325.781,49.904 325.878,49.821C325.941,49.765 326.003,49.708 326.063,49.649C326.342,49.366 326.588,49.038 326.682,48.645C326.711,48.524 326.722,48.402 326.724,48.277L326.724,45.043C326.01,44.806 325.282,44.611 324.546,44.452C323.765,44.283 322.976,44.155 322.179,44.084C321.769,44.047 321.358,44.028 320.947,44.02C320.847,44.019 320.746,44.018 320.646,44.019ZM361.747,32.892C360.987,32.904 360.232,33.019 359.512,33.265C358.892,33.476 358.305,33.779 357.766,34.15C357.368,34.424 356.997,34.735 356.644,35.065C355.929,35.731 355.299,36.485 354.77,37.307C354.458,37.792 354.185,38.3 353.941,38.823L353.941,46.661C354.134,47.166 354.383,47.648 354.693,48.092C354.924,48.423 355.188,48.73 355.468,49.021C356.03,49.602 356.671,50.106 357.371,50.51C357.855,50.79 358.367,51.021 358.896,51.202C359.454,51.394 360.031,51.533 360.619,51.595C361.041,51.639 361.466,51.639 361.89,51.613C362.702,51.562 363.507,51.399 364.268,51.11C365.034,50.819 365.762,50.411 366.411,49.912C366.821,49.597 367.201,49.242 367.543,48.854C367.82,48.54 368.074,48.207 368.302,47.857C368.961,46.846 369.414,45.7 369.649,44.518C369.81,43.71 369.868,42.885 369.844,42.062C369.809,40.892 369.6,39.73 369.207,38.627C368.995,38.033 368.732,37.458 368.411,36.916C367.963,36.156 367.405,35.46 366.752,34.865C366.348,34.497 365.908,34.168 365.439,33.887C364.948,33.592 364.429,33.349 363.88,33.183C363.249,32.992 362.596,32.906 361.939,32.892C361.842,32.892 361.843,32.892 361.747,32.892ZM421.248,31.773C420.426,31.787 419.609,31.906 418.828,32.166C418.195,32.377 417.587,32.672 417.029,33.038C416.504,33.382 416.022,33.792 415.598,34.254C415.159,34.733 414.784,35.269 414.473,35.839C414.301,36.153 414.148,36.476 414.018,36.809C413.826,37.302 413.687,37.812 413.59,38.331L429.226,38.331C429.049,37.399 428.748,36.493 428.278,35.666C427.844,34.903 427.275,34.226 426.611,33.653C425.892,33.034 425.067,32.544 424.172,32.229C423.329,31.933 422.443,31.797 421.552,31.774C421.451,31.773 421.349,31.772 421.248,31.773Z"
    }
  }), _c('path', {
    staticClass: "io",
    attrs: {
      "d": "M490.651,46.437C491.183,46.445 491.712,46.495 492.232,46.609C492.716,46.715 493.186,46.877 493.633,47.091C494.347,47.432 495.002,47.895 495.547,48.47C495.968,48.915 496.326,49.419 496.607,49.964C497.363,51.426 497.567,53.161 497.212,54.765C497.027,55.604 496.685,56.412 496.203,57.125C495.966,57.477 495.694,57.807 495.392,58.106C494.926,58.566 494.383,58.945 493.799,59.239C493.436,59.422 493.059,59.573 492.669,59.686C492.046,59.866 491.398,59.952 490.749,59.966C489.678,59.989 488.599,59.823 487.615,59.385C486.837,59.039 486.122,58.554 485.535,57.934C485.169,57.547 484.85,57.116 484.589,56.652C483.42,54.578 483.406,51.91 484.55,49.822C484.832,49.308 485.183,48.832 485.591,48.412C486.087,47.902 486.672,47.484 487.307,47.165C487.67,46.983 488.047,46.832 488.437,46.719C488.999,46.556 489.579,46.474 490.163,46.445C490.326,46.438 490.488,46.436 490.651,46.437ZM476.291,55.773C476.382,55.783 476.462,55.834 476.5,55.918C476.513,55.946 476.519,55.974 476.522,56.004C476.564,57.167 476.564,58.333 476.522,59.496C476.513,59.587 476.461,59.667 476.377,59.706C476.349,59.718 476.321,59.724 476.291,59.728C475.4,59.759 474.507,59.759 473.615,59.728C473.524,59.718 473.444,59.667 473.406,59.582C473.393,59.554 473.387,59.526 473.384,59.496C473.342,58.333 473.342,57.167 473.384,56.004C473.387,55.974 473.393,55.946 473.406,55.918C473.444,55.834 473.524,55.783 473.615,55.773C474.507,55.741 475.4,55.741 476.291,55.773ZM482.081,59.728L478.865,59.728C478.83,59.725 478.821,59.727 478.788,59.716C478.712,59.691 478.652,59.631 478.627,59.555C478.616,59.522 478.618,59.513 478.615,59.478L478.615,46.902C478.618,46.868 478.616,46.858 478.627,46.825C478.652,46.749 478.712,46.689 478.788,46.664C478.821,46.654 478.83,46.655 478.865,46.652C479.95,46.652 481.038,46.57 482.12,46.655C482.154,46.663 482.163,46.663 482.195,46.679C482.253,46.709 482.298,46.762 482.319,46.825C482.33,46.858 482.328,46.868 482.331,46.902L482.331,59.478C482.328,59.513 482.33,59.522 482.319,59.555C482.294,59.631 482.234,59.691 482.158,59.716C482.125,59.727 482.116,59.725 482.081,59.728ZM490.473,49.673C490.165,49.685 489.863,49.737 489.574,49.846C489.384,49.918 489.203,50.012 489.033,50.121C488.884,50.217 488.744,50.326 488.615,50.447C488.114,50.913 487.784,51.543 487.627,52.206C487.534,52.601 487.503,53.008 487.519,53.412C487.533,53.777 487.587,54.141 487.697,54.49C487.932,55.242 488.409,55.932 489.094,56.339C489.246,56.429 489.405,56.505 489.571,56.565C489.885,56.679 490.219,56.732 490.553,56.732C490.887,56.732 491.221,56.679 491.535,56.565C492.061,56.374 492.517,56.025 492.853,55.58C493.051,55.319 493.206,55.027 493.324,54.722C493.453,54.387 493.532,54.034 493.568,53.676C493.617,53.179 493.594,52.669 493.479,52.182C493.322,51.521 492.993,50.888 492.491,50.424C492.363,50.305 492.224,50.198 492.076,50.104C491.906,49.997 491.724,49.908 491.535,49.839C491.245,49.734 490.942,49.685 490.633,49.673C490.553,49.672 490.553,49.672 490.473,49.673ZM482.081,45.4L478.865,45.4C478.83,45.397 478.821,45.399 478.788,45.388C478.712,45.363 478.652,45.303 478.627,45.227C478.616,45.194 478.618,45.185 478.615,45.15L478.615,41.958C478.618,41.924 478.616,41.914 478.627,41.881C478.652,41.805 478.712,41.745 478.788,41.72C478.821,41.71 478.83,41.711 478.865,41.708C479.95,41.708 481.038,41.626 482.12,41.711C482.154,41.719 482.163,41.719 482.195,41.735C482.253,41.765 482.298,41.818 482.319,41.881C482.33,41.914 482.328,41.924 482.331,41.958L482.331,45.15C482.328,45.185 482.33,45.194 482.319,45.227C482.294,45.303 482.234,45.363 482.158,45.388C482.125,45.399 482.116,45.397 482.081,45.4Z"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "container"
  }, [_c('p', {
    staticClass: "loaded-from"
  }, [_c('span', [_vm._v("This page is loaded from the " + _vm._s(_vm.name))])]), _c('h1', [_vm._v("Style Guide")]), _c('h2', [_vm._v("Tabs")]), _vm._m(0), _vm._m(1), _c('h2', [_vm._v("Panels")]), _c('div', {
    staticClass: "panel panel-success"
  }, [_vm._v("...")]), _c('div', {
    staticClass: "panel panel-warning"
  }, [_vm._v("...")]), _c('div', {
    staticClass: "panel panel-danger"
  }, [_vm._v("...")]), _c('h2', [_vm._v("Buttons")]), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default")]), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")]), _c('button', {
    staticClass: "btn btn-link",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Link")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav nav-tabs",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "active",
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#github",
      "aria-controls": "github",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("GitHub")])]), _c('li', {
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#s3",
      "aria-controls": "s3",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("S3")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "role": "tabpanel",
      "id": "github"
    }
  }, [_vm._v("\n      GitHub tab\n    ")]), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "role": "tabpanel",
      "id": "s3"
    }
  }, [_vm._v("\n      S3 tab\n    ")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "landing"
  }, [_c('header', {
    staticClass: "main-header"
  }, [_c('div', {
    staticClass: "pattern"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "main-nav"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('logo'), _vm._m(0)], 1)]), _c('div', {
    staticClass: "content"
  }, [_vm._m(1), _c('a', {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: ('#features'),
      expression: "'#features'"
    }],
    staticClass: "next",
    attrs: {
      "href": "#features"
    }
  }, [_vm._m(2), _vm._m(3)])])])])])]), _c('section', {
    staticClass: "features",
    attrs: {
      "id": "features"
    }
  }, [_vm._m(4), _c('a', {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: ('#about'),
      expression: "'#about'"
    }],
    staticClass: "next",
    attrs: {
      "href": "#about"
    }
  }, [_vm._m(5)])]), _c('section', {
    staticClass: "text",
    attrs: {
      "id": "about"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('nuxt')], 1), _vm._m(6)])]), _c('my-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "link-icon icon-login"
  }), _c('span', {
    staticClass: "link-text"
  }, [_vm._v("Sign in with GitHub")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "source-item panel panel-success"
  }, [_c('div', [_c('span', {
    staticClass: "source"
  }, [_c('span', {
    staticClass: "label label-success"
  }, [_c('span', {
    staticClass: "icon-checkmark"
  }, [_c('i', [_vm._v("Valid")])])]), _c('p', {
    staticClass: "panel-title"
  }, [_vm._v("\n                    repository/my-data\n                  ")])]), _c('span', {
    staticClass: "job"
  }, [_c('span', {
    staticClass: "icon-clock"
  }), _c('span', {
    staticClass: "time"
  }, [_vm._v(" a minute ago")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v("meet "), _c('strong', [_vm._v("goodTables")]), _c('small', [_vm._v(".io")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon-keyboard_arrow_down"
  }, [_c('i', [_vm._v("Learn more")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h2', [_vm._v("the web service for the continuous validation of data quality")]), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('ul', {
    staticClass: "feature-list"
  }, [_c('li', {
    staticClass: "check"
  }, [_c('span', {
    staticClass: "wrapper"
  }, [_c('span', {
    staticClass: "icon-goodtables"
  })]), _c('p', [_vm._v("Automatically check data is good on every update.")])]), _c('li', {
    staticClass: "validate"
  }, [_c('span', {
    staticClass: "wrapper"
  }, [_c('span', {
    staticClass: "icon-mouse-pointer"
  })]), _c('p', [_vm._v("Validate data with a minimum of clicks.")])]), _c('li', {
    staticClass: "trust"
  }, [_c('span', {
    staticClass: "wrapper"
  }, [_c('span', {
    staticClass: "icon-shield"
  })]), _c('p', [_vm._v("Trust in the validity and usefulness of your data.")])]), _c('li', {
    staticClass: "connect"
  }, [_c('span', {
    staticClass: "icon-github"
  }), _c('p', [_vm._v("Connect directly to your data repository.")])]), _c('li', {
    staticClass: "quality"
  }, [_c('span', {
    staticClass: "wrapper"
  }, [_c('span', {
    staticClass: "icon-checkmark"
  }), _c('span', {
    staticClass: "icon-checkmark"
  })]), _c('p', [_vm._v("Prove that your data is of consistent good quality.")])]), _c('li', {
    staticClass: "errors"
  }, [_c('span', {
    staticClass: "icon-clock"
  }), _c('p', [_vm._v("Catch and identify errors early.")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon-keyboard_arrow_down"
  }, [_c('i', [_vm._v("More")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cta"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Sign in with GitHub")]), _c('h2', [_vm._v("Try it yourself. It's Free!*")]), _c('small', [_vm._v("* While the basic service of goodtables.io will always remain free, there will be additional features for paid plans in the future. Watch this space!")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.status === 'valid') ? _c('div', {
    staticClass: "source-item panel panel-success",
    class: [_vm.source, _vm.job]
  }, [_c('SourceItemContent', {
    attrs: {
      "title": _vm.title,
      "integration": _vm.integration,
      "jobnumber": _vm.jobnumber,
      "jobtotal": _vm.jobtotal,
      "status": "valid",
      "time": _vm.time,
      "source": _vm.source,
      "job": _vm.job
    }
  })], 1) : (_vm.status === 'invalid') ? _c('div', {
    staticClass: "source-item panel panel-danger",
    class: [_vm.source, _vm.job]
  }, [_c('SourceItemContent', {
    attrs: {
      "title": _vm.title,
      "integration": _vm.integration,
      "jobnumber": _vm.jobnumber,
      "jobtotal": _vm.jobtotal,
      "status": "invalid",
      "time": _vm.time,
      "source": _vm.source,
      "job": _vm.job
    }
  })], 1) : _c('div', {
    staticClass: "source-item panel panel-warning",
    class: [_vm.source, _vm.job]
  }, [_c('SourceItemContent', {
    attrs: {
      "title": _vm.title,
      "integration": _vm.integration,
      "jobnumber": _vm.jobnumber,
      "jobtotal": _vm.jobtotal,
      "status": "...",
      "time": _vm.time,
      "source": _vm.source,
      "job": _vm.job
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.type === 'warning') ? _c('div', {
    staticClass: "result panel panel-warning"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('span', {
    staticClass: "text-uppercase label label-warning"
  }, [_vm._v("Warning")]), _c('span', {
    staticClass: "count label"
  }, [_vm._v(_vm._s(_vm.count))]), (_vm.count === '1') ? _c('h5', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _c('h5', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.title) + "s")]), _c('span', {
    staticClass: "help",
    attrs: {
      "data-toggle": "popover",
      "title": _vm.helptitle,
      "data-content": _vm.description,
      "data-placement": "left",
      "rel": "popover"
    }
  }, [_vm._m(0)])]), _c('div', {
    staticClass: "panel-body"
  }, [_vm._t("default")], 2)]) : _c('div', {
    staticClass: "result panel panel-danger"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('span', {
    staticClass: "text-uppercase label label-danger"
  }, [_vm._v("Error")]), _c('span', {
    staticClass: "count label"
  }, [_vm._v(_vm._s(_vm.count))]), (_vm.count === '1') ? _c('h5', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _c('h5', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.title) + "s")]), _c('span', {
    staticClass: "help",
    attrs: {
      "data-toggle": "popover",
      "title": _vm.helptitle,
      "data-content": _vm.description,
      "data-placement": "left",
      "rel": "popover"
    }
  }, [_c('span', {
    staticClass: "icon-info"
  }, [_c('i', [_vm._v("What is this?")])])])]), _c('div', {
    staticClass: "panel-body"
  }, [_vm._t("default")], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon-info"
  }, [_c('i', [_vm._v("What is this?")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.nuxt.err) ? _c('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _c('nuxt-child')
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "site-footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "footer-primary"
  }, [_c('a', {
    staticClass: "footer-logo",
    attrs: {
      "href": "https://okfn.org/"
    }
  }, [_c('img', {
    attrs: {
      "src": "https://a.okfn.org/img/oki/landscape-white-468x122.png",
      "alt": "Open Knowledge International"
    }
  })]), _c('ul', {
    staticClass: "footer-links"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "https://twitter.com/OKFNLabs"
    }
  }, [_vm._v("@OKFNLabs")])])])]), _c('div', {
    staticClass: "footer-secondary"
  }, [_c('p', [_vm._v("\n        © "), _c('a', {
    attrs: {
      "href": "https://okfn.org"
    }
  }, [_vm._v("Open Knowledge International")]), _vm._v(" 2017\n      ")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "invalid"
  }, [_c('div', {
    staticClass: "inner banner"
  }, [_vm._m(0), _vm._m(1), _c('source-item', {
    attrs: {
      "title": "okfn/test-data",
      "integration": "github",
      "jobnumber": "8",
      "jobtotal": "8",
      "status": "invalid",
      "time": "1 day ago",
      "source": "active",
      "job": "active"
    }
  })], 1), _c('section', {
    staticClass: "inner"
  }, [_c('div', [_vm._m(2), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "report tab-pane active",
    attrs: {
      "role": "tabpanel",
      "id": "report"
    }
  }, [_c('report-error', {
    attrs: {
      "title": "Datapackage validatation",
      "helptitle": "<span class='label label-info'>Structure</span> Datapackage validatation error",
      "count": "1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis interdum aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <a>Read more</a>"
    }
  }, [_vm._v("\n            Attribute resource should be a list\n          ")]), _c('report-error', {
    attrs: {
      "title": "Datapackage validatation",
      "helptitle": "<span class='label label-info'>Structure</span> Datapackage validatation error",
      "count": "1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis interdum aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <a>Read more</a>",
      "type": "warning"
    }
  }, [_vm._v("\n            Validation is limited by error limit setting\n          ")]), _vm._m(3), _c('report-error', {
    attrs: {
      "title": "Missing Header",
      "helptitle": "<span class='label label-info'>Structure</span> Missing Header",
      "count": "1",
      "description": "Header column is empty. <a>Read more</a>"
    }
  }, [_c('table', {
    staticClass: "table table-bordered table-condensed"
  }, [_c('tbody', [_c('tr', {
    staticClass: "result-header-row"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("1")]), _c('td', [_vm._v("id")]), _c('td', [_vm._v("name")]), _c('td', {
    staticClass: "danger"
  }), _c('td', [_vm._v("name")])])])])]), _c('report-error', {
    attrs: {
      "title": "Duplicate Header",
      "helptitle": "<span class='label label-info'>Structure</span> Duplicate Header",
      "count": "1",
      "description": "The headers highlighted below are duplicates. <a>Read more</a>"
    }
  }, [_c('table', {
    staticClass: "table table-bordered table-condensed"
  }, [_c('tbody', [_c('tr', {
    staticClass: "result-header-row"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("1")]), _c('td', [_vm._v("id")]), _c('td', {
    staticClass: "danger"
  }, [_vm._v("name")]), _c('td'), _c('td', {
    staticClass: "danger"
  }, [_vm._v("name")])])])])]), _c('report-error', {
    attrs: {
      "title": "Defective Row",
      "helptitle": "<span class='label label-info'>Structure</span> Defective Row",
      "count": "3",
      "description": "The row dimensions are incorrect compared to headers. <a>Read more</a>"
    }
  }, [_c('table', {
    staticClass: "table table-bordered table-condensed"
  }, [_c('tbody', [_c('tr', {
    staticClass: "result-header-row"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("1")]), _c('td', [_vm._v("id")]), _c('td', [_vm._v("name")]), _c('td'), _c('td', [_vm._v("name")])]), _c('tr', {
    staticClass: "result-row danger"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("2")]), _c('td', [_vm._v("1")]), _c('td', [_vm._v("english")])]), _c('tr', {
    staticClass: "result-row danger"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("3")]), _c('td', [_vm._v("1")]), _c('td', [_vm._v("english")])]), _c('tr', {
    staticClass: "result-row danger"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("4")]), _c('td', [_vm._v("2")]), _c('td', [_vm._v("german")]), _c('td', [_vm._v("1")]), _c('td', [_vm._v("2")]), _c('td', [_vm._v("3")])])])])]), _c('report-error', {
    attrs: {
      "title": "Duplicate Row",
      "helptitle": "<span class='label label-info'>Structure</span> Duplicate Row",
      "count": "1",
      "description": "The exact same row has been seen before (a duplicate). <a>Read more</a>"
    }
  }, [_c('table', {
    staticClass: "table table-bordered table-condensed"
  }, [_c('tbody', [_c('tr', {
    staticClass: "result-header-row"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("1")]), _c('td', [_vm._v("id")]), _c('td', [_vm._v("name")]), _c('td'), _c('td', [_vm._v("name")])]), _c('tr', {
    staticClass: "result-row danger"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("3")]), _c('td', [_vm._v("1")]), _c('td', [_vm._v("english")])])])])]), _vm._m(4), _c('report-error', {
    attrs: {
      "title": "Missing Header",
      "helptitle": "<span class='label label-info'>Structure</span> Missing Header",
      "count": "1",
      "description": "Header column is empty. <a>Read more</a>"
    }
  }, [_c('table', {
    staticClass: "table table-bordered table-condensed"
  }, [_c('tbody', [_c('tr', {
    staticClass: "result-header-row"
  }, [_c('td', {
    staticClass: "result-row-index"
  }, [_vm._v("1")]), _c('td', [_vm._v("id")]), _c('td', [_vm._v("name")]), _c('td', {
    staticClass: "danger"
  }), _c('td', [_vm._v("name")])])])])])], 1), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "role": "tabpanel",
      "id": "history"
    }
  }, [_vm._v("\n         History here\n       ")])])]), _vm._m(5)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "icon-github integration"
  }, [_c('i', [_vm._v("GitHub")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "source-title"
  }, [_vm._v("\n      Test Data\n      "), _c('small', [_vm._v("github/okfn/test-data")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav nav-tabs",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "active",
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#report",
      "aria-controls": "home",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("Report")])]), _c('li', {
    attrs: {
      "role": "presentation"
    }
  }, [_c('a', {
    attrs: {
      "href": "#history",
      "aria-controls": "profile",
      "role": "tab",
      "data-toggle": "tab"
    }
  }, [_vm._v("Job history")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', {
    staticClass: "file-heading"
  }, [_c('span', [_c('a', {
    staticClass: "file-name"
  }, [_vm._v("github/okfn/test-data/master/some-file.csv")]), _c('a', {
    staticClass: "file-count"
  }, [_vm._v("File 1 of 2")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', {
    staticClass: "file-heading"
  }, [_c('span', [_c('a', {
    staticClass: "file-name"
  }, [_vm._v("github/okfn/test-data/master/another-file.csv")]), _c('a', {
    staticClass: "file-count"
  }, [_vm._v("File 2 of 2")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "meta"
  }, [_c('li', [_vm._v("\n        Report calculated on Mon Mar 13 at 01:29 PM\n      ")]), _c('li', [_vm._v("\n        Source added: 21 Feb 2017\n      ")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.integration
  }, [_c('a', {
    staticClass: "source",
    class: {
      active: _vm.source
    }
  }, [_c('span', {
    staticClass: "status"
  }, [_vm._v(_vm._s(_vm.status) + " ")]), (_vm.status === 'valid') ? _c('span', {
    staticClass: "label label-success"
  }, [_vm._m(0)]) : (_vm.status === 'invalid') ? _c('span', {
    staticClass: "label label-danger"
  }, [_c('span', {
    staticClass: "icon-cross"
  }, [_c('i', [_vm._v("Invalid")])])]) : _vm._e(), _c('h3', {
    staticClass: "panel-title"
  }, [_vm._v(_vm._s(_vm.integration) + "/" + _vm._s(_vm.title)), _c('span', {
    staticClass: "jobnumber"
  }, [_vm._v("#" + _vm._s(_vm.jobnumber))])])]), _c('a', {
    staticClass: "job",
    class: {
      active: _vm.job
    }
  }, [_c('span', {
    staticClass: "jobcount"
  }, [_c('span', {
    staticClass: "jobnumber"
  }, [_vm._v(" #" + _vm._s(_vm.jobnumber))]), _c('span', {
    staticClass: "jobtotal"
  }, [_vm._v(" of " + _vm._s(_vm.jobtotal))])]), _c('span', {
    staticClass: "icon-clock"
  }), _c('span', {
    staticClass: "time"
  }, [_vm._v(" " + _vm._s(_vm.time))])]), (_vm.integration === 'github') ? _c('a', {
    staticClass: "integration icon-github"
  }) : (_vm.integration === 'aws') ? _c('a', {
    staticClass: "integration icon-amazon"
  }) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon-checkmark"
  }, [_c('i', [_vm._v("Valid")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(24)("46d75593", content, false);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(24)("95a047aa", content, false);

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(24)("1ae7e60b", content, false);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(24)("5c9d24ca", content, false);

/***/ }),
/* 170 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("vue-scrollto");

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(61);



var debug = __webpack_require__(62)('nuxt:render');
debug.color = 4; // force blue color







var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_5__index__["a" /* app */]);

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ __webpack_exports__["default"] = function (context) {
  // Add store to the context

  // Nuxt object
  context.nuxt = { data: [], error: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    // if nuxt generate
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* urlJoin */])('/goodtables-ui/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_5__index__["b" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_5__index__["b" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* getContext */])(context);
  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* getMatchedComponents */])(context.route);

  var promise = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();

  return promise.then(function () {
    // Sanitize Components
    Components = Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      return Component;
    });
    // Set layout
    return _app.setLayout(Components.length ? Components[0].options.layout : '');
  }).then(function (layout) {
    // Call middleware
    var midd = [];
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
    midd = midd.map(function (name) {
      if (typeof __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */][name] !== 'function') {
        context.nuxt.error = context.error({ statusCode: 500, message: 'Unknown middleware ' + name });
      }
      return __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */][name];
    });
    if (context.nuxt.error) return;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* promiseSeries */])(midd, ctx);
  }).then(function () {
    // Call .validate()
    var isValid = true;
    Components.forEach(function (Component) {
      if (!isValid) return;
      if (typeof Component.options.validate !== 'function') return;
      isValid = Component.options.validate({
        params: context.route.params || {},
        query: context.route.query || {}
      });
    });
    if (!isValid) {
      // Don't server-render the page in generate mode
      if (context._generate) {
        context.nuxt.serverRendered = false;
      }
      // Call the 404 error by making the Components array empty
      Components = [];
      return _app;
    }
    // Call data & fetch hooks on components matched by the route.
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component) {
      var promises = [];
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.' });

      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;

    return _app;
  }).catch(function (error) {
    if (error && (error instanceof Error || error.constructor.toString().indexOf('Error()') !== -1)) {
      var statusCode = error.statusCode || error.status || error.response && error.response.status || 500;
      error = { statusCode: statusCode, message: error.message };
    } else if (typeof error === 'string') {
      error = { statusCode: 500, message: error };
    }
    context.nuxt.error = context.error(error);

    return _app;
  });
};

/***/ })
/******/ ]);