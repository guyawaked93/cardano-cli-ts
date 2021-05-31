"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.node = void 0;
/** Node operation commands */
var command_1 = require("./command");
/** Node operation commands */
exports.node = {
    /** Create a key pair for a node operator's offline key and a new certificate issue counter */
    'key-gen': command_1.commandFunction('node key-gen'),
    /** Create a key pair for a node KES operational key */
    'key-gen-KES': command_1.commandFunction('node key-gen-KES'),
    /** Create a key pair for a node VRF operational key */
    'key-gen-VRF': command_1.commandFunction('node key-gen-VRF'),
    /** Print hash of a node's operational VRF key. */
    'key-hash-VRF': command_1.commandFunction('node key-hash-VRF'),
    /** Create a new certificate issue counter */
    'new-counter': command_1.commandFunction('node new-counter'),
    /** Issue a node operational certificate */
    'issue-op-cert': command_1.commandFunction('node issue-op-cert'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQUE4QjtBQUM5QixxQ0FBMkM7QUFFM0MsOEJBQThCO0FBQ2pCLFFBQUEsSUFBSSxHQUFHO0lBQ25CLDhGQUE4RjtJQUM5RixTQUFTLEVBQUUseUJBQWUsQ0FPdkIsY0FBYyxDQUFDO0lBQ2xCLHVEQUF1RDtJQUN2RCxhQUFhLEVBQUUseUJBQWUsQ0FLM0Isa0JBQWtCLENBQUM7SUFDdEIsdURBQXVEO0lBQ3ZELGFBQWEsRUFBRSx5QkFBZSxDQUszQixrQkFBa0IsQ0FBQztJQUN0QixrREFBa0Q7SUFDbEQsY0FBYyxFQUFFLHlCQUFlLENBTzVCLG1CQUFtQixDQUFDO0lBQ3ZCLDZDQUE2QztJQUM3QyxhQUFhLEVBQUUseUJBQWUsQ0FXM0Isa0JBQWtCLENBQUM7SUFDdEIsMkNBQTJDO0lBQzNDLGVBQWUsRUFBRSx5QkFBZSxDQWE3QixvQkFBb0IsQ0FBQztDQUN4QixDQUFBIn0=