var dart_library = typeof module != "undefined" && module.exports || {};
(function(dart_library) {
  'use strict';
  var LibraryLoader = function() {
    function LibraryLoader(name, defaultValue, imports, lazyImports, loader) {
      this._name = name;
      this._library = defaultValue ? defaultValue : {};
      this._imports = imports;
      this._lazyImports = lazyImports;
      this._loader = loader;
      this._state = LibraryLoader.NOT_LOADED;
    }
    return ($traceurRuntime.createClass)(LibraryLoader, {
      loadImports: function(pendingSet) {
        return this.handleImports(this._imports, function(lib) {
          return lib.load(pendingSet);
        });
      },
      deferLazyImports: function(pendingSet) {
        return this.handleImports(this._lazyImports, function(lib) {
          pendingSet.add(lib._name);
          return lib.stub();
        });
      },
      loadLazyImports: function(pendingSet) {
        return this.handleImports(pendingSet, function(lib) {
          return lib.load();
        });
      },
      handleImports: function(list, handler) {
        var results = [];
        var $__5 = true;
        var $__6 = false;
        var $__7 = undefined;
        try {
          for (var $__3 = void 0,
              $__2 = (list)[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
            var name = $__3.value;
            {
              var lib = libraries[name];
              if (!lib) {
                dart_utils.throwInternalError('Library not available: ' + name);
              }
              results.push(handler(lib));
            }
          }
        } catch ($__8) {
          $__6 = true;
          $__7 = $__8;
        } finally {
          try {
            if (!$__5 && $__2.return != null) {
              $__2.return();
            }
          } finally {
            if ($__6) {
              throw $__7;
            }
          }
        }
        return results;
      },
      load: function(inheritedPendingSet) {
        if (this._state == LibraryLoader.LOADING) {
          dart_utils.throwInternalError('Circular dependence on library: ' + this._name);
        } else if (this._state >= LibraryLoader.LOADED) {
          return this._library;
        }
        this._state = LibraryLoader.LOADING;
        var pendingSet = inheritedPendingSet ? inheritedPendingSet : new Set();
        var args = this.loadImports(pendingSet);
        args = args.concat(this.deferLazyImports(pendingSet));
        args.unshift(this._library);
        this._loader.apply(null, args);
        this._state = LibraryLoader.LOADED;
        if (inheritedPendingSet === void 0) {
          this.loadLazyImports(pendingSet);
        }
        this._state = LibraryLoader.READY;
        return this._library;
      },
      stub: function() {
        return this._library;
      }
    }, {});
  }();
  LibraryLoader.NOT_LOADED = 0;
  LibraryLoader.LOADING = 1;
  LibraryLoader.LOADED = 2;
  LibraryLoader.READY = 3;
  var libraries = new Map();
  function library(name, defaultValue, imports, lazyImports, loader) {
    return libraries[name] = new LibraryLoader(name, defaultValue, imports, lazyImports, loader);
  }
  dart_library.library = library;
  function import_(libraryName) {
    bootstrap();
    var loader = libraries[libraryName];
    if (!loader)
      dart_utils.throwInternalError('Library not found: ' + libraryName);
    return loader.load();
  }
  dart_library.import = import_;
  function start(libraryName) {
    var library = import_(libraryName);
    var _isolate_helper = import_('dart/_isolate_helper');
    _isolate_helper.startRootIsolate(library.main, []);
  }
  dart_library.start = start;
  var _bootstrapped = false;
  function bootstrap() {
    if (_bootstrapped)
      return;
    _bootstrapped = true;
    var core = import_('dart/core');
    core.Object.toString = function() {
      return this.name;
    };
    if (typeof NodeList !== "undefined") {
      NodeList.prototype.get = function(i) {
        return this[i];
      };
      NamedNodeMap.prototype.get = function(i) {
        return this[i];
      };
      DOMTokenList.prototype.get = function(i) {
        return this[i];
      };
      HTMLCollection.prototype.get = function(i) {
        return this[i];
      };
    }
  }
})(dart_library);
