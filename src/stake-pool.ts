export type Commands = {
	/** Create a stake pool registration certificate */
	registrationCertificate: {
		/** Stake pool verification key (Bech32 or hex-encoded). */
		stakePoolVerificationKey: string
		/** Filepath of the stake pool verification key. */
		coldVerificationKeyFile: string
		/** verification key (Bech32 or hex-encoded). */
		vrfVerificationKey: string
		/** Filepath of the VRF verification key. */
		vrfVerificationKeyFile: string
		/** The stake pool's pledge. */
		poolPledge: string
		/** The stake pool's cost. */
		poolCost: string
		/** The stake pool's margin. */
		poolMargin: string
		/** Reward account stake verification key (Bech32 or hex-encoded). */
		poolRewardAccountVerificationKey: string
		/** Filepath of the reward account stake verification key. */
		poolRewardAccountVerificationKeyFile: string
		/** Pool owner stake verification key (Bech32 or hex-encoded). */
		poolOwnerVerificationKey: string
		/** Filepath of the pool owner stake verification key. */
		poolOwnerStakeVerificationKeyFile: string
		/** The stake pool relay's IPv4 address */
		poolRelayIpv4: string
		/** The stake pool relay's IPv6 address */
		poolRelayIpv6: string
		/** The stake pool relay's port */
		poolRelayPort: number
		/** The stake pool relay's DNS name that corresponds to an A or AAAA DNS record */
		singleHostPoolRelay: string
		/** The stake pool relay's DNS name that corresponds to an SRV DNS record */
		multiHostPoolRelay: string
		/** Pool metadata URL (maximum length of 64 characters). */
		metadataUrl: string
		/** Pool metadata hash. */
		metadataHash: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** The output file. */
		outFile: string
	}
	/** Create a stake pool deregistration certificate */
	deregistrationCertificate: {
		/** Stake pool verification key (Bech32 or hex-encoded). */
		stakePoolVerificationKey: string
		/** Filepath of the stake pool verification key. */
		coldVerificationKeyFile: string
		/** The epoch number. */
		epoch: number
		/** The output file. */
		outFile: string
	}
	/** Build pool id from the offline key */
	id: {
		/** Stake pool verification key (Bech32 or hex-encoded). */
		stakePoolVerificationKey: string
		/** Filepath of the stake pool verification key. */
		coldVerificationKeyFile: string
		/** Optional output format. Accepted output formats are "hex" and "bech32" (default is "bech32"). */
		outputFormat: string
	}
	/** Print the hash of pool metadata. */
	metadataHash: {
		/** Filepath of the pool metadata. */
		poolMetadataFile: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
}
