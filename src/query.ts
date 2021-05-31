import { commandFunction } from './command'

export const query = {
	/** Get the node's current protocol parameters */
	'protocol-parameters': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query protocol-parameters'),
	/** Get the node's current tip (slot no, hash, block no) */
	tip: commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query tip'),
	/** Get the node's current aggregated stake distribution */
	'stake-distribution': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query stake-distribution'),
	/** Get the current delegations and reward accounts filtered by stake address. */
	'stake-address-info': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Filter by Cardano stake address (Bech32-encoded). */
		'--address': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query stake-address-info'),
	/** Get the node's current UTxO with the option of filtering by address(es) */
	utxo: commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Filter by Cardano address(es) (Bech32-encoded). */
		'--address': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query utxo'),
	/** Dump the current ledger state of the node (Ledger.NewEpochState -- advanced command) */
	'ledger-state': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query ledger-state'),
	/** Dump the current protocol state of the node (Ledger.ChainDepState -- advanced command) */
	'protocol-state': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('query protocol-state'),
	/** Obtain the three stake snapshots for a pool, plus the total active stake (advanced command) */
	'stake-snapshot': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
		'--stake-pool-id STAKE-POOL-ID': string
	}>('query stake-snapshot'),
	/** Dump the pool parameters (Ledger.NewEpochState.esLState._delegationState._pState._pParams -- advanced command) */
	'pool-params': commandFunction<{
		/** For talking to a node running in Shelley-only mode. */
		'--shelley-mode': string
		/** For talking to a node running in Byron-only mode. */
		'--byron-mode': string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		'--epoch-slots': string
		/** For talking to a node running in full Cardano mode (default). */
		'--cardano-mode': string
		/** Use the mainnet magic id. */
		'--mainnet': string
		/** Specify a testnet magic id. */
		'--testnet-magic': string
		/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
		'--stake-pool-id STAKE-POOL-ID': string
	}>('query pool-params'),
}
