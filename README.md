# react-app-rewire-idx
Add [babel-plugin-idx](https://github.com/facebookincubator/idx) to a [create-react-app](https://github.com/facebookincubator/create-react-app) app via [react-app-rewired](https://github.com/timarney/react-app-rewired).

## Installation

```sh
yarn add --dev react-app-rewire-idx
```

or

```sh
npm install --save-dev  react-app-rewire-idx
```

## Usage

```js
// config-overrides.js
const rewireIdx = require('react-app-rewire-idx');

module.exports = function override (config, env) {
  config = rewireIdx(config, env);
  // other rewires...
  return config;
}
```

or

```js
// config-overrides.js
const { compose } = require('react-app-required')
const rewireIdx = require('react-app-rewire-idx');

module.exports = compose(
  rewireIdx,
  // other rewires...
);
```
