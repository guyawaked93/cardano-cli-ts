import cardanoCli from '.'
import path from 'path'

const cli = cardanoCli(path.resolve(path.dirname(__dirname), 'cardano-bin/cardano-cli.exe'))

const myCommand = cli
	.address({
		help: true,
	})
	.run()
	.then(console.log)
	.catch(console.log)

console.log(myCommand)
