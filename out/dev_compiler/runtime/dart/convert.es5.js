dart_library.library('dart/convert', null, ["dart/_runtime", 'dart/core', 'dart/async', 'dart/typed_data', 'dart/_internal', 'dart/collection'], [], function(exports, dart, core, async, typed_data, _internal, collection) {
  'use strict';
  var dartx = dart.dartx;
  var Codec$ = dart.generic(function(S, T) {
    var Codec = function($__super) {
      function Codec() {
        $traceurRuntime.superConstructor(Codec).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Codec, {
        Codec: function() {},
        encode: function(input) {
          dart.as(input, S);
          return this.encoder.convert(input);
        },
        decode: function(encoded) {
          dart.as(encoded, T);
          return this.decoder.convert(encoded);
        },
        fuse: function(other) {
          dart.as(other, Codec$(T, dart.dynamic));
          return new (_FusedCodec$(S, T, dart.dynamic))(this, other);
        },
        get inverted() {
          return new (_InvertedCodec$(T, S))(this);
        }
      }, {}, $__super);
    }(core.Object);
    dart.setSignature(Codec, {
      constructors: function() {
        return ({Codec: [Codec$(S, T), []]});
      },
      methods: function() {
        return ({
          encode: [T, [S]],
          decode: [S, [T]],
          fuse: [Codec$(S, dart.dynamic), [Codec$(T, dart.dynamic)]]
        });
      }
    });
    return Codec;
  });
  var Codec = Codec$();
  var Encoding = function($__super) {
    function Encoding() {
      $traceurRuntime.superConstructor(Encoding).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Encoding, {
      Encoding: function() {
        $traceurRuntime.superGet(this, Encoding.prototype, "Codec").call(this);
      },
      decodeStream: function(byteStream) {
        return byteStream.transform(this.decoder).fold(new core.StringBuffer(), dart.fn(function(buffer, string) {
          return ((function() {
            dart.dsend(buffer, 'write', string);
            return buffer;
          })());
        })).then(dart.fn(function(buffer) {
          return dart.toString(buffer);
        }, core.String, [dart.dynamic]));
      }
    }, {getByName: function(name) {
        if (name == null)
          return null;
        name = name[dartx.toLowerCase]();
        return Encoding._nameToEncoding.get(name);
      }}, $__super);
  }(Codec$(core.String, core.List$(core.int)));
  dart.setSignature(Encoding, {
    constructors: function() {
      return ({Encoding: [Encoding, []]});
    },
    methods: function() {
      return ({decodeStream: [async.Future$(core.String), [async.Stream$(core.List$(core.int))]]});
    },
    statics: function() {
      return ({getByName: [Encoding, [core.String]]});
    },
    names: ['getByName']
  });
  var _allowInvalid = Symbol('_allowInvalid');
  var AsciiCodec = function($__super) {
    function AsciiCodec() {
      $traceurRuntime.superConstructor(AsciiCodec).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(AsciiCodec, {
      AsciiCodec: function(opts) {
        var allowInvalid = opts && 'allowInvalid' in opts ? opts.allowInvalid : false;
        this[_allowInvalid] = allowInvalid;
        $traceurRuntime.superGet(this, AsciiCodec.prototype, "Encoding").call(this);
      },
      get name() {
        return "us-ascii";
      },
      decode: function(bytes, opts) {
        var allowInvalid = opts && 'allowInvalid' in opts ? opts.allowInvalid : null;
        if (allowInvalid == null)
          allowInvalid = this[_allowInvalid];
        if (dart.notNull(allowInvalid)) {
          return dart.const(new AsciiDecoder({allowInvalid: true})).convert(bytes);
        } else {
          return dart.const(new AsciiDecoder({allowInvalid: false})).convert(bytes);
        }
      },
      get encoder() {
        return dart.const(new AsciiEncoder());
      },
      get decoder() {
        return dart.notNull(this[_allowInvalid]) ? dart.const(new AsciiDecoder({allowInvalid: true})) : dart.const(new AsciiDecoder({allowInvalid: false}));
      }
    }, {}, $__super);
  }(Encoding);
  dart.setSignature(AsciiCodec, {
    constructors: function() {
      return ({AsciiCodec: [AsciiCodec, [], {allowInvalid: core.bool}]});
    },
    methods: function() {
      return ({decode: [core.String, [core.List$(core.int)], {allowInvalid: core.bool}]});
    }
  });
  var ASCII = dart.const(new AsciiCodec());
  var _ASCII_MASK = 127;
  var Converter$ = dart.generic(function(S, T) {
    var Converter = function($__super) {
      function Converter() {
        $traceurRuntime.superConstructor(Converter).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Converter, {
        Converter: function() {},
        fuse: function(other) {
          dart.as(other, Converter$(T, dart.dynamic));
          return new (_FusedConverter$(S, T, dart.dynamic))(this, other);
        },
        startChunkedConversion: function(sink) {
          dart.as(sink, core.Sink$(T));
          dart.throw(new core.UnsupportedError(("This converter does not support chunked conversions: " + this)));
        },
        bind: function(source) {
          var $__22 = this;
          dart.as(source, async.Stream$(S));
          return async.Stream$(T).eventTransformed(source, dart.fn((function(sink) {
            return new _ConverterStreamEventSink($__22, sink);
          }).bind(this), _ConverterStreamEventSink, [async.EventSink]));
        }
      }, {}, $__super);
    }(core.Object);
    Converter[dart.implements] = function() {
      return [async.StreamTransformer$(S, T)];
    };
    dart.setSignature(Converter, {
      constructors: function() {
        return ({Converter: [Converter$(S, T), []]});
      },
      methods: function() {
        return ({
          fuse: [Converter$(S, dart.dynamic), [Converter$(T, dart.dynamic)]],
          startChunkedConversion: [ChunkedConversionSink, [core.Sink$(T)]],
          bind: [async.Stream$(T), [async.Stream$(S)]]
        });
      }
    });
    return Converter;
  });
  var Converter = Converter$();
  var _subsetMask = Symbol('_subsetMask');
  var _UnicodeSubsetEncoder = function($__super) {
    function _UnicodeSubsetEncoder() {
      $traceurRuntime.superConstructor(_UnicodeSubsetEncoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_UnicodeSubsetEncoder, {
      _UnicodeSubsetEncoder: function(subsetMask) {
        this[_subsetMask] = subsetMask;
        $traceurRuntime.superGet(this, _UnicodeSubsetEncoder.prototype, "Converter").call(this);
      },
      convert: function(string, start, end) {
        if (start === void 0)
          start = 0;
        if (end === void 0)
          end = null;
        var stringLength = string[dartx.length];
        core.RangeError.checkValidRange(start, end, stringLength);
        if (end == null)
          end = stringLength;
        var length = dart.notNull(end) - dart.notNull(start);
        var result = typed_data.Uint8List.new(length);
        for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
          var codeUnit = string[dartx.codeUnitAt](dart.notNull(start) + dart.notNull(i));
          if ((dart.notNull(codeUnit) & ~dart.notNull(this[_subsetMask])) != 0) {
            dart.throw(new core.ArgumentError("String contains invalid characters."));
          }
          result[dartx.set](i, codeUnit);
        }
        return dart.as(result, core.List$(core.int));
      },
      startChunkedConversion: function(sink) {
        if (!dart.is(sink, ByteConversionSink)) {
          sink = ByteConversionSink.from(sink);
        }
        return new _UnicodeSubsetEncoderSink(this[_subsetMask], dart.as(sink, ByteConversionSink));
      },
      bind: function(stream) {
        return $traceurRuntime.superGet(this, _UnicodeSubsetEncoder.prototype, "bind").call(this, stream);
      }
    }, {}, $__super);
  }(Converter$(core.String, core.List$(core.int)));
  dart.setSignature(_UnicodeSubsetEncoder, {
    constructors: function() {
      return ({_UnicodeSubsetEncoder: [_UnicodeSubsetEncoder, [core.int]]});
    },
    methods: function() {
      return ({
        convert: [core.List$(core.int), [core.String], [core.int, core.int]],
        startChunkedConversion: [StringConversionSink, [core.Sink$(core.List$(core.int))]],
        bind: [async.Stream$(core.List$(core.int)), [async.Stream$(core.String)]]
      });
    }
  });
  var AsciiEncoder = function($__super) {
    function AsciiEncoder() {
      $traceurRuntime.superConstructor(AsciiEncoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(AsciiEncoder, {AsciiEncoder: function() {
        $traceurRuntime.superGet(this, AsciiEncoder.prototype, "_UnicodeSubsetEncoder").call(this, _ASCII_MASK);
      }}, {}, $__super);
  }(_UnicodeSubsetEncoder);
  dart.setSignature(AsciiEncoder, {constructors: function() {
      return ({AsciiEncoder: [AsciiEncoder, []]});
    }});
  var StringConversionSinkMixin = function($__super) {
    function StringConversionSinkMixin() {
      $traceurRuntime.superConstructor(StringConversionSinkMixin).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StringConversionSinkMixin, {
      add: function(str) {
        return this.addSlice(str, 0, str[dartx.length], false);
      },
      asUtf8Sink: function(allowMalformed) {
        return new _Utf8ConversionSink(this, allowMalformed);
      },
      asStringSink: function() {
        return new _StringConversionSinkAsStringSinkAdapter(this);
      }
    }, {}, $__super);
  }(core.Object);
  StringConversionSinkMixin[dart.implements] = function() {
    return [StringConversionSink];
  };
  dart.setSignature(StringConversionSinkMixin, {methods: function() {
      return ({
        add: [dart.void, [core.String]],
        asUtf8Sink: [ByteConversionSink, [core.bool]],
        asStringSink: [ClosableStringSink, []]
      });
    }});
  var StringConversionSinkBase = function($__super) {
    function StringConversionSinkBase() {
      $traceurRuntime.superConstructor(StringConversionSinkBase).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StringConversionSinkBase, {}, {}, $__super);
  }(StringConversionSinkMixin);
  var _sink = Symbol('_sink');
  var _UnicodeSubsetEncoderSink = function($__super) {
    function _UnicodeSubsetEncoderSink() {
      $traceurRuntime.superConstructor(_UnicodeSubsetEncoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_UnicodeSubsetEncoderSink, {
      _UnicodeSubsetEncoderSink: function(subsetMask, sink) {
        this[_subsetMask] = subsetMask;
        this[_sink] = sink;
      },
      close: function() {
        this[_sink].close();
      },
      addSlice: function(source, start, end, isLast) {
        core.RangeError.checkValidRange(start, end, source[dartx.length]);
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var codeUnit = source[dartx.codeUnitAt](i);
          if ((dart.notNull(codeUnit) & ~dart.notNull(this[_subsetMask])) != 0) {
            dart.throw(new core.ArgumentError(("Source contains invalid character with code point: " + codeUnit + ".")));
          }
        }
        this[_sink].add(source[dartx.codeUnits][dartx.sublist](start, end));
        if (dart.notNull(isLast)) {
          this.close();
        }
      }
    }, {}, $__super);
  }(StringConversionSinkBase);
  dart.setSignature(_UnicodeSubsetEncoderSink, {
    constructors: function() {
      return ({_UnicodeSubsetEncoderSink: [_UnicodeSubsetEncoderSink, [core.int, ByteConversionSink]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        addSlice: [dart.void, [core.String, core.int, core.int, core.bool]]
      });
    }
  });
  var _convertInvalid = Symbol('_convertInvalid');
  var _UnicodeSubsetDecoder = function($__super) {
    var $__23;
    function _UnicodeSubsetDecoder() {
      $traceurRuntime.superConstructor(_UnicodeSubsetDecoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_UnicodeSubsetDecoder, ($__23 = {}, Object.defineProperty($__23, "_UnicodeSubsetDecoder", {
      value: function(allowInvalid, subsetMask) {
        this[_allowInvalid] = allowInvalid;
        this[_subsetMask] = subsetMask;
        $traceurRuntime.superGet(this, _UnicodeSubsetDecoder.prototype, "Converter").call(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "convert", {
      value: function(bytes, start, end) {
        if (start === void 0)
          start = 0;
        if (end === void 0)
          end = null;
        var byteCount = bytes[dartx.length];
        core.RangeError.checkValidRange(start, end, byteCount);
        if (end == null)
          end = byteCount;
        var length = dart.notNull(end) - dart.notNull(start);
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var byte = bytes[dartx.get](i);
          if ((dart.notNull(byte) & ~dart.notNull(this[_subsetMask])) != 0) {
            if (!dart.notNull(this[_allowInvalid])) {
              dart.throw(new core.FormatException(("Invalid value in input: " + byte)));
            }
            return this[_convertInvalid](bytes, start, end);
          }
        }
        return core.String.fromCharCodes(bytes, start, end);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _convertInvalid, {
      value: function(bytes, start, end) {
        var buffer = new core.StringBuffer();
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var value = bytes[dartx.get](i);
          if ((dart.notNull(value) & ~dart.notNull(this[_subsetMask])) != 0)
            value = 65533;
          buffer.writeCharCode(value);
        }
        return dart.toString(buffer);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "bind", {
      value: function(stream) {
        return $traceurRuntime.superGet(this, _UnicodeSubsetDecoder.prototype, "bind").call(this, stream);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {}, $__super);
  }(Converter$(core.List$(core.int), core.String));
  dart.setSignature(_UnicodeSubsetDecoder, {
    constructors: function() {
      return ({_UnicodeSubsetDecoder: [_UnicodeSubsetDecoder, [core.bool, core.int]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, "convert", {
        value: [core.String, [core.List$(core.int)], [core.int, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _convertInvalid, {
        value: [core.String, [core.List$(core.int), core.int, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "bind", {
        value: [async.Stream$(core.String), [async.Stream$(core.List$(core.int))]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    }
  });
  var AsciiDecoder = function($__super) {
    function AsciiDecoder() {
      $traceurRuntime.superConstructor(AsciiDecoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(AsciiDecoder, {
      AsciiDecoder: function(opts) {
        var allowInvalid = opts && 'allowInvalid' in opts ? opts.allowInvalid : false;
        $traceurRuntime.superGet(this, AsciiDecoder.prototype, "_UnicodeSubsetDecoder").call(this, allowInvalid, _ASCII_MASK);
      },
      startChunkedConversion: function(sink) {
        var stringSink = null;
        if (dart.is(sink, StringConversionSink)) {
          stringSink = sink;
        } else {
          stringSink = StringConversionSink.from(sink);
        }
        if (dart.notNull(this[_allowInvalid])) {
          return new _ErrorHandlingAsciiDecoderSink(stringSink.asUtf8Sink(false));
        } else {
          return new _SimpleAsciiDecoderSink(stringSink);
        }
      }
    }, {}, $__super);
  }(_UnicodeSubsetDecoder);
  dart.setSignature(AsciiDecoder, {
    constructors: function() {
      return ({AsciiDecoder: [AsciiDecoder, [], {allowInvalid: core.bool}]});
    },
    methods: function() {
      return ({startChunkedConversion: [ByteConversionSink, [core.Sink$(core.String)]]});
    }
  });
  var ChunkedConversionSink$ = dart.generic(function(T) {
    var ChunkedConversionSink = function($__super) {
      function ChunkedConversionSink() {
        $traceurRuntime.superConstructor(ChunkedConversionSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(ChunkedConversionSink, {ChunkedConversionSink: function() {}}, {withCallback: function(callback) {
          return new _SimpleCallbackSink(callback);
        }}, $__super);
    }(core.Object);
    ChunkedConversionSink[dart.implements] = function() {
      return [core.Sink$(T)];
    };
    dart.setSignature(ChunkedConversionSink, {constructors: function() {
        return ({
          ChunkedConversionSink: [ChunkedConversionSink$(T), []],
          withCallback: [ChunkedConversionSink$(T), [dart.functionType(dart.void, [core.List$(T)])]]
        });
      }});
    return ChunkedConversionSink;
  });
  var ChunkedConversionSink = ChunkedConversionSink$();
  var ByteConversionSink = function($__super) {
    function ByteConversionSink() {
      $traceurRuntime.superConstructor(ByteConversionSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ByteConversionSink, {ByteConversionSink: function() {
        $traceurRuntime.superGet(this, ByteConversionSink.prototype, "ChunkedConversionSink").call(this);
      }}, {
      withCallback: function(callback) {
        return new _ByteCallbackSink(callback);
      },
      from: function(sink) {
        return new _ByteAdapterSink(sink);
      }
    }, $__super);
  }(ChunkedConversionSink$(core.List$(core.int)));
  dart.setSignature(ByteConversionSink, {constructors: function() {
      return ({
        ByteConversionSink: [ByteConversionSink, []],
        withCallback: [ByteConversionSink, [dart.functionType(dart.void, [core.List$(core.int)])]],
        from: [ByteConversionSink, [core.Sink$(core.List$(core.int))]]
      });
    }});
  var ByteConversionSinkBase = function($__super) {
    function ByteConversionSinkBase() {
      $traceurRuntime.superConstructor(ByteConversionSinkBase).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ByteConversionSinkBase, {
      ByteConversionSinkBase: function() {
        $traceurRuntime.superGet(this, ByteConversionSinkBase.prototype, "ByteConversionSink").call(this);
      },
      addSlice: function(chunk, start, end, isLast) {
        this.add(chunk[dartx.sublist](start, end));
        if (dart.notNull(isLast))
          this.close();
      }
    }, {}, $__super);
  }(ByteConversionSink);
  dart.setSignature(ByteConversionSinkBase, {methods: function() {
      return ({addSlice: [dart.void, [core.List$(core.int), core.int, core.int, core.bool]]});
    }});
  var _utf8Sink = Symbol('_utf8Sink');
  var _ErrorHandlingAsciiDecoderSink = function($__super) {
    function _ErrorHandlingAsciiDecoderSink() {
      $traceurRuntime.superConstructor(_ErrorHandlingAsciiDecoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ErrorHandlingAsciiDecoderSink, {
      _ErrorHandlingAsciiDecoderSink: function(utf8Sink) {
        this[_utf8Sink] = utf8Sink;
      },
      close: function() {
        this[_utf8Sink].close();
      },
      add: function(source) {
        this.addSlice(source, 0, source[dartx.length], false);
      },
      addSlice: function(source, start, end, isLast) {
        core.RangeError.checkValidRange(start, end, source[dartx.length]);
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          if ((dart.notNull(source[dartx.get](i)) & ~dart.notNull(_ASCII_MASK)) != 0) {
            if (dart.notNull(i) > dart.notNull(start))
              this[_utf8Sink].addSlice(source, start, i, false);
            this[_utf8Sink].add(dart.const(dart.list([239, 191, 189], core.int)));
            start = dart.notNull(i) + 1;
          }
        }
        if (dart.notNull(start) < dart.notNull(end)) {
          this[_utf8Sink].addSlice(source, start, end, isLast);
        } else if (dart.notNull(isLast)) {
          this.close();
        }
      }
    }, {}, $__super);
  }(ByteConversionSinkBase);
  dart.setSignature(_ErrorHandlingAsciiDecoderSink, {
    constructors: function() {
      return ({_ErrorHandlingAsciiDecoderSink: [_ErrorHandlingAsciiDecoderSink, [ByteConversionSink]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        add: [dart.void, [core.List$(core.int)]]
      });
    }
  });
  var _SimpleAsciiDecoderSink = function($__super) {
    function _SimpleAsciiDecoderSink() {
      $traceurRuntime.superConstructor(_SimpleAsciiDecoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_SimpleAsciiDecoderSink, {
      _SimpleAsciiDecoderSink: function(sink) {
        this[_sink] = sink;
      },
      close: function() {
        this[_sink].close();
      },
      add: function(source) {
        for (var i = 0; dart.notNull(i) < dart.notNull(source[dartx.length]); i = dart.notNull(i) + 1) {
          if ((dart.notNull(source[dartx.get](i)) & ~dart.notNull(_ASCII_MASK)) != 0) {
            dart.throw(new core.FormatException("Source contains non-ASCII bytes."));
          }
        }
        this[_sink].add(core.String.fromCharCodes(source));
      },
      addSlice: function(source, start, end, isLast) {
        var length = source[dartx.length];
        core.RangeError.checkValidRange(start, end, length);
        if (dart.notNull(start) < dart.notNull(end)) {
          if (start != 0 || end != length) {
            source = source[dartx.sublist](start, end);
          }
          this.add(source);
        }
        if (dart.notNull(isLast))
          this.close();
      }
    }, {}, $__super);
  }(ByteConversionSinkBase);
  dart.setSignature(_SimpleAsciiDecoderSink, {
    constructors: function() {
      return ({_SimpleAsciiDecoderSink: [_SimpleAsciiDecoderSink, [core.Sink]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        add: [dart.void, [core.List$(core.int)]]
      });
    }
  });
  var _ByteAdapterSink = function($__super) {
    function _ByteAdapterSink() {
      $traceurRuntime.superConstructor(_ByteAdapterSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ByteAdapterSink, {
      _ByteAdapterSink: function(sink) {
        this[_sink] = sink;
      },
      add: function(chunk) {
        return this[_sink].add(chunk);
      },
      close: function() {
        return this[_sink].close();
      }
    }, {}, $__super);
  }(ByteConversionSinkBase);
  dart.setSignature(_ByteAdapterSink, {
    constructors: function() {
      return ({_ByteAdapterSink: [_ByteAdapterSink, [core.Sink$(core.List$(core.int))]]});
    },
    methods: function() {
      return ({
        add: [dart.void, [core.List$(core.int)]],
        close: [dart.void, []]
      });
    }
  });
  var _buffer = Symbol('_buffer');
  var _callback = Symbol('_callback');
  var _bufferIndex = Symbol('_bufferIndex');
  var _ByteCallbackSink = function($__super) {
    function _ByteCallbackSink() {
      $traceurRuntime.superConstructor(_ByteCallbackSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ByteCallbackSink, {
      _ByteCallbackSink: function(callback) {
        this[_buffer] = typed_data.Uint8List.new(_ByteCallbackSink._INITIAL_BUFFER_SIZE);
        this[_callback] = callback;
        this[_bufferIndex] = 0;
      },
      add: function(chunk) {
        var freeCount = dart.notNull(this[_buffer][dartx.length]) - dart.notNull(this[_bufferIndex]);
        if (dart.notNull(chunk[dartx.length]) > dart.notNull(freeCount)) {
          var oldLength = this[_buffer][dartx.length];
          var newLength = dart.notNull(_ByteCallbackSink._roundToPowerOf2(dart.notNull(chunk[dartx.length]) + dart.notNull(oldLength))) * 2;
          var grown = typed_data.Uint8List.new(newLength);
          grown[dartx.setRange](0, this[_buffer][dartx.length], this[_buffer]);
          this[_buffer] = grown;
        }
        this[_buffer][dartx.setRange](this[_bufferIndex], dart.notNull(this[_bufferIndex]) + dart.notNull(chunk[dartx.length]), chunk);
        this[_bufferIndex] = dart.notNull(this[_bufferIndex]) + dart.notNull(chunk[dartx.length]);
      },
      close: function() {
        this[_callback](this[_buffer][dartx.sublist](0, this[_bufferIndex]));
      }
    }, {_roundToPowerOf2: function(v) {
        dart.assert(dart.notNull(v) > 0);
        v = dart.notNull(v) - 1;
        v = dart.notNull(v) | dart.notNull(v) >> 1;
        v = dart.notNull(v) | dart.notNull(v) >> 2;
        v = dart.notNull(v) | dart.notNull(v) >> 4;
        v = dart.notNull(v) | dart.notNull(v) >> 8;
        v = dart.notNull(v) | dart.notNull(v) >> 16;
        v = dart.notNull(v) + 1;
        return v;
      }}, $__super);
  }(ByteConversionSinkBase);
  dart.setSignature(_ByteCallbackSink, {
    constructors: function() {
      return ({_ByteCallbackSink: [_ByteCallbackSink, [dart.functionType(dart.void, [core.List$(core.int)])]]});
    },
    methods: function() {
      return ({
        add: [dart.void, [core.Iterable$(core.int)]],
        close: [dart.void, []]
      });
    },
    statics: function() {
      return ({_roundToPowerOf2: [core.int, [core.int]]});
    },
    names: ['_roundToPowerOf2']
  });
  _ByteCallbackSink._INITIAL_BUFFER_SIZE = 1024;
  var _ChunkedConversionCallback$ = dart.generic(function(T) {
    var _ChunkedConversionCallback = dart.typedef('_ChunkedConversionCallback', function() {
      return dart.functionType(dart.void, [T]);
    });
    return _ChunkedConversionCallback;
  });
  var _ChunkedConversionCallback = _ChunkedConversionCallback$();
  var _accumulated = Symbol('_accumulated');
  var _SimpleCallbackSink$ = dart.generic(function(T) {
    var _SimpleCallbackSink = function($__super) {
      function _SimpleCallbackSink() {
        $traceurRuntime.superConstructor(_SimpleCallbackSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SimpleCallbackSink, {
        _SimpleCallbackSink: function(callback) {
          this[_accumulated] = dart.list([], T);
          this[_callback] = callback;
          $traceurRuntime.superGet(this, _SimpleCallbackSink.prototype, "ChunkedConversionSink").call(this);
        },
        add: function(chunk) {
          dart.as(chunk, T);
          this[_accumulated][dartx.add](chunk);
        },
        close: function() {
          this[_callback](this[_accumulated]);
        }
      }, {}, $__super);
    }(ChunkedConversionSink$(T));
    dart.setSignature(_SimpleCallbackSink, {
      constructors: function() {
        return ({_SimpleCallbackSink: [_SimpleCallbackSink$(T), [_ChunkedConversionCallback$(core.List$(T))]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [T]],
          close: [dart.void, []]
        });
      }
    });
    return _SimpleCallbackSink;
  });
  var _SimpleCallbackSink = _SimpleCallbackSink$();
  var _EventSinkAdapter$ = dart.generic(function(T) {
    var _EventSinkAdapter = function($__super) {
      function _EventSinkAdapter() {
        $traceurRuntime.superConstructor(_EventSinkAdapter).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_EventSinkAdapter, {
        _EventSinkAdapter: function(sink) {
          this[_sink] = sink;
        },
        add: function(data) {
          dart.as(data, T);
          return this[_sink].add(data);
        },
        close: function() {
          return this[_sink].close();
        }
      }, {}, $__super);
    }(core.Object);
    _EventSinkAdapter[dart.implements] = function() {
      return [ChunkedConversionSink$(T)];
    };
    dart.setSignature(_EventSinkAdapter, {
      constructors: function() {
        return ({_EventSinkAdapter: [_EventSinkAdapter$(T), [async.EventSink$(T)]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [T]],
          close: [dart.void, []]
        });
      }
    });
    return _EventSinkAdapter;
  });
  var _EventSinkAdapter = _EventSinkAdapter$();
  var _eventSink = Symbol('_eventSink');
  var _chunkedSink = Symbol('_chunkedSink');
  var _ConverterStreamEventSink$ = dart.generic(function(S, T) {
    var _ConverterStreamEventSink = function($__super) {
      function _ConverterStreamEventSink() {
        $traceurRuntime.superConstructor(_ConverterStreamEventSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ConverterStreamEventSink, {
        _ConverterStreamEventSink: function(converter, sink) {
          this[_eventSink] = sink;
          this[_chunkedSink] = converter.startChunkedConversion(sink);
        },
        add: function(o) {
          dart.as(o, S);
          return this[_chunkedSink].add(o);
        },
        addError: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          this[_eventSink].addError(error, stackTrace);
        },
        close: function() {
          return this[_chunkedSink].close();
        }
      }, {}, $__super);
    }(core.Object);
    _ConverterStreamEventSink[dart.implements] = function() {
      return [async.EventSink$(S)];
    };
    dart.setSignature(_ConverterStreamEventSink, {
      constructors: function() {
        return ({_ConverterStreamEventSink: [_ConverterStreamEventSink$(S, T), [Converter, async.EventSink$(T)]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [S]],
          addError: [dart.void, [core.Object], [core.StackTrace]],
          close: [dart.void, []]
        });
      }
    });
    return _ConverterStreamEventSink;
  });
  var _ConverterStreamEventSink = _ConverterStreamEventSink$();
  var _first = Symbol('_first');
  var _second = Symbol('_second');
  var _FusedCodec$ = dart.generic(function(S, M, T) {
    var _FusedCodec = function($__super) {
      function _FusedCodec() {
        $traceurRuntime.superConstructor(_FusedCodec).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_FusedCodec, {
        get encoder() {
          return dart.as(this[_first].encoder.fuse(this[_second].encoder), Converter$(S, T));
        },
        get decoder() {
          return dart.as(this[_second].decoder.fuse(this[_first].decoder), Converter$(T, S));
        },
        _FusedCodec: function(first, second) {
          this[_first] = first;
          this[_second] = second;
          $traceurRuntime.superGet(this, _FusedCodec.prototype, "Codec").call(this);
        }
      }, {}, $__super);
    }(Codec$(S, T));
    dart.setSignature(_FusedCodec, {constructors: function() {
        return ({_FusedCodec: [_FusedCodec$(S, M, T), [Codec$(S, M), Codec$(M, T)]]});
      }});
    return _FusedCodec;
  });
  var _FusedCodec = _FusedCodec$();
  var _codec = Symbol('_codec');
  var _InvertedCodec$ = dart.generic(function(T, S) {
    var _InvertedCodec = function($__super) {
      function _InvertedCodec() {
        $traceurRuntime.superConstructor(_InvertedCodec).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_InvertedCodec, {
        _InvertedCodec: function(codec) {
          this[_codec] = codec;
          $traceurRuntime.superGet(this, _InvertedCodec.prototype, "Codec").call(this);
        },
        get encoder() {
          return this[_codec].decoder;
        },
        get decoder() {
          return this[_codec].encoder;
        },
        get inverted() {
          return this[_codec];
        }
      }, {}, $__super);
    }(Codec$(T, S));
    dart.setSignature(_InvertedCodec, {constructors: function() {
        return ({_InvertedCodec: [_InvertedCodec$(T, S), [Codec$(S, T)]]});
      }});
    return _InvertedCodec;
  });
  var _InvertedCodec = _InvertedCodec$();
  var _FusedConverter$ = dart.generic(function(S, M, T) {
    var _FusedConverter = function($__super) {
      function _FusedConverter() {
        $traceurRuntime.superConstructor(_FusedConverter).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_FusedConverter, {
        _FusedConverter: function(first, second) {
          this[_first] = first;
          this[_second] = second;
          $traceurRuntime.superGet(this, _FusedConverter.prototype, "Converter").call(this);
        },
        convert: function(input) {
          dart.as(input, S);
          return dart.as(this[_second].convert(this[_first].convert(input)), T);
        },
        startChunkedConversion: function(sink) {
          dart.as(sink, core.Sink$(T));
          return this[_first].startChunkedConversion(this[_second].startChunkedConversion(sink));
        }
      }, {}, $__super);
    }(Converter$(S, T));
    dart.setSignature(_FusedConverter, {
      constructors: function() {
        return ({_FusedConverter: [_FusedConverter$(S, M, T), [Converter, Converter]]});
      },
      methods: function() {
        return ({
          convert: [T, [S]],
          startChunkedConversion: [ChunkedConversionSink, [core.Sink$(T)]]
        });
      }
    });
    return _FusedConverter;
  });
  var _FusedConverter = _FusedConverter$();
  dart.defineLazyProperties(Encoding, {
    get _nameToEncoding() {
      return dart.map({
        "iso_8859-1:1987": LATIN1,
        "iso-ir-100": LATIN1,
        "iso_8859-1": LATIN1,
        "iso-8859-1": LATIN1,
        latin1: LATIN1,
        l1: LATIN1,
        ibm819: LATIN1,
        cp819: LATIN1,
        csisolatin1: LATIN1,
        "iso-ir-6": ASCII,
        "ansi_x3.4-1968": ASCII,
        "ansi_x3.4-1986": ASCII,
        "iso_646.irv:1991": ASCII,
        "iso646-us": ASCII,
        "us-ascii": ASCII,
        us: ASCII,
        ibm367: ASCII,
        cp367: ASCII,
        csascii: ASCII,
        ascii: ASCII,
        csutf8: UTF8,
        "utf-8": UTF8
      });
    },
    set _nameToEncoding(_) {}
  });
  var _name = Symbol('_name');
  var HtmlEscapeMode = function($__super) {
    function HtmlEscapeMode() {
      $traceurRuntime.superConstructor(HtmlEscapeMode).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(HtmlEscapeMode, {
      _: function(name, escapeLtGt, escapeQuot, escapeApos, escapeSlash) {
        this[_name] = name;
        this.escapeLtGt = escapeLtGt;
        this.escapeQuot = escapeQuot;
        this.escapeApos = escapeApos;
        this.escapeSlash = escapeSlash;
      },
      toString: function() {
        return this[_name];
      }
    }, {}, $__super);
  }(core.Object);
  dart.defineNamedConstructor(HtmlEscapeMode, '_');
  dart.setSignature(HtmlEscapeMode, {constructors: function() {
      return ({_: [HtmlEscapeMode, [core.String, core.bool, core.bool, core.bool, core.bool]]});
    }});
  HtmlEscapeMode.UNKNOWN = dart.const(new HtmlEscapeMode._('unknown', true, true, true, true));
  var _convert = Symbol('_convert');
  var HtmlEscape = function($__super) {
    var $__23;
    function HtmlEscape() {
      $traceurRuntime.superConstructor(HtmlEscape).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(HtmlEscape, ($__23 = {}, Object.defineProperty($__23, "HtmlEscape", {
      value: function(mode) {
        if (mode === void 0)
          mode = HtmlEscapeMode.UNKNOWN;
        this.mode = mode;
        $traceurRuntime.superGet(this, HtmlEscape.prototype, "Converter").call(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "convert", {
      value: function(text) {
        var val = this[_convert](text, 0, text[dartx.length]);
        return val == null ? text : val;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _convert, {
      value: function(text, start, end) {
        var result = null;
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var ch = text[dartx.get](i);
          var replace = null;
          switch (ch) {
            case '&':
              {
                replace = '&amp;';
                break;
              }
            case ' ':
              {
                replace = '&nbsp;';
                break;
              }
            case '"':
              {
                if (dart.notNull(this.mode.escapeQuot))
                  replace = '&quot;';
                break;
              }
            case "'":
              {
                if (dart.notNull(this.mode.escapeApos))
                  replace = '&#x27;';
                break;
              }
            case '<':
              {
                if (dart.notNull(this.mode.escapeLtGt))
                  replace = '&lt;';
                break;
              }
            case '>':
              {
                if (dart.notNull(this.mode.escapeLtGt))
                  replace = '&gt;';
                break;
              }
            case '/':
              {
                if (dart.notNull(this.mode.escapeSlash))
                  replace = '&#x2F;';
                break;
              }
          }
          if (replace != null) {
            if (result == null)
              result = new core.StringBuffer(text[dartx.substring](start, i));
            result.write(replace);
          } else if (result != null) {
            result.write(ch);
          }
        }
        return result != null ? dart.toString(result) : null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "startChunkedConversion", {
      value: function(sink) {
        if (!dart.is(sink, StringConversionSink)) {
          sink = StringConversionSink.from(sink);
        }
        return new _HtmlEscapeSink(this, dart.as(sink, StringConversionSink));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {}, $__super);
  }(Converter$(core.String, core.String));
  dart.setSignature(HtmlEscape, {
    constructors: function() {
      return ({HtmlEscape: [HtmlEscape, [], [HtmlEscapeMode]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, "convert", {
        value: [core.String, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _convert, {
        value: [core.String, [core.String, core.int, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "startChunkedConversion", {
        value: [StringConversionSink, [core.Sink$(core.String)]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    }
  });
  var HTML_ESCAPE = dart.const(new HtmlEscape());
  HtmlEscapeMode.ATTRIBUTE = dart.const(new HtmlEscapeMode._('attribute', false, true, false, false));
  HtmlEscapeMode.ELEMENT = dart.const(new HtmlEscapeMode._('element', true, false, false, true));
  var _escape = Symbol('_escape');
  var _HtmlEscapeSink = function($__super) {
    function _HtmlEscapeSink() {
      $traceurRuntime.superConstructor(_HtmlEscapeSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_HtmlEscapeSink, {
      _HtmlEscapeSink: function(escape, sink) {
        this[_escape] = escape;
        this[_sink] = sink;
      },
      addSlice: function(chunk, start, end, isLast) {
        var val = this[_escape][_convert](chunk, start, end);
        if (val == null) {
          this[_sink].addSlice(chunk, start, end, isLast);
        } else {
          this[_sink].add(val);
          if (dart.notNull(isLast))
            this[_sink].close();
        }
      },
      close: function() {
        return this[_sink].close();
      }
    }, {}, $__super);
  }(StringConversionSinkBase);
  dart.setSignature(_HtmlEscapeSink, {
    constructors: function() {
      return ({_HtmlEscapeSink: [_HtmlEscapeSink, [HtmlEscape, StringConversionSink]]});
    },
    methods: function() {
      return ({
        addSlice: [dart.void, [core.String, core.int, core.int, core.bool]],
        close: [dart.void, []]
      });
    }
  });
  var JsonUnsupportedObjectError = function($__super) {
    function JsonUnsupportedObjectError() {
      $traceurRuntime.superConstructor(JsonUnsupportedObjectError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsonUnsupportedObjectError, {
      JsonUnsupportedObjectError: function(unsupportedObject, opts) {
        var cause = opts && 'cause' in opts ? opts.cause : null;
        this.unsupportedObject = unsupportedObject;
        this.cause = cause;
        $traceurRuntime.superGet(this, JsonUnsupportedObjectError.prototype, "Error").call(this);
      },
      toString: function() {
        if (this.cause != null) {
          return "Converting object to an encodable object failed.";
        } else {
          return "Converting object did not return an encodable object.";
        }
      }
    }, {}, $__super);
  }(core.Error);
  dart.setSignature(JsonUnsupportedObjectError, {constructors: function() {
      return ({JsonUnsupportedObjectError: [JsonUnsupportedObjectError, [dart.dynamic], {cause: dart.dynamic}]});
    }});
  var JsonCyclicError = function($__super) {
    function JsonCyclicError() {
      $traceurRuntime.superConstructor(JsonCyclicError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsonCyclicError, {
      JsonCyclicError: function(object) {
        $traceurRuntime.superGet(this, JsonCyclicError.prototype, "JsonUnsupportedObjectError").call(this, object);
      },
      toString: function() {
        return "Cyclic error in JSON stringify";
      }
    }, {}, $__super);
  }(JsonUnsupportedObjectError);
  dart.setSignature(JsonCyclicError, {constructors: function() {
      return ({JsonCyclicError: [JsonCyclicError, [core.Object]]});
    }});
  var _reviver = Symbol('_reviver');
  var _toEncodable$ = Symbol('_toEncodable');
  var JsonCodec = function($__super) {
    function JsonCodec() {
      $traceurRuntime.superConstructor(JsonCodec).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsonCodec, {
      JsonCodec: function(opts) {
        var reviver = opts && 'reviver' in opts ? opts.reviver : null;
        var toEncodable = opts && 'toEncodable' in opts ? opts.toEncodable : null;
        this[_reviver] = reviver;
        this[_toEncodable$] = toEncodable;
        $traceurRuntime.superGet(this, JsonCodec.prototype, "Codec").call(this);
      },
      withReviver: function(reviver) {
        this.JsonCodec({reviver: reviver});
      },
      decode: function(source, opts) {
        var reviver = opts && 'reviver' in opts ? opts.reviver : null;
        if (reviver == null)
          reviver = this[_reviver];
        if (reviver == null)
          return this.decoder.convert(source);
        return new JsonDecoder(reviver).convert(source);
      },
      encode: function(value, opts) {
        var toEncodable = opts && 'toEncodable' in opts ? opts.toEncodable : null;
        if (toEncodable == null)
          toEncodable = this[_toEncodable$];
        if (toEncodable == null)
          return this.encoder.convert(value);
        return new JsonEncoder(dart.as(toEncodable, __CastType0)).convert(value);
      },
      get encoder() {
        if (this[_toEncodable$] == null)
          return dart.const(new JsonEncoder());
        return new JsonEncoder(dart.as(this[_toEncodable$], dart.functionType(core.Object, [core.Object])));
      },
      get decoder() {
        if (this[_reviver] == null)
          return dart.const(new JsonDecoder());
        return new JsonDecoder(this[_reviver]);
      }
    }, {}, $__super);
  }(Codec$(core.Object, core.String));
  dart.defineNamedConstructor(JsonCodec, 'withReviver');
  dart.setSignature(JsonCodec, {
    constructors: function() {
      return ({
        JsonCodec: [JsonCodec, [], {
          reviver: dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]),
          toEncodable: dart.functionType(dart.dynamic, [dart.dynamic])
        }],
        withReviver: [JsonCodec, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]]
      });
    },
    methods: function() {
      return ({
        decode: [dart.dynamic, [core.String], {reviver: dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])}],
        encode: [core.String, [core.Object], {toEncodable: dart.functionType(dart.dynamic, [dart.dynamic])}]
      });
    }
  });
  var JSON = dart.const(new JsonCodec());
  var _Reviver = dart.typedef('_Reviver', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]);
  });
  var _ToEncodable = dart.typedef('_ToEncodable', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var JsonEncoder = function($__super) {
    function JsonEncoder() {
      $traceurRuntime.superConstructor(JsonEncoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsonEncoder, {
      JsonEncoder: function(toEncodable) {
        if (toEncodable === void 0)
          toEncodable = null;
        this.indent = null;
        this[_toEncodable$] = toEncodable;
        $traceurRuntime.superGet(this, JsonEncoder.prototype, "Converter").call(this);
      },
      withIndent: function(indent, toEncodable) {
        if (toEncodable === void 0)
          toEncodable = null;
        this.indent = indent;
        this[_toEncodable$] = toEncodable;
        $traceurRuntime.superGet(this, JsonEncoder.prototype, "Converter").call(this);
      },
      convert: function(object) {
        return _JsonStringStringifier.stringify(object, dart.as(this[_toEncodable$], __CastType2), this.indent);
      },
      startChunkedConversion: function(sink) {
        if (!dart.is(sink, StringConversionSink)) {
          sink = StringConversionSink.from(sink);
        } else if (dart.is(sink, _Utf8EncoderSink)) {
          return new _JsonUtf8EncoderSink(sink[_sink], this[_toEncodable$], JsonUtf8Encoder._utf8Encode(this.indent), JsonUtf8Encoder.DEFAULT_BUFFER_SIZE);
        }
        return new _JsonEncoderSink(dart.as(sink, StringConversionSink), this[_toEncodable$], this.indent);
      },
      bind: function(stream) {
        return $traceurRuntime.superGet(this, JsonEncoder.prototype, "bind").call(this, stream);
      },
      fuse: function(other) {
        if (dart.is(other, Utf8Encoder)) {
          return new JsonUtf8Encoder(this.indent, dart.as(this[_toEncodable$], __CastType4));
        }
        return $traceurRuntime.superGet(this, JsonEncoder.prototype, "fuse").call(this, other);
      }
    }, {}, $__super);
  }(Converter$(core.Object, core.String));
  dart.defineNamedConstructor(JsonEncoder, 'withIndent');
  dart.setSignature(JsonEncoder, {
    constructors: function() {
      return ({
        JsonEncoder: [JsonEncoder, [], [dart.functionType(core.Object, [core.Object])]],
        withIndent: [JsonEncoder, [core.String], [dart.functionType(core.Object, [core.Object])]]
      });
    },
    methods: function() {
      return ({
        convert: [core.String, [core.Object]],
        startChunkedConversion: [ChunkedConversionSink$(core.Object), [core.Sink$(core.String)]],
        bind: [async.Stream$(core.String), [async.Stream$(core.Object)]],
        fuse: [Converter$(core.Object, dart.dynamic), [Converter$(core.String, dart.dynamic)]]
      });
    }
  });
  var _indent = Symbol('_indent');
  var _bufferSize = Symbol('_bufferSize');
  var JsonUtf8Encoder = function($__super) {
    function JsonUtf8Encoder() {
      $traceurRuntime.superConstructor(JsonUtf8Encoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsonUtf8Encoder, {
      JsonUtf8Encoder: function(indent, toEncodable, bufferSize) {
        if (indent === void 0)
          indent = null;
        if (toEncodable === void 0)
          toEncodable = null;
        if (bufferSize === void 0)
          bufferSize = JsonUtf8Encoder.DEFAULT_BUFFER_SIZE;
        this[_indent] = JsonUtf8Encoder._utf8Encode(indent);
        this[_toEncodable$] = toEncodable;
        this[_bufferSize] = bufferSize;
        $traceurRuntime.superGet(this, JsonUtf8Encoder.prototype, "Converter").call(this);
      },
      convert: function(object) {
        var bytes = dart.list([], core.List$(core.int));
        function addChunk(chunk, start, end) {
          if (dart.notNull(start) > 0 || dart.notNull(end) < dart.notNull(chunk.length)) {
            var length$__24 = dart.notNull(end) - dart.notNull(start);
            chunk = typed_data.Uint8List.view(chunk.buffer, dart.notNull(chunk.offsetInBytes) + dart.notNull(start), length$__24);
          }
          bytes[dartx.add](chunk);
        }
        dart.fn(addChunk, dart.void, [typed_data.Uint8List, core.int, core.int]);
        _JsonUtf8Stringifier.stringify(object, this[_indent], dart.as(this[_toEncodable$], dart.functionType(dart.dynamic, [core.Object])), this[_bufferSize], addChunk);
        if (bytes[dartx.length] == 1)
          return bytes[dartx.get](0);
        var length = 0;
        for (var i = 0; dart.notNull(i) < dart.notNull(bytes[dartx.length]); i = dart.notNull(i) + 1) {
          length = dart.notNull(length) + dart.notNull(bytes[dartx.get](i)[dartx.length]);
        }
        var result = typed_data.Uint8List.new(length);
        for (var i$__25 = 0,
            offset = 0; dart.notNull(i$__25) < dart.notNull(bytes[dartx.length]); i$__25 = dart.notNull(i$__25) + 1) {
          var byteList = bytes[dartx.get](i$__25);
          var end = dart.notNull(offset) + dart.notNull(byteList[dartx.length]);
          result.setRange(offset, end, byteList);
          offset = end;
        }
        return result;
      },
      startChunkedConversion: function(sink) {
        var byteSink = null;
        if (dart.is(sink, ByteConversionSink)) {
          byteSink = sink;
        } else {
          byteSink = ByteConversionSink.from(sink);
        }
        return new _JsonUtf8EncoderSink(byteSink, this[_toEncodable$], this[_indent], this[_bufferSize]);
      },
      bind: function(stream) {
        return $traceurRuntime.superGet(this, JsonUtf8Encoder.prototype, "bind").call(this, stream);
      },
      fuse: function(other) {
        return $traceurRuntime.superGet(this, JsonUtf8Encoder.prototype, "fuse").call(this, other);
      }
    }, {_utf8Encode: function(string) {
        if (string == null)
          return null;
        if (dart.notNull(string[dartx.isEmpty]))
          return typed_data.Uint8List.new(0);
        checkAscii: {
          for (var i = 0; dart.notNull(i) < dart.notNull(string[dartx.length]); i = dart.notNull(i) + 1) {
            if (dart.notNull(string[dartx.codeUnitAt](i)) >= 128)
              break checkAscii;
          }
          return string[dartx.codeUnits];
        }
        return UTF8.encode(string);
      }}, $__super);
  }(Converter$(core.Object, core.List$(core.int)));
  dart.setSignature(JsonUtf8Encoder, {
    constructors: function() {
      return ({JsonUtf8Encoder: [JsonUtf8Encoder, [], [core.String, dart.functionType(dart.dynamic, [core.Object]), core.int]]});
    },
    methods: function() {
      return ({
        convert: [core.List$(core.int), [core.Object]],
        startChunkedConversion: [ChunkedConversionSink$(core.Object), [core.Sink$(core.List$(core.int))]],
        bind: [async.Stream$(core.List$(core.int)), [async.Stream$(core.Object)]],
        fuse: [Converter$(core.Object, dart.dynamic), [Converter$(core.List$(core.int), dart.dynamic)]]
      });
    },
    statics: function() {
      return ({_utf8Encode: [core.List$(core.int), [core.String]]});
    },
    names: ['_utf8Encode']
  });
  JsonUtf8Encoder.DEFAULT_BUFFER_SIZE = 256;
  var _isDone = Symbol('_isDone');
  var _JsonEncoderSink = function($__super) {
    function _JsonEncoderSink() {
      $traceurRuntime.superConstructor(_JsonEncoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonEncoderSink, {
      _JsonEncoderSink: function(sink, toEncodable, indent) {
        this[_sink] = sink;
        this[_toEncodable$] = toEncodable;
        this[_indent] = indent;
        this[_isDone] = false;
        $traceurRuntime.superGet(this, _JsonEncoderSink.prototype, "ChunkedConversionSink").call(this);
      },
      add: function(o) {
        if (dart.notNull(this[_isDone])) {
          dart.throw(new core.StateError("Only one call to add allowed"));
        }
        this[_isDone] = true;
        var stringSink = this[_sink].asStringSink();
        _JsonStringStringifier.printOn(o, stringSink, dart.as(this[_toEncodable$], dart.functionType(dart.dynamic, [dart.dynamic])), this[_indent]);
        stringSink.close();
      },
      close: function() {}
    }, {}, $__super);
  }(ChunkedConversionSink$(core.Object));
  dart.setSignature(_JsonEncoderSink, {
    constructors: function() {
      return ({_JsonEncoderSink: [_JsonEncoderSink, [StringConversionSink, core.Function, core.String]]});
    },
    methods: function() {
      return ({
        add: [dart.void, [core.Object]],
        close: [dart.void, []]
      });
    }
  });
  var _addChunk = Symbol('_addChunk');
  var _JsonUtf8EncoderSink = function($__super) {
    var $__23;
    function _JsonUtf8EncoderSink() {
      $traceurRuntime.superConstructor(_JsonUtf8EncoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonUtf8EncoderSink, ($__23 = {}, Object.defineProperty($__23, "_JsonUtf8EncoderSink", {
      value: function(sink, toEncodable, indent, bufferSize) {
        this[_sink] = sink;
        this[_toEncodable$] = toEncodable;
        this[_indent] = indent;
        this[_bufferSize] = bufferSize;
        this[_isDone] = false;
        $traceurRuntime.superGet(this, _JsonUtf8EncoderSink.prototype, "ChunkedConversionSink").call(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _addChunk, {
      value: function(chunk, start, end) {
        this[_sink].addSlice(chunk, start, end, false);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "add", {
      value: function(object) {
        if (dart.notNull(this[_isDone])) {
          dart.throw(new core.StateError("Only one call to add allowed"));
        }
        this[_isDone] = true;
        _JsonUtf8Stringifier.stringify(object, this[_indent], dart.as(this[_toEncodable$], dart.functionType(dart.dynamic, [core.Object])), this[_bufferSize], dart.bind(this, _addChunk));
        this[_sink].close();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "close", {
      value: function() {
        if (!dart.notNull(this[_isDone])) {
          this[_isDone] = true;
          this[_sink].close();
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {}, $__super);
  }(ChunkedConversionSink$(core.Object));
  dart.setSignature(_JsonUtf8EncoderSink, {
    constructors: function() {
      return ({_JsonUtf8EncoderSink: [_JsonUtf8EncoderSink, [ByteConversionSink, core.Function, core.List$(core.int), core.int]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, _addChunk, {
        value: [dart.void, [typed_data.Uint8List, core.int, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "add", {
        value: [dart.void, [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "close", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    }
  });
  var JsonDecoder = function($__super) {
    function JsonDecoder() {
      $traceurRuntime.superConstructor(JsonDecoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsonDecoder, {
      JsonDecoder: function(reviver) {
        if (reviver === void 0)
          reviver = null;
        this[_reviver] = reviver;
        $traceurRuntime.superGet(this, JsonDecoder.prototype, "Converter").call(this);
      },
      convert: function(input) {
        return _parseJson(input, this[_reviver]);
      },
      startChunkedConversion: function(sink) {
        return new _JsonDecoderSink(this[_reviver], sink);
      },
      bind: function(stream) {
        return $traceurRuntime.superGet(this, JsonDecoder.prototype, "bind").call(this, stream);
      }
    }, {}, $__super);
  }(Converter$(core.String, core.Object));
  dart.setSignature(JsonDecoder, {
    constructors: function() {
      return ({JsonDecoder: [JsonDecoder, [], [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]]});
    },
    methods: function() {
      return ({
        convert: [dart.dynamic, [core.String]],
        startChunkedConversion: [StringConversionSink, [core.Sink$(core.Object)]],
        bind: [async.Stream$(core.Object), [async.Stream$(core.String)]]
      });
    }
  });
  function _parseJson(source, reviver) {
    if (!(typeof source == 'string'))
      dart.throw(new core.ArgumentError(source));
    var parsed = null;
    try {
      parsed = JSON.parse(source);
    } catch (e) {
      dart.throw(new core.FormatException(String(e)));
    }
    if (reviver == null) {
      return _convertJsonToDartLazy(parsed);
    } else {
      return _convertJsonToDart(parsed, reviver);
    }
  }
  dart.fn(_parseJson, dart.dynamic, [core.String, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]);
  function _defaultToEncodable(object) {
    return dart.dsend(object, 'toJson');
  }
  dart.fn(_defaultToEncodable, core.Object, [dart.dynamic]);
  var _seen = Symbol('_seen');
  var _checkCycle = Symbol('_checkCycle');
  var _removeSeen = Symbol('_removeSeen');
  var _JsonStringifier = function($__super) {
    var $__23;
    function _JsonStringifier() {
      $traceurRuntime.superConstructor(_JsonStringifier).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonStringifier, ($__23 = {}, Object.defineProperty($__23, "_JsonStringifier", {
      value: function(_toEncodable) {
        this[_seen] = core.List.new();
        this[_toEncodable$] = _toEncodable != null ? _toEncodable : _defaultToEncodable;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeStringContent", {
      value: function(s) {
        var offset = 0;
        var length = s[dartx.length];
        for (var i = 0; dart.notNull(i) < dart.notNull(length); i = dart.notNull(i) + 1) {
          var charCode = s[dartx.codeUnitAt](i);
          if (dart.notNull(charCode) > dart.notNull(_JsonStringifier.BACKSLASH))
            continue;
          if (dart.notNull(charCode) < 32) {
            if (dart.notNull(i) > dart.notNull(offset))
              this.writeStringSlice(s, offset, i);
            offset = dart.notNull(i) + 1;
            this.writeCharCode(_JsonStringifier.BACKSLASH);
            switch (charCode) {
              case _JsonStringifier.BACKSPACE:
                {
                  this.writeCharCode(_JsonStringifier.CHAR_b);
                  break;
                }
              case _JsonStringifier.TAB:
                {
                  this.writeCharCode(_JsonStringifier.CHAR_t);
                  break;
                }
              case _JsonStringifier.NEWLINE:
                {
                  this.writeCharCode(_JsonStringifier.CHAR_n);
                  break;
                }
              case _JsonStringifier.FORM_FEED:
                {
                  this.writeCharCode(_JsonStringifier.CHAR_f);
                  break;
                }
              case _JsonStringifier.CARRIAGE_RETURN:
                {
                  this.writeCharCode(_JsonStringifier.CHAR_r);
                  break;
                }
              default:
                {
                  this.writeCharCode(_JsonStringifier.CHAR_u);
                  this.writeCharCode(_JsonStringifier.CHAR_0);
                  this.writeCharCode(_JsonStringifier.CHAR_0);
                  this.writeCharCode(_JsonStringifier.hexDigit(dart.notNull(charCode) >> 4 & 15));
                  this.writeCharCode(_JsonStringifier.hexDigit(dart.notNull(charCode) & 15));
                  break;
                }
            }
          } else if (charCode == _JsonStringifier.QUOTE || charCode == _JsonStringifier.BACKSLASH) {
            if (dart.notNull(i) > dart.notNull(offset))
              this.writeStringSlice(s, offset, i);
            offset = dart.notNull(i) + 1;
            this.writeCharCode(_JsonStringifier.BACKSLASH);
            this.writeCharCode(charCode);
          }
        }
        if (offset == 0) {
          this.writeString(s);
        } else if (dart.notNull(offset) < dart.notNull(length)) {
          this.writeStringSlice(s, offset, length);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _checkCycle, {
      value: function(object) {
        for (var i = 0; dart.notNull(i) < dart.notNull(this[_seen][dartx.length]); i = dart.notNull(i) + 1) {
          if (dart.notNull(core.identical(object, this[_seen][dartx.get](i)))) {
            dart.throw(new JsonCyclicError(object));
          }
        }
        this[_seen][dartx.add](object);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _removeSeen, {
      value: function(object) {
        dart.assert(!dart.notNull(this[_seen][dartx.isEmpty]));
        dart.assert(core.identical(this[_seen][dartx.last], object));
        this[_seen][dartx.removeLast]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeObject", {
      value: function(object) {
        if (dart.notNull(this.writeJsonValue(object)))
          return;
        this[_checkCycle](object);
        try {
          var customJson = dart.dcall(this[_toEncodable$], object);
          if (!dart.notNull(this.writeJsonValue(customJson))) {
            dart.throw(new JsonUnsupportedObjectError(object));
          }
          this[_removeSeen](object);
        } catch (e) {
          dart.throw(new JsonUnsupportedObjectError(object, {cause: e}));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeJsonValue", {
      value: function(object) {
        if (typeof object == 'number') {
          if (!dart.notNull(dart.as(dart.dload(object, 'isFinite'), core.bool)))
            return false;
          this.writeNumber(dart.as(object, core.num));
          return true;
        } else if (dart.notNull(core.identical(object, true))) {
          this.writeString('true');
          return true;
        } else if (dart.notNull(core.identical(object, false))) {
          this.writeString('false');
          return true;
        } else if (object == null) {
          this.writeString('null');
          return true;
        } else if (typeof object == 'string') {
          this.writeString('"');
          this.writeStringContent(dart.as(object, core.String));
          this.writeString('"');
          return true;
        } else if (dart.is(object, core.List)) {
          this[_checkCycle](object);
          this.writeList(dart.as(object, core.List));
          this[_removeSeen](object);
          return true;
        } else if (dart.is(object, core.Map)) {
          this[_checkCycle](object);
          this.writeMap(dart.as(object, core.Map$(core.String, core.Object)));
          this[_removeSeen](object);
          return true;
        } else {
          return false;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeList", {
      value: function(list) {
        this.writeString('[');
        if (dart.notNull(list[dartx.length]) > 0) {
          this.writeObject(list[dartx.get](0));
          for (var i = 1; dart.notNull(i) < dart.notNull(list[dartx.length]); i = dart.notNull(i) + 1) {
            this.writeString(',');
            this.writeObject(list[dartx.get](i));
          }
        }
        this.writeString(']');
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeMap", {
      value: function(map) {
        var $__22 = this;
        this.writeString('{');
        var separator = '"';
        map.forEach(dart.fn((function(key, value) {
          $__22.writeString(separator);
          separator = ',"';
          $__22.writeStringContent(key);
          $__22.writeString('":');
          $__22.writeObject(value);
        }).bind(this), dart.dynamic, [core.String, dart.dynamic]));
        this.writeString('}');
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {hexDigit: function(x) {
        return dart.notNull(x) < 10 ? 48 + dart.notNull(x) : 87 + dart.notNull(x);
      }}, $__super);
  }(core.Object);
  dart.setSignature(_JsonStringifier, {
    constructors: function() {
      return ({_JsonStringifier: [_JsonStringifier, [dart.functionType(core.Object, [core.Object])]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, "writeStringContent", {
        value: [dart.void, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _checkCycle, {
        value: [dart.void, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _removeSeen, {
        value: [dart.void, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeObject", {
        value: [dart.void, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeJsonValue", {
        value: [core.bool, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeList", {
        value: [dart.void, [core.List]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeMap", {
        value: [dart.void, [core.Map$(core.String, core.Object)]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    },
    statics: function() {
      return ({hexDigit: [core.int, [core.int]]});
    },
    names: ['hexDigit']
  });
  _JsonStringifier.BACKSPACE = 8;
  _JsonStringifier.TAB = 9;
  _JsonStringifier.NEWLINE = 10;
  _JsonStringifier.CARRIAGE_RETURN = 13;
  _JsonStringifier.FORM_FEED = 12;
  _JsonStringifier.QUOTE = 34;
  _JsonStringifier.CHAR_0 = 48;
  _JsonStringifier.BACKSLASH = 92;
  _JsonStringifier.CHAR_b = 98;
  _JsonStringifier.CHAR_f = 102;
  _JsonStringifier.CHAR_n = 110;
  _JsonStringifier.CHAR_r = 114;
  _JsonStringifier.CHAR_t = 116;
  _JsonStringifier.CHAR_u = 117;
  var _indentLevel = Symbol('_indentLevel');
  var _JsonPrettyPrintMixin = function($__super) {
    function _JsonPrettyPrintMixin() {
      $traceurRuntime.superConstructor(_JsonPrettyPrintMixin).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonPrettyPrintMixin, {
      _JsonPrettyPrintMixin: function() {
        this[_indentLevel] = 0;
      },
      writeList: function(list) {
        if (dart.notNull(list[dartx.isEmpty])) {
          this.writeString('[]');
        } else {
          this.writeString('[\n');
          this[_indentLevel] = dart.notNull(this[_indentLevel]) + 1;
          this.writeIndentation(this[_indentLevel]);
          this.writeObject(list[dartx.get](0));
          for (var i = 1; dart.notNull(i) < dart.notNull(list[dartx.length]); i = dart.notNull(i) + 1) {
            this.writeString(',\n');
            this.writeIndentation(this[_indentLevel]);
            this.writeObject(list[dartx.get](i));
          }
          this.writeString('\n');
          this[_indentLevel] = dart.notNull(this[_indentLevel]) - 1;
          this.writeIndentation(this[_indentLevel]);
          this.writeString(']');
        }
      },
      writeMap: function(map) {
        var $__22 = this;
        if (dart.notNull(map.isEmpty)) {
          this.writeString('{}');
        } else {
          this.writeString('{\n');
          this[_indentLevel] = dart.notNull(this[_indentLevel]) + 1;
          var first = true;
          map.forEach(dart.fn((function(key, value) {
            if (!dart.notNull(first)) {
              $__22.writeString(",\n");
            }
            $__22.writeIndentation($__22[_indentLevel]);
            $__22.writeString('"');
            $__22.writeStringContent(key);
            $__22.writeString('": ');
            $__22.writeObject(value);
            first = false;
          }).bind(this), dart.dynamic, [core.String, core.Object]));
          this.writeString('\n');
          this[_indentLevel] = dart.notNull(this[_indentLevel]) - 1;
          this.writeIndentation(this[_indentLevel]);
          this.writeString('}');
        }
      }
    }, {}, $__super);
  }(core.Object);
  _JsonPrettyPrintMixin[dart.implements] = function() {
    return [_JsonStringifier];
  };
  dart.setSignature(_JsonPrettyPrintMixin, {methods: function() {
      return ({
        writeList: [dart.void, [core.List]],
        writeMap: [dart.void, [core.Map]]
      });
    }});
  var _JsonStringStringifier = function($__super) {
    function _JsonStringStringifier() {
      $traceurRuntime.superConstructor(_JsonStringStringifier).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonStringStringifier, {
      _JsonStringStringifier: function(sink, _toEncodable) {
        this[_sink] = sink;
        $traceurRuntime.superGet(this, _JsonStringStringifier.prototype, "_JsonStringifier").call(this, dart.as(_toEncodable, dart.functionType(core.Object, [core.Object])));
      },
      writeNumber: function(number) {
        this[_sink].write(dart.toString(number));
      },
      writeString: function(string) {
        this[_sink].write(string);
      },
      writeStringSlice: function(string, start, end) {
        this[_sink].write(string[dartx.substring](start, end));
      },
      writeCharCode: function(charCode) {
        this[_sink].writeCharCode(charCode);
      }
    }, {
      stringify: function(object, toEncodable, indent) {
        var output = new core.StringBuffer();
        _JsonStringStringifier.printOn(object, output, toEncodable, indent);
        return dart.toString(output);
      },
      printOn: function(object, output, toEncodable, indent) {
        var stringifier = null;
        if (indent == null) {
          stringifier = new _JsonStringStringifier(output, toEncodable);
        } else {
          stringifier = new _JsonStringStringifierPretty(output, toEncodable, indent);
        }
        dart.dsend(stringifier, 'writeObject', object);
      }
    }, $__super);
  }(_JsonStringifier);
  dart.setSignature(_JsonStringStringifier, {
    constructors: function() {
      return ({_JsonStringStringifier: [_JsonStringStringifier, [core.StringSink, dart.dynamic]]});
    },
    methods: function() {
      return ({
        writeNumber: [dart.void, [core.num]],
        writeString: [dart.void, [core.String]],
        writeStringSlice: [dart.void, [core.String, core.int, core.int]],
        writeCharCode: [dart.void, [core.int]]
      });
    },
    statics: function() {
      return ({
        stringify: [core.String, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic]), core.String]],
        printOn: [dart.void, [dart.dynamic, core.StringSink, dart.functionType(dart.dynamic, [dart.dynamic]), core.String]]
      });
    },
    names: ['stringify', 'printOn']
  });
  var _JsonStringStringifierPretty = function($__super) {
    function _JsonStringStringifierPretty() {
      $traceurRuntime.superConstructor(_JsonStringStringifierPretty).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonStringStringifierPretty, {
      _JsonStringStringifierPretty: function(sink, toEncodable, indent) {
        this[_indent] = indent;
        $traceurRuntime.superGet(this, _JsonStringStringifierPretty.prototype, "_JsonStringStringifier").call(this, sink, toEncodable);
      },
      writeIndentation: function(count) {
        for (var i = 0; dart.notNull(i) < dart.notNull(count); i = dart.notNull(i) + 1)
          this.writeString(this[_indent]);
      }
    }, {}, $__super);
  }(dart.mixin(_JsonStringStringifier, _JsonPrettyPrintMixin));
  dart.setSignature(_JsonStringStringifierPretty, {
    constructors: function() {
      return ({_JsonStringStringifierPretty: [_JsonStringStringifierPretty, [core.StringSink, core.Function, core.String]]});
    },
    methods: function() {
      return ({writeIndentation: [dart.void, [core.int]]});
    }
  });
  var _JsonUtf8Stringifier = function($__super) {
    function _JsonUtf8Stringifier() {
      $traceurRuntime.superConstructor(_JsonUtf8Stringifier).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonUtf8Stringifier, {
      _JsonUtf8Stringifier: function(toEncodable, bufferSize, addChunk) {
        this.addChunk = addChunk;
        this.bufferSize = bufferSize;
        this.buffer = typed_data.Uint8List.new(bufferSize);
        this.index = 0;
        $traceurRuntime.superGet(this, _JsonUtf8Stringifier.prototype, "_JsonStringifier").call(this, dart.as(toEncodable, dart.functionType(core.Object, [core.Object])));
      },
      flush: function() {
        if (dart.notNull(this.index) > 0) {
          dart.dcall(this.addChunk, this.buffer, 0, this.index);
        }
        this.buffer = null;
        this.index = 0;
      },
      writeNumber: function(number) {
        this.writeAsciiString(dart.toString(number));
      },
      writeAsciiString: function(string) {
        for (var i = 0; dart.notNull(i) < dart.notNull(string[dartx.length]); i = dart.notNull(i) + 1) {
          var char = string[dartx.codeUnitAt](i);
          dart.assert(dart.notNull(char) <= 127);
          this.writeByte(char);
        }
      },
      writeString: function(string) {
        this.writeStringSlice(string, 0, string[dartx.length]);
      },
      writeStringSlice: function(string, start, end) {
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var char = string[dartx.codeUnitAt](i);
          if (dart.notNull(char) <= 127) {
            this.writeByte(char);
          } else {
            if ((dart.notNull(char) & 64512) == 55296 && dart.notNull(i) + 1 < dart.notNull(end)) {
              var nextChar = string[dartx.codeUnitAt](dart.notNull(i) + 1);
              if ((dart.notNull(nextChar) & 64512) == 56320) {
                char = 65536 + ((dart.notNull(char) & 1023) << 10) + (dart.notNull(nextChar) & 1023);
                this.writeFourByteCharCode(char);
                i = dart.notNull(i) + 1;
                continue;
              }
            }
            this.writeMultiByteCharCode(char);
          }
        }
      },
      writeCharCode: function(charCode) {
        if (dart.notNull(charCode) <= 127) {
          this.writeByte(charCode);
          return;
        }
        this.writeMultiByteCharCode(charCode);
      },
      writeMultiByteCharCode: function(charCode) {
        if (dart.notNull(charCode) <= 2047) {
          this.writeByte(192 | dart.notNull(charCode) >> 6);
          this.writeByte(128 | dart.notNull(charCode) & 63);
          return;
        }
        if (dart.notNull(charCode) <= 65535) {
          this.writeByte(224 | dart.notNull(charCode) >> 12);
          this.writeByte(128 | dart.notNull(charCode) >> 6 & 63);
          this.writeByte(128 | dart.notNull(charCode) & 63);
          return;
        }
        this.writeFourByteCharCode(charCode);
      },
      writeFourByteCharCode: function(charCode) {
        dart.assert(dart.notNull(charCode) <= 1114111);
        this.writeByte(240 | dart.notNull(charCode) >> 18);
        this.writeByte(128 | dart.notNull(charCode) >> 12 & 63);
        this.writeByte(128 | dart.notNull(charCode) >> 6 & 63);
        this.writeByte(128 | dart.notNull(charCode) & 63);
      },
      writeByte: function(byte) {
        var $__22 = this;
        dart.assert(dart.notNull(byte) <= 255);
        if (this.index == this.buffer.length) {
          dart.dcall(this.addChunk, this.buffer, 0, this.index);
          this.buffer = typed_data.Uint8List.new(this.bufferSize);
          this.index = 0;
        }
        this.buffer.set((function() {
          var x = $__22.index;
          $__22.index = dart.notNull(x) + 1;
          return x;
        }).bind(this)(), byte);
      }
    }, {stringify: function(object, indent, toEncodableFunction, bufferSize, addChunk) {
        var stringifier = null;
        if (indent != null) {
          stringifier = new _JsonUtf8StringifierPretty(toEncodableFunction, indent, bufferSize, addChunk);
        } else {
          stringifier = new _JsonUtf8Stringifier(toEncodableFunction, bufferSize, addChunk);
        }
        stringifier.writeObject(object);
        stringifier.flush();
      }}, $__super);
  }(_JsonStringifier);
  dart.setSignature(_JsonUtf8Stringifier, {
    constructors: function() {
      return ({_JsonUtf8Stringifier: [_JsonUtf8Stringifier, [dart.dynamic, core.int, core.Function]]});
    },
    methods: function() {
      return ({
        flush: [dart.void, []],
        writeNumber: [dart.void, [core.num]],
        writeAsciiString: [dart.void, [core.String]],
        writeString: [dart.void, [core.String]],
        writeStringSlice: [dart.void, [core.String, core.int, core.int]],
        writeCharCode: [dart.void, [core.int]],
        writeMultiByteCharCode: [dart.void, [core.int]],
        writeFourByteCharCode: [dart.void, [core.int]],
        writeByte: [dart.void, [core.int]]
      });
    },
    statics: function() {
      return ({stringify: [dart.void, [core.Object, core.List$(core.int), dart.functionType(dart.dynamic, [core.Object]), core.int, dart.functionType(dart.void, [typed_data.Uint8List, core.int, core.int])]]});
    },
    names: ['stringify']
  });
  var _JsonUtf8StringifierPretty = function($__super) {
    function _JsonUtf8StringifierPretty() {
      $traceurRuntime.superConstructor(_JsonUtf8StringifierPretty).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonUtf8StringifierPretty, {
      _JsonUtf8StringifierPretty: function(toEncodableFunction, indent, bufferSize, addChunk) {
        this.indent = indent;
        $traceurRuntime.superGet(this, _JsonUtf8StringifierPretty.prototype, "_JsonUtf8Stringifier").call(this, toEncodableFunction, dart.as(bufferSize, core.int), dart.as(addChunk, core.Function));
      },
      writeIndentation: function(count) {
        var indent = this.indent;
        var indentLength = indent[dartx.length];
        if (indentLength == 1) {
          var char = indent[dartx.get](0);
          while (dart.notNull(count) > 0) {
            this.writeByte(char);
            count = dart.notNull(count) - 1;
          }
          return;
        }
        while (dart.notNull(count) > 0) {
          count = dart.notNull(count) - 1;
          var end = dart.notNull(this.index) + dart.notNull(indentLength);
          if (dart.notNull(end) <= dart.notNull(this.buffer.length)) {
            this.buffer.setRange(this.index, end, indent);
            this.index = end;
          } else {
            for (var i = 0; dart.notNull(i) < dart.notNull(indentLength); i = dart.notNull(i) + 1) {
              this.writeByte(indent[dartx.get](i));
            }
          }
        }
      }
    }, {}, $__super);
  }(dart.mixin(_JsonUtf8Stringifier, _JsonPrettyPrintMixin));
  dart.setSignature(_JsonUtf8StringifierPretty, {
    constructors: function() {
      return ({_JsonUtf8StringifierPretty: [_JsonUtf8StringifierPretty, [dart.dynamic, core.List$(core.int), dart.dynamic, dart.dynamic]]});
    },
    methods: function() {
      return ({writeIndentation: [dart.void, [core.int]]});
    }
  });
  var __CastType0 = dart.typedef('__CastType0', function() {
    return dart.functionType(core.Object, [core.Object]);
  });
  var __CastType2 = dart.typedef('__CastType2', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var __CastType4 = dart.typedef('__CastType4', function() {
    return dart.functionType(dart.dynamic, [core.Object]);
  });
  var Latin1Codec = function($__super) {
    function Latin1Codec() {
      $traceurRuntime.superConstructor(Latin1Codec).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Latin1Codec, {
      Latin1Codec: function(opts) {
        var allowInvalid = opts && 'allowInvalid' in opts ? opts.allowInvalid : false;
        this[_allowInvalid] = allowInvalid;
        $traceurRuntime.superGet(this, Latin1Codec.prototype, "Encoding").call(this);
      },
      get name() {
        return "iso-8859-1";
      },
      decode: function(bytes, opts) {
        var allowInvalid = opts && 'allowInvalid' in opts ? opts.allowInvalid : null;
        if (allowInvalid == null)
          allowInvalid = this[_allowInvalid];
        if (dart.notNull(allowInvalid)) {
          return dart.const(new Latin1Decoder({allowInvalid: true})).convert(bytes);
        } else {
          return dart.const(new Latin1Decoder({allowInvalid: false})).convert(bytes);
        }
      },
      get encoder() {
        return dart.const(new Latin1Encoder());
      },
      get decoder() {
        return dart.notNull(this[_allowInvalid]) ? dart.const(new Latin1Decoder({allowInvalid: true})) : dart.const(new Latin1Decoder({allowInvalid: false}));
      }
    }, {}, $__super);
  }(Encoding);
  dart.setSignature(Latin1Codec, {
    constructors: function() {
      return ({Latin1Codec: [Latin1Codec, [], {allowInvalid: core.bool}]});
    },
    methods: function() {
      return ({decode: [core.String, [core.List$(core.int)], {allowInvalid: core.bool}]});
    }
  });
  var LATIN1 = dart.const(new Latin1Codec());
  var _LATIN1_MASK = 255;
  var Latin1Encoder = function($__super) {
    function Latin1Encoder() {
      $traceurRuntime.superConstructor(Latin1Encoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Latin1Encoder, {Latin1Encoder: function() {
        $traceurRuntime.superGet(this, Latin1Encoder.prototype, "_UnicodeSubsetEncoder").call(this, _LATIN1_MASK);
      }}, {}, $__super);
  }(_UnicodeSubsetEncoder);
  dart.setSignature(Latin1Encoder, {constructors: function() {
      return ({Latin1Encoder: [Latin1Encoder, []]});
    }});
  var Latin1Decoder = function($__super) {
    function Latin1Decoder() {
      $traceurRuntime.superConstructor(Latin1Decoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Latin1Decoder, {
      Latin1Decoder: function(opts) {
        var allowInvalid = opts && 'allowInvalid' in opts ? opts.allowInvalid : false;
        $traceurRuntime.superGet(this, Latin1Decoder.prototype, "_UnicodeSubsetDecoder").call(this, allowInvalid, _LATIN1_MASK);
      },
      startChunkedConversion: function(sink) {
        var stringSink = null;
        if (dart.is(sink, StringConversionSink)) {
          stringSink = sink;
        } else {
          stringSink = StringConversionSink.from(sink);
        }
        if (!dart.notNull(this[_allowInvalid]))
          return new _Latin1DecoderSink(stringSink);
        return new _Latin1AllowInvalidDecoderSink(stringSink);
      }
    }, {}, $__super);
  }(_UnicodeSubsetDecoder);
  dart.setSignature(Latin1Decoder, {
    constructors: function() {
      return ({Latin1Decoder: [Latin1Decoder, [], {allowInvalid: core.bool}]});
    },
    methods: function() {
      return ({startChunkedConversion: [ByteConversionSink, [core.Sink$(core.String)]]});
    }
  });
  var _addSliceToSink = Symbol('_addSliceToSink');
  var _Latin1DecoderSink = function($__super) {
    var $__23;
    function _Latin1DecoderSink() {
      $traceurRuntime.superConstructor(_Latin1DecoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Latin1DecoderSink, ($__23 = {}, Object.defineProperty($__23, "_Latin1DecoderSink", {
      value: function(sink) {
        this[_sink] = sink;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "close", {
      value: function() {
        this[_sink].close();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "add", {
      value: function(source) {
        this.addSlice(source, 0, source[dartx.length], false);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _addSliceToSink, {
      value: function(source, start, end, isLast) {
        this[_sink].add(core.String.fromCharCodes(source, start, end));
        if (dart.notNull(isLast))
          this.close();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "addSlice", {
      value: function(source, start, end, isLast) {
        core.RangeError.checkValidRange(start, end, source[dartx.length]);
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var char = source[dartx.get](i);
          if (dart.notNull(char) > dart.notNull(_LATIN1_MASK) || dart.notNull(char) < 0) {
            dart.throw(new core.FormatException("Source contains non-Latin-1 characters."));
          }
        }
        if (dart.notNull(start) < dart.notNull(end)) {
          this[_addSliceToSink](source, start, end, isLast);
        }
        if (dart.notNull(isLast)) {
          this.close();
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {}, $__super);
  }(ByteConversionSinkBase);
  dart.setSignature(_Latin1DecoderSink, {
    constructors: function() {
      return ({_Latin1DecoderSink: [_Latin1DecoderSink, [StringConversionSink]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, "close", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "add", {
        value: [dart.void, [core.List$(core.int)]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _addSliceToSink, {
        value: [dart.void, [core.List$(core.int), core.int, core.int, core.bool]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    }
  });
  var _Latin1AllowInvalidDecoderSink = function($__super) {
    function _Latin1AllowInvalidDecoderSink() {
      $traceurRuntime.superConstructor(_Latin1AllowInvalidDecoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Latin1AllowInvalidDecoderSink, {
      _Latin1AllowInvalidDecoderSink: function(sink) {
        $traceurRuntime.superGet(this, _Latin1AllowInvalidDecoderSink.prototype, "_Latin1DecoderSink").call(this, sink);
      },
      addSlice: function(source, start, end, isLast) {
        core.RangeError.checkValidRange(start, end, source[dartx.length]);
        for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          var char = source[dartx.get](i);
          if (dart.notNull(char) > dart.notNull(_LATIN1_MASK) || dart.notNull(char) < 0) {
            if (dart.notNull(i) > dart.notNull(start))
              this[_addSliceToSink](source, start, i, false);
            this[_addSliceToSink](dart.const(dart.list([65533], core.int)), 0, 1, false);
            start = dart.notNull(i) + 1;
          }
        }
        if (dart.notNull(start) < dart.notNull(end)) {
          this[_addSliceToSink](source, start, end, isLast);
        }
        if (dart.notNull(isLast)) {
          this.close();
        }
      }
    }, {}, $__super);
  }(_Latin1DecoderSink);
  dart.setSignature(_Latin1AllowInvalidDecoderSink, {constructors: function() {
      return ({_Latin1AllowInvalidDecoderSink: [_Latin1AllowInvalidDecoderSink, [StringConversionSink]]});
    }});
  var LineSplitter = function($__super) {
    function LineSplitter() {
      $traceurRuntime.superConstructor(LineSplitter).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(LineSplitter, {
      LineSplitter: function() {
        $traceurRuntime.superGet(this, LineSplitter.prototype, "Converter").call(this);
      },
      convert: function(data) {
        var lines = core.List$(core.String).new();
        _LineSplitterSink._addSlice(data, 0, data[dartx.length], true, dart.bind(lines, dartx.add));
        return lines;
      },
      startChunkedConversion: function(sink) {
        if (!dart.is(sink, StringConversionSink)) {
          sink = StringConversionSink.from(dart.as(sink, core.Sink$(core.String)));
        }
        return new _LineSplitterSink(dart.as(sink, StringConversionSink));
      }
    }, {}, $__super);
  }(Converter$(core.String, core.List$(core.String)));
  dart.setSignature(LineSplitter, {
    constructors: function() {
      return ({LineSplitter: [LineSplitter, []]});
    },
    methods: function() {
      return ({
        convert: [core.List$(core.String), [core.String]],
        startChunkedConversion: [StringConversionSink, [core.Sink]]
      });
    }
  });
  var _carry = Symbol('_carry');
  var _LineSplitterSink = function($__super) {
    function _LineSplitterSink() {
      $traceurRuntime.superConstructor(_LineSplitterSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_LineSplitterSink, {
      _LineSplitterSink: function(sink) {
        this[_sink] = sink;
        this[_carry] = null;
      },
      addSlice: function(chunk, start, end, isLast) {
        if (this[_carry] != null) {
          chunk = dart.notNull(this[_carry]) + dart.notNull(chunk[dartx.substring](start, end));
          start = 0;
          end = chunk[dartx.length];
          this[_carry] = null;
        }
        this[_carry] = _LineSplitterSink._addSlice(chunk, start, end, isLast, dart.bind(this[_sink], 'add'));
        if (dart.notNull(isLast))
          this[_sink].close();
      },
      close: function() {
        this.addSlice('', 0, 0, true);
      }
    }, {_addSlice: function(chunk, start, end, isLast, adder) {
        var pos = start;
        while (dart.notNull(pos) < dart.notNull(end)) {
          var skip = 0;
          var char = chunk[dartx.codeUnitAt](pos);
          if (char == _LineSplitterSink._LF) {
            skip = 1;
          } else if (char == _LineSplitterSink._CR) {
            skip = 1;
            if (dart.notNull(pos) + 1 < dart.notNull(end)) {
              if (chunk[dartx.codeUnitAt](dart.notNull(pos) + 1) == _LineSplitterSink._LF) {
                skip = 2;
              }
            } else if (!dart.notNull(isLast)) {
              return chunk[dartx.substring](start, end);
            }
          }
          if (dart.notNull(skip) > 0) {
            adder(chunk[dartx.substring](start, pos));
            start = pos = dart.notNull(pos) + dart.notNull(skip);
          } else {
            pos = dart.notNull(pos) + 1;
          }
        }
        if (pos != start) {
          var carry = chunk[dartx.substring](start, pos);
          if (dart.notNull(isLast)) {
            adder(carry);
          } else {
            return carry;
          }
        }
        return null;
      }}, $__super);
  }(StringConversionSinkBase);
  dart.setSignature(_LineSplitterSink, {
    constructors: function() {
      return ({_LineSplitterSink: [_LineSplitterSink, [StringConversionSink]]});
    },
    methods: function() {
      return ({
        addSlice: [dart.void, [core.String, core.int, core.int, core.bool]],
        close: [dart.void, []]
      });
    },
    statics: function() {
      return ({_addSlice: [core.String, [core.String, core.int, core.int, core.bool, dart.functionType(dart.void, [core.String])]]});
    },
    names: ['_addSlice']
  });
  _LineSplitterSink._LF = 10;
  _LineSplitterSink._CR = 13;
  var StringConversionSink = function($__super) {
    function StringConversionSink() {
      $traceurRuntime.superConstructor(StringConversionSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(StringConversionSink, {StringConversionSink: function() {
        $traceurRuntime.superGet(this, StringConversionSink.prototype, "ChunkedConversionSink").call(this);
      }}, {
      withCallback: function(callback) {
        return new _StringCallbackSink(callback);
      },
      from: function(sink) {
        return new _StringAdapterSink(sink);
      },
      fromStringSink: function(sink) {
        return new _StringSinkConversionSink(sink);
      }
    }, $__super);
  }(ChunkedConversionSink$(core.String));
  dart.setSignature(StringConversionSink, {constructors: function() {
      return ({
        StringConversionSink: [StringConversionSink, []],
        withCallback: [StringConversionSink, [dart.functionType(dart.void, [core.String])]],
        from: [StringConversionSink, [core.Sink$(core.String)]],
        fromStringSink: [StringConversionSink, [core.StringSink]]
      });
    }});
  var ClosableStringSink = function($__super) {
    function ClosableStringSink() {
      $traceurRuntime.superConstructor(ClosableStringSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ClosableStringSink, {}, {fromStringSink: function(sink, onClose) {
        return new _ClosableStringSink(sink, onClose);
      }}, $__super);
  }(core.StringSink);
  dart.setSignature(ClosableStringSink, {constructors: function() {
      return ({fromStringSink: [ClosableStringSink, [core.StringSink, dart.functionType(dart.void, [])]]});
    }});
  var _StringSinkCloseCallback = dart.typedef('_StringSinkCloseCallback', function() {
    return dart.functionType(dart.void, []);
  });
  var _ClosableStringSink = function($__super) {
    function _ClosableStringSink() {
      $traceurRuntime.superConstructor(_ClosableStringSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ClosableStringSink, {
      _ClosableStringSink: function(sink, callback) {
        this[_sink] = sink;
        this[_callback] = callback;
      },
      close: function() {
        return this[_callback]();
      },
      writeCharCode: function(charCode) {
        return this[_sink].writeCharCode(charCode);
      },
      write: function(o) {
        return this[_sink].write(o);
      },
      writeln: function(o) {
        if (o === void 0)
          o = "";
        return this[_sink].writeln(o);
      },
      writeAll: function(objects, separator) {
        if (separator === void 0)
          separator = "";
        return this[_sink].writeAll(objects, separator);
      }
    }, {}, $__super);
  }(core.Object);
  _ClosableStringSink[dart.implements] = function() {
    return [ClosableStringSink];
  };
  dart.setSignature(_ClosableStringSink, {
    constructors: function() {
      return ({_ClosableStringSink: [_ClosableStringSink, [core.StringSink, _StringSinkCloseCallback]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        writeCharCode: [dart.void, [core.int]],
        write: [dart.void, [core.Object]],
        writeln: [dart.void, [], [core.Object]],
        writeAll: [dart.void, [core.Iterable], [core.String]]
      });
    }
  });
  var _flush = Symbol('_flush');
  var _StringConversionSinkAsStringSinkAdapter = function($__super) {
    var $__23;
    function _StringConversionSinkAsStringSinkAdapter() {
      $traceurRuntime.superConstructor(_StringConversionSinkAsStringSinkAdapter).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_StringConversionSinkAsStringSinkAdapter, ($__23 = {}, Object.defineProperty($__23, "_StringConversionSinkAsStringSinkAdapter", {
      value: function(chunkedSink) {
        this[_chunkedSink] = chunkedSink;
        this[_buffer] = new core.StringBuffer();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "close", {
      value: function() {
        if (dart.notNull(this[_buffer].isNotEmpty))
          this[_flush]();
        this[_chunkedSink].close();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeCharCode", {
      value: function(charCode) {
        this[_buffer].writeCharCode(charCode);
        if (dart.notNull(this[_buffer].length) > dart.notNull(_StringConversionSinkAsStringSinkAdapter._MIN_STRING_SIZE))
          this[_flush]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "write", {
      value: function(o) {
        if (dart.notNull(this[_buffer].isNotEmpty))
          this[_flush]();
        var str = dart.toString(o);
        this[_chunkedSink].add(dart.toString(o));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeln", {
      value: function(o) {
        if (o === void 0)
          o = "";
        this[_buffer].writeln(o);
        if (dart.notNull(this[_buffer].length) > dart.notNull(_StringConversionSinkAsStringSinkAdapter._MIN_STRING_SIZE))
          this[_flush]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "writeAll", {
      value: function(objects, separator) {
        if (separator === void 0)
          separator = "";
        if (dart.notNull(this[_buffer].isNotEmpty))
          this[_flush]();
        var iterator = objects[dartx.iterator];
        if (!dart.notNull(iterator.moveNext()))
          return;
        if (dart.notNull(separator[dartx.isEmpty])) {
          do {
            this[_chunkedSink].add(dart.toString(iterator.current));
          } while (dart.notNull(iterator.moveNext()));
        } else {
          this[_chunkedSink].add(dart.toString(iterator.current));
          while (dart.notNull(iterator.moveNext())) {
            this.write(separator);
            this[_chunkedSink].add(dart.toString(iterator.current));
          }
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _flush, {
      value: function() {
        var accumulated = dart.toString(this[_buffer]);
        this[_buffer].clear();
        this[_chunkedSink].add(accumulated);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {}, $__super);
  }(core.Object);
  _StringConversionSinkAsStringSinkAdapter[dart.implements] = function() {
    return [ClosableStringSink];
  };
  dart.setSignature(_StringConversionSinkAsStringSinkAdapter, {
    constructors: function() {
      return ({_StringConversionSinkAsStringSinkAdapter: [_StringConversionSinkAsStringSinkAdapter, [StringConversionSink]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, "close", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeCharCode", {
        value: [dart.void, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "write", {
        value: [dart.void, [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeln", {
        value: [dart.void, [], [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "writeAll", {
        value: [dart.void, [core.Iterable], [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _flush, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    }
  });
  _StringConversionSinkAsStringSinkAdapter._MIN_STRING_SIZE = 16;
  var _stringSink = Symbol('_stringSink');
  var _StringSinkConversionSink = function($__super) {
    function _StringSinkConversionSink() {
      $traceurRuntime.superConstructor(_StringSinkConversionSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_StringSinkConversionSink, {
      _StringSinkConversionSink: function(stringSink) {
        this[_stringSink] = stringSink;
      },
      close: function() {},
      addSlice: function(str, start, end, isLast) {
        if (start != 0 || end != str[dartx.length]) {
          for (var i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
            this[_stringSink].writeCharCode(str[dartx.codeUnitAt](i));
          }
        } else {
          this[_stringSink].write(str);
        }
        if (dart.notNull(isLast))
          this.close();
      },
      add: function(str) {
        return this[_stringSink].write(str);
      },
      asUtf8Sink: function(allowMalformed) {
        return new _Utf8StringSinkAdapter(this, this[_stringSink], allowMalformed);
      },
      asStringSink: function() {
        return ClosableStringSink.fromStringSink(this[_stringSink], dart.bind(this, 'close'));
      }
    }, {}, $__super);
  }(StringConversionSinkBase);
  dart.setSignature(_StringSinkConversionSink, {
    constructors: function() {
      return ({_StringSinkConversionSink: [_StringSinkConversionSink, [core.StringSink]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        addSlice: [dart.void, [core.String, core.int, core.int, core.bool]]
      });
    }
  });
  var _StringCallbackSink = function($__super) {
    function _StringCallbackSink() {
      $traceurRuntime.superConstructor(_StringCallbackSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_StringCallbackSink, {
      _StringCallbackSink: function(callback) {
        this[_callback] = callback;
        $traceurRuntime.superGet(this, _StringCallbackSink.prototype, "_StringSinkConversionSink").call(this, new core.StringBuffer());
      },
      close: function() {
        var buffer = dart.as(this[_stringSink], core.StringBuffer);
        var accumulated = dart.toString(buffer);
        buffer.clear();
        this[_callback](accumulated);
      },
      asUtf8Sink: function(allowMalformed) {
        return new _Utf8StringSinkAdapter(this, this[_stringSink], allowMalformed);
      }
    }, {}, $__super);
  }(_StringSinkConversionSink);
  dart.setSignature(_StringCallbackSink, {constructors: function() {
      return ({_StringCallbackSink: [_StringCallbackSink, [_ChunkedConversionCallback$(core.String)]]});
    }});
  var _StringAdapterSink = function($__super) {
    function _StringAdapterSink() {
      $traceurRuntime.superConstructor(_StringAdapterSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_StringAdapterSink, {
      _StringAdapterSink: function(sink) {
        this[_sink] = sink;
      },
      add: function(str) {
        return this[_sink].add(str);
      },
      addSlice: function(str, start, end, isLast) {
        if (start == 0 && end == str[dartx.length]) {
          this.add(str);
        } else {
          this.add(str[dartx.substring](start, end));
        }
        if (dart.notNull(isLast))
          this.close();
      },
      close: function() {
        return this[_sink].close();
      }
    }, {}, $__super);
  }(StringConversionSinkBase);
  dart.setSignature(_StringAdapterSink, {
    constructors: function() {
      return ({_StringAdapterSink: [_StringAdapterSink, [core.Sink$(core.String)]]});
    },
    methods: function() {
      return ({
        addSlice: [dart.void, [core.String, core.int, core.int, core.bool]],
        close: [dart.void, []]
      });
    }
  });
  var _decoder = Symbol('_decoder');
  var _Utf8StringSinkAdapter = function($__super) {
    function _Utf8StringSinkAdapter() {
      $traceurRuntime.superConstructor(_Utf8StringSinkAdapter).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Utf8StringSinkAdapter, {
      _Utf8StringSinkAdapter: function(sink, stringSink, allowMalformed) {
        this[_sink] = sink;
        this[_decoder] = new _Utf8Decoder(stringSink, allowMalformed);
        $traceurRuntime.superGet(this, _Utf8StringSinkAdapter.prototype, "ByteConversionSink").call(this);
      },
      close: function() {
        this[_decoder].close();
        if (this[_sink] != null)
          this[_sink].close();
      },
      add: function(chunk) {
        this.addSlice(chunk, 0, chunk[dartx.length], false);
      },
      addSlice: function(codeUnits, startIndex, endIndex, isLast) {
        this[_decoder].convert(codeUnits, startIndex, endIndex);
        if (dart.notNull(isLast))
          this.close();
      }
    }, {}, $__super);
  }(ByteConversionSink);
  dart.setSignature(_Utf8StringSinkAdapter, {
    constructors: function() {
      return ({_Utf8StringSinkAdapter: [_Utf8StringSinkAdapter, [core.Sink, core.StringSink, core.bool]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        add: [dart.void, [core.List$(core.int)]],
        addSlice: [dart.void, [core.List$(core.int), core.int, core.int, core.bool]]
      });
    }
  });
  var _Utf8ConversionSink = function($__super) {
    function _Utf8ConversionSink() {
      $traceurRuntime.superConstructor(_Utf8ConversionSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Utf8ConversionSink, {
      _Utf8ConversionSink: function(sink, allowMalformed) {
        this._(sink, new core.StringBuffer(), allowMalformed);
      },
      _: function(chunkedSink, stringBuffer, allowMalformed) {
        this[_chunkedSink] = chunkedSink;
        this[_decoder] = new _Utf8Decoder(stringBuffer, allowMalformed);
        this[_buffer] = stringBuffer;
        $traceurRuntime.superGet(this, _Utf8ConversionSink.prototype, "ByteConversionSink").call(this);
      },
      close: function() {
        this[_decoder].close();
        if (dart.notNull(this[_buffer].isNotEmpty)) {
          var accumulated = dart.toString(this[_buffer]);
          this[_buffer].clear();
          this[_chunkedSink].addSlice(accumulated, 0, accumulated[dartx.length], true);
        } else {
          this[_chunkedSink].close();
        }
      },
      add: function(chunk) {
        this.addSlice(chunk, 0, chunk[dartx.length], false);
      },
      addSlice: function(chunk, startIndex, endIndex, isLast) {
        this[_decoder].convert(chunk, startIndex, endIndex);
        if (dart.notNull(this[_buffer].isNotEmpty)) {
          var accumulated = dart.toString(this[_buffer]);
          this[_chunkedSink].addSlice(accumulated, 0, accumulated[dartx.length], isLast);
          this[_buffer].clear();
          return;
        }
        if (dart.notNull(isLast))
          this.close();
      }
    }, {}, $__super);
  }(ByteConversionSink);
  dart.defineNamedConstructor(_Utf8ConversionSink, '_');
  dart.setSignature(_Utf8ConversionSink, {
    constructors: function() {
      return ({
        _Utf8ConversionSink: [_Utf8ConversionSink, [StringConversionSink, core.bool]],
        _: [_Utf8ConversionSink, [StringConversionSink, core.StringBuffer, core.bool]]
      });
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        add: [dart.void, [core.List$(core.int)]],
        addSlice: [dart.void, [core.List$(core.int), core.int, core.int, core.bool]]
      });
    }
  });
  var UNICODE_REPLACEMENT_CHARACTER_RUNE = 65533;
  var UNICODE_BOM_CHARACTER_RUNE = 65279;
  var _allowMalformed = Symbol('_allowMalformed');
  var Utf8Codec = function($__super) {
    function Utf8Codec() {
      $traceurRuntime.superConstructor(Utf8Codec).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Utf8Codec, {
      Utf8Codec: function(opts) {
        var allowMalformed = opts && 'allowMalformed' in opts ? opts.allowMalformed : false;
        this[_allowMalformed] = allowMalformed;
        $traceurRuntime.superGet(this, Utf8Codec.prototype, "Encoding").call(this);
      },
      get name() {
        return "utf-8";
      },
      decode: function(codeUnits, opts) {
        var allowMalformed = opts && 'allowMalformed' in opts ? opts.allowMalformed : null;
        if (allowMalformed == null)
          allowMalformed = this[_allowMalformed];
        return new Utf8Decoder({allowMalformed: allowMalformed}).convert(codeUnits);
      },
      get encoder() {
        return new Utf8Encoder();
      },
      get decoder() {
        return new Utf8Decoder({allowMalformed: this[_allowMalformed]});
      }
    }, {}, $__super);
  }(Encoding);
  dart.setSignature(Utf8Codec, {
    constructors: function() {
      return ({Utf8Codec: [Utf8Codec, [], {allowMalformed: core.bool}]});
    },
    methods: function() {
      return ({decode: [core.String, [core.List$(core.int)], {allowMalformed: core.bool}]});
    }
  });
  var UTF8 = dart.const(new Utf8Codec());
  var _fillBuffer = Symbol('_fillBuffer');
  var _writeSurrogate = Symbol('_writeSurrogate');
  var Utf8Encoder = function($__super) {
    function Utf8Encoder() {
      $traceurRuntime.superConstructor(Utf8Encoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Utf8Encoder, {
      Utf8Encoder: function() {
        $traceurRuntime.superGet(this, Utf8Encoder.prototype, "Converter").call(this);
      },
      convert: function(string, start, end) {
        if (start === void 0)
          start = 0;
        if (end === void 0)
          end = null;
        var stringLength = string[dartx.length];
        core.RangeError.checkValidRange(start, end, stringLength);
        if (end == null)
          end = stringLength;
        var length = dart.notNull(end) - dart.notNull(start);
        if (length == 0)
          return typed_data.Uint8List.new(0);
        var encoder = new _Utf8Encoder.withBufferSize(dart.notNull(length) * 3);
        var endPosition = encoder[_fillBuffer](string, start, end);
        dart.assert(dart.notNull(endPosition) >= dart.notNull(end) - 1);
        if (endPosition != end) {
          var lastCodeUnit = string[dartx.codeUnitAt](dart.notNull(end) - 1);
          dart.assert(_isLeadSurrogate(lastCodeUnit));
          var wasCombined = encoder[_writeSurrogate](lastCodeUnit, 0);
          dart.assert(!dart.notNull(wasCombined));
        }
        return encoder[_buffer][dartx.sublist](0, encoder[_bufferIndex]);
      },
      startChunkedConversion: function(sink) {
        if (!dart.is(sink, ByteConversionSink)) {
          sink = ByteConversionSink.from(sink);
        }
        return new _Utf8EncoderSink(dart.as(sink, ByteConversionSink));
      },
      bind: function(stream) {
        return $traceurRuntime.superGet(this, Utf8Encoder.prototype, "bind").call(this, stream);
      }
    }, {}, $__super);
  }(Converter$(core.String, core.List$(core.int)));
  dart.setSignature(Utf8Encoder, {
    constructors: function() {
      return ({Utf8Encoder: [Utf8Encoder, []]});
    },
    methods: function() {
      return ({
        convert: [core.List$(core.int), [core.String], [core.int, core.int]],
        startChunkedConversion: [StringConversionSink, [core.Sink$(core.List$(core.int))]],
        bind: [async.Stream$(core.List$(core.int)), [async.Stream$(core.String)]]
      });
    }
  });
  var _Utf8Encoder = function($__super) {
    var $__23;
    function _Utf8Encoder() {
      $traceurRuntime.superConstructor(_Utf8Encoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Utf8Encoder, ($__23 = {}, Object.defineProperty($__23, "_Utf8Encoder", {
      value: function() {
        this.withBufferSize(_Utf8Encoder._DEFAULT_BYTE_BUFFER_SIZE);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "withBufferSize", {
      value: function(bufferSize) {
        this[_buffer] = _Utf8Encoder._createBuffer(bufferSize);
        this[_carry] = 0;
        this[_bufferIndex] = 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _writeSurrogate, {
      value: function(leadingSurrogate, nextCodeUnit) {
        var $__22 = this;
        if (dart.notNull(_isTailSurrogate(nextCodeUnit))) {
          var rune = _combineSurrogatePair(leadingSurrogate, nextCodeUnit);
          dart.assert(dart.notNull(rune) > dart.notNull(_THREE_BYTE_LIMIT));
          dart.assert(dart.notNull(rune) <= dart.notNull(_FOUR_BYTE_LIMIT));
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 240 | dart.notNull(rune) >> 18);
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 128 | dart.notNull(rune) >> 12 & 63);
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 128 | dart.notNull(rune) >> 6 & 63);
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 128 | dart.notNull(rune) & 63);
          return true;
        } else {
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 224 | dart.notNull(leadingSurrogate) >> 12);
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 128 | dart.notNull(leadingSurrogate) >> 6 & 63);
          this[_buffer][dartx.set]((function() {
            var x = $__22[_bufferIndex];
            $__22[_bufferIndex] = dart.notNull(x) + 1;
            return x;
          }).bind(this)(), 128 | dart.notNull(leadingSurrogate) & 63);
          return false;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _fillBuffer, {
      value: function(str, start, end) {
        var $__22 = this;
        if (start != end && dart.notNull(_isLeadSurrogate(str[dartx.codeUnitAt](dart.notNull(end) - 1)))) {
          end = dart.notNull(end) - 1;
        }
        var stringIndex = null;
        for (stringIndex = start; dart.notNull(stringIndex) < dart.notNull(end); stringIndex = dart.notNull(stringIndex) + 1) {
          var codeUnit = str[dartx.codeUnitAt](stringIndex);
          if (dart.notNull(codeUnit) <= dart.notNull(_ONE_BYTE_LIMIT)) {
            if (dart.notNull(this[_bufferIndex]) >= dart.notNull(this[_buffer][dartx.length]))
              break;
            this[_buffer][dartx.set]((function() {
              var x = $__22[_bufferIndex];
              $__22[_bufferIndex] = dart.notNull(x) + 1;
              return x;
            }).bind(this)(), codeUnit);
          } else if (dart.notNull(_isLeadSurrogate(codeUnit))) {
            if (dart.notNull(this[_bufferIndex]) + 3 >= dart.notNull(this[_buffer][dartx.length]))
              break;
            var nextCodeUnit = str[dartx.codeUnitAt](dart.notNull(stringIndex) + 1);
            var wasCombined = this[_writeSurrogate](codeUnit, nextCodeUnit);
            if (dart.notNull(wasCombined)) {
              stringIndex = dart.notNull(stringIndex) + 1;
            }
          } else {
            var rune = codeUnit;
            if (dart.notNull(rune) <= dart.notNull(_TWO_BYTE_LIMIT)) {
              if (dart.notNull(this[_bufferIndex]) + 1 >= dart.notNull(this[_buffer][dartx.length]))
                break;
              this[_buffer][dartx.set]((function() {
                var x = $__22[_bufferIndex];
                $__22[_bufferIndex] = dart.notNull(x) + 1;
                return x;
              }).bind(this)(), 192 | dart.notNull(rune) >> 6);
              this[_buffer][dartx.set]((function() {
                var x = $__22[_bufferIndex];
                $__22[_bufferIndex] = dart.notNull(x) + 1;
                return x;
              }).bind(this)(), 128 | dart.notNull(rune) & 63);
            } else {
              dart.assert(dart.notNull(rune) <= dart.notNull(_THREE_BYTE_LIMIT));
              if (dart.notNull(this[_bufferIndex]) + 2 >= dart.notNull(this[_buffer][dartx.length]))
                break;
              this[_buffer][dartx.set]((function() {
                var x = $__22[_bufferIndex];
                $__22[_bufferIndex] = dart.notNull(x) + 1;
                return x;
              }).bind(this)(), 224 | dart.notNull(rune) >> 12);
              this[_buffer][dartx.set]((function() {
                var x = $__22[_bufferIndex];
                $__22[_bufferIndex] = dart.notNull(x) + 1;
                return x;
              }).bind(this)(), 128 | dart.notNull(rune) >> 6 & 63);
              this[_buffer][dartx.set]((function() {
                var x = $__22[_bufferIndex];
                $__22[_bufferIndex] = dart.notNull(x) + 1;
                return x;
              }).bind(this)(), 128 | dart.notNull(rune) & 63);
            }
          }
        }
        return stringIndex;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {_createBuffer: function(size) {
        return typed_data.Uint8List.new(size);
      }}, $__super);
  }(core.Object);
  dart.defineNamedConstructor(_Utf8Encoder, 'withBufferSize');
  dart.setSignature(_Utf8Encoder, {
    constructors: function() {
      return ({
        _Utf8Encoder: [_Utf8Encoder, []],
        withBufferSize: [_Utf8Encoder, [core.int]]
      });
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, _writeSurrogate, {
        value: [core.bool, [core.int, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _fillBuffer, {
        value: [core.int, [core.String, core.int, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    },
    statics: function() {
      return ({_createBuffer: [core.List$(core.int), [core.int]]});
    },
    names: ['_createBuffer']
  });
  _Utf8Encoder._DEFAULT_BYTE_BUFFER_SIZE = 1024;
  var _Utf8EncoderSink = function($__super) {
    function _Utf8EncoderSink() {
      $traceurRuntime.superConstructor(_Utf8EncoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Utf8EncoderSink, {
      _Utf8EncoderSink: function(sink) {
        this[_sink] = sink;
        $traceurRuntime.superGet(this, _Utf8EncoderSink.prototype, "_Utf8Encoder").call(this);
      },
      close: function() {
        if (this[_carry] != 0) {
          this.addSlice("", 0, 0, true);
          return;
        }
        this[_sink].close();
      },
      addSlice: function(str, start, end, isLast) {
        this[_bufferIndex] = 0;
        if (start == end && !dart.notNull(isLast)) {
          return;
        }
        if (this[_carry] != 0) {
          var nextCodeUnit = 0;
          if (start != end) {
            nextCodeUnit = str[dartx.codeUnitAt](start);
          } else {
            dart.assert(isLast);
          }
          var wasCombined = this[_writeSurrogate](this[_carry], nextCodeUnit);
          dart.assert(!dart.notNull(wasCombined) || start != end);
          if (dart.notNull(wasCombined)) {
            start = dart.notNull(start) + 1;
          }
          this[_carry] = 0;
        }
        do {
          start = this[_fillBuffer](str, start, end);
          var isLastSlice = dart.notNull(isLast) && start == end;
          if (start == dart.notNull(end) - 1 && dart.notNull(_isLeadSurrogate(str[dartx.codeUnitAt](start)))) {
            if (dart.notNull(isLast) && dart.notNull(this[_bufferIndex]) < dart.notNull(this[_buffer][dartx.length]) - 3) {
              var hasBeenCombined = this[_writeSurrogate](str[dartx.codeUnitAt](start), 0);
              dart.assert(!dart.notNull(hasBeenCombined));
            } else {
              this[_carry] = str[dartx.codeUnitAt](start);
            }
            start = dart.notNull(start) + 1;
          }
          this[_sink].addSlice(this[_buffer], 0, this[_bufferIndex], isLastSlice);
          this[_bufferIndex] = 0;
        } while (dart.notNull(start) < dart.notNull(end));
        if (dart.notNull(isLast))
          this.close();
      }
    }, {}, $__super);
  }(dart.mixin(_Utf8Encoder, StringConversionSinkMixin));
  dart.setSignature(_Utf8EncoderSink, {
    constructors: function() {
      return ({_Utf8EncoderSink: [_Utf8EncoderSink, [ByteConversionSink]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        addSlice: [dart.void, [core.String, core.int, core.int, core.bool]]
      });
    }
  });
  var Utf8Decoder = function($__super) {
    function Utf8Decoder() {
      $traceurRuntime.superConstructor(Utf8Decoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Utf8Decoder, {
      Utf8Decoder: function(opts) {
        var allowMalformed = opts && 'allowMalformed' in opts ? opts.allowMalformed : false;
        this[_allowMalformed] = allowMalformed;
        $traceurRuntime.superGet(this, Utf8Decoder.prototype, "Converter").call(this);
      },
      convert: function(codeUnits, start, end) {
        if (start === void 0)
          start = 0;
        if (end === void 0)
          end = null;
        var length = codeUnits[dartx.length];
        core.RangeError.checkValidRange(start, end, length);
        if (end == null)
          end = length;
        var buffer = new core.StringBuffer();
        var decoder = new _Utf8Decoder(buffer, this[_allowMalformed]);
        decoder.convert(codeUnits, start, end);
        decoder.close();
        return dart.toString(buffer);
      },
      startChunkedConversion: function(sink) {
        var stringSink = null;
        if (dart.is(sink, StringConversionSink)) {
          stringSink = sink;
        } else {
          stringSink = StringConversionSink.from(sink);
        }
        return stringSink.asUtf8Sink(this[_allowMalformed]);
      },
      bind: function(stream) {
        return $traceurRuntime.superGet(this, Utf8Decoder.prototype, "bind").call(this, stream);
      },
      fuse: function(next) {
        return $traceurRuntime.superGet(this, Utf8Decoder.prototype, "fuse").call(this, next);
      }
    }, {}, $__super);
  }(Converter$(core.List$(core.int), core.String));
  dart.setSignature(Utf8Decoder, {
    constructors: function() {
      return ({Utf8Decoder: [Utf8Decoder, [], {allowMalformed: core.bool}]});
    },
    methods: function() {
      return ({
        convert: [core.String, [core.List$(core.int)], [core.int, core.int]],
        startChunkedConversion: [ByteConversionSink, [core.Sink$(core.String)]],
        bind: [async.Stream$(core.String), [async.Stream$(core.List$(core.int))]],
        fuse: [Converter$(core.List$(core.int), dart.dynamic), [Converter$(core.String, dart.dynamic)]]
      });
    }
  });
  var _ONE_BYTE_LIMIT = 127;
  var _TWO_BYTE_LIMIT = 2047;
  var _THREE_BYTE_LIMIT = 65535;
  var _FOUR_BYTE_LIMIT = 1114111;
  var _SURROGATE_MASK = 63488;
  var _SURROGATE_TAG_MASK = 64512;
  var _SURROGATE_VALUE_MASK = 1023;
  var _LEAD_SURROGATE_MIN = 55296;
  var _TAIL_SURROGATE_MIN = 56320;
  function _isSurrogate(codeUnit) {
    return (dart.notNull(codeUnit) & dart.notNull(_SURROGATE_MASK)) == _LEAD_SURROGATE_MIN;
  }
  dart.fn(_isSurrogate, core.bool, [core.int]);
  function _isLeadSurrogate(codeUnit) {
    return (dart.notNull(codeUnit) & dart.notNull(_SURROGATE_TAG_MASK)) == _LEAD_SURROGATE_MIN;
  }
  dart.fn(_isLeadSurrogate, core.bool, [core.int]);
  function _isTailSurrogate(codeUnit) {
    return (dart.notNull(codeUnit) & dart.notNull(_SURROGATE_TAG_MASK)) == _TAIL_SURROGATE_MIN;
  }
  dart.fn(_isTailSurrogate, core.bool, [core.int]);
  function _combineSurrogatePair(lead, tail) {
    return 65536 + ((dart.notNull(lead) & dart.notNull(_SURROGATE_VALUE_MASK)) << 10) | dart.notNull(tail) & dart.notNull(_SURROGATE_VALUE_MASK);
  }
  dart.fn(_combineSurrogatePair, core.int, [core.int, core.int]);
  var _isFirstCharacter = Symbol('_isFirstCharacter');
  var _value = Symbol('_value');
  var _expectedUnits = Symbol('_expectedUnits');
  var _extraUnits = Symbol('_extraUnits');
  var _Utf8Decoder = function($__super) {
    function _Utf8Decoder() {
      $traceurRuntime.superConstructor(_Utf8Decoder).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Utf8Decoder, {
      _Utf8Decoder: function(stringSink, allowMalformed) {
        this[_stringSink] = stringSink;
        this[_allowMalformed] = allowMalformed;
        this[_isFirstCharacter] = true;
        this[_value] = 0;
        this[_expectedUnits] = 0;
        this[_extraUnits] = 0;
      },
      get hasPartialInput() {
        return dart.notNull(this[_expectedUnits]) > 0;
      },
      close: function() {
        this.flush();
      },
      flush: function() {
        if (dart.notNull(this.hasPartialInput)) {
          if (!dart.notNull(this[_allowMalformed])) {
            dart.throw(new core.FormatException("Unfinished UTF-8 octet sequence"));
          }
          this[_stringSink].writeCharCode(UNICODE_REPLACEMENT_CHARACTER_RUNE);
          this[_value] = 0;
          this[_expectedUnits] = 0;
          this[_extraUnits] = 0;
        }
      },
      convert: function(codeUnits, startIndex, endIndex) {
        var value = this[_value];
        var expectedUnits = this[_expectedUnits];
        var extraUnits = this[_extraUnits];
        this[_value] = 0;
        this[_expectedUnits] = 0;
        this[_extraUnits] = 0;
        function scanOneByteCharacters(units, from) {
          var to = endIndex;
          var mask = _ONE_BYTE_LIMIT;
          for (var i = from; dart.notNull(i) < dart.notNull(to); i = dart.notNull(i) + 1) {
            var unit = dart.dindex(units, i);
            if (!dart.equals(dart.dsend(unit, '&', mask), unit))
              return dart.notNull(i) - dart.notNull(from);
          }
          return dart.notNull(to) - dart.notNull(from);
        }
        dart.fn(scanOneByteCharacters, core.int, [dart.dynamic, core.int]);
        var addSingleBytes = (function(from, to) {
          dart.assert(dart.notNull(from) >= dart.notNull(startIndex) && dart.notNull(from) <= dart.notNull(endIndex));
          dart.assert(dart.notNull(to) >= dart.notNull(startIndex) && dart.notNull(to) <= dart.notNull(endIndex));
          this[_stringSink].write(core.String.fromCharCodes(codeUnits, from, to));
        }).bind(this);
        dart.fn(addSingleBytes, dart.void, [core.int, core.int]);
        var i = startIndex;
        loop: while (true) {
          multibyte: if (dart.notNull(expectedUnits) > 0) {
            do {
              if (i == endIndex) {
                break loop;
              }
              var unit = codeUnits[dartx.get](i);
              if ((dart.notNull(unit) & 192) != 128) {
                expectedUnits = 0;
                if (!dart.notNull(this[_allowMalformed])) {
                  dart.throw(new core.FormatException(("Bad UTF-8 encoding 0x" + unit[dartx.toRadixString](16))));
                }
                this[_isFirstCharacter] = false;
                this[_stringSink].writeCharCode(UNICODE_REPLACEMENT_CHARACTER_RUNE);
                break multibyte;
              } else {
                value = dart.notNull(value) << 6 | dart.notNull(unit) & 63;
                expectedUnits = dart.notNull(expectedUnits) - 1;
                i = dart.notNull(i) + 1;
              }
            } while (dart.notNull(expectedUnits) > 0);
            if (dart.notNull(value) <= dart.notNull(_Utf8Decoder._LIMITS[dartx.get](dart.notNull(extraUnits) - 1))) {
              if (!dart.notNull(this[_allowMalformed])) {
                dart.throw(new core.FormatException(("Overlong encoding of 0x" + value[dartx.toRadixString](16))));
              }
              expectedUnits = extraUnits = 0;
              value = UNICODE_REPLACEMENT_CHARACTER_RUNE;
            }
            if (dart.notNull(value) > dart.notNull(_FOUR_BYTE_LIMIT)) {
              if (!dart.notNull(this[_allowMalformed])) {
                dart.throw(new core.FormatException("Character outside valid Unicode range: " + ("0x" + value[dartx.toRadixString](16))));
              }
              value = UNICODE_REPLACEMENT_CHARACTER_RUNE;
            }
            if (!dart.notNull(this[_isFirstCharacter]) || value != UNICODE_BOM_CHARACTER_RUNE) {
              this[_stringSink].writeCharCode(value);
            }
            this[_isFirstCharacter] = false;
          }
          while (dart.notNull(i) < dart.notNull(endIndex)) {
            var oneBytes = scanOneByteCharacters(codeUnits, i);
            if (dart.notNull(oneBytes) > 0) {
              this[_isFirstCharacter] = false;
              addSingleBytes(i, dart.notNull(i) + dart.notNull(oneBytes));
              i = dart.notNull(i) + dart.notNull(oneBytes);
              if (i == endIndex)
                break;
            }
            var unit$__26 = codeUnits[dartx.get]((function() {
              var x = i;
              i = dart.notNull(x) + 1;
              return x;
            })());
            if (dart.notNull(unit$__26) < 0) {
              if (!dart.notNull(this[_allowMalformed])) {
                dart.throw(new core.FormatException(("Negative UTF-8 code unit: -0x" + (-dart.notNull(unit$__26))[dartx.toRadixString](16))));
              }
              this[_stringSink].writeCharCode(UNICODE_REPLACEMENT_CHARACTER_RUNE);
            } else {
              dart.assert(dart.notNull(unit$__26) > dart.notNull(_ONE_BYTE_LIMIT));
              if ((dart.notNull(unit$__26) & 224) == 192) {
                value = dart.notNull(unit$__26) & 31;
                expectedUnits = extraUnits = 1;
                continue loop;
              }
              if ((dart.notNull(unit$__26) & 240) == 224) {
                value = dart.notNull(unit$__26) & 15;
                expectedUnits = extraUnits = 2;
                continue loop;
              }
              if ((dart.notNull(unit$__26) & 248) == 240 && dart.notNull(unit$__26) < 245) {
                value = dart.notNull(unit$__26) & 7;
                expectedUnits = extraUnits = 3;
                continue loop;
              }
              if (!dart.notNull(this[_allowMalformed])) {
                dart.throw(new core.FormatException(("Bad UTF-8 encoding 0x" + unit$__26[dartx.toRadixString](16))));
              }
              value = UNICODE_REPLACEMENT_CHARACTER_RUNE;
              expectedUnits = extraUnits = 0;
              this[_isFirstCharacter] = false;
              this[_stringSink].writeCharCode(value);
            }
          }
          break loop;
        }
        if (dart.notNull(expectedUnits) > 0) {
          this[_value] = value;
          this[_expectedUnits] = expectedUnits;
          this[_extraUnits] = extraUnits;
        }
      }
    }, {}, $__super);
  }(core.Object);
  dart.setSignature(_Utf8Decoder, {
    constructors: function() {
      return ({_Utf8Decoder: [_Utf8Decoder, [core.StringSink, core.bool]]});
    },
    methods: function() {
      return ({
        close: [dart.void, []],
        flush: [dart.void, []],
        convert: [dart.void, [core.List$(core.int), core.int, core.int]]
      });
    }
  });
  _Utf8Decoder._LIMITS = dart.const(dart.list([_ONE_BYTE_LIMIT, _TWO_BYTE_LIMIT, _THREE_BYTE_LIMIT, _FOUR_BYTE_LIMIT], core.int));
  var _processed = Symbol('_processed');
  var _computeKeys = Symbol('_computeKeys');
  var _original = Symbol('_original');
  function _convertJsonToDart(json, reviver) {
    dart.assert(reviver != null);
    function walk(e) {
      if (e == null || (typeof e === 'undefined' ? 'undefined' : $traceurRuntime.typeof(e)) != "object") {
        return e;
      }
      if (Object.getPrototypeOf(e) === Array.prototype) {
        for (var i = 0; dart.notNull(i) < e.length; i = dart.notNull(i) + 1) {
          var item = e[i];
          e[i] = dart.dcall(reviver, i, walk(item));
        }
        return e;
      }
      var map = new _JsonMap(e);
      var processed = map[_processed];
      var keys = map[_computeKeys]();
      for (var i$__27 = 0; dart.notNull(i$__27) < dart.notNull(keys[dartx.length]); i$__27 = dart.notNull(i$__27) + 1) {
        var key = keys[dartx.get](i$__27);
        var revived = dart.dcall(reviver, key, walk(e[key]));
        processed[key] = revived;
      }
      map[_original] = processed;
      return map;
    }
    dart.fn(walk);
    return dart.dcall(reviver, null, walk(json));
  }
  dart.fn(_convertJsonToDart, dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]);
  function _convertJsonToDartLazy(object) {
    if (object == null)
      return null;
    if ((typeof object === 'undefined' ? 'undefined' : $traceurRuntime.typeof(object)) != "object") {
      return object;
    }
    if (Object.getPrototypeOf(object) !== Array.prototype) {
      return new _JsonMap(object);
    }
    for (var i = 0; dart.notNull(i) < object.length; i = dart.notNull(i) + 1) {
      var item = object[i];
      object[i] = _convertJsonToDartLazy(item);
    }
    return object;
  }
  dart.fn(_convertJsonToDartLazy);
  var _data = Symbol('_data');
  var _isUpgraded = Symbol('_isUpgraded');
  var _upgradedMap = Symbol('_upgradedMap');
  var _process = Symbol('_process');
  var _upgrade = Symbol('_upgrade');
  var _JsonMap = function($__super) {
    var $__23;
    function _JsonMap() {
      $traceurRuntime.superConstructor(_JsonMap).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonMap, ($__23 = {}, Object.defineProperty($__23, "_JsonMap", {
      value: function(original) {
        this[_processed] = _JsonMap._newJavaScriptObject();
        this[_original] = original;
        this[_data] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "get", {
      value: function(key) {
        if (dart.notNull(this[_isUpgraded])) {
          return this[_upgradedMap].get(key);
        } else if (!(typeof key == 'string')) {
          return null;
        } else {
          var result = _JsonMap._getProperty(this[_processed], dart.as(key, core.String));
          if (dart.notNull(_JsonMap._isUnprocessed(result)))
            result = this[_process](dart.as(key, core.String));
          return result;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "length", {
      get: function() {
        return dart.notNull(this[_isUpgraded]) ? this[_upgradedMap].length : this[_computeKeys]()[dartx.length];
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, "isEmpty", {
      get: function() {
        return this.length == 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, "isNotEmpty", {
      get: function() {
        return dart.notNull(this.length) > 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, "keys", {
      get: function() {
        if (dart.notNull(this[_isUpgraded]))
          return this[_upgradedMap].keys;
        return new _JsonMapKeyIterable(this);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, "values", {
      get: function() {
        var $__22 = this;
        if (dart.notNull(this[_isUpgraded]))
          return this[_upgradedMap].values;
        return _internal.MappedIterable.new(this[_computeKeys](), dart.fn((function(each) {
          return $__22.get(each);
        }).bind(this)));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, "set", {
      value: function(key, value) {
        if (dart.notNull(this[_isUpgraded])) {
          this[_upgradedMap].set(key, value);
        } else if (dart.notNull(this.containsKey(key))) {
          var processed = this[_processed];
          _JsonMap._setProperty(processed, dart.as(key, core.String), value);
          var original = this[_original];
          if (!dart.notNull(core.identical(original, processed))) {
            _JsonMap._setProperty(original, dart.as(key, core.String), null);
          }
        } else {
          this[_upgrade]().set(key, value);
        }
        return value;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "addAll", {
      value: function(other) {
        var $__22 = this;
        other.forEach(dart.fn((function(key, value) {
          $__22.set(key, value);
        }).bind(this)));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "containsValue", {
      value: function(value) {
        if (dart.notNull(this[_isUpgraded]))
          return this[_upgradedMap].containsValue(value);
        var keys = this[_computeKeys]();
        for (var i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
          var key = keys[dartx.get](i);
          if (dart.equals(this.get(key), value))
            return true;
        }
        return false;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "containsKey", {
      value: function(key) {
        if (dart.notNull(this[_isUpgraded]))
          return this[_upgradedMap].containsKey(key);
        if (!(typeof key == 'string'))
          return false;
        return _JsonMap._hasProperty(this[_original], dart.as(key, core.String));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "putIfAbsent", {
      value: function(key, ifAbsent) {
        if (dart.notNull(this.containsKey(key)))
          return this.get(key);
        var value = ifAbsent();
        this.set(key, value);
        return value;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "remove", {
      value: function(key) {
        if (!dart.notNull(this[_isUpgraded]) && !dart.notNull(this.containsKey(key)))
          return null;
        return this[_upgrade]().remove(key);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "clear", {
      value: function() {
        if (dart.notNull(this[_isUpgraded])) {
          this[_upgradedMap].clear();
        } else {
          if (this[_data] != null) {
            dart.dsend(this[_data], 'clear');
          }
          this[_original] = this[_processed] = null;
          this[_data] = dart.map();
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "forEach", {
      value: function(f) {
        if (dart.notNull(this[_isUpgraded]))
          return this[_upgradedMap].forEach(f);
        var keys = this[_computeKeys]();
        for (var i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
          var key = keys[dartx.get](i);
          var value = _JsonMap._getProperty(this[_processed], key);
          if (dart.notNull(_JsonMap._isUnprocessed(value))) {
            value = _convertJsonToDartLazy(_JsonMap._getProperty(this[_original], key));
            _JsonMap._setProperty(this[_processed], key, value);
          }
          dart.dcall(f, key, value);
          if (!dart.notNull(core.identical(keys, this[_data]))) {
            dart.throw(new core.ConcurrentModificationError(this));
          }
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, "toString", {
      value: function() {
        return collection.Maps.mapToString(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _isUpgraded, {
      get: function() {
        return this[_processed] == null;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, _upgradedMap, {
      get: function() {
        dart.assert(this[_isUpgraded]);
        return dart.as(this[_data], core.Map);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__23, _computeKeys, {
      value: function() {
        dart.assert(!dart.notNull(this[_isUpgraded]));
        var keys = dart.as(this[_data], core.List);
        if (keys == null) {
          keys = this[_data] = _JsonMap._getPropertyNames(this[_original]);
        }
        return dart.as(keys, core.List$(core.String));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _upgrade, {
      value: function() {
        if (dart.notNull(this[_isUpgraded]))
          return this[_upgradedMap];
        var result = dart.map();
        var keys = this[_computeKeys]();
        for (var i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
          var key = keys[dartx.get](i);
          result.set(key, this.get(key));
        }
        if (dart.notNull(keys[dartx.isEmpty])) {
          keys[dartx.add](null);
        } else {
          keys[dartx.clear]();
        }
        this[_original] = this[_processed] = null;
        this[_data] = result;
        dart.assert(this[_isUpgraded]);
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__23, _process, {
      value: function(key) {
        if (!dart.notNull(_JsonMap._hasProperty(this[_original], key)))
          return null;
        var result = _convertJsonToDartLazy(_JsonMap._getProperty(this[_original], key));
        return _JsonMap._setProperty(this[_processed], key, result);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__23), {
      _hasProperty: function(object, key) {
        return Object.prototype.hasOwnProperty.call(object, key);
      },
      _getProperty: function(object, key) {
        return object[key];
      },
      _setProperty: function(object, key, value) {
        return object[key] = value;
      },
      _getPropertyNames: function(object) {
        return dart.as(Object.keys(object), core.List);
      },
      _isUnprocessed: function(object) {
        return typeof object == "undefined";
      },
      _newJavaScriptObject: function() {
        return Object.create(null);
      }
    }, $__super);
  }(core.Object);
  _JsonMap[dart.implements] = function() {
    return [collection.LinkedHashMap];
  };
  dart.setSignature(_JsonMap, {
    constructors: function() {
      return ({_JsonMap: [_JsonMap, [dart.dynamic]]});
    },
    methods: function() {
      var $__23;
      return (($__23 = {}, Object.defineProperty($__23, "get", {
        value: [dart.dynamic, [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "set", {
        value: [dart.void, [dart.dynamic, dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "addAll", {
        value: [dart.void, [core.Map]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "containsValue", {
        value: [core.bool, [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "containsKey", {
        value: [core.bool, [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "putIfAbsent", {
        value: [dart.dynamic, [dart.dynamic, dart.functionType(dart.dynamic, [])]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "remove", {
        value: [dart.dynamic, [core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "clear", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, "forEach", {
        value: [dart.void, [dart.functionType(dart.void, [dart.dynamic, dart.dynamic])]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _computeKeys, {
        value: [core.List$(core.String), []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _upgrade, {
        value: [core.Map, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__23, _process, {
        value: [dart.dynamic, [core.String]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__23));
    },
    statics: function() {
      return ({
        _hasProperty: [core.bool, [dart.dynamic, core.String]],
        _getProperty: [dart.dynamic, [dart.dynamic, core.String]],
        _setProperty: [dart.dynamic, [dart.dynamic, core.String, dart.dynamic]],
        _getPropertyNames: [core.List, [dart.dynamic]],
        _isUnprocessed: [core.bool, [dart.dynamic]],
        _newJavaScriptObject: [dart.dynamic, []]
      });
    },
    names: ['_hasProperty', '_getProperty', '_setProperty', '_getPropertyNames', '_isUnprocessed', '_newJavaScriptObject']
  });
  var _parent = Symbol('_parent');
  var _JsonMapKeyIterable = function($__super) {
    function _JsonMapKeyIterable() {
      $traceurRuntime.superConstructor(_JsonMapKeyIterable).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonMapKeyIterable, {
      _JsonMapKeyIterable: function(parent) {
        this[_parent] = parent;
        $traceurRuntime.superGet(this, _JsonMapKeyIterable.prototype, "ListIterable").call(this);
      },
      get length() {
        return this[_parent].length;
      },
      elementAt: function(index) {
        return dart.notNull(this[_parent][_isUpgraded]) ? dart.as(this[_parent].keys[dartx.elementAt](index), core.String) : this[_parent][_computeKeys]()[dartx.get](index);
      },
      get iterator() {
        return dart.notNull(this[_parent][_isUpgraded]) ? this[_parent].keys[dartx.iterator] : this[_parent][_computeKeys]()[dartx.iterator];
      },
      contains: function(key) {
        return this[_parent].containsKey(key);
      }
    }, {}, $__super);
  }(_internal.ListIterable);
  dart.setSignature(_JsonMapKeyIterable, {
    constructors: function() {
      return ({_JsonMapKeyIterable: [_JsonMapKeyIterable, [_JsonMap]]});
    },
    methods: function() {
      return ({elementAt: [core.String, [core.int]]});
    }
  });
  dart.defineExtensionMembers(_JsonMapKeyIterable, ['elementAt', 'contains', 'length', 'iterator']);
  var _JsonDecoderSink = function($__super) {
    function _JsonDecoderSink() {
      $traceurRuntime.superConstructor(_JsonDecoderSink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_JsonDecoderSink, {
      _JsonDecoderSink: function(reviver, sink) {
        this[_reviver] = reviver;
        this[_sink] = sink;
        $traceurRuntime.superGet(this, _JsonDecoderSink.prototype, "_StringSinkConversionSink").call(this, new core.StringBuffer());
      },
      close: function() {
        $traceurRuntime.superGet(this, _JsonDecoderSink.prototype, "close").call(this);
        var buffer = dart.as(this[_stringSink], core.StringBuffer);
        var accumulated = dart.toString(buffer);
        buffer.clear();
        var decoded = _parseJson(accumulated, this[_reviver]);
        this[_sink].add(decoded);
        this[_sink].close();
      }
    }, {}, $__super);
  }(_StringSinkConversionSink);
  dart.setSignature(_JsonDecoderSink, {constructors: function() {
      return ({_JsonDecoderSink: [_JsonDecoderSink, [_Reviver, core.Sink$(core.Object)]]});
    }});
  exports.Codec$ = Codec$;
  exports.Codec = Codec;
  exports.Encoding = Encoding;
  exports.AsciiCodec = AsciiCodec;
  exports.ASCII = ASCII;
  exports.Converter$ = Converter$;
  exports.Converter = Converter;
  exports.AsciiEncoder = AsciiEncoder;
  exports.StringConversionSinkMixin = StringConversionSinkMixin;
  exports.StringConversionSinkBase = StringConversionSinkBase;
  exports.AsciiDecoder = AsciiDecoder;
  exports.ChunkedConversionSink$ = ChunkedConversionSink$;
  exports.ChunkedConversionSink = ChunkedConversionSink;
  exports.ByteConversionSink = ByteConversionSink;
  exports.ByteConversionSinkBase = ByteConversionSinkBase;
  exports.HtmlEscapeMode = HtmlEscapeMode;
  exports.HtmlEscape = HtmlEscape;
  exports.HTML_ESCAPE = HTML_ESCAPE;
  exports.JsonUnsupportedObjectError = JsonUnsupportedObjectError;
  exports.JsonCyclicError = JsonCyclicError;
  exports.JsonCodec = JsonCodec;
  exports.JSON = JSON;
  exports.JsonEncoder = JsonEncoder;
  exports.JsonUtf8Encoder = JsonUtf8Encoder;
  exports.JsonDecoder = JsonDecoder;
  exports.Latin1Codec = Latin1Codec;
  exports.LATIN1 = LATIN1;
  exports.Latin1Encoder = Latin1Encoder;
  exports.Latin1Decoder = Latin1Decoder;
  exports.LineSplitter = LineSplitter;
  exports.StringConversionSink = StringConversionSink;
  exports.ClosableStringSink = ClosableStringSink;
  exports.UNICODE_REPLACEMENT_CHARACTER_RUNE = UNICODE_REPLACEMENT_CHARACTER_RUNE;
  exports.UNICODE_BOM_CHARACTER_RUNE = UNICODE_BOM_CHARACTER_RUNE;
  exports.Utf8Codec = Utf8Codec;
  exports.UTF8 = UTF8;
  exports.Utf8Encoder = Utf8Encoder;
  exports.Utf8Decoder = Utf8Decoder;
});
