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

/***/ "./src/Bomb.ts":
/*!*********************!*\
  !*** ./src/Bomb.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bomb)\n/* harmony export */ });\n/* harmony import */ var _utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/randomHelper */ \"./src/utils/randomHelper.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\n\nclass Bomb extends _Sprite__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(canvas) {\n        const bombData = [\n            {\n                name: \"bomb\",\n                src: \"./assets/bomb.png\",\n                width: 25,\n                height: 35,\n            },\n        ];\n        const { src, width, height } = bombData[0];\n        const randomPosition = (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__.default)(0, canvas.width - width);\n        //prettier-ignore\n        super(canvas.getContext(\"2d\"), randomPosition, -height, width, height, src);\n        this.velocity = 5;\n    }\n    move() {\n        if (this.y < 545) {\n            this.y += this.velocity;\n        }\n        if (this.y > 540) {\n            this.wasDropped = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Bomb.ts?");

/***/ }),

/***/ "./src/Fruit.ts":
/*!**********************!*\
  !*** ./src/Fruit.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruit)\n/* harmony export */ });\n/* harmony import */ var _utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/randomHelper */ \"./src/utils/randomHelper.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\n\nclass Fruit extends _Sprite__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(canvas) {\n        const fruitsData = [\n            {\n                name: \"banana\",\n                src: \"./assets/banana.png\",\n                width: 25,\n                height: 35,\n                points: 0,\n            },\n            {\n                name: \"orange\",\n                src: \"../assets/orange.png\",\n                width: 30,\n                height: 30,\n                points: 5,\n            },\n            {\n                name: \"apple\",\n                src: \"../assets/red-apple.png\",\n                width: 30,\n                height: 30,\n                points: 10,\n            },\n            {\n                name: \"strawberry\",\n                src: \"../assets/strawberry.png\",\n                width: 20,\n                height: 20,\n                points: 30,\n            },\n            {\n                name: \"watermelon\",\n                src: \"../assets/watermelon.png\",\n                width: 50,\n                height: 40,\n                points: 20,\n            },\n        ];\n        const randomFruit = (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__.default)(0, fruitsData.length - 1);\n        const { src, width, height, points, name } = fruitsData[randomFruit];\n        const randomPosition = (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__.default)(0, canvas.width - width);\n        //prettier-ignore\n        super(canvas.getContext(\"2d\"), randomPosition, -height, width, height, src);\n        if (name === \"banana\") {\n            this.isBanana = true;\n        }\n        this.points = points;\n        this.velocity = 3;\n    }\n    move() {\n        if (this.y < 545) {\n            this.y += this.velocity;\n        }\n        if (this.y > 540) {\n            this.wasDropped = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Fruit.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect */ \"./src/Rect.ts\");\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fruit */ \"./src/Fruit.ts\");\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bomb */ \"./src/Bomb.ts\");\n/* harmony import */ var _Heart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Heart */ \"./src/Heart.ts\");\n/* harmony import */ var _Health__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Health */ \"./src/Health.ts\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text */ \"./src/Text.ts\");\n/* harmony import */ var _utils_checkColision__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/checkColision */ \"./src/utils/checkColision.ts\");\n/* harmony import */ var _utils_randomHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/randomHelper */ \"./src/utils/randomHelper.ts\");\n\n\n\n\n\n\n\n\n\nclass Game {\n    constructor(canvas, tempCanvas) {\n        this.canvas = canvas;\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.height = 560;\n        this.canvas.width = 300;\n        this.canvas.style.backgroundColor = \"#181820\";\n        this.tempCanvas = tempCanvas;\n        this.tempContext = this.tempCanvas.getContext(\"2d\");\n        this.tempCanvas.height = 560;\n        this.tempCanvas.width = 300;\n    }\n    start() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.tempCanvas);\n        this.topBar = new _Rect__WEBPACK_IMPORTED_MODULE_1__.default(this.tempContext, 0, 0, 300, 60, \"#000\");\n        this.playerHealth = [];\n        this.fruits = [];\n        this.bombs = [];\n        this.hearts = [];\n        for (let i = 0; i < 3; i++) {\n            this.playerHealth.push(new _Health__WEBPACK_IMPORTED_MODULE_5__.default(this.tempCanvas));\n        }\n        this.score = 0;\n        this.scoreText = new _Text__WEBPACK_IMPORTED_MODULE_6__.default(this.tempContext, 180, 25, this.score);\n        this.scoreValue = new _Text__WEBPACK_IMPORTED_MODULE_6__.default(this.tempContext, 180, 50, this.score);\n        this.floor = new _Rect__WEBPACK_IMPORTED_MODULE_1__.default(this.tempContext, 6, 540, 288, 1, \"#8b8b8f\");\n        this.startInterval();\n    }\n    clearScreen(context, canvas) {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n    }\n    endGame() {\n        clearInterval(this.gameInterval);\n        clearInterval(this.newFruitsInterval);\n        clearInterval(this.newFruitsInterval2);\n        clearInterval(this.newFruitsInterval3);\n        clearInterval(this.newFruitsInterval4);\n        clearInterval(this.newBombsInterval);\n        clearInterval(this.newHeartsInterval);\n        const response = confirm(\"Fim de jogo! Gostaria de jogar novamente?\");\n        if (response) {\n            this.fruits = [];\n            this.bombs = [];\n            this.hearts = [];\n            Game.droppedFruits = 0;\n            _Health__WEBPACK_IMPORTED_MODULE_5__.default.id = 0;\n            clearInterval(this.gameInterval);\n            clearInterval(this.newFruitsInterval);\n            clearInterval(this.newFruitsInterval2);\n            clearInterval(this.newFruitsInterval3);\n            clearInterval(this.newFruitsInterval4);\n            clearInterval(this.newBombsInterval);\n            clearInterval(this.newHeartsInterval);\n            this.start();\n        }\n    }\n    getFruits() {\n        this.fruits.forEach(fruit => {\n            const colision = (0,_utils_checkColision__WEBPACK_IMPORTED_MODULE_7__.default)(this.player, fruit);\n            if (colision) {\n                this.fruits = this.fruits.filter(f => f !== fruit);\n                this.score += fruit.points;\n                if (fruit.isBanana) {\n                    this.score *= 2;\n                }\n            }\n        });\n    }\n    dropFruits() {\n        this.fruits = this.fruits.flatMap(fruit => {\n            if (fruit.wasDropped) {\n                if (Game.droppedFruits < this.playerHealth.length) {\n                    const currentHealth = this.playerHealth.length - 1 - Game.droppedFruits;\n                    this.playerHealth[currentHealth].updateImage(\"./assets/heart-empty.png\");\n                    Game.droppedFruits += 1;\n                }\n                else {\n                    this.endGame();\n                }\n                return [];\n            }\n            else {\n                return [fruit];\n            }\n        });\n    }\n    getBombs() {\n        this.bombs.forEach(bomb => {\n            const colision = (0,_utils_checkColision__WEBPACK_IMPORTED_MODULE_7__.default)(this.player, bomb);\n            if (colision) {\n                this.bombs = this.bombs.filter(b => b !== bomb);\n                this.endGame();\n            }\n        });\n    }\n    dropBombs() {\n        this.bombs = this.bombs.filter(bomb => bomb.wasDropped !== true);\n    }\n    getHearts() {\n        this.hearts.forEach(heart => {\n            const colision = (0,_utils_checkColision__WEBPACK_IMPORTED_MODULE_7__.default)(this.player, heart);\n            if (colision) {\n                this.hearts = this.hearts.filter(h => h !== heart);\n                if (Game.droppedFruits > 0) {\n                    const currentHealth = this.playerHealth.length - Game.droppedFruits;\n                    this.playerHealth[currentHealth].updateImage(\"./assets/heart.png\");\n                    Game.droppedFruits -= 1;\n                }\n            }\n        });\n    }\n    dropHearts() {\n        this.hearts = this.hearts.filter(heart => heart.wasDropped !== true);\n    }\n    updateStates() {\n        this.getFruits();\n        this.dropFruits();\n        this.getBombs();\n        this.dropBombs();\n        this.getHearts();\n        this.dropHearts();\n    }\n    renderGame() {\n        this.clearScreen(this.tempContext, this.tempCanvas);\n        this.player.draw();\n        this.topBar.draw();\n        this.playerHealth.forEach(health => health.draw());\n        this.scoreText.draw(\"text\", this.score);\n        this.scoreValue.draw(\"value\", this.score);\n        this.floor.draw();\n        this.fruits.forEach(fruit => fruit.move());\n        this.fruits.forEach(fruit => fruit.draw());\n        this.bombs.forEach(bomb => bomb.move());\n        this.bombs.forEach(bomb => bomb.draw());\n        this.hearts.forEach(heart => heart.move());\n        this.hearts.forEach(heart => heart.draw());\n        this.clearScreen(this.context, this.canvas);\n        this.context.drawImage(this.tempCanvas, 0, 0);\n    }\n    mainLoop() {\n        this.updateStates();\n        this.renderGame();\n    }\n    startInterval() {\n        const { setInterval } = window;\n        this.gameInterval = setInterval(() => this.mainLoop(), 1000 / 60);\n        this.newFruitsInterval = setInterval(() => this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_2__.default(this.tempCanvas)), 2000);\n        this.newFruitsInterval2 = setInterval(() => this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_2__.default(this.tempCanvas)), 9333);\n        this.newFruitsInterval3 = setInterval(() => this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_2__.default(this.tempCanvas)), 21115);\n        this.newFruitsInterval3 = setInterval(() => this.fruits.push(new _Fruit__WEBPACK_IMPORTED_MODULE_2__.default(this.tempCanvas)), 43219);\n        this.newBombsInterval = setInterval(() => this.bombs.push(new _Bomb__WEBPACK_IMPORTED_MODULE_3__.default(this.tempCanvas)), (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_8__.default)(9700, 15000));\n        this.newHeartsInterval = setInterval(() => this.hearts.push(new _Heart__WEBPACK_IMPORTED_MODULE_4__.default(this.tempCanvas)), 34567);\n    }\n    keyDown(event) {\n        if (event.code === \"KeyD\" || event.code === \"ArrowRight\") {\n            this.player.move(\"right\");\n        }\n        if (event.code === \"KeyA\" || event.code === \"ArrowLeft\") {\n            this.player.move(\"left\");\n        }\n    }\n    keyUp(event) {\n        if (event.code === \"KeyD\" || event.code === \"ArrowRight\") {\n            this.player.move(\"stop\");\n        }\n        if (event.code === \"KeyA\" || event.code === \"ArrowLeft\") {\n            this.player.move(\"stop\");\n        }\n    }\n    mouseClicked() {\n        clearInterval(this.gameInterval);\n        clearInterval(this.newFruitsInterval);\n        clearInterval(this.newFruitsInterval2);\n        clearInterval(this.newFruitsInterval3);\n        clearInterval(this.newFruitsInterval3);\n        clearInterval(this.newBombsInterval);\n        clearInterval(this.newHeartsInterval);\n        Game.droppedFruits = 0;\n        _Health__WEBPACK_IMPORTED_MODULE_5__.default.id = 0;\n        this.fruits = [];\n        this.bombs = [];\n        this.hearts = [];\n        this.start();\n    }\n}\nGame.droppedFruits = 0;\n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

