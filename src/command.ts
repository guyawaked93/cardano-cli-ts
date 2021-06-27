import { exec } from 'child_process'
import { kebabize } from './common'

export type OutputFormat = 'Hex' | 'Base64'

export type DefaultOptions = {
	help?: boolean
}

export type Options = {
	[K in string]?: string | boolean | number | null | symbol | bigint | (() => string)
}
export type Option = Options[string]
export type CommandGroup = {
	[K in string]: Option | Command | Group
}
export type Group = {
	[K in string]: Command
}
export type Command = {
	[K in string]: Option
}
export type CommandOptions<G extends CommandGroup> = MatchingProperties<G, Option>
export type GroupCommands<G extends CommandGroup> = MatchingProperties<G, { [K in string]: any }>
export type CommandFunction<
	G extends CommandGroup,
	S extends GroupCommands<G> = GroupCommands<G>,
	O extends CommandOptions<G> = CommandOptions<G>,
	SC extends {
		// @ts-expect-error
		[K in keyof S]: ReturnType<CommandFunction<S[K]>>
	} = {
		// @ts-expect-error
		[K in keyof S]: ReturnType<CommandFunction<S[K]>>
	},
	SCR extends {
		[K in keyof SC]: ReturnType<SC[K]>
	} = {
		[K in keyof SC]: ReturnType<SC[K]>
	}
> = (
	command: string,
	subCommands?: SC
) => (context: string) => (options?: DefaultOptions & O) => {
	command: string
	run: () => Promise<any>
} & SCR

export const commandFunction =
	<
		G extends CommandGroup,
		S extends GroupCommands<G> = GroupCommands<G>,
		O extends CommandOptions<G> = CommandOptions<G>,
		SC extends {
			// @ts-expect-error
			[K in keyof S]: ReturnType<CommandFunction<S[K]>>
		} = {
			// @ts-expect-error
			[K in keyof S]: ReturnType<CommandFunction<S[K]>>
		},
		SCR extends {
			[K in keyof SC]: ReturnType<SC[K]>
		} = {
			[K in keyof SC]: ReturnType<SC[K]>
		}
	>(
		command: string,
		subCommands?: SC
	) =>
	(context: string) =>
	(options?: DefaultOptions & O) => {
		command += Object.entries(options ?? {}).reduce<string>((acc, [key, value]) => {
			switch (typeof value) {
				case 'boolean':
					if (value) acc += `\n --${kebabize(key)}`
					break
				case 'string':
				case 'number':
				case 'bigint':
					acc += `\n --${kebabize(key.toString())} ${value}`
					break
				default:
					break
			}
			return acc
		}, `${context} ${kebabize(command)}`)
		const run = () =>
			new Promise((resolve, reject) => {
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
		return {
			command,
			run,
			...Object.entries(subCommands ?? {}).reduce<SCR>((acc, [key, value]) => {
				;(acc as any)[key] = (value as any)(command)
				return acc
			}, {} as SCR),
		}
	}

export type MatchingProperties<T, V> = Pick<
	T,
	{
		[K in keyof T]-?: T[K] extends V ? K : never
	}[keyof T]
>
export type ExcludeMatchingProperties<T, V> = Pick<
	T,
	{
		[K in keyof T]-?: T[K] extends V ? never : K
	}[keyof T]
>
