dart_library.library('dart/_errors', null, [], ['dart/_operations', 'dart/core', 'dart/_js_helper'], function(exports, operations, core, _js_helper) {
  'use strict';
  function throwNoSuchMethod(obj, name, pArgs, nArgs, extras) {
    operations.throw(new core.NoSuchMethodError(obj, name, pArgs, nArgs, extras));
  }
  exports.throwNoSuchMethod = throwNoSuchMethod;
  function throwCastError(actual, type) {
    operations.throw(new _js_helper.CastErrorImplementation(actual, type));
  }
  exports.throwCastError = throwCastError;
  function throwAssertionError() {
    operations.throw(new core.AssertionError());
  }
  exports.throwAssertionError = throwAssertionError;
  function throwNullValueError() {
    operations.throw(new core.NoSuchMethodError(null, new core.Symbol('<Unexpected Null Value>'), null, null, null));
  }
  exports.throwNullValueError = throwNullValueError;
});
