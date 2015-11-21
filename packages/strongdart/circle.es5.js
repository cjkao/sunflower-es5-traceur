dart_library.library('packages/strongdart/circle', null, ["dart/_runtime", 'dart/core'], [], function(exports, dart, core) {
  'use strict';
  var dartx = dart.dartx;
  var Circle = function($__super) {
    function Circle() {
      $traceurRuntime.superConstructor(Circle).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Circle, {Circle: function(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.aa = null;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(Circle, {constructors: function() {
      return ({Circle: [Circle, [core.num, core.num, core.num]]});
    }});
  exports.Circle = Circle;
});
