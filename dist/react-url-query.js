(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-url-query"] = factory(require("react"));
	else
		root["react-url-query"] = factory(root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.subqueryOmit = exports.subquery = exports.urlQueryReducer = exports.urlQueryMiddleware = exports.urlMultiPushInAction = exports.urlMultiReplaceInAction = exports.urlPushInAction = exports.urlReplaceInAction = exports.urlPushAction = exports.urlReplaceAction = exports.urlAction = exports.multiPushInUrlQueryFromAction = exports.pushUrlQueryFromAction = exports.pushInUrlQueryFromAction = exports.multiReplaceInUrlQueryFromAction = exports.replaceUrlQueryFromAction = exports.replaceInUrlQueryFromAction = exports.RouterToUrlQuery = exports.addUrlProps = exports.UrlUpdateTypes = exports.UrlQueryParamTypes = exports.urlQueryEncoder = exports.urlQueryDecoder = exports.multiPushInUrlQuery = exports.multiReplaceInUrlQuery = exports.pushUrlQuery = exports.pushInUrlQuery = exports.replaceUrlQuery = exports.replaceInUrlQuery = exports.decode = exports.encode = exports.Serialize = exports.configureUrlQuery = undefined;

	var _serialize = __webpack_require__(2);

	Object.defineProperty(exports, 'encode', {
	  enumerable: true,
	  get: function get() {
	    return _serialize.encode;
	  }
	});
	Object.defineProperty(exports, 'decode', {
	  enumerable: true,
	  get: function get() {
	    return _serialize.decode;
	  }
	});

	var _updateUrlQuery = __webpack_require__(4);

	Object.defineProperty(exports, 'replaceInUrlQuery', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQuery.replaceInUrlQuery;
	  }
	});
	Object.defineProperty(exports, 'replaceUrlQuery', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQuery.replaceUrlQuery;
	  }
	});
	Object.defineProperty(exports, 'pushInUrlQuery', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQuery.pushInUrlQuery;
	  }
	});
	Object.defineProperty(exports, 'pushUrlQuery', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQuery.pushUrlQuery;
	  }
	});
	Object.defineProperty(exports, 'multiReplaceInUrlQuery', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQuery.multiReplaceInUrlQuery;
	  }
	});
	Object.defineProperty(exports, 'multiPushInUrlQuery', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQuery.multiPushInUrlQuery;
	  }
	});

	var _updateUrlQueryFromAction = __webpack_require__(6);

	Object.defineProperty(exports, 'replaceInUrlQueryFromAction', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQueryFromAction.replaceInUrlQueryFromAction;
	  }
	});
	Object.defineProperty(exports, 'replaceUrlQueryFromAction', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQueryFromAction.replaceUrlQueryFromAction;
	  }
	});
	Object.defineProperty(exports, 'multiReplaceInUrlQueryFromAction', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQueryFromAction.multiReplaceInUrlQueryFromAction;
	  }
	});
	Object.defineProperty(exports, 'pushInUrlQueryFromAction', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQueryFromAction.pushInUrlQueryFromAction;
	  }
	});
	Object.defineProperty(exports, 'pushUrlQueryFromAction', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQueryFromAction.pushUrlQueryFromAction;
	  }
	});
	Object.defineProperty(exports, 'multiPushInUrlQueryFromAction', {
	  enumerable: true,
	  get: function get() {
	    return _updateUrlQueryFromAction.multiPushInUrlQueryFromAction;
	  }
	});

	var _urlAction2 = __webpack_require__(19);

	Object.defineProperty(exports, 'urlReplaceAction', {
	  enumerable: true,
	  get: function get() {
	    return _urlAction2.urlReplaceAction;
	  }
	});
	Object.defineProperty(exports, 'urlPushAction', {
	  enumerable: true,
	  get: function get() {
	    return _urlAction2.urlPushAction;
	  }
	});
	Object.defineProperty(exports, 'urlReplaceInAction', {
	  enumerable: true,
	  get: function get() {
	    return _urlAction2.urlReplaceInAction;
	  }
	});
	Object.defineProperty(exports, 'urlPushInAction', {
	  enumerable: true,
	  get: function get() {
	    return _urlAction2.urlPushInAction;
	  }
	});
	Object.defineProperty(exports, 'urlMultiReplaceInAction', {
	  enumerable: true,
	  get: function get() {
	    return _urlAction2.urlMultiReplaceInAction;
	  }
	});
	Object.defineProperty(exports, 'urlMultiPushInAction', {
	  enumerable: true,
	  get: function get() {
	    return _urlAction2.urlMultiPushInAction;
	  }
	});

	var _configureUrlQuery2 = __webpack_require__(5);

	var _configureUrlQuery3 = _interopRequireDefault(_configureUrlQuery2);

	var _Serialize = _interopRequireWildcard(_serialize);

	var _urlQueryDecoder2 = __webpack_require__(8);

	var _urlQueryDecoder3 = _interopRequireDefault(_urlQueryDecoder2);

	var _urlQueryEncoder2 = __webpack_require__(21);

	var _urlQueryEncoder3 = _interopRequireDefault(_urlQueryEncoder2);

	var _UrlQueryParamTypes2 = __webpack_require__(16);

	var _UrlQueryParamTypes3 = _interopRequireDefault(_UrlQueryParamTypes2);

	var _UrlUpdateTypes2 = __webpack_require__(1);

	var _UrlUpdateTypes3 = _interopRequireDefault(_UrlUpdateTypes2);

	var _addUrlProps2 = __webpack_require__(18);

	var _addUrlProps3 = _interopRequireDefault(_addUrlProps2);

	var _RouterToUrlQuery2 = __webpack_require__(17);

	var _RouterToUrlQuery3 = _interopRequireDefault(_RouterToUrlQuery2);

	var _urlAction3 = _interopRequireDefault(_urlAction2);

	var _urlQueryMiddleware2 = __webpack_require__(20);

	var _urlQueryMiddleware3 = _interopRequireDefault(_urlQueryMiddleware2);

	var _urlQueryReducer2 = __webpack_require__(7);

	var _urlQueryReducer3 = _interopRequireDefault(_urlQueryReducer2);

	var _subquery2 = __webpack_require__(22);

	var _subquery3 = _interopRequireDefault(_subquery2);

	var _subqueryOmit2 = __webpack_require__(23);

	var _subqueryOmit3 = _interopRequireDefault(_subqueryOmit2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.configureUrlQuery = _configureUrlQuery3.default;
	exports.Serialize = _Serialize;
	exports.urlQueryDecoder = _urlQueryDecoder3.default;
	exports.urlQueryEncoder = _urlQueryEncoder3.default;
	exports.UrlQueryParamTypes = _UrlQueryParamTypes3.default;
	exports.UrlUpdateTypes = _UrlUpdateTypes3.default;

	/** React */

	exports.addUrlProps = _addUrlProps3.default;
	exports.RouterToUrlQuery = _RouterToUrlQuery3.default;

	/** Redux */

	exports.urlAction = _urlAction3.default;
	exports.urlQueryMiddleware = _urlQueryMiddleware3.default;
	exports.urlQueryReducer = _urlQueryReducer3.default;

	/** Utils */

	exports.subquery = _subquery3.default;
	exports.subqueryOmit = _subqueryOmit3.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var UrlUpdateTypes = {
	  replace: 'replace',
	  replaceIn: 'replaceIn',
	  multiReplaceIn: 'multiReplaceIn',
	  push: 'push',
	  pushIn: 'pushIn',
	  multiPushIn: 'multiPushIn'
	};

	exports.default = UrlUpdateTypes;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Encoders = exports.Decoders = exports.encodeNumericObject = exports.encodeNumericArray = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.encodeDate = encodeDate;
	exports.decodeDate = decodeDate;
	exports.encodeBoolean = encodeBoolean;
	exports.decodeBoolean = decodeBoolean;
	exports.encodeNumber = encodeNumber;
	exports.decodeNumber = decodeNumber;
	exports.encodeString = encodeString;
	exports.decodeString = decodeString;
	exports.encodeJson = encodeJson;
	exports.decodeJson = decodeJson;
	exports.encodeArray = encodeArray;
	exports.decodeArray = decodeArray;
	exports.decodeNumericArray = decodeNumericArray;
	exports.encodeObject = encodeObject;
	exports.decodeObject = decodeObject;
	exports.decodeNumericObject = decodeNumericObject;
	exports.decode = decode;
	exports.encode = encode;

	var _urlQueryConfig = __webpack_require__(3);

	var _urlQueryConfig2 = _interopRequireDefault(_urlQueryConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * Functions for encoding and decoding values as strings.
	                                                                                                                                                                                                     */


	/**
	 * Encodes a date as a string in YYYY-MM-DD format.
	 *
	 * @param {Date} date
	 * @return {String} the encoded date
	 */
	function encodeDate(date) {
	  if (date == null) {
	    return date;
	  }

	  var year = date.getFullYear();
	  var month = date.getMonth() + 1;
	  var day = date.getDate();

	  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
	}

	/**
	 * Converts a date in the format 'YYYY-mm-dd...' into a proper date, because
	 * new Date() does not do that correctly. The date can be as complete or incomplete
	 * as necessary (aka, '2015', '2015-10', '2015-10-01').
	 * It will not work for dates that have times included in them.
	 *
	 * @param  {String} dateString String date form like '2015-10-01'
	 * @return {Date} parsed date
	 */
	function decodeDate(dateString) {
	  if (dateString == null || !dateString.length) {
	    return undefined;
	  }

	  var parts = dateString.split('-');
	  // may only be a year so won't even have a month
	  if (parts[1] != null) {
	    parts[1] -= 1; // Note: months are 0-based
	  } else {
	    // just a year, set the month and day to the first
	    parts[1] = 0;
	    parts[2] = 1;
	  }

	  var decoded = new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(parts))))();

	  if (isNaN(decoded.getTime())) {
	    return undefined;
	  }

	  return decoded;
	}

	/**
	 * Encodes a boolean as a string. true -> "1", false -> "0".
	 *
	 * @param {Boolean} bool
	 * @return {String} the encoded boolean
	 */
	function encodeBoolean(bool) {
	  if (bool === undefined) {
	    return undefined;
	  }

	  return bool ? '1' : '0';
	}

	/**
	 * Decodes a boolean from a string. "1" -> true, "0" -> false.
	 * Everything else maps to undefined.
	 *
	 * @param {String} boolStr the encoded boolean string
	 * @return {Boolean} the boolean value
	 */
	function decodeBoolean(boolStr) {
	  if (boolStr === '1') {
	    return true;
	  } else if (boolStr === '0') {
	    return false;
	  }

	  return undefined;
	}

	/**
	 * Encodes a number as a string.
	 *
	 * @param {Number} num
	 * @return {String} the encoded number
	 */
	function encodeNumber(num) {
	  if (num == null) {
	    return undefined;
	  }

	  return String(num);
	}

	/**
	 * Decodes a number from a string via parseFloat. If the number is invalid,
	 * it returns undefined.
	 *
	 * @param {String} numStr the encoded number string
	 * @return {Number} the number value
	 */
	function decodeNumber(numStr) {
	  if (numStr == null) {
	    return undefined;
	  }

	  var result = parseFloat(numStr);

	  if (isNaN(result)) {
	    return undefined;
	  }

	  return result;
	}

	/**
	 * Encodes a string while safely handling null and undefined values.
	 *
	 * @param {String} string
	 * @return {String} the encoded string
	 */
	function encodeString(str) {
	  if (str == null) {
	    return undefined;
	  }

	  return String(str);
	}

	/**
	 * Decodes a string while safely handling null and undefined values.
	 *
	 * @param {String} str the encoded string
	 * @return {String} the string value
	 */
	function decodeString(str) {
	  if (str == null) {
	    return undefined;
	  }

	  return String(str);
	}

	/**
	 * Encodes anything as a JSON string.
	 *
	 * @param {Any} any The thing to be encoded
	 * @return {String} The JSON string representation of any
	 */
	function encodeJson(any) {
	  if (any == null) {
	    return undefined;
	  }

	  return JSON.stringify(any);
	}

	/**
	 * Decodes a JSON string into javascript
	 *
	 * @param {String} jsonStr The JSON string representation
	 * @return {Any} The javascript representation
	 */
	function decodeJson(jsonStr) {
	  if (!jsonStr) {
	    return undefined;
	  }

	  var result = void 0;
	  try {
	    result = JSON.parse(jsonStr);
	  } catch (e) {
	    /* ignore errors, returning undefined */
	  }

	  return result;
	}

	/**
	 * Encodes an array as a JSON string.
	 *
	 * @param {Array} array The array to be encoded
	 * @return {String} The JSON string representation of array
	 */
	function encodeArray(array) {
	  var entrySeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlQueryConfig2.default.entrySeparator;

	  if (!array) {
	    return undefined;
	  }

	  return array.join(entrySeparator);
	}

	/**
	 * Decodes a JSON string into javascript array
	 *
	 * @param {String} jsonStr The JSON string representation
	 * @return {Array} The javascript representation
	 */
	function decodeArray(arrayStr) {
	  var entrySeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlQueryConfig2.default.entrySeparator;

	  if (!arrayStr) {
	    return undefined;
	  }

	  return arrayStr.split(entrySeparator).map(function (item) {
	    return item === '' ? undefined : item;
	  });
	}

	/**
	 * Encodes a numeric array as a JSON string. (alias of encodeArray)
	 *
	 * @param {Array} array The array to be encoded
	 * @return {String} The JSON string representation of array
	 */
	var encodeNumericArray = exports.encodeNumericArray = encodeArray;

	/**
	 * Decodes a JSON string into javascript array where all entries are numbers
	 *
	 * @param {String} jsonStr The JSON string representation
	 * @return {Array} The javascript representation
	 */
	function decodeNumericArray(arrayStr) {
	  var entrySeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlQueryConfig2.default.entrySeparator;

	  var decoded = decodeArray(arrayStr, entrySeparator);

	  if (!decoded) {
	    return undefined;
	  }

	  return decoded.map(function (d) {
	    return d == null ? d : +d;
	  });
	}

	/**
	 * Encode simple objects as readable strings. Currently works only for simple,
	 * flat objects where values are numbers, booleans or strings.
	 *
	 * For example { foo: bar, boo: baz } -> "foo-bar_boo-baz"
	 *
	 * @param {Object} object The object to encode
	 * @param {String} keyValSeparator="-" The separator between keys and values
	 * @param {String} entrySeparator="_" The separator between entries
	 * @return {String} The encoded object
	 */
	function encodeObject(obj) {
	  var keyValSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlQueryConfig2.default.keyValSeparator;
	  var entrySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _urlQueryConfig2.default.entrySeparator;

	  if (!obj || !Object.keys(obj).length) {
	    return undefined;
	  }

	  return Object.keys(obj).map(function (key) {
	    return '' + key + keyValSeparator + obj[key];
	  }).join(entrySeparator);
	}

	/**
	 * Decodes a simple object to javascript. Currently works only for simple,
	 * flat objects where values are numbers, booleans or strings.
	 *
	 * For example "foo-bar_boo-baz" -> { foo: bar, boo: baz }
	 *
	 * @param {String} objStr The object string to decode
	 * @param {String} keyValSeparator="-" The separator between keys and values
	 * @param {String} entrySeparator="_" The separator between entries
	 * @return {Object} The javascript object
	 */
	function decodeObject(objStr) {
	  var keyValSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlQueryConfig2.default.keyValSeparator;
	  var entrySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _urlQueryConfig2.default.entrySeparator;

	  if (!objStr || !objStr.length) {
	    return undefined;
	  }
	  var obj = {};

	  objStr.split(entrySeparator).forEach(function (entryStr) {
	    var _entryStr$split = entryStr.split(keyValSeparator),
	        _entryStr$split2 = _slicedToArray(_entryStr$split, 2),
	        key = _entryStr$split2[0],
	        value = _entryStr$split2[1];

	    obj[key] = value;
	  });

	  return obj;
	}

	/**
	 * Encode simple objects as readable strings. Alias of encodeObject.
	 *
	 * For example { foo: 123, boo: 521 } -> "foo-123_boo-521"
	 *
	 * @param {Object} object The object to encode
	 * @param {String} keyValSeparator="-" The separator between keys and values
	 * @param {String} entrySeparator="_" The separator between entries
	 * @return {String} The encoded object
	 */
	var encodeNumericObject = exports.encodeNumericObject = encodeObject;

	/**
	 * Decodes a simple object to javascript where all values are numbers.
	 * Currently works only for simple, flat objects.
	 *
	 * For example "foo-123_boo-521" -> { foo: 123, boo: 521 }
	 *
	 * @param {String} objStr The object string to decode
	 * @param {String} keyValSeparator="-" The separator between keys and values
	 * @param {String} entrySeparator="_" The separator between entries
	 * @return {Object} The javascript object
	 */
	function decodeNumericObject(objStr) {
	  var keyValSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlQueryConfig2.default.keyValSeparator;
	  var entrySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _urlQueryConfig2.default.entrySeparator;

	  var decoded = decodeObject(objStr, keyValSeparator, entrySeparator);

	  if (!decoded) {
	    return undefined;
	  }

	  // convert to numbers
	  Object.keys(decoded).forEach(function (key) {
	    decoded[key] = decoded[key] == null ? decoded[key] : +decoded[key];
	  });

	  return decoded;
	}

	/**
	 * Collection of Decoders by type
	 */
	var Decoders = exports.Decoders = {
	  number: decodeNumber,
	  string: decodeString,
	  object: decodeObject,
	  array: decodeArray,
	  json: decodeJson,
	  date: decodeDate,
	  boolean: decodeBoolean,
	  numericObject: decodeNumericObject,
	  numericArray: decodeNumericArray
	};

	/**
	 * Generic decode function that takes a type as an argument.
	 *
	 * @param {String|Function} type If a function, it is used to decode, otherwise the string is
	 *  the key for the decoder in the Decoders collection.
	 * @param {String} encodedValue the value to decode
	 * @param {Any} defaultValue The default value to use if encodedValue is undefined.
	 * @return {Any} The decoded value
	 */
	function decode(type, encodedValue, defaultValue) {
	  var decodedValue = void 0;

	  if (typeof type === 'function') {
	    decodedValue = type(encodedValue, defaultValue);
	  } else if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.decode) {
	    decodedValue = type.decode(encodedValue, defaultValue);
	  } else if (encodedValue === undefined) {
	    decodedValue = defaultValue;
	  } else if (Decoders[type]) {
	    decodedValue = Decoders[type](encodedValue);
	  } else {
	    decodedValue = encodedValue;
	  }

	  return decodedValue;
	}

	/**
	 * Collection of Encoders by type
	 */
	var Encoders = exports.Encoders = {
	  number: encodeNumber,
	  string: encodeString,
	  object: encodeObject,
	  array: encodeArray,
	  json: encodeJson,
	  date: encodeDate,
	  boolean: encodeBoolean,
	  numericObject: encodeNumericObject,
	  numericArray: encodeNumericArray
	};

	/**
	 * Generic encode function that takes a type as an argument.
	 *
	 * @param {String|Function} type If a function, it is used to encode, otherwise the string is
	 *  the key for the encoder in the Encoders collection.
	 * @param {String} decodedValue the value to encode
	 * @return {Any} The encoded value
	 */
	function encode(type, decodedValue) {
	  var encodedValue = void 0;
	  if (typeof type === 'function') {
	    encodedValue = type(decodedValue);
	  } else if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.encode) {
	    encodedValue = type.encode(decodedValue);
	  } else if (Encoders[type]) {
	    encodedValue = Encoders[type](decodedValue);
	  } else {
	    encodedValue = decodedValue;
	  }

	  return encodedValue;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	// function to create the singleton options object that can be shared
	// throughout an application
	function createUrlQueryConfig() {
	  // default options
	  return {
	    // add in generated URL change handlers based on a urlPropsQueryConfig if provided
	    addUrlChangeHandlers: true,

	    // add in `props.params` from react-router to the url object
	    addRouterParams: true,

	    // function to specify change handler name (onChange<PropName>)
	    changeHandlerName: function changeHandlerName(propName) {
	      return 'onChange' + propName[0].toUpperCase() + propName.substring(1);
	    },

	    // use this history if no history is specified
	    history: {
	      push: function push() {
	        // eslint-disable-next-line
	        console.error('No history provided to react-url-query. Please provide one via configureUrlQuery.');
	      },
	      replace: function replace() {
	        // eslint-disable-next-line
	        console.error('No history provided to react-url-query. Please provide one via configureUrlQuery.');
	      }
	    },

	    // reads in location from react-router-redux if available and passes it
	    // to the reducer in the urlQueryMiddleware
	    readLocationFromStore: function readLocationFromStore(state) {
	      if (state && state.routing) {
	        return state.routing.locationBeforeTransitions;
	      }

	      return undefined;
	    },

	    /**
	     * The separator between entries
	     * @default {String} "_"
	     */
	    entrySeparator: '_',
	    /**
	     * The separator between keys and values
	     * @default {String} "-"
	     */
	    keyValSeparator: '-'
	  };
	}

	exports.default = createUrlQueryConfig();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.replaceUrlQuery = replaceUrlQuery;
	exports.pushUrlQuery = pushUrlQuery;
	exports.replaceInUrlQuery = replaceInUrlQuery;
	exports.pushInUrlQuery = pushInUrlQuery;
	exports.multiReplaceInUrlQuery = multiReplaceInUrlQuery;
	exports.multiPushInUrlQuery = multiPushInUrlQuery;
	exports.updateUrlQuerySingle = updateUrlQuerySingle;
	exports.updateUrlQueryMulti = updateUrlQueryMulti;

	var _queryString = __webpack_require__(13);

	var _urlQueryConfig = __webpack_require__(3);

	var _urlQueryConfig2 = _interopRequireDefault(_urlQueryConfig);

	var _UrlUpdateTypes = __webpack_require__(1);

	var _UrlUpdateTypes2 = _interopRequireDefault(_UrlUpdateTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function getLocation(location) {
	  if (location) {
	    return location;
	  }

	  // if no location provided, check history
	  var history = _urlQueryConfig2.default.history;

	  // if not in history, use window

	  return history.location ? history.location : window.location;
	}

	function mergeLocationQueryOrSearch(location, newQuery) {
	  // if location.query exists, update the query in location. otherwise update the search string
	  // replace location.query
	  if (location.query) {
	    return _extends({}, location, {
	      query: newQuery,
	      search: undefined // this is necessary at least for React Router v4
	    });
	  }

	  // replace location.search
	  var queryStr = (0, _queryString.stringify)(newQuery);
	  return _extends({}, location, {
	    search: queryStr.length ? '?' + queryStr : undefined
	  });
	}

	function updateLocation(newQuery, location) {
	  location = getLocation(location);

	  // remove query params that are nully or an empty strings.
	  // note: these values are assumed to be already encoded as strings.
	  var filteredQuery = Object.keys(newQuery).reduce(function (queryAccumulator, queryParam) {
	    var encodedValue = newQuery[queryParam];
	    if (encodedValue != null && encodedValue !== '') {
	      queryAccumulator[queryParam] = encodedValue;
	    }

	    return queryAccumulator;
	  }, {});

	  var newLocation = mergeLocationQueryOrSearch(location, filteredQuery);

	  // remove the key from the location
	  delete newLocation.key;

	  return newLocation;
	}

	function updateInLocation(queryParam, encodedValue, location) {
	  location = getLocation(location);

	  // if a query is there, use it, otherwise parse the search string
	  var currQuery = location.query || (0, _queryString.parse)(location.search);

	  var newQuery = _extends({}, currQuery, _defineProperty({}, queryParam, encodedValue));

	  // remove if it is nully or an empty string when encoded
	  if (encodedValue == null || encodedValue === '') {
	    delete newQuery[queryParam];
	  }

	  var newLocation = mergeLocationQueryOrSearch(location, newQuery);

	  // remove the key from the location
	  delete newLocation.key;

	  return newLocation;
	}

	/**
	 * Update multiple parts of the location at once
	 */
	function multiUpdateInLocation(queryReplacements, location) {
	  location = getLocation(location);

	  // if a query is there, use it, otherwise parse the search string
	  var currQuery = location.query || (0, _queryString.parse)(location.search);

	  var newQuery = _extends({}, currQuery, queryReplacements);

	  // remove if it is nully or an empty string when encoded
	  Object.keys(queryReplacements).forEach(function (queryParam) {
	    var encodedValue = queryReplacements[queryParam];
	    if (encodedValue == null || encodedValue === '') {
	      delete newQuery[queryParam];
	    }
	  });

	  var newLocation = mergeLocationQueryOrSearch(location, newQuery);

	  // remove the key from the location
	  delete newLocation.key;

	  return newLocation;
	}

	function replaceUrlQuery(newQuery, location) {
	  var newLocation = updateLocation(newQuery, location);
	  return _urlQueryConfig2.default.history.replace(newLocation);
	}

	function pushUrlQuery(newQuery, location) {
	  var newLocation = updateLocation(newQuery, location);
	  return _urlQueryConfig2.default.history.push(newLocation);
	}

	function replaceInUrlQuery(queryParam, encodedValue, location) {
	  var newLocation = updateInLocation(queryParam, encodedValue, location);
	  return _urlQueryConfig2.default.history.replace(newLocation);
	}

	function pushInUrlQuery(queryParam, encodedValue, location) {
	  var newLocation = updateInLocation(queryParam, encodedValue, location);
	  return _urlQueryConfig2.default.history.push(newLocation);
	}

	/**
	 * Replace multiple query parameters in a URL at once with only one
	 * call to `history.replace`
	 *
	 * @param {Object} queryReplacements Object representing the params and
	 *   their encoded values. { queryParam: encodedValue, ... }
	 */
	function multiReplaceInUrlQuery(queryReplacements, location) {
	  var newLocation = multiUpdateInLocation(queryReplacements, location);
	  return _urlQueryConfig2.default.history.replace(newLocation);
	}

	function multiPushInUrlQuery(queryReplacements, location) {
	  var newLocation = multiUpdateInLocation(queryReplacements, location);
	  return _urlQueryConfig2.default.history.push(newLocation);
	}

	/**
	 * Updates a single value in a query based on the type
	 */
	function updateUrlQuerySingle() {
	  var updateType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _UrlUpdateTypes2.default.replaceIn;
	  var queryParam = arguments[1];
	  var encodedValue = arguments[2];
	  var location = arguments[3];

	  if (updateType === _UrlUpdateTypes2.default.replaceIn) {
	    return replaceInUrlQuery(queryParam, encodedValue, location);
	  }
	  if (updateType === _UrlUpdateTypes2.default.pushIn) {
	    return pushInUrlQuery(queryParam, encodedValue, location);
	  }

	  // for these, wrap it in a whole new query object
	  var newQuery = _defineProperty({}, queryParam, encodedValue);
	  if (updateType === _UrlUpdateTypes2.default.replace) {
	    return replaceUrlQuery(newQuery, location);
	  }
	  if (updateType === _UrlUpdateTypes2.default.push) {
	    return pushUrlQuery(newQuery, location);
	  }

	  return undefined;
	}

	/**
	 * Updates a multiple values in a query based on the type
	 */
	function updateUrlQueryMulti() {
	  var updateType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _UrlUpdateTypes2.default.replaceIn;
	  var queryReplacements = arguments[1];
	  var location = arguments[2];

	  if (updateType === _UrlUpdateTypes2.default.replaceIn) {
	    return multiReplaceInUrlQuery(queryReplacements, location);
	  }
	  if (updateType === _UrlUpdateTypes2.default.pushIn) {
	    return multiPushInUrlQuery(queryReplacements, location);
	  }

	  if (updateType === _UrlUpdateTypes2.default.replace) {
	    return replaceUrlQuery(queryReplacements, location);
	  }
	  if (updateType === _UrlUpdateTypes2.default.push) {
	    return pushUrlQuery(queryReplacements, location);
	  }

	  return undefined;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = configureUrlQuery;

	var _urlQueryConfig = __webpack_require__(3);

	var _urlQueryConfig2 = _interopRequireDefault(_urlQueryConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureUrlQuery(options) {
	  // update the url options singleton
	  Object.assign(_urlQueryConfig2.default, options);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.replaceUrlQueryFromAction = replaceUrlQueryFromAction;
	exports.pushUrlQueryFromAction = pushUrlQueryFromAction;
	exports.replaceInUrlQueryFromAction = replaceInUrlQueryFromAction;
	exports.pushInUrlQueryFromAction = pushInUrlQueryFromAction;
	exports.multiReplaceInUrlQueryFromAction = multiReplaceInUrlQueryFromAction;
	exports.multiPushInUrlQueryFromAction = multiPushInUrlQueryFromAction;

	var _updateUrlQuery = __webpack_require__(4);

	function replaceUrlQueryFromAction(action, location) {
	  var encodedQuery = action.payload.encodedQuery;

	  (0, _updateUrlQuery.replaceUrlQuery)(encodedQuery, location);
	}

	function pushUrlQueryFromAction(action, location) {
	  var encodedQuery = action.payload.encodedQuery;

	  (0, _updateUrlQuery.pushUrlQuery)(encodedQuery, location);
	}

	function replaceInUrlQueryFromAction(action, location) {
	  var _action$payload = action.payload,
	      queryParam = _action$payload.queryParam,
	      encodedValue = _action$payload.encodedValue;

	  (0, _updateUrlQuery.replaceInUrlQuery)(queryParam, encodedValue, location);
	}

	function pushInUrlQueryFromAction(action, location) {
	  var _action$payload2 = action.payload,
	      queryParam = _action$payload2.queryParam,
	      encodedValue = _action$payload2.encodedValue;

	  (0, _updateUrlQuery.pushInUrlQuery)(queryParam, encodedValue, location);
	}

	function multiReplaceInUrlQueryFromAction(action, location) {
	  var encodedQuery = action.payload.encodedQuery;

	  (0, _updateUrlQuery.multiReplaceInUrlQuery)(encodedQuery, location);
	}

	function multiPushInUrlQueryFromAction(action, location) {
	  var encodedQuery = action.payload.encodedQuery;

	  (0, _updateUrlQuery.multiPushInUrlQuery)(encodedQuery, location);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = urlQueryReducer;

	var _updateUrlQueryFromAction = __webpack_require__(6);

	var _UrlUpdateTypes = __webpack_require__(1);

	var _UrlUpdateTypes2 = _interopRequireDefault(_UrlUpdateTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Reducer that handles actions that modify the URL query parameters.
	 * In this case, the actions replace a single query parameter at a time.
	 *
	 * NOTE: This is *NOT* a Redux reducer. It does not map from (state, action) -> state.
	 * Instead it "reduces" actions into URL query parameter state. NOT redux state.
	 */
	function urlQueryReducer(action, location) {
	  var updateType = action && action.meta && action.meta.updateType;

	  switch (updateType) {
	    case _UrlUpdateTypes2.default.replaceIn:
	      return (0, _updateUrlQueryFromAction.replaceInUrlQueryFromAction)(action, location);
	    case _UrlUpdateTypes2.default.replace:
	      return (0, _updateUrlQueryFromAction.replaceUrlQueryFromAction)(action, location);
	    case _UrlUpdateTypes2.default.multiReplaceIn:
	      return (0, _updateUrlQueryFromAction.multiReplaceInUrlQueryFromAction)(action, location);
	    case _UrlUpdateTypes2.default.pushIn:
	      return (0, _updateUrlQueryFromAction.pushInUrlQueryFromAction)(action, location);
	    case _UrlUpdateTypes2.default.push:
	      return (0, _updateUrlQueryFromAction.pushUrlQueryFromAction)(action, location);
	    case _UrlUpdateTypes2.default.multiPushIn:
	      return (0, _updateUrlQueryFromAction.multiPushInUrlQueryFromAction)(action, location);
	    default:
	      break;
	  }

	  if (true) {
	    console.warn('urlQueryReducer encountered unhandled action.meta.updateType ' + updateType + '.', // eslint-disable-line no-console
	    'action =', action);
	  }

	  return undefined;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = urlQueryDecoder;

	var _serialize = __webpack_require__(2);

	/**
	 * Decodes a query based on the config. It compares against cached values to see
	 * if decoding is necessary or if it can reuse old values.
	 *
	 * @param {Object} query The query object (typically from props.location.query)
	 *
	 * @return {Object} the decoded values `{ key: decodedValue, ... }`
	 */
	function urlQueryDecoder(config) {
	  var cachedQuery = void 0;
	  var cachedDecodedQuery = void 0;

	  return function decodeQueryWithCache(query) {
	    // decode the query
	    var decodedQuery = Object.keys(config).reduce(function (decoded, key) {
	      var keyConfig = config[key];
	      // read from the URL key if provided, otherwise use the key
	      var _keyConfig$queryParam = keyConfig.queryParam,
	          queryParam = _keyConfig$queryParam === undefined ? key : _keyConfig$queryParam;

	      var encodedValue = query[queryParam];

	      var decodedValue = void 0;
	      // reused cached value
	      if (cachedQuery && cachedQuery[queryParam] !== undefined && cachedQuery[queryParam] === encodedValue) {
	        decodedValue = cachedDecodedQuery[key];

	        // not cached, decode now
	        // only decode if no validate provided or validate is provided and the encoded value is valid
	      } else {
	        decodedValue = (0, _serialize.decode)(keyConfig.type, encodedValue, keyConfig.defaultValue);
	      }

	      // validate the decoded value if configured. set to undefined if not valid
	      if (decodedValue !== undefined && keyConfig.validate && !keyConfig.validate(decodedValue)) {
	        decodedValue = undefined;
	      }

	      decoded[key] = decodedValue;
	      return decoded;
	    }, {});

	    // update the cache
	    cachedQuery = query;
	    cachedDecodedQuery = decodedQuery;

	    return decodedQuery;
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var ReactIs = __webpack_require__(14);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(25)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(27);
	var objectAssign = __webpack_require__(9);

	function encoderForArrayFormat(opts) {
		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, index) {
					return value === null ? [
						encode(key, opts),
						'[',
						index,
						']'
					].join('') : [
						encode(key, opts),
						'[',
						encode(index, opts),
						']=',
						encode(value, opts)
					].join('');
				};

			case 'bracket':
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'[]=',
						encode(value, opts)
					].join('');
				};

			default:
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'=',
						encode(value, opts)
					].join('');
				};
		}
	}

	function parserForArrayFormat(opts) {
		var result;

		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, accumulator) {
					result = /\[(\d*)\]$/.exec(key);

					key = key.replace(/\[\d*\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return function (key, value, accumulator) {
					result = /(\[\])$/.exec(key);
					key = key.replace(/\[\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					} else if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			default:
				return function (key, value, accumulator) {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		} else if (typeof input === 'object') {
			return keysSorter(Object.keys(input)).sort(function (a, b) {
				return Number(a) - Number(b);
			}).map(function (key) {
				return input[key];
			});
		}

		return input;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str, opts) {
		opts = objectAssign({arrayFormat: 'none'}, opts);

		var formatter = parserForArrayFormat(opts);

		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			formatter(decodeURIComponent(key), val, ret);
		});

		return Object.keys(ret).sort().reduce(function (result, key) {
			var val = ret[key];
			if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
				// Sort object keys, not values
				result[key] = keysSorter(val);
			} else {
				result[key] = val;
			}

			return result;
		}, Object.create(null));
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true,
			arrayFormat: 'none'
		};

		opts = objectAssign(defaults, opts);

		var formatter = encoderForArrayFormat(opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					result.push(formatter(key, val2, result.length));
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react-is.production.min.js');
	} else {
	  module.exports = __webpack_require__(26);
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var UrlQueryParamTypes = {
	  number: 'number',
	  string: 'string',
	  object: 'object',
	  array: 'array',
	  json: 'json',
	  date: 'date',
	  boolean: 'boolean',
	  numericObject: 'numericObject',
	  numericArray: 'numericArray'
	};

	exports.default = UrlQueryParamTypes;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(15);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(10);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _configureUrlQuery = __webpack_require__(5);

	var _configureUrlQuery2 = _interopRequireDefault(_configureUrlQuery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This class exists to read in the router from context (useful in react-router v4)
	 * to get an equivalent history object so we can push and replace the URL.
	 */
	var RouterToUrlQuery = function (_Component) {
	  _inherits(RouterToUrlQuery, _Component);

	  function RouterToUrlQuery() {
	    _classCallCheck(this, RouterToUrlQuery);

	    return _possibleConstructorReturn(this, (RouterToUrlQuery.__proto__ || Object.getPrototypeOf(RouterToUrlQuery)).apply(this, arguments));
	  }

	  _createClass(RouterToUrlQuery, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var routerOldContext = this.context.router;
	      var RouterContext = this.props.routerContext;


	      if (typeof RouterContext === "undefined") {
	        return _react2.default.createElement(
	          RouterToUrlQueryLogic,
	          {
	            router: routerOldContext
	          },
	          _react2.default.Children.only(this.props.children)
	        );
	      }

	      return _react2.default.createElement(
	        RouterContext.Consumer,
	        null,
	        function (routerNewContext) {
	          return _react2.default.createElement(
	            RouterToUrlQueryLogic,
	            {
	              router: routerNewContext
	            },
	            _react2.default.Children.only(_this2.props.children)
	          );
	        }
	      );
	    }
	  }]);

	  return RouterToUrlQuery;
	}(_react.Component);

	RouterToUrlQuery.propTyps = {
	  routerContext: _propTypes2.default.object
	};
	RouterToUrlQuery.contextTypes = {
	  router: _propTypes2.default.object
	};
	exports.default = RouterToUrlQuery;

	var RouterToUrlQueryLogic = function (_Component2) {
	  _inherits(RouterToUrlQueryLogic, _Component2);

	  function RouterToUrlQueryLogic() {
	    _classCallCheck(this, RouterToUrlQueryLogic);

	    return _possibleConstructorReturn(this, (RouterToUrlQueryLogic.__proto__ || Object.getPrototypeOf(RouterToUrlQueryLogic)).apply(this, arguments));
	  }

	  _createClass(RouterToUrlQueryLogic, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var router = this.props.router;


	      if (("development") === 'development' && !router) {
	        // eslint-disable-next-line
	        console.warn('RouterToUrlQuery: `router` object not found in context. Not configuring history for react-url-query.');
	        return;
	      }

	      var history = void 0;
	      if (router.history && router.history.push && router.history.replace) {
	        history = router.history;
	      } else if (router.push && router.replace) {
	        history = router;
	      } else if (router.transitionTo && router.replaceWith) {
	        history = {
	          push: router.transitionTo,
	          replace: router.replaceWith
	        };
	      }

	      (0, _configureUrlQuery2.default)({
	        history: history
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;


	      return _react2.default.Children.only(children);
	    }
	  }]);

	  return RouterToUrlQueryLogic;
	}(_react.Component);

	RouterToUrlQueryLogic.propTypes = {
	  children: _propTypes2.default.node,
	  router: _propTypes2.default.object
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = addUrlProps;

	var _react = __webpack_require__(15);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(10);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _queryString = __webpack_require__(13);

	var _urlQueryDecoder = __webpack_require__(8);

	var _urlQueryDecoder2 = _interopRequireDefault(_urlQueryDecoder);

	var _urlQueryConfig = __webpack_require__(3);

	var _urlQueryConfig2 = _interopRequireDefault(_urlQueryConfig);

	var _updateUrlQuery = __webpack_require__(4);

	var _serialize = __webpack_require__(2);

	var _UrlUpdateTypes = __webpack_require__(1);

	var _UrlUpdateTypes2 = _interopRequireDefault(_UrlUpdateTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Higher order component (HOC) that injects URL query parameters as props.
	 *
	 * @param {Function} mapUrlToProps `function(url, props) -> {Object}` returns props to inject
	 * @return {React.Component}
	 */
	function addUrlProps() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$mapUrlToProp = options.mapUrlToProps,
	      mapUrlToProps = _options$mapUrlToProp === undefined ? function (d) {
	    return d;
	  } : _options$mapUrlToProp,
	      mapUrlChangeHandlersToProps = options.mapUrlChangeHandlersToProps,
	      urlPropsQueryConfig = options.urlPropsQueryConfig,
	      addRouterParams = options.addRouterParams,
	      addUrlChangeHandlers = options.addUrlChangeHandlers;
	  var changeHandlerName = options.changeHandlerName;


	  return function addPropsWrapper(WrappedComponent) {
	    // caching to prevent unnecessary generation of new onChange functions
	    var cachedHandlers = void 0;

	    var decodeQuery = void 0;

	    // initialize decode query (with cache) if a config is provided
	    if (urlPropsQueryConfig) {
	      decodeQuery = (0, _urlQueryDecoder2.default)(urlPropsQueryConfig);
	    }

	    /**
	     * Parse the URL query into an object. If a urlPropsQueryConfig is provided
	     * the values are decoded based on type.
	     */
	    function getUrlObject(props) {
	      var location = void 0;

	      // check in history
	      if (_urlQueryConfig2.default.history.location) {
	        location = _urlQueryConfig2.default.history.location;

	        // react-router provides it as a prop
	      } else if (props.location && (props.location.query || props.location.search != null)) {
	        location = props.location;

	        // not found. just use location from window
	      } else {
	        location = window.location;
	      }

	      var currentQuery = location.query || (0, _queryString.parse)(location.search) || {};

	      var result = void 0;
	      // if a url query decoder is provided, decode the query then return that.
	      if (decodeQuery) {
	        result = decodeQuery(currentQuery);
	      } else {
	        result = currentQuery;
	      }

	      // add in react-router params if requested
	      if (addRouterParams || addRouterParams !== false && _urlQueryConfig2.default.addRouterParams) {
	        Object.assign(result, props.params, props.match && props.match.params);
	      }

	      return result;
	    }

	    var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var AddUrlProps = function (_Component) {
	      _inherits(AddUrlProps, _Component);

	      function AddUrlProps() {
	        _classCallCheck(this, AddUrlProps);

	        return _possibleConstructorReturn(this, (AddUrlProps.__proto__ || Object.getPrototypeOf(AddUrlProps)).apply(this, arguments));
	      }

	      _createClass(AddUrlProps, [{
	        key: 'getUrlChangeHandlerProps',


	        /**
	         * Create URL change handlers based on props, the urlPropsQueryConfig (if provided),
	         * and mapUrlChangeHandlersToProps (if provided).
	         * As a member function so we can read `this.props` in generated handlers dynamically.
	         */
	        value: function getUrlChangeHandlerProps(propsWithUrl) {
	          var _this2 = this;

	          var handlers = void 0;

	          if (urlPropsQueryConfig) {
	            // if we have a props->query config, generate the change handler props unless
	            // addUrlChangeHandlers is false
	            if (addUrlChangeHandlers || addUrlChangeHandlers == null && _urlQueryConfig2.default.addUrlChangeHandlers) {
	              // use cache if available. Have to do this since urlQueryConfig can change between
	              // renders (although that is unusual).
	              if (cachedHandlers) {
	                handlers = cachedHandlers;
	              } else {
	                // read in function from options for how to generate a name from a prop
	                if (!changeHandlerName) {
	                  changeHandlerName = _urlQueryConfig2.default.changeHandlerName;
	                }

	                // for each URL config prop, create a handler
	                handlers = Object.keys(urlPropsQueryConfig).reduce(function (handlersAccum, propName) {
	                  var _urlPropsQueryConfig$ = urlPropsQueryConfig[propName],
	                      updateType = _urlPropsQueryConfig$.updateType,
	                      _urlPropsQueryConfig$2 = _urlPropsQueryConfig$.queryParam,
	                      queryParam = _urlPropsQueryConfig$2 === undefined ? propName : _urlPropsQueryConfig$2,
	                      type = _urlPropsQueryConfig$.type;

	                  // name handler for `foo` => `onChangeFoo`

	                  var handlerName = changeHandlerName(propName);

	                  // handler encodes the value and updates the URL with the encoded value
	                  // based on the `updateType` in the config. Default is `replaceIn`
	                  handlersAccum[handlerName] = function generatedUrlChangeHandler(value) {
	                    var location = _urlQueryConfig2.default.history.location;

	                    // for backwards compatibility

	                    if (!location) {
	                      location = this.props.location;
	                    }

	                    var encodedValue = (0, _serialize.encode)(type, value);

	                    // add a simple check when we have props.location.query to see if
	                    // we even need to update.
	                    if (location && location.query && location.query[queryParam] === encodedValue) {
	                      return undefined; // skip updating
	                    }

	                    return (0, _updateUrlQuery.updateUrlQuerySingle)(updateType, queryParam, encodedValue, location);
	                  }.bind(_this2); // bind this so we can access props dynamically

	                  return handlersAccum;
	                }, {});

	                // add in a batch change handler
	                var batchHandlerName = changeHandlerName('urlQueryParams');
	                handlers[batchHandlerName] = function generatedBatchUrlChangeHandler(queryValues) {
	                  var updateType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _UrlUpdateTypes2.default.replaceIn;
	                  var location = _urlQueryConfig2.default.history.location;

	                  // for backwards compatibility

	                  if (!location) {
	                    location = this.props.location;
	                  }

	                  var allEncodedValuesUnchanged = true;

	                  // encode each value
	                  var queryReplacements = Object.keys(queryValues).reduce(function (accum, propName) {
	                    var _urlPropsQueryConfig$3 = urlPropsQueryConfig[propName],
	                        _urlPropsQueryConfig$4 = _urlPropsQueryConfig$3.queryParam,
	                        queryParam = _urlPropsQueryConfig$4 === undefined ? propName : _urlPropsQueryConfig$4,
	                        type = _urlPropsQueryConfig$3.type;

	                    var value = queryValues[propName];

	                    var encodedValue = (0, _serialize.encode)(type, value);
	                    accum[queryParam] = encodedValue;

	                    // add a simple check when we have props.location.query to see if
	                    // we even need to update.
	                    if (location && location.query && location.query[queryParam] !== encodedValue) {
	                      allEncodedValuesUnchanged = false;
	                    }

	                    return accum;
	                  }, {});

	                  if (location && location.query && allEncodedValuesUnchanged) {
	                    return undefined; // skip updating if no encoded values changed
	                  }

	                  return (0, _updateUrlQuery.updateUrlQueryMulti)(updateType, queryReplacements, location);
	                }.bind(this);

	                // cache these so we don't regenerate new functions every render
	                cachedHandlers = handlers;
	              }
	            }
	          }

	          // if a manual mapping function is provided, use it, passing in the auto-generated
	          // handlers as an optional secondary argument.
	          if (mapUrlChangeHandlersToProps) {
	            handlers = mapUrlChangeHandlersToProps.call(this, propsWithUrl, handlers);
	          }

	          return handlers;
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          // get the url query parameters as an object mapping name to value.
	          // if a config is provided, these are decoded based on their `type` and their
	          // name will match the prop name.
	          // if no config is provided, they are not decoded and their names are whatever
	          // they were in the URL.
	          var url = getUrlObject(this.props);

	          // pass to mapUrlToProps for further decoding if provided
	          this.propsWithUrl = Object.assign({}, this.props, mapUrlToProps(url, this.props));

	          // add in the URL change handlers - either auto-generated based on config
	          // or from mapUrlChangeHandlersToProps.
	          Object.assign(this.propsWithUrl, this.getUrlChangeHandlerProps(this.propsWithUrl));

	          // render the wrapped component with the URL props added in.
	          return _react2.default.createElement(WrappedComponent, this.propsWithUrl);
	        }
	      }]);

	      return AddUrlProps;
	    }(_react.Component);

	    AddUrlProps.displayName = 'AddUrlProps(' + displayName + ')';
	    AddUrlProps.WrappedComponent = WrappedComponent;
	    AddUrlProps.propTypes = {
	      location: _propTypes2.default.any // eslint-disable-line react/forbid-prop-types
	    };


	    return AddUrlProps;
	  };
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = urlAction;
	exports.urlUpdateAction = urlUpdateAction;
	exports.urlReplaceAction = urlReplaceAction;
	exports.urlPushAction = urlPushAction;
	exports.urlMultiReplaceInAction = urlMultiReplaceInAction;
	exports.urlMultiPushInAction = urlMultiPushInAction;
	exports.urlUpdateInAction = urlUpdateInAction;
	exports.urlReplaceInAction = urlReplaceInAction;
	exports.urlPushInAction = urlPushInAction;

	var _serialize = __webpack_require__(2);

	var _UrlUpdateTypes = __webpack_require__(1);

	var _UrlUpdateTypes2 = _interopRequireDefault(_UrlUpdateTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function urlAction(actionType) {
	  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (d) {
	    return d;
	  };
	  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	  return function urlActionCreator() {
	    var metaFromAction = meta.apply(undefined, arguments);
	    if (metaFromAction == null) {
	      metaFromAction = {};

	      // we need meta to be an object so it merges in with the urlQuery meta property.
	    } else if ((typeof metaFromAction === 'undefined' ? 'undefined' : _typeof(metaFromAction)) !== 'object') {
	      metaFromAction = { value: metaFromAction };
	    }

	    return {
	      type: actionType,
	      meta: _extends({}, metaFromAction, {
	        // we need urlQuery set so the middleware knows to read this action
	        urlQuery: true
	      }),
	      payload: payload.apply(undefined, arguments)
	    };
	  };
	}

	/**
	 * Helper function for creating URL action creators
	 *
	 * For example in your actions.js file:
	 *
	 * export const changeFoo = urlUpdateAction(
	 *   'CHANGE_MANY',
	 *   (newQuery) => ({
	 *     fooInUrl: encode(UrlQueryParamTypes.number, newQuery.foo),
	 *     bar: 'par',
	 *     arr: encode(UrlQueryParamTypes.array, ['T', 'Y']),
	 *   }),
	 *   'replace');
	 *
	 * The second parameter should be an encoder function that takes a decodedQuery
	 * and returns an encodedQuery,
	 * encoding each value in the decodedQuery object.
	 * You need this because when using Redux Actions,
	 * urlPropsQueryConfig is only used for decoding;
	 * you have to implement the encoding here.
	 * Also see changeMany [in the examples](https://github.com/pbeshai/react-url-query/tree/master/examples/redux-with-actions/src/state/actions.js).
	 */
	function urlUpdateAction(actionType) {
	  var encodeQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (d) {
	    return d;
	  };
	  var updateType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UrlUpdateTypes2.default.replace;

	  return urlAction(actionType, function (decodedQuery) {
	    return {
	      encodedQuery: encodeQuery(decodedQuery),
	      decodedQuery: decodedQuery
	    };
	  }, function () {
	    return { updateType: updateType };
	  });
	}

	function urlReplaceAction(actionType, encodeQuery) {
	  return urlUpdateAction(actionType, encodeQuery, _UrlUpdateTypes2.default.replace);
	}

	function urlPushAction(actionType, encodeQuery) {
	  return urlUpdateAction(actionType, encodeQuery, _UrlUpdateTypes2.default.push);
	}

	function urlMultiReplaceInAction(actionType, encodeQuery) {
	  return urlUpdateAction(actionType, encodeQuery, _UrlUpdateTypes2.default.multiReplaceIn);
	}

	function urlMultiPushInAction(actionType, encodeQuery) {
	  return urlUpdateAction(actionType, encodeQuery, _UrlUpdateTypes2.default.multiPushIn);
	}

	/**
	 * Helper function for creating URL action creators
	 *
	 * For example in your actions.js file:
	 * export const changeFoo = urlUpdateInAction('CHANGE_FOO', 'foo', 'number', 'replaceIn');
	 *
	 */
	function urlUpdateInAction(actionType, queryParam, valueType, updateType) {
	  return urlAction(actionType, function (decodedValue) {
	    return {
	      queryParam: queryParam,
	      encodedValue: (0, _serialize.encode)(valueType, decodedValue),
	      decodedValue: decodedValue,
	      type: valueType
	    };
	  }, function () {
	    return { updateType: updateType };
	  });
	}

	function urlReplaceInAction(actionType, queryParam, valueType) {
	  return urlUpdateInAction(actionType, queryParam, valueType, _UrlUpdateTypes2.default.replaceIn);
	}

	function urlPushInAction(actionType, queryParam, valueType) {
	  return urlUpdateInAction(actionType, queryParam, valueType, _UrlUpdateTypes2.default.pushIn);
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _urlQueryReducer = __webpack_require__(7);

	var _urlQueryReducer2 = _interopRequireDefault(_urlQueryReducer);

	var _urlQueryConfig = __webpack_require__(3);

	var _urlQueryConfig2 = _interopRequireDefault(_urlQueryConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Middleware to handle updating the URL query params
	 */
	var urlQueryMiddleware = function urlQueryMiddleware() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // if not a URL action, do nothing.
	        if (!action.meta || !action.meta.urlQuery) {
	          return next(action);
	        }

	        // otherwise, handle with URL handler -- doesn't go to Redux dispatcher
	        // update the URL

	        // use the default reducer if none provided
	        var reducer = options.reducer || _urlQueryConfig2.default.reducer || _urlQueryReducer2.default;

	        // if configured to read from the redux store (react-router-redux), do so and pass it to
	        // the reducer
	        var readLocationFromStore = options.readLocationFromStore == null ? _urlQueryConfig2.default.readLocationFromStore : options.readLocationFromStore;

	        if (readLocationFromStore) {
	          var location = readLocationFromStore(getState());
	          reducer(action, location);
	        } else {
	          reducer(action);
	        }

	        // shortcircuit by default (don't pass to redux store), unless explicitly set
	        // to false.
	        if (options.shortcircuit === false) {
	          return next(action);
	        }

	        return undefined;
	      };
	    };
	  };
	};

	exports.default = urlQueryMiddleware;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = urlQueryEncoder;

	var _serialize = __webpack_require__(2);

	/**
	 * Encodes a query based on the config. Similarly to `encode`, it does not respect the `defaultValue`
	 * field, so any missing values must be specified explicitly.
	 *
	 * @param {Object} query The query object (typically from props.location.query)
	 *
	 * @return {Object} the encoded values `{ key: encodedValue, ... }`
	 */
	function urlQueryEncoder(config) {
	  return function encodeQuery(query) {
	    // encode the query
	    var encodedQuery = Object.keys(config).reduce(function (encoded, key) {
	      var keyConfig = config[key];
	      // read from the URL key if provided, otherwise use the key
	      var _keyConfig$queryParam = keyConfig.queryParam,
	          queryParam = _keyConfig$queryParam === undefined ? key : _keyConfig$queryParam;

	      var decodedValue = query[key];

	      var encodedValue = (0, _serialize.encode)(keyConfig.type, decodedValue);

	      encoded[queryParam] = encodedValue;
	      return encoded;
	    }, {});

	    return encodedQuery;
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = subquery;
	/**
	 * Helper function to get only parts of a query. Specify
	 * which parameters to include.
	 */
	function subquery(query) {
	  if (!query) {
	    return query;
	  }

	  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    params[_key - 1] = arguments[_key];
	  }

	  return params.reduce(function (newQuery, param) {
	    newQuery[param] = query[param];
	    return newQuery;
	  }, {});
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = subqueryOmit;
	/**
	 * Helper function to get only parts of a query. Specify
	 * which parameters to omit.
	 */
	function subqueryOmit(query) {
	  for (var _len = arguments.length, omitParams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    omitParams[_key - 1] = arguments[_key];
	  }

	  if (!query) {
	    return query;
	  }

	  return Object.keys(query).filter(function (param) {
	    return !omitParams.includes(param);
	  }).reduce(function (newQuery, param) {
	    newQuery[param] = query[param];
	    return newQuery;
	  }, {});
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (true) {
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	  var has = __webpack_require__(12);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (true) {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(14);
	var assign = __webpack_require__(9);

	var ReactPropTypesSecret = __webpack_require__(11);
	var has = __webpack_require__(12);
	var checkPropTypes = __webpack_require__(24);

	var printWarning = function() {};

	if (true) {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (true) {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (true) {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ }
/******/ ])
});
;