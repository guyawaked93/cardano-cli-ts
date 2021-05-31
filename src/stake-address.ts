/** Stake address commands */
import { commandFunction } from './command'

/** Stake address commands */
export const stakeAddress = {
	/** Create a stake address key pair */
	'key-gen': commandFunction<{
		/** Output filepath of the verification key. */
		'--verification-key-file': string
		/** Output filepath of the signing key. */
		'--signing-key-file': string
	}>('stake-address key-gen'),
	/** Build a stake address */
	build: commandFunction<{
		/** Stake verification key (Bech32 or hex-encoded). */
		'--stake-verification-key': string
		/** Filepath of the staking verification key. */
		'--stake-verification-key-file': string
		/** Use the mainnet magic id. */
		'--mainnet'?: boolean
		/** Specify a testnet magic id. */
		'--testnet-magic'?: string
		/** Optional output file. Default is to write to stdout. */
		'--out-file'?: string
	}>('stake-address build'),
	/** Print the hash of a stake address key. */
	'key-hash': commandFunction<{
		/** Stake verification key (Bech32 or hex-encoded). */
		'--stake-verification-key': string
		/** Filepath of the staking verification key. */
		'--stake-verification-key-file': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file'?: string
	}>('stake-address key-hash'),
	/** Create a stake address registration certificate */
	'registration-certificate': commandFunction<{
		/** Stake verification key (Bech32 or hex-encoded). */
		'--stake-verification-key': string
		/** Filepath of the staking verification key. */
		'--stake-verification-key-file': string
		/** The output file. */
		'--out-file': string
	}>('stake-address registration-certificate'),
	/** Create a stake address deregistration certificate */
	'deregistration-certificate': commandFunction<{
		/** Stake verification key (Bech32 or hex-encoded). */
		'--stake-verification-key': string
		/** Filepath of the staking verification key. */
		'--stake-verification-key-file': string
		/** The output file. */
		'--out-file': string
	}>('stake-address deregistration-certificate'),
	/** Create a stake address delegation certificate */
	'delegation-certificate': commandFunction<{
		/** Stake verification key (Bech32 or hex-encoded). */
		'--stake-verification-key': string
		/** Filepath of the staking verification key. */
		'--stake-verification-key-file': string
		/** Stake pool verification key (Bech32 or hex-encoded). */
		'--stake-pool-verification-key': string
		/** Filepath of the stake pool verification key. */
		'--cold-verification-key-file': string
		/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
		'--stake-pool-id STAKE-POOL-ID': string
		/** The output file. */
		'--out-file': string
	}>('stake-address delegation-certificate'),
}
