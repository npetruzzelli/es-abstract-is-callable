# IsCallable 

A method to determine if an argument is a callable function with a call method.
This method follows ECMAScript's specification for the 'IsCallable ' abstract
operation.

Currently, this module only supports the ES2017 (ES8) specification.

**This module follows the spec in order of operations, but has no way of
checking internal methods. It checks against public methods instead. You may be
interested in [is-callable](https://www.npmjs.com/package/is-callable) as an
alternative.**

## Installation Using [npm](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```
npm install es-abstract-is-callable
```

## Example Usage

```javascript
var isCallable = require('es-abstract-is-callable')

var a = {
    yep: function() {},
    nope: "foo"
}

function b() {}

var c = {
    call: function() {}
}

console.log(isCallable(a))      // => false
console.log(isCallable(a.yep))  // => true
console.log(isCallable(a.nope)) // => false
console.log(isCallable(b))      // => true
console.log(isCallable(c))      // => true
```

## Documentation

-   [API](#api)
-   [ECMAScript Specification References](./docs/IsCallable-es2017.markdown)

## API

### IsCallable ( argument )

The abstract operation IsCallable determines if argument, which must be an
ECMAScript language value, is a callable function with a [[Call]] internal
method.

A Boolean value is returned.

#### argument

Type: `*`

The value to check.

## Related Projects

-   **[is-callable](https://github.com/ljharb/is-callable)**: "Is this JS value
    callable? Works with Functions and GeneratorFunctions, despite ES6
    @@toStringTag."
-   **[es-abstract](https://github.com/ljharb/es-abstract)**: a single library
    for multiple ECMAScript abstract operations.
