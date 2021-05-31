import { commandFunction } from './command'

export const genesis = {
	/** Create a Shelley genesis key pair */
	'key-gen-genesis': commandFunction('genesis key-gen-genesis'),
	/** Create a Shelley genesis delegate key pair */
	'key-gen-delegate': commandFunction('genesis key-gen-delegate'),
	/** Create a Shelley genesis UTxO key pair */
	'key-gen-utxo': commandFunction('genesis key-gen-utxo'),
	/** Print the identifier (hash) of a public key */
	'key-hash': commandFunction('genesis key-hash'),
	/** Derive the verification key from a signing key */
	'get-ver-key': commandFunction('genesis get-ver-key'),
	/** Get the address for an initial UTxO based on the verification key */
	'initial-addr': commandFunction('genesis initial-addr'),
	/** Get the TxIn for an initial UTxO based on the verification key */
	'initial-txin': commandFunction('genesis initial-txin'),
	/** Create a Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
	create: commandFunction('genesis create'),
	/** Create a staked Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
	'create-staked': commandFunction('genesis create-staked'),
	/** Compute the hash of a genesis file */
	hash: commandFunction('genesis hash'),
}
