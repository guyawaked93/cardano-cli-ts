/** Stake address commands */
export type Commands = {
	/** Create a stake address key pair */
	keyGen: {
		/** Output filepath of the verification key. */
		verificationKeyFile: string
		/** Output filepath of the signing key. */
		signingKeyFile: string
	}
	/** Build a stake address */
	build: {
		/** Stake verification key (Bech32 or hex-encoded). */
		stakeVerificationKey: string
		/** Filepath of the staking verification key. */
		stakeVerificationKeyFile: string
		/** Use the mainnet magic id. */
		mainnet?: boolean
		/** Specify a testnet magic id. */
		testnetMagic?: string
		/** Optional output file. Default is to write to stdout. */
		outFile?: string
	}
	/** Print the hash of a stake address key. */
	keyHash: {
		/** Stake verification key (Bech32 or hex-encoded). */
		stakeVerificationKey: string
		/** Filepath of the staking verification key. */
		stakeVerificationKeyFile: string
		/** Optional output file. Default is to write to stdout. */
		outFile?: string
	}
	/** Create a stake address registration certificate */
	registrationCertificate: {
		/** Stake verification key (Bech32 or hex-encoded). */
		stakeVerificationKey: string
		/** Filepath of the staking verification key. */
		stakeVerificationKeyFile: string
		/** The output file. */
		outFile: string
	}
	/** Create a stake address deregistration certificate */
	deregistrationCertificate: {
		/** Stake verification key (Bech32 or hex-encoded). */
		stakeVerificationKey: string
		/** Filepath of the staking verification key. */
		stakeVerificationKeyFile: string
		/** The output file. */
		outFile: string
	}
	/** Create a stake address delegation certificate */
	delegationCertificate: {
		/** Stake verification key (Bech32 or hex-encoded). */
		stakeVerificationKey: string
		/** Filepath of the staking verification key. */
		stakeVerificationKeyFile: string
		/** Stake pool verification key (Bech32 or hex-encoded). */
		stakePoolVerificationKey: string
		/** Filepath of the stake pool verification key. */
		coldVerificationKeyFile: string
		/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
		stakePoolIdStakePoolId: string
		/** The output file. */
		outFile: string
	}
}
