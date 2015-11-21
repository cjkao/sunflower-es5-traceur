dart_library.library('dart/_runtime', null, ['dart/_classes', 'dart/_errors', 'dart/_generators', 'dart/_operations', 'dart/_rtti', 'dart/_types'], ['dart/_js_helper'], function(exports, classes, errors, generators, operations, rtti, types, _js_helper) {
  'use strict';
  function _export(value) {
    if (value)
      return value;
    console.log("Re-exporting null field: " + name);
    throw "Bad export";
  }
  function exportFrom(value, names) {
    var $__3 = true;
    var $__4 = false;
    var $__5 = undefined;
    try {
      for (var $__1 = void 0,
          $__0 = (names)[Symbol.iterator](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
        var name = $__1.value;
        {
          exports[name] = _export(value[name]);
        }
      }
    } catch ($__6) {
      $__4 = true;
      $__5 = $__6;
    } finally {
      try {
        if (!$__3 && $__0.return != null) {
          $__0.return();
        }
      } finally {
        if ($__4) {
          throw $__5;
        }
      }
    }
  }
  exports.global = typeof window == "undefined" ? global : window;
  exports.JsSymbol = _export(Symbol);
  exports.globalState = null;
  _js_helper.checkNum = operations.notNull;
  exportFrom(classes, ['bind', 'classGetConstructorType', 'dartx', 'defineNamedConstructor', 'defineExtensionNames', 'defineExtensionMembers', 'generic', 'implements', 'list', 'metadata', 'mixin', 'registerExtension', 'setBaseClass', 'setSignature', 'virtualField']);
  exportFrom(generators, ['syncStar', 'async', 'asyncStar']);
  exportFrom(dart_utils, ['copyProperties', 'export']);
  exports.defineLazyClass = _export(dart_utils.defineLazy);
  exports.defineLazyProperties = _export(dart_utils.defineLazy);
  exports.defineLazyClassGeneric = _export(dart_utils.defineLazyProperty);
  exportFrom(operations, ['JsIterator', 'arity', 'asInt', 'assert', 'const', 'dcall', 'dindex', 'dload', 'dput', 'dsend', 'dsetindex', 'equals', 'hashCode', 'map', 'noSuchMethod', 'notNull', 'nullSafe', 'stackPrint', 'stackTrace', 'strongInstanceOf', 'throw', 'toString']);
  exports.as = _export(operations.cast);
  exports.is = _export(operations.instanceOf);
  exportFrom(types, ['bottom', 'definiteFunctionType', 'dynamic', 'functionType', 'jsobject', 'typedef', 'typeName', 'void']);
  exportFrom(rtti, ['fn', 'realRuntimeType', 'runtimeType']);
});
