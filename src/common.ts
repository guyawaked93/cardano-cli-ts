export type OutputFormat = 'Hex' | 'Base64'

export type DefaultOptions = {
	'--help'?: boolean
	'-h'?: boolean
}
export type Opts<
	T extends Record<string, string | boolean | number>
> = DefaultOptions & T
