import { commandFunction } from './command';
export const transaction = {
    /** Build a transaction (low-level, inconvenient) */
    'build-raw': commandFunction('transaction build-raw'),
    /** Sign a transaction */
    sign: commandFunction('transaction sign'),
    /** Create a transaction witness */
    witness: commandFunction('transaction witness'),
    /** Assemble a tx body and witness(es) to form a transaction */
    assemble: commandFunction('transaction assemble'),
    /** Submit a transaction to the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    submit: commandFunction('transaction submit'),
    /** Calculate the PolicyId from the monetary policy script. */
    policyid: commandFunction('transaction policyid'),
    /** Calculate the minimum fee for a transaction */
    'calculate-min-fee': commandFunction('transaction calculate-min-fee'),
    /** Calculate the minimum value for a transaction */
    'calculate-min-value': commandFunction('transaction calculate-min-value'),
    /** Print a transaction identifier */
    txid: commandFunction('transaction txid'),
    /** Print a transaction */
    view: commandFunction('transaction view'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUUzQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDMUIsb0RBQW9EO0lBQ3BELFdBQVcsRUFBRSxlQUFlLENBK0N6Qix1QkFBdUIsQ0FBQztJQUMzQix5QkFBeUI7SUFDekIsSUFBSSxFQUFFLGVBQWUsQ0FhbEIsa0JBQWtCLENBQUM7SUFDdEIsbUNBQW1DO0lBQ25DLE9BQU8sRUFBRSxlQUFlLENBYXJCLHFCQUFxQixDQUFDO0lBQ3pCLCtEQUErRDtJQUMvRCxRQUFRLEVBQUUsZUFBZSxDQU90QixzQkFBc0IsQ0FBQztJQUMxQiwwSUFBMEk7SUFDMUksTUFBTSxFQUFFLGVBQWUsQ0FlcEIsb0JBQW9CLENBQUM7SUFDeEIsOERBQThEO0lBQzlELFFBQVEsRUFBRSxlQUFlLENBR3RCLHNCQUFzQixDQUFDO0lBQzFCLGtEQUFrRDtJQUNsRCxtQkFBbUIsRUFBRSxlQUFlLENBbUJqQywrQkFBK0IsQ0FBQztJQUNuQyxvREFBb0Q7SUFDcEQscUJBQXFCLEVBQUUsZUFBZSxDQU9uQyxpQ0FBaUMsQ0FBQztJQUNyQyxxQ0FBcUM7SUFDckMsSUFBSSxFQUFFLGVBQWUsQ0FLbEIsa0JBQWtCLENBQUM7SUFDdEIsMEJBQTBCO0lBQzFCLElBQUksRUFBRSxlQUFlLENBS2xCLGtCQUFrQixDQUFDO0NBQ3RCLENBQUEifQ==