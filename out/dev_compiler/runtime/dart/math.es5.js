dart_library.library('dart/math', null, ["dart/_runtime", 'dart/core'], ['dart/_js_helper'], function(exports, dart, core, _js_helper) {
  'use strict';
  var dartx = dart.dartx;
  var _JenkinsSmiHash = function($__super) {
    function _JenkinsSmiHash() {
      $traceurRuntime.superConstructor(_JenkinsSmiHash).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JenkinsSmiHash, {}, {
      combine: function(hash, value) {
        hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
        hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
        return dart.notNull(hash) ^ dart.notNull(hash) >> 6;
      },
      finish: function(hash) {
        hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
        hash = dart.notNull(hash) ^ dart.notNull(hash) >> 11;
        return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
      },
      hash2: function(a, b) {
        return _JenkinsSmiHash.finish(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(0, dart.as(a, core.int)), dart.as(b, core.int)));
      },
      hash4: function(a, b, c, d) {
        return _JenkinsSmiHash.finish(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(_JenkinsSmiHash.combine(0, dart.as(a, core.int)), dart.as(b, core.int)), dart.as(c, core.int)), dart.as(d, core.int)));
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(_JenkinsSmiHash, {
    statics: function() {
      return ({
        combine: [core.int, [core.int, core.int]],
        finish: [core.int, [core.int]],
        hash2: [core.int, [dart.dynamic, dart.dynamic]],
        hash4: [core.int, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]]
      });
    },
    names: ['combine', 'finish', 'hash2', 'hash4']
  });
  var Point$ = dart.generic(function(T) {
    var Point = function($__super) {
      var $__4;
      function Point() {
        $traceurRuntime.superConstructor(Point).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Point, ($__4 = {}, Object.defineProperty($__4, "Point", {
        value: function(x, y) {
          this.x = x;
          this.y = y;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return ("Point(" + this.x + ", " + this.y + ")");
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, '==', {
        value: function(other) {
          if (!dart.is(other, Point$()))
            return false;
          return dart.equals(this.x, dart.dload(other, 'x')) && dart.equals(this.y, dart.dload(other, 'y'));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "hashCode", {
        get: function() {
          return _JenkinsSmiHash.hash2(dart.hashCode(this.x), dart.hashCode(this.y));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, '+', {
        value: function(other) {
          dart.as(other, Point$(T));
          return new (Point$(T))(dart.notNull(this.x) + dart.notNull(other.x), dart.notNull(this.y) + dart.notNull(other.y));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, '-', {
        value: function(other) {
          dart.as(other, Point$(T));
          return new (Point$(T))(dart.notNull(this.x) - dart.notNull(other.x), dart.notNull(this.y) - dart.notNull(other.y));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, '*', {
        value: function(factor) {
          return new (Point$(T))(dart.notNull(this.x) * dart.notNull(factor), dart.notNull(this.y) * dart.notNull(factor));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "magnitude", {
        get: function() {
          return sqrt(dart.notNull(this.x) * dart.notNull(this.x) + dart.notNull(this.y) * dart.notNull(this.y));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "distanceTo", {
        value: function(other) {
          dart.as(other, Point$(T));
          var dx = dart.notNull(this.x) - dart.notNull(other.x);
          var dy = dart.notNull(this.y) - dart.notNull(other.y);
          return sqrt(dart.notNull(dx) * dart.notNull(dx) + dart.notNull(dy) * dart.notNull(dy));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "squaredDistanceTo", {
        value: function(other) {
          dart.as(other, Point$(T));
          var dx = dart.notNull(this.x) - dart.notNull(other.x);
          var dy = dart.notNull(this.y) - dart.notNull(other.y);
          return dart.notNull(dx) * dart.notNull(dx) + dart.notNull(dy) * dart.notNull(dy);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4), {}, $__super);
    }(core.Object);
    dart.setSignature(Point, {
      constructors: function() {
        return ({Point: [Point$(T), [T, T]]});
      },
      methods: function() {
        return ({
          '+': [Point$(T), [Point$(T)]],
          '-': [Point$(T), [Point$(T)]],
          '*': [Point$(T), [core.num]],
          distanceTo: [core.double, [Point$(T)]],
          squaredDistanceTo: [T, [Point$(T)]]
        });
      }
    });
    return Point;
  });
  var Point = Point$();
  var Random = function($__super) {
    function Random() {
      $traceurRuntime.superConstructor(Random).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Random, {}, {new: function(seed) {
        if (seed === void 0)
          seed = null;
        return seed == null ? dart.const(new _JSRandom()) : new _Random(seed);
      }}, $__super);
  }(core.Object);
  dart.setSignature(Random, {constructors: function() {
      return ({new: [Random, [], [core.int]]});
    }});
  var _RectangleBase$ = dart.generic(function(T) {
    var _RectangleBase = function($__super) {
      var $__4;
      function _RectangleBase() {
        $traceurRuntime.superConstructor(_RectangleBase).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_RectangleBase, ($__4 = {}, Object.defineProperty($__4, "_RectangleBase", {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "right", {
        get: function() {
          return dart.notNull(this.left) + dart.notNull(this.width);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "bottom", {
        get: function() {
          return dart.notNull(this.top) + dart.notNull(this.height);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "toString", {
        value: function() {
          return ("Rectangle (" + this.left + ", " + this.top + ") " + this.width + " x " + this.height);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, '==', {
        value: function(other) {
          if (!dart.is(other, Rectangle))
            return false;
          return dart.equals(this.left, dart.dload(other, 'left')) && dart.equals(this.top, dart.dload(other, 'top')) && dart.equals(this.right, dart.dload(other, 'right')) && dart.equals(this.bottom, dart.dload(other, 'bottom'));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "hashCode", {
        get: function() {
          return _JenkinsSmiHash.hash4(dart.hashCode(this.left), dart.hashCode(this.top), dart.hashCode(this.right), dart.hashCode(this.bottom));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "intersection", {
        value: function(other) {
          dart.as(other, Rectangle$(T));
          var x0 = max(this.left, other.left);
          var x1 = min(dart.notNull(this.left) + dart.notNull(this.width), dart.notNull(other.left) + dart.notNull(other.width));
          if (dart.notNull(x0) <= dart.notNull(x1)) {
            var y0 = max(this.top, other.top);
            var y1 = min(dart.notNull(this.top) + dart.notNull(this.height), dart.notNull(other.top) + dart.notNull(other.height));
            if (dart.notNull(y0) <= dart.notNull(y1)) {
              return new (Rectangle$(T))(x0, y0, dart.notNull(x1) - dart.notNull(x0), dart.notNull(y1) - dart.notNull(y0));
            }
          }
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "intersects", {
        value: function(other) {
          return dart.notNull(this.left) <= dart.notNull(other.left) + dart.notNull(other.width) && dart.notNull(other.left) <= dart.notNull(this.left) + dart.notNull(this.width) && dart.notNull(this.top) <= dart.notNull(other.top) + dart.notNull(other.height) && dart.notNull(other.top) <= dart.notNull(this.top) + dart.notNull(this.height);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "boundingBox", {
        value: function(other) {
          dart.as(other, Rectangle$(T));
          var right = max(dart.notNull(this.left) + dart.notNull(this.width), dart.notNull(other.left) + dart.notNull(other.width));
          var bottom = max(dart.notNull(this.top) + dart.notNull(this.height), dart.notNull(other.top) + dart.notNull(other.height));
          var left = min(this.left, other.left);
          var top = min(this.top, other.top);
          return new (Rectangle$(T))(left, top, dart.notNull(right) - dart.notNull(left), dart.notNull(bottom) - dart.notNull(top));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsRectangle", {
        value: function(another) {
          return dart.notNull(this.left) <= dart.notNull(another.left) && dart.notNull(this.left) + dart.notNull(this.width) >= dart.notNull(another.left) + dart.notNull(another.width) && dart.notNull(this.top) <= dart.notNull(another.top) && dart.notNull(this.top) + dart.notNull(this.height) >= dart.notNull(another.top) + dart.notNull(another.height);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "containsPoint", {
        value: function(another) {
          return dart.notNull(another.x) >= dart.notNull(this.left) && dart.notNull(another.x) <= dart.notNull(this.left) + dart.notNull(this.width) && dart.notNull(another.y) >= dart.notNull(this.top) && dart.notNull(another.y) <= dart.notNull(this.top) + dart.notNull(this.height);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "topLeft", {
        get: function() {
          return new (Point$(T))(this.left, this.top);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "topRight", {
        get: function() {
          return new (Point$(T))(dart.notNull(this.left) + dart.notNull(this.width), this.top);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "bottomRight", {
        get: function() {
          return new (Point$(T))(dart.notNull(this.left) + dart.notNull(this.width), dart.notNull(this.top) + dart.notNull(this.height));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__4, "bottomLeft", {
        get: function() {
          return new (Point$(T))(this.left, dart.notNull(this.top) + dart.notNull(this.height));
        },
        configurable: true,
        enumerable: true
      }), $__4), {}, $__super);
    }(core.Object);
    dart.setSignature(_RectangleBase, {
      constructors: function() {
        return ({_RectangleBase: [_RectangleBase$(T), []]});
      },
      methods: function() {
        return ({
          intersection: [Rectangle$(T), [Rectangle$(T)]],
          intersects: [core.bool, [Rectangle$(core.num)]],
          boundingBox: [Rectangle$(T), [Rectangle$(T)]],
          containsRectangle: [core.bool, [Rectangle$(core.num)]],
          containsPoint: [core.bool, [Point$(core.num)]]
        });
      }
    });
    return _RectangleBase;
  });
  var _RectangleBase = _RectangleBase$();
  var Rectangle$ = dart.generic(function(T) {
    var Rectangle = function($__super) {
      function Rectangle() {
        $traceurRuntime.superConstructor(Rectangle).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Rectangle, {Rectangle: function(left, top, width, height) {
          this.left = left;
          this.top = top;
          this.width = dart.notNull(width) < 0 ? -dart.notNull(width) * 0 : width;
          this.height = dart.notNull(height) < 0 ? -dart.notNull(height) * 0 : height;
          $traceurRuntime.superGet(this, Rectangle.prototype, "_RectangleBase").call(this);
        }}, {fromPoints: function(a, b) {
          var left = min(a.x, b.x);
          var width = dart.notNull(max(a.x, b.x)) - dart.notNull(left);
          var top = min(a.y, b.y);
          var height = dart.notNull(max(a.y, b.y)) - dart.notNull(top);
          return new (Rectangle$(T))(left, top, width, height);
        }}, $__super);
    }(_RectangleBase$(T));
    dart.setSignature(Rectangle, {constructors: function() {
        return ({
          Rectangle: [Rectangle$(T), [T, T, T, T]],
          fromPoints: [Rectangle$(T), [Point$(T), Point$(T)]]
        });
      }});
    return Rectangle;
  });
  var Rectangle = Rectangle$();
  var _width = Symbol('_width');
  var _height = Symbol('_height');
  var MutableRectangle$ = dart.generic(function(T) {
    var MutableRectangle = function($__super) {
      function MutableRectangle() {
        $traceurRuntime.superConstructor(MutableRectangle).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(MutableRectangle, {
        MutableRectangle: function(left, top, width, height) {
          this.left = left;
          this.top = top;
          this[_width] = dart.notNull(width) < 0 ? _clampToZero(width) : width;
          this[_height] = dart.notNull(height) < 0 ? _clampToZero(height) : height;
          $traceurRuntime.superGet(this, MutableRectangle.prototype, "_RectangleBase").call(this);
        },
        get width() {
          return this[_width];
        },
        set width(width) {
          dart.as(width, T);
          if (dart.notNull(width) < 0)
            width = _clampToZero(width);
          this[_width] = width;
        },
        get height() {
          return this[_height];
        },
        set height(height) {
          dart.as(height, T);
          if (dart.notNull(height) < 0)
            height = _clampToZero(height);
          this[_height] = height;
        }
      }, {fromPoints: function(a, b) {
          var left = min(a.x, b.x);
          var width = dart.notNull(max(a.x, b.x)) - dart.notNull(left);
          var top = min(a.y, b.y);
          var height = dart.notNull(max(a.y, b.y)) - dart.notNull(top);
          return new (MutableRectangle$(T))(left, top, width, height);
        }}, $__super);
    }(_RectangleBase$(T));
    MutableRectangle[dart.implements] = function() {
      return [Rectangle$(T)];
    };
    dart.setSignature(MutableRectangle, {constructors: function() {
        return ({
          MutableRectangle: [MutableRectangle$(T), [T, T, T, T]],
          fromPoints: [MutableRectangle$(T), [Point$(T), Point$(T)]]
        });
      }});
    return MutableRectangle;
  });
  var MutableRectangle = MutableRectangle$();
  function _clampToZero(value) {
    dart.assert(dart.notNull(value) < 0);
    return -dart.notNull(value) * 0;
  }
  dart.fn(_clampToZero, core.num, [core.num]);
  var E = 2.718281828459045;
  var LN10 = 2.302585092994046;
  var LN2 = 0.6931471805599453;
  var LOG2E = 1.4426950408889634;
  var LOG10E = 0.4342944819032518;
  var PI = 3.141592653589793;
  var SQRT1_2 = 0.7071067811865476;
  var SQRT2 = 1.4142135623730951;
  function min(a, b) {
    if (!(typeof a == 'number'))
      dart.throw(new core.ArgumentError(a));
    if (!(typeof b == 'number'))
      dart.throw(new core.ArgumentError(b));
    if (dart.notNull(a) > dart.notNull(b))
      return b;
    if (dart.notNull(a) < dart.notNull(b))
      return a;
    if (typeof b == 'number') {
      if (typeof a == 'number') {
        if (a == 0.0) {
          return (dart.notNull(a) + dart.notNull(b)) * dart.notNull(a) * dart.notNull(b);
        }
      }
      if (a == 0 && dart.notNull(b[dartx.isNegative]) || dart.notNull(b[dartx.isNaN]))
        return b;
      return a;
    }
    return a;
  }
  dart.fn(min, core.num, [core.num, core.num]);
  function max(a, b) {
    if (!(typeof a == 'number'))
      dart.throw(new core.ArgumentError(a));
    if (!(typeof b == 'number'))
      dart.throw(new core.ArgumentError(b));
    if (dart.notNull(a) > dart.notNull(b))
      return a;
    if (dart.notNull(a) < dart.notNull(b))
      return b;
    if (typeof b == 'number') {
      if (typeof a == 'number') {
        if (a == 0.0) {
          return dart.notNull(a) + dart.notNull(b);
        }
      }
      if (dart.notNull(b[dartx.isNaN]))
        return b;
      return a;
    }
    if (b == 0 && dart.notNull(a[dartx.isNegative]))
      return b;
    return a;
  }
  dart.fn(max, core.num, [core.num, core.num]);
  function atan2(a, b) {
    return Math.atan2(_js_helper.checkNum(a), _js_helper.checkNum(b));
  }
  dart.fn(atan2, core.double, [core.num, core.num]);
  function pow(x, exponent) {
    _js_helper.checkNum(x);
    _js_helper.checkNum(exponent);
    return Math.pow(x, exponent);
  }
  dart.fn(pow, core.num, [core.num, core.num]);
  function sin(x) {
    return Math.sin(_js_helper.checkNum(x));
  }
  dart.fn(sin, core.double, [core.num]);
  function cos(x) {
    return Math.cos(_js_helper.checkNum(x));
  }
  dart.fn(cos, core.double, [core.num]);
  function tan(x) {
    return Math.tan(_js_helper.checkNum(x));
  }
  dart.fn(tan, core.double, [core.num]);
  function acos(x) {
    return Math.acos(_js_helper.checkNum(x));
  }
  dart.fn(acos, core.double, [core.num]);
  function asin(x) {
    return Math.asin(_js_helper.checkNum(x));
  }
  dart.fn(asin, core.double, [core.num]);
  function atan(x) {
    return Math.atan(_js_helper.checkNum(x));
  }
  dart.fn(atan, core.double, [core.num]);
  function sqrt(x) {
    return Math.sqrt(_js_helper.checkNum(x));
  }
  dart.fn(sqrt, core.double, [core.num]);
  function exp(x) {
    return Math.exp(_js_helper.checkNum(x));
  }
  dart.fn(exp, core.double, [core.num]);
  function log(x) {
    return Math.log(_js_helper.checkNum(x));
  }
  dart.fn(log, core.double, [core.num]);
  var _POW2_32 = 4294967296;
  var _JSRandom = function($__super) {
    function _JSRandom() {
      $traceurRuntime.superConstructor(_JSRandom).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JSRandom, {
      _JSRandom: function() {},
      nextInt: function(max) {
        if (dart.notNull(max) <= 0 || dart.notNull(max) > dart.notNull(_POW2_32)) {
          dart.throw(new core.RangeError(("max must be in range 0 < max ≤ 2^32, was " + max)));
        }
        return Math.random() * max >>> 0;
      },
      nextDouble: function() {
        return Math.random();
      },
      nextBool: function() {
        return Math.random() < 0.5;
      }
    }, {}, $__super);
  }(core.Object);
  _JSRandom[dart.implements] = function() {
    return [Random];
  };
  dart.setSignature(_JSRandom, {
    constructors: function() {
      return ({_JSRandom: [_JSRandom, []]});
    },
    methods: function() {
      return ({
        nextInt: [core.int, [core.int]],
        nextDouble: [core.double, []],
        nextBool: [core.bool, []]
      });
    }
  });
  var _lo = Symbol('_lo');
  var _hi = Symbol('_hi');
  var _nextState = Symbol('_nextState');
  var _Random = function($__super) {
    var $__4;
    function _Random() {
      $traceurRuntime.superConstructor(_Random).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Random, ($__4 = {}, Object.defineProperty($__4, "_Random", {
      value: function(seed) {
        this[_lo] = 0;
        this[_hi] = 0;
        var empty_seed = 0;
        if (dart.notNull(seed) < 0) {
          empty_seed = -1;
        }
        do {
          var low = dart.notNull(seed) & dart.notNull(_Random._MASK32);
          seed = ((dart.notNull(seed) - dart.notNull(low)) / dart.notNull(_POW2_32))[dartx.truncate]();
          var high = dart.notNull(seed) & dart.notNull(_Random._MASK32);
          seed = ((dart.notNull(seed) - dart.notNull(high)) / dart.notNull(_POW2_32))[dartx.truncate]();
          var tmplow = dart.notNull(low) << 21;
          var tmphigh = dart.notNull(high) << 21 | dart.notNull(low) >> 11;
          tmplow = (~dart.notNull(low) & dart.notNull(_Random._MASK32)) + dart.notNull(tmplow);
          low = dart.notNull(tmplow) & dart.notNull(_Random._MASK32);
          high = ~dart.notNull(high) + dart.notNull(tmphigh) + ((dart.notNull(tmplow) - dart.notNull(low)) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
          tmphigh = dart.notNull(high) >> 24;
          tmplow = dart.notNull(low) >> 24 | dart.notNull(high) << 8;
          low = dart.notNull(low) ^ dart.notNull(tmplow);
          high = dart.notNull(high) ^ dart.notNull(tmphigh);
          tmplow = dart.notNull(low) * 265;
          low = dart.notNull(tmplow) & dart.notNull(_Random._MASK32);
          high = dart.notNull(high) * 265 + ((dart.notNull(tmplow) - dart.notNull(low)) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
          tmphigh = dart.notNull(high) >> 14;
          tmplow = dart.notNull(low) >> 14 | dart.notNull(high) << 18;
          low = dart.notNull(low) ^ dart.notNull(tmplow);
          high = dart.notNull(high) ^ dart.notNull(tmphigh);
          tmplow = dart.notNull(low) * 21;
          low = dart.notNull(tmplow) & dart.notNull(_Random._MASK32);
          high = dart.notNull(high) * 21 + ((dart.notNull(tmplow) - dart.notNull(low)) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
          tmphigh = dart.notNull(high) >> 28;
          tmplow = dart.notNull(low) >> 28 | dart.notNull(high) << 4;
          low = dart.notNull(low) ^ dart.notNull(tmplow);
          high = dart.notNull(high) ^ dart.notNull(tmphigh);
          tmplow = dart.notNull(low) << 31;
          tmphigh = dart.notNull(high) << 31 | dart.notNull(low) >> 1;
          tmplow = dart.notNull(tmplow) + dart.notNull(low);
          low = dart.notNull(tmplow) & dart.notNull(_Random._MASK32);
          high = dart.notNull(high) + dart.notNull(tmphigh) + ((dart.notNull(tmplow) - dart.notNull(low)) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
          tmplow = dart.notNull(this[_lo]) * 1037;
          this[_lo] = dart.notNull(tmplow) & dart.notNull(_Random._MASK32);
          this[_hi] = dart.notNull(this[_hi]) * 1037 + ((dart.notNull(tmplow) - dart.notNull(this[_lo])) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
          this[_lo] = dart.notNull(this[_lo]) ^ dart.notNull(low);
          this[_hi] = dart.notNull(this[_hi]) ^ dart.notNull(high);
        } while (seed != empty_seed);
        if (this[_hi] == 0 && this[_lo] == 0) {
          this[_lo] = 23063;
        }
        this[_nextState]();
        this[_nextState]();
        this[_nextState]();
        this[_nextState]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, _nextState, {
      value: function() {
        var tmpHi = 4294901760 * dart.notNull(this[_lo]);
        var tmpHiLo = dart.notNull(tmpHi) & dart.notNull(_Random._MASK32);
        var tmpHiHi = dart.notNull(tmpHi) - dart.notNull(tmpHiLo);
        var tmpLo = 55905 * dart.notNull(this[_lo]);
        var tmpLoLo = dart.notNull(tmpLo) & dart.notNull(_Random._MASK32);
        var tmpLoHi = dart.notNull(tmpLo) - dart.notNull(tmpLoLo);
        var newLo = dart.notNull(tmpLoLo) + dart.notNull(tmpHiLo) + dart.notNull(this[_hi]);
        this[_lo] = dart.notNull(newLo) & dart.notNull(_Random._MASK32);
        var newLoHi = dart.notNull(newLo) - dart.notNull(this[_lo]);
        this[_hi] = ((dart.notNull(tmpLoHi) + dart.notNull(tmpHiHi) + dart.notNull(newLoHi)) / dart.notNull(_POW2_32))[dartx.truncate]() & dart.notNull(_Random._MASK32);
        dart.assert(dart.notNull(this[_lo]) < dart.notNull(_POW2_32));
        dart.assert(dart.notNull(this[_hi]) < dart.notNull(_POW2_32));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "nextInt", {
      value: function(max) {
        if (dart.notNull(max) <= 0 || dart.notNull(max) > dart.notNull(_POW2_32)) {
          dart.throw(new core.RangeError(("max must be in range 0 < max ≤ 2^32, was " + max)));
        }
        if ((dart.notNull(max) & dart.notNull(max) - 1) == 0) {
          this[_nextState]();
          return dart.notNull(this[_lo]) & dart.notNull(max) - 1;
        }
        var rnd32 = null;
        var result = null;
        do {
          this[_nextState]();
          rnd32 = this[_lo];
          result = dart.asInt(rnd32[dartx.remainder](max));
        } while (dart.notNull(rnd32) - dart.notNull(result) + dart.notNull(max) >= dart.notNull(_POW2_32));
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "nextDouble", {
      value: function() {
        this[_nextState]();
        var bits26 = dart.notNull(this[_lo]) & (1 << 26) - 1;
        this[_nextState]();
        var bits27 = dart.notNull(this[_lo]) & (1 << 27) - 1;
        return (dart.notNull(bits26) * dart.notNull(_Random._POW2_27_D) + dart.notNull(bits27)) / dart.notNull(_Random._POW2_53_D);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__4, "nextBool", {
      value: function() {
        this[_nextState]();
        return (dart.notNull(this[_lo]) & 1) == 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__4), {}, $__super);
  }(core.Object);
  _Random[dart.implements] = function() {
    return [Random];
  };
  dart.setSignature(_Random, {
    constructors: function() {
      return ({_Random: [_Random, [core.int]]});
    },
    methods: function() {
      var $__4;
      return (($__4 = {}, Object.defineProperty($__4, _nextState, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "nextInt", {
        value: [core.int, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "nextDouble", {
        value: [core.double, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__4, "nextBool", {
        value: [core.bool, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__4));
    }
  });
  _Random._POW2_53_D = 1.0 * 9007199254740992;
  _Random._POW2_27_D = 1.0 * (1 << 27);
  _Random._MASK32 = 4294967295;
  exports.Point$ = Point$;
  exports.Point = Point;
  exports.Random = Random;
  exports.Rectangle$ = Rectangle$;
  exports.Rectangle = Rectangle;
  exports.MutableRectangle$ = MutableRectangle$;
  exports.MutableRectangle = MutableRectangle;
  exports.E = E;
  exports.LN10 = LN10;
  exports.LN2 = LN2;
  exports.LOG2E = LOG2E;
  exports.LOG10E = LOG10E;
  exports.PI = PI;
  exports.SQRT1_2 = SQRT1_2;
  exports.SQRT2 = SQRT2;
  exports.min = min;
  exports.max = max;
  exports.atan2 = atan2;
  exports.pow = pow;
  exports.sin = sin;
  exports.cos = cos;
  exports.tan = tan;
  exports.acos = acos;
  exports.asin = asin;
  exports.atan = atan;
  exports.sqrt = sqrt;
  exports.exp = exp;
  exports.log = log;
});
