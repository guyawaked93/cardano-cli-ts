import { BLOCKDATE, CF, OutputFormat } from './common';
export interface Blockchain {
    /** print the content of a block. */
    cat: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** The block hash to open */
        HASH: string
    ], {
        'output-raw': OutputFormat;
    }, {
        /** don't parse the block, flush the bytes direct to the standard output (not subject to `--quiet' option)  */
        'no-parse': boolean;
        /** dump the block in debug format */
        debug: boolean;
    }>;
    /** destroy the given blockchain, deleting all the blocks downloaded from the disk. */
    destroy: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ]>;
    /** Fetch blocks from the remote nodes (optionally specified by the aliases). */
    'remote-fetch': CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** Alias given to a remote node. */
        BLOCKCHAIN_REMOTE_ALIAS: string
    ]>;
    /** List all the remote nodes of the given blockchain */
    'remote-ls': CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ], {}, {
        /** print all local known information regarding the remotes */
        detailed: boolean;
        /** print all local known information regarding the remotes as well as the details from the remote (needs a network connection) */
        complete: boolean;
        /** print only the bare minimum information regarding the remotes (default) */
        short: boolean;
    }>;
    /** Attach a remote node to the local blockchain, this will allow to sync the local blockchain with this remote node. */
    'remote-add': CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** Alias given to a remote node. */
        BLOCKCHAIN_REMOTE_ALIAS: string,
        /** Remote end point (IPv4 or IPv6 address or domain name. May include a port number. And a sub-route point in case of an http endpoint. */
        BLOCKCHAIN_REMOTE_ENDPOINT: string
    ]>;
    /** Remove the given remote node from the local blockchain, we will no longer fetch blocks from this */
    'remote-rm': CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** Alias given to a remote node. */
        BLOCKCHAIN_REMOTE_ALIAS: string
    ]>;
    /** verify the specified block */
    'verify-block': CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** The hash of the block to verify. */
        HASH: string
    ]>;
    /** Forward the local tip to what seems to be the consensus within the remote blocks. This function must be used combined with `remote-fetch'. */
    forward: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** Set the new local tip to the given blockhash, do not try to figure out consensus between the remote nodes. */
        HASH: string
    ]>;
    /** run garbage collection of lose blocks. This function might be a bit slow to run but it will free some disk space. */
    gc: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ]>;
    help: CF<[], undefined, undefined>;
    list: CF<[
    ], {}, {
        /** display some information regarding the remotes */
        detailed: boolean;
    }>;
    log: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string,
        /** The hash to start from (instead of the local blockchain's tip). */
        HASH: string
    ]>;
    new: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ], {
        /** the template for the new blockchain [default: mainnet]  [possible values: mainnet, staging, testnet] */
        template: 'mainnet' | 'staging' | 'testnet';
    }>;
    pull: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ]>;
    query: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ], {
        /** Block date to end at (defaults to the local tip). */
        'end-date': BLOCKDATE;
        /** Block date to start from (defaults to genesis). */
        'start-date': BLOCKDATE;
    }>;
    status: CF<[
        /** the blockchain name */
        BLOCKCHAIN_NAME: string
    ]>;
    verify: CF<[
    ], {}, {
        /** stop at the first error it found */
        w: boolean;
    }>;
}
export declare const blockchain: Blockchain;
