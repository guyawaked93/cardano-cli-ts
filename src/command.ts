import { exec } from 'child_process'
import { Cardano } from './index'

type SubOf<T extends keyof Cardano> = keyof Cardano[T]

/** Todo, run the commands */
export const makeCommandWithArgsOptsAndFlags = <T extends keyof Cardano>(
	cmd: T,
	sub: SubOf<typeof cmd>
) => (
	args: Array<string | number | undefined>,
	opts?: Record<string, string | number>,
	flags?: Record<string, boolean>
): Promise<unknown> => {
	let command = `cardano-cli ${cmd} ${sub}`

	// prettier-ignore
	command += args.length > 0 ? ' ' + args.filter( arg => arg !== undefined ).map( ( arg ) => {
		if ( typeof arg === 'string' && arg.match(/\s/) ) {
			return `"${arg}"`
		} else {
			return arg
		}
	} ).join(' ') : ''

	// prettier-ignore
	command += opts ? Object.entries(opts).reduce<string>((acc, [opt, val]) => {
		if ( val ) {
			if ( typeof val === 'string' && val.match( /\s/ ) ) {
				val = `"${val}"`
			}
			acc += ` --${opt} ${val}`
		}
		return acc
	}, '') : ''

	// prettier-ignore
	command += flags ? Object.entries(flags).reduce<string>((acc, [flag, on]) => {
		if (flag && on) {
			acc += ` --${flag}`
		}
		return acc
	}, '') : ''

	console.log(`[RUN]: ${command}`)

	return new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				reject(error)
			} else if (stderr) {
				reject(stderr)
			} else {
				resolve(stdout)
			}
		})
	})
}
