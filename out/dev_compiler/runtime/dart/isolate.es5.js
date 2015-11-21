dart_library.library('dart/isolate', null, ["dart/_runtime", 'dart/core', 'dart/async'], ['dart/_isolate_helper'], function(exports, dart, core, async, _isolate_helper) {
  'use strict';
  var dartx = dart.dartx;
  var Capability = function($__super) {
    function Capability() {
      $traceurRuntime.superConstructor(Capability).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Capability, {}, {new: function() {
        return new _isolate_helper.CapabilityImpl();
      }}, $__super);
  }(core.Object);
  dart.setSignature(Capability, {constructors: function() {
      return ({new: [Capability, []]});
    }});
  var IsolateSpawnException = function($__super) {
    function IsolateSpawnException() {
      $traceurRuntime.superConstructor(IsolateSpawnException).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(IsolateSpawnException, {
      IsolateSpawnException: function(message) {
        this.message = message;
      },
      toString: function() {
        return ("IsolateSpawnException: " + this.message);
      }
    }, {}, $__super);
  }(core.Object);
  IsolateSpawnException[dart.implements] = function() {
    return [core.Exception];
  };
  dart.setSignature(IsolateSpawnException, {constructors: function() {
      return ({IsolateSpawnException: [IsolateSpawnException, [core.String]]});
    }});
  var _pause = Symbol('_pause');
  var Isolate = function($__super) {
    var $__9;
    function Isolate() {
      $traceurRuntime.superConstructor(Isolate).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Isolate, ($__9 = {}, Object.defineProperty($__9, "Isolate", {
      value: function(controlPort, opts) {
        var pauseCapability = opts && 'pauseCapability' in opts ? opts.pauseCapability : null;
        var terminateCapability = opts && 'terminateCapability' in opts ? opts.terminateCapability : null;
        this.controlPort = controlPort;
        this.pauseCapability = pauseCapability;
        this.terminateCapability = terminateCapability;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "pause", {
      value: function(resumeCapability) {
        if (resumeCapability === void 0)
          resumeCapability = null;
        if (resumeCapability == null)
          resumeCapability = Capability.new();
        this[_pause](resumeCapability);
        return resumeCapability;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, _pause, {
      value: function(resumeCapability) {
        var message = core.List.new(3);
        message[dartx.set](0, "pause");
        message[dartx.set](1, this.pauseCapability);
        message[dartx.set](2, resumeCapability);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "resume", {
      value: function(resumeCapability) {
        var message = core.List.new(2);
        message[dartx.set](0, "resume");
        message[dartx.set](1, resumeCapability);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "addOnExitListener", {
      value: function(responsePort) {
        var message = core.List.new(2);
        message[dartx.set](0, "add-ondone");
        message[dartx.set](1, responsePort);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "removeOnExitListener", {
      value: function(responsePort) {
        var message = core.List.new(2);
        message[dartx.set](0, "remove-ondone");
        message[dartx.set](1, responsePort);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "setErrorsFatal", {
      value: function(errorsAreFatal) {
        var message = core.List.new(3);
        message[dartx.set](0, "set-errors-fatal");
        message[dartx.set](1, this.terminateCapability);
        message[dartx.set](2, errorsAreFatal);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "kill", {
      value: function(priority) {
        if (priority === void 0)
          priority = Isolate.BEFORE_NEXT_EVENT;
        this.controlPort.send(["kill", this.terminateCapability, priority]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "ping", {
      value: function(responsePort, pingType) {
        if (pingType === void 0)
          pingType = Isolate.IMMEDIATE;
        var message = core.List.new(3);
        message[dartx.set](0, "ping");
        message[dartx.set](1, responsePort);
        message[dartx.set](2, pingType);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "addErrorListener", {
      value: function(port) {
        var message = core.List.new(2);
        message[dartx.set](0, "getErrors");
        message[dartx.set](1, port);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "removeErrorListener", {
      value: function(port) {
        var message = core.List.new(2);
        message[dartx.set](0, "stopErrors");
        message[dartx.set](1, port);
        this.controlPort.send(message);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__9, "errors", {
      get: function() {
        var $__8 = this;
        var controller = null;
        var port = null;
        function handleError(message) {
          var errorDescription = dart.as(dart.dindex(message, 0), core.String);
          var stackDescription = dart.as(dart.dindex(message, 1), core.String);
          var error = new RemoteError(errorDescription, stackDescription);
          controller.addError(error, error.stackTrace);
        }
        dart.fn(handleError, dart.void, [dart.dynamic]);
        controller = async.StreamController.broadcast({
          sync: true,
          onListen: dart.fn((function() {
            port = RawReceivePort.new(handleError);
            $__8.addErrorListener(port.sendPort);
          }).bind(this)),
          onCancel: dart.fn((function() {
            $__8.removeErrorListener(port.sendPort);
            port.close();
            port = null;
          }).bind(this))
        });
        return controller.stream;
      },
      configurable: true,
      enumerable: true
    }), $__9), {
      get current() {
        return Isolate._currentIsolateCache;
      },
      spawn: function(entryPoint, message, opts) {
        var paused = opts && 'paused' in opts ? opts.paused : false;
        try {
          return _isolate_helper.IsolateNatives.spawnFunction(entryPoint, message, paused).then(dart.fn(function(msg) {
            return new Isolate(dart.as(dart.dindex(msg, 1), SendPort), {
              pauseCapability: dart.as(dart.dindex(msg, 2), Capability),
              terminateCapability: dart.as(dart.dindex(msg, 3), Capability)
            });
          }, Isolate, [dart.dynamic]));
        } catch (e) {
          var st = dart.stackTrace(e);
          return async.Future$(Isolate).error(e, st);
        }
      },
      spawnUri: function(uri, args, message, opts) {
        var paused = opts && 'paused' in opts ? opts.paused : false;
        var packageRoot = opts && 'packageRoot' in opts ? opts.packageRoot : null;
        if (packageRoot != null)
          dart.throw(new core.UnimplementedError("packageRoot"));
        try {
          if (dart.is(args, core.List)) {
            for (var i = 0; dart.notNull(i) < dart.notNull(args[dartx.length]); i = dart.notNull(i) + 1) {
              if (!(typeof args[dartx.get](i) == 'string')) {
                dart.throw(new core.ArgumentError(("Args must be a list of Strings " + args)));
              }
            }
          } else if (args != null) {
            dart.throw(new core.ArgumentError(("Args must be a list of Strings " + args)));
          }
          return _isolate_helper.IsolateNatives.spawnUri(uri, args, message, paused).then(dart.fn(function(msg) {
            return new Isolate(dart.as(dart.dindex(msg, 1), SendPort), {
              pauseCapability: dart.as(dart.dindex(msg, 2), Capability),
              terminateCapability: dart.as(dart.dindex(msg, 3), Capability)
            });
          }, Isolate, [dart.dynamic]));
        } catch (e) {
          var st = dart.stackTrace(e);
          return async.Future$(Isolate).error(e, st);
        }
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(Isolate, {
    constructors: function() {
      return ({Isolate: [Isolate, [SendPort], {
          pauseCapability: Capability,
          terminateCapability: Capability
        }]});
    },
    methods: function() {
      var $__9;
      return (($__9 = {}, Object.defineProperty($__9, "pause", {
        value: [Capability, [], [Capability]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, _pause, {
        value: [dart.void, [Capability]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "resume", {
        value: [dart.void, [Capability]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "addOnExitListener", {
        value: [dart.void, [SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "removeOnExitListener", {
        value: [dart.void, [SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "setErrorsFatal", {
        value: [dart.void, [core.bool]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "kill", {
        value: [dart.void, [], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "ping", {
        value: [dart.void, [SendPort], [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "addErrorListener", {
        value: [dart.void, [SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__9, "removeErrorListener", {
        value: [dart.void, [SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__9));
    },
    statics: function() {
      return ({
        spawn: [async.Future$(Isolate), [dart.functionType(dart.void, [dart.dynamic]), dart.dynamic], {paused: core.bool}],
        spawnUri: [async.Future$(Isolate), [core.Uri, core.List$(core.String), dart.dynamic], {
          paused: core.bool,
          packageRoot: core.Uri
        }]
      });
    },
    names: ['spawn', 'spawnUri']
  });
  Isolate.IMMEDIATE = 0;
  Isolate.BEFORE_NEXT_EVENT = 1;
  Isolate.AS_EVENT = 2;
  dart.defineLazyProperties(Isolate, {get _currentIsolateCache() {
      return _isolate_helper.IsolateNatives.currentIsolate;
    }});
  var SendPort = function($__super) {
    function SendPort() {
      $traceurRuntime.superConstructor(SendPort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(SendPort, {}, {}, $__super);
  }(core.Object);
  SendPort[dart.implements] = function() {
    return [Capability];
  };
  var ReceivePort = function($__super) {
    function ReceivePort() {
      $traceurRuntime.superConstructor(ReceivePort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ReceivePort, {}, {
      new: function() {
        return new _isolate_helper.ReceivePortImpl();
      },
      fromRawReceivePort: function(rawPort) {
        return new _isolate_helper.ReceivePortImpl.fromRawReceivePort(rawPort);
      }
    }, $__super);
  }(core.Object);
  ReceivePort[dart.implements] = function() {
    return [async.Stream];
  };
  dart.setSignature(ReceivePort, {constructors: function() {
      return ({
        new: [ReceivePort, []],
        fromRawReceivePort: [ReceivePort, [RawReceivePort]]
      });
    }});
  var RawReceivePort = function($__super) {
    function RawReceivePort() {
      $traceurRuntime.superConstructor(RawReceivePort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RawReceivePort, {}, {new: function(handler) {
        if (handler === void 0)
          handler = null;
        return new _isolate_helper.RawReceivePortImpl(handler);
      }}, $__super);
  }(core.Object);
  dart.setSignature(RawReceivePort, {constructors: function() {
      return ({new: [RawReceivePort, [], [dart.functionType(dart.void, [dart.dynamic])]]});
    }});
  var _IsolateUnhandledException = function($__super) {
    function _IsolateUnhandledException() {
      $traceurRuntime.superConstructor(_IsolateUnhandledException).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_IsolateUnhandledException, {
      _IsolateUnhandledException: function(message, source, stackTrace) {
        this.message = message;
        this.source = source;
        this.stackTrace = stackTrace;
      },
      toString: function() {
        return 'IsolateUnhandledException: exception while handling message: ' + (this.message + " \n  ") + (dart.toString(this.source)[dartx.replaceAll]("\n", "\n  ") + "\n") + 'original stack trace:\n  ' + ("" + dart.toString(this.stackTrace)[dartx.replaceAll]("\n", "\n  "));
      }
    }, {}, $__super);
  }(core.Object);
  _IsolateUnhandledException[dart.implements] = function() {
    return [core.Exception];
  };
  dart.setSignature(_IsolateUnhandledException, {constructors: function() {
      return ({_IsolateUnhandledException: [_IsolateUnhandledException, [dart.dynamic, dart.dynamic, core.StackTrace]]});
    }});
  var _description = Symbol('_description');
  var RemoteError = function($__super) {
    function RemoteError() {
      $traceurRuntime.superConstructor(RemoteError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RemoteError, {
      RemoteError: function(description, stackDescription) {
        this[_description] = description;
        this.stackTrace = new _RemoteStackTrace(stackDescription);
      },
      toString: function() {
        return this[_description];
      }
    }, {}, $__super);
  }(core.Object);
  RemoteError[dart.implements] = function() {
    return [core.Error];
  };
  dart.setSignature(RemoteError, {constructors: function() {
      return ({RemoteError: [RemoteError, [core.String, core.String]]});
    }});
  var _trace = Symbol('_trace');
  var _RemoteStackTrace = function($__super) {
    function _RemoteStackTrace() {
      $traceurRuntime.superConstructor(_RemoteStackTrace).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_RemoteStackTrace, {
      _RemoteStackTrace: function(trace) {
        this[_trace] = trace;
      },
      toString: function() {
        return this[_trace];
      }
    }, {}, $__super);
  }(core.Object);
  _RemoteStackTrace[dart.implements] = function() {
    return [core.StackTrace];
  };
  dart.setSignature(_RemoteStackTrace, {constructors: function() {
      return ({_RemoteStackTrace: [_RemoteStackTrace, [core.String]]});
    }});
  exports.Capability = Capability;
  exports.IsolateSpawnException = IsolateSpawnException;
  exports.Isolate = Isolate;
  exports.SendPort = SendPort;
  exports.ReceivePort = ReceivePort;
  exports.RawReceivePort = RawReceivePort;
  exports.RemoteError = RemoteError;
});
