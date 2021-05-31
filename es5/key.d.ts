export declare const key: {
    /** Get a verification key from a signing key. This supports all key types. */
    'verification-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Input filepath of the signing key. */
        '--signing-key-file': string;
        /** Output filepath of the verification key. */
        '--verification-key-file': string;
    }>) => Promise<unknown>;
    /** Get a non-extended verification key from an extended verification key. This supports all extended key types. */
    'non-extended-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Input filepath of the ed25519-bip32 verification key. */
        '--extended-verification-key-file': string;
        /** Output filepath of the verification key. */
        '--verification-key-file': string;
    }>) => Promise<unknown>;
    /** Convert a Byron payment, genesis or genesis delegate key (signing or verification) to a corresponding Shelley-format key. */
    'convert-byron-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Password for signing key (if applicable). */
        '--password': string;
        /** Use a Byron-era payment key. */
        '--byron-payment-key-type': string;
        /** Use a Byron-era payment key, in legacy SL format. */
        '--legacy-byron-payment-key-type': string;
        /** Use a Byron-era genesis key. */
        '--byron-genesis-key-type': string;
        /** Use a Byron-era genesis key, in legacy SL format. */
        '--legacy-byron-genesis-key-type': string;
        /** Use a Byron-era genesis delegate key. */
        '--byron-genesis-delegate-key-type': string;
        /** Use a Byron-era genesis delegate key, in legacy SL format. */
        '--legacy-byron-genesis-delegate-key-type': string;
        /** Input filepath of the Byron-format signing key. */
        '--byron-signing-key-file': string;
        /** Input filepath of the Byron-format verification key. */
        '--byron-verification-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Convert a Base64-encoded Byron genesis verification key to a Shelley genesis verification key */
    'convert-byron-genesis-vkey': (cliPath: string) => (opts: import("./common").Opts<{
        /** Base64 string for the Byron genesis verification key. */
        '--byron-genesis-verification-key': string;
        /** The output file */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Convert an Incentivized Testnet (ITN) non-extended (Ed25519) signing or verification key to a corresponding Shelley stake key */
    'convert-itn-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Filepath of the ITN signing key. */
        '--itn-signing-key-file': string;
        /** Filepath of the ITN verification key. */
        '--itn-verification-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Convert an Incentivized Testnet (ITN) extended (Ed25519Extended) signing key to a corresponding Shelley stake signing key */
    'convert-itn-extended-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Filepath of the ITN signing key. */
        '--itn-signing-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Convert an Incentivized Testnet (ITN) BIP32 (Ed25519Bip32) signing key to a corresponding Shelley stake signing key */
    'convert-itn-bip32-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Filepath of the ITN signing key. */
        '--itn-signing-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
    /** Convert a cardano-address extended signing key to a corresponding Shelley-format key. */
    'convert-cardano-address-key': (cliPath: string) => (opts: import("./common").Opts<{
        /** Use a Shelley-era extended payment key. */
        '--shelley-payment-key': string;
        /** Use a Shelley-era extended stake key. */
        '--shelley-stake-key': string;
        /** Use a Byron-era extended payment key formatted in the Icarus style. */
        '--icarus-payment-key': string;
        /** Use a Byron-era extended payment key formatted in the deprecated Byron style. */
        '--byron-payment-key': string;
        /** Input filepath of the signing key. */
        '--signing-key-file': string;
        /** The output file. */
        '--out-file': string;
    }>) => Promise<unknown>;
};
