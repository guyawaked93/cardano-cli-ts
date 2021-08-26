export declare type Commands = {
    /** Create an MIR (Move Instantaneous Rewards) certificate */
    createMirCertificate: {
        /** Use the reserves pot. */
        reserves: string;
        /** Use the treasury pot. */
        treasury: string;
        /** Target stake address (bech32 format). */
        stakeAddress: string;
        /** The reward for the relevant reward account. */
        reward: string;
        /** The output file. */
        outFile: string;
    };
    /** Create a genesis key delegation certificate */
    createGenesisKeyDelegationCertificate: {
        outFile: string;
    };
    /** Create an update proposal */
    createUpdateProposal: {
        outFile: string;
    };
};
