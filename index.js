(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createModule = createModule;

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reNgIdParse = /([^/]+)\.(component|service|filter)\.(?:js|es[56]?)$/;

	function createModule(name, requireContext, otherDeps) {
	  var deps = [];
	  var depMap = {};

	  var stuff = {
	    component: {},
	    service: {},
	    filter: {}
	  };

	  requireContext.keys().forEach(function (id) {
	    var m = id.match(reNgIdParse);
	    if (!m) {
	      return;
	    }

	    var name = m[1];
	    var type = m[2];
	    var module = requireContext(id);

	    stuff[type][name] = module['default'];

	    if (module.ngModules) {
	      module.ngModules.forEach(function (dep) {
	        if (!depMap.hasOwnProperty(dep)) {
	          depMap[dep] = true;
	          deps.push(dep);
	        }
	      });
	    }
	  });

	  var finalDeps = deps.concat(otherDeps || []);

	  var module = _angular2.default.module('linkdocApp', finalDeps);

	  for (var _name in stuff.component) {
	    module.component(_name, new stuff.component[_name]());
	  }
	  for (var _name2 in stuff.service) {
	    module.service(_name2, stuff.service[_name2]);
	  }
	  for (var _name3 in stuff.filter) {
	    module.filter(_name3, stuff.filter[_name3]);
	  }

	  return module;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular");

/***/ }
/******/ ])));