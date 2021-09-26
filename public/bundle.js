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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruit)\n/* harmony export */ });\n/* harmony import */ var _utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/randomHelper */ \"./src/utils/randomHelper.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\n\nclass Fruit extends _Sprite__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(canvas) {\n        const fruitsData = [\n            {\n                name: \"banana\",\n                src: \"./assets/banana.png\",\n                width: 25,\n                height: 35,\n                points: 0,\n            },\n            {\n                name: \"orange\",\n                src: \"../assets/orange.png\",\n                width: 30,\n                height: 30,\n                points: 5,\n            },\n            {\n                name: \"apple\",\n                src: \"../assets/red-apple.png\",\n                width: 30,\n                height: 30,\n                points: 10,\n            },\n            {\n                name: \"strawberry\",\n                src: \"../assets/strawberry.png\",\n                width: 20,\n                height: 20,\n                points: 30,\n            },\n            {\n                name: \"watermelon\",\n                src: \"../assets/watermelon.png\",\n                width: 50,\n                height: 40,\n                points: 20,\n            },\n        ];\n        const randomFruit = (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__.default)(0, fruitsData.length - 1);\n        const { src, width, height, points, name } = fruitsData[randomFruit];\n        const randomPosition = (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__.default)(0, canvas.width - width);\n        //prettier-ignore\n        super(canvas.getContext(\"2d\"), randomPosition, -height, width, height, src);\n        if (name === \"banana\") {\n            this.banana = true;\n        }\n        this.points = points;\n    }\n    move() {\n        if (this.y < 545) {\n            this.y += 1;\n        }\n        if (this.y > 540) {\n            this.fruitIsOutOfLimits = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Fruit.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect */ \"./src/Rect.ts\");\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fruit */ \"./src/Fruit.ts\");\n/* harmony import */ var _Life__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Life */ \"./src/Life.ts\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ \"./src/Text.ts\");\n/* harmony import */ var _utils_checkColision__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/checkColision */ \"./src/utils/checkColision.ts\");\n\n\n\n\n\n\nclass Game {\n    constructor(canvas, tempCanvas) {\n        this.canvas = canvas;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.height = 560;\n        this.canvas.width = 300;\n        this.canvas.style.backgroundColor = \"#181820\";\n        this.tempCanvas = tempCanvas;\n        this.tempContext = this.tempCanvas.getContext(\"2d\");\n        this.tempCanvas.height = 560;\n        this.tempCanvas.width = 300;\n    }\n    start() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.tempCanvas);\n        this.topBar = new _Rect__WEBPACK_IMPORTED_MODULE_1__.default(this.tempContext, 0, 0, 300, 60, \"#000\");\n        this.quantityOfLife = 3;\n        this.lives = [];\n        for (let i = 0; i < this.quantityOfLife; i++) {\n            this.lives.push(new _Life__WEBPACK_IMPORTED_MODULE_3__.default(this.tempCanvas));\n        }\n        this.score = 0;\n        this.scoreText = new _Text__WEBPACK_IMPORTED_MODULE_4__.default(this.tempContext, 200, 25, this.score);\n        this.scoreValue = new _Text__WEBPACK_IMPORTED_MODULE_4__.default(this.tempContext, 210, 50, this.score);\n        this.floor = new _Rect__WEBPACK_IMPORTED_MODULE_1__.default(this.tempContext, 6, 540, 288, 1, \"#8b8b8f\");\n        this.fruits = [];\n        this.startInterval();\n    }\n    clearScreen(context, canvas) {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n    }\n    getFruits() {\n        this.fruits.forEach(fruit => {\n            const colision = (0,_utils_checkColision__WEBPACK_IMPORTED_MODULE_5__.default)(this.player, fruit);\n            if (colision) {\n                this.fruits = this.fruits.filter(f => f !== fruit);\n                this.score += fruit.points;\n                if (fruit.banana) {\n                    this.score *= 2;\n                }\n            }\n        });\n    }\n    dropFruits() {\n        this.fruits.forEach(fruit => {\n            const colision = (0,_utils_checkColision__WEBPACK_IMPORTED_MODULE_5__.default)(this.player, fruit);\n            if (colision) {\n                this.fruits = this.fruits.filter(f => f !== fruit);\n                this.score += fruit.points;\n                if (fruit.banana) {\n                    this.score *= 2;\n                }\n            }\n        });\n    }\n    updateStates() {\n        this.getFruits();\n        this.dropFruits();\n    }\n    renderGame() {\n        this.clearScreen(this.tempContext, this.tempCanvas);\n        this.player.draw();\n        this.topBar.draw();\n        this.lives.forEach(life => life.draw());\n        this.scoreText.draw(\"text\", this.score);\n        this.scoreValue.draw(\"value\", this.score);\n        this.floor.draw();\n        this.fruits.forEach(fruit => fruit.move());\n        this.fruits.forEach(fruit => fruit.draw());\n        this.clearScreen(this.context, this.canvas);\n        this.context.drawImage(this.tempCanvas, 0, 0);\n    }\n    mainLoop() {\n        this.updateStates();\n        this.renderGame();\n    }\n    startInterval() {\n        const { setInterval } = window;\n        this.gameInterval = setInterval(() => this.mainLoop(), 1000 / 60);\n        this.newFruitsInterval = setInterval(() => this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_2__.default(this.tempCanvas)), 2000);\n    }\n    keyDown(event) {\n        if (event.code === \"KeyD\" || event.code === \"ArrowRight\") {\n            this.player.move(\"right\");\n        }\n        if (event.code === \"KeyA\" || event.code === \"ArrowLeft\") {\n            this.player.move(\"left\");\n        }\n    }\n    mouseClicked() {\n        this.clearScreen(this.context, this.canvas);\n        this.start();\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

