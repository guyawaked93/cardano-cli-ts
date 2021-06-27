Simple TypeScript library wrapping cardano-cli

## Usage

```typescript
import cardanoCli from 'cardano-cli-ts'
const myCardanoCli = cardanoCli('my-path-to/cardano-cli.exe')
const { command, run } = myCardanoCli.address().build({
	mainnet: true,
	...options,
})
console.log(command) // Output: my-path-to/cardano-cli.exe address build --mainnet

run().then( stdout => ... )

```

## TODO(s)

Complete the command typings (missing genesis and many options are typed as string but could probably be boolean or number)

## Notes

-   Most of the options are just typed as string, some might actually be better typed as number, bigint or something else. I will be updating it as I use it, please open an issue if you find any problem, thanks
