dart_library.library('dart/mirrors', null, ["dart/_runtime", 'dart/core'], ['dart/_js_mirrors'], function(exports, dart, core, _js_mirrors) {
  'use strict';
  var dartx = dart.dartx;
  var MirrorSystem = function($__super) {
    function MirrorSystem() {
      $traceurRuntime.superConstructor(MirrorSystem).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(MirrorSystem, {findLibrary: function(libraryName) {
        return this.libraries.values[dartx.singleWhere](dart.fn(function(library) {
          return dart.equals(dart.dload(library, 'simpleName'), libraryName);
        }, core.bool, [dart.dynamic]));
      }}, {
      getName: function(symbol) {
        return _js_mirrors.getName(symbol);
      },
      getSymbol: function(name, library) {
        if (library === void 0)
          library = null;
        return _js_mirrors.getSymbol(name, library);
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(MirrorSystem, {
    methods: function() {
      return ({findLibrary: [LibraryMirror, [core.Symbol]]});
    },
    statics: function() {
      return ({
        getName: [core.String, [core.Symbol]],
        getSymbol: [core.Symbol, [core.String], [LibraryMirror]]
      });
    },
    names: ['getName', 'getSymbol']
  });
  function currentMirrorSystem() {
    return dart.as(_js_mirrors.currentJsMirrorSystem, MirrorSystem);
  }
  dart.fn(currentMirrorSystem, MirrorSystem, []);
  function reflect(reflectee) {
    return _js_mirrors.reflect(reflectee);
  }
  dart.fn(reflect, function() {
    return dart.definiteFunctionType(InstanceMirror, [core.Object]);
  });
  function reflectClass(key) {
    if (!dart.is(key, core.Type) || dart.equals(key, dart.dynamic)) {
      dart.throw(new core.ArgumentError((key + " does not denote a class")));
    }
    var tm = reflectType(key);
    if (!dart.is(tm, ClassMirror)) {
      dart.throw(new core.ArgumentError((key + " does not denote a class")));
    }
    return dart.as(dart.as(tm, ClassMirror).originalDeclaration, ClassMirror);
  }
  dart.fn(reflectClass, function() {
    return dart.definiteFunctionType(ClassMirror, [core.Type]);
  });
  function reflectType(key) {
    if (dart.equals(key, dart.dynamic)) {
      return currentMirrorSystem().dynamicType;
    }
    return _js_mirrors.reflectType(key);
  }
  dart.fn(reflectType, function() {
    return dart.definiteFunctionType(TypeMirror, [core.Type]);
  });
  var Mirror = function($__super) {
    function Mirror() {
      $traceurRuntime.superConstructor(Mirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Mirror, {}, {}, $__super);
  }(core.Object);
  var IsolateMirror = function($__super) {
    function IsolateMirror() {
      $traceurRuntime.superConstructor(IsolateMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(IsolateMirror, {}, {}, $__super);
  }(core.Object);
  IsolateMirror[dart.implements] = function() {
    return [Mirror];
  };
  var DeclarationMirror = function($__super) {
    function DeclarationMirror() {
      $traceurRuntime.superConstructor(DeclarationMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(DeclarationMirror, {}, {}, $__super);
  }(core.Object);
  DeclarationMirror[dart.implements] = function() {
    return [Mirror];
  };
  var ObjectMirror = function($__super) {
    function ObjectMirror() {
      $traceurRuntime.superConstructor(ObjectMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ObjectMirror, {}, {}, $__super);
  }(core.Object);
  ObjectMirror[dart.implements] = function() {
    return [Mirror];
  };
  var InstanceMirror = function($__super) {
    function InstanceMirror() {
      $traceurRuntime.superConstructor(InstanceMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(InstanceMirror, {}, {}, $__super);
  }(core.Object);
  InstanceMirror[dart.implements] = function() {
    return [ObjectMirror];
  };
  var ClosureMirror = function($__super) {
    function ClosureMirror() {
      $traceurRuntime.superConstructor(ClosureMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ClosureMirror, {}, {}, $__super);
  }(core.Object);
  ClosureMirror[dart.implements] = function() {
    return [InstanceMirror];
  };
  var LibraryMirror = function($__super) {
    function LibraryMirror() {
      $traceurRuntime.superConstructor(LibraryMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(LibraryMirror, {}, {}, $__super);
  }(core.Object);
  LibraryMirror[dart.implements] = function() {
    return [DeclarationMirror, ObjectMirror];
  };
  var LibraryDependencyMirror = function($__super) {
    function LibraryDependencyMirror() {
      $traceurRuntime.superConstructor(LibraryDependencyMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(LibraryDependencyMirror, {}, {}, $__super);
  }(core.Object);
  LibraryDependencyMirror[dart.implements] = function() {
    return [Mirror];
  };
  var CombinatorMirror = function($__super) {
    function CombinatorMirror() {
      $traceurRuntime.superConstructor(CombinatorMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CombinatorMirror, {}, {}, $__super);
  }(core.Object);
  CombinatorMirror[dart.implements] = function() {
    return [Mirror];
  };
  var TypeMirror = function($__super) {
    function TypeMirror() {
      $traceurRuntime.superConstructor(TypeMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TypeMirror, {}, {}, $__super);
  }(core.Object);
  TypeMirror[dart.implements] = function() {
    return [DeclarationMirror];
  };
  var ClassMirror = function($__super) {
    function ClassMirror() {
      $traceurRuntime.superConstructor(ClassMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ClassMirror, {}, {}, $__super);
  }(core.Object);
  ClassMirror[dart.implements] = function() {
    return [TypeMirror, ObjectMirror];
  };
  var FunctionTypeMirror = function($__super) {
    function FunctionTypeMirror() {
      $traceurRuntime.superConstructor(FunctionTypeMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(FunctionTypeMirror, {}, {}, $__super);
  }(core.Object);
  FunctionTypeMirror[dart.implements] = function() {
    return [ClassMirror];
  };
  var TypeVariableMirror = function($__super) {
    function TypeVariableMirror() {
      $traceurRuntime.superConstructor(TypeVariableMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TypeVariableMirror, {}, {}, $__super);
  }(TypeMirror);
  var TypedefMirror = function($__super) {
    function TypedefMirror() {
      $traceurRuntime.superConstructor(TypedefMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TypedefMirror, {}, {}, $__super);
  }(core.Object);
  TypedefMirror[dart.implements] = function() {
    return [TypeMirror];
  };
  var MethodMirror = function($__super) {
    function MethodMirror() {
      $traceurRuntime.superConstructor(MethodMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(MethodMirror, {}, {}, $__super);
  }(core.Object);
  MethodMirror[dart.implements] = function() {
    return [DeclarationMirror];
  };
  var VariableMirror = function($__super) {
    function VariableMirror() {
      $traceurRuntime.superConstructor(VariableMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(VariableMirror, {}, {}, $__super);
  }(core.Object);
  VariableMirror[dart.implements] = function() {
    return [DeclarationMirror];
  };
  var ParameterMirror = function($__super) {
    function ParameterMirror() {
      $traceurRuntime.superConstructor(ParameterMirror).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ParameterMirror, {}, {}, $__super);
  }(core.Object);
  ParameterMirror[dart.implements] = function() {
    return [VariableMirror];
  };
  var SourceLocation = function($__super) {
    function SourceLocation() {
      $traceurRuntime.superConstructor(SourceLocation).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(SourceLocation, {}, {}, $__super);
  }(core.Object);
  var Comment = function($__super) {
    function Comment() {
      $traceurRuntime.superConstructor(Comment).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Comment, {Comment: function(text, trimmedText, isDocComment) {
        this.text = text;
        this.trimmedText = trimmedText;
        this.isDocComment = isDocComment;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(Comment, {constructors: function() {
      return ({Comment: [Comment, [core.String, core.String, core.bool]]});
    }});
  var MirrorsUsed = function($__super) {
    function MirrorsUsed() {
      $traceurRuntime.superConstructor(MirrorsUsed).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(MirrorsUsed, {MirrorsUsed: function(opts) {
        var symbols = opts && 'symbols' in opts ? opts.symbols : null;
        var targets = opts && 'targets' in opts ? opts.targets : null;
        var metaTargets = opts && 'metaTargets' in opts ? opts.metaTargets : null;
        var override = opts && 'override' in opts ? opts.override : null;
        this.symbols = symbols;
        this.targets = targets;
        this.metaTargets = metaTargets;
        this.override = override;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(MirrorsUsed, {constructors: function() {
      return ({MirrorsUsed: [MirrorsUsed, [], {
          symbols: dart.dynamic,
          targets: dart.dynamic,
          metaTargets: dart.dynamic,
          override: dart.dynamic
        }]});
    }});
  exports.MirrorSystem = MirrorSystem;
  exports.currentMirrorSystem = currentMirrorSystem;
  exports.reflect = reflect;
  exports.reflectClass = reflectClass;
  exports.reflectType = reflectType;
  exports.Mirror = Mirror;
  exports.IsolateMirror = IsolateMirror;
  exports.DeclarationMirror = DeclarationMirror;
  exports.ObjectMirror = ObjectMirror;
  exports.InstanceMirror = InstanceMirror;
  exports.ClosureMirror = ClosureMirror;
  exports.LibraryMirror = LibraryMirror;
  exports.LibraryDependencyMirror = LibraryDependencyMirror;
  exports.CombinatorMirror = CombinatorMirror;
  exports.TypeMirror = TypeMirror;
  exports.ClassMirror = ClassMirror;
  exports.FunctionTypeMirror = FunctionTypeMirror;
  exports.TypeVariableMirror = TypeVariableMirror;
  exports.TypedefMirror = TypedefMirror;
  exports.MethodMirror = MethodMirror;
  exports.VariableMirror = VariableMirror;
  exports.ParameterMirror = ParameterMirror;
  exports.SourceLocation = SourceLocation;
  exports.Comment = Comment;
  exports.MirrorsUsed = MirrorsUsed;
});
