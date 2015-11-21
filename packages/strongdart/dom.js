dart_library.library('packages/strongdart/dom', null, /* Imports */[
  "dart/_runtime",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class Window extends core.Object {}
  Window[dart.metadata] = () => [dart.const(new JsName())];
  class JsName extends core.Object {
    JsName(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      this.name = name;
    }
  }
  dart.setSignature(JsName, {
    constructors: () => ({JsName: [JsName, [], {name: core.String}]})
  });
  class Overload extends core.Object {
    Overload() {
    }
  }
  dart.setSignature(Overload, {
    constructors: () => ({Overload: [Overload, []]})
  });
  let overload = dart.const(new Overload());
  class Node extends core.Object {}
  Node[dart.metadata] = () => [dart.const(new JsName())];
  class Document extends Node {
    Document() {
      this.head = null;
      this.body = null;
    }
  }
  Document[dart.metadata] = () => [dart.const(new JsName())];
  class Blob extends core.Object {}
  dart.setSignature(Blob, {
    constructors: () => ({Blob: [Blob, [dart.dynamic], {type: core.String}]})
  });
  Blob[dart.metadata] = () => [dart.const(new JsName())];
  class CustomEvent extends core.Object {}
  dart.setSignature(CustomEvent, {
    constructors: () => ({CustomEvent: [CustomEvent, [core.String], {detail: dart.dynamic, bubbles: dart.dynamic, cancelable: dart.dynamic}]})
  });
  class Element extends Node {
    Element() {
      this.textContent = null;
    }
  }
  Element[dart.metadata] = () => [dart.const(new JsName())];
  class HTMLElement extends Element {
    HTMLElement() {
      this.innerHTML = null;
      super.Element();
    }
  }
  HTMLElement[dart.metadata] = () => [dart.const(new JsName())];
  class HTMLCollection extends core.Object {}
  dart.setSignature(HTMLCollection, {
    methods: () => ({get: [Element, [core.num]]})
  });
  class NodeList extends core.Object {}
  dart.setSignature(NodeList, {
    constructors: () => ({NodeList: [NodeList, []]}),
    methods: () => ({
      item: [Node, [core.num]],
      get: [Node, [core.num]],
      set: [dart.void, [core.num, dart.dynamic]]
    })
  });
  NodeList[dart.metadata] = () => [dart.const(new JsName())];
  let EventListener = dart.typedef('EventListener', () => dart.functionType(dart.void, [Event]));
  class Event extends core.Object {}
  Event[dart.metadata] = () => [dart.const(new JsName())];
  class InputElement extends HTMLElement {
    InputElement() {
      this.value = null;
      super.HTMLElement();
    }
  }
  InputElement[dart.metadata] = () => [dart.const(new JsName({name: 'HTMLInputElement'}))];
  class CanvasElement extends HTMLElement {
    CanvasElement() {
      super.HTMLElement();
    }
  }
  CanvasElement[dart.metadata] = () => [dart.const(new JsName({name: 'HTMLCanvasElement'}))];
  class DivElement extends HTMLElement {
    DivElement() {
      super.HTMLElement();
    }
  }
  DivElement[dart.metadata] = () => [dart.const(new JsName({name: 'HTMLDivElement'}))];
  class ScriptElement extends HTMLElement {
    ScriptElement() {
      this.type = null;
      super.HTMLElement();
    }
  }
  ScriptElement[dart.metadata] = () => [dart.const(new JsName({name: 'HTMLScriptElement'}))];
  class RenderingContext extends core.Object {}
  class CanvasRenderingContext2D extends core.Object {
    CanvasRenderingContext2D() {
      this.globalAlpha = null;
      this.globalCompositeOperation = null;
      this.strokeStyle = null;
      this.fillStyle = null;
      this.shadowOffsetX = null;
      this.shadowOffsetY = null;
      this.shadowBlur = null;
      this.shadowColor = null;
    }
  }
  CanvasRenderingContext2D[dart.implements] = () => [CanvasDrawingStyles, CanvasPathMethods, RenderingContext];
  CanvasRenderingContext2D[dart.metadata] = () => [dart.const(new JsName())];
  class CanvasDrawingStyles extends core.Object {
    CanvasDrawingStyles() {
      this.lineWidth = null;
      this.lineCap = null;
      this.lineJoin = null;
      this.miterLimit = null;
      this.lineDashOffset = null;
      this.font = null;
      this.textAlign = null;
      this.textBaseline = null;
    }
  }
  class CanvasPathMethods extends core.Object {}
  class CanvasGradient extends core.Object {}
  CanvasGradient[dart.metadata] = () => [dart.const(new JsName())];
  class CanvasPattern extends core.Object {}
  CanvasPattern[dart.metadata] = () => [dart.const(new JsName())];
  class TextMetrics extends core.Object {}
  TextMetrics[dart.metadata] = () => [dart.const(new JsName())];
  class ImageData extends core.Object {}
  ImageData[dart.metadata] = () => [dart.const(new JsName())];
  // Exports:
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
//# sourceMappingURL=dom.js.map