export declare type Commands = {
    /** Print a TextView file as decoded CBOR. */
    decodeCbor: {
        /** CBOR input file. */
        inFile: string;
        /** Optional output file. Default is to write to stdout. */
        outFile: string;
    };
};
