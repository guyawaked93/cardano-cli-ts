import { commandFunction } from './command';
export const query = {
    /** Get the node's current protocol parameters */
    'protocol-parameters': commandFunction('query protocol-parameters'),
    /** Get the node's current tip (slot no, hash, block no) */
    tip: commandFunction('query tip'),
    /** Get the node's current aggregated stake distribution */
    'stake-distribution': commandFunction('query stake-distribution'),
    /** Get the current delegations and reward accounts filtered by stake address. */
    'stake-address-info': commandFunction('query stake-address-info'),
    /** Get the node's current UTxO with the option of filtering by address(es) */
    utxo: commandFunction('query utxo'),
    /** Dump the current ledger state of the node (Ledger.NewEpochState -- advanced command) */
    'ledger-state': commandFunction('query ledger-state'),
    /** Dump the current protocol state of the node (Ledger.ChainDepState -- advanced command) */
    'protocol-state': commandFunction('query protocol-state'),
    /** Obtain the three stake snapshots for a pool, plus the total active stake (advanced command) */
    'stake-snapshot': commandFunction('query stake-snapshot'),
    /** Dump the pool parameters (Ledger.NewEpochState.esLState._delegationState._pState._pParams -- advanced command) */
    'pool-params': commandFunction('query pool-params'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUUzQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDcEIsaURBQWlEO0lBQ2pELHFCQUFxQixFQUFFLGVBQWUsQ0FlbkMsMkJBQTJCLENBQUM7SUFDL0IsMkRBQTJEO0lBQzNELEdBQUcsRUFBRSxlQUFlLENBZWpCLFdBQVcsQ0FBQztJQUNmLDJEQUEyRDtJQUMzRCxvQkFBb0IsRUFBRSxlQUFlLENBZWxDLDBCQUEwQixDQUFDO0lBQzlCLGlGQUFpRjtJQUNqRixvQkFBb0IsRUFBRSxlQUFlLENBaUJsQywwQkFBMEIsQ0FBQztJQUM5Qiw4RUFBOEU7SUFDOUUsSUFBSSxFQUFFLGVBQWUsQ0FpQmxCLFlBQVksQ0FBQztJQUNoQiwyRkFBMkY7SUFDM0YsY0FBYyxFQUFFLGVBQWUsQ0FlNUIsb0JBQW9CLENBQUM7SUFDeEIsNkZBQTZGO0lBQzdGLGdCQUFnQixFQUFFLGVBQWUsQ0FlOUIsc0JBQXNCLENBQUM7SUFDMUIsa0dBQWtHO0lBQ2xHLGdCQUFnQixFQUFFLGVBQWUsQ0FlOUIsc0JBQXNCLENBQUM7SUFDMUIscUhBQXFIO0lBQ3JILGFBQWEsRUFBRSxlQUFlLENBZTNCLG1CQUFtQixDQUFDO0NBQ3ZCLENBQUEifQ==