/** Node operation commands */
import { commandFunction } from './command'

/** Node operation commands */
export const node = {
	/** Create a key pair for a node operator's offline key and a new certificate issue counter */
	'key-gen': commandFunction<{
		/** Filepath of the cold verification key. */
		'--cold-verification-key-file': string
		/** Filepath of the cold signing key. */
		'--cold-signing-key-file': string
		/** The file with the issue counter for the operational certificate. */
		'--operational-certificate-issue-counter-file': string
	}>('node key-gen'),
	/** Create a key pair for a node KES operational key */
	'key-gen-KES': commandFunction<{
		/** Output filepath of the verification key. */
		'--verification-key-file': string
		/** Output filepath of the signing key. */
		'--signing-key-file': string
	}>('node key-gen-KES'),
	/** Create a key pair for a node VRF operational key */
	'key-gen-VRF': commandFunction<{
		/** Output filepath of the verification key. */
		'--verification-key-file': string
		/** Output filepath of the signing key. */
		'--signing-key-file': string
	}>('node key-gen-VRF'),
	/** Print hash of a node's operational VRF key. */
	'key-hash-VRF': commandFunction<{
		/** Verification key (Bech32 or hex-encoded). */
		'--verification-key': string
		/** Input filepath of the verification key. */
		'--verification-key-file': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('node key-hash-VRF'),
	/** Create a new certificate issue counter */
	'new-counter': commandFunction<{
		/** Stake pool verification key (Bech32 or hex-encoded). */
		'--stake-pool-verification-key': string
		/** Genesis delegate verification key (hex-encoded). */
		'--genesis-delegate-verification-key': string
		/** Filepath of the cold verification key. */
		'--cold-verification-key-file': string
		/** The next certificate issue counter value to use. */
		'--counter-value': number
		/** The file with the issue counter for the operational certificate. */
		'--operational-certificate-issue-counter-file': string
	}>('node new-counter'),
	/** Issue a node operational certificate */
	'issue-op-cert': commandFunction<{
		/** A Bech32 or hex-encoded hot KES verification key. */
		'--kes-verification-key': string
		/** Filepath of the hot KES verification key. */
		'--kes-verification-key-file': string
		/** Filepath of the cold signing key. */
		'--cold-signing-key-file': string
		/** The file with the issue counter for the operational certificate. */
		'--operational-certificate-issue-counter-file': string
		/** The start of the KES key validity period. */
		'--kes-period': string
		/** The output file */
		'--out-file': string
	}>('node issue-op-cert'),
}
