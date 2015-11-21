dart_library.library('dart/js', null, ["dart/_runtime", 'dart/core', 'dart/collection', 'dart/_js_helper'], [], function(exports, dart, core, collection, _js_helper) {
  'use strict';
  var dartx = dart.dartx;
  dart.defineLazyProperties(exports, {get context() {
      return _wrapToDart(dart.global);
    }});
  var _jsObject = Symbol('_jsObject');
  var JsObject = function($__super) {
    var $__4;
    function JsObject() {
      $traceurRuntime.superConstructor(JsObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsObject, ($__4 = {}, Object.defineProperty($__4, "_fromJs", {
      value: function(jsObject) {
        this[_jsObject] = jsObject;
        dart.assert(this[_jsObject] != null);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "get", {
      value: function(property) {
        if (!(typeof property == 'string') && !(typeof property == 'number')) {
          dart.throw(new core.ArgumentError("property is not a String or num"));
        }
        return _convertToDart(this[_jsObject][property]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "set", {
      value: function(property, value) {
        if (!(typeof property == 'string') && !(typeof property == 'number')) {
          dart.throw(new core.ArgumentError("property is not a String or num"));
        }
        this[_jsObject][property] = _convertToJS(value);
        return value;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "hashCode", {
      get: function() {
        return 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, '==', {
      value: function(other) {
        return dart.is(other, JsObject) && this[_jsObject] === dart.dload(other, _jsObject);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "hasProperty", {
      value: function(property) {
        if (!(typeof property == 'string') && !(typeof property == 'number')) {
          dart.throw(new core.ArgumentError("property is not a String or num"));
        }
        return property in this[_jsObject];
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "deleteProperty", {
      value: function(property) {
        if (!(typeof property == 'string') && !(typeof property == 'number')) {
          dart.throw(new core.ArgumentError("property is not a String or num"));
        }
        delete this[_jsObject][property];
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "instanceof", {
      value: function(type) {
        return this[_jsObject] instanceof _convertToJS(type);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "toString", {
      value: function() {
        try {
          return String(this[_jsObject]);
        } catch (e) {
          return $traceurRuntime.superGet(this, JsObject.prototype, "toString").call(this);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "callMethod", {
      value: function(method, args) {
        if (args === void 0)
          args = null;
        if (!(typeof method == 'string') && !(typeof method == 'number')) {
          dart.throw(new core.ArgumentError("method is not a String or num"));
        }
        if (args != null)
          args = core.List.from(args[dartx.map](_convertToJS));
        var fn = this[_jsObject][method];
        if (!(fn instanceof Function)) {
          dart.throw(new core.NoSuchMethodError(this[_jsObject], core.Symbol.new(dart.as(method, core.String)), args, dart.map()));
        }
        return _convertToDart(fn.apply(this[_jsObject], args));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__4), {
      new: function(constructor, arguments$) {
        if (arguments$ === void 0)
          arguments$ = null;
        var ctor = constructor[_jsObject];
        if (arguments$ == null) {
          return _wrapToDart(new ctor());
        }
        return _wrapToDart(new (Function.prototype.bind.apply(ctor, $traceurRuntime.spread([null], arguments$)))());
      },
      fromBrowserObject: function(object) {
        if (typeof object == 'number' || typeof object == 'string' || typeof object == 'boolean' || object == null) {
          dart.throw(new core.ArgumentError("object cannot be a num, string, bool, or null"));
        }
        return _wrapToDart(_convertToJS(object));
      },
      jsify: function(object) {
        if (!dart.is(object, core.Map) && !dart.is(object, core.Iterable)) {
          dart.throw(new core.ArgumentError("object must be a Map or Iterable"));
        }
        return _wrapToDart(JsObject._convertDataTree(object));
      },
      _convertDataTree: function(data) {
        var _convertedObjects = collection.HashMap.identity();
        function _convert(o) {
          if (dart.notNull(_convertedObjects.containsKey(o))) {
            return _convertedObjects.get(o);
          }
          if (dart.is(o, core.Map)) {
            var convertedMap = {};
            _convertedObjects.set(o, convertedMap);
            var $__8 = true;
            var $__9 = false;
            var $__10 = undefined;
            try {
              for (var $__6 = void 0,
                  $__5 = (dart.as(dart.dload(o, 'keys'), core.Iterable))[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
                var key = $__6.value;
                {
                  convertedMap[key] = _convert(dart.dindex(o, key));
                }
              }
            } catch ($__11) {
              $__9 = true;
              $__10 = $__11;
            } finally {
              try {
                if (!$__8 && $__5.return != null) {
                  $__5.return();
                }
              } finally {
                if ($__9) {
                  throw $__10;
                }
              }
            }
            return convertedMap;
          } else if (dart.is(o, core.Iterable)) {
            var convertedList = [];
            _convertedObjects.set(o, convertedList);
            convertedList[dartx.addAll](dart.as(dart.dsend(o, 'map', _convert), core.Iterable));
            return convertedList;
          } else {
            return _convertToJS(o);
          }
        }
        dart.fn(_convert);
        return _convert(data);
      }
    }, $__super);
  }(core.Object);
  dart.defineNamedConstructor(JsObject, '_fromJs');
  dart.setSignature(JsObject, {
    constructors: function() {
      return ({
        _fromJs: [JsObject, [dart.dynamic]],
        new: [JsObject, [JsFunction], [core.List]],
        fromBrowserObject: [JsObject, [dart.dynamic]],
        jsify: [JsObject, [dart.dynamic]]
      });
    },
    methods: function() {
      return ({
        get: [dart.dynamic, [core.Object]],
        set: [dart.dynamic, [core.Object, dart.dynamic]],
        hasProperty: [core.bool, [dart.dynamic]],
        deleteProperty: [dart.void, [dart.dynamic]],
        instanceof: [core.bool, [JsFunction]],
        callMethod: [dart.dynamic, [dart.dynamic], [core.List]]
      });
    },
    statics: function() {
      return ({_convertDataTree: [dart.dynamic, [dart.dynamic]]});
    },
    names: ['_convertDataTree']
  });
  var JsFunction = function($__super) {
    function JsFunction() {
      $traceurRuntime.superConstructor(JsFunction).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsFunction, {
      _fromJs: function(jsObject) {
        $traceurRuntime.superGet(this, JsFunction.prototype, "_fromJs").call(this, jsObject);
      },
      apply: function(args, opts) {
        var thisArg = opts && 'thisArg' in opts ? opts.thisArg : null;
        return _convertToDart(this[_jsObject].apply(_convertToJS(thisArg), args == null ? null : core.List.from(args[dartx.map](_convertToJS))));
      }
    }, {withThis: function(f) {
        return new JsFunction._fromJs(function() {
          var args = [_convertToDart(this)];
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (arguments)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var arg = $__6.value;
              {
                args.push(_convertToDart(arg));
              }
            }
          } catch ($__11) {
            $__9 = true;
            $__10 = $__11;
          } finally {
            try {
              if (!$__8 && $__5.return != null) {
                $__5.return();
              }
            } finally {
              if ($__9) {
                throw $__10;
              }
            }
          }
          return _convertToJS(f.apply((void 0), $traceurRuntime.spread(args)));
        });
      }}, $__super);
  }(JsObject);
  dart.defineNamedConstructor(JsFunction, '_fromJs');
  dart.setSignature(JsFunction, {
    constructors: function() {
      return ({
        withThis: [JsFunction, [core.Function]],
        _fromJs: [JsFunction, [dart.dynamic]]
      });
    },
    methods: function() {
      return ({apply: [dart.dynamic, [core.List], {thisArg: dart.dynamic}]});
    }
  });
  var _checkIndex = Symbol('_checkIndex');
  var _checkInsertIndex = Symbol('_checkInsertIndex');
  var JsArray$ = dart.generic(function(E) {
    var JsArray = function($__super) {
      var $__4;
      function JsArray() {
        $traceurRuntime.superConstructor(JsArray).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(JsArray, ($__4 = {}, Object.defineProperty($__4, "JsArray", {
        value: function() {
          $traceurRuntime.superGet(this, JsArray.prototype, "_fromJs").call(this, []);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "from", {
        value: function(other) {
          $traceurRuntime.superGet(this, JsArray.prototype, "_fromJs").call(this, (function() {
            var _ = [];
            _[dartx.addAll](other[dartx.map](dart.as(_convertToJS, __CastType0)));
            return _;
          })());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "_fromJs", {
        value: function(jsObject) {
          $traceurRuntime.superGet(this, JsArray.prototype, "_fromJs").call(this, jsObject);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _checkIndex, {
        value: function(index) {
          if (typeof index == 'number' && (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length))) {
            dart.throw(new core.RangeError.range(index, 0, this.length));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _checkInsertIndex, {
        value: function(index) {
          if (typeof index == 'number' && (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length) + 1)) {
            dart.throw(new core.RangeError.range(index, 0, this.length));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "get", {
        value: function(index) {
          if (typeof index == 'number' && index == index[dartx.toInt]()) {
            this[_checkIndex](dart.asInt(index));
          }
          return dart.as($traceurRuntime.superGet(this, JsArray.prototype, "get").call(this, index), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "set", {
        value: function(index, value) {
          dart.as(value, E);
          if (typeof index == 'number' && index == index[dartx.toInt]()) {
            this[_checkIndex](dart.asInt(index));
          }
          $traceurRuntime.superGet(this, JsArray.prototype, "set").call(this, index, value);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          var len = this[_jsObject].length;
          if (typeof len === "number" && len >>> 0 === len) {
            return len;
          }
          dart.throw(new core.StateError('Bad JsArray length'));
        },
        configurable: true,
        enumerable: true,
        set: function(length) {
          $traceurRuntime.superGet(this, JsArray.prototype, "set").call(this, 'length', length);
        }
      }), Object.defineProperty($__4, "add", {
        value: function(value) {
          dart.as(value, E);
          this.callMethod('push', [value]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(iterable) {
          dart.as(iterable, core.Iterable$(E));
          var list = iterable instanceof Array ? iterable : core.List.from(iterable);
          this.callMethod('push', dart.as(list, core.List));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "insert", {
        value: function(index, element) {
          dart.as(element, E);
          this[_checkInsertIndex](index);
          this.callMethod('splice', [index, 0, element]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeAt", {
        value: function(index) {
          this[_checkIndex](index);
          return dart.as(dart.dindex(this.callMethod('splice', [index, 1]), 0), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeLast", {
        value: function() {
          if (this.length == 0)
            dart.throw(new core.RangeError(-1));
          return dart.as(this.callMethod('pop'), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeRange", {
        value: function(start, end) {
          JsArray$()._checkRange(start, end, this.length);
          this.callMethod('splice', [start, dart.notNull(end) - dart.notNull(start)]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "setRange", {
        value: function(start, end, iterable, skipCount) {
          dart.as(iterable, core.Iterable$(E));
          if (skipCount === void 0)
            skipCount = 0;
          JsArray$()._checkRange(start, end, this.length);
          var length = dart.notNull(end) - dart.notNull(start);
          if (length == 0)
            return;
          if (dart.notNull(skipCount) < 0)
            dart.throw(new core.ArgumentError(skipCount));
          var args = [start, length];
          args[dartx.addAll](iterable[dartx.skip](skipCount)[dartx.take](length));
          this.callMethod('splice', args);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "sort", {
        value: function(compare) {
          if (compare === void 0)
            compare = null;
          dart.as(compare, dart.functionType(core.int, [E, E]));
          this.callMethod('sort', compare == null ? [] : [compare]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {_checkRange: function(start, end, length) {
          if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(length)) {
            dart.throw(new core.RangeError.range(start, 0, length));
          }
          if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(length)) {
            dart.throw(new core.RangeError.range(end, start, length));
          }
        }}, $__super);
    }(dart.mixin(JsObject, collection.ListMixin$(E)));
    dart.defineNamedConstructor(JsArray, 'from');
    dart.defineNamedConstructor(JsArray, '_fromJs');
    dart.setSignature(JsArray, {
      constructors: function() {
        return ({
          JsArray: [JsArray$(E), []],
          from: [JsArray$(E), [core.Iterable$(E)]],
          _fromJs: [JsArray$(E), [dart.dynamic]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _checkIndex, {
          value: [dart.dynamic, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _checkInsertIndex, {
          value: [dart.dynamic, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "get", {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "set", {
          value: [dart.void, [core.Object, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "add", {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addAll", {
          value: [dart.void, [core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "insert", {
          value: [dart.void, [core.int, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeAt", {
          value: [E, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeLast", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "setRange", {
          value: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "sort", {
          value: [dart.void, [], [dart.functionType(core.int, [E, E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({_checkRange: [dart.dynamic, [core.int, core.int, core.int]]});
      },
      names: ['_checkRange']
    });
    dart.defineExtensionMembers(JsArray, ['get', 'set', 'add', 'addAll', 'insert', 'removeAt', 'removeLast', 'removeRange', 'setRange', 'sort', 'length', 'length']);
    return JsArray;
  });
  var JsArray = JsArray$();
  function _isBrowserType(o) {
    return o instanceof Blob || o instanceof Event || window.KeyRange && o instanceof KeyRange || o instanceof ImageData || o instanceof Node || window.TypedData && o instanceof TypedData || o instanceof Window;
  }
  dart.fn(_isBrowserType, core.bool, [dart.dynamic]);
  var _dartObj = Symbol('_dartObj');
  var _DartObject = function($__super) {
    function _DartObject() {
      $traceurRuntime.superConstructor(_DartObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_DartObject, {_DartObject: function(dartObj) {
        this[_dartObj] = dartObj;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(_DartObject, {constructors: function() {
      return ({_DartObject: [_DartObject, [dart.dynamic]]});
    }});
  function _convertToJS(o) {
    if (o == null || typeof o == 'string' || typeof o == 'number' || typeof o == 'boolean' || dart.notNull(_isBrowserType(o))) {
      return o;
    } else if (dart.is(o, core.DateTime)) {
      return _js_helper.Primitives.lazyAsJsDate(o);
    } else if (dart.is(o, JsObject)) {
      return dart.dload(o, _jsObject);
    } else if (dart.is(o, core.Function)) {
      return _putIfAbsent(exports._jsProxies, o, _wrapDartFunction);
    } else {
      return _putIfAbsent(exports._jsProxies, o, dart.fn(function(o) {
        return new _DartObject(o);
      }, _DartObject, [dart.dynamic]));
    }
  }
  dart.fn(_convertToJS);
  function _wrapDartFunction(f) {
    var wrapper = function() {
      var args = Array.prototype.map.call(arguments, _convertToDart);
      return _convertToJS(f.apply((void 0), $traceurRuntime.spread(args)));
    };
    dart.dsetindex(exports._dartProxies, wrapper, f);
    return wrapper;
  }
  dart.fn(_wrapDartFunction);
  function _convertToDart(o) {
    if (o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" || dart.notNull(_isBrowserType(o))) {
      return o;
    } else if (o instanceof Date) {
      var ms = o.getTime();
      return new core.DateTime.fromMillisecondsSinceEpoch(dart.asInt(ms));
    } else if (dart.is(o, _DartObject) && dart.jsobject != dart.realRuntimeType(o)) {
      return dart.dload(o, _dartObj);
    } else {
      return _putIfAbsent(exports._dartProxies, o, _wrapToDart);
    }
  }
  dart.fn(_convertToDart, core.Object, [dart.dynamic]);
  function _wrapToDart(o) {
    if (typeof o == "function") {
      return new JsFunction._fromJs(o);
    }
    if (o instanceof Array) {
      return new JsArray._fromJs(o);
    }
    return new JsObject._fromJs(o);
  }
  dart.fn(_wrapToDart, JsObject, [dart.dynamic]);
  dart.defineLazyProperties(exports, {
    get _dartProxies() {
      return new WeakMap();
    },
    get _jsProxies() {
      return new WeakMap();
    }
  });
  function _putIfAbsent(weakMap, o, getValue) {
    var value = weakMap.get(o);
    if (value == null) {
      value = dart.dcall(getValue, o);
      weakMap.set(o, value);
    }
    return value;
  }
  dart.fn(_putIfAbsent, core.Object, [dart.dynamic, dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic])]);
  function allowInterop(f) {
    return f;
  }
  dart.fn(allowInterop, core.Function, [core.Function]);
  dart.defineLazyProperties(exports, {
    get _interopCaptureThisExpando() {
      return new (core.Expando$(core.Function))();
    },
    set _interopCaptureThisExpando(_) {}
  });
  function allowInteropCaptureThis(f) {
    var ret = exports._interopCaptureThisExpando.get(f);
    if (ret == null) {
      ret = dart.as(function() {
        var args = [this];
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (arguments)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var arg = $__6.value;
            {
              args.push(arg);
            }
          }
        } catch ($__11) {
          $__9 = true;
          $__10 = $__11;
        } finally {
          try {
            if (!$__8 && $__5.return != null) {
              $__5.return();
            }
          } finally {
            if ($__9) {
              throw $__10;
            }
          }
        }
        return f.apply((void 0), $traceurRuntime.spread(args));
      }, core.Function);
      exports._interopCaptureThisExpando.set(f, ret);
    }
    return ret;
  }
  dart.fn(allowInteropCaptureThis, core.Function, [core.Function]);
  var __CastType0$ = dart.generic(function(E) {
    var __CastType0 = dart.typedef('__CastType0', function() {
      return dart.functionType(dart.dynamic, [E]);
    });
    return __CastType0;
  });
  var __CastType0 = __CastType0$();
  exports.JsObject = JsObject;
  exports.JsFunction = JsFunction;
  exports.JsArray$ = JsArray$;
  exports.JsArray = JsArray;
  exports.allowInterop = allowInterop;
  exports.allowInteropCaptureThis = allowInteropCaptureThis;
});
