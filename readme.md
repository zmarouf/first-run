# @zmarouf/first-run

> Check if it's the first time the process is run

Can be used to greet the user the first time they use your CLI app, show usage tip, initialize something, etc.

Forked from [first-run](https://github.com/sindresorhus/first-run)

## Install

```
$ npm install --save zmarouf/first-run
```


## Usage

```js
// x.js
var firstRun = require('@zmarouf/first-run');

console.log(firstRun('name'));
```

```
$ node x.js
true
$ node x.js
false
```


## API

### firstRun(name, [options])

#### options.globalConfigPath

Type: `boolean`  
Default: `false`

Save to $CONFIG/name/config.json instead of $CONFIG/configstore/name/config.json

### firstRun.clear(name)

Clear the state.


## License
MIT © Zeid Marouf forked from [first-run](https://github.com/sindresorhus/first-run)
MIT © [Sindre Sorhus](http://sindresorhus.com)
