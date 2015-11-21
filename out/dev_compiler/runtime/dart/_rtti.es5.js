dart_library.library('dart/_rtti', null, [], ['dart/core', 'dart/_types'], function(exports, core, types) {
  'use strict';
  var defineLazyProperty = dart_utils.defineLazyProperty;
  var defineProperty = Object.defineProperty;
  function fn(closure) {
    for (var args = [],
        $__2 = 1; $__2 < arguments.length; $__2++)
      args[$__2 - 1] = arguments[$__2];
    if (args.length == 1) {
      defineLazyProperty(closure, _runtimeType, {get: args[0]});
      return closure;
    }
    var t;
    if (args.length == 0) {
      t = types.definiteFunctionType(types.dynamic, Array(closure.length).fill(types.dynamic));
    } else {
      t = types.definiteFunctionType.apply(null, args);
    }
    tag(closure, t);
    return closure;
  }
  exports.fn = fn;
  var _runtimeType = Symbol('_runtimeType');
  function checkPrimitiveType(obj) {
    switch ((typeof obj === 'undefined' ? 'undefined' : $traceurRuntime.typeof(obj))) {
      case "undefined":
        return core.Null;
      case "number":
        return Math.floor(obj) == obj ? core.int : core.double;
      case "boolean":
        return core.bool;
      case "string":
        return core.String;
      case "symbol":
        return Symbol;
    }
    if (obj === null)
      return core.Null;
    return null;
  }
  function runtimeType(obj) {
    var result = checkPrimitiveType(obj);
    if (result !== null)
      return result;
    return obj.runtimeType;
  }
  exports.runtimeType = runtimeType;
  function getFunctionType(obj) {
    var args = Array(obj.length).fill(types.dynamic);
    return types.definiteFunctionType(types.bottom, args);
  }
  function realRuntimeType(obj) {
    var result = checkPrimitiveType(obj);
    if (result !== null)
      return result;
    result = obj[_runtimeType];
    if (result)
      return result;
    result = obj.constructor;
    if (result == Function) {
      return types.jsobject;
    }
    return result;
  }
  exports.realRuntimeType = realRuntimeType;
  function LazyTagged(infoFn) {
    var _Tagged = function() {
      var $__1;
      function _Tagged() {}
      return ($traceurRuntime.createClass)(_Tagged, ($__1 = {}, Object.defineProperty($__1, _runtimeType, {
        get: function() {
          return infoFn();
        },
        configurable: true,
        enumerable: true
      }), $__1), {});
    }();
    return _Tagged;
  }
  exports.LazyTagged = LazyTagged;
  function read(value) {
    return value[_runtimeType];
  }
  exports.read = read;
  function tag(value, info) {
    value[_runtimeType] = info;
  }
  exports.tag = tag;
  function tagComputed(value, compute) {
    defineProperty(value, _runtimeType, {get: compute});
  }
  exports.tagComputed = tagComputed;
  function tagMemoized(value, compute) {
    var cache = null;
    function getter() {
      if (compute == null)
        return cache;
      cache = compute();
      compute = null;
      return cache;
    }
    tagComputed(value, getter);
  }
  exports.tagMemoized = tagMemoized;
});
