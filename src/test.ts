import cardanoCli from '.'

const cli = cardanoCli('../cardano-bin/cardano-cli')

const myCommand = cli.address().build({
	mainnet: true,
	paymentScriptFile: '',
	paymentVerificationKey: '',
	paymentVerificationKeyFile: '',
	stakeScriptFile: '',
	stakeVerificationKey: '',
	stakeVerificationKeyFile: '',
}).command

console.log(myCommand)
