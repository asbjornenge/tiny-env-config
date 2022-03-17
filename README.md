# tiny-env-config

Tiny config helper for env variables. Also supports reading and parsing files.

## Install

```
npm install --save tiny-env-config
```

## Use

I like having `different.env` files with config. I parse that config in `config.js` like so:

```js
import { config, json, string } from 'tiny-env-config'

export const NENV = config('NODE_ENV', 'development')
export const CONF = config('CONF', './config.json', json)
export const KEYS = config('KEYS', './keys.txt', string)
```

## Exports

```
config - function(ENV_VAR, 'default', parser)
json   - json parser
string - text parser
```

enjoy.
