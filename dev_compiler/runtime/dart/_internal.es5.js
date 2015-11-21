dart_library.library('dart/_internal', null, ["dart/_runtime", 'dart/core', 'dart/collection'], ['dart/math', 'dart/_interceptors', 'dart/_js_primitives'], function(exports, dart, core, collection, math, _interceptors, _js_primitives) {
  'use strict';
  var dartx = dart.dartx;
  var EfficientLength = function($__super) {
    function EfficientLength() {
      $traceurRuntime.superConstructor(EfficientLength).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(EfficientLength, {}, {}, $__super);
  }(core.Object);
  var ListIterable$ = dart.generic(function(E) {
    var ListIterable = function($__super) {
      function ListIterable() {
        $traceurRuntime.superConstructor(ListIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ListIterable, {
        ListIterable: function() {
          $traceurRuntime.superGet(this, ListIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (ListIterator$(E))(this);
        },
        forEach: function(action) {
          dart.as(action, dart.functionType(dart.void, [E]));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            action(this.elementAt(i));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
        },
        get isEmpty() {
          return this.length == 0;
        },
        get first() {
          if (this.length == 0)
            dart.throw(IterableElementError.noElement());
          return this.elementAt(0);
        },
        get last() {
          if (this.length == 0)
            dart.throw(IterableElementError.noElement());
          return this.elementAt(dart.notNull(this.length) - 1);
        },
        get single() {
          if (this.length == 0)
            dart.throw(IterableElementError.noElement());
          if (dart.notNull(this.length) > 1)
            dart.throw(IterableElementError.tooMany());
          return this.elementAt(0);
        },
        contains: function(element) {
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (dart.equals(this.elementAt(i), element))
              return true;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return false;
        },
        every: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (!dart.notNull(test(this.elementAt(i))))
              return false;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return true;
        },
        any: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            if (dart.notNull(test(this.elementAt(i))))
              return true;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return false;
        },
        firstWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var element = this.elementAt(i);
            if (dart.notNull(test(element)))
              return element;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        lastWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          var length = this.length;
          for (var i = dart.notNull(length) - 1; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
            var element = this.elementAt(i);
            if (dart.notNull(test(element)))
              return element;
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        singleWhere: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var length = this.length;
          var match = null;
          var matchFound = false;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var element = this.elementAt(i);
            if (dart.notNull(test(element))) {
              if (dart.notNull(matchFound)) {
                dart.throw(IterableElementError.tooMany());
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
          dart.throw(IterableElementError.noElement());
        },
        join: function(separator) {
          if (separator === void 0)
            separator = "";
          var length = this.length;
          if (!dart.notNull(separator[dartx.isEmpty])) {
            if (length == 0)
              return "";
            var first = ("" + this.elementAt(0));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
            var buffer = new core.StringBuffer(first);
            for (var i = 1; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
              buffer.write(separator);
              buffer.write(this.elementAt(i));
              if (length != this.length) {
                dart.throw(new core.ConcurrentModificationError(this));
              }
            }
            return dart.toString(buffer);
          } else {
            var buffer$__14 = new core.StringBuffer();
            for (var i$__15 = 0; dart.notNull(i$__15) < dart.notNull(length); i$__15 = dart.notNull(i$__15) + 1) {
              buffer$__14.write(this.elementAt(i$__15));
              if (length != this.length) {
                dart.throw(new core.ConcurrentModificationError(this));
              }
            }
            return dart.toString(buffer$__14);
          }
        },
        where: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return $traceurRuntime.superGet(this, ListIterable.prototype, "where").call(this, test);
        },
        map: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return new MappedListIterable(this, f);
        },
        reduce: function(combine) {
          dart.as(combine, dart.functionType(E, [dart.dynamic, E]));
          var length = this.length;
          if (length == 0)
            dart.throw(IterableElementError.noElement());
          var value = this.elementAt(0);
          for (var i = 1; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            value = dart.dcall(combine, value, this.elementAt(i));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return value;
        },
        fold: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          var value = initialValue;
          var length = this.length;
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            value = dart.dcall(combine, value, this.elementAt(i));
            if (length != this.length) {
              dart.throw(new core.ConcurrentModificationError(this));
            }
          }
          return value;
        },
        skip: function(count) {
          return new (SubListIterable$(E))(this, count, null);
        },
        skipWhile: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return $traceurRuntime.superGet(this, ListIterable.prototype, "skipWhile").call(this, test);
        },
        take: function(count) {
          return new (SubListIterable$(E))(this, 0, count);
        },
        takeWhile: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return $traceurRuntime.superGet(this, ListIterable.prototype, "takeWhile").call(this, test);
        },
        toList: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var result = null;
          if (dart.notNull(growable)) {
            result = core.List$(E).new();
            result[dartx.length] = this.length;
          } else {
            result = core.List$(E).new(this.length);
          }
          for (var i = 0; dart.notNull(i) < dart.notNull(this.length); i = dart.notNull(i) + 1) {
            result[dartx.set](i, this.elementAt(i));
          }
          return result;
        },
        toSet: function() {
          var result = core.Set$(E).new();
          for (var i = 0; dart.notNull(i) < dart.notNull(this.length); i = dart.notNull(i) + 1) {
            result.add(this.elementAt(i));
          }
          return result;
        }
      }, {}, $__super);
    }(collection.IterableBase$(E));
    ListIterable[dart.implements] = function() {
      return [EfficientLength];
    };
    dart.setSignature(ListIterable, {
      constructors: function() {
        return ({ListIterable: [ListIterable$(E), []]});
      },
      methods: function() {
        return ({
          forEach: [dart.void, [dart.functionType(dart.void, [E])]],
          every: [core.bool, [dart.functionType(core.bool, [E])]],
          any: [core.bool, [dart.functionType(core.bool, [E])]],
          firstWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          lastWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          singleWhere: [E, [dart.functionType(core.bool, [E])]],
          where: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          reduce: [E, [dart.functionType(E, [dart.dynamic, E])]],
          fold: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          skip: [core.Iterable$(E), [core.int]],
          skipWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          take: [core.Iterable$(E), [core.int]],
          takeWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          toList: [core.List$(E), [], {growable: core.bool}],
          toSet: [core.Set$(E), []]
        });
      }
    });
    dart.defineExtensionMembers(ListIterable, ['forEach', 'contains', 'every', 'any', 'firstWhere', 'lastWhere', 'singleWhere', 'join', 'where', 'map', 'reduce', 'fold', 'skip', 'skipWhile', 'take', 'takeWhile', 'toList', 'toSet', 'iterator', 'isEmpty', 'first', 'last', 'single']);
    return ListIterable;
  });
  var ListIterable = ListIterable$();
  var _iterable = dart.JsSymbol('_iterable');
  var _start = dart.JsSymbol('_start');
  var _endOrLength = dart.JsSymbol('_endOrLength');
  var _endIndex = dart.JsSymbol('_endIndex');
  var _startIndex = dart.JsSymbol('_startIndex');
  var SubListIterable$ = dart.generic(function(E) {
    var SubListIterable = function($__super) {
      var $__5;
      function SubListIterable() {
        $traceurRuntime.superConstructor(SubListIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SubListIterable, ($__5 = {}, Object.defineProperty($__5, "SubListIterable", {
        value: function(iterable, start, endOrLength) {
          this[_iterable] = iterable;
          this[_start] = start;
          this[_endOrLength] = endOrLength;
          $traceurRuntime.superGet(this, SubListIterable.prototype, "ListIterable").call(this);
          core.RangeError.checkNotNegative(this[_start], "start");
          if (this[_endOrLength] != null) {
            core.RangeError.checkNotNegative(this[_endOrLength], "end");
            if (dart.notNull(this[_start]) > dart.notNull(this[_endOrLength])) {
              dart.throw(new core.RangeError.range(this[_start], 0, this[_endOrLength], "start"));
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _endIndex, {
        get: function() {
          var length = this[_iterable][dartx.length];
          if (this[_endOrLength] == null || dart.notNull(this[_endOrLength]) > dart.notNull(length))
            return length;
          return this[_endOrLength];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _startIndex, {
        get: function() {
          var length = this[_iterable][dartx.length];
          if (dart.notNull(this[_start]) > dart.notNull(length))
            return length;
          return this[_start];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "length", {
        get: function() {
          var length = this[_iterable][dartx.length];
          if (dart.notNull(this[_start]) >= dart.notNull(length))
            return 0;
          if (this[_endOrLength] == null || dart.notNull(this[_endOrLength]) >= dart.notNull(length)) {
            return dart.notNull(length) - dart.notNull(this[_start]);
          }
          return dart.notNull(this[_endOrLength]) - dart.notNull(this[_start]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "elementAt", {
        value: function(index) {
          var realIndex = dart.notNull(this[_startIndex]) + dart.notNull(index);
          if (dart.notNull(index) < 0 || dart.notNull(realIndex) >= dart.notNull(this[_endIndex])) {
            dart.throw(core.RangeError.index(index, this, "index"));
          }
          return this[_iterable][dartx.elementAt](realIndex);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "skip", {
        value: function(count) {
          core.RangeError.checkNotNegative(count, "count");
          var newStart = dart.notNull(this[_start]) + dart.notNull(count);
          if (this[_endOrLength] != null && dart.notNull(newStart) >= dart.notNull(this[_endOrLength])) {
            return new (EmptyIterable$(E))();
          }
          return new (SubListIterable$(E))(this[_iterable], newStart, this[_endOrLength]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "take", {
        value: function(count) {
          core.RangeError.checkNotNegative(count, "count");
          if (this[_endOrLength] == null) {
            return new (SubListIterable$(E))(this[_iterable], this[_start], dart.notNull(this[_start]) + dart.notNull(count));
          } else {
            var newEnd = dart.notNull(this[_start]) + dart.notNull(count);
            if (dart.notNull(this[_endOrLength]) < dart.notNull(newEnd))
              return this;
            return new (SubListIterable$(E))(this[_iterable], this[_start], newEnd);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "toList", {
        value: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var start = this[_start];
          var end = this[_iterable][dartx.length];
          if (this[_endOrLength] != null && dart.notNull(this[_endOrLength]) < dart.notNull(end))
            end = this[_endOrLength];
          var length = dart.notNull(end) - dart.notNull(start);
          if (dart.notNull(length) < 0)
            length = 0;
          var result = dart.notNull(growable) ? (function() {
            var _ = core.List$(E).new();
            _[dartx.length] = length;
            return _;
          })() : core.List$(E).new(length);
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            result[dartx.set](i, this[_iterable][dartx.elementAt](dart.notNull(start) + dart.notNull(i)));
            if (dart.notNull(this[_iterable][dartx.length]) < dart.notNull(end))
              dart.throw(new core.ConcurrentModificationError(this));
          }
          return dart.as(result, core.List$(E));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(ListIterable$(E));
    dart.setSignature(SubListIterable, {
      constructors: function() {
        return ({SubListIterable: [SubListIterable$(E), [core.Iterable$(E), core.int, core.int]]});
      },
      methods: function() {
        return ({
          elementAt: [E, [core.int]],
          skip: [core.Iterable$(E), [core.int]],
          take: [core.Iterable$(E), [core.int]],
          toList: [core.List$(E), [], {growable: core.bool}]
        });
      }
    });
    dart.defineExtensionMembers(SubListIterable, ['elementAt', 'skip', 'take', 'toList', 'length']);
    return SubListIterable;
  });
  var SubListIterable = SubListIterable$();
  var _length = dart.JsSymbol('_length');
  var _index = dart.JsSymbol('_index');
  var _current = dart.JsSymbol('_current');
  var ListIterator$ = dart.generic(function(E) {
    var ListIterator = function($__super) {
      function ListIterator() {
        $traceurRuntime.superConstructor(ListIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ListIterator, {
        ListIterator: function(iterable) {
          this[_iterable] = iterable;
          this[_length] = iterable[dartx.length];
          this[_index] = 0;
          this[_current] = null;
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          var length = this[_iterable][dartx.length];
          if (this[_length] != length) {
            dart.throw(new core.ConcurrentModificationError(this[_iterable]));
          }
          if (dart.notNull(this[_index]) >= dart.notNull(length)) {
            this[_current] = null;
            return false;
          }
          this[_current] = this[_iterable][dartx.elementAt](this[_index]);
          this[_index] = dart.notNull(this[_index]) + 1;
          return true;
        }
      }, {}, $__super);
    }(core.Object);
    ListIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(ListIterator, {
      constructors: function() {
        return ({ListIterator: [ListIterator$(E), [core.Iterable$(E)]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return ListIterator;
  });
  var ListIterator = ListIterator$();
  var _Transformation$ = dart.generic(function(S, T) {
    var _Transformation = dart.typedef('_Transformation', function() {
      return dart.functionType(T, [S]);
    });
    return _Transformation;
  });
  var _Transformation = _Transformation$();
  var _f = dart.JsSymbol('_f');
  var MappedIterable$ = dart.generic(function(S, T) {
    var MappedIterable = function($__super) {
      function MappedIterable() {
        $traceurRuntime.superConstructor(MappedIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MappedIterable, {
        _: function(iterable, f) {
          this[_iterable] = iterable;
          this[_f] = f;
          $traceurRuntime.superGet(this, MappedIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (MappedIterator$(S, T))(this[_iterable][dartx.iterator], this[_f]);
        },
        get length() {
          return this[_iterable][dartx.length];
        },
        get isEmpty() {
          return this[_iterable][dartx.isEmpty];
        },
        get first() {
          return this[_f](this[_iterable][dartx.first]);
        },
        get last() {
          return this[_f](this[_iterable][dartx.last]);
        },
        get single() {
          return this[_f](this[_iterable][dartx.single]);
        },
        elementAt: function(index) {
          return this[_f](this[_iterable][dartx.elementAt](index));
        }
      }, {new: function(iterable, func) {
          if (dart.is(iterable, EfficientLength)) {
            return new (EfficientLengthMappedIterable$(S, T))(iterable, func);
          }
          return new (MappedIterable$(S, T))._(dart.as(iterable, core.Iterable$(S)), func);
        }}, $__super);
    }(collection.IterableBase$(T));
    dart.defineNamedConstructor(MappedIterable, '_');
    dart.setSignature(MappedIterable, {
      constructors: function() {
        return ({
          new: [MappedIterable$(S, T), [core.Iterable, dart.functionType(T, [S])]],
          _: [MappedIterable$(S, T), [core.Iterable$(S), dart.functionType(T, [S])]]
        });
      },
      methods: function() {
        return ({elementAt: [T, [core.int]]});
      }
    });
    dart.defineExtensionMembers(MappedIterable, ['elementAt', 'iterator', 'length', 'isEmpty', 'first', 'last', 'single']);
    return MappedIterable;
  });
  var MappedIterable = MappedIterable$();
  var EfficientLengthMappedIterable$ = dart.generic(function(S, T) {
    var EfficientLengthMappedIterable = function($__super) {
      function EfficientLengthMappedIterable() {
        $traceurRuntime.superConstructor(EfficientLengthMappedIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(EfficientLengthMappedIterable, {EfficientLengthMappedIterable: function(iterable, func) {
          $traceurRuntime.superGet(this, EfficientLengthMappedIterable.prototype, "_").call(this, dart.as(iterable, core.Iterable$(S)), func);
        }}, {}, $__super);
    }(MappedIterable$(S, T));
    EfficientLengthMappedIterable[dart.implements] = function() {
      return [EfficientLength];
    };
    dart.setSignature(EfficientLengthMappedIterable, {constructors: function() {
        return ({EfficientLengthMappedIterable: [EfficientLengthMappedIterable$(S, T), [core.Iterable, dart.functionType(T, [S])]]});
      }});
    return EfficientLengthMappedIterable;
  });
  var EfficientLengthMappedIterable = EfficientLengthMappedIterable$();
  var _iterator = dart.JsSymbol('_iterator');
  var MappedIterator$ = dart.generic(function(S, T) {
    var MappedIterator = function($__super) {
      function MappedIterator() {
        $traceurRuntime.superConstructor(MappedIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MappedIterator, {
        MappedIterator: function(iterator, f) {
          this[_iterator] = iterator;
          this[_f] = f;
          this[_current] = null;
        },
        moveNext: function() {
          if (dart.notNull(this[_iterator].moveNext())) {
            this[_current] = this[_f](this[_iterator].current);
            return true;
          }
          this[_current] = null;
          return false;
        },
        get current() {
          return this[_current];
        }
      }, {}, $__super);
    }(core.Iterator$(T));
    dart.setSignature(MappedIterator, {
      constructors: function() {
        return ({MappedIterator: [MappedIterator$(S, T), [core.Iterator$(S), dart.functionType(T, [S])]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return MappedIterator;
  });
  var MappedIterator = MappedIterator$();
  var _source = dart.JsSymbol('_source');
  var MappedListIterable$ = dart.generic(function(S, T) {
    var MappedListIterable = function($__super) {
      function MappedListIterable() {
        $traceurRuntime.superConstructor(MappedListIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MappedListIterable, {
        MappedListIterable: function(source, f) {
          this[_source] = source;
          this[_f] = f;
          $traceurRuntime.superGet(this, MappedListIterable.prototype, "ListIterable").call(this);
        },
        get length() {
          return this[_source][dartx.length];
        },
        elementAt: function(index) {
          return this[_f](this[_source][dartx.elementAt](index));
        }
      }, {}, $__super);
    }(ListIterable$(T));
    MappedListIterable[dart.implements] = function() {
      return [EfficientLength];
    };
    dart.setSignature(MappedListIterable, {
      constructors: function() {
        return ({MappedListIterable: [MappedListIterable$(S, T), [core.Iterable$(S), dart.functionType(T, [S])]]});
      },
      methods: function() {
        return ({elementAt: [T, [core.int]]});
      }
    });
    dart.defineExtensionMembers(MappedListIterable, ['elementAt', 'length']);
    return MappedListIterable;
  });
  var MappedListIterable = MappedListIterable$();
  var _ElementPredicate$ = dart.generic(function(E) {
    var _ElementPredicate = dart.typedef('_ElementPredicate', function() {
      return dart.functionType(core.bool, [E]);
    });
    return _ElementPredicate;
  });
  var _ElementPredicate = _ElementPredicate$();
  var WhereIterable$ = dart.generic(function(E) {
    var WhereIterable = function($__super) {
      function WhereIterable() {
        $traceurRuntime.superConstructor(WhereIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(WhereIterable, {
        WhereIterable: function(iterable, f) {
          this[_iterable] = iterable;
          this[_f] = f;
          $traceurRuntime.superGet(this, WhereIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (WhereIterator$(E))(this[_iterable][dartx.iterator], this[_f]);
        }
      }, {}, $__super);
    }(collection.IterableBase$(E));
    dart.setSignature(WhereIterable, {constructors: function() {
        return ({WhereIterable: [WhereIterable$(E), [core.Iterable$(E), dart.functionType(core.bool, [E])]]});
      }});
    dart.defineExtensionMembers(WhereIterable, ['iterator']);
    return WhereIterable;
  });
  var WhereIterable = WhereIterable$();
  var WhereIterator$ = dart.generic(function(E) {
    var WhereIterator = function($__super) {
      function WhereIterator() {
        $traceurRuntime.superConstructor(WhereIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(WhereIterator, {
        WhereIterator: function(iterator, f) {
          this[_iterator] = iterator;
          this[_f] = f;
        },
        moveNext: function() {
          while (dart.notNull(this[_iterator].moveNext())) {
            if (dart.notNull(this[_f](this[_iterator].current))) {
              return true;
            }
          }
          return false;
        },
        get current() {
          return this[_iterator].current;
        }
      }, {}, $__super);
    }(core.Iterator$(E));
    dart.setSignature(WhereIterator, {
      constructors: function() {
        return ({WhereIterator: [WhereIterator$(E), [core.Iterator$(E), dart.functionType(core.bool, [E])]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return WhereIterator;
  });
  var WhereIterator = WhereIterator$();
  var _ExpandFunction$ = dart.generic(function(S, T) {
    var _ExpandFunction = dart.typedef('_ExpandFunction', function() {
      return dart.functionType(core.Iterable$(T), [S]);
    });
    return _ExpandFunction;
  });
  var _ExpandFunction = _ExpandFunction$();
  var ExpandIterable$ = dart.generic(function(S, T) {
    var ExpandIterable = function($__super) {
      function ExpandIterable() {
        $traceurRuntime.superConstructor(ExpandIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ExpandIterable, {
        ExpandIterable: function(iterable, f) {
          this[_iterable] = iterable;
          this[_f] = f;
          $traceurRuntime.superGet(this, ExpandIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (ExpandIterator$(S, T))(this[_iterable][dartx.iterator], dart.as(this[_f], __CastType0));
        }
      }, {}, $__super);
    }(collection.IterableBase$(T));
    dart.setSignature(ExpandIterable, {constructors: function() {
        return ({ExpandIterable: [ExpandIterable$(S, T), [core.Iterable$(S), dart.functionType(core.Iterable$(T), [S])]]});
      }});
    dart.defineExtensionMembers(ExpandIterable, ['iterator']);
    return ExpandIterable;
  });
  var ExpandIterable = ExpandIterable$();
  var _currentExpansion = dart.JsSymbol('_currentExpansion');
  var _nextExpansion = dart.JsSymbol('_nextExpansion');
  var ExpandIterator$ = dart.generic(function(S, T) {
    var ExpandIterator = function($__super) {
      var $__5;
      function ExpandIterator() {
        $traceurRuntime.superConstructor(ExpandIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ExpandIterator, ($__5 = {}, Object.defineProperty($__5, "ExpandIterator", {
        value: function(iterator, f) {
          this[_iterator] = iterator;
          this[_f] = f;
          this[_currentExpansion] = dart.const(new (EmptyIterator$(T))());
          this[_current] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _nextExpansion, {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "current", {
        get: function() {
          return this[_current];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "moveNext", {
        value: function() {
          if (this[_currentExpansion] == null)
            return false;
          while (!dart.notNull(this[_currentExpansion].moveNext())) {
            this[_current] = null;
            if (dart.notNull(this[_iterator].moveNext())) {
              this[_currentExpansion] = null;
              this[_currentExpansion] = dart.as(dart.dcall(this[_f], this[_iterator].current)[dartx.iterator], core.Iterator$(T));
            } else {
              return false;
            }
          }
          this[_current] = this[_currentExpansion].current;
          return true;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    ExpandIterator[dart.implements] = function() {
      return [core.Iterator$(T)];
    };
    dart.setSignature(ExpandIterator, {
      constructors: function() {
        return ({ExpandIterator: [ExpandIterator$(S, T), [core.Iterator$(S), dart.functionType(core.Iterable$(T), [S])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _nextExpansion, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "moveNext", {
          value: [core.bool, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return ExpandIterator;
  });
  var ExpandIterator = ExpandIterator$();
  var _takeCount = dart.JsSymbol('_takeCount');
  var TakeIterable$ = dart.generic(function(E) {
    var TakeIterable = function($__super) {
      function TakeIterable() {
        $traceurRuntime.superConstructor(TakeIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(TakeIterable, {
        _: function(iterable, takeCount) {
          this[_iterable] = iterable;
          this[_takeCount] = takeCount;
          $traceurRuntime.superGet(this, TakeIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (TakeIterator$(E))(this[_iterable][dartx.iterator], this[_takeCount]);
        }
      }, {new: function(iterable, takeCount) {
          if (!(typeof takeCount == 'number') || dart.notNull(takeCount) < 0) {
            dart.throw(new core.ArgumentError(takeCount));
          }
          if (dart.is(iterable, EfficientLength)) {
            return new (EfficientLengthTakeIterable$(E))(iterable, takeCount);
          }
          return new (TakeIterable$(E))._(iterable, takeCount);
        }}, $__super);
    }(collection.IterableBase$(E));
    dart.defineNamedConstructor(TakeIterable, '_');
    dart.setSignature(TakeIterable, {constructors: function() {
        return ({
          new: [TakeIterable$(E), [core.Iterable$(E), core.int]],
          _: [TakeIterable$(E), [core.Iterable$(E), core.int]]
        });
      }});
    dart.defineExtensionMembers(TakeIterable, ['iterator']);
    return TakeIterable;
  });
  var TakeIterable = TakeIterable$();
  var EfficientLengthTakeIterable$ = dart.generic(function(E) {
    var EfficientLengthTakeIterable = function($__super) {
      function EfficientLengthTakeIterable() {
        $traceurRuntime.superConstructor(EfficientLengthTakeIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(EfficientLengthTakeIterable, {
        EfficientLengthTakeIterable: function(iterable, takeCount) {
          $traceurRuntime.superGet(this, EfficientLengthTakeIterable.prototype, "_").call(this, iterable, takeCount);
        },
        get length() {
          var iterableLength = this[_iterable][dartx.length];
          if (dart.notNull(iterableLength) > dart.notNull(this[_takeCount]))
            return this[_takeCount];
          return iterableLength;
        }
      }, {}, $__super);
    }(TakeIterable$(E));
    EfficientLengthTakeIterable[dart.implements] = function() {
      return [EfficientLength];
    };
    dart.setSignature(EfficientLengthTakeIterable, {constructors: function() {
        return ({EfficientLengthTakeIterable: [EfficientLengthTakeIterable$(E), [core.Iterable$(E), core.int]]});
      }});
    dart.defineExtensionMembers(EfficientLengthTakeIterable, ['length']);
    return EfficientLengthTakeIterable;
  });
  var EfficientLengthTakeIterable = EfficientLengthTakeIterable$();
  var _remaining = dart.JsSymbol('_remaining');
  var TakeIterator$ = dart.generic(function(E) {
    var TakeIterator = function($__super) {
      function TakeIterator() {
        $traceurRuntime.superConstructor(TakeIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(TakeIterator, {
        TakeIterator: function(iterator, remaining) {
          this[_iterator] = iterator;
          this[_remaining] = remaining;
          dart.assert(typeof this[_remaining] == 'number' && dart.notNull(this[_remaining]) >= 0);
        },
        moveNext: function() {
          this[_remaining] = dart.notNull(this[_remaining]) - 1;
          if (dart.notNull(this[_remaining]) >= 0) {
            return this[_iterator].moveNext();
          }
          this[_remaining] = -1;
          return false;
        },
        get current() {
          if (dart.notNull(this[_remaining]) < 0)
            return null;
          return this[_iterator].current;
        }
      }, {}, $__super);
    }(core.Iterator$(E));
    dart.setSignature(TakeIterator, {
      constructors: function() {
        return ({TakeIterator: [TakeIterator$(E), [core.Iterator$(E), core.int]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return TakeIterator;
  });
  var TakeIterator = TakeIterator$();
  var TakeWhileIterable$ = dart.generic(function(E) {
    var TakeWhileIterable = function($__super) {
      function TakeWhileIterable() {
        $traceurRuntime.superConstructor(TakeWhileIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(TakeWhileIterable, {
        TakeWhileIterable: function(iterable, f) {
          this[_iterable] = iterable;
          this[_f] = f;
          $traceurRuntime.superGet(this, TakeWhileIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (TakeWhileIterator$(E))(this[_iterable][dartx.iterator], this[_f]);
        }
      }, {}, $__super);
    }(collection.IterableBase$(E));
    dart.setSignature(TakeWhileIterable, {constructors: function() {
        return ({TakeWhileIterable: [TakeWhileIterable$(E), [core.Iterable$(E), dart.functionType(core.bool, [E])]]});
      }});
    dart.defineExtensionMembers(TakeWhileIterable, ['iterator']);
    return TakeWhileIterable;
  });
  var TakeWhileIterable = TakeWhileIterable$();
  var _isFinished = dart.JsSymbol('_isFinished');
  var TakeWhileIterator$ = dart.generic(function(E) {
    var TakeWhileIterator = function($__super) {
      function TakeWhileIterator() {
        $traceurRuntime.superConstructor(TakeWhileIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(TakeWhileIterator, {
        TakeWhileIterator: function(iterator, f) {
          this[_iterator] = iterator;
          this[_f] = f;
          this[_isFinished] = false;
        },
        moveNext: function() {
          if (dart.notNull(this[_isFinished]))
            return false;
          if (!dart.notNull(this[_iterator].moveNext()) || !dart.notNull(this[_f](this[_iterator].current))) {
            this[_isFinished] = true;
            return false;
          }
          return true;
        },
        get current() {
          if (dart.notNull(this[_isFinished]))
            return null;
          return this[_iterator].current;
        }
      }, {}, $__super);
    }(core.Iterator$(E));
    dart.setSignature(TakeWhileIterator, {
      constructors: function() {
        return ({TakeWhileIterator: [TakeWhileIterator$(E), [core.Iterator$(E), dart.functionType(core.bool, [E])]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return TakeWhileIterator;
  });
  var TakeWhileIterator = TakeWhileIterator$();
  var _skipCount = dart.JsSymbol('_skipCount');
  var SkipIterable$ = dart.generic(function(E) {
    var SkipIterable = function($__super) {
      function SkipIterable() {
        $traceurRuntime.superConstructor(SkipIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SkipIterable, {
        _: function(iterable, skipCount) {
          this[_iterable] = iterable;
          this[_skipCount] = skipCount;
          $traceurRuntime.superGet(this, SkipIterable.prototype, "IterableBase").call(this);
          if (!(typeof this[_skipCount] == 'number')) {
            dart.throw(new core.ArgumentError.value(this[_skipCount], "count is not an integer"));
          }
          core.RangeError.checkNotNegative(this[_skipCount], "count");
        },
        skip: function(count) {
          if (!(typeof this[_skipCount] == 'number')) {
            dart.throw(new core.ArgumentError.value(this[_skipCount], "count is not an integer"));
          }
          core.RangeError.checkNotNegative(this[_skipCount], "count");
          return new (SkipIterable$(E))._(this[_iterable], dart.notNull(this[_skipCount]) + dart.notNull(count));
        },
        get iterator() {
          return new (SkipIterator$(E))(this[_iterable][dartx.iterator], this[_skipCount]);
        }
      }, {new: function(iterable, count) {
          if (dart.is(iterable, EfficientLength)) {
            return new (EfficientLengthSkipIterable$(E))(iterable, count);
          }
          return new (SkipIterable$(E))._(iterable, count);
        }}, $__super);
    }(collection.IterableBase$(E));
    dart.defineNamedConstructor(SkipIterable, '_');
    dart.setSignature(SkipIterable, {
      constructors: function() {
        return ({
          new: [SkipIterable$(E), [core.Iterable$(E), core.int]],
          _: [SkipIterable$(E), [core.Iterable$(E), core.int]]
        });
      },
      methods: function() {
        return ({skip: [core.Iterable$(E), [core.int]]});
      }
    });
    dart.defineExtensionMembers(SkipIterable, ['skip', 'iterator']);
    return SkipIterable;
  });
  var SkipIterable = SkipIterable$();
  var EfficientLengthSkipIterable$ = dart.generic(function(E) {
    var EfficientLengthSkipIterable = function($__super) {
      function EfficientLengthSkipIterable() {
        $traceurRuntime.superConstructor(EfficientLengthSkipIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(EfficientLengthSkipIterable, {
        EfficientLengthSkipIterable: function(iterable, skipCount) {
          $traceurRuntime.superGet(this, EfficientLengthSkipIterable.prototype, "_").call(this, iterable, skipCount);
        },
        get length() {
          var length = dart.notNull(this[_iterable][dartx.length]) - dart.notNull(this[_skipCount]);
          if (dart.notNull(length) >= 0)
            return length;
          return 0;
        }
      }, {}, $__super);
    }(SkipIterable$(E));
    EfficientLengthSkipIterable[dart.implements] = function() {
      return [EfficientLength];
    };
    dart.setSignature(EfficientLengthSkipIterable, {constructors: function() {
        return ({EfficientLengthSkipIterable: [EfficientLengthSkipIterable$(E), [core.Iterable$(E), core.int]]});
      }});
    dart.defineExtensionMembers(EfficientLengthSkipIterable, ['length']);
    return EfficientLengthSkipIterable;
  });
  var EfficientLengthSkipIterable = EfficientLengthSkipIterable$();
  var SkipIterator$ = dart.generic(function(E) {
    var SkipIterator = function($__super) {
      function SkipIterator() {
        $traceurRuntime.superConstructor(SkipIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SkipIterator, {
        SkipIterator: function(iterator, skipCount) {
          this[_iterator] = iterator;
          this[_skipCount] = skipCount;
          dart.assert(typeof this[_skipCount] == 'number' && dart.notNull(this[_skipCount]) >= 0);
        },
        moveNext: function() {
          for (var i = 0; dart.notNull(i) < dart.notNull(this[_skipCount]); i = dart.notNull(i) + 1)
            this[_iterator].moveNext();
          this[_skipCount] = 0;
          return this[_iterator].moveNext();
        },
        get current() {
          return this[_iterator].current;
        }
      }, {}, $__super);
    }(core.Iterator$(E));
    dart.setSignature(SkipIterator, {
      constructors: function() {
        return ({SkipIterator: [SkipIterator$(E), [core.Iterator$(E), core.int]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return SkipIterator;
  });
  var SkipIterator = SkipIterator$();
  var SkipWhileIterable$ = dart.generic(function(E) {
    var SkipWhileIterable = function($__super) {
      function SkipWhileIterable() {
        $traceurRuntime.superConstructor(SkipWhileIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SkipWhileIterable, {
        SkipWhileIterable: function(iterable, f) {
          this[_iterable] = iterable;
          this[_f] = f;
          $traceurRuntime.superGet(this, SkipWhileIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (SkipWhileIterator$(E))(this[_iterable][dartx.iterator], this[_f]);
        }
      }, {}, $__super);
    }(collection.IterableBase$(E));
    dart.setSignature(SkipWhileIterable, {constructors: function() {
        return ({SkipWhileIterable: [SkipWhileIterable$(E), [core.Iterable$(E), dart.functionType(core.bool, [E])]]});
      }});
    dart.defineExtensionMembers(SkipWhileIterable, ['iterator']);
    return SkipWhileIterable;
  });
  var SkipWhileIterable = SkipWhileIterable$();
  var _hasSkipped = dart.JsSymbol('_hasSkipped');
  var SkipWhileIterator$ = dart.generic(function(E) {
    var SkipWhileIterator = function($__super) {
      function SkipWhileIterator() {
        $traceurRuntime.superConstructor(SkipWhileIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SkipWhileIterator, {
        SkipWhileIterator: function(iterator, f) {
          this[_iterator] = iterator;
          this[_f] = f;
          this[_hasSkipped] = false;
        },
        moveNext: function() {
          if (!dart.notNull(this[_hasSkipped])) {
            this[_hasSkipped] = true;
            while (dart.notNull(this[_iterator].moveNext())) {
              if (!dart.notNull(this[_f](this[_iterator].current)))
                return true;
            }
          }
          return this[_iterator].moveNext();
        },
        get current() {
          return this[_iterator].current;
        }
      }, {}, $__super);
    }(core.Iterator$(E));
    dart.setSignature(SkipWhileIterator, {
      constructors: function() {
        return ({SkipWhileIterator: [SkipWhileIterator$(E), [core.Iterator$(E), dart.functionType(core.bool, [E])]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return SkipWhileIterator;
  });
  var SkipWhileIterator = SkipWhileIterator$();
  var EmptyIterable$ = dart.generic(function(E) {
    var EmptyIterable = function($__super) {
      function EmptyIterable() {
        $traceurRuntime.superConstructor(EmptyIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(EmptyIterable, {
        EmptyIterable: function() {
          $traceurRuntime.superGet(this, EmptyIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return dart.const(new (EmptyIterator$(E))());
        },
        forEach: function(action) {
          dart.as(action, dart.functionType(dart.void, [E]));
        },
        get isEmpty() {
          return true;
        },
        get length() {
          return 0;
        },
        get first() {
          dart.throw(IterableElementError.noElement());
        },
        get last() {
          dart.throw(IterableElementError.noElement());
        },
        get single() {
          dart.throw(IterableElementError.noElement());
        },
        elementAt: function(index) {
          dart.throw(new core.RangeError.range(index, 0, 0, "index"));
        },
        contains: function(element) {
          return false;
        },
        every: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return true;
        },
        any: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return false;
        },
        firstWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        lastWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        singleWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [E]));
          var orElse = opts && 'orElse' in opts ? opts.orElse : null;
          dart.as(orElse, dart.functionType(E, []));
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        join: function(separator) {
          if (separator === void 0)
            separator = "";
          return "";
        },
        where: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return this;
        },
        map: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, [E]));
          return dart.const(new (EmptyIterable$())());
        },
        reduce: function(combine) {
          dart.as(combine, dart.functionType(E, [E, E]));
          dart.throw(IterableElementError.noElement());
        },
        fold: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, E]));
          return initialValue;
        },
        skip: function(count) {
          core.RangeError.checkNotNegative(count, "count");
          return this;
        },
        skipWhile: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return this;
        },
        take: function(count) {
          core.RangeError.checkNotNegative(count, "count");
          return this;
        },
        takeWhile: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          return this;
        },
        toList: function(opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          return dart.notNull(growable) ? dart.list([], E) : core.List$(E).new(0);
        },
        toSet: function() {
          return core.Set$(E).new();
        }
      }, {}, $__super);
    }(collection.IterableBase$(E));
    EmptyIterable[dart.implements] = function() {
      return [EfficientLength];
    };
    dart.setSignature(EmptyIterable, {
      constructors: function() {
        return ({EmptyIterable: [EmptyIterable$(E), []]});
      },
      methods: function() {
        return ({
          forEach: [dart.void, [dart.functionType(dart.void, [E])]],
          elementAt: [E, [core.int]],
          every: [core.bool, [dart.functionType(core.bool, [E])]],
          any: [core.bool, [dart.functionType(core.bool, [E])]],
          firstWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          lastWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          singleWhere: [E, [dart.functionType(core.bool, [E])], {orElse: dart.functionType(E, [])}],
          where: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          map: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
          reduce: [E, [dart.functionType(E, [E, E])]],
          fold: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, E])]],
          skip: [core.Iterable$(E), [core.int]],
          skipWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          take: [core.Iterable$(E), [core.int]],
          takeWhile: [core.Iterable$(E), [dart.functionType(core.bool, [E])]],
          toList: [core.List$(E), [], {growable: core.bool}],
          toSet: [core.Set$(E), []]
        });
      }
    });
    dart.defineExtensionMembers(EmptyIterable, ['forEach', 'elementAt', 'contains', 'every', 'any', 'firstWhere', 'lastWhere', 'singleWhere', 'join', 'where', 'map', 'reduce', 'fold', 'skip', 'skipWhile', 'take', 'takeWhile', 'toList', 'toSet', 'iterator', 'isEmpty', 'length', 'first', 'last', 'single']);
    return EmptyIterable;
  });
  var EmptyIterable = EmptyIterable$();
  var EmptyIterator$ = dart.generic(function(E) {
    var EmptyIterator = function($__super) {
      function EmptyIterator() {
        $traceurRuntime.superConstructor(EmptyIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(EmptyIterator, {
        EmptyIterator: function() {},
        moveNext: function() {
          return false;
        },
        get current() {
          return null;
        }
      }, {}, $__super);
    }(core.Object);
    EmptyIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(EmptyIterator, {
      constructors: function() {
        return ({EmptyIterator: [EmptyIterator$(E), []]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return EmptyIterator;
  });
  var EmptyIterator = EmptyIterator$();
  var BidirectionalIterator$ = dart.generic(function(T) {
    var BidirectionalIterator = function($__super) {
      function BidirectionalIterator() {
        $traceurRuntime.superConstructor(BidirectionalIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(BidirectionalIterator, {}, {}, $__super);
    }(core.Object);
    BidirectionalIterator[dart.implements] = function() {
      return [core.Iterator$(T)];
    };
    return BidirectionalIterator;
  });
  var BidirectionalIterator = BidirectionalIterator$();
  var IterableMixinWorkaround$ = dart.generic(function(T) {
    var IterableMixinWorkaround = function($__super) {
      function IterableMixinWorkaround() {
        $traceurRuntime.superConstructor(IterableMixinWorkaround).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(IterableMixinWorkaround, {
        where: function(iterable, f) {
          dart.as(f, dart.functionType(core.bool, [dart.dynamic]));
          return new (WhereIterable$(T))(dart.as(iterable, core.Iterable$(T)), dart.as(f, __CastType2));
        },
        takeList: function(list, n) {
          return new (SubListIterable$(T))(dart.as(list, core.Iterable$(T)), 0, n);
        },
        takeWhile: function(iterable, test) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          return new (TakeWhileIterable$(T))(dart.as(iterable, core.Iterable$(T)), dart.as(test, dart.functionType(core.bool, [T])));
        },
        skipList: function(list, n) {
          return new (SubListIterable$(T))(dart.as(list, core.Iterable$(T)), n, null);
        },
        skipWhile: function(iterable, test) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          return new (SkipWhileIterable$(T))(dart.as(iterable, core.Iterable$(T)), dart.as(test, dart.functionType(core.bool, [T])));
        },
        reversedList: function(list) {
          return new (ReversedListIterable$(T))(dart.as(list, core.Iterable$(T)));
        },
        getRangeList: function(list, start, end) {
          IterableMixinWorkaround$()._rangeCheck(list, start, end);
          return new (SubListIterable$(T))(dart.as(list, core.Iterable$(T)), start, end);
        },
        asMapList: function(l) {
          return new (ListMapView$(T))(dart.as(l, core.List$(T)));
        }
      }, {
        contains: function(iterable, element) {
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var e = $__7.value;
              {
                if (dart.equals(e, element))
                  return true;
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return false;
        },
        forEach: function(iterable, f) {
          dart.as(f, dart.functionType(dart.void, [dart.dynamic]));
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var e = $__7.value;
              {
                dart.dcall(f, e);
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
        },
        any: function(iterable, f) {
          dart.as(f, dart.functionType(core.bool, [dart.dynamic]));
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var e = $__7.value;
              {
                if (dart.notNull(dart.dcall(f, e)))
                  return true;
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return false;
        },
        every: function(iterable, f) {
          dart.as(f, dart.functionType(core.bool, [dart.dynamic]));
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var e = $__7.value;
              {
                if (!dart.notNull(dart.dcall(f, e)))
                  return false;
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return true;
        },
        reduce: function(iterable, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
          var iterator = iterable[dartx.iterator];
          if (!dart.notNull(iterator.moveNext()))
            dart.throw(IterableElementError.noElement());
          var value = iterator.current;
          while (dart.notNull(iterator.moveNext())) {
            value = dart.dcall(combine, value, iterator.current);
          }
          return value;
        },
        fold: function(iterable, initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                initialValue = dart.dcall(combine, initialValue, element);
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return initialValue;
        },
        removeWhereList: function(list, test) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          var retained = [];
          var length = list[dartx.length];
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            var element = list[dartx.get](i);
            if (!dart.notNull(dart.dcall(test, element))) {
              retained[dartx.add](element);
            }
            if (length != list[dartx.length]) {
              dart.throw(new core.ConcurrentModificationError(list));
            }
          }
          if (retained[dartx.length] == length)
            return;
          list[dartx.length] = retained[dartx.length];
          for (var i$__16 = 0; dart.notNull(i$__16) < dart.notNull(retained[dartx.length]); i$__16 = dart.notNull(i$__16) + 1) {
            list[dartx.set](i$__16, retained[dartx.get](i$__16));
          }
        },
        isEmpty: function(iterable) {
          return !dart.notNull(iterable[dartx.iterator].moveNext());
        },
        first: function(iterable) {
          var it = iterable[dartx.iterator];
          if (!dart.notNull(it.moveNext())) {
            dart.throw(IterableElementError.noElement());
          }
          return it.current;
        },
        last: function(iterable) {
          var it = iterable[dartx.iterator];
          if (!dart.notNull(it.moveNext())) {
            dart.throw(IterableElementError.noElement());
          }
          var result = null;
          do {
            result = it.current;
          } while (dart.notNull(it.moveNext()));
          return result;
        },
        single: function(iterable) {
          var it = iterable[dartx.iterator];
          if (!dart.notNull(it.moveNext()))
            dart.throw(IterableElementError.noElement());
          var result = it.current;
          if (dart.notNull(it.moveNext()))
            dart.throw(IterableElementError.tooMany());
          return result;
        },
        firstWhere: function(iterable, test, orElse) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          dart.as(orElse, dart.functionType(dart.dynamic, []));
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (dart.notNull(dart.dcall(test, element)))
                  return element;
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        lastWhere: function(iterable, test, orElse) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          dart.as(orElse, dart.functionType(dart.dynamic, []));
          var result = null;
          var foundMatching = false;
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (dart.notNull(dart.dcall(test, element))) {
                  result = element;
                  foundMatching = true;
                }
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          if (dart.notNull(foundMatching))
            return result;
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        lastWhereList: function(list, test, orElse) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          dart.as(orElse, dart.functionType(dart.dynamic, []));
          for (var i = dart.notNull(list[dartx.length]) - 1; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
            var element = list[dartx.get](i);
            if (dart.notNull(dart.dcall(test, element)))
              return element;
          }
          if (orElse != null)
            return orElse();
          dart.throw(IterableElementError.noElement());
        },
        singleWhere: function(iterable, test) {
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          var result = null;
          var foundMatching = false;
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (dart.notNull(dart.dcall(test, element))) {
                  if (dart.notNull(foundMatching)) {
                    dart.throw(IterableElementError.tooMany());
                  }
                  result = element;
                  foundMatching = true;
                }
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          if (dart.notNull(foundMatching))
            return result;
          dart.throw(IterableElementError.noElement());
        },
        elementAt: function(iterable, index) {
          if (!(typeof index == 'number'))
            dart.throw(new core.ArgumentError.notNull("index"));
          core.RangeError.checkNotNegative(index, "index");
          var elementIndex = 0;
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (index == elementIndex)
                  return element;
                elementIndex = dart.notNull(elementIndex) + 1;
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          dart.throw(core.RangeError.index(index, iterable, "index", null, elementIndex));
        },
        join: function(iterable, separator) {
          if (separator === void 0)
            separator = null;
          var buffer = new core.StringBuffer();
          buffer.writeAll(iterable, separator);
          return dart.toString(buffer);
        },
        joinList: function(list, separator) {
          if (separator === void 0)
            separator = null;
          if (dart.notNull(list[dartx.isEmpty]))
            return "";
          if (list[dartx.length] == 1)
            return ("" + list[dartx.get](0));
          var buffer = new core.StringBuffer();
          if (dart.notNull(separator[dartx.isEmpty])) {
            for (var i = 0; dart.notNull(i) < dart.notNull(list[dartx.length]); i = dart.notNull(i) + 1) {
              buffer.write(list[dartx.get](i));
            }
          } else {
            buffer.write(list[dartx.get](0));
            for (var i$__17 = 1; dart.notNull(i$__17) < dart.notNull(list[dartx.length]); i$__17 = dart.notNull(i$__17) + 1) {
              buffer.write(separator);
              buffer.write(list[dartx.get](i$__17));
            }
          }
          return dart.toString(buffer);
        },
        map: function(iterable, f) {
          dart.as(f, dart.functionType(dart.dynamic, [dart.dynamic]));
          return MappedIterable.new(iterable, f);
        },
        mapList: function(list, f) {
          dart.as(f, dart.functionType(dart.dynamic, [dart.dynamic]));
          return new MappedListIterable(list, f);
        },
        expand: function(iterable, f) {
          dart.as(f, dart.functionType(core.Iterable, [dart.dynamic]));
          return new ExpandIterable(iterable, f);
        },
        sortList: function(list, compare) {
          dart.as(compare, dart.functionType(core.int, [dart.dynamic, dart.dynamic]));
          if (compare == null)
            compare = core.Comparable.compare;
          Sort.sort(list, compare);
        },
        shuffleList: function(list, random) {
          if (random == null)
            random = math.Random.new();
          var length = list[dartx.length];
          while (dart.notNull(length) > 1) {
            var pos = random.nextInt(length);
            length = dart.notNull(length) - 1;
            var tmp = list[dartx.get](length);
            list[dartx.set](length, list[dartx.get](pos));
            list[dartx.set](pos, tmp);
          }
        },
        indexOfList: function(list, element, start) {
          return Lists.indexOf(list, element, start, list[dartx.length]);
        },
        lastIndexOfList: function(list, element, start) {
          if (start == null)
            start = dart.notNull(list[dartx.length]) - 1;
          return Lists.lastIndexOf(list, element, start);
        },
        _rangeCheck: function(list, start, end) {
          core.RangeError.checkValidRange(start, end, list[dartx.length]);
        },
        setRangeList: function(list, start, end, from, skipCount) {
          IterableMixinWorkaround$()._rangeCheck(list, start, end);
          var length = dart.notNull(end) - dart.notNull(start);
          if (length == 0)
            return;
          if (dart.notNull(skipCount) < 0)
            dart.throw(new core.ArgumentError(skipCount));
          var otherList = null;
          var otherStart = null;
          if (dart.is(from, core.List)) {
            otherList = from;
            otherStart = skipCount;
          } else {
            otherList = from[dartx.skip](skipCount)[dartx.toList]({growable: false});
            otherStart = 0;
          }
          if (dart.notNull(otherStart) + dart.notNull(length) > dart.notNull(otherList[dartx.length])) {
            dart.throw(IterableElementError.tooFew());
          }
          Lists.copy(otherList, otherStart, list, start, length);
        },
        replaceRangeList: function(list, start, end, iterable) {
          IterableMixinWorkaround$()._rangeCheck(list, start, end);
          if (!dart.is(iterable, EfficientLength)) {
            iterable = iterable[dartx.toList]();
          }
          var removeLength = dart.notNull(end) - dart.notNull(start);
          var insertLength = iterable[dartx.length];
          if (dart.notNull(removeLength) >= dart.notNull(insertLength)) {
            var delta = dart.notNull(removeLength) - dart.notNull(insertLength);
            var insertEnd = dart.notNull(start) + dart.notNull(insertLength);
            var newEnd = dart.notNull(list[dartx.length]) - dart.notNull(delta);
            list[dartx.setRange](start, insertEnd, iterable);
            if (delta != 0) {
              list[dartx.setRange](insertEnd, newEnd, list, end);
              list[dartx.length] = newEnd;
            }
          } else {
            var delta$__18 = dart.notNull(insertLength) - dart.notNull(removeLength);
            var newLength = dart.notNull(list[dartx.length]) + dart.notNull(delta$__18);
            var insertEnd$__19 = dart.notNull(start) + dart.notNull(insertLength);
            list[dartx.length] = newLength;
            list[dartx.setRange](insertEnd$__19, newLength, list, end);
            list[dartx.setRange](start, insertEnd$__19, iterable);
          }
        },
        fillRangeList: function(list, start, end, fillValue) {
          IterableMixinWorkaround$()._rangeCheck(list, start, end);
          for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
            list[dartx.set](i, fillValue);
          }
        },
        insertAllList: function(list, index, iterable) {
          core.RangeError.checkValueInInterval(index, 0, list[dartx.length], "index");
          if (!dart.is(iterable, EfficientLength)) {
            iterable = iterable[dartx.toList]({growable: false});
          }
          var insertionLength = iterable[dartx.length];
          list[dartx.length] = dart.notNull(list[dartx.length]) + dart.notNull(insertionLength);
          list[dartx.setRange](dart.notNull(index) + dart.notNull(insertionLength), list[dartx.length], list, index);
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                list[dartx.set]((function() {
                  var x = index;
                  index = dart.notNull(x) + 1;
                  return x;
                })(), element);
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
        },
        setAllList: function(list, index, iterable) {
          core.RangeError.checkValueInInterval(index, 0, list[dartx.length], "index");
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (iterable)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                list[dartx.set]((function() {
                  var x = index;
                  index = dart.notNull(x) + 1;
                  return x;
                })(), element);
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
        },
        setContainsAll: function(set, other) {
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (other)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (!dart.notNull(set.contains(element)))
                  return false;
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return true;
        },
        setIntersection: function(set, other, result) {
          var smaller = null;
          var larger = null;
          if (dart.notNull(set.length) < dart.notNull(other.length)) {
            smaller = set;
            larger = other;
          } else {
            smaller = other;
            larger = set;
          }
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (smaller)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (dart.notNull(larger.contains(element))) {
                  result.add(element);
                }
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return result;
        },
        setUnion: function(set, other, result) {
          result.addAll(set);
          result.addAll(other);
          return result;
        },
        setDifference: function(set, other, result) {
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            for (var $__7 = void 0,
                $__6 = (set)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              var element = $__7.value;
              {
                if (!dart.notNull(other.contains(element))) {
                  result.add(element);
                }
              }
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          return result;
        }
      }, $__super);
    }(core.Object);
    dart.setSignature(IterableMixinWorkaround, {
      methods: function() {
        return ({
          where: [core.Iterable$(T), [core.Iterable, dart.functionType(core.bool, [dart.dynamic])]],
          takeList: [core.Iterable$(T), [core.List, core.int]],
          takeWhile: [core.Iterable$(T), [core.Iterable, dart.functionType(core.bool, [dart.dynamic])]],
          skipList: [core.Iterable$(T), [core.List, core.int]],
          skipWhile: [core.Iterable$(T), [core.Iterable, dart.functionType(core.bool, [dart.dynamic])]],
          reversedList: [core.Iterable$(T), [core.List]],
          getRangeList: [core.Iterable$(T), [core.List, core.int, core.int]],
          asMapList: [core.Map$(core.int, T), [core.List]]
        });
      },
      statics: function() {
        return ({
          contains: [core.bool, [core.Iterable, dart.dynamic]],
          forEach: [dart.void, [core.Iterable, dart.functionType(dart.void, [dart.dynamic])]],
          any: [core.bool, [core.Iterable, dart.functionType(core.bool, [dart.dynamic])]],
          every: [core.bool, [core.Iterable, dart.functionType(core.bool, [dart.dynamic])]],
          reduce: [dart.dynamic, [core.Iterable, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]],
          fold: [dart.dynamic, [core.Iterable, dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]],
          removeWhereList: [dart.void, [core.List, dart.functionType(core.bool, [dart.dynamic])]],
          isEmpty: [core.bool, [core.Iterable]],
          first: [dart.dynamic, [core.Iterable]],
          last: [dart.dynamic, [core.Iterable]],
          single: [dart.dynamic, [core.Iterable]],
          firstWhere: [dart.dynamic, [core.Iterable, dart.functionType(core.bool, [dart.dynamic]), dart.functionType(dart.dynamic, [])]],
          lastWhere: [dart.dynamic, [core.Iterable, dart.functionType(core.bool, [dart.dynamic]), dart.functionType(dart.dynamic, [])]],
          lastWhereList: [dart.dynamic, [core.List, dart.functionType(core.bool, [dart.dynamic]), dart.functionType(dart.dynamic, [])]],
          singleWhere: [dart.dynamic, [core.Iterable, dart.functionType(core.bool, [dart.dynamic])]],
          elementAt: [dart.dynamic, [core.Iterable, core.int]],
          join: [core.String, [core.Iterable], [core.String]],
          joinList: [core.String, [core.List], [core.String]],
          map: [core.Iterable, [core.Iterable, dart.functionType(dart.dynamic, [dart.dynamic])]],
          mapList: [core.Iterable, [core.List, dart.functionType(dart.dynamic, [dart.dynamic])]],
          expand: [core.Iterable, [core.Iterable, dart.functionType(core.Iterable, [dart.dynamic])]],
          sortList: [dart.void, [core.List, dart.functionType(core.int, [dart.dynamic, dart.dynamic])]],
          shuffleList: [dart.void, [core.List, math.Random]],
          indexOfList: [core.int, [core.List, dart.dynamic, core.int]],
          lastIndexOfList: [core.int, [core.List, dart.dynamic, core.int]],
          _rangeCheck: [dart.void, [core.List, core.int, core.int]],
          setRangeList: [dart.void, [core.List, core.int, core.int, core.Iterable, core.int]],
          replaceRangeList: [dart.void, [core.List, core.int, core.int, core.Iterable]],
          fillRangeList: [dart.void, [core.List, core.int, core.int, dart.dynamic]],
          insertAllList: [dart.void, [core.List, core.int, core.Iterable]],
          setAllList: [dart.void, [core.List, core.int, core.Iterable]],
          setContainsAll: [core.bool, [core.Set, core.Iterable]],
          setIntersection: [core.Set, [core.Set, core.Set, core.Set]],
          setUnion: [core.Set, [core.Set, core.Set, core.Set]],
          setDifference: [core.Set, [core.Set, core.Set, core.Set]]
        });
      },
      names: ['contains', 'forEach', 'any', 'every', 'reduce', 'fold', 'removeWhereList', 'isEmpty', 'first', 'last', 'single', 'firstWhere', 'lastWhere', 'lastWhereList', 'singleWhere', 'elementAt', 'join', 'joinList', 'map', 'mapList', 'expand', 'sortList', 'shuffleList', 'indexOfList', 'lastIndexOfList', '_rangeCheck', 'setRangeList', 'replaceRangeList', 'fillRangeList', 'insertAllList', 'setAllList', 'setContainsAll', 'setIntersection', 'setUnion', 'setDifference']
    });
    return IterableMixinWorkaround;
  });
  var IterableMixinWorkaround = IterableMixinWorkaround$();
  var IterableElementError = function($__super) {
    function IterableElementError() {
      $traceurRuntime.superConstructor(IterableElementError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(IterableElementError, {}, {
      noElement: function() {
        return new core.StateError("No element");
      },
      tooMany: function() {
        return new core.StateError("Too many elements");
      },
      tooFew: function() {
        return new core.StateError("Too few elements");
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(IterableElementError, {
    statics: function() {
      return ({
        noElement: [core.StateError, []],
        tooMany: [core.StateError, []],
        tooFew: [core.StateError, []]
      });
    },
    names: ['noElement', 'tooMany', 'tooFew']
  });
  var __CastType0$ = dart.generic(function(S, T) {
    var __CastType0 = dart.typedef('__CastType0', function() {
      return dart.functionType(core.Iterable$(T), [S]);
    });
    return __CastType0;
  });
  var __CastType0 = __CastType0$();
  var __CastType2$ = dart.generic(function(T) {
    var __CastType2 = dart.typedef('__CastType2', function() {
      return dart.functionType(core.bool, [T]);
    });
    return __CastType2;
  });
  var __CastType2 = __CastType2$();
  var FixedLengthListMixin$ = dart.generic(function(E) {
    var FixedLengthListMixin = function($__super) {
      function FixedLengthListMixin() {
        $traceurRuntime.superConstructor(FixedLengthListMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(FixedLengthListMixin, {
        set length(newLength) {
          dart.throw(new core.UnsupportedError("Cannot change the length of a fixed-length list"));
        },
        add: function(value) {
          dart.as(value, E);
          dart.throw(new core.UnsupportedError("Cannot add to a fixed-length list"));
        },
        insert: function(index, value) {
          dart.as(value, E);
          dart.throw(new core.UnsupportedError("Cannot add to a fixed-length list"));
        },
        insertAll: function(at, iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot add to a fixed-length list"));
        },
        addAll: function(iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot add to a fixed-length list"));
        },
        remove: function(element) {
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        },
        removeWhere: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        },
        retainWhere: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        },
        clear: function() {
          dart.throw(new core.UnsupportedError("Cannot clear a fixed-length list"));
        },
        removeAt: function(index) {
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        },
        removeLast: function() {
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        },
        removeRange: function(start, end) {
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        },
        replaceRange: function(start, end, iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
        }
      }, {}, $__super);
    }(core.Object);
    dart.setSignature(FixedLengthListMixin, {methods: function() {
        return ({
          add: [dart.void, [E]],
          insert: [dart.void, [core.int, E]],
          insertAll: [dart.void, [core.int, core.Iterable$(E)]],
          addAll: [dart.void, [core.Iterable$(E)]],
          remove: [core.bool, [core.Object]],
          removeWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          retainWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          clear: [dart.void, []],
          removeAt: [E, [core.int]],
          removeLast: [E, []],
          removeRange: [dart.void, [core.int, core.int]],
          replaceRange: [dart.void, [core.int, core.int, core.Iterable$(E)]]
        });
      }});
    return FixedLengthListMixin;
  });
  var FixedLengthListMixin = FixedLengthListMixin$();
  var UnmodifiableListMixin$ = dart.generic(function(E) {
    var UnmodifiableListMixin = function($__super) {
      function UnmodifiableListMixin() {
        $traceurRuntime.superConstructor(UnmodifiableListMixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(UnmodifiableListMixin, {
        set: function(index, value) {
          dart.as(value, E);
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable list"));
          return value;
        },
        set length(newLength) {
          dart.throw(new core.UnsupportedError("Cannot change the length of an unmodifiable list"));
        },
        setAll: function(at, iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable list"));
        },
        add: function(value) {
          dart.as(value, E);
          dart.throw(new core.UnsupportedError("Cannot add to an unmodifiable list"));
        },
        insert: function(index, value) {
          dart.as(value, E);
          dart.throw(new core.UnsupportedError("Cannot add to an unmodifiable list"));
        },
        insertAll: function(at, iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot add to an unmodifiable list"));
        },
        addAll: function(iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot add to an unmodifiable list"));
        },
        remove: function(element) {
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        removeWhere: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        retainWhere: function(test) {
          dart.as(test, dart.functionType(core.bool, [E]));
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        sort: function(compare) {
          if (compare === void 0)
            compare = null;
          dart.as(compare, core.Comparator$(E));
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable list"));
        },
        shuffle: function(random) {
          if (random === void 0)
            random = null;
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable list"));
        },
        clear: function() {
          dart.throw(new core.UnsupportedError("Cannot clear an unmodifiable list"));
        },
        removeAt: function(index) {
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        removeLast: function() {
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        setRange: function(start, end, iterable, skipCount) {
          dart.as(iterable, core.Iterable$(E));
          if (skipCount === void 0)
            skipCount = 0;
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable list"));
        },
        removeRange: function(start, end) {
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        replaceRange: function(start, end, iterable) {
          dart.as(iterable, core.Iterable$(E));
          dart.throw(new core.UnsupportedError("Cannot remove from an unmodifiable list"));
        },
        fillRange: function(start, end, fillValue) {
          if (fillValue === void 0)
            fillValue = null;
          dart.as(fillValue, E);
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable list"));
        }
      }, {}, $__super);
    }(core.Object);
    UnmodifiableListMixin[dart.implements] = function() {
      return [core.List$(E)];
    };
    dart.setSignature(UnmodifiableListMixin, {methods: function() {
        return ({
          set: [dart.void, [core.int, E]],
          setAll: [dart.void, [core.int, core.Iterable$(E)]],
          add: [dart.void, [E]],
          insert: [E, [core.int, E]],
          insertAll: [dart.void, [core.int, core.Iterable$(E)]],
          addAll: [dart.void, [core.Iterable$(E)]],
          remove: [core.bool, [core.Object]],
          removeWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          retainWhere: [dart.void, [dart.functionType(core.bool, [E])]],
          sort: [dart.void, [], [core.Comparator$(E)]],
          shuffle: [dart.void, [], [math.Random]],
          clear: [dart.void, []],
          removeAt: [E, [core.int]],
          removeLast: [E, []],
          setRange: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
          removeRange: [dart.void, [core.int, core.int]],
          replaceRange: [dart.void, [core.int, core.int, core.Iterable$(E)]],
          fillRange: [dart.void, [core.int, core.int], [E]]
        });
      }});
    dart.defineExtensionMembers(UnmodifiableListMixin, ['set', 'setAll', 'add', 'insert', 'insertAll', 'addAll', 'remove', 'removeWhere', 'retainWhere', 'sort', 'shuffle', 'clear', 'removeAt', 'removeLast', 'setRange', 'removeRange', 'replaceRange', 'fillRange', 'length']);
    return UnmodifiableListMixin;
  });
  var UnmodifiableListMixin = UnmodifiableListMixin$();
  var FixedLengthListBase$ = dart.generic(function(E) {
    var FixedLengthListBase = function($__super) {
      function FixedLengthListBase() {
        $traceurRuntime.superConstructor(FixedLengthListBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(FixedLengthListBase, {FixedLengthListBase: function() {
          var $__13;
          ($__13 = $traceurRuntime.superGet(this, FixedLengthListBase.prototype, "ListBase")).call.apply($__13, $traceurRuntime.spread([this], arguments));
        }}, {}, $__super);
    }(dart.mixin(collection.ListBase$(E), FixedLengthListMixin$(E)));
    return FixedLengthListBase;
  });
  var FixedLengthListBase = FixedLengthListBase$();
  var UnmodifiableListBase$ = dart.generic(function(E) {
    var UnmodifiableListBase = function($__super) {
      function UnmodifiableListBase() {
        $traceurRuntime.superConstructor(UnmodifiableListBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(UnmodifiableListBase, {UnmodifiableListBase: function() {
          var $__13;
          ($__13 = $traceurRuntime.superGet(this, UnmodifiableListBase.prototype, "ListBase")).call.apply($__13, $traceurRuntime.spread([this], arguments));
        }}, {}, $__super);
    }(dart.mixin(collection.ListBase$(E), UnmodifiableListMixin$(E)));
    return UnmodifiableListBase;
  });
  var UnmodifiableListBase = UnmodifiableListBase$();
  var _backedList = dart.JsSymbol('_backedList');
  var _ListIndicesIterable = function($__super) {
    function _ListIndicesIterable() {
      $traceurRuntime.superConstructor(_ListIndicesIterable).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ListIndicesIterable, {
      _ListIndicesIterable: function(backedList) {
        this[_backedList] = backedList;
        $traceurRuntime.superGet(this, _ListIndicesIterable.prototype, "ListIterable").call(this);
      },
      get length() {
        return this[_backedList][dartx.length];
      },
      elementAt: function(index) {
        core.RangeError.checkValidIndex(index, this);
        return index;
      }
    }, {}, $__super);
  }(ListIterable$(core.int));
  dart.setSignature(_ListIndicesIterable, {
    constructors: function() {
      return ({_ListIndicesIterable: [_ListIndicesIterable, [core.List]]});
    },
    methods: function() {
      return ({elementAt: [core.int, [core.int]]});
    }
  });
  dart.defineExtensionMembers(_ListIndicesIterable, ['elementAt', 'length']);
  var _values = dart.JsSymbol('_values');
  var ListMapView$ = dart.generic(function(E) {
    var ListMapView = function($__super) {
      function ListMapView() {
        $traceurRuntime.superConstructor(ListMapView).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ListMapView, {
        ListMapView: function(values) {
          this[_values] = values;
        },
        get: function(key) {
          return dart.notNull(this.containsKey(key)) ? this[_values][dartx.get](dart.as(key, core.int)) : null;
        },
        get length() {
          return this[_values][dartx.length];
        },
        get values() {
          return new (SubListIterable$(E))(this[_values], 0, null);
        },
        get keys() {
          return new _ListIndicesIterable(this[_values]);
        },
        get isEmpty() {
          return this[_values][dartx.isEmpty];
        },
        get isNotEmpty() {
          return this[_values][dartx.isNotEmpty];
        },
        containsValue: function(value) {
          return this[_values][dartx.contains](value);
        },
        containsKey: function(key) {
          return typeof key == 'number' && dart.notNull(key) >= 0 && dart.notNull(key) < dart.notNull(this.length);
        },
        forEach: function(f) {
          dart.as(f, dart.functionType(dart.void, [core.int, E]));
          var length = this[_values][dartx.length];
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            f(i, this[_values][dartx.get](i));
            if (length != this[_values][dartx.length]) {
              dart.throw(new core.ConcurrentModificationError(this[_values]));
            }
          }
        },
        set: function(key, value) {
          dart.as(value, E);
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
          return value;
        },
        putIfAbsent: function(key, ifAbsent) {
          dart.as(ifAbsent, dart.functionType(E, []));
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
        },
        remove: function(key) {
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
        },
        clear: function() {
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
        },
        addAll: function(other) {
          dart.as(other, core.Map$(core.int, E));
          dart.throw(new core.UnsupportedError("Cannot modify an unmodifiable map"));
        },
        toString: function() {
          return collection.Maps.mapToString(this);
        }
      }, {}, $__super);
    }(core.Object);
    ListMapView[dart.implements] = function() {
      return [core.Map$(core.int, E)];
    };
    dart.setSignature(ListMapView, {
      constructors: function() {
        return ({ListMapView: [ListMapView$(E), [core.List$(E)]]});
      },
      methods: function() {
        return ({
          get: [E, [core.Object]],
          containsValue: [core.bool, [core.Object]],
          containsKey: [core.bool, [core.Object]],
          forEach: [dart.void, [dart.functionType(dart.void, [core.int, E])]],
          set: [dart.void, [core.int, E]],
          putIfAbsent: [E, [core.int, dart.functionType(E, [])]],
          remove: [E, [core.Object]],
          clear: [dart.void, []],
          addAll: [dart.void, [core.Map$(core.int, E)]]
        });
      }
    });
    return ListMapView;
  });
  var ListMapView = ListMapView$();
  var ReversedListIterable$ = dart.generic(function(E) {
    var ReversedListIterable = function($__super) {
      function ReversedListIterable() {
        $traceurRuntime.superConstructor(ReversedListIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ReversedListIterable, {
        ReversedListIterable: function(source) {
          this[_source] = source;
          $traceurRuntime.superGet(this, ReversedListIterable.prototype, "ListIterable").call(this);
        },
        get length() {
          return this[_source][dartx.length];
        },
        elementAt: function(index) {
          return this[_source][dartx.elementAt](dart.notNull(this[_source][dartx.length]) - 1 - dart.notNull(index));
        }
      }, {}, $__super);
    }(ListIterable$(E));
    dart.setSignature(ReversedListIterable, {
      constructors: function() {
        return ({ReversedListIterable: [ReversedListIterable$(E), [core.Iterable$(E)]]});
      },
      methods: function() {
        return ({elementAt: [E, [core.int]]});
      }
    });
    dart.defineExtensionMembers(ReversedListIterable, ['elementAt', 'length']);
    return ReversedListIterable;
  });
  var ReversedListIterable = ReversedListIterable$();
  var UnmodifiableListError = function($__super) {
    function UnmodifiableListError() {
      $traceurRuntime.superConstructor(UnmodifiableListError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(UnmodifiableListError, {}, {
      add: function() {
        return new core.UnsupportedError("Cannot add to unmodifiable List");
      },
      change: function() {
        return new core.UnsupportedError("Cannot change the content of an unmodifiable List");
      },
      length: function() {
        return new core.UnsupportedError("Cannot change length of unmodifiable List");
      },
      remove: function() {
        return new core.UnsupportedError("Cannot remove from unmodifiable List");
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(UnmodifiableListError, {
    statics: function() {
      return ({
        add: [core.UnsupportedError, []],
        change: [core.UnsupportedError, []],
        length: [core.UnsupportedError, []],
        remove: [core.UnsupportedError, []]
      });
    },
    names: ['add', 'change', 'length', 'remove']
  });
  var NonGrowableListError = function($__super) {
    function NonGrowableListError() {
      $traceurRuntime.superConstructor(NonGrowableListError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NonGrowableListError, {}, {
      add: function() {
        return new core.UnsupportedError("Cannot add to non-growable List");
      },
      length: function() {
        return new core.UnsupportedError("Cannot change length of non-growable List");
      },
      remove: function() {
        return new core.UnsupportedError("Cannot remove from non-growable List");
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(NonGrowableListError, {
    statics: function() {
      return ({
        add: [core.UnsupportedError, []],
        length: [core.UnsupportedError, []],
        remove: [core.UnsupportedError, []]
      });
    },
    names: ['add', 'length', 'remove']
  });
  function makeListFixedLength(growableList) {
    _interceptors.JSArray.markFixedList(growableList);
    return growableList;
  }
  dart.fn(makeListFixedLength, core.List, [core.List]);
  var Lists = function($__super) {
    function Lists() {
      $traceurRuntime.superConstructor(Lists).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Lists, {}, {
      copy: function(src, srcStart, dst, dstStart, count) {
        if (dart.notNull(srcStart) < dart.notNull(dstStart)) {
          for (var i = dart.notNull(srcStart) + dart.notNull(count) - 1,
              j = dart.notNull(dstStart) + dart.notNull(count) - 1; dart.notNull(i) >= dart.notNull(srcStart); i = dart.notNull(i) - 1, j = dart.notNull(j) - 1) {
            dst[dartx.set](j, src[dartx.get](i));
          }
        } else {
          for (var i$__20 = srcStart,
              j$__21 = dstStart; dart.notNull(i$__20) < dart.notNull(srcStart) + dart.notNull(count); i$__20 = dart.notNull(i$__20) + 1, j$__21 = dart.notNull(j$__21) + 1) {
            dst[dartx.set](j$__21, src[dartx.get](i$__20));
          }
        }
      },
      areEqual: function(a, b) {
        if (dart.notNull(core.identical(a, b)))
          return true;
        if (!dart.is(b, core.List))
          return false;
        var length = a[dartx.length];
        if (!dart.equals(length, dart.dload(b, 'length')))
          return false;
        for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
          if (!dart.notNull(core.identical(a[dartx.get](i), dart.dindex(b, i))))
            return false;
        }
        return true;
      },
      indexOf: function(a, element, startIndex, endIndex) {
        if (dart.notNull(startIndex) >= dart.notNull(a[dartx.length])) {
          return -1;
        }
        if (dart.notNull(startIndex) < 0) {
          startIndex = 0;
        }
        for (var i = startIndex; dart.notNull(i) < dart.notNull(endIndex); i = dart.notNull(i) + 1) {
          if (dart.equals(a[dartx.get](i), element)) {
            return i;
          }
        }
        return -1;
      },
      lastIndexOf: function(a, element, startIndex) {
        if (dart.notNull(startIndex) < 0) {
          return -1;
        }
        if (dart.notNull(startIndex) >= dart.notNull(a[dartx.length])) {
          startIndex = dart.notNull(a[dartx.length]) - 1;
        }
        for (var i = startIndex; dart.notNull(i) >= 0; i = dart.notNull(i) - 1) {
          if (dart.equals(a[dartx.get](i), element)) {
            return i;
          }
        }
        return -1;
      },
      indicesCheck: function(a, start, end) {
        core.RangeError.checkValidRange(start, end, a[dartx.length]);
      },
      rangeCheck: function(a, start, length) {
        core.RangeError.checkNotNegative(length);
        core.RangeError.checkNotNegative(start);
        if (dart.notNull(start) + dart.notNull(length) > dart.notNull(a[dartx.length])) {
          var message = (start + " + " + length + " must be in the range [0.." + a[dartx.length] + "]");
          dart.throw(new core.RangeError.range(length, 0, dart.notNull(a[dartx.length]) - dart.notNull(start), "length", message));
        }
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(Lists, {
    statics: function() {
      return ({
        copy: [dart.void, [core.List, core.int, core.List, core.int, core.int]],
        areEqual: [core.bool, [core.List, dart.dynamic]],
        indexOf: [core.int, [core.List, core.Object, core.int, core.int]],
        lastIndexOf: [core.int, [core.List, core.Object, core.int]],
        indicesCheck: [dart.void, [core.List, core.int, core.int]],
        rangeCheck: [dart.void, [core.List, core.int, core.int]]
      });
    },
    names: ['copy', 'areEqual', 'indexOf', 'lastIndexOf', 'indicesCheck', 'rangeCheck']
  });
  exports.printToZone = null;
  function printToConsole(line) {
    _js_primitives.printString(("" + line));
  }
  dart.fn(printToConsole, dart.void, [core.String]);
  var Sort = function($__super) {
    function Sort() {
      $traceurRuntime.superConstructor(Sort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Sort, {}, {
      sort: function(a, compare) {
        Sort._doSort(a, 0, dart.notNull(a[dartx.length]) - 1, compare);
      },
      sortRange: function(a, from, to, compare) {
        if (dart.notNull(from) < 0 || dart.notNull(to) > dart.notNull(a[dartx.length]) || dart.notNull(to) < dart.notNull(from)) {
          dart.throw("OutOfRange");
        }
        Sort._doSort(a, from, dart.notNull(to) - 1, compare);
      },
      _doSort: function(a, left, right, compare) {
        if (dart.notNull(right) - dart.notNull(left) <= dart.notNull(Sort._INSERTION_SORT_THRESHOLD)) {
          Sort._insertionSort(a, left, right, compare);
        } else {
          Sort._dualPivotQuicksort(a, left, right, compare);
        }
      },
      _insertionSort: function(a, left, right, compare) {
        for (var i = dart.notNull(left) + 1; dart.notNull(i) <= dart.notNull(right); i = dart.notNull(i) + 1) {
          var el = a[dartx.get](i);
          var j = i;
          while (dart.notNull(j) > dart.notNull(left) && dart.notNull(dart.dcall(compare, a[dartx.get](dart.notNull(j) - 1), el)) > 0) {
            a[dartx.set](j, a[dartx.get](dart.notNull(j) - 1));
            j = dart.notNull(j) - 1;
          }
          a[dartx.set](j, el);
        }
      },
      _dualPivotQuicksort: function(a, left, right, compare) {
        dart.assert(dart.notNull(right) - dart.notNull(left) > dart.notNull(Sort._INSERTION_SORT_THRESHOLD));
        var sixth = ((dart.notNull(right) - dart.notNull(left) + 1) / 6)[dartx.truncate]();
        var index1 = dart.notNull(left) + dart.notNull(sixth);
        var index5 = dart.notNull(right) - dart.notNull(sixth);
        var index3 = ((dart.notNull(left) + dart.notNull(right)) / 2)[dartx.truncate]();
        var index2 = dart.notNull(index3) - dart.notNull(sixth);
        var index4 = dart.notNull(index3) + dart.notNull(sixth);
        var el1 = a[dartx.get](index1);
        var el2 = a[dartx.get](index2);
        var el3 = a[dartx.get](index3);
        var el4 = a[dartx.get](index4);
        var el5 = a[dartx.get](index5);
        if (dart.notNull(dart.dcall(compare, el1, el2)) > 0) {
          var t = el1;
          el1 = el2;
          el2 = t;
        }
        if (dart.notNull(dart.dcall(compare, el4, el5)) > 0) {
          var t$__22 = el4;
          el4 = el5;
          el5 = t$__22;
        }
        if (dart.notNull(dart.dcall(compare, el1, el3)) > 0) {
          var t$__23 = el1;
          el1 = el3;
          el3 = t$__23;
        }
        if (dart.notNull(dart.dcall(compare, el2, el3)) > 0) {
          var t$__24 = el2;
          el2 = el3;
          el3 = t$__24;
        }
        if (dart.notNull(dart.dcall(compare, el1, el4)) > 0) {
          var t$__25 = el1;
          el1 = el4;
          el4 = t$__25;
        }
        if (dart.notNull(dart.dcall(compare, el3, el4)) > 0) {
          var t$__26 = el3;
          el3 = el4;
          el4 = t$__26;
        }
        if (dart.notNull(dart.dcall(compare, el2, el5)) > 0) {
          var t$__27 = el2;
          el2 = el5;
          el5 = t$__27;
        }
        if (dart.notNull(dart.dcall(compare, el2, el3)) > 0) {
          var t$__28 = el2;
          el2 = el3;
          el3 = t$__28;
        }
        if (dart.notNull(dart.dcall(compare, el4, el5)) > 0) {
          var t$__29 = el4;
          el4 = el5;
          el5 = t$__29;
        }
        var pivot1 = el2;
        var pivot2 = el4;
        a[dartx.set](index1, el1);
        a[dartx.set](index3, el3);
        a[dartx.set](index5, el5);
        a[dartx.set](index2, a[dartx.get](left));
        a[dartx.set](index4, a[dartx.get](right));
        var less = dart.notNull(left) + 1;
        var great = dart.notNull(right) - 1;
        var pivots_are_equal = dart.dcall(compare, pivot1, pivot2) == 0;
        if (dart.notNull(pivots_are_equal)) {
          var pivot = pivot1;
          for (var k = less; dart.notNull(k) <= dart.notNull(great); k = dart.notNull(k) + 1) {
            var ak = a[dartx.get](k);
            var comp = dart.dcall(compare, ak, pivot);
            if (comp == 0)
              continue;
            if (dart.notNull(comp) < 0) {
              if (k != less) {
                a[dartx.set](k, a[dartx.get](less));
                a[dartx.set](less, ak);
              }
              less = dart.notNull(less) + 1;
            } else {
              while (true) {
                comp = dart.dcall(compare, a[dartx.get](great), pivot);
                if (dart.notNull(comp) > 0) {
                  great = dart.notNull(great) - 1;
                  continue;
                } else if (dart.notNull(comp) < 0) {
                  a[dartx.set](k, a[dartx.get](less));
                  a[dartx.set]((function() {
                    var x = less;
                    less = dart.notNull(x) + 1;
                    return x;
                  })(), a[dartx.get](great));
                  a[dartx.set]((function() {
                    var x = great;
                    great = dart.notNull(x) - 1;
                    return x;
                  })(), ak);
                  break;
                } else {
                  a[dartx.set](k, a[dartx.get](great));
                  a[dartx.set]((function() {
                    var x = great;
                    great = dart.notNull(x) - 1;
                    return x;
                  })(), ak);
                  break;
                }
              }
            }
          }
        } else {
          for (var k$__30 = less; dart.notNull(k$__30) <= dart.notNull(great); k$__30 = dart.notNull(k$__30) + 1) {
            var ak$__31 = a[dartx.get](k$__30);
            var comp_pivot1 = dart.dcall(compare, ak$__31, pivot1);
            if (dart.notNull(comp_pivot1) < 0) {
              if (k$__30 != less) {
                a[dartx.set](k$__30, a[dartx.get](less));
                a[dartx.set](less, ak$__31);
              }
              less = dart.notNull(less) + 1;
            } else {
              var comp_pivot2 = dart.dcall(compare, ak$__31, pivot2);
              if (dart.notNull(comp_pivot2) > 0) {
                while (true) {
                  var comp$__32 = dart.dcall(compare, a[dartx.get](great), pivot2);
                  if (dart.notNull(comp$__32) > 0) {
                    great = dart.notNull(great) - 1;
                    if (dart.notNull(great) < dart.notNull(k$__30))
                      break;
                    continue;
                  } else {
                    comp$__32 = dart.dcall(compare, a[dartx.get](great), pivot1);
                    if (dart.notNull(comp$__32) < 0) {
                      a[dartx.set](k$__30, a[dartx.get](less));
                      a[dartx.set]((function() {
                        var x = less;
                        less = dart.notNull(x) + 1;
                        return x;
                      })(), a[dartx.get](great));
                      a[dartx.set]((function() {
                        var x = great;
                        great = dart.notNull(x) - 1;
                        return x;
                      })(), ak$__31);
                    } else {
                      a[dartx.set](k$__30, a[dartx.get](great));
                      a[dartx.set]((function() {
                        var x = great;
                        great = dart.notNull(x) - 1;
                        return x;
                      })(), ak$__31);
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        a[dartx.set](left, a[dartx.get](dart.notNull(less) - 1));
        a[dartx.set](dart.notNull(less) - 1, pivot1);
        a[dartx.set](right, a[dartx.get](dart.notNull(great) + 1));
        a[dartx.set](dart.notNull(great) + 1, pivot2);
        Sort._doSort(a, left, dart.notNull(less) - 2, compare);
        Sort._doSort(a, dart.notNull(great) + 2, right, compare);
        if (dart.notNull(pivots_are_equal)) {
          return;
        }
        if (dart.notNull(less) < dart.notNull(index1) && dart.notNull(great) > dart.notNull(index5)) {
          while (dart.dcall(compare, a[dartx.get](less), pivot1) == 0) {
            less = dart.notNull(less) + 1;
          }
          while (dart.dcall(compare, a[dartx.get](great), pivot2) == 0) {
            great = dart.notNull(great) - 1;
          }
          for (var k$__33 = less; dart.notNull(k$__33) <= dart.notNull(great); k$__33 = dart.notNull(k$__33) + 1) {
            var ak$__34 = a[dartx.get](k$__33);
            var comp_pivot1$__35 = dart.dcall(compare, ak$__34, pivot1);
            if (comp_pivot1$__35 == 0) {
              if (k$__33 != less) {
                a[dartx.set](k$__33, a[dartx.get](less));
                a[dartx.set](less, ak$__34);
              }
              less = dart.notNull(less) + 1;
            } else {
              var comp_pivot2$__36 = dart.dcall(compare, ak$__34, pivot2);
              if (comp_pivot2$__36 == 0) {
                while (true) {
                  var comp$__37 = dart.dcall(compare, a[dartx.get](great), pivot2);
                  if (comp$__37 == 0) {
                    great = dart.notNull(great) - 1;
                    if (dart.notNull(great) < dart.notNull(k$__33))
                      break;
                    continue;
                  } else {
                    comp$__37 = dart.dcall(compare, a[dartx.get](great), pivot1);
                    if (dart.notNull(comp$__37) < 0) {
                      a[dartx.set](k$__33, a[dartx.get](less));
                      a[dartx.set]((function() {
                        var x = less;
                        less = dart.notNull(x) + 1;
                        return x;
                      })(), a[dartx.get](great));
                      a[dartx.set]((function() {
                        var x = great;
                        great = dart.notNull(x) - 1;
                        return x;
                      })(), ak$__34);
                    } else {
                      a[dartx.set](k$__33, a[dartx.get](great));
                      a[dartx.set]((function() {
                        var x = great;
                        great = dart.notNull(x) - 1;
                        return x;
                      })(), ak$__34);
                    }
                    break;
                  }
                }
              }
            }
          }
          Sort._doSort(a, less, great, compare);
        } else {
          Sort._doSort(a, less, great, compare);
        }
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(Sort, {
    statics: function() {
      return ({
        sort: [dart.void, [core.List, dart.functionType(core.int, [dart.dynamic, dart.dynamic])]],
        sortRange: [dart.void, [core.List, core.int, core.int, dart.functionType(core.int, [dart.dynamic, dart.dynamic])]],
        _doSort: [dart.void, [core.List, core.int, core.int, dart.functionType(core.int, [dart.dynamic, dart.dynamic])]],
        _insertionSort: [dart.void, [core.List, core.int, core.int, dart.functionType(core.int, [dart.dynamic, dart.dynamic])]],
        _dualPivotQuicksort: [dart.void, [core.List, core.int, core.int, dart.functionType(core.int, [dart.dynamic, dart.dynamic])]]
      });
    },
    names: ['sort', 'sortRange', '_doSort', '_insertionSort', '_dualPivotQuicksort']
  });
  Sort._INSERTION_SORT_THRESHOLD = 32;
  var _name = dart.JsSymbol('_name');
  var Symbol = function($__super) {
    var $__5;
    function Symbol() {
      $traceurRuntime.superConstructor(Symbol).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Symbol, ($__5 = {}, Object.defineProperty($__5, "Symbol", {
      value: function(name) {
        this[_name] = name;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "unvalidated", {
      value: function(name) {
        this[_name] = name;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "validated", {
      value: function(name) {
        this[_name] = Symbol.validatePublicSymbol(name);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, '==', {
      value: function(other) {
        return dart.is(other, Symbol) && this[_name] == other[_name];
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "hashCode", {
      get: function() {
        var arbitraryPrime = 664597;
        return 536870911 & dart.notNull(arbitraryPrime) * dart.notNull(dart.hashCode(this[_name]));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "toString", {
      value: function() {
        return ("Symbol(\"" + this[_name] + "\")");
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {
      getName: function(symbol) {
        return symbol[_name];
      },
      validatePublicSymbol: function(name) {
        if (dart.notNull(name[dartx.isEmpty]) || dart.notNull(Symbol.publicSymbolPattern.hasMatch(name)))
          return name;
        if (dart.notNull(name[dartx.startsWith]('_'))) {
          dart.throw(new core.ArgumentError(("\"" + name + "\" is a private identifier")));
        }
        dart.throw(new core.ArgumentError(("\"" + name + "\" is not a valid (qualified) symbol name")));
      },
      isValidSymbol: function(name) {
        return dart.notNull(name[dartx.isEmpty]) || dart.notNull(Symbol.symbolPattern.hasMatch(name));
      }
    }, $__super);
  }(core.Object);
  Symbol[dart.implements] = function() {
    return [core.Symbol];
  };
  dart.defineNamedConstructor(Symbol, 'unvalidated');
  dart.defineNamedConstructor(Symbol, 'validated');
  dart.setSignature(Symbol, {
    constructors: function() {
      return ({
        Symbol: [Symbol, [core.String]],
        unvalidated: [Symbol, [core.String]],
        validated: [Symbol, [core.String]]
      });
    },
    methods: function() {
      return ({'==': [core.bool, [core.Object]]});
    },
    statics: function() {
      return ({
        getName: [core.String, [Symbol]],
        validatePublicSymbol: [core.String, [core.String]],
        isValidSymbol: [core.bool, [core.String]]
      });
    },
    names: ['getName', 'validatePublicSymbol', 'isValidSymbol']
  });
  Symbol.reservedWordRE = '(?:assert|break|c(?:a(?:se|tch)|lass|on(?:st|tinue))|d(?:efault|o)|' + 'e(?:lse|num|xtends)|f(?:alse|inal(?:ly)?|or)|i[fns]|n(?:ew|ull)|' + 'ret(?:hrow|urn)|s(?:uper|witch)|t(?:h(?:is|row)|r(?:ue|y))|' + 'v(?:ar|oid)|w(?:hile|ith))';
  Symbol.publicIdentifierRE = '(?!' + ("" + Symbol.reservedWordRE) + '\\b(?!\\$))[a-zA-Z$][\\w$]*';
  Symbol.identifierRE = '(?!' + ("" + Symbol.reservedWordRE) + '\\b(?!\\$))[a-zA-Z$_][\\w$]*';
  Symbol.operatorRE = '(?:[\\-+*/%&|^]|\\[\\]=?|==|~/?|<[<=]?|>[>=]?|unary-)';
  var POWERS_OF_TEN = dart.const([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 10000000.0, 100000000.0, 1000000000.0, 10000000000.0, 100000000000.0, 1000000000000.0, 10000000000000.0, 100000000000000.0, 1000000000000000.0, 10000000000000000.0, 100000000000000000.0, 1000000000000000000.0, 10000000000000000000.0, 100000000000000000000.0, 1e+21, 1e+22]);
  dart.defineLazyProperties(Symbol, {
    get publicSymbolPattern() {
      return core.RegExp.new(("^(?:" + Symbol.operatorRE + "\$|" + Symbol.publicIdentifierRE + "(?:=?\$|[.](?!\$)))+?\$"));
    },
    get symbolPattern() {
      return core.RegExp.new(("^(?:" + Symbol.operatorRE + "\$|" + Symbol.identifierRE + "(?:=?\$|[.](?!\$)))+?\$"));
    }
  });
  exports.EfficientLength = EfficientLength;
  exports.ListIterable$ = ListIterable$;
  exports.ListIterable = ListIterable;
  exports.SubListIterable$ = SubListIterable$;
  exports.SubListIterable = SubListIterable;
  exports.ListIterator$ = ListIterator$;
  exports.ListIterator = ListIterator;
  exports.MappedIterable$ = MappedIterable$;
  exports.MappedIterable = MappedIterable;
  exports.EfficientLengthMappedIterable$ = EfficientLengthMappedIterable$;
  exports.EfficientLengthMappedIterable = EfficientLengthMappedIterable;
  exports.MappedIterator$ = MappedIterator$;
  exports.MappedIterator = MappedIterator;
  exports.MappedListIterable$ = MappedListIterable$;
  exports.MappedListIterable = MappedListIterable;
  exports.WhereIterable$ = WhereIterable$;
  exports.WhereIterable = WhereIterable;
  exports.WhereIterator$ = WhereIterator$;
  exports.WhereIterator = WhereIterator;
  exports.ExpandIterable$ = ExpandIterable$;
  exports.ExpandIterable = ExpandIterable;
  exports.ExpandIterator$ = ExpandIterator$;
  exports.ExpandIterator = ExpandIterator;
  exports.TakeIterable$ = TakeIterable$;
  exports.TakeIterable = TakeIterable;
  exports.EfficientLengthTakeIterable$ = EfficientLengthTakeIterable$;
  exports.EfficientLengthTakeIterable = EfficientLengthTakeIterable;
  exports.TakeIterator$ = TakeIterator$;
  exports.TakeIterator = TakeIterator;
  exports.TakeWhileIterable$ = TakeWhileIterable$;
  exports.TakeWhileIterable = TakeWhileIterable;
  exports.TakeWhileIterator$ = TakeWhileIterator$;
  exports.TakeWhileIterator = TakeWhileIterator;
  exports.SkipIterable$ = SkipIterable$;
  exports.SkipIterable = SkipIterable;
  exports.EfficientLengthSkipIterable$ = EfficientLengthSkipIterable$;
  exports.EfficientLengthSkipIterable = EfficientLengthSkipIterable;
  exports.SkipIterator$ = SkipIterator$;
  exports.SkipIterator = SkipIterator;
  exports.SkipWhileIterable$ = SkipWhileIterable$;
  exports.SkipWhileIterable = SkipWhileIterable;
  exports.SkipWhileIterator$ = SkipWhileIterator$;
  exports.SkipWhileIterator = SkipWhileIterator;
  exports.EmptyIterable$ = EmptyIterable$;
  exports.EmptyIterable = EmptyIterable;
  exports.EmptyIterator$ = EmptyIterator$;
  exports.EmptyIterator = EmptyIterator;
  exports.BidirectionalIterator$ = BidirectionalIterator$;
  exports.BidirectionalIterator = BidirectionalIterator;
  exports.IterableMixinWorkaround$ = IterableMixinWorkaround$;
  exports.IterableMixinWorkaround = IterableMixinWorkaround;
  exports.IterableElementError = IterableElementError;
  exports.FixedLengthListMixin$ = FixedLengthListMixin$;
  exports.FixedLengthListMixin = FixedLengthListMixin;
  exports.UnmodifiableListMixin$ = UnmodifiableListMixin$;
  exports.UnmodifiableListMixin = UnmodifiableListMixin;
  exports.FixedLengthListBase$ = FixedLengthListBase$;
  exports.FixedLengthListBase = FixedLengthListBase;
  exports.UnmodifiableListBase$ = UnmodifiableListBase$;
  exports.UnmodifiableListBase = UnmodifiableListBase;
  exports.ListMapView$ = ListMapView$;
  exports.ListMapView = ListMapView;
  exports.ReversedListIterable$ = ReversedListIterable$;
  exports.ReversedListIterable = ReversedListIterable;
  exports.UnmodifiableListError = UnmodifiableListError;
  exports.NonGrowableListError = NonGrowableListError;
  exports.makeListFixedLength = makeListFixedLength;
  exports.Lists = Lists;
  exports.printToConsole = printToConsole;
  exports.Sort = Sort;
  exports.Symbol = Symbol;
  exports.POWERS_OF_TEN = POWERS_OF_TEN;
});
