/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./pages/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_WelcomePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/WelcomePage.js */ \"./src/WelcomePage.js\");\n/* harmony import */ var _src_LoginPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/LoginPage.js */ \"./src/LoginPage.js\");\n/* harmony import */ var _src_Home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Home.js */ \"./src/Home.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_cookie__WEBPACK_IMPORTED_MODULE_5__]);\nreact_cookie__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App() {\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"user\"\n    ]);\n    function handleLogin(user) {\n        setCookie(\"user\", user, {\n            path: \"/\"\n        });\n    }\n    function handleLogout() {\n        setCookie(\"user\", \"\", {\n            path: \"/\"\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"App-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_5__.CookiesProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: cookies.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_WelcomePage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            user: cookies.user,\n                            handleLogout: handleLogout\n                        }, void 0, false, {\n                            fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_LoginPage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onLogin: handleLogin\n                        }, void 0, false, {\n                            fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n                            lineNumber: 23,\n                            columnNumber: 91\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Home_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/pages/_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUI7QUFDMEI7QUFDSjtBQUNUO0FBQ3dCO0FBRTFELFNBQVNLO0lBQ1AsTUFBTSxDQUFDQyxTQUFTQyxVQUFVLEdBQUdILHdEQUFVQSxDQUFDO1FBQUM7S0FBTztJQUVoRCxTQUFTSSxZQUFZQyxJQUFJO1FBQ3ZCRixVQUFVLFFBQVFFLE1BQU07WUFBRUMsTUFBTTtRQUFJO0lBQ3RDO0lBRUEsU0FBU0M7UUFDUEosVUFBVSxRQUFRLElBQUk7WUFBRUcsTUFBTTtRQUFJO0lBQ3BDO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTswQkFDcEIsNEVBQUNWLHlEQUFlQTs4QkFDZCw0RUFBQ1M7a0NBQ0VOLFFBQVFHLElBQUksaUJBQUcsOERBQUNULDJEQUFXQTs0QkFBQ1MsTUFBTUgsUUFBUUcsSUFBSTs0QkFBRUUsY0FBY0E7Ozs7O2lEQUFtQiw4REFBQ1YseURBQVNBOzRCQUFDYyxTQUFTUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkxRyw4REFBQ04sb0RBQUlBOzs7Ozs7Ozs7OztBQUdUO0FBRUEsaUVBQWVHLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLWRlbW8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgV2VsY29tZVBhZ2UgZnJvbSAnLi4vc3JjL1dlbGNvbWVQYWdlLmpzJ1xuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuLi9zcmMvTG9naW5QYWdlLmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vc3JjL0hvbWUuanMnO1xuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyLCB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbJ3VzZXInXSlcblxuICBmdW5jdGlvbiBoYW5kbGVMb2dpbih1c2VyKSB7XG4gICAgc2V0Q29va2llKCd1c2VyJywgdXNlciwgeyBwYXRoOiAnLycgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ291dCgpIHtcbiAgICBzZXRDb29raWUoJ3VzZXInLCAnJywgeyBwYXRoOiAnLycgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxuICAgIDxDb29raWVzUHJvdmlkZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y29va2llcy51c2VyID8gPFdlbGNvbWVQYWdlIHVzZXI9e2Nvb2tpZXMudXNlcn0gaGFuZGxlTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+IDogPExvZ2luUGFnZSBvbkxvZ2luPXtoYW5kbGVMb2dpbn0gLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgICA8L2hlYWRlcj5cbiAgICA8SG9tZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiV2VsY29tZVBhZ2UiLCJMb2dpblBhZ2UiLCJIb21lIiwiQ29va2llc1Byb3ZpZGVyIiwidXNlQ29va2llcyIsIkFwcCIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJoYW5kbGVMb2dpbiIsInVzZXIiLCJwYXRoIiwiaGFuZGxlTG9nb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwib25Mb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Home\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/jwt-home\",\n                            children: \"JWT Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/jwt-safehouse\",\n                            children: \"JWT Safe house\"\n                        }, void 0, false, {\n                            fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/Home.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFYixTQUFTQztJQUN0QixxQkFDRSw4REFBQ0M7O1lBQUk7MEJBRUgsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FDQyw0RUFBQ0wsa0RBQUlBOzRCQUFDTSxNQUFNO3NDQUFhOzs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNEO2tDQUNDLDRFQUFDTCxrREFBSUE7NEJBQUNNLE1BQU07c0NBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItZGVtby8uL3NyYy9Ib21lLmpzPzE3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBIb21lXG4gICAgICA8YnIgLz5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvand0LWhvbWUnfT5KV1QgSG9tZTwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvand0LXNhZmVob3VzZSd9PkpXVCBTYWZlIGhvdXNlPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwiSG9tZSIsImRpdiIsImJyIiwib2wiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Home.js\n");

