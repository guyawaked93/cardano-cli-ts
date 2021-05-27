import { makeCommandWithArgsOptsAndFlags } from './command'
import { CF } from './common'

export interface Transaction {
	/** Add a change address to a transaction */
	'add-change': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** address to send the change to */
			CHANGE_ADDRESS: string
		]
	>
	/** Add an input to a transaction */
	'add-input': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** A Transaction identifier in hexadecimal */
			TRANSACTION_TXID: string,
			/** The index of the unspent output in the transaction */
			TRANSACTION_INDEX: string,
			/** The value in lovelace */
			TRANSACTION_AMOUNT: number
		]
	>
	/** Add an output to a transaction */
	'add-output': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** Address to send funds too */
			TRANSACTION_ADDRESS: string,
			/** The value in lovelace */
			TRANSACTION_AMOUNT: string
		]
	>
	/** Destroy a staging transaction */
	destroy: CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string
		]
	>
	/** Export a staging transaction for transfer into a human readable format */
	export: CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** optional file to export the staging transaction to (default will display the export to stdout) */
			EXPORT_FILE?: string
		]
	>
	/** Finalize a staging transaction */
	finalize: CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string
		]
	>

	/** Import a human readable format transaction into a new staging transaction */
	import: CF<
		[
			// optional file to import the staging transaction from (default will read stdin)
			IMPORT_FILE?: string
		]
	>
	/** Select input automatically using a wallet (or a set of wallets), and a input selection algorithm */
	'input-select': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** wallet name to use for the selection */
			WALLET_NAME: string
		]
	>
	/** List all staging transactions open */
	list: CF
	/** Create a new empty staging transaction */
	new: CF<
		[
			/** Transaction are linked to a blockchain to be valid */
			BLOCKCHAIN_NAME: string
		]
	>
	/** Remove a change address from a transaction */
	'rm-change': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** address to remove */
			CHANGE_ADDRESS: string
		]
	>
	/** Remove an input to a transaction */
	'rm-input': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** A Transaction identifier in hexadecimal */
			TRANSACTION_TXID: string,
			/** The index of the unspent output in the transaction */
			TRANSACTION_INDEX: string
		]
	>
	/** Remove an output to a transaction */
	'rm-output': CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** Address to send funds too */
			TRANSACTION_ADDRESS: string
		]
	>
	/** Send the transaction transaction to the blockchain */
	send: CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string,
			/** The blockchain the send the transaction too (will contact the peers of this blockchain) */
			BLOCKCHAIN_NAME: string
		]
	>
	/** Finalize a staging a transaction into a transaction ready to send to the blockchain network */
	sign: CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string
		]
	>
	/** Status of a staging transaction */
	status: CF<
		[
			/** the transaction staging identifier */
			TRANSACTION_ID: string
		]
	>
	/** Prints this message or the help of the given subcommand(s) */
	help: CF<[], undefined, undefined>
}

export const transaction: Transaction = {
	'add-change': makeCommandWithArgsOptsAndFlags('add-change'),
	'add-input': makeCommandWithArgsOptsAndFlags('add-input'),
	'add-output': makeCommandWithArgsOptsAndFlags('add-output'),
	destroy: makeCommandWithArgsOptsAndFlags('destroy'),
	export: makeCommandWithArgsOptsAndFlags('export'),
	finalize: makeCommandWithArgsOptsAndFlags('finalize'),
	import: makeCommandWithArgsOptsAndFlags('import'),
	'input-select': makeCommandWithArgsOptsAndFlags('input-select'),
	list: makeCommandWithArgsOptsAndFlags('list'),
	new: makeCommandWithArgsOptsAndFlags('new'),
	'rm-change': makeCommandWithArgsOptsAndFlags('rm-change'),
	'rm-input': makeCommandWithArgsOptsAndFlags('rm-input'),
	'rm-output': makeCommandWithArgsOptsAndFlags('rm-output'),
	send: makeCommandWithArgsOptsAndFlags('send'),
	sign: makeCommandWithArgsOptsAndFlags('sign'),
	status: makeCommandWithArgsOptsAndFlags('status'),
	help: makeCommandWithArgsOptsAndFlags('help'),
}
