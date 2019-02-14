'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Codes\\ETH\\dApp\\campaign\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            errorMessage: "",
            loading: false
        }, _this.setValueState = function (value) {
            _this.setState({ value: value });
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({
                                    errorMessage: '',
                                    loading: true
                                });

                                _context.prev = 2;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Amount to Contribute (ether)'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'ether',
                labelPosition: 'right',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setValueState(event.target.value);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Contribute!'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FtcGFpZ24iLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiUm91dGVyIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRWYWx1ZVN0YXRlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTSxBQUFPLEFBQVE7O0FBQzlCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFFRjttQkFBUSxBQUNHLEFBQ1A7MEJBRkksQUFFVSxBQUNkO3FCLEFBSEksQUFHSztBQUhMLEFBQ0osaUIsQUFLSixnQkFBZ0IsaUJBQVMsQUFDckI7a0JBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTLEFBQzFCO0EsaUIsQUFFRDtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUs7a0RBQVMsQUFDSSxBQUNkOzZDQUpHLEFBRVAsQUFBYyxBQUVEO0FBRkMsQUFDVjs7Z0RBS007QUFSSCwyQ0FRYyx3QkFBUyxNQUFBLEFBQUssTUFSNUIsQUFRYyxBQUFvQjtnREFSbEM7dUNBU29CLGNBQUEsQUFBSyxJQVR6QixBQVNvQixBQUFTOztpQ0FBMUI7QUFUSCxvREFBQTtnREFBQTtnREFXRyxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7MENBQzFCLFNBRCtCLEFBQy9CLEFBQVMsQUFDZjsyQ0FBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BYnBDLEFBV0csQUFBbUMsQUFFOUIsQUFBbUM7QUFGTCxBQUNyQyxpQ0FERTs7aUNBS047OytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWhCcEMsQUFnQkgsQUFBNkM7Z0RBaEIxQztBQUFBOztpQ0FBQTtnREFBQTtnRUFrQkg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFsQjNCLEFBa0JILEFBQWMsQUFBb0I7O2lDQUd0Qzs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FyQnpCLEFBcUJQLEFBQWMsQUFBeUI7O2lDQXJCaEM7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0F5QkY7eUJBQ0w7O21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsaURBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLGNBQWMsTUFBQSxBQUFNLE9BQWxDLEFBQVMsQUFBZ0M7QUFKdkQ7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQVZKLEFBVUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQVpSLEFBQ0ksQUFXSSxBQUdYOzs7OztBQUlMLEEsQUF6RDZCOztrQkF5RDdCLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiRDovQ29kZXMvRVRIL2RBcHAvY2FtcGFpZ24ifQ==