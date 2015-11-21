dart_library.library('dart/core', null, ["dart/_runtime"], ['dart/_js_helper', 'dart/_internal', 'dart/collection', 'dart/_interceptors', 'dart/convert'], function(exports, dart, _js_helper, _internal, collection, _interceptors, convert) {
  'use strict';
  var dartx = dart.dartx;
  var Object = function() {
    var $__24;
    function Object() {
      var $__32;
      var name = this.constructor.name;
      var result = void 0;
      if (name in this)
        result = ($__32 = this)[name].apply($__32, $traceurRuntime.spread(arguments));
      return result === void 0 ? this : result;
    }
    return ($traceurRuntime.createClass)(Object, ($__24 = {}, window.Object.defineProperty($__24, '==', {
      value: function(other) {
        return identical(this, other);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "hashCode", {
      get: function() {
        return _js_helper.Primitives.objectHashCode(this);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "toString", {
      value: function() {
        return _js_helper.Primitives.objectToString(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "noSuchMethod", {
      value: function(invocation) {
        dart.throw(new NoSuchMethodError(this, invocation.memberName, invocation.positionalArguments, invocation.namedArguments));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "runtimeType", {
      get: function() {
        return dart.realRuntimeType(this);
      },
      configurable: true,
      enumerable: true
    }), $__24), {});
  }();
  dart.setSignature(Object, {
    constructors: function() {
      return ({Object: [Object, []]});
    },
    methods: function() {
      return ({
        '==': [bool, [dart.dynamic]],
        toString: [String, []],
        noSuchMethod: [dart.dynamic, [Invocation]]
      });
    }
  });
  var Deprecated = function($__super) {
    function Deprecated() {
      $traceurRuntime.superConstructor(Deprecated).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Deprecated, {
      Deprecated: function(expires) {
        this.expires = expires;
      },
      toString: function() {
        return ("Deprecated feature. Will be removed " + this.expires);
      }
    }, {}, $__super);
  }(Object);
  dart.setSignature(Deprecated, {constructors: function() {
      return ({Deprecated: [Deprecated, [String]]});
    }});
  var _Override = function($__super) {
    function _Override() {
      $traceurRuntime.superConstructor(_Override).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Override, {_Override: function() {}}, {}, $__super);
  }(Object);
  dart.setSignature(_Override, {constructors: function() {
      return ({_Override: [_Override, []]});
    }});
  var deprecated = dart.const(new Deprecated("next release"));
  var override = dart.const(new _Override());
  var _Proxy = function($__super) {
    function _Proxy() {
      $traceurRuntime.superConstructor(_Proxy).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Proxy, {_Proxy: function() {}}, {}, $__super);
  }(Object);
  dart.setSignature(_Proxy, {constructors: function() {
      return ({_Proxy: [_Proxy, []]});
    }});
  var proxy = dart.const(new _Proxy());
  dart.defineExtensionNames(['toString']);
  var bool = function($__super) {
    function bool() {
      $traceurRuntime.superConstructor(bool).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(bool, {toString: function() {
        return this ? "true" : "false";
      }}, {fromEnvironment: function(name, opts) {
        var defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : false;
        dart.throw(new UnsupportedError('bool.fromEnvironment can only be used as a const constructor'));
      }}, $__super);
  }(Object);
  dart.setSignature(bool, {constructors: function() {
      return ({fromEnvironment: [bool, [String], {defaultValue: bool}]});
    }});
  var Comparator$ = dart.generic(function(T) {
    var Comparator = dart.typedef('Comparator', function() {
      return dart.functionType(int, [T, T]);
    });
    return Comparator;
  });
  var Comparator = Comparator$();
  var Comparable$ = dart.generic(function(T) {
    var Comparable = function($__super) {
      function Comparable() {
        $traceurRuntime.superConstructor(Comparable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Comparable, {}, {compare: function(a, b) {
          return a[dartx.compareTo](b);
        }}, $__super);
    }(Object);
    dart.setSignature(Comparable, {
      statics: function() {
        return ({compare: [int, [Comparable$(), Comparable$()]]});
      },
      names: ['compare']
    });
    return Comparable;
  });
  var Comparable = Comparable$();
  var DateTime = function($__super) {
    var $__24;
    function DateTime() {
      $traceurRuntime.superConstructor(DateTime).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(DateTime, ($__24 = {}, window.Object.defineProperty($__24, "DateTime", {
      value: function(year, month, day, hour, minute, second, millisecond) {
        if (month === void 0)
          month = 1;
        if (day === void 0)
          day = 1;
        if (hour === void 0)
          hour = 0;
        if (minute === void 0)
          minute = 0;
        if (second === void 0)
          second = 0;
        if (millisecond === void 0)
          millisecond = 0;
        this._internal(year, month, day, hour, minute, second, millisecond, false);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "utc", {
      value: function(year, month, day, hour, minute, second, millisecond) {
        if (month === void 0)
          month = 1;
        if (day === void 0)
          day = 1;
        if (hour === void 0)
          hour = 0;
        if (minute === void 0)
          minute = 0;
        if (second === void 0)
          second = 0;
        if (millisecond === void 0)
          millisecond = 0;
        this._internal(year, month, day, hour, minute, second, millisecond, true);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "now", {
      value: function() {
        this._now();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "fromMillisecondsSinceEpoch", {
      value: function(millisecondsSinceEpoch, opts) {
        var isUtc = opts && 'isUtc' in opts ? opts.isUtc : false;
        this.millisecondsSinceEpoch = millisecondsSinceEpoch;
        this.isUtc = isUtc;
        if (dart.notNull(millisecondsSinceEpoch[dartx.abs]()) > dart.notNull(DateTime._MAX_MILLISECONDS_SINCE_EPOCH)) {
          dart.throw(new ArgumentError(millisecondsSinceEpoch));
        }
        if (isUtc == null)
          dart.throw(new ArgumentError(isUtc));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '==', {
      value: function(other) {
        if (!dart.is(other, DateTime))
          return false;
        return dart.equals(this.millisecondsSinceEpoch, dart.dload(other, 'millisecondsSinceEpoch')) && dart.equals(this.isUtc, dart.dload(other, 'isUtc'));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "isBefore", {
      value: function(other) {
        return dart.notNull(this.millisecondsSinceEpoch) < dart.notNull(other.millisecondsSinceEpoch);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "isAfter", {
      value: function(other) {
        return dart.notNull(this.millisecondsSinceEpoch) > dart.notNull(other.millisecondsSinceEpoch);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "isAtSameMomentAs", {
      value: function(other) {
        return this.millisecondsSinceEpoch == other.millisecondsSinceEpoch;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "compareTo", {
      value: function(other) {
        return this.millisecondsSinceEpoch[dartx.compareTo](other.millisecondsSinceEpoch);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "hashCode", {
      get: function() {
        return this.millisecondsSinceEpoch;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "toLocal", {
      value: function() {
        if (dart.notNull(this.isUtc)) {
          return new DateTime.fromMillisecondsSinceEpoch(this.millisecondsSinceEpoch, {isUtc: false});
        }
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "toUtc", {
      value: function() {
        if (dart.notNull(this.isUtc))
          return this;
        return new DateTime.fromMillisecondsSinceEpoch(this.millisecondsSinceEpoch, {isUtc: true});
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "toString", {
      value: function() {
        var y = DateTime._fourDigits(this.year);
        var m = DateTime._twoDigits(this.month);
        var d = DateTime._twoDigits(this.day);
        var h = DateTime._twoDigits(this.hour);
        var min = DateTime._twoDigits(this.minute);
        var sec = DateTime._twoDigits(this.second);
        var ms = DateTime._threeDigits(this.millisecond);
        if (dart.notNull(this.isUtc)) {
          return (y + "-" + m + "-" + d + " " + h + ":" + min + ":" + sec + "." + ms + "Z");
        } else {
          return (y + "-" + m + "-" + d + " " + h + ":" + min + ":" + sec + "." + ms);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "toIso8601String", {
      value: function() {
        var y = dart.notNull(this.year) >= -9999 && dart.notNull(this.year) <= 9999 ? DateTime._fourDigits(this.year) : DateTime._sixDigits(this.year);
        var m = DateTime._twoDigits(this.month);
        var d = DateTime._twoDigits(this.day);
        var h = DateTime._twoDigits(this.hour);
        var min = DateTime._twoDigits(this.minute);
        var sec = DateTime._twoDigits(this.second);
        var ms = DateTime._threeDigits(this.millisecond);
        if (dart.notNull(this.isUtc)) {
          return (y + "-" + m + "-" + d + "T" + h + ":" + min + ":" + sec + "." + ms + "Z");
        } else {
          return (y + "-" + m + "-" + d + "T" + h + ":" + min + ":" + sec + "." + ms);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "add", {
      value: function(duration) {
        var ms = this.millisecondsSinceEpoch;
        return new DateTime.fromMillisecondsSinceEpoch(dart.notNull(ms) + dart.notNull(duration.inMilliseconds), {isUtc: this.isUtc});
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "subtract", {
      value: function(duration) {
        var ms = this.millisecondsSinceEpoch;
        return new DateTime.fromMillisecondsSinceEpoch(dart.notNull(ms) - dart.notNull(duration.inMilliseconds), {isUtc: this.isUtc});
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "difference", {
      value: function(other) {
        var ms = this.millisecondsSinceEpoch;
        var otherMs = other.millisecondsSinceEpoch;
        return new Duration({milliseconds: dart.notNull(ms) - dart.notNull(otherMs)});
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "_internal", {
      value: function(year, month, day, hour, minute, second, millisecond, isUtc) {
        this.isUtc = typeof isUtc == 'boolean' ? isUtc : dart.throw(new ArgumentError(isUtc));
        this.millisecondsSinceEpoch = dart.as(_js_helper.checkInt(_js_helper.Primitives.valueFromDecomposedDate(year, month, day, hour, minute, second, millisecond, isUtc)), int);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "_now", {
      value: function() {
        this.isUtc = false;
        this.millisecondsSinceEpoch = _js_helper.Primitives.dateNow();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "timeZoneName", {
      get: function() {
        if (dart.notNull(this.isUtc))
          return "UTC";
        return _js_helper.Primitives.getTimeZoneName(this);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "timeZoneOffset", {
      get: function() {
        if (dart.notNull(this.isUtc))
          return new Duration();
        return new Duration({minutes: _js_helper.Primitives.getTimeZoneOffsetInMinutes(this)});
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "year", {
      get: function() {
        return dart.as(_js_helper.Primitives.getYear(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "month", {
      get: function() {
        return dart.as(_js_helper.Primitives.getMonth(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "day", {
      get: function() {
        return dart.as(_js_helper.Primitives.getDay(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "hour", {
      get: function() {
        return dart.as(_js_helper.Primitives.getHours(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "minute", {
      get: function() {
        return dart.as(_js_helper.Primitives.getMinutes(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "second", {
      get: function() {
        return dart.as(_js_helper.Primitives.getSeconds(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "millisecond", {
      get: function() {
        return dart.as(_js_helper.Primitives.getMilliseconds(this), int);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "weekday", {
      get: function() {
        return dart.as(_js_helper.Primitives.getWeekday(this), int);
      },
      configurable: true,
      enumerable: true
    }), $__24), {
      parse: function(formattedString) {
        var re = RegExp.new('^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)' + '(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(.\\d{1,6})?)?)?' + '( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$');
        var match = re.firstMatch(formattedString);
        if (match != null) {
          var parseIntOrZero = function(matched) {
            if (matched == null)
              return 0;
            return int.parse(matched);
          };
          var parseDoubleOrZero = function(matched) {
            if (matched == null)
              return 0.0;
            return double.parse(matched);
          };
          dart.fn(parseIntOrZero, int, [String]);
          dart.fn(parseDoubleOrZero, double, [String]);
          var years = int.parse(match.get(1));
          var month = int.parse(match.get(2));
          var day = int.parse(match.get(3));
          var hour = parseIntOrZero(match.get(4));
          var minute = parseIntOrZero(match.get(5));
          var second = parseIntOrZero(match.get(6));
          var addOneMillisecond = false;
          var millisecond = (dart.notNull(parseDoubleOrZero(match.get(7))) * 1000)[dartx.round]();
          if (millisecond == 1000) {
            addOneMillisecond = true;
            millisecond = 999;
          }
          var isUtc = false;
          if (match.get(8) != null) {
            isUtc = true;
            if (match.get(9) != null) {
              var sign = match.get(9) == '-' ? -1 : 1;
              var hourDifference = int.parse(match.get(10));
              var minuteDifference = parseIntOrZero(match.get(11));
              minuteDifference = dart.notNull(minuteDifference) + 60 * dart.notNull(hourDifference);
              minute = dart.notNull(minute) - dart.notNull(sign) * dart.notNull(minuteDifference);
            }
          }
          var millisecondsSinceEpoch = DateTime._brokenDownDateToMillisecondsSinceEpoch(years, month, day, hour, minute, second, millisecond, isUtc);
          if (millisecondsSinceEpoch == null) {
            dart.throw(new FormatException("Time out of range", formattedString));
          }
          if (dart.notNull(addOneMillisecond)) {
            millisecondsSinceEpoch = dart.notNull(millisecondsSinceEpoch) + 1;
          }
          return new DateTime.fromMillisecondsSinceEpoch(millisecondsSinceEpoch, {isUtc: isUtc});
        } else {
          dart.throw(new FormatException("Invalid date format", formattedString));
        }
      },
      _fourDigits: function(n) {
        var absN = n[dartx.abs]();
        var sign = dart.notNull(n) < 0 ? "-" : "";
        if (dart.notNull(absN) >= 1000)
          return ("" + n);
        if (dart.notNull(absN) >= 100)
          return (sign + "0" + absN);
        if (dart.notNull(absN) >= 10)
          return (sign + "00" + absN);
        return (sign + "000" + absN);
      },
      _sixDigits: function(n) {
        dart.assert(dart.notNull(n) < -9999 || dart.notNull(n) > 9999);
        var absN = n[dartx.abs]();
        var sign = dart.notNull(n) < 0 ? "-" : "+";
        if (dart.notNull(absN) >= 100000)
          return ("" + sign + absN);
        return (sign + "0" + absN);
      },
      _threeDigits: function(n) {
        if (dart.notNull(n) >= 100)
          return ("" + n);
        if (dart.notNull(n) >= 10)
          return ("0" + n);
        return ("00" + n);
      },
      _twoDigits: function(n) {
        if (dart.notNull(n) >= 10)
          return ("" + n);
        return ("0" + n);
      },
      _brokenDownDateToMillisecondsSinceEpoch: function(year, month, day, hour, minute, second, millisecond, isUtc) {
        return dart.as(_js_helper.Primitives.valueFromDecomposedDate(year, month, day, hour, minute, second, millisecond, isUtc), int);
      }
    }, $__super);
  }(Object);
  DateTime[dart.implements] = function() {
    return [Comparable];
  };
  dart.defineNamedConstructor(DateTime, 'utc');
  dart.defineNamedConstructor(DateTime, 'now');
  dart.defineNamedConstructor(DateTime, 'fromMillisecondsSinceEpoch');
  dart.defineNamedConstructor(DateTime, '_internal');
  dart.defineNamedConstructor(DateTime, '_now');
  dart.setSignature(DateTime, {
    constructors: function() {
      return ({
        DateTime: [DateTime, [int], [int, int, int, int, int, int]],
        utc: [DateTime, [int], [int, int, int, int, int, int]],
        now: [DateTime, []],
        fromMillisecondsSinceEpoch: [DateTime, [int], {isUtc: bool}],
        _internal: [DateTime, [int, int, int, int, int, int, int, bool]],
        _now: [DateTime, []]
      });
    },
    methods: function() {
      return ({
        isBefore: [bool, [DateTime]],
        isAfter: [bool, [DateTime]],
        isAtSameMomentAs: [bool, [DateTime]],
        compareTo: [int, [DateTime]],
        toLocal: [DateTime, []],
        toUtc: [DateTime, []],
        toIso8601String: [String, []],
        add: [DateTime, [Duration]],
        subtract: [DateTime, [Duration]],
        difference: [Duration, [DateTime]]
      });
    },
    statics: function() {
      return ({
        parse: [DateTime, [String]],
        _fourDigits: [String, [int]],
        _sixDigits: [String, [int]],
        _threeDigits: [String, [int]],
        _twoDigits: [String, [int]],
        _brokenDownDateToMillisecondsSinceEpoch: [int, [int, int, int, int, int, int, int, bool]]
      });
    },
    names: ['parse', '_fourDigits', '_sixDigits', '_threeDigits', '_twoDigits', '_brokenDownDateToMillisecondsSinceEpoch']
  });
  dart.defineExtensionMembers(DateTime, ['compareTo']);
  DateTime.MONDAY = 1;
  DateTime.TUESDAY = 2;
  DateTime.WEDNESDAY = 3;
  DateTime.THURSDAY = 4;
  DateTime.FRIDAY = 5;
  DateTime.SATURDAY = 6;
  DateTime.SUNDAY = 7;
  DateTime.DAYS_PER_WEEK = 7;
  DateTime.JANUARY = 1;
  DateTime.FEBRUARY = 2;
  DateTime.MARCH = 3;
  DateTime.APRIL = 4;
  DateTime.MAY = 5;
  DateTime.JUNE = 6;
  DateTime.JULY = 7;
  DateTime.AUGUST = 8;
  DateTime.SEPTEMBER = 9;
  DateTime.OCTOBER = 10;
  DateTime.NOVEMBER = 11;
  DateTime.DECEMBER = 12;
  DateTime.MONTHS_PER_YEAR = 12;
  DateTime._MAX_MILLISECONDS_SINCE_EPOCH = 8640000000000000;
  var num = function($__super) {
    function num() {
      $traceurRuntime.superConstructor(num).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(num, {}, {
      parse: function(input, onError) {
        if (onError === void 0)
          onError = null;
        var source = input[dartx.trim]();
        num._parseError = false;
        var result = int.parse(source, {onError: num._onParseErrorInt});
        if (!dart.notNull(num._parseError))
          return result;
        num._parseError = false;
        result = double.parse(source, num._onParseErrorDouble);
        if (!dart.notNull(num._parseError))
          return result;
        if (onError == null)
          dart.throw(new FormatException(input));
        return onError(input);
      },
      _onParseErrorInt: function(_) {
        num._parseError = true;
        return 0;
      },
      _onParseErrorDouble: function(_) {
        num._parseError = true;
        return 0.0;
      }
    }, $__super);
  }(Object);
  num[dart.implements] = function() {
    return [Comparable$(num)];
  };
  dart.setSignature(num, {
    statics: function() {
      return ({
        parse: [num, [String], [dart.functionType(num, [String])]],
        _onParseErrorInt: [int, [String]],
        _onParseErrorDouble: [double, [String]]
      });
    },
    names: ['parse', '_onParseErrorInt', '_onParseErrorDouble']
  });
  var double = function($__super) {
    function double() {
      $traceurRuntime.superConstructor(double).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(double, {}, {parse: function(source, onError) {
        if (onError === void 0)
          onError = null;
        return _js_helper.Primitives.parseDouble(source, onError);
      }}, $__super);
  }(num);
  dart.setSignature(double, {
    statics: function() {
      return ({parse: [double, [String], [dart.functionType(double, [String])]]});
    },
    names: ['parse']
  });
  double.NAN = 0.0 / 0.0;
  double.INFINITY = 1.0 / 0.0;
  double.NEGATIVE_INFINITY = -dart.notNull(double.INFINITY);
  double.MIN_POSITIVE = 5e-324;
  double.MAX_FINITE = 1.7976931348623157e+308;
  var _duration = dart.JsSymbol('_duration');
  var Duration = function($__super) {
    var $__24;
    function Duration() {
      $traceurRuntime.superConstructor(Duration).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Duration, ($__24 = {}, window.Object.defineProperty($__24, "Duration", {
      value: function(opts) {
        var days = opts && 'days' in opts ? opts.days : 0;
        var hours = opts && 'hours' in opts ? opts.hours : 0;
        var minutes = opts && 'minutes' in opts ? opts.minutes : 0;
        var seconds = opts && 'seconds' in opts ? opts.seconds : 0;
        var milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
        var microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
        this._microseconds(dart.notNull(days) * dart.notNull(Duration.MICROSECONDS_PER_DAY) + dart.notNull(hours) * dart.notNull(Duration.MICROSECONDS_PER_HOUR) + dart.notNull(minutes) * dart.notNull(Duration.MICROSECONDS_PER_MINUTE) + dart.notNull(seconds) * dart.notNull(Duration.MICROSECONDS_PER_SECOND) + dart.notNull(milliseconds) * dart.notNull(Duration.MICROSECONDS_PER_MILLISECOND) + dart.notNull(microseconds));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "_microseconds", {
      value: function(duration) {
        this[_duration] = duration;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '+', {
      value: function(other) {
        return new Duration._microseconds(dart.notNull(this[_duration]) + dart.notNull(other[_duration]));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '-', {
      value: function(other) {
        return new Duration._microseconds(dart.notNull(this[_duration]) - dart.notNull(other[_duration]));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '*', {
      value: function(factor) {
        return new Duration._microseconds((dart.notNull(this[_duration]) * dart.notNull(factor))[dartx.round]());
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '~/', {
      value: function(quotient) {
        if (quotient == 0)
          dart.throw(new IntegerDivisionByZeroException());
        return new Duration._microseconds((dart.notNull(this[_duration]) / dart.notNull(quotient))[dartx.truncate]());
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '<', {
      value: function(other) {
        return dart.notNull(this[_duration]) < dart.notNull(other[_duration]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '>', {
      value: function(other) {
        return dart.notNull(this[_duration]) > dart.notNull(other[_duration]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '<=', {
      value: function(other) {
        return dart.notNull(this[_duration]) <= dart.notNull(other[_duration]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '>=', {
      value: function(other) {
        return dart.notNull(this[_duration]) >= dart.notNull(other[_duration]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "inDays", {
      get: function() {
        return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_DAY))[dartx.truncate]();
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "inHours", {
      get: function() {
        return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_HOUR))[dartx.truncate]();
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "inMinutes", {
      get: function() {
        return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_MINUTE))[dartx.truncate]();
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "inSeconds", {
      get: function() {
        return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_SECOND))[dartx.truncate]();
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "inMilliseconds", {
      get: function() {
        return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_MILLISECOND))[dartx.truncate]();
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "inMicroseconds", {
      get: function() {
        return this[_duration];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, '==', {
      value: function(other) {
        if (!dart.is(other, Duration))
          return false;
        return dart.equals(this[_duration], dart.dload(other, _duration));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "hashCode", {
      get: function() {
        return dart.hashCode(this[_duration]);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "compareTo", {
      value: function(other) {
        return this[_duration][dartx.compareTo](other[_duration]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "toString", {
      value: function() {
        function sixDigits(n) {
          if (dart.notNull(n) >= 100000)
            return ("" + n);
          if (dart.notNull(n) >= 10000)
            return ("0" + n);
          if (dart.notNull(n) >= 1000)
            return ("00" + n);
          if (dart.notNull(n) >= 100)
            return ("000" + n);
          if (dart.notNull(n) >= 10)
            return ("0000" + n);
          return ("00000" + n);
        }
        dart.fn(sixDigits, String, [int]);
        function twoDigits(n) {
          if (dart.notNull(n) >= 10)
            return ("" + n);
          return ("0" + n);
        }
        dart.fn(twoDigits, String, [int]);
        if (dart.notNull(this.inMicroseconds) < 0) {
          return ("-" + this['unary-']());
        }
        var twoDigitMinutes = twoDigits(dart.asInt(this.inMinutes[dartx.remainder](Duration.MINUTES_PER_HOUR)));
        var twoDigitSeconds = twoDigits(dart.asInt(this.inSeconds[dartx.remainder](Duration.SECONDS_PER_MINUTE)));
        var sixDigitUs = sixDigits(dart.asInt(this.inMicroseconds[dartx.remainder](Duration.MICROSECONDS_PER_SECOND)));
        return (this.inHours + ":" + twoDigitMinutes + ":" + twoDigitSeconds + "." + sixDigitUs);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "isNegative", {
      get: function() {
        return dart.notNull(this[_duration]) < 0;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "abs", {
      value: function() {
        return new Duration._microseconds(this[_duration][dartx.abs]());
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, 'unary-', {
      value: function() {
        return new Duration._microseconds(-dart.notNull(this[_duration]));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__24), {}, $__super);
  }(Object);
  Duration[dart.implements] = function() {
    return [Comparable$(Duration)];
  };
  dart.defineNamedConstructor(Duration, '_microseconds');
  dart.setSignature(Duration, {
    constructors: function() {
      return ({
        Duration: [Duration, [], {
          days: int,
          hours: int,
          minutes: int,
          seconds: int,
          milliseconds: int,
          microseconds: int
        }],
        _microseconds: [Duration, [int]]
      });
    },
    methods: function() {
      return ({
        '+': [Duration, [Duration]],
        '-': [Duration, [Duration]],
        '*': [Duration, [num]],
        '~/': [Duration, [int]],
        '<': [bool, [Duration]],
        '>': [bool, [Duration]],
        '<=': [bool, [Duration]],
        '>=': [bool, [Duration]],
        compareTo: [int, [Duration]],
        abs: [Duration, []],
        'unary-': [Duration, []]
      });
    }
  });
  dart.defineExtensionMembers(Duration, ['compareTo']);
  Duration.MICROSECONDS_PER_MILLISECOND = 1000;
  Duration.MILLISECONDS_PER_SECOND = 1000;
  Duration.SECONDS_PER_MINUTE = 60;
  Duration.MINUTES_PER_HOUR = 60;
  Duration.HOURS_PER_DAY = 24;
  Duration.MICROSECONDS_PER_SECOND = dart.notNull(Duration.MICROSECONDS_PER_MILLISECOND) * dart.notNull(Duration.MILLISECONDS_PER_SECOND);
  Duration.MICROSECONDS_PER_MINUTE = dart.notNull(Duration.MICROSECONDS_PER_SECOND) * dart.notNull(Duration.SECONDS_PER_MINUTE);
  Duration.MICROSECONDS_PER_HOUR = dart.notNull(Duration.MICROSECONDS_PER_MINUTE) * dart.notNull(Duration.MINUTES_PER_HOUR);
  Duration.MICROSECONDS_PER_DAY = dart.notNull(Duration.MICROSECONDS_PER_HOUR) * dart.notNull(Duration.HOURS_PER_DAY);
  Duration.MILLISECONDS_PER_MINUTE = dart.notNull(Duration.MILLISECONDS_PER_SECOND) * dart.notNull(Duration.SECONDS_PER_MINUTE);
  Duration.MILLISECONDS_PER_HOUR = dart.notNull(Duration.MILLISECONDS_PER_MINUTE) * dart.notNull(Duration.MINUTES_PER_HOUR);
  Duration.MILLISECONDS_PER_DAY = dart.notNull(Duration.MILLISECONDS_PER_HOUR) * dart.notNull(Duration.HOURS_PER_DAY);
  Duration.SECONDS_PER_HOUR = dart.notNull(Duration.SECONDS_PER_MINUTE) * dart.notNull(Duration.MINUTES_PER_HOUR);
  Duration.SECONDS_PER_DAY = dart.notNull(Duration.SECONDS_PER_HOUR) * dart.notNull(Duration.HOURS_PER_DAY);
  Duration.MINUTES_PER_DAY = dart.notNull(Duration.MINUTES_PER_HOUR) * dart.notNull(Duration.HOURS_PER_DAY);
  Duration.ZERO = dart.const(new Duration({seconds: 0}));
  var Error = function($__super) {
    function Error() {
      $traceurRuntime.superConstructor(Error).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Error, {
      Error: function() {},
      get stackTrace() {
        return _js_helper.Primitives.extractStackTrace(this);
      }
    }, {
      safeToString: function(object) {
        if (typeof object == 'number' || typeof object == 'boolean' || null == object) {
          return dart.toString(object);
        }
        if (typeof object == 'string') {
          return Error._stringToSafeString(object);
        }
        return Error._objectToString(object);
      },
      _stringToSafeString: function(string) {
        return _js_helper.jsonEncodeNative(string);
      },
      _objectToString: function(object) {
        return _js_helper.Primitives.objectToString(object);
      }
    }, $__super);
  }(Object);
  dart.setSignature(Error, {
    constructors: function() {
      return ({Error: [Error, []]});
    },
    statics: function() {
      return ({
        safeToString: [String, [Object]],
        _stringToSafeString: [String, [String]],
        _objectToString: [String, [Object]]
      });
    },
    names: ['safeToString', '_stringToSafeString', '_objectToString']
  });
  var AssertionError = function($__super) {
    function AssertionError() {
      $traceurRuntime.superConstructor(AssertionError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(AssertionError, {AssertionError: function() {
        $traceurRuntime.superGet(this, AssertionError.prototype, "Error").call(this);
      }}, {}, $__super);
  }(Error);
  var TypeError = function($__super) {
    function TypeError() {
      $traceurRuntime.superConstructor(TypeError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TypeError, {}, {}, $__super);
  }(AssertionError);
  var CastError = function($__super) {
    function CastError() {
      $traceurRuntime.superConstructor(CastError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CastError, {CastError: function() {
        $traceurRuntime.superGet(this, CastError.prototype, "Error").call(this);
      }}, {}, $__super);
  }(Error);
  var NullThrownError = function($__super) {
    function NullThrownError() {
      $traceurRuntime.superConstructor(NullThrownError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NullThrownError, {
      NullThrownError: function() {
        $traceurRuntime.superGet(this, NullThrownError.prototype, "Error").call(this);
      },
      toString: function() {
        return "Throw of null.";
      }
    }, {}, $__super);
  }(Error);
  var _hasValue = dart.JsSymbol('_hasValue');
  var ArgumentError = function($__super) {
    function ArgumentError() {
      $traceurRuntime.superConstructor(ArgumentError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ArgumentError, {
      ArgumentError: function(message) {
        if (message === void 0)
          message = null;
        this.message = message;
        this.invalidValue = null;
        this[_hasValue] = false;
        this.name = null;
        $traceurRuntime.superGet(this, ArgumentError.prototype, "Error").call(this);
      },
      value: function(value, name, message) {
        if (name === void 0)
          name = null;
        if (message === void 0)
          message = "Invalid argument";
        this.name = name;
        this.message = message;
        this.invalidValue = value;
        this[_hasValue] = true;
        $traceurRuntime.superGet(this, ArgumentError.prototype, "Error").call(this);
      },
      notNull: function(name) {
        if (name === void 0)
          name = null;
        this.value(null, name, "Must not be null");
      },
      toString: function() {
        if (!dart.notNull(this[_hasValue])) {
          var result = "Invalid arguments(s)";
          if (this.message != null) {
            result = (result + ": " + this.message);
          }
          return result;
        }
        var nameString = "";
        if (this.name != null) {
          nameString = (" (" + this.name + ")");
        }
        return ("" + this.message + nameString + ": " + Error.safeToString(this.invalidValue));
      }
    }, {}, $__super);
  }(Error);
  dart.defineNamedConstructor(ArgumentError, 'value');
  dart.defineNamedConstructor(ArgumentError, 'notNull');
  dart.setSignature(ArgumentError, {constructors: function() {
      return ({
        ArgumentError: [ArgumentError, [], [dart.dynamic]],
        value: [ArgumentError, [dart.dynamic], [String, String]],
        notNull: [ArgumentError, [], [String]]
      });
    }});
  var RangeError = function($__super) {
    function RangeError() {
      $traceurRuntime.superConstructor(RangeError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RangeError, {
      RangeError: function(message) {
        this.start = null;
        this.end = null;
        $traceurRuntime.superGet(this, RangeError.prototype, "ArgumentError").call(this, message);
      },
      value: function(value, name, message) {
        if (name === void 0)
          name = null;
        if (message === void 0)
          message = null;
        this.start = null;
        this.end = null;
        $traceurRuntime.superGet(this, RangeError.prototype, "value").call(this, value, name, message != null ? message : "Value not in range");
      },
      range: function(invalidValue, minValue, maxValue, name, message) {
        if (name === void 0)
          name = null;
        if (message === void 0)
          message = null;
        this.start = minValue;
        this.end = maxValue;
        $traceurRuntime.superGet(this, RangeError.prototype, "value").call(this, invalidValue, name, message != null ? message : "Invalid value");
      },
      toString: function() {
        if (!dart.notNull(this[_hasValue]))
          return ("RangeError: " + this.message);
        var value = Error.safeToString(this.invalidValue);
        var explanation = "";
        if (this.start == null) {
          if (this.end != null) {
            explanation = (": Not less than or equal to " + this.end);
          }
        } else if (this.end == null) {
          explanation = (": Not greater than or equal to " + this.start);
        } else if (dart.notNull(this.end) > dart.notNull(this.start)) {
          explanation = (": Not in range " + this.start + ".." + this.end + ", inclusive.");
        } else if (dart.notNull(this.end) < dart.notNull(this.start)) {
          explanation = ": Valid value range is empty";
        } else {
          explanation = (": Only valid value is " + this.start);
        }
        return ("RangeError: " + this.message + " (" + value + ")" + explanation);
      }
    }, {
      index: function(index, indexable, name, message, length) {
        return new IndexError(index, indexable, name, message, length);
      },
      checkValueInInterval: function(value, minValue, maxValue, name, message) {
        if (name === void 0)
          name = null;
        if (message === void 0)
          message = null;
        if (dart.notNull(value) < dart.notNull(minValue) || dart.notNull(value) > dart.notNull(maxValue)) {
          dart.throw(new RangeError.range(value, minValue, maxValue, name, message));
        }
      },
      checkValidIndex: function(index, indexable, name, length, message) {
        if (name === void 0)
          name = null;
        if (length === void 0)
          length = null;
        if (message === void 0)
          message = null;
        if (length == null)
          length = dart.as(dart.dload(indexable, 'length'), int);
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(length)) {
          if (name == null)
            name = "index";
          dart.throw(RangeError.index(index, indexable, name, message, length));
        }
      },
      checkValidRange: function(start, end, length, startName, endName, message) {
        if (startName === void 0)
          startName = null;
        if (endName === void 0)
          endName = null;
        if (message === void 0)
          message = null;
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(length)) {
          if (startName == null)
            startName = "start";
          dart.throw(new RangeError.range(start, 0, length, startName, message));
        }
        if (end != null && (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(length))) {
          if (endName == null)
            endName = "end";
          dart.throw(new RangeError.range(end, start, length, endName, message));
        }
      },
      checkNotNegative: function(value, name, message) {
        if (name === void 0)
          name = null;
        if (message === void 0)
          message = null;
        if (dart.notNull(value) < 0)
          dart.throw(new RangeError.range(value, 0, null, name, message));
      }
    }, $__super);
  }(ArgumentError);
  dart.defineNamedConstructor(RangeError, 'value');
  dart.defineNamedConstructor(RangeError, 'range');
  dart.setSignature(RangeError, {
    constructors: function() {
      return ({
        RangeError: [RangeError, [dart.dynamic]],
        value: [RangeError, [num], [String, String]],
        range: [RangeError, [num, int, int], [String, String]],
        index: [RangeError, [int, dart.dynamic], [String, String, int]]
      });
    },
    statics: function() {
      return ({
        checkValueInInterval: [dart.void, [int, int, int], [String, String]],
        checkValidIndex: [dart.void, [int, dart.dynamic], [String, int, String]],
        checkValidRange: [dart.void, [int, int, int], [String, String, String]],
        checkNotNegative: [dart.void, [int], [String, String]]
      });
    },
    names: ['checkValueInInterval', 'checkValidIndex', 'checkValidRange', 'checkNotNegative']
  });
  var IndexError = function($__super) {
    function IndexError() {
      $traceurRuntime.superConstructor(IndexError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(IndexError, {
      IndexError: function(invalidValue, indexable, name, message, length) {
        if (name === void 0)
          name = null;
        if (message === void 0)
          message = null;
        if (length === void 0)
          length = null;
        this.indexable = indexable;
        this.length = length != null ? length : dart.as(dart.dload(indexable, 'length'), int);
        $traceurRuntime.superGet(this, IndexError.prototype, "value").call(this, invalidValue, name, message != null ? message : "Index out of range");
      },
      get start() {
        return 0;
      },
      get end() {
        return dart.notNull(this.length) - 1;
      },
      toString: function() {
        dart.assert(this[_hasValue]);
        var target = Error.safeToString(this.indexable);
        var explanation = ("index should be less than " + this.length);
        if (dart.notNull(dart.as(dart.dsend(this.invalidValue, '<', 0), bool))) {
          explanation = "index must not be negative";
        }
        return ("RangeError: " + this.message + " (" + target + "[" + this.invalidValue + "]): " + explanation);
      }
    }, {}, $__super);
  }(ArgumentError);
  IndexError[dart.implements] = function() {
    return [RangeError];
  };
  dart.setSignature(IndexError, {constructors: function() {
      return ({IndexError: [IndexError, [int, dart.dynamic], [String, String, int]]});
    }});
  var FallThroughError = function($__super) {
    function FallThroughError() {
      $traceurRuntime.superConstructor(FallThroughError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(FallThroughError, {FallThroughError: function() {
        $traceurRuntime.superGet(this, FallThroughError.prototype, "Error").call(this);
      }}, {}, $__super);
  }(Error);
  dart.setSignature(FallThroughError, {constructors: function() {
      return ({FallThroughError: [FallThroughError, []]});
    }});
  var _className = dart.JsSymbol('_className');
  var AbstractClassInstantiationError = function($__super) {
    function AbstractClassInstantiationError() {
      $traceurRuntime.superConstructor(AbstractClassInstantiationError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(AbstractClassInstantiationError, {
      AbstractClassInstantiationError: function(className) {
        this[_className] = className;
        $traceurRuntime.superGet(this, AbstractClassInstantiationError.prototype, "Error").call(this);
      },
      toString: function() {
        return ("Cannot instantiate abstract class: '" + this[_className] + "'");
      }
    }, {}, $__super);
  }(Error);
  dart.setSignature(AbstractClassInstantiationError, {constructors: function() {
      return ({AbstractClassInstantiationError: [AbstractClassInstantiationError, [String]]});
    }});
  var _receiver = dart.JsSymbol('_receiver');
  var _memberName = dart.JsSymbol('_memberName');
  var _arguments = dart.JsSymbol('_arguments');
  var _namedArguments = dart.JsSymbol('_namedArguments');
  var _existingArgumentNames = dart.JsSymbol('_existingArgumentNames');
  var NoSuchMethodError = function($__super) {
    function NoSuchMethodError() {
      $traceurRuntime.superConstructor(NoSuchMethodError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NoSuchMethodError, {
      NoSuchMethodError: function(receiver, memberName, positionalArguments, namedArguments, existingArgumentNames) {
        if (existingArgumentNames === void 0)
          existingArgumentNames = null;
        this[_receiver] = receiver;
        this[_memberName] = memberName;
        this[_arguments] = positionalArguments;
        this[_namedArguments] = namedArguments;
        this[_existingArgumentNames] = existingArgumentNames;
        $traceurRuntime.superGet(this, NoSuchMethodError.prototype, "Error").call(this);
      },
      toString: function() {
        var sb = new StringBuffer();
        var i = 0;
        if (this[_arguments] != null) {
          for (; dart.notNull(i) < dart.notNull(this[_arguments][dartx.length]); i = dart.notNull(i) + 1) {
            if (dart.notNull(i) > 0) {
              sb.write(", ");
            }
            sb.write(Error.safeToString(this[_arguments][dartx.get](i)));
          }
        }
        if (this[_namedArguments] != null) {
          this[_namedArguments].forEach(dart.fn(function(key, value) {
            if (dart.notNull(i) > 0) {
              sb.write(", ");
            }
            sb.write(_symbolToString(key));
            sb.write(": ");
            sb.write(Error.safeToString(value));
            i = dart.notNull(i) + 1;
          }, dart.dynamic, [Symbol, dart.dynamic]));
        }
        if (this[_existingArgumentNames] == null) {
          return ("NoSuchMethodError : method not found: '" + this[_memberName] + "'\n") + ("Receiver: " + Error.safeToString(this[_receiver]) + "\n") + ("Arguments: [" + sb + "]");
        } else {
          var actualParameters = dart.toString(sb);
          sb = new StringBuffer();
          for (var i$__33 = 0; dart.notNull(i$__33) < dart.notNull(this[_existingArgumentNames][dartx.length]); i$__33 = dart.notNull(i$__33) + 1) {
            if (dart.notNull(i$__33) > 0) {
              sb.write(", ");
            }
            sb.write(this[_existingArgumentNames][dartx.get](i$__33));
          }
          var formalParameters = dart.toString(sb);
          return "NoSuchMethodError: incorrect number of arguments passed to " + ("method named '" + this[_memberName] + "'\n") + ("Receiver: " + Error.safeToString(this[_receiver]) + "\n") + ("Tried calling: " + this[_memberName] + "(" + actualParameters + ")\n") + ("Found: " + this[_memberName] + "(" + formalParameters + ")");
        }
      }
    }, {}, $__super);
  }(Error);
  dart.setSignature(NoSuchMethodError, {constructors: function() {
      return ({NoSuchMethodError: [NoSuchMethodError, [Object, Symbol, List, Map$(Symbol, dart.dynamic)], [List]]});
    }});
  var UnsupportedError = function($__super) {
    function UnsupportedError() {
      $traceurRuntime.superConstructor(UnsupportedError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(UnsupportedError, {
      UnsupportedError: function(message) {
        this.message = message;
        $traceurRuntime.superGet(this, UnsupportedError.prototype, "Error").call(this);
      },
      toString: function() {
        return ("Unsupported operation: " + this.message);
      }
    }, {}, $__super);
  }(Error);
  dart.setSignature(UnsupportedError, {constructors: function() {
      return ({UnsupportedError: [UnsupportedError, [String]]});
    }});
  var UnimplementedError = function($__super) {
    function UnimplementedError() {
      $traceurRuntime.superConstructor(UnimplementedError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(UnimplementedError, {
      UnimplementedError: function(message) {
        if (message === void 0)
          message = null;
        this.message = message;
        $traceurRuntime.superGet(this, UnimplementedError.prototype, "Error").call(this);
      },
      toString: function() {
        return this.message != null ? ("UnimplementedError: " + this.message) : "UnimplementedError";
      }
    }, {}, $__super);
  }(Error);
  UnimplementedError[dart.implements] = function() {
    return [UnsupportedError];
  };
  dart.setSignature(UnimplementedError, {constructors: function() {
      return ({UnimplementedError: [UnimplementedError, [], [String]]});
    }});
  var StateError = function($__super) {
    function StateError() {
      $traceurRuntime.superConstructor(StateError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StateError, {
      StateError: function(message) {
        this.message = message;
        $traceurRuntime.superGet(this, StateError.prototype, "Error").call(this);
      },
      toString: function() {
        return ("Bad state: " + this.message);
      }
    }, {}, $__super);
  }(Error);
  dart.setSignature(StateError, {constructors: function() {
      return ({StateError: [StateError, [String]]});
    }});
  var ConcurrentModificationError = function($__super) {
    function ConcurrentModificationError() {
      $traceurRuntime.superConstructor(ConcurrentModificationError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ConcurrentModificationError, {
      ConcurrentModificationError: function(modifiedObject) {
        if (modifiedObject === void 0)
          modifiedObject = null;
        this.modifiedObject = modifiedObject;
        $traceurRuntime.superGet(this, ConcurrentModificationError.prototype, "Error").call(this);
      },
      toString: function() {
        if (this.modifiedObject == null) {
          return "Concurrent modification during iteration.";
        }
        return "Concurrent modification during iteration: " + (Error.safeToString(this.modifiedObject) + ".");
      }
    }, {}, $__super);
  }(Error);
  dart.setSignature(ConcurrentModificationError, {constructors: function() {
      return ({ConcurrentModificationError: [ConcurrentModificationError, [], [Object]]});
    }});
  var OutOfMemoryError = function($__super) {
    function OutOfMemoryError() {
      $traceurRuntime.superConstructor(OutOfMemoryError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(OutOfMemoryError, {
      OutOfMemoryError: function() {},
      toString: function() {
        return "Out of Memory";
      },
      get stackTrace() {
        return null;
      }
    }, {}, $__super);
  }(Object);
  OutOfMemoryError[dart.implements] = function() {
    return [Error];
  };
  dart.setSignature(OutOfMemoryError, {constructors: function() {
      return ({OutOfMemoryError: [OutOfMemoryError, []]});
    }});
  var StackOverflowError = function($__super) {
    function StackOverflowError() {
      $traceurRuntime.superConstructor(StackOverflowError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StackOverflowError, {
      StackOverflowError: function() {},
      toString: function() {
        return "Stack Overflow";
      },
      get stackTrace() {
        return null;
      }
    }, {}, $__super);
  }(Object);
  StackOverflowError[dart.implements] = function() {
    return [Error];
  };
  dart.setSignature(StackOverflowError, {constructors: function() {
      return ({StackOverflowError: [StackOverflowError, []]});
    }});
  var CyclicInitializationError = function($__super) {
    function CyclicInitializationError() {
      $traceurRuntime.superConstructor(CyclicInitializationError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CyclicInitializationError, {
      CyclicInitializationError: function(variableName) {
        if (variableName === void 0)
          variableName = null;
        this.variableName = variableName;
        $traceurRuntime.superGet(this, CyclicInitializationError.prototype, "Error").call(this);
      },
      toString: function() {
        return this.variableName == null ? "Reading static variable during its initialization" : ("Reading static variable '" + this.variableName + "' during its initialization");
      }
    }, {}, $__super);
  }(Error);
  dart.setSignature(CyclicInitializationError, {constructors: function() {
      return ({CyclicInitializationError: [CyclicInitializationError, [], [String]]});
    }});
  var Exception = function($__super) {
    function Exception() {
      $traceurRuntime.superConstructor(Exception).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Exception, {}, {new: function(message) {
        if (message === void 0)
          message = null;
        return new _ExceptionImplementation(message);
      }}, $__super);
  }(Object);
  dart.setSignature(Exception, {constructors: function() {
      return ({new: [Exception, [], [dart.dynamic]]});
    }});
  var _ExceptionImplementation = function($__super) {
    function _ExceptionImplementation() {
      $traceurRuntime.superConstructor(_ExceptionImplementation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ExceptionImplementation, {
      _ExceptionImplementation: function(message) {
        if (message === void 0)
          message = null;
        this.message = message;
      },
      toString: function() {
        if (this.message == null)
          return "Exception";
        return ("Exception: " + this.message);
      }
    }, {}, $__super);
  }(Object);
  _ExceptionImplementation[dart.implements] = function() {
    return [Exception];
  };
  dart.setSignature(_ExceptionImplementation, {constructors: function() {
      return ({_ExceptionImplementation: [_ExceptionImplementation, [], [dart.dynamic]]});
    }});
  var FormatException = function($__super) {
    function FormatException() {
      $traceurRuntime.superConstructor(FormatException).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(FormatException, {
      FormatException: function(message, source, offset) {
        if (message === void 0)
          message = "";
        if (source === void 0)
          source = null;
        if (offset === void 0)
          offset = -1;
        this.message = message;
        this.source = source;
        this.offset = offset;
      },
      toString: function() {
        var report = "FormatException";
        if (this.message != null && "" != this.message) {
          report = (report + ": " + this.message);
        }
        var offset = this.offset;
        if (!(typeof this.source == 'string')) {
          if (offset != -1) {
            report = dart.notNull(report) + (" (at offset " + offset + ")");
          }
          return report;
        }
        if (offset != -1 && (dart.notNull(offset) < 0 || dart.notNull(offset) > dart.notNull(dart.as(dart.dload(this.source, 'length'), num)))) {
          offset = -1;
        }
        if (offset == -1) {
          var source = dart.as(this.source, String);
          if (dart.notNull(source[dartx.length]) > 78) {
            source = dart.notNull(source[dartx.substring](0, 75)) + "...";
          }
          return (report + "\n" + source);
        }
        var lineNum = 1;
        var lineStart = 0;
        var lastWasCR = null;
        for (var i = 0; dart.notNull(i) < dart.notNull(offset); i = dart.notNull(i) + 1) {
          var char = dart.as(dart.dsend(this.source, 'codeUnitAt', i), int);
          if (char == 10) {
            if (lineStart != i || !dart.notNull(lastWasCR)) {
              lineNum = dart.notNull(lineNum) + 1;
            }
            lineStart = dart.notNull(i) + 1;
            lastWasCR = false;
          } else if (char == 13) {
            lineNum = dart.notNull(lineNum) + 1;
            lineStart = dart.notNull(i) + 1;
            lastWasCR = true;
          }
        }
        if (dart.notNull(lineNum) > 1) {
          report = dart.notNull(report) + (" (at line " + lineNum + ", character " + (dart.notNull(offset) - dart.notNull(lineStart) + 1) + ")\n");
        } else {
          report = dart.notNull(report) + (" (at character " + (dart.notNull(offset) + 1) + ")\n");
        }
        var lineEnd = dart.as(dart.dload(this.source, 'length'), int);
        for (var i$__34 = offset; dart.notNull(i$__34) < dart.notNull(dart.as(dart.dload(this.source, 'length'), num)); i$__34 = dart.notNull(i$__34) + 1) {
          var char$__35 = dart.as(dart.dsend(this.source, 'codeUnitAt', i$__34), int);
          if (char$__35 == 10 || char$__35 == 13) {
            lineEnd = i$__34;
            break;
          }
        }
        var length = dart.notNull(lineEnd) - dart.notNull(lineStart);
        var start = lineStart;
        var end = lineEnd;
        var prefix = "";
        var postfix = "";
        if (dart.notNull(length) > 78) {
          var index = dart.notNull(offset) - dart.notNull(lineStart);
          if (dart.notNull(index) < 75) {
            end = dart.notNull(start) + 75;
            postfix = "...";
          } else if (dart.notNull(end) - dart.notNull(offset) < 75) {
            start = dart.notNull(end) - 75;
            prefix = "...";
          } else {
            start = dart.notNull(offset) - 36;
            end = dart.notNull(offset) + 36;
            prefix = postfix = "...";
          }
        }
        var slice = dart.as(dart.dsend(this.source, 'substring', start, end), String);
        var markOffset = dart.notNull(offset) - dart.notNull(start) + dart.notNull(prefix[dartx.length]);
        return ("" + report + prefix + slice + postfix + "\n" + " "[dartx['*']](markOffset) + "^\n");
      }
    }, {}, $__super);
  }(Object);
  FormatException[dart.implements] = function() {
    return [Exception];
  };
  dart.setSignature(FormatException, {constructors: function() {
      return ({FormatException: [FormatException, [], [String, dart.dynamic, int]]});
    }});
  var IntegerDivisionByZeroException = function($__super) {
    function IntegerDivisionByZeroException() {
      $traceurRuntime.superConstructor(IntegerDivisionByZeroException).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(IntegerDivisionByZeroException, {
      IntegerDivisionByZeroException: function() {},
      toString: function() {
        return "IntegerDivisionByZeroException";
      }
    }, {}, $__super);
  }(Object);
  IntegerDivisionByZeroException[dart.implements] = function() {
    return [Exception];
  };
  dart.setSignature(IntegerDivisionByZeroException, {constructors: function() {
      return ({IntegerDivisionByZeroException: [IntegerDivisionByZeroException, []]});
    }});
  var _getKey = dart.JsSymbol('_getKey');
  var Expando$ = dart.generic(function(T) {
    var Expando = function($__super) {
      var $__24;
      function Expando() {
        $traceurRuntime.superConstructor(Expando).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Expando, ($__24 = {}, window.Object.defineProperty($__24, "Expando", {
        value: function(name) {
          if (name === void 0)
            name = null;
          this.name = name;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "toString", {
        value: function() {
          return ("Expando:" + this.name);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "get", {
        value: function(object) {
          var values = _js_helper.Primitives.getProperty(object, Expando$()._EXPANDO_PROPERTY_NAME);
          return values == null ? null : dart.as(_js_helper.Primitives.getProperty(values, this[_getKey]()), T);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "set", {
        value: function(object, value) {
          dart.as(value, T);
          var values = _js_helper.Primitives.getProperty(object, Expando$()._EXPANDO_PROPERTY_NAME);
          if (values == null) {
            values = new Object();
            _js_helper.Primitives.setProperty(object, Expando$()._EXPANDO_PROPERTY_NAME, values);
          }
          _js_helper.Primitives.setProperty(values, this[_getKey](), value);
          return value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _getKey, {
        value: function() {
          var key = dart.as(_js_helper.Primitives.getProperty(this, Expando$()._KEY_PROPERTY_NAME), String);
          if (key == null) {
            key = ("expando\$key\$" + (function() {
              var x = Expando$()._keyCount;
              Expando$()._keyCount = dart.notNull(x) + 1;
              return x;
            })());
            _js_helper.Primitives.setProperty(this, Expando$()._KEY_PROPERTY_NAME, key);
          }
          return key;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__24), {}, $__super);
    }(Object);
    dart.setSignature(Expando, {
      constructors: function() {
        return ({Expando: [Expando$(T), [], [String]]});
      },
      methods: function() {
        var $__24;
        return (($__24 = {}, window.Object.defineProperty($__24, "get", {
          value: [T, [Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), window.Object.defineProperty($__24, "set", {
          value: [dart.void, [Object, T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), window.Object.defineProperty($__24, _getKey, {
          value: [String, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__24));
      }
    });
    return Expando;
  });
  var Expando = Expando$();
  Expando._KEY_PROPERTY_NAME = 'expando$key';
  Expando._EXPANDO_PROPERTY_NAME = 'expando$values';
  Expando._keyCount = 0;
  var Function = function($__super) {
    function Function() {
      $traceurRuntime.superConstructor(Function).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Function, {}, {
      apply: function(f, positionalArguments, namedArguments) {
        if (namedArguments === void 0)
          namedArguments = null;
        return dart.dcall.apply(null, [f].concat(positionalArguments));
      },
      _toMangledNames: function(namedArguments) {
        var result = dart.map();
        namedArguments.forEach(dart.fn(function(symbol, value) {
          result.set(_symbolToString(dart.as(symbol, Symbol)), value);
        }));
        return result;
      }
    }, $__super);
  }(Object);
  dart.setSignature(Function, {
    statics: function() {
      return ({
        apply: [dart.dynamic, [Function, List], [Map$(Symbol, dart.dynamic)]],
        _toMangledNames: [Map$(String, dart.dynamic), [Map$(Symbol, dart.dynamic)]]
      });
    },
    names: ['apply', '_toMangledNames']
  });
  function identical(a, b) {
    return _js_helper.Primitives.identicalImplementation(a, b);
  }
  dart.fn(identical, bool, [Object, Object]);
  function identityHashCode(object) {
    return _js_helper.objectHashCode(object);
  }
  dart.fn(identityHashCode, function() {
    return dart.definiteFunctionType(int, [Object]);
  });
  var int = function($__super) {
    function int() {
      $traceurRuntime.superConstructor(int).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(int, {}, {
      fromEnvironment: function(name, opts) {
        var defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        dart.throw(new UnsupportedError('int.fromEnvironment can only be used as a const constructor'));
      },
      parse: function(source, opts) {
        var radix = opts && 'radix' in opts ? opts.radix : null;
        var onError = opts && 'onError' in opts ? opts.onError : null;
        return _js_helper.Primitives.parseInt(source, radix, onError);
      }
    }, $__super);
  }(num);
  dart.setSignature(int, {
    constructors: function() {
      return ({fromEnvironment: [int, [String], {defaultValue: int}]});
    },
    statics: function() {
      return ({parse: [int, [String], {
          radix: int,
          onError: dart.functionType(int, [String])
        }]});
    },
    names: ['parse']
  });
  var Invocation = function($__super) {
    function Invocation() {
      $traceurRuntime.superConstructor(Invocation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Invocation, {get isAccessor() {
        return dart.notNull(this.isGetter) || dart.notNull(this.isSetter);
      }}, {}, $__super);
  }(Object);
  var Iterable$ = dart.generic(function(E) {
    dart.defineExtensionNames(['join']);
    var Iterable = function($__super) {
      var $__24;
      function Iterable() {
        $traceurRuntime.superConstructor(Iterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Iterable, ($__24 = {}, window.Object.defineProperty($__24, "Iterable", {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, dart.JsSymbol.iterator, {
        value: function() {
          return new dart.JsIterator(this[dartx.iterator]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, dartx.join, {
        value: function(separator) {
          if (separator === void 0)
            separator = "";
          var buffer = new StringBuffer();
          buffer.writeAll(this, separator);
          return dart.toString(buffer);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__24), {generate: function(count, generator) {
          if (generator === void 0)
            generator = null;
          if (dart.notNull(count) <= 0)
            return new (_internal.EmptyIterable$(E))();
          return new (exports._GeneratorIterable$(E))(count, generator);
        }}, $__super);
    }(Object);
    dart.setSignature(Iterable, {
      constructors: function() {
        return ({
          Iterable: [Iterable$(E), []],
          generate: [Iterable$(E), [int], [dart.functionType(E, [int])]]
        });
      },
      methods: function() {
        var $__24;
        return (($__24 = {}, window.Object.defineProperty($__24, dartx.join, {
          value: [String, [], [String]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__24));
      }
    });
    return Iterable;
  });
  var Iterable = Iterable$();
  var _Generator$ = dart.generic(function(E) {
    var _Generator = dart.typedef('_Generator', function() {
      return dart.functionType(E, [int]);
    });
    return _Generator;
  });
  var _Generator = _Generator$();
  var _end = dart.JsSymbol('_end');
  var _start = dart.JsSymbol('_start');
  var _generator = dart.JsSymbol('_generator');
  var _GeneratorIterable$ = dart.generic(function(E) {
    var _GeneratorIterable = function($__super) {
      function _GeneratorIterable() {
        $traceurRuntime.superConstructor(_GeneratorIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_GeneratorIterable, {
        _GeneratorIterable: function(end, generator) {
          this[_end] = end;
          this[_start] = 0;
          this[_generator] = dart.as(generator != null ? generator : exports._GeneratorIterable$()._id, _Generator$(E));
          $traceurRuntime.superGet(this, _GeneratorIterable.prototype, "IterableBase").call(this);
        },
        slice: function(start, end, generator) {
          this[_start] = start;
          this[_end] = end;
          this[_generator] = generator;
          $traceurRuntime.superGet(this, _GeneratorIterable.prototype, "IterableBase").call(this);
        },
        get iterator() {
          return new (_GeneratorIterator$(E))(this[_start], this[_end], this[_generator]);
        },
        get length() {
          return dart.notNull(this[_end]) - dart.notNull(this[_start]);
        },
        skip: function(count) {
          RangeError.checkNotNegative(count, "count");
          if (count == 0)
            return this;
          var newStart = dart.notNull(this[_start]) + dart.notNull(count);
          if (dart.notNull(newStart) >= dart.notNull(this[_end]))
            return new (_internal.EmptyIterable$(E))();
          return new (exports._GeneratorIterable$(E)).slice(newStart, this[_end], this[_generator]);
        },
        take: function(count) {
          RangeError.checkNotNegative(count, "count");
          if (count == 0)
            return new (_internal.EmptyIterable$(E))();
          var newEnd = dart.notNull(this[_start]) + dart.notNull(count);
          if (dart.notNull(newEnd) >= dart.notNull(this[_end]))
            return this;
          return new (exports._GeneratorIterable$(E)).slice(this[_start], newEnd, this[_generator]);
        }
      }, {_id: function(n) {
          return n;
        }}, $__super);
    }(collection.IterableBase$(E));
    _GeneratorIterable[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.defineNamedConstructor(_GeneratorIterable, 'slice');
    dart.setSignature(_GeneratorIterable, {
      constructors: function() {
        return ({
          _GeneratorIterable: [exports._GeneratorIterable$(E), [int, dart.functionType(E, [int])]],
          slice: [exports._GeneratorIterable$(E), [int, int, _Generator$(E)]]
        });
      },
      methods: function() {
        return ({
          skip: [Iterable$(E), [int]],
          take: [Iterable$(E), [int]]
        });
      },
      statics: function() {
        return ({_id: [int, [int]]});
      },
      names: ['_id']
    });
    dart.defineExtensionMembers(_GeneratorIterable, ['skip', 'take', 'iterator', 'length']);
    return _GeneratorIterable;
  });
  dart.defineLazyClassGeneric(exports, '_GeneratorIterable', {get: _GeneratorIterable$});
  var _index = dart.JsSymbol('_index');
  var _current = dart.JsSymbol('_current');
  var _GeneratorIterator$ = dart.generic(function(E) {
    var _GeneratorIterator = function($__super) {
      function _GeneratorIterator() {
        $traceurRuntime.superConstructor(_GeneratorIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_GeneratorIterator, {
        _GeneratorIterator: function(index, end, generator) {
          this[_index] = index;
          this[_end] = end;
          this[_generator] = generator;
          this[_current] = null;
        },
        moveNext: function() {
          if (dart.notNull(this[_index]) < dart.notNull(this[_end])) {
            this[_current] = this[_generator](this[_index]);
            this[_index] = dart.notNull(this[_index]) + 1;
            return true;
          } else {
            this[_current] = null;
            return false;
          }
        },
        get current() {
          return this[_current];
        }
      }, {}, $__super);
    }(Object);
    _GeneratorIterator[dart.implements] = function() {
      return [Iterator$(E)];
    };
    dart.setSignature(_GeneratorIterator, {
      constructors: function() {
        return ({_GeneratorIterator: [_GeneratorIterator$(E), [int, int, _Generator$(E)]]});
      },
      methods: function() {
        return ({moveNext: [bool, []]});
      }
    });
    return _GeneratorIterator;
  });
  var _GeneratorIterator = _GeneratorIterator$();
  var BidirectionalIterator$ = dart.generic(function(E) {
    var BidirectionalIterator = function($__super) {
      function BidirectionalIterator() {
        $traceurRuntime.superConstructor(BidirectionalIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(BidirectionalIterator, {}, {}, $__super);
    }(Object);
    BidirectionalIterator[dart.implements] = function() {
      return [Iterator$(E)];
    };
    return BidirectionalIterator;
  });
  var BidirectionalIterator = BidirectionalIterator$();
  var Iterator$ = dart.generic(function(E) {
    var Iterator = function($__super) {
      function Iterator() {
        $traceurRuntime.superConstructor(Iterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Iterator, {}, {}, $__super);
    }(Object);
    return Iterator;
  });
  var Iterator = Iterator$();
  var List$ = dart.generic(function(E) {
    var List = function($__super) {
      var $__24;
      function List() {
        $traceurRuntime.superConstructor(List).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(List, ($__24 = {}, window.Object.defineProperty($__24, dart.JsSymbol.iterator, {
        value: function() {
          return new dart.JsIterator(this[dartx.iterator]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__24), {
        new: function(length) {
          if (length === void 0)
            length = null;
          var list = null;
          if (length == null) {
            list = [];
          } else {
            if (!(typeof length == 'number') || dart.notNull(length) < 0) {
              dart.throw(new ArgumentError(("Length must be a non-negative integer: " + length)));
            }
            list = _interceptors.JSArray.markFixedList(dart.as(new Array(length), List$()));
          }
          return _interceptors.JSArray$(E).typed(list);
        },
        filled: function(length, fill) {
          var result = List$(E).new(length);
          if (length != 0 && fill != null) {
            for (var i = 0; dart.notNull(i) < dart.notNull(result[dartx.length]); i = dart.notNull(i) + 1) {
              result[dartx.set](i, fill);
            }
          }
          return result;
        },
        from: function(elements, opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var list = List$(E).new();
          var $__28 = true;
          var $__29 = false;
          var $__30 = undefined;
          try {
            for (var $__26 = void 0,
                $__25 = (elements)[Symbol.iterator](); !($__28 = ($__26 = $__25.next()).done); $__28 = true) {
              var e = $__26.value;
              {
                list[dartx.add](dart.as(e, E));
              }
            }
          } catch ($__31) {
            $__29 = true;
            $__30 = $__31;
          } finally {
            try {
              if (!$__28 && $__25.return != null) {
                $__25.return();
              }
            } finally {
              if ($__29) {
                throw $__30;
              }
            }
          }
          if (dart.notNull(growable))
            return list;
          return dart.as(_internal.makeListFixedLength(list), List$(E));
        },
        generate: function(length, generator, opts) {
          var growable = opts && 'growable' in opts ? opts.growable : true;
          var result = null;
          if (dart.notNull(growable)) {
            result = dart.list([], E);
            result[dartx.length] = length;
          } else {
            result = List$(E).new(length);
          }
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            result[dartx.set](i, generator(i));
          }
          return result;
        }
      }, $__super);
    }(Object);
    List[dart.implements] = function() {
      return [Iterable$(E)];
    };
    dart.setSignature(List, {constructors: function() {
        return ({
          new: [List$(E), [], [int]],
          filled: [List$(E), [int, E]],
          from: [List$(E), [Iterable], {growable: bool}],
          generate: [List$(E), [int, dart.functionType(E, [int])], {growable: bool}]
        });
      }});
    return List;
  });
  var List = List$();
  var Map$ = dart.generic(function(K, V) {
    var Map = function($__super) {
      function Map() {
        $traceurRuntime.superConstructor(Map).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Map, {}, {
        new: function() {
          return collection.LinkedHashMap$(K, V).new();
        },
        from: function(other) {
          return collection.LinkedHashMap$(K, V).from(other);
        },
        identity: function() {
          return collection.LinkedHashMap$(K, V).identity();
        },
        fromIterable: function(iterable, opts) {
          return collection.LinkedHashMap$(K, V).fromIterable(iterable, opts);
        },
        fromIterables: function(keys, values) {
          return collection.LinkedHashMap$(K, V).fromIterables(keys, values);
        }
      }, $__super);
    }(Object);
    dart.setSignature(Map, {constructors: function() {
        return ({
          new: [Map$(K, V), []],
          from: [Map$(K, V), [Map$()]],
          identity: [Map$(K, V), []],
          fromIterable: [Map$(K, V), [Iterable], {
            key: dart.functionType(K, [dart.dynamic]),
            value: dart.functionType(V, [dart.dynamic])
          }],
          fromIterables: [Map$(K, V), [Iterable$(K), Iterable$(V)]]
        });
      }});
    return Map;
  });
  var Map = Map$();
  var Null = function($__super) {
    function Null() {
      $traceurRuntime.superConstructor(Null).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Null, {toString: function() {
        return "null";
      }}, {_uninstantiable: function() {
        dart.throw(new UnsupportedError('class Null cannot be instantiated'));
      }}, $__super);
  }(Object);
  dart.setSignature(Null, {constructors: function() {
      return ({_uninstantiable: [Null, []]});
    }});
  num._parseError = false;
  var Pattern = function($__super) {
    function Pattern() {
      $traceurRuntime.superConstructor(Pattern).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Pattern, {}, {}, $__super);
  }(Object);
  function print(object) {
    var line = ("" + object);
    if (_internal.printToZone == null) {
      _internal.printToConsole(line);
    } else {
      dart.dcall(_internal.printToZone, line);
    }
  }
  dart.fn(print, dart.void, [Object]);
  var Match = function($__super) {
    function Match() {
      $traceurRuntime.superConstructor(Match).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Match, {}, {}, $__super);
  }(Object);
  var RegExp = function($__super) {
    function RegExp() {
      $traceurRuntime.superConstructor(RegExp).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RegExp, {}, {new: function(source, opts) {
        var multiLine = opts && 'multiLine' in opts ? opts.multiLine : false;
        var caseSensitive = opts && 'caseSensitive' in opts ? opts.caseSensitive : true;
        return new _js_helper.JSSyntaxRegExp(source, {
          multiLine: multiLine,
          caseSensitive: caseSensitive
        });
      }}, $__super);
  }(Object);
  RegExp[dart.implements] = function() {
    return [Pattern];
  };
  dart.setSignature(RegExp, {constructors: function() {
      return ({new: [RegExp, [String], {
          multiLine: bool,
          caseSensitive: bool
        }]});
    }});
  var Set$ = dart.generic(function(E) {
    var Set = function($__super) {
      function Set() {
        $traceurRuntime.superConstructor(Set).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Set, {}, {
        new: function() {
          return collection.LinkedHashSet$(E).new();
        },
        identity: function() {
          return collection.LinkedHashSet$(E).identity();
        },
        from: function(elements) {
          return collection.LinkedHashSet$(E).from(elements);
        }
      }, $__super);
    }(collection.IterableBase$(E));
    Set[dart.implements] = function() {
      return [_internal.EfficientLength];
    };
    dart.setSignature(Set, {constructors: function() {
        return ({
          new: [exports.Set$(E), []],
          identity: [exports.Set$(E), []],
          from: [exports.Set$(E), [Iterable]]
        });
      }});
    return Set;
  });
  dart.defineLazyClassGeneric(exports, 'Set', {get: Set$});
  var Sink$ = dart.generic(function(T) {
    var Sink = function($__super) {
      function Sink() {
        $traceurRuntime.superConstructor(Sink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Sink, {}, {}, $__super);
    }(Object);
    return Sink;
  });
  var Sink = Sink$();
  var StackTrace = function($__super) {
    function StackTrace() {
      $traceurRuntime.superConstructor(StackTrace).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StackTrace, {}, {}, $__super);
  }(Object);
  var _stop = dart.JsSymbol('_stop');
  var Stopwatch = function($__super) {
    function Stopwatch() {
      $traceurRuntime.superConstructor(Stopwatch).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Stopwatch, {
      get frequency() {
        return Stopwatch._frequency;
      },
      Stopwatch: function() {
        this[_start] = null;
        this[_stop] = null;
        Stopwatch._initTicker();
      },
      start: function() {
        if (dart.notNull(this.isRunning))
          return;
        if (this[_start] == null) {
          this[_start] = Stopwatch._now();
        } else {
          this[_start] = dart.notNull(Stopwatch._now()) - (dart.notNull(this[_stop]) - dart.notNull(this[_start]));
          this[_stop] = null;
        }
      },
      stop: function() {
        if (!dart.notNull(this.isRunning))
          return;
        this[_stop] = Stopwatch._now();
      },
      reset: function() {
        if (this[_start] == null)
          return;
        this[_start] = Stopwatch._now();
        if (this[_stop] != null) {
          this[_stop] = this[_start];
        }
      },
      get elapsedTicks() {
        if (this[_start] == null) {
          return 0;
        }
        return dart.asInt(this[_stop] == null ? dart.notNull(Stopwatch._now()) - dart.notNull(this[_start]) : dart.notNull(this[_stop]) - dart.notNull(this[_start]));
      },
      get elapsed() {
        return new Duration({microseconds: this.elapsedMicroseconds});
      },
      get elapsedMicroseconds() {
        return (dart.notNull(this.elapsedTicks) * 1000000 / dart.notNull(this.frequency))[dartx.truncate]();
      },
      get elapsedMilliseconds() {
        return (dart.notNull(this.elapsedTicks) * 1000 / dart.notNull(this.frequency))[dartx.truncate]();
      },
      get isRunning() {
        return this[_start] != null && this[_stop] == null;
      }
    }, {
      _initTicker: function() {
        _js_helper.Primitives.initTicker();
        Stopwatch._frequency = _js_helper.Primitives.timerFrequency;
      },
      _now: function() {
        return dart.as(dart.dcall(_js_helper.Primitives.timerTicks), int);
      }
    }, $__super);
  }(Object);
  dart.setSignature(Stopwatch, {
    constructors: function() {
      return ({Stopwatch: [Stopwatch, []]});
    },
    methods: function() {
      return ({
        start: [dart.void, []],
        stop: [dart.void, []],
        reset: [dart.void, []]
      });
    },
    statics: function() {
      return ({
        _initTicker: [dart.void, []],
        _now: [int, []]
      });
    },
    names: ['_initTicker', '_now']
  });
  Stopwatch._frequency = null;
  var String = function($__super) {
    function String() {
      $traceurRuntime.superConstructor(String).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(String, {}, {
      fromCharCodes: function(charCodes, start, end) {
        if (start === void 0)
          start = 0;
        if (end === void 0)
          end = null;
        if (!dart.is(charCodes, _interceptors.JSArray)) {
          return String._stringFromIterable(charCodes, start, end);
        }
        var list = dart.as(charCodes, List);
        var len = list[dartx.length];
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(len)) {
          dart.throw(new RangeError.range(start, 0, len));
        }
        if (end == null) {
          end = len;
        } else if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(len)) {
          dart.throw(new RangeError.range(end, start, len));
        }
        if (dart.notNull(start) > 0 || dart.notNull(end) < dart.notNull(len)) {
          list = list[dartx.sublist](start, end);
        }
        return _js_helper.Primitives.stringFromCharCodes(list);
      },
      fromCharCode: function(charCode) {
        return _js_helper.Primitives.stringFromCharCode(charCode);
      },
      fromEnvironment: function(name, opts) {
        var defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        dart.throw(new UnsupportedError('String.fromEnvironment can only be used as a const constructor'));
      },
      _stringFromIterable: function(charCodes, start, end) {
        if (dart.notNull(start) < 0)
          dart.throw(new RangeError.range(start, 0, charCodes[dartx.length]));
        if (end != null && dart.notNull(end) < dart.notNull(start)) {
          dart.throw(new RangeError.range(end, start, charCodes[dartx.length]));
        }
        var it = charCodes[dartx.iterator];
        for (var i = 0; dart.notNull(i) < dart.notNull(start); i = dart.notNull(i) + 1) {
          if (!dart.notNull(it.moveNext())) {
            dart.throw(new RangeError.range(start, 0, i));
          }
        }
        var list = [];
        if (end == null) {
          while (dart.notNull(it.moveNext()))
            list[dartx.add](it.current);
        } else {
          for (var i$__36 = start; dart.notNull(i$__36) < dart.notNull(end); i$__36 = dart.notNull(i$__36) + 1) {
            if (!dart.notNull(it.moveNext())) {
              dart.throw(new RangeError.range(end, start, i$__36));
            }
            list[dartx.add](it.current);
          }
        }
        return _js_helper.Primitives.stringFromCharCodes(list);
      }
    }, $__super);
  }(Object);
  String[dart.implements] = function() {
    return [Comparable$(String), Pattern];
  };
  dart.setSignature(String, {
    constructors: function() {
      return ({
        fromCharCodes: [String, [Iterable$(int)], [int, int]],
        fromCharCode: [String, [int]],
        fromEnvironment: [String, [String], {defaultValue: String}]
      });
    },
    statics: function() {
      return ({_stringFromIterable: [String, [Iterable$(int), int, int]]});
    },
    names: ['_stringFromIterable']
  });
  dart.defineLazyClass(exports, {get Runes() {
      var Runes = function($__super) {
        function Runes() {
          $traceurRuntime.superConstructor(Runes).apply(this, arguments);
        }
        return ($traceurRuntime.createClass)(Runes, {
          Runes: function(string) {
            this.string = string;
            $traceurRuntime.superGet(this, Runes.prototype, "IterableBase").call(this);
          },
          get iterator() {
            return new RuneIterator(this.string);
          },
          get last() {
            if (this.string[dartx.length] == 0) {
              dart.throw(new StateError('No elements.'));
            }
            var length = this.string[dartx.length];
            var code = this.string[dartx.codeUnitAt](dart.notNull(length) - 1);
            if (dart.notNull(_isTrailSurrogate(code)) && dart.notNull(this.string[dartx.length]) > 1) {
              var previousCode = this.string[dartx.codeUnitAt](dart.notNull(length) - 2);
              if (dart.notNull(_isLeadSurrogate(previousCode))) {
                return _combineSurrogatePair(previousCode, code);
              }
            }
            return code;
          }
        }, {}, $__super);
      }(collection.IterableBase$(int));
      dart.setSignature(Runes, {constructors: function() {
          return ({Runes: [exports.Runes, [String]]});
        }});
      dart.defineExtensionMembers(Runes, ['iterator', 'last']);
      return Runes;
    }});
  function _isLeadSurrogate(code) {
    return (dart.notNull(code) & 64512) == 55296;
  }
  dart.fn(_isLeadSurrogate, bool, [int]);
  function _isTrailSurrogate(code) {
    return (dart.notNull(code) & 64512) == 56320;
  }
  dart.fn(_isTrailSurrogate, bool, [int]);
  function _combineSurrogatePair(start, end) {
    return 65536 + ((dart.notNull(start) & 1023) << 10) + (dart.notNull(end) & 1023);
  }
  dart.fn(_combineSurrogatePair, int, [int, int]);
  var _position = dart.JsSymbol('_position');
  var _nextPosition = dart.JsSymbol('_nextPosition');
  var _currentCodePoint = dart.JsSymbol('_currentCodePoint');
  var _checkSplitSurrogate = dart.JsSymbol('_checkSplitSurrogate');
  var RuneIterator = function($__super) {
    var $__24;
    function RuneIterator() {
      $traceurRuntime.superConstructor(RuneIterator).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RuneIterator, ($__24 = {}, window.Object.defineProperty($__24, "RuneIterator", {
      value: function(string) {
        this.string = string;
        this[_position] = 0;
        this[_nextPosition] = 0;
        this[_currentCodePoint] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "at", {
      value: function(string, index) {
        this.string = string;
        this[_position] = index;
        this[_nextPosition] = index;
        this[_currentCodePoint] = null;
        RangeError.checkValueInInterval(index, 0, string[dartx.length]);
        this[_checkSplitSurrogate](index);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _checkSplitSurrogate, {
      value: function(index) {
        if (dart.notNull(index) > 0 && dart.notNull(index) < dart.notNull(this.string[dartx.length]) && dart.notNull(_isLeadSurrogate(this.string[dartx.codeUnitAt](dart.notNull(index) - 1))) && dart.notNull(_isTrailSurrogate(this.string[dartx.codeUnitAt](index)))) {
          dart.throw(new ArgumentError(("Index inside surrogate pair: " + index)));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "rawIndex", {
      get: function() {
        return this[_position] != this[_nextPosition] ? this[_position] : null;
      },
      configurable: true,
      enumerable: true,
      set: function(rawIndex) {
        RangeError.checkValidIndex(rawIndex, this.string, "rawIndex");
        this.reset(rawIndex);
        this.moveNext();
      }
    }), window.Object.defineProperty($__24, "reset", {
      value: function(rawIndex) {
        if (rawIndex === void 0)
          rawIndex = 0;
        RangeError.checkValueInInterval(rawIndex, 0, this.string[dartx.length], "rawIndex");
        this[_checkSplitSurrogate](rawIndex);
        this[_position] = this[_nextPosition] = rawIndex;
        this[_currentCodePoint] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "current", {
      get: function() {
        return dart.asInt(this[_currentCodePoint]);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "currentSize", {
      get: function() {
        return dart.notNull(this[_nextPosition]) - dart.notNull(this[_position]);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "currentAsString", {
      get: function() {
        if (this[_position] == this[_nextPosition])
          return null;
        if (dart.notNull(this[_position]) + 1 == this[_nextPosition])
          return this.string[dartx.get](this[_position]);
        return this.string[dartx.substring](this[_position], this[_nextPosition]);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "moveNext", {
      value: function() {
        this[_position] = this[_nextPosition];
        if (this[_position] == this.string[dartx.length]) {
          this[_currentCodePoint] = null;
          return false;
        }
        var codeUnit = this.string[dartx.codeUnitAt](this[_position]);
        var nextPosition = dart.notNull(this[_position]) + 1;
        if (dart.notNull(_isLeadSurrogate(codeUnit)) && dart.notNull(nextPosition) < dart.notNull(this.string[dartx.length])) {
          var nextCodeUnit = this.string[dartx.codeUnitAt](nextPosition);
          if (dart.notNull(_isTrailSurrogate(nextCodeUnit))) {
            this[_nextPosition] = dart.notNull(nextPosition) + 1;
            this[_currentCodePoint] = _combineSurrogatePair(codeUnit, nextCodeUnit);
            return true;
          }
        }
        this[_nextPosition] = nextPosition;
        this[_currentCodePoint] = codeUnit;
        return true;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "movePrevious", {
      value: function() {
        this[_nextPosition] = this[_position];
        if (this[_position] == 0) {
          this[_currentCodePoint] = null;
          return false;
        }
        var position = dart.notNull(this[_position]) - 1;
        var codeUnit = this.string[dartx.codeUnitAt](position);
        if (dart.notNull(_isTrailSurrogate(codeUnit)) && dart.notNull(position) > 0) {
          var prevCodeUnit = this.string[dartx.codeUnitAt](dart.notNull(position) - 1);
          if (dart.notNull(_isLeadSurrogate(prevCodeUnit))) {
            this[_position] = dart.notNull(position) - 1;
            this[_currentCodePoint] = _combineSurrogatePair(prevCodeUnit, codeUnit);
            return true;
          }
        }
        this[_position] = position;
        this[_currentCodePoint] = codeUnit;
        return true;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__24), {}, $__super);
  }(Object);
  RuneIterator[dart.implements] = function() {
    return [BidirectionalIterator$(int)];
  };
  dart.defineNamedConstructor(RuneIterator, 'at');
  dart.setSignature(RuneIterator, {
    constructors: function() {
      return ({
        RuneIterator: [RuneIterator, [String]],
        at: [RuneIterator, [String, int]]
      });
    },
    methods: function() {
      var $__24;
      return (($__24 = {}, window.Object.defineProperty($__24, _checkSplitSurrogate, {
        value: [dart.void, [int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "reset", {
        value: [dart.void, [], [int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "moveNext", {
        value: [bool, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "movePrevious", {
        value: [bool, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__24));
    }
  });
  var _contents = dart.JsSymbol('_contents');
  var _writeString = dart.JsSymbol('_writeString');
  var StringBuffer = function($__super) {
    var $__24;
    function StringBuffer() {
      $traceurRuntime.superConstructor(StringBuffer).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StringBuffer, ($__24 = {}, window.Object.defineProperty($__24, "StringBuffer", {
      value: function(content) {
        if (content === void 0)
          content = "";
        this[_contents] = ("" + content);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "length", {
      get: function() {
        return this[_contents][dartx.length];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "isEmpty", {
      get: function() {
        return this.length == 0;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "isNotEmpty", {
      get: function() {
        return !dart.notNull(this.isEmpty);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "write", {
      value: function(obj) {
        this[_writeString](("" + obj));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "writeCharCode", {
      value: function(charCode) {
        this[_writeString](String.fromCharCode(charCode));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "writeAll", {
      value: function(objects, separator) {
        if (separator === void 0)
          separator = "";
        var iterator = objects[dartx.iterator];
        if (!dart.notNull(iterator.moveNext()))
          return;
        if (dart.notNull(separator[dartx.isEmpty])) {
          do {
            this.write(iterator.current);
          } while (dart.notNull(iterator.moveNext()));
        } else {
          this.write(iterator.current);
          while (dart.notNull(iterator.moveNext())) {
            this.write(separator);
            this.write(iterator.current);
          }
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "writeln", {
      value: function(obj) {
        if (obj === void 0)
          obj = "";
        this.write(obj);
        this.write("\n");
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "clear", {
      value: function() {
        this[_contents] = "";
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "toString", {
      value: function() {
        return _js_helper.Primitives.flattenString(this[_contents]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _writeString, {
      value: function(str) {
        this[_contents] = _js_helper.Primitives.stringConcatUnchecked(this[_contents], dart.as(str, String));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__24), {}, $__super);
  }(Object);
  StringBuffer[dart.implements] = function() {
    return [StringSink];
  };
  dart.setSignature(StringBuffer, {
    constructors: function() {
      return ({StringBuffer: [StringBuffer, [], [Object]]});
    },
    methods: function() {
      var $__24;
      return (($__24 = {}, window.Object.defineProperty($__24, "write", {
        value: [dart.void, [Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "writeCharCode", {
        value: [dart.void, [int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "writeAll", {
        value: [dart.void, [Iterable], [String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "writeln", {
        value: [dart.void, [], [Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "clear", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _writeString, {
        value: [dart.void, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__24));
    }
  });
  var StringSink = function($__super) {
    function StringSink() {
      $traceurRuntime.superConstructor(StringSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StringSink, {}, {}, $__super);
  }(Object);
  var Symbol = function($__super) {
    function Symbol() {
      $traceurRuntime.superConstructor(Symbol).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Symbol, {}, {new: function(name) {
        return new _internal.Symbol(name);
      }}, $__super);
  }(Object);
  dart.setSignature(Symbol, {constructors: function() {
      return ({new: [Symbol, [String]]});
    }});
  var Type = function($__super) {
    function Type() {
      $traceurRuntime.superConstructor(Type).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Type, {}, {}, $__super);
  }(Object);
  var _writeAuthority = dart.JsSymbol('_writeAuthority');
  var _userInfo = dart.JsSymbol('_userInfo');
  var _host = dart.JsSymbol('_host');
  var _port = dart.JsSymbol('_port');
  var _path = dart.JsSymbol('_path');
  var _query = dart.JsSymbol('_query');
  var _fragment = dart.JsSymbol('_fragment');
  var _pathSegments = dart.JsSymbol('_pathSegments');
  var _queryParameters = dart.JsSymbol('_queryParameters');
  var _merge = dart.JsSymbol('_merge');
  var _hasDotSegments = dart.JsSymbol('_hasDotSegments');
  var _removeDotSegments = dart.JsSymbol('_removeDotSegments');
  var _toWindowsFilePath = dart.JsSymbol('_toWindowsFilePath');
  var _toFilePath = dart.JsSymbol('_toFilePath');
  var _isPathAbsolute = dart.JsSymbol('_isPathAbsolute');
  var Uri = function($__super) {
    var $__24;
    function Uri() {
      $traceurRuntime.superConstructor(Uri).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Uri, ($__24 = {}, window.Object.defineProperty($__24, "authority", {
      get: function() {
        if (!dart.notNull(this.hasAuthority))
          return "";
        var sb = new StringBuffer();
        this[_writeAuthority](sb);
        return dart.toString(sb);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "userInfo", {
      get: function() {
        return this[_userInfo];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "host", {
      get: function() {
        if (this[_host] == null)
          return "";
        if (dart.notNull(this[_host][dartx.startsWith]('['))) {
          return this[_host][dartx.substring](1, dart.notNull(this[_host][dartx.length]) - 1);
        }
        return this[_host];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "port", {
      get: function() {
        if (this[_port] == null)
          return Uri._defaultPort(this.scheme);
        return dart.asInt(this[_port]);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "path", {
      get: function() {
        return this[_path];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "query", {
      get: function() {
        return this[_query] == null ? "" : this[_query];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "fragment", {
      get: function() {
        return this[_fragment] == null ? "" : this[_fragment];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "_internal", {
      value: function(scheme, userInfo, host, port, path, query, fragment) {
        this.scheme = scheme;
        this[_userInfo] = userInfo;
        this[_host] = host;
        this[_port] = port;
        this[_path] = path;
        this[_query] = query;
        this[_fragment] = fragment;
        this[_pathSegments] = null;
        this[_queryParameters] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "replace", {
      value: function(opts) {
        var scheme = opts && 'scheme' in opts ? opts.scheme : null;
        var userInfo = opts && 'userInfo' in opts ? opts.userInfo : null;
        var host = opts && 'host' in opts ? opts.host : null;
        var port = opts && 'port' in opts ? opts.port : null;
        var path = opts && 'path' in opts ? opts.path : null;
        var pathSegments = opts && 'pathSegments' in opts ? opts.pathSegments : null;
        var query = opts && 'query' in opts ? opts.query : null;
        var queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
        var fragment = opts && 'fragment' in opts ? opts.fragment : null;
        var schemeChanged = false;
        if (scheme != null) {
          scheme = Uri._makeScheme(scheme, scheme[dartx.length]);
          schemeChanged = true;
        } else {
          scheme = this.scheme;
        }
        var isFile = scheme == "file";
        if (userInfo != null) {
          userInfo = Uri._makeUserInfo(userInfo, 0, userInfo[dartx.length]);
        } else {
          userInfo = this.userInfo;
        }
        if (port != null) {
          port = Uri._makePort(port, scheme);
        } else {
          port = dart.asInt(this[_port]);
          if (dart.notNull(schemeChanged)) {
            port = Uri._makePort(port, scheme);
          }
        }
        if (host != null) {
          host = Uri._makeHost(host, 0, host[dartx.length], false);
        } else if (dart.notNull(this.hasAuthority)) {
          host = this.host;
        } else if (dart.notNull(userInfo[dartx.isNotEmpty]) || port != null || dart.notNull(isFile)) {
          host = "";
        }
        var ensureLeadingSlash = host != null;
        if (path != null || pathSegments != null) {
          path = Uri._makePath(path, 0, Uri._stringOrNullLength(path), pathSegments, ensureLeadingSlash, isFile);
        } else {
          path = this.path;
          if ((dart.notNull(isFile) || dart.notNull(ensureLeadingSlash) && !dart.notNull(path[dartx.isEmpty])) && !dart.notNull(path[dartx.startsWith]('/'))) {
            path = ("/" + path);
          }
        }
        if (query != null || queryParameters != null) {
          query = Uri._makeQuery(query, 0, Uri._stringOrNullLength(query), queryParameters);
        } else if (dart.notNull(this.hasQuery)) {
          query = this.query;
        }
        if (fragment != null) {
          fragment = Uri._makeFragment(fragment, 0, fragment[dartx.length]);
        } else if (dart.notNull(this.hasFragment)) {
          fragment = this.fragment;
        }
        return new Uri._internal(scheme, userInfo, host, port, path, query, fragment);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "pathSegments", {
      get: function() {
        if (this[_pathSegments] == null) {
          var pathToSplit = !dart.notNull(this.path[dartx.isEmpty]) && this.path[dartx.codeUnitAt](0) == Uri._SLASH ? this.path[dartx.substring](1) : this.path;
          this[_pathSegments] = new (collection.UnmodifiableListView$(String))(pathToSplit == "" ? dart.const(dart.list([], String)) : List$(String).from(pathToSplit[dartx.split]("/")[dartx.map](Uri.decodeComponent), {growable: false}));
        }
        return this[_pathSegments];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "queryParameters", {
      get: function() {
        if (this[_queryParameters] == null) {
          this[_queryParameters] = new (collection.UnmodifiableMapView$(String, String))(Uri.splitQueryString(this.query));
        }
        return this[_queryParameters];
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "isAbsolute", {
      get: function() {
        return this.scheme != "" && this.fragment == "";
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, _merge, {
      value: function(base, reference) {
        if (dart.notNull(base[dartx.isEmpty]))
          return ("/" + reference);
        var backCount = 0;
        var refStart = 0;
        while (dart.notNull(reference[dartx.startsWith]("../", refStart))) {
          refStart = dart.notNull(refStart) + 3;
          backCount = dart.notNull(backCount) + 1;
        }
        var baseEnd = base[dartx.lastIndexOf]('/');
        while (dart.notNull(baseEnd) > 0 && dart.notNull(backCount) > 0) {
          var newEnd = base[dartx.lastIndexOf]('/', dart.notNull(baseEnd) - 1);
          if (dart.notNull(newEnd) < 0) {
            break;
          }
          var delta = dart.notNull(baseEnd) - dart.notNull(newEnd);
          if ((delta == 2 || delta == 3) && base[dartx.codeUnitAt](dart.notNull(newEnd) + 1) == Uri._DOT && (delta == 2 || base[dartx.codeUnitAt](dart.notNull(newEnd) + 2) == Uri._DOT)) {
            break;
          }
          baseEnd = newEnd;
          backCount = dart.notNull(backCount) - 1;
        }
        return dart.notNull(base[dartx.substring](0, dart.notNull(baseEnd) + 1)) + dart.notNull(reference[dartx.substring](dart.notNull(refStart) - 3 * dart.notNull(backCount)));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _hasDotSegments, {
      value: function(path) {
        if (dart.notNull(path[dartx.length]) > 0 && path[dartx.codeUnitAt](0) == Uri._DOT)
          return true;
        var index = path[dartx.indexOf]("/.");
        return index != -1;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _removeDotSegments, {
      value: function(path) {
        if (!dart.notNull(this[_hasDotSegments](path)))
          return path;
        var output = dart.list([], String);
        var appendSlash = false;
        var $__28 = true;
        var $__29 = false;
        var $__30 = undefined;
        try {
          for (var $__26 = void 0,
              $__25 = (path[dartx.split]("/"))[Symbol.iterator](); !($__28 = ($__26 = $__25.next()).done); $__28 = true) {
            var segment = $__26.value;
            {
              appendSlash = false;
              if (segment == "..") {
                if (!dart.notNull(output[dartx.isEmpty]) && (output[dartx.length] != 1 || output[dartx.get](0) != ""))
                  output[dartx.removeLast]();
                appendSlash = true;
              } else if ("." == segment) {
                appendSlash = true;
              } else {
                output[dartx.add](segment);
              }
            }
          }
        } catch ($__31) {
          $__29 = true;
          $__30 = $__31;
        } finally {
          try {
            if (!$__28 && $__25.return != null) {
              $__25.return();
            }
          } finally {
            if ($__29) {
              throw $__30;
            }
          }
        }
        if (dart.notNull(appendSlash))
          output[dartx.add]("");
        return output[dartx.join]("/");
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "resolve", {
      value: function(reference) {
        return this.resolveUri(Uri.parse(reference));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "resolveUri", {
      value: function(reference) {
        var targetScheme = null;
        var targetUserInfo = "";
        var targetHost = null;
        var targetPort = null;
        var targetPath = null;
        var targetQuery = null;
        if (dart.notNull(reference.scheme[dartx.isNotEmpty])) {
          targetScheme = reference.scheme;
          if (dart.notNull(reference.hasAuthority)) {
            targetUserInfo = reference.userInfo;
            targetHost = reference.host;
            targetPort = dart.notNull(reference.hasPort) ? reference.port : null;
          }
          targetPath = this[_removeDotSegments](reference.path);
          if (dart.notNull(reference.hasQuery)) {
            targetQuery = reference.query;
          }
        } else {
          targetScheme = this.scheme;
          if (dart.notNull(reference.hasAuthority)) {
            targetUserInfo = reference.userInfo;
            targetHost = reference.host;
            targetPort = Uri._makePort(dart.notNull(reference.hasPort) ? reference.port : null, targetScheme);
            targetPath = this[_removeDotSegments](reference.path);
            if (dart.notNull(reference.hasQuery))
              targetQuery = reference.query;
          } else {
            if (reference.path == "") {
              targetPath = this[_path];
              if (dart.notNull(reference.hasQuery)) {
                targetQuery = reference.query;
              } else {
                targetQuery = this[_query];
              }
            } else {
              if (dart.notNull(reference.path[dartx.startsWith]("/"))) {
                targetPath = this[_removeDotSegments](reference.path);
              } else {
                targetPath = this[_removeDotSegments](this[_merge](this[_path], reference.path));
              }
              if (dart.notNull(reference.hasQuery))
                targetQuery = reference.query;
            }
            targetUserInfo = this[_userInfo];
            targetHost = this[_host];
            targetPort = dart.asInt(this[_port]);
          }
        }
        var fragment = dart.notNull(reference.hasFragment) ? reference.fragment : null;
        return new Uri._internal(targetScheme, targetUserInfo, targetHost, targetPort, targetPath, targetQuery, fragment);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "hasAuthority", {
      get: function() {
        return this[_host] != null;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "hasPort", {
      get: function() {
        return this[_port] != null;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "hasQuery", {
      get: function() {
        return this[_query] != null;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "hasFragment", {
      get: function() {
        return this[_fragment] != null;
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "origin", {
      get: function() {
        if (this.scheme == "" || this[_host] == null || this[_host] == "") {
          dart.throw(new StateError(("Cannot use origin without a scheme: " + this)));
        }
        if (this.scheme != "http" && this.scheme != "https") {
          dart.throw(new StateError(("Origin is only applicable schemes http and https: " + this)));
        }
        if (this[_port] == null)
          return (this.scheme + "://" + this[_host]);
        return (this.scheme + "://" + this[_host] + ":" + this[_port]);
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, "toFilePath", {
      value: function(opts) {
        var windows = opts && 'windows' in opts ? opts.windows : null;
        if (this.scheme != "" && this.scheme != "file") {
          dart.throw(new UnsupportedError(("Cannot extract a file path from a " + this.scheme + " URI")));
        }
        if (this.query != "") {
          dart.throw(new UnsupportedError("Cannot extract a file path from a URI with a query component"));
        }
        if (this.fragment != "") {
          dart.throw(new UnsupportedError("Cannot extract a file path from a URI with a fragment component"));
        }
        if (windows == null)
          windows = Uri._isWindows;
        return dart.notNull(windows) ? this[_toWindowsFilePath]() : this[_toFilePath]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _toFilePath, {
      value: function() {
        if (this.host != "") {
          dart.throw(new UnsupportedError("Cannot extract a non-Windows file path from a file URI " + "with an authority"));
        }
        Uri._checkNonWindowsPathReservedCharacters(this.pathSegments, false);
        var result = new StringBuffer();
        if (dart.notNull(this[_isPathAbsolute]))
          result.write("/");
        result.writeAll(this.pathSegments, "/");
        return dart.toString(result);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _toWindowsFilePath, {
      value: function() {
        var hasDriveLetter = false;
        var segments = this.pathSegments;
        if (dart.notNull(segments[dartx.length]) > 0 && segments[dartx.get](0)[dartx.length] == 2 && segments[dartx.get](0)[dartx.codeUnitAt](1) == Uri._COLON) {
          Uri._checkWindowsDriveLetter(segments[dartx.get](0)[dartx.codeUnitAt](0), false);
          Uri._checkWindowsPathReservedCharacters(segments, false, 1);
          hasDriveLetter = true;
        } else {
          Uri._checkWindowsPathReservedCharacters(segments, false);
        }
        var result = new StringBuffer();
        if (dart.notNull(this[_isPathAbsolute]) && !dart.notNull(hasDriveLetter))
          result.write("\\");
        if (this.host != "") {
          result.write("\\");
          result.write(this.host);
          result.write("\\");
        }
        result.writeAll(segments, "\\");
        if (dart.notNull(hasDriveLetter) && segments[dartx.length] == 1)
          result.write("\\");
        return dart.toString(result);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, _isPathAbsolute, {
      get: function() {
        if (this.path == null || dart.notNull(this.path[dartx.isEmpty]))
          return false;
        return this.path[dartx.startsWith]('/');
      },
      configurable: true,
      enumerable: true
    }), window.Object.defineProperty($__24, _writeAuthority, {
      value: function(ss) {
        if (dart.notNull(this[_userInfo][dartx.isNotEmpty])) {
          ss.write(this[_userInfo]);
          ss.write("@");
        }
        if (this[_host] != null)
          ss.write(this[_host]);
        if (this[_port] != null) {
          ss.write(":");
          ss.write(this[_port]);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "toString", {
      value: function() {
        var sb = new StringBuffer();
        Uri._addIfNonEmpty(sb, this.scheme, this.scheme, ':');
        if (dart.notNull(this.hasAuthority) || dart.notNull(this.path[dartx.startsWith]("//")) || this.scheme == "file") {
          sb.write("//");
          this[_writeAuthority](sb);
        }
        sb.write(this.path);
        if (this[_query] != null) {
          sb.write("?");
          sb.write(this[_query]);
        }
        if (this[_fragment] != null) {
          sb.write("#");
          sb.write(this[_fragment]);
        }
        return dart.toString(sb);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, '==', {
      value: function(other) {
        if (!dart.is(other, Uri))
          return false;
        var uri = dart.as(other, Uri);
        return this.scheme == uri.scheme && this.hasAuthority == uri.hasAuthority && this.userInfo == uri.userInfo && this.host == uri.host && this.port == uri.port && this.path == uri.path && this.hasQuery == uri.hasQuery && this.query == uri.query && this.hasFragment == uri.hasFragment && this.fragment == uri.fragment;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), window.Object.defineProperty($__24, "hashCode", {
      get: function() {
        function combine(part, current) {
          return dart.as(dart.dsend(dart.dsend(dart.dsend(current, '*', 31), '+', dart.hashCode(part)), '&', 1073741823), int);
        }
        dart.fn(combine, int, [dart.dynamic, dart.dynamic]);
        return combine(this.scheme, combine(this.userInfo, combine(this.host, combine(this.port, combine(this.path, combine(this.query, combine(this.fragment, 1)))))));
      },
      configurable: true,
      enumerable: true
    }), $__24), {
      _defaultPort: function(scheme) {
        if (scheme == "http")
          return 80;
        if (scheme == "https")
          return 443;
        return 0;
      },
      parse: function(uri) {
        function isRegName(ch) {
          return dart.notNull(ch) < 128 && !dart.equals(dart.dsend(Uri._regNameTable[dartx.get](dart.notNull(ch) >> 4), '&', 1 << (dart.notNull(ch) & 15)), 0);
        }
        dart.fn(isRegName, bool, [int]);
        var EOI = -1;
        var scheme = "";
        var userinfo = "";
        var host = null;
        var port = null;
        var path = null;
        var query = null;
        var fragment = null;
        var index = 0;
        var pathStart = 0;
        var char = EOI;
        function parseAuth() {
          if (index == uri[dartx.length]) {
            char = EOI;
            return;
          }
          var authStart = index;
          var lastColon = -1;
          var lastAt = -1;
          char = uri[dartx.codeUnitAt](index);
          while (dart.notNull(index) < dart.notNull(uri[dartx.length])) {
            char = uri[dartx.codeUnitAt](index);
            if (char == Uri._SLASH || char == Uri._QUESTION || char == Uri._NUMBER_SIGN) {
              break;
            }
            if (char == Uri._AT_SIGN) {
              lastAt = index;
              lastColon = -1;
            } else if (char == Uri._COLON) {
              lastColon = index;
            } else if (char == Uri._LEFT_BRACKET) {
              lastColon = -1;
              var endBracket = uri[dartx.indexOf](']', dart.notNull(index) + 1);
              if (endBracket == -1) {
                index = uri[dartx.length];
                char = EOI;
                break;
              } else {
                index = endBracket;
              }
            }
            index = dart.notNull(index) + 1;
            char = EOI;
          }
          var hostStart = authStart;
          var hostEnd = index;
          if (dart.notNull(lastAt) >= 0) {
            userinfo = Uri._makeUserInfo(uri, authStart, lastAt);
            hostStart = dart.notNull(lastAt) + 1;
          }
          if (dart.notNull(lastColon) >= 0) {
            var portNumber = null;
            if (dart.notNull(lastColon) + 1 < dart.notNull(index)) {
              portNumber = 0;
              for (var i = dart.notNull(lastColon) + 1; dart.notNull(i) < dart.notNull(index); i = dart.notNull(i) + 1) {
                var digit = uri[dartx.codeUnitAt](i);
                if (dart.notNull(Uri._ZERO) > dart.notNull(digit) || dart.notNull(Uri._NINE) < dart.notNull(digit)) {
                  Uri._fail(uri, i, "Invalid port number");
                }
                portNumber = dart.notNull(portNumber) * 10 + (dart.notNull(digit) - dart.notNull(Uri._ZERO));
              }
            }
            port = Uri._makePort(portNumber, scheme);
            hostEnd = lastColon;
          }
          host = Uri._makeHost(uri, hostStart, hostEnd, true);
          if (dart.notNull(index) < dart.notNull(uri[dartx.length])) {
            char = uri[dartx.codeUnitAt](index);
          }
        }
        dart.fn(parseAuth, dart.void, []);
        var NOT_IN_PATH = 0;
        var IN_PATH = 1;
        var ALLOW_AUTH = 2;
        var state = NOT_IN_PATH;
        var i = index;
        while (dart.notNull(i) < dart.notNull(uri[dartx.length])) {
          char = uri[dartx.codeUnitAt](i);
          if (char == Uri._QUESTION || char == Uri._NUMBER_SIGN) {
            state = NOT_IN_PATH;
            break;
          }
          if (char == Uri._SLASH) {
            state = i == 0 ? ALLOW_AUTH : IN_PATH;
            break;
          }
          if (char == Uri._COLON) {
            if (i == 0)
              Uri._fail(uri, 0, "Invalid empty scheme");
            scheme = Uri._makeScheme(uri, i);
            i = dart.notNull(i) + 1;
            pathStart = i;
            if (i == uri[dartx.length]) {
              char = EOI;
              state = NOT_IN_PATH;
            } else {
              char = uri[dartx.codeUnitAt](i);
              if (char == Uri._QUESTION || char == Uri._NUMBER_SIGN) {
                state = NOT_IN_PATH;
              } else if (char == Uri._SLASH) {
                state = ALLOW_AUTH;
              } else {
                state = IN_PATH;
              }
            }
            break;
          }
          i = dart.notNull(i) + 1;
          char = EOI;
        }
        index = i;
        if (state == ALLOW_AUTH) {
          dart.assert(char == Uri._SLASH);
          index = dart.notNull(index) + 1;
          if (index == uri[dartx.length]) {
            char = EOI;
            state = NOT_IN_PATH;
          } else {
            char = uri[dartx.codeUnitAt](index);
            if (char == Uri._SLASH) {
              index = dart.notNull(index) + 1;
              parseAuth();
              pathStart = index;
            }
            if (char == Uri._QUESTION || char == Uri._NUMBER_SIGN || char == EOI) {
              state = NOT_IN_PATH;
            } else {
              state = IN_PATH;
            }
          }
        }
        dart.assert(state == IN_PATH || state == NOT_IN_PATH);
        if (state == IN_PATH) {
          while ((index = dart.notNull(index) + 1) < dart.notNull(uri[dartx.length])) {
            char = uri[dartx.codeUnitAt](index);
            if (char == Uri._QUESTION || char == Uri._NUMBER_SIGN) {
              break;
            }
            char = EOI;
          }
          state = NOT_IN_PATH;
        }
        dart.assert(state == NOT_IN_PATH);
        var isFile = scheme == "file";
        var ensureLeadingSlash = host != null;
        path = Uri._makePath(uri, pathStart, index, null, ensureLeadingSlash, isFile);
        if (char == Uri._QUESTION) {
          var numberSignIndex = uri[dartx.indexOf]('#', dart.notNull(index) + 1);
          if (dart.notNull(numberSignIndex) < 0) {
            query = Uri._makeQuery(uri, dart.notNull(index) + 1, uri[dartx.length], null);
          } else {
            query = Uri._makeQuery(uri, dart.notNull(index) + 1, numberSignIndex, null);
            fragment = Uri._makeFragment(uri, dart.notNull(numberSignIndex) + 1, uri[dartx.length]);
          }
        } else if (char == Uri._NUMBER_SIGN) {
          fragment = Uri._makeFragment(uri, dart.notNull(index) + 1, uri[dartx.length]);
        }
        return new Uri._internal(scheme, userinfo, host, port, path, query, fragment);
      },
      _fail: function(uri, index, message) {
        dart.throw(new FormatException(message, uri, index));
      },
      new: function(opts) {
        var scheme = opts && 'scheme' in opts ? opts.scheme : "";
        var userInfo = opts && 'userInfo' in opts ? opts.userInfo : "";
        var host = opts && 'host' in opts ? opts.host : null;
        var port = opts && 'port' in opts ? opts.port : null;
        var path = opts && 'path' in opts ? opts.path : null;
        var pathSegments = opts && 'pathSegments' in opts ? opts.pathSegments : null;
        var query = opts && 'query' in opts ? opts.query : null;
        var queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
        var fragment = opts && 'fragment' in opts ? opts.fragment : null;
        scheme = Uri._makeScheme(scheme, Uri._stringOrNullLength(scheme));
        userInfo = Uri._makeUserInfo(userInfo, 0, Uri._stringOrNullLength(userInfo));
        host = Uri._makeHost(host, 0, Uri._stringOrNullLength(host), false);
        if (query == "")
          query = null;
        query = Uri._makeQuery(query, 0, Uri._stringOrNullLength(query), queryParameters);
        fragment = Uri._makeFragment(fragment, 0, Uri._stringOrNullLength(fragment));
        port = Uri._makePort(port, scheme);
        var isFile = scheme == "file";
        if (host == null && (dart.notNull(userInfo[dartx.isNotEmpty]) || port != null || dart.notNull(isFile))) {
          host = "";
        }
        var ensureLeadingSlash = host != null;
        path = Uri._makePath(path, 0, Uri._stringOrNullLength(path), pathSegments, ensureLeadingSlash, isFile);
        return new Uri._internal(scheme, userInfo, host, port, path, query, fragment);
      },
      http: function(authority, unencodedPath, queryParameters) {
        if (queryParameters === void 0)
          queryParameters = null;
        return Uri._makeHttpUri("http", authority, unencodedPath, queryParameters);
      },
      https: function(authority, unencodedPath, queryParameters) {
        if (queryParameters === void 0)
          queryParameters = null;
        return Uri._makeHttpUri("https", authority, unencodedPath, queryParameters);
      },
      _makeHttpUri: function(scheme, authority, unencodedPath, queryParameters) {
        var userInfo = "";
        var host = null;
        var port = null;
        if (authority != null && dart.notNull(authority[dartx.isNotEmpty])) {
          var hostStart = 0;
          var hasUserInfo = false;
          for (var i = 0; dart.notNull(i) < dart.notNull(authority[dartx.length]); i = dart.notNull(i) + 1) {
            if (authority[dartx.codeUnitAt](i) == Uri._AT_SIGN) {
              hasUserInfo = true;
              userInfo = authority[dartx.substring](0, i);
              hostStart = dart.notNull(i) + 1;
              break;
            }
          }
          var hostEnd = hostStart;
          if (dart.notNull(hostStart) < dart.notNull(authority[dartx.length]) && authority[dartx.codeUnitAt](hostStart) == Uri._LEFT_BRACKET) {
            for (; dart.notNull(hostEnd) < dart.notNull(authority[dartx.length]); hostEnd = dart.notNull(hostEnd) + 1) {
              if (authority[dartx.codeUnitAt](hostEnd) == Uri._RIGHT_BRACKET)
                break;
            }
            if (hostEnd == authority[dartx.length]) {
              dart.throw(new FormatException("Invalid IPv6 host entry.", authority, hostStart));
            }
            Uri.parseIPv6Address(authority, dart.notNull(hostStart) + 1, hostEnd);
            hostEnd = dart.notNull(hostEnd) + 1;
            if (hostEnd != authority[dartx.length] && authority[dartx.codeUnitAt](hostEnd) != Uri._COLON) {
              dart.throw(new FormatException("Invalid end of authority", authority, hostEnd));
            }
          }
          var hasPort = false;
          for (; dart.notNull(hostEnd) < dart.notNull(authority[dartx.length]); hostEnd = dart.notNull(hostEnd) + 1) {
            if (authority[dartx.codeUnitAt](hostEnd) == Uri._COLON) {
              var portString = authority[dartx.substring](dart.notNull(hostEnd) + 1);
              if (dart.notNull(portString[dartx.isNotEmpty]))
                port = int.parse(portString);
              break;
            }
          }
          host = authority[dartx.substring](hostStart, hostEnd);
        }
        return Uri.new({
          scheme: scheme,
          userInfo: userInfo,
          host: dart.as(host, String),
          port: dart.as(port, int),
          pathSegments: unencodedPath[dartx.split]("/"),
          queryParameters: queryParameters
        });
      },
      file: function(path, opts) {
        var windows = opts && 'windows' in opts ? opts.windows : null;
        windows = windows == null ? Uri._isWindows : windows;
        return dart.notNull(windows) ? dart.as(Uri._makeWindowsFileUrl(path), Uri) : dart.as(Uri._makeFileUri(path), Uri);
      },
      get base() {
        var uri = _js_helper.Primitives.currentUri();
        if (uri != null)
          return Uri.parse(uri);
        dart.throw(new UnsupportedError("'Uri.base' is not supported"));
      },
      get _isWindows() {
        return false;
      },
      _checkNonWindowsPathReservedCharacters: function(segments, argumentError) {
        segments[dartx.forEach](dart.fn(function(segment) {
          if (dart.notNull(dart.as(dart.dsend(segment, 'contains', "/"), bool))) {
            if (dart.notNull(argumentError)) {
              dart.throw(new ArgumentError(("Illegal path character " + segment)));
            } else {
              dart.throw(new UnsupportedError(("Illegal path character " + segment)));
            }
          }
        }));
      },
      _checkWindowsPathReservedCharacters: function(segments, argumentError, firstSegment) {
        if (firstSegment === void 0)
          firstSegment = 0;
        segments[dartx.skip](firstSegment)[dartx.forEach](dart.fn(function(segment) {
          if (dart.notNull(dart.as(dart.dsend(segment, 'contains', RegExp.new('["*/:<>?\\\\|]')), bool))) {
            if (dart.notNull(argumentError)) {
              dart.throw(new ArgumentError("Illegal character in path"));
            } else {
              dart.throw(new UnsupportedError("Illegal character in path"));
            }
          }
        }));
      },
      _checkWindowsDriveLetter: function(charCode, argumentError) {
        if (dart.notNull(Uri._UPPER_CASE_A) <= dart.notNull(charCode) && dart.notNull(charCode) <= dart.notNull(Uri._UPPER_CASE_Z) || dart.notNull(Uri._LOWER_CASE_A) <= dart.notNull(charCode) && dart.notNull(charCode) <= dart.notNull(Uri._LOWER_CASE_Z)) {
          return;
        }
        if (dart.notNull(argumentError)) {
          dart.throw(new ArgumentError("Illegal drive letter " + dart.notNull(String.fromCharCode(charCode))));
        } else {
          dart.throw(new UnsupportedError("Illegal drive letter " + dart.notNull(String.fromCharCode(charCode))));
        }
      },
      _makeFileUri: function(path) {
        var sep = "/";
        if (dart.notNull(path[dartx.startsWith](sep))) {
          return Uri.new({
            scheme: "file",
            pathSegments: path[dartx.split](sep)
          });
        } else {
          return Uri.new({pathSegments: path[dartx.split](sep)});
        }
      },
      _makeWindowsFileUrl: function(path) {
        if (dart.notNull(path[dartx.startsWith]("\\\\?\\"))) {
          if (dart.notNull(path[dartx.startsWith]("\\\\?\\UNC\\"))) {
            path = ("\\" + path[dartx.substring](7));
          } else {
            path = path[dartx.substring](4);
            if (dart.notNull(path[dartx.length]) < 3 || path[dartx.codeUnitAt](1) != Uri._COLON || path[dartx.codeUnitAt](2) != Uri._BACKSLASH) {
              dart.throw(new ArgumentError("Windows paths with \\\\?\\ prefix must be absolute"));
            }
          }
        } else {
          path = path[dartx.replaceAll]("/", "\\");
        }
        var sep = "\\";
        if (dart.notNull(path[dartx.length]) > 1 && path[dartx.get](1) == ":") {
          Uri._checkWindowsDriveLetter(path[dartx.codeUnitAt](0), true);
          if (path[dartx.length] == 2 || path[dartx.codeUnitAt](2) != Uri._BACKSLASH) {
            dart.throw(new ArgumentError("Windows paths with drive letter must be absolute"));
          }
          var pathSegments = path[dartx.split](sep);
          Uri._checkWindowsPathReservedCharacters(pathSegments, true, 1);
          return Uri.new({
            scheme: "file",
            pathSegments: pathSegments
          });
        }
        if (dart.notNull(path[dartx.length]) > 0 && path[dartx.get](0) == sep) {
          if (dart.notNull(path[dartx.length]) > 1 && path[dartx.get](1) == sep) {
            var pathStart = path[dartx.indexOf]("\\", 2);
            var hostPart = pathStart == -1 ? path[dartx.substring](2) : path[dartx.substring](2, pathStart);
            var pathPart = pathStart == -1 ? "" : path[dartx.substring](dart.notNull(pathStart) + 1);
            var pathSegments$__37 = pathPart[dartx.split](sep);
            Uri._checkWindowsPathReservedCharacters(pathSegments$__37, true);
            return Uri.new({
              scheme: "file",
              host: hostPart,
              pathSegments: pathSegments$__37
            });
          } else {
            var pathSegments$__38 = path[dartx.split](sep);
            Uri._checkWindowsPathReservedCharacters(pathSegments$__38, true);
            return Uri.new({
              scheme: "file",
              pathSegments: pathSegments$__38
            });
          }
        } else {
          var pathSegments$__39 = path[dartx.split](sep);
          Uri._checkWindowsPathReservedCharacters(pathSegments$__39, true);
          return Uri.new({pathSegments: pathSegments$__39});
        }
      },
      _makePort: function(port, scheme) {
        if (port != null && port == Uri._defaultPort(scheme))
          return null;
        return port;
      },
      _makeHost: function(host, start, end, strictIPv6) {
        if (host == null)
          return null;
        if (start == end)
          return "";
        if (host[dartx.codeUnitAt](start) == Uri._LEFT_BRACKET) {
          if (host[dartx.codeUnitAt](dart.notNull(end) - 1) != Uri._RIGHT_BRACKET) {
            Uri._fail(host, start, 'Missing end `]` to match `[` in host');
          }
          Uri.parseIPv6Address(host, dart.notNull(start) + 1, dart.notNull(end) - 1);
          return host[dartx.substring](start, end)[dartx.toLowerCase]();
        }
        if (!dart.notNull(strictIPv6)) {
          for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
            if (host[dartx.codeUnitAt](i) == Uri._COLON) {
              Uri.parseIPv6Address(host, start, end);
              return ("[" + host + "]");
            }
          }
        }
        return Uri._normalizeRegName(host, start, end);
      },
      _isRegNameChar: function(char) {
        return dart.notNull(char) < 127 && !dart.equals(dart.dsend(Uri._regNameTable[dartx.get](dart.notNull(char) >> 4), '&', 1 << (dart.notNull(char) & 15)), 0);
      },
      _normalizeRegName: function(host, start, end) {
        var buffer = null;
        var sectionStart = start;
        var index = start;
        var isNormalized = true;
        while (dart.notNull(index) < dart.notNull(end)) {
          var char = host[dartx.codeUnitAt](index);
          if (char == Uri._PERCENT) {
            var replacement = Uri._normalizeEscape(host, index, true);
            if (replacement == null && dart.notNull(isNormalized)) {
              index = dart.notNull(index) + 3;
              continue;
            }
            if (buffer == null)
              buffer = new StringBuffer();
            var slice = host[dartx.substring](sectionStart, index);
            if (!dart.notNull(isNormalized))
              slice = slice[dartx.toLowerCase]();
            buffer.write(slice);
            var sourceLength = 3;
            if (replacement == null) {
              replacement = host[dartx.substring](index, dart.notNull(index) + 3);
            } else if (replacement == "%") {
              replacement = "%25";
              sourceLength = 1;
            }
            buffer.write(replacement);
            index = dart.notNull(index) + dart.notNull(sourceLength);
            sectionStart = index;
            isNormalized = true;
          } else if (dart.notNull(Uri._isRegNameChar(char))) {
            if (dart.notNull(isNormalized) && dart.notNull(Uri._UPPER_CASE_A) <= dart.notNull(char) && dart.notNull(Uri._UPPER_CASE_Z) >= dart.notNull(char)) {
              if (buffer == null)
                buffer = new StringBuffer();
              if (dart.notNull(sectionStart) < dart.notNull(index)) {
                buffer.write(host[dartx.substring](sectionStart, index));
                sectionStart = index;
              }
              isNormalized = false;
            }
            index = dart.notNull(index) + 1;
          } else if (dart.notNull(Uri._isGeneralDelimiter(char))) {
            Uri._fail(host, index, "Invalid character");
          } else {
            var sourceLength$__40 = 1;
            if ((dart.notNull(char) & 64512) == 55296 && dart.notNull(index) + 1 < dart.notNull(end)) {
              var tail = host[dartx.codeUnitAt](dart.notNull(index) + 1);
              if ((dart.notNull(tail) & 64512) == 56320) {
                char = 65536 | (dart.notNull(char) & 1023) << 10 | dart.notNull(tail) & 1023;
                sourceLength$__40 = 2;
              }
            }
            if (buffer == null)
              buffer = new StringBuffer();
            var slice$__41 = host[dartx.substring](sectionStart, index);
            if (!dart.notNull(isNormalized))
              slice$__41 = slice$__41[dartx.toLowerCase]();
            buffer.write(slice$__41);
            buffer.write(Uri._escapeChar(char));
            index = dart.notNull(index) + dart.notNull(sourceLength$__40);
            sectionStart = index;
          }
        }
        if (buffer == null)
          return host[dartx.substring](start, end);
        if (dart.notNull(sectionStart) < dart.notNull(end)) {
          var slice$__42 = host[dartx.substring](sectionStart, end);
          if (!dart.notNull(isNormalized))
            slice$__42 = slice$__42[dartx.toLowerCase]();
          buffer.write(slice$__42);
        }
        return dart.toString(buffer);
      },
      _makeScheme: function(scheme, end) {
        if (end == 0)
          return "";
        var firstCodeUnit = scheme[dartx.codeUnitAt](0);
        if (!dart.notNull(Uri._isAlphabeticCharacter(firstCodeUnit))) {
          Uri._fail(scheme, 0, "Scheme not starting with alphabetic character");
        }
        var allLowercase = dart.notNull(firstCodeUnit) >= dart.notNull(Uri._LOWER_CASE_A);
        for (var i = 0; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var codeUnit = scheme[dartx.codeUnitAt](i);
          if (!dart.notNull(Uri._isSchemeCharacter(codeUnit))) {
            Uri._fail(scheme, i, "Illegal scheme character");
          }
          if (dart.notNull(codeUnit) < dart.notNull(Uri._LOWER_CASE_A) || dart.notNull(codeUnit) > dart.notNull(Uri._LOWER_CASE_Z)) {
            allLowercase = false;
          }
        }
        scheme = scheme[dartx.substring](0, end);
        if (!dart.notNull(allLowercase))
          scheme = scheme[dartx.toLowerCase]();
        return scheme;
      },
      _makeUserInfo: function(userInfo, start, end) {
        if (userInfo == null)
          return "";
        return Uri._normalize(userInfo, start, end, dart.as(Uri._userinfoTable, List$(int)));
      },
      _makePath: function(path, start, end, pathSegments, ensureLeadingSlash, isFile) {
        if (path == null && pathSegments == null)
          return dart.notNull(isFile) ? "/" : "";
        if (path != null && pathSegments != null) {
          dart.throw(new ArgumentError('Both path and pathSegments specified'));
        }
        var result = null;
        if (path != null) {
          result = Uri._normalize(path, start, end, dart.as(Uri._pathCharOrSlashTable, List$(int)));
        } else {
          result = pathSegments[dartx.map](dart.fn(function(s) {
            return Uri._uriEncode(dart.as(Uri._pathCharTable, List$(int)), dart.as(s, String));
          }, String, [dart.dynamic]))[dartx.join]("/");
        }
        if (dart.notNull(dart.as(dart.dload(result, 'isEmpty'), bool))) {
          if (dart.notNull(isFile))
            return "/";
        } else if ((dart.notNull(isFile) || dart.notNull(ensureLeadingSlash)) && !dart.equals(dart.dsend(result, 'codeUnitAt', 0), Uri._SLASH)) {
          return ("/" + result);
        }
        return dart.as(result, String);
      },
      _makeQuery: function(query, start, end, queryParameters) {
        if (query == null && queryParameters == null)
          return null;
        if (query != null && queryParameters != null) {
          dart.throw(new ArgumentError('Both query and queryParameters specified'));
        }
        if (query != null)
          return Uri._normalize(query, start, end, dart.as(Uri._queryCharTable, List$(int)));
        var result = new StringBuffer();
        var first = true;
        queryParameters.forEach(dart.fn(function(key, value) {
          if (!dart.notNull(first)) {
            result.write("&");
          }
          first = false;
          result.write(Uri.encodeQueryComponent(dart.as(key, String)));
          if (value != null && !dart.notNull(dart.as(dart.dload(value, 'isEmpty'), bool))) {
            result.write("=");
            result.write(Uri.encodeQueryComponent(dart.as(value, String)));
          }
        }));
        return dart.toString(result);
      },
      _makeFragment: function(fragment, start, end) {
        if (fragment == null)
          return null;
        return Uri._normalize(fragment, start, end, dart.as(Uri._queryCharTable, List$(int)));
      },
      _stringOrNullLength: function(s) {
        return s == null ? 0 : s[dartx.length];
      },
      _isHexDigit: function(char) {
        if (dart.notNull(Uri._NINE) >= dart.notNull(char))
          return dart.notNull(Uri._ZERO) <= dart.notNull(char);
        char = dart.notNull(char) | 32;
        return dart.notNull(Uri._LOWER_CASE_A) <= dart.notNull(char) && dart.notNull(Uri._LOWER_CASE_F) >= dart.notNull(char);
      },
      _hexValue: function(char) {
        dart.assert(Uri._isHexDigit(char));
        if (dart.notNull(Uri._NINE) >= dart.notNull(char))
          return dart.notNull(char) - dart.notNull(Uri._ZERO);
        char = dart.notNull(char) | 32;
        return dart.notNull(char) - (dart.notNull(Uri._LOWER_CASE_A) - 10);
      },
      _normalizeEscape: function(source, index, lowerCase) {
        dart.assert(source[dartx.codeUnitAt](index) == Uri._PERCENT);
        if (dart.notNull(index) + 2 >= dart.notNull(source[dartx.length])) {
          return "%";
        }
        var firstDigit = source[dartx.codeUnitAt](dart.notNull(index) + 1);
        var secondDigit = source[dartx.codeUnitAt](dart.notNull(index) + 2);
        if (!dart.notNull(Uri._isHexDigit(firstDigit)) || !dart.notNull(Uri._isHexDigit(secondDigit))) {
          return "%";
        }
        var value = dart.notNull(Uri._hexValue(firstDigit)) * 16 + dart.notNull(Uri._hexValue(secondDigit));
        if (dart.notNull(Uri._isUnreservedChar(value))) {
          if (dart.notNull(lowerCase) && dart.notNull(Uri._UPPER_CASE_A) <= dart.notNull(value) && dart.notNull(Uri._UPPER_CASE_Z) >= dart.notNull(value)) {
            value = dart.notNull(value) | 32;
          }
          return String.fromCharCode(value);
        }
        if (dart.notNull(firstDigit) >= dart.notNull(Uri._LOWER_CASE_A) || dart.notNull(secondDigit) >= dart.notNull(Uri._LOWER_CASE_A)) {
          return source[dartx.substring](index, dart.notNull(index) + 3)[dartx.toUpperCase]();
        }
        return null;
      },
      _isUnreservedChar: function(ch) {
        return dart.notNull(ch) < 127 && !dart.equals(dart.dsend(Uri._unreservedTable[dartx.get](dart.notNull(ch) >> 4), '&', 1 << (dart.notNull(ch) & 15)), 0);
      },
      _escapeChar: function(char) {
        dart.assert(dart.dsend(char, '<=', 1114111));
        var hexDigits = "0123456789ABCDEF";
        var codeUnits = null;
        if (dart.notNull(dart.as(dart.dsend(char, '<', 128), bool))) {
          codeUnits = List.new(3);
          codeUnits[dartx.set](0, Uri._PERCENT);
          codeUnits[dartx.set](1, hexDigits[dartx.codeUnitAt](dart.as(dart.dsend(char, '>>', 4), int)));
          codeUnits[dartx.set](2, hexDigits[dartx.codeUnitAt](dart.as(dart.dsend(char, '&', 15), int)));
        } else {
          var flag = 192;
          var encodedBytes = 2;
          if (dart.notNull(dart.as(dart.dsend(char, '>', 2047), bool))) {
            flag = 224;
            encodedBytes = 3;
            if (dart.notNull(dart.as(dart.dsend(char, '>', 65535), bool))) {
              encodedBytes = 4;
              flag = 240;
            }
          }
          codeUnits = List.new(3 * dart.notNull(encodedBytes));
          var index = 0;
          while ((encodedBytes = dart.notNull(encodedBytes) - 1) >= 0) {
            var byte = dart.as(dart.dsend(dart.dsend(dart.dsend(char, '>>', 6 * dart.notNull(encodedBytes)), '&', 63), '|', flag), int);
            codeUnits[dartx.set](index, Uri._PERCENT);
            codeUnits[dartx.set](dart.notNull(index) + 1, hexDigits[dartx.codeUnitAt](dart.notNull(byte) >> 4));
            codeUnits[dartx.set](dart.notNull(index) + 2, hexDigits[dartx.codeUnitAt](dart.notNull(byte) & 15));
            index = dart.notNull(index) + 3;
            flag = 128;
          }
        }
        return String.fromCharCodes(dart.as(codeUnits, Iterable$(int)));
      },
      _normalize: function(component, start, end, charTable) {
        var buffer = null;
        var sectionStart = start;
        var index = start;
        while (dart.notNull(index) < dart.notNull(end)) {
          var char = component[dartx.codeUnitAt](index);
          if (dart.notNull(char) < 127 && (dart.notNull(charTable[dartx.get](dart.notNull(char) >> 4)) & 1 << (dart.notNull(char) & 15)) != 0) {
            index = dart.notNull(index) + 1;
          } else {
            var replacement = null;
            var sourceLength = null;
            if (char == Uri._PERCENT) {
              replacement = Uri._normalizeEscape(component, index, false);
              if (replacement == null) {
                index = dart.notNull(index) + 3;
                continue;
              }
              if ("%" == replacement) {
                replacement = "%25";
                sourceLength = 1;
              } else {
                sourceLength = 3;
              }
            } else if (dart.notNull(Uri._isGeneralDelimiter(char))) {
              Uri._fail(component, index, "Invalid character");
            } else {
              sourceLength = 1;
              if ((dart.notNull(char) & 64512) == 55296) {
                if (dart.notNull(index) + 1 < dart.notNull(end)) {
                  var tail = component[dartx.codeUnitAt](dart.notNull(index) + 1);
                  if ((dart.notNull(tail) & 64512) == 56320) {
                    sourceLength = 2;
                    char = 65536 | (dart.notNull(char) & 1023) << 10 | dart.notNull(tail) & 1023;
                  }
                }
              }
              replacement = Uri._escapeChar(char);
            }
            if (buffer == null)
              buffer = new StringBuffer();
            buffer.write(component[dartx.substring](sectionStart, index));
            buffer.write(replacement);
            index = dart.notNull(index) + dart.notNull(sourceLength);
            sectionStart = index;
          }
        }
        if (buffer == null) {
          return component[dartx.substring](start, end);
        }
        if (dart.notNull(sectionStart) < dart.notNull(end)) {
          buffer.write(component[dartx.substring](sectionStart, end));
        }
        return dart.toString(buffer);
      },
      _isSchemeCharacter: function(ch) {
        return dart.notNull(ch) < 128 && !dart.equals(dart.dsend(Uri._schemeTable[dartx.get](dart.notNull(ch) >> 4), '&', 1 << (dart.notNull(ch) & 15)), 0);
      },
      _isGeneralDelimiter: function(ch) {
        return dart.notNull(ch) <= dart.notNull(Uri._RIGHT_BRACKET) && !dart.equals(dart.dsend(Uri._genDelimitersTable[dartx.get](dart.notNull(ch) >> 4), '&', 1 << (dart.notNull(ch) & 15)), 0);
      },
      _addIfNonEmpty: function(sb, test, first, second) {
        if ("" != test) {
          sb.write(first);
          sb.write(second);
        }
      },
      encodeComponent: function(component) {
        return Uri._uriEncode(dart.as(Uri._unreserved2396Table, List$(int)), component);
      },
      encodeQueryComponent: function(component, opts) {
        var encoding = opts && 'encoding' in opts ? opts.encoding : convert.UTF8;
        return Uri._uriEncode(dart.as(Uri._unreservedTable, List$(int)), component, {
          encoding: encoding,
          spaceToPlus: true
        });
      },
      decodeComponent: function(encodedComponent) {
        return Uri._uriDecode(encodedComponent);
      },
      decodeQueryComponent: function(encodedComponent, opts) {
        var encoding = opts && 'encoding' in opts ? opts.encoding : convert.UTF8;
        return Uri._uriDecode(encodedComponent, {
          plusToSpace: true,
          encoding: encoding
        });
      },
      encodeFull: function(uri) {
        return Uri._uriEncode(dart.as(Uri._encodeFullTable, List$(int)), uri);
      },
      decodeFull: function(uri) {
        return Uri._uriDecode(uri);
      },
      splitQueryString: function(query, opts) {
        var encoding = opts && 'encoding' in opts ? opts.encoding : convert.UTF8;
        return dart.as(query[dartx.split]("&")[dartx.fold](dart.map(), dart.fn(function(map, element) {
          var index = dart.as(dart.dsend(element, 'indexOf', "="), int);
          if (index == -1) {
            if (!dart.equals(element, "")) {
              dart.dsetindex(map, Uri.decodeQueryComponent(dart.as(element, String), {encoding: encoding}), "");
            }
          } else if (index != 0) {
            var key = dart.dsend(element, 'substring', 0, index);
            var value = dart.dsend(element, 'substring', dart.notNull(index) + 1);
            dart.dsetindex(map, Uri.decodeQueryComponent(dart.as(key, String), {encoding: encoding}), Uri.decodeQueryComponent(dart.as(value, String), {encoding: encoding}));
          }
          return map;
        })), Map$(String, String));
      },
      parseIPv4Address: function(host) {
        function error(msg) {
          dart.throw(new FormatException(("Illegal IPv4 address, " + msg)));
        }
        dart.fn(error, dart.void, [String]);
        var bytes = host[dartx.split]('.');
        if (bytes[dartx.length] != 4) {
          error('IPv4 address should contain exactly 4 parts');
        }
        return dart.as(bytes[dartx.map](dart.fn(function(byteString) {
          var byte = int.parse(dart.as(byteString, String));
          if (dart.notNull(byte) < 0 || dart.notNull(byte) > 255) {
            error('each part must be in the range of `0..255`');
          }
          return byte;
        }))[dartx.toList](), List$(int));
      },
      parseIPv6Address: function(host, start, end) {
        if (start === void 0)
          start = 0;
        if (end === void 0)
          end = null;
        if (end == null)
          end = host[dartx.length];
        function error(msg, position) {
          if (position === void 0)
            position = null;
          dart.throw(new FormatException(("Illegal IPv6 address, " + msg), host, dart.as(position, int)));
        }
        dart.fn(error, dart.void, [String], [dart.dynamic]);
        function parseHex(start, end) {
          if (dart.notNull(end) - dart.notNull(start) > 4) {
            error('an IPv6 part can only contain a maximum of 4 hex digits', start);
          }
          var value = int.parse(host[dartx.substring](start, end), {radix: 16});
          if (dart.notNull(value) < 0 || dart.notNull(value) > (1 << 16) - 1) {
            error('each part must be in the range of `0x0..0xFFFF`', start);
          }
          return value;
        }
        dart.fn(parseHex, int, [int, int]);
        if (dart.notNull(host[dartx.length]) < 2)
          error('address is too short');
        var parts = dart.list([], int);
        var wildcardSeen = false;
        var partStart = start;
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          if (host[dartx.codeUnitAt](i) == Uri._COLON) {
            if (i == start) {
              i = dart.notNull(i) + 1;
              if (host[dartx.codeUnitAt](i) != Uri._COLON) {
                error('invalid start colon.', i);
              }
              partStart = i;
            }
            if (i == partStart) {
              if (dart.notNull(wildcardSeen)) {
                error('only one wildcard `::` is allowed', i);
              }
              wildcardSeen = true;
              parts[dartx.add](-1);
            } else {
              parts[dartx.add](parseHex(partStart, i));
            }
            partStart = dart.notNull(i) + 1;
          }
        }
        if (parts[dartx.length] == 0)
          error('too few parts');
        var atEnd = partStart == end;
        var isLastWildcard = parts[dartx.last] == -1;
        if (dart.notNull(atEnd) && !dart.notNull(isLastWildcard)) {
          error('expected a part after last `:`', end);
        }
        if (!dart.notNull(atEnd)) {
          try {
            parts[dartx.add](parseHex(partStart, end));
          } catch (e) {
            try {
              var last = Uri.parseIPv4Address(host[dartx.substring](partStart, end));
              parts[dartx.add](dart.notNull(last[dartx.get](0)) << 8 | dart.notNull(last[dartx.get](1)));
              parts[dartx.add](dart.notNull(last[dartx.get](2)) << 8 | dart.notNull(last[dartx.get](3)));
            } catch (e) {
              error('invalid end of IPv6 address.', partStart);
            }
          }
        }
        if (dart.notNull(wildcardSeen)) {
          if (dart.notNull(parts[dartx.length]) > 7) {
            error('an address with a wildcard must have less than 7 parts');
          }
        } else if (parts[dartx.length] != 8) {
          error('an address without a wildcard must contain exactly 8 parts');
        }
        var bytes = List$(int).new(16);
        for (var i$__43 = 0,
            index = 0; dart.notNull(i$__43) < dart.notNull(parts[dartx.length]); i$__43 = dart.notNull(i$__43) + 1) {
          var value = parts[dartx.get](i$__43);
          if (value == -1) {
            var wildCardLength = 9 - dart.notNull(parts[dartx.length]);
            for (var j = 0; dart.notNull(j) < dart.notNull(wildCardLength); j = dart.notNull(j) + 1) {
              bytes[dartx.set](index, 0);
              bytes[dartx.set](dart.notNull(index) + 1, 0);
              index = dart.notNull(index) + 2;
            }
          } else {
            bytes[dartx.set](index, dart.notNull(value) >> 8);
            bytes[dartx.set](dart.notNull(index) + 1, dart.notNull(value) & 255);
            index = dart.notNull(index) + 2;
          }
        }
        return dart.as(bytes, List$(int));
      },
      _uriEncode: function(canonicalTable, text, opts) {
        var encoding = opts && 'encoding' in opts ? opts.encoding : convert.UTF8;
        var spaceToPlus = opts && 'spaceToPlus' in opts ? opts.spaceToPlus : false;
        function byteToHex(byte, buffer) {
          var hex = '0123456789ABCDEF';
          dart.dsend(buffer, 'writeCharCode', hex[dartx.codeUnitAt](dart.as(dart.dsend(byte, '>>', 4), int)));
          dart.dsend(buffer, 'writeCharCode', hex[dartx.codeUnitAt](dart.as(dart.dsend(byte, '&', 15), int)));
        }
        dart.fn(byteToHex);
        var result = new StringBuffer();
        var bytes = encoding.encode(text);
        for (var i = 0; dart.notNull(i) < dart.notNull(bytes[dartx.length]); i = dart.notNull(i) + 1) {
          var byte = bytes[dartx.get](i);
          if (dart.notNull(byte) < 128 && (dart.notNull(canonicalTable[dartx.get](dart.notNull(byte) >> 4)) & 1 << (dart.notNull(byte) & 15)) != 0) {
            result.writeCharCode(byte);
          } else if (dart.notNull(spaceToPlus) && byte == Uri._SPACE) {
            result.writeCharCode(Uri._PLUS);
          } else {
            result.writeCharCode(Uri._PERCENT);
            byteToHex(byte, result);
          }
        }
        return dart.toString(result);
      },
      _hexCharPairToByte: function(s, pos) {
        var byte = 0;
        for (var i = 0; dart.notNull(i) < 2; i = dart.notNull(i) + 1) {
          var charCode = s[dartx.codeUnitAt](dart.notNull(pos) + dart.notNull(i));
          if (48 <= dart.notNull(charCode) && dart.notNull(charCode) <= 57) {
            byte = dart.notNull(byte) * 16 + dart.notNull(charCode) - 48;
          } else {
            charCode = dart.notNull(charCode) | 32;
            if (97 <= dart.notNull(charCode) && dart.notNull(charCode) <= 102) {
              byte = dart.notNull(byte) * 16 + dart.notNull(charCode) - 87;
            } else {
              dart.throw(new ArgumentError("Invalid URL encoding"));
            }
          }
        }
        return byte;
      },
      _uriDecode: function(text, opts) {
        var plusToSpace = opts && 'plusToSpace' in opts ? opts.plusToSpace : false;
        var encoding = opts && 'encoding' in opts ? opts.encoding : convert.UTF8;
        var simple = true;
        for (var i = 0; dart.notNull(i) < dart.notNull(text[dartx.length]) && dart.notNull(simple); i = dart.notNull(i) + 1) {
          var codeUnit = text[dartx.codeUnitAt](i);
          simple = codeUnit != Uri._PERCENT && codeUnit != Uri._PLUS;
        }
        var bytes = null;
        if (dart.notNull(simple)) {
          if (dart.equals(encoding, convert.UTF8) || dart.equals(encoding, convert.LATIN1)) {
            return text;
          } else {
            bytes = text[dartx.codeUnits];
          }
        } else {
          bytes = List$(int).new();
          for (var i$__44 = 0; dart.notNull(i$__44) < dart.notNull(text[dartx.length]); i$__44 = dart.notNull(i$__44) + 1) {
            var codeUnit$__45 = text[dartx.codeUnitAt](i$__44);
            if (dart.notNull(codeUnit$__45) > 127) {
              dart.throw(new ArgumentError("Illegal percent encoding in URI"));
            }
            if (codeUnit$__45 == Uri._PERCENT) {
              if (dart.notNull(i$__44) + 3 > dart.notNull(text[dartx.length])) {
                dart.throw(new ArgumentError('Truncated URI'));
              }
              bytes[dartx.add](Uri._hexCharPairToByte(text, dart.notNull(i$__44) + 1));
              i$__44 = dart.notNull(i$__44) + 2;
            } else if (dart.notNull(plusToSpace) && codeUnit$__45 == Uri._PLUS) {
              bytes[dartx.add](Uri._SPACE);
            } else {
              bytes[dartx.add](codeUnit$__45);
            }
          }
        }
        return encoding.decode(bytes);
      },
      _isAlphabeticCharacter: function(codeUnit) {
        return dart.notNull(codeUnit) >= dart.notNull(Uri._LOWER_CASE_A) && dart.notNull(codeUnit) <= dart.notNull(Uri._LOWER_CASE_Z) || dart.notNull(codeUnit) >= dart.notNull(Uri._UPPER_CASE_A) && dart.notNull(codeUnit) <= dart.notNull(Uri._UPPER_CASE_Z);
      }
    }, $__super);
  }(Object);
  dart.defineNamedConstructor(Uri, '_internal');
  dart.setSignature(Uri, {
    constructors: function() {
      return ({
        _internal: [Uri, [String, String, String, num, String, String, String]],
        new: [Uri, [], {
          scheme: String,
          userInfo: String,
          host: String,
          port: int,
          path: String,
          pathSegments: Iterable$(String),
          query: String,
          queryParameters: Map$(String, String),
          fragment: String
        }],
        http: [Uri, [String, String], [Map$(String, String)]],
        https: [Uri, [String, String], [Map$(String, String)]],
        file: [Uri, [String], {windows: bool}]
      });
    },
    methods: function() {
      var $__24;
      return (($__24 = {}, window.Object.defineProperty($__24, "replace", {
        value: [Uri, [], {
          scheme: String,
          userInfo: String,
          host: String,
          port: int,
          path: String,
          pathSegments: Iterable$(String),
          query: String,
          queryParameters: Map$(String, String),
          fragment: String
        }],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _merge, {
        value: [String, [String, String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _hasDotSegments, {
        value: [bool, [String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _removeDotSegments, {
        value: [String, [String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "resolve", {
        value: [Uri, [String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "resolveUri", {
        value: [Uri, [Uri]],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, "toFilePath", {
        value: [String, [], {windows: bool}],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _toFilePath, {
        value: [String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _toWindowsFilePath, {
        value: [String, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), window.Object.defineProperty($__24, _writeAuthority, {
        value: [dart.void, [StringSink]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__24));
    },
    statics: function() {
      return ({
        _defaultPort: [int, [String]],
        parse: [Uri, [String]],
        _fail: [dart.void, [String, int, String]],
        _makeHttpUri: [Uri, [String, String, String, Map$(String, String)]],
        _checkNonWindowsPathReservedCharacters: [dart.dynamic, [List$(String), bool]],
        _checkWindowsPathReservedCharacters: [dart.dynamic, [List$(String), bool], [int]],
        _checkWindowsDriveLetter: [dart.dynamic, [int, bool]],
        _makeFileUri: [dart.dynamic, [String]],
        _makeWindowsFileUrl: [dart.dynamic, [String]],
        _makePort: [int, [int, String]],
        _makeHost: [String, [String, int, int, bool]],
        _isRegNameChar: [bool, [int]],
        _normalizeRegName: [String, [String, int, int]],
        _makeScheme: [String, [String, int]],
        _makeUserInfo: [String, [String, int, int]],
        _makePath: [String, [String, int, int, Iterable$(String), bool, bool]],
        _makeQuery: [String, [String, int, int, Map$(String, String)]],
        _makeFragment: [String, [String, int, int]],
        _stringOrNullLength: [int, [String]],
        _isHexDigit: [bool, [int]],
        _hexValue: [int, [int]],
        _normalizeEscape: [String, [String, int, bool]],
        _isUnreservedChar: [bool, [int]],
        _escapeChar: [String, [dart.dynamic]],
        _normalize: [String, [String, int, int, List$(int)]],
        _isSchemeCharacter: [bool, [int]],
        _isGeneralDelimiter: [bool, [int]],
        _addIfNonEmpty: [dart.void, [StringBuffer, String, String, String]],
        encodeComponent: [String, [String]],
        encodeQueryComponent: [String, [String], {encoding: convert.Encoding}],
        decodeComponent: [String, [String]],
        decodeQueryComponent: [String, [String], {encoding: convert.Encoding}],
        encodeFull: [String, [String]],
        decodeFull: [String, [String]],
        splitQueryString: [Map$(String, String), [String], {encoding: convert.Encoding}],
        parseIPv4Address: [List$(int), [String]],
        parseIPv6Address: [List$(int), [String], [int, int]],
        _uriEncode: [String, [List$(int), String], {
          encoding: convert.Encoding,
          spaceToPlus: bool
        }],
        _hexCharPairToByte: [int, [String, int]],
        _uriDecode: [String, [String], {
          plusToSpace: bool,
          encoding: convert.Encoding
        }],
        _isAlphabeticCharacter: [bool, [int]]
      });
    },
    names: ['_defaultPort', 'parse', '_fail', '_makeHttpUri', '_checkNonWindowsPathReservedCharacters', '_checkWindowsPathReservedCharacters', '_checkWindowsDriveLetter', '_makeFileUri', '_makeWindowsFileUrl', '_makePort', '_makeHost', '_isRegNameChar', '_normalizeRegName', '_makeScheme', '_makeUserInfo', '_makePath', '_makeQuery', '_makeFragment', '_stringOrNullLength', '_isHexDigit', '_hexValue', '_normalizeEscape', '_isUnreservedChar', '_escapeChar', '_normalize', '_isSchemeCharacter', '_isGeneralDelimiter', '_addIfNonEmpty', 'encodeComponent', 'encodeQueryComponent', 'decodeComponent', 'decodeQueryComponent', 'encodeFull', 'decodeFull', 'splitQueryString', 'parseIPv4Address', 'parseIPv6Address', '_uriEncode', '_hexCharPairToByte', '_uriDecode', '_isAlphabeticCharacter']
  });
  Uri._SPACE = 32;
  Uri._DOUBLE_QUOTE = 34;
  Uri._NUMBER_SIGN = 35;
  Uri._PERCENT = 37;
  Uri._ASTERISK = 42;
  Uri._PLUS = 43;
  Uri._DOT = 46;
  Uri._SLASH = 47;
  Uri._ZERO = 48;
  Uri._NINE = 57;
  Uri._COLON = 58;
  Uri._LESS = 60;
  Uri._GREATER = 62;
  Uri._QUESTION = 63;
  Uri._AT_SIGN = 64;
  Uri._UPPER_CASE_A = 65;
  Uri._UPPER_CASE_F = 70;
  Uri._UPPER_CASE_Z = 90;
  Uri._LEFT_BRACKET = 91;
  Uri._BACKSLASH = 92;
  Uri._RIGHT_BRACKET = 93;
  Uri._LOWER_CASE_A = 97;
  Uri._LOWER_CASE_F = 102;
  Uri._LOWER_CASE_Z = 122;
  Uri._BAR = 124;
  Uri._unreservedTable = dart.const([0, 0, 24576, 1023, 65534, 34815, 65534, 18431]);
  Uri._unreserved2396Table = dart.const([0, 0, 26498, 1023, 65534, 34815, 65534, 18431]);
  Uri._encodeFullTable = dart.const([0, 0, 65498, 45055, 65535, 34815, 65534, 18431]);
  Uri._schemeTable = dart.const([0, 0, 26624, 1023, 65534, 2047, 65534, 2047]);
  Uri._schemeLowerTable = dart.const([0, 0, 26624, 1023, 0, 0, 65534, 2047]);
  Uri._subDelimitersTable = dart.const([0, 0, 32722, 11263, 65534, 34815, 65534, 18431]);
  Uri._genDelimitersTable = dart.const([0, 0, 32776, 33792, 1, 10240, 0, 0]);
  Uri._userinfoTable = dart.const([0, 0, 32722, 12287, 65534, 34815, 65534, 18431]);
  Uri._regNameTable = dart.const([0, 0, 32754, 11263, 65534, 34815, 65534, 18431]);
  Uri._pathCharTable = dart.const([0, 0, 32722, 12287, 65535, 34815, 65534, 18431]);
  Uri._pathCharOrSlashTable = dart.const([0, 0, 65490, 12287, 65535, 34815, 65534, 18431]);
  Uri._queryCharTable = dart.const([0, 0, 65490, 45055, 65535, 34815, 65534, 18431]);
  function _symbolToString(symbol) {
    return _internal.Symbol.getName(dart.as(symbol, _internal.Symbol));
  }
  dart.fn(_symbolToString, String, [Symbol]);
  exports.Object = Object;
  exports.Deprecated = Deprecated;
  exports.deprecated = deprecated;
  exports.override = override;
  exports.proxy = proxy;
  exports.bool = bool;
  exports.Comparator$ = Comparator$;
  exports.Comparator = Comparator;
  exports.Comparable$ = Comparable$;
  exports.Comparable = Comparable;
  exports.DateTime = DateTime;
  exports.num = num;
  exports.double = double;
  exports.Duration = Duration;
  exports.Error = Error;
  exports.AssertionError = AssertionError;
  exports.TypeError = TypeError;
  exports.CastError = CastError;
  exports.NullThrownError = NullThrownError;
  exports.ArgumentError = ArgumentError;
  exports.RangeError = RangeError;
  exports.IndexError = IndexError;
  exports.FallThroughError = FallThroughError;
  exports.AbstractClassInstantiationError = AbstractClassInstantiationError;
  exports.NoSuchMethodError = NoSuchMethodError;
  exports.UnsupportedError = UnsupportedError;
  exports.UnimplementedError = UnimplementedError;
  exports.StateError = StateError;
  exports.ConcurrentModificationError = ConcurrentModificationError;
  exports.OutOfMemoryError = OutOfMemoryError;
  exports.StackOverflowError = StackOverflowError;
  exports.CyclicInitializationError = CyclicInitializationError;
  exports.Exception = Exception;
  exports.FormatException = FormatException;
  exports.IntegerDivisionByZeroException = IntegerDivisionByZeroException;
  exports.Expando$ = Expando$;
  exports.Expando = Expando;
  exports.Function = Function;
  exports.identical = identical;
  exports.identityHashCode = identityHashCode;
  exports.int = int;
  exports.Invocation = Invocation;
  exports.Iterable$ = Iterable$;
  exports.Iterable = Iterable;
  exports.BidirectionalIterator$ = BidirectionalIterator$;
  exports.BidirectionalIterator = BidirectionalIterator;
  exports.Iterator$ = Iterator$;
  exports.Iterator = Iterator;
  exports.List$ = List$;
  exports.List = List;
  exports.Map$ = Map$;
  exports.Map = Map;
  exports.Null = Null;
  exports.Pattern = Pattern;
  exports.print = print;
  exports.Match = Match;
  exports.RegExp = RegExp;
  exports.Set$ = Set$;
  exports.Sink$ = Sink$;
  exports.Sink = Sink;
  exports.StackTrace = StackTrace;
  exports.Stopwatch = Stopwatch;
  exports.String = String;
  exports.RuneIterator = RuneIterator;
  exports.StringBuffer = StringBuffer;
  exports.StringSink = StringSink;
  exports.Symbol = Symbol;
  exports.Type = Type;
  exports.Uri = Uri;
});
