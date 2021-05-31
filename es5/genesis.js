"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genesis = void 0;
var command_1 = require("./command");
exports.genesis = {
    /** Create a Shelley genesis key pair */
    'key-gen-genesis': command_1.commandFunction('genesis key-gen-genesis'),
    /** Create a Shelley genesis delegate key pair */
    'key-gen-delegate': command_1.commandFunction('genesis key-gen-delegate'),
    /** Create a Shelley genesis UTxO key pair */
    'key-gen-utxo': command_1.commandFunction('genesis key-gen-utxo'),
    /** Print the identifier (hash) of a public key */
    'key-hash': command_1.commandFunction('genesis key-hash'),
    /** Derive the verification key from a signing key */
    'get-ver-key': command_1.commandFunction('genesis get-ver-key'),
    /** Get the address for an initial UTxO based on the verification key */
    'initial-addr': command_1.commandFunction('genesis initial-addr'),
    /** Get the TxIn for an initial UTxO based on the verification key */
    'initial-txin': command_1.commandFunction('genesis initial-txin'),
    /** Create a Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
    create: command_1.commandFunction('genesis create'),
    /** Create a staked Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
    'create-staked': command_1.commandFunction('genesis create-staked'),
    /** Compute the hash of a genesis file */
    hash: command_1.commandFunction('genesis hash'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lc2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyQztBQUU5QixRQUFBLE9BQU8sR0FBRztJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCLEVBQUUseUJBQWUsQ0FBQyx5QkFBeUIsQ0FBQztJQUM3RCxpREFBaUQ7SUFDakQsa0JBQWtCLEVBQUUseUJBQWUsQ0FBQywwQkFBMEIsQ0FBQztJQUMvRCw2Q0FBNkM7SUFDN0MsY0FBYyxFQUFFLHlCQUFlLENBQUMsc0JBQXNCLENBQUM7SUFDdkQsa0RBQWtEO0lBQ2xELFVBQVUsRUFBRSx5QkFBZSxDQUFDLGtCQUFrQixDQUFDO0lBQy9DLHFEQUFxRDtJQUNyRCxhQUFhLEVBQUUseUJBQWUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNyRCx3RUFBd0U7SUFDeEUsY0FBYyxFQUFFLHlCQUFlLENBQUMsc0JBQXNCLENBQUM7SUFDdkQscUVBQXFFO0lBQ3JFLGNBQWMsRUFBRSx5QkFBZSxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZELGtHQUFrRztJQUNsRyxNQUFNLEVBQUUseUJBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6Qyx5R0FBeUc7SUFDekcsZUFBZSxFQUFFLHlCQUFlLENBQUMsdUJBQXVCLENBQUM7SUFDekQseUNBQXlDO0lBQ3pDLElBQUksRUFBRSx5QkFBZSxDQUFDLGNBQWMsQ0FBQztDQUNyQyxDQUFBIn0=