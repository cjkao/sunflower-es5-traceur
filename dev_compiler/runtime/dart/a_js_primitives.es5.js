dart_library.library('dart/_js_primitives', null, ["dart/_runtime", 'dart/core'], [], function(exports, dart, core) {
  'use strict';
  var dartx = dart.dartx;
  function printString(string) {
    if (typeof dartPrint == "function") {
      dartPrint(string);
      return;
    }
    if ((typeof console === 'undefined' ? 'undefined' : $traceurRuntime.typeof(console)) == "object" && typeof console.log != "undefined") {
      console.log(string);
      return;
    }
    if ((typeof window === 'undefined' ? 'undefined' : $traceurRuntime.typeof(window)) == "object") {
      return;
    }
    if (typeof print == "function") {
      print(string);
      return;
    }
    throw "Unable to print message: " + String(string);
  }
  dart.fn(printString, dart.void, [core.String]);
  exports.printString = printString;
});
