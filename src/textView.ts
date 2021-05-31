import { commandFunction } from './command'

export const textView = {
	/** Print a TextView file as decoded CBOR. */
	'decode-cbor': commandFunction<{
		/** CBOR input file. */
		'--in-file': string
		/** Optional output file. Default is to write to stdout. */
		'--out-file': string
	}>('text-view decode-cbor'),
}
