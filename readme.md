Simple TypeScript library wrapping cardano-cli

## Usage

```typescript
import cardanoCli from 'cardano-cli-ts'
import path from 'path'

const cli = cardanoCli(path.resolve('cardano-cli.exe'))

const buildAddress = cli.address().build({ mainnet: true, ...options })

// Get the string
const buildAddress = myCommand.command // cardano-cli.exe address build --mainnet --other-options...

// Async stuff
buildAddress.run().then((stdout: string) => null)
```

## TODO(s)

Complete the command typings (missing genesis and many options are typed as string but could probably be boolean or number)

## Notes

-   Most of the options are just typed as string, some might actually be better typed as number, bigint or something else. I will be updating it as I use it, please open an issue if you find any problem, thanks
