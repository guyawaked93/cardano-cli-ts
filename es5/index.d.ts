export declare const cardanoCli: {
    /** Payment address commands */
    address: {
        'key-gen': (cliPath: string) => (opts: import("./common").Opts<{
            '--normal-key'?: boolean | undefined;
            '--extended-key'?: boolean | undefined;
            '--byron-key'?: boolean | undefined;
            '--verification-key-file': string;
            '--signing-key-file': string;
        }>) => Promise<unknown>;
        'key-hash': (cliPath: string) => (opts: import("./common").Opts<{
            '--payment-verification-key': string;
            '--payment-verification-key-file': string;
            '--out-file'?: string | undefined;
        }>) => Promise<unknown>;
        build: (cliPath: string) => (opts: import("./common").Opts<{
            '--payment-verification-key': string;
            '--payment-verification-key-file': string;
            '--payment-script-file': string;
            '--stake-verification-key': string;
            '--stake-verification-key-file': string;
            '--stake-script-file': string;
            '--mainnet'?: boolean | undefined;
            '--testnet-magic'?: string | undefined;
            '--out-file'?: string | undefined;
        }>) => Promise<unknown>;
        info: (cliPath: string) => (opts: import("./common").Opts<{
            '--address': string;
            '--out-file'?: string | undefined;
        }>) => Promise<unknown>;
        'build-script': null;
    };
    /** Stake address commands */
    'stake-address': {
        'key-gen': (cliPath: string) => (opts: import("./common").Opts<{
            '--verification-key-file': string;
            '--signing-key-file': string;
        }>) => Promise<unknown>;
        build: (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-verification-key': string; /** Transaction commands */
            '--stake-verification-key-file': string;
            '--mainnet'?: boolean | undefined;
            '--testnet-magic'?: string | undefined;
            '--out-file'?: string | undefined;
        }>) => Promise<unknown>;
        'key-hash': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-verification-key': string;
            '--stake-verification-key-file': string;
            '--out-file'?: string | undefined;
        }>) => Promise<unknown>;
        'registration-certificate': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-verification-key': string;
            '--stake-verification-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'deregistration-certificate': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-verification-key': string;
            '--stake-verification-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'delegation-certificate': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-verification-key': string;
            '--stake-verification-key-file': string;
            '--stake-pool-verification-key': string;
            '--cold-verification-key-file': string;
            '--stake-pool-id STAKE-POOL-ID': string;
            '--out-file': string;
        }>) => Promise<unknown>;
    };
    /** Key utility commands */
    key: {
        'verification-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--signing-key-file': string;
            '--verification-key-file': string;
        }>) => Promise<unknown>;
        'non-extended-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--extended-verification-key-file': string;
            '--verification-key-file': string;
        }>) => Promise<unknown>;
        'convert-byron-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--password': string;
            '--byron-payment-key-type': string;
            '--legacy-byron-payment-key-type': string;
            '--byron-genesis-key-type': string;
            '--legacy-byron-genesis-key-type': string;
            '--byron-genesis-delegate-key-type': string;
            '--legacy-byron-genesis-delegate-key-type': string;
            '--byron-signing-key-file': string;
            '--byron-verification-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'convert-byron-genesis-vkey': (cliPath: string) => (opts: import("./common").Opts<{
            '--byron-genesis-verification-key': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'convert-itn-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--itn-signing-key-file': string;
            '--itn-verification-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'convert-itn-extended-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--itn-signing-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'convert-itn-bip32-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--itn-signing-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'convert-cardano-address-key': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-payment-key': string;
            '--shelley-stake-key': string;
            '--icarus-payment-key': string;
            '--byron-payment-key': string;
            '--signing-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
    };
    /** Transaction commands */
    transaction: {
        'build-raw': (cliPath: string) => (opts: import("./common").Opts<{
            '--byron-era': string;
            '--shelley-era': string;
            '--allegra-era': string;
            '--mary-era': string;
            '--tx-in': string;
            '--txin-script-file': string;
            '--tx-out': string;
            '--mint': string;
            '--minting-script-file': string;
            '--invalid-before': string;
            '--invalid-hereafter': string;
            '--fee': string;
            '--certificate-file': string;
            '--certificate-script-file': string;
            '--withdrawal': string;
            '--withdrawal-script-file': string;
            '--json-metadata-no-schema': string;
            '--json-metadata-detailed-schema': string;
            '--auxiliary-script-file': string;
            '--metadata-json-file': string;
            '--metadata-cbor-file': string;
            '--update-proposal-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        sign: (cliPath: string) => (opts: import("./common").Opts<{
            '--tx-body-file': string;
            '--signing-key-file': string;
            '--address': string;
            '--mainnet'?: boolean | undefined;
            '--testnet-magic'?: boolean | undefined;
            '--out-file': string;
        }>) => Promise<unknown>;
        witness: (cliPath: string) => (opts: import("./common").Opts<{
            '--tx-body-file': string;
            '--signing-key-file': string;
            '--address': string;
            '--mainnet'?: boolean | undefined;
            '--testnet-magic'?: boolean | undefined;
            '--out-file': string;
        }>) => Promise<unknown>;
        assemble: (cliPath: string) => (opts: import("./common").Opts<{
            '--tx-body-file': string;
            '--witness-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        submit: (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': number;
            '--cardano-mode': string;
            '--mainnet'?: boolean | undefined;
            '--testnet-magic'?: boolean | undefined;
            '--tx-file': string;
        }>) => Promise<unknown>;
        policyid: (cliPath: string) => (opts: import("./common").Opts<{
            '--script-file': string;
        }>) => Promise<unknown>;
        'calculate-min-fee': (cliPath: string) => (opts: import("./common").Opts<{
            '--tx-body-file': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--genesis': string;
            '--protocol-params-file': string;
            '--tx-in-count': string;
            '--tx-out-count': string;
            '--witness-count': string;
            '--byron-witness-count': string;
        }>) => Promise<unknown>;
        'calculate-min-value': (cliPath: string) => (opts: import("./common").Opts<{
            '--genesis': string;
            '--protocol-params-file': string;
            '--multi-asset': string;
        }>) => Promise<unknown>;
        txid: (cliPath: string) => (opts: import("./common").Opts<{
            '--tx-body-file': string;
            '--tx-file': string;
        }>) => Promise<unknown>;
        view: (cliPath: string) => (opts: import("./common").Opts<{
            '--tx-body-file': string;
            '--tx-file': string;
        }>) => Promise<unknown>;
    };
    /** Node operation commands */
    node: {
        'key-gen': (cliPath: string) => (opts: import("./common").Opts<{
            '--cold-verification-key-file': string;
            '--cold-signing-key-file': string;
            '--operational-certificate-issue-counter-file': string;
        }>) => Promise<unknown>;
        'key-gen-KES': (cliPath: string) => (opts: import("./common").Opts<{
            '--verification-key-file': string;
            '--signing-key-file': string;
        }>) => Promise<unknown>;
        'key-gen-VRF': (cliPath: string) => (opts: import("./common").Opts<{
            '--verification-key-file': string;
            '--signing-key-file': string;
        }>) => Promise<unknown>;
        'key-hash-VRF': (cliPath: string) => (opts: import("./common").Opts<{
            '--verification-key': string;
            '--verification-key-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'new-counter': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-pool-verification-key': string;
            '--genesis-delegate-verification-key': string;
            '--cold-verification-key-file': string;
            '--counter-value': number;
            '--operational-certificate-issue-counter-file': string;
        }>) => Promise<unknown>;
        'issue-op-cert': (cliPath: string) => (opts: import("./common").Opts<{
            '--kes-verification-key': string;
            '--kes-verification-key-file': string;
            '--cold-signing-key-file': string;
            '--operational-certificate-issue-counter-file': string;
            '--kes-period': string;
            '--out-file': string;
        }>) => Promise<unknown>;
    };
    /** Stake pool commands */
    'stake-pool': {
        'registration-certificate': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-pool-verification-key': string;
            '--cold-verification-key-file': string;
            '--vrf-verification-key': string;
            '--vrf-verification-key-file': string;
            '--pool-pledge': string;
            '--pool-cost': string;
            '--pool-margin': string;
            '--pool-reward-account-verification-key': string; /** Genesis block commands */
            '--pool-reward-account-verification-key-file': string;
            '--pool-owner-verification-key': string;
            '--pool-owner-stake-verification-key-file': string;
            '--pool-relay-ipv4': string;
            '--pool-relay-ipv6': string;
            '--pool-relay-port': number;
            '--single-host-pool-relay': string;
            '--multi-host-pool-relay': string;
            '--metadata-url': string;
            '--metadata-hash': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'deregistration-certificate': (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-pool-verification-key': string;
            '--cold-verification-key-file': string;
            '--epoch': number;
            '--out-file': string;
        }>) => Promise<unknown>;
        id: (cliPath: string) => (opts: import("./common").Opts<{
            '--stake-pool-verification-key': string;
            '--cold-verification-key-file': string;
            '--output-format': string;
        }>) => Promise<unknown>;
        'metadata-hash': (cliPath: string) => (opts: import("./common").Opts<{
            '--pool-metadata-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
    };
    /** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
    query: {
        'protocol-parameters': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            /** Node operation commands */
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        tip: (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'stake-distribution': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'stake-address-info': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--address': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        utxo: (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--address': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'ledger-state': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'protocol-state': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--out-file': string;
        }>) => Promise<unknown>;
        'stake-snapshot': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--stake-pool-id STAKE-POOL-ID': string;
        }>) => Promise<unknown>;
        'pool-params': (cliPath: string) => (opts: import("./common").Opts<{
            '--shelley-mode': string;
            '--byron-mode': string;
            '--epoch-slots': string;
            '--cardano-mode': string;
            '--mainnet': string;
            '--testnet-magic': string;
            '--stake-pool-id STAKE-POOL-ID': string;
        }>) => Promise<unknown>;
    };
    /** Genesis block commands */
    genesis: {
        'key-gen-genesis': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'key-gen-delegate': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'key-gen-utxo': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'key-hash': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'get-ver-key': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'initial-addr': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'initial-txin': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        create: (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'create-staked': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        hash: (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    };
    /** Governance commands */
    governance: {
        'create-mir-certificate': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'create-genesis-key-delegation-certificate': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
        'create-update-proposal': (cliPath: string) => (opts: import("./common").Opts<Record<string, string | number | boolean>>) => Promise<unknown>;
    };
    /** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
    'text-view': {
        'decode-cbor': (cliPath: string) => (opts: import("./common").Opts<{
            '--in-file': string;
            '--out-file': string;
        }>) => Promise<unknown>;
    };
};
export declare type CardanoCli = typeof cardanoCli;
export declare type UseCliPath = {
    [CMD in keyof CardanoCli]: {
        [SUB in keyof CardanoCli[CMD]]: CardanoCli[CMD][SUB] extends (...args: any) => any ? ReturnType<CardanoCli[CMD][SUB]> : null;
    };
};
export declare const useCliPath: (path: string) => UseCliPath;
declare const _default: UseCliPath;
export default _default;
