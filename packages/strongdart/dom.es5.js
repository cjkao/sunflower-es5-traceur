dart_library.library('packages/strongdart/dom', null, ["dart/_runtime", 'dart/core'], [], function(exports, dart, core) {
  'use strict';
  var dartx = dart.dartx;
  var Window = function($__super) {
    function Window() {
      $traceurRuntime.superConstructor(Window).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Window, {}, {}, $__super);
  }(core.Object);
  Window[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var JsName = function($__super) {
    function JsName() {
      $traceurRuntime.superConstructor(JsName).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(JsName, {JsName: function(opts) {
        var name = opts && 'name' in opts ? opts.name : null;
        this.name = name;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(JsName, {constructors: function() {
      return ({JsName: [JsName, [], {name: core.String}]});
    }});
  var Overload = function($__super) {
    function Overload() {
      $traceurRuntime.superConstructor(Overload).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Overload, {Overload: function() {}}, {}, $__super);
  }(core.Object);
  dart.setSignature(Overload, {constructors: function() {
      return ({Overload: [Overload, []]});
    }});
  var overload = dart.const(new Overload());
  var Node = function($__super) {
    function Node() {
      $traceurRuntime.superConstructor(Node).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Node, {}, {}, $__super);
  }(core.Object);
  Node[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var Document = function($__super) {
    function Document() {
      $traceurRuntime.superConstructor(Document).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Document, {Document: function() {
        this.head = null;
        this.body = null;
      }}, {}, $__super);
  }(Node);
  Document[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var Blob = function($__super) {
    function Blob() {
      $traceurRuntime.superConstructor(Blob).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Blob, {}, {}, $__super);
  }(core.Object);
  dart.setSignature(Blob, {constructors: function() {
      return ({Blob: [Blob, [dart.dynamic], {type: core.String}]});
    }});
  Blob[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var CustomEvent = function($__super) {
    function CustomEvent() {
      $traceurRuntime.superConstructor(CustomEvent).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CustomEvent, {}, {}, $__super);
  }(core.Object);
  dart.setSignature(CustomEvent, {constructors: function() {
      return ({CustomEvent: [CustomEvent, [core.String], {
          detail: dart.dynamic,
          bubbles: dart.dynamic,
          cancelable: dart.dynamic
        }]});
    }});
  var Element = function($__super) {
    function Element() {
      $traceurRuntime.superConstructor(Element).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Element, {Element: function() {
        this.textContent = null;
      }}, {}, $__super);
  }(Node);
  Element[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var HTMLElement = function($__super) {
    function HTMLElement() {
      $traceurRuntime.superConstructor(HTMLElement).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(HTMLElement, {HTMLElement: function() {
        this.innerHTML = null;
        $traceurRuntime.superGet(this, HTMLElement.prototype, "Element").call(this);
      }}, {}, $__super);
  }(Element);
  HTMLElement[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var HTMLCollection = function($__super) {
    function HTMLCollection() {
      $traceurRuntime.superConstructor(HTMLCollection).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(HTMLCollection, {}, {}, $__super);
  }(core.Object);
  dart.setSignature(HTMLCollection, {methods: function() {
      return ({get: [Element, [core.num]]});
    }});
  var NodeList = function($__super) {
    function NodeList() {
      $traceurRuntime.superConstructor(NodeList).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(NodeList, {}, {}, $__super);
  }(core.Object);
  dart.setSignature(NodeList, {
    constructors: function() {
      return ({NodeList: [NodeList, []]});
    },
    methods: function() {
      return ({
        item: [Node, [core.num]],
        get: [Node, [core.num]],
        set: [dart.void, [core.num, dart.dynamic]]
      });
    }
  });
  NodeList[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var EventListener = dart.typedef('EventListener', function() {
    return dart.functionType(dart.void, [Event]);
  });
  var Event = function($__super) {
    function Event() {
      $traceurRuntime.superConstructor(Event).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Event, {}, {}, $__super);
  }(core.Object);
  Event[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var InputElement = function($__super) {
    function InputElement() {
      $traceurRuntime.superConstructor(InputElement).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(InputElement, {InputElement: function() {
        this.value = null;
        $traceurRuntime.superGet(this, InputElement.prototype, "HTMLElement").call(this);
      }}, {}, $__super);
  }(HTMLElement);
  InputElement[dart.metadata] = function() {
    return [dart.const(new JsName({name: 'HTMLInputElement'}))];
  };
  var CanvasElement = function($__super) {
    function CanvasElement() {
      $traceurRuntime.superConstructor(CanvasElement).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CanvasElement, {CanvasElement: function() {
        $traceurRuntime.superGet(this, CanvasElement.prototype, "HTMLElement").call(this);
      }}, {}, $__super);
  }(HTMLElement);
  CanvasElement[dart.metadata] = function() {
    return [dart.const(new JsName({name: 'HTMLCanvasElement'}))];
  };
  var DivElement = function($__super) {
    function DivElement() {
      $traceurRuntime.superConstructor(DivElement).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(DivElement, {DivElement: function() {
        $traceurRuntime.superGet(this, DivElement.prototype, "HTMLElement").call(this);
      }}, {}, $__super);
  }(HTMLElement);
  DivElement[dart.metadata] = function() {
    return [dart.const(new JsName({name: 'HTMLDivElement'}))];
  };
  var ScriptElement = function($__super) {
    function ScriptElement() {
      $traceurRuntime.superConstructor(ScriptElement).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ScriptElement, {ScriptElement: function() {
        this.type = null;
        $traceurRuntime.superGet(this, ScriptElement.prototype, "HTMLElement").call(this);
      }}, {}, $__super);
  }(HTMLElement);
  ScriptElement[dart.metadata] = function() {
    return [dart.const(new JsName({name: 'HTMLScriptElement'}))];
  };
  var RenderingContext = function($__super) {
    function RenderingContext() {
      $traceurRuntime.superConstructor(RenderingContext).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(RenderingContext, {}, {}, $__super);
  }(core.Object);
  var CanvasRenderingContext2D = function($__super) {
    function CanvasRenderingContext2D() {
      $traceurRuntime.superConstructor(CanvasRenderingContext2D).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CanvasRenderingContext2D, {CanvasRenderingContext2D: function() {
        this.globalAlpha = null;
        this.globalCompositeOperation = null;
        this.strokeStyle = null;
        this.fillStyle = null;
        this.shadowOffsetX = null;
        this.shadowOffsetY = null;
        this.shadowBlur = null;
        this.shadowColor = null;
      }}, {}, $__super);
  }(core.Object);
  CanvasRenderingContext2D[dart.implements] = function() {
    return [CanvasDrawingStyles, CanvasPathMethods, RenderingContext];
  };
  CanvasRenderingContext2D[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var CanvasDrawingStyles = function($__super) {
    function CanvasDrawingStyles() {
      $traceurRuntime.superConstructor(CanvasDrawingStyles).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CanvasDrawingStyles, {CanvasDrawingStyles: function() {
        this.lineWidth = null;
        this.lineCap = null;
        this.lineJoin = null;
        this.miterLimit = null;
        this.lineDashOffset = null;
        this.font = null;
        this.textAlign = null;
        this.textBaseline = null;
      }}, {}, $__super);
  }(core.Object);
  var CanvasPathMethods = function($__super) {
    function CanvasPathMethods() {
      $traceurRuntime.superConstructor(CanvasPathMethods).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CanvasPathMethods, {}, {}, $__super);
  }(core.Object);
  var CanvasGradient = function($__super) {
    function CanvasGradient() {
      $traceurRuntime.superConstructor(CanvasGradient).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CanvasGradient, {}, {}, $__super);
  }(core.Object);
  CanvasGradient[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var CanvasPattern = function($__super) {
    function CanvasPattern() {
      $traceurRuntime.superConstructor(CanvasPattern).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(CanvasPattern, {}, {}, $__super);
  }(core.Object);
  CanvasPattern[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var TextMetrics = function($__super) {
    function TextMetrics() {
      $traceurRuntime.superConstructor(TextMetrics).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TextMetrics, {}, {}, $__super);
  }(core.Object);
  TextMetrics[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  var ImageData = function($__super) {
    function ImageData() {
      $traceurRuntime.superConstructor(ImageData).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ImageData, {}, {}, $__super);
  }(core.Object);
  ImageData[dart.metadata] = function() {
    return [dart.const(new JsName())];
  };
  exports.Window = Window;
  exports.JsName = JsName;
  exports.Overload = Overload;
  exports.overload = overload;
  exports.Node = Node;
  exports.Document = Document;
  exports.Blob = Blob;
  exports.CustomEvent = CustomEvent;
  exports.Element = Element;
  exports.HTMLElement = HTMLElement;
  exports.HTMLCollection = HTMLCollection;
  exports.NodeList = NodeList;
  exports.EventListener = EventListener;
  exports.Event = Event;
  exports.InputElement = InputElement;
  exports.CanvasElement = CanvasElement;
  exports.DivElement = DivElement;
  exports.ScriptElement = ScriptElement;
  exports.RenderingContext = RenderingContext;
  exports.CanvasRenderingContext2D = CanvasRenderingContext2D;
  exports.CanvasDrawingStyles = CanvasDrawingStyles;
  exports.CanvasPathMethods = CanvasPathMethods;
  exports.CanvasGradient = CanvasGradient;
  exports.CanvasPattern = CanvasPattern;
  exports.TextMetrics = TextMetrics;
  exports.ImageData = ImageData;
});
