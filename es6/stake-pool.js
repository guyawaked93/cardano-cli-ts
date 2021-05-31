import { commandFunction } from './command';
export const stakePool = {
    /** Create a stake pool registration certificate */
    'registration-certificate': commandFunction('stake-pool registration-certificate'),
    /** Create a stake pool deregistration certificate */
    'deregistration-certificate': commandFunction('stake-pool deregistration-certificate'),
    /** Build pool id from the offline key */
    id: commandFunction('stake-pool id'),
    /** Print the hash of pool metadata. */
    'metadata-hash': commandFunction('stake-pool metadata-hash'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UtcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFrZS1wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFFM0MsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3hCLG1EQUFtRDtJQUNuRCwwQkFBMEIsRUFBRSxlQUFlLENBMkN4QyxxQ0FBcUMsQ0FBQztJQUN6QyxxREFBcUQ7SUFDckQsNEJBQTRCLEVBQUUsZUFBZSxDQVMxQyx1Q0FBdUMsQ0FBQztJQUMzQyx5Q0FBeUM7SUFDekMsRUFBRSxFQUFFLGVBQWUsQ0FPaEIsZUFBZSxDQUFDO0lBQ25CLHVDQUF1QztJQUN2QyxlQUFlLEVBQUUsZUFBZSxDQUs3QiwwQkFBMEIsQ0FBQztDQUM5QixDQUFBIn0=