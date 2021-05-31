"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stakeAddress = void 0;
/** Stake address commands */
var command_1 = require("./command");
/** Stake address commands */
exports.stakeAddress = {
    /** Create a stake address key pair */
    'key-gen': command_1.commandFunction('stake-address key-gen'),
    /** Build a stake address */
    build: command_1.commandFunction('stake-address build'),
    /** Print the hash of a stake address key. */
    'key-hash': command_1.commandFunction('stake-address key-hash'),
    /** Create a stake address registration certificate */
    'registration-certificate': command_1.commandFunction('stake-address registration-certificate'),
    /** Create a stake address deregistration certificate */
    'deregistration-certificate': command_1.commandFunction('stake-address deregistration-certificate'),
    /** Create a stake address delegation certificate */
    'delegation-certificate': command_1.commandFunction('stake-address delegation-certificate'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UtYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFrZS1hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUE2QjtBQUM3QixxQ0FBMkM7QUFFM0MsNkJBQTZCO0FBQ2hCLFFBQUEsWUFBWSxHQUFHO0lBQzNCLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUseUJBQWUsQ0FLdkIsdUJBQXVCLENBQUM7SUFDM0IsNEJBQTRCO0lBQzVCLEtBQUssRUFBRSx5QkFBZSxDQVduQixxQkFBcUIsQ0FBQztJQUN6Qiw2Q0FBNkM7SUFDN0MsVUFBVSxFQUFFLHlCQUFlLENBT3hCLHdCQUF3QixDQUFDO0lBQzVCLHNEQUFzRDtJQUN0RCwwQkFBMEIsRUFBRSx5QkFBZSxDQU94Qyx3Q0FBd0MsQ0FBQztJQUM1Qyx3REFBd0Q7SUFDeEQsNEJBQTRCLEVBQUUseUJBQWUsQ0FPMUMsMENBQTBDLENBQUM7SUFDOUMsb0RBQW9EO0lBQ3BELHdCQUF3QixFQUFFLHlCQUFlLENBYXRDLHNDQUFzQyxDQUFDO0NBQzFDLENBQUEifQ==