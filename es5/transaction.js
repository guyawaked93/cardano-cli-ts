"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
var command_1 = require("./command");
exports.transaction = {
    /** Build a transaction (low-level, inconvenient) */
    'build-raw': command_1.commandFunction('transaction build-raw'),
    /** Sign a transaction */
    sign: command_1.commandFunction('transaction sign'),
    /** Create a transaction witness */
    witness: command_1.commandFunction('transaction witness'),
    /** Assemble a tx body and witness(es) to form a transaction */
    assemble: command_1.commandFunction('transaction assemble'),
    /** Submit a transaction to the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    submit: command_1.commandFunction('transaction submit'),
    /** Calculate the PolicyId from the monetary policy script. */
    policyid: command_1.commandFunction('transaction policyid'),
    /** Calculate the minimum fee for a transaction */
    'calculate-min-fee': command_1.commandFunction('transaction calculate-min-fee'),
    /** Calculate the minimum value for a transaction */
    'calculate-min-value': command_1.commandFunction('transaction calculate-min-value'),
    /** Print a transaction identifier */
    txid: command_1.commandFunction('transaction txid'),
    /** Print a transaction */
    view: command_1.commandFunction('transaction view'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJDO0FBRTlCLFFBQUEsV0FBVyxHQUFHO0lBQzFCLG9EQUFvRDtJQUNwRCxXQUFXLEVBQUUseUJBQWUsQ0ErQ3pCLHVCQUF1QixDQUFDO0lBQzNCLHlCQUF5QjtJQUN6QixJQUFJLEVBQUUseUJBQWUsQ0FhbEIsa0JBQWtCLENBQUM7SUFDdEIsbUNBQW1DO0lBQ25DLE9BQU8sRUFBRSx5QkFBZSxDQWFyQixxQkFBcUIsQ0FBQztJQUN6QiwrREFBK0Q7SUFDL0QsUUFBUSxFQUFFLHlCQUFlLENBT3RCLHNCQUFzQixDQUFDO0lBQzFCLDBJQUEwSTtJQUMxSSxNQUFNLEVBQUUseUJBQWUsQ0FlcEIsb0JBQW9CLENBQUM7SUFDeEIsOERBQThEO0lBQzlELFFBQVEsRUFBRSx5QkFBZSxDQUd0QixzQkFBc0IsQ0FBQztJQUMxQixrREFBa0Q7SUFDbEQsbUJBQW1CLEVBQUUseUJBQWUsQ0FtQmpDLCtCQUErQixDQUFDO0lBQ25DLG9EQUFvRDtJQUNwRCxxQkFBcUIsRUFBRSx5QkFBZSxDQU9uQyxpQ0FBaUMsQ0FBQztJQUNyQyxxQ0FBcUM7SUFDckMsSUFBSSxFQUFFLHlCQUFlLENBS2xCLGtCQUFrQixDQUFDO0lBQ3RCLDBCQUEwQjtJQUMxQixJQUFJLEVBQUUseUJBQWUsQ0FLbEIsa0JBQWtCLENBQUM7Q0FDdEIsQ0FBQSJ9