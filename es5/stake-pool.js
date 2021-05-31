"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stakePool = void 0;
var command_1 = require("./command");
exports.stakePool = {
    /** Create a stake pool registration certificate */
    'registration-certificate': command_1.commandFunction('stake-pool registration-certificate'),
    /** Create a stake pool deregistration certificate */
    'deregistration-certificate': command_1.commandFunction('stake-pool deregistration-certificate'),
    /** Build pool id from the offline key */
    id: command_1.commandFunction('stake-pool id'),
    /** Print the hash of pool metadata. */
    'metadata-hash': command_1.commandFunction('stake-pool metadata-hash'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UtcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFrZS1wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyQztBQUU5QixRQUFBLFNBQVMsR0FBRztJQUN4QixtREFBbUQ7SUFDbkQsMEJBQTBCLEVBQUUseUJBQWUsQ0EyQ3hDLHFDQUFxQyxDQUFDO0lBQ3pDLHFEQUFxRDtJQUNyRCw0QkFBNEIsRUFBRSx5QkFBZSxDQVMxQyx1Q0FBdUMsQ0FBQztJQUMzQyx5Q0FBeUM7SUFDekMsRUFBRSxFQUFFLHlCQUFlLENBT2hCLGVBQWUsQ0FBQztJQUNuQix1Q0FBdUM7SUFDdkMsZUFBZSxFQUFFLHlCQUFlLENBSzdCLDBCQUEwQixDQUFDO0NBQzlCLENBQUEifQ==