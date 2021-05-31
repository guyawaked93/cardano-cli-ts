import { stakeAddress } from './stake-address'
import { address } from './adress'
import { key } from './key'
import { transaction } from './transaction'
import { node } from './node'
import { stakePool } from './stake-pool'
import { query } from './query'
import { genesis } from './genesis'
import { governance } from './governance'
import { textView } from './textView'

export const cardanoCli = {
	/** Payment address commands */
	address,

	/** Stake address commands */
	'stake-address': stakeAddress,

	/** Key utility commands */
	key,

	/** Transaction commands */
	transaction,

	/** Node operation commands */
	node,

	/** Stake pool commands */
	'stake-pool': stakePool,

	/** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
	query,

	/** Genesis block commands */
	genesis,

	/** Governance commands */
	governance,

	/** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
	'text-view': textView,
}

export type CardanoCli = typeof cardanoCli

export type UseCliPath = {
	[CMD in keyof CardanoCli]: {
		[SUB in keyof CardanoCli[CMD]]: CardanoCli[CMD][SUB] extends (
			...args: any
		) => any
			? ReturnType<CardanoCli[CMD][SUB]>
			: null
	}
}

export const useCliPath = (path: string) =>
	Object.entries(cardanoCli).reduce<UseCliPath>((acc, [cmd, subcommands]) => {
		acc[cmd as keyof UseCliPath] = Object.entries(subcommands).reduce<any>(
			(acc, [sub, fun]) => {
				acc[sub] = fun(path)
				return acc
			},
			{}
		)
		return acc
	}, {} as UseCliPath)

export default useCliPath('cardano-cli')
