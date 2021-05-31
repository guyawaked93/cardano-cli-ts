export declare const query: {
    /** Get the node's current protocol parameters */
    'protocol-parameters': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Get the node's current tip (slot no, hash, block no) */
    tip: (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Get the node's current aggregated stake distribution */
    'stake-distribution': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Get the current delegations and reward accounts filtered by stake address. */
    'stake-address-info': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Filter by Cardano stake address (Bech32-encoded). */
        '--address': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Get the node's current UTxO with the option of filtering by address(es) */
    utxo: (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Filter by Cardano address(es) (Bech32-encoded). */
        '--address': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Dump the current ledger state of the node (Ledger.NewEpochState -- advanced command) */
    'ledger-state': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Dump the current protocol state of the node (Ledger.ChainDepState -- advanced command) */
    'protocol-state': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Obtain the three stake snapshots for a pool, plus the total active stake (advanced command) */
    'stake-snapshot': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
        '--stake-pool-id STAKE-POOL-ID': string;
    }>) => Promise<unknown>;
    /** Dump the pool parameters (Ledger.NewEpochState.esLState._delegationState._pState._pParams -- advanced command) */
    'pool-params': (cliPath: string) => (opts: import("./common").Opts<{
        /** For talking to a node running in Shelley-only mode. */
        '--shelley-mode': string;
        /** For talking to a node running in Byron-only mode. */
        '--byron-mode': string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        '--epoch-slots': string;
        /** For talking to a node running in full Cardano mode (default). */
        '--cardano-mode': string;
        /** Use the mainnet magic id. */
        '--mainnet': string;
        /** Specify a testnet magic id. */
        '--testnet-magic': string;
        /** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
        '--stake-pool-id STAKE-POOL-ID': string;
    }>) => Promise<unknown>;
};
