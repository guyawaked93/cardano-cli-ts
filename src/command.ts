import { exec } from 'child_process'
import { Opts } from './common'

/** Todo, run the commands */
export const commandFunction = <
	T extends Record<string, string | boolean | number>
>(
	command: string
) => (cliPath: string) => (opts: Opts<T>) => {
	command += Object.entries(opts).reduce<string>((acc, [key, value]) => {
		acc += `\n ${key} ${value}`
		return acc
	}, cliPath)
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
