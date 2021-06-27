/** Payment address commands */
export type Commands = {
	/** Create an address key pair. */
	keyGen: {
		/** Use a normal Shelley-era key (default). */
		normalKey?: boolean
		/** Use an extended ed25519 Shelley-era key. */
		extendedKey?: boolean
		/** Use a Byron-era key. */
		byronKey?: boolean
		/** Output filepath of the verification key. */
		verificationKeyFile: string
		/** Output filepath of the signing key. */
		signingKeyFile: string
	}
	/** Print the hash of an address key. */
	keyHash: {
		/** STRING Payment verification key (Bech32-encoded) */
		paymentVerificationKey: string
		/** Filepath of the payment verification key. */
		paymentVerificationKeyFile: string
		/** Optional output file. Default is to write to stdout. */
		outFile?: string
	}

	/** Build a Shelley payment address, with optional delegation to a stake address. */
	build: {
		/** Payment verification key (Bech32-encoded) */
		paymentVerificationKey: string
		/** Filepath of the payment verification key. */
		paymentVerificationKeyFile: string
		/** Filepath of the payment script. */
		paymentScriptFile: string
		/** Stake verification key (Bech32 or hex-encoded). */
		stakeVerificationKey: string
		/** Filepath of the staking verification key. */
		stakeVerificationKeyFile: string
		/** Filepath of the staking script. */
		stakeScriptFile: string
		/** Use the mainnet magic id. */
		mainnet?: boolean
		/** Specify a testnet magic id. */
		testnetMagic?: string
		/** Optional output file. Default is to write to stdout. */
		outFile?: string
	}
	/** Print information about an address. */
	info: {
		/** A Cardano address */
		address: string
		/** Optional output file. Default is to write to stdout. */
		outFile?: string
	}
}
