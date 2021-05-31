import { stakeAddress } from './stake-address';
import { address } from './adress';
import { key } from './key';
import { transaction } from './transaction';
import { node } from './node';
import { stakePool } from './stake-pool';
import { query } from './query';
import { genesis } from './genesis';
import { governance } from './governance';
import { textView } from './textView';
const cardanoCLI = {
    /** Payment address commands */
    address,
    /** Stake address commands */
    'stake-address': stakeAddress,
    /** Key utility commands */
    key,
    /** Transaction commands */
    transaction,
    /** Node operation commands */
    node,
    /** Stake pool commands */
    'stake-pool': stakePool,
    /** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    query,
    /** Genesis block commands */
    genesis,
    /** Governance commands */
    governance,
    /** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
    'text-view': textView,
};
export const useCliPath = (path) => Object.entries(cardanoCLI).reduce((acc, [cmd, subcommands]) => {
    acc[cmd] = Object.entries(subcommands).reduce((acc, [sub, fun]) => {
        acc[sub] = fun(path);
        return acc;
    }, {});
    return acc;
}, {});
export default cardanoCLI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUMzQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUN4QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFBO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBRXJDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLCtCQUErQjtJQUMvQixPQUFPO0lBRVAsNkJBQTZCO0lBQzdCLGVBQWUsRUFBRSxZQUFZO0lBRTdCLDJCQUEyQjtJQUMzQixHQUFHO0lBRUgsMkJBQTJCO0lBQzNCLFdBQVc7SUFFWCw4QkFBOEI7SUFDOUIsSUFBSTtJQUVKLDBCQUEwQjtJQUMxQixZQUFZLEVBQUUsU0FBUztJQUV2QixrSkFBa0o7SUFDbEosS0FBSztJQUVMLDZCQUE2QjtJQUM3QixPQUFPO0lBRVAsMEJBQTBCO0lBQzFCLFVBQVU7SUFFViwwSEFBMEg7SUFDMUgsV0FBVyxFQUFFLFFBQVE7Q0FDckIsQ0FBQTtBQWNELE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUU7SUFDekUsR0FBRyxDQUFDLEdBQXVCLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FDaEUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BCLE9BQU8sR0FBRyxDQUFBO0lBQ1gsQ0FBQyxFQUNELEVBQUUsQ0FDRixDQUFBO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDWCxDQUFDLEVBQUUsRUFBZ0IsQ0FBQyxDQUFBO0FBRXJCLGVBQWUsVUFBVSxDQUFBIn0=