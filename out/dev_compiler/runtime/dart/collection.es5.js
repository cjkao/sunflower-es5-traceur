dart_library.library('dart/collection', null, ["dart/_runtime", 'dart/core'], ['dart/_internal', 'dart/_js_helper', 'dart/math'], function(exports, dart, core, _internal, _js_helper, math) {
  'use strict';
  var dartx = dart.dartx;
  var _source = Symbol('_source');
  var UnmodifiableListView$ = dart.generic(function(E) {
    var UnmodifiableListView = function($__super) {
      function UnmodifiableListView() {
        $traceurRuntime.superConstructor(UnmodifiableListView).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(UnmodifiableListView, {
        UnmodifiableListView: function(source) {
          this[_source] = source;
        },
        get length() {
          return this[_source][dartx.length];
        },
        get: function(index) {
          return this[_source][dartx.elementAt](index);
        }
      }, {}, $__super);
    }(_internal.UnmodifiableListBase$(E));
    dart.setSignature(UnmodifiableListView, {
      constructors: function() {
        return ({UnmodifiableListView: [exports.UnmodifiableListView$(E), [core.Iterable$(E)]]});
      },
      methods: function() {
        return ({get: [E, [core.int]]});
      }
    });
    dart.defineExtensionMembers(UnmodifiableListView, ['get', 'length']);
    return UnmodifiableListView;
  });
  dart.defineLazyClassGeneric(exports, 'UnmodifiableListView', {get: UnmodifiableListView$});
  function _defaultEquals(a, b) {
    return dart.equals(a, b);
  }
  dart.fn(_defaultEquals, core.bool, [core.Object, core.Object]);
  function _defaultHashCode(a) {
    return dart.hashCode(a);
  }
  dart.fn(_defaultHashCode, core.int, [core.Object]);
  var _Equality$ = dart.generic(function(K) {
    var _Equality = dart.typedef('_Equality', function() {
      return dart.functionType(core.bool, [K, K]);
    });
    return _Equality;
  });
  var _Equality = _Equality$();
  var _Hasher$ = dart.generic(function(K) {
    var _Hasher = dart.typedef('_Hasher', function() {
      return dart.functionType(core.int, [K]);
    });
    return _Hasher;
  });
  var _Hasher = _Hasher$();
  var HashMap$ = dart.generic(function(K, V) {
    var HashMap = function($__super) {
      function HashMap() {
        $traceurRuntime.superConstructor(HashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(HashMap, {}, {
        new: function(opts) {
          var equals = opts && 'equals' in opts ? opts.equals : null;
          var hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
          var isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
          if (isValidKey == null) {
            if (hashCode == null) {
              if (equals == null) {
                return new (_HashMap$(K, V))();
              }
              hashCode = _defaultHashCode;
            } else {
              if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
                return new (_IdentityHashMap$(K, V))();
              }
              if (equals == null) {
                equals = _defaultEquals;
              }
            }
          } else {
            if (hashCode == null) {
              hashCode = _defaultHashCode;
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
          return new (_CustomHashMap$(K, V))(equals, hashCode, isValidKey);
        },
        identity: function() {
          return new (_IdentityHashMap$(K, V))();
        },
        from: function(other) {
          var result = HashMap$(K, V).new();
          other.forEach(dart.fn(function(k, v) {
            result.set(dart.as(k, K), dart.as(v, V));
          }));
          return result;
        },
        fromIterable: function(iterable, opts) {
          var key = opts && 'key' in opts ? opts.key : null;
          var value = opts && 'value' in opts ? opts.value : null;
          var map = HashMap$(K, V).new();
          Maps._fillMapWithMappedIterable(map, iterable, key, value);
          return map;
        },
        fromIterables: function(keys, values) {
          var map = HashMap$(K, V).new();
          Maps._fillMapWithIterables(map, keys, values);
          return map;
        }
      }, $__super);
    }(core.Object);
    HashMap[dart.implements] = function() {
      return [core.Map$(K, V)];
    };
    dart.setSignature(HashMap, {constructors: function() {
        return ({
          new: [HashMap$(K, V), [], {
            equals: dart.functionType(core.bool, [K, K]),
            hashCode: dart.functionType(core.int, [K]),
            isValidKey: dart.functionType(core.bool, [core.Object])
          }],
          identity: [HashMap$(K, V), []],
          from: [HashMap$(K, V), [core.Map]],
          fromIterable: [HashMap$(K, V), [core.Iterable], {
            key: dart.functionType(K, [dart.dynamic]),
            value: dart.functionType(V, [dart.dynamic])
          }],
          fromIterables: [HashMap$(K, V), [core.Iterable$(K), core.Iterable$(V)]]
        });
      }});
    return HashMap;
  });
  var HashMap = HashMap$();
  var SetMixin$ = dart.generic(function(E) {
    var SetMixin = function($__super) {
      var $__4;
      function SetMixin() {
        $traceurRuntime.superConstructor(SetMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SetMixin, ($__4 = {}, Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this.length == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return this.length != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          this.removeAll(this.toList());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(elements) {
          dart.as(elements, core.Iterable$(E));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              this.add(element);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeAll", {
        value: function(elements) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              this.remove(element);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainAll", {
        value: function(elements) {
          var toRemove = this.toSet();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var o = $__6.value;
              {
                toRemove.remove(o);
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
          this.removeAll(toRemove);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var toRemove = [];
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element)))
                  toRemove[dartx.add](element);
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
          this.removeAll(toRemove);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var toRemove = [];
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(test(element)))
                  toRemove[dartx.add](element);
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
          this.removeAll(toRemove);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsAll", {
        value: function(other) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (other)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var o = $__6.value;
              {
                if (!dart.notNull(this.contains(o)))
                  return false;
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
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "union", {
        value: function(other) {
          dart.as(other, core.Set$(E));
          var _ = this.toSet();
          _.addAll(other);
          return _;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "intersection", {
        value: function(other) {
          var result = this.toSet();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(other.contains(element)))
                  result.remove(element);
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
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "difference", {
        value: function(other) {
          var result = this.toSet();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(other.contains(element)))
                  result.remove(element);
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
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toList", {
        value: function(opts) {
          var $__3 = this;
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var result = dart.notNull(growable) ? (function() {
            var _ = core.List$(E).new();
            _[dartx.length] = $__3.length;
            return _;
          }).bind(this)() : core.List$(E).new(this.length);
          var i = 0;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              result[dartx.set]((function() {
                var x = i;
                i = dart.notNull(x) + 1;
                return x;
              })(), element);
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
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "map", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return new (_internal.EfficientLengthMappedIterable$(E, dart.dynamic))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          if (dart.notNull(this.length) > 1)
            dart.throw(_internal.IterableElementError.tooMany());
          var it = this.iterator;
          if (!dart.notNull(it.moveNext()))
            dart.throw(_internal.IterableElementError.noElement());
          var result = it.current;
          return result;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase.iterableToFullString(this, '{', '}');
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "where", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          return new (_internal.WhereIterable$(E))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "expand", {
        value: function(f) {
          dart.as(f, dart.functionType(core.Iterable, [E]));
          return new (_internal.ExpandIterable$(E, dart.dynamic))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.void, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              f(element);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "reduce", {
        value: function(combine) {
          dart.as(combine, dart.functionType(E, [E, E]));
          var iterator = this.iterator;
          if (!dart.notNull(iterator.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var value = iterator.current;
          while (dart.notNull(iterator.moveNext())) {
            value = combine(value, iterator.current);
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "fold", {
        value: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          var value = initialValue;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              value = dart.dcall(combine, value, element);
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
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "every", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(f(element)))
                  return false;
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
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "join", {
        value: function(separator) {
          if (separator === void 0)
            separator = "";
          var iterator = this.iterator;
          if (!dart.notNull(iterator.moveNext()))
            return "";
          var buffer = new core.StringBuffer();
          if (separator == null || separator == "") {
            do {
              buffer.write(("" + iterator.current));
            } while (dart.notNull(iterator.moveNext()));
          } else {
            buffer.write(("" + iterator.current));
            while (dart.notNull(iterator.moveNext())) {
              buffer.write(separator);
              buffer.write(("" + iterator.current));
            }
          }
          return dart.toString(buffer);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "any", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element)))
                  return true;
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
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "take", {
        value: function(n) {
          return _internal.TakeIterable$(E).new(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "takeWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.TakeWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skip", {
        value: function(n) {
          return _internal.SkipIterable$(E).new(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skipWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.SkipWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          var it = this.iterator;
          if (!dart.notNull(it.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          return it.current;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          var it = this.iterator;
          if (!dart.notNull(it.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var result = null;
          do {
            result = it.current;
          } while (dart.notNull(it.moveNext()));
          return result;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "firstWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element)))
                  return element;
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
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var result = null;
          var foundMatching = false;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element))) {
                  result = element;
                  foundMatching = true;
                }
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
          if (dart.notNull(foundMatching))
            return result;
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "singleWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var result = null;
          var foundMatching = false;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element))) {
                  if (dart.notNull(foundMatching)) {
                    dart.throw(_internal.IterableElementError.tooMany());
                  }
                  result = element;
                  foundMatching = true;
                }
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
          if (dart.notNull(foundMatching))
            return result;
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "elementAt", {
        value: function(index) {
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError.notNull("index"));
          core.RangeError.checkNotNegative(index, "index");
          var elementIndex = 0;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (index == elementIndex)
                  return element;
                elementIndex = dart.notNull(elementIndex) + 1;
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
          dart.throw(core.RangeError.index(index, this, "index", null, elementIndex));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(core.Object);
    SetMixin[dart.implements] = function() {
      return [core.Set$(E)];
    };
    dart.setSignature(SetMixin, {methods: function() {
        return ({
          clear: [dart.void, []],
          addAll: [dart.void, [core.Iterable$(E)]],
          removeAll: [dart.void, [core.Iterable$(core.Object)]],
          retainAll: [dart.void, [core.Iterable$(core.Object)]],
          removeWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          retainWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          containsAll: [core.bool, [core.Iterable$(core.Object)]],
          union: [core.Set$(E), [core.Set$(E)]],
          intersection: [core.Set$(E), [core.Set$(core.Object)]],
          difference: [core.Set$(E), [core.Set$(core.Object)]],
          toList: [core.List$(E), [], {growable: core.bool}],
          map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          where: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          expand: [core.Iterable, [dart.functionType(core.Iterable, [E])]],
          forEach: [dart.void, [dart.functionType(dart.void, [E])]],
          reduce: [E, [dart.functionType(E, [E, E])]],
          fold: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          every: [core.bool, [dart.functionType(core.bool, [E])]],
          join: [core.String, [], [core.String]],
          any: [core.bool, [dart.functionType(core.bool, [E])]],
          take: [core.Iterable$(E), [core.int]],
          takeWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          skip: [core.Iterable$(E), [core.int]],
          skipWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          firstWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          lastWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          singleWhere: [E, [dart.functionType(core.bool, [E])]],
          elementAt: [E, [core.int]]
        });
      }});
    dart.defineExtensionMembers(SetMixin, ['toList', 'map', 'where', 'expand', 'forEach', 'reduce', 'fold', 'every', 'join', 'any', 'take', 'takeWhile', 'skip', 'skipWhile', 'firstWhere', 'lastWhere', 'singleWhere', 'elementAt', 'isEmpty', 'isNotEmpty', 'single', 'first', 'last']);
    return SetMixin;
  });
  var SetMixin = SetMixin$();
  var SetBase$ = dart.generic(function(E) {
    var SetBase = function($__super) {
      function SetBase() {
        $traceurRuntime.superConstructor(SetBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SetBase, {}, {setToString: function(set) {
          return IterableBase.iterableToFullString(set, '{', '}');
        }}, $__super);
    }(SetMixin$(E));
    dart.setSignature(SetBase, {
      statics: function() {
        return ({setToString: [core.String, [core.Set]]});
      },
      names: ['setToString']
    });
    return SetBase;
  });
  var SetBase = SetBase$();
  var _newSet = Symbol('_newSet');
  var _HashSetBase$ = dart.generic(function(E) {
    var _HashSetBase = function($__super) {
      function _HashSetBase() {
        $traceurRuntime.superConstructor(_HashSetBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_HashSetBase, {
        difference: function(other) {
          var result = this[_newSet]();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(other.contains(element)))
                  result.add(element);
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
          return result;
        },
        intersection: function(other) {
          var result = this[_newSet]();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(other.contains(element)))
                  result.add(element);
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
          return result;
        },
        toSet: function() {
          var $__3 = this;
          return (function() {
            var _ = $__3[_newSet]();
            _.addAll($__3);
            return _;
          }).bind(this)();
        }
      }, {}, $__super);
    }(SetBase$(E));
    dart.setSignature(_HashSetBase, {methods: function() {
        return ({
          difference: [core.Set$(E), [core.Set$(core.Object)]],
          intersection: [core.Set$(E), [core.Set$(core.Object)]],
          toSet: [core.Set$(E), []]
        });
      }});
    dart.defineExtensionMembers(_HashSetBase, ['toSet']);
    return _HashSetBase;
  });
  var _HashSetBase = _HashSetBase$();
  var HashSet$ = dart.generic(function(E) {
    var HashSet = function($__super) {
      var $__4;
      function HashSet() {
        $traceurRuntime.superConstructor(HashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(HashSet, ($__4 = {}, Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        new: function(opts) {
          var equals = opts && 'equals' in opts ? opts.equals : null;
          var hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
          var isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
          if (isValidKey == null) {
            if (hashCode == null) {
              if (equals == null) {
                return new (_HashSet$(E))();
              }
              hashCode = _defaultHashCode;
            } else {
              if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
                return new (_IdentityHashSet$(E))();
              }
              if (equals == null) {
                equals = _defaultEquals;
              }
            }
          } else {
            if (hashCode == null) {
              hashCode = _defaultHashCode;
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
          return new (_CustomHashSet$(E))(equals, hashCode, isValidKey);
        },
        identity: function() {
          return new (_IdentityHashSet$(E))();
        },
        from: function(elements) {
          var result = HashSet$(E).new();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (dart.as(elements, core.Iterable$(E)))[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var e = $__6.value;
              result.add(e);
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
          return result;
        }
      }, $__super);
    }(core.Object);
    HashSet[dart.implements] = function() {
      return [core.Set$(E)];
    };
    dart.setSignature(HashSet, {constructors: function() {
        return ({
          new: [HashSet$(E), [], {
            equals: dart.functionType(core.bool, [E, E]),
            hashCode: dart.functionType(core.int, [E]),
            isValidKey: dart.functionType(core.bool, [core.Object])
          }],
          identity: [HashSet$(E), []],
          from: [HashSet$(E), [core.Iterable]]
        });
      }});
    return HashSet;
  });
  var HashSet = HashSet$();
  var IterableMixin$ = dart.generic(function(E) {
    var IterableMixin = function($__super) {
      var $__4;
      function IterableMixin() {
        $traceurRuntime.superConstructor(IterableMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(IterableMixin, ($__4 = {}, Object.defineProperty($__4, "map", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return _internal.MappedIterable$(E, dart.dynamic).new(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "where", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          return new (_internal.WhereIterable$(E))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "expand", {
        value: function(f) {
          dart.as(f, dart.functionType(core.Iterable, [E]));
          return new (_internal.ExpandIterable$(E, dart.dynamic))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(element) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var e = $__6.value;
              {
                if (dart.equals(e, element))
                  return true;
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
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.void, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              f(element);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "reduce", {
        value: function(combine) {
          dart.as(combine, dart.functionType(E, [E, E]));
          var iterator = this.iterator;
          if (!dart.notNull(iterator.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var value = iterator.current;
          while (dart.notNull(iterator.moveNext())) {
            value = combine(value, iterator.current);
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "fold", {
        value: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          var value = initialValue;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              value = dart.dcall(combine, value, element);
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
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "every", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(f(element)))
                  return false;
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
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "join", {
        value: function(separator) {
          if (separator === void 0)
            separator = "";
          var iterator = this.iterator;
          if (!dart.notNull(iterator.moveNext()))
            return "";
          var buffer = new core.StringBuffer();
          if (separator == null || separator == "") {
            do {
              buffer.write(("" + iterator.current));
            } while (dart.notNull(iterator.moveNext()));
          } else {
            buffer.write(("" + iterator.current));
            while (dart.notNull(iterator.moveNext())) {
              buffer.write(separator);
              buffer.write(("" + iterator.current));
            }
          }
          return dart.toString(buffer);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "any", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(f(element)))
                  return true;
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
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toList", {
        value: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          return core.List$(E).from(this, {growable: growable});
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toSet", {
        value: function() {
          return core.Set$(E).from(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          dart.assert(!dart.is(this, _internal.EfficientLength));
          var count = 0;
          var it = this[dartx.iterator];
          while (dart.notNull(it.moveNext())) {
            count = dart.notNull(count) + 1;
          }
          return count;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return !dart.notNull(this[dartx.iterator].moveNext());
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "take", {
        value: function(n) {
          return _internal.TakeIterable$(E).new(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "takeWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.TakeWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skip", {
        value: function(n) {
          return _internal.SkipIterable$(E).new(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skipWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.SkipWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          var it = this[dartx.iterator];
          if (!dart.notNull(it.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          return it.current;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          var it = this[dartx.iterator];
          if (!dart.notNull(it.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var result = null;
          do {
            result = it.current;
          } while (dart.notNull(it.moveNext()));
          return result;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          var it = this[dartx.iterator];
          if (!dart.notNull(it.moveNext()))
            dart.throw(_internal.IterableElementError.noElement());
          var result = it.current;
          if (dart.notNull(it.moveNext()))
            dart.throw(_internal.IterableElementError.tooMany());
          return result;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "firstWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element)))
                  return element;
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
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var result = null;
          var foundMatching = false;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element))) {
                  result = element;
                  foundMatching = true;
                }
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
          if (dart.notNull(foundMatching))
            return result;
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "singleWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var result = null;
          var foundMatching = false;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element))) {
                  if (dart.notNull(foundMatching)) {
                    dart.throw(_internal.IterableElementError.tooMany());
                  }
                  result = element;
                  foundMatching = true;
                }
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
          if (dart.notNull(foundMatching))
            return result;
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "elementAt", {
        value: function(index) {
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError.notNull("index"));
          core.RangeError.checkNotNegative(index, "index");
          var elementIndex = 0;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (index == elementIndex)
                  return element;
                elementIndex = dart.notNull(elementIndex) + 1;
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
          dart.throw(core.RangeError.index(index, this, "index", null, elementIndex));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase.iterableToShortString(this, '(', ')');
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(core.Object);
    IterableMixin[dart.implements] = function() {
      return [core.Iterable$(E)];
    };
    dart.setSignature(IterableMixin, {methods: function() {
        return ({
          map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          where: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          expand: [core.Iterable, [dart.functionType(core.Iterable, [E])]],
          contains: [core.bool, [core.Object]],
          forEach: [dart.void, [dart.functionType(dart.void, [E])]],
          reduce: [E, [dart.functionType(E, [E, E])]],
          fold: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          every: [core.bool, [dart.functionType(core.bool, [E])]],
          join: [core.String, [], [core.String]],
          any: [core.bool, [dart.functionType(core.bool, [E])]],
          toList: [core.List$(E), [], {growable: core.bool}],
          toSet: [core.Set$(E), []],
          take: [core.Iterable$(E), [core.int]],
          takeWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          skip: [core.Iterable$(E), [core.int]],
          skipWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          firstWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          lastWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          singleWhere: [E, [dart.functionType(core.bool, [E])]],
          elementAt: [E, [core.int]]
        });
      }});
    dart.defineExtensionMembers(IterableMixin, ['map', 'where', 'expand', 'contains', 'forEach', 'reduce', 'fold', 'every', 'join', 'any', 'toList', 'toSet', 'take', 'takeWhile', 'skip', 'skipWhile', 'firstWhere', 'lastWhere', 'singleWhere', 'elementAt', 'length', 'isEmpty', 'isNotEmpty', 'first', 'last', 'single']);
    return IterableMixin;
  });
  var IterableMixin = IterableMixin$();
  var IterableBase$ = dart.generic(function(E) {
    var IterableBase = function($__super) {
      var $__4;
      function IterableBase() {
        $traceurRuntime.superConstructor(IterableBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(IterableBase, ($__4 = {}, Object.defineProperty($__4, "IterableBase", {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "map", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return _internal.MappedIterable$(E, dart.dynamic).new(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "where", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          return new (_internal.WhereIterable$(E))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "expand", {
        value: function(f) {
          dart.as(f, dart.functionType(core.Iterable, [E]));
          return new (_internal.ExpandIterable$(E, dart.dynamic))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(element) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var e = $__6.value;
              {
                if (dart.equals(e, element))
                  return true;
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
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.void, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              f(element);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "reduce", {
        value: function(combine) {
          dart.as(combine, dart.functionType(E, [E, E]));
          var iterator = this.iterator;
          if (!dart.notNull(iterator.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var value = iterator.current;
          while (dart.notNull(iterator.moveNext())) {
            value = combine(value, iterator.current);
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "fold", {
        value: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          var value = initialValue;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              value = dart.dcall(combine, value, element);
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
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "every", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(f(element)))
                  return false;
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
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "join", {
        value: function(separator) {
          if (separator === void 0)
            separator = "";
          var iterator = this.iterator;
          if (!dart.notNull(iterator.moveNext()))
            return "";
          var buffer = new core.StringBuffer();
          if (separator == null || separator == "") {
            do {
              buffer.write(("" + iterator.current));
            } while (dart.notNull(iterator.moveNext()));
          } else {
            buffer.write(("" + iterator.current));
            while (dart.notNull(iterator.moveNext())) {
              buffer.write(separator);
              buffer.write(("" + iterator.current));
            }
          }
          return dart.toString(buffer);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "any", {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(f(element)))
                  return true;
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
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toList", {
        value: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          return core.List$(E).from(this, {growable: growable});
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toSet", {
        value: function() {
          return core.Set$(E).from(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          dart.assert(!dart.is(this, _internal.EfficientLength));
          var count = 0;
          var it = this[dartx.iterator];
          while (dart.notNull(it.moveNext())) {
            count = dart.notNull(count) + 1;
          }
          return count;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return !dart.notNull(this[dartx.iterator].moveNext());
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "take", {
        value: function(n) {
          return _internal.TakeIterable$(E).new(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "takeWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.TakeWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skip", {
        value: function(n) {
          return _internal.SkipIterable$(E).new(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skipWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.SkipWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          var it = this[dartx.iterator];
          if (!dart.notNull(it.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          return it.current;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          var it = this[dartx.iterator];
          if (!dart.notNull(it.moveNext())) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var result = null;
          do {
            result = it.current;
          } while (dart.notNull(it.moveNext()));
          return result;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          var it = this[dartx.iterator];
          if (!dart.notNull(it.moveNext()))
            dart.throw(_internal.IterableElementError.noElement());
          var result = it.current;
          if (dart.notNull(it.moveNext()))
            dart.throw(_internal.IterableElementError.tooMany());
          return result;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "firstWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element)))
                  return element;
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
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var result = null;
          var foundMatching = false;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element))) {
                  result = element;
                  foundMatching = true;
                }
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
          if (dart.notNull(foundMatching))
            return result;
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "singleWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var result = null;
          var foundMatching = false;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(test(element))) {
                  if (dart.notNull(foundMatching)) {
                    dart.throw(_internal.IterableElementError.tooMany());
                  }
                  result = element;
                  foundMatching = true;
                }
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
          if (dart.notNull(foundMatching))
            return result;
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "elementAt", {
        value: function(index) {
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError.notNull("index"));
          core.RangeError.checkNotNegative(index, "index");
          var elementIndex = 0;
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (index == elementIndex)
                  return element;
                elementIndex = dart.notNull(elementIndex) + 1;
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
          dart.throw(core.RangeError.index(index, this, "index", null, elementIndex));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase$().iterableToShortString(this, '(', ')');
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        iterableToShortString: function(iterable, leftDelimiter, rightDelimiter) {
          if (leftDelimiter === void 0)
            leftDelimiter = '(';
          if (rightDelimiter === void 0)
            rightDelimiter = ')';
          if (dart.notNull(IterableBase$()._isToStringVisiting(iterable))) {
            if (leftDelimiter == "(" && rightDelimiter == ")") {
              return "(...)";
            }
            return (leftDelimiter + "..." + rightDelimiter);
          }
          var parts = [];
          IterableBase$()._toStringVisiting[dartx.add](iterable);
          try {
            IterableBase$()._iterablePartsToStrings(iterable, parts);
          } finally {
            dart.assert(core.identical(IterableBase$()._toStringVisiting[dartx.last], iterable));
            IterableBase$()._toStringVisiting[dartx.removeLast]();
          }
          return dart.toString((function() {
            var _ = new core.StringBuffer(leftDelimiter);
            _.writeAll(parts, ", ");
            _.write(rightDelimiter);
            return _;
          })());
        },
        iterableToFullString: function(iterable, leftDelimiter, rightDelimiter) {
          if (leftDelimiter === void 0)
            leftDelimiter = '(';
          if (rightDelimiter === void 0)
            rightDelimiter = ')';
          if (dart.notNull(IterableBase$()._isToStringVisiting(iterable))) {
            return (leftDelimiter + "..." + rightDelimiter);
          }
          var buffer = new core.StringBuffer(leftDelimiter);
          IterableBase$()._toStringVisiting[dartx.add](iterable);
          try {
            buffer.writeAll(iterable, ", ");
          } finally {
            dart.assert(core.identical(IterableBase$()._toStringVisiting[dartx.last], iterable));
            IterableBase$()._toStringVisiting[dartx.removeLast]();
          }
          buffer.write(rightDelimiter);
          return dart.toString(buffer);
        },
        _isToStringVisiting: function(o) {
          for (var i = 0; dart.notNull(i) < dart.notNull(IterableBase$()._toStringVisiting[dartx.length]); i = dart.notNull(i) + 1) {
            if (dart.notNull(core.identical(o, IterableBase$()._toStringVisiting[dartx.get](i))))
              return true;
          }
          return false;
        },
        _iterablePartsToStrings: function(iterable, parts) {
          var LENGTH_LIMIT = 80;
          var HEAD_COUNT = 3;
          var TAIL_COUNT = 2;
          var MAX_COUNT = 100;
          var OVERHEAD = 2;
          var ELLIPSIS_SIZE = 3;
          var length = 0;
          var count = 0;
          var it = iterable[dartx.iterator];
          while (dart.notNull(length) < dart.notNull(LENGTH_LIMIT) || dart.notNull(count) < dart.notNull(HEAD_COUNT)) {
            if (!dart.notNull(it.moveNext()))
              return;
            var next = ("" + it.current);
            parts[dartx.add](next);
            length = dart.notNull(length) + (dart.notNull(next[dartx.length]) + dart.notNull(OVERHEAD));
            count = dart.notNull(count) + 1;
          }
          var penultimateString = null;
          var ultimateString = null;
          var penultimate = null;
          var ultimate = null;
          if (!dart.notNull(it.moveNext())) {
            if (dart.notNull(count) <= dart.notNull(HEAD_COUNT) + dart.notNull(TAIL_COUNT))
              return;
            ultimateString = dart.as(parts[dartx.removeLast](), core.String);
            penultimateString = dart.as(parts[dartx.removeLast](), core.String);
          } else {
            penultimate = it.current;
            count = dart.notNull(count) + 1;
            if (!dart.notNull(it.moveNext())) {
              if (dart.notNull(count) <= dart.notNull(HEAD_COUNT) + 1) {
                parts[dartx.add](("" + penultimate));
                return;
              }
              ultimateString = ("" + penultimate);
              penultimateString = dart.as(parts[dartx.removeLast](), core.String);
              length = dart.notNull(length) + (dart.notNull(ultimateString[dartx.length]) + dart.notNull(OVERHEAD));
            } else {
              ultimate = it.current;
              count = dart.notNull(count) + 1;
              dart.assert(dart.notNull(count) < dart.notNull(MAX_COUNT));
              while (dart.notNull(it.moveNext())) {
                penultimate = ultimate;
                ultimate = it.current;
                count = dart.notNull(count) + 1;
                if (dart.notNull(count) > dart.notNull(MAX_COUNT)) {
                  while (dart.notNull(length) > dart.notNull(LENGTH_LIMIT) - dart.notNull(ELLIPSIS_SIZE) - dart.notNull(OVERHEAD) && dart.notNull(count) > dart.notNull(HEAD_COUNT)) {
                    length = dart.notNull(length) - dart.notNull(dart.as(dart.dsend(dart.dload(parts[dartx.removeLast](), 'length'), '+', OVERHEAD), core.int));
                    count = dart.notNull(count) - 1;
                  }
                  parts[dartx.add]("...");
                  return;
                }
              }
              penultimateString = ("" + penultimate);
              ultimateString = ("" + ultimate);
              length = dart.notNull(length) + (dart.notNull(ultimateString[dartx.length]) + dart.notNull(penultimateString[dartx.length]) + 2 * dart.notNull(OVERHEAD));
            }
          }
          var elision = null;
          if (dart.notNull(count) > dart.notNull(parts[dartx.length]) + dart.notNull(TAIL_COUNT)) {
            elision = "...";
            length = dart.notNull(length) + (dart.notNull(ELLIPSIS_SIZE) + dart.notNull(OVERHEAD));
          }
          while (dart.notNull(length) > dart.notNull(LENGTH_LIMIT) && dart.notNull(parts[dartx.length]) > dart.notNull(HEAD_COUNT)) {
            length = dart.notNull(length) - dart.notNull(dart.as(dart.dsend(dart.dload(parts[dartx.removeLast](), 'length'), '+', OVERHEAD), core.int));
            if (elision == null) {
              elision = "...";
              length = dart.notNull(length) + (dart.notNull(ELLIPSIS_SIZE) + dart.notNull(OVERHEAD));
            }
          }
          if (elision != null) {
            parts[dartx.add](elision);
          }
          parts[dartx.add](penultimateString);
          parts[dartx.add](ultimateString);
        }
      }, $__super);
    }(core.Object);
    IterableBase[dart.implements] = function() {
      return [core.Iterable$(E)];
    };
    dart.setSignature(IterableBase, {
      constructors: function() {
        return ({IterableBase: [IterableBase$(E), []]});
      },
      methods: function() {
        return ({
          map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          where: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          expand: [core.Iterable, [dart.functionType(core.Iterable, [E])]],
          contains: [core.bool, [core.Object]],
          forEach: [dart.void, [dart.functionType(dart.void, [E])]],
          reduce: [E, [dart.functionType(E, [E, E])]],
          fold: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          every: [core.bool, [dart.functionType(core.bool, [E])]],
          join: [core.String, [], [core.String]],
          any: [core.bool, [dart.functionType(core.bool, [E])]],
          toList: [core.List$(E), [], {growable: core.bool}],
          toSet: [core.Set$(E), []],
          take: [core.Iterable$(E), [core.int]],
          takeWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          skip: [core.Iterable$(E), [core.int]],
          skipWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          firstWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          lastWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          singleWhere: [E, [dart.functionType(core.bool, [E])]],
          elementAt: [E, [core.int]]
        });
      },
      statics: function() {
        return ({
          iterableToShortString: [core.String, [core.Iterable], [core.String, core.String]],
          iterableToFullString: [core.String, [core.Iterable], [core.String, core.String]],
          _isToStringVisiting: [core.bool, [core.Object]],
          _iterablePartsToStrings: [dart.void, [core.Iterable, core.List]]
        });
      },
      names: ['iterableToShortString', 'iterableToFullString', '_isToStringVisiting', '_iterablePartsToStrings']
    });
    dart.defineExtensionMembers(IterableBase, ['map', 'where', 'expand', 'contains', 'forEach', 'reduce', 'fold', 'every', 'join', 'any', 'toList', 'toSet', 'take', 'takeWhile', 'skip', 'skipWhile', 'firstWhere', 'lastWhere', 'singleWhere', 'elementAt', 'length', 'isEmpty', 'isNotEmpty', 'first', 'last', 'single']);
    return IterableBase;
  });
  var IterableBase = IterableBase$();
  dart.defineLazyProperties(IterableBase, {get _toStringVisiting() {
      return [];
    }});
  var _iterator = Symbol('_iterator');
  var _state = Symbol('_state');
  var _move = Symbol('_move');
  var HasNextIterator$ = dart.generic(function(E) {
    var HasNextIterator = function($__super) {
      var $__4;
      function HasNextIterator() {
        $traceurRuntime.superConstructor(HasNextIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(HasNextIterator, ($__4 = {}, Object.defineProperty($__4, "HasNextIterator", {
        value: function(iterator) {
          this[_iterator] = iterator;
          this[_state] = HasNextIterator$()._NOT_MOVED_YET;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "hasNext", {
        get: function() {
          if (this[_state] == HasNextIterator$()._NOT_MOVED_YET)
            this[_move]();
          return this[_state] == HasNextIterator$()._HAS_NEXT_AND_NEXT_IN_CURRENT;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "next", {
        value: function() {
          if (!dart.notNull(this.hasNext))
            dart.throw(new core.StateError("No more elements"));
          dart.assert(this[_state] == HasNextIterator$()._HAS_NEXT_AND_NEXT_IN_CURRENT);
          var result = dart.as(this[_iterator].current, E);
          this[_move]();
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _move, {
        value: function() {
          if (dart.notNull(this[_iterator].moveNext())) {
            this[_state] = HasNextIterator$()._HAS_NEXT_AND_NEXT_IN_CURRENT;
          } else {
            this[_state] = HasNextIterator$()._NO_NEXT;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(core.Object);
    dart.setSignature(HasNextIterator, {
      constructors: function() {
        return ({HasNextIterator: [HasNextIterator$(E), [core.Iterator]]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "next", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _move, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return HasNextIterator;
  });
  var HasNextIterator = HasNextIterator$();
  HasNextIterator._HAS_NEXT_AND_NEXT_IN_CURRENT = 0;
  HasNextIterator._NO_NEXT = 1;
  HasNextIterator._NOT_MOVED_YET = 2;
  var LinkedHashMap$ = dart.generic(function(K, V) {
    var LinkedHashMap = function($__super) {
      function LinkedHashMap() {
        $traceurRuntime.superConstructor(LinkedHashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedHashMap, {}, {
        new: function(opts) {
          var equals = opts && 'equals' in opts ? opts.equals : null;
          var hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
          var isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
          if (isValidKey == null) {
            if (hashCode == null) {
              if (equals == null) {
                return new (_LinkedHashMap$(K, V))();
              }
              hashCode = _defaultHashCode;
            } else {
              if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
                return new (_LinkedIdentityHashMap$(K, V))();
              }
              if (equals == null) {
                equals = _defaultEquals;
              }
            }
          } else {
            if (hashCode == null) {
              hashCode = _defaultHashCode;
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
          return new (_LinkedCustomHashMap$(K, V))(equals, hashCode, isValidKey);
        },
        identity: function() {
          return new (_LinkedIdentityHashMap$(K, V))();
        },
        from: function(other) {
          var result = LinkedHashMap$(K, V).new();
          other.forEach(dart.fn(function(k, v) {
            result.set(dart.as(k, K), dart.as(v, V));
          }));
          return result;
        },
        fromIterable: function(iterable, opts) {
          var key = opts && 'key' in opts ? opts.key : null;
          var value = opts && 'value' in opts ? opts.value : null;
          var map = LinkedHashMap$(K, V).new();
          Maps._fillMapWithMappedIterable(map, iterable, key, value);
          return map;
        },
        fromIterables: function(keys, values) {
          var map = LinkedHashMap$(K, V).new();
          Maps._fillMapWithIterables(map, keys, values);
          return map;
        },
        _literal: function(keyValuePairs) {
          return dart.as(_js_helper.fillLiteralMap(keyValuePairs, new (_LinkedHashMap$(K, V))()), LinkedHashMap$(K, V));
        },
        _empty: function() {
          return new (_LinkedHashMap$(K, V))();
        }
      }, $__super);
    }(core.Object);
    LinkedHashMap[dart.implements] = function() {
      return [HashMap$(K, V)];
    };
    dart.setSignature(LinkedHashMap, {constructors: function() {
        return ({
          new: [LinkedHashMap$(K, V), [], {
            equals: dart.functionType(core.bool, [K, K]),
            hashCode: dart.functionType(core.int, [K]),
            isValidKey: dart.functionType(core.bool, [core.Object])
          }],
          identity: [LinkedHashMap$(K, V), []],
          from: [LinkedHashMap$(K, V), [core.Map]],
          fromIterable: [LinkedHashMap$(K, V), [core.Iterable], {
            key: dart.functionType(K, [dart.dynamic]),
            value: dart.functionType(V, [dart.dynamic])
          }],
          fromIterables: [LinkedHashMap$(K, V), [core.Iterable$(K), core.Iterable$(V)]],
          _literal: [LinkedHashMap$(K, V), [core.List]],
          _empty: [LinkedHashMap$(K, V), []]
        });
      }});
    return LinkedHashMap;
  });
  var LinkedHashMap = LinkedHashMap$();
  var LinkedHashSet$ = dart.generic(function(E) {
    var LinkedHashSet = function($__super) {
      var $__4;
      function LinkedHashSet() {
        $traceurRuntime.superConstructor(LinkedHashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedHashSet, ($__4 = {}, Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        new: function(opts) {
          var equals = opts && 'equals' in opts ? opts.equals : null;
          var hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
          var isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
          if (isValidKey == null) {
            if (hashCode == null) {
              if (equals == null) {
                return new (_LinkedHashSet$(E))();
              }
              hashCode = _defaultHashCode;
            } else {
              if (dart.notNull(core.identical(core.identityHashCode, hashCode)) && dart.notNull(core.identical(core.identical, equals))) {
                return new (_LinkedIdentityHashSet$(E))();
              }
              if (equals == null) {
                equals = _defaultEquals;
              }
            }
          } else {
            if (hashCode == null) {
              hashCode = _defaultHashCode;
            }
            if (equals == null) {
              equals = _defaultEquals;
            }
          }
          return new (_LinkedCustomHashSet$(E))(equals, hashCode, isValidKey);
        },
        identity: function() {
          return new (_LinkedIdentityHashSet$(E))();
        },
        from: function(elements) {
          var result = LinkedHashSet$(E).new();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                result.add(element);
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
          return result;
        }
      }, $__super);
    }(core.Object);
    LinkedHashSet[dart.implements] = function() {
      return [HashSet$(E)];
    };
    dart.setSignature(LinkedHashSet, {constructors: function() {
        return ({
          new: [LinkedHashSet$(E), [], {
            equals: dart.functionType(core.bool, [E, E]),
            hashCode: dart.functionType(core.int, [E]),
            isValidKey: dart.functionType(core.bool, [core.Object])
          }],
          identity: [LinkedHashSet$(E), []],
          from: [LinkedHashSet$(E), [core.Iterable$(E)]]
        });
      }});
    return LinkedHashSet;
  });
  var LinkedHashSet = LinkedHashSet$();
  var _modificationCount = Symbol('_modificationCount');
  var _length = Symbol('_length');
  var _next = Symbol('_next');
  var _previous = Symbol('_previous');
  var _insertAfter = Symbol('_insertAfter');
  var _list = Symbol('_list');
  var _unlink = Symbol('_unlink');
  var LinkedList$ = dart.generic(function(E) {
    var LinkedList = function($__super) {
      var $__4;
      function LinkedList() {
        $traceurRuntime.superConstructor(LinkedList).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedList, ($__4 = {}, Object.defineProperty($__4, "LinkedList", {
        value: function() {
          this[_modificationCount] = 0;
          this[_length] = 0;
          this[_next] = null;
          this[_previous] = null;
          $traceurRuntime.superGet(this, LinkedList.prototype, "IterableBase").call(this);
          this[_next] = this[_previous] = this;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addFirst", {
        value: function(entry) {
          dart.as(entry, E);
          this[_insertAfter](this, entry);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(entry) {
          dart.as(entry, E);
          this[_insertAfter](this[_previous], entry);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(entries) {
          var $__3 = this;
          dart.as(entries, core.Iterable$(E));
          entries[dartx.forEach](dart.fn((function(entry) {
            return $__3[_insertAfter]($__3[_previous], dart.as(entry, E));
          }).bind(this), dart.void, [dart.dynamic]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(entry) {
          dart.as(entry, E);
          if (!dart.equals(entry[_list], this))
            return false;
          this[_unlink](entry);
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (_LinkedListIterator$(E))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_length];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          var next = this[_next];
          while (!dart.notNull(core.identical(next, this))) {
            var entry = dart.as(next, E);
            next = entry[_next];
            entry[_next] = entry[_previous] = entry[_list] = null;
          }
          this[_next] = this[_previous] = this;
          this[_length] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          if (dart.notNull(core.identical(this[_next], this))) {
            dart.throw(new core.StateError('No such element'));
          }
          return dart.as(this[_next], E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          if (dart.notNull(core.identical(this[_previous], this))) {
            dart.throw(new core.StateError('No such element'));
          }
          return dart.as(this[_previous], E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          if (dart.notNull(core.identical(this[_previous], this))) {
            dart.throw(new core.StateError('No such element'));
          }
          if (!dart.notNull(core.identical(this[_previous], this[_next]))) {
            dart.throw(new core.StateError('Too many elements'));
          }
          return dart.as(this[_next], E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [E]));
          var modificationCount = this[_modificationCount];
          var current = this[_next];
          while (!dart.notNull(core.identical(current, this))) {
            action(dart.as(current, E));
            if (modificationCount != this[_modificationCount]) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
            current = current[_next];
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, _insertAfter, {
        value: function(entry, newEntry) {
          dart.as(newEntry, E);
          if (newEntry.list != null) {
            dart.throw(new core.StateError('LinkedListEntry is already in a LinkedList'));
          }
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          newEntry[_list] = this;
          var predecessor = entry;
          var successor = entry[_next];
          successor[_previous] = newEntry;
          newEntry[_previous] = predecessor;
          newEntry[_next] = successor;
          predecessor[_next] = newEntry;
          this[_length] = dart.notNull(this[_length]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _unlink, {
        value: function(entry) {
          dart.as(entry, LinkedListEntry$(E));
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          entry[_next][_previous] = entry[_previous];
          entry[_previous][_next] = entry[_next];
          this[_length] = dart.notNull(this[_length]) - 1;
          entry[_list] = entry[_next] = entry[_previous] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(IterableBase$(E));
    LinkedList[dart.implements] = function() {
      return [_LinkedListLink];
    };
    dart.setSignature(LinkedList, {
      constructors: function() {
        return ({LinkedList: [LinkedList$(E), []]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "addFirst", {
          value: [dart.void, [E]],
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
        }), Object.defineProperty($__4, "remove", {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "clear", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "forEach", {
          value: [dart.void, [dart.functionType(dart.void, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _insertAfter, {
          value: [dart.void, [_LinkedListLink, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _unlink, {
          value: [dart.void, [LinkedListEntry$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    dart.defineExtensionMembers(LinkedList, ['forEach', 'iterator', 'length', 'first', 'last', 'single', 'isEmpty']);
    return LinkedList;
  });
  var LinkedList = LinkedList$();
  var _current = Symbol('_current');
  var _LinkedListIterator$ = dart.generic(function(E) {
    var _LinkedListIterator = function($__super) {
      function _LinkedListIterator() {
        $traceurRuntime.superConstructor(_LinkedListIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedListIterator, {
        _LinkedListIterator: function(list) {
          this[_list] = list;
          this[_modificationCount] = list[_modificationCount];
          this[_next] = list[_next];
          this[_current] = null;
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          if (dart.notNull(core.identical(this[_next], this[_list]))) {
            this[_current] = null;
            return false;
          }
          if (this[_modificationCount] != this[_list][_modificationCount]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
          this[_current] = dart.as(this[_next], E);
          this[_next] = this[_next][_next];
          return true;
        }
      }, {}, $__super);
    }(core.Object);
    _LinkedListIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(_LinkedListIterator, {
      constructors: function() {
        return ({_LinkedListIterator: [_LinkedListIterator$(E), [LinkedList$(E)]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return _LinkedListIterator;
  });
  var _LinkedListIterator = _LinkedListIterator$();
  var _LinkedListLink = function($__super) {
    function _LinkedListLink() {
      $traceurRuntime.superConstructor(_LinkedListLink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_LinkedListLink, {_LinkedListLink: function() {
        this[_next] = null;
        this[_previous] = null;
      }}, {}, $__super);
  }(core.Object);
  var LinkedListEntry$ = dart.generic(function(E) {
    var LinkedListEntry = function($__super) {
      function LinkedListEntry() {
        $traceurRuntime.superConstructor(LinkedListEntry).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedListEntry, {
        LinkedListEntry: function() {
          this[_list] = null;
          this[_next] = null;
          this[_previous] = null;
        },
        get list() {
          return this[_list];
        },
        unlink: function() {
          this[_list][_unlink](this);
        },
        get next() {
          if (dart.notNull(core.identical(this[_next], this[_list])))
            return null;
          var result = dart.as(this[_next], E);
          return result;
        },
        get previous() {
          if (dart.notNull(core.identical(this[_previous], this[_list])))
            return null;
          return dart.as(this[_previous], E);
        },
        insertAfter: function(entry) {
          dart.as(entry, E);
          this[_list][_insertAfter](this, entry);
        },
        insertBefore: function(entry) {
          dart.as(entry, E);
          this[_list][_insertAfter](this[_previous], entry);
        }
      }, {}, $__super);
    }(core.Object);
    LinkedListEntry[dart.implements] = function() {
      return [_LinkedListLink];
    };
    dart.setSignature(LinkedListEntry, {methods: function() {
        return ({
          unlink: [dart.void, []],
          insertAfter: [dart.void, [E]],
          insertBefore: [dart.void, [E]]
        });
      }});
    return LinkedListEntry;
  });
  var LinkedListEntry = LinkedListEntry$();
  var ListMixin$ = dart.generic(function(E) {
    var ListMixin = function($__super) {
      var $__4;
      function ListMixin() {
        $traceurRuntime.superConstructor(ListMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ListMixin, ($__4 = {}, Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (_internal.ListIterator$(E))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "elementAt", {
        value: function(index) {
          return this.get(index);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [E]));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            action(this.get(i));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[dartx.length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          if (this[dartx.length] == 0)
            dart.throw(_internal.IterableElementError.noElement());
          return this.get(0);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          if (this[dartx.length] == 0)
            dart.throw(_internal.IterableElementError.noElement());
          return this.get(dart.notNull(this[dartx.length]) - 1);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          if (this[dartx.length] == 0)
            dart.throw(_internal.IterableElementError.noElement());
          if (dart.notNull(this[dartx.length]) > 1)
            dart.throw(_internal.IterableElementError.tooMany());
          return this.get(0);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(element) {
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(this.length); i = dart.notNull(i) + 1) {
            if (dart.equals(this.get(i), element))
              return true;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "every", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (!dart.notNull(test(this.get(i))))
              return false;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "any", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (dart.notNull(test(this.get(i))))
              return true;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "firstWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var element = this.get(i);
            if (dart.notNull(test(element)))
              return element;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastWhere", {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var length = this.length;
          for (var i = dart.notNull(length) - 1; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
            var element = this.get(i);
            if (dart.notNull(test(element)))
              return element;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          if (orElse != null)
            return orElse();
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "singleWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var length = this.length;
          var match = null;
          var matchFound = false;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var element = this.get(i);
            if (dart.notNull(test(element))) {
              if (dart.notNull(matchFound)) {
                dart.throw(_internal.IterableElementError.tooMany());
              }
              matchFound = true;
              match = element;
            }
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          if (dart.notNull(matchFound))
            return match;
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "join", {
        value: function(separator) {
          if (separator === void 0)
            separator = "";
          if (this[dartx.length] == 0)
            return "";
          var buffer = new core.StringBuffer();
          buffer.writeAll(this, separator);
          return dart.toString(buffer);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "where", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.WhereIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "map", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return new _internal.MappedListIterable(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "expand", {
        value: function(f) {
          dart.as(f, dart.functionType(core.Iterable, [E]));
          return new (_internal.ExpandIterable$(E, dart.dynamic))(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "reduce", {
        value: function(combine) {
          dart.as(combine, dart.functionType(E, [E, E]));
          var length = this.length;
          if (length == 0)
            dart.throw(_internal.IterableElementError.noElement());
          var value = this.get(0);
          for (var i = 1; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            value = combine(value, this.get(i));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "fold", {
        value: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          var value = initialValue;
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            value = dart.dcall(combine, value, this.get(i));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skip", {
        value: function(count) {
          return new (_internal.SubListIterable$(E))(this, count, null);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "skipWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.SkipWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "take", {
        value: function(count) {
          return new (_internal.SubListIterable$(E))(this, 0, count);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "takeWhile", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.TakeWhileIterable$(E))(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toList", {
        value: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var result = null;
          if (dart.notNull(growable)) {
            result = core.List$(E).new();
            result[dartx.length] = this[dartx.length];
          } else {
            result = core.List$(E).new(this[dartx.length]);
          }
          for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
            result[dartx.set](i, this.get(i));
          }
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toSet", {
        value: function() {
          var result = core.Set$(E).new();
          for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
            result.add(this.get(i));
          }
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(element) {
          var $__3 = this;
          dart.as(element, E);
          this.set((function() {
            var x = $__3.length;
            $__3.length = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), element);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(iterable) {
          var $__3 = this;
          dart.as(iterable, core.Iterable$(E));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (iterable)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                this.set((function() {
                  var x = $__3.length;
                  $__3.length = dart.notNull(x) + 1;
                  return x;
                }).bind(this)(), element);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(element) {
          for (var i = 0; dart.notNull(i) < dart.notNull(this.length); i = dart.notNull(i) + 1) {
            if (dart.equals(this.get(i), element)) {
              this.setRange(i, dart.notNull(this.length) - 1, this, dart.notNull(i) + 1);
              this.length = dart.notNull(this.length) - 1;
              return true;
            }
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          ListMixin$()._filter(this, test, false);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          ListMixin$()._filter(this, test, true);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          this.length = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeLast", {
        value: function() {
          if (this[dartx.length] == 0) {
            dart.throw(_internal.IterableElementError.noElement());
          }
          var result = this.get(dart.notNull(this[dartx.length]) - 1);
          this[dartx.length] = dart.notNull(this[dartx.length]) - 1;
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "sort", {
        value: function(compare) {
          if (compare === void 0)
            compare = null;
          dart.as(compare, dart.functionType(core.int, [E, E]));
          _internal.Sort.sort(this, compare == null ? core.Comparable.compare : compare);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "shuffle", {
        value: function(random) {
          if (random === void 0)
            random = null;
          if (random == null)
            random = math.Random.new();
          var length = this.length;
          while (dart.notNull(length) > 1) {
            var pos = random.nextInt(length);
            length = dart.notNull(length) - 1;
            var tmp = this.get(length);
            this.set(length, this.get(pos));
            this.set(pos, tmp);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "asMap", {
        value: function() {
          return new (_internal.ListMapView$(E))(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "sublist", {
        value: function(start, end) {
          if (end === void 0)
            end = null;
          var listLength = this.length;
          if (end == null)
            end = listLength;
          core.RangeError.checkValidRange(start, end, listLength);
          var length = dart.notNull(end) - dart.notNull(start);
          var result = core.List$(E).new();
          result[dartx.length] = length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            result[dartx.set](i, this.get(dart.notNull(start) + dart.notNull(i)));
          }
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "getRange", {
        value: function(start, end) {
          core.RangeError.checkValidRange(start, end, this.length);
          return new (_internal.SubListIterable$(E))(this, start, end);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeRange", {
        value: function(start, end) {
          core.RangeError.checkValidRange(start, end, this.length);
          var length = dart.notNull(end) - dart.notNull(start);
          this.setRange(start, dart.notNull(this.length) - dart.notNull(length), this, end);
          this.length = dart.notNull(this.length) - dart.notNull(length);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "fillRange", {
        value: function(start, end, fill) {
          if (fill === void 0)
            fill = null;
          dart.as(fill, E);
          core.RangeError.checkValidRange(start, end, this.length);
          for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
            this.set(i, fill);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "setRange", {
        value: function(start, end, iterable, skipCount) {
          dart.as(iterable, core.Iterable$(E));
          if (skipCount === void 0)
            skipCount = 0;
          core.RangeError.checkValidRange(start, end, this.length);
          var length = dart.notNull(end) - dart.notNull(start);
          if (length == 0)
            return;
          core.RangeError.checkNotNegative(skipCount, "skipCount");
          var otherList = null;
          var otherStart = null;
          if (dart.is(iterable, core.List)) {
            otherList = dart.as(iterable, core.List);
            otherStart = skipCount;
          } else {
            otherList = iterable[dartx.skip](skipCount)[dartx.toList]({growable: false});
            otherStart = 0;
          }
          if (dart.notNull(otherStart) + dart.notNull(length) > dart.notNull(otherList[dartx.length])) {
            dart.throw(_internal.IterableElementError.tooFew());
          }
          if (dart.notNull(otherStart) < dart.notNull(start)) {
            for (var i = dart.notNull(length) - 1; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
              this.set(dart.notNull(start) + dart.notNull(i), dart.as(otherList[dartx.get](dart.notNull(otherStart) + dart.notNull(i)), E));
            }
          } else {
            for (var i$__13 = 0; dart.notNull(i$__13) < dart.notNull(length); i$__13 = dart.notNull(i$__13) + 1) {
              this.set(dart.notNull(start) + dart.notNull(i$__13), dart.as(otherList[dartx.get](dart.notNull(otherStart) + dart.notNull(i$__13)), E));
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "replaceRange", {
        value: function(start, end, newContents) {
          dart.as(newContents, core.Iterable$(E));
          core.RangeError.checkValidRange(start, end, this.length);
          if (!dart.is(newContents, _internal.EfficientLength)) {
            newContents = newContents[dartx.toList]();
          }
          var removeLength = dart.notNull(end) - dart.notNull(start);
          var insertLength = newContents[dartx.length];
          if (dart.notNull(removeLength) >= dart.notNull(insertLength)) {
            var delta = dart.notNull(removeLength) - dart.notNull(insertLength);
            var insertEnd = dart.notNull(start) + dart.notNull(insertLength);
            var newLength = dart.notNull(this.length) - dart.notNull(delta);
            this.setRange(start, insertEnd, newContents);
            if (delta != 0) {
              this.setRange(insertEnd, newLength, this, end);
              this.length = newLength;
            }
          } else {
            var delta$__14 = dart.notNull(insertLength) - dart.notNull(removeLength);
            var newLength$__15 = dart.notNull(this.length) + dart.notNull(delta$__14);
            var insertEnd$__16 = dart.notNull(start) + dart.notNull(insertLength);
            this.length = newLength$__15;
            this.setRange(insertEnd$__16, newLength$__15, this, end);
            this.setRange(start, insertEnd$__16, newContents);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "indexOf", {
        value: function(element, startIndex) {
          if (startIndex === void 0)
            startIndex = 0;
          if (dart.notNull(startIndex) >= dart.notNull(this.length)) {
            return -1;
          }
          if (dart.notNull(startIndex) < 0) {
            startIndex = 0;
          }
          for (var i = startIndex; dart.notNull(i) < dart.notNull(this.length); i = dart.notNull(i) + 1) {
            if (dart.equals(this.get(i), element)) {
              return i;
            }
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastIndexOf", {
        value: function(element, startIndex) {
          if (startIndex === void 0)
            startIndex = null;
          if (startIndex == null) {
            startIndex = dart.notNull(this.length) - 1;
          } else {
            if (dart.notNull(startIndex) < 0) {
              return -1;
            }
            if (dart.notNull(startIndex) >= dart.notNull(this.length)) {
              startIndex = dart.notNull(this.length) - 1;
            }
          }
          for (var i = startIndex; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
            if (dart.equals(this.get(i), element)) {
              return i;
            }
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "insert", {
        value: function(index, element) {
          dart.as(element, E);
          core.RangeError.checkValueInInterval(index, 0, this[dartx.length], "index");
          if (index == this.length) {
            this.add(element);
            return;
          }
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError(index));
          this.length = dart.notNull(this.length) + 1;
          this.setRange(dart.notNull(index) + 1, this.length, this, index);
          this.set(index, element);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeAt", {
        value: function(index) {
          var result = this.get(index);
          this.setRange(index, dart.notNull(this.length) - 1, this, dart.notNull(index) + 1);
          this[dartx.length] = dart.notNull(this[dartx.length]) - 1;
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "insertAll", {
        value: function(index, iterable) {
          dart.as(iterable, core.Iterable$(E));
          core.RangeError.checkValueInInterval(index, 0, this[dartx.length], "index");
          if (dart.is(iterable, _internal.EfficientLength)) {
            iterable = iterable[dartx.toList]();
          }
          var insertionLength = iterable[dartx.length];
          this.length = dart.notNull(this.length) + dart.notNull(insertionLength);
          this.setRange(dart.notNull(index) + dart.notNull(insertionLength), this.length, this, index);
          this.setAll(index, iterable);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "setAll", {
        value: function(index, iterable) {
          dart.as(iterable, core.Iterable$(E));
          if (dart.is(iterable, core.List)) {
            this.setRange(index, dart.notNull(index) + dart.notNull(iterable[dartx.length]), iterable);
          } else {
            var $__8 = true;
            var $__9 = false;
            var $__10 = undefined;
            try {
              for (var $__6 = void 0,
                  $__5 = (iterable)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
                var element = $__6.value;
                {
                  this.set((function() {
                    var x = index;
                    index = dart.notNull(x) + 1;
                    return x;
                  })(), element);
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
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "reversed", {
        get: function() {
          return new (_internal.ReversedListIterable$(E))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase.iterableToFullString(this, '[', ']');
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {_filter: function(source, test, retainMatching) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          var retained = [];
          var length = source[dartx.length];
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var element = source[dartx.get](i);
            if (dart.dcall(test, element) == retainMatching) {
              retained[dartx.add](element);
            }
            if (length != source[dartx.length]) {
              dart.throw(new core.ConcurrentModificationError(source));
            }
          }
          if (retained[dartx.length] != source[dartx.length]) {
            source[dartx.setRange](0, retained[dartx.length], retained);
            source[dartx.length] = retained[dartx.length];
          }
        }}, $__super);
    }(core.Object);
    ListMixin[dart.implements] = function() {
      return [core.List$(E)];
    };
    dart.setSignature(ListMixin, {
      methods: function() {
        return ({
          elementAt: [E, [core.int]],
          forEach: [dart.void, [dart.functionType(dart.void, [E])]],
          contains: [core.bool, [core.Object]],
          every: [core.bool, [dart.functionType(core.bool, [E])]],
          any: [core.bool, [dart.functionType(core.bool, [E])]],
          firstWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          lastWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          singleWhere: [E, [dart.functionType(core.bool, [E])]],
          join: [core.String, [], [core.String]],
          where: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          expand: [core.Iterable, [dart.functionType(core.Iterable, [E])]],
          reduce: [E, [dart.functionType(E, [E, E])]],
          fold: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          skip: [core.Iterable$(E), [core.int]],
          skipWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          take: [core.Iterable$(E), [core.int]],
          takeWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          toList: [core.List$(E), [], {growable: core.bool}],
          toSet: [core.Set$(E), []],
          add: [dart.void, [E]],
          addAll: [dart.void, [core.Iterable$(E)]],
          remove: [core.bool, [core.Object]],
          removeWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          retainWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          clear: [dart.void, []],
          removeLast: [E, []],
          sort: [dart.void, [], [dart.functionType(core.int, [E, E])]],
          shuffle: [dart.void, [], [math.Random]],
          asMap: [core.Map$(core.int, E), []],
          sublist: [core.List$(E), [core.int], [core.int]],
          getRange: [core.Iterable$(E), [core.int, core.int]],
          removeRange: [dart.void, [core.int, core.int]],
          fillRange: [dart.void, [core.int, core.int], [E]],
          setRange: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
          replaceRange: [dart.void, [core.int, core.int, core.Iterable$(E)]],
          indexOf: [core.int, [core.Object], [core.int]],
          lastIndexOf: [core.int, [core.Object], [core.int]],
          insert: [dart.void, [core.int, E]],
          removeAt: [E, [core.int]],
          insertAll: [dart.void, [core.int, core.Iterable$(E)]],
          setAll: [dart.void, [core.int, core.Iterable$(E)]]
        });
      },
      statics: function() {
        return ({_filter: [dart.void, [core.List, dart.functionType(core.bool, [dart.dynamic]), core.bool]]});
      },
      names: ['_filter']
    });
    dart.defineExtensionMembers(ListMixin, ['elementAt', 'forEach', 'contains', 'every', 'any', 'firstWhere', 'lastWhere', 'singleWhere', 'join', 'where', 'map', 'expand', 'reduce', 'fold', 'skip', 'skipWhile', 'take', 'takeWhile', 'toList', 'toSet', 'add', 'addAll', 'remove', 'removeWhere', 'retainWhere', 'clear', 'removeLast', 'sort', 'shuffle', 'asMap', 'sublist', 'getRange', 'removeRange', 'fillRange', 'setRange', 'replaceRange', 'indexOf', 'lastIndexOf', 'insert', 'removeAt', 'insertAll', 'setAll', 'iterator', 'isEmpty', 'isNotEmpty', 'first', 'last', 'single', 'reversed']);
    return ListMixin;
  });
  var ListMixin = ListMixin$();
  var ListBase$ = dart.generic(function(E) {
    var ListBase = function($__super) {
      function ListBase() {
        $traceurRuntime.superConstructor(ListBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ListBase, {}, {listToString: function(list) {
          return IterableBase.iterableToFullString(list, '[', ']');
        }}, $__super);
    }(dart.mixin(core.Object, ListMixin$(E)));
    dart.setSignature(ListBase, {
      statics: function() {
        return ({listToString: [core.String, [core.List]]});
      },
      names: ['listToString']
    });
    return ListBase;
  });
  var ListBase = ListBase$();
  var MapMixin$ = dart.generic(function(K, V) {
    var MapMixin = function($__super) {
      function MapMixin() {
        $traceurRuntime.superConstructor(MapMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MapMixin, {
        forEach: function(action) {
          dart.as(action, dart.functionType(dart.void, [K, V]));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this.keys)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var key = $__6.value;
              {
                action(key, this.get(key));
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
        },
        addAll: function(other) {
          dart.as(other, core.Map$(K, V));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (other.keys)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var key = $__6.value;
              {
                this.set(key, other.get(key));
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
        },
        containsValue: function(value) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this.keys)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var key = $__6.value;
              {
                if (dart.equals(this.get(key), value))
                  return true;
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
          return false;
        },
        putIfAbsent: function(key, ifAbsent) {
          dart.as(key, K);
          dart.as(ifAbsent, dart.functionType(V, []));
          if (dart.notNull(this.keys[dartx.contains](key))) {
            return this.get(key);
          }
          return this.set(key, ifAbsent());
        },
        containsKey: function(key) {
          return this.keys[dartx.contains](key);
        },
        get length() {
          return this.keys[dartx.length];
        },
        get isEmpty() {
          return this.keys[dartx.isEmpty];
        },
        get isNotEmpty() {
          return this.keys[dartx.isNotEmpty];
        },
        get values() {
          return new (_MapBaseValueIterable$(V))(this);
        },
        toString: function() {
          return Maps.mapToString(this);
        }
      }, {}, $__super);
    }(core.Object);
    MapMixin[dart.implements] = function() {
      return [core.Map$(K, V)];
    };
    dart.setSignature(MapMixin, {methods: function() {
        return ({
          forEach: [dart.void, [dart.functionType(dart.void, [K, V])]],
          addAll: [dart.void, [core.Map$(K, V)]],
          containsValue: [core.bool, [core.Object]],
          putIfAbsent: [V, [K, dart.functionType(V, [])]],
          containsKey: [core.bool, [core.Object]]
        });
      }});
    return MapMixin;
  });
  var MapMixin = MapMixin$();
  var MapBase$ = dart.generic(function(K, V) {
    var MapBase = function($__super) {
      function MapBase() {
        $traceurRuntime.superConstructor(MapBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MapBase, {}, {}, $__super);
    }(dart.mixin(core.Object, MapMixin$(K, V)));
    return MapBase;
  });
  var MapBase = MapBase$();
  var _UnmodifiableMapMixin$ = dart.generic(function(K, V) {
    var _UnmodifiableMapMixin = function($__super) {
      function _UnmodifiableMapMixin() {
        $traceurRuntime.superConstructor(_UnmodifiableMapMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_UnmodifiableMapMixin, {
        set: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          dart.throw(new core.UnsupportedError("Cannot modify unmodifiable map"));
          return value;
        },
        addAll: function(other) {
          dart.as(other, core.Map$(K, V));
          dart.throw(new core.UnsupportedError("Cannot modify unmodifiable map"));
        },
        clear: function() {
          dart.throw(new core.UnsupportedError("Cannot modify unmodifiable map"));
        },
        remove: function(key) {
          dart.throw(new core.UnsupportedError("Cannot modify unmodifiable map"));
        },
        putIfAbsent: function(key, ifAbsent) {
          dart.as(key, K);
          dart.as(ifAbsent, dart.functionType(V, []));
          dart.throw(new core.UnsupportedError("Cannot modify unmodifiable map"));
        }
      }, {}, $__super);
    }(core.Object);
    _UnmodifiableMapMixin[dart.implements] = function() {
      return [core.Map$(K, V)];
    };
    dart.setSignature(_UnmodifiableMapMixin, {methods: function() {
        return ({
          set: [dart.void, [K, V]],
          addAll: [dart.void, [core.Map$(K, V)]],
          clear: [dart.void, []],
          remove: [V, [core.Object]],
          putIfAbsent: [V, [K, dart.functionType(V, [])]]
        });
      }});
    return _UnmodifiableMapMixin;
  });
  var _UnmodifiableMapMixin = _UnmodifiableMapMixin$();
  var UnmodifiableMapBase$ = dart.generic(function(K, V) {
    var UnmodifiableMapBase = function($__super) {
      function UnmodifiableMapBase() {
        $traceurRuntime.superConstructor(UnmodifiableMapBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(UnmodifiableMapBase, {UnmodifiableMapBase: function() {
          var $__12;
          ($__12 = $traceurRuntime.superGet(this, UnmodifiableMapBase.prototype, "MapBase")).call.apply($__12, $traceurRuntime.spread([this], arguments));
        }}, {}, $__super);
    }(dart.mixin(MapBase$(K, V), _UnmodifiableMapMixin$(K, V)));
    return UnmodifiableMapBase;
  });
  var UnmodifiableMapBase = UnmodifiableMapBase$();
  var _map = Symbol('_map');
  var _MapBaseValueIterable$ = dart.generic(function(V) {
    var _MapBaseValueIterable = function($__super) {
      function _MapBaseValueIterable() {
        $traceurRuntime.superConstructor(_MapBaseValueIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_MapBaseValueIterable, {
        _MapBaseValueIterable: function(map) {
          this[_map] = map;
          $traceurRuntime.superGet(this, _MapBaseValueIterable.prototype, "IterableBase").call(this);
        },
        get length() {
          return this[_map].length;
        },
        get isEmpty() {
          return this[_map].isEmpty;
        },
        get isNotEmpty() {
          return this[_map].isNotEmpty;
        },
        get first() {
          return dart.as(this[_map].get(this[_map].keys[dartx.first]), V);
        },
        get single() {
          return dart.as(this[_map].get(this[_map].keys[dartx.single]), V);
        },
        get last() {
          return dart.as(this[_map].get(this[_map].keys[dartx.last]), V);
        },
        get iterator() {
          return new (_MapBaseValueIterator$(V))(this[_map]);
        }
      }, {}, $__super);
    }(IterableBase$(V));
    _MapBaseValueIterable[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.setSignature(_MapBaseValueIterable, {constructors: function() {
        return ({_MapBaseValueIterable: [_MapBaseValueIterable$(V), [core.Map]]});
      }});
    dart.defineExtensionMembers(_MapBaseValueIterable, ['length', 'isEmpty', 'isNotEmpty', 'first', 'single', 'last', 'iterator']);
    return _MapBaseValueIterable;
  });
  var _MapBaseValueIterable = _MapBaseValueIterable$();
  var _keys = Symbol('_keys');
  var _MapBaseValueIterator$ = dart.generic(function(V) {
    var _MapBaseValueIterator = function($__super) {
      function _MapBaseValueIterator() {
        $traceurRuntime.superConstructor(_MapBaseValueIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_MapBaseValueIterator, {
        _MapBaseValueIterator: function(map) {
          this[_map] = map;
          this[_keys] = map.keys[dartx.iterator];
          this[_current] = null;
        },
        moveNext: function() {
          if (dart.notNull(this[_keys].moveNext())) {
            this[_current] = dart.as(this[_map].get(this[_keys].current), V);
            return true;
          }
          this[_current] = null;
          return false;
        },
        get current() {
          return this[_current];
        }
      }, {}, $__super);
    }(core.Object);
    _MapBaseValueIterator[dart.implements] = function() {
      return [core.Iterator$(V)];
    };
    dart.setSignature(_MapBaseValueIterator, {
      constructors: function() {
        return ({_MapBaseValueIterator: [_MapBaseValueIterator$(V), [core.Map]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return _MapBaseValueIterator;
  });
  var _MapBaseValueIterator = _MapBaseValueIterator$();
  var MapView$ = dart.generic(function(K, V) {
    var MapView = function($__super) {
      function MapView() {
        $traceurRuntime.superConstructor(MapView).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MapView, {
        MapView: function(map) {
          this[_map] = map;
        },
        get: function(key) {
          return this[_map].get(key);
        },
        set: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          this[_map].set(key, value);
          return value;
        },
        addAll: function(other) {
          dart.as(other, core.Map$(K, V));
          this[_map].addAll(other);
        },
        clear: function() {
          this[_map].clear();
        },
        putIfAbsent: function(key, ifAbsent) {
          dart.as(key, K);
          dart.as(ifAbsent, dart.functionType(V, []));
          return this[_map].putIfAbsent(key, ifAbsent);
        },
        containsKey: function(key) {
          return this[_map].containsKey(key);
        },
        containsValue: function(value) {
          return this[_map].containsValue(value);
        },
        forEach: function(action) {
          dart.as(action, dart.functionType(dart.void, [K, V]));
          this[_map].forEach(action);
        },
        get isEmpty() {
          return this[_map].isEmpty;
        },
        get isNotEmpty() {
          return this[_map].isNotEmpty;
        },
        get length() {
          return this[_map].length;
        },
        get keys() {
          return this[_map].keys;
        },
        remove: function(key) {
          return this[_map].remove(key);
        },
        toString: function() {
          return dart.toString(this[_map]);
        },
        get values() {
          return this[_map].values;
        }
      }, {}, $__super);
    }(core.Object);
    MapView[dart.implements] = function() {
      return [core.Map$(K, V)];
    };
    dart.setSignature(MapView, {
      constructors: function() {
        return ({MapView: [MapView$(K, V), [core.Map$(K, V)]]});
      },
      methods: function() {
        return ({
          get: [V, [core.Object]],
          set: [dart.void, [K, V]],
          addAll: [dart.void, [core.Map$(K, V)]],
          clear: [dart.void, []],
          putIfAbsent: [V, [K, dart.functionType(V, [])]],
          containsKey: [core.bool, [core.Object]],
          containsValue: [core.bool, [core.Object]],
          forEach: [dart.void, [dart.functionType(dart.void, [K, V])]],
          remove: [V, [core.Object]]
        });
      }
    });
    return MapView;
  });
  var MapView = MapView$();
  var UnmodifiableMapView$ = dart.generic(function(K, V) {
    var UnmodifiableMapView = function($__super) {
      function UnmodifiableMapView() {
        $traceurRuntime.superConstructor(UnmodifiableMapView).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(UnmodifiableMapView, {UnmodifiableMapView: function() {
          var $__12;
          ($__12 = $traceurRuntime.superGet(this, UnmodifiableMapView.prototype, "MapView")).call.apply($__12, $traceurRuntime.spread([this], arguments));
        }}, {}, $__super);
    }(dart.mixin(MapView$(K, V), _UnmodifiableMapMixin$(K, V)));
    return UnmodifiableMapView;
  });
  var UnmodifiableMapView = UnmodifiableMapView$();
  var Maps = function($__super) {
    function Maps() {
      $traceurRuntime.superConstructor(Maps).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Maps, {}, {
      containsValue: function(map, value) {
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (map.values)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var v = $__6.value;
            {
              if (dart.equals(value, v)) {
                return true;
              }
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
        return false;
      },
      containsKey: function(map, key) {
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (map.keys)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var k = $__6.value;
            {
              if (dart.equals(key, k)) {
                return true;
              }
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
        return false;
      },
      putIfAbsent: function(map, key, ifAbsent) {
        if (dart.notNull(map.containsKey(key))) {
          return map.get(key);
        }
        var v = ifAbsent();
        map.set(key, v);
        return v;
      },
      clear: function(map) {
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (map.keys[dartx.toList]())[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var k = $__6.value;
            {
              map.remove(k);
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
      },
      forEach: function(map, f) {
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (map.keys)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var k = $__6.value;
            {
              dart.dcall(f, k, map.get(k));
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
      },
      getValues: function(map) {
        return map.keys[dartx.map](dart.fn(function(key) {
          return map.get(key);
        }));
      },
      length: function(map) {
        return map.keys[dartx.length];
      },
      isEmpty: function(map) {
        return map.keys[dartx.isEmpty];
      },
      isNotEmpty: function(map) {
        return map.keys[dartx.isNotEmpty];
      },
      mapToString: function(m) {
        if (dart.notNull(IterableBase._isToStringVisiting(m))) {
          return '{...}';
        }
        var result = new core.StringBuffer();
        try {
          IterableBase._toStringVisiting[dartx.add](m);
          result.write('{');
          var first = true;
          m.forEach(dart.fn(function(k, v) {
            if (!dart.notNull(first)) {
              result.write(', ');
            }
            first = false;
            result.write(k);
            result.write(': ');
            result.write(v);
          }));
          result.write('}');
        } finally {
          dart.assert(core.identical(IterableBase._toStringVisiting[dartx.last], m));
          IterableBase._toStringVisiting[dartx.removeLast]();
        }
        return dart.toString(result);
      },
      _id: function(x) {
        return x;
      },
      _fillMapWithMappedIterable: function(map, iterable, key, value) {
        if (key == null)
          key = Maps._id;
        if (value == null)
          value = Maps._id;
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (iterable)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var element = $__6.value;
            {
              map.set(dart.dcall(key, element), dart.dcall(value, element));
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
      },
      _fillMapWithIterables: function(map, keys, values) {
        var keyIterator = keys[dartx.iterator];
        var valueIterator = values[dartx.iterator];
        var hasNextKey = keyIterator.moveNext();
        var hasNextValue = valueIterator.moveNext();
        while (dart.notNull(hasNextKey) && dart.notNull(hasNextValue)) {
          map.set(keyIterator.current, valueIterator.current);
          hasNextKey = keyIterator.moveNext();
          hasNextValue = valueIterator.moveNext();
        }
        if (dart.notNull(hasNextKey) || dart.notNull(hasNextValue)) {
          dart.throw(new core.ArgumentError("Iterables do not have same length."));
        }
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(Maps, {
    statics: function() {
      return ({
        containsValue: [core.bool, [core.Map, dart.dynamic]],
        containsKey: [core.bool, [core.Map, dart.dynamic]],
        putIfAbsent: [dart.dynamic, [core.Map, dart.dynamic, dart.functionType(dart.dynamic, [])]],
        clear: [dart.dynamic, [core.Map]],
        forEach: [dart.dynamic, [core.Map, dart.functionType(dart.void, [dart.dynamic, dart.dynamic])]],
        getValues: [core.Iterable, [core.Map]],
        length: [core.int, [core.Map]],
        isEmpty: [core.bool, [core.Map]],
        isNotEmpty: [core.bool, [core.Map]],
        mapToString: [core.String, [core.Map]],
        _id: [dart.dynamic, [dart.dynamic]],
        _fillMapWithMappedIterable: [dart.void, [core.Map, core.Iterable, dart.functionType(dart.dynamic, [dart.dynamic]), dart.functionType(dart.dynamic, [dart.dynamic])]],
        _fillMapWithIterables: [dart.void, [core.Map, core.Iterable, core.Iterable]]
      });
    },
    names: ['containsValue', 'containsKey', 'putIfAbsent', 'clear', 'forEach', 'getValues', 'length', 'isEmpty', 'isNotEmpty', 'mapToString', '_id', '_fillMapWithMappedIterable', '_fillMapWithIterables']
  });
  var Queue$ = dart.generic(function(E) {
    var Queue = function($__super) {
      var $__4;
      function Queue() {
        $traceurRuntime.superConstructor(Queue).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Queue, ($__4 = {}, Object.defineProperty($__4, Symbol.iterator, {
        value: function() {
          return new dart.JsIterator(this.iterator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        new: function() {
          return new (ListQueue$(E))();
        },
        from: function(elements) {
          return ListQueue$(E).from(elements);
        }
      }, $__super);
    }(core.Object);
    Queue[dart.implements] = function() {
      return [core.Iterable$(E), _internal.EfficientLength];
    };
    dart.setSignature(Queue, {constructors: function() {
        return ({
          new: [Queue$(E), []],
          from: [Queue$(E), [core.Iterable]]
        });
      }});
    return Queue;
  });
  var Queue = Queue$();
  var _element = Symbol('_element');
  var _link = Symbol('_link');
  var _asNonSentinelEntry = Symbol('_asNonSentinelEntry');
  var DoubleLinkedQueueEntry$ = dart.generic(function(E) {
    var DoubleLinkedQueueEntry = function($__super) {
      var $__4;
      function DoubleLinkedQueueEntry() {
        $traceurRuntime.superConstructor(DoubleLinkedQueueEntry).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(DoubleLinkedQueueEntry, ($__4 = {}, Object.defineProperty($__4, "DoubleLinkedQueueEntry", {
        value: function(e) {
          this[_element] = e;
          this[_previous] = null;
          this[_next] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _link, {
        value: function(previous, next) {
          dart.as(previous, DoubleLinkedQueueEntry$(E));
          dart.as(next, DoubleLinkedQueueEntry$(E));
          this[_next] = next;
          this[_previous] = previous;
          previous[_next] = this;
          next[_previous] = this;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "append", {
        value: function(e) {
          dart.as(e, E);
          new (DoubleLinkedQueueEntry$(E))(e)[_link](this, this[_next]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "prepend", {
        value: function(e) {
          dart.as(e, E);
          new (DoubleLinkedQueueEntry$(E))(e)[_link](this[_previous], this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function() {
          this[_previous][_next] = this[_next];
          this[_next][_previous] = this[_previous];
          this[_next] = null;
          this[_previous] = null;
          return this[_element];
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _asNonSentinelEntry, {
        value: function() {
          return this;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "previousEntry", {
        value: function() {
          return this[_previous][_asNonSentinelEntry]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "nextEntry", {
        value: function() {
          return this[_next][_asNonSentinelEntry]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "element", {
        get: function() {
          return this[_element];
        },
        configurable: true,
        enumerable: true,
        set: function(e) {
          dart.as(e, E);
          this[_element] = e;
        }
      }), $__4), {}, $__super);
    }(core.Object);
    dart.setSignature(DoubleLinkedQueueEntry, {
      constructors: function() {
        return ({DoubleLinkedQueueEntry: [DoubleLinkedQueueEntry$(E), [E]]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _link, {
          value: [dart.void, [DoubleLinkedQueueEntry$(E), DoubleLinkedQueueEntry$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "append", {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "prepend", {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _asNonSentinelEntry, {
          value: [DoubleLinkedQueueEntry$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "previousEntry", {
          value: [DoubleLinkedQueueEntry$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "nextEntry", {
          value: [DoubleLinkedQueueEntry$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return DoubleLinkedQueueEntry;
  });
  var DoubleLinkedQueueEntry = DoubleLinkedQueueEntry$();
  var _DoubleLinkedQueueEntrySentinel$ = dart.generic(function(E) {
    var _DoubleLinkedQueueEntrySentinel = function($__super) {
      var $__4;
      function _DoubleLinkedQueueEntrySentinel() {
        $traceurRuntime.superConstructor(_DoubleLinkedQueueEntrySentinel).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DoubleLinkedQueueEntrySentinel, ($__4 = {}, Object.defineProperty($__4, "_DoubleLinkedQueueEntrySentinel", {
        value: function() {
          $traceurRuntime.superGet(this, _DoubleLinkedQueueEntrySentinel.prototype, "DoubleLinkedQueueEntry").call(this, null);
          this[_link](this, this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function() {
          dart.throw(_internal.IterableElementError.noElement());
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _asNonSentinelEntry, {
        value: function() {
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "element", {
        set: function(e) {
          dart.as(e, E);
          dart.assert(false);
        },
        configurable: true,
        enumerable: true,
        get: function() {
          dart.throw(_internal.IterableElementError.noElement());
        }
      }), $__4), {}, $__super);
    }(DoubleLinkedQueueEntry$(E));
    dart.setSignature(_DoubleLinkedQueueEntrySentinel, {
      constructors: function() {
        return ({_DoubleLinkedQueueEntrySentinel: [_DoubleLinkedQueueEntrySentinel$(E), []]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "remove", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _asNonSentinelEntry, {
          value: [DoubleLinkedQueueEntry$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return _DoubleLinkedQueueEntrySentinel;
  });
  var _DoubleLinkedQueueEntrySentinel = _DoubleLinkedQueueEntrySentinel$();
  var _sentinel = Symbol('_sentinel');
  var _elementCount = Symbol('_elementCount');
  var _filter = Symbol('_filter');
  var DoubleLinkedQueue$ = dart.generic(function(E) {
    var DoubleLinkedQueue = function($__super) {
      var $__4;
      function DoubleLinkedQueue() {
        $traceurRuntime.superConstructor(DoubleLinkedQueue).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(DoubleLinkedQueue, ($__4 = {}, Object.defineProperty($__4, "DoubleLinkedQueue", {
        value: function() {
          this[_sentinel] = null;
          this[_elementCount] = 0;
          $traceurRuntime.superGet(this, DoubleLinkedQueue.prototype, "IterableBase").call(this);
          this[_sentinel] = new (_DoubleLinkedQueueEntrySentinel$(E))();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_elementCount];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "addLast", {
        value: function(value) {
          dart.as(value, E);
          this[_sentinel].prepend(value);
          this[_elementCount] = dart.notNull(this[_elementCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addFirst", {
        value: function(value) {
          dart.as(value, E);
          this[_sentinel].append(value);
          this[_elementCount] = dart.notNull(this[_elementCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(value) {
          dart.as(value, E);
          this[_sentinel].prepend(value);
          this[_elementCount] = dart.notNull(this[_elementCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(iterable) {
          dart.as(iterable, core.Iterable$(E));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (iterable)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var value = $__6.value;
              {
                this[_sentinel].prepend(value);
                this[_elementCount] = dart.notNull(this[_elementCount]) + 1;
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeLast", {
        value: function() {
          var result = this[_sentinel][_previous].remove();
          this[_elementCount] = dart.notNull(this[_elementCount]) - 1;
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeFirst", {
        value: function() {
          var result = this[_sentinel][_next].remove();
          this[_elementCount] = dart.notNull(this[_elementCount]) - 1;
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(o) {
          var entry = this[_sentinel][_next];
          while (!dart.notNull(core.identical(entry, this[_sentinel]))) {
            if (dart.equals(entry.element, o)) {
              entry.remove();
              this[_elementCount] = dart.notNull(this[_elementCount]) - 1;
              return true;
            }
            entry = entry[_next];
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _filter, {
        value: function(test, removeMatching) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var entry = this[_sentinel][_next];
          while (!dart.notNull(core.identical(entry, this[_sentinel]))) {
            var next = entry[_next];
            if (dart.notNull(core.identical(removeMatching, test(entry.element)))) {
              entry.remove();
              this[_elementCount] = dart.notNull(this[_elementCount]) - 1;
            }
            entry = next;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          this[_filter](test, true);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          this[_filter](test, false);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          return this[_sentinel][_next].element;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          return this[_sentinel][_previous].element;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          if (dart.notNull(core.identical(this[_sentinel][_next], this[_sentinel][_previous]))) {
            return this[_sentinel][_next].element;
          }
          dart.throw(_internal.IterableElementError.tooMany());
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "lastEntry", {
        value: function() {
          return this[_sentinel].previousEntry();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "firstEntry", {
        value: function() {
          return this[_sentinel].nextEntry();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return core.identical(this[_sentinel][_next], this[_sentinel]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          this[_sentinel][_next] = this[_sentinel];
          this[_sentinel][_previous] = this[_sentinel];
          this[_elementCount] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEachEntry", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.void, [DoubleLinkedQueueEntry$(E)]));
          var entry = this[_sentinel][_next];
          while (!dart.notNull(core.identical(entry, this[_sentinel]))) {
            var nextEntry = entry[_next];
            f(entry);
            entry = nextEntry;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (_DoubleLinkedQueueIterator$(E))(this[_sentinel]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase.iterableToFullString(this, '{', '}');
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {from: function(elements) {
          var list = new (DoubleLinkedQueue$(E))();
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (dart.as(elements, core.Iterable$(E)))[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var e = $__6.value;
              {
                list.addLast(e);
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
          return dart.as(list, DoubleLinkedQueue$(E));
        }}, $__super);
    }(IterableBase$(E));
    DoubleLinkedQueue[dart.implements] = function() {
      return [Queue$(E)];
    };
    dart.setSignature(DoubleLinkedQueue, {
      constructors: function() {
        return ({
          DoubleLinkedQueue: [DoubleLinkedQueue$(E), []],
          from: [DoubleLinkedQueue$(E), [core.Iterable]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "addLast", {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addFirst", {
          value: [dart.void, [E]],
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
        }), Object.defineProperty($__4, "removeLast", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeFirst", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _filter, {
          value: [dart.void, [dart.functionType(core.bool, [E]), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeWhere", {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "retainWhere", {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lastEntry", {
          value: [DoubleLinkedQueueEntry$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "firstEntry", {
          value: [DoubleLinkedQueueEntry$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "clear", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "forEachEntry", {
          value: [dart.void, [dart.functionType(dart.void, [DoubleLinkedQueueEntry$(E)])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    dart.defineExtensionMembers(DoubleLinkedQueue, ['length', 'first', 'last', 'single', 'isEmpty', 'iterator']);
    return DoubleLinkedQueue;
  });
  var DoubleLinkedQueue = DoubleLinkedQueue$();
  var _nextEntry = Symbol('_nextEntry');
  var _DoubleLinkedQueueIterator$ = dart.generic(function(E) {
    var _DoubleLinkedQueueIterator = function($__super) {
      function _DoubleLinkedQueueIterator() {
        $traceurRuntime.superConstructor(_DoubleLinkedQueueIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DoubleLinkedQueueIterator, {
        _DoubleLinkedQueueIterator: function(sentinel) {
          this[_sentinel] = sentinel;
          this[_nextEntry] = sentinel[_next];
          this[_current] = null;
        },
        moveNext: function() {
          if (!dart.notNull(core.identical(this[_nextEntry], this[_sentinel]))) {
            this[_current] = this[_nextEntry][_element];
            this[_nextEntry] = this[_nextEntry][_next];
            return true;
          }
          this[_current] = null;
          this[_nextEntry] = this[_sentinel] = null;
          return false;
        },
        get current() {
          return this[_current];
        }
      }, {}, $__super);
    }(core.Object);
    _DoubleLinkedQueueIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(_DoubleLinkedQueueIterator, {
      constructors: function() {
        return ({_DoubleLinkedQueueIterator: [_DoubleLinkedQueueIterator$(E), [_DoubleLinkedQueueEntrySentinel$(E)]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return _DoubleLinkedQueueIterator;
  });
  var _DoubleLinkedQueueIterator = _DoubleLinkedQueueIterator$();
  var _head = Symbol('_head');
  var _tail = Symbol('_tail');
  var _table = Symbol('_table');
  var _checkModification = Symbol('_checkModification');
  var _writeToList = Symbol('_writeToList');
  var _add = Symbol('_add');
  var _preGrow = Symbol('_preGrow');
  var _remove = Symbol('_remove');
  var _filterWhere = Symbol('_filterWhere');
  var _grow = Symbol('_grow');
  var ListQueue$ = dart.generic(function(E) {
    var ListQueue = function($__super) {
      var $__4;
      function ListQueue() {
        $traceurRuntime.superConstructor(ListQueue).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ListQueue, ($__4 = {}, Object.defineProperty($__4, "ListQueue", {
        value: function(initialCapacity) {
          if (initialCapacity === void 0)
            initialCapacity = null;
          this[_head] = 0;
          this[_tail] = 0;
          this[_table] = null;
          this[_modificationCount] = 0;
          $traceurRuntime.superGet(this, ListQueue.prototype, "IterableBase").call(this);
          if (initialCapacity == null || dart.notNull(initialCapacity) < dart.notNull(ListQueue$()._INITIAL_CAPACITY)) {
            initialCapacity = ListQueue$()._INITIAL_CAPACITY;
          } else if (!dart.notNull(ListQueue$()._isPowerOf2(initialCapacity))) {
            initialCapacity = ListQueue$()._nextPowerOf2(initialCapacity);
          }
          dart.assert(ListQueue$()._isPowerOf2(initialCapacity));
          this[_table] = core.List$(E).new(initialCapacity);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (_ListQueueIterator$(E))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [E]));
          var modificationCount = this[_modificationCount];
          for (var i = this[_head]; i != this[_tail]; i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1) {
            action(this[_table][dartx.get](i));
            this[_checkModification](modificationCount);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_head] == this[_tail];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][dartx.length]) - 1;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          if (this[_head] == this[_tail])
            dart.throw(_internal.IterableElementError.noElement());
          return this[_table][dartx.get](this[_head]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          if (this[_head] == this[_tail])
            dart.throw(_internal.IterableElementError.noElement());
          return this[_table][dartx.get](dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][dartx.length]) - 1);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          if (this[_head] == this[_tail])
            dart.throw(_internal.IterableElementError.noElement());
          if (dart.notNull(this.length) > 1)
            dart.throw(_internal.IterableElementError.tooMany());
          return this[_table][dartx.get](this[_head]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "elementAt", {
        value: function(index) {
          core.RangeError.checkValidIndex(index, this);
          return this[_table][dartx.get](dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][dartx.length]) - 1);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toList", {
        value: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var list = null;
          if (dart.notNull(growable)) {
            list = core.List$(E).new();
            list[dartx.length] = this.length;
          } else {
            list = core.List$(E).new(this.length);
          }
          this[_writeToList](list);
          return list;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(element) {
          dart.as(element, E);
          this[_add](element);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(elements) {
          dart.as(elements, core.Iterable$(E));
          if (dart.is(elements, core.List)) {
            var list = dart.as(elements, core.List);
            var addCount = list[dartx.length];
            var length = this.length;
            if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][dartx.length])) {
              this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
              this[_table][dartx.setRange](length, dart.notNull(length) + dart.notNull(addCount), dart.as(list, core.Iterable$(E)), 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              var endSpace = dart.notNull(this[_table][dartx.length]) - dart.notNull(this[_tail]);
              if (dart.notNull(addCount) < dart.notNull(endSpace)) {
                this[_table][dartx.setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), dart.as(list, core.Iterable$(E)), 0);
                this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
              } else {
                var preSpace = dart.notNull(addCount) - dart.notNull(endSpace);
                this[_table][dartx.setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(endSpace), dart.as(list, core.Iterable$(E)), 0);
                this[_table][dartx.setRange](0, preSpace, dart.as(list, core.Iterable$(E)), endSpace);
                this[_tail] = preSpace;
              }
            }
            this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          } else {
            var $__8 = true;
            var $__9 = false;
            var $__10 = undefined;
            try {
              for (var $__6 = void 0,
                  $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
                var element = $__6.value;
                this[_add](element);
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
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(object) {
          for (var i = this[_head]; i != this[_tail]; i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1) {
            var element = this[_table][dartx.get](i);
            if (dart.equals(element, object)) {
              this[_remove](i);
              this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
              return true;
            }
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _filterWhere, {
        value: function(test, removeMatching) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var index = this[_head];
          var modificationCount = this[_modificationCount];
          var i = this[_head];
          while (i != this[_tail]) {
            var element = this[_table][dartx.get](i);
            var remove = core.identical(removeMatching, test(element));
            this[_checkModification](modificationCount);
            if (dart.notNull(remove)) {
              i = this[_remove](i);
              modificationCount = this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
            } else {
              i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          this[_filterWhere](test, true);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          this[_filterWhere](test, false);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          if (this[_head] != this[_tail]) {
            for (var i = this[_head]; i != this[_tail]; i = dart.notNull(i) + 1 & dart.notNull(this[_table][dartx.length]) - 1) {
              this[_table][dartx.set](i, null);
            }
            this[_head] = this[_tail] = 0;
            this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase.iterableToFullString(this, "{", "}");
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addLast", {
        value: function(element) {
          dart.as(element, E);
          this[_add](element);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addFirst", {
        value: function(element) {
          dart.as(element, E);
          this[_head] = dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][dartx.length]) - 1;
          this[_table][dartx.set](this[_head], element);
          if (this[_head] == this[_tail])
            this[_grow]();
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeFirst", {
        value: function() {
          if (this[_head] == this[_tail])
            dart.throw(_internal.IterableElementError.noElement());
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          var result = this[_table][dartx.get](this[_head]);
          this[_table][dartx.set](this[_head], null);
          this[_head] = dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeLast", {
        value: function() {
          if (this[_head] == this[_tail])
            dart.throw(_internal.IterableElementError.noElement());
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          this[_tail] = dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][dartx.length]) - 1;
          var result = this[_table][dartx.get](this[_tail]);
          this[_table][dartx.set](this[_tail], null);
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _checkModification, {
        value: function(expectedModificationCount) {
          if (expectedModificationCount != this[_modificationCount]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _add, {
        value: function(element) {
          dart.as(element, E);
          this[_table][dartx.set](this[_tail], element);
          this[_tail] = dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][dartx.length]) - 1;
          if (this[_head] == this[_tail])
            this[_grow]();
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _remove, {
        value: function(offset) {
          var mask = dart.notNull(this[_table][dartx.length]) - 1;
          var startDistance = dart.notNull(offset) - dart.notNull(this[_head]) & dart.notNull(mask);
          var endDistance = dart.notNull(this[_tail]) - dart.notNull(offset) & dart.notNull(mask);
          if (dart.notNull(startDistance) < dart.notNull(endDistance)) {
            var i = offset;
            while (i != this[_head]) {
              var prevOffset = dart.notNull(i) - 1 & dart.notNull(mask);
              this[_table][dartx.set](i, this[_table][dartx.get](prevOffset));
              i = prevOffset;
            }
            this[_table][dartx.set](this[_head], null);
            this[_head] = dart.notNull(this[_head]) + 1 & dart.notNull(mask);
            return dart.notNull(offset) + 1 & dart.notNull(mask);
          } else {
            this[_tail] = dart.notNull(this[_tail]) - 1 & dart.notNull(mask);
            var i$__17 = offset;
            while (i$__17 != this[_tail]) {
              var nextOffset = dart.notNull(i$__17) + 1 & dart.notNull(mask);
              this[_table][dartx.set](i$__17, this[_table][dartx.get](nextOffset));
              i$__17 = nextOffset;
            }
            this[_table][dartx.set](this[_tail], null);
            return offset;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _grow, {
        value: function() {
          var newTable = core.List$(E).new(dart.notNull(this[_table][dartx.length]) * 2);
          var split = dart.notNull(this[_table][dartx.length]) - dart.notNull(this[_head]);
          newTable[dartx.setRange](0, split, this[_table], this[_head]);
          newTable[dartx.setRange](split, dart.notNull(split) + dart.notNull(this[_head]), this[_table], 0);
          this[_head] = 0;
          this[_tail] = this[_table][dartx.length];
          this[_table] = newTable;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _writeToList, {
        value: function(target) {
          dart.as(target, core.List$(E));
          dart.assert(dart.notNull(target[dartx.length]) >= dart.notNull(this.length));
          if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
            var length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
            target[dartx.setRange](0, length, this[_table], this[_head]);
            return length;
          } else {
            var firstPartSize = dart.notNull(this[_table][dartx.length]) - dart.notNull(this[_head]);
            target[dartx.setRange](0, firstPartSize, this[_table], this[_head]);
            target[dartx.setRange](firstPartSize, dart.notNull(firstPartSize) + dart.notNull(this[_tail]), this[_table], 0);
            return dart.notNull(this[_tail]) + dart.notNull(firstPartSize);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _preGrow, {
        value: function(newElementCount) {
          dart.assert(dart.notNull(newElementCount) >= dart.notNull(this.length));
          newElementCount = dart.notNull(newElementCount) + (dart.notNull(newElementCount) >> 1);
          var newCapacity = ListQueue$()._nextPowerOf2(newElementCount);
          var newTable = core.List$(E).new(newCapacity);
          this[_tail] = this[_writeToList](newTable);
          this[_table] = newTable;
          this[_head] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        from: function(elements) {
          if (dart.is(elements, core.List)) {
            var length = elements[dartx.length];
            var queue = new (ListQueue$(E))(dart.notNull(length) + 1);
            dart.assert(dart.notNull(queue[_table][dartx.length]) > dart.notNull(length));
            var sourceList = elements;
            queue[_table][dartx.setRange](0, length, dart.as(sourceList, core.Iterable$(E)), 0);
            queue[_tail] = length;
            return queue;
          } else {
            var capacity = ListQueue$()._INITIAL_CAPACITY;
            if (dart.is(elements, _internal.EfficientLength)) {
              capacity = elements[dartx.length];
            }
            var result = new (ListQueue$(E))(capacity);
            var $__8 = true;
            var $__9 = false;
            var $__10 = undefined;
            try {
              for (var $__6 = void 0,
                  $__5 = (dart.as(elements, core.Iterable$(E)))[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
                var element = $__6.value;
                {
                  result.addLast(element);
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
            return result;
          }
        },
        _isPowerOf2: function(number) {
          return (dart.notNull(number) & dart.notNull(number) - 1) == 0;
        },
        _nextPowerOf2: function(number) {
          dart.assert(dart.notNull(number) > 0);
          number = (dart.notNull(number) << 1) - 1;
          for (; ; ) {
            var nextNumber = dart.notNull(number) & dart.notNull(number) - 1;
            if (nextNumber == 0)
              return number;
            number = nextNumber;
          }
        }
      }, $__super);
    }(IterableBase$(E));
    ListQueue[dart.implements] = function() {
      return [Queue$(E)];
    };
    dart.setSignature(ListQueue, {
      constructors: function() {
        return ({
          ListQueue: [ListQueue$(E), [], [core.int]],
          from: [ListQueue$(E), [core.Iterable]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "forEach", {
          value: [dart.void, [dart.functionType(dart.void, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "elementAt", {
          value: [E, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "toList", {
          value: [core.List$(E), [], {growable: core.bool}],
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
        }), Object.defineProperty($__4, "remove", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _filterWhere, {
          value: [dart.void, [dart.functionType(core.bool, [E]), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeWhere", {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "retainWhere", {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "clear", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addLast", {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addFirst", {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeFirst", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeLast", {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _checkModification, {
          value: [dart.void, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _add, {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _remove, {
          value: [core.int, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _grow, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _writeToList, {
          value: [core.int, [core.List$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _preGrow, {
          value: [dart.void, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({
          _isPowerOf2: [core.bool, [core.int]],
          _nextPowerOf2: [core.int, [core.int]]
        });
      },
      names: ['_isPowerOf2', '_nextPowerOf2']
    });
    dart.defineExtensionMembers(ListQueue, ['forEach', 'elementAt', 'toList', 'iterator', 'isEmpty', 'length', 'first', 'last', 'single']);
    return ListQueue;
  });
  var ListQueue = ListQueue$();
  ListQueue._INITIAL_CAPACITY = 8;
  var _queue = Symbol('_queue');
  var _end = Symbol('_end');
  var _position = Symbol('_position');
  var _ListQueueIterator$ = dart.generic(function(E) {
    var _ListQueueIterator = function($__super) {
      function _ListQueueIterator() {
        $traceurRuntime.superConstructor(_ListQueueIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ListQueueIterator, {
        _ListQueueIterator: function(queue) {
          this[_queue] = queue;
          this[_end] = queue[_tail];
          this[_modificationCount] = queue[_modificationCount];
          this[_position] = queue[_head];
          this[_current] = null;
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          this[_queue][_checkModification](this[_modificationCount]);
          if (this[_position] == this[_end]) {
            this[_current] = null;
            return false;
          }
          this[_current] = dart.as(this[_queue][_table][dartx.get](this[_position]), E);
          this[_position] = dart.notNull(this[_position]) + 1 & dart.notNull(this[_queue][_table][dartx.length]) - 1;
          return true;
        }
      }, {}, $__super);
    }(core.Object);
    _ListQueueIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(_ListQueueIterator, {
      constructors: function() {
        return ({_ListQueueIterator: [_ListQueueIterator$(E), [ListQueue]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return _ListQueueIterator;
  });
  var _ListQueueIterator = _ListQueueIterator$();
  var _Predicate$ = dart.generic(function(T) {
    var _Predicate = dart.typedef('_Predicate', function() {
      return dart.functionType(core.bool, [T]);
    });
    return _Predicate;
  });
  var _Predicate = _Predicate$();
  var _SplayTreeNode$ = dart.generic(function(K) {
    var _SplayTreeNode = function($__super) {
      function _SplayTreeNode() {
        $traceurRuntime.superConstructor(_SplayTreeNode).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeNode, {_SplayTreeNode: function(key) {
          this.key = key;
          this.left = null;
          this.right = null;
        }}, {}, $__super);
    }(core.Object);
    dart.setSignature(_SplayTreeNode, {constructors: function() {
        return ({_SplayTreeNode: [_SplayTreeNode$(K), [K]]});
      }});
    return _SplayTreeNode;
  });
  var _SplayTreeNode = _SplayTreeNode$();
  var _SplayTreeMapNode$ = dart.generic(function(K, V) {
    var _SplayTreeMapNode = function($__super) {
      function _SplayTreeMapNode() {
        $traceurRuntime.superConstructor(_SplayTreeMapNode).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeMapNode, {_SplayTreeMapNode: function(key, value) {
          this.value = value;
          $traceurRuntime.superGet(this, _SplayTreeMapNode.prototype, "_SplayTreeNode").call(this, key);
        }}, {}, $__super);
    }(_SplayTreeNode$(K));
    dart.setSignature(_SplayTreeMapNode, {constructors: function() {
        return ({_SplayTreeMapNode: [_SplayTreeMapNode$(K, V), [K, V]]});
      }});
    return _SplayTreeMapNode;
  });
  var _SplayTreeMapNode = _SplayTreeMapNode$();
  var _dummy = Symbol('_dummy');
  var _root = Symbol('_root');
  var _count = Symbol('_count');
  var _splayCount = Symbol('_splayCount');
  var _compare = Symbol('_compare');
  var _splay = Symbol('_splay');
  var _splayMin = Symbol('_splayMin');
  var _splayMax = Symbol('_splayMax');
  var _addNewRoot = Symbol('_addNewRoot');
  var _first = Symbol('_first');
  var _last = Symbol('_last');
  var _clear = Symbol('_clear');
  var _SplayTree$ = dart.generic(function(K) {
    var _SplayTree = function($__super) {
      var $__4;
      function _SplayTree() {
        $traceurRuntime.superConstructor(_SplayTree).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTree, ($__4 = {}, Object.defineProperty($__4, "_SplayTree", {
        value: function() {
          this[_dummy] = new (_SplayTreeNode$(K))(null);
          this[_root] = null;
          this[_count] = 0;
          this[_modificationCount] = 0;
          this[_splayCount] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _splay, {
        value: function(key) {
          dart.as(key, K);
          if (this[_root] == null)
            return -1;
          var left = this[_dummy];
          var right = this[_dummy];
          var current = this[_root];
          var comp = null;
          while (true) {
            comp = this[_compare](current.key, key);
            if (dart.notNull(comp) > 0) {
              if (current.left == null)
                break;
              comp = this[_compare](current.left.key, key);
              if (dart.notNull(comp) > 0) {
                var tmp = current.left;
                current.left = tmp.right;
                tmp.right = current;
                current = tmp;
                if (current.left == null)
                  break;
              }
              right.left = current;
              right = current;
              current = current.left;
            } else if (dart.notNull(comp) < 0) {
              if (current.right == null)
                break;
              comp = this[_compare](current.right.key, key);
              if (dart.notNull(comp) < 0) {
                var tmp$__18 = current.right;
                current.right = tmp$__18.left;
                tmp$__18.left = current;
                current = tmp$__18;
                if (current.right == null)
                  break;
              }
              left.right = current;
              left = current;
              current = current.right;
            } else {
              break;
            }
          }
          left.right = current.left;
          right.left = current.right;
          current.left = this[_dummy].right;
          current.right = this[_dummy].left;
          this[_root] = current;
          this[_dummy].right = null;
          this[_dummy].left = null;
          this[_splayCount] = dart.notNull(this[_splayCount]) + 1;
          return comp;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _splayMin, {
        value: function(node) {
          dart.as(node, _SplayTreeNode$(K));
          var current = node;
          while (current.left != null) {
            var left = current.left;
            current.left = left.right;
            left.right = current;
            current = left;
          }
          return dart.as(current, _SplayTreeNode$(K));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _splayMax, {
        value: function(node) {
          dart.as(node, _SplayTreeNode$(K));
          var current = node;
          while (current.right != null) {
            var right = current.right;
            current.right = right.left;
            right.left = current;
            current = right;
          }
          return dart.as(current, _SplayTreeNode$(K));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _remove, {
        value: function(key) {
          dart.as(key, K);
          if (this[_root] == null)
            return null;
          var comp = this[_splay](key);
          if (comp != 0)
            return null;
          var result = this[_root];
          this[_count] = dart.notNull(this[_count]) - 1;
          if (this[_root].left == null) {
            this[_root] = this[_root].right;
          } else {
            var right = this[_root].right;
            this[_root] = this[_splayMax](this[_root].left);
            this[_root].right = right;
          }
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _addNewRoot, {
        value: function(node, comp) {
          dart.as(node, _SplayTreeNode$(K));
          this[_count] = dart.notNull(this[_count]) + 1;
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          if (this[_root] == null) {
            this[_root] = node;
            return;
          }
          if (dart.notNull(comp) < 0) {
            node.left = this[_root];
            node.right = this[_root].right;
            this[_root].right = null;
          } else {
            node.right = this[_root];
            node.left = this[_root].left;
            this[_root].left = null;
          }
          this[_root] = node;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _first, {
        get: function() {
          if (this[_root] == null)
            return null;
          this[_root] = this[_splayMin](this[_root]);
          return this[_root];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, _last, {
        get: function() {
          if (this[_root] == null)
            return null;
          this[_root] = this[_splayMax](this[_root]);
          return this[_root];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, _clear, {
        value: function() {
          this[_root] = null;
          this[_count] = 0;
          this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(core.Object);
    dart.setSignature(_SplayTree, {methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _splay, {
          value: [core.int, [K]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _splayMin, {
          value: [_SplayTreeNode$(K), [_SplayTreeNode$(K)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _splayMax, {
          value: [_SplayTreeNode$(K), [_SplayTreeNode$(K)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _remove, {
          value: [_SplayTreeNode, [K]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _addNewRoot, {
          value: [dart.void, [_SplayTreeNode$(K), core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _clear, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }});
    return _SplayTree;
  });
  var _SplayTree = _SplayTree$();
  var _comparator = Symbol('_comparator');
  var _validKey = Symbol('_validKey');
  var SplayTreeMap$ = dart.generic(function(K, V) {
    var SplayTreeMap = function($__super) {
      var $__4;
      function SplayTreeMap() {
        $traceurRuntime.superConstructor(SplayTreeMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SplayTreeMap, ($__4 = {}, Object.defineProperty($__4, "SplayTreeMap", {
        value: function(compare, isValidKey) {
          if (compare === void 0)
            compare = null;
          if (isValidKey === void 0)
            isValidKey = null;
          this[_comparator] = dart.as(compare == null ? core.Comparable.compare : compare, core.Comparator$(K));
          this[_validKey] = isValidKey != null ? isValidKey : dart.fn(function(v) {
            return dart.is(v, K);
          }, core.bool, [dart.dynamic]);
          $traceurRuntime.superGet(this, SplayTreeMap.prototype, "_SplayTree").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _compare, {
        value: function(key1, key2) {
          dart.as(key1, K);
          dart.as(key2, K);
          return this[_comparator](key1, key2);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "_internal", {
        value: function() {
          this[_comparator] = null;
          this[_validKey] = null;
          $traceurRuntime.superGet(this, SplayTreeMap.prototype, "_SplayTree").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "get", {
        value: function(key) {
          if (key == null)
            dart.throw(new core.ArgumentError(key));
          if (!dart.notNull(this[_validKey](key)))
            return null;
          if (this[_root] != null) {
            var comp = this[_splay](dart.as(key, K));
            if (comp == 0) {
              var mapRoot = dart.as(this[_root], _SplayTreeMapNode);
              return dart.as(mapRoot.value, V);
            }
          }
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return null;
          var mapRoot = dart.as(this[_remove](dart.as(key, K)), _SplayTreeMapNode);
          if (mapRoot != null)
            return dart.as(mapRoot.value, V);
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "set", {
        value: function(key, value) {
          var $__3 = this;
          ((function() {
            dart.as(key, K);
            dart.as(value, V);
            if (key == null)
              dart.throw(new core.ArgumentError(key));
            var comp = $__3[_splay](key);
            if (comp == 0) {
              var mapRoot = dart.as($__3[_root], _SplayTreeMapNode);
              mapRoot.value = value;
              return;
            }
            $__3[_addNewRoot](new (_SplayTreeMapNode$(K, dart.dynamic))(key, value), comp);
          }).bind(this))();
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "putIfAbsent", {
        value: function(key, ifAbsent) {
          dart.as(key, K);
          dart.as(ifAbsent, dart.functionType(V, []));
          if (key == null)
            dart.throw(new core.ArgumentError(key));
          var comp = this[_splay](key);
          if (comp == 0) {
            var mapRoot = dart.as(this[_root], _SplayTreeMapNode);
            return dart.as(mapRoot.value, V);
          }
          var modificationCount = this[_modificationCount];
          var splayCount = this[_splayCount];
          var value = ifAbsent();
          if (modificationCount != this[_modificationCount]) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
          if (splayCount != this[_splayCount]) {
            comp = this[_splay](key);
            dart.assert(comp != 0);
          }
          this[_addNewRoot](new (_SplayTreeMapNode$(K, dart.dynamic))(key, value), comp);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(other) {
          var $__3 = this;
          dart.as(other, core.Map$(K, V));
          other.forEach(dart.fn((function(key, value) {
            dart.as(key, K);
            dart.as(value, V);
            $__3.set(key, value);
          }).bind(this), dart.dynamic, [K, V]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_root] == null;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(f) {
          dart.as(f, dart.functionType(dart.void, [K, V]));
          var nodes = new (_SplayTreeNodeIterator$(K))(this);
          while (dart.notNull(nodes.moveNext())) {
            var node = dart.as(nodes.current, _SplayTreeMapNode$(K, V));
            f(node.key, node.value);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_count];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          this[_clear]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsKey", {
        value: function(key) {
          return dart.notNull(this[_validKey](key)) && this[_splay](dart.as(key, K)) == 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsValue", {
        value: function(value) {
          var found = false;
          var initialSplayCount = this[_splayCount];
          var visit = (function(node) {
            while (node != null) {
              if (dart.equals(node.value, value))
                return true;
              if (initialSplayCount != this[_splayCount]) {
                dart.throw(new core.ConcurrentModificationError(this));
              }
              if (node.right != null && dart.notNull(visit(dart.as(node.right, _SplayTreeMapNode))))
                return true;
              node = dart.as(node.left, _SplayTreeMapNode);
            }
            return false;
          }).bind(this);
          dart.fn(visit, core.bool, [_SplayTreeMapNode]);
          return visit(dart.as(this[_root], _SplayTreeMapNode));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "keys", {
        get: function() {
          return new (_SplayTreeKeyIterable$(K))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "values", {
        get: function() {
          return new (_SplayTreeValueIterable$(K, V))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return Maps.mapToString(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "firstKey", {
        value: function() {
          if (this[_root] == null)
            return null;
          return dart.as(this[_first].key, K);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastKey", {
        value: function() {
          if (this[_root] == null)
            return null;
          return dart.as(this[_last].key, K);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lastKeyBefore", {
        value: function(key) {
          dart.as(key, K);
          if (key == null)
            dart.throw(new core.ArgumentError(key));
          if (this[_root] == null)
            return null;
          var comp = this[_splay](key);
          if (dart.notNull(comp) < 0)
            return this[_root].key;
          var node = this[_root].left;
          if (node == null)
            return null;
          while (node.right != null) {
            node = node.right;
          }
          return node.key;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "firstKeyAfter", {
        value: function(key) {
          dart.as(key, K);
          if (key == null)
            dart.throw(new core.ArgumentError(key));
          if (this[_root] == null)
            return null;
          var comp = this[_splay](key);
          if (dart.notNull(comp) > 0)
            return this[_root].key;
          var node = this[_root].right;
          if (node == null)
            return null;
          while (node.left != null) {
            node = node.left;
          }
          return node.key;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        from: function(other, compare, isValidKey) {
          if (compare === void 0)
            compare = null;
          if (isValidKey === void 0)
            isValidKey = null;
          var result = new (SplayTreeMap$(K, V))();
          other.forEach(dart.fn(function(k, v) {
            result.set(dart.as(k, K), dart.as(v, V));
          }));
          return result;
        },
        fromIterable: function(iterable, opts) {
          var key = opts && 'key' in opts ? opts.key : null;
          var value = opts && 'value' in opts ? opts.value : null;
          var compare = opts && 'compare' in opts ? opts.compare : null;
          var isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
          var map = new (SplayTreeMap$(K, V))(compare, isValidKey);
          Maps._fillMapWithMappedIterable(map, iterable, key, value);
          return map;
        },
        fromIterables: function(keys, values, compare, isValidKey) {
          if (compare === void 0)
            compare = null;
          if (isValidKey === void 0)
            isValidKey = null;
          var map = new (SplayTreeMap$(K, V))(compare, isValidKey);
          Maps._fillMapWithIterables(map, keys, values);
          return map;
        }
      }, $__super);
    }(_SplayTree$(K));
    SplayTreeMap[dart.implements] = function() {
      return [core.Map$(K, V)];
    };
    dart.defineNamedConstructor(SplayTreeMap, '_internal');
    dart.setSignature(SplayTreeMap, {
      constructors: function() {
        return ({
          SplayTreeMap: [SplayTreeMap$(K, V), [], [dart.functionType(core.int, [K, K]), dart.functionType(core.bool, [core.Object])]],
          from: [SplayTreeMap$(K, V), [core.Map], [dart.functionType(core.int, [K, K]), dart.functionType(core.bool, [core.Object])]],
          fromIterable: [SplayTreeMap$(K, V), [core.Iterable], {
            key: dart.functionType(K, [dart.dynamic]),
            value: dart.functionType(V, [dart.dynamic]),
            compare: dart.functionType(core.int, [K, K]),
            isValidKey: dart.functionType(core.bool, [core.Object])
          }],
          fromIterables: [SplayTreeMap$(K, V), [core.Iterable$(K), core.Iterable$(V)], [dart.functionType(core.int, [K, K]), dart.functionType(core.bool, [core.Object])]],
          _internal: [SplayTreeMap$(K, V), []]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _compare, {
          value: [core.int, [K, K]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "get", {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "set", {
          value: [dart.void, [K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "putIfAbsent", {
          value: [V, [K, dart.functionType(V, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addAll", {
          value: [dart.void, [core.Map$(K, V)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "forEach", {
          value: [dart.void, [dart.functionType(dart.void, [K, V])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "clear", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "containsKey", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "containsValue", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "firstKey", {
          value: [K, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lastKey", {
          value: [K, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lastKeyBefore", {
          value: [K, [K]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "firstKeyAfter", {
          value: [K, [K]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return SplayTreeMap;
  });
  var SplayTreeMap = SplayTreeMap$();
  var _workList = Symbol('_workList');
  var _tree = Symbol('_tree');
  var _currentNode = Symbol('_currentNode');
  var _findLeftMostDescendent = Symbol('_findLeftMostDescendent');
  var _getValue = Symbol('_getValue');
  var _rebuildWorkList = Symbol('_rebuildWorkList');
  var _SplayTreeIterator$ = dart.generic(function(T) {
    var _SplayTreeIterator = function($__super) {
      var $__4;
      function _SplayTreeIterator() {
        $traceurRuntime.superConstructor(_SplayTreeIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeIterator, ($__4 = {}, Object.defineProperty($__4, "_SplayTreeIterator", {
        value: function(tree) {
          this[_workList] = dart.list([], _SplayTreeNode);
          this[_tree] = tree;
          this[_modificationCount] = tree[_modificationCount];
          this[_splayCount] = tree[_splayCount];
          this[_currentNode] = null;
          this[_findLeftMostDescendent](tree[_root]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "startAt", {
        value: function(tree, startKey) {
          this[_workList] = dart.list([], _SplayTreeNode);
          this[_tree] = tree;
          this[_modificationCount] = tree[_modificationCount];
          this[_splayCount] = null;
          this[_currentNode] = null;
          if (tree[_root] == null)
            return;
          var compare = tree[_splay](startKey);
          this[_splayCount] = tree[_splayCount];
          if (dart.notNull(compare) < 0) {
            this[_findLeftMostDescendent](tree[_root].right);
          } else {
            this[_workList][dartx.add](tree[_root]);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "current", {
        get: function() {
          if (this[_currentNode] == null)
            return null;
          return this[_getValue](dart.as(this[_currentNode], _SplayTreeMapNode));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, _findLeftMostDescendent, {
        value: function(node) {
          while (node != null) {
            this[_workList][dartx.add](node);
            node = node.left;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _rebuildWorkList, {
        value: function(currentNode) {
          dart.assert(!dart.notNull(this[_workList][dartx.isEmpty]));
          this[_workList][dartx.clear]();
          if (currentNode == null) {
            this[_findLeftMostDescendent](this[_tree][_root]);
          } else {
            this[_tree][_splay](currentNode.key);
            this[_findLeftMostDescendent](this[_tree][_root].right);
            dart.assert(!dart.notNull(this[_workList][dartx.isEmpty]));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "moveNext", {
        value: function() {
          if (this[_modificationCount] != this[_tree][_modificationCount]) {
            dart.throw(new core.ConcurrentModificationError(this[_tree]));
          }
          if (dart.notNull(this[_workList][dartx.isEmpty])) {
            this[_currentNode] = null;
            return false;
          }
          if (this[_tree][_splayCount] != this[_splayCount] && this[_currentNode] != null) {
            this[_rebuildWorkList](this[_currentNode]);
          }
          this[_currentNode] = this[_workList][dartx.removeLast]();
          this[_findLeftMostDescendent](this[_currentNode].right);
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(core.Object);
    _SplayTreeIterator[dart.implements] = function() {
      return [core.Iterator$(T)];
    };
    dart.defineNamedConstructor(_SplayTreeIterator, 'startAt');
    dart.setSignature(_SplayTreeIterator, {
      constructors: function() {
        return ({
          _SplayTreeIterator: [_SplayTreeIterator$(T), [_SplayTree]],
          startAt: [_SplayTreeIterator$(T), [_SplayTree, dart.dynamic]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _findLeftMostDescendent, {
          value: [dart.void, [_SplayTreeNode]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _rebuildWorkList, {
          value: [dart.void, [_SplayTreeNode]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "moveNext", {
          value: [core.bool, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return _SplayTreeIterator;
  });
  var _SplayTreeIterator = _SplayTreeIterator$();
  var _copyNode = Symbol('_copyNode');
  var _SplayTreeKeyIterable$ = dart.generic(function(K) {
    var _SplayTreeKeyIterable = function($__super) {
      function _SplayTreeKeyIterable() {
        $traceurRuntime.superConstructor(_SplayTreeKeyIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeKeyIterable, {
        _SplayTreeKeyIterable: function(tree) {
          this[_tree] = tree;
          $traceurRuntime.superGet(this, _SplayTreeKeyIterable.prototype, "IterableBase").call(this);
        },
        get length() {
          return this[_tree][_count];
        },
        get isEmpty() {
          return this[_tree][_count] == 0;
        },
        get iterator() {
          return new (_SplayTreeKeyIterator$(K))(this[_tree]);
        },
        toSet: function() {
          var setOrMap = this[_tree];
          var set = new (SplayTreeSet$(K))(setOrMap[_comparator], setOrMap[_validKey]);
          set[_count] = this[_tree][_count];
          set[_root] = set[_copyNode](this[_tree][_root]);
          return set;
        }
      }, {}, $__super);
    }(IterableBase$(K));
    _SplayTreeKeyIterable[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.setSignature(_SplayTreeKeyIterable, {
      constructors: function() {
        return ({_SplayTreeKeyIterable: [_SplayTreeKeyIterable$(K), [_SplayTree$(K)]]});
      },
      methods: function() {
        return ({toSet: [core.Set$(K), []]});
      }
    });
    dart.defineExtensionMembers(_SplayTreeKeyIterable, ['toSet', 'length', 'isEmpty', 'iterator']);
    return _SplayTreeKeyIterable;
  });
  var _SplayTreeKeyIterable = _SplayTreeKeyIterable$();
  var _SplayTreeValueIterable$ = dart.generic(function(K, V) {
    var _SplayTreeValueIterable = function($__super) {
      function _SplayTreeValueIterable() {
        $traceurRuntime.superConstructor(_SplayTreeValueIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeValueIterable, {
        _SplayTreeValueIterable: function(map) {
          this[_map] = map;
          $traceurRuntime.superGet(this, _SplayTreeValueIterable.prototype, "IterableBase").call(this);
        },
        get length() {
          return this[_map][_count];
        },
        get isEmpty() {
          return this[_map][_count] == 0;
        },
        get iterator() {
          return new (_SplayTreeValueIterator$(K, V))(this[_map]);
        }
      }, {}, $__super);
    }(IterableBase$(V));
    _SplayTreeValueIterable[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.setSignature(_SplayTreeValueIterable, {constructors: function() {
        return ({_SplayTreeValueIterable: [_SplayTreeValueIterable$(K, V), [SplayTreeMap$(K, V)]]});
      }});
    dart.defineExtensionMembers(_SplayTreeValueIterable, ['length', 'isEmpty', 'iterator']);
    return _SplayTreeValueIterable;
  });
  var _SplayTreeValueIterable = _SplayTreeValueIterable$();
  var _SplayTreeKeyIterator$ = dart.generic(function(K) {
    var _SplayTreeKeyIterator = function($__super) {
      var $__4;
      function _SplayTreeKeyIterator() {
        $traceurRuntime.superConstructor(_SplayTreeKeyIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeKeyIterator, ($__4 = {}, Object.defineProperty($__4, "_SplayTreeKeyIterator", {
        value: function(map) {
          $traceurRuntime.superGet(this, _SplayTreeKeyIterator.prototype, "_SplayTreeIterator").call(this, map);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getValue, {
        value: function(node) {
          return dart.as(node.key, K);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_SplayTreeIterator$(K));
    dart.setSignature(_SplayTreeKeyIterator, {
      constructors: function() {
        return ({_SplayTreeKeyIterator: [_SplayTreeKeyIterator$(K), [_SplayTree$(K)]]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _getValue, {
          value: [K, [_SplayTreeNode]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return _SplayTreeKeyIterator;
  });
  var _SplayTreeKeyIterator = _SplayTreeKeyIterator$();
  var _SplayTreeValueIterator$ = dart.generic(function(K, V) {
    var _SplayTreeValueIterator = function($__super) {
      var $__4;
      function _SplayTreeValueIterator() {
        $traceurRuntime.superConstructor(_SplayTreeValueIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeValueIterator, ($__4 = {}, Object.defineProperty($__4, "_SplayTreeValueIterator", {
        value: function(map) {
          $traceurRuntime.superGet(this, _SplayTreeValueIterator.prototype, "_SplayTreeIterator").call(this, map);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getValue, {
        value: function(node) {
          return dart.as(node.value, V);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_SplayTreeIterator$(V));
    dart.setSignature(_SplayTreeValueIterator, {
      constructors: function() {
        return ({_SplayTreeValueIterator: [_SplayTreeValueIterator$(K, V), [SplayTreeMap$(K, V)]]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _getValue, {
          value: [V, [_SplayTreeMapNode]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return _SplayTreeValueIterator;
  });
  var _SplayTreeValueIterator = _SplayTreeValueIterator$();
  var _SplayTreeNodeIterator$ = dart.generic(function(K) {
    var _SplayTreeNodeIterator = function($__super) {
      var $__4;
      function _SplayTreeNodeIterator() {
        $traceurRuntime.superConstructor(_SplayTreeNodeIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SplayTreeNodeIterator, ($__4 = {}, Object.defineProperty($__4, "_SplayTreeNodeIterator", {
        value: function(tree) {
          $traceurRuntime.superGet(this, _SplayTreeNodeIterator.prototype, "_SplayTreeIterator").call(this, tree);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "startAt", {
        value: function(tree, startKey) {
          $traceurRuntime.superGet(this, _SplayTreeNodeIterator.prototype, "startAt").call(this, tree, startKey);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getValue, {
        value: function(node) {
          return dart.as(node, _SplayTreeNode$(K));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_SplayTreeIterator$(_SplayTreeNode$(K)));
    dart.defineNamedConstructor(_SplayTreeNodeIterator, 'startAt');
    dart.setSignature(_SplayTreeNodeIterator, {
      constructors: function() {
        return ({
          _SplayTreeNodeIterator: [_SplayTreeNodeIterator$(K), [_SplayTree$(K)]],
          startAt: [_SplayTreeNodeIterator$(K), [_SplayTree$(K), dart.dynamic]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _getValue, {
          value: [_SplayTreeNode$(K), [_SplayTreeNode]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    return _SplayTreeNodeIterator;
  });
  var _SplayTreeNodeIterator = _SplayTreeNodeIterator$();
  var _clone = Symbol('_clone');
  var SplayTreeSet$ = dart.generic(function(E) {
    var SplayTreeSet = function($__super) {
      var $__4;
      function SplayTreeSet() {
        $traceurRuntime.superConstructor(SplayTreeSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SplayTreeSet, ($__4 = {}, Object.defineProperty($__4, "SplayTreeSet", {
        value: function(compare, isValidKey) {
          if (compare === void 0)
            compare = null;
          if (isValidKey === void 0)
            isValidKey = null;
          this[_comparator] = dart.as(compare == null ? core.Comparable.compare : compare, core.Comparator$(E));
          this[_validKey] = isValidKey != null ? isValidKey : dart.fn(function(v) {
            return dart.is(v, E);
          }, core.bool, [dart.dynamic]);
          $traceurRuntime.superGet(this, SplayTreeSet.prototype, "_SplayTree").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _compare, {
        value: function(e1, e2) {
          dart.as(e1, E);
          dart.as(e2, E);
          return this[_comparator](e1, e2);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (_SplayTreeKeyIterator$(E))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_count];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_root] == null;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return this[_root] != null;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          if (this[_count] == 0)
            dart.throw(_internal.IterableElementError.noElement());
          return dart.as(this[_first].key, E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          if (this[_count] == 0)
            dart.throw(_internal.IterableElementError.noElement());
          return dart.as(this[_last].key, E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "single", {
        get: function() {
          if (this[_count] == 0)
            dart.throw(_internal.IterableElementError.noElement());
          if (dart.notNull(this[_count]) > 1)
            dart.throw(_internal.IterableElementError.tooMany());
          return this[_root].key;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(object) {
          return dart.notNull(this[_validKey](object)) && this[_splay](dart.as(object, E)) == 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(element) {
          dart.as(element, E);
          var compare = this[_splay](element);
          if (compare == 0)
            return false;
          this[_addNewRoot](new (_SplayTreeNode$(E))(element), compare);
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return false;
          return this[_remove](dart.as(object, E)) != null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(elements) {
          dart.as(elements, core.Iterable$(E));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                var compare = this[_splay](element);
                if (compare != 0) {
                  this[_addNewRoot](new (_SplayTreeNode$(E))(element), compare);
                }
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeAll", {
        value: function(elements) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(this[_validKey](element)))
                  this[_remove](dart.as(element, E));
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainAll", {
        value: function(elements) {
          var retainSet = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
          var modificationCount = this[_modificationCount];
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var object = $__6.value;
              {
                if (modificationCount != this[_modificationCount]) {
                  dart.throw(new core.ConcurrentModificationError(this));
                }
                if (dart.notNull(this[_validKey](object)) && this[_splay](dart.as(object, E)) == 0)
                  retainSet.add(this[_root].key);
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
          if (retainSet[_count] != this[_count]) {
            this[_root] = retainSet[_root];
            this[_count] = retainSet[_count];
            this[_modificationCount] = dart.notNull(this[_modificationCount]) + 1;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lookup", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return null;
          var comp = this[_splay](dart.as(object, E));
          if (comp != 0)
            return null;
          return this[_root].key;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "intersection", {
        value: function(other) {
          var result = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(other.contains(element)))
                  result.add(element);
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
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "difference", {
        value: function(other) {
          var result = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (this)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(other.contains(element)))
                  result.add(element);
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
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "union", {
        value: function(other) {
          dart.as(other, core.Set$(E));
          var _ = this[_clone]();
          _.addAll(other);
          return _;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _clone, {
        value: function() {
          var set = new (SplayTreeSet$(E))(this[_comparator], this[_validKey]);
          set[_count] = this[_count];
          set[_root] = this[_copyNode](this[_root]);
          return set;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _copyNode, {
        value: function(node) {
          dart.as(node, _SplayTreeNode$(E));
          if (node == null)
            return null;
          var _ = new (_SplayTreeNode$(E))(node.key);
          _.left = this[_copyNode](node.left);
          _.right = this[_copyNode](node.right);
          return _;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          this[_clear]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toSet", {
        value: function() {
          return this[_clone]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return IterableBase.iterableToFullString(this, '{', '}');
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {from: function(elements, compare, isValidKey) {
          if (compare === void 0)
            compare = null;
          if (isValidKey === void 0)
            isValidKey = null;
          var result = new (SplayTreeSet$(E))(compare, isValidKey);
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (dart.as(elements, core.Iterable$(E)))[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                result.add(element);
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
          return result;
        }}, $__super);
    }(dart.mixin(_SplayTree$(E), IterableMixin$(E), SetMixin$(E)));
    dart.setSignature(SplayTreeSet, {
      constructors: function() {
        return ({
          SplayTreeSet: [SplayTreeSet$(E), [], [dart.functionType(core.int, [E, E]), dart.functionType(core.bool, [core.Object])]],
          from: [SplayTreeSet$(E), [core.Iterable], [dart.functionType(core.int, [E, E]), dart.functionType(core.bool, [core.Object])]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _compare, {
          value: [core.int, [E, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "contains", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "add", {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addAll", {
          value: [dart.void, [core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lookup", {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "intersection", {
          value: [core.Set$(E), [core.Set$(core.Object)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "difference", {
          value: [core.Set$(E), [core.Set$(core.Object)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "union", {
          value: [core.Set$(E), [core.Set$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _clone, {
          value: [SplayTreeSet$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _copyNode, {
          value: [_SplayTreeNode$(E), [_SplayTreeNode$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "toSet", {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    dart.defineExtensionMembers(SplayTreeSet, ['contains', 'toSet', 'iterator', 'length', 'isEmpty', 'isNotEmpty', 'first', 'last', 'single']);
    return SplayTreeSet;
  });
  var SplayTreeSet = SplayTreeSet$();
  var _strings = Symbol('_strings');
  var _nums = Symbol('_nums');
  var _rest = Symbol('_rest');
  var _containsKey = Symbol('_containsKey');
  var _getBucket = Symbol('_getBucket');
  var _findBucketIndex = Symbol('_findBucketIndex');
  var _computeKeys = Symbol('_computeKeys');
  var _get = Symbol('_get');
  var _addHashTableEntry = Symbol('_addHashTableEntry');
  var _set = Symbol('_set');
  var _computeHashCode = Symbol('_computeHashCode');
  var _removeHashTableEntry = Symbol('_removeHashTableEntry');
  var _HashMap$ = dart.generic(function(K, V) {
    var _HashMap = function($__super) {
      var $__4;
      function _HashMap() {
        $traceurRuntime.superConstructor(_HashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_HashMap, ($__4 = {}, Object.defineProperty($__4, "_HashMap", {
        value: function() {
          this[_length] = 0;
          this[_strings] = null;
          this[_nums] = null;
          this[_rest] = null;
          this[_keys] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_length];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "keys", {
        get: function() {
          return new (HashMapKeyIterable$(K))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "values", {
        get: function() {
          var $__3 = this;
          return _internal.MappedIterable$(K, V).new(this.keys, dart.fn((function(each) {
            return $__3.get(each);
          }).bind(this), V, [dart.dynamic]));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "containsKey", {
        value: function(key) {
          if (dart.notNull(_HashMap$()._isStringKey(key))) {
            var strings = this[_strings];
            return strings == null ? false : _HashMap$()._hasTableEntry(strings, key);
          } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
            var nums = this[_nums];
            return nums == null ? false : _HashMap$()._hasTableEntry(nums, key);
          } else {
            return this[_containsKey](key);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _containsKey, {
        value: function(key) {
          var rest = this[_rest];
          if (rest == null)
            return false;
          var bucket = this[_getBucket](rest, key);
          return dart.notNull(this[_findBucketIndex](bucket, key)) >= 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsValue", {
        value: function(value) {
          var $__3 = this;
          return this[_computeKeys]()[dartx.any](dart.fn((function(each) {
            return dart.equals($__3.get(each), value);
          }).bind(this), core.bool, [dart.dynamic]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(other) {
          var $__3 = this;
          dart.as(other, core.Map$(K, V));
          other.forEach(dart.fn((function(key, value) {
            dart.as(key, K);
            dart.as(value, V);
            $__3.set(key, value);
          }).bind(this), dart.dynamic, [K, V]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "get", {
        value: function(key) {
          if (dart.notNull(_HashMap$()._isStringKey(key))) {
            var strings = this[_strings];
            return strings == null ? null : dart.as(_HashMap$()._getTableEntry(strings, key), V);
          } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
            var nums = this[_nums];
            return nums == null ? null : dart.as(_HashMap$()._getTableEntry(nums, key), V);
          } else {
            return this[_get](key);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _get, {
        value: function(key) {
          var rest = this[_rest];
          if (rest == null)
            return null;
          var bucket = this[_getBucket](rest, key);
          var index = this[_findBucketIndex](bucket, key);
          return dart.notNull(index) < 0 ? null : dart.as(bucket[dart.notNull(index) + 1], V);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "set", {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          if (dart.notNull(_HashMap$()._isStringKey(key))) {
            var strings = this[_strings];
            if (strings == null)
              this[_strings] = strings = _HashMap$()._newHashTable();
            this[_addHashTableEntry](strings, key, value);
          } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
            var nums = this[_nums];
            if (nums == null)
              this[_nums] = nums = _HashMap$()._newHashTable();
            this[_addHashTableEntry](nums, key, value);
          } else {
            this[_set](key, value);
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _set, {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          var rest = this[_rest];
          if (rest == null)
            this[_rest] = rest = _HashMap$()._newHashTable();
          var hash = this[_computeHashCode](key);
          var bucket = rest[hash];
          if (bucket == null) {
            _HashMap$()._setTableEntry(rest, hash, [key, value]);
            this[_length] = dart.notNull(this[_length]) + 1;
            this[_keys] = null;
          } else {
            var index = this[_findBucketIndex](bucket, key);
            if (dart.notNull(index) >= 0) {
              bucket[dart.notNull(index) + 1] = value;
            } else {
              bucket.push(key, value);
              this[_length] = dart.notNull(this[_length]) + 1;
              this[_keys] = null;
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "putIfAbsent", {
        value: function(key, ifAbsent) {
          dart.as(key, K);
          dart.as(ifAbsent, dart.functionType(V, []));
          if (dart.notNull(this.containsKey(key)))
            return this.get(key);
          var value = ifAbsent();
          this.set(key, value);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(key) {
          if (dart.notNull(_HashMap$()._isStringKey(key))) {
            return this[_removeHashTableEntry](this[_strings], key);
          } else if (dart.notNull(_HashMap$()._isNumericKey(key))) {
            return this[_removeHashTableEntry](this[_nums], key);
          } else {
            return this[_remove](key);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _remove, {
        value: function(key) {
          var rest = this[_rest];
          if (rest == null)
            return null;
          var bucket = this[_getBucket](rest, key);
          var index = this[_findBucketIndex](bucket, key);
          if (dart.notNull(index) < 0)
            return null;
          this[_length] = dart.notNull(this[_length]) - 1;
          this[_keys] = null;
          return dart.as(bucket.splice(index, 2)[1], V);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          if (dart.notNull(this[_length]) > 0) {
            this[_strings] = this[_nums] = this[_rest] = this[_keys] = null;
            this[_length] = 0;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [K, V]));
          var keys = this[_computeKeys]();
          for (var i = 0,
              length = keys[dartx.length]; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var key = keys[i];
            action(dart.as(key, K), this.get(key));
            if (keys !== this[_keys]) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeKeys, {
        value: function() {
          if (this[_keys] != null)
            return this[_keys];
          var result = core.List.new(this[_length]);
          var index = 0;
          var strings = this[_strings];
          if (strings != null) {
            var names = Object.getOwnPropertyNames(strings);
            var entries = names.length;
            for (var i = 0; dart.notNull(i) < dart.notNull(entries); i = dart.notNull(i) + 1) {
              var key = names[i];
              result[index] = key;
              index = dart.notNull(index) + 1;
            }
          }
          var nums = this[_nums];
          if (nums != null) {
            var names$__19 = Object.getOwnPropertyNames(nums);
            var entries$__20 = names$__19.length;
            for (var i$__21 = 0; dart.notNull(i$__21) < dart.notNull(entries$__20); i$__21 = dart.notNull(i$__21) + 1) {
              var key$__22 = +names$__19[i$__21];
              result[index] = key$__22;
              index = dart.notNull(index) + 1;
            }
          }
          var rest = this[_rest];
          if (rest != null) {
            var names$__23 = Object.getOwnPropertyNames(rest);
            var entries$__24 = names$__23.length;
            for (var i$__25 = 0; dart.notNull(i$__25) < dart.notNull(entries$__24); i$__25 = dart.notNull(i$__25) + 1) {
              var key$__26 = names$__23[i$__25];
              var bucket = rest[key$__26];
              var length = bucket.length;
              for (var i$__27 = 0; dart.notNull(i$__27) < dart.notNull(length); i$__27 = dart.notNull(i$__27) + 2) {
                var key$__28 = bucket[i$__27];
                result[index] = key$__28;
                index = dart.notNull(index) + 1;
              }
            }
          }
          dart.assert(index == this[_length]);
          return this[_keys] = result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _addHashTableEntry, {
        value: function(table, key, value) {
          dart.as(key, K);
          dart.as(value, V);
          if (!dart.notNull(_HashMap$()._hasTableEntry(table, key))) {
            this[_length] = dart.notNull(this[_length]) + 1;
            this[_keys] = null;
          }
          _HashMap$()._setTableEntry(table, key, value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _removeHashTableEntry, {
        value: function(table, key) {
          if (table != null && dart.notNull(_HashMap$()._hasTableEntry(table, key))) {
            var value = dart.as(_HashMap$()._getTableEntry(table, key), V);
            _HashMap$()._deleteTableEntry(table, key);
            this[_length] = dart.notNull(this[_length]) - 1;
            this[_keys] = null;
            return value;
          } else {
            return null;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return dart.hashCode(key) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getBucket, {
        value: function(table, key) {
          var hash = this[_computeHashCode](key);
          return dart.as(table[hash], core.List);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, key) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 2) {
            if (dart.equals(bucket[i], key))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        _isStringKey: function(key) {
          return typeof key == 'string' && !dart.equals(key, '__proto__');
        },
        _isNumericKey: function(key) {
          return typeof key == 'number' && (key & 0x3ffffff) === key;
        },
        _hasTableEntry: function(table, key) {
          var entry = table[key];
          return entry != null;
        },
        _getTableEntry: function(table, key) {
          var entry = table[key];
          return entry === table ? null : entry;
        },
        _setTableEntry: function(table, key, value) {
          if (value == null) {
            table[key] = table;
          } else {
            table[key] = value;
          }
        },
        _deleteTableEntry: function(table, key) {
          delete table[key];
        },
        _newHashTable: function() {
          var table = Object.create(null);
          var temporaryKey = '<non-identifier-key>';
          _HashMap$()._setTableEntry(table, temporaryKey, table);
          _HashMap$()._deleteTableEntry(table, temporaryKey);
          return table;
        }
      }, $__super);
    }(core.Object);
    _HashMap[dart.implements] = function() {
      return [HashMap$(K, V)];
    };
    dart.setSignature(_HashMap, {
      constructors: function() {
        return ({_HashMap: [_HashMap$(K, V), []]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "containsKey", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _containsKey, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "containsValue", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addAll", {
          value: [dart.void, [core.Map$(K, V)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "get", {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _get, {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "set", {
          value: [dart.void, [K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _set, {
          value: [dart.void, [K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "putIfAbsent", {
          value: [V, [K, dart.functionType(V, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _remove, {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "clear", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "forEach", {
          value: [dart.void, [dart.functionType(dart.void, [K, V])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _computeKeys, {
          value: [core.List, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _addHashTableEntry, {
          value: [dart.void, [dart.dynamic, K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _removeHashTableEntry, {
          value: [V, [dart.dynamic, core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _computeHashCode, {
          value: [core.int, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _getBucket, {
          value: [core.List, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _findBucketIndex, {
          value: [core.int, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({
          _isStringKey: [core.bool, [dart.dynamic]],
          _isNumericKey: [core.bool, [dart.dynamic]],
          _hasTableEntry: [core.bool, [dart.dynamic, dart.dynamic]],
          _getTableEntry: [dart.dynamic, [dart.dynamic, dart.dynamic]],
          _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
          _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
          _newHashTable: [dart.dynamic, []]
        });
      },
      names: ['_isStringKey', '_isNumericKey', '_hasTableEntry', '_getTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
    });
    return _HashMap;
  });
  var _HashMap = _HashMap$();
  var _IdentityHashMap$ = dart.generic(function(K, V) {
    var _IdentityHashMap = function($__super) {
      var $__4;
      function _IdentityHashMap() {
        $traceurRuntime.superConstructor(_IdentityHashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_IdentityHashMap, ($__4 = {}, Object.defineProperty($__4, "_IdentityHashMap", {
        value: function() {
          $traceurRuntime.superGet(this, _IdentityHashMap.prototype, "_HashMap").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return core.identityHashCode(key) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, key) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 2) {
            if (dart.notNull(core.identical(bucket[i], key)))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_HashMap$(K, V));
    return _IdentityHashMap;
  });
  var _IdentityHashMap = _IdentityHashMap$();
  var _equals = Symbol('_equals');
  var _hashCode = Symbol('_hashCode');
  var _CustomHashMap$ = dart.generic(function(K, V) {
    var _CustomHashMap = function($__super) {
      var $__4;
      function _CustomHashMap() {
        $traceurRuntime.superConstructor(_CustomHashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_CustomHashMap, ($__4 = {}, Object.defineProperty($__4, "_CustomHashMap", {
        value: function(equals, hashCode, validKey) {
          this[_equals] = equals;
          this[_hashCode] = hashCode;
          this[_validKey] = validKey != null ? validKey : dart.fn(function(v) {
            return dart.is(v, K);
          }, core.bool, [dart.dynamic]);
          $traceurRuntime.superGet(this, _CustomHashMap.prototype, "_HashMap").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "get", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return null;
          return $traceurRuntime.superGet(this, _CustomHashMap.prototype, _get).call(this, key);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "set", {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          $traceurRuntime.superGet(this, _CustomHashMap.prototype, _set).call(this, key, value);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsKey", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return false;
          return $traceurRuntime.superGet(this, _CustomHashMap.prototype, _containsKey).call(this, key);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return null;
          return $traceurRuntime.superGet(this, _CustomHashMap.prototype, _remove).call(this, key);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return this[_hashCode](dart.as(key, K)) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, key) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 2) {
            if (dart.notNull(this[_equals](dart.as(bucket[i], K), dart.as(key, K))))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return Maps.mapToString(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_HashMap$(K, V));
    dart.setSignature(_CustomHashMap, {
      constructors: function() {
        return ({_CustomHashMap: [_CustomHashMap$(K, V), [_Equality$(K), _Hasher$(K), dart.functionType(core.bool, [core.Object])]]});
      },
      methods: function() {
        return ({
          get: [V, [core.Object]],
          set: [dart.void, [K, V]],
          remove: [V, [core.Object]]
        });
      }
    });
    return _CustomHashMap;
  });
  var _CustomHashMap = _CustomHashMap$();
  var HashMapKeyIterable$ = dart.generic(function(E) {
    var HashMapKeyIterable = function($__super) {
      function HashMapKeyIterable() {
        $traceurRuntime.superConstructor(HashMapKeyIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(HashMapKeyIterable, {
        HashMapKeyIterable: function(map) {
          this[_map] = map;
          $traceurRuntime.superGet(this, HashMapKeyIterable.prototype, "IterableBase").call(this);
        },
        get length() {
          return dart.as(dart.dload(this[_map], _length), core.int);
        },
        get isEmpty() {
          return dart.equals(dart.dload(this[_map], _length), 0);
        },
        get iterator() {
          return new (HashMapKeyIterator$(E))(this[_map], dart.as(dart.dsend(this[_map], _computeKeys), core.List));
        },
        contains: function(element) {
          return dart.as(dart.dsend(this[_map], 'containsKey', element), core.bool);
        },
        forEach: function(f) {
          dart.as(f, dart.functionType(dart.void, [E]));
          var keys = dart.as(dart.dsend(this[_map], _computeKeys), core.List);
          for (var i = 0,
              length = keys.length; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            f(dart.as(keys[i], E));
            if (keys !== dart.dload(this[_map], _keys)) {
              dart.throw(new core.ConcurrentModificationError(this[_map]));
            }
          }
        }
      }, {}, $__super);
    }(IterableBase$(E));
    HashMapKeyIterable[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.setSignature(HashMapKeyIterable, {
      constructors: function() {
        return ({HashMapKeyIterable: [HashMapKeyIterable$(E), [dart.dynamic]]});
      },
      methods: function() {
        return ({forEach: [dart.void, [dart.functionType(dart.void, [E])]]});
      }
    });
    dart.defineExtensionMembers(HashMapKeyIterable, ['contains', 'forEach', 'length', 'isEmpty', 'iterator']);
    return HashMapKeyIterable;
  });
  var HashMapKeyIterable = HashMapKeyIterable$();
  var _offset = Symbol('_offset');
  var HashMapKeyIterator$ = dart.generic(function(E) {
    var HashMapKeyIterator = function($__super) {
      function HashMapKeyIterator() {
        $traceurRuntime.superConstructor(HashMapKeyIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(HashMapKeyIterator, {
        HashMapKeyIterator: function(map, keys) {
          this[_map] = map;
          this[_keys] = keys;
          this[_offset] = 0;
          this[_current] = null;
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          var keys = this[_keys];
          var offset = this[_offset];
          if (keys !== dart.dload(this[_map], _keys)) {
            dart.throw(new core.ConcurrentModificationError(this[_map]));
          } else if (dart.notNull(offset) >= keys.length) {
            this[_current] = null;
            return false;
          } else {
            this[_current] = dart.as(keys[offset], E);
            this[_offset] = dart.notNull(offset) + 1;
            return true;
          }
        }
      }, {}, $__super);
    }(core.Object);
    HashMapKeyIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(HashMapKeyIterator, {
      constructors: function() {
        return ({HashMapKeyIterator: [HashMapKeyIterator$(E), [dart.dynamic, core.List]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return HashMapKeyIterator;
  });
  var HashMapKeyIterator = HashMapKeyIterator$();
  var _modifications = Symbol('_modifications');
  var _value = Symbol('_value');
  var _newLinkedCell = Symbol('_newLinkedCell');
  var _unlinkCell = Symbol('_unlinkCell');
  var _modified = Symbol('_modified');
  var _key = Symbol('_key');
  var _LinkedHashMap$ = dart.generic(function(K, V) {
    var _LinkedHashMap = function($__super) {
      var $__4;
      function _LinkedHashMap() {
        $traceurRuntime.superConstructor(_LinkedHashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedHashMap, ($__4 = {}, Object.defineProperty($__4, "_LinkedHashMap", {
        value: function() {
          this[_length] = 0;
          this[_strings] = null;
          this[_nums] = null;
          this[_rest] = null;
          this[_first] = null;
          this[_last] = null;
          this[_modifications] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_length];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "keys", {
        get: function() {
          return new (LinkedHashMapKeyIterable$(K))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "values", {
        get: function() {
          var $__3 = this;
          return _internal.MappedIterable$(K, V).new(this.keys, dart.fn((function(each) {
            return $__3.get(each);
          }).bind(this), V, [dart.dynamic]));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "containsKey", {
        value: function(key) {
          if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
            var strings = this[_strings];
            if (strings == null)
              return false;
            var cell = dart.as(_LinkedHashMap$()._getTableEntry(strings, key), LinkedHashMapCell);
            return cell != null;
          } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
            var nums = this[_nums];
            if (nums == null)
              return false;
            var cell$__29 = dart.as(_LinkedHashMap$()._getTableEntry(nums, key), LinkedHashMapCell);
            return cell$__29 != null;
          } else {
            return this[_containsKey](key);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _containsKey, {
        value: function(key) {
          var rest = this[_rest];
          if (rest == null)
            return false;
          var bucket = this[_getBucket](rest, key);
          return dart.notNull(this[_findBucketIndex](bucket, key)) >= 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsValue", {
        value: function(value) {
          var $__3 = this;
          return this.keys[dartx.any](dart.fn((function(each) {
            return dart.equals($__3.get(each), value);
          }).bind(this), core.bool, [dart.dynamic]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(other) {
          var $__3 = this;
          dart.as(other, core.Map$(K, V));
          other.forEach(dart.fn((function(key, value) {
            dart.as(key, K);
            dart.as(value, V);
            $__3.set(key, value);
          }).bind(this), dart.dynamic, [K, V]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "get", {
        value: function(key) {
          if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
            var strings = this[_strings];
            if (strings == null)
              return null;
            var cell = dart.as(_LinkedHashMap$()._getTableEntry(strings, key), LinkedHashMapCell);
            return cell == null ? null : dart.as(cell[_value], V);
          } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
            var nums = this[_nums];
            if (nums == null)
              return null;
            var cell$__30 = dart.as(_LinkedHashMap$()._getTableEntry(nums, key), LinkedHashMapCell);
            return cell$__30 == null ? null : dart.as(cell$__30[_value], V);
          } else {
            return this[_get](key);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _get, {
        value: function(key) {
          var rest = this[_rest];
          if (rest == null)
            return null;
          var bucket = this[_getBucket](rest, key);
          var index = this[_findBucketIndex](bucket, key);
          if (dart.notNull(index) < 0)
            return null;
          var cell = dart.as(bucket[index], LinkedHashMapCell);
          return dart.as(cell[_value], V);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "set", {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
            var strings = this[_strings];
            if (strings == null)
              this[_strings] = strings = _LinkedHashMap$()._newHashTable();
            this[_addHashTableEntry](strings, key, value);
          } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
            var nums = this[_nums];
            if (nums == null)
              this[_nums] = nums = _LinkedHashMap$()._newHashTable();
            this[_addHashTableEntry](nums, key, value);
          } else {
            this[_set](key, value);
          }
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _set, {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          var rest = this[_rest];
          if (rest == null)
            this[_rest] = rest = _LinkedHashMap$()._newHashTable();
          var hash = this[_computeHashCode](key);
          var bucket = rest[hash];
          if (bucket == null) {
            var cell = this[_newLinkedCell](key, value);
            _LinkedHashMap$()._setTableEntry(rest, hash, [cell]);
          } else {
            var index = this[_findBucketIndex](bucket, key);
            if (dart.notNull(index) >= 0) {
              var cell$__31 = dart.as(bucket[index], LinkedHashMapCell);
              cell$__31[_value] = value;
            } else {
              var cell$__32 = this[_newLinkedCell](key, value);
              bucket.push(cell$__32);
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "putIfAbsent", {
        value: function(key, ifAbsent) {
          dart.as(key, K);
          dart.as(ifAbsent, dart.functionType(V, []));
          if (dart.notNull(this.containsKey(key)))
            return this.get(key);
          var value = ifAbsent();
          this.set(key, value);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(key) {
          if (dart.notNull(_LinkedHashMap$()._isStringKey(key))) {
            return this[_removeHashTableEntry](this[_strings], key);
          } else if (dart.notNull(_LinkedHashMap$()._isNumericKey(key))) {
            return this[_removeHashTableEntry](this[_nums], key);
          } else {
            return this[_remove](key);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _remove, {
        value: function(key) {
          var rest = this[_rest];
          if (rest == null)
            return null;
          var bucket = this[_getBucket](rest, key);
          var index = this[_findBucketIndex](bucket, key);
          if (dart.notNull(index) < 0)
            return null;
          var cell = dart.as(bucket.splice(index, 1)[0], LinkedHashMapCell);
          this[_unlinkCell](cell);
          return dart.as(cell[_value], V);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          if (dart.notNull(this[_length]) > 0) {
            this[_strings] = this[_nums] = this[_rest] = this[_first] = this[_last] = null;
            this[_length] = 0;
            this[_modified]();
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [K, V]));
          var cell = this[_first];
          var modifications = this[_modifications];
          while (cell != null) {
            action(dart.as(cell[_key], K), dart.as(cell[_value], V));
            if (modifications != this[_modifications]) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
            cell = cell[_next];
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _addHashTableEntry, {
        value: function(table, key, value) {
          dart.as(key, K);
          dart.as(value, V);
          var cell = dart.as(_LinkedHashMap$()._getTableEntry(table, key), LinkedHashMapCell);
          if (cell == null) {
            _LinkedHashMap$()._setTableEntry(table, key, this[_newLinkedCell](key, value));
          } else {
            cell[_value] = value;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _removeHashTableEntry, {
        value: function(table, key) {
          if (table == null)
            return null;
          var cell = dart.as(_LinkedHashMap$()._getTableEntry(table, key), LinkedHashMapCell);
          if (cell == null)
            return null;
          this[_unlinkCell](cell);
          _LinkedHashMap$()._deleteTableEntry(table, key);
          return dart.as(cell[_value], V);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _modified, {
        value: function() {
          this[_modifications] = dart.notNull(this[_modifications]) + 1 & 67108863;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newLinkedCell, {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          var cell = new LinkedHashMapCell(key, value);
          if (this[_first] == null) {
            this[_first] = this[_last] = cell;
          } else {
            var last = this[_last];
            cell[_previous] = last;
            this[_last] = last[_next] = cell;
          }
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_modified]();
          return cell;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _unlinkCell, {
        value: function(cell) {
          var previous = cell[_previous];
          var next = cell[_next];
          if (previous == null) {
            dart.assert(dart.equals(cell, this[_first]));
            this[_first] = next;
          } else {
            previous[_next] = next;
          }
          if (next == null) {
            dart.assert(dart.equals(cell, this[_last]));
            this[_last] = previous;
          } else {
            next[_previous] = previous;
          }
          this[_length] = dart.notNull(this[_length]) - 1;
          this[_modified]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return dart.hashCode(key) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getBucket, {
        value: function(table, key) {
          var hash = this[_computeHashCode](key);
          return dart.as(table[hash], core.List);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, key) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var cell = dart.as(bucket[i], LinkedHashMapCell);
            if (dart.equals(cell[_key], key))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return Maps.mapToString(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        _isStringKey: function(key) {
          return typeof key == 'string' && !dart.equals(key, '__proto__');
        },
        _isNumericKey: function(key) {
          return typeof key == 'number' && (key & 0x3ffffff) === key;
        },
        _getTableEntry: function(table, key) {
          return table[key];
        },
        _setTableEntry: function(table, key, value) {
          dart.assert(value != null);
          table[key] = value;
        },
        _deleteTableEntry: function(table, key) {
          delete table[key];
        },
        _newHashTable: function() {
          var table = Object.create(null);
          var temporaryKey = '<non-identifier-key>';
          _LinkedHashMap$()._setTableEntry(table, temporaryKey, table);
          _LinkedHashMap$()._deleteTableEntry(table, temporaryKey);
          return table;
        }
      }, $__super);
    }(core.Object);
    _LinkedHashMap[dart.implements] = function() {
      return [LinkedHashMap$(K, V), _js_helper.InternalMap];
    };
    dart.setSignature(_LinkedHashMap, {
      constructors: function() {
        return ({_LinkedHashMap: [_LinkedHashMap$(K, V), []]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, "containsKey", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _containsKey, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "containsValue", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addAll", {
          value: [dart.void, [core.Map$(K, V)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "get", {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _get, {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "set", {
          value: [dart.void, [K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _set, {
          value: [dart.void, [K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "putIfAbsent", {
          value: [V, [K, dart.functionType(V, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _remove, {
          value: [V, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "clear", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "forEach", {
          value: [dart.void, [dart.functionType(dart.void, [K, V])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _addHashTableEntry, {
          value: [dart.void, [dart.dynamic, K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _removeHashTableEntry, {
          value: [V, [dart.dynamic, core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _modified, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _newLinkedCell, {
          value: [LinkedHashMapCell, [K, V]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _unlinkCell, {
          value: [dart.void, [LinkedHashMapCell]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _computeHashCode, {
          value: [core.int, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _getBucket, {
          value: [core.List, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _findBucketIndex, {
          value: [core.int, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({
          _isStringKey: [core.bool, [dart.dynamic]],
          _isNumericKey: [core.bool, [dart.dynamic]],
          _getTableEntry: [dart.dynamic, [dart.dynamic, dart.dynamic]],
          _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
          _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
          _newHashTable: [dart.dynamic, []]
        });
      },
      names: ['_isStringKey', '_isNumericKey', '_getTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
    });
    return _LinkedHashMap;
  });
  var _LinkedHashMap = _LinkedHashMap$();
  var _LinkedIdentityHashMap$ = dart.generic(function(K, V) {
    var _LinkedIdentityHashMap = function($__super) {
      var $__4;
      function _LinkedIdentityHashMap() {
        $traceurRuntime.superConstructor(_LinkedIdentityHashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedIdentityHashMap, ($__4 = {}, Object.defineProperty($__4, "_LinkedIdentityHashMap", {
        value: function() {
          $traceurRuntime.superGet(this, _LinkedIdentityHashMap.prototype, "_LinkedHashMap").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return core.identityHashCode(key) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, key) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var cell = dart.as(bucket[i], LinkedHashMapCell);
            if (dart.notNull(core.identical(cell[_key], key)))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_LinkedHashMap$(K, V));
    return _LinkedIdentityHashMap;
  });
  var _LinkedIdentityHashMap = _LinkedIdentityHashMap$();
  var _LinkedCustomHashMap$ = dart.generic(function(K, V) {
    var _LinkedCustomHashMap = function($__super) {
      var $__4;
      function _LinkedCustomHashMap() {
        $traceurRuntime.superConstructor(_LinkedCustomHashMap).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedCustomHashMap, ($__4 = {}, Object.defineProperty($__4, "_LinkedCustomHashMap", {
        value: function(equals, hashCode, validKey) {
          this[_equals] = equals;
          this[_hashCode] = hashCode;
          this[_validKey] = validKey != null ? validKey : dart.fn(function(v) {
            return dart.is(v, K);
          }, core.bool, [dart.dynamic]);
          $traceurRuntime.superGet(this, _LinkedCustomHashMap.prototype, "_LinkedHashMap").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "get", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return null;
          return $traceurRuntime.superGet(this, _LinkedCustomHashMap.prototype, _get).call(this, key);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "set", {
        value: function(key, value) {
          dart.as(key, K);
          dart.as(value, V);
          $traceurRuntime.superGet(this, _LinkedCustomHashMap.prototype, _set).call(this, key, value);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsKey", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return false;
          return $traceurRuntime.superGet(this, _LinkedCustomHashMap.prototype, _containsKey).call(this, key);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(key) {
          if (!dart.notNull(this[_validKey](key)))
            return null;
          return $traceurRuntime.superGet(this, _LinkedCustomHashMap.prototype, _remove).call(this, key);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return this[_hashCode](dart.as(key, K)) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, key) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var cell = dart.as(bucket[i], LinkedHashMapCell);
            if (dart.notNull(this[_equals](dart.as(cell[_key], K), dart.as(key, K))))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_LinkedHashMap$(K, V));
    dart.setSignature(_LinkedCustomHashMap, {
      constructors: function() {
        return ({_LinkedCustomHashMap: [_LinkedCustomHashMap$(K, V), [_Equality$(K), _Hasher$(K), dart.functionType(core.bool, [core.Object])]]});
      },
      methods: function() {
        return ({
          get: [V, [core.Object]],
          set: [dart.void, [K, V]],
          remove: [V, [core.Object]]
        });
      }
    });
    return _LinkedCustomHashMap;
  });
  var _LinkedCustomHashMap = _LinkedCustomHashMap$();
  var LinkedHashMapCell = function($__super) {
    function LinkedHashMapCell() {
      $traceurRuntime.superConstructor(LinkedHashMapCell).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(LinkedHashMapCell, {LinkedHashMapCell: function(key, value) {
        this[_key] = key;
        this[_value] = value;
        this[_next] = null;
        this[_previous] = null;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(LinkedHashMapCell, {constructors: function() {
      return ({LinkedHashMapCell: [LinkedHashMapCell, [dart.dynamic, dart.dynamic]]});
    }});
  var LinkedHashMapKeyIterable$ = dart.generic(function(E) {
    var LinkedHashMapKeyIterable = function($__super) {
      function LinkedHashMapKeyIterable() {
        $traceurRuntime.superConstructor(LinkedHashMapKeyIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedHashMapKeyIterable, {
        LinkedHashMapKeyIterable: function(map) {
          this[_map] = map;
          $traceurRuntime.superGet(this, LinkedHashMapKeyIterable.prototype, "IterableBase").call(this);
        },
        get length() {
          return dart.as(dart.dload(this[_map], _length), core.int);
        },
        get isEmpty() {
          return dart.equals(dart.dload(this[_map], _length), 0);
        },
        get iterator() {
          return new (LinkedHashMapKeyIterator$(E))(this[_map], dart.as(dart.dload(this[_map], _modifications), core.int));
        },
        contains: function(element) {
          return dart.as(dart.dsend(this[_map], 'containsKey', element), core.bool);
        },
        forEach: function(f) {
          dart.as(f, dart.functionType(dart.void, [E]));
          var cell = dart.as(dart.dload(this[_map], _first), LinkedHashMapCell);
          var modifications = dart.as(dart.dload(this[_map], _modifications), core.int);
          while (cell != null) {
            f(dart.as(cell[_key], E));
            if (!dart.equals(modifications, dart.dload(this[_map], _modifications))) {
              dart.throw(new core.ConcurrentModificationError(this[_map]));
            }
            cell = cell[_next];
          }
        }
      }, {}, $__super);
    }(IterableBase$(E));
    LinkedHashMapKeyIterable[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.setSignature(LinkedHashMapKeyIterable, {
      constructors: function() {
        return ({LinkedHashMapKeyIterable: [LinkedHashMapKeyIterable$(E), [dart.dynamic]]});
      },
      methods: function() {
        return ({forEach: [dart.void, [dart.functionType(dart.void, [E])]]});
      }
    });
    dart.defineExtensionMembers(LinkedHashMapKeyIterable, ['contains', 'forEach', 'length', 'isEmpty', 'iterator']);
    return LinkedHashMapKeyIterable;
  });
  var LinkedHashMapKeyIterable = LinkedHashMapKeyIterable$();
  var _cell = Symbol('_cell');
  var LinkedHashMapKeyIterator$ = dart.generic(function(E) {
    var LinkedHashMapKeyIterator = function($__super) {
      function LinkedHashMapKeyIterator() {
        $traceurRuntime.superConstructor(LinkedHashMapKeyIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedHashMapKeyIterator, {
        LinkedHashMapKeyIterator: function(map, modifications) {
          this[_map] = map;
          this[_modifications] = modifications;
          this[_cell] = null;
          this[_current] = null;
          this[_cell] = dart.as(dart.dload(this[_map], _first), LinkedHashMapCell);
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          if (!dart.equals(this[_modifications], dart.dload(this[_map], _modifications))) {
            dart.throw(new core.ConcurrentModificationError(this[_map]));
          } else if (this[_cell] == null) {
            this[_current] = null;
            return false;
          } else {
            this[_current] = dart.as(this[_cell][_key], E);
            this[_cell] = this[_cell][_next];
            return true;
          }
        }
      }, {}, $__super);
    }(core.Object);
    LinkedHashMapKeyIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(LinkedHashMapKeyIterator, {
      constructors: function() {
        return ({LinkedHashMapKeyIterator: [LinkedHashMapKeyIterator$(E), [dart.dynamic, core.int]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return LinkedHashMapKeyIterator;
  });
  var LinkedHashMapKeyIterator = LinkedHashMapKeyIterator$();
  var _elements = Symbol('_elements');
  var _computeElements = Symbol('_computeElements');
  var _contains = Symbol('_contains');
  var _lookup = Symbol('_lookup');
  var _HashSet$ = dart.generic(function(E) {
    var _HashSet = function($__super) {
      var $__4;
      function _HashSet() {
        $traceurRuntime.superConstructor(_HashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_HashSet, ($__4 = {}, Object.defineProperty($__4, "_HashSet", {
        value: function() {
          this[_length] = 0;
          this[_strings] = null;
          this[_nums] = null;
          this[_rest] = null;
          this[_elements] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newSet, {
        value: function() {
          return new (_HashSet$(E))();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (HashSetIterator$(E))(this, this[_computeElements]());
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_length];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(object) {
          if (dart.notNull(_HashSet$()._isStringElement(object))) {
            var strings = this[_strings];
            return strings == null ? false : _HashSet$()._hasTableEntry(strings, object);
          } else if (dart.notNull(_HashSet$()._isNumericElement(object))) {
            var nums = this[_nums];
            return nums == null ? false : _HashSet$()._hasTableEntry(nums, object);
          } else {
            return this[_contains](object);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _contains, {
        value: function(object) {
          var rest = this[_rest];
          if (rest == null)
            return false;
          var bucket = this[_getBucket](rest, object);
          return dart.notNull(this[_findBucketIndex](bucket, object)) >= 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lookup", {
        value: function(object) {
          if (dart.notNull(_HashSet$()._isStringElement(object)) || dart.notNull(_HashSet$()._isNumericElement(object))) {
            return dart.as(dart.notNull(this.contains(object)) ? object : null, E);
          }
          return this[_lookup](object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _lookup, {
        value: function(object) {
          var rest = this[_rest];
          if (rest == null)
            return null;
          var bucket = this[_getBucket](rest, object);
          var index = this[_findBucketIndex](bucket, object);
          if (dart.notNull(index) < 0)
            return null;
          return dart.as(bucket[dartx.get](index), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(element) {
          dart.as(element, E);
          if (dart.notNull(_HashSet$()._isStringElement(element))) {
            var strings = this[_strings];
            if (strings == null)
              this[_strings] = strings = _HashSet$()._newHashTable();
            return this[_addHashTableEntry](strings, element);
          } else if (dart.notNull(_HashSet$()._isNumericElement(element))) {
            var nums = this[_nums];
            if (nums == null)
              this[_nums] = nums = _HashSet$()._newHashTable();
            return this[_addHashTableEntry](nums, element);
          } else {
            return this[_add](element);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _add, {
        value: function(element) {
          dart.as(element, E);
          var rest = this[_rest];
          if (rest == null)
            this[_rest] = rest = _HashSet$()._newHashTable();
          var hash = this[_computeHashCode](element);
          var bucket = rest[hash];
          if (bucket == null) {
            _HashSet$()._setTableEntry(rest, hash, [element]);
          } else {
            var index = this[_findBucketIndex](bucket, element);
            if (dart.notNull(index) >= 0)
              return false;
            bucket.push(element);
          }
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_elements] = null;
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "addAll", {
        value: function(objects) {
          dart.as(objects, core.Iterable$(E));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (objects)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var each = $__6.value;
              {
                this.add(each);
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(object) {
          if (dart.notNull(_HashSet$()._isStringElement(object))) {
            return this[_removeHashTableEntry](this[_strings], object);
          } else if (dart.notNull(_HashSet$()._isNumericElement(object))) {
            return this[_removeHashTableEntry](this[_nums], object);
          } else {
            return this[_remove](object);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _remove, {
        value: function(object) {
          var rest = this[_rest];
          if (rest == null)
            return false;
          var bucket = this[_getBucket](rest, object);
          var index = this[_findBucketIndex](bucket, object);
          if (dart.notNull(index) < 0)
            return false;
          this[_length] = dart.notNull(this[_length]) - 1;
          this[_elements] = null;
          bucket.splice(index, 1);
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          if (dart.notNull(this[_length]) > 0) {
            this[_strings] = this[_nums] = this[_rest] = this[_elements] = null;
            this[_length] = 0;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeElements, {
        value: function() {
          if (this[_elements] != null)
            return this[_elements];
          var result = core.List.new(this[_length]);
          var index = 0;
          var strings = this[_strings];
          if (strings != null) {
            var names = Object.getOwnPropertyNames(strings);
            var entries = names.length;
            for (var i = 0; dart.notNull(i) < dart.notNull(entries); i = dart.notNull(i) + 1) {
              var element = names[i];
              result[index] = element;
              index = dart.notNull(index) + 1;
            }
          }
          var nums = this[_nums];
          if (nums != null) {
            var names$__33 = Object.getOwnPropertyNames(nums);
            var entries$__34 = names$__33.length;
            for (var i$__35 = 0; dart.notNull(i$__35) < dart.notNull(entries$__34); i$__35 = dart.notNull(i$__35) + 1) {
              var element$__36 = +names$__33[i$__35];
              result[index] = element$__36;
              index = dart.notNull(index) + 1;
            }
          }
          var rest = this[_rest];
          if (rest != null) {
            var names$__37 = Object.getOwnPropertyNames(rest);
            var entries$__38 = names$__37.length;
            for (var i$__39 = 0; dart.notNull(i$__39) < dart.notNull(entries$__38); i$__39 = dart.notNull(i$__39) + 1) {
              var entry = names$__37[i$__39];
              var bucket = rest[entry];
              var length = bucket.length;
              for (var i$__40 = 0; dart.notNull(i$__40) < dart.notNull(length); i$__40 = dart.notNull(i$__40) + 1) {
                result[index] = bucket[i$__40];
                index = dart.notNull(index) + 1;
              }
            }
          }
          dart.assert(index == this[_length]);
          return this[_elements] = result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _addHashTableEntry, {
        value: function(table, element) {
          dart.as(element, E);
          if (dart.notNull(_HashSet$()._hasTableEntry(table, element)))
            return false;
          _HashSet$()._setTableEntry(table, element, 0);
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_elements] = null;
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _removeHashTableEntry, {
        value: function(table, element) {
          if (table != null && dart.notNull(_HashSet$()._hasTableEntry(table, element))) {
            _HashSet$()._deleteTableEntry(table, element);
            this[_length] = dart.notNull(this[_length]) - 1;
            this[_elements] = null;
            return true;
          } else {
            return false;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(element) {
          return dart.hashCode(element) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getBucket, {
        value: function(table, element) {
          var hash = this[_computeHashCode](element);
          return dart.as(table[hash], core.List);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, element) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (dart.equals(bucket[i], element))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        _isStringElement: function(element) {
          return typeof element == 'string' && !dart.equals(element, '__proto__');
        },
        _isNumericElement: function(element) {
          return typeof element == 'number' && (element & 0x3ffffff) === element;
        },
        _hasTableEntry: function(table, key) {
          var entry = table[key];
          return entry != null;
        },
        _setTableEntry: function(table, key, value) {
          dart.assert(value != null);
          table[key] = value;
        },
        _deleteTableEntry: function(table, key) {
          delete table[key];
        },
        _newHashTable: function() {
          var table = Object.create(null);
          var temporaryKey = '<non-identifier-key>';
          _HashSet$()._setTableEntry(table, temporaryKey, table);
          _HashSet$()._deleteTableEntry(table, temporaryKey);
          return table;
        }
      }, $__super);
    }(_HashSetBase$(E));
    _HashSet[dart.implements] = function() {
      return [HashSet$(E)];
    };
    dart.setSignature(_HashSet, {
      constructors: function() {
        return ({_HashSet: [_HashSet$(E), []]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _newSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "contains", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _contains, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lookup", {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _lookup, {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "add", {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _add, {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "addAll", {
          value: [dart.void, [core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _remove, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _computeElements, {
          value: [core.List, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _addHashTableEntry, {
          value: [core.bool, [dart.dynamic, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _removeHashTableEntry, {
          value: [core.bool, [dart.dynamic, core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _computeHashCode, {
          value: [core.int, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _getBucket, {
          value: [core.List, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _findBucketIndex, {
          value: [core.int, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({
          _isStringElement: [core.bool, [dart.dynamic]],
          _isNumericElement: [core.bool, [dart.dynamic]],
          _hasTableEntry: [core.bool, [dart.dynamic, dart.dynamic]],
          _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
          _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
          _newHashTable: [dart.dynamic, []]
        });
      },
      names: ['_isStringElement', '_isNumericElement', '_hasTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
    });
    dart.defineExtensionMembers(_HashSet, ['contains', 'iterator', 'length', 'isEmpty', 'isNotEmpty']);
    return _HashSet;
  });
  var _HashSet = _HashSet$();
  var _IdentityHashSet$ = dart.generic(function(E) {
    var _IdentityHashSet = function($__super) {
      var $__4;
      function _IdentityHashSet() {
        $traceurRuntime.superConstructor(_IdentityHashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_IdentityHashSet, ($__4 = {}, Object.defineProperty($__4, "_IdentityHashSet", {
        value: function() {
          $traceurRuntime.superGet(this, _IdentityHashSet.prototype, "_HashSet").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newSet, {
        value: function() {
          return new (_IdentityHashSet$(E))();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return core.identityHashCode(key) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, element) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (dart.notNull(core.identical(bucket[i], element)))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_HashSet$(E));
    dart.setSignature(_IdentityHashSet, {methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _newSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }});
    return _IdentityHashSet;
  });
  var _IdentityHashSet = _IdentityHashSet$();
  var _equality = Symbol('_equality');
  var _hasher = Symbol('_hasher');
  var _CustomHashSet$ = dart.generic(function(E) {
    var _CustomHashSet = function($__super) {
      var $__4;
      function _CustomHashSet() {
        $traceurRuntime.superConstructor(_CustomHashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_CustomHashSet, ($__4 = {}, Object.defineProperty($__4, "_CustomHashSet", {
        value: function(equality, hasher, validKey) {
          this[_equality] = equality;
          this[_hasher] = hasher;
          this[_validKey] = validKey != null ? validKey : dart.fn(function(x) {
            return dart.is(x, E);
          }, core.bool, [dart.dynamic]);
          $traceurRuntime.superGet(this, _CustomHashSet.prototype, "_HashSet").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newSet, {
        value: function() {
          return new (_CustomHashSet$(E))(this[_equality], this[_hasher], this[_validKey]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, element) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (dart.notNull(this[_equality](dart.as(bucket[i], E), dart.as(element, E))))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(element) {
          return this[_hasher](dart.as(element, E)) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(object) {
          dart.as(object, E);
          return $traceurRuntime.superGet(this, _CustomHashSet.prototype, _add).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return false;
          return $traceurRuntime.superGet(this, _CustomHashSet.prototype, _contains).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lookup", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return null;
          return $traceurRuntime.superGet(this, _CustomHashSet.prototype, _lookup).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return false;
          return $traceurRuntime.superGet(this, _CustomHashSet.prototype, _remove).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_HashSet$(E));
    dart.setSignature(_CustomHashSet, {
      constructors: function() {
        return ({_CustomHashSet: [_CustomHashSet$(E), [_Equality$(E), _Hasher$(E), dart.functionType(core.bool, [core.Object])]]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _newSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "add", {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lookup", {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    dart.defineExtensionMembers(_CustomHashSet, ['contains']);
    return _CustomHashSet;
  });
  var _CustomHashSet = _CustomHashSet$();
  var HashSetIterator$ = dart.generic(function(E) {
    var HashSetIterator = function($__super) {
      function HashSetIterator() {
        $traceurRuntime.superConstructor(HashSetIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(HashSetIterator, {
        HashSetIterator: function(set, elements) {
          this[_set] = set;
          this[_elements] = elements;
          this[_offset] = 0;
          this[_current] = null;
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          var elements = this[_elements];
          var offset = this[_offset];
          if (elements !== dart.dload(this[_set], _elements)) {
            dart.throw(new core.ConcurrentModificationError(this[_set]));
          } else if (dart.notNull(offset) >= elements.length) {
            this[_current] = null;
            return false;
          } else {
            this[_current] = dart.as(elements[offset], E);
            this[_offset] = dart.notNull(offset) + 1;
            return true;
          }
        }
      }, {}, $__super);
    }(core.Object);
    HashSetIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(HashSetIterator, {
      constructors: function() {
        return ({HashSetIterator: [HashSetIterator$(E), [dart.dynamic, core.List]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return HashSetIterator;
  });
  var HashSetIterator = HashSetIterator$();
  var _unsupported = Symbol('_unsupported');
  var _LinkedHashSet$ = dart.generic(function(E) {
    var _LinkedHashSet = function($__super) {
      var $__4;
      function _LinkedHashSet() {
        $traceurRuntime.superConstructor(_LinkedHashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedHashSet, ($__4 = {}, Object.defineProperty($__4, "_LinkedHashSet", {
        value: function() {
          this[_length] = 0;
          this[_strings] = null;
          this[_nums] = null;
          this[_rest] = null;
          this[_first] = null;
          this[_last] = null;
          this[_modifications] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newSet, {
        value: function() {
          return new (_LinkedHashSet$(E))();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _unsupported, {
        value: function(operation) {
          dart.throw(("LinkedHashSet: unsupported " + operation));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "iterator", {
        get: function() {
          return new (LinkedHashSetIterator$(E))(this, this[_modifications]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "length", {
        get: function() {
          return this[_length];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isEmpty", {
        get: function() {
          return this[_length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "isNotEmpty", {
        get: function() {
          return !dart.notNull(this.isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(object) {
          if (dart.notNull(_LinkedHashSet$()._isStringElement(object))) {
            var strings = this[_strings];
            if (strings == null)
              return false;
            var cell = dart.as(_LinkedHashSet$()._getTableEntry(strings, object), LinkedHashSetCell);
            return cell != null;
          } else if (dart.notNull(_LinkedHashSet$()._isNumericElement(object))) {
            var nums = this[_nums];
            if (nums == null)
              return false;
            var cell$__41 = dart.as(_LinkedHashSet$()._getTableEntry(nums, object), LinkedHashSetCell);
            return cell$__41 != null;
          } else {
            return this[_contains](object);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _contains, {
        value: function(object) {
          var rest = this[_rest];
          if (rest == null)
            return false;
          var bucket = this[_getBucket](rest, object);
          return dart.notNull(this[_findBucketIndex](bucket, object)) >= 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lookup", {
        value: function(object) {
          if (dart.notNull(_LinkedHashSet$()._isStringElement(object)) || dart.notNull(_LinkedHashSet$()._isNumericElement(object))) {
            return dart.as(dart.notNull(this.contains(object)) ? object : null, E);
          } else {
            return this[_lookup](object);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _lookup, {
        value: function(object) {
          var rest = this[_rest];
          if (rest == null)
            return null;
          var bucket = this[_getBucket](rest, object);
          var index = this[_findBucketIndex](bucket, object);
          if (dart.notNull(index) < 0)
            return null;
          return dart.as(dart.dload(bucket[dartx.get](index), _element), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "forEach", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [E]));
          var cell = this[_first];
          var modifications = this[_modifications];
          while (cell != null) {
            action(dart.as(cell[_element], E));
            if (modifications != this[_modifications]) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
            cell = cell[_next];
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "first", {
        get: function() {
          if (this[_first] == null)
            dart.throw(new core.StateError("No elements"));
          return dart.as(this[_first][_element], E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "last", {
        get: function() {
          if (this[_last] == null)
            dart.throw(new core.StateError("No elements"));
          return dart.as(this[_last][_element], E);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "add", {
        value: function(element) {
          dart.as(element, E);
          if (dart.notNull(_LinkedHashSet$()._isStringElement(element))) {
            var strings = this[_strings];
            if (strings == null)
              this[_strings] = strings = _LinkedHashSet$()._newHashTable();
            return this[_addHashTableEntry](strings, element);
          } else if (dart.notNull(_LinkedHashSet$()._isNumericElement(element))) {
            var nums = this[_nums];
            if (nums == null)
              this[_nums] = nums = _LinkedHashSet$()._newHashTable();
            return this[_addHashTableEntry](nums, element);
          } else {
            return this[_add](element);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _add, {
        value: function(element) {
          dart.as(element, E);
          var rest = this[_rest];
          if (rest == null)
            this[_rest] = rest = _LinkedHashSet$()._newHashTable();
          var hash = this[_computeHashCode](element);
          var bucket = rest[hash];
          if (bucket == null) {
            var cell = this[_newLinkedCell](element);
            _LinkedHashSet$()._setTableEntry(rest, hash, [cell]);
          } else {
            var index = this[_findBucketIndex](bucket, element);
            if (dart.notNull(index) >= 0)
              return false;
            var cell$__42 = this[_newLinkedCell](element);
            bucket.push(cell$__42);
          }
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(object) {
          if (dart.notNull(_LinkedHashSet$()._isStringElement(object))) {
            return this[_removeHashTableEntry](this[_strings], object);
          } else if (dart.notNull(_LinkedHashSet$()._isNumericElement(object))) {
            return this[_removeHashTableEntry](this[_nums], object);
          } else {
            return this[_remove](object);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _remove, {
        value: function(object) {
          var rest = this[_rest];
          if (rest == null)
            return false;
          var bucket = this[_getBucket](rest, object);
          var index = this[_findBucketIndex](bucket, object);
          if (dart.notNull(index) < 0)
            return false;
          var cell = dart.as(bucket.splice(index, 1)[0], LinkedHashSetCell);
          this[_unlinkCell](cell);
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          this[_filterWhere](test, true);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "retainWhere", {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          this[_filterWhere](test, false);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _filterWhere, {
        value: function(test, removeMatching) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var cell = this[_first];
          while (cell != null) {
            var element = dart.as(cell[_element], E);
            var next = cell[_next];
            var modifications = this[_modifications];
            var shouldRemove = removeMatching == test(element);
            if (modifications != this[_modifications]) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
            if (dart.notNull(shouldRemove))
              this.remove(element);
            cell = next;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "clear", {
        value: function() {
          if (dart.notNull(this[_length]) > 0) {
            this[_strings] = this[_nums] = this[_rest] = this[_first] = this[_last] = null;
            this[_length] = 0;
            this[_modified]();
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _addHashTableEntry, {
        value: function(table, element) {
          dart.as(element, E);
          var cell = dart.as(_LinkedHashSet$()._getTableEntry(table, element), LinkedHashSetCell);
          if (cell != null)
            return false;
          _LinkedHashSet$()._setTableEntry(table, element, this[_newLinkedCell](element));
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _removeHashTableEntry, {
        value: function(table, element) {
          if (table == null)
            return false;
          var cell = dart.as(_LinkedHashSet$()._getTableEntry(table, element), LinkedHashSetCell);
          if (cell == null)
            return false;
          this[_unlinkCell](cell);
          _LinkedHashSet$()._deleteTableEntry(table, element);
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _modified, {
        value: function() {
          this[_modifications] = dart.notNull(this[_modifications]) + 1 & 67108863;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newLinkedCell, {
        value: function(element) {
          dart.as(element, E);
          var cell = new LinkedHashSetCell(element);
          if (this[_first] == null) {
            this[_first] = this[_last] = cell;
          } else {
            var last = this[_last];
            cell[_previous] = last;
            this[_last] = last[_next] = cell;
          }
          this[_length] = dart.notNull(this[_length]) + 1;
          this[_modified]();
          return cell;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _unlinkCell, {
        value: function(cell) {
          var previous = cell[_previous];
          var next = cell[_next];
          if (previous == null) {
            dart.assert(dart.equals(cell, this[_first]));
            this[_first] = next;
          } else {
            previous[_next] = next;
          }
          if (next == null) {
            dart.assert(dart.equals(cell, this[_last]));
            this[_last] = previous;
          } else {
            next[_previous] = previous;
          }
          this[_length] = dart.notNull(this[_length]) - 1;
          this[_modified]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(element) {
          return dart.hashCode(element) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _getBucket, {
        value: function(table, element) {
          var hash = this[_computeHashCode](element);
          return dart.as(table[hash], core.List);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, element) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var cell = dart.as(bucket[i], LinkedHashSetCell);
            if (dart.equals(cell[_element], element))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        _isStringElement: function(element) {
          return typeof element == 'string' && !dart.equals(element, '__proto__');
        },
        _isNumericElement: function(element) {
          return typeof element == 'number' && (element & 0x3ffffff) === element;
        },
        _getTableEntry: function(table, key) {
          return table[key];
        },
        _setTableEntry: function(table, key, value) {
          dart.assert(value != null);
          table[key] = value;
        },
        _deleteTableEntry: function(table, key) {
          delete table[key];
        },
        _newHashTable: function() {
          var table = Object.create(null);
          var temporaryKey = '<non-identifier-key>';
          _LinkedHashSet$()._setTableEntry(table, temporaryKey, table);
          _LinkedHashSet$()._deleteTableEntry(table, temporaryKey);
          return table;
        }
      }, $__super);
    }(_HashSetBase$(E));
    _LinkedHashSet[dart.implements] = function() {
      return [LinkedHashSet$(E)];
    };
    dart.setSignature(_LinkedHashSet, {
      constructors: function() {
        return ({_LinkedHashSet: [_LinkedHashSet$(E), []]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _newSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _unsupported, {
          value: [dart.void, [core.String]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "contains", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _contains, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lookup", {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _lookup, {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "forEach", {
          value: [dart.void, [dart.functionType(dart.void, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "add", {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _add, {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "remove", {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _remove, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "removeWhere", {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "retainWhere", {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _filterWhere, {
          value: [dart.void, [dart.functionType(core.bool, [E]), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _addHashTableEntry, {
          value: [core.bool, [dart.dynamic, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _removeHashTableEntry, {
          value: [core.bool, [dart.dynamic, core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _modified, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _newLinkedCell, {
          value: [LinkedHashSetCell, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _unlinkCell, {
          value: [dart.void, [LinkedHashSetCell]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _computeHashCode, {
          value: [core.int, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _getBucket, {
          value: [core.List, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, _findBucketIndex, {
          value: [core.int, [dart.dynamic, dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({
          _isStringElement: [core.bool, [dart.dynamic]],
          _isNumericElement: [core.bool, [dart.dynamic]],
          _getTableEntry: [dart.dynamic, [dart.dynamic, dart.dynamic]],
          _setTableEntry: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
          _deleteTableEntry: [dart.void, [dart.dynamic, dart.dynamic]],
          _newHashTable: [dart.dynamic, []]
        });
      },
      names: ['_isStringElement', '_isNumericElement', '_getTableEntry', '_setTableEntry', '_deleteTableEntry', '_newHashTable']
    });
    dart.defineExtensionMembers(_LinkedHashSet, ['contains', 'forEach', 'iterator', 'length', 'isEmpty', 'isNotEmpty', 'first', 'last']);
    return _LinkedHashSet;
  });
  var _LinkedHashSet = _LinkedHashSet$();
  var _LinkedIdentityHashSet$ = dart.generic(function(E) {
    var _LinkedIdentityHashSet = function($__super) {
      var $__4;
      function _LinkedIdentityHashSet() {
        $traceurRuntime.superConstructor(_LinkedIdentityHashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedIdentityHashSet, ($__4 = {}, Object.defineProperty($__4, "_LinkedIdentityHashSet", {
        value: function() {
          $traceurRuntime.superGet(this, _LinkedIdentityHashSet.prototype, "_LinkedHashSet").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newSet, {
        value: function() {
          return new (_LinkedIdentityHashSet$(E))();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(key) {
          return core.identityHashCode(key) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, element) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var cell = dart.as(bucket[i], LinkedHashSetCell);
            if (dart.notNull(core.identical(cell[_element], element)))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_LinkedHashSet$(E));
    dart.setSignature(_LinkedIdentityHashSet, {methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _newSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }});
    return _LinkedIdentityHashSet;
  });
  var _LinkedIdentityHashSet = _LinkedIdentityHashSet$();
  var _LinkedCustomHashSet$ = dart.generic(function(E) {
    var _LinkedCustomHashSet = function($__super) {
      var $__4;
      function _LinkedCustomHashSet() {
        $traceurRuntime.superConstructor(_LinkedCustomHashSet).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_LinkedCustomHashSet, ($__4 = {}, Object.defineProperty($__4, "_LinkedCustomHashSet", {
        value: function(equality, hasher, validKey) {
          this[_equality] = equality;
          this[_hasher] = hasher;
          this[_validKey] = validKey != null ? validKey : dart.fn(function(x) {
            return dart.is(x, E);
          }, core.bool, [dart.dynamic]);
          $traceurRuntime.superGet(this, _LinkedCustomHashSet.prototype, "_LinkedHashSet").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _newSet, {
        value: function() {
          return new (_LinkedCustomHashSet$(E))(this[_equality], this[_hasher], this[_validKey]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _findBucketIndex, {
        value: function(bucket, element) {
          if (bucket == null)
            return -1;
          var length = bucket.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var cell = dart.as(bucket[i], LinkedHashSetCell);
            if (dart.notNull(this[_equality](dart.as(cell[_element], E), dart.as(element, E))))
              return i;
          }
          return -1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _computeHashCode, {
        value: function(element) {
          return this[_hasher](dart.as(element, E)) & 0x3ffffff;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "add", {
        value: function(element) {
          dart.as(element, E);
          return $traceurRuntime.superGet(this, _LinkedCustomHashSet.prototype, _add).call(this, element);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "contains", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return false;
          return $traceurRuntime.superGet(this, _LinkedCustomHashSet.prototype, _contains).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "lookup", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return null;
          return $traceurRuntime.superGet(this, _LinkedCustomHashSet.prototype, _lookup).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "remove", {
        value: function(object) {
          if (!dart.notNull(this[_validKey](object)))
            return false;
          return $traceurRuntime.superGet(this, _LinkedCustomHashSet.prototype, _remove).call(this, object);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsAll", {
        value: function(elements) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (!dart.notNull(this[_validKey](element)) || !dart.notNull(this.contains(element)))
                  return false;
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
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "removeAll", {
        value: function(elements) {
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (elements)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var element = $__6.value;
              {
                if (dart.notNull(this[_validKey](element))) {
                  $traceurRuntime.superGet(this, _LinkedCustomHashSet.prototype, _remove).call(this, element);
                }
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
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(_LinkedHashSet$(E));
    dart.setSignature(_LinkedCustomHashSet, {
      constructors: function() {
        return ({_LinkedCustomHashSet: [_LinkedCustomHashSet$(E), [_Equality$(E), _Hasher$(E), dart.functionType(core.bool, [core.Object])]]});
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, _newSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "add", {
          value: [core.bool, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, "lookup", {
          value: [E, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      }
    });
    dart.defineExtensionMembers(_LinkedCustomHashSet, ['contains']);
    return _LinkedCustomHashSet;
  });
  var _LinkedCustomHashSet = _LinkedCustomHashSet$();
  var LinkedHashSetCell = function($__super) {
    function LinkedHashSetCell() {
      $traceurRuntime.superConstructor(LinkedHashSetCell).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(LinkedHashSetCell, {LinkedHashSetCell: function(element) {
        this[_element] = element;
        this[_next] = null;
        this[_previous] = null;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(LinkedHashSetCell, {constructors: function() {
      return ({LinkedHashSetCell: [LinkedHashSetCell, [dart.dynamic]]});
    }});
  var LinkedHashSetIterator$ = dart.generic(function(E) {
    var LinkedHashSetIterator = function($__super) {
      function LinkedHashSetIterator() {
        $traceurRuntime.superConstructor(LinkedHashSetIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(LinkedHashSetIterator, {
        LinkedHashSetIterator: function(set, modifications) {
          this[_set] = set;
          this[_modifications] = modifications;
          this[_cell] = null;
          this[_current] = null;
          this[_cell] = dart.as(dart.dload(this[_set], _first), LinkedHashSetCell);
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          if (!dart.equals(this[_modifications], dart.dload(this[_set], _modifications))) {
            dart.throw(new core.ConcurrentModificationError(this[_set]));
          } else if (this[_cell] == null) {
            this[_current] = null;
            return false;
          } else {
            this[_current] = dart.as(this[_cell][_element], E);
            this[_cell] = this[_cell][_next];
            return true;
          }
        }
      }, {}, $__super);
    }(core.Object);
    LinkedHashSetIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(LinkedHashSetIterator, {
      constructors: function() {
        return ({LinkedHashSetIterator: [LinkedHashSetIterator$(E), [dart.dynamic, core.int]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return LinkedHashSetIterator;
  });
  var LinkedHashSetIterator = LinkedHashSetIterator$();
  exports.UnmodifiableListView$ = UnmodifiableListView$;
  exports.HashMap$ = HashMap$;
  exports.HashMap = HashMap;
  exports.SetMixin$ = SetMixin$;
  exports.SetMixin = SetMixin;
  exports.SetBase$ = SetBase$;
  exports.SetBase = SetBase;
  exports.HashSet$ = HashSet$;
  exports.HashSet = HashSet;
  exports.IterableMixin$ = IterableMixin$;
  exports.IterableMixin = IterableMixin;
  exports.IterableBase$ = IterableBase$;
  exports.IterableBase = IterableBase;
  exports.HasNextIterator$ = HasNextIterator$;
  exports.HasNextIterator = HasNextIterator;
  exports.LinkedHashMap$ = LinkedHashMap$;
  exports.LinkedHashMap = LinkedHashMap;
  exports.LinkedHashSet$ = LinkedHashSet$;
  exports.LinkedHashSet = LinkedHashSet;
  exports.LinkedList$ = LinkedList$;
  exports.LinkedList = LinkedList;
  exports.LinkedListEntry$ = LinkedListEntry$;
  exports.LinkedListEntry = LinkedListEntry;
  exports.ListMixin$ = ListMixin$;
  exports.ListMixin = ListMixin;
  exports.ListBase$ = ListBase$;
  exports.ListBase = ListBase;
  exports.MapMixin$ = MapMixin$;
  exports.MapMixin = MapMixin;
  exports.MapBase$ = MapBase$;
  exports.MapBase = MapBase;
  exports.UnmodifiableMapBase$ = UnmodifiableMapBase$;
  exports.UnmodifiableMapBase = UnmodifiableMapBase;
  exports.MapView$ = MapView$;
  exports.MapView = MapView;
  exports.UnmodifiableMapView$ = UnmodifiableMapView$;
  exports.UnmodifiableMapView = UnmodifiableMapView;
  exports.Maps = Maps;
  exports.Queue$ = Queue$;
  exports.Queue = Queue;
  exports.DoubleLinkedQueueEntry$ = DoubleLinkedQueueEntry$;
  exports.DoubleLinkedQueueEntry = DoubleLinkedQueueEntry;
  exports.DoubleLinkedQueue$ = DoubleLinkedQueue$;
  exports.DoubleLinkedQueue = DoubleLinkedQueue;
  exports.ListQueue$ = ListQueue$;
  exports.ListQueue = ListQueue;
  exports.SplayTreeMap$ = SplayTreeMap$;
  exports.SplayTreeMap = SplayTreeMap;
  exports.SplayTreeSet$ = SplayTreeSet$;
  exports.SplayTreeSet = SplayTreeSet;
  exports.HashMapKeyIterable$ = HashMapKeyIterable$;
  exports.HashMapKeyIterable = HashMapKeyIterable;
  exports.HashMapKeyIterator$ = HashMapKeyIterator$;
  exports.HashMapKeyIterator = HashMapKeyIterator;
  exports.LinkedHashMapCell = LinkedHashMapCell;
  exports.LinkedHashMapKeyIterable$ = LinkedHashMapKeyIterable$;
  exports.LinkedHashMapKeyIterable = LinkedHashMapKeyIterable;
  exports.LinkedHashMapKeyIterator$ = LinkedHashMapKeyIterator$;
  exports.LinkedHashMapKeyIterator = LinkedHashMapKeyIterator;
  exports.HashSetIterator$ = HashSetIterator$;
  exports.HashSetIterator = HashSetIterator;
  exports.LinkedHashSetCell = LinkedHashSetCell;
  exports.LinkedHashSetIterator$ = LinkedHashSetIterator$;
  exports.LinkedHashSetIterator = LinkedHashSetIterator;
});
