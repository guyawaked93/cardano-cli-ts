export declare const cardanoCli: (cliPath?: string) => {
    /** Payment address commands */
    address: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./address").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyGen: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            normalKey?: boolean | undefined;
            extendedKey?: boolean | undefined;
            byronKey?: boolean | undefined;
            verificationKeyFile: string;
            signingKeyFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyHash: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            paymentVerificationKey: string;
            paymentVerificationKeyFile: string;
            outFile?: string | undefined;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        build: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            paymentVerificationKey: string;
            paymentVerificationKeyFile: string;
            paymentScriptFile: string;
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            stakeScriptFile: string;
            mainnet?: boolean | undefined;
            testnetMagic?: string | undefined;
            outFile?: string | undefined;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        info: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            address: string;
            outFile?: string | undefined;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Stake address commands */
    stakeAddress: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./stake-address").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyGen: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            verificationKeyFile: string;
            signingKeyFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyHash: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            outFile?: string | undefined;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        build: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            mainnet?: boolean | undefined;
            testnetMagic?: string | undefined;
            outFile?: string | undefined;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        registrationCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        deregistrationCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        delegationCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            stakePoolIdStakePoolId: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Key utility commands */
    key: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./key").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        verificationKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            signingKeyFile: string;
            verificationKeyFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        nonExtendedKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            extendedVerificationKeyFile: string;
            verificationKeyFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertByronKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            password: string;
            byronPaymentKeyType: string;
            legacyByronPaymentKeyType: string;
            byronGenesisKeyType: string;
            legacyByronGenesisKeyType: string;
            byronGenesisDelegateKeyType: string;
            legacyByronGenesisDelegateKeyType: string;
            byronSigningKeyFile: string;
            byronVerificationKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertByronGenesisVkey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            byronGenesisVerificationKey: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertItnKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            itnSigningKeyFile: string;
            itnVerificationKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertItnExtendedKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            itnSigningKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertItnBip32Key: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            itnSigningKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertCardanoAddressKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyPaymentKey: string;
            shelleyStakeKey: string;
            icarusPaymentKey: string;
            byronPaymentKey: string;
            signingKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Transaction commands */
    transaction: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./transaction").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        buildRaw: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            byronEra: string;
            shelleyEra: string;
            allegraEra: string;
            maryEra: string;
            txIn: string;
            txinScriptFile: string;
            txOut: string;
            mint: string;
            mintingScriptFile: string;
            invalidBefore: string;
            invalidHereafter: string;
            fee: string;
            certificateFile: string;
            certificateScriptFile: string;
            withdrawal: string;
            withdrawalScriptFile: string;
            jsonMetadataNoSchema: string;
            jsonMetadataDetailedSchema: string;
            auxiliaryScriptFile: string;
            metadataJsonFile: string;
            metadataCborFile: string;
            updateProposalFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        sign: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            txBodyFile: string;
            signingKeyFile: string;
            address: string;
            mainnet?: boolean | undefined;
            testnetMagic?: boolean | undefined;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        witness: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            txBodyFile: string;
            signingKeyFile: string;
            address: string;
            mainnet?: boolean | undefined;
            testnetMagic?: boolean | undefined;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        assemble: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            txBodyFile: string;
            witnessFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        submit: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: number;
            cardanoMode: string;
            mainnet?: boolean | undefined;
            testnetMagic?: boolean | undefined;
            txFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        policyid: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            scriptFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        calculateMinFee: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            txBodyFile: string;
            mainnet?: boolean | undefined;
            testnetMagic: string;
            genesis: string;
            protocolParamsFile: string;
            txInCount: string;
            txOutCount: string;
            witnessCount: string;
            byronWitnessCount: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        calculateMinValue: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            genesis: string;
            protocolParamsFile: string;
            multiAsset: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        txid: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            txBodyFile: string;
            txFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        view: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            txBodyFile: string;
            txFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Node operation commands */
    node: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./node").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyGen: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            coldVerificationKeyFile: string;
            coldSigningKeyFile: string;
            operationalCertificateIssueCounterFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenKes: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            verificationKeyFile: string;
            signingKeyFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenVrf: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            verificationKeyFile: string;
            signingKeyFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyHashVrf: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            verificationKey: string;
            verificationKeyFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        newCounter: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakePoolVerificationKey: string;
            genesisDelegateVerificationKey: string;
            coldVerificationKeyFile: string;
            counterValue: number;
            operationalCertificateIssueCounterFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        issueOpCert: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            kesVerificationKey: string;
            kesVerificationKeyFile: string;
            coldSigningKeyFile: string;
            operationalCertificateIssueCounterFile: string;
            kesPeriod: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Stake pool commands */
    stakePool: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./stake-pool").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        registrationCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            vrfVerificationKey?: string | undefined;
            vrfVerificationKeyFile: string;
            poolPledge: number;
            poolCost: number;
            poolMargin: number;
            poolRewardAccountVerificationKey: string;
            poolRewardAccountVerificationKeyFile: string;
            poolOwnerVerificationKey: string;
            poolOwnerStakeVerificationKeyFile: string;
            poolRelayIpv4: string;
            poolRelayIpv6?: string | undefined;
            poolRelayPort: number;
            singleHostPoolRelay: string;
            multiHostPoolRelay?: string | undefined;
            metadataUrl: string;
            metadataHash: string;
            mainnet: boolean;
            testnetMagic?: string | undefined;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        deregistrationCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            epoch: number;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        id: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            outputFormat: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        metadataHash: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            poolMetadataFile: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Node query commands. Will query the local node whose
     * Unix domain socket is obtained from the
     * CARDANO_NODE_SOCKET_PATH enviromnent variable.
     */
    query: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./query").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        protocolParameters: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        tip: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        stakeDistribution: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        stakeAddressInfo: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            address: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        utxo: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            address: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        ledgerState: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        protocolState: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        stakeSnapshot: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            stakePoolIdStakePoolId: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        poolParams: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            stakePoolIdStakePoolId: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Commands for dealing with Shelley TextView files.
     * Transactions, addresses etc are stored on disk as
     * TextView files.
     */
    textView: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./text-view").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        decodeCbor: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            inFile: string; /** Payment address commands */
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Genesis block commands */
    genesis: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./genesis").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyHash: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenGenesis: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenDelegate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenUtxo: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        getVerKey: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        initialAddr: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        initialTxin: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        create: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        createStaked: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        hash: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{}, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    /** Governance commands */
    governance: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<import("./governance").Commands, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        createMirCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            reserves: string;
            treasury: string;
            stakeAddress: string;
            reward: string;
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        createGenesisKeyDelegationCertificate: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        createUpdateProposal: (options?: (import("./command").DefaultOptions & Partial<import("./command").MatchingProperties<{
            outFile: string;
        }, string | number | bigint | boolean | symbol | (() => string) | null | undefined>>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
};
export default cardanoCli;
