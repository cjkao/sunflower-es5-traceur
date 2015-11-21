var dart_utils = typeof module != "undefined" && module.exports || {};
(function(dart_utils) {
  'use strict';
  var defineProperty = Object.defineProperty;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var StrongModeError = function($__super) {
    function StrongModeError(message) {
      $traceurRuntime.superConstructor(StrongModeError).call(this, message);
    }
    return ($traceurRuntime.createClass)(StrongModeError, {}, {}, $__super);
  }(Error);
  function throwStrongModeError(message) {
    throw new StrongModeError(message);
  }
  dart_utils.throwStrongModeError = throwStrongModeError;
  function throwInternalError(message) {
    throw Error(message);
  }
  dart_utils.throwInternalError = throwInternalError;
  function assert(condition) {
    if (!condition)
      throwInternalError("The compiler is broken: failed assert");
  }
  dart_utils.assert = assert;
  function getOwnNamesAndSymbols(obj) {
    return getOwnPropertyNames(obj).concat(getOwnPropertySymbols(obj));
  }
  dart_utils.getOwnNamesAndSymbols = getOwnNamesAndSymbols;
  function safeGetOwnProperty(obj, name) {
    var desc = getOwnPropertyDescriptor(obj, name);
    if (desc)
      return desc.value;
  }
  dart_utils.safeGetOwnProperty = safeGetOwnProperty;
  function defineLazyProperty(to, name, desc) {
    var init = desc.get;
    var value = null;
    function lazySetter(x) {
      init = null;
      value = x;
    }
    function circularInitError() {
      throwInternalError('circular initialization for field ' + name);
    }
    function lazyGetter() {
      if (init == null)
        return value;
      var f = init;
      init = circularInitError;
      lazySetter(f());
      return value;
    }
    desc.get = lazyGetter;
    desc.configurable = true;
    if (desc.set)
      desc.set = lazySetter;
    return defineProperty(to, name, desc);
  }
  dart_utils.defineLazyProperty = defineLazyProperty;
  function defineLazy(to, from) {
    var $__5 = true;
    var $__6 = false;
    var $__7 = undefined;
    try {
      for (var $__3 = void 0,
          $__2 = (getOwnNamesAndSymbols(from))[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
        var name = $__3.value;
        {
          defineLazyProperty(to, name, getOwnPropertyDescriptor(from, name));
        }
      }
    } catch ($__8) {
      $__6 = true;
      $__7 = $__8;
    } finally {
      try {
        if (!$__5 && $__2.return != null) {
          $__2.return();
        }
      } finally {
        if ($__6) {
          throw $__7;
        }
      }
    }
  }
  dart_utils.defineLazy = defineLazy;
  function defineMemoizedGetter(obj, name, getter) {
    return defineLazyProperty(obj, name, {get: getter});
  }
  dart_utils.defineMemoizedGetter = defineMemoizedGetter;
  function copyTheseProperties(to, from, names) {
    var $__5 = true;
    var $__6 = false;
    var $__7 = undefined;
    try {
      for (var $__3 = void 0,
          $__2 = (names)[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
        var name = $__3.value;
        {
          defineProperty(to, name, getOwnPropertyDescriptor(from, name));
        }
      }
    } catch ($__8) {
      $__6 = true;
      $__7 = $__8;
    } finally {
      try {
        if (!$__5 && $__2.return != null) {
          $__2.return();
        }
      } finally {
        if ($__6) {
          throw $__7;
        }
      }
    }
    return to;
  }
  dart_utils.copyTheseProperties = copyTheseProperties;
  function copyProperties(to, from) {
    return copyTheseProperties(to, from, getOwnNamesAndSymbols(from));
  }
  dart_utils.copyProperties = copyProperties;
  function export_(to, from, show, hide) {
    if (show == void 0) {
      show = getOwnNamesAndSymbols(from);
    }
    if (hide != void 0) {
      var hideMap = new Set(hide);
      show = show.filter(function(k) {
        return !hideMap.has(k);
      });
    }
    return copyTheseProperties(to, from, show);
  }
  dart_utils.export = export_;
})(dart_utils);
