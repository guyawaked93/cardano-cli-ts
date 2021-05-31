export declare const governance: {
    /** Create an MIR (Move Instantaneous Rewards) certificate */
    'create-mir-certificate': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Create a genesis key delegation certificate */
    'create-genesis-key-delegation-certificate': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Create an update proposal */
    'create-update-proposal': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
};
