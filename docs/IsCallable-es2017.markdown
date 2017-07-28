# IsCallable

Per the ECMAScript 2017 (8th Edition) specification

## Abstract Operation: [7.2.3 `IsCallable`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-iscallable)

> The abstract operation IsCallable determines if argument, which must be an
> ECMAScript language value, is a callable function with a [[Call]] internal
> method.
> 
> 1.  If Type(argument) is not Object, return false.
> 2.  If argument has a [[Call]] internal method, return true.
> 3.  Return false.

**NOTE:** This module substitutes:

-   a combination or checking if argument is null and the `typeof argument`
    as a replacement for `Type(argument)`
