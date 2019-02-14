'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./constents'),
    ContractAddress = _require.ContractAddress;

var instance = new _web2.default.eth.Contract(_CampaignFactory2.default.abi, ContractAddress);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJjb21wbGllZEZhY3RvcnkiLCJyZXF1aXJlIiwiQ29udHJhY3RBZGRyZXNzIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7ZUFDNEIsUUFBUSxBQUFSLEE7SUFBcEIsQSwyQkFBQSxBOztBQUVSLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDYiwwQkFBZ0IsQUFESCxLQUNRLEFBRFIsQUFBakIsQUFJQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkQ6L0NvZGVzL0VUSC9kQXBwL2NhbXBhaWduIn0=