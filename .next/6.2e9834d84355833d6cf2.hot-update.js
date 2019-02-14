webpackHotUpdate(6,{

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(1021);

var _web2 = _interopRequireDefault(_web);

var _constents = __webpack_require__(1194);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //in browser and has meta-mask
    web3 = new _web2.default(window.web3.currentProvider);
    console.log('browser');
} else {
    var provider = new _web2.default.providers.HttpProvider(_constents.NETWORK);
    web3 = new _web2.default(provider);
    console.log('NETWORK');
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJNTkVNT05JQyIsIk5FVFdPUksiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFTLEFBQVQsQUFBbUIsQUFBbkIsQUFBa0MsQUFBbEM7Ozs7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDckU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0E7WUFBUSxBQUFSLElBQVksQUFBWixBQUNIO0FBSkQsT0FJTyxBQUNIO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLEFBQWdDLEFBQWhDLEFBQWpCLEFBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7WUFBUSxBQUFSLElBQVksQUFBWixBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Db2Rlcy9FVEgvZEFwcC9jYW1wYWlnbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Codes\\ETH\\dApp\\campaign\\ethereum\\web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Codes\\ETH\\dApp\\campaign\\ethereum\\web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yZTk4MzRkODQzNTU4MzNkNmNmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz9mMGYyYjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgeyBNTkVNT05JQywgTkVUV09SSyB9IGZyb20gJy4vY29uc3RlbnRzJztcclxubGV0IHdlYjM7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy9pbiBicm93c2VyIGFuZCBoYXMgbWV0YS1tYXNrXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIGNvbnNvbGUubG9nKCdicm93c2VyJyk7XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoTkVUV09SSyk7XHJcbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG4gICAgY29uc29sZS5sb2coJ05FVFdPUksnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==