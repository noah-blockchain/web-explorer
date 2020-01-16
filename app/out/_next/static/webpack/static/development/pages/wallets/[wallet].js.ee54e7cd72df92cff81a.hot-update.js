webpackHotUpdate("static/development/pages/wallets/[wallet].js",{

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
false,

/***/ "./pages/wallets/[wallet]/index.js":
/*!*****************************************!*\
  !*** ./pages/wallets/[wallet]/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/index */ "./config/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_sections_navbar_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/sections/navbar/top */ "./components/sections/navbar/top/index.js");
/* harmony import */ var _components_sections_navbar_middle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/sections/navbar/middle */ "./components/sections/navbar/middle/index.js");
/* harmony import */ var _components_sections_walletDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/sections/walletDetails */ "./components/sections/walletDetails/index.js");
/* harmony import */ var _containers_wallet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../containers/wallet */ "./containers/wallet/index.js");
/* harmony import */ var _containers_wallet_fetchData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../containers/wallet/fetchData */ "./containers/wallet/fetchData.js");
/* harmony import */ var _containers_wallet_fetchData__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_containers_wallet_fetchData__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_transactions_address_fetchData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../containers/transactions_address/fetchData */ "./containers/transactions_address/fetchData.js");
/* harmony import */ var _containers_transactions_address_fetchData__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_containers_transactions_address_fetchData__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_sections_transactionDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/sections/transactionDetails */ "./components/sections/transactionDetails/index.js");
/* harmony import */ var _containers_transactions_address__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../containers/transactions_address */ "./containers/transactions_address/index.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/pagination */ "./components/pagination/index.js");
/* harmony import */ var _common_blocks_page_page_transaction_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common.blocks/page/page_transaction.less */ "./common.blocks/page/page_transaction.less");
/* harmony import */ var _common_blocks_page_page_transaction_less__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_page_page_transaction_less__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "/Users/michaellobanov/WebstormProjects/web-explorer/app/pages/wallets/[wallet]/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














var List = function List(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$pagination = _ref.pagination,
      pagination = _ref$pagination === void 0 ? {} : _ref$pagination;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pagination, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), data.map(function (item, i) {
    return __jsx("div", {
      className: "wallet-tx",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(_components_sections_transactionDetails__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: item,
      key: i,
      type: 'transactions',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  }), __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pagination, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

var Page = function Page(_ref2) {
  var wallet = _ref2.wallet,
      transactions = _ref2.transactions,
      address = _ref2.address;
  var language = 'en';
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageTitle: "NOAH Blockchain Explorer",
    description: "NOAH Blockchain Explorer",
    language: language,
    locales: _config_index__WEBPACK_IMPORTED_MODULE_4__["default"].languages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("main", {
    className: "page_transaction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_sections_navbar_top__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_sections_navbar_middle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    current: 'wallet',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "section section_transaction-details-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper_section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h1", {
    className: "section__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Wallet Details"))), __jsx(_containers_wallet__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rawData: wallet,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_sections_walletDetails__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("div", {
    className: "section section_transaction-details-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "wrapper_section-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("h1", {
    className: "section__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Transactions"))), __jsx(_containers_transactions_address__WEBPACK_IMPORTED_MODULE_13__["default"], {
    address: address,
    rawData: transactions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))));
};

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var wallet, data, transactions;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wallet = context.query.wallet;
            _context.next = 3;
            return _containers_wallet_fetchData__WEBPACK_IMPORTED_MODULE_10___default()(wallet)["catch"](function () {
              return {};
            });

          case 3:
            data = _context.sent;
            console.log(data, "data");
            _context.next = 7;
            return _containers_transactions_address_fetchData__WEBPACK_IMPORTED_MODULE_11___default()(1, wallet)["catch"](function () {
              return {};
            });

          case 7:
            transactions = _context.sent;
            console.log(transactions, "TRANSACTION");
            console.log(address, "address");
            return _context.abrupt("return", {
              wallet: data,
              transactions: transactions,
              address: wallet
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=[wallet].js.ee54e7cd72df92cff81a.hot-update.js.map