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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7QUFDL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUUzQywrQkFBK0I7QUFDL0IsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHO0lBQ3RCLGtDQUFrQztJQUNsQyxTQUFTLEVBQUUsZUFBZSxDQVd2QixpQkFBaUIsQ0FBQztJQUNyQix3Q0FBd0M7SUFDeEMsVUFBVSxFQUFFLGVBQWUsQ0FPeEIsa0JBQWtCLENBQUM7SUFFdEIsb0ZBQW9GO0lBQ3BGLEtBQUssRUFBRSxlQUFlLENBbUJuQixlQUFlLENBQUM7SUFDbkIsMENBQTBDO0lBQzFDLElBQUksRUFBRSxlQUFlLENBS2xCLGNBQWMsQ0FBQztJQUVsQixxR0FBcUc7SUFDckcsY0FBYyxFQUFFLElBQUk7Q0FDcEIsQ0FBQSJ9