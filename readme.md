Simple TypeScript library wrapping cardano-cli

## Usage

**Assumes you have a cardano-cli on your shell variables**

```typescript
import cardanoCli from 'cardano-cli-ts'
cardanoCli.address.info({ options })
```

### Custom Cli path

**For all commands**

```typescript
import { useCliPath } from 'cardano-cli-ts'
const myCardanoCli = useCliPath('my-path-to/cardano-cli')
myCardanoCli.address.info(options)
```

**For a single command**

```typescript
import { cardanoCli } from 'cardano-cli-ts'
const getAddressInfo = cardanoCli.address.info('my-cardano-cli-path')
getAddressInfo(options)
```

## TODO(s)

Complete the commands (missing governance and genesis)

## Notes

- Most of the options are just typed as string, some might actually be better typed as integers and others might be optional too. I will be updating it as I use it, please open an issue if you find any problem, thanks ;)
