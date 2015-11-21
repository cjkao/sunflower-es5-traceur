dart_library.library('packages/strongdart/painter', null, ["dart/_runtime", 'dart/math', 'packages/strongdart/dom', 'dart/core', 'packages/strongdart/circle'], [], function(exports, dart, math, dom, core, circle) {
  'use strict';
  var dartx = dart.dartx;
  var ORANGE = "orange";
  var RED = "red";
  var BLUE = "blue";
  var TAU = dart.notNull(math.PI) * 2;
  function querySelector(selector) {
    return dom.document.querySelector(selector);
  }
  dart.fn(querySelector, dom.Element, [core.String]);
  dart.defineLazyProperties(exports, {
    get canvas() {
      return dart.as(querySelector("#canvas"), dom.CanvasElement);
    },
    get context() {
      return dart.as(exports.canvas.getContext('2d'), dom.CanvasRenderingContext2D);
    }
  });
  var CirclePainter = function($__super) {
    function CirclePainter() {
      $traceurRuntime.superConstructor(CirclePainter).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CirclePainter, {
      CirclePainter: function() {
        this.color = ORANGE;
      },
      draw: function(context) {
        context.beginPath();
        context.lineWidth = 2;
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, TAU, false);
        context.fill();
        context.closePath();
        context.stroke();
      }
    }, {}, $__super);
  }(core.Object);
  CirclePainter[dart.implements] = function() {
    return [circle.Circle];
  };
  dart.setSignature(CirclePainter, {methods: function() {
      return ({draw: [dart.void, [dom.CanvasRenderingContext2D]]});
    }});
  exports.ORANGE = ORANGE;
  exports.RED = RED;
  exports.BLUE = BLUE;
  exports.TAU = TAU;
  exports.querySelector = querySelector;
  exports.CirclePainter = CirclePainter;
});
