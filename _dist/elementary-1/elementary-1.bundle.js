/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./elementary-1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./elementary-1.js":
/*!*************************!*\
  !*** ./elementary-1.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  'use strict';\n  /**\n   * Get help:\n   * > Lifecycle callbacks:\n   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks\n   *\n   * Access the Cubbles-Component-Model:\n   * > Access slot values:\n   * slot 'a': this.getA(); | this.setA(value)\n   */\n  CubxPolymer({\n    is: 'elementary-1',\n\n    /**\n     * Manipulate an element’s local DOM when the element is created.\n     */\n    created: function () {\n    },\n\n    /**\n     * Manipulate an element’s local DOM when the element is created and initialized.\n     */\n    ready: function () {\n      // set value-attribute of element with id='slota' to the initial value of slot 'a'\n      this.$.slota.setAttribute('value', this.getA());\n    },\n\n    /**\n     * Manipulate an element’s local DOM when the element is attached to the document.\n     */\n    attached: function () {\n    },\n\n    /**\n     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.\n     */\n    cubxReady: function () {\n    },\n\n    /**\n     * A handler to be called by a dom-element\n     * @param {event} event\n     */\n    inputFieldSlotAChanged: function (event) {\n      // update the cubbles-model\n      this.setA(event.target.value);\n    },\n\n    /**\n     *  Observe the Cubbles-Component-Model: If value for slot 'a' has changed ...\n     */\n    modelAChanged: function (newValue) {\n      // update the view\n      this.$.slota.setAttribute('value', newValue);\n    }\n  });\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbGVtZW50YXJ5LTEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lbGVtZW50YXJ5LTEuanM/OTMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8qKlxuICAgKiBHZXQgaGVscDpcbiAgICogPiBMaWZlY3ljbGUgY2FsbGJhY2tzOlxuICAgKiBodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnLzEuMC9kb2NzL2Rldmd1aWRlL3JlZ2lzdGVyaW5nLWVsZW1lbnRzLmh0bWwjbGlmZWN5Y2xlLWNhbGxiYWNrc1xuICAgKlxuICAgKiBBY2Nlc3MgdGhlIEN1YmJsZXMtQ29tcG9uZW50LU1vZGVsOlxuICAgKiA+IEFjY2VzcyBzbG90IHZhbHVlczpcbiAgICogc2xvdCAnYSc6IHRoaXMuZ2V0QSgpOyB8IHRoaXMuc2V0QSh2YWx1ZSlcbiAgICovXG4gIEN1YnhQb2x5bWVyKHtcbiAgICBpczogJ2VsZW1lbnRhcnktMScsXG5cbiAgICAvKipcbiAgICAgKiBNYW5pcHVsYXRlIGFuIGVsZW1lbnTigJlzIGxvY2FsIERPTSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYW5pcHVsYXRlIGFuIGVsZW1lbnTigJlzIGxvY2FsIERPTSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGluaXRpYWxpemVkLlxuICAgICAqL1xuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzZXQgdmFsdWUtYXR0cmlidXRlIG9mIGVsZW1lbnQgd2l0aCBpZD0nc2xvdGEnIHRvIHRoZSBpbml0aWFsIHZhbHVlIG9mIHNsb3QgJ2EnXG4gICAgICB0aGlzLiQuc2xvdGEuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuZ2V0QSgpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFuaXB1bGF0ZSBhbiBlbGVtZW504oCZcyBsb2NhbCBET00gd2hlbiB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICovXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFuaXB1bGF0ZSBhbiBlbGVtZW504oCZcyBsb2NhbCBET00gd2hlbiB0aGUgY3ViYmxlcyBmcmFtZXdvcmsgaXMgaW5pdGlhbGl6ZWQgYW5kIHJlYWR5IHRvIHdvcmsuXG4gICAgICovXG4gICAgY3VieFJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgaGFuZGxlciB0byBiZSBjYWxsZWQgYnkgYSBkb20tZWxlbWVudFxuICAgICAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgaW5wdXRGaWVsZFNsb3RBQ2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIGN1YmJsZXMtbW9kZWxcbiAgICAgIHRoaXMuc2V0QShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAgT2JzZXJ2ZSB0aGUgQ3ViYmxlcy1Db21wb25lbnQtTW9kZWw6IElmIHZhbHVlIGZvciBzbG90ICdhJyBoYXMgY2hhbmdlZCAuLi5cbiAgICAgKi9cbiAgICBtb2RlbEFDaGFuZ2VkOiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgdmlld1xuICAgICAgdGhpcy4kLnNsb3RhLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9KTtcbn0oKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./elementary-1.js\n");

/***/ })

/******/ });