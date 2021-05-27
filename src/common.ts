/** Todo: figure out date format */
export type BLOCKDATE = string
export type HASH = string
/** derivation scheme [default: v2]  [possible values: v1, v2] */
export type DERIVATION_SCHEME = 'v1' | 'v2'
/** the list of languages to display the mnemonic words of the wallet in. You can set multiple values using comma     delimiter (example: `--mnemonics-languages=english,french,italian'). [default: english]  [possible values:        chinese-simplified, chinese-traditional, english, french, italian, japanese, korean, spanish] */
export type MNEMONIC_LANGUAGES = string
/** The number of words to use for the wallet mnemonic (the more the more secure). [default: 24]  [possible values:   12, 15, 18, 21, 24] */
export type MNEMONIC_SIZE = 12 | 15 | 18 | 21 | 24
/** the scheme to organize accounts and addresses in a Wallet. [default: bip44]  [possible values: bip44, random_index_2levels] */
export type WALLET_SCHEME = 'bip44' | 'random_index_2levels'
/** the language of the mnemonic words to recover the wallet from. [default: english]  [possible values: chinese-simplified, chinese-traditional, english, french, italian, japanese, korean, spanish] */
export type MNEMONIC_LANGUAGE =
	| 'chinese-simplified'
	| 'chinese-traditional'
	| 'english'
	| 'french'
	| 'italian'
	| 'japanese'
	| 'korean'
	| 'spanish'

export type DefaultOptions = {
	/** enable output colors or not [default: auto]  [possible values: auto, always, never] */
	color?: 'auto' | 'always' | 'never'
}
export type DefaultFlags = {
	/** run the command quietly, do not print anything to the command line output */
	quiet?: boolean
	/** set the verbosity mode, multiple occurrences means more verbosity */
	v?: boolean
	/** set the verbosity mode, multiple occurrences means more verbosity */
	verbose?: boolean
	/** Prints help information */
	h?: boolean
	/** Prints help information */
	help?: boolean
	/** Prints version information */
	version?: boolean
	/** Prints version information */
	V?: boolean
}

export type Opts<O> = DefaultOptions & O
export type Flags<F> = DefaultFlags & F
export type OutputFormat = 'Hex' | 'Base64'

export type CommandFunction<A, O, F> = (
	args: A,
	opts?: Partial<Opts<O>>,
	flags?: Partial<Flags<F>>
) => Promise<unknown> // Todo, handle promises
export type CF<A = [], O = {}, F = {}> = CommandFunction<A, O, F>
