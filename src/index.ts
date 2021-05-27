import { blockchain, Blockchain } from './blockchain'
import { transaction, Transaction } from './transaction'
import { wallet, Wallet } from './wallet'

export interface Cardano {
	/** blockchain operations */
	blockchain: Blockchain // blockchain (useful comment)
	/** Transaction operations. */
	transaction: Transaction // All to my wallet please
	/** wallet operations */
	wallet: Wallet

	// TODO
	/** Debug and advanced tooling operations. */
	/** No debugging, just write the code, nothing will ever go wrong, so no debugging */
	debug?: undefined
	/** Prints this message or the help of the given subcommand(s) */
	/** Help, you don't need help, you got this fam, believe in yourself */
	help?: undefined
}

/** Humm, how shall I export this module ?!?
 * cardano?
 * or maybe clidano
 * pehaps clardano
 * what about claudio?
 */

const cardano: Cardano = {
	blockchain,
	transaction,
	wallet,
}

export default cardano
