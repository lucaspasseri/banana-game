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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect */ \"./src/Rect.ts\");\n\n\nclass Game {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.height = 560;\n        this.canvas.width = 300;\n        this.canvas.style.backgroundColor = \"#181820\";\n    }\n    start() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.canvas);\n        this.player.draw();\n        this.floor = new _Rect__WEBPACK_IMPORTED_MODULE_1__.default(this.context, 6, 540, 288, 1, \"#8b8b8f\");\n        this.floor.draw();\n        this.startInterval();\n    }\n    clearScreen() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    mainLoop() {\n        this.clearScreen();\n        this.player.draw();\n        this.floor.draw();\n    }\n    startInterval() {\n        const { setInterval } = window;\n        this.intervalId = setInterval(() => this.mainLoop(), 1000 / 100);\n    }\n    keyDown(event) {\n        if (event.code === \"KeyD\" || event.code === \"ArrowRight\") {\n            this.player.moveRigth();\n        }\n        if (event.code === \"KeyA\" || event.code === \"ArrowLeft\") {\n            this.player.moveLeft();\n        }\n    }\n    mouseClicked() {\n        this.clearScreen();\n        this.start();\n    }\n}\n/* mouseMoved(event: MouseEvent): void{\n    const xPositionMouse = event.clientX;\n    const yPositionMouse = event.clientY;\n    const xPositionCanvas = this.canvas.getBoundingClientRect().left;\n    const yPositionCanvas = this.canvas.getBoundingClientRect().top;\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.ball = new Ball(\n        this.context,\n        xPositionMouse - xPositionCanvas,\n        yPositionMouse - yPositionCanvas,\n        10,\n        \"#0000FF\");\n    this.ball.draw();\n} */\n/* mouseClicked(event: MouseEvent): void{\n    const xPositionMouse = event.clientX;\n    const yPositionMouse = event.clientY;\n    const xPositionCanvas = this.canvas.getBoundingClientRect().left;\n    const yPositionCanvas = this.canvas.getBoundingClientRect().top;\n\n    this.ball = new Ball(\n        this.context,\n        xPositionMouse - xPositionCanvas,\n        yPositionMouse - yPositionCanvas,\n        10,\n        \"#00FF00\");\n    this.ball.draw();\n} */ \n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas) {\n        super(canvas.getContext(\"2d\"), canvas.width / 2 - 20, canvas.height - 70, \"../assets/alien.png\", 40, 50);\n    }\n    moveRigth() {\n        if (this.x < 260)\n            this.x += 5;\n    }\n    moveLeft() {\n        if (this.x > 0)\n            this.x -= 5;\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Player.ts?");

/***/ }),

/***/ "./src/Rect.ts":
/*!*********************!*\
  !*** ./src/Rect.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nclass Rect {\n    constructor(context, x, y, width, height, color) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.color = color;\n    }\n    draw() {\n        this.context.fillStyle = this.color;\n        this.context.fillRect(this.x, this.y, this.width, this.height);\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Rect.ts?");

/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n    constructor(context, x, y, src, width, height) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.src = src;\n        this.width = width;\n        this.height = height;\n    }\n    draw() {\n        this.image = new Image();\n        this.image.onload = () => {\n            this.context.drawImage(this.image, this.x, this.y, this.width, this.height);\n        };\n        this.image.src = this.src;\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Sprite.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst canvas = document.querySelector(\"#canvas\");\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\ngame.start();\ncanvas.addEventListener(\"click\", () => {\n    game.mouseClicked();\n});\nwindow.addEventListener(\"keydown\", (event) => {\n    game.keyDown(event);\n});\n/* canvas.addEventListener(\"keydown\", (event) => {\n    game.keyDown(event);\n}); */\n/* canvas.addEventListener(\"mousemove\", (event) => {\n    game.mouseMoved(event);\n});\t */ \n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
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