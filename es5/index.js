"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCliPath = exports.cardanoCli = void 0;
var stake_address_1 = require("./stake-address");
var adress_1 = require("./adress");
var key_1 = require("./key");
var transaction_1 = require("./transaction");
var node_1 = require("./node");
var stake_pool_1 = require("./stake-pool");
var query_1 = require("./query");
var genesis_1 = require("./genesis");
var governance_1 = require("./governance");
var textView_1 = require("./textView");
exports.cardanoCli = {
    /** Payment address commands */
    address: adress_1.address,
    /** Stake address commands */
    'stake-address': stake_address_1.stakeAddress,
    /** Key utility commands */
    key: key_1.key,
    /** Transaction commands */
    transaction: transaction_1.transaction,
    /** Node operation commands */
    node: node_1.node,
    /** Stake pool commands */
    'stake-pool': stake_pool_1.stakePool,
    /** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    query: query_1.query,
    /** Genesis block commands */
    genesis: genesis_1.genesis,
    /** Governance commands */
    governance: governance_1.governance,
    /** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
    'text-view': textView_1.textView,
};
var useCliPath = function (path) {
    return Object.entries(exports.cardanoCli).reduce(function (acc, _a) {
        var cmd = _a[0], subcommands = _a[1];
        acc[cmd] = Object.entries(subcommands).reduce(function (acc, _a) {
            var sub = _a[0], fun = _a[1];
            acc[sub] = fun(path);
            return acc;
        }, {});
        return acc;
    }, {});
};
exports.useCliPath = useCliPath;
exports.default = exports.useCliPath('cardano-cli');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLG1DQUFrQztBQUNsQyw2QkFBMkI7QUFDM0IsNkNBQTJDO0FBQzNDLCtCQUE2QjtBQUM3QiwyQ0FBd0M7QUFDeEMsaUNBQStCO0FBQy9CLHFDQUFtQztBQUNuQywyQ0FBeUM7QUFDekMsdUNBQXFDO0FBRXhCLFFBQUEsVUFBVSxHQUFHO0lBQ3pCLCtCQUErQjtJQUMvQixPQUFPLGtCQUFBO0lBRVAsNkJBQTZCO0lBQzdCLGVBQWUsRUFBRSw0QkFBWTtJQUU3QiwyQkFBMkI7SUFDM0IsR0FBRyxXQUFBO0lBRUgsMkJBQTJCO0lBQzNCLFdBQVcsMkJBQUE7SUFFWCw4QkFBOEI7SUFDOUIsSUFBSSxhQUFBO0lBRUosMEJBQTBCO0lBQzFCLFlBQVksRUFBRSxzQkFBUztJQUV2QixrSkFBa0o7SUFDbEosS0FBSyxlQUFBO0lBRUwsNkJBQTZCO0lBQzdCLE9BQU8sbUJBQUE7SUFFUCwwQkFBMEI7SUFDMUIsVUFBVSx5QkFBQTtJQUVWLDBIQUEwSDtJQUMxSCxXQUFXLEVBQUUsbUJBQVE7Q0FDckIsQ0FBQTtBQWNNLElBQU0sVUFBVSxHQUFHLFVBQUMsSUFBWTtJQUN0QyxPQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBYSxVQUFDLEdBQUcsRUFBRSxFQUFrQjtZQUFqQixHQUFHLFFBQUEsRUFBRSxXQUFXLFFBQUE7UUFDcEUsR0FBRyxDQUFDLEdBQXVCLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FDaEUsVUFBQyxHQUFHLEVBQUUsRUFBVTtnQkFBVCxHQUFHLFFBQUEsRUFBRSxHQUFHLFFBQUE7WUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3BCLE9BQU8sR0FBRyxDQUFBO1FBQ1gsQ0FBQyxFQUNELEVBQUUsQ0FDRixDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWCxDQUFDLEVBQUUsRUFBZ0IsQ0FBQztBQVRwQixDQVNvQixDQUFBO0FBVlIsUUFBQSxVQUFVLGNBVUY7QUFFckIsa0JBQWUsa0JBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQSJ9