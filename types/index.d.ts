export declare const cardanoCli: (cliPath: string) => {
    address: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./address").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        build: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            paymentVerificationKey: string;
            paymentVerificationKeyFile: string;
            paymentScriptFile: string;
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            stakeScriptFile: string;
            mainnet?: boolean | undefined;
            testnetMagic?: string | undefined;
            outFile?: string | undefined;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        info: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            address: string;
            outFile?: string | undefined;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGen: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            normalKey?: boolean | undefined;
            extendedKey?: boolean | undefined;
            byronKey?: boolean | undefined;
            verificationKeyFile: string;
            signingKeyFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyHash: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            paymentVerificationKey: string;
            paymentVerificationKeyFile: string;
            outFile?: string | undefined;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    genesis: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./genesis").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyHash: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenGenesis: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenDelegate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenUtxo: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        getVerKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        initialAddr: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        initialTxin: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        create: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        createStaked: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        hash: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{}>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    governance: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./governance").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        createMirCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            reserves: string;
            treasury: string;
            stakeAddress: string;
            reward: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        createGenesisKeyDelegationCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        createUpdateProposal: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    key: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./key").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        verificationKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            signingKeyFile: string;
            verificationKeyFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        nonExtendedKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            extendedVerificationKeyFile: string;
            verificationKeyFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertByronKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
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
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertByronGenesisVkey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            byronGenesisVerificationKey: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertItnKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            itnSigningKeyFile: string;
            itnVerificationKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertItnExtendedKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            itnSigningKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertItnBip32Key: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            itnSigningKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        convertCardanoAddressKey: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyPaymentKey: string;
            shelleyStakeKey: string;
            icarusPaymentKey: string;
            byronPaymentKey: string;
            signingKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    node: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./node").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        keyGen: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            coldVerificationKeyFile: string;
            coldSigningKeyFile: string;
            operationalCertificateIssueCounterFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenKes: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            verificationKeyFile: string;
            signingKeyFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGenVrf: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            verificationKeyFile: string;
            signingKeyFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyHashVrf: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            verificationKey: string;
            verificationKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        newCounter: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakePoolVerificationKey: string;
            genesisDelegateVerificationKey: string;
            coldVerificationKeyFile: string;
            counterValue: number;
            operationalCertificateIssueCounterFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        issueOpCert: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            kesVerificationKey: string;
            kesVerificationKeyFile: string;
            coldSigningKeyFile: string;
            operationalCertificateIssueCounterFile: string;
            kesPeriod: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    query: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./query").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        protocolParameters: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        tip: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        stakeDistribution: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        stakeAddressInfo: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            address: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        utxo: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            address: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        ledgerState: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        protocolState: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        stakeSnapshot: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            stakePoolIdStakePoolId: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        poolParams: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: string;
            cardanoMode: string;
            mainnet: string;
            testnetMagic: string;
            stakePoolIdStakePoolId: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    stakeAddress: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./stake-address").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        build: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            mainnet?: boolean | undefined;
            testnetMagic?: string | undefined;
            outFile?: string | undefined;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyGen: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            verificationKeyFile: string;
            signingKeyFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        keyHash: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            outFile?: string | undefined;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        registrationCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        deregistrationCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        delegationCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakeVerificationKey: string;
            stakeVerificationKeyFile: string;
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            stakePoolIdStakePoolId: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    stakePool: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./stake-pool").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        registrationCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            vrfVerificationKey: string;
            vrfVerificationKeyFile: string;
            poolPledge: string;
            poolCost: string;
            poolMargin: string;
            poolRewardAccountVerificationKey: string;
            poolRewardAccountVerificationKeyFile: string;
            poolOwnerVerificationKey: string;
            poolOwnerStakeVerificationKeyFile: string;
            poolRelayIpv4: string;
            poolRelayIpv6: string;
            poolRelayPort: number;
            singleHostPoolRelay: string;
            multiHostPoolRelay: string;
            metadataUrl: string;
            metadataHash: string;
            mainnet: string;
            testnetMagic: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        deregistrationCertificate: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            epoch: number;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        id: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            stakePoolVerificationKey: string;
            coldVerificationKeyFile: string;
            outputFormat: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        metadataHash: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            poolMetadataFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    textView: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./text-view").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        decodeCbor: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            inFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
    transaction: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<import("./transaction").Commands>) | undefined) => {
        command: string;
        run: () => Promise<unknown>;
    } & {
        buildRaw: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
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
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        sign: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            txBodyFile: string;
            signingKeyFile: string;
            address: string;
            mainnet?: boolean | undefined;
            testnetMagic?: boolean | undefined;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        witness: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            txBodyFile: string;
            signingKeyFile: string;
            address: string;
            mainnet?: boolean | undefined;
            testnetMagic?: boolean | undefined;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        assemble: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            txBodyFile: string;
            witnessFile: string;
            outFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        submit: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            shelleyMode: string;
            byronMode: string;
            epochSlots: number;
            cardanoMode: string;
            mainnet?: boolean | undefined;
            testnetMagic?: boolean | undefined;
            txFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        policyid: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            scriptFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        calculateMinFee: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            txBodyFile: string;
            mainnet: string;
            testnetMagic: string;
            genesis: string;
            protocolParamsFile: string;
            txInCount: string;
            txOutCount: string;
            witnessCount: string;
            byronWitnessCount: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        calculateMinValue: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            genesis: string;
            protocolParamsFile: string;
            multiAsset: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        txid: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            txBodyFile: string;
            txFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
        view: (options?: (import("./command").DefaultOptions & import("./command").CommandOptions<{
            txBodyFile: string;
            txFile: string;
        }>) | undefined) => {
            command: string;
            run: () => Promise<any>;
        } & {};
    };
};
export default cardanoCli;
