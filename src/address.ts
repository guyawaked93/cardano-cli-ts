/** Payment address commands */
import { commandFunction } from './command'

/** Payment address commands */
export const address = {
	/** Create an address key pair. */
	'key-gen': commandFunction<{
		/** Use a normal Shelley-era key (default). */
		'--normal-key'?: boolean
		/** Use an extended ed25519 Shelley-era key. */
		'--extended-key'?: boolean
		/** Use a Byron-era key. */
		'--byron-key'?: boolean
		/** Output filepath of the verification key. */
		'--verification-key-file': string
		/** Output filepath of the signing key. */
		'--signing-key-file': string
	}>('address key-gen'),
	/** Print the hash of an address key. */
	'key-hash': commandFunction<{
		/** STRING Payment verification key (Bech32-encoded) */
		'--payment-verification-key': string
		/** Filepath of the payment verification key. */
		'--payment-verification-key-file': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file'?: string
	}>('address key-hash'),

	/** Build a Shelley payment address, with optional delegation to a stake address. */
	build: commandFunction<{
		/** Payment verification key (Bech32-encoded) */
		'--payment-verification-key': string
		/** Filepath of the payment verification key. */
		'--payment-verification-key-file': string
		/** Filepath of the payment script. */
		'--payment-script-file': string
		/** Stake verification key (Bech32 or hex-encoded). */
		'--stake-verification-key': string
		/** Filepath of the staking verification key. */
		'--stake-verification-key-file': string
		/** Filepath of the staking script. */
		'--stake-script-file': string
		/** Use the mainnet magic id. */
		'--mainnet'?: boolean
		/** Specify a testnet magic id. */
		'--testnet-magic'?: string
		/** Optional output file. Default is to write to stdout. */
		'--out-file'?: string
	}>('address build'),
	/** Print information about an address. */
	info: commandFunction<{
		/** A Cardano address */
		'--address': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file'?: string
	}>('address info'),

	/** Build a Shelley script address. (deprecated; use 'build' instead with '--payment-script-file') */
	'build-script': null,
}
