dart_library.library('dart/_operations', null, [], ['dart/async', 'dart/collection', 'dart/core', 'dart/_js_helper', 'dart/_classes', 'dart/_errors', 'dart/_rtti', 'dart/_types'], function(exports, async, collection, core, _js_helper, classes, errors, rtti, types) {
  'use strict';
  var getOwnNamesAndSymbols = dart_utils.getOwnNamesAndSymbols;
  var throwError = dart_utils.throwError;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function _canonicalFieldName(obj, name, args, displayName) {
    name = classes.canonicalMember(obj, name);
    if (name)
      return name;
    errors.throwNoSuchMethod(obj, displayName, args);
  }
  function dload(obj, field) {
    field = _canonicalFieldName(obj, field, [], field);
    if (classes.hasMethod(obj, field)) {
      return classes.bind(obj, field);
    }
    var result = obj[field];
    if (typeof result == "function" && !hasOwnProperty.call(obj, field)) {
      return result.bind(obj);
    }
    return result;
  }
  exports.dload = dload;
  function dput(obj, field, value) {
    field = _canonicalFieldName(obj, field, [value], field);
    obj[field] = value;
    return value;
  }
  exports.dput = dput;
  function checkApply(type, actuals) {
    if (actuals.length < type.args.length)
      return false;
    var index = 0;
    for (var i = 0; i < type.args.length; ++i) {
      if (!instanceOfOrNull(actuals[i], type.args[i]))
        return false;
      ++index;
    }
    if (actuals.length == type.args.length)
      return true;
    var extras = actuals.length - type.args.length;
    if (type.optionals.length > 0) {
      if (extras > type.optionals.length)
        return false;
      for (var i$__11 = 0,
          j = index; i$__11 < extras; ++i$__11, ++j) {
        if (!instanceOfOrNull(actuals[j], type.optionals[i$__11]))
          return false;
      }
      return true;
    }
    if (extras != 1)
      return false;
    if (getOwnPropertyNames(type.named).length == 0)
      return false;
    var opts = actuals[index];
    var names = getOwnPropertyNames(opts);
    if (names.length == 0)
      return false;
    var $__4 = true;
    var $__5 = false;
    var $__6 = undefined;
    try {
      for (var $__2 = void 0,
          $__1 = (names)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
        var name = $__2.value;
        {
          if (!(hasOwnProperty.call(type.named, name))) {
            return false;
          }
          if (!instanceOfOrNull(opts[name], type.named[name]))
            return false;
        }
      }
    } catch ($__7) {
      $__5 = true;
      $__6 = $__7;
    } finally {
      try {
        if (!$__4 && $__1.return != null) {
          $__1.return();
        }
      } finally {
        if ($__5) {
          throw $__6;
        }
      }
    }
    return true;
  }
  function throwNoSuchMethod(obj, name, args, opt_func) {
    if (obj === void 0)
      obj = opt_func;
    errors.throwNoSuchMethod(obj, name, args);
  }
  function checkAndCall(f, ftype, obj, args, name) {
    if (!(f instanceof Function)) {
      if (f != null) {
        ftype = classes.getMethodType(f, 'call');
        f = f.call;
      }
      if (!(f instanceof Function)) {
        throwNoSuchMethod(obj, name, args);
      }
    }
    if (ftype === void 0) {
      ftype = rtti.read(f);
    }
    if (!ftype) {
      return f.apply(obj, args);
    }
    if (checkApply(ftype, args)) {
      return f.apply(obj, args);
    }
    throwNoSuchMethod(obj, name, args, f);
  }
  function dcall(f) {
    for (var args = [],
        $__8 = 1; $__8 < arguments.length; $__8++)
      args[$__8 - 1] = arguments[$__8];
    var ftype = rtti.read(f);
    return checkAndCall(f, ftype, void 0, args, 'call');
  }
  exports.dcall = dcall;
  function callMethod(obj, name, args, displayName) {
    var symbol = _canonicalFieldName(obj, name, args, displayName);
    var f = obj != null ? obj[symbol] : null;
    var ftype = classes.getMethodType(obj, name);
    return checkAndCall(f, ftype, obj, args, displayName);
  }
  function dsend(obj, method) {
    for (var args = [],
        $__9 = 2; $__9 < arguments.length; $__9++)
      args[$__9 - 2] = arguments[$__9];
    return callMethod(obj, method, args, method);
  }
  exports.dsend = dsend;
  function dindex(obj, index) {
    return callMethod(obj, 'get', [index], '[]');
  }
  exports.dindex = dindex;
  function dsetindex(obj, index, value) {
    callMethod(obj, 'set', [index, value], '[]=');
    return value;
  }
  exports.dsetindex = dsetindex;
  function _ignoreTypeFailure(actual, type) {
    var isSubtype = types.isSubtype;
    if (isSubtype(type, core.Iterable) && isSubtype(actual, core.Iterable) || isSubtype(type, async.Future) && isSubtype(actual, async.Future) || isSubtype(type, core.Map) && isSubtype(actual, core.Map) || isSubtype(type, core.Function) && isSubtype(actual, core.Function) || isSubtype(type, async.Stream) && isSubtype(actual, async.Stream) || isSubtype(type, async.StreamSubscription) && isSubtype(actual, async.StreamSubscription)) {
      console.warn('Ignoring cast fail from ' + types.typeName(actual) + ' to ' + types.typeName(type));
      return true;
    }
    return false;
  }
  function strongInstanceOf(obj, type) {
    var actual = rtti.realRuntimeType(obj);
    return types.isSubtype(actual, type) || actual == types.jsobject;
  }
  exports.strongInstanceOf = strongInstanceOf;
  function instanceOfOrNull(obj, type) {
    if ((obj == null) || strongInstanceOf(obj, type))
      return true;
    return false;
  }
  function instanceOf(obj, type) {
    if (strongInstanceOf(obj, type))
      return true;
    if (types.isGroundType(type))
      return false;
    var actual = rtti.realRuntimeType(obj);
    dart_utils.throwStrongModeError('Strong mode is check failure: ' + types.typeName(actual) + ' does not soundly subtype ' + types.typeName(type));
  }
  exports.instanceOf = instanceOf;
  function cast(obj, type) {
    if (instanceOfOrNull(obj, type))
      return obj;
    var actual = rtti.realRuntimeType(obj);
    if (types.isGroundType(type))
      errors.throwCastError(actual, type);
    if (_ignoreTypeFailure(actual, type))
      return obj;
    dart_utils.throwStrongModeError('Strong mode cast failure from ' + types.typeName(actual) + ' to ' + types.typeName(type));
  }
  exports.cast = cast;
  function asInt(obj) {
    if (Math.floor(obj) != obj) {
      errors.throwCastError(rtti.realRuntimeType(obj), core.int);
    }
    return obj;
  }
  exports.asInt = asInt;
  function arity(f) {
    return {
      min: f.length,
      max: f.length
    };
  }
  exports.arity = arity;
  function equals(x, y) {
    if (x == null || y == null)
      return x == y;
    var eq = x['=='];
    return eq ? eq.call(x, y) : x === y;
  }
  exports.equals = equals;
  function notNull(x) {
    if (x == null)
      errors.throwNullValueError();
    return x;
  }
  exports.notNull = notNull;
  function map(values) {
    var map = collection.LinkedHashMap.new();
    if (Array.isArray(values)) {
      for (var i = 0,
          end = values.length - 1; i < end; i += 2) {
        var key = values[i];
        var value = values[i + 1];
        map.set(key, value);
      }
    } else if ((typeof values === 'undefined' ? 'undefined' : $traceurRuntime.typeof(values)) === 'object') {
      var $__4 = true;
      var $__5 = false;
      var $__6 = undefined;
      try {
        for (var $__2 = void 0,
            $__1 = (getOwnPropertyNames(values))[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
          var key$__12 = $__2.value;
          {
            map.set(key$__12, values[key$__12]);
          }
        }
      } catch ($__7) {
        $__5 = true;
        $__6 = $__7;
      } finally {
        try {
          if (!$__4 && $__1.return != null) {
            $__1.return();
          }
        } finally {
          if ($__5) {
            throw $__6;
          }
        }
      }
    }
    return map;
  }
  exports.map = map;
  function assert(condition) {
    if (!condition)
      errors.throwAssertionError();
  }
  exports.assert = assert;
  var _stack = new WeakMap();
  function throw_(obj) {
    if (obj != null && ((typeof obj === 'undefined' ? 'undefined' : $traceurRuntime.typeof(obj)) == 'object' || typeof obj == 'function')) {
      _stack.set(obj, new Error());
    }
    throw obj;
  }
  exports.throw = throw_;
  function getError(exception) {
    var stack = _stack.get(exception);
    return stack !== void 0 ? stack : exception;
  }
  function stackPrint(exception) {
    var error = getError(exception);
    console.log(error.stack ? error.stack : 'No stack trace for: ' + error);
  }
  exports.stackPrint = stackPrint;
  function stackTrace(exception) {
    var error = getError(exception);
    return _js_helper.getTraceFromException(error);
  }
  exports.stackTrace = stackTrace;
  function nullSafe(obj) {
    for (var callbacks = [],
        $__10 = 1; $__10 < arguments.length; $__10++)
      callbacks[$__10 - 1] = arguments[$__10];
    if (obj == null)
      return obj;
    var $__4 = true;
    var $__5 = false;
    var $__6 = undefined;
    try {
      for (var $__2 = void 0,
          $__1 = (callbacks)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
        var callback = $__2.value;
        {
          obj = callback(obj);
          if (obj == null)
            break;
        }
      }
    } catch ($__7) {
      $__5 = true;
      $__6 = $__7;
    } finally {
      try {
        if (!$__4 && $__1.return != null) {
          $__1.return();
        }
      } finally {
        if ($__5) {
          throw $__6;
        }
      }
    }
    return obj;
  }
  exports.nullSafe = nullSafe;
  var _value = Symbol('_value');
  function multiKeyPutIfAbsent(map, keys, valueFn) {
    var $__4 = true;
    var $__5 = false;
    var $__6 = undefined;
    try {
      for (var $__2 = void 0,
          $__1 = (keys)[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
        var k = $__2.value;
        {
          var value$__13 = map.get(k);
          if (!value$__13) {
            map.set(k, value$__13 = new Map());
          }
          map = value$__13;
        }
      }
    } catch ($__7) {
      $__5 = true;
      $__6 = $__7;
    } finally {
      try {
        if (!$__4 && $__1.return != null) {
          $__1.return();
        }
      } finally {
        if ($__5) {
          throw $__6;
        }
      }
    }
    if (map.has(_value))
      return map.get(_value);
    var value = valueFn();
    map.set(_value, value);
    return value;
  }
  var constants = new Map();
  function constant(obj) {
    var objectKey = [rtti.realRuntimeType(obj)];
    var $__4 = true;
    var $__5 = false;
    var $__6 = undefined;
    try {
      for (var $__2 = void 0,
          $__1 = (getOwnNamesAndSymbols(obj))[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
        var name = $__2.value;
        {
          objectKey.push(name);
          objectKey.push(obj[name]);
        }
      }
    } catch ($__7) {
      $__5 = true;
      $__6 = $__7;
    } finally {
      try {
        if (!$__4 && $__1.return != null) {
          $__1.return();
        }
      } finally {
        if ($__5) {
          throw $__6;
        }
      }
    }
    return multiKeyPutIfAbsent(constants, objectKey, function() {
      return obj;
    });
  }
  exports.const = constant;
  function hashCode(obj) {
    if (obj == null) {
      return 0;
    }
    switch ((typeof obj === 'undefined' ? 'undefined' : $traceurRuntime.typeof(obj))) {
      case "number":
      case "boolean":
        return obj & 0x1FFFFFFF;
      case "string":
        return obj.length;
    }
    return obj.hashCode;
  }
  exports.hashCode = hashCode;
  function toString(obj) {
    if (obj == null) {
      return "null";
    }
    return obj.toString();
  }
  exports.toString = toString;
  function noSuchMethod(obj, invocation) {
    if (obj == null) {
      errors.throwNoSuchMethod(obj, invocation.memberName, invocation.positionalArguments, invocation.namedArguments);
    }
    switch ((typeof obj === 'undefined' ? 'undefined' : $traceurRuntime.typeof(obj))) {
      case "number":
      case "boolean":
      case "string":
        errors.throwNoSuchMethod(obj, invocation.memberName, invocation.positionalArguments, invocation.namedArguments);
    }
    return obj.noSuchMethod(invocation);
  }
  exports.noSuchMethod = noSuchMethod;
  var JsIterator = function() {
    function JsIterator(dartIterator) {
      this.dartIterator = dartIterator;
    }
    return ($traceurRuntime.createClass)(JsIterator, {next: function() {
        var i = this.dartIterator;
        var done = !i.moveNext();
        return {
          done: done,
          value: done ? void 0 : i.current
        };
      }}, {});
  }();
  exports.JsIterator = JsIterator;
});