/***/ }),

/***/ "./src/LoginPage.js":
/*!**************************!*\
  !*** ./src/LoginPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LoginPage({ onLogin }) {\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleSubmit(event) {\n        event.preventDefault();\n        onLogin({\n            username,\n            password\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Username:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Password:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/LoginPage.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTG9naW5QYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUV2QyxTQUFTRSxVQUFVLEVBQUVDLE9BQU8sRUFBRTtJQUM1QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXpDLFNBQVNPLGFBQWFDLEtBQUs7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEJQLFFBQVE7WUFBRUM7WUFBVUU7UUFBUztJQUMvQjtJQUVBLHFCQUNFLDhEQUFDSztRQUFLQyxVQUFVSjs7MEJBQ2QsOERBQUNLOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE9BQU9aO3dCQUFVYSxVQUFVLENBQUNDLElBQU1iLFlBQVlhLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUVqRiw4REFBQ0k7Ozs7OzBCQUNELDhEQUFDUDs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXQyxPQUFPVjt3QkFBVVcsVUFBVSxDQUFDQyxJQUFNWCxZQUFZVyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQkFFckYsOERBQUNJOzs7OzswQkFDRCw4REFBQ047Z0JBQU1DLE1BQUs7Z0JBQVNDLE9BQU07Ozs7Ozs7Ozs7OztBQUdqQztBQUVBLGlFQUFlZCxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1kZW1vLy4vc3JjL0xvZ2luUGFnZS5qcz83ZDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBMb2dpblBhZ2UoeyBvbkxvZ2luIH0pIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgb25Mb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgVXNlcm5hbWU6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFBhc3N3b3JkOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luUGFnZSIsIm9uTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/LoginPage.js\n");

/***/ }),

/***/ "./src/WelcomePage.js":
/*!****************************!*\
  !*** ./src/WelcomePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WelcomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction WelcomePage({ user, handleLogout }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Welcome,  \",\n                    user.username,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/WelcomePage.js\",\n                lineNumber: 4,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"You are now using cookies \\uD83C\\uDF6A\"\n            }, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/WelcomePage.js\",\n                lineNumber: 4,\n                columnNumber: 49\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/p.chiang/Desktop/demo_1017/user-demo/src/WelcomePage.js\",\n                lineNumber: 5,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvV2VsY29tZVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRVYsU0FBU0MsWUFBWSxFQUFDQyxJQUFJLEVBQUVDLFlBQVksRUFBQztJQUN0RCxxQkFBTzs7MEJBQUUsOERBQUNDOztvQkFBSTtvQkFBV0YsS0FBS0csUUFBUTtvQkFBQzs7Ozs7OzswQkFBTyw4REFBQ0Q7MEJBQUk7Ozs7OzswQkFDbkQsOERBQUNFO2dCQUFPQyxTQUFTSjswQkFBYzs7Ozs7Ozs7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLWRlbW8vLi9zcmMvV2VsY29tZVBhZ2UuanM/Yjc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWVQYWdlKHt1c2VyLCBoYW5kbGVMb2dvdXR9KSB7XG4gIHJldHVybiA8PjxkaXY+V2VsY29tZSwgIHt1c2VyLnVzZXJuYW1lfSE8L2Rpdj48ZGl2PllvdSBhcmUgbm93IHVzaW5nIGNvb2tpZXMg8J+NqjwvZGl2PlxuICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nIG91dDwvYnV0dG9uPjwvPlxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIldlbGNvbWVQYWdlIiwidXNlciIsImhhbmRsZUxvZ291dCIsImRpdiIsInVzZXJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/WelcomePage.js\n");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();