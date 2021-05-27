import { makeCommandWithArgsOptsAndFlags } from './command'
import {
	CF,
	DERIVATION_SCHEME,
	MNEMONIC_LANGUAGES,
	MNEMONIC_SIZE,
	WALLET_SCHEME,
	MNEMONIC_LANGUAGE,
	HASH,
} from './common'

export interface Wallet {
	/** create a new address */
	address: CF<
		[WALLET_NAME: string, ACCOUNT_INDEX: string, ADDRESS_INDEX: string],
		{},
		{
			internal: boolean
			'protocol-magic': boolean
		}
	>
	/** Attach the existing wallet to the existing local blockchain. Detach first to attach to an other blockchain. */
	attach: CF<
		[
			/** the wallet name */
			WALLET_NAME: string,
			/** the blockchain name */
			BLOCKCHAIN_NAME: string
		]
	>
	/** create a new wallet */
	create: CF<
		[WALLET_NAME: string],
		{
			/** derivation scheme [default: v2]  [possible values: v1, v2] */
			'derivation-scheme': DERIVATION_SCHEME
			/** the list of languages to display the mnemonic words of the wallet in. You can set multiple values using comma     delimiter (example: `--mnemonics-languages=english,french,italian'). [default: english]  [possible values:        chinese-simplified, chinese-traditional, english, french, italian, japanese, korean, spanish] */
			'mnemonics-languages': MNEMONIC_LANGUAGES
			/** The number of words to use for the wallet mnemonic (the more the more secure). [default: 24]  [possible values:   12, 15, 18, 21, 24] */
			'mnemonics-length': MNEMONIC_SIZE
			/** the scheme to organize accounts and addresses in a Wallet. [default: bip44]  [possible values: bip44, random_index_2levels] */
			'wallet-scheme': WALLET_SCHEME
		}
	>
	/** delete all data associated to the given wallet. */
	destroy: CF<[WALLET_NAME: string]>
	/** detach the wallet from its associated blockchain */
	detach: CF<[WALLET_NAME: string]>
	/** Prints this message or the help of the given subcommand(s) */
	help: CF<[], undefined, undefined>
	/** list all the wallets available */
	list: CF<
		[],
		{},
		{
			/** display some information regarding the remotes */
			detailed: boolean
		}
	>
	/** print the wallet logs */
	log: CF<[WALLET_NAME: string]>
	/** recover a wallet */
	recover: CF<
		[
			/** the wallet name */
			WALLET_NAME: string
		],
		{
			/** derivation scheme [default: v2]  [possible values: v1, v2] */
			'derivation-scheme': DERIVATION_SCHEME
			/** the language of the mnemonic words to recover the wallet from. [default: english]  [possible values: chinese-simplified, chinese-traditional, english, french, italian, japanese, korean, spanish] */
			'mnemonics-language': MNEMONIC_LANGUAGE
			/** The number of words to use for the wallet mnemonic (the more the more secure). [default: 24]  [possible values:12, 15, 18, 21, 24] */
			'mnemonics-length': MNEMONIC_SIZE
			/** the scheme to organize accounts and addresses in a Wallet. [default: bip44]  [possible values: bip44,random_index_2levels] */
			'wallet-scheme': WALLET_SCHEME
		}
	>
	/** print the wallet statement */
	statement: CF<[WALLET_NAME: string]>
	/** print some status information from the given wallet (funds, transactions...) */
	status: CF<[WALLET_NAME: string]>
	/** synchronize the wallet with the attached blockchain */
	sync: CF<
		[WALLET_NAME: string],
		{
			/** sync the wallet up to the given hash (otherwise, sync up to local blockchain's tip). */
			to: HASH
		},
		{
			/** perform the sync without storing the updated states. */
			'dry-run': boolean
			/** run the command quietly, do not print anything to the command line output */
			quiet: boolean
		}
	>
	/** print the wallet's available funds */
	utxos: CF<[WALLET_NAME: string]>
}

export const wallet: Wallet = {
	address: makeCommandWithArgsOptsAndFlags('address'),
	attach: makeCommandWithArgsOptsAndFlags('attach'),
	create: makeCommandWithArgsOptsAndFlags('create'),
	destroy: makeCommandWithArgsOptsAndFlags('destroy'),
	detach: makeCommandWithArgsOptsAndFlags('detach'),
	help: makeCommandWithArgsOptsAndFlags('help'),
	list: makeCommandWithArgsOptsAndFlags('list'),
	log: makeCommandWithArgsOptsAndFlags('log'),
	recover: makeCommandWithArgsOptsAndFlags('recover'),
	statement: makeCommandWithArgsOptsAndFlags('statement'),
	status: makeCommandWithArgsOptsAndFlags('status'),
	sync: makeCommandWithArgsOptsAndFlags('sync'),
	utxos: makeCommandWithArgsOptsAndFlags('utxos'),
}
