# pull-css [![NPM version](https://badge.fury.io/js/pull-css.svg)](https://npmjs.org/package/pull-css) [![Build Status](https://travis-ci.org/jamen/pull-css.svg?branch=master)](https://travis-ci.org/Jamen%20Marz/pull-css)

> Parse CSS into ASTs through a pull stream, or vice versa.

```js
pull(
  source(),
  css(), // parse source as CSS
  // ...
)
```

## Installation

```sh
$ npm install --save pull-css
```

## API

### `css(options)`
Parse a pull-stream source with [`css`](https://npmjs.com/packages/css)
 - `options` (`Object`): Options passed to [`css.parse`](https://github.com/reworkcss/css#cssparsecode-options)

Returns a [`through` stream](https://github.com/pull-stream/pull-stream/blob/master/docs/throughs/index.md) that pulls tokens.

```js
pull(
  pull.values([
    'div { color: red }'
  ]),
  css(),
  // ...
)
```

### `css.stringify(options)`
Stringify a pull-stream source that is a [`css` AST](https://github.com/reworkcss/css#ast)  (probably originating from `css()`)
 - `options` (`Object`): Options passed to [`css.stringify`](https://github.com/reworkcss/css#cssstringifyobject-options)

Returns a `through` pull stream that pulls strings.

```js
pull(
  pull.values([
    'div { color: red }'
  ]),
  css(),
  // do transformations on ast...
  // then serialize:
  css.serialize(),
  // ...
)
```

## License

MIT © [Jamen Marz](https://github.com/jamen)
