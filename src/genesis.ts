export type Commands = {
	/** Create a Shelley genesis key pair */
	keyGenGenesis: {}
	/** Create a Shelley genesis delegate key pair */
	keyGenDelegate: {}
	/** Create a Shelley genesis UTxO key pair */
	keyGenUtxo: {}
	/** Print the identifier (hash) of a public key */
	keyHash: {}
	/** Derive the verification key from a signing key */
	getVerKey: {}
	/** Get the address for an initial UTxO based on the verification key */
	initialAddr: {}
	/** Get the TxIn for an initial UTxO based on the verification key */
	initialTxin: {}
	/** Create a Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
	create: {}
	/** Create a staked Shelley genesis file from a genesis template and genesis/delegation/spending keys. */
	createStaked: {}
	/** Compute the hash of a genesis file */
	hash: {}
}
