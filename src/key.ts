export type Commands = {
	/** Get a verification key from a signing key. This supports all key types. */
	verificationKey: {
		/** Input filepath of the signing key. */
		signingKeyFile: string
		/** Output filepath of the verification key. */
		verificationKeyFile: string
	}
	/** Get a non-extended verification key from an extended verification key. This supports all extended key types. */
	nonExtendedKey: {
		/** Input filepath of the ed25519-bip32 verification key. */
		extendedVerificationKeyFile: string
		/** Output filepath of the verification key. */
		verificationKeyFile: string
	}
	/** Convert a Byron payment, genesis or genesis delegate key (signing or verification) to a corresponding Shelley-format key. */
	convertByronKey: {
		/** Password for signing key (if applicable). */
		password: string
		/** Use a Byron-era payment key. */
		byronPaymentKeyType: string
		/** Use a Byron-era payment key, in legacy SL format. */
		legacyByronPaymentKeyType: string
		/** Use a Byron-era genesis key. */
		byronGenesisKeyType: string
		/** Use a Byron-era genesis key, in legacy SL format. */
		legacyByronGenesisKeyType: string
		/** Use a Byron-era genesis delegate key. */
		byronGenesisDelegateKeyType: string
		/** Use a Byron-era genesis delegate key, in legacy SL format. */
		legacyByronGenesisDelegateKeyType: string
		/** Input filepath of the Byron-format signing key. */
		byronSigningKeyFile: string
		/** Input filepath of the Byron-format verification key. */
		byronVerificationKeyFile: string
		/** The output file. */
		outFile: string
	}
	/** Convert a Base64-encoded Byron genesis verification key to a Shelley genesis verification key */
	convertByronGenesisVkey: {
		/** Base64 string for the Byron genesis verification key. */
		byronGenesisVerificationKey: string
		/** The output file */
		outFile: string
	}
	/** Convert an Incentivized Testnet (ITN) non-extended (Ed25519) signing or verification key to a corresponding Shelley stake key */
	convertItnKey: {
		/** Filepath of the ITN signing key. */
		itnSigningKeyFile: string
		/** Filepath of the ITN verification key. */
		itnVerificationKeyFile: string
		/** The output file. */
		outFile: string
	}
	/** Convert an Incentivized Testnet (ITN) extended (Ed25519Extended) signing key to a corresponding Shelley stake signing key */
	convertItnExtendedKey: {
		/** Filepath of the ITN signing key. */
		itnSigningKeyFile: string
		/** The output file. */
		outFile: string
	}
	/** Convert an Incentivized Testnet (ITN) BIP32 (Ed25519Bip32) signing key to a corresponding Shelley stake signing key */
	convertItnBip32Key: {
		/** Filepath of the ITN signing key. */
		itnSigningKeyFile: string
		/** The output file. */
		outFile: string
	}
	/** Convert a cardano-address extended signing key to a corresponding Shelley-format key. */
	convertCardanoAddressKey: {
		/** Use a Shelley-era extended payment key. */
		shelleyPaymentKey: string
		/** Use a Shelley-era extended stake key. */
		shelleyStakeKey: string
		/** Use a Byron-era extended payment key formatted in the Icarus style. */
		icarusPaymentKey: string
		/** Use a Byron-era extended payment key formatted in the deprecated Byron style. */
		byronPaymentKey: string
		/** Input filepath of the signing key. */
		signingKeyFile: string
		/** The output file. */
		outFile: string
	}
}
