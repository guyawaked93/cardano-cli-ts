import cardano from '.'

cardano.wallet.create(
	['Wallet Name'],
	{
		'derivation-scheme': 'v2',
		'mnemonics-length': 24,
		'wallet-scheme': 'random_index_2levels',
	},
	{
		verbose: true,
	}
)
