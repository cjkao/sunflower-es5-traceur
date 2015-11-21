dart_library.library('dart/_interceptors', null, ["dart/_runtime", 'dart/core', 'dart/_internal', 'dart/collection', 'dart/math'], ['dart/_js_helper'], function(exports, dart, core, _internal, collection, math, _js_helper) {
  'use strict';
  var dartx = dart.dartx;
  var JSArray$ = dart.generic(function(E) {
    dart.defineExtensionNames(['checkGrowable', 'add', 'removeAt', 'insert', 'insertAll', 'setAll', 'removeLast', 'remove', 'removeWhere', 'retainWhere', 'where', 'expand', 'addAll', 'clear', 'forEach', 'map', 'join', 'take', 'takeWhile', 'skip', 'skipWhile', 'reduce', 'fold', 'firstWhere', 'lastWhere', 'singleWhere', 'elementAt', 'sublist', 'getRange', 'first', 'last', 'single', 'removeRange', 'setRange', 'fillRange', 'replaceRange', 'any', 'every', 'reversed', 'sort', 'shuffle', 'indexOf', 'lastIndexOf', 'contains', 'isEmpty', 'isNotEmpty', 'toString', 'toList', 'toSet', 'iterator', 'hashCode', 'length', 'length', 'get', 'set', 'asMap']);
    var JSArray = function($__super) {
      var $__4;
      function JSArray() {
        $traceurRuntime.superConstructor(JSArray).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(JSArray, ($__4 = {}, Object.defineProperty($__4, "JSArray", {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.checkGrowable, {
        value: function(reason) {
          if (this.fixed$length) {
            dart.throw(new core.UnsupportedError(dart.as(reason, core.String)));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.add, {
        value: function(value) {
          dart.as(value, E);
          this[dartx.checkGrowable]('add');
          this.push(value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.removeAt, {
        value: function(index) {
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError(index));
          if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this[dartx.length])) {
            dart.throw(new core.RangeError.value(index));
          }
          this[dartx.checkGrowable]('removeAt');
          return this.splice(index, 1)[0];
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.insert, {
        value: function(index, value) {
          dart.as(value, E);
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError(index));
          if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[dartx.length])) {
            dart.throw(new core.RangeError.value(index));
          }
          this[dartx.checkGrowable]('insert');
          this.splice(index, 0, value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.insertAll, {
        value: function(index, iterable) {
          dart.as(iterable, core.Iterable$(E));
          this[dartx.checkGrowable]('insertAll');
          _internal.IterableMixinWorkaround.insertAllList(this, index, iterable);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.setAll, {
        value: function(index, iterable) {
          dart.as(iterable, core.Iterable$(E));
          _internal.IterableMixinWorkaround.setAllList(this, index, iterable);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.removeLast, {
        value: function() {
          this[dartx.checkGrowable]('removeLast');
          if (this[dartx.length] == 0)
            dart.throw(new core.RangeError.value(-1));
          return dart.as(this.pop(), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.remove, {
        value: function(element) {
          this[dartx.checkGrowable]('remove');
          for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
            if (dart.equals(this[dartx.get](i), element)) {
              this.splice(i, 1);
              return true;
            }
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.removeWhere, {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          _internal.IterableMixinWorkaround.removeWhereList(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.retainWhere, {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          _internal.IterableMixinWorkaround.removeWhereList(this, dart.fn(function(element) {
            return !dart.notNull(test(element));
          }, core.bool, [E]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.where, {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          return new (_internal.IterableMixinWorkaround$(E))().where(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.expand, {
        value: function(f) {
          dart.as(f, dart.functionType(core.Iterable, [E]));
          return _internal.IterableMixinWorkaround.expand(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.addAll, {
        value: function(collection) {
          dart.as(collection, core.Iterable$(E));
          var $__8 = true;
          var $__9 = false;
          var $__10 = undefined;
          try {
            for (var $__6 = void 0,
                $__5 = (collection)[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
              var e = $__6.value;
              {
                this[dartx.add](e);
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
      }), Object.defineProperty($__4, dartx.clear, {
        value: function() {
          this[dartx.length] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.forEach, {
        value: function(f) {
          dart.as(f, dart.functionType(dart.void, [E]));
          var length = this[dartx.length];
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            f(dart.as(this[i], E));
            if (length != this[dartx.length]) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.map, {
        value: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return _internal.IterableMixinWorkaround.mapList(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.join, {
        value: function(separator) {
          if (separator === void 0)
            separator = "";
          var list = core.List.new(this[dartx.length]);
          for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
            list[dartx.set](i, ("" + this[dartx.get](i)));
          }
          return list.join(separator);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.take, {
        value: function(n) {
          return new (_internal.IterableMixinWorkaround$(E))().takeList(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.takeWhile, {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.IterableMixinWorkaround$(E))().takeWhile(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.skip, {
        value: function(n) {
          return new (_internal.IterableMixinWorkaround$(E))().skipList(this, n);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.skipWhile, {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return new (_internal.IterableMixinWorkaround$(E))().skipWhile(this, test);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.reduce, {
        value: function(combine) {
          dart.as(combine, dart.functionType(E, [E, E]));
          return dart.as(_internal.IterableMixinWorkaround.reduce(this, combine), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.fold, {
        value: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          return _internal.IterableMixinWorkaround.fold(this, initialValue, combine);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.firstWhere, {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          return dart.as(_internal.IterableMixinWorkaround.firstWhere(this, test, orElse), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.lastWhere, {
        value: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          return dart.as(_internal.IterableMixinWorkaround.lastWhereList(this, test, orElse), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.singleWhere, {
        value: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return dart.as(_internal.IterableMixinWorkaround.singleWhere(this, test), E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.elementAt, {
        value: function(index) {
          return this[dartx.get](index);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.sublist, {
        value: function(start, end) {
          if (end === void 0)
            end = null;
          _js_helper.checkNull(start);
          if (!(typeof start == 'number'))
            dart.throw(new core.ArgumentError(start));
          if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this[dartx.length])) {
            dart.throw(new core.RangeError.range(start, 0, this[dartx.length]));
          }
          if (end == null) {
            end = this[dartx.length];
          } else {
            if (!(typeof end == 'number'))
              dart.throw(new core.ArgumentError(end));
            if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(this[dartx.length])) {
              dart.throw(new core.RangeError.range(end, start, this[dartx.length]));
            }
          }
          if (start == end)
            return dart.list([], E);
          return JSArray$(E).typed(this.slice(start, end));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.getRange, {
        value: function(start, end) {
          return new (_internal.IterableMixinWorkaround$(E))().getRangeList(this, start, end);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.first, {
        get: function() {
          if (dart.notNull(this[dartx.length]) > 0)
            return this[dartx.get](0);
          dart.throw(new core.StateError("No elements"));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.last, {
        get: function() {
          if (dart.notNull(this[dartx.length]) > 0)
            return this[dartx.get](dart.notNull(this[dartx.length]) - 1);
          dart.throw(new core.StateError("No elements"));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.single, {
        get: function() {
          if (this[dartx.length] == 1)
            return this[dartx.get](0);
          if (this[dartx.length] == 0)
            dart.throw(new core.StateError("No elements"));
          dart.throw(new core.StateError("More than one element"));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.removeRange, {
        value: function(start, end) {
          this[dartx.checkGrowable]('removeRange');
          var receiverLength = this[dartx.length];
          if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(receiverLength)) {
            dart.throw(new core.RangeError.range(start, 0, receiverLength));
          }
          if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(receiverLength)) {
            dart.throw(new core.RangeError.range(end, start, receiverLength));
          }
          _internal.Lists.copy(this, end, this, start, dart.notNull(receiverLength) - dart.notNull(end));
          this[dartx.length] = dart.notNull(receiverLength) - (dart.notNull(end) - dart.notNull(start));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.setRange, {
        value: function(start, end, iterable, skipCount) {
          dart.as(iterable, core.Iterable$(E));
          if (skipCount === void 0)
            skipCount = 0;
          _internal.IterableMixinWorkaround.setRangeList(this, start, end, iterable, skipCount);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.fillRange, {
        value: function(start, end, fillValue) {
          if (fillValue === void 0)
            fillValue = null;
          dart.as(fillValue, E);
          _internal.IterableMixinWorkaround.fillRangeList(this, start, end, fillValue);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.replaceRange, {
        value: function(start, end, iterable) {
          dart.as(iterable, core.Iterable$(E));
          _internal.IterableMixinWorkaround.replaceRangeList(this, start, end, iterable);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.any, {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          return _internal.IterableMixinWorkaround.any(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.every, {
        value: function(f) {
          dart.as(f, dart.functionType(core.bool, [E]));
          return _internal.IterableMixinWorkaround.every(this, f);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.reversed, {
        get: function() {
          return new (_internal.IterableMixinWorkaround$(E))().reversedList(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.sort, {
        value: function(compare) {
          if (compare === void 0)
            compare = null;
          dart.as(compare, dart.functionType(core.int, [E, E]));
          _internal.IterableMixinWorkaround.sortList(this, compare);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.shuffle, {
        value: function(random) {
          if (random === void 0)
            random = null;
          _internal.IterableMixinWorkaround.shuffleList(this, random);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.indexOf, {
        value: function(element, start) {
          if (start === void 0)
            start = 0;
          return _internal.IterableMixinWorkaround.indexOfList(this, element, start);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.lastIndexOf, {
        value: function(element, start) {
          if (start === void 0)
            start = null;
          return _internal.IterableMixinWorkaround.lastIndexOfList(this, element, start);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.contains, {
        value: function(other) {
          for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
            if (dart.equals(this[dartx.get](i), other))
              return true;
          }
          return false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.isEmpty, {
        get: function() {
          return this[dartx.length] == 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.isNotEmpty, {
        get: function() {
          return !dart.notNull(this[dartx.isEmpty]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return collection.ListBase.listToString(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toList, {
        value: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var list = this.slice();
          if (!dart.notNull(growable))
            JSArray$().markFixedList(dart.as(list, core.List));
          return JSArray$(E).typed(list);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toSet, {
        value: function() {
          return core.Set$(E).from(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.iterator, {
        get: function() {
          return new (_internal.ListIterator$(E))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "hashCode", {
        get: function() {
          return _js_helper.Primitives.objectHashCode(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.length, {
        get: function() {
          return this.length;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.length, {
        set: function(newLength) {
          if (!(typeof newLength == 'number'))
            dart.throw(new core.ArgumentError(newLength));
          if (dart.notNull(newLength) < 0)
            dart.throw(new core.RangeError.value(newLength));
          this[dartx.checkGrowable]('set length');
          this.length = newLength;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, dartx.get, {
        value: function(index) {
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError(index));
          if (dart.notNull(index) >= dart.notNull(this[dartx.length]) || dart.notNull(index) < 0)
            dart.throw(new core.RangeError.value(index));
          return dart.as(this[index], E);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.set, {
        value: function(index, value) {
          dart.as(value, E);
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError(index));
          if (dart.notNull(index) >= dart.notNull(this[dartx.length]) || dart.notNull(index) < 0)
            dart.throw(new core.RangeError.value(index));
          this[index] = value;
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.asMap, {
        value: function() {
          return new (_internal.IterableMixinWorkaround$(E))().asMapList(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {
        typed: function(allocation) {
          return dart.list(allocation, E);
        },
        markFixed: function(allocation) {
          return JSArray$(E).typed(JSArray$().markFixedList(dart.as(allocation, core.List)));
        },
        markGrowable: function(allocation) {
          return JSArray$().typed(allocation);
        },
        markFixedList: function(list) {
          list.fixed$length = Array;
          return list;
        }
      }, $__super);
    }(core.Object);
    dart.setBaseClass(JSArray, dart.global.Array);
    JSArray[dart.implements] = function() {
      return [core.List$(E), JSIndexable];
    };
    dart.setSignature(JSArray, {
      constructors: function() {
        return ({
          JSArray: [JSArray$(E), []],
          typed: [JSArray$(E), [dart.dynamic]],
          markFixed: [JSArray$(E), [dart.dynamic]],
          markGrowable: [JSArray$(E), [dart.dynamic]]
        });
      },
      methods: function() {
        var $__4;
        return (($__4 = {}, Object.defineProperty($__4, dartx.checkGrowable, {
          value: [dart.dynamic, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.add, {
          value: [dart.void, [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.removeAt, {
          value: [E, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.insert, {
          value: [dart.void, [core.int, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.insertAll, {
          value: [dart.void, [core.int, core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.setAll, {
          value: [dart.void, [core.int, core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.removeLast, {
          value: [E, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.remove, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.removeWhere, {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.retainWhere, {
          value: [dart.void, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.where, {
          value: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.expand, {
          value: [core.Iterable, [dart.functionType(core.Iterable, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.addAll, {
          value: [dart.void, [core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.clear, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.forEach, {
          value: [dart.void, [dart.functionType(dart.void, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.map, {
          value: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.join, {
          value: [core.String, [], [core.String]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.take, {
          value: [core.Iterable$(E), [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.takeWhile, {
          value: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.skip, {
          value: [core.Iterable$(E), [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.skipWhile, {
          value: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.reduce, {
          value: [E, [dart.functionType(E, [E, E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.fold, {
          value: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.firstWhere, {
          value: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.lastWhere, {
          value: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.singleWhere, {
          value: [E, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.elementAt, {
          value: [E, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.sublist, {
          value: [core.List$(E), [core.int], [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.getRange, {
          value: [core.Iterable$(E), [core.int, core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.removeRange, {
          value: [dart.void, [core.int, core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.setRange, {
          value: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.fillRange, {
          value: [dart.void, [core.int, core.int], [E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.replaceRange, {
          value: [dart.void, [core.int, core.int, core.Iterable$(E)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.any, {
          value: [core.bool, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.every, {
          value: [core.bool, [dart.functionType(core.bool, [E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.sort, {
          value: [dart.void, [], [dart.functionType(core.int, [E, E])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.shuffle, {
          value: [dart.void, [], [math.Random]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.indexOf, {
          value: [core.int, [core.Object], [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.lastIndexOf, {
          value: [core.int, [core.Object], [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.contains, {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.toList, {
          value: [core.List$(E), [], {growable: core.bool}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.toSet, {
          value: [core.Set$(E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.get, {
          value: [E, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.set, {
          value: [dart.void, [core.int, E]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__4, dartx.asMap, {
          value: [core.Map$(core.int, E), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__4));
      },
      statics: function() {
        return ({markFixedList: [core.List, [core.List]]});
      },
      names: ['markFixedList']
    });
    JSArray[dart.metadata] = function() {
      return [dart.const(new _js_helper.JsPeerInterface({name: 'Array'}))];
    };
    return JSArray;
  });
  var JSArray = JSArray$();
  dart.registerExtension(dart.global.Array, JSArray);
  var JSMutableArray$ = dart.generic(function(E) {
    var JSMutableArray = function($__super) {
      function JSMutableArray() {
        $traceurRuntime.superConstructor(JSMutableArray).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(JSMutableArray, {JSMutableArray: function() {
          $traceurRuntime.superGet(this, JSMutableArray.prototype, "JSArray").call(this);
        }}, {}, $__super);
    }(JSArray$(E));
    JSMutableArray[dart.implements] = function() {
      return [JSMutableIndexable];
    };
    return JSMutableArray;
  });
  var JSMutableArray = JSMutableArray$();
  var JSFixedArray$ = dart.generic(function(E) {
    var JSFixedArray = function($__super) {
      function JSFixedArray() {
        $traceurRuntime.superConstructor(JSFixedArray).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(JSFixedArray, {}, {}, $__super);
    }(JSMutableArray$(E));
    return JSFixedArray;
  });
  var JSFixedArray = JSFixedArray$();
  var JSExtendableArray$ = dart.generic(function(E) {
    var JSExtendableArray = function($__super) {
      function JSExtendableArray() {
        $traceurRuntime.superConstructor(JSExtendableArray).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(JSExtendableArray, {}, {}, $__super);
    }(JSMutableArray$(E));
    return JSExtendableArray;
  });
  var JSExtendableArray = JSExtendableArray$();
  var Interceptor = function($__super) {
    function Interceptor() {
      $traceurRuntime.superConstructor(Interceptor).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Interceptor, {Interceptor: function() {}}, {}, $__super);
  }(core.Object);
  dart.setSignature(Interceptor, {constructors: function() {
      return ({Interceptor: [Interceptor, []]});
    }});
  var _isInt32 = Symbol('_isInt32');
  var _tdivSlow = Symbol('_tdivSlow');
  var _shlPositive = Symbol('_shlPositive');
  var _shrOtherPositive = Symbol('_shrOtherPositive');
  var _shrBothPositive = Symbol('_shrBothPositive');
  dart.defineExtensionNames(['compareTo', 'isNegative', 'isNaN', 'isInfinite', 'isFinite', 'remainder', 'abs', 'sign', 'toInt', 'truncate', 'ceil', 'floor', 'round', 'ceilToDouble', 'floorToDouble', 'roundToDouble', 'truncateToDouble', 'clamp', 'toDouble', 'toStringAsFixed', 'toStringAsExponential', 'toStringAsPrecision', 'toRadixString', 'toString', 'hashCode', 'unary-', '+', '-', '/', '*', '%', '~/', '<<', '>>', '&', '|', '^', '<', '>', '<=', '>=', 'isEven', 'isOdd', 'toUnsigned', 'toSigned', 'bitLength', '~']);
  var JSNumber = function($__super) {
    var $__4;
    function JSNumber() {
      $traceurRuntime.superConstructor(JSNumber).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSNumber, ($__4 = {}, Object.defineProperty($__4, "JSNumber", {
      value: function() {
        $traceurRuntime.superGet(this, JSNumber.prototype, "Interceptor").call(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.compareTo, {
      value: function(b) {
        if (this < dart.notNull(b)) {
          return -1;
        } else if (this > dart.notNull(b)) {
          return 1;
        } else if (dart.equals(this, b)) {
          if (dart.equals(this, 0)) {
            var bIsNegative = b[dartx.isNegative];
            if (this[dartx.isNegative] == bIsNegative)
              return 0;
            if (dart.notNull(this[dartx.isNegative]))
              return -1;
            return 1;
          }
          return 0;
        } else if (dart.notNull(this[dartx.isNaN])) {
          if (dart.notNull(b[dartx.isNaN])) {
            return 0;
          }
          return 1;
        } else {
          return -1;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.isNegative, {
      get: function() {
        return dart.equals(this, 0) ? 1 / this < 0 : this < 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.isNaN, {
      get: function() {
        return isNaN(this);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.isInfinite, {
      get: function() {
        return this == Infinity || this == -Infinity;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.isFinite, {
      get: function() {
        return isFinite(this);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.remainder, {
      value: function(b) {
        _js_helper.checkNull(b);
        return this % b;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.abs, {
      value: function() {
        return Math.abs(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.sign, {
      get: function() {
        return this > 0 ? 1 : this < 0 ? -1 : this;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.toInt, {
      value: function() {
        if (this >= dart.notNull(JSNumber._MIN_INT32) && this <= dart.notNull(JSNumber._MAX_INT32)) {
          return this | 0;
        }
        if (isFinite(this)) {
          return this[dartx.truncateToDouble]() + 0;
        }
        dart.throw(new core.UnsupportedError('' + this));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.truncate, {
      value: function() {
        return this[dartx.toInt]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.ceil, {
      value: function() {
        return this[dartx.ceilToDouble]()[dartx.toInt]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.floor, {
      value: function() {
        return this[dartx.floorToDouble]()[dartx.toInt]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.round, {
      value: function() {
        return this[dartx.roundToDouble]()[dartx.toInt]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.ceilToDouble, {
      value: function() {
        return Math.ceil(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.floorToDouble, {
      value: function() {
        return Math.floor(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.roundToDouble, {
      value: function() {
        if (this < 0) {
          return -Math.round(-this);
        } else {
          return Math.round(this);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.truncateToDouble, {
      value: function() {
        return this < 0 ? this[dartx.ceilToDouble]() : this[dartx.floorToDouble]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.clamp, {
      value: function(lowerLimit, upperLimit) {
        if (dart.notNull(lowerLimit[dartx.compareTo](upperLimit)) > 0) {
          dart.throw(new core.ArgumentError(lowerLimit));
        }
        if (dart.notNull(this[dartx.compareTo](lowerLimit)) < 0)
          return lowerLimit;
        if (dart.notNull(this[dartx.compareTo](upperLimit)) > 0)
          return upperLimit;
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toDouble, {
      value: function() {
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toStringAsFixed, {
      value: function(fractionDigits) {
        _js_helper.checkInt(fractionDigits);
        if (dart.notNull(fractionDigits) < 0 || dart.notNull(fractionDigits) > 20) {
          dart.throw(new core.RangeError(fractionDigits));
        }
        var result = this.toFixed(fractionDigits);
        if (dart.equals(this, 0) && dart.notNull(this[dartx.isNegative]))
          return ("-" + result);
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toStringAsExponential, {
      value: function(fractionDigits) {
        if (fractionDigits === void 0)
          fractionDigits = null;
        var result = null;
        if (fractionDigits != null) {
          _js_helper.checkInt(fractionDigits);
          if (dart.notNull(fractionDigits) < 0 || dart.notNull(fractionDigits) > 20) {
            dart.throw(new core.RangeError(fractionDigits));
          }
          result = this.toExponential(fractionDigits);
        } else {
          result = this.toExponential();
        }
        if (dart.equals(this, 0) && dart.notNull(this[dartx.isNegative]))
          return ("-" + result);
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toStringAsPrecision, {
      value: function(precision) {
        _js_helper.checkInt(precision);
        if (dart.notNull(precision) < 1 || dart.notNull(precision) > 21) {
          dart.throw(new core.RangeError(precision));
        }
        var result = this.toPrecision(precision);
        if (dart.equals(this, 0) && dart.notNull(this[dartx.isNegative]))
          return ("-" + result);
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toRadixString, {
      value: function(radix) {
        _js_helper.checkInt(radix);
        if (dart.notNull(radix) < 2 || dart.notNull(radix) > 36)
          dart.throw(new core.RangeError(radix));
        var result = this.toString(radix);
        var rightParenCode = 41;
        if (result[dartx.codeUnitAt](dart.notNull(result[dartx.length]) - 1) != rightParenCode) {
          return result;
        }
        return JSNumber._handleIEtoString(result);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "toString", {
      value: function() {
        if (dart.equals(this, 0) && 1 / this < 0) {
          return '-0.0';
        } else {
          return "" + this;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "hashCode", {
      get: function() {
        return this & 0x1FFFFFFF;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx['unary-'], {
      value: function() {
        return -this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['+'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this + other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['-'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this - other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['/'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this / other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['*'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this * other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['%'], {
      value: function(other) {
        _js_helper.checkNull(other);
        var result = this % other;
        if (result == 0)
          return 0;
        if (dart.notNull(result) > 0)
          return result;
        if (other < 0) {
          return dart.notNull(result) - other;
        } else {
          return dart.notNull(result) + other;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _isInt32, {
      value: function(value) {
        return (value | 0) === value;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['~/'], {
      value: function(other) {
        if (dart.notNull(this[_isInt32](this)) && dart.notNull(this[_isInt32](other)) && 0 != other && -1 != other) {
          return this / other | 0;
        } else {
          return this[_tdivSlow](other);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _tdivSlow, {
      value: function(other) {
        _js_helper.checkNull(other);
        return (this / other)[dartx.toInt]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['<<'], {
      value: function(other) {
        if (dart.notNull(other) < 0)
          dart.throw(new core.ArgumentError(other));
        return this[_shlPositive](other);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _shlPositive, {
      value: function(other) {
        return other > 31 ? 0 : this << other >>> 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['>>'], {
      value: function(other) {
        if (dart.notNull(other) < 0)
          dart.throw(new core.ArgumentError(other));
        return this[_shrOtherPositive](other);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _shrOtherPositive, {
      value: function(other) {
        return this > 0 ? this[_shrBothPositive](other) : this >> (dart.notNull(other) > 31 ? 31 : other) >>> 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _shrBothPositive, {
      value: function(other) {
        return other > 31 ? 0 : this >>> other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['&'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return (this & other) >>> 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['|'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return (this | other) >>> 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['^'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return (this ^ other) >>> 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['<'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this < other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['>'], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this > other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['<='], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this <= other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['>='], {
      value: function(other) {
        _js_helper.checkNull(other);
        return this >= other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.isEven, {
      get: function() {
        return (this & 1) == 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.isOdd, {
      get: function() {
        return (this & 1) == 1;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.toUnsigned, {
      value: function(width) {
        return this & (1 << dart.notNull(width)) - 1;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toSigned, {
      value: function(width) {
        var signMask = 1 << dart.notNull(width) - 1;
        return (this & dart.notNull(signMask) - 1) - (this & dart.notNull(signMask));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.bitLength, {
      get: function() {
        var nonneg = this < 0 ? -this - 1 : this;
        if (dart.notNull(nonneg) >= 4294967296) {
          nonneg = (dart.notNull(nonneg) / 4294967296)[dartx.truncate]();
          return dart.notNull(JSNumber._bitCount(JSNumber._spread(nonneg))) + 32;
        }
        return JSNumber._bitCount(JSNumber._spread(nonneg));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx['~'], {
      value: function() {
        return ~this >>> 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__4), {
      _handleIEtoString: function(result) {
        var match = /^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(result);
        if (match == null) {
          dart.throw(new core.UnsupportedError(("Unexpected toString result: " + result)));
        }
        result = dart.dindex(match, 1);
        var exponent = +dart.dindex(match, 3);
        if (dart.dindex(match, 2) != null) {
          result = result + dart.dindex(match, 2);
          exponent = dart.notNull(exponent) - dart.dindex(match, 2).length;
        }
        return dart.notNull(result) + "0"[dartx['*']](exponent);
      },
      _bitCount: function(i) {
        i = dart.notNull(JSNumber._shru(i, 0)) - (dart.notNull(JSNumber._shru(i, 1)) & 1431655765);
        i = (dart.notNull(i) & 858993459) + (dart.notNull(JSNumber._shru(i, 2)) & 858993459);
        i = 252645135 & dart.notNull(i) + dart.notNull(JSNumber._shru(i, 4));
        i = dart.notNull(i) + dart.notNull(JSNumber._shru(i, 8));
        i = dart.notNull(i) + dart.notNull(JSNumber._shru(i, 16));
        return dart.notNull(i) & 63;
      },
      _shru: function(value, shift) {
        return value >>> shift;
      },
      _shrs: function(value, shift) {
        return value >> shift;
      },
      _ors: function(a, b) {
        return a | b;
      },
      _spread: function(i) {
        i = JSNumber._ors(i, JSNumber._shrs(i, 1));
        i = JSNumber._ors(i, JSNumber._shrs(i, 2));
        i = JSNumber._ors(i, JSNumber._shrs(i, 4));
        i = JSNumber._ors(i, JSNumber._shrs(i, 8));
        i = JSNumber._shru(JSNumber._ors(i, JSNumber._shrs(i, 16)), 0);
        return i;
      }
    }, $__super);
  }(Interceptor);
  JSNumber[dart.implements] = function() {
    return [core.int, core.double];
  };
  dart.setSignature(JSNumber, {
    constructors: function() {
      return ({JSNumber: [JSNumber, []]});
    },
    methods: function() {
      var $__4;
      return (($__4 = {}, Object.defineProperty($__4, dartx.compareTo, {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.remainder, {
        value: [JSNumber, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.abs, {
        value: [JSNumber, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toInt, {
        value: [core.int, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.truncate, {
        value: [core.int, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.ceil, {
        value: [core.int, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.floor, {
        value: [core.int, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.round, {
        value: [core.int, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.ceilToDouble, {
        value: [core.double, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.floorToDouble, {
        value: [core.double, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.roundToDouble, {
        value: [core.double, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.truncateToDouble, {
        value: [core.double, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.clamp, {
        value: [core.num, [core.num, core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toDouble, {
        value: [core.double, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toStringAsFixed, {
        value: [core.String, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toStringAsExponential, {
        value: [core.String, [], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toStringAsPrecision, {
        value: [core.String, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toRadixString, {
        value: [core.String, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['unary-'], {
        value: [JSNumber, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['+'], {
        value: [JSNumber, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['-'], {
        value: [JSNumber, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['/'], {
        value: [core.double, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['*'], {
        value: [JSNumber, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['%'], {
        value: [JSNumber, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _isInt32, {
        value: [core.bool, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['~/'], {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _tdivSlow, {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['<<'], {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _shlPositive, {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['>>'], {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _shrOtherPositive, {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _shrBothPositive, {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['&'], {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['|'], {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['^'], {
        value: [core.int, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['<'], {
        value: [core.bool, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['>'], {
        value: [core.bool, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['<='], {
        value: [core.bool, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['>='], {
        value: [core.bool, [core.num]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toUnsigned, {
        value: [core.int, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toSigned, {
        value: [core.int, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['~'], {
        value: [core.int, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4));
    },
    statics: function() {
      return ({
        _handleIEtoString: [core.String, [core.String]],
        _bitCount: [core.int, [core.int]],
        _shru: [core.int, [core.int, core.int]],
        _shrs: [core.int, [core.int, core.int]],
        _ors: [core.int, [core.int, core.int]],
        _spread: [core.int, [core.int]]
      });
    },
    names: ['_handleIEtoString', '_bitCount', '_shru', '_shrs', '_ors', '_spread']
  });
  JSNumber[dart.metadata] = function() {
    return [dart.const(new _js_helper.JsPeerInterface({name: 'Number'}))];
  };
  dart.registerExtension(dart.global.Number, JSNumber);
  JSNumber._MIN_INT32 = -2147483648;
  JSNumber._MAX_INT32 = 2147483647;
  var _defaultSplit = Symbol('_defaultSplit');
  dart.defineExtensionNames(['codeUnitAt', 'allMatches', 'matchAsPrefix', '+', 'endsWith', 'replaceAll', 'replaceAllMapped', 'splitMapJoin', 'replaceFirst', 'split', 'startsWith', 'substring', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight', '*', 'padLeft', 'padRight', 'codeUnits', 'runes', 'indexOf', 'lastIndexOf', 'contains', 'isEmpty', 'isNotEmpty', 'compareTo', 'toString', 'hashCode', 'runtimeType', 'length', 'get']);
  var JSString = function($__super) {
    var $__4;
    function JSString() {
      $traceurRuntime.superConstructor(JSString).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSString, ($__4 = {}, Object.defineProperty($__4, "JSString", {
      value: function() {
        $traceurRuntime.superGet(this, JSString.prototype, "Interceptor").call(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.codeUnitAt, {
      value: function(index) {
        if (!(typeof index == 'number'))
          dart.throw(new core.ArgumentError(index));
        if (dart.notNull(index) < 0)
          dart.throw(new core.RangeError.value(index));
        if (dart.notNull(index) >= dart.notNull(this[dartx.length]))
          dart.throw(new core.RangeError.value(index));
        return this.charCodeAt(index);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.allMatches, {
      value: function(string, start) {
        if (start === void 0)
          start = 0;
        _js_helper.checkString(string);
        _js_helper.checkInt(start);
        if (0 > dart.notNull(start) || dart.notNull(start) > dart.notNull(string[dartx.length])) {
          dart.throw(new core.RangeError.range(start, 0, string[dartx.length]));
        }
        return _js_helper.allMatchesInStringUnchecked(this, string, start);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.matchAsPrefix, {
      value: function(string, start) {
        if (start === void 0)
          start = 0;
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(string[dartx.length])) {
          dart.throw(new core.RangeError.range(start, 0, string[dartx.length]));
        }
        if (dart.notNull(start) + dart.notNull(this[dartx.length]) > dart.notNull(string[dartx.length]))
          return null;
        for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
          if (string[dartx.codeUnitAt](dart.notNull(start) + dart.notNull(i)) != this[dartx.codeUnitAt](i)) {
            return null;
          }
        }
        return new _js_helper.StringMatch(start, string, this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['+'], {
      value: function(other) {
        if (!(typeof other == 'string'))
          dart.throw(new core.ArgumentError(other));
        return this + other;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.endsWith, {
      value: function(other) {
        _js_helper.checkString(other);
        var otherLength = other[dartx.length];
        if (dart.notNull(otherLength) > dart.notNull(this[dartx.length]))
          return false;
        return other == this[dartx.substring](dart.notNull(this[dartx.length]) - dart.notNull(otherLength));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.replaceAll, {
      value: function(from, to) {
        _js_helper.checkString(to);
        return dart.as(_js_helper.stringReplaceAllUnchecked(this, from, to), core.String);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.replaceAllMapped, {
      value: function(from, convert) {
        return this[dartx.splitMapJoin](from, {onMatch: convert});
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.splitMapJoin, {
      value: function(from, opts) {
        var onMatch = opts && 'onMatch' in opts ? opts.onMatch : null;
        var onNonMatch = opts && 'onNonMatch' in opts ? opts.onNonMatch : null;
        return dart.as(_js_helper.stringReplaceAllFuncUnchecked(this, from, onMatch, onNonMatch), core.String);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.replaceFirst, {
      value: function(from, to, startIndex) {
        if (startIndex === void 0)
          startIndex = 0;
        _js_helper.checkString(to);
        _js_helper.checkInt(startIndex);
        if (dart.notNull(startIndex) < 0 || dart.notNull(startIndex) > dart.notNull(this[dartx.length])) {
          dart.throw(new core.RangeError.range(startIndex, 0, this[dartx.length]));
        }
        return dart.as(_js_helper.stringReplaceFirstUnchecked(this, from, to, startIndex), core.String);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.split, {
      value: function(pattern) {
        _js_helper.checkNull(pattern);
        if (typeof pattern == 'string') {
          return dart.as(this.split(pattern), core.List$(core.String));
        } else if (dart.is(pattern, _js_helper.JSSyntaxRegExp) && _js_helper.regExpCaptureCount(pattern) == 0) {
          var re = _js_helper.regExpGetNative(pattern);
          return dart.as(this.split(re), core.List$(core.String));
        } else {
          return this[_defaultSplit](pattern);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _defaultSplit, {
      value: function(pattern) {
        var result = dart.list([], core.String);
        var start = 0;
        var length = 1;
        var $__8 = true;
        var $__9 = false;
        var $__10 = undefined;
        try {
          for (var $__6 = void 0,
              $__5 = (pattern[dartx.allMatches](this))[Symbol.iterator](); !($__8 = ($__6 = $__5.next()).done); $__8 = true) {
            var match = $__6.value;
            {
              var matchStart = match.start;
              var matchEnd = match.end;
              length = dart.notNull(matchEnd) - dart.notNull(matchStart);
              if (length == 0 && start == matchStart) {
                continue;
              }
              var end = matchStart;
              result[dartx.add](this[dartx.substring](start, end));
              start = matchEnd;
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
        if (dart.notNull(start) < dart.notNull(this[dartx.length]) || dart.notNull(length) > 0) {
          result[dartx.add](this[dartx.substring](start));
        }
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.startsWith, {
      value: function(pattern, index) {
        if (index === void 0)
          index = 0;
        _js_helper.checkInt(index);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[dartx.length])) {
          dart.throw(new core.RangeError.range(index, 0, this[dartx.length]));
        }
        if (typeof pattern == 'string') {
          var other = pattern;
          var otherLength = other[dartx.length];
          var endIndex = dart.notNull(index) + dart.notNull(otherLength);
          if (dart.notNull(endIndex) > dart.notNull(this[dartx.length]))
            return false;
          return other == this.substring(index, endIndex);
        }
        return pattern[dartx.matchAsPrefix](this, index) != null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.substring, {
      value: function(startIndex, endIndex) {
        if (endIndex === void 0)
          endIndex = null;
        _js_helper.checkInt(startIndex);
        if (endIndex == null)
          endIndex = this[dartx.length];
        _js_helper.checkInt(endIndex);
        if (dart.notNull(startIndex) < 0)
          dart.throw(new core.RangeError.value(startIndex));
        if (dart.notNull(startIndex) > dart.notNull(endIndex))
          dart.throw(new core.RangeError.value(startIndex));
        if (dart.notNull(endIndex) > dart.notNull(this[dartx.length]))
          dart.throw(new core.RangeError.value(endIndex));
        return this.substring(startIndex, endIndex);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toLowerCase, {
      value: function() {
        return this.toLowerCase();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.toUpperCase, {
      value: function() {
        return this.toUpperCase();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.trim, {
      value: function() {
        var NEL = 133;
        var result = this.trim();
        if (result[dartx.length] == 0)
          return result;
        var firstCode = result[dartx.codeUnitAt](0);
        var startIndex = 0;
        if (firstCode == NEL) {
          startIndex = JSString._skipLeadingWhitespace(result, 1);
          if (startIndex == result[dartx.length])
            return "";
        }
        var endIndex = result[dartx.length];
        var lastCode = result[dartx.codeUnitAt](dart.notNull(endIndex) - 1);
        if (lastCode == NEL) {
          endIndex = JSString._skipTrailingWhitespace(result, dart.notNull(endIndex) - 1);
        }
        if (startIndex == 0 && endIndex == result[dartx.length])
          return result;
        return result.substring(startIndex, endIndex);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.trimLeft, {
      value: function() {
        var NEL = 133;
        var result = null;
        var startIndex = 0;
        if (typeof this.trimLeft != "undefined") {
          result = this.trimLeft();
          if (result[dartx.length] == 0)
            return result;
          var firstCode = result[dartx.codeUnitAt](0);
          if (firstCode == NEL) {
            startIndex = JSString._skipLeadingWhitespace(result, 1);
          }
        } else {
          result = this;
          startIndex = JSString._skipLeadingWhitespace(this, 0);
        }
        if (startIndex == 0)
          return result;
        if (startIndex == result[dartx.length])
          return "";
        return result.substring(startIndex);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.trimRight, {
      value: function() {
        var NEL = 133;
        var result = null;
        var endIndex = null;
        if (typeof this.trimRight != "undefined") {
          result = this.trimRight();
          endIndex = result[dartx.length];
          if (endIndex == 0)
            return result;
          var lastCode = result[dartx.codeUnitAt](dart.notNull(endIndex) - 1);
          if (lastCode == NEL) {
            endIndex = JSString._skipTrailingWhitespace(result, dart.notNull(endIndex) - 1);
          }
        } else {
          result = this;
          endIndex = JSString._skipTrailingWhitespace(this, this[dartx.length]);
        }
        if (endIndex == result[dartx.length])
          return result;
        if (endIndex == 0)
          return "";
        return result.substring(0, endIndex);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx['*'], {
      value: function(times) {
        if (0 >= dart.notNull(times))
          return '';
        if (times == 1 || this[dartx.length] == 0)
          return this;
        if (times != times >>> 0) {
          dart.throw(dart.const(new core.OutOfMemoryError()));
        }
        var result = '';
        var s = this;
        while (true) {
          if ((dart.notNull(times) & 1) == 1)
            result = dart.notNull(s) + dart.notNull(result);
          times = times >>> 1;
          if (times == 0)
            break;
          s = dart.notNull(s) + dart.notNull(s);
        }
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.padLeft, {
      value: function(width, padding) {
        if (padding === void 0)
          padding = ' ';
        var delta = dart.notNull(width) - dart.notNull(this[dartx.length]);
        if (dart.notNull(delta) <= 0)
          return this;
        return padding[dartx['*']](delta) + this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.padRight, {
      value: function(width, padding) {
        if (padding === void 0)
          padding = ' ';
        var delta = dart.notNull(width) - dart.notNull(this[dartx.length]);
        if (dart.notNull(delta) <= 0)
          return this;
        return this[dartx['+']](padding[dartx['*']](delta));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.codeUnits, {
      get: function() {
        return new _CodeUnits(this);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.runes, {
      get: function() {
        return new core.Runes(this);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.indexOf, {
      value: function(pattern, start) {
        if (start === void 0)
          start = 0;
        _js_helper.checkNull(pattern);
        if (!(typeof start == 'number'))
          dart.throw(new core.ArgumentError(start));
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this[dartx.length])) {
          dart.throw(new core.RangeError.range(start, 0, this[dartx.length]));
        }
        if (typeof pattern == 'string') {
          return this.indexOf(pattern, start);
        }
        if (dart.is(pattern, _js_helper.JSSyntaxRegExp)) {
          var re = pattern;
          var match = _js_helper.firstMatchAfter(re, this, start);
          return match == null ? -1 : match.start;
        }
        for (var i = start; dart.notNull(i) <= dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
          if (pattern[dartx.matchAsPrefix](this, i) != null)
            return i;
        }
        return -1;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.lastIndexOf, {
      value: function(pattern, start) {
        if (start === void 0)
          start = null;
        _js_helper.checkNull(pattern);
        if (start == null) {
          start = this[dartx.length];
        } else if (!(typeof start == 'number')) {
          dart.throw(new core.ArgumentError(start));
        } else if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this[dartx.length])) {
          dart.throw(new core.RangeError.range(start, 0, this[dartx.length]));
        }
        if (typeof pattern == 'string') {
          var other = pattern;
          if (dart.notNull(start) + dart.notNull(other[dartx.length]) > dart.notNull(this[dartx.length])) {
            start = dart.notNull(this[dartx.length]) - dart.notNull(other[dartx.length]);
          }
          return dart.as(_js_helper.stringLastIndexOfUnchecked(this, other, start), core.int);
        }
        for (var i = start; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
          if (pattern[dartx.matchAsPrefix](this, i) != null)
            return i;
        }
        return -1;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.contains, {
      value: function(other, startIndex) {
        if (startIndex === void 0)
          startIndex = 0;
        _js_helper.checkNull(other);
        if (dart.notNull(startIndex) < 0 || dart.notNull(startIndex) > dart.notNull(this[dartx.length])) {
          dart.throw(new core.RangeError.range(startIndex, 0, this[dartx.length]));
        }
        return dart.as(_js_helper.stringContainsUnchecked(this, other, startIndex), core.bool);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, dartx.isEmpty, {
      get: function() {
        return this[dartx.length] == 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.isNotEmpty, {
      get: function() {
        return !dart.notNull(this[dartx.isEmpty]);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.compareTo, {
      value: function(other) {
        if (!(typeof other == 'string'))
          dart.throw(new core.ArgumentError(other));
        return dart.equals(this, other) ? 0 : this < other ? -1 : 1;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "toString", {
      value: function() {
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "hashCode", {
      get: function() {
        var hash = 0;
        for (var i = 0; dart.notNull(i) < dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
          hash = 536870911 & dart.notNull(hash) + this.charCodeAt(i);
          hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
          hash = hash ^ hash >> 6;
        }
        hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
        hash = hash ^ hash >> 11;
        return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, "runtimeType", {
      get: function() {
        return core.String;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.length, {
      get: function() {
        return this.length;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__4, dartx.get, {
      value: function(index) {
        if (!(typeof index == 'number'))
          dart.throw(new core.ArgumentError(index));
        if (dart.notNull(index) >= dart.notNull(this[dartx.length]) || dart.notNull(index) < 0)
          dart.throw(new core.RangeError.value(index));
        return this[index];
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__4), {
      _isWhitespace: function(codeUnit) {
        if (dart.notNull(codeUnit) < 256) {
          switch (codeUnit) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 133:
            case 160:
              {
                return true;
              }
            default:
              {
                return false;
              }
          }
        }
        switch (codeUnit) {
          case 5760:
          case 6158:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8232:
          case 8233:
          case 8239:
          case 8287:
          case 12288:
          case 65279:
            {
              return true;
            }
          default:
            {
              return false;
            }
        }
      },
      _skipLeadingWhitespace: function(string, index) {
        var SPACE = 32;
        var CARRIAGE_RETURN = 13;
        while (dart.notNull(index) < dart.notNull(string[dartx.length])) {
          var codeUnit = string[dartx.codeUnitAt](index);
          if (codeUnit != SPACE && codeUnit != CARRIAGE_RETURN && !dart.notNull(JSString._isWhitespace(codeUnit))) {
            break;
          }
          index = dart.notNull(index) + 1;
        }
        return index;
      },
      _skipTrailingWhitespace: function(string, index) {
        var SPACE = 32;
        var CARRIAGE_RETURN = 13;
        while (dart.notNull(index) > 0) {
          var codeUnit = string[dartx.codeUnitAt](dart.notNull(index) - 1);
          if (codeUnit != SPACE && codeUnit != CARRIAGE_RETURN && !dart.notNull(JSString._isWhitespace(codeUnit))) {
            break;
          }
          index = dart.notNull(index) - 1;
        }
        return index;
      }
    }, $__super);
  }(Interceptor);
  JSString[dart.implements] = function() {
    return [core.String, JSIndexable];
  };
  dart.setSignature(JSString, {
    constructors: function() {
      return ({JSString: [JSString, []]});
    },
    methods: function() {
      var $__4;
      return (($__4 = {}, Object.defineProperty($__4, dartx.codeUnitAt, {
        value: [core.int, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.allMatches, {
        value: [core.Iterable$(core.Match), [core.String], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.matchAsPrefix, {
        value: [core.Match, [core.String], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['+'], {
        value: [core.String, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.endsWith, {
        value: [core.bool, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.replaceAll, {
        value: [core.String, [core.Pattern, core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.replaceAllMapped, {
        value: [core.String, [core.Pattern, dart.functionType(core.String, [core.Match])]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.splitMapJoin, {
        value: [core.String, [core.Pattern], {
          onMatch: dart.functionType(core.String, [core.Match]),
          onNonMatch: dart.functionType(core.String, [core.String])
        }],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.replaceFirst, {
        value: [core.String, [core.Pattern, core.String], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.split, {
        value: [core.List$(core.String), [core.Pattern]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, _defaultSplit, {
        value: [core.List$(core.String), [core.Pattern]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.startsWith, {
        value: [core.bool, [core.Pattern], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.substring, {
        value: [core.String, [core.int], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toLowerCase, {
        value: [core.String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.toUpperCase, {
        value: [core.String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.trim, {
        value: [core.String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.trimLeft, {
        value: [core.String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.trimRight, {
        value: [core.String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx['*'], {
        value: [core.String, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.padLeft, {
        value: [core.String, [core.int], [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.padRight, {
        value: [core.String, [core.int], [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.indexOf, {
        value: [core.int, [core.Pattern], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.lastIndexOf, {
        value: [core.int, [core.Pattern], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.contains, {
        value: [core.bool, [core.Pattern], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.compareTo, {
        value: [core.int, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, dartx.get, {
        value: [core.String, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4));
    },
    statics: function() {
      return ({
        _isWhitespace: [core.bool, [core.int]],
        _skipLeadingWhitespace: [core.int, [core.String, core.int]],
        _skipTrailingWhitespace: [core.int, [core.String, core.int]]
      });
    },
    names: ['_isWhitespace', '_skipLeadingWhitespace', '_skipTrailingWhitespace']
  });
  JSString[dart.metadata] = function() {
    return [dart.const(new _js_helper.JsPeerInterface({name: 'String'}))];
  };
  dart.registerExtension(dart.global.String, JSString);
  var _string = Symbol('_string');
  var _CodeUnits = function($__super) {
    function _CodeUnits() {
      $traceurRuntime.superConstructor(_CodeUnits).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_CodeUnits, {
      _CodeUnits: function(string) {
        this[_string] = string;
      },
      get length() {
        return this[_string][dartx.length];
      },
      get: function(i) {
        return this[_string][dartx.codeUnitAt](i);
      }
    }, {}, $__super);
  }(_internal.UnmodifiableListBase$(core.int));
  dart.setSignature(_CodeUnits, {
    constructors: function() {
      return ({_CodeUnits: [_CodeUnits, [core.String]]});
    },
    methods: function() {
      return ({get: [core.int, [core.int]]});
    }
  });
  dart.defineExtensionMembers(_CodeUnits, ['get', 'length']);
  function getInterceptor(obj) {
    return obj;
  }
  dart.fn(getInterceptor);
  dart.defineExtensionNames(['toString', 'hashCode', 'runtimeType']);
  var JSBool = function($__super) {
    function JSBool() {
      $traceurRuntime.superConstructor(JSBool).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSBool, {
      JSBool: function() {
        $traceurRuntime.superGet(this, JSBool.prototype, "Interceptor").call(this);
      },
      toString: function() {
        return String(this);
      },
      get hashCode() {
        return this ? 2 * 3 * 23 * 3761 : 269 * 811;
      },
      get runtimeType() {
        return core.bool;
      }
    }, {}, $__super);
  }(Interceptor);
  JSBool[dart.implements] = function() {
    return [core.bool];
  };
  dart.setSignature(JSBool, {constructors: function() {
      return ({JSBool: [JSBool, []]});
    }});
  JSBool[dart.metadata] = function() {
    return [dart.const(new _js_helper.JsPeerInterface({name: 'Boolean'}))];
  };
  dart.registerExtension(dart.global.Boolean, JSBool);
  var JSIndexable = function($__super) {
    function JSIndexable() {
      $traceurRuntime.superConstructor(JSIndexable).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSIndexable, {}, {}, $__super);
  }(core.Object);
  var JSMutableIndexable = function($__super) {
    function JSMutableIndexable() {
      $traceurRuntime.superConstructor(JSMutableIndexable).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSMutableIndexable, {}, {}, $__super);
  }(JSIndexable);
  var JSObject = function($__super) {
    function JSObject() {
      $traceurRuntime.superConstructor(JSObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSObject, {}, {}, $__super);
  }(core.Object);
  var JavaScriptObject = function($__super) {
    function JavaScriptObject() {
      $traceurRuntime.superConstructor(JavaScriptObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JavaScriptObject, {
      JavaScriptObject: function() {
        $traceurRuntime.superGet(this, JavaScriptObject.prototype, "Interceptor").call(this);
      },
      get hashCode() {
        return 0;
      },
      get runtimeType() {
        return JSObject;
      }
    }, {}, $__super);
  }(Interceptor);
  JavaScriptObject[dart.implements] = function() {
    return [JSObject];
  };
  dart.setSignature(JavaScriptObject, {constructors: function() {
      return ({JavaScriptObject: [JavaScriptObject, []]});
    }});
  var PlainJavaScriptObject = function($__super) {
    function PlainJavaScriptObject() {
      $traceurRuntime.superConstructor(PlainJavaScriptObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(PlainJavaScriptObject, {PlainJavaScriptObject: function() {
        $traceurRuntime.superGet(this, PlainJavaScriptObject.prototype, "JavaScriptObject").call(this);
      }}, {}, $__super);
  }(JavaScriptObject);
  dart.setSignature(PlainJavaScriptObject, {constructors: function() {
      return ({PlainJavaScriptObject: [PlainJavaScriptObject, []]});
    }});
  var UnknownJavaScriptObject = function($__super) {
    function UnknownJavaScriptObject() {
      $traceurRuntime.superConstructor(UnknownJavaScriptObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(UnknownJavaScriptObject, {
      UnknownJavaScriptObject: function() {
        $traceurRuntime.superGet(this, UnknownJavaScriptObject.prototype, "JavaScriptObject").call(this);
      },
      toString: function() {
        return String(this);
      }
    }, {}, $__super);
  }(JavaScriptObject);
  dart.setSignature(UnknownJavaScriptObject, {constructors: function() {
      return ({UnknownJavaScriptObject: [UnknownJavaScriptObject, []]});
    }});
  exports.JSArray$ = JSArray$;
  exports.JSArray = JSArray;
  exports.JSMutableArray$ = JSMutableArray$;
  exports.JSMutableArray = JSMutableArray;
  exports.JSFixedArray$ = JSFixedArray$;
  exports.JSFixedArray = JSFixedArray;
  exports.JSExtendableArray$ = JSExtendableArray$;
  exports.JSExtendableArray = JSExtendableArray;
  exports.Interceptor = Interceptor;
  exports.JSNumber = JSNumber;
  exports.JSString = JSString;
  exports.getInterceptor = getInterceptor;
  exports.JSBool = JSBool;
  exports.JSIndexable = JSIndexable;
  exports.JSMutableIndexable = JSMutableIndexable;
  exports.JSObject = JSObject;
  exports.JavaScriptObject = JavaScriptObject;
  exports.PlainJavaScriptObject = PlainJavaScriptObject;
  exports.UnknownJavaScriptObject = UnknownJavaScriptObject;
});
