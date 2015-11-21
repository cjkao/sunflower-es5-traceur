dart_library.library('dart/_classes', null, [], ['dart/core', 'dart/_interceptors', 'dart/_types', 'dart/_rtti'], function(exports, core, _interceptors, types, rtti) {
  'use strict';
  var assert = dart_utils.assert;
  var copyProperties = dart_utils.copyProperties;
  var copyTheseProperties = dart_utils.copyTheseProperties;
  var defineMemoizedGetter = dart_utils.defineMemoizedGetter;
  var safeGetOwnProperty = dart_utils.safeGetOwnProperty;
  var throwInternalError = dart_utils.throwInternalError;
  var defineProperty = Object.defineProperty;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var _mixins = Symbol('mixins');
  var _implements = Symbol('implements');
  exports.implements = _implements;
  var _metadata = Symbol('metadata');
  exports.metadata = _metadata;
  function mixin(base) {
    for (var mixins = [],
        $__18 = 1; $__18 < arguments.length; $__18++)
      mixins[$__18 - 1] = arguments[$__18];
    var Mixin = function($__super) {
      var $__3;
      function Mixin() {
        $traceurRuntime.superConstructor(Mixin).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Mixin, ($__3 = {}, Object.defineProperty($__3, base.name, {
        value: function() {
          for (var args = [],
              $__19 = 0; $__19 < arguments.length; $__19++)
            args[$__19] = arguments[$__19];
          for (var i = mixins.length - 1; i >= 0; i--) {
            var mixin$__20 = mixins[i];
            var init$__21 = mixin$__20.prototype[mixin$__20.name];
            if (init$__21)
              init$__21.call(this);
          }
          var init = base.prototype[base.name];
          if (init)
            init.apply(this, args);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__3), {}, $__super);
    }(base);
    var $__7 = true;
    var $__8 = false;
    var $__9 = undefined;
    try {
      for (var $__5 = void 0,
          $__4 = (mixins)[Symbol.iterator](); !($__7 = ($__5 = $__4.next()).done); $__7 = true) {
        var m = $__5.value;
        {
          copyProperties(Mixin.prototype, m.prototype);
        }
      }
    } catch ($__10) {
      $__8 = true;
      $__9 = $__10;
    } finally {
      try {
        if (!$__7 && $__4.return != null) {
          $__4.return();
        }
      } finally {
        if ($__8) {
          throw $__9;
        }
      }
    }
    setSignature(Mixin, {methods: function() {
        var s = {};
        var $__14 = true;
        var $__15 = false;
        var $__16 = undefined;
        try {
          for (var $__12 = void 0,
              $__11 = (mixins)[Symbol.iterator](); !($__14 = ($__12 = $__11.next()).done); $__14 = true) {
            var m = $__12.value;
            {
              copyProperties(s, m[_methodSig]);
            }
          }
        } catch ($__17) {
          $__15 = true;
          $__16 = $__17;
        } finally {
          try {
            if (!$__14 && $__11.return != null) {
              $__11.return();
            }
          } finally {
            if ($__15) {
              throw $__16;
            }
          }
        }
        return s;
      }});
    Mixin[_mixins] = mixins;
    return Mixin;
  }
  exports.mixin = mixin;
  function getMixins(clazz) {
    return clazz[_mixins];
  }
  exports.getMixins = getMixins;
  function getImplements(clazz) {
    return clazz[_implements];
  }
  exports.getImplements = getImplements;
  var _typeArguments = Symbol('typeArguments');
  var _originalDeclaration = Symbol('originalDeclaration');
  function generic(typeConstructor) {
    var length = typeConstructor.length;
    if (length < 1) {
      throwInternalError('must have at least one generic type argument');
    }
    var resultMap = new Map();
    function makeGenericType() {
      for (var args = [],
          $__19 = 0; $__19 < arguments.length; $__19++)
        args[$__19] = arguments[$__19];
      if (args.length != length && args.length != 0) {
        throwInternalError('requires ' + length + ' or 0 type arguments');
      }
      while (args.length < length)
        args.push(types.dynamic);
      var value = resultMap;
      for (var i = 0; i < length; i++) {
        var arg = args[i];
        if (arg == null) {
          throwInternalError('type arguments should not be null: ' + typeConstructor);
        }
        var map = value;
        value = map.get(arg);
        if (value === void 0) {
          if (i + 1 == length) {
            value = typeConstructor.apply(null, args);
            if (value) {
              value[_typeArguments] = args;
              value[_originalDeclaration] = makeGenericType;
            }
          } else {
            value = new Map();
          }
          map.set(arg, value);
        }
      }
      return value;
    }
    return makeGenericType;
  }
  exports.generic = generic;
  function getGenericClass(type) {
    return safeGetOwnProperty(type, _originalDeclaration);
  }
  ;
  exports.getGenericClass = getGenericClass;
  function getGenericArgs(type) {
    return safeGetOwnProperty(type, _typeArguments);
  }
  ;
  exports.getGenericArgs = getGenericArgs;
  var _constructorSig = Symbol('sigCtor');
  var _methodSig = Symbol("sig");
  var _staticSig = Symbol("sigStatic");
  function _getMethodType(obj, name) {
    if (obj === void 0)
      return void 0;
    if (obj == null)
      return void 0;
    var sigObj = obj.__proto__.constructor[_methodSig];
    if (sigObj === void 0)
      return void 0;
    var parts = sigObj[name];
    if (parts === void 0)
      return void 0;
    return types.definiteFunctionType.apply(null, parts);
  }
  function _getConstructorType(cls, name) {
    if (!name)
      name = cls.name;
    if (cls === void 0)
      return void 0;
    if (cls == null)
      return void 0;
    var sigCtor = cls[_constructorSig];
    if (sigCtor === void 0)
      return void 0;
    var parts = sigCtor[name];
    if (parts === void 0)
      return void 0;
    return types.definiteFunctionType.apply(null, parts);
  }
  exports.classGetConstructorType = _getConstructorType;
  function bind(obj, name, f) {
    if (f === void 0)
      f = obj[name];
    f = f.bind(obj);
    var sig = _getMethodType(obj, name);
    assert(sig);
    rtti.tag(f, sig);
    return f;
  }
  exports.bind = bind;
  function _setMethodSignature(f, sigF) {
    defineMemoizedGetter(f, _methodSig, function() {
      var sigObj = sigF();
      sigObj.__proto__ = f.__proto__[_methodSig];
      return sigObj;
    });
  }
  function _setConstructorSignature(f, sigF) {
    defineMemoizedGetter(f, _constructorSig, sigF);
  }
  function _setStaticSignature(f, sigF) {
    defineMemoizedGetter(f, _staticSig, sigF);
  }
  function _setStaticTypes(f, names) {
    var $__7 = true;
    var $__8 = false;
    var $__9 = undefined;
    try {
      var $__22 = function() {
        var name = $__5.value;
        {
          rtti.tagMemoized(f[name], function() {
            var parts = f[_staticSig][name];
            return types.definiteFunctionType.apply(null, parts);
          });
        }
      };
      for (var $__5 = void 0,
          $__4 = (names)[Symbol.iterator](); !($__7 = ($__5 = $__4.next()).done); $__7 = true) {
        $__22();
      }
    } catch ($__10) {
      $__8 = true;
      $__9 = $__10;
    } finally {
      try {
        if (!$__7 && $__4.return != null) {
          $__4.return();
        }
      } finally {
        if ($__8) {
          throw $__9;
        }
      }
    }
  }
  function setSignature(f, signature) {
    var constructors = ('constructors' in signature) ? signature.constructors : function() {
      return ({});
    };
    var methods = ('methods' in signature) ? signature.methods : function() {
      return ({});
    };
    var statics = ('statics' in signature) ? signature.statics : function() {
      return ({});
    };
    var names = ('names' in signature) ? signature.names : [];
    _setConstructorSignature(f, constructors);
    _setMethodSignature(f, methods);
    _setStaticSignature(f, statics);
    _setStaticTypes(f, names);
    rtti.tagMemoized(f, function() {
      return core.Type;
    });
  }
  exports.setSignature = setSignature;
  function hasMethod(obj, name) {
    return _getMethodType(obj, name) !== void 0;
  }
  exports.hasMethod = hasMethod;
  exports.getMethodType = _getMethodType;
  function virtualField(subclass, fieldName) {
    var prop = getOwnPropertyDescriptor(subclass.prototype, fieldName);
    if (prop)
      return;
    var symbol = Symbol(subclass.name + '.' + fieldName);
    defineProperty(subclass.prototype, fieldName, {
      get: function() {
        return this[symbol];
      },
      set: function(x) {
        this[symbol] = x;
      }
    });
  }
  exports.virtualField = virtualField;
  function defineNamedConstructor(clazz, name) {
    var proto = clazz.prototype;
    var initMethod = proto[name];
    var ctor = function() {
      return initMethod.apply(this, arguments);
    };
    ctor.prototype = proto;
    defineProperty(clazz, name, {
      value: ctor,
      configurable: true
    });
  }
  exports.defineNamedConstructor = defineNamedConstructor;
  var _extensionType = Symbol('extensionType');
  var dartx = {};
  exports.dartx = dartx;
  function getExtensionSymbol(name) {
    var sym = dartx[name];
    if (!sym)
      dartx[name] = sym = Symbol('dartx.' + name);
    return sym;
  }
  function defineExtensionNames(names) {
    names.forEach(getExtensionSymbol);
  }
  exports.defineExtensionNames = defineExtensionNames;
  function registerExtension(jsType, dartExtType) {
    var extProto = dartExtType.prototype;
    var jsProto = jsType.prototype;
    assert(jsProto[_extensionType] === void 0);
    jsProto[_extensionType] = extProto;
    var dartObjProto = core.Object.prototype;
    while (extProto !== dartObjProto && extProto !== jsProto) {
      copyTheseProperties(jsProto, extProto, getOwnPropertySymbols(extProto));
      extProto = extProto.__proto__;
    }
    var originalSigFn = getOwnPropertyDescriptor(dartExtType, _methodSig).get;
    assert(originalSigFn);
    defineMemoizedGetter(jsType, _methodSig, originalSigFn);
  }
  exports.registerExtension = registerExtension;
  function defineExtensionMembers(type, methodNames) {
    var proto = type.prototype;
    var $__7 = true;
    var $__8 = false;
    var $__9 = undefined;
    try {
      for (var $__5 = void 0,
          $__4 = (methodNames)[Symbol.iterator](); !($__7 = ($__5 = $__4.next()).done); $__7 = true) {
        var name = $__5.value;
        {
          var method = getOwnPropertyDescriptor(proto, name);
          defineProperty(proto, getExtensionSymbol(name), method);
        }
      }
    } catch ($__10) {
      $__8 = true;
      $__9 = $__10;
    } finally {
      try {
        if (!$__7 && $__4.return != null) {
          $__4.return();
        }
      } finally {
        if ($__8) {
          throw $__9;
        }
      }
    }
    var originalSigFn = getOwnPropertyDescriptor(type, _methodSig).get;
    defineMemoizedGetter(type, _methodSig, function() {
      var sig = originalSigFn();
      var $__14 = true;
      var $__15 = false;
      var $__16 = undefined;
      try {
        for (var $__12 = void 0,
            $__11 = (methodNames)[Symbol.iterator](); !($__14 = ($__12 = $__11.next()).done); $__14 = true) {
          var name = $__12.value;
          {
            sig[getExtensionSymbol(name)] = sig[name];
          }
        }
      } catch ($__17) {
        $__15 = true;
        $__16 = $__17;
      } finally {
        try {
          if (!$__14 && $__11.return != null) {
            $__11.return();
          }
        } finally {
          if ($__15) {
            throw $__16;
          }
        }
      }
      return sig;
    });
  }
  exports.defineExtensionMembers = defineExtensionMembers;
  function canonicalMember(obj, name) {
    if (obj != null && obj[_extensionType])
      return dartx[name];
    if (name == 'constructor' || name == 'prototype') {
      name = '+' + name;
    }
    return name;
  }
  exports.canonicalMember = canonicalMember;
  function setType(obj, type) {
    obj.__proto__ = type.prototype;
    return obj;
  }
  function list(obj, elementType) {
    return setType(obj, _interceptors.JSArray$(elementType));
  }
  exports.list = list;
  function setBaseClass(derived, base) {
    derived.prototype.__proto__ = base.prototype;
  }
  exports.setBaseClass = setBaseClass;
});
