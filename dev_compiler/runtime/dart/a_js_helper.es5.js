dart_library.library('dart/_js_helper', null, ["dart/_runtime", 'dart/core', 'dart/collection', 'dart/_interceptors', 'dart/_foreign_helper'], [], function(exports, dart, core, collection, _interceptors, _foreign_helper) {
  'use strict';
  var dartx = dart.dartx;
  var NoThrows = function($__super) {
    function NoThrows() {
      $traceurRuntime.superConstructor(NoThrows).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NoThrows, {NoThrows: function() {}}, {}, $__super);
  }(core.Object);
  dart.setSignature(NoThrows, {constructors: function() {
      return ({NoThrows: [NoThrows, []]});
    }});
  var NoInline = function($__super) {
    function NoInline() {
      $traceurRuntime.superConstructor(NoInline).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NoInline, {NoInline: function() {}}, {}, $__super);
  }(core.Object);
  dart.setSignature(NoInline, {constructors: function() {
      return ({NoInline: [NoInline, []]});
    }});
  var Native = function($__super) {
    function Native() {
      $traceurRuntime.superConstructor(Native).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Native, {Native: function(name) {
        this.name = name;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(Native, {constructors: function() {
      return ({Native: [Native, [core.String]]});
    }});
  var JsPeerInterface = function($__super) {
    function JsPeerInterface() {
      $traceurRuntime.superConstructor(JsPeerInterface).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsPeerInterface, {JsPeerInterface: function(opts) {
        var name = opts && 'name' in opts ? opts.name : null;
        this.name = name;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(JsPeerInterface, {constructors: function() {
      return ({JsPeerInterface: [JsPeerInterface, [], {name: core.String}]});
    }});
  var SupportJsExtensionMethods = function($__super) {
    function SupportJsExtensionMethods() {
      $traceurRuntime.superConstructor(SupportJsExtensionMethods).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(SupportJsExtensionMethods, {SupportJsExtensionMethods: function() {}}, {}, $__super);
  }(core.Object);
  dart.setSignature(SupportJsExtensionMethods, {constructors: function() {
      return ({SupportJsExtensionMethods: [SupportJsExtensionMethods, []]});
    }});
  function defineProperty(obj, property, value) {
    Object.defineProperty(obj, property, {
      value: value,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
  dart.fn(defineProperty, dart.void, [dart.dynamic, core.String, dart.dynamic]);
  var _nativeRegExp = Symbol('_nativeRegExp');
  function regExpGetNative(regexp) {
    return regexp[_nativeRegExp];
  }
  dart.fn(regExpGetNative, function() {
    return dart.definiteFunctionType(dart.dynamic, [JSSyntaxRegExp]);
  });
  var _nativeGlobalVersion = Symbol('_nativeGlobalVersion');
  function regExpGetGlobalNative(regexp) {
    var nativeRegexp = regexp[_nativeGlobalVersion];
    nativeRegexp.lastIndex = 0;
    return nativeRegexp;
  }
  dart.fn(regExpGetGlobalNative, function() {
    return dart.definiteFunctionType(dart.dynamic, [JSSyntaxRegExp]);
  });
  var _nativeAnchoredVersion = Symbol('_nativeAnchoredVersion');
  function regExpCaptureCount(regexp) {
    var nativeAnchoredRegExp = regexp[_nativeAnchoredVersion];
    var match = nativeAnchoredRegExp.exec('');
    return dart.as(dart.dsend(dart.dload(match, 'length'), '-', 2), core.int);
  }
  dart.fn(regExpCaptureCount, function() {
    return dart.definiteFunctionType(core.int, [JSSyntaxRegExp]);
  });
  var _nativeGlobalRegExp = Symbol('_nativeGlobalRegExp');
  var _nativeAnchoredRegExp = Symbol('_nativeAnchoredRegExp');
  var _isMultiLine = Symbol('_isMultiLine');
  var _isCaseSensitive = Symbol('_isCaseSensitive');
  var _execGlobal = Symbol('_execGlobal');
  var _execAnchored = Symbol('_execAnchored');
  var JSSyntaxRegExp = function($__super) {
    var $__27;
    function JSSyntaxRegExp() {
      $traceurRuntime.superConstructor(JSSyntaxRegExp).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSSyntaxRegExp, ($__27 = {}, Object.defineProperty($__27, "toString", {
      value: function() {
        return ("RegExp/" + this.pattern + "/");
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, "JSSyntaxRegExp", {
      value: function(source, opts) {
        var multiLine = opts && 'multiLine' in opts ? opts.multiLine : false;
        var caseSensitive = opts && 'caseSensitive' in opts ? opts.caseSensitive : true;
        this.pattern = source;
        this[_nativeRegExp] = JSSyntaxRegExp.makeNative(source, multiLine, caseSensitive, false);
        this[_nativeGlobalRegExp] = null;
        this[_nativeAnchoredRegExp] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, _nativeGlobalVersion, {
      get: function() {
        if (this[_nativeGlobalRegExp] != null)
          return this[_nativeGlobalRegExp];
        return this[_nativeGlobalRegExp] = JSSyntaxRegExp.makeNative(this.pattern, this[_isMultiLine], this[_isCaseSensitive], true);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__27, _nativeAnchoredVersion, {
      get: function() {
        if (this[_nativeAnchoredRegExp] != null)
          return this[_nativeAnchoredRegExp];
        return this[_nativeAnchoredRegExp] = JSSyntaxRegExp.makeNative((this.pattern + "|()"), this[_isMultiLine], this[_isCaseSensitive], true);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__27, _isMultiLine, {
      get: function() {
        return this[_nativeRegExp].multiline;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__27, _isCaseSensitive, {
      get: function() {
        return !this[_nativeRegExp].ignoreCase;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__27, "firstMatch", {
      value: function(string) {
        var m = dart.as(this[_nativeRegExp].exec(checkString(string)), core.List$(core.String));
        if (m == null)
          return null;
        return new _MatchImplementation(this, m);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, "hasMatch", {
      value: function(string) {
        return this[_nativeRegExp].test(checkString(string));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, "stringMatch", {
      value: function(string) {
        var match = this.firstMatch(string);
        if (match != null)
          return match.group(0);
        return null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, "allMatches", {
      value: function(string, start) {
        if (start === void 0)
          start = 0;
        checkString(string);
        checkInt(start);
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(string[dartx.length])) {
          dart.throw(new core.RangeError.range(start, 0, string[dartx.length]));
        }
        return new _AllMatchesIterable(this, string, start);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, _execGlobal, {
      value: function(string, start) {
        var regexp = this[_nativeGlobalVersion];
        regexp.lastIndex = start;
        var match = dart.as(regexp.exec(string), core.List);
        if (match == null)
          return null;
        return new _MatchImplementation(this, dart.as(match, core.List$(core.String)));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, _execAnchored, {
      value: function(string, start) {
        var regexp = this[_nativeAnchoredVersion];
        regexp.lastIndex = start;
        var match = dart.as(regexp.exec(string), core.List);
        if (match == null)
          return null;
        if (match[dartx.get](dart.notNull(match[dartx.length]) - 1) != null)
          return null;
        match[dartx.length] = dart.notNull(match[dartx.length]) - 1;
        return new _MatchImplementation(this, dart.as(match, core.List$(core.String)));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, "matchAsPrefix", {
      value: function(string, start) {
        if (start === void 0)
          start = 0;
        if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(string[dartx.length])) {
          dart.throw(new core.RangeError.range(start, 0, string[dartx.length]));
        }
        return this[_execAnchored](string, start);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__27, "isMultiLine", {
      get: function() {
        return this[_isMultiLine];
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__27, "isCaseSensitive", {
      get: function() {
        return this[_isCaseSensitive];
      },
      configurable: true,
      enumerable: true
    }), $__27), {makeNative: function(source, multiLine, caseSensitive, global) {
        checkString(source);
        var m = dart.notNull(multiLine) ? 'm' : '';
        var i = dart.notNull(caseSensitive) ? '' : 'i';
        var g = dart.notNull(global) ? 'g' : '';
        var regexp = (function() {
          try {
            return new RegExp(source, m + i + g);
          } catch (e) {
            return e;
          }
        })();
        if (regexp instanceof RegExp)
          return regexp;
        var errorMessage = String(regexp);
        dart.throw(new core.FormatException(("Illegal RegExp pattern: " + source + ", " + errorMessage)));
      }}, $__super);
  }(core.Object);
  JSSyntaxRegExp[dart.implements] = function() {
    return [core.RegExp];
  };
  dart.setSignature(JSSyntaxRegExp, {
    constructors: function() {
      return ({JSSyntaxRegExp: [JSSyntaxRegExp, [core.String], {
          multiLine: core.bool,
          caseSensitive: core.bool
        }]});
    },
    methods: function() {
      var $__27;
      return (($__27 = {}, Object.defineProperty($__27, "firstMatch", {
        value: [core.Match, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, "hasMatch", {
        value: [core.bool, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, "stringMatch", {
        value: [core.String, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, "allMatches", {
        value: [core.Iterable$(core.Match), [core.String], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, _execGlobal, {
        value: [core.Match, [core.String, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, _execAnchored, {
        value: [core.Match, [core.String, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, "matchAsPrefix", {
        value: [core.Match, [core.String], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__27));
    },
    statics: function() {
      return ({makeNative: [dart.dynamic, [core.String, core.bool, core.bool, core.bool]]});
    },
    names: ['makeNative']
  });
  dart.defineExtensionMembers(JSSyntaxRegExp, ['allMatches', 'matchAsPrefix']);
  var _match = Symbol('_match');
  var _MatchImplementation = function($__super) {
    function _MatchImplementation() {
      $traceurRuntime.superConstructor(_MatchImplementation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_MatchImplementation, {
      _MatchImplementation: function(pattern, match) {
        this.pattern = pattern;
        this[_match] = match;
        dart.assert(typeof this[_match].input == 'string');
        dart.assert(typeof this[_match].index == 'number');
      },
      get input() {
        return this[_match].input;
      },
      get start() {
        return this[_match].index;
      },
      get end() {
        return dart.notNull(this.start) + dart.notNull(this[_match][dartx.get](0)[dartx.length]);
      },
      group: function(index) {
        return this[_match][dartx.get](index);
      },
      get: function(index) {
        return this.group(index);
      },
      get groupCount() {
        return dart.notNull(this[_match][dartx.length]) - 1;
      },
      groups: function(groups) {
        var out = dart.list([], core.String);
        var $__31 = true;
        var $__32 = false;
        var $__33 = undefined;
        try {
          for (var $__29 = void 0,
              $__28 = (groups)[Symbol.iterator](); !($__31 = ($__29 = $__28.next()).done); $__31 = true) {
            var i = $__29.value;
            {
              out[dartx.add](this.group(i));
            }
          }
        } catch ($__34) {
          $__32 = true;
          $__33 = $__34;
        } finally {
          try {
            if (!$__31 && $__28.return != null) {
              $__28.return();
            }
          } finally {
            if ($__32) {
              throw $__33;
            }
          }
        }
        return out;
      }
    }, {}, $__super);
  }(core.Object);
  _MatchImplementation[dart.implements] = function() {
    return [core.Match];
  };
  dart.setSignature(_MatchImplementation, {
    constructors: function() {
      return ({_MatchImplementation: [_MatchImplementation, [core.Pattern, core.List$(core.String)]]});
    },
    methods: function() {
      return ({
        group: [core.String, [core.int]],
        get: [core.String, [core.int]],
        groups: [core.List$(core.String), [core.List$(core.int)]]
      });
    }
  });
  var _re = Symbol('_re');
  var _string = Symbol('_string');
  var _start = Symbol('_start');
  var _AllMatchesIterable = function($__super) {
    function _AllMatchesIterable() {
      $traceurRuntime.superConstructor(_AllMatchesIterable).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_AllMatchesIterable, {
      _AllMatchesIterable: function(re, string, start) {
        this[_re] = re;
        this[_string] = string;
        this[_start] = start;
        $traceurRuntime.superGet(this, _AllMatchesIterable.prototype, "IterableBase").call(this);
      },
      get iterator() {
        return new _AllMatchesIterator(this[_re], this[_string], this[_start]);
      }
    }, {}, $__super);
  }(collection.IterableBase$(core.Match));
  dart.setSignature(_AllMatchesIterable, {constructors: function() {
      return ({_AllMatchesIterable: [_AllMatchesIterable, [JSSyntaxRegExp, core.String, core.int]]});
    }});
  dart.defineExtensionMembers(_AllMatchesIterable, ['iterator']);
  var _regExp = Symbol('_regExp');
  var _nextIndex = Symbol('_nextIndex');
  var _current = Symbol('_current');
  var _AllMatchesIterator = function($__super) {
    function _AllMatchesIterator() {
      $traceurRuntime.superConstructor(_AllMatchesIterator).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_AllMatchesIterator, {
      _AllMatchesIterator: function(regExp, string, nextIndex) {
        this[_regExp] = regExp;
        this[_string] = string;
        this[_nextIndex] = nextIndex;
        this[_current] = null;
      },
      get current() {
        return this[_current];
      },
      moveNext: function() {
        if (this[_string] == null)
          return false;
        if (dart.notNull(this[_nextIndex]) <= dart.notNull(this[_string][dartx.length])) {
          var match = this[_regExp][_execGlobal](this[_string], this[_nextIndex]);
          if (match != null) {
            this[_current] = match;
            var nextIndex = match.end;
            if (match.start == nextIndex) {
              nextIndex = dart.notNull(nextIndex) + 1;
            }
            this[_nextIndex] = nextIndex;
            return true;
          }
        }
        this[_current] = null;
        this[_string] = null;
        return false;
      }
    }, {}, $__super);
  }(core.Object);
  _AllMatchesIterator[dart.implements] = function() {
    return [core.Iterator$(core.Match)];
  };
  dart.setSignature(_AllMatchesIterator, {
    constructors: function() {
      return ({_AllMatchesIterator: [_AllMatchesIterator, [JSSyntaxRegExp, core.String, core.int]]});
    },
    methods: function() {
      return ({moveNext: [core.bool, []]});
    }
  });
  function firstMatchAfter(regExp, string, start) {
    return regExp[_execGlobal](string, start);
  }
  dart.fn(firstMatchAfter, core.Match, [JSSyntaxRegExp, core.String, core.int]);
  var StringMatch = function($__super) {
    function StringMatch() {
      $traceurRuntime.superConstructor(StringMatch).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StringMatch, {
      StringMatch: function(start, input, pattern) {
        this.start = start;
        this.input = input;
        this.pattern = pattern;
      },
      get end() {
        return dart.notNull(this.start) + dart.notNull(this.pattern[dartx.length]);
      },
      get: function(g) {
        return this.group(g);
      },
      get groupCount() {
        return 0;
      },
      group: function(group_) {
        if (group_ != 0) {
          dart.throw(new core.RangeError.value(group_));
        }
        return this.pattern;
      },
      groups: function(groups_) {
        var result = core.List$(core.String).new();
        var $__31 = true;
        var $__32 = false;
        var $__33 = undefined;
        try {
          for (var $__29 = void 0,
              $__28 = (groups_)[Symbol.iterator](); !($__31 = ($__29 = $__28.next()).done); $__31 = true) {
            var g = $__29.value;
            {
              result[dartx.add](this.group(g));
            }
          }
        } catch ($__34) {
          $__32 = true;
          $__33 = $__34;
        } finally {
          try {
            if (!$__31 && $__28.return != null) {
              $__28.return();
            }
          } finally {
            if ($__32) {
              throw $__33;
            }
          }
        }
        return result;
      }
    }, {}, $__super);
  }(core.Object);
  StringMatch[dart.implements] = function() {
    return [core.Match];
  };
  dart.setSignature(StringMatch, {
    constructors: function() {
      return ({StringMatch: [StringMatch, [core.int, core.String, core.String]]});
    },
    methods: function() {
      return ({
        get: [core.String, [core.int]],
        group: [core.String, [core.int]],
        groups: [core.List$(core.String), [core.List$(core.int)]]
      });
    }
  });
  function allMatchesInStringUnchecked(needle, haystack, startIndex) {
    var result = core.List$(core.Match).new();
    var length = haystack[dartx.length];
    var patternLength = needle[dartx.length];
    while (true) {
      var position = haystack[dartx.indexOf](needle, startIndex);
      if (position == -1) {
        break;
      }
      result[dartx.add](new StringMatch(position, haystack, needle));
      var endIndex = dart.notNull(position) + dart.notNull(patternLength);
      if (endIndex == length) {
        break;
      } else if (position == endIndex) {
        startIndex = dart.notNull(startIndex) + 1;
      } else {
        startIndex = endIndex;
      }
    }
    return result;
  }
  dart.fn(allMatchesInStringUnchecked, core.List$(core.Match), [core.String, core.String, core.int]);
  function stringContainsUnchecked(receiver, other, startIndex) {
    if (typeof other == 'string') {
      return !dart.equals(dart.dsend(receiver, 'indexOf', other, startIndex), -1);
    } else if (dart.is(other, JSSyntaxRegExp)) {
      return dart.dsend(other, 'hasMatch', dart.dsend(receiver, 'substring', startIndex));
    } else {
      var substr = dart.dsend(receiver, 'substring', startIndex);
      return dart.dload(dart.dsend(other, 'allMatches', substr), 'isNotEmpty');
    }
  }
  dart.fn(stringContainsUnchecked);
  function stringReplaceJS(receiver, replacer, to) {
    to = to.replace(/\$/g, "$$$$");
    return receiver.replace(replacer, to);
  }
  dart.fn(stringReplaceJS);
  function stringReplaceFirstRE(receiver, regexp, to, startIndex) {
    var match = dart.dsend(regexp, _execGlobal, receiver, startIndex);
    if (match == null)
      return receiver;
    var start = dart.dload(match, 'start');
    var end = dart.dload(match, 'end');
    return ("" + dart.dsend(receiver, 'substring', 0, start) + to + dart.dsend(receiver, 'substring', end));
  }
  dart.fn(stringReplaceFirstRE);
  var ESCAPE_REGEXP = '[[\\]{}()*+?.\\\\^$|]';
  function stringReplaceAllUnchecked(receiver, from, to) {
    checkString(to);
    if (typeof from == 'string') {
      if (dart.equals(from, "")) {
        if (dart.equals(receiver, "")) {
          return to;
        } else {
          var result = new core.StringBuffer();
          var length = dart.as(dart.dload(receiver, 'length'), core.int);
          result.write(to);
          for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
            result.write(dart.dindex(receiver, i));
            result.write(to);
          }
          return dart.toString(result);
        }
      } else {
        var quoter = new RegExp(ESCAPE_REGEXP, 'g');
        var quoted = from.replace(quoter, "\\$&");
        var replacer = new RegExp(quoted, 'g');
        return stringReplaceJS(receiver, replacer, to);
      }
    } else if (dart.is(from, JSSyntaxRegExp)) {
      var re = regExpGetGlobalNative(dart.as(from, JSSyntaxRegExp));
      return stringReplaceJS(receiver, re, to);
    } else {
      checkNull(from);
      dart.throw("String.replaceAll(Pattern) UNIMPLEMENTED");
    }
  }
  dart.fn(stringReplaceAllUnchecked);
  function _matchString(match) {
    return match.get(0);
  }
  dart.fn(_matchString, core.String, [core.Match]);
  function _stringIdentity(string) {
    return string;
  }
  dart.fn(_stringIdentity, core.String, [core.String]);
  function stringReplaceAllFuncUnchecked(receiver, pattern, onMatch, onNonMatch) {
    if (!dart.is(pattern, core.Pattern)) {
      dart.throw(new core.ArgumentError((pattern + " is not a Pattern")));
    }
    if (onMatch == null)
      onMatch = _matchString;
    if (onNonMatch == null)
      onNonMatch = _stringIdentity;
    if (typeof pattern == 'string') {
      return stringReplaceAllStringFuncUnchecked(receiver, pattern, onMatch, onNonMatch);
    }
    var buffer = new core.StringBuffer();
    var startIndex = 0;
    var $__31 = true;
    var $__32 = false;
    var $__33 = undefined;
    try {
      for (var $__29 = void 0,
          $__28 = (dart.as(dart.dsend(pattern, 'allMatches', receiver), core.Iterable$(core.Match)))[Symbol.iterator](); !($__31 = ($__29 = $__28.next()).done); $__31 = true) {
        var match = $__29.value;
        {
          buffer.write(dart.dcall(onNonMatch, dart.dsend(receiver, 'substring', startIndex, match.start)));
          buffer.write(dart.dcall(onMatch, match));
          startIndex = match.end;
        }
      }
    } catch ($__34) {
      $__32 = true;
      $__33 = $__34;
    } finally {
      try {
        if (!$__31 && $__28.return != null) {
          $__28.return();
        }
      } finally {
        if ($__32) {
          throw $__33;
        }
      }
    }
    buffer.write(dart.dcall(onNonMatch, dart.dsend(receiver, 'substring', startIndex)));
    return dart.toString(buffer);
  }
  dart.fn(stringReplaceAllFuncUnchecked);
  function stringReplaceAllEmptyFuncUnchecked(receiver, onMatch, onNonMatch) {
    var buffer = new core.StringBuffer();
    var length = dart.as(dart.dload(receiver, 'length'), core.int);
    var i = 0;
    buffer.write(dart.dcall(onNonMatch, ""));
    while (dart.notNull(i) < dart.notNull(length)) {
      buffer.write(dart.dcall(onMatch, new StringMatch(i, dart.as(receiver, core.String), "")));
      var code = dart.as(dart.dsend(receiver, 'codeUnitAt', i), core.int);
      if ((dart.notNull(code) & ~1023) == 55296 && dart.notNull(length) > dart.notNull(i) + 1) {
        code = dart.as(dart.dsend(receiver, 'codeUnitAt', dart.notNull(i) + 1), core.int);
        if ((dart.notNull(code) & ~1023) == 56320) {
          buffer.write(dart.dcall(onNonMatch, dart.dsend(receiver, 'substring', i, dart.notNull(i) + 2)));
          i = dart.notNull(i) + 2;
          continue;
        }
      }
      buffer.write(dart.dcall(onNonMatch, dart.dindex(receiver, i)));
      i = dart.notNull(i) + 1;
    }
    buffer.write(dart.dcall(onMatch, new StringMatch(i, dart.as(receiver, core.String), "")));
    buffer.write(dart.dcall(onNonMatch, ""));
    return dart.toString(buffer);
  }
  dart.fn(stringReplaceAllEmptyFuncUnchecked);
  function stringReplaceAllStringFuncUnchecked(receiver, pattern, onMatch, onNonMatch) {
    var patternLength = dart.as(dart.dload(pattern, 'length'), core.int);
    if (patternLength == 0) {
      return stringReplaceAllEmptyFuncUnchecked(receiver, onMatch, onNonMatch);
    }
    var length = dart.as(dart.dload(receiver, 'length'), core.int);
    var buffer = new core.StringBuffer();
    var startIndex = 0;
    while (dart.notNull(startIndex) < dart.notNull(length)) {
      var position = dart.as(dart.dsend(receiver, 'indexOf', pattern, startIndex), core.int);
      if (position == -1) {
        break;
      }
      buffer.write(dart.dcall(onNonMatch, dart.dsend(receiver, 'substring', startIndex, position)));
      buffer.write(dart.dcall(onMatch, new StringMatch(position, dart.as(receiver, core.String), dart.as(pattern, core.String))));
      startIndex = dart.notNull(position) + dart.notNull(patternLength);
    }
    buffer.write(dart.dcall(onNonMatch, dart.dsend(receiver, 'substring', startIndex)));
    return dart.toString(buffer);
  }
  dart.fn(stringReplaceAllStringFuncUnchecked);
  function stringReplaceFirstUnchecked(receiver, from, to, startIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (typeof from == 'string') {
      var index = dart.dsend(receiver, 'indexOf', from, startIndex);
      if (dart.notNull(dart.as(dart.dsend(index, '<', 0), core.bool)))
        return receiver;
      return ("" + dart.dsend(receiver, 'substring', 0, index) + to) + ("" + dart.dsend(receiver, 'substring', dart.dsend(index, '+', dart.dload(from, 'length'))));
    } else if (dart.is(from, JSSyntaxRegExp)) {
      return startIndex == 0 ? stringReplaceJS(receiver, regExpGetNative(dart.as(from, JSSyntaxRegExp)), to) : stringReplaceFirstRE(receiver, from, to, startIndex);
    } else {
      checkNull(from);
      dart.throw("String.replace(Pattern) UNIMPLEMENTED");
    }
  }
  dart.fn(stringReplaceFirstUnchecked, dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic], [core.int]);
  function stringJoinUnchecked(array, separator) {
    return array.join(separator);
  }
  dart.fn(stringJoinUnchecked);
  function getRuntimeType(object) {
    return dart.as(dart.realRuntimeType(object), core.Type);
  }
  dart.fn(getRuntimeType, core.Type, [dart.dynamic]);
  function getIndex(array, index) {
    dart.assert(isJsArray(array));
    return array[index];
  }
  dart.fn(getIndex, dart.dynamic, [dart.dynamic, core.int]);
  function getLength(array) {
    dart.assert(isJsArray(array));
    return array.length;
  }
  dart.fn(getLength, core.int, [dart.dynamic]);
  function isJsArray(value) {
    return dart.is(value, _interceptors.JSArray);
  }
  dart.fn(isJsArray, core.bool, [dart.dynamic]);
  var _Patch = function($__super) {
    function _Patch() {
      $traceurRuntime.superConstructor(_Patch).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Patch, {_Patch: function() {}}, {}, $__super);
  }(core.Object);
  dart.setSignature(_Patch, {constructors: function() {
      return ({_Patch: [_Patch, []]});
    }});
  var patch = dart.const(new _Patch());
  var InternalMap = function($__super) {
    function InternalMap() {
      $traceurRuntime.superConstructor(InternalMap).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(InternalMap, {}, {}, $__super);
  }(core.Object);
  var Primitives = function($__super) {
    function Primitives() {
      $traceurRuntime.superConstructor(Primitives).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Primitives, {}, {
      initializeStatics: function(id) {
        Primitives.mirrorFunctionCacheName = dart.notNull(Primitives.mirrorFunctionCacheName) + ("_" + id);
        Primitives.mirrorInvokeCacheName = dart.notNull(Primitives.mirrorInvokeCacheName) + ("_" + id);
      },
      objectHashCode: function(object) {
        var hash = dart.as(object.$identityHash, core.int);
        if (hash == null) {
          hash = Math.random() * 0x3fffffff | 0;
          object.$identityHash = hash;
        }
        return hash;
      },
      _throwFormatException: function(string) {
        dart.throw(new core.FormatException(string));
      },
      parseInt: function(source, radix, handleError) {
        if (handleError == null)
          handleError = dart.fn(function(s) {
            return dart.as(Primitives._throwFormatException(dart.as(s, core.String)), core.int);
          }, core.int, [dart.dynamic]);
        checkString(source);
        var match = /^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(source);
        var digitsIndex = 1;
        var hexIndex = 2;
        var decimalIndex = 3;
        var nonDecimalHexIndex = 4;
        if (radix == null) {
          radix = 10;
          if (match != null) {
            if (dart.dindex(match, hexIndex) != null) {
              return parseInt(source, 16);
            }
            if (dart.dindex(match, decimalIndex) != null) {
              return parseInt(source, 10);
            }
            return handleError(source);
          }
        } else {
          if (!(typeof radix == 'number'))
            dart.throw(new core.ArgumentError("Radix is not an integer"));
          if (dart.notNull(radix) < 2 || dart.notNull(radix) > 36) {
            dart.throw(new core.RangeError(("Radix " + radix + " not in range 2..36")));
          }
          if (match != null) {
            if (radix == 10 && dart.dindex(match, decimalIndex) != null) {
              return parseInt(source, 10);
            }
            if (dart.notNull(radix) < 10 || dart.dindex(match, decimalIndex) == null) {
              var maxCharCode = null;
              if (dart.notNull(radix) <= 10) {
                maxCharCode = 48 + dart.notNull(radix) - 1;
              } else {
                maxCharCode = 97 + dart.notNull(radix) - 10 - 1;
              }
              var digitsPart = dart.as(dart.dindex(match, digitsIndex), core.String);
              for (var i = 0; dart.notNull(i) < dart.notNull(digitsPart[dartx.length]); i = dart.notNull(i) + 1) {
                var characterCode = dart.notNull(digitsPart[dartx.codeUnitAt](0)) | 32;
                if (dart.notNull(digitsPart[dartx.codeUnitAt](i)) > dart.notNull(maxCharCode)) {
                  return handleError(source);
                }
              }
            }
          }
        }
        if (match == null)
          return handleError(source);
        return parseInt(source, radix);
      },
      parseDouble: function(source, handleError) {
        checkString(source);
        if (handleError == null)
          handleError = dart.fn(function(s) {
            return dart.as(Primitives._throwFormatException(dart.as(s, core.String)), core.double);
          }, core.double, [dart.dynamic]);
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(source)) {
          return handleError(source);
        }
        var result = parseFloat(source);
        if (dart.notNull(result[dartx.isNaN])) {
          var trimmed = source[dartx.trim]();
          if (trimmed == 'NaN' || trimmed == '+NaN' || trimmed == '-NaN') {
            return result;
          }
          return handleError(source);
        }
        return result;
      },
      objectTypeName: function(object) {
        return dart.toString(getRuntimeType(object));
      },
      objectToString: function(object) {
        var name = dart.typeName(dart.realRuntimeType(object));
        return ("Instance of '" + name + "'");
      },
      dateNow: function() {
        return Date.now();
      },
      initTicker: function() {
        if (Primitives.timerFrequency != null)
          return;
        Primitives.timerFrequency = 1000;
        Primitives.timerTicks = Primitives.dateNow;
        if (typeof window == "undefined")
          return;
        var jsWindow = window;
        if (jsWindow == null)
          return;
        var performance = jsWindow.performance;
        if (performance == null)
          return;
        if (typeof performance.now != "function")
          return;
        Primitives.timerFrequency = 1000000;
        Primitives.timerTicks = dart.fn(function() {
          return (1000 * performance.now())[dartx.floor]();
        }, core.int, []);
      },
      get isD8() {
        return typeof version == "function" && (typeof os === 'undefined' ? 'undefined' : $traceurRuntime.typeof(os)) == "object" && "system" in os;
      },
      get isJsshell() {
        return typeof version == "function" && typeof system == "function";
      },
      currentUri: function() {
        if (!!self.location) {
          return self.location.href;
        }
        return null;
      },
      _fromCharCodeApply: function(array) {
        var result = "";
        var kMaxApply = 500;
        var end = array[dartx.length];
        for (var i = 0; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + dart.notNull(kMaxApply)) {
          var subarray = null;
          if (dart.notNull(end) <= dart.notNull(kMaxApply)) {
            subarray = array;
          } else {
            subarray = array.slice(i, dart.notNull(i) + dart.notNull(kMaxApply) < dart.notNull(end) ? dart.notNull(i) + dart.notNull(kMaxApply) : end);
          }
          result = result + String.fromCharCode.apply(null, subarray);
        }
        return result;
      },
      stringFromCodePoints: function(codePoints) {
        var a = dart.list([], core.int);
        var $__31 = true;
        var $__32 = false;
        var $__33 = undefined;
        try {
          for (var $__29 = void 0,
              $__28 = (dart.as(codePoints, core.Iterable))[Symbol.iterator](); !($__31 = ($__29 = $__28.next()).done); $__31 = true) {
            var i = $__29.value;
            {
              if (!(typeof i == 'number'))
                dart.throw(new core.ArgumentError(i));
              if (dart.notNull(dart.as(dart.dsend(i, '<=', 65535), core.bool))) {
                a[dartx.add](dart.as(i, core.int));
              } else if (dart.notNull(dart.as(dart.dsend(i, '<=', 1114111), core.bool))) {
                a[dartx.add](dart.asInt((55296)[dartx['+']](dart.as(dart.dsend(dart.dsend(dart.dsend(i, '-', 65536), '>>', 10), '&', 1023), core.num))));
                a[dartx.add](dart.asInt((56320)[dartx['+']](dart.as(dart.dsend(i, '&', 1023), core.num))));
              } else {
                dart.throw(new core.ArgumentError(i));
              }
            }
          }
        } catch ($__34) {
          $__32 = true;
          $__33 = $__34;
        } finally {
          try {
            if (!$__31 && $__28.return != null) {
              $__28.return();
            }
          } finally {
            if ($__32) {
              throw $__33;
            }
          }
        }
        return Primitives._fromCharCodeApply(a);
      },
      stringFromCharCodes: function(charCodes) {
        var $__31 = true;
        var $__32 = false;
        var $__33 = undefined;
        try {
          for (var $__29 = void 0,
              $__28 = (dart.as(charCodes, core.Iterable))[Symbol.iterator](); !($__31 = ($__29 = $__28.next()).done); $__31 = true) {
            var i = $__29.value;
            {
              if (!(typeof i == 'number'))
                dart.throw(new core.ArgumentError(i));
              if (dart.notNull(dart.as(dart.dsend(i, '<', 0), core.bool)))
                dart.throw(new core.ArgumentError(i));
              if (dart.notNull(dart.as(dart.dsend(i, '>', 65535), core.bool)))
                return Primitives.stringFromCodePoints(charCodes);
            }
          }
        } catch ($__34) {
          $__32 = true;
          $__33 = $__34;
        } finally {
          try {
            if (!$__31 && $__28.return != null) {
              $__28.return();
            }
          } finally {
            if ($__32) {
              throw $__33;
            }
          }
        }
        return Primitives._fromCharCodeApply(dart.as(charCodes, core.List$(core.int)));
      },
      stringFromCharCode: function(charCode) {
        if (0 <= dart.notNull(dart.as(charCode, core.num))) {
          if (dart.notNull(dart.as(dart.dsend(charCode, '<=', 65535), core.bool))) {
            return String.fromCharCode(charCode);
          }
          if (dart.notNull(dart.as(dart.dsend(charCode, '<=', 1114111), core.bool))) {
            var bits = dart.dsend(charCode, '-', 65536);
            var low = (56320)[dartx['|']](dart.as(dart.dsend(bits, '&', 1023), core.int));
            var high = (55296)[dartx['|']](dart.as(dart.dsend(bits, '>>', 10), core.int));
            return String.fromCharCode(high, low);
          }
        }
        dart.throw(new core.RangeError.range(dart.as(charCode, core.num), 0, 1114111));
      },
      stringConcatUnchecked: function(string1, string2) {
        return _foreign_helper.JS_STRING_CONCAT(string1, string2);
      },
      flattenString: function(str) {
        return str.charCodeAt(0) == 0 ? str : str;
      },
      getTimeZoneName: function(receiver) {
        var d = Primitives.lazyAsJsDate(receiver);
        var match = dart.as(/\((.*)\)/.exec(d.toString()), core.List);
        if (match != null)
          return dart.as(match[dartx.get](1), core.String);
        match = dart.as(/^[A-Z,a-z]{3}\s[A-Z,a-z]{3}\s\d+\s\d{2}:\d{2}:\d{2}\s([A-Z]{3,5})\s\d{4}$/.exec(d.toString()), core.List);
        if (match != null)
          return dart.as(match[dartx.get](1), core.String);
        match = dart.as(/(?:GMT|UTC)[+-]\d{4}/.exec(d.toString()), core.List);
        if (match != null)
          return dart.as(match[dartx.get](0), core.String);
        return "";
      },
      getTimeZoneOffsetInMinutes: function(receiver) {
        return -Primitives.lazyAsJsDate(receiver).getTimezoneOffset();
      },
      valueFromDecomposedDate: function(years, month, day, hours, minutes, seconds, milliseconds, isUtc) {
        var MAX_MILLISECONDS_SINCE_EPOCH = 8640000000000000;
        checkInt(years);
        checkInt(month);
        checkInt(day);
        checkInt(hours);
        checkInt(minutes);
        checkInt(seconds);
        checkInt(milliseconds);
        checkBool(isUtc);
        var jsMonth = dart.dsend(month, '-', 1);
        var value = null;
        if (dart.notNull(dart.as(isUtc, core.bool))) {
          value = Date.UTC(years, jsMonth, day, hours, minutes, seconds, milliseconds);
        } else {
          value = new Date(years, jsMonth, day, hours, minutes, seconds, milliseconds).valueOf();
        }
        if (dart.notNull(dart.as(dart.dload(value, 'isNaN'), core.bool)) || dart.notNull(dart.as(dart.dsend(value, '<', -dart.notNull(MAX_MILLISECONDS_SINCE_EPOCH)), core.bool)) || dart.notNull(dart.as(dart.dsend(value, '>', MAX_MILLISECONDS_SINCE_EPOCH), core.bool))) {
          return null;
        }
        if (dart.notNull(dart.as(dart.dsend(years, '<=', 0), core.bool)) || dart.notNull(dart.as(dart.dsend(years, '<', 100), core.bool)))
          return Primitives.patchUpY2K(value, years, isUtc);
        return value;
      },
      patchUpY2K: function(value, years, isUtc) {
        var date = new Date(value);
        if (dart.notNull(dart.as(isUtc, core.bool))) {
          date.setUTCFullYear(years);
        } else {
          date.setFullYear(years);
        }
        return date.valueOf();
      },
      lazyAsJsDate: function(receiver) {
        if (receiver.date === void 0) {
          receiver.date = new Date(dart.dload(receiver, 'millisecondsSinceEpoch'));
        }
        return receiver.date;
      },
      getYear: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCFullYear() + 0 : Primitives.lazyAsJsDate(receiver).getFullYear() + 0;
      },
      getMonth: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCMonth() + 1 : Primitives.lazyAsJsDate(receiver).getMonth() + 1;
      },
      getDay: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCDate() + 0 : Primitives.lazyAsJsDate(receiver).getDate() + 0;
      },
      getHours: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCHours() + 0 : Primitives.lazyAsJsDate(receiver).getHours() + 0;
      },
      getMinutes: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCMinutes() + 0 : Primitives.lazyAsJsDate(receiver).getMinutes() + 0;
      },
      getSeconds: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCSeconds() + 0 : Primitives.lazyAsJsDate(receiver).getSeconds() + 0;
      },
      getMilliseconds: function(receiver) {
        return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCMilliseconds() + 0 : Primitives.lazyAsJsDate(receiver).getMilliseconds() + 0;
      },
      getWeekday: function(receiver) {
        var weekday = dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCDay() + 0 : Primitives.lazyAsJsDate(receiver).getDay() + 0;
        return (dart.notNull(weekday) + 6) % 7 + 1;
      },
      valueFromDateString: function(str) {
        if (!(typeof str == 'string'))
          dart.throw(new core.ArgumentError(str));
        var value = Date.parse(str);
        if (dart.notNull(value[dartx.isNaN]))
          dart.throw(new core.ArgumentError(str));
        return value;
      },
      getProperty: function(object, key) {
        if (object == null || typeof object == 'boolean' || typeof object == 'number' || typeof object == 'string') {
          dart.throw(new core.ArgumentError(object));
        }
        return object[key];
      },
      setProperty: function(object, key, value) {
        if (object == null || typeof object == 'boolean' || typeof object == 'number' || typeof object == 'string') {
          dart.throw(new core.ArgumentError(object));
        }
        object[key] = value;
      },
      identicalImplementation: function(a, b) {
        return a == null ? b == null : a === b;
      },
      extractStackTrace: function(error) {
        return getTraceFromException(error.$thrownJsError);
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(Primitives, {
    statics: function() {
      return ({
        initializeStatics: [dart.void, [core.int]],
        objectHashCode: [core.int, [dart.dynamic]],
        _throwFormatException: [dart.dynamic, [core.String]],
        parseInt: [core.int, [core.String, core.int, dart.functionType(core.int, [core.String])]],
        parseDouble: [core.double, [core.String, dart.functionType(core.double, [core.String])]],
        objectTypeName: [core.String, [core.Object]],
        objectToString: [core.String, [core.Object]],
        dateNow: [core.int, []],
        initTicker: [dart.void, []],
        currentUri: [core.String, []],
        _fromCharCodeApply: [core.String, [core.List$(core.int)]],
        stringFromCodePoints: [core.String, [dart.dynamic]],
        stringFromCharCodes: [core.String, [dart.dynamic]],
        stringFromCharCode: [core.String, [dart.dynamic]],
        stringConcatUnchecked: [core.String, [core.String, core.String]],
        flattenString: [core.String, [core.String]],
        getTimeZoneName: [core.String, [dart.dynamic]],
        getTimeZoneOffsetInMinutes: [core.int, [dart.dynamic]],
        valueFromDecomposedDate: [dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]],
        patchUpY2K: [dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic]],
        lazyAsJsDate: [dart.dynamic, [dart.dynamic]],
        getYear: [dart.dynamic, [dart.dynamic]],
        getMonth: [dart.dynamic, [dart.dynamic]],
        getDay: [dart.dynamic, [dart.dynamic]],
        getHours: [dart.dynamic, [dart.dynamic]],
        getMinutes: [dart.dynamic, [dart.dynamic]],
        getSeconds: [dart.dynamic, [dart.dynamic]],
        getMilliseconds: [dart.dynamic, [dart.dynamic]],
        getWeekday: [dart.dynamic, [dart.dynamic]],
        valueFromDateString: [dart.dynamic, [dart.dynamic]],
        getProperty: [dart.dynamic, [dart.dynamic, dart.dynamic]],
        setProperty: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
        identicalImplementation: [core.bool, [dart.dynamic, dart.dynamic]],
        extractStackTrace: [core.StackTrace, [core.Error]]
      });
    },
    names: ['initializeStatics', 'objectHashCode', '_throwFormatException', 'parseInt', 'parseDouble', 'objectTypeName', 'objectToString', 'dateNow', 'initTicker', 'currentUri', '_fromCharCodeApply', 'stringFromCodePoints', 'stringFromCharCodes', 'stringFromCharCode', 'stringConcatUnchecked', 'flattenString', 'getTimeZoneName', 'getTimeZoneOffsetInMinutes', 'valueFromDecomposedDate', 'patchUpY2K', 'lazyAsJsDate', 'getYear', 'getMonth', 'getDay', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getWeekday', 'valueFromDateString', 'getProperty', 'setProperty', 'identicalImplementation', 'extractStackTrace']
  });
  Primitives.mirrorFunctionCacheName = '$cachedFunction';
  Primitives.mirrorInvokeCacheName = '$cachedInvocation';
  Primitives.DOLLAR_CHAR_VALUE = 36;
  Primitives.timerFrequency = null;
  Primitives.timerTicks = null;
  function stringLastIndexOfUnchecked(receiver, element, start) {
    return receiver.lastIndexOf(element, start);
  }
  dart.fn(stringLastIndexOfUnchecked);
  function checkNull(object) {
    if (object == null)
      dart.throw(new core.ArgumentError(null));
    return object;
  }
  dart.fn(checkNull);
  function checkNum(value) {
    if (!(typeof value == 'number')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkNum);
  function checkInt(value) {
    if (!(typeof value == 'number')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkInt);
  function checkBool(value) {
    if (!(typeof value == 'boolean')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkBool);
  function checkString(value) {
    if (!(typeof value == 'string')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkString);
  function throwRuntimeError(message) {
    dart.throw(new RuntimeError(message));
  }
  dart.fn(throwRuntimeError);
  function throwAbstractClassInstantiationError(className) {
    dart.throw(new core.AbstractClassInstantiationError(dart.as(className, core.String)));
  }
  dart.fn(throwAbstractClassInstantiationError);
  var _message = Symbol('_message');
  var _method = Symbol('_method');
  var NullError = function($__super) {
    function NullError() {
      $traceurRuntime.superConstructor(NullError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NullError, {
      NullError: function(message, match) {
        this[_message] = message;
        this[_method] = match == null ? null : dart.as(match.method, core.String);
        $traceurRuntime.superGet(this, NullError.prototype, "Error").call(this);
      },
      toString: function() {
        if (this[_method] == null)
          return ("NullError: " + this[_message]);
        return ("NullError: Cannot call \"" + this[_method] + "\" on null");
      }
    }, {}, $__super);
  }(core.Error);
  NullError[dart.implements] = function() {
    return [core.NoSuchMethodError];
  };
  dart.setSignature(NullError, {constructors: function() {
      return ({NullError: [NullError, [core.String, dart.dynamic]]});
    }});
  var _receiver = Symbol('_receiver');
  var JsNoSuchMethodError = function($__super) {
    function JsNoSuchMethodError() {
      $traceurRuntime.superConstructor(JsNoSuchMethodError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsNoSuchMethodError, {
      JsNoSuchMethodError: function(message, match) {
        this[_message] = message;
        this[_method] = match == null ? null : dart.as(match.method, core.String);
        this[_receiver] = match == null ? null : dart.as(match.receiver, core.String);
        $traceurRuntime.superGet(this, JsNoSuchMethodError.prototype, "Error").call(this);
      },
      toString: function() {
        if (this[_method] == null)
          return ("NoSuchMethodError: " + this[_message]);
        if (this[_receiver] == null) {
          return ("NoSuchMethodError: Cannot call \"" + this[_method] + "\" (" + this[_message] + ")");
        }
        return ("NoSuchMethodError: Cannot call \"" + this[_method] + "\" on \"" + this[_receiver] + "\" ") + ("(" + this[_message] + ")");
      }
    }, {}, $__super);
  }(core.Error);
  JsNoSuchMethodError[dart.implements] = function() {
    return [core.NoSuchMethodError];
  };
  dart.setSignature(JsNoSuchMethodError, {constructors: function() {
      return ({JsNoSuchMethodError: [JsNoSuchMethodError, [core.String, dart.dynamic]]});
    }});
  var UnknownJsTypeError = function($__super) {
    function UnknownJsTypeError() {
      $traceurRuntime.superConstructor(UnknownJsTypeError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(UnknownJsTypeError, {
      UnknownJsTypeError: function(message) {
        this[_message] = message;
        $traceurRuntime.superGet(this, UnknownJsTypeError.prototype, "Error").call(this);
      },
      toString: function() {
        return dart.notNull(this[_message][dartx.isEmpty]) ? 'Error' : ("Error: " + this[_message]);
      }
    }, {}, $__super);
  }(core.Error);
  dart.setSignature(UnknownJsTypeError, {constructors: function() {
      return ({UnknownJsTypeError: [UnknownJsTypeError, [core.String]]});
    }});
  function getTraceFromException(exception) {
    return new _StackTrace(exception);
  }
  dart.fn(getTraceFromException, core.StackTrace, [dart.dynamic]);
  var _exception = Symbol('_exception');
  var _trace = Symbol('_trace');
  var _StackTrace = function($__super) {
    function _StackTrace() {
      $traceurRuntime.superConstructor(_StackTrace).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_StackTrace, {
      _StackTrace: function(exception) {
        this[_exception] = exception;
        this[_trace] = null;
      },
      toString: function() {
        if (this[_trace] != null)
          return this[_trace];
        var trace = null;
        if ($traceurRuntime.typeof(this[_exception]) === "object") {
          trace = dart.as(this[_exception].stack, core.String);
        }
        return this[_trace] = trace == null ? '' : trace;
      }
    }, {}, $__super);
  }(core.Object);
  _StackTrace[dart.implements] = function() {
    return [core.StackTrace];
  };
  dart.setSignature(_StackTrace, {constructors: function() {
      return ({_StackTrace: [_StackTrace, [dart.dynamic]]});
    }});
  function objectHashCode(object) {
    if (object == null || (typeof object === 'undefined' ? 'undefined' : $traceurRuntime.typeof(object)) != 'object') {
      return dart.hashCode(object);
    } else {
      return Primitives.objectHashCode(object);
    }
  }
  dart.fn(objectHashCode, core.int, [dart.dynamic]);
  function fillLiteralMap(keyValuePairs, result) {
    var index = 0;
    var length = getLength(keyValuePairs);
    while (dart.notNull(index) < dart.notNull(length)) {
      var key = getIndex(keyValuePairs, (function() {
        var x = index;
        index = dart.notNull(x) + 1;
        return x;
      })());
      var value = getIndex(keyValuePairs, (function() {
        var x = index;
        index = dart.notNull(x) + 1;
        return x;
      })());
      result.set(key, value);
    }
    return result;
  }
  dart.fn(fillLiteralMap, dart.dynamic, [dart.dynamic, core.Map]);
  function jsHasOwnProperty(jsObject, property) {
    return jsObject.hasOwnProperty(property);
  }
  dart.fn(jsHasOwnProperty, core.bool, [dart.dynamic, core.String]);
  function jsPropertyAccess(jsObject, property) {
    return jsObject[property];
  }
  dart.fn(jsPropertyAccess, dart.dynamic, [dart.dynamic, core.String]);
  function getFallThroughError() {
    return new FallThroughErrorImplementation();
  }
  dart.fn(getFallThroughError);
  var Creates = function($__super) {
    function Creates() {
      $traceurRuntime.superConstructor(Creates).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Creates, {Creates: function(types) {
        this.types = types;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(Creates, {constructors: function() {
      return ({Creates: [Creates, [core.String]]});
    }});
  var Returns = function($__super) {
    function Returns() {
      $traceurRuntime.superConstructor(Returns).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Returns, {Returns: function(types) {
        this.types = types;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(Returns, {constructors: function() {
      return ({Returns: [Returns, [core.String]]});
    }});
  var JSName = function($__super) {
    function JSName() {
      $traceurRuntime.superConstructor(JSName).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSName, {JSName: function(name) {
        this.name = name;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(JSName, {constructors: function() {
      return ({JSName: [JSName, [core.String]]});
    }});
  var JavaScriptIndexingBehavior = function($__super) {
    function JavaScriptIndexingBehavior() {
      $traceurRuntime.superConstructor(JavaScriptIndexingBehavior).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JavaScriptIndexingBehavior, {}, {}, $__super);
  }(_interceptors.JSMutableIndexable);
  var TypeErrorImplementation = function($__super) {
    function TypeErrorImplementation() {
      $traceurRuntime.superConstructor(TypeErrorImplementation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TypeErrorImplementation, {
      TypeErrorImplementation: function(value, type) {
        this.message = ("type '" + Primitives.objectTypeName(value) + "' is not a subtype ") + ("of type '" + type + "'");
        $traceurRuntime.superGet(this, TypeErrorImplementation.prototype, "Error").call(this);
      },
      fromMessage: function(message) {
        this.message = message;
        $traceurRuntime.superGet(this, TypeErrorImplementation.prototype, "Error").call(this);
      },
      toString: function() {
        return this.message;
      }
    }, {}, $__super);
  }(core.Error);
  TypeErrorImplementation[dart.implements] = function() {
    return [core.TypeError];
  };
  dart.defineNamedConstructor(TypeErrorImplementation, 'fromMessage');
  dart.setSignature(TypeErrorImplementation, {constructors: function() {
      return ({
        TypeErrorImplementation: [TypeErrorImplementation, [core.Object, core.String]],
        fromMessage: [TypeErrorImplementation, [core.String]]
      });
    }});
  var CastErrorImplementation = function($__super) {
    function CastErrorImplementation() {
      $traceurRuntime.superConstructor(CastErrorImplementation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CastErrorImplementation, {
      CastErrorImplementation: function(actualType, expectedType) {
        this.message = ("CastError: Casting value of type " + actualType + " to") + (" incompatible type " + expectedType);
        $traceurRuntime.superGet(this, CastErrorImplementation.prototype, "Error").call(this);
      },
      toString: function() {
        return this.message;
      }
    }, {}, $__super);
  }(core.Error);
  CastErrorImplementation[dart.implements] = function() {
    return [core.CastError];
  };
  dart.setSignature(CastErrorImplementation, {constructors: function() {
      return ({CastErrorImplementation: [CastErrorImplementation, [core.Object, core.Object]]});
    }});
  var FallThroughErrorImplementation = function($__super) {
    function FallThroughErrorImplementation() {
      $traceurRuntime.superConstructor(FallThroughErrorImplementation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(FallThroughErrorImplementation, {
      FallThroughErrorImplementation: function() {
        $traceurRuntime.superGet(this, FallThroughErrorImplementation.prototype, "FallThroughError").call(this);
      },
      toString: function() {
        return "Switch case fall-through.";
      }
    }, {}, $__super);
  }(core.FallThroughError);
  dart.setSignature(FallThroughErrorImplementation, {constructors: function() {
      return ({FallThroughErrorImplementation: [FallThroughErrorImplementation, []]});
    }});
  var RuntimeError = function($__super) {
    function RuntimeError() {
      $traceurRuntime.superConstructor(RuntimeError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RuntimeError, {
      RuntimeError: function(message) {
        this.message = message;
        $traceurRuntime.superGet(this, RuntimeError.prototype, "Error").call(this);
      },
      toString: function() {
        return ("RuntimeError: " + this.message);
      }
    }, {}, $__super);
  }(core.Error);
  dart.setSignature(RuntimeError, {constructors: function() {
      return ({RuntimeError: [RuntimeError, [dart.dynamic]]});
    }});
  function random64() {
    var int32a = Math.random() * 0x100000000 >>> 0;
    var int32b = Math.random() * 0x100000000 >>> 0;
    return dart.notNull(int32a) + dart.notNull(int32b) * 4294967296;
  }
  dart.fn(random64, core.int, []);
  function jsonEncodeNative(string) {
    return JSON.stringify(string);
  }
  dart.fn(jsonEncodeNative, core.String, [core.String]);
  var _jsIterator = Symbol('_jsIterator');
  var SyncIterator$ = dart.generic(function(E) {
    var SyncIterator = function($__super) {
      function SyncIterator() {
        $traceurRuntime.superConstructor(SyncIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SyncIterator, {
        SyncIterator: function(jsIterator) {
          this[_jsIterator] = jsIterator;
          this[_current] = null;
        },
        get current() {
          return this[_current];
        },
        moveNext: function() {
          var ret = this[_jsIterator].next();
          this[_current] = dart.as(ret.value, E);
          return !ret.done;
        }
      }, {}, $__super);
    }(core.Object);
    SyncIterator[dart.implements] = function() {
      return [core.Iterator$(E)];
    };
    dart.setSignature(SyncIterator, {
      constructors: function() {
        return ({SyncIterator: [SyncIterator$(E), [dart.dynamic]]});
      },
      methods: function() {
        return ({moveNext: [core.bool, []]});
      }
    });
    return SyncIterator;
  });
  var SyncIterator = SyncIterator$();
  var _generator = Symbol('_generator');
  var _args = Symbol('_args');
  var SyncIterable$ = dart.generic(function(E) {
    var SyncIterable = function($__super) {
      var $__27;
      function SyncIterable() {
        $traceurRuntime.superConstructor(SyncIterable).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(SyncIterable, ($__27 = {}, Object.defineProperty($__27, "SyncIterable", {
        value: function(generator, args) {
          this[_generator] = generator;
          this[_args] = args;
          $traceurRuntime.superGet(this, SyncIterable.prototype, "IterableBase").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, _jsIterator, {
        value: function() {
          var $__35;
          return ($__35 = this)[_generator].apply($__35, $traceurRuntime.spread(this[_args]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__27, "iterator", {
        get: function() {
          return new (SyncIterator$(E))(this[_jsIterator]());
        },
        configurable: true,
        enumerable: true
      }), $__27), {}, $__super);
    }(collection.IterableBase$(E));
    dart.setSignature(SyncIterable, {
      constructors: function() {
        return ({SyncIterable: [SyncIterable$(E), [dart.dynamic, dart.dynamic]]});
      },
      methods: function() {
        var $__27;
        return (($__27 = {}, Object.defineProperty($__27, _jsIterator, {
          value: [dart.dynamic, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__27));
      }
    });
    dart.defineExtensionMembers(SyncIterable, ['iterator']);
    return SyncIterable;
  });
  var SyncIterable = SyncIterable$();
  exports.NoThrows = NoThrows;
  exports.NoInline = NoInline;
  exports.Native = Native;
  exports.JsPeerInterface = JsPeerInterface;
  exports.SupportJsExtensionMethods = SupportJsExtensionMethods;
  exports.defineProperty = defineProperty;
  exports.regExpGetNative = regExpGetNative;
  exports.regExpGetGlobalNative = regExpGetGlobalNative;
  exports.regExpCaptureCount = regExpCaptureCount;
  exports.JSSyntaxRegExp = JSSyntaxRegExp;
  exports.firstMatchAfter = firstMatchAfter;
  exports.StringMatch = StringMatch;
  exports.allMatchesInStringUnchecked = allMatchesInStringUnchecked;
  exports.stringContainsUnchecked = stringContainsUnchecked;
  exports.stringReplaceJS = stringReplaceJS;
  exports.stringReplaceFirstRE = stringReplaceFirstRE;
  exports.ESCAPE_REGEXP = ESCAPE_REGEXP;
  exports.stringReplaceAllUnchecked = stringReplaceAllUnchecked;
  exports.stringReplaceAllFuncUnchecked = stringReplaceAllFuncUnchecked;
  exports.stringReplaceAllEmptyFuncUnchecked = stringReplaceAllEmptyFuncUnchecked;
  exports.stringReplaceAllStringFuncUnchecked = stringReplaceAllStringFuncUnchecked;
  exports.stringReplaceFirstUnchecked = stringReplaceFirstUnchecked;
  exports.stringJoinUnchecked = stringJoinUnchecked;
  exports.getRuntimeType = getRuntimeType;
  exports.getIndex = getIndex;
  exports.getLength = getLength;
  exports.isJsArray = isJsArray;
  exports.patch = patch;
  exports.InternalMap = InternalMap;
  exports.Primitives = Primitives;
  exports.stringLastIndexOfUnchecked = stringLastIndexOfUnchecked;
  exports.checkNull = checkNull;
  exports.checkNum = checkNum;
  exports.checkInt = checkInt;
  exports.checkBool = checkBool;
  exports.checkString = checkString;
  exports.throwRuntimeError = throwRuntimeError;
  exports.throwAbstractClassInstantiationError = throwAbstractClassInstantiationError;
  exports.NullError = NullError;
  exports.JsNoSuchMethodError = JsNoSuchMethodError;
  exports.UnknownJsTypeError = UnknownJsTypeError;
  exports.getTraceFromException = getTraceFromException;
  exports.objectHashCode = objectHashCode;
  exports.fillLiteralMap = fillLiteralMap;
  exports.jsHasOwnProperty = jsHasOwnProperty;
  exports.jsPropertyAccess = jsPropertyAccess;
  exports.getFallThroughError = getFallThroughError;
  exports.Creates = Creates;
  exports.Returns = Returns;
  exports.JSName = JSName;
  exports.JavaScriptIndexingBehavior = JavaScriptIndexingBehavior;
  exports.TypeErrorImplementation = TypeErrorImplementation;
  exports.CastErrorImplementation = CastErrorImplementation;
  exports.FallThroughErrorImplementation = FallThroughErrorImplementation;
  exports.RuntimeError = RuntimeError;
  exports.random64 = random64;
  exports.jsonEncodeNative = jsonEncodeNative;
  exports.SyncIterator$ = SyncIterator$;
  exports.SyncIterator = SyncIterator;
  exports.SyncIterable$ = SyncIterable$;
  exports.SyncIterable = SyncIterable;
});
