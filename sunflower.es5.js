dart_library.library('sunflower', null, ["dart/_runtime", 'packages/strongdart/dom', 'dart/core', 'dart/math', 'packages/strongdart/painter', 'packages/strongdart/circle'], [], function(exports, dart, dom, core, math, painter, circle) {
  'use strict';
  var dartx = dart.dartx;
  var SEED_RADIUS = 2;
  var SCALE_FACTOR = 4;
  var MAX_D = 300;
  var centerX = dart.notNull(MAX_D) / 2;
  var centerY = centerX;
  function querySelector(selector) {
    return document.querySelector(selector);
  }
  dart.fn(querySelector, Element, [core.String]);
  exports.seeds = 0;
  dart.defineLazyProperties(exports, {
    get canvas() {
      return dart.as(querySelector("#canvas"), Element);
    },
    get context() {
      return dart.as(exports.canvas.getContext('2d'), CanvasRenderingContext2D);
    },
    get slider() {
      return dart.as(querySelector("#slider"), Element);
    },
    get notes() {
      return querySelector("#notes");
    },
    get PHI() {
      return (dart.notNull(math.sqrt(5)) + 1) / 2;
    }
  });
  function main() {
    exports.slider.addEventListener('change', dart.fn(function(e) {
      return draw();
    }, dart.void, [dart.dynamic]));
    draw();
  }
  dart.fn(main, dart.void, []);
  function draw() {
    exports.seeds = core.int.parse(exports.slider.value);
    exports.context.clearRect(0, 0, MAX_D, MAX_D);
    for (var i = 0; dart.notNull(i) < dart.notNull(exports.seeds); i = dart.notNull(i) + 1) {
      var theta = dart.notNull(i) * dart.notNull(painter.TAU) / dart.notNull(exports.PHI);
      var r = dart.notNull(math.sqrt(i)) * dart.notNull(SCALE_FACTOR);
      var x = dart.notNull(centerX) + dart.notNull(r) * dart.notNull(math.cos(theta));
      var y = dart.notNull(centerY) - dart.notNull(r) * dart.notNull(math.sin(theta));
      new SunflowerSeed(x, y, SEED_RADIUS).draw(exports.context);
    }
    exports.notes.textContent = (exports.seeds + " seeds");
  }
  dart.fn(draw, dart.void, []);
  var SunflowerSeed = function($__super) {
    function SunflowerSeed() {
      $traceurRuntime.superConstructor(SunflowerSeed).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(SunflowerSeed, {SunflowerSeed: function(x, y, radius, color) {
        if (color === void 0)
          color = null;
        $traceurRuntime.superGet(this, SunflowerSeed.prototype, "Circle").call(this, x, y, radius);
        if (color != null)
          this.color = color;
      }}, {}, $__super);
  }(dart.mixin(circle.Circle, painter.CirclePainter));
  dart.setSignature(SunflowerSeed, {constructors: function() {
      return ({SunflowerSeed: [SunflowerSeed, [core.num, core.num, core.num], [core.String]]});
    }});
  exports.SEED_RADIUS = SEED_RADIUS;
  exports.SCALE_FACTOR = SCALE_FACTOR;
  exports.MAX_D = MAX_D;
  exports.centerX = centerX;
  exports.centerY = centerY;
  exports.querySelector = querySelector;
  exports.main = main;
  exports.draw = draw;
  exports.SunflowerSeed = SunflowerSeed;
});
