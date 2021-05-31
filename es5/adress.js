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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0I7QUFDL0IscUNBQTJDO0FBRTNDLCtCQUErQjtBQUNsQixRQUFBLE9BQU8sR0FBRztJQUN0QixrQ0FBa0M7SUFDbEMsU0FBUyxFQUFFLHlCQUFlLENBV3ZCLGlCQUFpQixDQUFDO0lBQ3JCLHdDQUF3QztJQUN4QyxVQUFVLEVBQUUseUJBQWUsQ0FPeEIsa0JBQWtCLENBQUM7SUFFdEIsb0ZBQW9GO0lBQ3BGLEtBQUssRUFBRSx5QkFBZSxDQW1CbkIsZUFBZSxDQUFDO0lBQ25CLDBDQUEwQztJQUMxQyxJQUFJLEVBQUUseUJBQWUsQ0FLbEIsY0FBYyxDQUFDO0lBRWxCLHFHQUFxRztJQUNyRyxjQUFjLEVBQUUsSUFBSTtDQUNwQixDQUFBIn0=