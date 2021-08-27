/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
	/******/ 	var __webpack_modules__ = ({

		/***/ "./src/Game.ts":
		/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nclass Game {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.height = 560;\n        this.canvas.width = 300;\n    }\n    drawCircle(xPosition, yPosition, radius, color) {\n        this.context.beginPath();\n        this.context.arc(xPosition, yPosition, radius, 0, 2 * Math.PI);\n        this.context.fillStyle = color;\n        this.context.fill();\n    }\n    start() {\n        this.drawCircle(0, 0, 20, \"#00FF00\");\n        this.drawCircle(300, 0, 20, \"#00FF00\");\n        this.drawCircle(0, 560, 20, \"#00FF00\");\n        this.drawCircle(300, 560, 20, \"#00FF00\");\n        this.drawCircle(150, 280, 20, \"#00FF00\");\n    }\n    mouseMoved(event) {\n        const xPositionMouse = event.clientX;\n        const yPositionMouse = event.clientY;\n        const xPositionCanvas = this.canvas.getBoundingClientRect().left;\n        const yPositionCanvas = this.canvas.getBoundingClientRect().top;\n        this.drawCircle(xPositionMouse - xPositionCanvas, yPositionMouse - yPositionCanvas, 10, \"#0000FF\");\n    }\n    mouseClicked(event) {\n        const xPositionMouse = event.clientX;\n        const yPositionMouse = event.clientY;\n        const xPositionCanvas = this.canvas.getBoundingClientRect().left;\n        const yPositionCanvas = this.canvas.getBoundingClientRect().top;\n        this.drawCircle(xPositionMouse - xPositionCanvas, yPositionMouse - yPositionCanvas, 20, \"#FF0000\");\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

			/***/ }),

		/***/ "./src/index.ts":
		/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
		/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

			eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst canvas = document.querySelector(\"#canvas\");\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\ngame.start();\ncanvas.addEventListener(\"mousemove\", (event) => {\n    game.mouseMoved(event);\n});\ncanvas.addEventListener(\"click\", (event) => {\n    game.mouseClicked(event);\n});\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

			/***/ })

		/******/ 	});
	/************************************************************************/
	/******/ 	// The module cache
	/******/ 	var __webpack_module_cache__ = {};
	/******/ 	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
		/******/ 		// Check if module is in cache
		/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
		/******/ 		if (cachedModule !== undefined) {
			/******/ 			return cachedModule.exports;
			/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = __webpack_module_cache__[moduleId] = {
			/******/ 			// no module.id needed
			/******/ 			// no module.loaded needed
			/******/ 			exports: {}
			/******/ 		};
		/******/ 	
		/******/ 		// Execute the module function
		/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		/******/ 	
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
	/******/ 	
	/************************************************************************/
	/******/ 	/* webpack/runtime/define property getters */
	/******/ 	(() => {
		/******/ 		// define getter functions for harmony exports
		/******/ 		__webpack_require__.d = (exports, definition) => {
			/******/ 			for(var key in definition) {
				/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/ 				}
				/******/ 			}
			/******/ 		};
		/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
	/******/ 	(() => {
		/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
		/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/make namespace object */
	/******/ 	(() => {
		/******/ 		// define __esModule on exports
		/******/ 		__webpack_require__.r = (exports) => {
			/******/ 			if(typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
				/******/ 			}
			/******/ 			Object.defineProperty(exports, "__esModule", { value: true });
			/******/ 		};
		/******/ 	})();
	/******/ 	
	/************************************************************************/
	/******/ 	
	/******/ 	// startup
	/******/ 	// Load entry module and return exports
	/******/ 	// This entry module can't be inlined because the eval devtool is used.
	/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;