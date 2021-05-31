"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address = void 0;
/** Payment address commands */
var command_1 = require("./command");
/** Payment address commands */
exports.address = {
    /** Create an address key pair. */
    'key-gen': command_1.commandFunction('address key-gen'),
    /** Print the hash of an address key. */
    'key-hash': command_1.commandFunction('address key-hash'),
    /** Build a Shelley payment address, with optional delegation to a stake address. */
    build: command_1.commandFunction('address build'),
    /** Print information about an address. */
    info: command_1.commandFunction('address info'),
    /** Build a Shelley script address. (deprecated; use 'build' instead with '--payment-script-file') */
    'build-script': null,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUMvQixxQ0FBMkM7QUFFM0MsK0JBQStCO0FBQ2xCLFFBQUEsT0FBTyxHQUFHO0lBQ3RCLGtDQUFrQztJQUNsQyxTQUFTLEVBQUUseUJBQWUsQ0FXdkIsaUJBQWlCLENBQUM7SUFDckIsd0NBQXdDO0lBQ3hDLFVBQVUsRUFBRSx5QkFBZSxDQU94QixrQkFBa0IsQ0FBQztJQUV0QixvRkFBb0Y7SUFDcEYsS0FBSyxFQUFFLHlCQUFlLENBbUJuQixlQUFlLENBQUM7SUFDbkIsMENBQTBDO0lBQzFDLElBQUksRUFBRSx5QkFBZSxDQUtsQixjQUFjLENBQUM7SUFFbEIscUdBQXFHO0lBQ3JHLGNBQWMsRUFBRSxJQUFJO0NBQ3BCLENBQUEifQ==