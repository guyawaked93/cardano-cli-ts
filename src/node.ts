/** Node operation commands */
export type Commands = {
	/** Create a key pair for a node operator's offline key and a new certificate issue counter */
	keyGen: {
		/** Filepath of the cold verification key. */
		coldVerificationKeyFile: string
		/** Filepath of the cold signing key. */
		coldSigningKeyFile: string
		/** The file with the issue counter for the operational certificate. */
		operationalCertificateIssueCounterFile: string
	}
	/** Create a key pair for a node KES operational key */
	keyGenKes: {
		/** Output filepath of the verification key. */
		verificationKeyFile: string
		/** Output filepath of the signing key. */
		signingKeyFile: string
	}
	/** Create a key pair for a node VRF operational key */
	keyGenVrf: {
		/** Output filepath of the verification key. */
		verificationKeyFile: string
		/** Output filepath of the signing key. */
		signingKeyFile: string
	}
	/** Print hash of a node's operational VRF key. */
	keyHashVrf: {
		/** Verification key (Bech32 or hex-encoded). */
		verificationKey: string
		/** Input filepath of the verification key. */
		verificationKeyFile: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Create a new certificate issue counter */
	newCounter: {
		/** Stake pool verification key (Bech32 or hex-encoded). */
		stakePoolVerificationKey: string
		/** Genesis delegate verification key (hex-encoded). */
		genesisDelegateVerificationKey: string
		/** Filepath of the cold verification key. */
		coldVerificationKeyFile: string
		/** The next certificate issue counter value to use. */
		counterValue: number
		/** The file with the issue counter for the operational certificate. */
		operationalCertificateIssueCounterFile: string
	}
	/** Issue a node operational certificate */
	issueOpCert: {
		/** A Bech32 or hex-encoded hot KES verification key. */
		kesVerificationKey: string
		/** Filepath of the hot KES verification key. */
		kesVerificationKeyFile: string
		/** Filepath of the cold signing key. */
		coldSigningKeyFile: string
		/** The file with the issue counter for the operational certificate. */
		operationalCertificateIssueCounterFile: string
		/** The start of the KES key validity period. */
		kesPeriod: string
		/** The output file */
		outFile: string
	}
}
