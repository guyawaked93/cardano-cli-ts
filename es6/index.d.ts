export declare const cardanoCli: (cliPath?: string) => {
    /** Payment address commands */
    address: (options?: any) => any;
    /** Stake address commands */
    stakeAddress: (options?: any) => any;
    /** Key utility commands */
    key: (options?: any) => any;
    /** Transaction commands */
    transaction: (options?: any) => any;
    /** Node operation commands */
    node: (options?: any) => any;
    /** Stake pool commands */
    stakePool: (options?: any) => any;
    /** Node query commands. Will query the local node whose
     * Unix domain socket is obtained from the
     * CARDANO_NODE_SOCKET_PATH enviromnent variable.
     */
    query: (options?: any) => any;
    /** Commands for dealing with Shelley TextView files.
     * Transactions, addresses etc are stored on disk as
     * TextView files.
     */
    textView: (options?: any) => any;
    /** Genesis block commands */
    genesis: (options?: any) => any;
    /** Governance commands */
    governance: (options?: any) => any;
};
export default cardanoCli;
