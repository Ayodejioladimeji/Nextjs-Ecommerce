"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./utils/valid.js":
/*!************************!*\
  !*** ./utils/valid.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar valid = function valid(username, email, password) {\n  if (!username || !email || !password) {\n    return 'Input fields cannot be empty';\n  }\n\n  if (!validateEmail) return 'Invalid email';\n  if (password.length < 8) return 'Password must be at least 8 characters';\n};\n\nfunction validateEmail(email) {\n  var re = /^(([^<>()[]\\\\.,;:\\s@\\\"]+(\\.[^<>()[]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([[0-9]{1,3}\\‌​.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(email);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (valid);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy92YWxpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsUUFBbEIsRUFBK0I7QUFDM0MsTUFBSSxDQUFDRixRQUFELElBQWEsQ0FBQ0MsS0FBZCxJQUF1QixDQUFDQyxRQUE1QixFQUFzQztBQUNwQyxXQUFPLDhCQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDQyxhQUFMLEVBQW9CLE9BQU8sZUFBUDtBQUVwQixNQUFJRCxRQUFRLENBQUNFLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUIsT0FBTyx3Q0FBUDtBQUMxQixDQVJEOztBQVVBLFNBQVNELGFBQVQsQ0FBdUJGLEtBQXZCLEVBQThCO0FBQzVCLE1BQUlJLEVBQUUsR0FDSix5SkFERjtBQUVBLFNBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRTCxLQUFSLENBQVA7QUFDRDs7QUFFRCwrREFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy92YWxpZC5qcz8zZjkwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhbGlkID0gKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICBpZiAoIXVzZXJuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAnSW5wdXQgZmllbGRzIGNhbm5vdCBiZSBlbXB0eSc7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbGlkYXRlRW1haWwpIHJldHVybiAnSW52YWxpZCBlbWFpbCc7XHJcblxyXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSByZXR1cm4gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzJztcclxufTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICB2YXIgcmUgPVxyXG4gICAgL14oKFtePD4oKVtdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbWzAtOV17MSwzfVxc4oCM4oCLLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWQ7XHJcbiJdLCJuYW1lcyI6WyJ2YWxpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRlRW1haWwiLCJsZW5ndGgiLCJyZSIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/valid.js\n");

/***/ })

});