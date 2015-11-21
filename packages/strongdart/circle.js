dart_library.library('packages/strongdart/circle', null, /* Imports */[
  "dart/_runtime",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class Circle extends core.Object {
    Circle(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.aa = null;
    }
  }
  dart.setSignature(Circle, {
    constructors: () => ({Circle: [Circle, [core.num, core.num, core.num]]})
  });
  // Exports:
  exports.Circle = Circle;
});
//# sourceMappingURL=circle.js.map