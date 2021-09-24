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

/***/ "./src/Fruit.ts":
/*!**********************!*\
  !*** ./src/Fruit.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruit)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Fruit extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas, src) {\n        super(canvas.getContext(\"2d\"), canvas.width / 2 - 20, 0, 30, 30, src);\n    }\n    move() {\n        if (this.y < 600) {\n            this.y += 2;\n        }\n        if (this.y > 590) {\n            this.outOfScreen = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Fruit.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect */ \"./src/Rect.ts\");\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fruit */ \"./src/Fruit.ts\");\n\n\n\nclass Game {\n    constructor(canvas, tempCanvas) {\n        this.canvas = canvas;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.height = 560;\n        this.canvas.width = 300;\n        this.canvas.style.backgroundColor = \"#181820\";\n        this.tempCanvas = tempCanvas;\n        this.tempContext = this.tempCanvas.getContext(\"2d\");\n        this.tempCanvas.height = 560;\n        this.tempCanvas.width = 300;\n    }\n    start() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.tempCanvas);\n        //this.player.draw();\n        this.floor = new _Rect__WEBPACK_IMPORTED_MODULE_1__.default(this.tempContext, 6, 540, 288, 1, \"#8b8b8f\");\n        //this.floor.draw();\n        this.fruits = [];\n        const orange = new _Fruit__WEBPACK_IMPORTED_MODULE_2__.default(this.tempCanvas, \"../assets/orange.png\");\n        this.fruits.push(orange);\n        //this.fruits.forEach(fruit => fruit.draw());\n        this.startInterval();\n    }\n    clearScreen(context, canvas) {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n    }\n    mainLoop() {\n        this.clearScreen(this.tempContext, this.tempCanvas);\n        this.player.draw();\n        this.floor.draw();\n        this.fruits.forEach(fruit => fruit.move());\n        this.fruits.forEach(fruit => fruit.draw());\n        this.clearScreen(this.context, this.canvas);\n        this.context.drawImage(this.tempCanvas, 0, 0);\n    }\n    startInterval() {\n        const { setInterval } = window;\n        this.intervalId = setInterval(() => this.mainLoop(), 1000 / 60);\n    }\n    keyDown(event) {\n        if (event.code === \"KeyD\" || event.code === \"ArrowRight\") {\n            this.player.move(\"right\");\n        }\n        if (event.code === \"KeyA\" || event.code === \"ArrowLeft\") {\n            this.player.move(\"left\");\n        }\n    }\n    mouseClicked() {\n        this.clearScreen(this.context, this.canvas);\n        this.start();\n    }\n}\n/* mouseMoved(event: MouseEvent): void{\n    const xPositionMouse = event.clientX;\n    const yPositionMouse = event.clientY;\n    const xPositionCanvas = this.canvas.getBoundingClientRect().left;\n    const yPositionCanvas = this.canvas.getBoundingClientRect().top;\n\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.ball = new Ball(\n        this.context,\n        xPositionMouse - xPositionCanvas,\n        yPositionMouse - yPositionCanvas,\n        10,\n        \"#0000FF\");\n    this.ball.draw();\n} */\n/* mouseClicked(event: MouseEvent): void{\n    const xPositionMouse = event.clientX;\n    const yPositionMouse = event.clientY;\n    const xPositionCanvas = this.canvas.getBoundingClientRect().left;\n    const yPositionCanvas = this.canvas.getBoundingClientRect().top;\n\n    this.ball = new Ball(\n        this.context,\n        xPositionMouse - xPositionCanvas,\n        yPositionMouse - yPositionCanvas,\n        10,\n        \"#00FF00\");\n    this.ball.draw();\n} */\n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas) {\n        const playerWidth = 40;\n        const playerHeight = 70;\n        const floorHeight = 20;\n        const imageSrc = \"../assets/alien.png\";\n        super(canvas.getContext(\"2d\"), canvas.width / 2 - playerWidth / 2, canvas.height - playerHeight - floorHeight, playerWidth, playerHeight, imageSrc);\n    }\n    move(direction) {\n        if (direction === \"left\") {\n            if (this.x > 0)\n                this.x -= 5;\n        }\n        if (direction === \"right\") {\n            if (this.x < 260)\n                this.x += 5;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Player.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n    constructor(context, x, y, width, height, src) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.image = new Image();\n        this.image.src = src;\n    }\n    draw() {\n        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Sprite.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst canvas = document.querySelector(\"#canvas\");\nconst tempCanvas = document.createElement(\"canvas\"); // Create a new canvas as cache canvas\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(canvas, tempCanvas);\ngame.start();\ncanvas.addEventListener(\"click\", () => {\n    game.mouseClicked();\n});\nwindow.addEventListener(\"keydown\", event => {\n    game.keyDown(event);\n});\n/* canvas.addEventListener(\"keydown\", (event) => {\n    game.keyDown(event);\n}); */\n/* canvas.addEventListener(\"mousemove\", (event) => {\n    game.mouseMoved(event);\n});\t */\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

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