/***/ }),

/***/ "./src/Life.ts":
/*!*********************!*\
  !*** ./src/Life.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Life)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Life extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas) {\n        const lifeWidth = 40;\n        const lifeHeight = 40;\n        const x = 12 + (Life.id - 1) * 40;\n        const y = 12;\n        const imageSrc = \"./assets/heart.png\";\n        super(canvas.getContext(\"2d\"), x, y, lifeWidth, lifeHeight, imageSrc);\n        console.log(Life.id);\n        Life.id += 1;\n    }\n    move(direction) {\n        if (direction === \"left\") {\n            if (this.x > 0)\n                this.x -= 5;\n        }\n        if (direction === \"right\") {\n            if (this.x < 260)\n                this.x += 5;\n        }\n    }\n}\nLife.id = 1;\n\n\n//# sourceURL=webpack://banana-game/./src/Life.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas) {\n        const playerWidth = 40;\n        const playerHeight = 60;\n        const floorHeight = 20;\n        const imageSrc = \"../assets/alien.png\";\n        super(canvas.getContext(\"2d\"), canvas.width / 2 - playerWidth / 2, canvas.height - playerHeight - floorHeight, playerWidth, playerHeight, imageSrc);\n    }\n    move(direction) {\n        if (direction === \"left\") {\n            if (this.x > 0)\n                this.x -= 5;\n        }\n        if (direction === \"right\") {\n            if (this.x < 260)\n                this.x += 5;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Player.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n    constructor(context, x, y, width, height, src) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.src = src;\n        this.image = new Image();\n        this.image.src = this.src;\n    }\n    draw() {\n        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Sprite.ts?");

/***/ }),

/***/ "./src/Text.ts":
/*!*********************!*\
  !*** ./src/Text.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Text)\n/* harmony export */ });\nclass Text {\n    constructor(context, x, y, value) {\n        const font = \"Arial\";\n        const fontSize = 20;\n        const fontColor = \"#fff\";\n        const text = `Score: ${value}`;\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.font = font;\n        this.fontSize = fontSize;\n        this.fontColor = fontColor;\n        this.text = text;\n    }\n    draw(type, value) {\n        this.context.font = `${this.fontSize}px ${this.font}`;\n        this.context.fillStyle = this.fontColor;\n        if (type === \"text\") {\n            this.text = \"Score:\";\n        }\n        if (type === \"value\") {\n            this.text = `${value}`;\n        }\n        this.context.fillText(this.text, this.x, this.y);\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Text.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst canvas = document.querySelector(\"#canvas\");\nconst tempCanvas = document.createElement(\"canvas\"); // Create a new canvas as cache canvas\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(canvas, tempCanvas);\ngame.start();\ncanvas.addEventListener(\"click\", () => {\n    game.mouseClicked();\n});\nwindow.addEventListener(\"keydown\", event => {\n    game.keyDown(event);\n});\n/* canvas.addEventListener(\"keydown\", (event) => {\n    game.keyDown(event);\n}); */\n/* canvas.addEventListener(\"mousemove\", (event) => {\n    game.mouseMoved(event);\n});\t */\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

/***/ }),

/***/ "./src/utils/checkColision.ts":
/*!************************************!*\
  !*** ./src/utils/checkColision.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkColision)\n/* harmony export */ });\nfunction checkColision(player, fruit) {\n    const playerY0 = player.y;\n    const playerY1 = player.y + player.height;\n    const fruitY0 = fruit.y;\n    const fruitY1 = fruit.y + fruit.height;\n    const verticalIntersection = (fruitY0 >= playerY0 && fruitY0 <= playerY1) ||\n        (fruitY1 >= playerY0 && fruitY1 <= playerY1);\n    const playerX0 = player.x;\n    const playerX1 = player.x + player.width;\n    const fruitX0 = fruit.x;\n    const fruitX1 = fruit.x + fruit.width;\n    const horizontalIntersection = (fruitX0 >= playerX0 && fruitX0 <= playerX1) ||\n        (fruitX1 >= playerX0 && fruitX1 <= playerX1) ||\n        (fruitX0 <= playerX0 && fruitX1 >= playerX1);\n    const colision = verticalIntersection && horizontalIntersection;\n    return colision;\n}\n\n\n//# sourceURL=webpack://banana-game/./src/utils/checkColision.ts?");

/***/ }),

/***/ "./src/utils/randomHelper.ts":
/*!***********************************!*\
  !*** ./src/utils/randomHelper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomValue)\n/* harmony export */ });\nfunction randomValue(lowerLimit, upperLimit) {\n    const randomValue = Math.floor((upperLimit - lowerLimit + 1) * Math.random());\n    return randomValue;\n}\n\n\n//# sourceURL=webpack://banana-game/./src/utils/randomHelper.ts?");

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