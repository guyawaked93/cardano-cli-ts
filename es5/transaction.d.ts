export declare type Commands = {
    /** Build a transaction (low-level, inconvenient) */
    buildRaw: {
        /** Specify the Byron era */
        byronEra: string;
        /** Specify the Shelley era */
        shelleyEra: string;
        /** Specify the Allegra era */
        allegraEra: string;
        /** Specify the Mary era (default) */
        maryEra: string;
        /** TxId#TxIx */
        txIn: string;
        /** Filepath of the spending script witness */
        txinScriptFile: string;
        /** The transaction output as Address+Lovelace where Address is the Bech32-encoded address followed by the amount in Lovelace. */
        txOut: string;
        /** Mint multi-asset value(s) with the multi-asset cli syntax. You must specifiy a script witness. */
        mint: string;
        /** Filepath of the multi-asset witness script. */
        mintingScriptFile: string;
        /** Time that transaction is valid from (in slots). */
        invalidBefore: string;
        /** Time that transaction is valid until (in slots). */
        invalidHereafter: string;
        /** The fee amount in Lovelace. */
        fee: string;
        /** Filepath of the certificate. This encompasses all types of certificates (stake pool certificates, stake key certificates etc). Optionally specify a script witness. */
        certificateFile: string;
        /** Filepath of the certificate script witness */
        certificateScriptFile: string;
        /** The reward withdrawal as StakeAddress+Lovelace where StakeAddress is the Bech32-encoded stake address followed by the amount in Lovelace. Optionally specify a script witness. */
        withdrawal: string;
        /** Filepath of the withdrawal script witness. */
        withdrawalScriptFile: string;
        /** Use the "no schema" conversion from JSON to tx metadata. */
        jsonMetadataNoSchema: string;
        /** Use the "detailed schema" conversion from JSON to tx metadata. */
        jsonMetadataDetailedSchema: string;
        /** Filepath of auxiliary script(s) */
        auxiliaryScriptFile: string;
        /** Filepath of the metadata file, in JSON format. */
        metadataJsonFile: string;
        /** Filepath of the metadata, in raw CBOR format. */
        metadataCborFile: string;
        /** Filepath of the update proposal. */
        updateProposalFile: string;
        /** Output filepath of the JSON TxBody. */
        outFile: string;
    };
    /** Sign a transaction */
    sign: {
        /** Input filepath of the JSON TxBody. */
        txBodyFile: string;
        /** Input filepath of the signing key (one or more). */
        signingKeyFile: string;
        /** Byron address (Base58-encoded). */
        address: string;
        /** Use the mainnet magic id. */
        mainnet?: boolean;
        /** Specify a testnet magic id. */
        testnetMagic?: boolean;
        /** Output filepath of the JSON Tx. */
        outFile: string;
    };
    /** Create a transaction witness */
    witness: {
        /** Input filepath of the JSON TxBody. */
        txBodyFile: string;
        /** Filepath of the signing key to be used in witness construction. */
        signingKeyFile: string;
        /** Byron address (Base58-encoded). */
        address: string;
        /** Use the mainnet magic id. */
        mainnet?: boolean;
        /** Specify a testnet magic id. */
        testnetMagic?: boolean;
        /** The output file. */
        outFile: string;
    };
    /** Assemble a tx body and witness(es) to form a transaction */
    assemble: {
        /** Input filepath of the JSON TxBody. */
        txBodyFile: string;
        /** Filepath of the witness */
        witnessFile: string;
        /** The output file. */
        outFile: string;
    };
    /** Submit a transaction to the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    submit: {
        /** For talking to a node running in Shelley-only mode. */
        shelleyMode: string;
        /** For talking to a node running in Byron-only mode. */
        byronMode: string;
        /** The number of slots per epoch for the Byron era. (default: 21600) */
        epochSlots: number;
        /** For talking to a node running in full Cardano mode (default). */
        cardanoMode: string;
        /** Use the mainnet magic id. */
        mainnet?: boolean;
        /** Specify a testnet magic id. */
        testnetMagic?: boolean;
        /** Filepath of the transaction you intend to submit. */
        txFile: string;
    };
    /** Calculate the PolicyId from the monetary policy script. */
    policyid: {
        /** Filepath of the script */
        scriptFile: string;
    };
    /** Calculate the minimum fee for a transaction */
    calculateMinFee: {
        /** Input filepath of the JSON TxBody. */
        txBodyFile: string;
        /** Use the mainnet magic id. */
        mainnet?: boolean;
        /** Specify a testnet magic id. */
        testnetMagic: string;
        /** [TESTING] The genesis file to take initial protocol parameters from. For test clusters only, since the parameters are going to be obsolete for production clusters. */
        genesis: string;
        /** Filepath of the JSON-encoded protocol parameters file */
        protocolParamsFile: string;
        /** The number of transaction inputs. */
        txInCount: string;
        /** The number of transaction outputs. */
        txOutCount: string;
        /** The number of Shelley key witnesses. */
        witnessCount: string;
        /** The number of Byron key witnesses (default is 0). */
        byronWitnessCount: string;
    };
    /** Calculate the minimum value for a transaction */
    calculateMinValue: {
        /** [TESTING] The genesis file to take initial protocol parameters from. For test clusters only, since the parameters are going to be obsolete for production clusters. */
        genesis: string;
        /** Filepath of the JSON-encoded protocol parameters file */
        protocolParamsFile: string;
        /** Multi-asset value(s) with the multi-asset cli syntax */
        multiAsset: string;
    };
    /** Print a transaction identifier */
    txid: {
        /** Input filepath of the JSON TxBody. */
        txBodyFile: string;
        /** Input filepath of the JSON Tx. */
        txFile: string;
    };
    /** Print a transaction */
    view: {
        /** Input filepath of the JSON TxBody. */
        txBodyFile: string;
        /** Input filepath of the JSON Tx. */
        txFile: string;
    };
};
