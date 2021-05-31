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
export const cardanoCli = {
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
export const useCliPath = (path) => Object.entries(cardanoCli).reduce((acc, [cmd, subcommands]) => {
    acc[cmd] = Object.entries(subcommands).reduce((acc, [sub, fun]) => {
        acc[sub] = fun(path);
        return acc;
    }, {});
    return acc;
}, {});
export default useCliPath('cardano-cli');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUMzQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUN4QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFBO0FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFDbkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBRXJDLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRztJQUN6QiwrQkFBK0I7SUFDL0IsT0FBTztJQUVQLDZCQUE2QjtJQUM3QixlQUFlLEVBQUUsWUFBWTtJQUU3QiwyQkFBMkI7SUFDM0IsR0FBRztJQUVILDJCQUEyQjtJQUMzQixXQUFXO0lBRVgsOEJBQThCO0lBQzlCLElBQUk7SUFFSiwwQkFBMEI7SUFDMUIsWUFBWSxFQUFFLFNBQVM7SUFFdkIsa0pBQWtKO0lBQ2xKLEtBQUs7SUFFTCw2QkFBNkI7SUFDN0IsT0FBTztJQUVQLDBCQUEwQjtJQUMxQixVQUFVO0lBRVYsMEhBQTBIO0lBQzFILFdBQVcsRUFBRSxRQUFRO0NBQ3JCLENBQUE7QUFjRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFO0lBQ3pFLEdBQUcsQ0FBQyxHQUF1QixDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQ2hFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixPQUFPLEdBQUcsQ0FBQTtJQUNYLENBQUMsRUFDRCxFQUFFLENBQ0YsQ0FBQTtJQUNELE9BQU8sR0FBRyxDQUFBO0FBQ1gsQ0FBQyxFQUFFLEVBQWdCLENBQUMsQ0FBQTtBQUVyQixlQUFlLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQSJ9