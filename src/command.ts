import { exec } from 'child_process'

/** Todo, run the commands */
export const makeCommandWithArgsOptsAndFlags = (cmd: string) => (
	args: Array<string | number | undefined>,
	opts?: Record<string, string | number>,
	flags?: Record<string, boolean>
): Promise<unknown> => {
	let command = cmd
	command += args.length > 0 ? ' ' + args.join(' ') : ''

	// prettier-ignore
	command += opts ? Object.entries(opts).reduce<string>((acc, [opt, val]) => {
		if ( val ) {
			acc += ` --${opt} ${val}`
		}
		return acc
	}, '') : ''

	// prettier-ignore
	command += flags ? Object.entries(flags).reduce<string>((acc, [flag, on]) => {
		if (flag && on) {
			acc += ' ' + flag
		}
		return acc
	}, '') : ''

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
