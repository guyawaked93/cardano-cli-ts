export declare const genesis: {
    /** Create a Shelley genesis key pair */
    'key-gen-genesis': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Create a Shelley genesis delegate key pair */
    'key-gen-delegate': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Create a Shelley genesis UTxO key pair */
    'key-gen-utxo': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Print the identifier (hash) of a public key */
    'key-hash': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Derive the verification key from a signing key */
    'get-ver-key': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Get the address for an initial UTxO based on the verification key */
    'initial-addr': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Get the TxIn for an initial UTxO based on the verification key */
    'initial-txin': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Create a Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
    create: (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Create a staked Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
    'create-staked': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    /** Compute the hash of a genesis file */
    hash: (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
};
