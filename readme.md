Simple TypeScript library wrapping cardano-cli

## About this project

Step 1: Write type definitions for all cardano-cli commands and their options
Step 2: Create typed functions that allow the developers to build the commands they want to execute
Step 3: Test that it works

Further: Build (maybe in another library) abstractions on top of the cardano-cli commands and the files

About Step 1:

You will see a file named after each main command of cardano-cli in src/, each of those files exports a type named "Commands", which is type that defines a dictionary with sub-commands and their options

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

## Import, Require and Types

The source code is written in typescript, it's transpiled to:
ES5 (CommonJS) under /es5
ES6 (ES Modules) under /es6
and the types are under /types

You can import types from cardano-cli-ts/types on front-end apps if you wish to use the types somewhere on your frontend app.

## TODO(s)

Complete the command typings (missing genesis and many options are typed as string but could probably be boolean or number)

## Notes

-   Most of the options are just typed as string, some might actually be better typed as number, bigint or something else. I will be updating it as I use it, please open an issue if you find any problem, thanks
