import { commandFunction } from './command'

export const stakePool = {
	/** Create a stake pool registration certificate */
	'registration-certificate': commandFunction<{
		/** Stake pool verification key (Bech32 or hex-encoded). */
		'--stake-pool-verification-key': string
		/** Filepath of the stake pool verification key. */
		'--cold-verification-key-file': string
		/** verification key (Bech32 or hex-encoded). */
		'--vrf-verification-key': string
		/** Filepath of the VRF verification key. */
		'--vrf-verification-key-file': string
		/** The stake pool's pledge. */
		'--pool-pledge': string
		/** The stake pool's cost. */
		'--pool-cost': string
		/** The stake pool's margin. */
		'--pool-margin': string
		/** Reward account stake verification key (Bech32 or hex-encoded). */
		'--pool-reward-account-verification-key': string
		/** Filepath of the reward account stake verification key. */
		'--pool-reward-account-verification-key-file': string
		/** Pool owner stake verification key (Bech32 or hex-encoded). */
		'--pool-owner-verification-key': string
		/** Filepath of the pool owner stake verification key. */
		'--pool-owner-stake-verification-key-file': string
		/** The stake pool relay's IPv4 address */
		'--pool-relay-ipv4': string
		/** The stake pool relay's IPv6 address */
		'--pool-relay-ipv6': string
		/** The stake pool relay's port */
		'--pool-relay-port': number
		/** The stake pool relay's DNS name that corresponds to an A or AAAA DNS record */
		'--single-host-pool-relay': string
		/** The stake pool relay's DNS name that corresponds to an SRV DNS record */
		'--multi-host-pool-relay': string
		/** Pool metadata URL (maximum length of 64 characters). */
		'--metadata-url': string
		/** Pool metadata hash. */
		'--metadata-hash': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** The output file. */
		'--out-file': string
	}>('stake-pool registration-certificate'),
	/** Create a stake pool deregistration certificate */
	'deregistration-certificate': commandFunction<{
		/** Stake pool verification key (Bech32 or hex-encoded). */
		'--stake-pool-verification-key': string
		/** Filepath of the stake pool verification key. */
		'--cold-verification-key-file': string
		/** The epoch number. */
		'--epoch': number
		/** The output file. */
		'--out-file': string
	}>('stake-pool deregistration-certificate'),
	/** Build pool id from the offline key */
	id: commandFunction<{
		/** Stake pool verification key (Bech32 or hex-encoded). */
		'--stake-pool-verification-key': string
		/** Filepath of the stake pool verification key. */
		'--cold-verification-key-file': string
		/** Optional output format. Accepted output formats are "hex" and "bech32" (default is "bech32"). */
		'--output-format': string
	}>('stake-pool id'),
	/** Print the hash of pool metadata. */
	'metadata-hash': commandFunction<{
		/** Filepath of the pool metadata. */
		'--pool-metadata-file': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('stake-pool metadata-hash'),
}
