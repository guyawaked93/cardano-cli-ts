/** Stake address commands */
import { commandFunction } from './command';
/** Stake address commands */
export const stakeAddress = {
    /** Create a stake address key pair */
    'key-gen': commandFunction('stake-address key-gen'),
    /** Build a stake address */
    build: commandFunction('stake-address build'),
    /** Print the hash of a stake address key. */
    'key-hash': commandFunction('stake-address key-hash'),
    /** Create a stake address registration certificate */
    'registration-certificate': commandFunction('stake-address registration-certificate'),
    /** Create a stake address deregistration certificate */
    'deregistration-certificate': commandFunction('stake-address deregistration-certificate'),
    /** Create a stake address delegation certificate */
    'delegation-certificate': commandFunction('stake-address delegation-certificate'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rha2UtYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFrZS1hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRTNDLDZCQUE2QjtBQUM3QixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDM0Isc0NBQXNDO0lBQ3RDLFNBQVMsRUFBRSxlQUFlLENBS3ZCLHVCQUF1QixDQUFDO0lBQzNCLDRCQUE0QjtJQUM1QixLQUFLLEVBQUUsZUFBZSxDQVduQixxQkFBcUIsQ0FBQztJQUN6Qiw2Q0FBNkM7SUFDN0MsVUFBVSxFQUFFLGVBQWUsQ0FPeEIsd0JBQXdCLENBQUM7SUFDNUIsc0RBQXNEO0lBQ3RELDBCQUEwQixFQUFFLGVBQWUsQ0FPeEMsd0NBQXdDLENBQUM7SUFDNUMsd0RBQXdEO0lBQ3hELDRCQUE0QixFQUFFLGVBQWUsQ0FPMUMsMENBQTBDLENBQUM7SUFDOUMsb0RBQW9EO0lBQ3BELHdCQUF3QixFQUFFLGVBQWUsQ0FhdEMsc0NBQXNDLENBQUM7Q0FDMUMsQ0FBQSJ9