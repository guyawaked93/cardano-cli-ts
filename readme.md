Simple TypeScript library wrapping cardano-cli

## Usage

**The default export assumes your cardano-cli path is just cardano-cli**

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

**Use a custom cli path for specific commands**

```typescript
import { cardanoCli } from 'cardano-cli-ts'
const getAddressInfo = cardanoCli.address.info('my-cardano-cli-path')
getAddressInfo(options)
```

## TODO(s)

Complete the commands (missing governance and genesis)

## Notes

-   Most of the options are just typed as string, some might actually be better typed as integers and others might be optional too. I will be updating it as I use it, please open an issue if you find any problem, thanks ;)
