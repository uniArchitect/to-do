/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body,\\nhtml {\\n  height: 95%;\\n  /* margin: 8px;\\n    margin-left: 72px;\\n    margin-right: 72px; */\\n  /* background-color: #f8fafc; */\\n  background-color: #222629;\\n  font-family: \\"Montserrat\\", sans-serif;\\n  color: #f8fafc;\\n}\\n\\ninput {\\n  border-radius: 5px;\\n  border: 1px solid #222629;\\n  height: 1.75em;\\n  background: #222629;\\n  color: inherit;\\n}\\n\\ninput:focus {\\n  outline: none;\\n  border: 1px solid #4056a1;\\n}\\n\\ninput:invalid {\\n  border: 1px solid #f13c20;\\n}\\n\\n/* input:valid {\\n  border: 1px solid #14a76c;\\n} */\\n\\nselect {\\n  border-radius: 5px;\\n  border: 1px solid #222629;\\n  height: 1.75em;\\n  background: #222629;\\n  color: inherit;\\n}\\n\\nselect:focus {\\n  outline: none;\\n  border: 1px solid #4056a1;\\n}\\n\\n/* Stylize task form and input elements*/\\n.task-form-background {\\n  position: absolute;\\n  display: none;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background: #474b4f;\\n  padding: 1.5em;\\n  border-radius: 0.5em;\\n  width: 15em;\\n}\\n\\n.task-form {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.5em;\\n  list-style: none;\\n  margin: 0em;\\n  padding: 0em;\\n}\\n\\n.task-form-list {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.25em;\\n}\\n\\n.task-form-buttons {\\n  display: flex;\\n  justify-content: space-between;\\n  padding-top: 1em;\\n  /* padding-bottom: 0.5em; */\\n}\\n\\n#task-add {\\n  background: #4056a1;\\n  border: none;\\n  color: inherit;\\n  font-size: 0.75em;\\n  font-weight: bold;\\n  padding: 0.5em;\\n  height: 2.5em;\\n}\\n\\n#task-add:hover {\\n  transition: 0.15s;\\n  transform: translateY(-2px);\\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n#close-task-form {\\n  background: #4056a1;\\n  border: none;\\n  border-radius: 5px;\\n  color: inherit;\\n  font-size: 0.75em;\\n  font-weight: bold;\\n  padding: 0.5em;\\n}\\n\\nbutton {\\n  background: #4056a1;\\n  border: none;\\n  border-radius: 5px;\\n  color: inherit;\\n  font-size: 0.75em;\\n  font-weight: bold;\\n  padding: 0.5em;\\n}\\n\\nbutton:hover {\\n  transition: 0.15s;\\n  transform: translateY(-2px);\\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n.container {\\n  display: grid;\\n  grid-template-rows: repeat(12, 1fr);\\n  grid-template-columns: repeat(5, 1fr);\\n  height: 100%;\\n  margin: 2em;\\n  gap: 2em;\\n}\\n\\n.task-info {\\n  /* position: absolute; */\\n  transform: translateX(150%);\\n  transition: 0.5s ease-in;\\n  background: #474b4f;\\n  grid-column: 5 / 6;\\n  grid-row: 1 / 13;\\n  display: flex;\\n  flex-direction: row-reverse;\\n  border-radius: 0.75em;\\n  padding: 1em;\\n}\\n\\n.task-info-active {\\n  transform: translateX(0%);\\n}\\n\\n.task-info-text {\\n  font-size: small;\\n}\\n\\n#task-info-text-area {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  height: 5em;\\n  border-radius: 5px;\\n  border: 1px solid #222629;\\n  background: #222629;\\n  color: inherit;\\n}\\n\\n#task-info-text-area:focus {\\n  outline: none;\\n  border: 1px solid #4056a1;\\n}\\n\\n#task-info-text-description {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  height: 3em;\\n  border-radius: 5px;\\n  border: 1px solid #222629;\\n  background: #222629;\\n  color: inherit;\\n}\\n\\n#task-info-text-description:focus {\\n  outline: none;\\n  border: 1px solid #4056a1;\\n}\\n\\n#task-info-date {\\n  font-family: \\"Montserrat\\";\\n}\\n\\n/* Each task-info object should be one unified class (use multiple classes?) */\\n#task-card {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.25em;\\n}\\n\\n.main-UI {\\n  grid-column: 2 / 5;\\n  grid-row: 1 / 13;\\n}\\n\\n.category-name {\\n  font-size: 2em;\\n  font-weight: bold;\\n}\\n\\n.category-list {\\n  padding: 0%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5em;\\n}\\n\\n.task-object {\\n  display: flex;\\n  justify-content: space-between;\\n  background: #474b4f;\\n  padding: 0.35em;\\n  border-radius: 0.5em;\\n  border-left: 0.5em solid #474b4f;\\n}\\n\\n.task-object:hover {\\n  transition: 0.15s;\\n  transform: translateY(-2px);\\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n.task-name-check-container {\\n  display: flex;\\n  column-gap: 1em;\\n  margin-left: 0.5em;\\n}\\n\\n/* Checkbox Styling */\\n.task-name-check-container label {\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.task-name-check-container input[type=\\"checkbox\\"] {\\n  cursor: pointer;\\n  opacity: 0;\\n  position: absolute;\\n}\\n\\n.task-name-check-container label::before {\\n  content: \\"\\";\\n  width: 1.25em;\\n  height: 1.25em;\\n  border-radius: 1em;\\n  margin-right: 0.5em;\\n  border: 0.05em solid #222629;\\n  background-color: #222629;\\n}\\n\\n.task-name-check-container label:hover::before,\\n.task-name-check-container input[type=\\"checkbox\\"]:hover + label::before {\\n  border: 0.05em solid #4056a1;\\n  background-color: #4056a1;\\n}\\n\\n/* .task-object input[type=\'checkbox\']:focus + label::before {\\n                            box-shadow: 0 0 .5em white;\\n                        } */\\n\\n.task-name-check-container input[type=\\"checkbox\\"]:checked + label::before {\\n  /* checkmark icon */\\n  content: \\"\\\\002714\\";\\n  border: 0.05em solid #4056a1;\\n  background-color: #4056a1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n}\\n\\n#task-name {\\n  display: flex;\\n  align-items: center;\\n  text-decoration: none;\\n}\\n\\n#task-name:visited {\\n  color: inherit;\\n}\\n\\n#task-name:hover {\\n  color: #4056a1;\\n}\\n\\n.task-delete {\\n  display: flex;\\n  background: #474b4f;\\n  border-radius: 2em;\\n}\\n\\n.sidebar {\\n  background: #474b4f;\\n  grid-column: 1 / 2;\\n  grid-row: 1 / 13;\\n  border-radius: 0.75em;\\n}\\n\\n.pinned-categories {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0em;\\n  padding: 1em;\\n}\\n\\n#pinned-list-item {\\n  text-decoration: none;\\n  color: inherit;\\n  padding: 0.5em;\\n}\\n\\n#pinned-list-item:hover {\\n  background: #4056a1;\\n  border-radius: 0.5em;\\n  transition: 0.15s;\\n  transform: translateY(-2px);\\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n.custom-categories {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0%;\\n  padding: 1em;\\n  gap: 0.25em;\\n}\\n\\n#category-link {\\n  text-decoration: none;\\n  color: inherit;\\n  padding: 0.5em;\\n}\\n\\n#category-link:hover {\\n  background: #4056a1;\\n  border-radius: 0.5em;\\n  transition: 0.15s;\\n  transform: translateY(-2px);\\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\\n}\\n\\n.create-category-container {\\n  padding: 1em;\\n}\\n\\n.category-form {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.5em;\\n}\\n\\n.create-cat-btn-container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n#category-submit {\\n  background: #4056a1;\\n  border: none;\\n  border-radius: 5px;\\n  color: inherit;\\n  font-size: 0.75em;\\n  font-weight: bold;\\n  padding: 0.5em;\\n  height: 2.15em;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/styles.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/styles.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/Category.js":
      /*!*************************!*\
  !*** ./src/Category.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "CategoryUI": () => (/* binding */ CategoryUI),\n/* harmony export */   "default": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");\n\n\n\n// Create Category information first with an input field\n// Then you can use add functions to append that information into the web page\nclass Category {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// Rule - Only one class per module\nclass CategoryUI {\n  static hideChildrenElements = () => {\n    // All children elements in main-UI container div are pushed into an array\n    const categoryContainerArray = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].spreadElements(_index__WEBPACK_IMPORTED_MODULE_1__.MAIN_UI_DIV);\n\n    // Each children element in the array set style display to none\n    categoryContainerArray.forEach(\n      (element) => (element.style.display = "none")\n    );\n  };\n\n  static defaultCategory = () => {\n    // Pinned category attributes and append to sidebar\n    const myDayCategory = document.createElement("a");\n    const importantCategory = document.createElement("a");\n\n    myDayCategory.classList.add("my-day-category");\n    importantCategory.classList.add("important-category");\n\n    myDayCategory.setAttribute("id", "pinned-list-item");\n    importantCategory.setAttribute("id", "pinned-list-item");\n    myDayCategory.setAttribute("href", "#");\n    importantCategory.setAttribute("href", "#");\n\n    myDayCategory.innerHTML = "My Day";\n    importantCategory.innerHTML = "Important";\n\n    document\n      .querySelector(".pinned-categories")\n      .append(myDayCategory, importantCategory);\n  };\n\n  static categoryInput = () => {\n    const CREATE_CAT_DIV = document.querySelector(".create-category-container");\n\n    const categoryForm = document.createElement("form");\n    const inputField = document.createElement("input");\n    const inputSubmit = document.createElement("input");\n    const inputCancel = document.createElement("button");\n    const inputButtonDiv = document.createElement("div");\n\n    categoryForm.setAttribute("action", "index.html");\n    categoryForm.setAttribute("method", "GET");\n    categoryForm.classList.add("category-form");\n\n    inputField.setAttribute("required", "");\n    inputField.setAttribute("type", "text");\n    inputField.setAttribute("id", "category-input-name");\n\n    inputSubmit.setAttribute("type", "submit");\n    inputSubmit.setAttribute("id", "category-submit");\n    inputSubmit.setAttribute("value", "Submit");\n    // inputSubmit.innerHTML = \'Submit\';\n\n    inputCancel.classList.add("create-category-cancel");\n    inputCancel.setAttribute("id", "create-category-cancel");\n    inputCancel.innerHTML = "Cancel";\n\n    inputButtonDiv.classList.add("create-cat-btn-container");\n\n    // Append submit / cancel into separate div element from input field\n    inputButtonDiv.append(inputSubmit, inputCancel);\n\n    categoryForm.append(inputField, inputButtonDiv);\n\n    CREATE_CAT_DIV.appendChild(categoryForm);\n  };\n\n  static addCategoryContainer = (category) => {\n    // Create - HTML element for main category list\n    const categoryContainer = document.createElement("div");\n    const categoryName = document.createElement("div");\n    const categoryList = document.createElement("ul");\n    const createTask = document.createElement("button");\n\n    categoryContainer.classList.add(`${category.name}-display`);\n    categoryName.classList.add("category-name");\n    categoryName.setAttribute("id", `${category.name}-name`);\n    categoryList.classList.add("category-list");\n    categoryList.setAttribute("id", `${category.name}-list`);\n    createTask.classList.add("task-create");\n\n    // Convert revised category value to original input\n    const categoryOriginal = `${category.name}`.replaceAll("-", " ");\n    categoryName.innerHTML = categoryOriginal;\n    createTask.innerHTML = "Create A Task";\n\n    categoryContainer.append(categoryName, categoryList, createTask);\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.MAIN_UI_DIV.appendChild(categoryContainer);\n\n    // Store new category into local storage\n    // Local storage wants to take \'string\' values of the properties of an element\n    //\n    // window.localStorage.setItem(\'category\', JSON.stringify(categoryContainer));\n\n    return categoryContainer;\n  };\n\n  static addSideBarLink = (category) => {\n    // Create - HTML element for link for sidebar\n    const SIDEBAR_DIV = document.querySelector(".custom-categories");\n\n    const sideBarLink = document.createElement("a");\n\n    sideBarLink.classList.add(`${category.name}-category`);\n\n    // setAttribute href=\'#\', id= category-link\n    sideBarLink.setAttribute("href", "#");\n    sideBarLink.setAttribute("id", "category-link");\n\n    // Convert revised category value to original input\n    const categoryOriginal = `${category.name}`.replaceAll("-", " ");\n    sideBarLink.innerHTML = categoryOriginal;\n\n    SIDEBAR_DIV.appendChild(sideBarLink);\n  };\n\n  static switchCategory = (category) => {\n    const currentContainer = document.querySelector(\n      `.${category.name}-display`\n    );\n\n    CategoryUI.hideChildrenElements();\n\n    // current container that was created style display to block\n    currentContainer.style.display = "block";\n  };\n\n  // Switch category from sidebar link\n  static switchCategoryContainer = (link) => {\n    // get currentContainer\n    // Note: get class name replace \'category\' and replace with \'display\' to grab coinciding container\n    const linkClass = link.className.replace("category", "display");\n    // returns \'catname-display\'\n\n    const currentContainer = document.querySelector(`.${linkClass}`);\n\n    CategoryUI.hideChildrenElements();\n\n    // current container that was created style display to block\n    currentContainer.style.display = "block";\n  };\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/Category.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "CREATE_CAT_UL": () => (/* binding */ CREATE_CAT_UL),\n/* harmony export */   "MAIN_UI_DIV": () => (/* binding */ MAIN_UI_DIV),\n/* harmony export */   "TASK_INFO_DIV": () => (/* binding */ TASK_INFO_DIV)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./src/Category.js");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/validation.js");\n\n\n\n\n// import spreadElements from \'./utility.js\'\n\n// GLOBAL SCOPE\nconst MAIN_UI_DIV = document.querySelector(".main-UI");\nconst TASK_FORM_DIV = document.querySelector(".task-form-background");\nconst TASK_INFO_DIV = document.querySelector(".task-info");\nconst CLOSE_TASK_BTN = document.querySelector("#close-task-form");\nconst NEW_CATEGORY_BTN = document.querySelector("#create-category");\nconst CREATE_CAT_UL = document.querySelector(".create-category-container");\n// eslint-disable-next-line max-len\n// CATEGORY_FORM is not predefined when the page loads - figure out a way to access category_form as a global variable\n// const CATEGORY_FORM = document.querySelector(\'.category-form\');\n\n// TO DO ITEMS\n// SEPARATE CLASSES INTO INDIVIDUAL MODULES\n// EACH TASK CAN BE SORTED INTO A PROJECT AS WELL\n// STYLING TO CROSS OFF ITEM WHEN TASK IS CHECKED OFF?\n\n// Pinned category attributes and append to sidebar\n_Category__WEBPACK_IMPORTED_MODULE_2__.CategoryUI.defaultCategory();\n\n// Event - Create input field for new category\nNEW_CATEGORY_BTN.addEventListener("click", () => {\n  const CATEGORY_FORM = document.querySelector(".category-form");\n\n  if (CREATE_CAT_UL.childElementCount == "1") {\n    _Category__WEBPACK_IMPORTED_MODULE_2__.CategoryUI.categoryInput();\n\n    NEW_CATEGORY_BTN.style.display = "none";\n  } else {\n    document.querySelector("#category-input-name").value = "";\n\n    CATEGORY_FORM.style.display = "flex";\n    NEW_CATEGORY_BTN.style.display = "none";\n  }\n});\n\n// Event - Append create Category\n// Note: Event listener has to work off the parent element of the form\n// Note: Containers may need to be reorganized so that container and sidebar elements do not overlap\ndocument\n  .querySelector(".create-category-container")\n  .addEventListener("submit", (e) => {\n    e.preventDefault();\n\n    // event listener "submit" won\'t even happen when the field is empty\n    // figure out how to take the invalid event outside of this event listener\n    const name = document.querySelector("#category-input-name").value;\n    const CATEGORY_FORM = document.querySelector(".category-form");\n\n    // value of \'name\' to be altered to fit name\n    const nameRevised = name.replaceAll(" ", "-");\n\n    const category = new _Category__WEBPACK_IMPORTED_MODULE_2__["default"](nameRevised);\n\n    // Adds a category container to main-UI\n    _Category__WEBPACK_IMPORTED_MODULE_2__.CategoryUI.addCategoryContainer(category);\n\n    // function CategoryUI.switchCategory(category) - existing cat container display = none, new cat container display = block\n    _Category__WEBPACK_IMPORTED_MODULE_2__.CategoryUI.switchCategory(category);\n\n    // Adds a sidebar link to the sidebar\n    _Category__WEBPACK_IMPORTED_MODULE_2__.CategoryUI.addSideBarLink(category);\n\n    // Hide input after submit\n    CATEGORY_FORM.style.display = "none";\n\n    // New category button reappears\n    NEW_CATEGORY_BTN.style.display = "block";\n  });\n\n// Cancel out of category input\ndocument\n  .querySelector(".create-category-container")\n  .addEventListener("click", (e) => {\n    const CATEGORY_FORM = document.querySelector(".category-form");\n\n    // Event delegation\n    if (e.target.className == "create-category-cancel") {\n      // Hide input after submit\n      CATEGORY_FORM.style.display = "none";\n\n      // New category button reappears\n      NEW_CATEGORY_BTN.style.display = "block";\n    }\n  });\n\n// Create a Task Button - addTaskBtn.eventListener (\'submit\') =>\ndocument.querySelector(".task-form-field").addEventListener("submit", (e) => {\n  e.preventDefault();\n\n  // const taskName is input field value\n  const taskName = document.querySelector("#name").value;\n\n  // const dueDate is input field value\n  const dueDate = document.querySelector("#due-date").value;\n\n  // const taskDescription is input field value\n  const taskDescription = document.querySelector("#description").value;\n\n  console.log(taskName);\n\n  // value of \'name\' to be altered to fit name\n  const taskNameRevised = taskName.replaceAll(" ", "-");\n\n  console.log(taskNameRevised);\n\n  const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskNameRevised, dueDate, taskDescription);\n\n  // TaskUI.function(task, category) - append task object to task list div element\n  _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.addTask(task);\n\n  // Create task info element\n  _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.createTaskInfo(task);\n\n  // Clear input fields\n  _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.clearTaskForm();\n\n  // Set class task-form-background display to \'none\'\n  TASK_FORM_DIV.style.display = "none";\n});\n\n// Event - Switch categories from sidebar link\ndocument.querySelector(".sidebar").addEventListener("click", (e) => {\n  console.log(e.target);\n\n  // function CategoryUI.switchCategory(category) - existing cat container display = none, new cat container display = block\n  if (e.target.className.includes("category")) {\n    _Category__WEBPACK_IMPORTED_MODULE_2__.CategoryUI.switchCategoryContainer(e.target);\n  }\n});\n\n// Event - Show task info div when a is clicked (addeventlistener)\nMAIN_UI_DIV.addEventListener("click", (e) => {\n  // showTaskInfo toggle on and off when clicking the same link\n  if (e.target.className.includes("name")) {\n    _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.showTaskInfo(e.target);\n    TASK_INFO_DIV.classList.toggle("task-info-active");\n  }\n});\n\n// Event - Open Task Form when click on \'CREATE A TASK\'\nMAIN_UI_DIV.addEventListener("click", (e) => {\n  if (e.target.classList.contains("task-create")) {\n    TASK_FORM_DIV.style.display = "block";\n  }\n});\n\n// Event - Delete task from list\nMAIN_UI_DIV.addEventListener("click", (e) => {\n  if (e.target.classList.contains("task-delete")) {\n    _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.removeTask(e.target);\n  }\n});\n\n// Event - Close Task Form when click \'Close\'\nCLOSE_TASK_BTN.addEventListener("click", () => {\n  TASK_FORM_DIV.style.display = "none";\n\n  _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.clearTaskForm();\n});\n\n// Event - Change task border color based on priority\nTASK_INFO_DIV.addEventListener("click", (e) => {\n  _task__WEBPACK_IMPORTED_MODULE_1__.TaskUI.setPriority(e.target);\n});\n\n// Validation - Invalid custom error message for task name\n_validation__WEBPACK_IMPORTED_MODULE_3__["default"].taskNameInput();\n\n// Validation - Invalid custom error message for task description\n_validation__WEBPACK_IMPORTED_MODULE_3__["default"].taskDescriptionInput();\n\n// Validation - Invalid custom error message for task due date\n_validation__WEBPACK_IMPORTED_MODULE_3__["default"].taskDueDateInput();\n\n// Validation - Invalid custom error message for category name\n_validation__WEBPACK_IMPORTED_MODULE_3__["default"].categoryCreateInput();\n\n\n\n\n//# sourceURL=webpack://to-do/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/task.js":
      /*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "TaskUI": () => (/* binding */ TaskUI),\n/* harmony export */   "default": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");\n\n\n\nclass Task {\n  constructor(name, dueDate, description) {\n    this.name = name;\n    this.dueDate = dueDate;\n    this.description = description;\n    this.notes = "";\n  }\n}\n\n// Event - Add task to list when form is filled out and submitted\n\nclass TaskUI {\n  // Event - Append task argument to ${category.name}-list of current category shown in main-UI container div\n\n  static addTask(task) {\n    // Note: How to specify which category object to append to? - the displayed category container\n    const categoryContainerArray = _utility_js__WEBPACK_IMPORTED_MODULE_0__["default"].spreadElements(_index__WEBPACK_IMPORTED_MODULE_1__.MAIN_UI_DIV);\n\n    // Filter out the child element with display \'block\'\n    const visibleCategory = categoryContainerArray.filter(\n      (Element) => Element.style.display == "block"\n    );\n\n    // element[] specified [0] array element to be HTML element - Select ul element of category HTML element\n    const categoryList = visibleCategory[0].querySelector("ul");\n\n    // Creates task li element\n    const taskObject = document.createElement("li");\n    const taskCheckBoxLabel = document.createElement("label");\n    const taskCheckBox = document.createElement("input");\n    // Feature - Show task information when (\'a\') link is clicked\n    const taskName = document.createElement("a");\n    const taskDelete = document.createElement("button");\n\n    // Hold task name and checkbox in same container div\n    const taskCheckName_CONTAINER = document.createElement("div");\n    taskCheckName_CONTAINER.classList.add("task-name-check-container");\n\n    taskObject.classList.add("task-object");\n\n    taskObject.setAttribute("id", `${task.name}-object`);\n    taskCheckBoxLabel.setAttribute("for", `${task.name}-checklist`);\n    taskCheckBoxLabel.classList.add(`${task.name}-checklist`);\n    taskCheckBox.setAttribute("type", "checkbox");\n    taskCheckBox.setAttribute("class", `${task.name}-checklist`);\n    taskCheckBox.setAttribute("id", "accept");\n    taskName.classList.add(`${task.name}-name`);\n    taskName.setAttribute("id", "task-name");\n    taskName.setAttribute("href", "#");\n    taskDelete.classList.add("task-delete");\n\n    taskCheckName_CONTAINER.append(taskCheckBox, taskCheckBoxLabel, taskName);\n    taskObject.append(taskCheckName_CONTAINER, taskDelete);\n\n    // Set inner HTML elements shown on task element\n    // Convert revised task name value to original input\n    const taskOriginal = `${task.name}`.replaceAll("-", " ");\n    taskName.innerHTML = taskOriginal;\n    taskDelete.innerHTML = `\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />\n        </svg>\n        `;\n\n    categoryList.appendChild(taskObject);\n  }\n\n  // Event - Clear task form field\n  static clearTaskForm() {\n    document.querySelector("#name").value = "";\n    document.querySelector("#due-date").value = "";\n    document.querySelector("#description").value = "";\n  }\n\n  // Create task info when task is created from task form submission\n  // Note: index.js event listener \'click\'\n  static createTaskInfo = (task) => {\n    // Create div element\n    const taskInfo = document.createElement("div");\n\n    taskInfo.classList.add(`${task.name}-info`);\n    taskInfo.setAttribute("id", "task-card");\n\n    // Show object properties with innerHTML\n    taskInfo.innerHTML = `\n        <label for="task-name" class="task-info-text">Task Name</label>\n        <input type="text" value="${task.name}"></input>\n        <label for="due-date" class="task-info-text">Due Date</label>\n        <input required type="date" id="task-info-date" name="task-info-date" value="${task.dueDate}">\n        <label for="task-description" class="task-info-text">Description</label>\n        <textarea id="task-info-text-description" name="description">${task.description}</textarea>\n        <select class="task-priority">\n            <option value="No Priority">No Priority</option>\n            <option value="High Priority">High Priority</option>\n            <option value="Medium Priority">Medium Priority</option>\n            <option value="Low Priority">Low Priority</option>\n        </select>\n        <br>\n        <label for="task-notes" class="task-info-text">Notes</label>\n        <textarea id="task-info-text-area" name="notes" placeholder="Add note here">${task.notes}</textarea>\n        `;\n    _index__WEBPACK_IMPORTED_MODULE_1__.TASK_INFO_DIV.appendChild(taskInfo);\n\n    taskInfo.style.display = "none";\n  };\n\n  // Feature - Show task information when (\'a\') link is clicked\n  static showTaskInfo = (task) => {\n    const taskClass = task.className.replace("name", "info");\n\n    const taskContainerArray = _utility_js__WEBPACK_IMPORTED_MODULE_0__["default"].spreadElements(_index__WEBPACK_IMPORTED_MODULE_1__.TASK_INFO_DIV);\n\n    const currentTask = document.querySelector(`.${taskClass}`);\n\n    // if task item display is flex, then set display to none\n    if (currentTask.style.display == "none") {\n      // Each children element in the array set style display to none\n      taskContainerArray.forEach((element) => (element.style.display = "none"));\n\n      _index__WEBPACK_IMPORTED_MODULE_1__.TASK_INFO_DIV.style.display = "block";\n      currentTask.style.display = "flex";\n    }\n  };\n\n  // Event - Remove task\n  static removeTask(task) {\n    // This is task-delete\n    const currentElement = document.querySelector(`.${task.className}`);\n    // Should return "\'task name\'-priority"\n    const prevSibling = currentElement.previousElementSibling;\n    // Replace priority class name with info to match aside li element class\n    const taskClassRemove = prevSibling.className.replace("priority", "info");\n\n    // Define the element by class name\n    const removeTaskElement = document.querySelector(`.${taskClassRemove}`);\n\n    // Remove task under main-UI\n    task.parentElement.remove();\n\n    // Need to also remove from aside element\n    removeTaskElement.remove();\n  }\n\n  // Event - Complete a task (Sets its style to be shown as complete) when checkbox is checked off\n\n  // Event - Set style of border when task priority changes\n  static setPriority(priority) {\n    // define parent div element class name as a string\n    const parentElement = priority.parentElement.className;\n    const parentElementRev = parentElement.replace("info", "object");\n    // console.log(parentElementRev)\n\n    // define task variable in main-UI container\n    const taskObject = document.querySelector(`#${parentElementRev}`);\n\n    // let style change if input is high, medium or low priority\n    if (priority.value == "High Priority") {\n      taskObject.style.borderLeft = ".5em solid #F13C20";\n    } else if (priority.value == "Medium Priority") {\n      taskObject.style.borderLeft = ".5em solid #D79922";\n    } else if (priority.value == "Low Priority") {\n      taskObject.style.borderLeft = ".5em solid #5AB9EA";\n    } else if (priority.value == "No Priority") {\n      // Note: Default border to be set so height of task line item does not alter flexbox\n      taskObject.style.borderLeft = ".5em solid #474b4f";\n    }\n  }\n\n  // Event - Change name of task if task info input for name is changed\n\n  // Event - Set text area and input .disabled = \'true\'\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/task.js?'
        );

        /***/
      },

    /***/ "./src/utility.js":
      /*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Utility)\n/* harmony export */ });\n// Utility functions used throughout To-Do project\n\n// category.js\n\n// task.js\n\nclass Utility {\n  static spreadElements = (element) => {\n    const otherElements = element.children;\n    const siblingsArray = [...otherElements];\n\n    return siblingsArray;\n  };\n}\n\n\n//# sourceURL=webpack://to-do/./src/utility.js?'
        );

        /***/
      },

    /***/ "./src/validation.js":
      /*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Validation)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");\n\n\n// GLOBAL VARIABLE\nconst TASK_NAME_INPUT = document.querySelector("input");\nconst TASK_DESCRIPTION_INPUT = document.querySelector("#description");\nconst TASK_DATE_INPUT = document.querySelector("#due-date");\n\nclass Validation {\n    static inputCheckValidity = (input) => {\n        input.addEventListener("input", () => {\n            // setCustomValidity sets a custom error message explaining why value is not valid\n            input.setCustomValidity("");\n            // checkValidity checks the element\'s value against its constraints. If value is invalid, it fires an invalid event at the element and returns \'false\', otherwise returns \'true\'\n            input.checkValidity();\n          });\n    }\n  \n    static taskNameInput = () => {\n        \n        this.inputCheckValidity(TASK_NAME_INPUT);\n      \n        // Invalid custom error message for task name\n        TASK_NAME_INPUT.addEventListener("invalid", () => {\n            if (TASK_NAME_INPUT.value === "") {\n            TASK_NAME_INPUT.setCustomValidity("Task must have a name!");\n            }\n        });\n  };\n\n  static taskDescriptionInput = () => {\n        \n    this.inputCheckValidity(TASK_DESCRIPTION_INPUT);\n      \n      // Invalid custom error message for task description\n      TASK_DESCRIPTION_INPUT.addEventListener("invalid", () => {\n        if (TASK_DESCRIPTION_INPUT.value === "") {\n          TASK_DESCRIPTION_INPUT.setCustomValidity("You need to describe the task!");\n        }\n      });\n  }\n\n  static taskDueDateInput = () => {\n    \n    this.inputCheckValidity(TASK_DATE_INPUT);\n      \n      // Invalid custom error message for task due date\n      TASK_DATE_INPUT.addEventListener("invalid", () => {\n        if (TASK_DATE_INPUT.value === "") {\n          TASK_DATE_INPUT.setCustomValidity("You need to set a due date!");\n        }\n      });\n  }\n\n  static categoryCreateInput = () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.CREATE_CAT_UL.addEventListener("click", () => {\n        const CATEGORY_INPUT = document.querySelector("#category-input-name");\n        \n        this.inputCheckValidity(CATEGORY_INPUT);\n        \n        CATEGORY_INPUT.addEventListener("invalid", () => {\n            if (CATEGORY_INPUT.value === "") {\n            CATEGORY_INPUT.setCustomValidity("You need a name for your project!");\n            }\n        });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do/./src/validation.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
