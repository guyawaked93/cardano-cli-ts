import { commandFunction, MatchingProperties } from './command'
import {
	Address,
	Genesis,
	Governance,
	Key,
	Node,
	Query,
	StakeAddress,
	StakePool,
	TextView,
	Transaction,
} from './modules'

export type Commands = {
	/** Payment address commands */
	address: Address.Commands

	/** Stake address commands */
	stakeAddress: StakeAddress.Commands

	/** Key utility commands */
	key: Key.Commands

	/** Transaction commands */
	transaction: Transaction.Commands

	/** Node operation commands */
	node: Node.Commands

	/** Stake pool commands */
	stakePool: StakePool.Commands

	/** Node query commands. Will query the local node whose Unix domain socket is obtained from the CARDANO_NODE_SOCKET_PATH enviromnent variable. */
	query: Query.Commands

	/** Genesis block commands */
	genesis: Genesis.Commands

	/** Governance commands */
	governance: Governance.Commands

	/** Commands for dealing with Shelley TextView files. Transactions, addresses etc are stored on disk as TextView files. */
	textView: TextView.Commands
}

export const cardanoCliCommand = <
	C extends keyof Commands,
	S extends MatchingProperties<Commands[C], { [K in string]: any }> = MatchingProperties<
		Commands[C],
		{ [K in string]: any }
	>,
	SC extends {
		// @ts-expect-error
		[K in keyof S]: ReturnType<CommandFunction<S[K]>>
	} = {
		// @ts-expect-error
		[K in keyof S]: ReturnType<CommandFunction<S[K]>>
	}
>(
	command: C,
	subCommands?: SC
) => commandFunction<Commands[C]>(command, subCommands)

export const cardanoCli = (cliPath: string) => ({
	address: cardanoCliCommand('address', {
		build: commandFunction('build'),
		info: commandFunction('info'),
		keyGen: commandFunction('keyGen'),
		keyHash: commandFunction('keyHash'),
	})(cliPath),
	genesis: cardanoCliCommand('genesis', {
		keyGenGenesis: commandFunction('keyGenGenesis'),
		keyGenDelegate: commandFunction('keyGenDelegate'),
		keyGenUtxo: commandFunction('keyGenUtxo'),
		keyHash: commandFunction('keyHash'),
		getVerKey: commandFunction('getVerKey'),
		initialAddr: commandFunction('initialAddr'),
		initialTxin: commandFunction('initialTxin'),
		create: commandFunction('create'),
		createStaked: commandFunction('createStaked'),
		hash: commandFunction('hash'),
	})(cliPath),
	governance: cardanoCliCommand('governance', {
		createMirCertificate: commandFunction('createMirCertificate'),
		createGenesisKeyDelegationCertificate: commandFunction('createGenesisKeyDelegationCertificate'),
		createUpdateProposal: commandFunction('createUpdateProposal'),
	})(cliPath),
	key: cardanoCliCommand('key', {
		verificationKey: commandFunction('verificationKey'),
		nonExtendedKey: commandFunction('nonExtendedKey'),
		convertByronKey: commandFunction('convertByronKey'),
		convertByronGenesisVkey: commandFunction('convertByronGenesisVkey'),
		convertItnKey: commandFunction('convertItnKey'),
		convertItnExtendedKey: commandFunction('convertItnExtendedKey'),
		convertItnBip32Key: commandFunction('convertItnBip32Key'),
		convertCardanoAddressKey: commandFunction('convertCardanoAddressKey'),
	})(cliPath),
	node: cardanoCliCommand('node', {
		keyGen: commandFunction('keyGen'),
		keyGenKes: commandFunction('keyGenKes'),
		keyGenVrf: commandFunction('keyGenVrf'),
		keyHashVrf: commandFunction('keyHashVrf'),
		newCounter: commandFunction('newCounter'),
		issueOpCert: commandFunction('issueOpCert'),
	})(cliPath),
	query: cardanoCliCommand('query', {
		protocolParameters: commandFunction('protocolParameters'),
		tip: commandFunction('tip'),
		stakeDistribution: commandFunction('stakeDistribution'),
		stakeAddressInfo: commandFunction('stakeAddressInfo'),
		utxo: commandFunction('utxo'),
		ledgerState: commandFunction('ledgerState'),
		protocolState: commandFunction('protocolState'),
		stakeSnapshot: commandFunction('stakeSnapshot'),
		poolParams: commandFunction('poolParams'),
	})(cliPath),
	stakeAddress: cardanoCliCommand('stakeAddress', {
		keyGen: commandFunction('keyGen'),
		build: commandFunction('build'),
		keyHash: commandFunction('keyHash'),
		registrationCertificate: commandFunction('registrationCertificate'),
		deregistrationCertificate: commandFunction('deregistrationCertificate'),
		delegationCertificate: commandFunction('delegationCertificate'),
	})(cliPath),
	stakePool: cardanoCliCommand('stakePool', {
		registrationCertificate: commandFunction('registrationCertificate'),
		deregistrationCertificate: commandFunction('deregistrationCertificate'),
		id: commandFunction('id'),
		metadataHash: commandFunction('metadataHash'),
	})(cliPath),
	textView: cardanoCliCommand('textView', {
		decodeCbor: commandFunction('decodeCbor'),
	})(cliPath),
	transaction: cardanoCliCommand('transaction', {
		buildRaw: commandFunction('buildRaw'),
		sign: commandFunction('sign'),
		witness: commandFunction('witness'),
		assemble: commandFunction('assemble'),
		submit: commandFunction('submit'),
		policyid: commandFunction('policyid'),
		calculateMinFee: commandFunction('calculateMinFee'),
		calculateMinValue: commandFunction('calculateMinValue'),
		txid: commandFunction('txid'),
		view: commandFunction('view'),
	})(cliPath),
})

export default cardanoCli
