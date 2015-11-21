dart_library.library('dart/_types', null, [], ['dart/core', 'dart/_classes', 'dart/_rtti'], function(exports, core, classes, rtti) {
  'use strict';
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var assert = dart_utils.assert;
  var TypeRep = function($__super) {
    function TypeRep() {
      $traceurRuntime.superConstructor(TypeRep).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TypeRep, {get name() {
        return this.toString();
      }}, {}, $__super);
  }(rtti.LazyTagged(function() {
    return core.Type;
  }));
  var Dynamic = function($__super) {
    function Dynamic() {
      $traceurRuntime.superConstructor(Dynamic).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Dynamic, {toString: function() {
        return "dynamic";
      }}, {}, $__super);
  }(TypeRep);
  var dynamicR = new Dynamic();
  exports.dynamic = dynamicR;
  var Void = function($__super) {
    function Void() {
      $traceurRuntime.superConstructor(Void).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Void, {toString: function() {
        return "void";
      }}, {}, $__super);
  }(TypeRep);
  var voidR = new Void();
  exports.void = voidR;
  var Bottom = function($__super) {
    function Bottom() {
      $traceurRuntime.superConstructor(Bottom).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Bottom, {toString: function() {
        return "bottom";
      }}, {}, $__super);
  }(TypeRep);
  var bottomR = new Bottom();
  exports.bottom = bottomR;
  var JSObject = function($__super) {
    function JSObject() {
      $traceurRuntime.superConstructor(JSObject).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JSObject, {toString: function() {
        return "NativeJavaScriptObject";
      }}, {}, $__super);
  }(TypeRep);
  var jsobjectR = new JSObject();
  exports.jsobject = jsobjectR;
  var AbstractFunctionType = function($__super) {
    function AbstractFunctionType() {
      $traceurRuntime.superConstructor(AbstractFunctionType).call(this);
      this._stringValue = null;
    }
    return ($traceurRuntime.createClass)(AbstractFunctionType, {
      toString: function() {
        return this.name;
      },
      get name() {
        if (this._stringValue)
          return this._stringValue;
        var buffer = '(';
        for (var i = 0; i < this.args.length; ++i) {
          if (i > 0) {
            buffer += ', ';
          }
          buffer += typeName(this.args[i]);
        }
        if (this.optionals.length > 0) {
          if (this.args.length > 0)
            buffer += ', ';
          buffer += '[';
          for (var i$__22 = 0; i$__22 < this.optionals.length; ++i$__22) {
            if (i$__22 > 0) {
              buffer += ', ';
            }
            buffer += typeName(this.optionals[i$__22]);
          }
          buffer += ']';
        } else if (Object.keys(this.named).length > 0) {
          if (this.args.length > 0)
            buffer += ', ';
          buffer += '{';
          var names = getOwnPropertyNames(this.named).sort();
          for (var i$__23 = 0; i$__23 < names.length; ++i$__23) {
            if (i$__23 > 0) {
              buffer += ', ';
            }
            buffer += names[i$__23] + ': ' + typeName(this.named[names[i$__23]]);
          }
          buffer += '}';
        }
        buffer += ') -> ' + typeName(this.returnType);
        this._stringValue = buffer;
        return buffer;
      }
    }, {}, $__super);
  }(TypeRep);
  var FunctionType = function($__super) {
    function FunctionType(definite, returnType, args, optionals, named) {
      $traceurRuntime.superConstructor(FunctionType).call(this);
      this.definite = definite;
      this.returnType = returnType;
      this.args = args;
      this.optionals = optionals;
      this.named = named;
      this.metadata = [];
      function process(array, metadata) {
        var result = [];
        for (var i = 0; i < array.length; ++i) {
          var arg = array[i];
          if (arg instanceof Array) {
            metadata.push(arg.slice(1));
            result.push(arg[0]);
          } else {
            metadata.push([]);
            result.push(arg);
          }
        }
        return result;
      }
      this.args = process(this.args, this.metadata);
      this.optionals = process(this.optionals, this.metadata);
      this._canonize();
    }
    return ($traceurRuntime.createClass)(FunctionType, {_canonize: function() {
        if (this.definite)
          return;
        function replace(a) {
          return (a == dynamicR) ? bottomR : a;
        }
        this.args = this.args.map(replace);
        if (this.optionals.length > 0) {
          this.optionals = this.optionals.map(replace);
        }
        if (Object.keys(this.named).length > 0) {
          var r = {};
          var $__11 = true;
          var $__12 = false;
          var $__13 = undefined;
          try {
            for (var $__9 = void 0,
                $__8 = (getOwnPropertyNames(this.named))[Symbol.iterator](); !($__11 = ($__9 = $__8.next()).done); $__11 = true) {
              var name = $__9.value;
              {
                r[name] = replace(this.named[name]);
              }
            }
          } catch ($__14) {
            $__12 = true;
            $__13 = $__14;
          } finally {
            try {
              if (!$__11 && $__8.return != null) {
                $__8.return();
              }
            } finally {
              if ($__12) {
                throw $__13;
              }
            }
          }
          this.named = r;
        }
      }}, {}, $__super);
  }(AbstractFunctionType);
  var Typedef = function($__super) {
    function Typedef(name, closure) {
      $traceurRuntime.superConstructor(Typedef).call(this);
      this._name = name;
      this._closure = closure;
      this._functionType = null;
    }
    return ($traceurRuntime.createClass)(Typedef, {
      get definite() {
        return this._functionType.definite;
      },
      get name() {
        return this._name;
      },
      get functionType() {
        if (!this._functionType) {
          this._functionType = this._closure();
        }
        return this._functionType;
      },
      get returnType() {
        return this.functionType.returnType;
      },
      get args() {
        return this.functionType.args;
      },
      get optionals() {
        return this.functionType.optionals;
      },
      get named() {
        return this.functionType.named;
      },
      get metadata() {
        return this.functionType.metadata;
      }
    }, {}, $__super);
  }(AbstractFunctionType);
  function _functionType(definite, returnType, args, extra) {
    var optionals;
    var named;
    if (extra === void 0) {
      optionals = [];
      named = {};
    } else if (extra instanceof Array) {
      optionals = extra;
      named = {};
    } else {
      optionals = [];
      named = extra;
    }
    return new FunctionType(definite, returnType, args, optionals, named);
  }
  function functionType(returnType, args, extra) {
    return _functionType(false, returnType, args, extra);
  }
  exports.functionType = functionType;
  function definiteFunctionType(returnType, args, extra) {
    return _functionType(true, returnType, args, extra);
  }
  exports.definiteFunctionType = definiteFunctionType;
  function typedef(name, closure) {
    return new Typedef(name, closure);
  }
  exports.typedef = typedef;
  function isDartType(type) {
    return rtti.read(type) === core.Type;
  }
  exports.isDartType = isDartType;
  function typeName(type) {
    if (type instanceof TypeRep)
      return type.toString();
    var tag = rtti.read(type);
    if (tag === core.Type) {
      var name = type.name;
      var args = classes.getGenericArgs(type);
      if (args) {
        name += '<';
        for (var i = 0; i < args.length; ++i) {
          if (i > 0)
            name += ', ';
          name += typeName(args[i]);
        }
        name += '>';
      }
      return name;
    }
    if (tag)
      return "Not a type: " + tag.name;
    return "JSObject<" + type.name + ">";
  }
  exports.typeName = typeName;
  function isFunctionType(type) {
    return type instanceof AbstractFunctionType || type == core.Function;
  }
  function isFunctionSubType(ft1, ft2) {
    if (ft2 == core.Function) {
      return true;
    }
    var ret1 = ft1.returnType;
    var ret2 = ft2.returnType;
    if (!isSubtype_(ret1, ret2)) {
      if (ret2 != voidR) {
        return false;
      }
    }
    var args1 = ft1.args;
    var args2 = ft2.args;
    if (args1.length > args2.length) {
      return false;
    }
    for (var i = 0; i < args1.length; ++i) {
      if (!isSubtype_(args2[i], args1[i])) {
        return false;
      }
    }
    var optionals1 = ft1.optionals;
    var optionals2 = ft2.optionals;
    if (args1.length + optionals1.length < args2.length + optionals2.length) {
      return false;
    }
    var j = 0;
    for (var i$__24 = args1.length; i$__24 < args2.length; ++i$__24, ++j) {
      if (!isSubtype_(args2[i$__24], optionals1[j])) {
        return false;
      }
    }
    for (var i$__25 = 0; i$__25 < optionals2.length; ++i$__25, ++j) {
      if (!isSubtype_(optionals2[i$__25], optionals1[j])) {
        return false;
      }
    }
    var named1 = ft1.named;
    var named2 = ft2.named;
    var names = getOwnPropertyNames(named2);
    for (var i$__26 = 0; i$__26 < names.length; ++i$__26) {
      var name = names[i$__26];
      var n1 = named1[name];
      var n2 = named2[name];
      if (n1 === void 0) {
        return false;
      }
      if (!isSubtype_(n2, n1)) {
        return false;
      }
    }
    return true;
  }
  function canonicalType(t) {
    if (t === Object)
      return core.Object;
    if (t === Function)
      return core.Function;
    if (t === Array)
      return core.List;
    if (t === String)
      return core.String;
    if (t === Number)
      return core.double;
    if (t === Boolean)
      return core.bool;
    return t;
  }
  var subtypeMap = new Map();
  function isSubtype(t1, t2) {
    var map = subtypeMap.get(t1);
    var result;
    if (map) {
      result = map.get(t2);
      if (result !== void 0)
        return result;
    } else {
      subtypeMap.set(t1, map = new Map());
    }
    result = isSubtype_(t1, t2);
    map.set(t2, result);
    return result;
  }
  exports.isSubtype = isSubtype;
  function _isBottom(type) {
    return type == bottomR;
  }
  function _isTop(type) {
    return type == core.Object || (type == dynamicR);
  }
  function isSubtype_(t1, t2) {
    t1 = canonicalType(t1);
    t2 = canonicalType(t2);
    if (t1 == t2)
      return true;
    if (_isTop(t2) || _isBottom(t1)) {
      return true;
    }
    if (_isTop(t1) || _isBottom(t2)) {
      return false;
    }
    if (isClassSubType(t1, t2)) {
      return true;
    }
    if (isFunctionType(t1) && isFunctionType(t2)) {
      return isFunctionSubType(t1, t2);
    }
    return false;
  }
  function isClassSubType(t1, t2) {
    t1 = canonicalType(t1);
    assert(t2 == canonicalType(t2));
    if (t1 == t2)
      return true;
    if (t1 == core.Object)
      return false;
    if (t1 == null)
      return t2 == core.Object || t2 == dynamicR;
    var raw1 = classes.getGenericClass(t1);
    var raw2 = classes.getGenericClass(t2);
    if (raw1 != null && raw1 == raw2) {
      var typeArguments1 = classes.getGenericArgs(t1);
      var typeArguments2 = classes.getGenericArgs(t2);
      var length = typeArguments1.length;
      if (typeArguments2.length == 0) {
        return true;
      } else if (length == 0) {
        return false;
      }
      assert(length == typeArguments2.length);
      for (var i = 0; i < length; ++i) {
        if (!isSubtype(typeArguments1[i], typeArguments2[i])) {
          return false;
        }
      }
      return true;
    }
    if (isClassSubType(t1.__proto__, t2))
      return true;
    var mixins = classes.getMixins(t1);
    if (mixins) {
      var $__11 = true;
      var $__12 = false;
      var $__13 = undefined;
      try {
        for (var $__9 = void 0,
            $__8 = (mixins)[Symbol.iterator](); !($__11 = ($__9 = $__8.next()).done); $__11 = true) {
          var m1 = $__9.value;
          {
            if (m1 != null && isClassSubType(m1, t2))
              return true;
          }
        }
      } catch ($__14) {
        $__12 = true;
        $__13 = $__14;
      } finally {
        try {
          if (!$__11 && $__8.return != null) {
            $__8.return();
          }
        } finally {
          if ($__12) {
            throw $__13;
          }
        }
      }
    }
    var getInterfaces = classes.getImplements(t1);
    if (getInterfaces) {
      var $__18 = true;
      var $__19 = false;
      var $__20 = undefined;
      try {
        for (var $__16 = void 0,
            $__15 = (getInterfaces())[Symbol.iterator](); !($__18 = ($__16 = $__15.next()).done); $__18 = true) {
          var i1 = $__16.value;
          {
            if (i1 != null && isClassSubType(i1, t2))
              return true;
          }
        }
      } catch ($__21) {
        $__19 = true;
        $__20 = $__21;
      } finally {
        try {
          if (!$__18 && $__15.return != null) {
            $__15.return();
          }
        } finally {
          if ($__19) {
            throw $__20;
          }
        }
      }
    }
    return false;
  }
  function isGroundType(type) {
    if (type instanceof AbstractFunctionType) {
      if (!_isTop(type.returnType))
        return false;
      for (var i = 0; i < type.args.length; ++i) {
        if (!_isBottom(type.args[i]))
          return false;
      }
      for (var i$__27 = 0; i$__27 < type.optionals.length; ++i$__27) {
        if (!_isBottom(type.optionals[i$__27]))
          return false;
      }
      var names = getOwnPropertyNames(type.named);
      for (var i$__28 = 0; i$__28 < names.length; ++i$__28) {
        if (!_isBottom(type.named[names[i$__28]]))
          return false;
      }
      return true;
    }
    var typeArgs = classes.getGenericArgs(type);
    if (!typeArgs)
      return true;
    var $__11 = true;
    var $__12 = false;
    var $__13 = undefined;
    try {
      for (var $__9 = void 0,
          $__8 = (typeArgs)[Symbol.iterator](); !($__11 = ($__9 = $__8.next()).done); $__11 = true) {
        var t = $__9.value;
        {
          if (t != core.Object && t != dynamicR)
            return false;
        }
      }
    } catch ($__14) {
      $__12 = true;
      $__13 = $__14;
    } finally {
      try {
        if (!$__11 && $__8.return != null) {
          $__8.return();
        }
      } finally {
        if ($__12) {
          throw $__13;
        }
      }
    }
    return true;
  }
  exports.isGroundType = isGroundType;
});
