export declare const textView: {
    /** Print a TextView file as decoded CBOR. */
    'decode-cbor': (cliPath: string) => (opts: import("./common").Opts<{
        /** CBOR input file. */
        '--in-file': string;
        /** Optional output file. Default is to write to stdout. */
        '--out-file': string;
    }>) => Promise<unknown>;
};
