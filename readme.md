Writting a wrapper around cardano cli seems like a really lazy thing to do, that is why I will do it

Example

```
import cardano from 'cardano-cli-ts'

cardano.wallet.create(
	['One Wallet to Rule them All'],
	{
		'derivation-scheme': 'v2',
		'mnemonics-length': 24,
		'wallet-scheme': 'random_index_2levels',
	},
	{
		verbose: true,
	}
)

// Outputs: cardano-cli wallet create 'One Wallet to Rule them All' --derivation-scheme v2 --mnemonics-length 24 --wallet-scheme random_index_2levels

```

### Disclaimer

This doesn't work yet because I still have to make it possible to respond to CLI prompts
