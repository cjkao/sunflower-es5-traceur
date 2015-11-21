dart_library.library('dart/_js_mirrors', null, ["dart/_runtime", 'dart/_internal', 'dart/core', 'dart/mirrors'], [], function(exports, dart, _internal, core, mirrors) {
  'use strict';
  var dartx = dart.dartx;
  function getName(symbol) {
    return _internal.Symbol.getName(dart.as(symbol, _internal.Symbol));
  }
  dart.fn(getName, core.String, [core.Symbol]);
  function getSymbol(name, library) {
    return dart.throw(new core.UnimplementedError("MirrorSystem.getSymbol unimplemented"));
  }
  dart.fn(getSymbol, core.Symbol, [dart.dynamic, dart.dynamic]);
  dart.defineLazyProperties(exports, {get currentJsMirrorSystem() {
      return dart.throw(new core.UnimplementedError("MirrorSystem.currentJsMirrorSystem unimplemented"));
    }});
  function reflect(reflectee) {
    return new JsInstanceMirror._(reflectee);
  }
  dart.fn(reflect, mirrors.InstanceMirror, [dart.dynamic]);
  function reflectType(key) {
    return new JsClassMirror._(key);
  }
  dart.fn(reflectType, mirrors.TypeMirror, [core.Type]);
  dart.defineLazyProperties(exports, {
    get _dart() {
      return dart;
    },
    get _metadata() {
      return exports._dart.metadata;
    }
  });
  function _dload(obj, name) {
    return exports._dart.dload(obj, name);
  }
  dart.fn(_dload, dart.dynamic, [dart.dynamic, core.String]);
  function _dput(obj, name, val) {
    exports._dart.dput(obj, name, val);
  }
  dart.fn(_dput, dart.void, [dart.dynamic, core.String, dart.dynamic]);
  function _dsend(obj, name, args) {
    var $__7;
    return ($__7 = exports._dart).dsend.apply($__7, $traceurRuntime.spread([obj, name], args));
  }
  dart.fn(_dsend, dart.dynamic, [dart.dynamic, core.String, core.List]);
  var _toJsMap = Symbol('_toJsMap');
  var JsInstanceMirror = function($__super) {
    var $__6;
    function JsInstanceMirror() {
      $traceurRuntime.superConstructor(JsInstanceMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsInstanceMirror, ($__6 = {}, Object.defineProperty($__6, "_", {
      value: function(reflectee) {
        this.reflectee = reflectee;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, "type", {
      get: function() {
        return dart.throw(new core.UnimplementedError("ClassMirror.type unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "hasReflectee", {
      get: function() {
        return dart.throw(new core.UnimplementedError("ClassMirror.hasReflectee unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "delegate", {
      value: function(invocation) {
        return dart.throw(new core.UnimplementedError("ClassMirror.delegate unimplemented"));
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, "getField", {
      value: function(symbol) {
        var name = getName(symbol);
        var field = _dload(this.reflectee, name);
        return new JsInstanceMirror._(field);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, "setField", {
      value: function(symbol, value) {
        var name = getName(symbol);
        _dput(this.reflectee, name, value);
        return new JsInstanceMirror._(value);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, "invoke", {
      value: function(symbol, args, namedArgs) {
        if (namedArgs === void 0)
          namedArgs = null;
        var name = getName(symbol);
        if (namedArgs != null) {
          args = core.List.from(args);
          args[dartx.add](this[_toJsMap](namedArgs));
        }
        var result = _dsend(this.reflectee, name, args);
        return new JsInstanceMirror._(result);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, _toJsMap, {
      value: function(map) {
        var obj = {};
        map.forEach(dart.fn(function(key, value) {
          obj[getName(key)] = value;
        }, dart.dynamic, [core.Symbol, dart.dynamic]));
        return obj;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__6), {}, $__super);
  }(core.Object);
  JsInstanceMirror[dart.implements] = function() {
    return [mirrors.InstanceMirror];
  };
  dart.defineNamedConstructor(JsInstanceMirror, '_');
  dart.setSignature(JsInstanceMirror, {
    constructors: function() {
      return ({_: [JsInstanceMirror, [core.Object]]});
    },
    methods: function() {
      var $__6;
      return (($__6 = {}, Object.defineProperty($__6, "delegate", {
        value: [dart.dynamic, [core.Invocation]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__6, "getField", {
        value: [mirrors.InstanceMirror, [core.Symbol]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__6, "setField", {
        value: [mirrors.InstanceMirror, [core.Symbol, core.Object]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__6, "invoke", {
        value: [mirrors.InstanceMirror, [core.Symbol, core.List], [core.Map$(core.Symbol, dart.dynamic)]],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__6, _toJsMap, {
        value: [dart.dynamic, [core.Map$(core.Symbol, dart.dynamic)]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__6));
    }
  });
  var _metadata = Symbol('_metadata');
  var _declarations = Symbol('_declarations');
  var _cls = Symbol('_cls');
  var JsClassMirror = function($__super) {
    function JsClassMirror() {
      $traceurRuntime.superConstructor(JsClassMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsClassMirror, {
      get metadata() {
        return this[_metadata];
      },
      get declarations() {
        return this[_declarations];
      },
      _: function(cls) {
        this[_cls] = cls;
        this.simpleName = core.Symbol.new(cls.name);
        this[_metadata] = null;
        this[_declarations] = null;
        var fn = this[_cls][dart.metadata];
        this[_metadata] = fn == null ? dart.list([], mirrors.InstanceMirror) : core.List$(mirrors.InstanceMirror).from(dart.as(dart.dsend(dart.dcall(fn), 'map', dart.fn(function(i) {
          return new JsInstanceMirror._(i);
        }, JsInstanceMirror, [dart.dynamic])), core.Iterable));
        this[_declarations] = core.Map$(core.Symbol, mirrors.MethodMirror).new();
        this[_declarations].set(this.simpleName, new JsMethodMirror._(this, this[_cls]));
      },
      newInstance: function(constructorName, args, namedArgs) {
        if (namedArgs === void 0)
          namedArgs = null;
        dart.assert(getName(constructorName) == "");
        dart.assert(namedArgs == null || dart.notNull(namedArgs.isEmpty));
        var instance = new (Function.prototype.bind.apply(this[_cls], $traceurRuntime.spread([null], args)))();
        return new JsInstanceMirror._(instance);
      },
      get superinterfaces() {
        var interfaces = this[_cls][dart.implements];
        if (interfaces == null) {
          return dart.list([], mirrors.ClassMirror);
        }
        dart.throw(new core.UnimplementedError("ClassMirror.superinterfaces unimplemented"));
      },
      getField: function(fieldName) {
        return dart.throw(new core.UnimplementedError("ClassMirror.getField unimplemented"));
      },
      invoke: function(memberName, positionalArguments, namedArguments) {
        if (namedArguments === void 0)
          namedArguments = null;
        return dart.throw(new core.UnimplementedError("ClassMirror.invoke unimplemented"));
      },
      isAssignableTo: function(other) {
        return dart.throw(new core.UnimplementedError("ClassMirror.isAssignable unimplemented"));
      },
      isSubclassOf: function(other) {
        return dart.throw(new core.UnimplementedError("ClassMirror.isSubclassOf unimplemented"));
      },
      isSubtypeOf: function(other) {
        return dart.throw(new core.UnimplementedError("ClassMirror.isSubtypeOf unimplemented"));
      },
      setField: function(fieldName, value) {
        return dart.throw(new core.UnimplementedError("ClassMirror.setField unimplemented"));
      },
      get hasReflectedType() {
        return dart.throw(new core.UnimplementedError("ClassMirror.hasReflectedType unimplemented"));
      },
      get instanceMembers() {
        return dart.throw(new core.UnimplementedError("ClassMirror.instanceMembers unimplemented"));
      },
      get isAbstract() {
        return dart.throw(new core.UnimplementedError("ClassMirror.isAbstract unimplemented"));
      },
      get isEnum() {
        return dart.throw(new core.UnimplementedError("ClassMirror.isEnum unimplemented"));
      },
      get isOriginalDeclaration() {
        return dart.throw(new core.UnimplementedError("ClassMirror.isOriginalDeclaration unimplemented"));
      },
      get isPrivate() {
        return dart.throw(new core.UnimplementedError("ClassMirror.isPrivate unimplemented"));
      },
      get isTopLevel() {
        return dart.throw(new core.UnimplementedError("ClassMirror.isTopLevel unimplemented"));
      },
      get location() {
        return dart.throw(new core.UnimplementedError("ClassMirror.location unimplemented"));
      },
      get mixin() {
        return dart.throw(new core.UnimplementedError("ClassMirror.mixin unimplemented"));
      },
      get originalDeclaration() {
        return dart.throw(new core.UnimplementedError("ClassMirror.originalDeclaration unimplemented"));
      },
      get owner() {
        return dart.throw(new core.UnimplementedError("ClassMirror.owner unimplemented"));
      },
      get qualifiedName() {
        return dart.throw(new core.UnimplementedError("ClassMirror.qualifiedName unimplemented"));
      },
      get reflectedType() {
        return dart.throw(new core.UnimplementedError("ClassMirror.reflectedType unimplemented"));
      },
      get staticMembers() {
        return dart.throw(new core.UnimplementedError("ClassMirror.staticMembers unimplemented"));
      },
      get superclass() {
        return dart.throw(new core.UnimplementedError("ClassMirror.superclass unimplemented"));
      },
      get typeArguments() {
        return dart.throw(new core.UnimplementedError("ClassMirror.typeArguments unimplemented"));
      },
      get typeVariables() {
        return dart.throw(new core.UnimplementedError("ClassMirror.typeVariables unimplemented"));
      }
    }, {}, $__super);
  }(core.Object);
  JsClassMirror[dart.implements] = function() {
    return [mirrors.ClassMirror];
  };
  dart.defineNamedConstructor(JsClassMirror, '_');
  dart.setSignature(JsClassMirror, {
    constructors: function() {
      return ({_: [JsClassMirror, [core.Type]]});
    },
    methods: function() {
      return ({
        newInstance: [mirrors.InstanceMirror, [core.Symbol, core.List], [core.Map$(core.Symbol, dart.dynamic)]],
        getField: [mirrors.InstanceMirror, [core.Symbol]],
        invoke: [mirrors.InstanceMirror, [core.Symbol, core.List], [core.Map$(core.Symbol, dart.dynamic)]],
        isAssignableTo: [core.bool, [mirrors.TypeMirror]],
        isSubclassOf: [core.bool, [mirrors.ClassMirror]],
        isSubtypeOf: [core.bool, [mirrors.TypeMirror]],
        setField: [mirrors.InstanceMirror, [core.Symbol, core.Object]]
      });
    }
  });
  var JsTypeMirror = function($__super) {
    function JsTypeMirror() {
      $traceurRuntime.superConstructor(JsTypeMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsTypeMirror, {
      _: function(reflectedType) {
        this.reflectedType = reflectedType;
        this.hasReflectedType = true;
      },
      isAssignableTo: function(other) {
        return dart.throw(new core.UnimplementedError("TypeMirror.isAssignable unimplemented"));
      },
      isSubtypeOf: function(other) {
        return dart.throw(new core.UnimplementedError("TypeMirror.isSubtypeOf unimplemented"));
      },
      get isOriginalDeclaration() {
        return dart.throw(new core.UnimplementedError("TypeMirror.isOriginalDeclaration unimplemented"));
      },
      get isPrivate() {
        return dart.throw(new core.UnimplementedError("TypeMirror.isPrivate unimplemented"));
      },
      get isTopLevel() {
        return dart.throw(new core.UnimplementedError("TypeMirror.isTopLevel unimplemented"));
      },
      get location() {
        return dart.throw(new core.UnimplementedError("TypeMirror.location unimplemented"));
      },
      get metadata() {
        return dart.throw(new core.UnimplementedError("TypeMirror.metadata unimplemented"));
      },
      get originalDeclaration() {
        return dart.throw(new core.UnimplementedError("TypeMirror.originalDeclaration unimplemented"));
      },
      get owner() {
        return dart.throw(new core.UnimplementedError("TypeMirror.owner unimplemented"));
      },
      get qualifiedName() {
        return dart.throw(new core.UnimplementedError("TypeMirror.qualifiedName unimplemented"));
      },
      get simpleName() {
        return dart.throw(new core.UnimplementedError("TypeMirror.simpleName unimplemented"));
      },
      get typeArguments() {
        return dart.throw(new core.UnimplementedError("TypeMirror.typeArguments unimplemented"));
      },
      get typeVariables() {
        return dart.throw(new core.UnimplementedError("TypeMirror.typeVariables unimplemented"));
      }
    }, {}, $__super);
  }(core.Object);
  JsTypeMirror[dart.implements] = function() {
    return [mirrors.TypeMirror];
  };
  dart.defineNamedConstructor(JsTypeMirror, '_');
  dart.setSignature(JsTypeMirror, {
    constructors: function() {
      return ({_: [JsTypeMirror, [core.Type]]});
    },
    methods: function() {
      return ({
        isAssignableTo: [core.bool, [mirrors.TypeMirror]],
        isSubtypeOf: [core.bool, [mirrors.TypeMirror]]
      });
    }
  });
  var _name = Symbol('_name');
  var JsParameterMirror = function($__super) {
    function JsParameterMirror() {
      $traceurRuntime.superConstructor(JsParameterMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsParameterMirror, {
      _: function(name, t, annotations) {
        this[_name] = name;
        this.type = new JsTypeMirror._(t);
        this.metadata = core.List$(mirrors.InstanceMirror).from(annotations[dartx.map](dart.fn(function(a) {
          return new JsInstanceMirror._(a);
        }, JsInstanceMirror, [dart.dynamic])));
      },
      get defaultValue() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.defaultValues unimplemented"));
      },
      get hasDefaultValue() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.hasDefaultValue unimplemented"));
      },
      get isConst() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isConst unimplemented"));
      },
      get isFinal() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isFinal unimplemented"));
      },
      get isNamed() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isNamed unimplemented"));
      },
      get isOptional() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isOptional unimplemented"));
      },
      get isPrivate() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isPrivate unimplemented"));
      },
      get isStatic() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isStatic unimplemented"));
      },
      get isTopLevel() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.isTopLevel unimplemented"));
      },
      get location() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.location unimplemented"));
      },
      get owner() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.owner unimplemented"));
      },
      get qualifiedName() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.qualifiedName unimplemented"));
      },
      get simpleName() {
        return dart.throw(new core.UnimplementedError("ParameterMirror.simpleName unimplemented"));
      }
    }, {}, $__super);
  }(core.Object);
  JsParameterMirror[dart.implements] = function() {
    return [mirrors.ParameterMirror];
  };
  dart.defineNamedConstructor(JsParameterMirror, '_');
  dart.setSignature(JsParameterMirror, {constructors: function() {
      return ({_: [JsParameterMirror, [core.String, core.Type, core.List]]});
    }});
  var _method = Symbol('_method');
  var _params = Symbol('_params');
  var _createParameterMirrorList = Symbol('_createParameterMirrorList');
  var JsMethodMirror = function($__super) {
    var $__6;
    function JsMethodMirror() {
      $traceurRuntime.superConstructor(JsMethodMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsMethodMirror, ($__6 = {}, Object.defineProperty($__6, "_", {
      value: function(cls, method) {
        this[_method] = method;
        this[_name] = getName(cls.simpleName);
        this[_params] = null;
        var ftype = exports._dart.classGetConstructorType(cls[_cls]);
        this[_params] = this[_createParameterMirrorList](ftype);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, "constructorName", {
      get: function() {
        return core.Symbol.new('');
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "parameters", {
      get: function() {
        return this[_params];
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, _createParameterMirrorList, {
      value: function(ftype) {
        if (ftype == null) {
          return dart.list([], mirrors.ParameterMirror);
        }
        var args = dart.as(dart.dload(ftype, 'args'), core.List);
        var opts = dart.as(dart.dload(ftype, 'optionals'), core.List);
        var params = core.List$(mirrors.ParameterMirror).new(dart.notNull(args[dartx.length]) + dart.notNull(opts[dartx.length]));
        for (var i = 0; dart.notNull(i) < dart.notNull(args[dartx.length]); i = dart.notNull(i) + 1) {
          var type = args[dartx.get](i);
          var metadata = dart.dindex(dart.dload(ftype, 'metadata'), i);
          var param = new JsParameterMirror._('', dart.as(type, core.Type), dart.as(metadata, core.List));
          params[dartx.set](i, param);
        }
        for (var i$__8 = 0; dart.notNull(i$__8) < dart.notNull(opts[dartx.length]); i$__8 = dart.notNull(i$__8) + 1) {
          var type$__9 = opts[dartx.get](i$__8);
          var metadata$__10 = dart.dindex(dart.dload(ftype, 'metadata'), dart.notNull(args[dartx.length]) + dart.notNull(i$__8));
          var param$__11 = new JsParameterMirror._('', dart.as(type$__9, core.Type), dart.as(metadata$__10, core.List));
          params[dartx.set](dart.notNull(i$__8) + dart.notNull(args[dartx.length]), param$__11);
        }
        return params;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__6, "isAbstract", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isAbstract unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isConstConstructor", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isConstConstructor unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isConstructor", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isConstructor unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isFactoryConstructor", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isFactoryConstructor unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isGenerativeConstructor", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isGenerativeConstructor unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isGetter", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isGetter unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isOperator", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isOperator unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isPrivate", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isPrivate unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isRedirectingConstructor", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isRedirectingConstructor unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isRegularMethod", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isRegularMethod unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isSetter", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isSetter unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isStatic", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isStatic unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isSynthetic", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isSynthetic unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "isTopLevel", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.isTopLevel unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "location", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.location unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "metadata", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.metadata unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "owner", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.owner unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "qualifiedName", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.qualifiedName unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "returnType", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.returnType unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "simpleName", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.simpleName unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__6, "source", {
      get: function() {
        return dart.throw(new core.UnimplementedError("MethodMirror.source unimplemented"));
      },
      configurable: true,
      enumerable: true
    }), $__6), {}, $__super);
  }(core.Object);
  JsMethodMirror[dart.implements] = function() {
    return [mirrors.MethodMirror];
  };
  dart.defineNamedConstructor(JsMethodMirror, '_');
  dart.setSignature(JsMethodMirror, {
    constructors: function() {
      return ({_: [JsMethodMirror, [JsClassMirror, dart.dynamic]]});
    },
    methods: function() {
      var $__6;
      return (($__6 = {}, Object.defineProperty($__6, _createParameterMirrorList, {
        value: [core.List$(mirrors.ParameterMirror), [dart.dynamic]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__6));
    }
  });
  exports.getName = getName;
  exports.getSymbol = getSymbol;
  exports.reflect = reflect;
  exports.reflectType = reflectType;
  exports.JsInstanceMirror = JsInstanceMirror;
  exports.JsClassMirror = JsClassMirror;
  exports.JsTypeMirror = JsTypeMirror;
  exports.JsParameterMirror = JsParameterMirror;
  exports.JsMethodMirror = JsMethodMirror;
});
