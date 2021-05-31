/** Stake address commands */
export declare const stakeAddress: {
    /** Create a stake address key pair */
    'key-gen': (cliPath: string) => (opts: import("./common").Opts<{
        /** Output filepath of the verification key. */
        '--verification-key-file': string;
        /** Output filepath of the signing key. */
        '--signing-key-file': string;
    }>) => Promise<unknown>;
    /** Build a stake address */
    build: (cliPath: string) => (opts: import("./common").Opts<{
        /** Stake verification key (Bech32 or hex-encoded). */
        '--stake-verification-key': string;
        /** Filepath of the staking verification key. */
        '--stake-verification-key-file': string;
        /** Use the mainnet magic id. */
        '--mainnet'?: boolean | undefined;
        /** Specify a testnet magic id. */
        '--testnet-magic'?: string | undefined;
        /** Optional output file. Default is to write to stdout. */
        '--out-file'?: string | undefined;
    }>) => Promise<unknown>;
    /** Print the hash of a stake address key. */
    'key-hash': (cliPath: string) => (opts: import("./common").Opts<{
        /** Stake verification key (Bech32 or hex-encoded). */
        '--stake-verification-key': string;
        /** Filepath of the staking verification key. */
        '--stake-verification-key-file': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file'?: string | undefined;
    }>) => Promise<unknown>;
    /** Create a stake address registration certificate */
    'registration-certificate': (cliPath: string) => (opts: import("./common").Opts<{
        /** Stake verification key (Bech32 or hex-encoded). */
        '--stake-verification-key': string;
        /** Filepath of the staking verification key. */
        '--stake-verification-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Create a stake address deregistration certificate */
    'deregistration-certificate': (cliPath: string) => (opts: import("./common").Opts<{
        /** Stake verification key (Bech32 or hex-encoded). */
        '--stake-verification-key': string;
        /** Filepath of the staking verification key. */
        '--stake-verification-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Create a stake address delegation certificate */
    'delegation-certificate': (cliPath: string) => (opts: import("./common").Opts<{
        /** Stake verification key (Bech32 or hex-encoded). */
        '--stake-verification-key': string;
        /** Filepath of the staking verification key. */
        '--stake-verification-key-file': string;
        /** Stake pool verification key (Bech32 or hex-encoded). */
        '--stake-pool-verification-key': string;
        /** Filepath of the stake pool verification key. */
        '--cold-verification-key-file': string;
        /** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
        '--stake-pool-id STAKE-POOL-ID': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
};
