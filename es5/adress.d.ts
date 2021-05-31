/** Payment address commands */
export declare const address: {
    /** Create an address key pair. */
    'key-gen': (cliPath: string) => (opts: import("./common").Opts<{
        /** Use a normal Shelley-era key (default). */
        '--normal-key'?: boolean | undefined;
        /** Use an extended ed25519 Shelley-era key. */
        '--extended-key'?: boolean | undefined;
        /** Use a Byron-era key. */
        '--byron-key'?: boolean | undefined;
        /** Output filepath of the verification key. */
        '--verification-key-file': string;
        /** Output filepath of the signing key. */
        '--signing-key-file': string;
    }>) => Promise<unknown>;
    /** Print the hash of an address key. */
    'key-hash': (cliPath: string) => (opts: import("./common").Opts<{
        /** STRING Payment verification key (Bech32-encoded) */
        '--payment-verification-key': string;
        /** Filepath of the payment verification key. */
        '--payment-verification-key-file': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file'?: string | undefined;
    }>) => Promise<unknown>;
    /** Build a Shelley payment address, with optional delegation to a stake address. */
    build: (cliPath: string) => (opts: import("./common").Opts<{
        /** Payment verification key (Bech32-encoded) */
        '--payment-verification-key': string;
        /** Filepath of the payment verification key. */
        '--payment-verification-key-file': string;
        /** Filepath of the payment script. */
        '--payment-script-file': string;
        /** Stake verification key (Bech32 or hex-encoded). */
        '--stake-verification-key': string;
        /** Filepath of the staking verification key. */
        '--stake-verification-key-file': string;
        /** Filepath of the staking script. */
        '--stake-script-file': string;
        /** Use the mainnet magic id. */
        '--mainnet'?: boolean | undefined;
        /** Specify a testnet magic id. */
        '--testnet-magic'?: string | undefined;
        /** Optional output file. Default is to write to stdout. */
        '--out-file'?: string | undefined;
    }>) => Promise<unknown>;
    /** Print information about an address. */
    info: (cliPath: string) => (opts: import("./common").Opts<{
        /** A Cardano address */
        '--address': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file'?: string | undefined;
    }>) => Promise<unknown>;
    /** Build a Shelley script address. (deprecated; use 'build' instead with '--payment-script-file') */
    'build-script': null;
};
