/** Payment address commands */
import { commandFunction } from './command';
/** Payment address commands */
export const address = {
    /** Create an address key pair. */
    'key-gen': commandFunction('address key-gen'),
    /** Print the hash of an address key. */
    'key-hash': commandFunction('address key-hash'),
    /** Build a Shelley payment address, with optional delegation to a stake address. */
    build: commandFunction('address build'),
    /** Print information about an address. */
    info: commandFunction('address info'),
    /** Build a Shelley script address. (deprecated; use 'build' instead with '--payment-script-file') */
    'build-script': null,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUMvQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRTNDLCtCQUErQjtBQUMvQixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUc7SUFDdEIsa0NBQWtDO0lBQ2xDLFNBQVMsRUFBRSxlQUFlLENBV3ZCLGlCQUFpQixDQUFDO0lBQ3JCLHdDQUF3QztJQUN4QyxVQUFVLEVBQUUsZUFBZSxDQU94QixrQkFBa0IsQ0FBQztJQUV0QixvRkFBb0Y7SUFDcEYsS0FBSyxFQUFFLGVBQWUsQ0FtQm5CLGVBQWUsQ0FBQztJQUNuQiwwQ0FBMEM7SUFDMUMsSUFBSSxFQUFFLGVBQWUsQ0FLbEIsY0FBYyxDQUFDO0lBRWxCLHFHQUFxRztJQUNyRyxjQUFjLEVBQUUsSUFBSTtDQUNwQixDQUFBIn0=