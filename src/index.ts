type DefaultOptions = {
	'--help'?: boolean
	'-h'?: boolean
}
type Opts<T extends Record<string, string | boolean | number>> = DefaultOptions & T

const cardanoCLI = {
	/** Payment address commands */
	address : {
		/** Create an address key pair. */
		'key-gen' : (
			opts: Opts<{
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
			}>
		) => {},
		/** Print the hash of an address key. */
		'key-hash' : (
			opts: Opts<{
				/** STRING Payment verification key (Bech32-encoded) */
				'--payment-verification-key': string
				/** Filepath of the payment verification key. */
				'--payment-verification-key-file': string
				/** Optional output file. Default is to write to stdout. */
				'--out-file'?: string
			}>
		) => {},
		/** Build a Shelley payment address, with optional delegation to a stake address. */
		build : ( opts : Opts<{
			/** Payment verification key (Bech32-encoded) */
			'--payment-verification-key' : string
			/** Filepath of the payment verification key. */
			'--payment-verification-key-file' : string
			/** Filepath of the payment script. */
			'--payment-script-file' : string
			/** Stake verification key (Bech32 or hex-encoded). */
			'--stake-verification-key' : string
			/** Filepath of the staking verification key. */
			'--stake-verification-key-file' : string
			/** Filepath of the staking script. */
			'--stake-script-file' : string
			/** Use the mainnet magic id. */
			'--mainnet' ?: boolean
			/** Specify a testnet magic id. */
			'--testnet-magic' ?: string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' ?: string
		}> ) => {},
		/** Build a Shelley script address. (deprecated; use 'build' instead with '--payment-script-file') */
		'build-script' : null,
		/** Print information about an address. */
		info : ( opts : Opts<{
			/** A Cardano address */
			'--address' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' ?: string
		}> ) => {}
	},

	/** Stake address commands */
	'stake-address' : {
		/** Create a stake address key pair */
		'key-gen' : ( opts : Opts<{
			/** Output filepath of the verification key. */
			'--verification-key-file' : string,
			/** Output filepath of the signing key. */
			'--signing-key-file' : string,
		}> ) => {},
		/** Build a stake address */
		'build' : ( opts : Opts<{
			/** Stake verification key (Bech32 or hex-encoded). */
			'--stake-verification-key' : string
			/** Filepath of the staking verification key. */
			'--stake-verification-key-file' : string
			/** Use the mainnet magic id. */
			'--mainnet' ?: boolean
			/** Specify a testnet magic id. */
			'--testnet-magic' ?: string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' ?: string
		}> ) => {},
		/** Print the hash of a stake address key. */
		'key-hash' : ( opts : Opts<{
			/** Stake verification key (Bech32 or hex-encoded). */
			'--stake-verification-key': string
			/** Filepath of the staking verification key. */
			'--stake-verification-key-file': string
			/** Optional output file. Default is to write to stdout. */
			'--out-file'?: string
		}> ) => {},
		/** Create a stake address registration certificate */
		'registration-certificate' : ( opts : Opts<{
			/** Stake verification key (Bech32 or hex-encoded). */
			'--stake-verification-key' : string
			/** Filepath of the staking verification key. */
			'--stake-verification-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Create a stake address deregistration certificate */
		'deregistration-certificate' : ( opts : Opts<{
			/** Stake verification key (Bech32 or hex-encoded). */
			'--stake-verification-key' : string
			/** Filepath of the staking verification key. */
			'--stake-verification-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Create a stake address delegation certificate */
		'delegation-certificate' : ( opts : Opts<{
			/** Stake verification key (Bech32 or hex-encoded). */
			'--stake-verification-key' : string
			/** Filepath of the staking verification key. */
			'--stake-verification-key-file' : string
			/** Stake pool verification key (Bech32 or hex-encoded). */
			'--stake-pool-verification-key' : string
			/** Filepath of the stake pool verification key. */
			'--cold-verification-key-file' : string
			/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
			'--stake-pool-id STAKE-POOL-ID' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
	},

	/** Key utility commands */
	key : {
		/** Get a verification key from a signing key. This supports all key types. */
		'verification-key' : ( opts : Opts<{
			/** Input filepath of the signing key. */
			'--signing-key-file' : string
			/** Output filepath of the verification key. */
			'--verification-key-file' : string
		}> ) => {},
		/** Get a non-extended verification key from an extended verification key. This supports all extended key types. */
		'non-extended-key' : ( opts : Opts<{
			/** Input filepath of the ed25519-bip32 verification key. */
			'--extended-verification-key-file' : string
			/** Output filepath of the verification key. */
			'--verification-key-file' : string
		}> ) => {},
		/** Convert a Byron payment, genesis or genesis delegate key (signing or verification) to a corresponding Shelley-format key. */
		'convert-byron-key' : ( opts : Opts<{
			/** Password for signing key (if applicable). */
			'--password' : string
			/** Use a Byron-era payment key. */
			'--byron-payment-key-type' : string
			/** Use a Byron-era payment key, in legacy SL format. */
			'--legacy-byron-payment-key-type' : string
			/** Use a Byron-era genesis key. */
			'--byron-genesis-key-type' : string
			/** Use a Byron-era genesis key, in legacy SL format. */
			'--legacy-byron-genesis-key-type' : string
			/** Use a Byron-era genesis delegate key. */
			'--byron-genesis-delegate-key-type' : string
			/** Use a Byron-era genesis delegate key, in legacy SL format. */
			'--legacy-byron-genesis-delegate-key-type' : string
			/** Input filepath of the Byron-format signing key. */
			'--byron-signing-key-file' : string
			/** Input filepath of the Byron-format verification key. */
			'--byron-verification-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Convert a Base64-encoded Byron genesis verification key to a Shelley genesis verification key */
		'convert-byron-genesis-vkey' : ( opts : Opts<{
			/** Base64 string for the Byron genesis verification key. */
			'--byron-genesis-verification-key' : string
			/** The output file */
			'--out-file' : string
		}> ) => {},
		/** Convert an Incentivized Testnet (ITN) non-extended (Ed25519) signing or verification key to a corresponding Shelley stake key */
		'convert-itn-key' : ( opts : Opts<{
			/** Filepath of the ITN signing key. */
			'--itn-signing-key-file' : string
			/** Filepath of the ITN verification key. */
			'--itn-verification-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Convert an Incentivized Testnet (ITN) extended (Ed25519Extended) signing key to a corresponding Shelley stake signing key */
		'convert-itn-extended-key' : ( opts : Opts<{
			/** Filepath of the ITN signing key. */
			'--itn-signing-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Convert an Incentivized Testnet (ITN) BIP32 (Ed25519Bip32) signing key to a corresponding Shelley stake signing key */
		'convert-itn-bip32-key' : ( opts : Opts<{
			/** Filepath of the ITN signing key. */
			'--itn-signing-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Convert a cardano-address extended signing key to a corresponding Shelley-format key. */
		'convert-cardano-address-key' : ( opts : Opts<{
			/** Use a Shelley-era extended payment key. */
			'--shelley-payment-key' : string
			/** Use a Shelley-era extended stake key. */
			'--shelley-stake-key' : string
			/** Use a Byron-era extended payment key formatted in the Icarus style. */
			'--icarus-payment-key' : string
			/** Use a Byron-era extended payment key formatted in the deprecated Byron style. */
			'--byron-payment-key' : string
			/** Input filepath of the signing key. */
			'--signing-key-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
	},

	/** Transaction commands */
	transaction: {
		/** Build a transaction (low-level, inconvenient) */
		'build-raw' : ( opt : Opts<{
			/** Specify the Byron era */
			'--byron-era' : string
			/** Specify the Shelley era */
			'--shelley-era' : string
			/** Specify the Allegra era */
			'--allegra-era' : string
			/** Specify the Mary era (default) */
			'--mary-era' : string
			/** TxId#TxIx */
			'--tx-in' : string
			/** Filepath of the spending script witness */
			'--txin-script-file' : string
			/** The transaction output as Address+Lovelace where Address is the Bech32-encoded address followed by the amount in Lovelace. */
			'--tx-out' : string
			/** Mint multi-asset value(s) with the multi-asset cli syntax. You must specifiy a script witness. */
			'--mint' : string
			/** Filepath of the multi-asset witness script. */
			'--minting-script-file' : string
			/** Time that transaction is valid from (in slots). */
			'--invalid-before' : string
			/** Time that transaction is valid until (in slots). */
			'--invalid-hereafter' : string
			/** The fee amount in Lovelace. */
			'--fee' : string
			/** Filepath of the certificate. This encompasses all types of certificates (stake pool certificates, stake key certificates etc). Optionally specify a script witness. */
			'--certificate-file' : string
			/** Filepath of the certificate script witness */
			'--certificate-script-file' : string
			/** The reward withdrawal as StakeAddress+Lovelace where StakeAddress is the Bech32-encoded stake address followed by the amount in Lovelace. Optionally specify a script witness. */
			'--withdrawal' : string
			/** Filepath of the withdrawal script witness. */
			'--withdrawal-script-file' : string
			/** Use the "no schema" conversion from JSON to tx metadata. */
			'--json-metadata-no-schema' : string
			/** Use the "detailed schema" conversion from JSON to tx metadata. */
			'--json-metadata-detailed-schema' : string
			/** Filepath of auxiliary script(s) */
			'--auxiliary-script-file' : string
			/** Filepath of the metadata file, in JSON format. */
			'--metadata-json-file' : string
			/** Filepath of the metadata, in raw CBOR format. */
			'--metadata-cbor-file' : string
			/** Filepath of the update proposal. */
			'--update-proposal-file' : string
			/** Output filepath of the JSON TxBody. */
			'--out-file' : string
		}> ) => {},
		/** Sign a transaction */
		'sign' : ( opt : Opts<{
			/** Input filepath of the JSON TxBody. */
			'--tx-body-file' : string
			/** Input filepath of the signing key (one or more). */
			'--signing-key-file' : string
			/** Byron address (Base58-encoded). */
			'--address' : string
			/** Use the mainnet magic id. */
			'--mainnet' ?: boolean      
			/** Specify a testnet magic id. */
			'--testnet-magic' ?: boolean
			/** Output filepath of the JSON Tx. */
			'--out-file' : string
		}> ) => {},
		/** Create a transaction witness */
		'witness' : ( opt : Opts<{
			/** Input filepath of the JSON TxBody. */
			'--tx-body-file' : string
			/** Filepath of the signing key to be used in witness construction. */
			'--signing-key-file' : string
			/** Byron address (Base58-encoded). */
			'--address' : string
			/** Use the mainnet magic id. */
			'--mainnet' ?: boolean
			/** Specify a testnet magic id. */
			'--testnet-magic' ?: boolean
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Assemble a tx body and witness(es) to form a transaction */
		'assemble' : ( opt : Opts<{
			/** Input filepath of the JSON TxBody. */
			'--tx-body-file' : string
			/** Filepath of the witness */
			'--witness-file' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Submit a transaction to the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
		'submit' : ( opt : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : number
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' ?: boolean
			/** Specify a testnet magic id. */
			'--testnet-magic' ?: boolean
			/** Filepath of the transaction you intend to submit. */
			'--tx-file' : string
		}> ) => {},
		/** Calculate the PolicyId from the monetary policy script. */
		'policyid' : ( opt : Opts<{
			/** Filepath of the script */
			'--script-file' : string
		}> ) => {},
		/** Calculate the minimum fee for a transaction */
		'calculate-min-fee' : ( opt : Opts<{}> ) => {},
		/** Calculate the minimum value for a transaction */
		'calculate-min-value' : ( opt : Opts<{}> ) => {},
		/** Print a transaction identifier */
		'txid' : ( opt : Opts<{}> ) => {},
		/** Print a transaction */
		'view' : ( opt : Opts<{}> ) => {},
	},
	/** Node operation commands */
	node: {
		/** Create a key pair for a node operator's offline key and a new certificate issue counter */
		'key-gen' : ( opts : Opts<{
			/** Filepath of the cold verification key. */
			'--cold-verification-key-file' : string
			/** Filepath of the cold signing key. */
			'--cold-signing-key-file' : string
			/** The file with the issue counter for the operational certificate. */
			'--operational-certificate-issue-counter-file' : string
		}> ) => {},
		/** Create a key pair for a node KES operational key */
		'key-gen-KES' : ( opts : Opts<{
			/** Output filepath of the verification key. */
			'--verification-key-file' : string
			/** Output filepath of the signing key. */
			'--signing-key-file' : string
		}> ) => {},
		/** Create a key pair for a node VRF operational key */
		'key-gen-VRF' : ( opts : Opts<{
			/** Output filepath of the verification key. */
			'--verification-key-file' : string
			/** Output filepath of the signing key. */
			'--signing-key-file' : string
		}> ) => {},
		/** Print hash of a node's operational VRF key. */
		'key-hash-VRF' : ( opts : Opts<{
			/** Verification key (Bech32 or hex-encoded). */
			'--verification-key' : string
			/** Input filepath of the verification key. */
			'--verification-key-file' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Create a new certificate issue counter */
		'new-counter' : ( opts : Opts<{
			/** Stake pool verification key (Bech32 or hex-encoded). */
			'--stake-pool-verification-key' : string
			/** Genesis delegate verification key (hex-encoded). */
			'--genesis-delegate-verification-key' : string
			/** Filepath of the cold verification key. */
			'--cold-verification-key-file' : string
			/** The next certificate issue counter value to use. */
			'--counter-value' : number
			/** The file with the issue counter for the operational certificate. */
			'--operational-certificate-issue-counter-file' : string
		}> ) => {},
		/** Issue a node operational certificate */
		'issue-op-cert' : ( opts : Opts<{
			/** A Bech32 or hex-encoded hot KES verification key. */
			'--kes-verification-key' : string
			/** Filepath of the hot KES verification key. */
			'--kes-verification-key-file' : string
			/** Filepath of the cold signing key. */
			'--cold-signing-key-file' : string
			/** The file with the issue counter for the operational certificate. */
			'--operational-certificate-issue-counter-file' : string
			/** The start of the KES key validity period. */
			'--kes-period' : string
			/** The output file */
			'--out-file' : string
		}> ) => {},
	},
	/** Stake pool commands */
	'stake-pool': {
		/** Create a stake pool registration certificate */
		'registration-certificate' : ( opts : Opts<{
			/** Stake pool verification key (Bech32 or hex-encoded). */
			'--stake-pool-verification-key' : string
			/** Filepath of the stake pool verification key. */
			'--cold-verification-key-file' : string
			/** verification key (Bech32 or hex-encoded). */
			'--vrf-verification-key' : string
			/** Filepath of the VRF verification key. */
			'--vrf-verification-key-file' : string
			/** The stake pool's pledge. */
			'--pool-pledge' : string
			/** The stake pool's cost. */
			'--pool-cost' : string
			/** The stake pool's margin. */
			'--pool-margin' : string
			/** Reward account stake verification key (Bech32 or hex-encoded). */
			'--pool-reward-account-verification-key' : string
			/** Filepath of the reward account stake verification key. */
			'--pool-reward-account-verification-key-file' : string
			/** Pool owner stake verification key (Bech32 or hex-encoded). */
			'--pool-owner-verification-key' : string
			/** Filepath of the pool owner stake verification key. */
			'--pool-owner-stake-verification-key-file' : string
			/** The stake pool relay's IPv4 address */
			'--pool-relay-ipv4' : string
			/** The stake pool relay's IPv6 address */
			'--pool-relay-ipv6' : string
			/** The stake pool relay's port */
			'--pool-relay-port' : number
			/** The stake pool relay's DNS name that corresponds to an A or AAAA DNS record */
			'--single-host-pool-relay' : string
			/** The stake pool relay's DNS name that corresponds to an SRV DNS record */
			'--multi-host-pool-relay' : string
			/** Pool metadata URL (maximum length of 64 characters). */
			'--metadata-url' : string
			/** Pool metadata hash. */
			'--metadata-hash' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Create a stake pool deregistration certificate */
		'deregistration-certificate' : ( opts : Opts<{
			/** Stake pool verification key (Bech32 or hex-encoded). */
			'--stake-pool-verification-key' : string
			/** Filepath of the stake pool verification key. */
			'--cold-verification-key-file' : string
			/** The epoch number. */
			'--epoch' : number
			/** The output file. */
			'--out-file' : string
		}> ) => {},
		/** Build pool id from the offline key */
		'id' : ( opts : Opts<{
			/** Stake pool verification key (Bech32 or hex-encoded). */
			'--stake-pool-verification-key' : string
			/** Filepath of the stake pool verification key. */
			'--cold-verification-key-file' : string
			/** Optional output format. Accepted output formats are "hex" and "bech32" (default is "bech32"). */
			'--output-format' : string
		}> ) => {},
		/** Print the hash of pool metadata. */
		'metadata-hash' : ( opts : Opts<{
			/** Filepath of the pool metadata. */
			'--pool-metadata-file' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
	},
	/** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
	query: {
		/** Get the node's current protocol parameters */
		'protocol-parameters' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Get the node's current tip (slot no, hash, block no) */
		'tip' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Get the node's current aggregated stake distribution */
		'stake-distribution' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode':string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode':string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots':string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode':string
			/** Use the mainnet magic id. */
			'--mainnet':string
			/** Specify a testnet magic id. */
			'--testnet-magic':string
			/** Optional output file. Default is to write to stdout. */
			'--out-file':string
		}> ) => {},
		/** Get the current delegations and reward accounts filtered by stake address. */
		'stake-address-info' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Filter by Cardano stake address (Bech32-encoded). */
			'--address' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Get the node's current UTxO with the option of filtering by address(es) */
		'utxo' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Filter by Cardano address(es) (Bech32-encoded). */
			'--address' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Dump the current ledger state of the node (Ledger.NewEpochState -- advanced command) */
		'ledger-state' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Dump the current protocol state of the node (Ledger.ChainDepState -- advanced command) */
		'protocol-state' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Optional output file. Default is to write to stdout. */
			'--out-file' : string
		}> ) => {},
		/** Obtain the three stake snapshots for a pool, plus the total active stake (advanced command) */
		'stake-snapshot' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
			'--stake-pool-id STAKE-POOL-ID' : string
		}> ) => {},
		/** Dump the pool parameters (Ledger.NewEpochState.esLState._delegationState._pState._pParams -- advanced command) */
		'pool-params' : ( opts : Opts<{
			/** For talking to a node running in Shelley-only mode. */
			'--shelley-mode' : string
			/** For talking to a node running in Byron-only mode. */
			'--byron-mode' : string
			/** The number of slots per epoch for the Byron era. (default: 21600) */
			'--epoch-slots' : string
			/** For talking to a node running in full Cardano mode (default). */
			'--cardano-mode' : string
			/** Use the mainnet magic id. */
			'--mainnet' : string
			/** Specify a testnet magic id. */
			'--testnet-magic' : string
			/** Stake pool ID/verification key hash (either Bech32-encoded or hex-encoded). */
			'--stake-pool-id STAKE-POOL-ID' : string
		}> ) => {},
	},
	/** Genesis block commands */
	genesis: {
		
	},
	/** Governance commands */
	governance: () => {}
	/** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
	'text-view': () => {}
}
// export interface CardanoNode {}
// export interface CardanoChairman {}
// export default cardano
