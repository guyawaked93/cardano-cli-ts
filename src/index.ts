import { cardanoCliCommand, commandFunction } from './command'

export const cardanoCli = (cliPath: string = 'cardano-cli') => ({
	/** Payment address commands */
	address: cardanoCliCommand('address', {
		build: commandFunction('build'),
		info: commandFunction('info'),
		keyGen: commandFunction('keyGen'),
		keyHash: commandFunction('keyHash'),
	})(cliPath),
	/** Stake address commands */
	stakeAddress: cardanoCliCommand('stakeAddress', {
		keyGen: commandFunction('keyGen'),
		build: commandFunction('build'),
		keyHash: commandFunction('keyHash'),
		registrationCertificate: commandFunction('registrationCertificate'),
		deregistrationCertificate: commandFunction('deregistrationCertificate'),
		delegationCertificate: commandFunction('delegationCertificate'),
	})(cliPath),
	/** Key utility commands */
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
	/** Transaction commands */
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
	/** Node operation commands */
	node: cardanoCliCommand('node', {
		keyGen: commandFunction('keyGen'),
		keyGenKes: commandFunction('keyGenKes'),
		keyGenVrf: commandFunction('keyGenVrf'),
		keyHashVrf: commandFunction('keyHashVrf'),
		newCounter: commandFunction('newCounter'),
		issueOpCert: commandFunction('issueOpCert'),
	})(cliPath),
	/** Stake pool commands */
	stakePool: cardanoCliCommand('stakePool', {
		registrationCertificate: commandFunction('registrationCertificate'),
		deregistrationCertificate: commandFunction('deregistrationCertificate'),
		id: commandFunction('id'),
		metadataHash: commandFunction('metadataHash'),
	})(cliPath),

	/** Node query commands. Will query the local node whose
	 * Unix domain socket is obtained from the
	 * CARDANO_NODE_SOCKET_PATH enviromnent variable.
	 */
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
	/** Commands for dealing with Shelley TextView files.
	 * Transactions, addresses etc are stored on disk as
	 * TextView files.
	 */
	textView: cardanoCliCommand('textView', {
		decodeCbor: commandFunction('decodeCbor'),
	})(cliPath),

	/** Genesis block commands */
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
	/** Governance commands */
	governance: cardanoCliCommand('governance', {
		createMirCertificate: commandFunction('createMirCertificate'),
		createGenesisKeyDelegationCertificate: commandFunction('createGenesisKeyDelegationCertificate'),
		createUpdateProposal: commandFunction('createUpdateProposal'),
	})(cliPath),
})

export default cardanoCli
