'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Codes\\ETH\\dApp\\campaign\\components\\Header.js';


var Header = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'App Name')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Campaigns')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, '+'))));
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJMaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUyxBQUFZOzs7Ozs7O0ksQUFHZjtvQ0FDRjs7b0JBQUEsQUFBWSxPQUFPOzRDQUFBOztxSUFBQSxBQUNULEFBQ1Q7Ozs7O2lDQUVRLEFBQ0w7bUNBQ0ksQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7OEJBQTFCO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFGUixBQUNJLEFBQ0ksQUFFSiw4QkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQUZSLEFBQ0ksQUFDSSxBQUVKLCtCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFWaEIsQUFDSSxBQUlJLEFBSUksQUFDSSxBQUtuQjs7Ozs7QUFHTCxBLEFBeEJxQjs7a0JBd0JyQixBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Db2Rlcy9FVEgvZEFwcC9jYW1wYWlnbiJ9