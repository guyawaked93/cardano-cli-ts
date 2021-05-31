"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var command_1 = require("./command");
exports.query = {
    /** Get the node's current protocol parameters */
    'protocol-parameters': command_1.commandFunction('query protocol-parameters'),
    /** Get the node's current tip (slot no, hash, block no) */
    tip: command_1.commandFunction('query tip'),
    /** Get the node's current aggregated stake distribution */
    'stake-distribution': command_1.commandFunction('query stake-distribution'),
    /** Get the current delegations and reward accounts filtered by stake address. */
    'stake-address-info': command_1.commandFunction('query stake-address-info'),
    /** Get the node's current UTxO with the option of filtering by address(es) */
    utxo: command_1.commandFunction('query utxo'),
    /** Dump the current ledger state of the node (Ledger.NewEpochState -- advanced command) */
    'ledger-state': command_1.commandFunction('query ledger-state'),
    /** Dump the current protocol state of the node (Ledger.ChainDepState -- advanced command) */
    'protocol-state': command_1.commandFunction('query protocol-state'),
    /** Obtain the three stake snapshots for a pool, plus the total active stake (advanced command) */
    'stake-snapshot': command_1.commandFunction('query stake-snapshot'),
    /** Dump the pool parameters (Ledger.NewEpochState.esLState._delegationState._pState._pParams -- advanced command) */
    'pool-params': command_1.commandFunction('query pool-params'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJDO0FBRTlCLFFBQUEsS0FBSyxHQUFHO0lBQ3BCLGlEQUFpRDtJQUNqRCxxQkFBcUIsRUFBRSx5QkFBZSxDQWVuQywyQkFBMkIsQ0FBQztJQUMvQiwyREFBMkQ7SUFDM0QsR0FBRyxFQUFFLHlCQUFlLENBZWpCLFdBQVcsQ0FBQztJQUNmLDJEQUEyRDtJQUMzRCxvQkFBb0IsRUFBRSx5QkFBZSxDQWVsQywwQkFBMEIsQ0FBQztJQUM5QixpRkFBaUY7SUFDakYsb0JBQW9CLEVBQUUseUJBQWUsQ0FpQmxDLDBCQUEwQixDQUFDO0lBQzlCLDhFQUE4RTtJQUM5RSxJQUFJLEVBQUUseUJBQWUsQ0FpQmxCLFlBQVksQ0FBQztJQUNoQiwyRkFBMkY7SUFDM0YsY0FBYyxFQUFFLHlCQUFlLENBZTVCLG9CQUFvQixDQUFDO0lBQ3hCLDZGQUE2RjtJQUM3RixnQkFBZ0IsRUFBRSx5QkFBZSxDQWU5QixzQkFBc0IsQ0FBQztJQUMxQixrR0FBa0c7SUFDbEcsZ0JBQWdCLEVBQUUseUJBQWUsQ0FlOUIsc0JBQXNCLENBQUM7SUFDMUIscUhBQXFIO0lBQ3JILGFBQWEsRUFBRSx5QkFBZSxDQWUzQixtQkFBbUIsQ0FBQztDQUN2QixDQUFBIn0=