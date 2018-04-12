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

#### 1) Using override (react-app-rewired < 1.3.4)

```js
// config-overrides.js
const rewireIdx = require('react-app-rewire-idx');

module.exports = function override(config, env) {
  config = rewireIdx(config, env);
  // other rewires...
  return config;
}
```

#### 2) Using compose

```js
// config-overrides.js
const { compose } = require('react-app-rewired')
const rewireIdx = require('react-app-rewire-idx');

module.exports = compose(
  rewireIdx,
  // other rewires...
);
```
