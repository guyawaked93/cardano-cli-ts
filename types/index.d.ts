import { MatchingProperties } from './command';
import { Address, Genesis, Governance, Key, Node, Query, StakeAddress, StakePool, TextView, Transaction } from './modules';
export declare type Commands = {
    /** Payment address commands */
    address: Address.Commands;
    /** Stake address commands */
    stakeAddress: StakeAddress.Commands;
    /** Key utility commands */
    key: Key.Commands;
    /** Transaction commands */
    transaction: Transaction.Commands;
    /** Node operation commands */
    node: Node.Commands;
    /** Stake pool commands */
    stakePool: StakePool.Commands;
    /** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    query: Query.Commands;
    /** Genesis block commands */
    genesis: Genesis.Commands;
    /** Governance commands */
    governance: Governance.Commands;
    /** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
    textView: TextView.Commands;
};
export declare const cardanoCliCommand: <C extends keyof Commands, S extends MatchingProperties<Commands[C], {
    [x: string]: any;
}> = MatchingProperties<Commands[C], {
    [x: string]: any;
}>, SC extends { [K in keyof S]: any; } = { [K_1 in keyof S]: any; }>(command: C, subCommands?: SC | undefined) => (context: string) => any;
export declare const cardanoCli: (cliPath: string) => {
    address: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<Address.Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyGen: any;
        keyHash: any;
        build: any;
        info: any;
    };
    genesis: (options?: any) => any;
    governance: (options?: any) => any;
    key: (options?: any) => any;
    node: (options?: any) => any;
    query: (options?: any) => any;
    stakeAddress: (options?: any) => any;
    stakePool: (options?: any) => any;
    textView: (options?: any) => any;
    transaction: (options?: any) => any;
};
export default cardanoCli;
