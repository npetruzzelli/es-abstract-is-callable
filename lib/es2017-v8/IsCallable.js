/**
 * ECMAScript 2017 (8th Edition): `IsCallable` Abstract Operation.
 *
 * The abstract operation IsCallable determines if argument, which must be an
 * ECMAScript language value, is a callable function with a [[Call]] internal
 * method.
 *
 * 1.  If Type(argument) is not Object, return false.
 * 2.  If argument has a [[Call]] internal method, return true.
 * 3.  Return false.
 *
 * **NOTE:** This module substitutes:
 *
 * -   a combination or checking if argument is null and the `typeof argument`
 *     as a replacement for `Type(argument)`
 */
function IsCallable(argument) {
  var TYPE = typeof argument
  if (argument == null || (TYPE !== 'object' && TYPE !== 'function')) {
    return false
  }
  return typeof argument.call === 'function'
}

module.exports = IsCallable
