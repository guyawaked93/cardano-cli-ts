export type Commands = {
	/** Get the node's current protocol parameters */
	protocolParameters: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Get the node's current tip (slot no, hash, block no) */
	tip: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Get the node's current aggregated stake distribution */
	stakeDistribution: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Get the current delegations and reward accounts filtered by stake address. */
	stakeAddressInfo: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Filter by Cardano stake address (Bech32-encoded). */
		address: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Get the node's current UTxO with the option of filtering by address(es) */
	utxo: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Filter by Cardano address(es) (Bech32-encoded). */
		address: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Dump the current ledger state of the node (Ledger.NewEpochState advancedCommand) */
	ledgerState: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Dump the current protocol state of the node (Ledger.ChainDepState advancedCommand) */
	protocolState: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Optional output file. Default is to write to stdout. */
		outFile: string
	}
	/** Obtain the three stake snapshots for a pool, plus the total active stake (advanced command) */
	stakeSnapshot: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
		stakePoolIdStakePoolId: string
	}
	/** Dump the pool parameters (Ledger.NewEpochState.esLState._delegationState._pState._pParams advancedCommand) */
	poolParams: {
		/** For talking to a node running in Shelley-only mode. */
		shelleyMode: string
		/** For talking to a node running in Byron-only mode. */
		byronMode: string
		/** The number of slots per epoch for the Byron era. (default: 21600) */
		epochSlots: string
		/** For talking to a node running in full Cardano mode (default). */
		cardanoMode: string
		/** Use the mainnet magic id. */
		mainnet: string
		/** Specify a testnet magic id. */
		testnetMagic: string
		/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
		stakePoolIdStakePoolId: string
	}
}
