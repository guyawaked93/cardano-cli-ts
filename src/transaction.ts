import { commandFunction } from './command'

export const transaction = {
	/** Build a transaction (low-level, inconvenient) */
	'build-raw': commandFunction<{
		/** Specify the Byron era */
		'--byron-era': string
		/** Specify the Shelley era */
		'--shelley-era': string
		/** Specify the Allegra era */
		'--allegra-era': string
		/** Specify the Mary era (default) */
		'--mary-era': string
		/** TxId#TxIx */
		'--tx-in': string
		/** Filepath of the spending script witness */
		'--txin-script-file': string
		/** The transaction output as Address+Lovelace where Address is the Bech32-encoded address followed by the amount in Lovelace. */
		'--tx-out': string
		/** Mint multi-asset value(s) with the multi-asset cli syntax. You must specifiy a script witness. */
		'--mint': string
		/** Filepath of the multi-asset witness script. */
		'--minting-script-file': string
		/** Time that transaction is valid from (in slots). */
		'--invalid-before': string
		/** Time that transaction is valid until (in slots). */
		'--invalid-hereafter': string
		/** The fee amount in Lovelace. */
		'--fee': string
		/** Filepath of the certificate. This encompasses all types of certificates (stake pool certificates, stake key certificates etc). Optionally specify a script witness. */
		'--certificate-file': string
		/** Filepath of the certificate script witness */
		'--certificate-script-file': string
		/** The reward withdrawal as StakeAddress+Lovelace where StakeAddress is the Bech32-encoded stake address followed by the amount in Lovelace. Optionally specify a script witness. */
		'--withdrawal': string
		/** Filepath of the withdrawal script witness. */
		'--withdrawal-script-file': string
		/** Use the "no schema" conversion from JSON to tx metadata. */
		'--json-metadata-no-schema': string
		/** Use the "detailed schema" conversion from JSON to tx metadata. */
		'--json-metadata-detailed-schema': string
		/** Filepath of auxiliary script(s) */
		'--auxiliary-script-file': string
		/** Filepath of the metadata file, in JSON format. */
		'--metadata-json-file': string
		/** Filepath of the metadata, in raw CBOR format. */
		'--metadata-cbor-file': string
		/** Filepath of the update proposal. */
		'--update-proposal-file': string
		/** Output filepath of the JSON TxBody. */
		'--out-file': string
	}>('transaction build-raw'),
	/** Sign a transaction */
	sign: commandFunction<{
		/** Input filepath of the JSON TxBody. */
		'--tx-body-file': string
		/** Input filepath of the signing key (one or more). */
		'--signing-key-file': string
		/** Byron address (Base58-encoded). */
		'--address': string
		/** Use the mainnet magic id. */
		'--mainnet'?: boolean
		/** Specify a testnet magic id. */
		'--testnet-magic'?: boolean
		/** Output filepath of the JSON Tx. */
		'--out-file': string
	}>('transaction sign'),
	/** Create a transaction witness */
	witness: commandFunction<{
		/** Input filepath of the JSON TxBody. */
		'--tx-body-file': string
		/** Filepath of the signing key to be used in witness construction. */
		'--signing-key-file': string
		/** Byron address (Base58-encoded). */
		'--address': string
		/** Use the mainnet magic id. */
		'--mainnet'?: boolean
		/** Specify a testnet magic id. */
		'--testnet-magic'?: boolean
		/** The output file. */
		'--out-file': string
	}>('transaction witness'),
	/** Assemble a tx body and witness(es) to form a transaction */
	assemble: commandFunction<{
		/** Input filepath of the JSON TxBody. */
		'--tx-body-file': string
		/** Filepath of the witness */
		'--witness-file': string
		/** The output file. */
		'--out-file': string
	}>('transaction assemble'),
	/** Submit a transaction to the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
	submit: commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': number
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet'?: boolean
		/** Specify a testnet magic id. */
		'--testnet-magic'?: boolean
		/** Filepath of the transaction you intend to submit. */
		'--tx-file': string
	}>('transaction submit'),
	/** Calculate the PolicyId from the monetary policy script. */
	policyid: commandFunction<{
		/** Filepath of the script */
		'--script-file': string
	}>('transaction policyid'),
	/** Calculate the minimum fee for a transaction */
	'calculate-min-fee': commandFunction<{
		/** Input filepath of the JSON TxBody. */
		'--tx-body-file': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** [TESTING] The genesis file to take initial protocol parameters from. For test clusters only, since the parameters are going to be obsolete for production clusters. */
		'--genesis': string
		/** Filepath of the JSON-encoded protocol parameters file */
		'--protocol-params-file': string
		/** The number of transaction inputs. */
		'--tx-in-count': string
		/** The number of transaction outputs. */
		'--tx-out-count': string
		/** The number of Shelley key witnesses. */
		'--witness-count': string
		/** The number of Byron key witnesses (default is 0). */
		'--byron-witness-count': string
	}>('transaction calculate-min-fee'),
	/** Calculate the minimum value for a transaction */
	'calculate-min-value': commandFunction<{
		/** [TESTING] The genesis file to take initial protocol parameters from. For test clusters only, since the parameters are going to be obsolete for production clusters. */
		'--genesis': string
		/** Filepath of the JSON-encoded protocol parameters file */
		'--protocol-params-file': string
		/** Multi-asset value(s) with the multi-asset cli syntax */
		'--multi-asset': string
	}>('transaction calculate-min-value'),
	/** Print a transaction identifier */
	txid: commandFunction<{
		/** Input filepath of the JSON TxBody. */
		'--tx-body-file': string
		/** Input filepath of the JSON Tx. */
		'--tx-file': string
	}>('transaction txid'),
	/** Print a transaction */
	view: commandFunction<{
		/** Input filepath of the JSON TxBody. */
		'--tx-body-file': string
		/** Input filepath of the JSON Tx. */
		'--tx-file': string
	}>('transaction view'),
}
