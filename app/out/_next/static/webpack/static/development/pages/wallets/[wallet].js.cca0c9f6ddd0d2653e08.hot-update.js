webpackHotUpdate("static/development/pages/wallets/[wallet].js",{

/***/ "./components/sections/walletDetails/index.js":
/*!****************************************************!*\
  !*** ./components/sections/walletDetails/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section_wallet_details_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section_wallet-details.less */ "./components/sections/walletDetails/section_wallet-details.less");
/* harmony import */ var _section_wallet_details_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_section_wallet_details_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_numbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/numbers */ "./utils/numbers.js");

var _jsxFileName = "/Users/michaellobanov/WebstormProjects/web-explorer/app/components/sections/walletDetails/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;

  if (data === null) {
    return __jsx("section", {
      className: "section section_wallet-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "wrapper_section-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "section__card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h2", {
      className: "section__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Not Found"))));
  }

  return __jsx("section", {
    className: "section section_wallet-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper_section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "section__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: "section__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Information"), __jsx("div", {
    className: "section__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "section__field section__field--default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("p", {
    className: "section__field-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Address"), __jsx("p", {
    className: "section__field-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, data.address)), __jsx("div", {
    className: "section__field section__field--default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "section__field-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Assets"), __jsx("p", {
    className: "section__field-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data.balances).map(function (key) {
    return __jsx("span", {
      className: "section__field-value",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/coins/".concat(data.balances[key].coin),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      className: "link_theme_none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("span", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, data.balances[key].coin, " "), " balance:", ' ', Object(_utils_numbers__WEBPACK_IMPORTED_MODULE_4__["numberWithCommas"])(Number(data.balances[key].amount).toFixed(2)))));
  })))))));
});

/***/ })

})
//# sourceMappingURL=[wallet].js.cca0c9f6ddd0d2653e08.hot-update.js.map