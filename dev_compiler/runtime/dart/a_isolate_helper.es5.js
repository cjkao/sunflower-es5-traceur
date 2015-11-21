dart_library.library('dart/_isolate_helper', null, ["dart/_runtime", 'dart/core', 'dart/_interceptors', 'dart/_js_helper', 'dart/isolate', 'dart/_foreign_helper', 'dart/collection', 'dart/async'], ['dart/_native_typed_data', 'dart/_js_embedded_names'], function(exports, dart, core, _interceptors, _js_helper, isolate, _foreign_helper, collection, async, _native_typed_data, _js_embedded_names) {
  'use strict';
  var dartx = dart.dartx;
  function _serializeMessage(message) {
    return new _Serializer().serialize(message);
  }
  dart.fn(_serializeMessage);
  function _deserializeMessage(message) {
    return new _Deserializer().deserialize(message);
  }
  dart.fn(_deserializeMessage);
  function _clone(message) {
    var serializer = new _Serializer({serializeSendPorts: false});
    var deserializer = new _Deserializer();
    return deserializer.deserialize(serializer.serialize(message));
  }
  dart.fn(_clone);
  var _serializeSendPorts = Symbol('_serializeSendPorts');
  var _workerId = Symbol('_workerId');
  var _isolateId = Symbol('_isolateId');
  var _receivePortId = Symbol('_receivePortId');
  var _id = Symbol('_id');
  var _receivePort = Symbol('_receivePort');
  var _Serializer = function($__super) {
    function _Serializer() {
      $traceurRuntime.superConstructor(_Serializer).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Serializer, {
      _Serializer: function(opts) {
        var serializeSendPorts = opts && 'serializeSendPorts' in opts ? opts.serializeSendPorts : true;
        this.serializedObjectIds = core.Map$(dart.dynamic, core.int).identity();
        this[_serializeSendPorts] = dart.as(serializeSendPorts, core.bool);
      },
      serialize: function(x) {
        if (dart.notNull(this.isPrimitive(x)))
          return this.serializePrimitive(x);
        var serializationId = this.serializedObjectIds.get(x);
        if (serializationId != null)
          return this.makeRef(serializationId);
        serializationId = this.serializedObjectIds.length;
        this.serializedObjectIds.set(x, serializationId);
        if (dart.is(x, _native_typed_data.NativeByteBuffer))
          return this.serializeByteBuffer(dart.as(x, _native_typed_data.NativeByteBuffer));
        if (dart.is(x, _native_typed_data.NativeTypedData))
          return this.serializeTypedData(dart.as(x, _native_typed_data.NativeTypedData));
        if (dart.is(x, _interceptors.JSIndexable))
          return this.serializeJSIndexable(dart.as(x, _interceptors.JSIndexable));
        if (dart.is(x, _js_helper.InternalMap))
          return this.serializeMap(dart.as(x, core.Map));
        if (dart.is(x, _interceptors.JSObject))
          return this.serializeJSObject(dart.as(x, _interceptors.JSObject));
        if (dart.is(x, _interceptors.Interceptor))
          this.unsupported(x);
        if (dart.is(x, isolate.RawReceivePort)) {
          this.unsupported(x, "RawReceivePorts can't be transmitted:");
        }
        if (dart.is(x, _NativeJsSendPort))
          return this.serializeJsSendPort(dart.as(x, _NativeJsSendPort));
        if (dart.is(x, _WorkerSendPort))
          return this.serializeWorkerSendPort(dart.as(x, _WorkerSendPort));
        if (dart.is(x, core.Function))
          return this.serializeClosure(dart.as(x, core.Function));
        return this.serializeDartObject(x);
      },
      unsupported: function(x, message) {
        if (message === void 0)
          message = null;
        if (message == null)
          message = "Can't transmit:";
        dart.throw(new core.UnsupportedError((message + " " + x)));
      },
      makeRef: function(serializationId) {
        return ["ref", serializationId];
      },
      isPrimitive: function(x) {
        return x == null || typeof x == 'string' || typeof x == 'number' || typeof x == 'boolean';
      },
      serializePrimitive: function(primitive) {
        return primitive;
      },
      serializeByteBuffer: function(buffer) {
        return ["buffer", buffer];
      },
      serializeTypedData: function(data) {
        return ["typed", data];
      },
      serializeJSIndexable: function(indexable) {
        dart.assert(!(typeof indexable == 'string'));
        var serialized = dart.as(this.serializeArray(dart.as(indexable, _interceptors.JSArray)), core.List);
        if (dart.is(indexable, _interceptors.JSFixedArray))
          return ["fixed", serialized];
        if (dart.is(indexable, _interceptors.JSExtendableArray))
          return ["extendable", serialized];
        if (dart.is(indexable, _interceptors.JSMutableArray))
          return ["mutable", serialized];
        if (dart.is(indexable, _interceptors.JSArray))
          return ["const", serialized];
        this.unsupported(indexable, "Can't serialize indexable: ");
        return null;
      },
      serializeArray: function(x) {
        var serialized = [];
        serialized[dartx.length] = x[dartx.length];
        for (var i = 0; dart.notNull(i) < dart.notNull(x[dartx.length]); i = dart.notNull(i) + 1) {
          serialized[dartx.set](i, this.serialize(x[dartx.get](i)));
        }
        return serialized;
      },
      serializeArrayInPlace: function(x) {
        for (var i = 0; dart.notNull(i) < dart.notNull(x[dartx.length]); i = dart.notNull(i) + 1) {
          x[dartx.set](i, this.serialize(x[dartx.get](i)));
        }
        return x;
      },
      serializeMap: function(x) {
        var serializeTearOff = dart.bind(this, 'serialize');
        return ['map', x.keys[dartx.map](dart.as(serializeTearOff, __CastType0))[dartx.toList](), x.values[dartx.map](dart.as(serializeTearOff, dart.functionType(dart.dynamic, [dart.dynamic])))[dartx.toList]()];
      },
      serializeJSObject: function(x) {
        if (!!x.constructor && x.constructor !== Object) {
          this.unsupported(x, "Only plain JS Objects are supported:");
        }
        var keys = dart.as(Object.keys(x), core.List);
        var values = [];
        values[dartx.length] = keys[dartx.length];
        for (var i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
          values[dartx.set](i, this.serialize(x[keys[dartx.get](i)]));
        }
        return ['js-object', keys, values];
      },
      serializeWorkerSendPort: function(x) {
        if (dart.notNull(this[_serializeSendPorts])) {
          return ['sendport', x[_workerId], x[_isolateId], x[_receivePortId]];
        }
        return ['raw sendport', x];
      },
      serializeJsSendPort: function(x) {
        if (dart.notNull(this[_serializeSendPorts])) {
          var workerId = exports._globalState.currentManagerId;
          return ['sendport', workerId, x[_isolateId], x[_receivePort][_id]];
        }
        return ['raw sendport', x];
      },
      serializeCapability: function(x) {
        return ['capability', x[_id]];
      },
      serializeClosure: function(x) {
        var name = IsolateNatives._getJSFunctionName(x);
        if (name == null) {
          this.unsupported(x, "Closures can't be transmitted:");
        }
        return ['function', name];
      },
      serializeDartObject: function(x) {
        var classExtractor = _foreign_helper.JS_EMBEDDED_GLOBAL('', _js_embedded_names.CLASS_ID_EXTRACTOR);
        var fieldsExtractor = _foreign_helper.JS_EMBEDDED_GLOBAL('', _js_embedded_names.CLASS_FIELDS_EXTRACTOR);
        var classId = classExtractor(x);
        var fields = dart.as(fieldsExtractor(x), core.List);
        return ['dart', classId, this.serializeArrayInPlace(dart.as(fields, _interceptors.JSArray))];
      }
    }, {}, $__super);
  }(core.Object);
  dart.setSignature(_Serializer, {
    constructors: function() {
      return ({_Serializer: [_Serializer, [], {serializeSendPorts: dart.dynamic}]});
    },
    methods: function() {
      return ({
        serialize: [dart.dynamic, [dart.dynamic]],
        unsupported: [dart.void, [dart.dynamic], [core.String]],
        makeRef: [dart.dynamic, [core.int]],
        isPrimitive: [core.bool, [dart.dynamic]],
        serializePrimitive: [dart.dynamic, [dart.dynamic]],
        serializeByteBuffer: [dart.dynamic, [_native_typed_data.NativeByteBuffer]],
        serializeTypedData: [dart.dynamic, [_native_typed_data.NativeTypedData]],
        serializeJSIndexable: [dart.dynamic, [_interceptors.JSIndexable]],
        serializeArray: [dart.dynamic, [_interceptors.JSArray]],
        serializeArrayInPlace: [dart.dynamic, [_interceptors.JSArray]],
        serializeMap: [dart.dynamic, [core.Map]],
        serializeJSObject: [dart.dynamic, [_interceptors.JSObject]],
        serializeWorkerSendPort: [dart.dynamic, [_WorkerSendPort]],
        serializeJsSendPort: [dart.dynamic, [_NativeJsSendPort]],
        serializeCapability: [dart.dynamic, [CapabilityImpl]],
        serializeClosure: [dart.dynamic, [core.Function]],
        serializeDartObject: [dart.dynamic, [dart.dynamic]]
      });
    }
  });
  var _adjustSendPorts = Symbol('_adjustSendPorts');
  var _Deserializer = function($__super) {
    function _Deserializer() {
      $traceurRuntime.superConstructor(_Deserializer).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Deserializer, {
      _Deserializer: function(opts) {
        var adjustSendPorts = opts && 'adjustSendPorts' in opts ? opts.adjustSendPorts : true;
        this.deserializedObjects = core.List.new();
        this[_adjustSendPorts] = dart.as(adjustSendPorts, core.bool);
      },
      deserialize: function(x) {
        if (dart.notNull(this.isPrimitive(x)))
          return this.deserializePrimitive(x);
        if (!dart.is(x, _interceptors.JSArray))
          dart.throw(new core.ArgumentError(("Bad serialized message: " + x)));
        switch (dart.dload(x, 'first')) {
          case "ref":
            {
              return this.deserializeRef(x);
            }
          case "buffer":
            {
              return this.deserializeByteBuffer(x);
            }
          case "typed":
            {
              return this.deserializeTypedData(x);
            }
          case "fixed":
            {
              return this.deserializeFixed(x);
            }
          case "extendable":
            {
              return this.deserializeExtendable(x);
            }
          case "mutable":
            {
              return this.deserializeMutable(x);
            }
          case "const":
            {
              return this.deserializeConst(x);
            }
          case "map":
            {
              return this.deserializeMap(x);
            }
          case "sendport":
            {
              return this.deserializeSendPort(x);
            }
          case "raw sendport":
            {
              return this.deserializeRawSendPort(x);
            }
          case "js-object":
            {
              return this.deserializeJSObject(x);
            }
          case "function":
            {
              return this.deserializeClosure(x);
            }
          case "dart":
            {
              return this.deserializeDartObject(x);
            }
          default:
            {
              dart.throw(("couldn't deserialize: " + x));
            }
        }
      },
      isPrimitive: function(x) {
        return x == null || typeof x == 'string' || typeof x == 'number' || typeof x == 'boolean';
      },
      deserializePrimitive: function(x) {
        return x;
      },
      deserializeRef: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'ref'));
        var serializationId = dart.as(dart.dindex(x, 1), core.int);
        return this.deserializedObjects[dartx.get](serializationId);
      },
      deserializeByteBuffer: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'buffer'));
        var result = dart.as(dart.dindex(x, 1), _native_typed_data.NativeByteBuffer);
        this.deserializedObjects[dartx.add](result);
        return result;
      },
      deserializeTypedData: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'typed'));
        var result = dart.as(dart.dindex(x, 1), _native_typed_data.NativeTypedData);
        this.deserializedObjects[dartx.add](result);
        return result;
      },
      deserializeArrayInPlace: function(x) {
        for (var i = 0; dart.notNull(i) < dart.notNull(x[dartx.length]); i = dart.notNull(i) + 1) {
          x[dartx.set](i, this.deserialize(x[dartx.get](i)));
        }
        return x;
      },
      deserializeFixed: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'fixed'));
        var result = dart.as(dart.dindex(x, 1), core.List);
        this.deserializedObjects[dartx.add](result);
        return _interceptors.JSArray.markFixed(this.deserializeArrayInPlace(dart.as(result, _interceptors.JSArray)));
      },
      deserializeExtendable: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'extendable'));
        var result = dart.as(dart.dindex(x, 1), core.List);
        this.deserializedObjects[dartx.add](result);
        return _interceptors.JSArray.markGrowable(this.deserializeArrayInPlace(dart.as(result, _interceptors.JSArray)));
      },
      deserializeMutable: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'mutable'));
        var result = dart.as(dart.dindex(x, 1), core.List);
        this.deserializedObjects[dartx.add](result);
        return this.deserializeArrayInPlace(dart.as(result, _interceptors.JSArray));
      },
      deserializeConst: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'const'));
        var result = dart.as(dart.dindex(x, 1), core.List);
        this.deserializedObjects[dartx.add](result);
        return _interceptors.JSArray.markFixed(this.deserializeArrayInPlace(dart.as(result, _interceptors.JSArray)));
      },
      deserializeMap: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'map'));
        var keys = dart.as(dart.dindex(x, 1), core.List);
        var values = dart.as(dart.dindex(x, 2), core.List);
        var result = dart.map();
        this.deserializedObjects[dartx.add](result);
        keys = keys[dartx.map](dart.bind(this, 'deserialize'))[dartx.toList]();
        for (var i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
          result.set(keys[dartx.get](i), this.deserialize(values[dartx.get](i)));
        }
        return result;
      },
      deserializeSendPort: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'sendport'));
        var managerId = dart.as(dart.dindex(x, 1), core.int);
        var isolateId = dart.as(dart.dindex(x, 2), core.int);
        var receivePortId = dart.as(dart.dindex(x, 3), core.int);
        var result = null;
        if (managerId == exports._globalState.currentManagerId) {
          var isolate$__20 = exports._globalState.isolates.get(isolateId);
          if (isolate$__20 == null)
            return null;
          var receivePort = isolate$__20.lookup(receivePortId);
          if (receivePort == null)
            return null;
          result = new _NativeJsSendPort(receivePort, isolateId);
        } else {
          result = new _WorkerSendPort(managerId, isolateId, receivePortId);
        }
        this.deserializedObjects[dartx.add](result);
        return result;
      },
      deserializeRawSendPort: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'raw sendport'));
        var result = dart.as(dart.dindex(x, 1), isolate.SendPort);
        this.deserializedObjects[dartx.add](result);
        return result;
      },
      deserializeJSObject: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'js-object'));
        var keys = dart.as(dart.dindex(x, 1), core.List);
        var values = dart.as(dart.dindex(x, 2), core.List);
        var o = {};
        this.deserializedObjects[dartx.add](o);
        for (var i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
          o[keys[dartx.get](i)] = this.deserialize(values[dartx.get](i));
        }
        return o;
      },
      deserializeClosure: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'function'));
        var name = dart.as(dart.dindex(x, 1), core.String);
        var result = dart.as(IsolateNatives._getJSFunctionFromName(name), core.Function);
        this.deserializedObjects[dartx.add](result);
        return result;
      },
      deserializeDartObject: function(x) {
        dart.assert(dart.equals(dart.dindex(x, 0), 'dart'));
        var classId = dart.as(dart.dindex(x, 1), core.String);
        var fields = dart.as(dart.dindex(x, 2), core.List);
        var instanceFromClassId = _foreign_helper.JS_EMBEDDED_GLOBAL('', _js_embedded_names.INSTANCE_FROM_CLASS_ID);
        var initializeObject = _foreign_helper.JS_EMBEDDED_GLOBAL('', _js_embedded_names.INITIALIZE_EMPTY_INSTANCE);
        var emptyInstance = instanceFromClassId(classId);
        this.deserializedObjects[dartx.add](emptyInstance);
        this.deserializeArrayInPlace(dart.as(fields, _interceptors.JSArray));
        return initializeObject(classId, emptyInstance, fields);
      }
    }, {}, $__super);
  }(core.Object);
  dart.setSignature(_Deserializer, {
    constructors: function() {
      return ({_Deserializer: [_Deserializer, [], {adjustSendPorts: dart.dynamic}]});
    },
    methods: function() {
      return ({
        deserialize: [dart.dynamic, [dart.dynamic]],
        isPrimitive: [core.bool, [dart.dynamic]],
        deserializePrimitive: [dart.dynamic, [dart.dynamic]],
        deserializeRef: [dart.dynamic, [dart.dynamic]],
        deserializeByteBuffer: [_native_typed_data.NativeByteBuffer, [dart.dynamic]],
        deserializeTypedData: [_native_typed_data.NativeTypedData, [dart.dynamic]],
        deserializeArrayInPlace: [core.List, [_interceptors.JSArray]],
        deserializeFixed: [core.List, [dart.dynamic]],
        deserializeExtendable: [core.List, [dart.dynamic]],
        deserializeMutable: [core.List, [dart.dynamic]],
        deserializeConst: [core.List, [dart.dynamic]],
        deserializeMap: [core.Map, [dart.dynamic]],
        deserializeSendPort: [isolate.SendPort, [dart.dynamic]],
        deserializeRawSendPort: [isolate.SendPort, [dart.dynamic]],
        deserializeJSObject: [dart.dynamic, [dart.dynamic]],
        deserializeClosure: [core.Function, [dart.dynamic]],
        deserializeDartObject: [dart.dynamic, [dart.dynamic]]
      });
    }
  });
  var __CastType0 = dart.typedef('__CastType0', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  function _callInIsolate(isolate, func) {
    var result = isolate.eval(func);
    exports._globalState.topEventLoop.run();
    return result;
  }
  dart.fn(_callInIsolate, function() {
    return dart.definiteFunctionType(dart.dynamic, [_IsolateContext, core.Function]);
  });
  var _activeJsAsyncCount = Symbol('_activeJsAsyncCount');
  function enterJsAsync() {
    var o = exports._globalState.topEventLoop;
    o[_activeJsAsyncCount] = dart.notNull(o[_activeJsAsyncCount]) + 1;
  }
  dart.fn(enterJsAsync);
  function leaveJsAsync() {
    var o = exports._globalState.topEventLoop;
    o[_activeJsAsyncCount] = dart.notNull(o[_activeJsAsyncCount]) - 1;
    dart.assert(dart.notNull(exports._globalState.topEventLoop[_activeJsAsyncCount]) >= 0);
  }
  dart.fn(leaveJsAsync);
  function isWorker() {
    return exports._globalState.isWorker;
  }
  dart.fn(isWorker, core.bool, []);
  function _currentIsolate() {
    return exports._globalState.currentContext;
  }
  dart.fn(_currentIsolate, function() {
    return dart.definiteFunctionType(_IsolateContext, []);
  });
  function startRootIsolate(entry, args) {
    args = args;
    if (args == null)
      args = [];
    if (!dart.is(args, core.List)) {
      dart.throw(new core.ArgumentError(("Arguments to main must be a List: " + args)));
    }
    exports._globalState = new _Manager(dart.as(entry, core.Function));
    if (dart.notNull(exports._globalState.isWorker))
      return;
    var rootContext = new _IsolateContext();
    exports._globalState.rootContext = rootContext;
    exports._globalState.currentContext = rootContext;
    if (dart.is(entry, _MainFunctionArgs)) {
      rootContext.eval(dart.fn(function() {
        dart.dcall(entry, args);
      }));
    } else if (dart.is(entry, _MainFunctionArgsMessage)) {
      rootContext.eval(dart.fn(function() {
        dart.dcall(entry, args, null);
      }));
    } else {
      rootContext.eval(dart.as(entry, core.Function));
    }
    exports._globalState.topEventLoop.run();
  }
  dart.fn(startRootIsolate, dart.void, [dart.dynamic, dart.dynamic]);
  dart.copyProperties(exports, {
    get _globalState() {
      return dart.as(dart.globalState, _Manager);
    },
    set _globalState(val) {
      dart.globalState = val;
    }
  });
  var _nativeDetectEnvironment = Symbol('_nativeDetectEnvironment');
  var _nativeInitWorkerMessageHandler = Symbol('_nativeInitWorkerMessageHandler');
  var _Manager = function($__super) {
    var $__5;
    function _Manager() {
      $traceurRuntime.superConstructor(_Manager).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Manager, ($__5 = {}, Object.defineProperty($__5, "useWorkers", {
      get: function() {
        return this.supportsWorkers;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "_Manager", {
      value: function(entry) {
        this.entry = entry;
        this.nextIsolateId = 0;
        this.currentManagerId = 0;
        this.nextManagerId = 1;
        this.currentContext = null;
        this.rootContext = null;
        this.topEventLoop = null;
        this.fromCommandLine = null;
        this.isWorker = null;
        this.supportsWorkers = null;
        this.isolates = null;
        this.mainManager = null;
        this.managers = null;
        this[_nativeDetectEnvironment]();
        this.topEventLoop = new _EventLoop();
        this.isolates = core.Map$(core.int, _IsolateContext).new();
        this.managers = core.Map$(core.int, dart.dynamic).new();
        if (dart.notNull(this.isWorker)) {
          this.mainManager = new _MainManagerStub();
          this[_nativeInitWorkerMessageHandler]();
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _nativeDetectEnvironment, {
      value: function() {
        var isWindowDefined = exports.globalWindow != null;
        var isWorkerDefined = exports.globalWorker != null;
        this.isWorker = !dart.notNull(isWindowDefined) && dart.notNull(exports.globalPostMessageDefined);
        this.supportsWorkers = dart.notNull(this.isWorker) || dart.notNull(isWorkerDefined) && IsolateNatives.thisScript != null;
        this.fromCommandLine = !dart.notNull(isWindowDefined) && !dart.notNull(this.isWorker);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _nativeInitWorkerMessageHandler, {
      value: function() {
        var func = (function(f, a) {
          return function(e) {
            f(a, e);
          };
        })(IsolateNatives._processWorkerMessage, this.mainManager);
        self.onmessage = func;
        self.dartPrint = self.dartPrint || (function(serialize) {
          return function(object) {
            if (self.console && self.console.log) {
              self.console.log(object);
            } else {
              self.postMessage(serialize(object));
            }
          };
        })(_Manager._serializePrintMessage);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "maybeCloseWorker", {
      value: function() {
        if (dart.notNull(this.isWorker) && dart.notNull(this.isolates.isEmpty) && this.topEventLoop[_activeJsAsyncCount] == 0) {
          this.mainManager.postMessage(_serializeMessage(dart.map({command: 'close'})));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {_serializePrintMessage: function(object) {
        return _serializeMessage(dart.map({
          command: "print",
          msg: object
        }));
      }}, $__super);
  }(core.Object);
  dart.setSignature(_Manager, {
    constructors: function() {
      return ({_Manager: [_Manager, [core.Function]]});
    },
    methods: function() {
      var $__5;
      return (($__5 = {}, Object.defineProperty($__5, _nativeDetectEnvironment, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _nativeInitWorkerMessageHandler, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "maybeCloseWorker", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5));
    },
    statics: function() {
      return ({_serializePrintMessage: [dart.dynamic, [dart.dynamic]]});
    },
    names: ['_serializePrintMessage']
  });
  var _scheduledControlEvents = Symbol('_scheduledControlEvents');
  var _isExecutingEvent = Symbol('_isExecutingEvent');
  var _updateGlobalState = Symbol('_updateGlobalState');
  var _setGlobals = Symbol('_setGlobals');
  var _addRegistration = Symbol('_addRegistration');
  var _close = Symbol('_close');
  var _IsolateContext = function($__super) {
    var $__5;
    function _IsolateContext() {
      $traceurRuntime.superConstructor(_IsolateContext).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_IsolateContext, ($__5 = {}, Object.defineProperty($__5, "_IsolateContext", {
      value: function() {
        this.id = (function() {
          var o = exports._globalState,
              x = o.nextIsolateId;
          o.nextIsolateId = dart.notNull(x) + 1;
          return x;
        })();
        this.ports = core.Map$(core.int, RawReceivePortImpl).new();
        this.weakPorts = core.Set$(core.int).new();
        this.isolateStatics = _foreign_helper.JS_CREATE_ISOLATE();
        this.controlPort = new RawReceivePortImpl._controlPort();
        this.pauseCapability = isolate.Capability.new();
        this.terminateCapability = isolate.Capability.new();
        this.delayedEvents = dart.list([], _IsolateEvent);
        this.pauseTokens = core.Set$(isolate.Capability).new();
        this.errorPorts = core.Set$(isolate.SendPort).new();
        this.initialized = false;
        this.isPaused = false;
        this.doneHandlers = null;
        this[_scheduledControlEvents] = null;
        this[_isExecutingEvent] = false;
        this.errorsAreFatal = true;
        this.registerWeak(this.controlPort[_id], this.controlPort);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "addPause", {
      value: function(authentification, resume) {
        if (!dart.equals(this.pauseCapability, authentification))
          return;
        if (dart.notNull(this.pauseTokens.add(resume)) && !dart.notNull(this.isPaused)) {
          this.isPaused = true;
        }
        this[_updateGlobalState]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "removePause", {
      value: function(resume) {
        if (!dart.notNull(this.isPaused))
          return;
        this.pauseTokens.remove(resume);
        if (dart.notNull(this.pauseTokens.isEmpty)) {
          while (dart.notNull(this.delayedEvents[dartx.isNotEmpty])) {
            var event = this.delayedEvents[dartx.removeLast]();
            exports._globalState.topEventLoop.prequeue(event);
          }
          this.isPaused = false;
        }
        this[_updateGlobalState]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "addDoneListener", {
      value: function(responsePort) {
        if (this.doneHandlers == null) {
          this.doneHandlers = [];
        }
        if (dart.notNull(dart.as(dart.dsend(this.doneHandlers, 'contains', responsePort), core.bool)))
          return;
        dart.dsend(this.doneHandlers, 'add', responsePort);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "removeDoneListener", {
      value: function(responsePort) {
        if (this.doneHandlers == null)
          return;
        dart.dsend(this.doneHandlers, 'remove', responsePort);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "setErrorsFatal", {
      value: function(authentification, errorsAreFatal) {
        if (!dart.equals(this.terminateCapability, authentification))
          return;
        this.errorsAreFatal = errorsAreFatal;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handlePing", {
      value: function(responsePort, pingType) {
        if (pingType == isolate.Isolate.IMMEDIATE || pingType == isolate.Isolate.BEFORE_NEXT_EVENT && !dart.notNull(this[_isExecutingEvent])) {
          responsePort.send(null);
          return;
        }
        function respond() {
          responsePort.send(null);
        }
        dart.fn(respond, dart.void, []);
        if (pingType == isolate.Isolate.AS_EVENT) {
          exports._globalState.topEventLoop.enqueue(this, respond, "ping");
          return;
        }
        dart.assert(pingType == isolate.Isolate.BEFORE_NEXT_EVENT);
        if (this[_scheduledControlEvents] == null) {
          this[_scheduledControlEvents] = collection.Queue.new();
        }
        dart.dsend(this[_scheduledControlEvents], 'addLast', respond);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handleKill", {
      value: function(authentification, priority) {
        if (!dart.equals(this.terminateCapability, authentification))
          return;
        if (priority == isolate.Isolate.IMMEDIATE || priority == isolate.Isolate.BEFORE_NEXT_EVENT && !dart.notNull(this[_isExecutingEvent])) {
          this.kill();
          return;
        }
        if (priority == isolate.Isolate.AS_EVENT) {
          exports._globalState.topEventLoop.enqueue(this, dart.bind(this, 'kill'), "kill");
          return;
        }
        dart.assert(priority == isolate.Isolate.BEFORE_NEXT_EVENT);
        if (this[_scheduledControlEvents] == null) {
          this[_scheduledControlEvents] = collection.Queue.new();
        }
        dart.dsend(this[_scheduledControlEvents], 'addLast', dart.bind(this, 'kill'));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "addErrorListener", {
      value: function(port) {
        this.errorPorts.add(port);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "removeErrorListener", {
      value: function(port) {
        this.errorPorts.remove(port);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handleUncaughtError", {
      value: function(error, stackTrace) {
        if (dart.notNull(this.errorPorts.isEmpty)) {
          if (dart.notNull(this.errorsAreFatal) && dart.notNull(core.identical(this, exports._globalState.rootContext))) {
            return;
          }
          if (self.console && self.console.error) {
            self.console.error(error, stackTrace);
          } else {
            core.print(error);
            if (stackTrace != null)
              core.print(stackTrace);
          }
          return;
        }
        var message = core.List.new(2);
        message[dartx.set](0, dart.toString(error));
        message[dartx.set](1, stackTrace == null ? null : dart.toString(stackTrace));
        var $__9 = true;
        var $__10 = false;
        var $__11 = undefined;
        try {
          for (var $__7 = void 0,
              $__6 = (this.errorPorts)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
            var port = $__7.value;
            port.send(message);
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
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "eval", {
      value: function(code) {
        var old = exports._globalState.currentContext;
        exports._globalState.currentContext = this;
        this[_setGlobals]();
        var result = null;
        this[_isExecutingEvent] = true;
        try {
          result = dart.dcall(code);
        } catch (e) {
          var s = dart.stackTrace(e);
          this.handleUncaughtError(e, s);
          if (dart.notNull(this.errorsAreFatal)) {
            this.kill();
            if (dart.notNull(core.identical(this, exports._globalState.rootContext))) {
              throw e;
            }
          }
        } finally {
          this[_isExecutingEvent] = false;
          exports._globalState.currentContext = old;
          if (old != null)
            old[_setGlobals]();
          if (this[_scheduledControlEvents] != null) {
            while (dart.notNull(dart.as(dart.dload(this[_scheduledControlEvents], 'isNotEmpty'), core.bool))) {
              dart.dcall(dart.dsend(this[_scheduledControlEvents], 'removeFirst'));
            }
          }
        }
        return result;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _setGlobals, {
      value: function() {
        _foreign_helper.JS_SET_CURRENT_ISOLATE(this.isolateStatics);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handleControlMessage", {
      value: function(message) {
        switch (dart.dindex(message, 0)) {
          case "pause":
            {
              this.addPause(dart.as(dart.dindex(message, 1), isolate.Capability), dart.as(dart.dindex(message, 2), isolate.Capability));
              break;
            }
          case "resume":
            {
              this.removePause(dart.as(dart.dindex(message, 1), isolate.Capability));
              break;
            }
          case 'add-ondone':
            {
              this.addDoneListener(dart.as(dart.dindex(message, 1), isolate.SendPort));
              break;
            }
          case 'remove-ondone':
            {
              this.removeDoneListener(dart.as(dart.dindex(message, 1), isolate.SendPort));
              break;
            }
          case 'set-errors-fatal':
            {
              this.setErrorsFatal(dart.as(dart.dindex(message, 1), isolate.Capability), dart.as(dart.dindex(message, 2), core.bool));
              break;
            }
          case "ping":
            {
              this.handlePing(dart.as(dart.dindex(message, 1), isolate.SendPort), dart.as(dart.dindex(message, 2), core.int));
              break;
            }
          case "kill":
            {
              this.handleKill(dart.as(dart.dindex(message, 1), isolate.Capability), dart.as(dart.dindex(message, 2), core.int));
              break;
            }
          case "getErrors":
            {
              this.addErrorListener(dart.as(dart.dindex(message, 1), isolate.SendPort));
              break;
            }
          case "stopErrors":
            {
              this.removeErrorListener(dart.as(dart.dindex(message, 1), isolate.SendPort));
              break;
            }
          default:
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "lookup", {
      value: function(portId) {
        return this.ports.get(portId);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _addRegistration, {
      value: function(portId, port) {
        if (dart.notNull(this.ports.containsKey(portId))) {
          dart.throw(core.Exception.new("Registry: ports must be registered only once."));
        }
        this.ports.set(portId, port);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "register", {
      value: function(portId, port) {
        this[_addRegistration](portId, port);
        this[_updateGlobalState]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerWeak", {
      value: function(portId, port) {
        this.weakPorts.add(portId);
        this[_addRegistration](portId, port);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _updateGlobalState, {
      value: function() {
        if (dart.notNull(this.ports.length) - dart.notNull(this.weakPorts.length) > 0 || dart.notNull(this.isPaused) || !dart.notNull(this.initialized)) {
          exports._globalState.isolates.set(this.id, this);
        } else {
          this.kill();
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "kill", {
      value: function() {
        if (this[_scheduledControlEvents] != null) {
          dart.dsend(this[_scheduledControlEvents], 'clear');
        }
        var $__9 = true;
        var $__10 = false;
        var $__11 = undefined;
        try {
          for (var $__7 = void 0,
              $__6 = (this.ports.values)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
            var port = $__7.value;
            {
              port[_close]();
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
        this.ports.clear();
        this.weakPorts.clear();
        exports._globalState.isolates.remove(this.id);
        this.errorPorts.clear();
        if (this.doneHandlers != null) {
          var $__16 = true;
          var $__17 = false;
          var $__18 = undefined;
          try {
            for (var $__14 = void 0,
                $__13 = (dart.as(this.doneHandlers, core.Iterable$(isolate.SendPort)))[Symbol.iterator](); !($__16 = ($__14 = $__13.next()).done); $__16 = true) {
              var port$__21 = $__14.value;
              {
                port$__21.send(null);
              }
            }
          } catch ($__19) {
            $__17 = true;
            $__18 = $__19;
          } finally {
            try {
              if (!$__16 && $__13.return != null) {
                $__13.return();
              }
            } finally {
              if ($__17) {
                throw $__18;
              }
            }
          }
          this.doneHandlers = null;
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "unregister", {
      value: function(portId) {
        this.ports.remove(portId);
        this.weakPorts.remove(portId);
        this[_updateGlobalState]();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(core.Object);
  _IsolateContext[dart.implements] = function() {
    return [_foreign_helper.IsolateContext];
  };
  dart.setSignature(_IsolateContext, {
    constructors: function() {
      return ({_IsolateContext: [_IsolateContext, []]});
    },
    methods: function() {
      var $__5;
      return (($__5 = {}, Object.defineProperty($__5, "addPause", {
        value: [dart.void, [isolate.Capability, isolate.Capability]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "removePause", {
        value: [dart.void, [isolate.Capability]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "addDoneListener", {
        value: [dart.void, [isolate.SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "removeDoneListener", {
        value: [dart.void, [isolate.SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "setErrorsFatal", {
        value: [dart.void, [isolate.Capability, core.bool]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "handlePing", {
        value: [dart.void, [isolate.SendPort, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "handleKill", {
        value: [dart.void, [isolate.Capability, core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "addErrorListener", {
        value: [dart.void, [isolate.SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "removeErrorListener", {
        value: [dart.void, [isolate.SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "handleUncaughtError", {
        value: [dart.void, [dart.dynamic, core.StackTrace]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "eval", {
        value: [dart.dynamic, [core.Function]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _setGlobals, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "handleControlMessage", {
        value: [dart.void, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "lookup", {
        value: [RawReceivePortImpl, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addRegistration, {
        value: [dart.void, [core.int, RawReceivePortImpl]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "register", {
        value: [dart.void, [core.int, RawReceivePortImpl]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "registerWeak", {
        value: [dart.void, [core.int, RawReceivePortImpl]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _updateGlobalState, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "kill", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "unregister", {
        value: [dart.void, [core.int]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5));
    }
  });
  var _runHelper = Symbol('_runHelper');
  var _EventLoop = function($__super) {
    var $__5;
    function _EventLoop() {
      $traceurRuntime.superConstructor(_EventLoop).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_EventLoop, ($__5 = {}, Object.defineProperty($__5, "_EventLoop", {
      value: function() {
        this.events = collection.Queue$(_IsolateEvent).new();
        this[_activeJsAsyncCount] = 0;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "enqueue", {
      value: function(isolate, fn, msg) {
        this.events.addLast(new _IsolateEvent(dart.as(isolate, _IsolateContext), dart.as(fn, core.Function), dart.as(msg, core.String)));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "prequeue", {
      value: function(event) {
        this.events.addFirst(event);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "dequeue", {
      value: function() {
        if (dart.notNull(this.events.isEmpty))
          return null;
        return this.events.removeFirst();
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "checkOpenReceivePortsFromCommandLine", {
      value: function() {
        if (exports._globalState.rootContext != null && dart.notNull(exports._globalState.isolates.containsKey(exports._globalState.rootContext.id)) && dart.notNull(exports._globalState.fromCommandLine) && dart.notNull(exports._globalState.rootContext.ports.isEmpty)) {
          dart.throw(core.Exception.new("Program exited with open ReceivePorts."));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runIteration", {
      value: function() {
        var event = this.dequeue();
        if (event == null) {
          this.checkOpenReceivePortsFromCommandLine();
          exports._globalState.maybeCloseWorker();
          return false;
        }
        event.process();
        return true;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _runHelper, {
      value: function() {
        if (exports.globalWindow != null) {
          var next = (function() {
            if (!dart.notNull(this.runIteration()))
              return;
            async.Timer.run(next);
          }).bind(this);
          dart.fn(next);
          next();
        } else {
          while (dart.notNull(this.runIteration())) {}
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "run", {
      value: function() {
        if (!dart.notNull(exports._globalState.isWorker)) {
          this[_runHelper]();
        } else {
          try {
            this[_runHelper]();
          } catch (e) {
            var trace = dart.stackTrace(e);
            exports._globalState.mainManager.postMessage(_serializeMessage(dart.map({
              command: 'error',
              msg: (e + "\n" + trace)
            })));
          }
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(core.Object);
  dart.setSignature(_EventLoop, {
    constructors: function() {
      return ({_EventLoop: [_EventLoop, []]});
    },
    methods: function() {
      var $__5;
      return (($__5 = {}, Object.defineProperty($__5, "enqueue", {
        value: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "prequeue", {
        value: [dart.void, [_IsolateEvent]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "dequeue", {
        value: [_IsolateEvent, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "checkOpenReceivePortsFromCommandLine", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "runIteration", {
        value: [core.bool, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _runHelper, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "run", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5));
    }
  });
  var _IsolateEvent = function($__super) {
    function _IsolateEvent() {
      $traceurRuntime.superConstructor(_IsolateEvent).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_IsolateEvent, {
      _IsolateEvent: function(isolate, fn, message) {
        this.isolate = isolate;
        this.fn = fn;
        this.message = message;
      },
      process: function() {
        if (dart.notNull(this.isolate.isPaused)) {
          this.isolate.delayedEvents[dartx.add](this);
          return;
        }
        this.isolate.eval(this.fn);
      }
    }, {}, $__super);
  }(core.Object);
  dart.setSignature(_IsolateEvent, {
    constructors: function() {
      return ({_IsolateEvent: [_IsolateEvent, [_IsolateContext, core.Function, core.String]]});
    },
    methods: function() {
      return ({process: [dart.void, []]});
    }
  });
  dart.defineLazyProperties(exports, {get _global() {
      return typeof global == 'undefined' ? self : global;
    }});
  var _MainManagerStub = function($__super) {
    function _MainManagerStub() {
      $traceurRuntime.superConstructor(_MainManagerStub).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_MainManagerStub, {postMessage: function(msg) {
        exports._global.postMessage(msg);
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(_MainManagerStub, {methods: function() {
      return ({postMessage: [dart.void, [dart.dynamic]]});
    }});
  var _SPAWNED_SIGNAL = "spawned";
  var _SPAWN_FAILED_SIGNAL = "spawn failed";
  dart.copyProperties(exports, {
    get globalWindow() {
      return exports._global.window;
    },
    get globalWorker() {
      return exports._global.Worker;
    },
    get globalPostMessageDefined() {
      return !!exports._global.postMessage;
    }
  });
  var _MainFunction = dart.typedef('_MainFunction', function() {
    return dart.functionType(dart.dynamic, []);
  });
  var _MainFunctionArgs = dart.typedef('_MainFunctionArgs', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var _MainFunctionArgsMessage = dart.typedef('_MainFunctionArgsMessage', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]);
  });
  var IsolateNatives = function($__super) {
    function IsolateNatives() {
      $traceurRuntime.superConstructor(IsolateNatives).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(IsolateNatives, {}, {
      computeThisScript: function() {
        var currentScript = document.currentScript;
        if (currentScript != null) {
          return String(currentScript.src);
        }
        if (dart.notNull(_js_helper.Primitives.isD8))
          return IsolateNatives.computeThisScriptD8();
        if (dart.notNull(_js_helper.Primitives.isJsshell))
          return IsolateNatives.computeThisScriptJsshell();
        if (exports._globalState != null && dart.notNull(exports._globalState.isWorker)) {
          return IsolateNatives.computeThisScriptFromTrace();
        }
        return null;
      },
      computeThisScriptJsshell: function() {
        return dart.as(thisFilename(), core.String);
      },
      computeThisScriptD8: function() {
        return IsolateNatives.computeThisScriptFromTrace();
      },
      computeThisScriptFromTrace: function() {
        var stack = new Error().stack;
        if (stack == null) {
          stack = (function() {
            try {
              throw new Error();
            } catch (e) {
              return e.stack;
            }
          })();
          if (stack == null)
            dart.throw(new core.UnsupportedError('No stack trace'));
        }
        var pattern = null,
            matches = null;
        pattern = new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$", "m");
        matches = stack.match(pattern);
        if (matches != null)
          return matches[1];
        pattern = new RegExp("^[^@]*@(.*):[0-9]*$", "m");
        matches = stack.match(pattern);
        if (matches != null)
          return matches[1];
        dart.throw(new core.UnsupportedError(("Cannot extract URI from \"" + stack + "\"")));
      },
      _getEventData: function(e) {
        return e.data;
      },
      _processWorkerMessage: function(sender, e) {
        var msg = _deserializeMessage(IsolateNatives._getEventData(e));
        switch (dart.dindex(msg, 'command')) {
          case 'start':
            {
              exports._globalState.currentManagerId = dart.as(dart.dindex(msg, 'id'), core.int);
              var functionName = dart.as(dart.dindex(msg, 'functionName'), core.String);
              var entryPoint = functionName == null ? exports._globalState.entry : dart.as(IsolateNatives._getJSFunctionFromName(functionName), core.Function);
              var args = dart.dindex(msg, 'args');
              var message = _deserializeMessage(dart.dindex(msg, 'msg'));
              var isSpawnUri = dart.dindex(msg, 'isSpawnUri');
              var startPaused = dart.dindex(msg, 'startPaused');
              var replyTo = _deserializeMessage(dart.dindex(msg, 'replyTo'));
              var context = new _IsolateContext();
              exports._globalState.topEventLoop.enqueue(context, dart.fn(function() {
                IsolateNatives._startIsolate(entryPoint, dart.as(args, core.List$(core.String)), message, dart.as(isSpawnUri, core.bool), dart.as(startPaused, core.bool), dart.as(replyTo, isolate.SendPort));
              }), 'worker-start');
              exports._globalState.currentContext = context;
              exports._globalState.topEventLoop.run();
              break;
            }
          case 'spawn-worker':
            {
              if (IsolateNatives.enableSpawnWorker != null)
                IsolateNatives.handleSpawnWorkerRequest(msg);
              break;
            }
          case 'message':
            {
              var port = dart.as(dart.dindex(msg, 'port'), isolate.SendPort);
              if (port != null) {
                dart.dsend(dart.dindex(msg, 'port'), 'send', dart.dindex(msg, 'msg'));
              }
              exports._globalState.topEventLoop.run();
              break;
            }
          case 'close':
            {
              exports._globalState.managers.remove(IsolateNatives.workerIds.get(sender));
              sender.terminate();
              exports._globalState.topEventLoop.run();
              break;
            }
          case 'log':
            {
              IsolateNatives._log(dart.dindex(msg, 'msg'));
              break;
            }
          case 'print':
            {
              if (dart.notNull(exports._globalState.isWorker)) {
                exports._globalState.mainManager.postMessage(_serializeMessage(dart.map({
                  command: 'print',
                  msg: msg
                })));
              } else {
                core.print(dart.dindex(msg, 'msg'));
              }
              break;
            }
          case 'error':
            {
              dart.throw(dart.dindex(msg, 'msg'));
            }
        }
      },
      handleSpawnWorkerRequest: function(msg) {
        var replyPort = dart.dindex(msg, 'replyPort');
        IsolateNatives.spawn(dart.as(dart.dindex(msg, 'functionName'), core.String), dart.as(dart.dindex(msg, 'uri'), core.String), dart.as(dart.dindex(msg, 'args'), core.List$(core.String)), dart.dindex(msg, 'msg'), false, dart.as(dart.dindex(msg, 'isSpawnUri'), core.bool), dart.as(dart.dindex(msg, 'startPaused'), core.bool)).then(dart.fn(function(msg) {
          dart.dsend(replyPort, 'send', msg);
        }), {onError: dart.fn(function(errorMessage) {
            dart.dsend(replyPort, 'send', [_SPAWN_FAILED_SIGNAL, errorMessage]);
          }, dart.dynamic, [core.String])});
      },
      _log: function(msg) {
        if (dart.notNull(exports._globalState.isWorker)) {
          exports._globalState.mainManager.postMessage(_serializeMessage(dart.map({
            command: 'log',
            msg: msg
          })));
        } else {
          try {
            IsolateNatives._consoleLog(msg);
          } catch (e) {
            var trace = dart.stackTrace(e);
            dart.throw(core.Exception.new(trace));
          }
        }
      },
      _consoleLog: function(msg) {
        self.console.log(msg);
      },
      _getJSFunctionFromName: function(functionName) {
        var globalFunctionsContainer = _foreign_helper.JS_EMBEDDED_GLOBAL("", _js_embedded_names.GLOBAL_FUNCTIONS);
        return globalFunctionsContainer[functionName]();
      },
      _getJSFunctionName: function(f) {
        return dart.as(f.$name, core.String);
      },
      _allocate: function(ctor) {
        return new ctor();
      },
      spawnFunction: function(topLevelFunction, message, startPaused) {
        IsolateNatives.enableSpawnWorker = true;
        var name = IsolateNatives._getJSFunctionName(topLevelFunction);
        if (name == null) {
          dart.throw(new core.UnsupportedError("only top-level functions can be spawned."));
        }
        var isLight = false;
        var isSpawnUri = false;
        return IsolateNatives.spawn(name, null, null, message, isLight, isSpawnUri, startPaused);
      },
      spawnUri: function(uri, args, message, startPaused) {
        IsolateNatives.enableSpawnWorker = true;
        var isLight = false;
        var isSpawnUri = true;
        return IsolateNatives.spawn(null, dart.toString(uri), args, message, isLight, isSpawnUri, startPaused);
      },
      spawn: function(functionName, uri, args, message, isLight, isSpawnUri, startPaused) {
        if (uri != null && dart.notNull(uri[dartx.endsWith](".dart"))) {
          uri = dart.notNull(uri) + ".js";
        }
        var port = isolate.ReceivePort.new();
        var completer = async.Completer$(core.List).new();
        port.first.then(dart.fn(function(msg) {
          if (dart.equals(dart.dindex(msg, 0), _SPAWNED_SIGNAL)) {
            completer.complete(msg);
          } else {
            dart.assert(dart.equals(dart.dindex(msg, 0), _SPAWN_FAILED_SIGNAL));
            completer.completeError(dart.dindex(msg, 1));
          }
        }));
        var signalReply = port.sendPort;
        if (dart.notNull(exports._globalState.useWorkers) && !dart.notNull(isLight)) {
          IsolateNatives._startWorker(functionName, uri, args, message, isSpawnUri, startPaused, signalReply, dart.fn(function(message) {
            return completer.completeError(message);
          }, dart.void, [core.String]));
        } else {
          IsolateNatives._startNonWorker(functionName, uri, args, message, isSpawnUri, startPaused, signalReply);
        }
        return completer.future;
      },
      _startWorker: function(functionName, uri, args, message, isSpawnUri, startPaused, replyPort, onError) {
        if (args != null)
          args = core.List$(core.String).from(args);
        if (dart.notNull(exports._globalState.isWorker)) {
          exports._globalState.mainManager.postMessage(_serializeMessage(dart.map({
            command: 'spawn-worker',
            functionName: functionName,
            args: args,
            msg: message,
            uri: uri,
            isSpawnUri: isSpawnUri,
            startPaused: startPaused,
            replyPort: replyPort
          })));
        } else {
          IsolateNatives._spawnWorker(functionName, uri, args, message, isSpawnUri, startPaused, replyPort, onError);
        }
      },
      _startNonWorker: function(functionName, uri, args, message, isSpawnUri, startPaused, replyPort) {
        if (uri != null) {
          dart.throw(new core.UnsupportedError("Currently spawnUri is not supported without web workers."));
        }
        message = _clone(message);
        if (args != null)
          args = core.List$(core.String).from(args);
        exports._globalState.topEventLoop.enqueue(new _IsolateContext(), dart.fn(function() {
          var func = IsolateNatives._getJSFunctionFromName(functionName);
          IsolateNatives._startIsolate(dart.as(func, core.Function), args, message, isSpawnUri, startPaused, replyPort);
        }), 'nonworker start');
      },
      get currentIsolate() {
        var context = dart.as(_foreign_helper.JS_CURRENT_ISOLATE_CONTEXT(), _IsolateContext);
        return new isolate.Isolate(context.controlPort.sendPort, {
          pauseCapability: context.pauseCapability,
          terminateCapability: context.terminateCapability
        });
      },
      _startIsolate: function(topLevel, args, message, isSpawnUri, startPaused, replyTo) {
        var context = dart.as(_foreign_helper.JS_CURRENT_ISOLATE_CONTEXT(), _IsolateContext);
        _js_helper.Primitives.initializeStatics(context.id);
        replyTo.send([_SPAWNED_SIGNAL, context.controlPort.sendPort, context.pauseCapability, context.terminateCapability]);
        function runStartFunction() {
          context.initialized = true;
          if (!dart.notNull(isSpawnUri)) {
            dart.dcall(topLevel, message);
          } else if (dart.is(topLevel, _MainFunctionArgsMessage)) {
            dart.dcall(topLevel, args, message);
          } else if (dart.is(topLevel, _MainFunctionArgs)) {
            dart.dcall(topLevel, args);
          } else {
            dart.dcall(topLevel);
          }
        }
        dart.fn(runStartFunction, dart.void, []);
        if (dart.notNull(startPaused)) {
          context.addPause(context.pauseCapability, context.pauseCapability);
          exports._globalState.topEventLoop.enqueue(context, runStartFunction, 'start isolate');
        } else {
          runStartFunction();
        }
      },
      _spawnWorker: function(functionName, uri, args, message, isSpawnUri, startPaused, replyPort, onError) {
        if (uri == null)
          uri = IsolateNatives.thisScript;
        var worker = new Worker(uri);
        var onerrorTrampoline = (function(f, u, c) {
          return function(e) {
            return f(e, u, c);
          };
        })(IsolateNatives.workerOnError, uri, onError);
        worker.onerror = onerrorTrampoline;
        var processWorkerMessageTrampoline = (function(f, a) {
          return function(e) {
            e.onerror = null;
            return f(a, e);
          };
        })(IsolateNatives._processWorkerMessage, worker);
        worker.onmessage = processWorkerMessageTrampoline;
        var o = exports._globalState;
        var workerId = o.nextManagerId;
        o.nextManagerId = dart.notNull(workerId) + 1;
        IsolateNatives.workerIds.set(worker, workerId);
        exports._globalState.managers.set(workerId, worker);
        worker.postMessage(_serializeMessage(dart.map({
          command: 'start',
          id: workerId,
          replyTo: _serializeMessage(replyPort),
          args: args,
          msg: _serializeMessage(message),
          isSpawnUri: isSpawnUri,
          startPaused: startPaused,
          functionName: functionName
        })));
      },
      workerOnError: function(event, uri, onError) {
        event.preventDefault();
        var message = dart.as(event.message, core.String);
        if (message == null) {
          message = ("Error spawning worker for " + uri);
        } else {
          message = ("Error spawning worker for " + uri + " (" + message + ")");
        }
        onError(message);
        return true;
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(IsolateNatives, {
    statics: function() {
      return ({
        computeThisScript: [core.String, []],
        computeThisScriptJsshell: [core.String, []],
        computeThisScriptD8: [core.String, []],
        computeThisScriptFromTrace: [core.String, []],
        _getEventData: [dart.dynamic, [dart.dynamic]],
        _processWorkerMessage: [dart.void, [dart.dynamic, dart.dynamic]],
        handleSpawnWorkerRequest: [dart.dynamic, [dart.dynamic]],
        _log: [dart.dynamic, [dart.dynamic]],
        _consoleLog: [dart.void, [dart.dynamic]],
        _getJSFunctionFromName: [dart.dynamic, [core.String]],
        _getJSFunctionName: [core.String, [core.Function]],
        _allocate: [dart.dynamic, [dart.dynamic]],
        spawnFunction: [async.Future$(core.List), [dart.functionType(dart.void, [dart.dynamic]), dart.dynamic, core.bool]],
        spawnUri: [async.Future$(core.List), [core.Uri, core.List$(core.String), dart.dynamic, core.bool]],
        spawn: [async.Future$(core.List), [core.String, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, core.bool]],
        _startWorker: [dart.void, [core.String, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort, dart.functionType(dart.void, [core.String])]],
        _startNonWorker: [dart.void, [core.String, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort]],
        _startIsolate: [dart.void, [core.Function, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort]],
        _spawnWorker: [dart.void, [dart.dynamic, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort, dart.functionType(dart.void, [core.String])]],
        workerOnError: [core.bool, [dart.dynamic, core.String, dart.functionType(dart.void, [core.String])]]
      });
    },
    names: ['computeThisScript', 'computeThisScriptJsshell', 'computeThisScriptD8', 'computeThisScriptFromTrace', '_getEventData', '_processWorkerMessage', 'handleSpawnWorkerRequest', '_log', '_consoleLog', '_getJSFunctionFromName', '_getJSFunctionName', '_allocate', 'spawnFunction', 'spawnUri', 'spawn', '_startWorker', '_startNonWorker', '_startIsolate', '_spawnWorker', 'workerOnError']
  });
  IsolateNatives.enableSpawnWorker = null;
  dart.defineLazyProperties(IsolateNatives, {
    get thisScript() {
      return IsolateNatives.computeThisScript();
    },
    set thisScript(_) {},
    get workerIds() {
      return new (core.Expando$(core.int))();
    }
  });
  var _checkReplyTo = Symbol('_checkReplyTo');
  var _BaseSendPort = function($__super) {
    var $__5;
    function _BaseSendPort() {
      $traceurRuntime.superConstructor(_BaseSendPort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_BaseSendPort, ($__5 = {}, Object.defineProperty($__5, "_BaseSendPort", {
      value: function(isolateId) {
        this[_isolateId] = isolateId;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _checkReplyTo, {
      value: function(replyTo) {
        if (replyTo != null && !dart.is(replyTo, _NativeJsSendPort) && !dart.is(replyTo, _WorkerSendPort)) {
          dart.throw(core.Exception.new("SendPort.send: Illegal replyTo port type"));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(core.Object);
  _BaseSendPort[dart.implements] = function() {
    return [isolate.SendPort];
  };
  dart.setSignature(_BaseSendPort, {
    constructors: function() {
      return ({_BaseSendPort: [_BaseSendPort, [core.int]]});
    },
    methods: function() {
      var $__5;
      return (($__5 = {}, Object.defineProperty($__5, _checkReplyTo, {
        value: [dart.void, [isolate.SendPort]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5));
    }
  });
  var _isClosed = Symbol('_isClosed');
  var _add = Symbol('_add');
  var _NativeJsSendPort = function($__super) {
    var $__5;
    function _NativeJsSendPort() {
      $traceurRuntime.superConstructor(_NativeJsSendPort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_NativeJsSendPort, ($__5 = {}, Object.defineProperty($__5, "_NativeJsSendPort", {
      value: function(receivePort, isolateId) {
        this[_receivePort] = receivePort;
        $traceurRuntime.superGet(this, _NativeJsSendPort.prototype, "_BaseSendPort").call(this, isolateId);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "send", {
      value: function(message) {
        var $__4 = this;
        var isolate = exports._globalState.isolates.get(this[_isolateId]);
        if (isolate == null)
          return;
        if (dart.notNull(this[_receivePort][_isClosed]))
          return;
        var msg = _clone(message);
        if (dart.equals(isolate.controlPort, this[_receivePort])) {
          isolate.handleControlMessage(msg);
          return;
        }
        exports._globalState.topEventLoop.enqueue(isolate, dart.fn((function() {
          if (!dart.notNull($__4[_receivePort][_isClosed])) {
            $__4[_receivePort][_add](msg);
          }
        }).bind(this)), ("receive " + message));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, '==', {
      value: function(other) {
        return dart.is(other, _NativeJsSendPort) && dart.equals(this[_receivePort], dart.dload(other, _receivePort));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "hashCode", {
      get: function() {
        return this[_receivePort][_id];
      },
      configurable: true,
      enumerable: true
    }), $__5), {}, $__super);
  }(_BaseSendPort);
  _NativeJsSendPort[dart.implements] = function() {
    return [isolate.SendPort];
  };
  dart.setSignature(_NativeJsSendPort, {
    constructors: function() {
      return ({_NativeJsSendPort: [_NativeJsSendPort, [RawReceivePortImpl, core.int]]});
    },
    methods: function() {
      return ({send: [dart.void, [dart.dynamic]]});
    }
  });
  var _WorkerSendPort = function($__super) {
    var $__5;
    function _WorkerSendPort() {
      $traceurRuntime.superConstructor(_WorkerSendPort).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_WorkerSendPort, ($__5 = {}, Object.defineProperty($__5, "_WorkerSendPort", {
      value: function(workerId, isolateId, receivePortId) {
        this[_workerId] = workerId;
        this[_receivePortId] = receivePortId;
        $traceurRuntime.superGet(this, _WorkerSendPort.prototype, "_BaseSendPort").call(this, isolateId);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "send", {
      value: function(message) {
        var workerMessage = _serializeMessage(dart.map({
          command: 'message',
          port: this,
          msg: message
        }));
        if (dart.notNull(exports._globalState.isWorker)) {
          exports._globalState.mainManager.postMessage(workerMessage);
        } else {
          var manager = exports._globalState.managers.get(this[_workerId]);
          if (manager != null) {
            manager.postMessage(workerMessage);
          }
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, '==', {
      value: function(other) {
        return dart.is(other, _WorkerSendPort) && dart.equals(this[_workerId], dart.dload(other, _workerId)) && dart.equals(this[_isolateId], dart.dload(other, _isolateId)) && dart.equals(this[_receivePortId], dart.dload(other, _receivePortId));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "hashCode", {
      get: function() {
        return dart.notNull(this[_workerId]) << 16 ^ dart.notNull(this[_isolateId]) << 8 ^ dart.notNull(this[_receivePortId]);
      },
      configurable: true,
      enumerable: true
    }), $__5), {}, $__super);
  }(_BaseSendPort);
  _WorkerSendPort[dart.implements] = function() {
    return [isolate.SendPort];
  };
  dart.setSignature(_WorkerSendPort, {
    constructors: function() {
      return ({_WorkerSendPort: [_WorkerSendPort, [core.int, core.int, core.int]]});
    },
    methods: function() {
      return ({send: [dart.void, [dart.dynamic]]});
    }
  });
  var _handler = Symbol('_handler');
  var RawReceivePortImpl = function($__super) {
    var $__5;
    function RawReceivePortImpl() {
      $traceurRuntime.superConstructor(RawReceivePortImpl).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RawReceivePortImpl, ($__5 = {}, Object.defineProperty($__5, "RawReceivePortImpl", {
      value: function(handler) {
        this[_handler] = handler;
        this[_id] = (function() {
          var x = RawReceivePortImpl._nextFreeId;
          RawReceivePortImpl._nextFreeId = dart.notNull(x) + 1;
          return x;
        })();
        this[_isClosed] = false;
        exports._globalState.currentContext.register(this[_id], this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "weak", {
      value: function(handler) {
        this[_handler] = handler;
        this[_id] = (function() {
          var x = RawReceivePortImpl._nextFreeId;
          RawReceivePortImpl._nextFreeId = dart.notNull(x) + 1;
          return x;
        })();
        this[_isClosed] = false;
        exports._globalState.currentContext.registerWeak(this[_id], this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "_controlPort", {
      value: function() {
        this[_handler] = null;
        this[_id] = 0;
        this[_isClosed] = false;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handler", {
      set: function(newHandler) {
        this[_handler] = newHandler;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _close, {
      value: function() {
        this[_isClosed] = true;
        this[_handler] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "close", {
      value: function() {
        if (dart.notNull(this[_isClosed]))
          return;
        this[_isClosed] = true;
        this[_handler] = null;
        exports._globalState.currentContext.unregister(this[_id]);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _add, {
      value: function(dataEvent) {
        if (dart.notNull(this[_isClosed]))
          return;
        dart.dcall(this[_handler], dataEvent);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "sendPort", {
      get: function() {
        return new _NativeJsSendPort(this, exports._globalState.currentContext.id);
      },
      configurable: true,
      enumerable: true
    }), $__5), {}, $__super);
  }(core.Object);
  RawReceivePortImpl[dart.implements] = function() {
    return [isolate.RawReceivePort];
  };
  dart.defineNamedConstructor(RawReceivePortImpl, 'weak');
  dart.defineNamedConstructor(RawReceivePortImpl, '_controlPort');
  dart.setSignature(RawReceivePortImpl, {
    constructors: function() {
      return ({
        RawReceivePortImpl: [RawReceivePortImpl, [core.Function]],
        weak: [RawReceivePortImpl, [core.Function]],
        _controlPort: [RawReceivePortImpl, []]
      });
    },
    methods: function() {
      var $__5;
      return (($__5 = {}, Object.defineProperty($__5, _close, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "close", {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _add, {
        value: [dart.void, [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5));
    }
  });
  RawReceivePortImpl._nextFreeId = 1;
  var _rawPort = Symbol('_rawPort');
  var _controller = Symbol('_controller');
  var ReceivePortImpl = function($__super) {
    function ReceivePortImpl() {
      $traceurRuntime.superConstructor(ReceivePortImpl).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ReceivePortImpl, {
      ReceivePortImpl: function() {
        this.fromRawReceivePort(new RawReceivePortImpl(null));
      },
      weak: function() {
        this.fromRawReceivePort(new RawReceivePortImpl.weak(null));
      },
      fromRawReceivePort: function(rawPort) {
        this[_rawPort] = rawPort;
        this[_controller] = null;
        $traceurRuntime.superGet(this, ReceivePortImpl.prototype, "Stream").call(this);
        this[_controller] = async.StreamController.new({
          onCancel: dart.bind(this, 'close'),
          sync: true
        });
        this[_rawPort].handler = dart.bind(this[_controller], 'add');
      },
      listen: function(onData, opts) {
        var onError = opts && 'onError' in opts ? opts.onError : null;
        var onDone = opts && 'onDone' in opts ? opts.onDone : null;
        var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller].stream.listen(onData, {
          onError: onError,
          onDone: onDone,
          cancelOnError: cancelOnError
        });
      },
      close: function() {
        this[_rawPort].close();
        this[_controller].close();
      },
      get sendPort() {
        return this[_rawPort].sendPort;
      }
    }, {}, $__super);
  }(async.Stream);
  ReceivePortImpl[dart.implements] = function() {
    return [isolate.ReceivePort];
  };
  dart.defineNamedConstructor(ReceivePortImpl, 'weak');
  dart.defineNamedConstructor(ReceivePortImpl, 'fromRawReceivePort');
  dart.setSignature(ReceivePortImpl, {
    constructors: function() {
      return ({
        ReceivePortImpl: [ReceivePortImpl, []],
        weak: [ReceivePortImpl, []],
        fromRawReceivePort: [ReceivePortImpl, [isolate.RawReceivePort]]
      });
    },
    methods: function() {
      return ({
        listen: [async.StreamSubscription, [dart.functionType(dart.void, [dart.dynamic])], {
          onError: core.Function,
          onDone: dart.functionType(dart.void, []),
          cancelOnError: core.bool
        }],
        close: [dart.void, []]
      });
    }
  });
  var _once = Symbol('_once');
  var _inEventLoop = Symbol('_inEventLoop');
  var _handle = Symbol('_handle');
  var TimerImpl = function($__super) {
    function TimerImpl() {
      $traceurRuntime.superConstructor(TimerImpl).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TimerImpl, {
      TimerImpl: function(milliseconds, callback) {
        this[_once] = true;
        this[_inEventLoop] = false;
        this[_handle] = null;
        if (milliseconds == 0 && (!dart.notNull(hasTimer()) || dart.notNull(exports._globalState.isWorker))) {
          var internalCallback = (function() {
            this[_handle] = null;
            callback();
          }).bind(this);
          dart.fn(internalCallback, dart.void, []);
          this[_handle] = 1;
          exports._globalState.topEventLoop.enqueue(exports._globalState.currentContext, internalCallback, 'timer');
          this[_inEventLoop] = true;
        } else if (dart.notNull(hasTimer())) {
          var internalCallback$__22 = (function() {
            this[_handle] = null;
            leaveJsAsync();
            callback();
          }).bind(this);
          dart.fn(internalCallback$__22, dart.void, []);
          enterJsAsync();
          this[_handle] = self.setTimeout(internalCallback$__22, milliseconds);
        } else {
          dart.assert(dart.notNull(milliseconds) > 0);
          dart.throw(new core.UnsupportedError("Timer greater than 0."));
        }
      },
      periodic: function(milliseconds, callback) {
        var $__4 = this;
        this[_once] = false;
        this[_inEventLoop] = false;
        this[_handle] = null;
        if (dart.notNull(hasTimer())) {
          enterJsAsync();
          this[_handle] = self.setInterval(dart.fn((function() {
            callback($__4);
          }).bind(this)), milliseconds);
        } else {
          dart.throw(new core.UnsupportedError("Periodic timer."));
        }
      },
      cancel: function() {
        if (dart.notNull(hasTimer())) {
          if (dart.notNull(this[_inEventLoop])) {
            dart.throw(new core.UnsupportedError("Timer in event loop cannot be canceled."));
          }
          if (this[_handle] == null)
            return;
          leaveJsAsync();
          if (dart.notNull(this[_once])) {
            self.clearTimeout(this[_handle]);
          } else {
            self.clearInterval(this[_handle]);
          }
          this[_handle] = null;
        } else {
          dart.throw(new core.UnsupportedError("Canceling a timer."));
        }
      },
      get isActive() {
        return this[_handle] != null;
      }
    }, {}, $__super);
  }(core.Object);
  TimerImpl[dart.implements] = function() {
    return [async.Timer];
  };
  dart.defineNamedConstructor(TimerImpl, 'periodic');
  dart.setSignature(TimerImpl, {
    constructors: function() {
      return ({
        TimerImpl: [TimerImpl, [core.int, dart.functionType(dart.void, [])]],
        periodic: [TimerImpl, [core.int, dart.functionType(dart.void, [async.Timer])]]
      });
    },
    methods: function() {
      return ({cancel: [dart.void, []]});
    }
  });
  function hasTimer() {
    return self.setTimeout != null;
  }
  dart.fn(hasTimer, core.bool, []);
  var CapabilityImpl = function($__super) {
    var $__5;
    function CapabilityImpl() {
      $traceurRuntime.superConstructor(CapabilityImpl).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CapabilityImpl, ($__5 = {}, Object.defineProperty($__5, "CapabilityImpl", {
      value: function() {
        this._internal(_js_helper.random64());
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "_internal", {
      value: function(id) {
        this[_id] = id;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "hashCode", {
      get: function() {
        var hash = this[_id];
        hash = dart.notNull(hash) >> 0 ^ (dart.notNull(hash) / 4294967296)[dartx.truncate]();
        hash = ~dart.notNull(hash) + (dart.notNull(hash) << 15) & 4294967295;
        hash = dart.notNull(hash) ^ dart.notNull(hash) >> 12;
        hash = dart.notNull(hash) * 5 & 4294967295;
        hash = dart.notNull(hash) ^ dart.notNull(hash) >> 4;
        hash = dart.notNull(hash) * 2057 & 4294967295;
        hash = dart.notNull(hash) ^ dart.notNull(hash) >> 16;
        return hash;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, '==', {
      value: function(other) {
        if (dart.notNull(core.identical(other, this)))
          return true;
        if (dart.is(other, CapabilityImpl)) {
          return core.identical(this[_id], other[_id]);
        }
        return false;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(core.Object);
  CapabilityImpl[dart.implements] = function() {
    return [isolate.Capability];
  };
  dart.defineNamedConstructor(CapabilityImpl, '_internal');
  dart.setSignature(CapabilityImpl, {
    constructors: function() {
      return ({
        CapabilityImpl: [CapabilityImpl, []],
        _internal: [CapabilityImpl, [core.int]]
      });
    },
    methods: function() {
      return ({'==': [core.bool, [core.Object]]});
    }
  });
  exports.enterJsAsync = enterJsAsync;
  exports.leaveJsAsync = leaveJsAsync;
  exports.isWorker = isWorker;
  exports.startRootIsolate = startRootIsolate;
  exports.IsolateNatives = IsolateNatives;
  exports.RawReceivePortImpl = RawReceivePortImpl;
  exports.ReceivePortImpl = ReceivePortImpl;
  exports.TimerImpl = TimerImpl;
  exports.hasTimer = hasTimer;
  exports.CapabilityImpl = CapabilityImpl;
});