/***/ }),

/***/ "./src/Health.ts":
/*!***********************!*\
  !*** ./src/Health.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Health)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Health extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas) {\n        const healthWidth = 40;\n        const healthHeight = 40;\n        const x = 12 + Health.id * 42;\n        const y = 12;\n        const imageSrc = \"./assets/heart.png\";\n        super(canvas.getContext(\"2d\"), x, y, healthWidth, healthHeight, imageSrc);\n        Health.id += 1;\n    }\n}\nHealth.id = 0;\n\n\n//# sourceURL=webpack://banana-game/./src/Health.ts?");

/***/ }),

/***/ "./src/Heart.ts":
/*!**********************!*\
  !*** ./src/Heart.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Heart)\n/* harmony export */ });\n/* harmony import */ var _utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/randomHelper */ \"./src/utils/randomHelper.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\n\nclass Heart extends _Sprite__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(canvas) {\n        const heartWidth = 50;\n        const heartHeight = 50;\n        const randomPosition = (0,_utils_randomHelper__WEBPACK_IMPORTED_MODULE_0__.default)(0, canvas.width - heartWidth);\n        const y = -heartHeight;\n        const imageSrc = \"./assets/heart.png\";\n        super(canvas.getContext(\"2d\"), randomPosition, y, heartWidth, heartHeight, imageSrc);\n        this.velocity = 6;\n    }\n    move() {\n        if (this.y < 545) {\n            this.y += this.velocity;\n        }\n        if (this.y > 540) {\n            this.wasDropped = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Heart.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n\nclass Player extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas) {\n        const playerWidth = 40;\n        const playerHeight = 60;\n        const floorHeight = 20;\n        const imageSrc = \"../assets/alien.png\";\n        super(canvas.getContext(\"2d\"), canvas.width / 2 - playerWidth / 2, canvas.height - playerHeight - floorHeight, playerWidth, playerHeight, imageSrc);\n        this.velocity = 6;\n    }\n    move(direction) {\n        if (direction === \"left\") {\n            this.velocity = 6;\n            if (this.x > 0)\n                this.x -= this.velocity;\n        }\n        if (direction === \"right\") {\n            this.velocity = 6;\n            if (this.x < 260)\n                this.x += this.velocity;\n        }\n        if (direction === \"stop\") {\n            this.velocity = 0;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Player.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\n    constructor(context, x, y, width, height, src) {\n        this.context = context;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.src = src;\n        this.image = new Image();\n        this.image.src = this.src;\n    }\n    draw() {\n        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);\n    }\n    updateImage(src) {\n        this.src = src;\n        this.image.src = src;\n    }\n}\n\n\n//# sourceURL=webpack://banana-game/./src/Sprite.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst canvas = document.querySelector(\"#canvas\");\nconst tempCanvas = document.createElement(\"canvas\"); // Create a new canvas as cache\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(canvas, tempCanvas);\ngame.start();\ncanvas.addEventListener(\"click\", () => {\n    game.mouseClicked();\n});\nwindow.addEventListener(\"keydown\", event => {\n    game.keyDown(event);\n});\nwindow.addEventListener(\"keyup\", event => {\n    game.keyUp(event);\n});\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

