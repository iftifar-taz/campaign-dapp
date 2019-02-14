'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _constents = require('./constents');

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