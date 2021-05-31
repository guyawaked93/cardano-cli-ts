/** Node operation commands */
export declare const node: {
    /** Create a key pair for a node operator's offline key and a new certificate issue counter */
    'key-gen': (cliPath: string) => (opts: import("./common").Opts<{
        /** Filepath of the cold verification key. */
        '--cold-verification-key-file': string;
        /** Filepath of the cold signing key. */
        '--cold-signing-key-file': string;
        /** The file with the issue counter for the operational certificate. */
        '--operational-certificate-issue-counter-file': string;
    }>) => Promise<unknown>;
    /** Create a key pair for a node KES operational key */
    'key-gen-KES': (cliPath: string) => (opts: import("./common").Opts<{
        /** Output filepath of the verification key. */
        '--verification-key-file': string;
        /** Output filepath of the signing key. */
        '--signing-key-file': string;
    }>) => Promise<unknown>;
    /** Create a key pair for a node VRF operational key */
    'key-gen-VRF': (cliPath: string) => (opts: import("./common").Opts<{
        /** Output filepath of the verification key. */
        '--verification-key-file': string;
        /** Output filepath of the signing key. */
        '--signing-key-file': string;
    }>) => Promise<unknown>;
    /** Print hash of a node's operational VRF key. */
    'key-hash-VRF': (cliPath: string) => (opts: import("./common").Opts<{
        /** Verification key (Bech32 or hex-encoded). */
        '--verification-key': string;
        /** Input filepath of the verification key. */
        '--verification-key-file': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Create a new certificate issue counter */
    'new-counter': (cliPath: string) => (opts: import("./common").Opts<{
        /** Stake pool verification key (Bech32 or hex-encoded). */
        '--stake-pool-verification-key': string;
        /** Genesis delegate verification key (hex-encoded). */
        '--genesis-delegate-verification-key': string;
        /** Filepath of the cold verification key. */
        '--cold-verification-key-file': string;
        /** The next certificate issue counter value to use. */
        '--counter-value': number;
        /** The file with the issue counter for the operational certificate. */
        '--operational-certificate-issue-counter-file': string;
    }>) => Promise<unknown>;
    /** Issue a node operational certificate */
    'issue-op-cert': (cliPath: string) => (opts: import("./common").Opts<{
        /** A Bech32 or hex-encoded hot KES verification key. */
        '--kes-verification-key': string;
        /** Filepath of the hot KES verification key. */
        '--kes-verification-key-file': string;
        /** Filepath of the cold signing key. */
        '--cold-signing-key-file': string;
        /** The file with the issue counter for the operational certificate. */
        '--operational-certificate-issue-counter-file': string;
        /** The start of the KES key validity period. */
        '--kes-period': string;
        /** The output file */
        '--out-file': string;
    }>) => Promise<unknown>;
};
