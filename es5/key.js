"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
var command_1 = require("./command");
exports.key = {
    /** Get a verification key from a signing key. This supports all key types. */
    'verification-key': command_1.commandFunction('key verification-key'),
    /** Get a non-extended verification key from an extended verification key. This supports all extended key types. */
    'non-extended-key': command_1.commandFunction('key non-extended-key'),
    /** Convert a Byron payment, genesis or genesis delegate key (signing or verification) to a corresponding Shelley-format key. */
    'convert-byron-key': command_1.commandFunction('key convert-byron-key'),
    /** Convert a Base64-encoded Byron genesis verification key to a Shelley genesis verification key */
    'convert-byron-genesis-vkey': command_1.commandFunction('key convert-byron-genesis-vkey'),
    /** Convert an Incentivized Testnet (ITN) non-extended (Ed25519) signing or verification key to a corresponding Shelley stake key */
    'convert-itn-key': command_1.commandFunction('key convert-itn-key'),
    /** Convert an Incentivized Testnet (ITN) extended (Ed25519Extended) signing key to a corresponding Shelley stake signing key */
    'convert-itn-extended-key': command_1.commandFunction('key convert-itn-extended-key'),
    /** Convert an Incentivized Testnet (ITN) BIP32 (Ed25519Bip32) signing key to a corresponding Shelley stake signing key */
    'convert-itn-bip32-key': command_1.commandFunction('key convert-itn-bip32-key'),
    /** Convert a cardano-address extended signing key to a corresponding Shelley-format key. */
    'convert-cardano-address-key': command_1.commandFunction('key convert-cardano-address-key'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBMkM7QUFFOUIsUUFBQSxHQUFHLEdBQUc7SUFDbEIsOEVBQThFO0lBQzlFLGtCQUFrQixFQUFFLHlCQUFlLENBS2hDLHNCQUFzQixDQUFDO0lBQzFCLG1IQUFtSDtJQUNuSCxrQkFBa0IsRUFBRSx5QkFBZSxDQUtoQyxzQkFBc0IsQ0FBQztJQUMxQixnSUFBZ0k7SUFDaEksbUJBQW1CLEVBQUUseUJBQWUsQ0FxQmpDLHVCQUF1QixDQUFDO0lBQzNCLG9HQUFvRztJQUNwRyw0QkFBNEIsRUFBRSx5QkFBZSxDQUsxQyxnQ0FBZ0MsQ0FBQztJQUNwQyxvSUFBb0k7SUFDcEksaUJBQWlCLEVBQUUseUJBQWUsQ0FPL0IscUJBQXFCLENBQUM7SUFDekIsZ0lBQWdJO0lBQ2hJLDBCQUEwQixFQUFFLHlCQUFlLENBS3hDLDhCQUE4QixDQUFDO0lBQ2xDLDBIQUEwSDtJQUMxSCx1QkFBdUIsRUFBRSx5QkFBZSxDQUtyQywyQkFBMkIsQ0FBQztJQUMvQiw0RkFBNEY7SUFDNUYsNkJBQTZCLEVBQUUseUJBQWUsQ0FhM0MsaUNBQWlDLENBQUM7Q0FDckMsQ0FBQSJ9