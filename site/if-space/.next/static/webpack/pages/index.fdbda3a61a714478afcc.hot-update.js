/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NavigationBar/index.js":
/*!***********************************************!*\
  !*** ./src/components/NavigationBar/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Volumes/MyDrive/Projects/Cuckoo-Hashing/site/if-space/src/components/NavigationBar/index.js\";\n\nfunction NavigationBar() {\n  var _this = this;\n\n  var navigation = [{\n    title: \"Home\",\n    url: \"/home\"\n  }, {\n    title: \"Attendance\",\n    url: \"/home\"\n  }, {\n    title: \"Inventory\",\n    url: \"/home\"\n  }, {\n    title: \"Analyze\",\n    url: \"/home\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"shadow-md bg-white h-16 w-full top-0 flex flex-row px-16  items-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"mr-16 font-bold text-lg\",\n      children: \"Indexed Functions\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), navigation.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: item.url,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"text-black font-light text-lg mx-4\",\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"ml-auto font-medium text-lg text-pink-400\",\n      children: \"Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n_c = NavigationBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavigationBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci9pbmRleC5qcz9kOTZiIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJuYXZpZ2F0aW9uIiwidGl0bGUiLCJ1cmwiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsU0FBSyxFQUFFLE1BRFQ7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0FEaUIsRUFLakI7QUFDRUQsU0FBSyxFQUFFLFlBRFQ7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0FMaUIsRUFTakI7QUFDRUQsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0FUaUIsRUFhakI7QUFDRUQsU0FBSyxFQUFFLFNBRFQ7QUFFRUMsT0FBRyxFQUFFO0FBRlAsR0FiaUIsQ0FBbkI7QUFtQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0VBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdGLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN4QiwwQkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUEsSUFBSSxDQUFDRixHQUFqQjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxvQ0FBYjtBQUFBLG9CQUFtREUsSUFBSSxDQUFDSDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsS0FQQSxDQUZILGVBVUU7QUFBSSxlQUFTLEVBQUMsMkNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEO0tBbkN1QkYsYSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb25CYXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoKSB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgICAgdXJsOiBcIi9ob21lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBdHRlbmRhbmNlXCIsXG4gICAgICB1cmw6IFwiL2hvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkludmVudG9yeVwiLFxuICAgICAgdXJsOiBcIi9ob21lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBbmFseXplXCIsXG4gICAgICB1cmw6IFwiL2hvbWVcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctbWQgYmctd2hpdGUgaC0xNiB3LWZ1bGwgdG9wLTAgZmxleCBmbGV4LXJvdyBweC0xNiAgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibXItMTYgZm9udC1ib2xkIHRleHQtbGdcIj5JbmRleGVkIEZ1bmN0aW9uczwvaDI+XG4gICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtbGlnaHQgdGV4dC1sZyBteC00XCI+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcblxuICAgICAgfSl9XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWwtYXV0byBmb250LW1lZGl1bSB0ZXh0LWxnIHRleHQtcGluay00MDBcIj5Mb2dpbjwvaDI+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavigationBar/index.js\n");

/***/ })

});