/***/ }),

/***/ "./src/utils/checkColision.ts":
/*!************************************!*\
  !*** ./src/utils/checkColision.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkColision)\n/* harmony export */ });\nfunction checkColision(player, fallingObject) {\n    const playerY0 = player.y;\n    const playerY1 = player.y + player.height;\n    const fallingObjectY0 = fallingObject.y;\n    const fallingObjectY1 = fallingObject.y + fallingObject.height;\n    const verticalIntersection = (fallingObjectY0 >= playerY0 && fallingObjectY0 <= playerY1) ||\n        (fallingObjectY1 >= playerY0 && fallingObjectY1 <= playerY1);\n    const playerX0 = player.x;\n    const playerX1 = player.x + player.width;\n    const fallingObjectX0 = fallingObject.x;\n    const fallingObjectX1 = fallingObject.x + fallingObject.width;\n    const horizontalIntersection = (fallingObjectX0 >= playerX0 && fallingObjectX0 <= playerX1) ||\n        (fallingObjectX1 >= playerX0 && fallingObjectX1 <= playerX1) ||\n        (fallingObjectX0 <= playerX0 && fallingObjectX1 >= playerX1);\n    const colision = verticalIntersection && horizontalIntersection;\n    return colision;\n}\n\n\n//# sourceURL=webpack://banana-game/./src/utils/checkColision.ts?");

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