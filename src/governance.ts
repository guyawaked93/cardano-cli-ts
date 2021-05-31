import { commandFunction } from './command'

export const governance = {
	/** Create an MIR (Move Instantaneous Rewards) certificate */
	'create-mir-certificate': commandFunction(
		'governance create-mir-certificate'
	),
	/** Create a genesis key delegation certificate */
	'create-genesis-key-delegation-certificate': commandFunction(
		'governance create-genesis-key-delegation-certificate'
	),
	/** Create an update proposal */
	'create-update-proposal': commandFunction(
		'governance create-update-proposal'
	),
}
