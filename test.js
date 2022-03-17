import { config, json, string } from './index.js'
import assert from 'assert'

const YOLO = config('YOLO', 'default')
const EPLE = config('EPLE', 'juice')
const CONF = config('CONFIG_FILE', './test.json', json)
const KEYS = config('KEYS', './test.txt', string)

assert(YOLO === 'default')
assert(EPLE === 'kake')
assert(CONF?.this === 'jsonfile')
assert(KEYS.indexOf('KEY=') === 0)

console.log('All good') 
