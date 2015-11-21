dart_library.library('dart/async', null, ["dart/_runtime", 'dart/core', 'dart/_internal', 'dart/collection'], ['dart/_isolate_helper'], function(exports, dart, core, _internal, collection, _isolate_helper) {
  'use strict';
  var dartx = dart.dartx;
  function _invokeErrorHandler(errorHandler, error, stackTrace) {
    if (dart.is(errorHandler, ZoneBinaryCallback)) {
      return dart.dcall(errorHandler, error, stackTrace);
    } else {
      return dart.dcall(errorHandler, error);
    }
  }
  dart.fn(_invokeErrorHandler, dart.dynamic, [core.Function, core.Object, core.StackTrace]);
  function _registerErrorHandler(errorHandler, zone) {
    if (dart.is(errorHandler, ZoneBinaryCallback)) {
      return zone.registerBinaryCallback(errorHandler);
    } else {
      return zone.registerUnaryCallback(dart.as(errorHandler, __CastType0));
    }
  }
  dart.fn(_registerErrorHandler, function() {
    return dart.definiteFunctionType(core.Function, [core.Function, Zone]);
  });
  var AsyncError = function($__super) {
    function AsyncError() {
      $traceurRuntime.superConstructor(AsyncError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(AsyncError, {
      AsyncError: function(error, stackTrace) {
        this.error = error;
        this.stackTrace = stackTrace;
      },
      toString: function() {
        return dart.toString(this.error);
      }
    }, {}, $__super);
  }(core.Object);
  AsyncError[dart.implements] = function() {
    return [core.Error];
  };
  dart.setSignature(AsyncError, {constructors: function() {
      return ({AsyncError: [AsyncError, [dart.dynamic, core.StackTrace]]});
    }});
  var _UncaughtAsyncError = function($__super) {
    function _UncaughtAsyncError() {
      $traceurRuntime.superConstructor(_UncaughtAsyncError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_UncaughtAsyncError, {
      _UncaughtAsyncError: function(error, stackTrace) {
        $traceurRuntime.superGet(this, _UncaughtAsyncError.prototype, "AsyncError").call(this, error, _UncaughtAsyncError._getBestStackTrace(error, stackTrace));
      },
      toString: function() {
        var result = ("Uncaught Error: " + this.error);
        if (this.stackTrace != null) {
          result = dart.notNull(result) + ("\nStack Trace:\n" + this.stackTrace);
        }
        return result;
      }
    }, {_getBestStackTrace: function(error, stackTrace) {
        if (stackTrace != null)
          return stackTrace;
        if (dart.is(error, core.Error)) {
          return dart.as(dart.dload(error, 'stackTrace'), core.StackTrace);
        }
        return null;
      }}, $__super);
  }(AsyncError);
  dart.setSignature(_UncaughtAsyncError, {
    constructors: function() {
      return ({_UncaughtAsyncError: [_UncaughtAsyncError, [dart.dynamic, core.StackTrace]]});
    },
    statics: function() {
      return ({_getBestStackTrace: [core.StackTrace, [dart.dynamic, core.StackTrace]]});
    },
    names: ['_getBestStackTrace']
  });
  var __CastType0 = dart.typedef('__CastType0', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var _add = Symbol('_add');
  var _closeUnchecked = Symbol('_closeUnchecked');
  var _addError = Symbol('_addError');
  var _completeError = Symbol('_completeError');
  var _complete = Symbol('_complete');
  var _sink = Symbol('_sink');
  var Stream$ = dart.generic(function(T) {
    var Stream = function($__super) {
      function Stream() {
        $traceurRuntime.superConstructor(Stream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Stream, {
        Stream: function() {},
        get isBroadcast() {
          return false;
        },
        asBroadcastStream: function(opts) {
          var onListen = opts && 'onListen' in opts ? opts.onListen : null;
          dart.as(onListen, dart.functionType(dart.void, [StreamSubscription$(T)]));
          var onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
          dart.as(onCancel, dart.functionType(dart.void, [StreamSubscription$(T)]));
          return new (_AsBroadcastStream$(T))(this, dart.as(onListen, __CastType12), dart.as(onCancel, dart.functionType(dart.void, [StreamSubscription])));
        },
        where: function(test) {
          dart.as(test, dart.functionType(core.bool, [T]));
          return new (_WhereStream$(T))(this, test);
        },
        map: function(convert) {
          dart.as(convert, dart.functionType(dart.dynamic, [T]));
          return new (_MapStream$(T, dart.dynamic))(this, convert);
        },
        asyncMap: function(convert) {
          dart.as(convert, dart.functionType(dart.dynamic, [T]));
          var controller = null;
          var subscription = null;
          var onListen = (function() {
            var add = dart.bind(controller, 'add');
            dart.assert(dart.is(controller, _StreamController) || dart.is(controller, _BroadcastStreamController));
            var eventSink = dart.as(controller, _EventSink$(T));
            var addError = dart.bind(eventSink, _addError);
            subscription = this.listen(dart.fn(function(event) {
              dart.as(event, T);
              var newValue = null;
              try {
                newValue = convert(event);
              } catch (e) {
                var s = dart.stackTrace(e);
                controller.addError(e, s);
                return;
              }
              if (dart.is(newValue, Future)) {
                subscription.pause();
                dart.dsend(dart.dsend(newValue, 'then', add, {onError: addError}), 'whenComplete', dart.bind(subscription, 'resume'));
              } else {
                controller.add(newValue);
              }
            }, dart.dynamic, [T]), {
              onError: addError,
              onDone: dart.bind(controller, 'close')
            });
          }).bind(this);
          dart.fn(onListen, dart.void, []);
          if (dart.notNull(this.isBroadcast)) {
            controller = StreamController.broadcast({
              onListen: onListen,
              onCancel: dart.fn(function() {
                subscription.cancel();
              }),
              sync: true
            });
          } else {
            controller = StreamController.new({
              onListen: onListen,
              onPause: dart.fn(function() {
                subscription.pause();
              }),
              onResume: dart.fn(function() {
                subscription.resume();
              }),
              onCancel: dart.fn(function() {
                subscription.cancel();
              }),
              sync: true
            });
          }
          return controller.stream;
        },
        asyncExpand: function(convert) {
          dart.as(convert, dart.functionType(Stream$(), [T]));
          var controller = null;
          var subscription = null;
          var onListen = (function() {
            dart.assert(dart.is(controller, _StreamController) || dart.is(controller, _BroadcastStreamController));
            var eventSink = dart.as(controller, _EventSink$(T));
            subscription = this.listen(dart.fn(function(event) {
              dart.as(event, T);
              var newStream = null;
              try {
                newStream = convert(event);
              } catch (e) {
                var s = dart.stackTrace(e);
                controller.addError(e, s);
                return;
              }
              if (newStream != null) {
                subscription.pause();
                controller.addStream(newStream).whenComplete(dart.bind(subscription, 'resume'));
              }
            }, dart.dynamic, [T]), {
              onError: dart.bind(eventSink, _addError),
              onDone: dart.bind(controller, 'close')
            });
          }).bind(this);
          dart.fn(onListen, dart.void, []);
          if (dart.notNull(this.isBroadcast)) {
            controller = StreamController.broadcast({
              onListen: onListen,
              onCancel: dart.fn(function() {
                subscription.cancel();
              }),
              sync: true
            });
          } else {
            controller = StreamController.new({
              onListen: onListen,
              onPause: dart.fn(function() {
                subscription.pause();
              }),
              onResume: dart.fn(function() {
                subscription.resume();
              }),
              onCancel: dart.fn(function() {
                subscription.cancel();
              }),
              sync: true
            });
          }
          return controller.stream;
        },
        handleError: function(onError, opts) {
          var test = opts && 'test' in opts ? opts.test : null;
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          return new (_HandleErrorStream$(T))(this, onError, test);
        },
        expand: function(convert) {
          dart.as(convert, dart.functionType(core.Iterable, [T]));
          return new (_ExpandStream$(T, dart.dynamic))(this, convert);
        },
        pipe: function(streamConsumer) {
          dart.as(streamConsumer, StreamConsumer$(T));
          return streamConsumer.addStream(this).then(dart.fn(function(_) {
            return streamConsumer.close();
          }, Future, [dart.dynamic]));
        },
        transform: function(streamTransformer) {
          dart.as(streamTransformer, StreamTransformer$(T, dart.dynamic));
          return streamTransformer.bind(this);
        },
        reduce: function(combine) {
          dart.as(combine, dart.functionType(T, [T, T]));
          var result = new (_Future$(T))();
          var seenFirst = false;
          var value = null;
          var subscription = null;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            if (dart.notNull(seenFirst)) {
              _runUserCode(dart.fn(function() {
                return combine(value, element);
              }, T, []), dart.fn(function(newValue) {
                dart.as(newValue, T);
                value = newValue;
              }, dart.dynamic, [T]), dart.as(_cancelAndErrorClosure(subscription, result), __CastType14));
            } else {
              value = element;
              seenFirst = true;
            }
          }, dart.dynamic, [T]), {
            onError: dart.bind(result, _completeError),
            onDone: dart.fn(function() {
              if (!dart.notNull(seenFirst)) {
                try {
                  dart.throw(_internal.IterableElementError.noElement());
                } catch (e) {
                  var s = dart.stackTrace(e);
                  _completeWithErrorCallback(result, e, s);
                }
              } else {
                result[_complete](value);
              }
            }),
            cancelOnError: true
          });
          return result;
        },
        fold: function(initialValue, combine) {
          dart.as(combine, dart.functionType(dart.dynamic, [dart.dynamic, T]));
          var result = new _Future();
          var value = initialValue;
          var subscription = null;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            _runUserCode(dart.fn(function() {
              return dart.dcall(combine, value, element);
            }), dart.fn(function(newValue) {
              value = newValue;
            }), dart.as(_cancelAndErrorClosure(subscription, result), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.fn(function(e, st) {
              result[_completeError](e, dart.as(st, core.StackTrace));
            }),
            onDone: dart.fn(function() {
              result[_complete](value);
            }),
            cancelOnError: true
          });
          return result;
        },
        join: function(separator) {
          if (separator === void 0)
            separator = "";
          var result = new (_Future$(core.String))();
          var buffer = new core.StringBuffer();
          var subscription = null;
          var first = true;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            if (!dart.notNull(first)) {
              buffer.write(separator);
            }
            first = false;
            try {
              buffer.write(element);
            } catch (e) {
              var s = dart.stackTrace(e);
              _cancelAndErrorWithReplacement(subscription, result, e, s);
            }
          }, dart.dynamic, [T]), {
            onError: dart.fn(function(e) {
              result[_completeError](e);
            }),
            onDone: dart.fn(function() {
              result[_complete](dart.toString(buffer));
            }),
            cancelOnError: true
          });
          return result;
        },
        contains: function(needle) {
          var future = new (_Future$(core.bool))();
          var subscription = null;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            _runUserCode(dart.fn(function() {
              return dart.equals(element, needle);
            }, core.bool, []), dart.fn(function(isMatch) {
              if (dart.notNull(isMatch)) {
                _cancelAndValue(subscription, future, true);
              }
            }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](false);
            }),
            cancelOnError: true
          });
          return future;
        },
        forEach: function(action) {
          dart.as(action, dart.functionType(dart.void, [T]));
          var future = new _Future();
          var subscription = null;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            _runUserCode(dart.fn(function() {
              return action(element);
            }, dart.void, []), dart.fn(function(_) {}), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](null);
            }),
            cancelOnError: true
          });
          return future;
        },
        every: function(test) {
          dart.as(test, dart.functionType(core.bool, [T]));
          var future = new (_Future$(core.bool))();
          var subscription = null;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            _runUserCode(dart.fn(function() {
              return test(element);
            }, core.bool, []), dart.fn(function(isMatch) {
              if (!dart.notNull(isMatch)) {
                _cancelAndValue(subscription, future, false);
              }
            }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](true);
            }),
            cancelOnError: true
          });
          return future;
        },
        any: function(test) {
          dart.as(test, dart.functionType(core.bool, [T]));
          var future = new (_Future$(core.bool))();
          var subscription = null;
          subscription = this.listen(dart.fn(function(element) {
            dart.as(element, T);
            _runUserCode(dart.fn(function() {
              return test(element);
            }, core.bool, []), dart.fn(function(isMatch) {
              if (dart.notNull(isMatch)) {
                _cancelAndValue(subscription, future, true);
              }
            }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](false);
            }),
            cancelOnError: true
          });
          return future;
        },
        get length() {
          var future = new (_Future$(core.int))();
          var count = 0;
          this.listen(dart.fn(function(_) {
            count = dart.notNull(count) + 1;
          }), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](count);
            }),
            cancelOnError: true
          });
          return future;
        },
        get isEmpty() {
          var future = new (_Future$(core.bool))();
          var subscription = null;
          subscription = this.listen(dart.fn(function(_) {
            _cancelAndValue(subscription, future, false);
          }), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](true);
            }),
            cancelOnError: true
          });
          return future;
        },
        toList: function() {
          var result = dart.list([], T);
          var future = new (_Future$(core.List$(T)))();
          this.listen(dart.fn(function(data) {
            dart.as(data, T);
            result[dartx.add](data);
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](result);
            }),
            cancelOnError: true
          });
          return future;
        },
        toSet: function() {
          var result = core.Set$(T).new();
          var future = new (_Future$(core.Set$(T)))();
          this.listen(dart.fn(function(data) {
            dart.as(data, T);
            result.add(data);
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              future[_complete](result);
            }),
            cancelOnError: true
          });
          return future;
        },
        drain: function(futureValue) {
          if (futureValue === void 0)
            futureValue = null;
          return this.listen(null, {cancelOnError: true}).asFuture(futureValue);
        },
        take: function(count) {
          return new (_TakeStream$(T))(this, count);
        },
        takeWhile: function(test) {
          dart.as(test, dart.functionType(core.bool, [T]));
          return new (_TakeWhileStream$(T))(this, test);
        },
        skip: function(count) {
          return new (_SkipStream$(T))(this, count);
        },
        skipWhile: function(test) {
          dart.as(test, dart.functionType(core.bool, [T]));
          return new (_SkipWhileStream$(T))(this, test);
        },
        distinct: function(equals) {
          if (equals === void 0)
            equals = null;
          dart.as(equals, dart.functionType(core.bool, [T, T]));
          return new (_DistinctStream$(T))(this, equals);
        },
        get first() {
          var future = new (_Future$(T))();
          var subscription = null;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            _cancelAndValue(subscription, future, value);
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              try {
                dart.throw(_internal.IterableElementError.noElement());
              } catch (e) {
                var s = dart.stackTrace(e);
                _completeWithErrorCallback(future, e, s);
              }
            }),
            cancelOnError: true
          });
          return future;
        },
        get last() {
          var future = new (_Future$(T))();
          var result = null;
          var foundResult = false;
          var subscription = null;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            foundResult = true;
            result = value;
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              if (dart.notNull(foundResult)) {
                future[_complete](result);
                return;
              }
              try {
                dart.throw(_internal.IterableElementError.noElement());
              } catch (e) {
                var s = dart.stackTrace(e);
                _completeWithErrorCallback(future, e, s);
              }
            }),
            cancelOnError: true
          });
          return future;
        },
        get single() {
          var future = new (_Future$(T))();
          var result = null;
          var foundResult = false;
          var subscription = null;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            if (dart.notNull(foundResult)) {
              try {
                dart.throw(_internal.IterableElementError.tooMany());
              } catch (e) {
                var s = dart.stackTrace(e);
                _cancelAndErrorWithReplacement(subscription, future, e, s);
              }
              return;
            }
            foundResult = true;
            result = value;
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              if (dart.notNull(foundResult)) {
                future[_complete](result);
                return;
              }
              try {
                dart.throw(_internal.IterableElementError.noElement());
              } catch (e) {
                var s = dart.stackTrace(e);
                _completeWithErrorCallback(future, e, s);
              }
            }),
            cancelOnError: true
          });
          return future;
        },
        firstWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [T]));
          var defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
          dart.as(defaultValue, dart.functionType(core.Object, []));
          var future = new _Future();
          var subscription = null;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            _runUserCode(dart.fn(function() {
              return test(value);
            }, core.bool, []), dart.fn(function(isMatch) {
              if (dart.notNull(isMatch)) {
                _cancelAndValue(subscription, future, value);
              }
            }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              if (defaultValue != null) {
                _runUserCode(defaultValue, dart.bind(future, _complete), dart.bind(future, _completeError));
                return;
              }
              try {
                dart.throw(_internal.IterableElementError.noElement());
              } catch (e) {
                var s = dart.stackTrace(e);
                _completeWithErrorCallback(future, e, s);
              }
            }),
            cancelOnError: true
          });
          return future;
        },
        lastWhere: function(test, opts) {
          dart.as(test, dart.functionType(core.bool, [T]));
          var defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
          dart.as(defaultValue, dart.functionType(core.Object, []));
          var future = new _Future();
          var result = null;
          var foundResult = false;
          var subscription = null;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            _runUserCode(dart.fn(function() {
              return true == test(value);
            }, core.bool, []), dart.fn(function(isMatch) {
              if (dart.notNull(isMatch)) {
                foundResult = true;
                result = value;
              }
            }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              if (dart.notNull(foundResult)) {
                future[_complete](result);
                return;
              }
              if (defaultValue != null) {
                _runUserCode(defaultValue, dart.bind(future, _complete), dart.bind(future, _completeError));
                return;
              }
              try {
                dart.throw(_internal.IterableElementError.noElement());
              } catch (e) {
                var s = dart.stackTrace(e);
                _completeWithErrorCallback(future, e, s);
              }
            }),
            cancelOnError: true
          });
          return future;
        },
        singleWhere: function(test) {
          dart.as(test, dart.functionType(core.bool, [T]));
          var future = new (_Future$(T))();
          var result = null;
          var foundResult = false;
          var subscription = null;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            _runUserCode(dart.fn(function() {
              return true == test(value);
            }, core.bool, []), dart.fn(function(isMatch) {
              if (dart.notNull(isMatch)) {
                if (dart.notNull(foundResult)) {
                  try {
                    dart.throw(_internal.IterableElementError.tooMany());
                  } catch (e) {
                    var s = dart.stackTrace(e);
                    _cancelAndErrorWithReplacement(subscription, future, e, s);
                  }
                  return;
                }
                foundResult = true;
                result = value;
              }
            }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn(function() {
              if (dart.notNull(foundResult)) {
                future[_complete](result);
                return;
              }
              try {
                dart.throw(_internal.IterableElementError.noElement());
              } catch (e) {
                var s = dart.stackTrace(e);
                _completeWithErrorCallback(future, e, s);
              }
            }),
            cancelOnError: true
          });
          return future;
        },
        elementAt: function(index) {
          var $__4 = this;
          if (!(typeof index == 'number') || dart.notNull(index) < 0)
            dart.throw(new core.ArgumentError(index));
          var future = new (_Future$(T))();
          var subscription = null;
          var elementIndex = 0;
          subscription = this.listen(dart.fn(function(value) {
            dart.as(value, T);
            if (index == elementIndex) {
              _cancelAndValue(subscription, future, value);
              return;
            }
            elementIndex = dart.notNull(elementIndex) + 1;
          }, dart.dynamic, [T]), {
            onError: dart.bind(future, _completeError),
            onDone: dart.fn((function() {
              future[_completeError](core.RangeError.index(index, $__4, "index", null, elementIndex));
            }).bind(this)),
            cancelOnError: true
          });
          return future;
        },
        timeout: function(timeLimit, opts) {
          var onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
          dart.as(onTimeout, dart.functionType(dart.void, [EventSink]));
          var controller = null;
          var subscription = null;
          var timer = null;
          var zone = null;
          var timeout2 = null;
          function onData(event) {
            dart.as(event, T);
            timer.cancel();
            controller.add(event);
            timer = zone.createTimer(timeLimit, dart.as(timeout2, __CastType17));
          }
          dart.fn(onData, dart.void, [T]);
          function onError(error, stackTrace) {
            timer.cancel();
            dart.assert(dart.is(controller, _StreamController) || dart.is(controller, _BroadcastStreamController));
            var eventSink = dart.as(controller, _EventSink$(T));
            eventSink[_addError](error, stackTrace);
            timer = zone.createTimer(timeLimit, dart.as(timeout2, dart.functionType(dart.void, [])));
          }
          dart.fn(onError, dart.void, [dart.dynamic, core.StackTrace]);
          function onDone() {
            timer.cancel();
            controller.close();
          }
          dart.fn(onDone, dart.void, []);
          var onListen = (function() {
            zone = Zone.current;
            if (onTimeout == null) {
              timeout2 = dart.fn(function() {
                controller.addError(new TimeoutException("No stream event", timeLimit), null);
              });
            } else {
              onTimeout = dart.as(zone.registerUnaryCallback(onTimeout), __CastType18);
              var wrapper = new _ControllerEventSinkWrapper(null);
              timeout2 = dart.fn(function() {
                wrapper[_sink] = controller;
                zone.runUnaryGuarded(onTimeout, wrapper);
                wrapper[_sink] = null;
              });
            }
            subscription = this.listen(onData, {
              onError: onError,
              onDone: onDone
            });
            timer = zone.createTimer(timeLimit, dart.as(timeout2, dart.functionType(dart.void, [])));
          }).bind(this);
          dart.fn(onListen, dart.void, []);
          function onCancel() {
            timer.cancel();
            var result = subscription.cancel();
            subscription = null;
            return result;
          }
          dart.fn(onCancel, Future, []);
          controller = dart.notNull(this.isBroadcast) ? new _SyncBroadcastStreamController(onListen, onCancel) : new _SyncStreamController(onListen, dart.fn(function() {
            timer.cancel();
            subscription.pause();
          }), dart.fn(function() {
            subscription.resume();
            timer = zone.createTimer(timeLimit, dart.as(timeout2, dart.functionType(dart.void, [])));
          }), onCancel);
          return controller.stream;
        }
      }, {
        fromFuture: function(future) {
          var controller = dart.as(StreamController$(T).new({sync: true}), _StreamController$(T));
          future.then(dart.fn(function(value) {
            controller[_add](dart.as(value, T));
            controller[_closeUnchecked]();
          }), {onError: dart.fn(function(error, stackTrace) {
              controller[_addError](error, dart.as(stackTrace, core.StackTrace));
              controller[_closeUnchecked]();
            })});
          return controller.stream;
        },
        fromIterable: function(data) {
          return new (_GeneratedStreamImpl$(T))(dart.fn(function() {
            return new (_IterablePendingEvents$(T))(data);
          }, _IterablePendingEvents$(T), []));
        },
        periodic: function(period, computation) {
          if (computation === void 0)
            computation = null;
          if (computation == null)
            computation = dart.fn(function(i) {
              return null;
            }, dart.bottom, [dart.dynamic]);
          var timer = null;
          var computationCount = 0;
          var controller = null;
          var watch = new core.Stopwatch();
          function sendEvent() {
            watch.reset();
            var data = computation((function() {
              var x = computationCount;
              computationCount = dart.notNull(x) + 1;
              return x;
            })());
            controller.add(data);
          }
          dart.fn(sendEvent, dart.void, []);
          function startPeriodicTimer() {
            dart.assert(timer == null);
            timer = Timer.periodic(period, dart.fn(function(timer) {
              sendEvent();
            }, dart.dynamic, [Timer]));
          }
          dart.fn(startPeriodicTimer, dart.void, []);
          controller = StreamController$(T).new({
            sync: true,
            onListen: dart.fn(function() {
              watch.start();
              startPeriodicTimer();
            }),
            onPause: dart.fn(function() {
              timer.cancel();
              timer = null;
              watch.stop();
            }),
            onResume: dart.fn(function() {
              dart.assert(timer == null);
              var elapsed = watch.elapsed;
              watch.start();
              timer = Timer.new(period['-'](elapsed), dart.fn(function() {
                timer = null;
                startPeriodicTimer();
                sendEvent();
              }));
            }),
            onCancel: dart.fn(function() {
              if (timer != null)
                timer.cancel();
              timer = null;
            })
          });
          return controller.stream;
        },
        eventTransformed: function(source, mapSink) {
          return new (_BoundSinkStream$(dart.dynamic, T))(source, dart.as(mapSink, _SinkMapper));
        }
      }, $__super);
    }(core.Object);
    dart.setSignature(Stream, {
      constructors: function() {
        return ({
          Stream: [Stream$(T), []],
          fromFuture: [Stream$(T), [Future$(T)]],
          fromIterable: [Stream$(T), [core.Iterable$(T)]],
          periodic: [Stream$(T), [core.Duration], [dart.functionType(T, [core.int])]],
          eventTransformed: [Stream$(T), [Stream$(), dart.functionType(EventSink, [EventSink$(T)])]]
        });
      },
      methods: function() {
        return ({
          asBroadcastStream: [Stream$(T), [], {
            onListen: dart.functionType(dart.void, [StreamSubscription$(T)]),
            onCancel: dart.functionType(dart.void, [StreamSubscription$(T)])
          }],
          where: [Stream$(T), [dart.functionType(core.bool, [T])]],
          map: [Stream$(), [dart.functionType(dart.dynamic, [T])]],
          asyncMap: [Stream$(), [dart.functionType(dart.dynamic, [T])]],
          asyncExpand: [Stream$(), [dart.functionType(Stream$(), [T])]],
          handleError: [Stream$(T), [core.Function], {test: dart.functionType(core.bool, [dart.dynamic])}],
          expand: [Stream$(), [dart.functionType(core.Iterable, [T])]],
          pipe: [Future, [StreamConsumer$(T)]],
          transform: [Stream$(), [StreamTransformer$(T, dart.dynamic)]],
          reduce: [Future$(T), [dart.functionType(T, [T, T])]],
          fold: [Future, [dart.dynamic, dart.functionType(dart.dynamic, [dart.dynamic, T])]],
          join: [Future$(core.String), [], [core.String]],
          contains: [Future$(core.bool), [core.Object]],
          forEach: [Future, [dart.functionType(dart.void, [T])]],
          every: [Future$(core.bool), [dart.functionType(core.bool, [T])]],
          any: [Future$(core.bool), [dart.functionType(core.bool, [T])]],
          toList: [Future$(core.List$(T)), []],
          toSet: [Future$(core.Set$(T)), []],
          drain: [Future, [], [dart.dynamic]],
          take: [Stream$(T), [core.int]],
          takeWhile: [Stream$(T), [dart.functionType(core.bool, [T])]],
          skip: [Stream$(T), [core.int]],
          skipWhile: [Stream$(T), [dart.functionType(core.bool, [T])]],
          distinct: [Stream$(T), [], [dart.functionType(core.bool, [T, T])]],
          firstWhere: [Future, [dart.functionType(core.bool, [T])], {defaultValue: dart.functionType(core.Object, [])}],
          lastWhere: [Future, [dart.functionType(core.bool, [T])], {defaultValue: dart.functionType(core.Object, [])}],
          singleWhere: [Future$(T), [dart.functionType(core.bool, [T])]],
          elementAt: [Future$(T), [core.int]],
          timeout: [Stream$(), [core.Duration], {onTimeout: dart.functionType(dart.void, [EventSink])}]
        });
      }
    });
    return Stream;
  });
  var Stream = Stream$();
  var _createSubscription = Symbol('_createSubscription');
  var _onListen = Symbol('_onListen');
  var _StreamImpl$ = dart.generic(function(T) {
    var _StreamImpl = function($__super) {
      var $__5;
      function _StreamImpl() {
        $traceurRuntime.superConstructor(_StreamImpl).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamImpl, ($__5 = {}, Object.defineProperty($__5, "_StreamImpl", {
        value: function() {
          $traceurRuntime.superGet(this, _StreamImpl.prototype, "Stream").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "listen", {
        value: function(onData, opts) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var onDone = opts && 'onDone' in opts ? opts.onDone : null;
          dart.as(onDone, dart.functionType(dart.void, []));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
          cancelOnError = core.identical(true, cancelOnError);
          var subscription = this[_createSubscription](onData, onError, onDone, cancelOnError);
          this[_onListen](subscription);
          return dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _createSubscription, {
        value: function(onData, onError, onDone, cancelOnError) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          dart.as(onDone, dart.functionType(dart.void, []));
          return new (_BufferingStreamSubscription$(T))(onData, onError, onDone, cancelOnError);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onListen, {
        value: function(subscription) {},
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(Stream$(T));
    dart.setSignature(_StreamImpl, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "listen", {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {
            onError: core.Function,
            onDone: dart.functionType(dart.void, []),
            cancelOnError: core.bool
          }],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _createSubscription, {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onListen, {
          value: [dart.void, [StreamSubscription]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _StreamImpl;
  });
  var _StreamImpl = _StreamImpl$();
  var _controller = Symbol('_controller');
  var _subscribe = Symbol('_subscribe');
  var _ControllerStream$ = dart.generic(function(T) {
    var _ControllerStream = function($__super) {
      var $__5;
      function _ControllerStream() {
        $traceurRuntime.superConstructor(_ControllerStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ControllerStream, ($__5 = {}, Object.defineProperty($__5, "_ControllerStream", {
        value: function(controller) {
          this[_controller] = controller;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _createSubscription, {
        value: function(onData, onError, onDone, cancelOnError) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          dart.as(onDone, dart.functionType(dart.void, []));
          return this[_controller][_subscribe](onData, onError, onDone, cancelOnError);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "hashCode", {
        get: function() {
          return dart.notNull(dart.hashCode(this[_controller])) ^ 892482866;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, '==', {
        value: function(other) {
          if (dart.notNull(core.identical(this, other)))
            return true;
          if (!dart.is(other, _ControllerStream$()))
            return false;
          var otherStream = dart.as(other, _ControllerStream$());
          return core.identical(otherStream[_controller], this[_controller]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_StreamImpl$(T));
    dart.setSignature(_ControllerStream, {
      constructors: function() {
        return ({_ControllerStream: [_ControllerStream$(T), [_StreamControllerLifecycle$(T)]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _createSubscription, {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, '==', {
          value: [core.bool, [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _ControllerStream;
  });
  var _ControllerStream = _ControllerStream$();
  var _BroadcastStream$ = dart.generic(function(T) {
    var _BroadcastStream = function($__super) {
      function _BroadcastStream() {
        $traceurRuntime.superConstructor(_BroadcastStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BroadcastStream, {
        _BroadcastStream: function(controller) {
          $traceurRuntime.superGet(this, _BroadcastStream.prototype, "_ControllerStream").call(this, dart.as(controller, _StreamControllerLifecycle$(T)));
        },
        get isBroadcast() {
          return true;
        }
      }, {}, $__super);
    }(_ControllerStream$(T));
    dart.setSignature(_BroadcastStream, {constructors: function() {
        return ({_BroadcastStream: [_BroadcastStream$(T), [_StreamControllerLifecycle]]});
      }});
    return _BroadcastStream;
  });
  var _BroadcastStream = _BroadcastStream$();
  var _next = Symbol('_next');
  var _previous = Symbol('_previous');
  var _BroadcastSubscriptionLink = function($__super) {
    function _BroadcastSubscriptionLink() {
      $traceurRuntime.superConstructor(_BroadcastSubscriptionLink).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_BroadcastSubscriptionLink, {_BroadcastSubscriptionLink: function() {
        this[_next] = null;
        this[_previous] = null;
      }}, {}, $__super);
  }(core.Object);
  var _zone = Symbol('_zone');
  var _state = Symbol('_state');
  var _onData = Symbol('_onData');
  var _onError = Symbol('_onError');
  var _onDone = Symbol('_onDone');
  var _cancelFuture = Symbol('_cancelFuture');
  var _pending = Symbol('_pending');
  var _setPendingEvents = Symbol('_setPendingEvents');
  var _isCanceled = Symbol('_isCanceled');
  var _extractPending = Symbol('_extractPending');
  var _isPaused = Symbol('_isPaused');
  var _isInputPaused = Symbol('_isInputPaused');
  var _inCallback = Symbol('_inCallback');
  var _guardCallback = Symbol('_guardCallback');
  var _onPause = Symbol('_onPause');
  var _decrementPauseCount = Symbol('_decrementPauseCount');
  var _hasPending = Symbol('_hasPending');
  var _mayResumeInput = Symbol('_mayResumeInput');
  var _onResume = Symbol('_onResume');
  var _cancel = Symbol('_cancel');
  var _isClosed = Symbol('_isClosed');
  var _waitsForCancel = Symbol('_waitsForCancel');
  var _canFire = Symbol('_canFire');
  var _cancelOnError = Symbol('_cancelOnError');
  var _onCancel = Symbol('_onCancel');
  var _incrementPauseCount = Symbol('_incrementPauseCount');
  var _sendData = Symbol('_sendData');
  var _addPending = Symbol('_addPending');
  var _sendError = Symbol('_sendError');
  var _sendDone = Symbol('_sendDone');
  var _close = Symbol('_close');
  var _checkState = Symbol('_checkState');
  var _BufferingStreamSubscription$ = dart.generic(function(T) {
    var _BufferingStreamSubscription = function($__super) {
      var $__5;
      function _BufferingStreamSubscription() {
        $traceurRuntime.superConstructor(_BufferingStreamSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BufferingStreamSubscription, ($__5 = {}, Object.defineProperty($__5, "_BufferingStreamSubscription", {
        value: function(onData, onError, onDone, cancelOnError) {
          this[_zone] = Zone.current;
          this[_state] = dart.notNull(cancelOnError) ? _BufferingStreamSubscription$()._STATE_CANCEL_ON_ERROR : 0;
          this[_onData] = null;
          this[_onError] = null;
          this[_onDone] = null;
          this[_cancelFuture] = null;
          this[_pending] = null;
          this.onData(onData);
          this.onError(onError);
          this.onDone(onDone);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _setPendingEvents, {
        value: function(pendingEvents) {
          dart.assert(this[_pending] == null);
          if (pendingEvents == null)
            return;
          this[_pending] = pendingEvents;
          if (!dart.notNull(pendingEvents.isEmpty)) {
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_HAS_PENDING);
            this[_pending].schedule(this);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _extractPending, {
        value: function() {
          dart.assert(this[_isCanceled]);
          var events = this[_pending];
          this[_pending] = null;
          return events;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onData", {
        value: function(handleData) {
          dart.as(handleData, dart.functionType(dart.void, [T]));
          if (handleData == null)
            handleData = dart.as(_nullDataHandler, __CastType20);
          this[_onData] = dart.as(this[_zone].registerUnaryCallback(handleData), _DataHandler$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onError", {
        value: function(handleError) {
          if (handleError == null)
            handleError = _nullErrorHandler;
          this[_onError] = _registerErrorHandler(handleError, this[_zone]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onDone", {
        value: function(handleDone) {
          dart.as(handleDone, dart.functionType(dart.void, []));
          if (handleDone == null)
            handleDone = _nullDoneHandler;
          this[_onDone] = this[_zone].registerCallback(handleDone);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "pause", {
        value: function(resumeSignal) {
          if (resumeSignal === void 0)
            resumeSignal = null;
          if (dart.notNull(this[_isCanceled]))
            return;
          var wasPaused = this[_isPaused];
          var wasInputPaused = this[_isInputPaused];
          this[_state] = dart.notNull(this[_state]) + dart.notNull(_BufferingStreamSubscription$()._STATE_PAUSE_COUNT) | dart.notNull(_BufferingStreamSubscription$()._STATE_INPUT_PAUSED);
          if (resumeSignal != null)
            resumeSignal.whenComplete(dart.bind(this, 'resume'));
          if (!dart.notNull(wasPaused) && this[_pending] != null)
            this[_pending].cancelSchedule();
          if (!dart.notNull(wasInputPaused) && !dart.notNull(this[_inCallback]))
            this[_guardCallback](dart.bind(this, _onPause));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "resume", {
        value: function() {
          if (dart.notNull(this[_isCanceled]))
            return;
          if (dart.notNull(this[_isPaused])) {
            this[_decrementPauseCount]();
            if (!dart.notNull(this[_isPaused])) {
              if (dart.notNull(this[_hasPending]) && !dart.notNull(this[_pending].isEmpty)) {
                this[_pending].schedule(this);
              } else {
                dart.assert(this[_mayResumeInput]);
                this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_INPUT_PAUSED);
                if (!dart.notNull(this[_inCallback]))
                  this[_guardCallback](dart.bind(this, _onResume));
              }
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "cancel", {
        value: function() {
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_WAIT_FOR_CANCEL);
          if (dart.notNull(this[_isCanceled]))
            return this[_cancelFuture];
          this[_cancel]();
          return this[_cancelFuture];
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "asFuture", {
        value: function(futureValue) {
          var $__4 = this;
          if (futureValue === void 0)
            futureValue = null;
          var result = new (_Future$(T))();
          this[_onDone] = dart.fn(function() {
            result[_complete](futureValue);
          });
          this[_onError] = dart.fn((function(error, stackTrace) {
            $__4.cancel();
            result[_completeError](error, dart.as(stackTrace, core.StackTrace));
          }).bind(this));
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _isInputPaused, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_INPUT_PAUSED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isClosed, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_CLOSED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isCanceled, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_CANCELED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _waitsForCancel, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_WAIT_FOR_CANCEL)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _inCallback, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _hasPending, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_HAS_PENDING)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isPaused, {
        get: function() {
          return dart.notNull(this[_state]) >= dart.notNull(_BufferingStreamSubscription$()._STATE_PAUSE_COUNT);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _canFire, {
        get: function() {
          return dart.notNull(this[_state]) < dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _mayResumeInput, {
        get: function() {
          return !dart.notNull(this[_isPaused]) && (this[_pending] == null || dart.notNull(this[_pending].isEmpty));
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _cancelOnError, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_CANCEL_ON_ERROR)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "isPaused", {
        get: function() {
          return this[_isPaused];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _cancel, {
        value: function() {
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_CANCELED);
          if (dart.notNull(this[_hasPending])) {
            this[_pending].cancelSchedule();
          }
          if (!dart.notNull(this[_inCallback]))
            this[_pending] = null;
          this[_cancelFuture] = this[_onCancel]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _incrementPauseCount, {
        value: function() {
          this[_state] = dart.notNull(this[_state]) + dart.notNull(_BufferingStreamSubscription$()._STATE_PAUSE_COUNT) | dart.notNull(_BufferingStreamSubscription$()._STATE_INPUT_PAUSED);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _decrementPauseCount, {
        value: function() {
          dart.assert(this[_isPaused]);
          this[_state] = dart.notNull(this[_state]) - dart.notNull(_BufferingStreamSubscription$()._STATE_PAUSE_COUNT);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _add, {
        value: function(data) {
          dart.as(data, T);
          dart.assert(!dart.notNull(this[_isClosed]));
          if (dart.notNull(this[_isCanceled]))
            return;
          if (dart.notNull(this[_canFire])) {
            this[_sendData](data);
          } else {
            this[_addPending](new _DelayedData(data));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addError, {
        value: function(error, stackTrace) {
          if (dart.notNull(this[_isCanceled]))
            return;
          if (dart.notNull(this[_canFire])) {
            this[_sendError](error, stackTrace);
          } else {
            this[_addPending](new _DelayedError(error, stackTrace));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _close, {
        value: function() {
          dart.assert(!dart.notNull(this[_isClosed]));
          if (dart.notNull(this[_isCanceled]))
            return;
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_CLOSED);
          if (dart.notNull(this[_canFire])) {
            this[_sendDone]();
          } else {
            this[_addPending](dart.const(new _DelayedDone()));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onPause, {
        value: function() {
          dart.assert(this[_isInputPaused]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onResume, {
        value: function() {
          dart.assert(!dart.notNull(this[_isInputPaused]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onCancel, {
        value: function() {
          dart.assert(this[_isCanceled]);
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addPending, {
        value: function(event) {
          var pending = dart.as(this[_pending], _StreamImplEvents);
          if (this[_pending] == null)
            pending = this[_pending] = new _StreamImplEvents();
          pending.add(event);
          if (!dart.notNull(this[_hasPending])) {
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_HAS_PENDING);
            if (!dart.notNull(this[_isPaused])) {
              this[_pending].schedule(this);
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendData, {
        value: function(data) {
          dart.as(data, T);
          dart.assert(!dart.notNull(this[_isCanceled]));
          dart.assert(!dart.notNull(this[_isPaused]));
          dart.assert(!dart.notNull(this[_inCallback]));
          var wasInputPaused = this[_isInputPaused];
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
          this[_zone].runUnaryGuarded(this[_onData], data);
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
          this[_checkState](wasInputPaused);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendError, {
        value: function(error, stackTrace) {
          dart.assert(!dart.notNull(this[_isCanceled]));
          dart.assert(!dart.notNull(this[_isPaused]));
          dart.assert(!dart.notNull(this[_inCallback]));
          var wasInputPaused = this[_isInputPaused];
          var sendError = (function() {
            if (dart.notNull(this[_isCanceled]) && !dart.notNull(this[_waitsForCancel]))
              return;
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
            if (dart.is(this[_onError], ZoneBinaryCallback)) {
              this[_zone].runBinaryGuarded(dart.as(this[_onError], __CastType22), error, stackTrace);
            } else {
              this[_zone].runUnaryGuarded(dart.as(this[_onError], __CastType25), error);
            }
            this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
          }).bind(this);
          dart.fn(sendError, dart.void, []);
          if (dart.notNull(this[_cancelOnError])) {
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_WAIT_FOR_CANCEL);
            this[_cancel]();
            if (dart.is(this[_cancelFuture], Future)) {
              this[_cancelFuture].whenComplete(sendError);
            } else {
              sendError();
            }
          } else {
            sendError();
            this[_checkState](wasInputPaused);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendDone, {
        value: function() {
          dart.assert(!dart.notNull(this[_isCanceled]));
          dart.assert(!dart.notNull(this[_isPaused]));
          dart.assert(!dart.notNull(this[_inCallback]));
          var sendDone = (function() {
            if (!dart.notNull(this[_waitsForCancel]))
              return;
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_CANCELED) | dart.notNull(_BufferingStreamSubscription$()._STATE_CLOSED) | dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
            this[_zone].runGuarded(this[_onDone]);
            this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
          }).bind(this);
          dart.fn(sendDone, dart.void, []);
          this[_cancel]();
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_WAIT_FOR_CANCEL);
          if (dart.is(this[_cancelFuture], Future)) {
            this[_cancelFuture].whenComplete(sendDone);
          } else {
            sendDone();
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _guardCallback, {
        value: function(callback) {
          dart.assert(!dart.notNull(this[_inCallback]));
          var wasInputPaused = this[_isInputPaused];
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
          dart.dcall(callback);
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
          this[_checkState](wasInputPaused);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _checkState, {
        value: function(wasInputPaused) {
          dart.assert(!dart.notNull(this[_inCallback]));
          if (dart.notNull(this[_hasPending]) && dart.notNull(this[_pending].isEmpty)) {
            this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_HAS_PENDING);
            if (dart.notNull(this[_isInputPaused]) && dart.notNull(this[_mayResumeInput])) {
              this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_INPUT_PAUSED);
            }
          }
          while (true) {
            if (dart.notNull(this[_isCanceled])) {
              this[_pending] = null;
              return;
            }
            var isInputPaused = this[_isInputPaused];
            if (wasInputPaused == isInputPaused)
              break;
            this[_state] = dart.notNull(this[_state]) ^ dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
            if (dart.notNull(isInputPaused)) {
              this[_onPause]();
            } else {
              this[_onResume]();
            }
            this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_IN_CALLBACK);
            wasInputPaused = isInputPaused;
          }
          if (dart.notNull(this[_hasPending]) && !dart.notNull(this[_isPaused])) {
            this[_pending].schedule(this);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _BufferingStreamSubscription[dart.implements] = function() {
      return [StreamSubscription$(T), _EventSink$(T), _EventDispatch$(T)];
    };
    dart.setSignature(_BufferingStreamSubscription, {
      constructors: function() {
        return ({_BufferingStreamSubscription: [_BufferingStreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _setPendingEvents, {
          value: [dart.void, [_PendingEvents]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _extractPending, {
          value: [_PendingEvents, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onData", {
          value: [dart.void, [dart.functionType(dart.void, [T])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onError", {
          value: [dart.void, [core.Function]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onDone", {
          value: [dart.void, [dart.functionType(dart.void, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "pause", {
          value: [dart.void, [], [Future]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "resume", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "cancel", {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "asFuture", {
          value: [Future, [], [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _cancel, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _incrementPauseCount, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _decrementPauseCount, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _add, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _close, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onPause, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onResume, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onCancel, {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addPending, {
          value: [dart.void, [_DelayedEvent]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendData, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _guardCallback, {
          value: [dart.void, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _checkState, {
          value: [dart.void, [core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _BufferingStreamSubscription;
  });
  var _BufferingStreamSubscription = _BufferingStreamSubscription$();
  var _recordCancel = Symbol('_recordCancel');
  var _recordPause = Symbol('_recordPause');
  var _recordResume = Symbol('_recordResume');
  var _ControllerSubscription$ = dart.generic(function(T) {
    var _ControllerSubscription = function($__super) {
      var $__5;
      function _ControllerSubscription() {
        $traceurRuntime.superConstructor(_ControllerSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ControllerSubscription, ($__5 = {}, Object.defineProperty($__5, "_ControllerSubscription", {
        value: function(controller, onData, onError, onDone, cancelOnError) {
          this[_controller] = controller;
          $traceurRuntime.superGet(this, _ControllerSubscription.prototype, "_BufferingStreamSubscription").call(this, onData, onError, onDone, cancelOnError);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onCancel, {
        value: function() {
          return this[_controller][_recordCancel](this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onPause, {
        value: function() {
          this[_controller][_recordPause](this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onResume, {
        value: function() {
          this[_controller][_recordResume](this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_BufferingStreamSubscription$(T));
    dart.setSignature(_ControllerSubscription, {constructors: function() {
        return ({_ControllerSubscription: [_ControllerSubscription$(T), [_StreamControllerLifecycle$(T), dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]});
      }});
    return _ControllerSubscription;
  });
  var _ControllerSubscription = _ControllerSubscription$();
  var _eventState = Symbol('_eventState');
  var _expectsEvent = Symbol('_expectsEvent');
  var _toggleEventId = Symbol('_toggleEventId');
  var _isFiring = Symbol('_isFiring');
  var _setRemoveAfterFiring = Symbol('_setRemoveAfterFiring');
  var _removeAfterFiring = Symbol('_removeAfterFiring');
  var _BroadcastSubscription$ = dart.generic(function(T) {
    var _BroadcastSubscription = function($__super) {
      var $__5;
      function _BroadcastSubscription() {
        $traceurRuntime.superConstructor(_BroadcastSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BroadcastSubscription, ($__5 = {}, Object.defineProperty($__5, "_BroadcastSubscription", {
        value: function(controller, onData, onError, onDone, cancelOnError) {
          this[_eventState] = null;
          this[_next] = null;
          this[_previous] = null;
          $traceurRuntime.superGet(this, _BroadcastSubscription.prototype, "_ControllerSubscription").call(this, dart.as(controller, _StreamControllerLifecycle$(T)), onData, onError, onDone, cancelOnError);
          this[_next] = this[_previous] = this;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _expectsEvent, {
        value: function(eventId) {
          return (dart.notNull(this[_eventState]) & dart.notNull(_BroadcastSubscription$()._STATE_EVENT_ID)) == eventId;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _toggleEventId, {
        value: function() {
          this[_eventState] = dart.notNull(this[_eventState]) ^ dart.notNull(_BroadcastSubscription$()._STATE_EVENT_ID);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _isFiring, {
        get: function() {
          return (dart.notNull(this[_eventState]) & dart.notNull(_BroadcastSubscription$()._STATE_FIRING)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _setRemoveAfterFiring, {
        value: function() {
          dart.assert(this[_isFiring]);
          this[_eventState] = dart.notNull(this[_eventState]) | dart.notNull(_BroadcastSubscription$()._STATE_REMOVE_AFTER_FIRING);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _removeAfterFiring, {
        get: function() {
          return (dart.notNull(this[_eventState]) & dart.notNull(_BroadcastSubscription$()._STATE_REMOVE_AFTER_FIRING)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _onPause, {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onResume, {
        value: function() {},
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ControllerSubscription$(T));
    _BroadcastSubscription[dart.implements] = function() {
      return [_BroadcastSubscriptionLink];
    };
    dart.setSignature(_BroadcastSubscription, {
      constructors: function() {
        return ({_BroadcastSubscription: [_BroadcastSubscription$(T), [_StreamControllerLifecycle, dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _expectsEvent, {
          value: [core.bool, [core.int]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _toggleEventId, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _setRemoveAfterFiring, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _BroadcastSubscription;
  });
  var _BroadcastSubscription = _BroadcastSubscription$();
  _BroadcastSubscription._STATE_EVENT_ID = 1;
  _BroadcastSubscription._STATE_FIRING = 2;
  _BroadcastSubscription._STATE_REMOVE_AFTER_FIRING = 4;
  var _addStreamState = Symbol('_addStreamState');
  var _doneFuture = Symbol('_doneFuture');
  var _isEmpty = Symbol('_isEmpty');
  var _hasOneListener = Symbol('_hasOneListener');
  var _isAddingStream = Symbol('_isAddingStream');
  var _mayAddEvent = Symbol('_mayAddEvent');
  var _ensureDoneFuture = Symbol('_ensureDoneFuture');
  var _addListener = Symbol('_addListener');
  var _removeListener = Symbol('_removeListener');
  var _callOnCancel = Symbol('_callOnCancel');
  var _addEventError = Symbol('_addEventError');
  var _forEachListener = Symbol('_forEachListener');
  var _mayComplete = Symbol('_mayComplete');
  var _asyncComplete = Symbol('_asyncComplete');
  var _BroadcastStreamController$ = dart.generic(function(T) {
    var _BroadcastStreamController = function($__super) {
      var $__5;
      function _BroadcastStreamController() {
        $traceurRuntime.superConstructor(_BroadcastStreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BroadcastStreamController, ($__5 = {}, Object.defineProperty($__5, "_BroadcastStreamController", {
        value: function(onListen, onCancel) {
          this[_onListen] = onListen;
          this[_onCancel] = onCancel;
          this[_state] = _BroadcastStreamController$()._STATE_INITIAL;
          this[_next] = null;
          this[_previous] = null;
          this[_addStreamState] = null;
          this[_doneFuture] = null;
          this[_next] = this[_previous] = this;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "stream", {
        get: function() {
          return new (_BroadcastStream$(T))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "sink", {
        get: function() {
          return new (_StreamSinkWrapper$(T))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "isClosed", {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_CLOSED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "isPaused", {
        get: function() {
          return false;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "hasListener", {
        get: function() {
          return !dart.notNull(this[_isEmpty]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _hasOneListener, {
        get: function() {
          dart.assert(!dart.notNull(this[_isEmpty]));
          return core.identical(this[_next][_next], this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isFiring, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_FIRING)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isAddingStream, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_ADDSTREAM)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _mayAddEvent, {
        get: function() {
          return dart.notNull(this[_state]) < dart.notNull(_BroadcastStreamController$()._STATE_CLOSED);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _ensureDoneFuture, {
        value: function() {
          if (this[_doneFuture] != null)
            return this[_doneFuture];
          return this[_doneFuture] = new _Future();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _isEmpty, {
        get: function() {
          return core.identical(this[_next], this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _addListener, {
        value: function(subscription) {
          dart.as(subscription, _BroadcastSubscription$(T));
          dart.assert(core.identical(subscription[_next], subscription));
          subscription[_previous] = this[_previous];
          subscription[_next] = this;
          this[_previous][_next] = subscription;
          this[_previous] = subscription;
          subscription[_eventState] = dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_EVENT_ID);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _removeListener, {
        value: function(subscription) {
          dart.as(subscription, _BroadcastSubscription$(T));
          dart.assert(core.identical(subscription[_controller], this));
          dart.assert(!dart.notNull(core.identical(subscription[_next], subscription)));
          var previous = subscription[_previous];
          var next = subscription[_next];
          previous[_next] = next;
          next[_previous] = previous;
          subscription[_next] = subscription[_previous] = subscription;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _subscribe, {
        value: function(onData, onError, onDone, cancelOnError) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          dart.as(onDone, dart.functionType(dart.void, []));
          if (dart.notNull(this.isClosed)) {
            if (onDone == null)
              onDone = _nullDoneHandler;
            return new (_DoneStreamSubscription$(T))(onDone);
          }
          var subscription = new (_BroadcastSubscription$(T))(this, onData, onError, onDone, cancelOnError);
          this[_addListener](dart.as(subscription, _BroadcastSubscription$(T)));
          if (dart.notNull(core.identical(this[_next], this[_previous]))) {
            _runGuarded(this[_onListen]);
          }
          return dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordCancel, {
        value: function(sub) {
          dart.as(sub, StreamSubscription$(T));
          var subscription = dart.as(sub, _BroadcastSubscription$(T));
          if (dart.notNull(core.identical(subscription[_next], subscription)))
            return null;
          dart.assert(!dart.notNull(core.identical(subscription[_next], subscription)));
          if (dart.notNull(subscription[_isFiring])) {
            subscription[_setRemoveAfterFiring]();
          } else {
            dart.assert(!dart.notNull(core.identical(subscription[_next], subscription)));
            this[_removeListener](subscription);
            if (!dart.notNull(this[_isFiring]) && dart.notNull(this[_isEmpty])) {
              this[_callOnCancel]();
            }
          }
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordPause, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordResume, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addEventError, {
        value: function() {
          if (dart.notNull(this.isClosed)) {
            return new core.StateError("Cannot add new events after calling close");
          }
          dart.assert(this[_isAddingStream]);
          return new core.StateError("Cannot add new events while doing an addStream");
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "add", {
        value: function(data) {
          dart.as(data, T);
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_addEventError]());
          this[_sendData](data);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "addError", {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          error = _nonNullError(error);
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_addEventError]());
          var replacement = Zone.current.errorCallback(error, stackTrace);
          if (replacement != null) {
            error = _nonNullError(replacement.error);
            stackTrace = replacement.stackTrace;
          }
          this[_sendError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "close", {
        value: function() {
          if (dart.notNull(this.isClosed)) {
            dart.assert(this[_doneFuture] != null);
            return this[_doneFuture];
          }
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_addEventError]());
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController$()._STATE_CLOSED);
          var doneFuture = this[_ensureDoneFuture]();
          this[_sendDone]();
          return doneFuture;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "done", {
        get: function() {
          return this[_ensureDoneFuture]();
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "addStream", {
        value: function(stream, opts) {
          dart.as(stream, Stream$(T));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_addEventError]());
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController$()._STATE_ADDSTREAM);
          this[_addStreamState] = new (_AddStreamState$(T))(this, stream, cancelOnError);
          return this[_addStreamState].addStreamFuture;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _add, {
        value: function(data) {
          dart.as(data, T);
          this[_sendData](data);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addError, {
        value: function(error, stackTrace) {
          this[_sendError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _close, {
        value: function() {
          dart.assert(this[_isAddingStream]);
          var addState = this[_addStreamState];
          this[_addStreamState] = null;
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BroadcastStreamController$()._STATE_ADDSTREAM);
          addState.complete();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _forEachListener, {
        value: function(action) {
          dart.as(action, dart.functionType(dart.void, [_BufferingStreamSubscription$(T)]));
          if (dart.notNull(this[_isFiring])) {
            dart.throw(new core.StateError("Cannot fire new event. Controller is already firing an event"));
          }
          if (dart.notNull(this[_isEmpty]))
            return;
          var id = dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_EVENT_ID);
          this[_state] = dart.notNull(this[_state]) ^ (dart.notNull(_BroadcastStreamController$()._STATE_EVENT_ID) | dart.notNull(_BroadcastStreamController$()._STATE_FIRING));
          var link = this[_next];
          while (!dart.notNull(core.identical(link, this))) {
            var subscription = dart.as(link, _BroadcastSubscription$(T));
            if (dart.notNull(subscription[_expectsEvent](id))) {
              subscription[_eventState] = dart.notNull(subscription[_eventState]) | dart.notNull(_BroadcastSubscription._STATE_FIRING);
              action(subscription);
              subscription[_toggleEventId]();
              link = subscription[_next];
              if (dart.notNull(subscription[_removeAfterFiring])) {
                this[_removeListener](subscription);
              }
              subscription[_eventState] = dart.notNull(subscription[_eventState]) & ~dart.notNull(_BroadcastSubscription._STATE_FIRING);
            } else {
              link = subscription[_next];
            }
          }
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BroadcastStreamController$()._STATE_FIRING);
          if (dart.notNull(this[_isEmpty])) {
            this[_callOnCancel]();
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _callOnCancel, {
        value: function() {
          dart.assert(this[_isEmpty]);
          if (dart.notNull(this.isClosed) && dart.notNull(this[_doneFuture][_mayComplete])) {
            this[_doneFuture][_asyncComplete](null);
          }
          _runGuarded(this[_onCancel]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _BroadcastStreamController[dart.implements] = function() {
      return [StreamController$(T), _StreamControllerLifecycle$(T), _BroadcastSubscriptionLink, _EventSink$(T), _EventDispatch$(T)];
    };
    dart.setSignature(_BroadcastStreamController, {
      constructors: function() {
        return ({_BroadcastStreamController: [_BroadcastStreamController$(T), [_NotificationHandler, _NotificationHandler]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _ensureDoneFuture, {
          value: [_Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addListener, {
          value: [dart.void, [_BroadcastSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _removeListener, {
          value: [dart.void, [_BroadcastSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _subscribe, {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordCancel, {
          value: [Future, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordPause, {
          value: [dart.void, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordResume, {
          value: [dart.void, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addEventError, {
          value: [core.Error, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "add", {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "addError", {
          value: [dart.void, [core.Object], [core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "close", {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "addStream", {
          value: [Future, [Stream$(T)], {cancelOnError: core.bool}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _add, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _close, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _forEachListener, {
          value: [dart.void, [dart.functionType(dart.void, [_BufferingStreamSubscription$(T)])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _callOnCancel, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _BroadcastStreamController;
  });
  var _BroadcastStreamController = _BroadcastStreamController$();
  _BroadcastStreamController._STATE_INITIAL = 0;
  _BroadcastStreamController._STATE_EVENT_ID = 1;
  _BroadcastStreamController._STATE_FIRING = 2;
  _BroadcastStreamController._STATE_CLOSED = 4;
  _BroadcastStreamController._STATE_ADDSTREAM = 8;
  var _SyncBroadcastStreamController$ = dart.generic(function(T) {
    var _SyncBroadcastStreamController = function($__super) {
      var $__5;
      function _SyncBroadcastStreamController() {
        $traceurRuntime.superConstructor(_SyncBroadcastStreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SyncBroadcastStreamController, ($__5 = {}, Object.defineProperty($__5, "_SyncBroadcastStreamController", {
        value: function(onListen, onCancel) {
          $traceurRuntime.superGet(this, _SyncBroadcastStreamController.prototype, "_BroadcastStreamController").call(this, onListen, onCancel);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendData, {
        value: function(data) {
          dart.as(data, T);
          if (dart.notNull(this[_isEmpty]))
            return;
          if (dart.notNull(this[_hasOneListener])) {
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController._STATE_FIRING);
            var subscription = dart.as(this[_next], _BroadcastSubscription);
            subscription[_add](data);
            this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BroadcastStreamController._STATE_FIRING);
            if (dart.notNull(this[_isEmpty])) {
              this[_callOnCancel]();
            }
            return;
          }
          this[_forEachListener](dart.fn(function(subscription) {
            dart.as(subscription, _BufferingStreamSubscription$(T));
            subscription[_add](data);
          }, dart.dynamic, [_BufferingStreamSubscription$(T)]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendError, {
        value: function(error, stackTrace) {
          if (dart.notNull(this[_isEmpty]))
            return;
          this[_forEachListener](dart.fn(function(subscription) {
            dart.as(subscription, _BufferingStreamSubscription$(T));
            subscription[_addError](error, stackTrace);
          }, dart.dynamic, [_BufferingStreamSubscription$(T)]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendDone, {
        value: function() {
          if (!dart.notNull(this[_isEmpty])) {
            this[_forEachListener](dart.as(dart.fn(function(subscription) {
              dart.as(subscription, _BroadcastSubscription$(T));
              subscription[_close]();
            }, dart.dynamic, [_BroadcastSubscription$(T)]), __CastType2));
          } else {
            dart.assert(this[_doneFuture] != null);
            dart.assert(this[_doneFuture][_mayComplete]);
            this[_doneFuture][_asyncComplete](null);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_BroadcastStreamController$(T));
    dart.setSignature(_SyncBroadcastStreamController, {
      constructors: function() {
        return ({_SyncBroadcastStreamController: [_SyncBroadcastStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, [])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _sendData, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _SyncBroadcastStreamController;
  });
  var _SyncBroadcastStreamController = _SyncBroadcastStreamController$();
  var _AsyncBroadcastStreamController$ = dart.generic(function(T) {
    var _AsyncBroadcastStreamController = function($__super) {
      var $__5;
      function _AsyncBroadcastStreamController() {
        $traceurRuntime.superConstructor(_AsyncBroadcastStreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AsyncBroadcastStreamController, ($__5 = {}, Object.defineProperty($__5, "_AsyncBroadcastStreamController", {
        value: function(onListen, onCancel) {
          $traceurRuntime.superGet(this, _AsyncBroadcastStreamController.prototype, "_BroadcastStreamController").call(this, onListen, onCancel);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendData, {
        value: function(data) {
          dart.as(data, T);
          for (var link = this[_next]; !dart.notNull(core.identical(link, this)); link = link[_next]) {
            var subscription = dart.as(link, _BroadcastSubscription$(T));
            subscription[_addPending](new _DelayedData(data));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendError, {
        value: function(error, stackTrace) {
          for (var link = this[_next]; !dart.notNull(core.identical(link, this)); link = link[_next]) {
            var subscription = dart.as(link, _BroadcastSubscription$(T));
            subscription[_addPending](new _DelayedError(error, stackTrace));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendDone, {
        value: function() {
          if (!dart.notNull(this[_isEmpty])) {
            for (var link = this[_next]; !dart.notNull(core.identical(link, this)); link = link[_next]) {
              var subscription = dart.as(link, _BroadcastSubscription$(T));
              subscription[_addPending](dart.const(new _DelayedDone()));
            }
          } else {
            dart.assert(this[_doneFuture] != null);
            dart.assert(this[_doneFuture][_mayComplete]);
            this[_doneFuture][_asyncComplete](null);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_BroadcastStreamController$(T));
    dart.setSignature(_AsyncBroadcastStreamController, {
      constructors: function() {
        return ({_AsyncBroadcastStreamController: [_AsyncBroadcastStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, [])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _sendData, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _AsyncBroadcastStreamController;
  });
  var _AsyncBroadcastStreamController = _AsyncBroadcastStreamController$();
  var _addPendingEvent = Symbol('_addPendingEvent');
  var _AsBroadcastStreamController$ = dart.generic(function(T) {
    var _AsBroadcastStreamController = function($__super) {
      var $__5;
      function _AsBroadcastStreamController() {
        $traceurRuntime.superConstructor(_AsBroadcastStreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AsBroadcastStreamController, ($__5 = {}, Object.defineProperty($__5, "_AsBroadcastStreamController", {
        value: function(onListen, onCancel) {
          this[_pending] = null;
          $traceurRuntime.superGet(this, _AsBroadcastStreamController.prototype, "_SyncBroadcastStreamController").call(this, onListen, onCancel);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _hasPending, {
        get: function() {
          return this[_pending] != null && !dart.notNull(this[_pending].isEmpty);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _addPendingEvent, {
        value: function(event) {
          if (this[_pending] == null) {
            this[_pending] = new _StreamImplEvents();
          }
          this[_pending].add(event);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "add", {
        value: function(data) {
          dart.as(data, T);
          if (!dart.notNull(this.isClosed) && dart.notNull(this[_isFiring])) {
            this[_addPendingEvent](new (_DelayedData$(T))(data));
            return;
          }
          $traceurRuntime.superGet(this, _AsBroadcastStreamController.prototype, "add").call(this, data);
          while (dart.notNull(this[_hasPending])) {
            this[_pending].handleNext(this);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "addError", {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          if (!dart.notNull(this.isClosed) && dart.notNull(this[_isFiring])) {
            this[_addPendingEvent](new _DelayedError(error, stackTrace));
            return;
          }
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_addEventError]());
          this[_sendError](error, stackTrace);
          while (dart.notNull(this[_hasPending])) {
            this[_pending].handleNext(this);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "close", {
        value: function() {
          if (!dart.notNull(this.isClosed) && dart.notNull(this[_isFiring])) {
            this[_addPendingEvent](dart.const(new _DelayedDone()));
            this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController._STATE_CLOSED);
            return $traceurRuntime.superGet(this, _AsBroadcastStreamController.prototype, "done");
          }
          var result = $traceurRuntime.superGet(this, _AsBroadcastStreamController.prototype, "close").call(this);
          dart.assert(!dart.notNull(this[_hasPending]));
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _callOnCancel, {
        value: function() {
          if (dart.notNull(this[_hasPending])) {
            this[_pending].clear();
            this[_pending] = null;
          }
          $traceurRuntime.superGet(this, _AsBroadcastStreamController.prototype, _callOnCancel).call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_SyncBroadcastStreamController$(T));
    _AsBroadcastStreamController[dart.implements] = function() {
      return [_EventDispatch$(T)];
    };
    dart.setSignature(_AsBroadcastStreamController, {
      constructors: function() {
        return ({_AsBroadcastStreamController: [_AsBroadcastStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, [])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _addPendingEvent, {
          value: [dart.void, [_DelayedEvent]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "add", {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _AsBroadcastStreamController;
  });
  var _AsBroadcastStreamController = _AsBroadcastStreamController$();
  var _pauseCount = Symbol('_pauseCount');
  var _resume = Symbol('_resume');
  var _DoneSubscription$ = dart.generic(function(T) {
    var _DoneSubscription = function($__super) {
      var $__5;
      function _DoneSubscription() {
        $traceurRuntime.superConstructor(_DoneSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DoneSubscription, ($__5 = {}, Object.defineProperty($__5, "_DoneSubscription", {
        value: function() {
          this[_pauseCount] = 0;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onData", {
        value: function(handleData) {
          dart.as(handleData, dart.functionType(dart.void, [T]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onError", {
        value: function(handleError) {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onDone", {
        value: function(handleDone) {
          dart.as(handleDone, dart.functionType(dart.void, []));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "pause", {
        value: function(resumeSignal) {
          if (resumeSignal === void 0)
            resumeSignal = null;
          if (resumeSignal != null)
            resumeSignal.then(dart.bind(this, _resume));
          this[_pauseCount] = dart.notNull(this[_pauseCount]) + 1;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "resume", {
        value: function() {
          this[_resume](null);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _resume, {
        value: function(_) {
          if (dart.notNull(this[_pauseCount]) > 0) {
            this[_pauseCount] = dart.notNull(this[_pauseCount]) - 1;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "cancel", {
        value: function() {
          return new _Future.immediate(null);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "isPaused", {
        get: function() {
          return dart.notNull(this[_pauseCount]) > 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "asFuture", {
        value: function(value) {
          if (value === void 0)
            value = null;
          return new _Future();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _DoneSubscription[dart.implements] = function() {
      return [StreamSubscription$(T)];
    };
    dart.setSignature(_DoneSubscription, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "onData", {
          value: [dart.void, [dart.functionType(dart.void, [T])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onError", {
          value: [dart.void, [core.Function]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onDone", {
          value: [dart.void, [dart.functionType(dart.void, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "pause", {
          value: [dart.void, [], [Future]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "resume", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _resume, {
          value: [dart.void, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "cancel", {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "asFuture", {
          value: [Future, [], [core.Object]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _DoneSubscription;
  });
  var _DoneSubscription = _DoneSubscription$();
  var __CastType2$ = dart.generic(function(T) {
    var __CastType2 = dart.typedef('__CastType2', function() {
      return dart.functionType(dart.void, [_BufferingStreamSubscription$(T)]);
    });
    return __CastType2;
  });
  var __CastType2 = __CastType2$();
  var DeferredLibrary = function($__super) {
    function DeferredLibrary() {
      $traceurRuntime.superConstructor(DeferredLibrary).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(DeferredLibrary, {
      DeferredLibrary: function(libraryName, opts) {
        var uri = opts && 'uri' in opts ? opts.uri : null;
        this.libraryName = libraryName;
        this.uri = uri;
      },
      load: function() {
        dart.throw('DeferredLibrary not supported. ' + 'please use the `import "lib.dart" deferred as lib` syntax.');
      }
    }, {}, $__super);
  }(core.Object);
  dart.setSignature(DeferredLibrary, {
    constructors: function() {
      return ({DeferredLibrary: [DeferredLibrary, [core.String], {uri: core.String}]});
    },
    methods: function() {
      return ({load: [Future$(core.Null), []]});
    }
  });
  DeferredLibrary[dart.metadata] = function() {
    return [dart.const(new core.Deprecated("Dart sdk v. 1.8"))];
  };
  var _s = Symbol('_s');
  var DeferredLoadException = function($__super) {
    function DeferredLoadException() {
      $traceurRuntime.superConstructor(DeferredLoadException).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(DeferredLoadException, {
      DeferredLoadException: function(s) {
        this[_s] = s;
      },
      toString: function() {
        return ("DeferredLoadException: '" + this[_s] + "'");
      }
    }, {}, $__super);
  }(core.Object);
  DeferredLoadException[dart.implements] = function() {
    return [core.Exception];
  };
  dart.setSignature(DeferredLoadException, {constructors: function() {
      return ({DeferredLoadException: [DeferredLoadException, [core.String]]});
    }});
  var _completeWithValue = Symbol('_completeWithValue');
  var Future$ = dart.generic(function(T) {
    var Future = function($__super) {
      function Future() {
        $traceurRuntime.superConstructor(Future).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Future, {}, {
        new: function(computation) {
          var result = new (_Future$(T))();
          Timer.run(dart.fn(function() {
            try {
              result[_complete](computation());
            } catch (e) {
              var s = dart.stackTrace(e);
              _completeWithErrorCallback(result, e, s);
            }
          }));
          return dart.as(result, Future$(T));
        },
        microtask: function(computation) {
          var result = new (_Future$(T))();
          scheduleMicrotask(dart.fn(function() {
            try {
              result[_complete](computation());
            } catch (e) {
              var s = dart.stackTrace(e);
              _completeWithErrorCallback(result, e, s);
            }
          }));
          return dart.as(result, Future$(T));
        },
        sync: function(computation) {
          try {
            var result = computation();
            return Future$(T).value(result);
          } catch (error) {
            var stackTrace = dart.stackTrace(error);
            return Future$(T).error(error, stackTrace);
          }
        },
        value: function(value) {
          if (value === void 0)
            value = null;
          return new (_Future$(T)).immediate(value);
        },
        error: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          error = _nonNullError(error);
          if (!dart.notNull(core.identical(Zone.current, _ROOT_ZONE))) {
            var replacement = Zone.current.errorCallback(error, stackTrace);
            if (replacement != null) {
              error = _nonNullError(replacement.error);
              stackTrace = replacement.stackTrace;
            }
          }
          return new (_Future$(T)).immediateError(error, stackTrace);
        },
        delayed: function(duration, computation) {
          if (computation === void 0)
            computation = null;
          var result = new (_Future$(T))();
          Timer.new(duration, dart.fn(function() {
            try {
              result[_complete](computation == null ? null : computation());
            } catch (e) {
              var s = dart.stackTrace(e);
              _completeWithErrorCallback(result, e, s);
            }
          }));
          return dart.as(result, Future$(T));
        },
        wait: function(futures, opts) {
          var eagerError = opts && 'eagerError' in opts ? opts.eagerError : false;
          var cleanUp = opts && 'cleanUp' in opts ? opts.cleanUp : null;
          dart.as(cleanUp, dart.functionType(dart.void, [dart.dynamic]));
          var result = new (_Future$(core.List))();
          var values = null;
          var remaining = 0;
          var error = null;
          var stackTrace = null;
          function handleError(theError, theStackTrace) {
            remaining = dart.notNull(remaining) - 1;
            if (values != null) {
              if (cleanUp != null) {
                var $__9 = true;
                var $__10 = false;
                var $__11 = undefined;
                try {
                  var $__14 = function() {
                    var value2 = $__7.value;
                    {
                      if (value2 != null) {
                        Future$().sync(dart.fn(function() {
                          dart.dcall(cleanUp, value2);
                        }));
                      }
                    }
                  };
                  for (var $__7 = void 0,
                      $__6 = (values)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
                    $__14();
                  }
                } catch ($__12) {
                  $__10 = true;
                  $__11 = $__12;
                } finally {
                  try {
                    if (!$__9 && $__6.return != null) {
                      $__6.return();
                    }
                  } finally {
                    if ($__10) {
                      throw $__11;
                    }
                  }
                }
              }
              values = null;
              if (remaining == 0 || dart.notNull(eagerError)) {
                result[_completeError](theError, dart.as(theStackTrace, core.StackTrace));
              } else {
                error = theError;
                stackTrace = dart.as(theStackTrace, core.StackTrace);
              }
            } else if (remaining == 0 && !dart.notNull(eagerError)) {
              result[_completeError](error, stackTrace);
            }
          }
          dart.fn(handleError, dart.void, [dart.dynamic, dart.dynamic]);
          var $__9 = true;
          var $__10 = false;
          var $__11 = undefined;
          try {
            var $__15 = function() {
              var future = $__7.value;
              {
                var pos = remaining;
                remaining = dart.notNull(pos) + 1;
                future.then(dart.fn(function(value) {
                  remaining = dart.notNull(remaining) - 1;
                  if (values != null) {
                    values[dartx.set](pos, value);
                    if (remaining == 0) {
                      result[_completeWithValue](values);
                    }
                  } else {
                    if (cleanUp != null && value != null) {
                      Future$().sync(dart.fn(function() {
                        dart.dcall(cleanUp, value);
                      }));
                    }
                    if (remaining == 0 && !dart.notNull(eagerError)) {
                      result[_completeError](error, stackTrace);
                    }
                  }
                }, dart.dynamic, [core.Object]), {onError: handleError});
              }
            };
            for (var $__7 = void 0,
                $__6 = (futures)[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
              $__15();
            }
          } catch ($__12) {
            $__10 = true;
            $__11 = $__12;
          } finally {
            try {
              if (!$__9 && $__6.return != null) {
                $__6.return();
              }
            } finally {
              if ($__10) {
                throw $__11;
              }
            }
          }
          if (remaining == 0) {
            return Future$(core.List).value(dart.const([]));
          }
          values = core.List.new(remaining);
          return result;
        },
        forEach: function(input, f) {
          dart.as(f, dart.functionType(dart.dynamic, [dart.dynamic]));
          var iterator = input[dartx.iterator];
          return Future$().doWhile(dart.fn(function() {
            if (!dart.notNull(iterator.moveNext()))
              return false;
            return Future$().sync(dart.fn(function() {
              return dart.dcall(f, iterator.current);
            })).then(dart.fn(function(_) {
              return true;
            }, core.bool, [dart.dynamic]));
          }));
        },
        doWhile: function(f) {
          dart.as(f, dart.functionType(dart.dynamic, []));
          var doneSignal = new _Future();
          var nextIteration = null;
          nextIteration = Zone.current.bindUnaryCallback(dart.fn(function(keepGoing) {
            if (dart.notNull(keepGoing)) {
              Future$().sync(f).then(dart.as(nextIteration, __CastType4), {onError: dart.bind(doneSignal, _completeError)});
            } else {
              doneSignal[_complete](null);
            }
          }, dart.dynamic, [core.bool]), {runGuarded: true});
          dart.dcall(nextIteration, true);
          return doneSignal;
        }
      }, $__super);
    }(core.Object);
    dart.setSignature(Future, {
      constructors: function() {
        return ({
          new: [Future$(T), [dart.functionType(dart.dynamic, [])]],
          microtask: [Future$(T), [dart.functionType(dart.dynamic, [])]],
          sync: [Future$(T), [dart.functionType(dart.dynamic, [])]],
          value: [Future$(T), [], [dart.dynamic]],
          error: [Future$(T), [core.Object], [core.StackTrace]],
          delayed: [Future$(T), [core.Duration], [dart.functionType(T, [])]]
        });
      },
      statics: function() {
        return ({
          wait: [Future$(core.List), [core.Iterable$(Future$())], {
            eagerError: core.bool,
            cleanUp: dart.functionType(dart.void, [dart.dynamic])
          }],
          forEach: [Future$(), [core.Iterable, dart.functionType(dart.dynamic, [dart.dynamic])]],
          doWhile: [Future$(), [dart.functionType(dart.dynamic, [])]]
        });
      },
      names: ['wait', 'forEach', 'doWhile']
    });
    return Future;
  });
  var Future = Future$();
  dart.defineLazyProperties(Future, {get _nullFuture() {
      return new _Future.immediate(null);
    }});
  var TimeoutException = function($__super) {
    function TimeoutException() {
      $traceurRuntime.superConstructor(TimeoutException).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(TimeoutException, {
      TimeoutException: function(message, duration) {
        if (duration === void 0)
          duration = null;
        this.message = message;
        this.duration = duration;
      },
      toString: function() {
        var result = "TimeoutException";
        if (this.duration != null)
          result = ("TimeoutException after " + this.duration);
        if (this.message != null)
          result = (result + ": " + this.message);
        return result;
      }
    }, {}, $__super);
  }(core.Object);
  TimeoutException[dart.implements] = function() {
    return [core.Exception];
  };
  dart.setSignature(TimeoutException, {constructors: function() {
      return ({TimeoutException: [TimeoutException, [core.String], [core.Duration]]});
    }});
  var Completer$ = dart.generic(function(T) {
    var Completer = function($__super) {
      function Completer() {
        $traceurRuntime.superConstructor(Completer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(Completer, {}, {
        new: function() {
          return new (_AsyncCompleter$(T))();
        },
        sync: function() {
          return new (_SyncCompleter$(T))();
        }
      }, $__super);
    }(core.Object);
    dart.setSignature(Completer, {constructors: function() {
        return ({
          new: [Completer$(T), []],
          sync: [Completer$(T), []]
        });
      }});
    return Completer;
  });
  var Completer = Completer$();
  function _completeWithErrorCallback(result, error, stackTrace) {
    var replacement = Zone.current.errorCallback(error, dart.as(stackTrace, core.StackTrace));
    if (replacement != null) {
      error = _nonNullError(replacement.error);
      stackTrace = replacement.stackTrace;
    }
    result[_completeError](error, dart.as(stackTrace, core.StackTrace));
  }
  dart.fn(_completeWithErrorCallback, function() {
    return dart.definiteFunctionType(dart.void, [_Future, dart.dynamic, dart.dynamic]);
  });
  function _nonNullError(error) {
    return error != null ? error : new core.NullThrownError();
  }
  dart.fn(_nonNullError, core.Object, [core.Object]);
  var __CastType4 = dart.typedef('__CastType4', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var _FutureOnValue$ = dart.generic(function(T) {
    var _FutureOnValue = dart.typedef('_FutureOnValue', function() {
      return dart.functionType(dart.dynamic, [T]);
    });
    return _FutureOnValue;
  });
  var _FutureOnValue = _FutureOnValue$();
  var _FutureErrorTest = dart.typedef('_FutureErrorTest', function() {
    return dart.functionType(core.bool, [dart.dynamic]);
  });
  var _FutureAction = dart.typedef('_FutureAction', function() {
    return dart.functionType(dart.dynamic, []);
  });
  var _Completer$ = dart.generic(function(T) {
    var _Completer = function($__super) {
      function _Completer() {
        $traceurRuntime.superConstructor(_Completer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_Completer, {
        _Completer: function() {
          this.future = new (_Future$(T))();
        },
        completeError: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          error = _nonNullError(error);
          if (!dart.notNull(this.future[_mayComplete]))
            dart.throw(new core.StateError("Future already completed"));
          var replacement = Zone.current.errorCallback(error, stackTrace);
          if (replacement != null) {
            error = _nonNullError(replacement.error);
            stackTrace = replacement.stackTrace;
          }
          this[_completeError](error, stackTrace);
        },
        get isCompleted() {
          return !dart.notNull(this.future[_mayComplete]);
        }
      }, {}, $__super);
    }(core.Object);
    _Completer[dart.implements] = function() {
      return [Completer$(T)];
    };
    dart.setSignature(_Completer, {methods: function() {
        return ({completeError: [dart.void, [core.Object], [core.StackTrace]]});
      }});
    return _Completer;
  });
  var _Completer = _Completer$();
  var _asyncCompleteError = Symbol('_asyncCompleteError');
  var _AsyncCompleter$ = dart.generic(function(T) {
    var _AsyncCompleter = function($__super) {
      var $__5;
      function _AsyncCompleter() {
        $traceurRuntime.superConstructor(_AsyncCompleter).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AsyncCompleter, ($__5 = {}, Object.defineProperty($__5, "_AsyncCompleter", {
        value: function() {
          $traceurRuntime.superGet(this, _AsyncCompleter.prototype, "_Completer").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "complete", {
        value: function(value) {
          if (value === void 0)
            value = null;
          if (!dart.notNull(this.future[_mayComplete]))
            dart.throw(new core.StateError("Future already completed"));
          this.future[_asyncComplete](value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _completeError, {
        value: function(error, stackTrace) {
          this.future[_asyncCompleteError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_Completer$(T));
    dart.setSignature(_AsyncCompleter, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "complete", {
          value: [dart.void, [], [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _completeError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _AsyncCompleter;
  });
  var _AsyncCompleter = _AsyncCompleter$();
  var _SyncCompleter$ = dart.generic(function(T) {
    var _SyncCompleter = function($__super) {
      var $__5;
      function _SyncCompleter() {
        $traceurRuntime.superConstructor(_SyncCompleter).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SyncCompleter, ($__5 = {}, Object.defineProperty($__5, "_SyncCompleter", {
        value: function() {
          $traceurRuntime.superGet(this, _SyncCompleter.prototype, "_Completer").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "complete", {
        value: function(value) {
          if (value === void 0)
            value = null;
          if (!dart.notNull(this.future[_mayComplete]))
            dart.throw(new core.StateError("Future already completed"));
          this.future[_complete](value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _completeError, {
        value: function(error, stackTrace) {
          this.future[_completeError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_Completer$(T));
    dart.setSignature(_SyncCompleter, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "complete", {
          value: [dart.void, [], [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _completeError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _SyncCompleter;
  });
  var _SyncCompleter = _SyncCompleter$();
  var _nextListener = Symbol('_nextListener');
  var _onValue = Symbol('_onValue');
  var _errorTest = Symbol('_errorTest');
  var _whenCompleteAction = Symbol('_whenCompleteAction');
  var _FutureListener = function($__super) {
    var $__5;
    function _FutureListener() {
      $traceurRuntime.superConstructor(_FutureListener).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_FutureListener, ($__5 = {}, Object.defineProperty($__5, "then", {
      value: function(result, onValue, errorCallback) {
        this.result = result;
        this.callback = onValue;
        this.errorCallback = errorCallback;
        this.state = errorCallback == null ? _FutureListener.STATE_THEN : _FutureListener.STATE_THEN_ONERROR;
        this[_nextListener] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "catchError", {
      value: function(result, errorCallback, test) {
        this.result = result;
        this.errorCallback = errorCallback;
        this.callback = test;
        this.state = test == null ? _FutureListener.STATE_CATCHERROR : _FutureListener.STATE_CATCHERROR_TEST;
        this[_nextListener] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "whenComplete", {
      value: function(result, onComplete) {
        this.result = result;
        this.callback = onComplete;
        this.errorCallback = null;
        this.state = _FutureListener.STATE_WHENCOMPLETE;
        this[_nextListener] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "chain", {
      value: function(result) {
        this.result = result;
        this.callback = null;
        this.errorCallback = null;
        this.state = _FutureListener.STATE_CHAIN;
        this[_nextListener] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _zone, {
      get: function() {
        return this.result[_zone];
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "handlesValue", {
      get: function() {
        return (dart.notNull(this.state) & dart.notNull(_FutureListener.MASK_VALUE)) != 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "handlesError", {
      get: function() {
        return (dart.notNull(this.state) & dart.notNull(_FutureListener.MASK_ERROR)) != 0;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "hasErrorTest", {
      get: function() {
        return this.state == _FutureListener.STATE_CATCHERROR_TEST;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "handlesComplete", {
      get: function() {
        return this.state == _FutureListener.STATE_WHENCOMPLETE;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _onValue, {
      get: function() {
        dart.assert(this.handlesValue);
        return dart.as(this.callback, _FutureOnValue);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _onError, {
      get: function() {
        return this.errorCallback;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _errorTest, {
      get: function() {
        dart.assert(this.hasErrorTest);
        return dart.as(this.callback, _FutureErrorTest);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _whenCompleteAction, {
      get: function() {
        dart.assert(this.handlesComplete);
        return dart.as(this.callback, _FutureAction);
      },
      configurable: true,
      enumerable: true
    }), $__5), {}, $__super);
  }(core.Object);
  dart.defineNamedConstructor(_FutureListener, 'then');
  dart.defineNamedConstructor(_FutureListener, 'catchError');
  dart.defineNamedConstructor(_FutureListener, 'whenComplete');
  dart.defineNamedConstructor(_FutureListener, 'chain');
  dart.setSignature(_FutureListener, {constructors: function() {
      return ({
        then: [_FutureListener, [_Future, _FutureOnValue, core.Function]],
        catchError: [_FutureListener, [_Future, core.Function, _FutureErrorTest]],
        whenComplete: [_FutureListener, [_Future, _FutureAction]],
        chain: [_FutureListener, [_Future]]
      });
    }});
  _FutureListener.MASK_VALUE = 1;
  _FutureListener.MASK_ERROR = 2;
  _FutureListener.MASK_TEST_ERROR = 4;
  _FutureListener.MASK_WHENCOMPLETE = 8;
  _FutureListener.STATE_CHAIN = 0;
  _FutureListener.STATE_THEN = _FutureListener.MASK_VALUE;
  _FutureListener.STATE_THEN_ONERROR = dart.notNull(_FutureListener.MASK_VALUE) | dart.notNull(_FutureListener.MASK_ERROR);
  _FutureListener.STATE_CATCHERROR = _FutureListener.MASK_ERROR;
  _FutureListener.STATE_CATCHERROR_TEST = dart.notNull(_FutureListener.MASK_ERROR) | dart.notNull(_FutureListener.MASK_TEST_ERROR);
  _FutureListener.STATE_WHENCOMPLETE = _FutureListener.MASK_WHENCOMPLETE;
  var _resultOrListeners = Symbol('_resultOrListeners');
  var _isChained = Symbol('_isChained');
  var _isComplete = Symbol('_isComplete');
  var _hasValue = Symbol('_hasValue');
  var _hasError = Symbol('_hasError');
  var _markPendingCompletion = Symbol('_markPendingCompletion');
  var _value = Symbol('_value');
  var _error = Symbol('_error');
  var _setValue = Symbol('_setValue');
  var _setErrorObject = Symbol('_setErrorObject');
  var _setError = Symbol('_setError');
  var _removeListeners = Symbol('_removeListeners');
  var _Future$ = dart.generic(function(T) {
    var _Future = function($__super) {
      var $__5;
      function _Future() {
        $traceurRuntime.superConstructor(_Future).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_Future, ($__5 = {}, Object.defineProperty($__5, "_Future", {
        value: function() {
          this[_zone] = Zone.current;
          this[_state] = _Future$()._INCOMPLETE;
          this[_resultOrListeners] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "immediate", {
        value: function(value) {
          this[_zone] = Zone.current;
          this[_state] = _Future$()._INCOMPLETE;
          this[_resultOrListeners] = null;
          this[_asyncComplete](value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "immediateError", {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          this[_zone] = Zone.current;
          this[_state] = _Future$()._INCOMPLETE;
          this[_resultOrListeners] = null;
          this[_asyncCompleteError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _mayComplete, {
        get: function() {
          return this[_state] == _Future$()._INCOMPLETE;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isChained, {
        get: function() {
          return this[_state] == _Future$()._CHAINED;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isComplete, {
        get: function() {
          return dart.notNull(this[_state]) >= dart.notNull(_Future$()._VALUE);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _hasValue, {
        get: function() {
          return this[_state] == _Future$()._VALUE;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _hasError, {
        get: function() {
          return this[_state] == _Future$()._ERROR;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isChained, {
        set: function(value) {
          if (dart.notNull(value)) {
            dart.assert(!dart.notNull(this[_isComplete]));
            this[_state] = _Future$()._CHAINED;
          } else {
            dart.assert(this[_isChained]);
            this[_state] = _Future$()._INCOMPLETE;
          }
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "then", {
        value: function(f, opts) {
          dart.as(f, dart.functionType(dart.dynamic, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var result = new (_Future$())();
          if (!dart.notNull(core.identical(result[_zone], _ROOT_ZONE))) {
            f = dart.as(result[_zone].registerUnaryCallback(f), __CastType6);
            if (onError != null) {
              onError = _registerErrorHandler(onError, result[_zone]);
            }
          }
          this[_addListener](new _FutureListener.then(result, f, onError));
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "catchError", {
        value: function(onError, opts) {
          var test = opts && 'test' in opts ? opts.test : null;
          dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
          var result = new (_Future$())();
          if (!dart.notNull(core.identical(result[_zone], _ROOT_ZONE))) {
            onError = _registerErrorHandler(onError, result[_zone]);
            if (test != null)
              test = dart.as(result[_zone].registerUnaryCallback(test), __CastType8);
          }
          this[_addListener](new _FutureListener.catchError(result, onError, test));
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "whenComplete", {
        value: function(action) {
          dart.as(action, dart.functionType(dart.dynamic, []));
          var result = new (_Future$(T))();
          if (!dart.notNull(core.identical(result[_zone], _ROOT_ZONE))) {
            action = result[_zone].registerCallback(action);
          }
          this[_addListener](new _FutureListener.whenComplete(result, action));
          return dart.as(result, Future$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "asStream", {
        value: function() {
          return Stream$(T).fromFuture(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _markPendingCompletion, {
        value: function() {
          if (!dart.notNull(this[_mayComplete]))
            dart.throw(new core.StateError("Future already completed"));
          this[_state] = _Future$()._PENDING_COMPLETE;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _value, {
        get: function() {
          dart.assert(dart.notNull(this[_isComplete]) && dart.notNull(this[_hasValue]));
          return dart.as(this[_resultOrListeners], T);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _error, {
        get: function() {
          dart.assert(dart.notNull(this[_isComplete]) && dart.notNull(this[_hasError]));
          return dart.as(this[_resultOrListeners], AsyncError);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _setValue, {
        value: function(value) {
          dart.as(value, T);
          dart.assert(!dart.notNull(this[_isComplete]));
          this[_state] = _Future$()._VALUE;
          this[_resultOrListeners] = value;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _setErrorObject, {
        value: function(error) {
          dart.assert(!dart.notNull(this[_isComplete]));
          this[_state] = _Future$()._ERROR;
          this[_resultOrListeners] = error;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _setError, {
        value: function(error, stackTrace) {
          this[_setErrorObject](new AsyncError(error, stackTrace));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addListener, {
        value: function(listener) {
          var $__4 = this;
          dart.assert(listener[_nextListener] == null);
          if (dart.notNull(this[_isComplete])) {
            this[_zone].scheduleMicrotask(dart.fn((function() {
              _Future$()._propagateToListeners($__4, listener);
            }).bind(this)));
          } else {
            listener[_nextListener] = dart.as(this[_resultOrListeners], _FutureListener);
            this[_resultOrListeners] = listener;
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _removeListeners, {
        value: function() {
          dart.assert(!dart.notNull(this[_isComplete]));
          var current = dart.as(this[_resultOrListeners], _FutureListener);
          this[_resultOrListeners] = null;
          var prev = null;
          while (current != null) {
            var next = current[_nextListener];
            current[_nextListener] = prev;
            prev = current;
            current = next;
          }
          return prev;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _complete, {
        value: function(value) {
          dart.assert(!dart.notNull(this[_isComplete]));
          if (dart.is(value, Future)) {
            if (dart.is(value, _Future$())) {
              _Future$()._chainCoreFuture(dart.as(value, _Future$()), this);
            } else {
              _Future$()._chainForeignFuture(dart.as(value, Future), this);
            }
          } else {
            var listeners = this[_removeListeners]();
            this[_setValue](dart.as(value, T));
            _Future$()._propagateToListeners(this, listeners);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _completeWithValue, {
        value: function(value) {
          dart.assert(!dart.notNull(this[_isComplete]));
          dart.assert(!dart.is(value, Future));
          var listeners = this[_removeListeners]();
          this[_setValue](dart.as(value, T));
          _Future$()._propagateToListeners(this, listeners);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _completeError, {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          dart.assert(!dart.notNull(this[_isComplete]));
          var listeners = this[_removeListeners]();
          this[_setError](error, stackTrace);
          _Future$()._propagateToListeners(this, listeners);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _asyncComplete, {
        value: function(value) {
          var $__4 = this;
          dart.assert(!dart.notNull(this[_isComplete]));
          if (value == null) {} else if (dart.is(value, Future)) {
            var typedFuture = dart.as(value, Future$(T));
            if (dart.is(typedFuture, _Future$())) {
              var coreFuture = dart.as(typedFuture, _Future$(T));
              if (dart.notNull(coreFuture[_isComplete]) && dart.notNull(coreFuture[_hasError])) {
                this[_markPendingCompletion]();
                this[_zone].scheduleMicrotask(dart.fn((function() {
                  _Future$()._chainCoreFuture(coreFuture, $__4);
                }).bind(this)));
              } else {
                _Future$()._chainCoreFuture(coreFuture, this);
              }
            } else {
              _Future$()._chainForeignFuture(typedFuture, this);
            }
            return;
          } else {
            var typedValue = dart.as(value, T);
          }
          this[_markPendingCompletion]();
          this[_zone].scheduleMicrotask(dart.fn((function() {
            $__4[_completeWithValue](value);
          }).bind(this)));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _asyncCompleteError, {
        value: function(error, stackTrace) {
          var $__4 = this;
          dart.assert(!dart.notNull(this[_isComplete]));
          this[_markPendingCompletion]();
          this[_zone].scheduleMicrotask(dart.fn((function() {
            $__4[_completeError](error, stackTrace);
          }).bind(this)));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "timeout", {
        value: function(timeLimit, opts) {
          var onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
          dart.as(onTimeout, dart.functionType(dart.dynamic, []));
          if (dart.notNull(this[_isComplete]))
            return new (_Future$()).immediate(this);
          var result = new (_Future$())();
          var timer = null;
          if (onTimeout == null) {
            timer = Timer.new(timeLimit, dart.fn(function() {
              result[_completeError](new TimeoutException("Future not completed", timeLimit));
            }));
          } else {
            var zone = Zone.current;
            onTimeout = zone.registerCallback(onTimeout);
            timer = Timer.new(timeLimit, dart.fn(function() {
              try {
                result[_complete](zone.run(onTimeout));
              } catch (e) {
                var s = dart.stackTrace(e);
                result[_completeError](e, s);
              }
            }));
          }
          this.then(dart.fn(function(v) {
            dart.as(v, T);
            if (dart.notNull(timer.isActive)) {
              timer.cancel();
              result[_completeWithValue](v);
            }
          }, dart.dynamic, [T]), {onError: dart.fn(function(e, s) {
              if (dart.notNull(timer.isActive)) {
                timer.cancel();
                result[_completeError](e, dart.as(s, core.StackTrace));
              }
            })});
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {
        _chainForeignFuture: function(source, target) {
          dart.assert(!dart.notNull(target[_isComplete]));
          dart.assert(!dart.is(source, _Future$()));
          target[_isChained] = true;
          source.then(dart.fn(function(value) {
            dart.assert(target[_isChained]);
            target[_completeWithValue](value);
          }), {onError: dart.fn(function(error, stackTrace) {
              if (stackTrace === void 0)
                stackTrace = null;
              dart.assert(target[_isChained]);
              target[_completeError](error, dart.as(stackTrace, core.StackTrace));
            }, dart.dynamic, [dart.dynamic], [dart.dynamic])});
        },
        _chainCoreFuture: function(source, target) {
          dart.assert(!dart.notNull(target[_isComplete]));
          dart.assert(dart.is(source, _Future$()));
          target[_isChained] = true;
          var listener = new _FutureListener.chain(target);
          if (dart.notNull(source[_isComplete])) {
            _Future$()._propagateToListeners(source, listener);
          } else {
            source[_addListener](listener);
          }
        },
        _propagateToListeners: function(source, listeners) {
          while (true) {
            dart.assert(source[_isComplete]);
            var hasError = source[_hasError];
            if (listeners == null) {
              if (dart.notNull(hasError)) {
                var asyncError = source[_error];
                source[_zone].handleUncaughtError(asyncError.error, asyncError.stackTrace);
              }
              return;
            }
            while (listeners[_nextListener] != null) {
              var listener$__16 = listeners;
              listeners = listener$__16[_nextListener];
              listener$__16[_nextListener] = null;
              _Future$()._propagateToListeners(source, listener$__16);
            }
            var listener = listeners;
            var listenerHasValue = true;
            var sourceValue = dart.notNull(hasError) ? null : source[_value];
            var listenerValueOrError = sourceValue;
            var isPropagationAborted = false;
            if (dart.notNull(hasError) || dart.notNull(listener.handlesValue) || dart.notNull(listener.handlesComplete)) {
              var handleValueCallback = function() {
                try {
                  listenerValueOrError = zone.runUnary(listener[_onValue], sourceValue);
                  return true;
                } catch (e) {
                  var s = dart.stackTrace(e);
                  listenerValueOrError = new AsyncError(e, s);
                  return false;
                }
              };
              var handleError = function() {
                var asyncError = source[_error];
                var matchesTest = true;
                if (dart.notNull(listener.hasErrorTest)) {
                  var test = listener[_errorTest];
                  try {
                    matchesTest = dart.as(zone.runUnary(test, asyncError.error), core.bool);
                  } catch (e) {
                    var s = dart.stackTrace(e);
                    listenerValueOrError = dart.notNull(core.identical(asyncError.error, e)) ? asyncError : new AsyncError(e, s);
                    listenerHasValue = false;
                    return;
                  }
                }
                var errorCallback = listener[_onError];
                if (dart.notNull(matchesTest) && errorCallback != null) {
                  try {
                    if (dart.is(errorCallback, ZoneBinaryCallback)) {
                      listenerValueOrError = zone.runBinary(errorCallback, asyncError.error, asyncError.stackTrace);
                    } else {
                      listenerValueOrError = zone.runUnary(dart.as(errorCallback, __CastType10), asyncError.error);
                    }
                  } catch (e) {
                    var s$__18 = dart.stackTrace(e);
                    listenerValueOrError = dart.notNull(core.identical(asyncError.error, e)) ? asyncError : new AsyncError(e, s$__18);
                    listenerHasValue = false;
                    return;
                  }
                  listenerHasValue = true;
                } else {
                  listenerValueOrError = asyncError;
                  listenerHasValue = false;
                }
              };
              var handleWhenCompleteCallback = function() {
                var completeResult = null;
                try {
                  completeResult = zone.run(listener[_whenCompleteAction]);
                } catch (e) {
                  var s = dart.stackTrace(e);
                  if (dart.notNull(hasError) && dart.notNull(core.identical(source[_error].error, e))) {
                    listenerValueOrError = source[_error];
                  } else {
                    listenerValueOrError = new AsyncError(e, s);
                  }
                  listenerHasValue = false;
                  return;
                }
                if (dart.is(completeResult, Future)) {
                  var result$__19 = listener.result;
                  result$__19[_isChained] = true;
                  isPropagationAborted = true;
                  dart.dsend(completeResult, 'then', dart.fn(function(ignored) {
                    _Future$()._propagateToListeners(source, new _FutureListener.chain(result$__19));
                  }), {onError: dart.fn(function(error, stackTrace) {
                      if (stackTrace === void 0)
                        stackTrace = null;
                      if (!dart.is(completeResult, _Future$())) {
                        completeResult = new (_Future$())();
                        dart.dsend(completeResult, _setError, error, stackTrace);
                      }
                      _Future$()._propagateToListeners(dart.as(completeResult, _Future$()), new _FutureListener.chain(result$__19));
                    }, dart.dynamic, [dart.dynamic], [dart.dynamic])});
                }
              };
              var zone = listener[_zone];
              if (dart.notNull(hasError) && !dart.notNull(source[_zone].inSameErrorZone(zone))) {
                var asyncError$__17 = source[_error];
                source[_zone].handleUncaughtError(asyncError$__17.error, asyncError$__17.stackTrace);
                return;
              }
              var oldZone = null;
              if (!dart.notNull(core.identical(Zone.current, zone))) {
                oldZone = Zone._enter(zone);
              }
              dart.fn(handleValueCallback, core.bool, []);
              dart.fn(handleError, dart.void, []);
              dart.fn(handleWhenCompleteCallback, dart.void, []);
              if (!dart.notNull(hasError)) {
                if (dart.notNull(listener.handlesValue)) {
                  listenerHasValue = handleValueCallback();
                }
              } else {
                handleError();
              }
              if (dart.notNull(listener.handlesComplete)) {
                handleWhenCompleteCallback();
              }
              if (oldZone != null)
                Zone._leave(oldZone);
              if (dart.notNull(isPropagationAborted))
                return;
              if (dart.notNull(listenerHasValue) && !dart.notNull(core.identical(sourceValue, listenerValueOrError)) && dart.is(listenerValueOrError, Future)) {
                var chainSource = dart.as(listenerValueOrError, Future);
                var result$__20 = listener.result;
                if (dart.is(chainSource, _Future$())) {
                  if (dart.notNull(chainSource[_isComplete])) {
                    result$__20[_isChained] = true;
                    source = chainSource;
                    listeners = new _FutureListener.chain(result$__20);
                    continue;
                  } else {
                    _Future$()._chainCoreFuture(chainSource, result$__20);
                  }
                } else {
                  _Future$()._chainForeignFuture(chainSource, result$__20);
                }
                return;
              }
            }
            var result = listener.result;
            listeners = result[_removeListeners]();
            if (dart.notNull(listenerHasValue)) {
              result[_setValue](listenerValueOrError);
            } else {
              var asyncError$__21 = dart.as(listenerValueOrError, AsyncError);
              result[_setErrorObject](asyncError$__21);
            }
            source = result;
          }
        }
      }, $__super);
    }(core.Object);
    _Future[dart.implements] = function() {
      return [Future$(T)];
    };
    dart.defineNamedConstructor(_Future, 'immediate');
    dart.defineNamedConstructor(_Future, 'immediateError');
    dart.setSignature(_Future, {
      constructors: function() {
        return ({
          _Future: [_Future$(T), []],
          immediate: [_Future$(T), [dart.dynamic]],
          immediateError: [_Future$(T), [dart.dynamic], [core.StackTrace]]
        });
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "then", {
          value: [Future, [dart.functionType(dart.dynamic, [T])], {onError: core.Function}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "catchError", {
          value: [Future, [core.Function], {test: dart.functionType(core.bool, [dart.dynamic])}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "whenComplete", {
          value: [Future$(T), [dart.functionType(dart.dynamic, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "asStream", {
          value: [Stream$(T), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _markPendingCompletion, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _setValue, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _setErrorObject, {
          value: [dart.void, [AsyncError]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _setError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addListener, {
          value: [dart.void, [_FutureListener]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _removeListeners, {
          value: [_FutureListener, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _complete, {
          value: [dart.void, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _completeWithValue, {
          value: [dart.void, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _completeError, {
          value: [dart.void, [dart.dynamic], [core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _asyncComplete, {
          value: [dart.void, [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _asyncCompleteError, {
          value: [dart.void, [dart.dynamic, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "timeout", {
          value: [Future, [core.Duration], {onTimeout: dart.functionType(dart.dynamic, [])}],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      },
      statics: function() {
        return ({
          _chainForeignFuture: [dart.void, [Future, _Future$()]],
          _chainCoreFuture: [dart.void, [_Future$(), _Future$()]],
          _propagateToListeners: [dart.void, [_Future$(), _FutureListener]]
        });
      },
      names: ['_chainForeignFuture', '_chainCoreFuture', '_propagateToListeners']
    });
    return _Future;
  });
  var _Future = _Future$();
  _Future._INCOMPLETE = 0;
  _Future._PENDING_COMPLETE = 1;
  _Future._CHAINED = 2;
  _Future._VALUE = 4;
  _Future._ERROR = 8;
  var __CastType6$ = dart.generic(function(T) {
    var __CastType6 = dart.typedef('__CastType6', function() {
      return dart.functionType(dart.dynamic, [T]);
    });
    return __CastType6;
  });
  var __CastType6 = __CastType6$();
  var __CastType8 = dart.typedef('__CastType8', function() {
    return dart.functionType(core.bool, [dart.dynamic]);
  });
  var __CastType10 = dart.typedef('__CastType10', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var _AsyncCallback = dart.typedef('_AsyncCallback', function() {
    return dart.functionType(dart.void, []);
  });
  var _AsyncCallbackEntry = function($__super) {
    function _AsyncCallbackEntry() {
      $traceurRuntime.superConstructor(_AsyncCallbackEntry).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_AsyncCallbackEntry, {_AsyncCallbackEntry: function(callback) {
        this.callback = callback;
        this.next = null;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(_AsyncCallbackEntry, {constructors: function() {
      return ({_AsyncCallbackEntry: [_AsyncCallbackEntry, [_AsyncCallback]]});
    }});
  exports._nextCallback = null;
  exports._lastCallback = null;
  exports._lastPriorityCallback = null;
  exports._isInCallbackLoop = false;
  function _asyncRunCallbackLoop() {
    while (exports._nextCallback != null) {
      exports._lastPriorityCallback = null;
      var entry = exports._nextCallback;
      exports._nextCallback = entry.next;
      if (exports._nextCallback == null)
        exports._lastCallback = null;
      entry.callback();
    }
  }
  dart.fn(_asyncRunCallbackLoop, dart.void, []);
  function _asyncRunCallback() {
    exports._isInCallbackLoop = true;
    try {
      _asyncRunCallbackLoop();
    } finally {
      exports._lastPriorityCallback = null;
      exports._isInCallbackLoop = false;
      if (exports._nextCallback != null)
        _AsyncRun._scheduleImmediate(_asyncRunCallback);
    }
  }
  dart.fn(_asyncRunCallback, dart.void, []);
  function _scheduleAsyncCallback(callback) {
    if (exports._nextCallback == null) {
      exports._nextCallback = exports._lastCallback = new _AsyncCallbackEntry(dart.as(callback, _AsyncCallback));
      if (!dart.notNull(exports._isInCallbackLoop)) {
        _AsyncRun._scheduleImmediate(_asyncRunCallback);
      }
    } else {
      var newEntry = new _AsyncCallbackEntry(dart.as(callback, _AsyncCallback));
      exports._lastCallback.next = newEntry;
      exports._lastCallback = newEntry;
    }
  }
  dart.fn(_scheduleAsyncCallback, dart.void, [dart.dynamic]);
  function _schedulePriorityAsyncCallback(callback) {
    var entry = new _AsyncCallbackEntry(dart.as(callback, _AsyncCallback));
    if (exports._nextCallback == null) {
      _scheduleAsyncCallback(callback);
      exports._lastPriorityCallback = exports._lastCallback;
    } else if (exports._lastPriorityCallback == null) {
      entry.next = exports._nextCallback;
      exports._nextCallback = exports._lastPriorityCallback = entry;
    } else {
      entry.next = exports._lastPriorityCallback.next;
      exports._lastPriorityCallback.next = entry;
      exports._lastPriorityCallback = entry;
      if (entry.next == null) {
        exports._lastCallback = entry;
      }
    }
  }
  dart.fn(_schedulePriorityAsyncCallback, dart.void, [dart.dynamic]);
  function scheduleMicrotask(callback) {
    if (dart.notNull(core.identical(_ROOT_ZONE, Zone.current))) {
      _rootScheduleMicrotask(null, null, _ROOT_ZONE, callback);
      return;
    }
    Zone.current.scheduleMicrotask(Zone.current.bindCallback(callback, {runGuarded: true}));
  }
  dart.fn(scheduleMicrotask, dart.void, [dart.functionType(dart.void, [])]);
  var _AsyncRun = function($__super) {
    function _AsyncRun() {
      $traceurRuntime.superConstructor(_AsyncRun).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_AsyncRun, {}, {
      _scheduleImmediate: function(callback) {
        dart.dcall(_AsyncRun.scheduleImmediateClosure, callback);
      },
      _initializeScheduleImmediate: function() {
        if (self.scheduleImmediate != null) {
          return _AsyncRun._scheduleImmediateJsOverride;
        }
        if (self.MutationObserver != null && self.document != null) {
          var internalCallback = function(_) {
            _isolate_helper.leaveJsAsync();
            var f = storedCallback;
            storedCallback = null;
            dart.dcall(f);
          };
          var div = self.document.createElement("div");
          var span = self.document.createElement("span");
          var storedCallback = null;
          dart.fn(internalCallback);
          ;
          var observer = new self.MutationObserver(internalCallback);
          observer.observe(div, {childList: true});
          return dart.fn(function(callback) {
            dart.assert(storedCallback == null);
            _isolate_helper.enterJsAsync();
            storedCallback = callback;
            div.firstChild ? div.removeChild(span) : div.appendChild(span);
          }, dart.dynamic, [dart.functionType(dart.void, [])]);
        } else if (self.setImmediate != null) {
          return _AsyncRun._scheduleImmediateWithSetImmediate;
        }
        return _AsyncRun._scheduleImmediateWithTimer;
      },
      _scheduleImmediateJsOverride: function(callback) {
        function internalCallback() {
          _isolate_helper.leaveJsAsync();
          callback();
        }
        dart.fn(internalCallback);
        ;
        _isolate_helper.enterJsAsync();
        self.scheduleImmediate(internalCallback);
      },
      _scheduleImmediateWithSetImmediate: function(callback) {
        function internalCallback() {
          _isolate_helper.leaveJsAsync();
          callback();
        }
        dart.fn(internalCallback);
        ;
        _isolate_helper.enterJsAsync();
        self.setImmediate(internalCallback);
      },
      _scheduleImmediateWithTimer: function(callback) {
        Timer._createTimer(core.Duration.ZERO, callback);
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(_AsyncRun, {
    statics: function() {
      return ({
        _scheduleImmediate: [dart.void, [dart.functionType(dart.void, [])]],
        _initializeScheduleImmediate: [core.Function, []],
        _scheduleImmediateJsOverride: [dart.void, [dart.functionType(dart.void, [])]],
        _scheduleImmediateWithSetImmediate: [dart.void, [dart.functionType(dart.void, [])]],
        _scheduleImmediateWithTimer: [dart.void, [dart.functionType(dart.void, [])]]
      });
    },
    names: ['_scheduleImmediate', '_initializeScheduleImmediate', '_scheduleImmediateJsOverride', '_scheduleImmediateWithSetImmediate', '_scheduleImmediateWithTimer']
  });
  dart.defineLazyProperties(_AsyncRun, {get scheduleImmediateClosure() {
      return _AsyncRun._initializeScheduleImmediate();
    }});
  var StreamSubscription$ = dart.generic(function(T) {
    var StreamSubscription = function($__super) {
      function StreamSubscription() {
        $traceurRuntime.superConstructor(StreamSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamSubscription, {}, {}, $__super);
    }(core.Object);
    return StreamSubscription;
  });
  var StreamSubscription = StreamSubscription$();
  var EventSink$ = dart.generic(function(T) {
    var EventSink = function($__super) {
      function EventSink() {
        $traceurRuntime.superConstructor(EventSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(EventSink, {}, {}, $__super);
    }(core.Object);
    EventSink[dart.implements] = function() {
      return [core.Sink$(T)];
    };
    return EventSink;
  });
  var EventSink = EventSink$();
  var _stream = Symbol('_stream');
  var StreamView$ = dart.generic(function(T) {
    var StreamView = function($__super) {
      function StreamView() {
        $traceurRuntime.superConstructor(StreamView).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamView, {
        StreamView: function(stream) {
          this[_stream] = stream;
          $traceurRuntime.superGet(this, StreamView.prototype, "Stream").call(this);
        },
        get isBroadcast() {
          return this[_stream].isBroadcast;
        },
        asBroadcastStream: function(opts) {
          var onListen = opts && 'onListen' in opts ? opts.onListen : null;
          dart.as(onListen, dart.functionType(dart.void, [StreamSubscription$(T)]));
          var onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
          dart.as(onCancel, dart.functionType(dart.void, [StreamSubscription$(T)]));
          return this[_stream].asBroadcastStream({
            onListen: onListen,
            onCancel: onCancel
          });
        },
        listen: function(onData, opts) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var onDone = opts && 'onDone' in opts ? opts.onDone : null;
          dart.as(onDone, dart.functionType(dart.void, []));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
          return this[_stream].listen(onData, {
            onError: onError,
            onDone: onDone,
            cancelOnError: cancelOnError
          });
        }
      }, {}, $__super);
    }(Stream$(T));
    dart.setSignature(StreamView, {
      constructors: function() {
        return ({StreamView: [StreamView$(T), [Stream$(T)]]});
      },
      methods: function() {
        return ({
          asBroadcastStream: [Stream$(T), [], {
            onListen: dart.functionType(dart.void, [StreamSubscription$(T)]),
            onCancel: dart.functionType(dart.void, [StreamSubscription$(T)])
          }],
          listen: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {
            onError: core.Function,
            onDone: dart.functionType(dart.void, []),
            cancelOnError: core.bool
          }]
        });
      }
    });
    return StreamView;
  });
  var StreamView = StreamView$();
  var StreamConsumer$ = dart.generic(function(S) {
    var StreamConsumer = function($__super) {
      function StreamConsumer() {
        $traceurRuntime.superConstructor(StreamConsumer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamConsumer, {}, {}, $__super);
    }(core.Object);
    return StreamConsumer;
  });
  var StreamConsumer = StreamConsumer$();
  var StreamSink$ = dart.generic(function(S) {
    var StreamSink = function($__super) {
      function StreamSink() {
        $traceurRuntime.superConstructor(StreamSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamSink, {}, {}, $__super);
    }(core.Object);
    StreamSink[dart.implements] = function() {
      return [StreamConsumer$(S), EventSink$(S)];
    };
    return StreamSink;
  });
  var StreamSink = StreamSink$();
  var StreamTransformer$ = dart.generic(function(S, T) {
    var StreamTransformer = function($__super) {
      function StreamTransformer() {
        $traceurRuntime.superConstructor(StreamTransformer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamTransformer, {}, {
        new: function(transformer) {
          return new _StreamSubscriptionTransformer(transformer);
        },
        fromHandlers: function(opts) {
          return new _StreamHandlerTransformer(opts);
        }
      }, $__super);
    }(core.Object);
    dart.setSignature(StreamTransformer, {constructors: function() {
        return ({
          new: [StreamTransformer$(S, T), [dart.functionType(StreamSubscription$(T), [Stream$(S), core.bool])]],
          fromHandlers: [StreamTransformer$(S, T), [], {
            handleData: dart.functionType(dart.void, [S, EventSink$(T)]),
            handleError: dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]),
            handleDone: dart.functionType(dart.void, [EventSink$(T)])
          }]
        });
      }});
    return StreamTransformer;
  });
  var StreamTransformer = StreamTransformer$();
  var StreamIterator$ = dart.generic(function(T) {
    var StreamIterator = function($__super) {
      function StreamIterator() {
        $traceurRuntime.superConstructor(StreamIterator).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamIterator, {}, {new: function(stream) {
          return new (_StreamIteratorImpl$(T))(stream);
        }}, $__super);
    }(core.Object);
    dart.setSignature(StreamIterator, {constructors: function() {
        return ({new: [StreamIterator$(T), [Stream$(T)]]});
      }});
    return StreamIterator;
  });
  var StreamIterator = StreamIterator$();
  var _ControllerEventSinkWrapper$ = dart.generic(function(T) {
    var _ControllerEventSinkWrapper = function($__super) {
      function _ControllerEventSinkWrapper() {
        $traceurRuntime.superConstructor(_ControllerEventSinkWrapper).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ControllerEventSinkWrapper, {
        _ControllerEventSinkWrapper: function(sink) {
          this[_sink] = sink;
        },
        add: function(data) {
          dart.as(data, T);
          this[_sink].add(data);
        },
        addError: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          this[_sink].addError(error, stackTrace);
        },
        close: function() {
          this[_sink].close();
        }
      }, {}, $__super);
    }(core.Object);
    _ControllerEventSinkWrapper[dart.implements] = function() {
      return [EventSink$(T)];
    };
    dart.setSignature(_ControllerEventSinkWrapper, {
      constructors: function() {
        return ({_ControllerEventSinkWrapper: [_ControllerEventSinkWrapper$(T), [EventSink]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [T]],
          addError: [dart.void, [dart.dynamic], [core.StackTrace]],
          close: [dart.void, []]
        });
      }
    });
    return _ControllerEventSinkWrapper;
  });
  var _ControllerEventSinkWrapper = _ControllerEventSinkWrapper$();
  var __CastType12 = dart.typedef('__CastType12', function() {
    return dart.functionType(dart.void, [StreamSubscription]);
  });
  var __CastType14 = dart.typedef('__CastType14', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace]);
  });
  var __CastType17 = dart.typedef('__CastType17', function() {
    return dart.functionType(dart.void, []);
  });
  var __CastType18 = dart.typedef('__CastType18', function() {
    return dart.functionType(dart.void, [EventSink]);
  });
  var StreamController$ = dart.generic(function(T) {
    var StreamController = function($__super) {
      function StreamController() {
        $traceurRuntime.superConstructor(StreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(StreamController, {}, {
        new: function(opts) {
          var onListen = opts && 'onListen' in opts ? opts.onListen : null;
          var onPause = opts && 'onPause' in opts ? opts.onPause : null;
          var onResume = opts && 'onResume' in opts ? opts.onResume : null;
          var onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
          var sync = opts && 'sync' in opts ? opts.sync : false;
          if (onListen == null && onPause == null && onResume == null && onCancel == null) {
            return dart.as(dart.notNull(sync) ? new _NoCallbackSyncStreamController() : new _NoCallbackAsyncStreamController(), StreamController$(T));
          }
          return dart.notNull(sync) ? new (_SyncStreamController$(T))(onListen, onPause, onResume, onCancel) : new (_AsyncStreamController$(T))(onListen, onPause, onResume, onCancel);
        },
        broadcast: function(opts) {
          var onListen = opts && 'onListen' in opts ? opts.onListen : null;
          var onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
          var sync = opts && 'sync' in opts ? opts.sync : false;
          return dart.notNull(sync) ? new (_SyncBroadcastStreamController$(T))(onListen, onCancel) : new (_AsyncBroadcastStreamController$(T))(onListen, onCancel);
        }
      }, $__super);
    }(core.Object);
    StreamController[dart.implements] = function() {
      return [StreamSink$(T)];
    };
    dart.setSignature(StreamController, {constructors: function() {
        return ({
          new: [StreamController$(T), [], {
            onListen: dart.functionType(dart.void, []),
            onPause: dart.functionType(dart.void, []),
            onResume: dart.functionType(dart.void, []),
            onCancel: dart.functionType(dart.dynamic, []),
            sync: core.bool
          }],
          broadcast: [StreamController$(T), [], {
            onListen: dart.functionType(dart.void, []),
            onCancel: dart.functionType(dart.void, []),
            sync: core.bool
          }]
        });
      }});
    return StreamController;
  });
  var StreamController = StreamController$();
  var _StreamControllerLifecycle$ = dart.generic(function(T) {
    var _StreamControllerLifecycle = function($__super) {
      var $__5;
      function _StreamControllerLifecycle() {
        $traceurRuntime.superConstructor(_StreamControllerLifecycle).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamControllerLifecycle, ($__5 = {}, Object.defineProperty($__5, _recordPause, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordResume, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordCancel, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    dart.setSignature(_StreamControllerLifecycle, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _recordPause, {
          value: [dart.void, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordResume, {
          value: [dart.void, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordCancel, {
          value: [Future, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _StreamControllerLifecycle;
  });
  var _StreamControllerLifecycle = _StreamControllerLifecycle$();
  var _varData = Symbol('_varData');
  var _isInitialState = Symbol('_isInitialState');
  var _subscription = Symbol('_subscription');
  var _pendingEvents = Symbol('_pendingEvents');
  var _ensurePendingEvents = Symbol('_ensurePendingEvents');
  var _badEventState = Symbol('_badEventState');
  var _StreamController$ = dart.generic(function(T) {
    var _StreamController = function($__super) {
      var $__5;
      function _StreamController() {
        $traceurRuntime.superConstructor(_StreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamController, ($__5 = {}, Object.defineProperty($__5, "_StreamController", {
        value: function() {
          this[_varData] = null;
          this[_state] = _StreamController$()._STATE_INITIAL;
          this[_doneFuture] = null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "stream", {
        get: function() {
          return new (_ControllerStream$(T))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "sink", {
        get: function() {
          return new (_StreamSinkWrapper$(T))(this);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isCanceled, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_CANCELED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "hasListener", {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_SUBSCRIBED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isInitialState, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_SUBSCRIPTION_MASK)) == _StreamController$()._STATE_INITIAL;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "isClosed", {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_CLOSED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "isPaused", {
        get: function() {
          return dart.notNull(this.hasListener) ? this[_subscription][_isInputPaused] : !dart.notNull(this[_isCanceled]);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isAddingStream, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_ADDSTREAM)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _mayAddEvent, {
        get: function() {
          return dart.notNull(this[_state]) < dart.notNull(_StreamController$()._STATE_CLOSED);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _pendingEvents, {
        get: function() {
          dart.assert(this[_isInitialState]);
          if (!dart.notNull(this[_isAddingStream])) {
            return dart.as(this[_varData], _PendingEvents);
          }
          var state = dart.as(this[_varData], _StreamControllerAddStreamState);
          return dart.as(state.varData, _PendingEvents);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _ensurePendingEvents, {
        value: function() {
          dart.assert(this[_isInitialState]);
          if (!dart.notNull(this[_isAddingStream])) {
            if (this[_varData] == null)
              this[_varData] = new _StreamImplEvents();
            return dart.as(this[_varData], _StreamImplEvents);
          }
          var state = dart.as(this[_varData], _StreamControllerAddStreamState);
          if (state.varData == null)
            state.varData = new _StreamImplEvents();
          return dart.as(state.varData, _StreamImplEvents);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _subscription, {
        get: function() {
          dart.assert(this.hasListener);
          if (dart.notNull(this[_isAddingStream])) {
            var addState = dart.as(this[_varData], _StreamControllerAddStreamState);
            return dart.as(addState.varData, _ControllerSubscription);
          }
          return dart.as(this[_varData], _ControllerSubscription);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _badEventState, {
        value: function() {
          if (dart.notNull(this.isClosed)) {
            return new core.StateError("Cannot add event after closing");
          }
          dart.assert(this[_isAddingStream]);
          return new core.StateError("Cannot add event while adding a stream");
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "addStream", {
        value: function(source, opts) {
          dart.as(source, Stream$(T));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_badEventState]());
          if (dart.notNull(this[_isCanceled]))
            return new _Future.immediate(null);
          var addState = new _StreamControllerAddStreamState(this, this[_varData], source, cancelOnError);
          this[_varData] = addState;
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_StreamController$()._STATE_ADDSTREAM);
          return addState.addStreamFuture;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "done", {
        get: function() {
          return this[_ensureDoneFuture]();
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _ensureDoneFuture, {
        value: function() {
          if (this[_doneFuture] == null) {
            this[_doneFuture] = dart.notNull(this[_isCanceled]) ? Future._nullFuture : new _Future();
          }
          return this[_doneFuture];
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "add", {
        value: function(value) {
          dart.as(value, T);
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_badEventState]());
          this[_add](value);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "addError", {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          error = _nonNullError(error);
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_badEventState]());
          var replacement = Zone.current.errorCallback(error, stackTrace);
          if (replacement != null) {
            error = _nonNullError(replacement.error);
            stackTrace = replacement.stackTrace;
          }
          this[_addError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "close", {
        value: function() {
          if (dart.notNull(this.isClosed)) {
            return this[_ensureDoneFuture]();
          }
          if (!dart.notNull(this[_mayAddEvent]))
            dart.throw(this[_badEventState]());
          this[_closeUnchecked]();
          return this[_ensureDoneFuture]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _closeUnchecked, {
        value: function() {
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_StreamController$()._STATE_CLOSED);
          if (dart.notNull(this.hasListener)) {
            this[_sendDone]();
          } else if (dart.notNull(this[_isInitialState])) {
            this[_ensurePendingEvents]().add(dart.const(new _DelayedDone()));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _add, {
        value: function(value) {
          dart.as(value, T);
          if (dart.notNull(this.hasListener)) {
            this[_sendData](value);
          } else if (dart.notNull(this[_isInitialState])) {
            this[_ensurePendingEvents]().add(new (_DelayedData$(T))(value));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addError, {
        value: function(error, stackTrace) {
          if (dart.notNull(this.hasListener)) {
            this[_sendError](error, stackTrace);
          } else if (dart.notNull(this[_isInitialState])) {
            this[_ensurePendingEvents]().add(new _DelayedError(error, stackTrace));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _close, {
        value: function() {
          dart.assert(this[_isAddingStream]);
          var addState = dart.as(this[_varData], _StreamControllerAddStreamState);
          this[_varData] = addState.varData;
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_StreamController$()._STATE_ADDSTREAM);
          addState.complete();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _subscribe, {
        value: function(onData, onError, onDone, cancelOnError) {
          var $__4 = this;
          dart.as(onData, dart.functionType(dart.void, [T]));
          dart.as(onDone, dart.functionType(dart.void, []));
          if (!dart.notNull(this[_isInitialState])) {
            dart.throw(new core.StateError("Stream has already been listened to."));
          }
          var subscription = new _ControllerSubscription(this, onData, onError, onDone, cancelOnError);
          var pendingEvents = this[_pendingEvents];
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_StreamController$()._STATE_SUBSCRIBED);
          if (dart.notNull(this[_isAddingStream])) {
            var addState = dart.as(this[_varData], _StreamControllerAddStreamState);
            addState.varData = subscription;
            addState.resume();
          } else {
            this[_varData] = subscription;
          }
          subscription[_setPendingEvents](pendingEvents);
          subscription[_guardCallback](dart.fn((function() {
            _runGuarded($__4[_onListen]);
          }).bind(this)));
          return dart.as(subscription, StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordCancel, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
          var result = null;
          if (dart.notNull(this[_isAddingStream])) {
            var addState = dart.as(this[_varData], _StreamControllerAddStreamState);
            result = addState.cancel();
          }
          this[_varData] = null;
          this[_state] = dart.notNull(this[_state]) & ~(dart.notNull(_StreamController$()._STATE_SUBSCRIBED) | dart.notNull(_StreamController$()._STATE_ADDSTREAM)) | dart.notNull(_StreamController$()._STATE_CANCELED);
          if (this[_onCancel] != null) {
            if (result == null) {
              try {
                result = dart.as(this[_onCancel](), Future);
              } catch (e) {
                var s = dart.stackTrace(e);
                result = new _Future();
                result[_asyncCompleteError](e, s);
              }
            } else {
              result = result.whenComplete(this[_onCancel]);
            }
          }
          var complete = (function() {
            if (this[_doneFuture] != null && dart.notNull(this[_doneFuture][_mayComplete])) {
              this[_doneFuture][_asyncComplete](null);
            }
          }).bind(this);
          dart.fn(complete, dart.void, []);
          if (result != null) {
            result = result.whenComplete(complete);
          } else {
            complete();
          }
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordPause, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
          if (dart.notNull(this[_isAddingStream])) {
            var addState = dart.as(this[_varData], _StreamControllerAddStreamState);
            addState.pause();
          }
          _runGuarded(this[_onPause]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _recordResume, {
        value: function(subscription) {
          dart.as(subscription, StreamSubscription$(T));
          if (dart.notNull(this[_isAddingStream])) {
            var addState = dart.as(this[_varData], _StreamControllerAddStreamState);
            addState.resume();
          }
          _runGuarded(this[_onResume]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _StreamController[dart.implements] = function() {
      return [StreamController$(T), _StreamControllerLifecycle$(T), _EventSink$(T), _EventDispatch$(T)];
    };
    dart.setSignature(_StreamController, {
      constructors: function() {
        return ({_StreamController: [_StreamController$(T), []]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _ensurePendingEvents, {
          value: [_StreamImplEvents, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _badEventState, {
          value: [core.Error, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "addStream", {
          value: [Future, [Stream$(T)], {cancelOnError: core.bool}],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _ensureDoneFuture, {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "add", {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "addError", {
          value: [dart.void, [core.Object], [core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "close", {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _closeUnchecked, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _add, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _addError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _close, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _subscribe, {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordCancel, {
          value: [Future, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordPause, {
          value: [dart.void, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _recordResume, {
          value: [dart.void, [StreamSubscription$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _StreamController;
  });
  var _StreamController = _StreamController$();
  _StreamController._STATE_INITIAL = 0;
  _StreamController._STATE_SUBSCRIBED = 1;
  _StreamController._STATE_CANCELED = 2;
  _StreamController._STATE_SUBSCRIPTION_MASK = 3;
  _StreamController._STATE_CLOSED = 4;
  _StreamController._STATE_ADDSTREAM = 8;
  var _SyncStreamControllerDispatch$ = dart.generic(function(T) {
    var _SyncStreamControllerDispatch = function($__super) {
      var $__5;
      function _SyncStreamControllerDispatch() {
        $traceurRuntime.superConstructor(_SyncStreamControllerDispatch).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SyncStreamControllerDispatch, ($__5 = {}, Object.defineProperty($__5, _sendData, {
        value: function(data) {
          dart.as(data, T);
          this[_subscription][_add](data);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendError, {
        value: function(error, stackTrace) {
          this[_subscription][_addError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendDone, {
        value: function() {
          this[_subscription][_close]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _SyncStreamControllerDispatch[dart.implements] = function() {
      return [_StreamController$(T)];
    };
    dart.setSignature(_SyncStreamControllerDispatch, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _sendData, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _SyncStreamControllerDispatch;
  });
  var _SyncStreamControllerDispatch = _SyncStreamControllerDispatch$();
  var _AsyncStreamControllerDispatch$ = dart.generic(function(T) {
    var _AsyncStreamControllerDispatch = function($__super) {
      var $__5;
      function _AsyncStreamControllerDispatch() {
        $traceurRuntime.superConstructor(_AsyncStreamControllerDispatch).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AsyncStreamControllerDispatch, ($__5 = {}, Object.defineProperty($__5, _sendData, {
        value: function(data) {
          dart.as(data, T);
          this[_subscription][_addPending](new _DelayedData(data));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendError, {
        value: function(error, stackTrace) {
          this[_subscription][_addPending](new _DelayedError(error, stackTrace));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendDone, {
        value: function() {
          this[_subscription][_addPending](dart.const(new _DelayedDone()));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _AsyncStreamControllerDispatch[dart.implements] = function() {
      return [_StreamController$(T)];
    };
    dart.setSignature(_AsyncStreamControllerDispatch, {methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _sendData, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendError, {
          value: [dart.void, [core.Object, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }});
    return _AsyncStreamControllerDispatch;
  });
  var _AsyncStreamControllerDispatch = _AsyncStreamControllerDispatch$();
  var _AsyncStreamController$ = dart.generic(function(T) {
    var _AsyncStreamController = function($__super) {
      function _AsyncStreamController() {
        $traceurRuntime.superConstructor(_AsyncStreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AsyncStreamController, {_AsyncStreamController: function(onListen, onPause, onResume, onCancel) {
          this[_onListen] = onListen;
          this[_onPause] = onPause;
          this[_onResume] = onResume;
          this[_onCancel] = onCancel;
          $traceurRuntime.superGet(this, _AsyncStreamController.prototype, "_StreamController").call(this);
        }}, {}, $__super);
    }(dart.mixin(_StreamController$(T), _AsyncStreamControllerDispatch$(T)));
    dart.setSignature(_AsyncStreamController, {constructors: function() {
        return ({_AsyncStreamController: [_AsyncStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.dynamic, [])]]});
      }});
    return _AsyncStreamController;
  });
  var _AsyncStreamController = _AsyncStreamController$();
  var _SyncStreamController$ = dart.generic(function(T) {
    var _SyncStreamController = function($__super) {
      function _SyncStreamController() {
        $traceurRuntime.superConstructor(_SyncStreamController).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SyncStreamController, {_SyncStreamController: function(onListen, onPause, onResume, onCancel) {
          this[_onListen] = onListen;
          this[_onPause] = onPause;
          this[_onResume] = onResume;
          this[_onCancel] = onCancel;
          $traceurRuntime.superGet(this, _SyncStreamController.prototype, "_StreamController").call(this);
        }}, {}, $__super);
    }(dart.mixin(_StreamController$(T), _SyncStreamControllerDispatch$(T)));
    dart.setSignature(_SyncStreamController, {constructors: function() {
        return ({_SyncStreamController: [_SyncStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.dynamic, [])]]});
      }});
    return _SyncStreamController;
  });
  var _SyncStreamController = _SyncStreamController$();
  var _NoCallbacks = function($__super) {
    var $__5;
    function _NoCallbacks() {
      $traceurRuntime.superConstructor(_NoCallbacks).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_NoCallbacks, ($__5 = {}, Object.defineProperty($__5, _onListen, {
      get: function() {
        return null;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _onPause, {
      get: function() {
        return null;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _onResume, {
      get: function() {
        return null;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _onCancel, {
      get: function() {
        return null;
      },
      configurable: true,
      enumerable: true
    }), $__5), {}, $__super);
  }(core.Object);
  var _NoCallbackAsyncStreamController = function($__super) {
    function _NoCallbackAsyncStreamController() {
      $traceurRuntime.superConstructor(_NoCallbackAsyncStreamController).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_NoCallbackAsyncStreamController, {_NoCallbackAsyncStreamController: function() {
        var $__13;
        ($__13 = $traceurRuntime.superGet(this, _NoCallbackAsyncStreamController.prototype, "_StreamController")).call.apply($__13, $traceurRuntime.spread([this], arguments));
      }}, {}, $__super);
  }(dart.mixin(_StreamController, _AsyncStreamControllerDispatch, _NoCallbacks));
  var _NoCallbackSyncStreamController = function($__super) {
    function _NoCallbackSyncStreamController() {
      $traceurRuntime.superConstructor(_NoCallbackSyncStreamController).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_NoCallbackSyncStreamController, {_NoCallbackSyncStreamController: function() {
        var $__13;
        ($__13 = $traceurRuntime.superGet(this, _NoCallbackSyncStreamController.prototype, "_StreamController")).call.apply($__13, $traceurRuntime.spread([this], arguments));
      }}, {}, $__super);
  }(dart.mixin(_StreamController, _SyncStreamControllerDispatch, _NoCallbacks));
  var _NotificationHandler = dart.typedef('_NotificationHandler', function() {
    return dart.functionType(dart.dynamic, []);
  });
  function _runGuarded(notificationHandler) {
    if (notificationHandler == null)
      return null;
    try {
      var result = notificationHandler();
      if (dart.is(result, Future))
        return dart.as(result, Future);
      return null;
    } catch (e) {
      var s = dart.stackTrace(e);
      Zone.current.handleUncaughtError(e, s);
    }
  }
  dart.fn(_runGuarded, Future, [_NotificationHandler]);
  var _target = Symbol('_target');
  var _StreamSinkWrapper$ = dart.generic(function(T) {
    var _StreamSinkWrapper = function($__super) {
      function _StreamSinkWrapper() {
        $traceurRuntime.superConstructor(_StreamSinkWrapper).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamSinkWrapper, {
        _StreamSinkWrapper: function(target) {
          this[_target] = target;
        },
        add: function(data) {
          dart.as(data, T);
          this[_target].add(data);
        },
        addError: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          this[_target].addError(error, stackTrace);
        },
        close: function() {
          return this[_target].close();
        },
        addStream: function(source, opts) {
          dart.as(source, Stream$(T));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
          return this[_target].addStream(source, {cancelOnError: cancelOnError});
        },
        get done() {
          return this[_target].done;
        }
      }, {}, $__super);
    }(core.Object);
    _StreamSinkWrapper[dart.implements] = function() {
      return [StreamSink$(T)];
    };
    dart.setSignature(_StreamSinkWrapper, {
      constructors: function() {
        return ({_StreamSinkWrapper: [_StreamSinkWrapper$(T), [StreamController]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [T]],
          addError: [dart.void, [core.Object], [core.StackTrace]],
          close: [Future, []],
          addStream: [Future, [Stream$(T)], {cancelOnError: core.bool}]
        });
      }
    });
    return _StreamSinkWrapper;
  });
  var _StreamSinkWrapper = _StreamSinkWrapper$();
  var _AddStreamState$ = dart.generic(function(T) {
    var _AddStreamState = function($__super) {
      function _AddStreamState() {
        $traceurRuntime.superConstructor(_AddStreamState).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AddStreamState, {
        _AddStreamState: function(controller, source, cancelOnError) {
          this.addStreamFuture = new _Future();
          this.addSubscription = source.listen(dart.bind(controller, _add), {
            onError: dart.notNull(cancelOnError) ? dart.as(_AddStreamState$().makeErrorHandler(controller), core.Function) : dart.bind(controller, _addError),
            onDone: dart.bind(controller, _close),
            cancelOnError: cancelOnError
          });
        },
        pause: function() {
          this.addSubscription.pause();
        },
        resume: function() {
          this.addSubscription.resume();
        },
        cancel: function() {
          var $__4 = this;
          var cancel2 = this.addSubscription.cancel();
          if (cancel2 == null) {
            this.addStreamFuture[_asyncComplete](null);
            return null;
          }
          return cancel2.whenComplete(dart.fn((function() {
            $__4.addStreamFuture[_asyncComplete](null);
          }).bind(this)));
        },
        complete: function() {
          this.addStreamFuture[_asyncComplete](null);
        }
      }, {makeErrorHandler: function(controller) {
          return dart.fn(function(e, s) {
            controller[_addError](e, s);
            controller[_close]();
          }, dart.dynamic, [dart.dynamic, core.StackTrace]);
        }}, $__super);
    }(core.Object);
    dart.setSignature(_AddStreamState, {
      constructors: function() {
        return ({_AddStreamState: [_AddStreamState$(T), [_EventSink$(T), Stream, core.bool]]});
      },
      methods: function() {
        return ({
          pause: [dart.void, []],
          resume: [dart.void, []],
          cancel: [Future, []],
          complete: [dart.void, []]
        });
      },
      statics: function() {
        return ({makeErrorHandler: [dart.dynamic, [_EventSink]]});
      },
      names: ['makeErrorHandler']
    });
    return _AddStreamState;
  });
  var _AddStreamState = _AddStreamState$();
  var _StreamControllerAddStreamState$ = dart.generic(function(T) {
    var _StreamControllerAddStreamState = function($__super) {
      function _StreamControllerAddStreamState() {
        $traceurRuntime.superConstructor(_StreamControllerAddStreamState).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamControllerAddStreamState, {_StreamControllerAddStreamState: function(controller, varData, source, cancelOnError) {
          this.varData = varData;
          $traceurRuntime.superGet(this, _StreamControllerAddStreamState.prototype, "_AddStreamState").call(this, dart.as(controller, _EventSink$(T)), source, cancelOnError);
          if (dart.notNull(controller.isPaused)) {
            this.addSubscription.pause();
          }
        }}, {}, $__super);
    }(_AddStreamState$(T));
    dart.setSignature(_StreamControllerAddStreamState, {constructors: function() {
        return ({_StreamControllerAddStreamState: [_StreamControllerAddStreamState$(T), [_StreamController, dart.dynamic, Stream, core.bool]]});
      }});
    return _StreamControllerAddStreamState;
  });
  var _StreamControllerAddStreamState = _StreamControllerAddStreamState$();
  var _EventSink$ = dart.generic(function(T) {
    var _EventSink = function($__super) {
      function _EventSink() {
        $traceurRuntime.superConstructor(_EventSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_EventSink, {}, {}, $__super);
    }(core.Object);
    return _EventSink;
  });
  var _EventSink = _EventSink$();
  var _EventDispatch$ = dart.generic(function(T) {
    var _EventDispatch = function($__super) {
      function _EventDispatch() {
        $traceurRuntime.superConstructor(_EventDispatch).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_EventDispatch, {}, {}, $__super);
    }(core.Object);
    return _EventDispatch;
  });
  var _EventDispatch = _EventDispatch$();
  _BufferingStreamSubscription._STATE_CANCEL_ON_ERROR = 1;
  _BufferingStreamSubscription._STATE_CLOSED = 2;
  _BufferingStreamSubscription._STATE_INPUT_PAUSED = 4;
  _BufferingStreamSubscription._STATE_CANCELED = 8;
  _BufferingStreamSubscription._STATE_WAIT_FOR_CANCEL = 16;
  _BufferingStreamSubscription._STATE_IN_CALLBACK = 32;
  _BufferingStreamSubscription._STATE_HAS_PENDING = 64;
  _BufferingStreamSubscription._STATE_PAUSE_COUNT = 128;
  _BufferingStreamSubscription._STATE_PAUSE_COUNT_SHIFT = 7;
  var _EventGenerator = dart.typedef('_EventGenerator', function() {
    return dart.functionType(_PendingEvents, []);
  });
  var _isUsed = Symbol('_isUsed');
  var _GeneratedStreamImpl$ = dart.generic(function(T) {
    var _GeneratedStreamImpl = function($__super) {
      var $__5;
      function _GeneratedStreamImpl() {
        $traceurRuntime.superConstructor(_GeneratedStreamImpl).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_GeneratedStreamImpl, ($__5 = {}, Object.defineProperty($__5, "_GeneratedStreamImpl", {
        value: function(pending) {
          this[_pending] = pending;
          this[_isUsed] = false;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _createSubscription, {
        value: function(onData, onError, onDone, cancelOnError) {
          var $__4 = this;
          dart.as(onData, dart.functionType(dart.void, [T]));
          dart.as(onDone, dart.functionType(dart.void, []));
          if (dart.notNull(this[_isUsed]))
            dart.throw(new core.StateError("Stream has already been listened to."));
          this[_isUsed] = true;
          return dart.as((function() {
            var _ = new _BufferingStreamSubscription(onData, onError, onDone, cancelOnError);
            _[_setPendingEvents]($__4[_pending]());
            return _;
          }).bind(this)(), StreamSubscription$(T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_StreamImpl$(T));
    dart.setSignature(_GeneratedStreamImpl, {
      constructors: function() {
        return ({_GeneratedStreamImpl: [_GeneratedStreamImpl$(T), [_EventGenerator]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _createSubscription, {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _GeneratedStreamImpl;
  });
  var _GeneratedStreamImpl = _GeneratedStreamImpl$();
  var _eventScheduled = Symbol('_eventScheduled');
  var _PendingEvents = function($__super) {
    var $__5;
    function _PendingEvents() {
      $traceurRuntime.superConstructor(_PendingEvents).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_PendingEvents, ($__5 = {}, Object.defineProperty($__5, "_PendingEvents", {
      value: function() {
        this[_state] = _PendingEvents._STATE_UNSCHEDULED;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "isScheduled", {
      get: function() {
        return this[_state] == _PendingEvents._STATE_SCHEDULED;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _eventScheduled, {
      get: function() {
        return dart.notNull(this[_state]) >= dart.notNull(_PendingEvents._STATE_SCHEDULED);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "schedule", {
      value: function(dispatch) {
        var $__4 = this;
        if (dart.notNull(this.isScheduled))
          return;
        dart.assert(!dart.notNull(this.isEmpty));
        if (dart.notNull(this[_eventScheduled])) {
          dart.assert(this[_state] == _PendingEvents._STATE_CANCELED);
          this[_state] = _PendingEvents._STATE_SCHEDULED;
          return;
        }
        scheduleMicrotask(dart.fn((function() {
          var oldState = $__4[_state];
          $__4[_state] = _PendingEvents._STATE_UNSCHEDULED;
          if (oldState == _PendingEvents._STATE_CANCELED)
            return;
          $__4.handleNext(dispatch);
        }).bind(this)));
        this[_state] = _PendingEvents._STATE_SCHEDULED;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "cancelSchedule", {
      value: function() {
        if (dart.notNull(this.isScheduled))
          this[_state] = _PendingEvents._STATE_CANCELED;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(core.Object);
  dart.setSignature(_PendingEvents, {methods: function() {
      return ({
        schedule: [dart.void, [_EventDispatch]],
        cancelSchedule: [dart.void, []]
      });
    }});
  var _iterator = Symbol('_iterator');
  var _IterablePendingEvents$ = dart.generic(function(T) {
    var _IterablePendingEvents = function($__super) {
      function _IterablePendingEvents() {
        $traceurRuntime.superConstructor(_IterablePendingEvents).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_IterablePendingEvents, {
        _IterablePendingEvents: function(data) {
          this[_iterator] = data[dartx.iterator];
          $traceurRuntime.superGet(this, _IterablePendingEvents.prototype, "_PendingEvents").call(this);
        },
        get isEmpty() {
          return this[_iterator] == null;
        },
        handleNext: function(dispatch) {
          if (this[_iterator] == null) {
            dart.throw(new core.StateError("No events pending."));
          }
          var isDone = null;
          try {
            isDone = !dart.notNull(this[_iterator].moveNext());
          } catch (e) {
            var s = dart.stackTrace(e);
            this[_iterator] = null;
            dispatch[_sendError](e, s);
            return;
          }
          if (!dart.notNull(isDone)) {
            dispatch[_sendData](this[_iterator].current);
          } else {
            this[_iterator] = null;
            dispatch[_sendDone]();
          }
        },
        clear: function() {
          if (dart.notNull(this.isScheduled))
            this.cancelSchedule();
          this[_iterator] = null;
        }
      }, {}, $__super);
    }(_PendingEvents);
    dart.setSignature(_IterablePendingEvents, {
      constructors: function() {
        return ({_IterablePendingEvents: [_IterablePendingEvents$(T), [core.Iterable$(T)]]});
      },
      methods: function() {
        return ({
          handleNext: [dart.void, [_EventDispatch]],
          clear: [dart.void, []]
        });
      }
    });
    return _IterablePendingEvents;
  });
  var _IterablePendingEvents = _IterablePendingEvents$();
  var _DataHandler$ = dart.generic(function(T) {
    var _DataHandler = dart.typedef('_DataHandler', function() {
      return dart.functionType(dart.void, [T]);
    });
    return _DataHandler;
  });
  var _DataHandler = _DataHandler$();
  var _DoneHandler = dart.typedef('_DoneHandler', function() {
    return dart.functionType(dart.void, []);
  });
  function _nullDataHandler(value) {}
  dart.fn(_nullDataHandler, dart.void, [dart.dynamic]);
  function _nullErrorHandler(error, stackTrace) {
    if (stackTrace === void 0)
      stackTrace = null;
    Zone.current.handleUncaughtError(error, stackTrace);
  }
  dart.fn(_nullErrorHandler, dart.void, [dart.dynamic], [core.StackTrace]);
  function _nullDoneHandler() {}
  dart.fn(_nullDoneHandler, dart.void, []);
  var _DelayedEvent$ = dart.generic(function(T) {
    var _DelayedEvent = function($__super) {
      function _DelayedEvent() {
        $traceurRuntime.superConstructor(_DelayedEvent).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DelayedEvent, {_DelayedEvent: function() {
          this.next = null;
        }}, {}, $__super);
    }(core.Object);
    return _DelayedEvent;
  });
  var _DelayedEvent = _DelayedEvent$();
  var _DelayedData$ = dart.generic(function(T) {
    var _DelayedData = function($__super) {
      function _DelayedData() {
        $traceurRuntime.superConstructor(_DelayedData).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DelayedData, {
        _DelayedData: function(value) {
          this.value = value;
          $traceurRuntime.superGet(this, _DelayedData.prototype, "_DelayedEvent").call(this);
        },
        perform: function(dispatch) {
          dart.as(dispatch, _EventDispatch$(T));
          dispatch[_sendData](this.value);
        }
      }, {}, $__super);
    }(_DelayedEvent$(T));
    dart.setSignature(_DelayedData, {
      constructors: function() {
        return ({_DelayedData: [_DelayedData$(T), [T]]});
      },
      methods: function() {
        return ({perform: [dart.void, [_EventDispatch$(T)]]});
      }
    });
    return _DelayedData;
  });
  var _DelayedData = _DelayedData$();
  var _DelayedError = function($__super) {
    function _DelayedError() {
      $traceurRuntime.superConstructor(_DelayedError).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_DelayedError, {
      _DelayedError: function(error, stackTrace) {
        this.error = error;
        this.stackTrace = stackTrace;
        $traceurRuntime.superGet(this, _DelayedError.prototype, "_DelayedEvent").call(this);
      },
      perform: function(dispatch) {
        dispatch[_sendError](this.error, this.stackTrace);
      }
    }, {}, $__super);
  }(_DelayedEvent);
  dart.setSignature(_DelayedError, {
    constructors: function() {
      return ({_DelayedError: [_DelayedError, [dart.dynamic, core.StackTrace]]});
    },
    methods: function() {
      return ({perform: [dart.void, [_EventDispatch]]});
    }
  });
  var _DelayedDone = function($__super) {
    function _DelayedDone() {
      $traceurRuntime.superConstructor(_DelayedDone).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_DelayedDone, {
      _DelayedDone: function() {},
      perform: function(dispatch) {
        dispatch[_sendDone]();
      },
      get next() {
        return null;
      },
      set next(_) {
        dart.throw(new core.StateError("No events after a done."));
      }
    }, {}, $__super);
  }(core.Object);
  _DelayedDone[dart.implements] = function() {
    return [_DelayedEvent];
  };
  dart.setSignature(_DelayedDone, {
    constructors: function() {
      return ({_DelayedDone: [_DelayedDone, []]});
    },
    methods: function() {
      return ({perform: [dart.void, [_EventDispatch]]});
    }
  });
  _PendingEvents._STATE_UNSCHEDULED = 0;
  _PendingEvents._STATE_SCHEDULED = 1;
  _PendingEvents._STATE_CANCELED = 3;
  var _StreamImplEvents = function($__super) {
    function _StreamImplEvents() {
      $traceurRuntime.superConstructor(_StreamImplEvents).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_StreamImplEvents, {
      _StreamImplEvents: function() {
        this.firstPendingEvent = null;
        this.lastPendingEvent = null;
        $traceurRuntime.superGet(this, _StreamImplEvents.prototype, "_PendingEvents").call(this);
      },
      get isEmpty() {
        return this.lastPendingEvent == null;
      },
      add: function(event) {
        if (this.lastPendingEvent == null) {
          this.firstPendingEvent = this.lastPendingEvent = event;
        } else {
          this.lastPendingEvent = this.lastPendingEvent.next = event;
        }
      },
      handleNext: function(dispatch) {
        dart.assert(!dart.notNull(this.isScheduled));
        var event = this.firstPendingEvent;
        this.firstPendingEvent = event.next;
        if (this.firstPendingEvent == null) {
          this.lastPendingEvent = null;
        }
        event.perform(dispatch);
      },
      clear: function() {
        if (dart.notNull(this.isScheduled))
          this.cancelSchedule();
        this.firstPendingEvent = this.lastPendingEvent = null;
      }
    }, {}, $__super);
  }(_PendingEvents);
  dart.setSignature(_StreamImplEvents, {methods: function() {
      return ({
        add: [dart.void, [_DelayedEvent]],
        handleNext: [dart.void, [_EventDispatch]],
        clear: [dart.void, []]
      });
    }});
  var _unlink = Symbol('_unlink');
  var _insertBefore = Symbol('_insertBefore');
  var _BroadcastLinkedList = function($__super) {
    var $__5;
    function _BroadcastLinkedList() {
      $traceurRuntime.superConstructor(_BroadcastLinkedList).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_BroadcastLinkedList, ($__5 = {}, Object.defineProperty($__5, "_BroadcastLinkedList", {
      value: function() {
        this[_next] = null;
        this[_previous] = null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _unlink, {
      value: function() {
        this[_previous][_next] = this[_next];
        this[_next][_previous] = this[_previous];
        this[_next] = this[_previous] = this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _insertBefore, {
      value: function(newNext) {
        var newPrevious = newNext[_previous];
        newPrevious[_next] = this;
        newNext[_previous] = this[_previous];
        this[_previous][_next] = newNext;
        this[_previous] = newPrevious;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(core.Object);
  dart.setSignature(_BroadcastLinkedList, {methods: function() {
      var $__5;
      return (($__5 = {}, Object.defineProperty($__5, _unlink, {
        value: [dart.void, []],
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _insertBefore, {
        value: [dart.void, [_BroadcastLinkedList]],
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5));
    }});
  var _broadcastCallback = dart.typedef('_broadcastCallback', function() {
    return dart.functionType(dart.void, [StreamSubscription]);
  });
  var _schedule = Symbol('_schedule');
  var _isSent = Symbol('_isSent');
  var _isScheduled = Symbol('_isScheduled');
  var _DoneStreamSubscription$ = dart.generic(function(T) {
    var _DoneStreamSubscription = function($__super) {
      var $__5;
      function _DoneStreamSubscription() {
        $traceurRuntime.superConstructor(_DoneStreamSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DoneStreamSubscription, ($__5 = {}, Object.defineProperty($__5, "_DoneStreamSubscription", {
        value: function(onDone) {
          this[_onDone] = onDone;
          this[_zone] = Zone.current;
          this[_state] = 0;
          this[_schedule]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _isSent, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_DoneStreamSubscription$()._DONE_SENT)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _isScheduled, {
        get: function() {
          return (dart.notNull(this[_state]) & dart.notNull(_DoneStreamSubscription$()._SCHEDULED)) != 0;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "isPaused", {
        get: function() {
          return dart.notNull(this[_state]) >= dart.notNull(_DoneStreamSubscription$()._PAUSED);
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _schedule, {
        value: function() {
          if (dart.notNull(this[_isScheduled]))
            return;
          this[_zone].scheduleMicrotask(dart.bind(this, _sendDone));
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_DoneStreamSubscription$()._SCHEDULED);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onData", {
        value: function(handleData) {
          dart.as(handleData, dart.functionType(dart.void, [T]));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onError", {
        value: function(handleError) {},
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "onDone", {
        value: function(handleDone) {
          dart.as(handleDone, dart.functionType(dart.void, []));
          this[_onDone] = handleDone;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "pause", {
        value: function(resumeSignal) {
          if (resumeSignal === void 0)
            resumeSignal = null;
          this[_state] = dart.notNull(this[_state]) + dart.notNull(_DoneStreamSubscription$()._PAUSED);
          if (resumeSignal != null)
            resumeSignal.whenComplete(dart.bind(this, 'resume'));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "resume", {
        value: function() {
          if (dart.notNull(this.isPaused)) {
            this[_state] = dart.notNull(this[_state]) - dart.notNull(_DoneStreamSubscription$()._PAUSED);
            if (!dart.notNull(this.isPaused) && !dart.notNull(this[_isSent])) {
              this[_schedule]();
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "cancel", {
        value: function() {
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "asFuture", {
        value: function(futureValue) {
          if (futureValue === void 0)
            futureValue = null;
          var result = new _Future();
          this[_onDone] = dart.fn(function() {
            result[_completeWithValue](null);
          });
          return result;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _sendDone, {
        value: function() {
          this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_DoneStreamSubscription$()._SCHEDULED);
          if (dart.notNull(this.isPaused))
            return;
          this[_state] = dart.notNull(this[_state]) | dart.notNull(_DoneStreamSubscription$()._DONE_SENT);
          if (this[_onDone] != null)
            this[_zone].runGuarded(this[_onDone]);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _DoneStreamSubscription[dart.implements] = function() {
      return [StreamSubscription$(T)];
    };
    dart.setSignature(_DoneStreamSubscription, {
      constructors: function() {
        return ({_DoneStreamSubscription: [_DoneStreamSubscription$(T), [_DoneHandler]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _schedule, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onData", {
          value: [dart.void, [dart.functionType(dart.void, [T])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onError", {
          value: [dart.void, [core.Function]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "onDone", {
          value: [dart.void, [dart.functionType(dart.void, [])]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "pause", {
          value: [dart.void, [], [Future]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "resume", {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "cancel", {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "asFuture", {
          value: [Future, [], [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _sendDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _DoneStreamSubscription;
  });
  var _DoneStreamSubscription = _DoneStreamSubscription$();
  _DoneStreamSubscription._DONE_SENT = 1;
  _DoneStreamSubscription._SCHEDULED = 2;
  _DoneStreamSubscription._PAUSED = 4;
  var _source = Symbol('_source');
  var _onListenHandler = Symbol('_onListenHandler');
  var _onCancelHandler = Symbol('_onCancelHandler');
  var _cancelSubscription = Symbol('_cancelSubscription');
  var _pauseSubscription = Symbol('_pauseSubscription');
  var _resumeSubscription = Symbol('_resumeSubscription');
  var _isSubscriptionPaused = Symbol('_isSubscriptionPaused');
  var _AsBroadcastStream$ = dart.generic(function(T) {
    var _AsBroadcastStream = function($__super) {
      var $__5;
      function _AsBroadcastStream() {
        $traceurRuntime.superConstructor(_AsBroadcastStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_AsBroadcastStream, ($__5 = {}, Object.defineProperty($__5, "_AsBroadcastStream", {
        value: function(source, onListenHandler, onCancelHandler) {
          this[_source] = source;
          this[_onListenHandler] = dart.as(Zone.current.registerUnaryCallback(onListenHandler), _broadcastCallback);
          this[_onCancelHandler] = dart.as(Zone.current.registerUnaryCallback(onCancelHandler), _broadcastCallback);
          this[_zone] = Zone.current;
          this[_controller] = null;
          this[_subscription] = null;
          $traceurRuntime.superGet(this, _AsBroadcastStream.prototype, "Stream").call(this);
          this[_controller] = new (_AsBroadcastStreamController$(T))(dart.bind(this, _onListen), dart.bind(this, _onCancel));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "isBroadcast", {
        get: function() {
          return true;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "listen", {
        value: function(onData, opts) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var onDone = opts && 'onDone' in opts ? opts.onDone : null;
          dart.as(onDone, dart.functionType(dart.void, []));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
          if (this[_controller] == null || dart.notNull(this[_controller].isClosed)) {
            return new (_DoneStreamSubscription$(T))(onDone);
          }
          if (this[_subscription] == null) {
            this[_subscription] = this[_source].listen(dart.bind(this[_controller], 'add'), {
              onError: dart.bind(this[_controller], 'addError'),
              onDone: dart.bind(this[_controller], 'close')
            });
          }
          cancelOnError = core.identical(true, cancelOnError);
          return this[_controller][_subscribe](onData, onError, onDone, cancelOnError);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onCancel, {
        value: function() {
          var shutdown = this[_controller] == null || dart.notNull(this[_controller].isClosed);
          if (this[_onCancelHandler] != null) {
            this[_zone].runUnary(this[_onCancelHandler], new _BroadcastSubscriptionWrapper(this));
          }
          if (dart.notNull(shutdown)) {
            if (this[_subscription] != null) {
              this[_subscription].cancel();
              this[_subscription] = null;
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onListen, {
        value: function() {
          if (this[_onListenHandler] != null) {
            this[_zone].runUnary(this[_onListenHandler], new _BroadcastSubscriptionWrapper(this));
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _cancelSubscription, {
        value: function() {
          if (this[_subscription] == null)
            return;
          var subscription = this[_subscription];
          this[_subscription] = null;
          this[_controller] = null;
          subscription.cancel();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _pauseSubscription, {
        value: function(resumeSignal) {
          if (this[_subscription] == null)
            return;
          this[_subscription].pause(resumeSignal);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _resumeSubscription, {
        value: function() {
          if (this[_subscription] == null)
            return;
          this[_subscription].resume();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _isSubscriptionPaused, {
        get: function() {
          if (this[_subscription] == null)
            return false;
          return this[_subscription].isPaused;
        },
        configurable: true,
        enumerable: true
      }), $__5), {}, $__super);
    }(Stream$(T));
    dart.setSignature(_AsBroadcastStream, {
      constructors: function() {
        return ({_AsBroadcastStream: [_AsBroadcastStream$(T), [Stream$(T), dart.functionType(dart.void, [StreamSubscription]), dart.functionType(dart.void, [StreamSubscription])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "listen", {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {
            onError: core.Function,
            onDone: dart.functionType(dart.void, []),
            cancelOnError: core.bool
          }],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onCancel, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onListen, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _cancelSubscription, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _pauseSubscription, {
          value: [dart.void, [Future]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _resumeSubscription, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _AsBroadcastStream;
  });
  var _AsBroadcastStream = _AsBroadcastStream$();
  var _BroadcastSubscriptionWrapper$ = dart.generic(function(T) {
    var _BroadcastSubscriptionWrapper = function($__super) {
      function _BroadcastSubscriptionWrapper() {
        $traceurRuntime.superConstructor(_BroadcastSubscriptionWrapper).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BroadcastSubscriptionWrapper, {
        _BroadcastSubscriptionWrapper: function(stream) {
          this[_stream] = stream;
        },
        onData: function(handleData) {
          dart.as(handleData, dart.functionType(dart.void, [T]));
          dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
        },
        onError: function(handleError) {
          dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
        },
        onDone: function(handleDone) {
          dart.as(handleDone, dart.functionType(dart.void, []));
          dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
        },
        pause: function(resumeSignal) {
          if (resumeSignal === void 0)
            resumeSignal = null;
          this[_stream][_pauseSubscription](resumeSignal);
        },
        resume: function() {
          this[_stream][_resumeSubscription]();
        },
        cancel: function() {
          this[_stream][_cancelSubscription]();
          return null;
        },
        get isPaused() {
          return this[_stream][_isSubscriptionPaused];
        },
        asFuture: function(futureValue) {
          if (futureValue === void 0)
            futureValue = null;
          dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
        }
      }, {}, $__super);
    }(core.Object);
    _BroadcastSubscriptionWrapper[dart.implements] = function() {
      return [StreamSubscription$(T)];
    };
    dart.setSignature(_BroadcastSubscriptionWrapper, {
      constructors: function() {
        return ({_BroadcastSubscriptionWrapper: [_BroadcastSubscriptionWrapper$(T), [_AsBroadcastStream]]});
      },
      methods: function() {
        return ({
          onData: [dart.void, [dart.functionType(dart.void, [T])]],
          onError: [dart.void, [core.Function]],
          onDone: [dart.void, [dart.functionType(dart.void, [])]],
          pause: [dart.void, [], [Future]],
          resume: [dart.void, []],
          cancel: [Future, []],
          asFuture: [Future, [], [dart.dynamic]]
        });
      }
    });
    return _BroadcastSubscriptionWrapper;
  });
  var _BroadcastSubscriptionWrapper = _BroadcastSubscriptionWrapper$();
  var _current = Symbol('_current');
  var _futureOrPrefetch = Symbol('_futureOrPrefetch');
  var _clear = Symbol('_clear');
  var _StreamIteratorImpl$ = dart.generic(function(T) {
    var _StreamIteratorImpl = function($__super) {
      var $__5;
      function _StreamIteratorImpl() {
        $traceurRuntime.superConstructor(_StreamIteratorImpl).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamIteratorImpl, ($__5 = {}, Object.defineProperty($__5, "_StreamIteratorImpl", {
        value: function(stream) {
          this[_subscription] = null;
          this[_current] = null;
          this[_futureOrPrefetch] = null;
          this[_state] = _StreamIteratorImpl$()._STATE_FOUND;
          this[_subscription] = stream.listen(dart.bind(this, _onData), {
            onError: dart.bind(this, _onError),
            onDone: dart.bind(this, _onDone),
            cancelOnError: true
          });
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "current", {
        get: function() {
          return this[_current];
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "moveNext", {
        value: function() {
          if (this[_state] == _StreamIteratorImpl$()._STATE_DONE) {
            return new (_Future$(core.bool)).immediate(false);
          }
          if (this[_state] == _StreamIteratorImpl$()._STATE_MOVING) {
            dart.throw(new core.StateError("Already waiting for next."));
          }
          if (this[_state] == _StreamIteratorImpl$()._STATE_FOUND) {
            this[_state] = _StreamIteratorImpl$()._STATE_MOVING;
            this[_current] = null;
            this[_futureOrPrefetch] = new (_Future$(core.bool))();
            return dart.as(this[_futureOrPrefetch], Future$(core.bool));
          } else {
            dart.assert(dart.notNull(this[_state]) >= dart.notNull(_StreamIteratorImpl$()._STATE_EXTRA_DATA));
            switch (this[_state]) {
              case _StreamIteratorImpl$()._STATE_EXTRA_DATA:
                {
                  this[_state] = _StreamIteratorImpl$()._STATE_FOUND;
                  this[_current] = dart.as(this[_futureOrPrefetch], T);
                  this[_futureOrPrefetch] = null;
                  this[_subscription].resume();
                  return new (_Future$(core.bool)).immediate(true);
                }
              case _StreamIteratorImpl$()._STATE_EXTRA_ERROR:
                {
                  var prefetch = dart.as(this[_futureOrPrefetch], AsyncError);
                  this[_clear]();
                  return new (_Future$(core.bool)).immediateError(prefetch.error, prefetch.stackTrace);
                }
              case _StreamIteratorImpl$()._STATE_EXTRA_DONE:
                {
                  this[_clear]();
                  return new (_Future$(core.bool)).immediate(false);
                }
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _clear, {
        value: function() {
          this[_subscription] = null;
          this[_futureOrPrefetch] = null;
          this[_current] = null;
          this[_state] = _StreamIteratorImpl$()._STATE_DONE;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "cancel", {
        value: function() {
          var subscription = this[_subscription];
          if (subscription == null)
            return null;
          if (this[_state] == _StreamIteratorImpl$()._STATE_MOVING) {
            var hasNext = dart.as(this[_futureOrPrefetch], _Future$(core.bool));
            this[_clear]();
            hasNext[_complete](false);
          } else {
            this[_clear]();
          }
          return subscription.cancel();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onData, {
        value: function(data) {
          dart.as(data, T);
          if (this[_state] == _StreamIteratorImpl$()._STATE_MOVING) {
            this[_current] = data;
            var hasNext = dart.as(this[_futureOrPrefetch], _Future$(core.bool));
            this[_futureOrPrefetch] = null;
            this[_state] = _StreamIteratorImpl$()._STATE_FOUND;
            hasNext[_complete](true);
            return;
          }
          this[_subscription].pause();
          dart.assert(this[_futureOrPrefetch] == null);
          this[_futureOrPrefetch] = data;
          this[_state] = _StreamIteratorImpl$()._STATE_EXTRA_DATA;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onError, {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          if (this[_state] == _StreamIteratorImpl$()._STATE_MOVING) {
            var hasNext = dart.as(this[_futureOrPrefetch], _Future$(core.bool));
            this[_clear]();
            hasNext[_completeError](error, stackTrace);
            return;
          }
          this[_subscription].pause();
          dart.assert(this[_futureOrPrefetch] == null);
          this[_futureOrPrefetch] = new AsyncError(error, stackTrace);
          this[_state] = _StreamIteratorImpl$()._STATE_EXTRA_ERROR;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onDone, {
        value: function() {
          if (this[_state] == _StreamIteratorImpl$()._STATE_MOVING) {
            var hasNext = dart.as(this[_futureOrPrefetch], _Future$(core.bool));
            this[_clear]();
            hasNext[_complete](false);
            return;
          }
          this[_subscription].pause();
          this[_futureOrPrefetch] = null;
          this[_state] = _StreamIteratorImpl$()._STATE_EXTRA_DONE;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(core.Object);
    _StreamIteratorImpl[dart.implements] = function() {
      return [StreamIterator$(T)];
    };
    dart.setSignature(_StreamIteratorImpl, {
      constructors: function() {
        return ({_StreamIteratorImpl: [_StreamIteratorImpl$(T), [Stream$(T)]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "moveNext", {
          value: [Future$(core.bool), []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _clear, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, "cancel", {
          value: [Future, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onData, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onError, {
          value: [dart.void, [core.Object], [core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _onDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _StreamIteratorImpl;
  });
  var _StreamIteratorImpl = _StreamIteratorImpl$();
  _StreamIteratorImpl._STATE_FOUND = 0;
  _StreamIteratorImpl._STATE_DONE = 1;
  _StreamIteratorImpl._STATE_MOVING = 2;
  _StreamIteratorImpl._STATE_EXTRA_DATA = 3;
  _StreamIteratorImpl._STATE_EXTRA_ERROR = 4;
  _StreamIteratorImpl._STATE_EXTRA_DONE = 5;
  var __CastType20$ = dart.generic(function(T) {
    var __CastType20 = dart.typedef('__CastType20', function() {
      return dart.functionType(dart.void, [T]);
    });
    return __CastType20;
  });
  var __CastType20 = __CastType20$();
  var __CastType22 = dart.typedef('__CastType22', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]);
  });
  var __CastType25 = dart.typedef('__CastType25', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  function _runUserCode(userCode, onSuccess, onError) {
    try {
      dart.dcall(onSuccess, userCode());
    } catch (e) {
      var s = dart.stackTrace(e);
      var replacement = Zone.current.errorCallback(e, s);
      if (replacement == null) {
        dart.dcall(onError, e, s);
      } else {
        var error = _nonNullError(replacement.error);
        var stackTrace = replacement.stackTrace;
        dart.dcall(onError, error, stackTrace);
      }
    }
  }
  dart.fn(_runUserCode, dart.dynamic, [dart.functionType(dart.dynamic, []), dart.functionType(dart.dynamic, [dart.dynamic]), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])]);
  function _cancelAndError(subscription, future, error, stackTrace) {
    var cancelFuture = subscription.cancel();
    if (dart.is(cancelFuture, Future)) {
      cancelFuture.whenComplete(dart.fn(function() {
        return future[_completeError](error, stackTrace);
      }, dart.void, []));
    } else {
      future[_completeError](error, stackTrace);
    }
  }
  dart.fn(_cancelAndError, dart.void, [StreamSubscription, _Future, dart.dynamic, core.StackTrace]);
  function _cancelAndErrorWithReplacement(subscription, future, error, stackTrace) {
    var replacement = Zone.current.errorCallback(error, stackTrace);
    if (replacement != null) {
      error = _nonNullError(replacement.error);
      stackTrace = replacement.stackTrace;
    }
    _cancelAndError(subscription, future, error, stackTrace);
  }
  dart.fn(_cancelAndErrorWithReplacement, dart.void, [StreamSubscription, _Future, dart.dynamic, core.StackTrace]);
  function _cancelAndErrorClosure(subscription, future) {
    return dart.fn(function(error, stackTrace) {
      return _cancelAndError(subscription, future, error, stackTrace);
    }, dart.void, [dart.dynamic, core.StackTrace]);
  }
  dart.fn(_cancelAndErrorClosure, dart.dynamic, [StreamSubscription, _Future]);
  function _cancelAndValue(subscription, future, value) {
    var cancelFuture = subscription.cancel();
    if (dart.is(cancelFuture, Future)) {
      cancelFuture.whenComplete(dart.fn(function() {
        return future[_complete](value);
      }, dart.void, []));
    } else {
      future[_complete](value);
    }
  }
  dart.fn(_cancelAndValue, dart.void, [StreamSubscription, _Future, dart.dynamic]);
  var _handleData = Symbol('_handleData');
  var _handleError = Symbol('_handleError');
  var _handleDone = Symbol('_handleDone');
  var _ForwardingStream$ = dart.generic(function(S, T) {
    var _ForwardingStream = function($__super) {
      var $__5;
      function _ForwardingStream() {
        $traceurRuntime.superConstructor(_ForwardingStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ForwardingStream, ($__5 = {}, Object.defineProperty($__5, "_ForwardingStream", {
        value: function(source) {
          this[_source] = source;
          $traceurRuntime.superGet(this, _ForwardingStream.prototype, "Stream").call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, "isBroadcast", {
        get: function() {
          return this[_source].isBroadcast;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, "listen", {
        value: function(onData, opts) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var onDone = opts && 'onDone' in opts ? opts.onDone : null;
          dart.as(onDone, dart.functionType(dart.void, []));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
          cancelOnError = core.identical(true, cancelOnError);
          return this[_createSubscription](onData, onError, onDone, cancelOnError);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _createSubscription, {
        value: function(onData, onError, onDone, cancelOnError) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          dart.as(onDone, dart.functionType(dart.void, []));
          return new (_ForwardingStreamSubscription$(S, T))(this, onData, onError, onDone, cancelOnError);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(data, sink) {
          dart.as(data, S);
          dart.as(sink, _EventSink$(T));
          var outputData = data;
          sink[_add](dart.as(outputData, T));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleError, {
        value: function(error, stackTrace, sink) {
          dart.as(sink, _EventSink$(T));
          sink[_addError](error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleDone, {
        value: function(sink) {
          dart.as(sink, _EventSink$(T));
          sink[_close]();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(Stream$(T));
    dart.setSignature(_ForwardingStream, {
      constructors: function() {
        return ({_ForwardingStream: [_ForwardingStream$(S, T), [Stream$(S)]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, "listen", {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {
            onError: core.Function,
            onDone: dart.functionType(dart.void, []),
            cancelOnError: core.bool
          }],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _createSubscription, {
          value: [StreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleData, {
          value: [dart.void, [S, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleError, {
          value: [dart.void, [dart.dynamic, core.StackTrace, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleDone, {
          value: [dart.void, [_EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _ForwardingStream;
  });
  var _ForwardingStream = _ForwardingStream$();
  var _ForwardingStreamSubscription$ = dart.generic(function(S, T) {
    var _ForwardingStreamSubscription = function($__super) {
      var $__5;
      function _ForwardingStreamSubscription() {
        $traceurRuntime.superConstructor(_ForwardingStreamSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ForwardingStreamSubscription, ($__5 = {}, Object.defineProperty($__5, "_ForwardingStreamSubscription", {
        value: function(stream, onData, onError, onDone, cancelOnError) {
          this[_stream] = stream;
          this[_subscription] = null;
          $traceurRuntime.superGet(this, _ForwardingStreamSubscription.prototype, "_BufferingStreamSubscription").call(this, onData, onError, onDone, cancelOnError);
          this[_subscription] = this[_stream][_source].listen(dart.bind(this, _handleData), {
            onError: dart.bind(this, _handleError),
            onDone: dart.bind(this, _handleDone)
          });
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _add, {
        value: function(data) {
          dart.as(data, T);
          if (dart.notNull(this[_isClosed]))
            return;
          $traceurRuntime.superGet(this, _ForwardingStreamSubscription.prototype, _add).call(this, data);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addError, {
        value: function(error, stackTrace) {
          if (dart.notNull(this[_isClosed]))
            return;
          $traceurRuntime.superGet(this, _ForwardingStreamSubscription.prototype, _addError).call(this, error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onPause, {
        value: function() {
          if (this[_subscription] == null)
            return;
          this[_subscription].pause();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onResume, {
        value: function() {
          if (this[_subscription] == null)
            return;
          this[_subscription].resume();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onCancel, {
        value: function() {
          if (this[_subscription] != null) {
            var subscription = this[_subscription];
            this[_subscription] = null;
            subscription.cancel();
          }
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(data) {
          dart.as(data, S);
          this[_stream][_handleData](data, this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleError, {
        value: function(error, stackTrace) {
          this[_stream][_handleError](error, stackTrace, this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleDone, {
        value: function() {
          this[_stream][_handleDone](this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_BufferingStreamSubscription$(T));
    dart.setSignature(_ForwardingStreamSubscription, {
      constructors: function() {
        return ({_ForwardingStreamSubscription: [_ForwardingStreamSubscription$(S, T), [_ForwardingStream$(S, T), dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _add, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleData, {
          value: [dart.void, [S]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleError, {
          value: [dart.void, [dart.dynamic, core.StackTrace]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _ForwardingStreamSubscription;
  });
  var _ForwardingStreamSubscription = _ForwardingStreamSubscription$();
  var _Predicate$ = dart.generic(function(T) {
    var _Predicate = dart.typedef('_Predicate', function() {
      return dart.functionType(core.bool, [T]);
    });
    return _Predicate;
  });
  var _Predicate = _Predicate$();
  function _addErrorWithReplacement(sink, error, stackTrace) {
    var replacement = Zone.current.errorCallback(error, dart.as(stackTrace, core.StackTrace));
    if (replacement != null) {
      error = _nonNullError(replacement.error);
      stackTrace = replacement.stackTrace;
    }
    sink[_addError](error, dart.as(stackTrace, core.StackTrace));
  }
  dart.fn(_addErrorWithReplacement, dart.void, [_EventSink, dart.dynamic, dart.dynamic]);
  var _test = Symbol('_test');
  var _WhereStream$ = dart.generic(function(T) {
    var _WhereStream = function($__super) {
      var $__5;
      function _WhereStream() {
        $traceurRuntime.superConstructor(_WhereStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_WhereStream, ($__5 = {}, Object.defineProperty($__5, "_WhereStream", {
        value: function(source, test) {
          this[_test] = test;
          $traceurRuntime.superGet(this, _WhereStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, T);
          dart.as(sink, _EventSink$(T));
          var satisfies = null;
          try {
            satisfies = this[_test](inputEvent);
          } catch (e) {
            var s = dart.stackTrace(e);
            _addErrorWithReplacement(sink, e, s);
            return;
          }
          if (dart.notNull(satisfies)) {
            sink[_add](inputEvent);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_WhereStream, {
      constructors: function() {
        return ({_WhereStream: [_WhereStream$(T), [Stream$(T), dart.functionType(core.bool, [T])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [T, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _WhereStream;
  });
  var _WhereStream = _WhereStream$();
  var _Transformation$ = dart.generic(function(S, T) {
    var _Transformation = dart.typedef('_Transformation', function() {
      return dart.functionType(T, [S]);
    });
    return _Transformation;
  });
  var _Transformation = _Transformation$();
  var _transform = Symbol('_transform');
  var _MapStream$ = dart.generic(function(S, T) {
    var _MapStream = function($__super) {
      var $__5;
      function _MapStream() {
        $traceurRuntime.superConstructor(_MapStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_MapStream, ($__5 = {}, Object.defineProperty($__5, "_MapStream", {
        value: function(source, transform) {
          this[_transform] = transform;
          $traceurRuntime.superGet(this, _MapStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, S);
          dart.as(sink, _EventSink$(T));
          var outputEvent = null;
          try {
            outputEvent = dart.as(dart.dcall(this[_transform], inputEvent), T);
          } catch (e) {
            var s = dart.stackTrace(e);
            _addErrorWithReplacement(sink, e, s);
            return;
          }
          sink[_add](outputEvent);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(S, T));
    dart.setSignature(_MapStream, {
      constructors: function() {
        return ({_MapStream: [_MapStream$(S, T), [Stream$(S), dart.functionType(T, [S])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [S, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _MapStream;
  });
  var _MapStream = _MapStream$();
  var _expand = Symbol('_expand');
  var _ExpandStream$ = dart.generic(function(S, T) {
    var _ExpandStream = function($__super) {
      var $__5;
      function _ExpandStream() {
        $traceurRuntime.superConstructor(_ExpandStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_ExpandStream, ($__5 = {}, Object.defineProperty($__5, "_ExpandStream", {
        value: function(source, expand) {
          this[_expand] = expand;
          $traceurRuntime.superGet(this, _ExpandStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, S);
          dart.as(sink, _EventSink$(T));
          try {
            var $__9 = true;
            var $__10 = false;
            var $__11 = undefined;
            try {
              for (var $__7 = void 0,
                  $__6 = (this[_expand](inputEvent))[Symbol.iterator](); !($__9 = ($__7 = $__6.next()).done); $__9 = true) {
                var value = $__7.value;
                {
                  sink[_add](value);
                }
              }
            } catch ($__12) {
              $__10 = true;
              $__11 = $__12;
            } finally {
              try {
                if (!$__9 && $__6.return != null) {
                  $__6.return();
                }
              } finally {
                if ($__10) {
                  throw $__11;
                }
              }
            }
          } catch (e) {
            var s = dart.stackTrace(e);
            _addErrorWithReplacement(sink, e, s);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(S, T));
    dart.setSignature(_ExpandStream, {
      constructors: function() {
        return ({_ExpandStream: [_ExpandStream$(S, T), [Stream$(S), dart.functionType(core.Iterable$(T), [S])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [S, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _ExpandStream;
  });
  var _ExpandStream = _ExpandStream$();
  var _ErrorTest = dart.typedef('_ErrorTest', function() {
    return dart.functionType(core.bool, [dart.dynamic]);
  });
  var _HandleErrorStream$ = dart.generic(function(T) {
    var _HandleErrorStream = function($__super) {
      var $__5;
      function _HandleErrorStream() {
        $traceurRuntime.superConstructor(_HandleErrorStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_HandleErrorStream, ($__5 = {}, Object.defineProperty($__5, "_HandleErrorStream", {
        value: function(source, onError, test) {
          this[_transform] = onError;
          this[_test] = test;
          $traceurRuntime.superGet(this, _HandleErrorStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleError, {
        value: function(error, stackTrace, sink) {
          dart.as(sink, _EventSink$(T));
          var matches = true;
          if (this[_test] != null) {
            try {
              matches = dart.dcall(this[_test], error);
            } catch (e) {
              var s = dart.stackTrace(e);
              _addErrorWithReplacement(sink, e, s);
              return;
            }
          }
          if (dart.notNull(matches)) {
            try {
              _invokeErrorHandler(this[_transform], error, stackTrace);
            } catch (e) {
              var s$__22 = dart.stackTrace(e);
              if (dart.notNull(core.identical(e, error))) {
                sink[_addError](error, stackTrace);
              } else {
                _addErrorWithReplacement(sink, e, s$__22);
              }
              return;
            }
          } else {
            sink[_addError](error, stackTrace);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_HandleErrorStream, {
      constructors: function() {
        return ({_HandleErrorStream: [_HandleErrorStream$(T), [Stream$(T), core.Function, dart.functionType(core.bool, [dart.dynamic])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleError, {
          value: [dart.void, [core.Object, core.StackTrace, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _HandleErrorStream;
  });
  var _HandleErrorStream = _HandleErrorStream$();
  var _remaining = Symbol('_remaining');
  var _TakeStream$ = dart.generic(function(T) {
    var _TakeStream = function($__super) {
      var $__5;
      function _TakeStream() {
        $traceurRuntime.superConstructor(_TakeStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_TakeStream, ($__5 = {}, Object.defineProperty($__5, "_TakeStream", {
        value: function(source, count) {
          this[_remaining] = count;
          $traceurRuntime.superGet(this, _TakeStream.prototype, "_ForwardingStream").call(this, source);
          if (!(typeof count == 'number'))
            dart.throw(new core.ArgumentError(count));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, T);
          dart.as(sink, _EventSink$(T));
          if (dart.notNull(this[_remaining]) > 0) {
            sink[_add](inputEvent);
            this[_remaining] = dart.notNull(this[_remaining]) - 1;
            if (this[_remaining] == 0) {
              sink[_close]();
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_TakeStream, {
      constructors: function() {
        return ({_TakeStream: [_TakeStream$(T), [Stream$(T), core.int]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [T, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _TakeStream;
  });
  var _TakeStream = _TakeStream$();
  var _TakeWhileStream$ = dart.generic(function(T) {
    var _TakeWhileStream = function($__super) {
      var $__5;
      function _TakeWhileStream() {
        $traceurRuntime.superConstructor(_TakeWhileStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_TakeWhileStream, ($__5 = {}, Object.defineProperty($__5, "_TakeWhileStream", {
        value: function(source, test) {
          this[_test] = test;
          $traceurRuntime.superGet(this, _TakeWhileStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, T);
          dart.as(sink, _EventSink$(T));
          var satisfies = null;
          try {
            satisfies = this[_test](inputEvent);
          } catch (e) {
            var s = dart.stackTrace(e);
            _addErrorWithReplacement(sink, e, s);
            sink[_close]();
            return;
          }
          if (dart.notNull(satisfies)) {
            sink[_add](inputEvent);
          } else {
            sink[_close]();
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_TakeWhileStream, {
      constructors: function() {
        return ({_TakeWhileStream: [_TakeWhileStream$(T), [Stream$(T), dart.functionType(core.bool, [T])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [T, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _TakeWhileStream;
  });
  var _TakeWhileStream = _TakeWhileStream$();
  var _SkipStream$ = dart.generic(function(T) {
    var _SkipStream = function($__super) {
      var $__5;
      function _SkipStream() {
        $traceurRuntime.superConstructor(_SkipStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SkipStream, ($__5 = {}, Object.defineProperty($__5, "_SkipStream", {
        value: function(source, count) {
          this[_remaining] = count;
          $traceurRuntime.superGet(this, _SkipStream.prototype, "_ForwardingStream").call(this, source);
          if (!(typeof count == 'number') || dart.notNull(count) < 0)
            dart.throw(new core.ArgumentError(count));
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, T);
          dart.as(sink, _EventSink$(T));
          if (dart.notNull(this[_remaining]) > 0) {
            this[_remaining] = dart.notNull(this[_remaining]) - 1;
            return;
          }
          sink[_add](inputEvent);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_SkipStream, {
      constructors: function() {
        return ({_SkipStream: [_SkipStream$(T), [Stream$(T), core.int]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [T, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _SkipStream;
  });
  var _SkipStream = _SkipStream$();
  var _hasFailed = Symbol('_hasFailed');
  var _SkipWhileStream$ = dart.generic(function(T) {
    var _SkipWhileStream = function($__super) {
      var $__5;
      function _SkipWhileStream() {
        $traceurRuntime.superConstructor(_SkipWhileStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SkipWhileStream, ($__5 = {}, Object.defineProperty($__5, "_SkipWhileStream", {
        value: function(source, test) {
          this[_test] = test;
          this[_hasFailed] = false;
          $traceurRuntime.superGet(this, _SkipWhileStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, T);
          dart.as(sink, _EventSink$(T));
          if (dart.notNull(this[_hasFailed])) {
            sink[_add](inputEvent);
            return;
          }
          var satisfies = null;
          try {
            satisfies = this[_test](inputEvent);
          } catch (e) {
            var s = dart.stackTrace(e);
            _addErrorWithReplacement(sink, e, s);
            this[_hasFailed] = true;
            return;
          }
          if (!dart.notNull(satisfies)) {
            this[_hasFailed] = true;
            sink[_add](inputEvent);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_SkipWhileStream, {
      constructors: function() {
        return ({_SkipWhileStream: [_SkipWhileStream$(T), [Stream$(T), dart.functionType(core.bool, [T])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [T, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _SkipWhileStream;
  });
  var _SkipWhileStream = _SkipWhileStream$();
  var _Equality$ = dart.generic(function(T) {
    var _Equality = dart.typedef('_Equality', function() {
      return dart.functionType(core.bool, [T, T]);
    });
    return _Equality;
  });
  var _Equality = _Equality$();
  var _equals = Symbol('_equals');
  var _DistinctStream$ = dart.generic(function(T) {
    var _DistinctStream = function($__super) {
      var $__5;
      function _DistinctStream() {
        $traceurRuntime.superConstructor(_DistinctStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_DistinctStream, ($__5 = {}, Object.defineProperty($__5, "_DistinctStream", {
        value: function(source, equals) {
          this[_previous] = _DistinctStream$()._SENTINEL;
          this[_equals] = equals;
          $traceurRuntime.superGet(this, _DistinctStream.prototype, "_ForwardingStream").call(this, source);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(inputEvent, sink) {
          dart.as(inputEvent, T);
          dart.as(sink, _EventSink$(T));
          if (dart.notNull(core.identical(this[_previous], _DistinctStream$()._SENTINEL))) {
            this[_previous] = inputEvent;
            return sink[_add](inputEvent);
          } else {
            var isEqual = null;
            try {
              if (this[_equals] == null) {
                isEqual = dart.equals(this[_previous], inputEvent);
              } else {
                isEqual = this[_equals](dart.as(this[_previous], T), inputEvent);
              }
            } catch (e) {
              var s = dart.stackTrace(e);
              _addErrorWithReplacement(sink, e, s);
              return null;
            }
            if (!dart.notNull(isEqual)) {
              sink[_add](inputEvent);
              this[_previous] = inputEvent;
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_ForwardingStream$(T, T));
    dart.setSignature(_DistinctStream, {
      constructors: function() {
        return ({_DistinctStream: [_DistinctStream$(T), [Stream$(T), dart.functionType(core.bool, [T, T])]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _handleData, {
          value: [dart.void, [T, _EventSink$(T)]],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _DistinctStream;
  });
  var _DistinctStream = _DistinctStream$();
  dart.defineLazyProperties(_DistinctStream, {
    get _SENTINEL() {
      return new core.Object();
    },
    set _SENTINEL(_) {}
  });
  var _EventSinkWrapper$ = dart.generic(function(T) {
    var _EventSinkWrapper = function($__super) {
      function _EventSinkWrapper() {
        $traceurRuntime.superConstructor(_EventSinkWrapper).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_EventSinkWrapper, {
        _EventSinkWrapper: function(sink) {
          this[_sink] = sink;
        },
        add: function(data) {
          dart.as(data, T);
          this[_sink][_add](data);
        },
        addError: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          this[_sink][_addError](error, stackTrace);
        },
        close: function() {
          this[_sink][_close]();
        }
      }, {}, $__super);
    }(core.Object);
    _EventSinkWrapper[dart.implements] = function() {
      return [EventSink$(T)];
    };
    dart.setSignature(_EventSinkWrapper, {
      constructors: function() {
        return ({_EventSinkWrapper: [_EventSinkWrapper$(T), [_EventSink]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [T]],
          addError: [dart.void, [dart.dynamic], [core.StackTrace]],
          close: [dart.void, []]
        });
      }
    });
    return _EventSinkWrapper;
  });
  var _EventSinkWrapper = _EventSinkWrapper$();
  var _transformerSink = Symbol('_transformerSink');
  var _isSubscribed = Symbol('_isSubscribed');
  var _SinkTransformerStreamSubscription$ = dart.generic(function(S, T) {
    var _SinkTransformerStreamSubscription = function($__super) {
      var $__5;
      function _SinkTransformerStreamSubscription() {
        $traceurRuntime.superConstructor(_SinkTransformerStreamSubscription).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_SinkTransformerStreamSubscription, ($__5 = {}, Object.defineProperty($__5, "_SinkTransformerStreamSubscription", {
        value: function(source, mapper, onData, onError, onDone, cancelOnError) {
          this[_transformerSink] = null;
          this[_subscription] = null;
          $traceurRuntime.superGet(this, _SinkTransformerStreamSubscription.prototype, "_BufferingStreamSubscription").call(this, onData, onError, onDone, cancelOnError);
          var eventSink = new (_EventSinkWrapper$(T))(this);
          this[_transformerSink] = mapper(eventSink);
          this[_subscription] = source.listen(dart.bind(this, _handleData), {
            onError: dart.bind(this, _handleError),
            onDone: dart.bind(this, _handleDone)
          });
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _isSubscribed, {
        get: function() {
          return this[_subscription] != null;
        },
        configurable: true,
        enumerable: true
      }), Object.defineProperty($__5, _add, {
        value: function(data) {
          dart.as(data, T);
          if (dart.notNull(this[_isClosed])) {
            dart.throw(new core.StateError("Stream is already closed"));
          }
          $traceurRuntime.superGet(this, _SinkTransformerStreamSubscription.prototype, _add).call(this, data);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _addError, {
        value: function(error, stackTrace) {
          if (dart.notNull(this[_isClosed])) {
            dart.throw(new core.StateError("Stream is already closed"));
          }
          $traceurRuntime.superGet(this, _SinkTransformerStreamSubscription.prototype, _addError).call(this, error, stackTrace);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _close, {
        value: function() {
          if (dart.notNull(this[_isClosed])) {
            dart.throw(new core.StateError("Stream is already closed"));
          }
          $traceurRuntime.superGet(this, _SinkTransformerStreamSubscription.prototype, _close).call(this);
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onPause, {
        value: function() {
          if (dart.notNull(this[_isSubscribed]))
            this[_subscription].pause();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onResume, {
        value: function() {
          if (dart.notNull(this[_isSubscribed]))
            this[_subscription].resume();
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _onCancel, {
        value: function() {
          if (dart.notNull(this[_isSubscribed])) {
            var subscription = this[_subscription];
            this[_subscription] = null;
            subscription.cancel();
          }
          return null;
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleData, {
        value: function(data) {
          dart.as(data, S);
          try {
            this[_transformerSink].add(data);
          } catch (e) {
            var s = dart.stackTrace(e);
            this[_addError](e, s);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleError, {
        value: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          try {
            this[_transformerSink].addError(error, dart.as(stackTrace, core.StackTrace));
          } catch (e) {
            var s = dart.stackTrace(e);
            if (dart.notNull(core.identical(e, error))) {
              this[_addError](error, dart.as(stackTrace, core.StackTrace));
            } else {
              this[_addError](e, s);
            }
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), Object.defineProperty($__5, _handleDone, {
        value: function() {
          try {
            this[_subscription] = null;
            this[_transformerSink].close();
          } catch (e) {
            var s = dart.stackTrace(e);
            this[_addError](e, s);
          }
        },
        configurable: true,
        enumerable: true,
        writable: true
      }), $__5), {}, $__super);
    }(_BufferingStreamSubscription$(T));
    dart.setSignature(_SinkTransformerStreamSubscription, {
      constructors: function() {
        return ({_SinkTransformerStreamSubscription: [_SinkTransformerStreamSubscription$(S, T), [Stream$(S), _SinkMapper$(S, T), dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]});
      },
      methods: function() {
        var $__5;
        return (($__5 = {}, Object.defineProperty($__5, _add, {
          value: [dart.void, [T]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleData, {
          value: [dart.void, [S]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleError, {
          value: [dart.void, [dart.dynamic], [dart.dynamic]],
          configurable: true,
          enumerable: true,
          writable: true
        }), Object.defineProperty($__5, _handleDone, {
          value: [dart.void, []],
          configurable: true,
          enumerable: true,
          writable: true
        }), $__5));
      }
    });
    return _SinkTransformerStreamSubscription;
  });
  var _SinkTransformerStreamSubscription = _SinkTransformerStreamSubscription$();
  var _SinkMapper$ = dart.generic(function(S, T) {
    var _SinkMapper = dart.typedef('_SinkMapper', function() {
      return dart.functionType(EventSink$(S), [EventSink$(T)]);
    });
    return _SinkMapper;
  });
  var _SinkMapper = _SinkMapper$();
  var _sinkMapper = Symbol('_sinkMapper');
  var _StreamSinkTransformer$ = dart.generic(function(S, T) {
    var _StreamSinkTransformer = function($__super) {
      function _StreamSinkTransformer() {
        $traceurRuntime.superConstructor(_StreamSinkTransformer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamSinkTransformer, {
        _StreamSinkTransformer: function(sinkMapper) {
          this[_sinkMapper] = sinkMapper;
        },
        bind: function(stream) {
          dart.as(stream, Stream$(S));
          return new (_BoundSinkStream$(S, T))(stream, this[_sinkMapper]);
        }
      }, {}, $__super);
    }(core.Object);
    _StreamSinkTransformer[dart.implements] = function() {
      return [StreamTransformer$(S, T)];
    };
    dart.setSignature(_StreamSinkTransformer, {
      constructors: function() {
        return ({_StreamSinkTransformer: [_StreamSinkTransformer$(S, T), [_SinkMapper$(S, T)]]});
      },
      methods: function() {
        return ({bind: [Stream$(T), [Stream$(S)]]});
      }
    });
    return _StreamSinkTransformer;
  });
  var _StreamSinkTransformer = _StreamSinkTransformer$();
  var _BoundSinkStream$ = dart.generic(function(S, T) {
    var _BoundSinkStream = function($__super) {
      function _BoundSinkStream() {
        $traceurRuntime.superConstructor(_BoundSinkStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BoundSinkStream, {
        get isBroadcast() {
          return this[_stream].isBroadcast;
        },
        _BoundSinkStream: function(stream, sinkMapper) {
          this[_stream] = stream;
          this[_sinkMapper] = sinkMapper;
          $traceurRuntime.superGet(this, _BoundSinkStream.prototype, "Stream").call(this);
        },
        listen: function(onData, opts) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var onDone = opts && 'onDone' in opts ? opts.onDone : null;
          dart.as(onDone, dart.functionType(dart.void, []));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
          cancelOnError = core.identical(true, cancelOnError);
          var subscription = new (_SinkTransformerStreamSubscription$(dart.dynamic, T))(this[_stream], dart.as(this[_sinkMapper], _SinkMapper), onData, onError, onDone, cancelOnError);
          return subscription;
        }
      }, {}, $__super);
    }(Stream$(T));
    dart.setSignature(_BoundSinkStream, {
      constructors: function() {
        return ({_BoundSinkStream: [_BoundSinkStream$(S, T), [Stream$(S), _SinkMapper$(S, T)]]});
      },
      methods: function() {
        return ({listen: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {
            onError: core.Function,
            onDone: dart.functionType(dart.void, []),
            cancelOnError: core.bool
          }]});
      }
    });
    return _BoundSinkStream;
  });
  var _BoundSinkStream = _BoundSinkStream$();
  var _TransformDataHandler$ = dart.generic(function(S, T) {
    var _TransformDataHandler = dart.typedef('_TransformDataHandler', function() {
      return dart.functionType(dart.void, [S, EventSink$(T)]);
    });
    return _TransformDataHandler;
  });
  var _TransformDataHandler = _TransformDataHandler$();
  var _TransformErrorHandler$ = dart.generic(function(T) {
    var _TransformErrorHandler = dart.typedef('_TransformErrorHandler', function() {
      return dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]);
    });
    return _TransformErrorHandler;
  });
  var _TransformErrorHandler = _TransformErrorHandler$();
  var _TransformDoneHandler$ = dart.generic(function(T) {
    var _TransformDoneHandler = dart.typedef('_TransformDoneHandler', function() {
      return dart.functionType(dart.void, [EventSink$(T)]);
    });
    return _TransformDoneHandler;
  });
  var _TransformDoneHandler = _TransformDoneHandler$();
  var _HandlerEventSink$ = dart.generic(function(S, T) {
    var _HandlerEventSink = function($__super) {
      function _HandlerEventSink() {
        $traceurRuntime.superConstructor(_HandlerEventSink).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_HandlerEventSink, {
        _HandlerEventSink: function(handleData, handleError, handleDone, sink) {
          this[_handleData] = handleData;
          this[_handleError] = handleError;
          this[_handleDone] = handleDone;
          this[_sink] = sink;
        },
        add: function(data) {
          dart.as(data, S);
          return this[_handleData](data, this[_sink]);
        },
        addError: function(error, stackTrace) {
          if (stackTrace === void 0)
            stackTrace = null;
          return this[_handleError](error, stackTrace, this[_sink]);
        },
        close: function() {
          return this[_handleDone](this[_sink]);
        }
      }, {}, $__super);
    }(core.Object);
    _HandlerEventSink[dart.implements] = function() {
      return [EventSink$(S)];
    };
    dart.setSignature(_HandlerEventSink, {
      constructors: function() {
        return ({_HandlerEventSink: [_HandlerEventSink$(S, T), [_TransformDataHandler$(S, T), _TransformErrorHandler$(T), _TransformDoneHandler$(T), EventSink$(T)]]});
      },
      methods: function() {
        return ({
          add: [dart.void, [S]],
          addError: [dart.void, [core.Object], [core.StackTrace]],
          close: [dart.void, []]
        });
      }
    });
    return _HandlerEventSink;
  });
  var _HandlerEventSink = _HandlerEventSink$();
  var _StreamHandlerTransformer$ = dart.generic(function(S, T) {
    var _StreamHandlerTransformer = function($__super) {
      function _StreamHandlerTransformer() {
        $traceurRuntime.superConstructor(_StreamHandlerTransformer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamHandlerTransformer, {
        _StreamHandlerTransformer: function(opts) {
          var handleData = opts && 'handleData' in opts ? opts.handleData : null;
          var handleError = opts && 'handleError' in opts ? opts.handleError : null;
          var handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
          $traceurRuntime.superGet(this, _StreamHandlerTransformer.prototype, "_StreamSinkTransformer").call(this, dart.as(dart.fn(function(outputSink) {
            dart.as(outputSink, EventSink$(T));
            if (handleData == null)
              handleData = dart.as(_StreamHandlerTransformer$()._defaultHandleData, __CastType27);
            if (handleError == null)
              handleError = dart.as(_StreamHandlerTransformer$()._defaultHandleError, __CastType30);
            if (handleDone == null)
              handleDone = _StreamHandlerTransformer$()._defaultHandleDone;
            return new (_HandlerEventSink$(S, T))(handleData, handleError, handleDone, outputSink);
          }, dart.dynamic, [EventSink$(T)]), _SinkMapper$(S, T)));
        },
        bind: function(stream) {
          dart.as(stream, Stream$(S));
          return $traceurRuntime.superGet(this, _StreamHandlerTransformer.prototype, "bind").call(this, stream);
        }
      }, {
        _defaultHandleData: function(data, sink) {
          sink.add(data);
        },
        _defaultHandleError: function(error, stackTrace, sink) {
          sink.addError(error);
        },
        _defaultHandleDone: function(sink) {
          sink.close();
        }
      }, $__super);
    }(_StreamSinkTransformer$(S, T));
    dart.setSignature(_StreamHandlerTransformer, {
      constructors: function() {
        return ({_StreamHandlerTransformer: [_StreamHandlerTransformer$(S, T), [], {
            handleData: dart.functionType(dart.void, [S, EventSink$(T)]),
            handleError: dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]),
            handleDone: dart.functionType(dart.void, [EventSink$(T)])
          }]});
      },
      methods: function() {
        return ({bind: [Stream$(T), [Stream$(S)]]});
      },
      statics: function() {
        return ({
          _defaultHandleData: [dart.void, [dart.dynamic, EventSink]],
          _defaultHandleError: [dart.void, [dart.dynamic, core.StackTrace, EventSink]],
          _defaultHandleDone: [dart.void, [EventSink]]
        });
      },
      names: ['_defaultHandleData', '_defaultHandleError', '_defaultHandleDone']
    });
    return _StreamHandlerTransformer;
  });
  var _StreamHandlerTransformer = _StreamHandlerTransformer$();
  var _SubscriptionTransformer$ = dart.generic(function(S, T) {
    var _SubscriptionTransformer = dart.typedef('_SubscriptionTransformer', function() {
      return dart.functionType(StreamSubscription$(T), [Stream$(S), core.bool]);
    });
    return _SubscriptionTransformer;
  });
  var _SubscriptionTransformer = _SubscriptionTransformer$();
  var _transformer = Symbol('_transformer');
  var _StreamSubscriptionTransformer$ = dart.generic(function(S, T) {
    var _StreamSubscriptionTransformer = function($__super) {
      function _StreamSubscriptionTransformer() {
        $traceurRuntime.superConstructor(_StreamSubscriptionTransformer).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_StreamSubscriptionTransformer, {
        _StreamSubscriptionTransformer: function(transformer) {
          this[_transformer] = transformer;
        },
        bind: function(stream) {
          dart.as(stream, Stream$(S));
          return new (_BoundSubscriptionStream$(S, T))(stream, this[_transformer]);
        }
      }, {}, $__super);
    }(core.Object);
    _StreamSubscriptionTransformer[dart.implements] = function() {
      return [StreamTransformer$(S, T)];
    };
    dart.setSignature(_StreamSubscriptionTransformer, {
      constructors: function() {
        return ({_StreamSubscriptionTransformer: [_StreamSubscriptionTransformer$(S, T), [_SubscriptionTransformer$(S, T)]]});
      },
      methods: function() {
        return ({bind: [Stream$(T), [Stream$(S)]]});
      }
    });
    return _StreamSubscriptionTransformer;
  });
  var _StreamSubscriptionTransformer = _StreamSubscriptionTransformer$();
  var _BoundSubscriptionStream$ = dart.generic(function(S, T) {
    var _BoundSubscriptionStream = function($__super) {
      function _BoundSubscriptionStream() {
        $traceurRuntime.superConstructor(_BoundSubscriptionStream).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(_BoundSubscriptionStream, {
        _BoundSubscriptionStream: function(stream, transformer) {
          this[_stream] = stream;
          this[_transformer] = transformer;
          $traceurRuntime.superGet(this, _BoundSubscriptionStream.prototype, "Stream").call(this);
        },
        listen: function(onData, opts) {
          dart.as(onData, dart.functionType(dart.void, [T]));
          var onError = opts && 'onError' in opts ? opts.onError : null;
          var onDone = opts && 'onDone' in opts ? opts.onDone : null;
          dart.as(onDone, dart.functionType(dart.void, []));
          var cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
          cancelOnError = core.identical(true, cancelOnError);
          var result = this[_transformer](this[_stream], cancelOnError);
          result.onData(onData);
          result.onError(onError);
          result.onDone(onDone);
          return result;
        }
      }, {}, $__super);
    }(Stream$(T));
    dart.setSignature(_BoundSubscriptionStream, {
      constructors: function() {
        return ({_BoundSubscriptionStream: [_BoundSubscriptionStream$(S, T), [Stream$(S), _SubscriptionTransformer$(S, T)]]});
      },
      methods: function() {
        return ({listen: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {
            onError: core.Function,
            onDone: dart.functionType(dart.void, []),
            cancelOnError: core.bool
          }]});
      }
    });
    return _BoundSubscriptionStream;
  });
  var _BoundSubscriptionStream = _BoundSubscriptionStream$();
  var __CastType27$ = dart.generic(function(S, T) {
    var __CastType27 = dart.typedef('__CastType27', function() {
      return dart.functionType(dart.void, [S, EventSink$(T)]);
    });
    return __CastType27;
  });
  var __CastType27 = __CastType27$();
  var __CastType30$ = dart.generic(function(T) {
    var __CastType30 = dart.typedef('__CastType30', function() {
      return dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]);
    });
    return __CastType30;
  });
  var __CastType30 = __CastType30$();
  var Timer = function($__super) {
    function Timer() {
      $traceurRuntime.superConstructor(Timer).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Timer, {}, {
      new: function(duration, callback) {
        if (dart.equals(Zone.current, Zone.ROOT)) {
          return Zone.current.createTimer(duration, callback);
        }
        return Zone.current.createTimer(duration, Zone.current.bindCallback(callback, {runGuarded: true}));
      },
      periodic: function(duration, callback) {
        if (dart.equals(Zone.current, Zone.ROOT)) {
          return Zone.current.createPeriodicTimer(duration, callback);
        }
        return Zone.current.createPeriodicTimer(duration, dart.as(Zone.current.bindUnaryCallback(callback, {runGuarded: true}), __CastType34));
      },
      run: function(callback) {
        Timer.new(core.Duration.ZERO, callback);
      },
      _createTimer: function(duration, callback) {
        var milliseconds = duration.inMilliseconds;
        if (dart.notNull(milliseconds) < 0)
          milliseconds = 0;
        return new _isolate_helper.TimerImpl(milliseconds, callback);
      },
      _createPeriodicTimer: function(duration, callback) {
        var milliseconds = duration.inMilliseconds;
        if (dart.notNull(milliseconds) < 0)
          milliseconds = 0;
        return new _isolate_helper.TimerImpl.periodic(milliseconds, callback);
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(Timer, {
    constructors: function() {
      return ({
        new: [Timer, [core.Duration, dart.functionType(dart.void, [])]],
        periodic: [Timer, [core.Duration, dart.functionType(dart.void, [Timer])]]
      });
    },
    statics: function() {
      return ({
        run: [dart.void, [dart.functionType(dart.void, [])]],
        _createTimer: [Timer, [core.Duration, dart.functionType(dart.void, [])]],
        _createPeriodicTimer: [Timer, [core.Duration, dart.functionType(dart.void, [Timer])]]
      });
    },
    names: ['run', '_createTimer', '_createPeriodicTimer']
  });
  var __CastType34 = dart.typedef('__CastType34', function() {
    return dart.functionType(dart.void, [Timer]);
  });
  var ZoneCallback = dart.typedef('ZoneCallback', function() {
    return dart.functionType(dart.dynamic, []);
  });
  var ZoneUnaryCallback = dart.typedef('ZoneUnaryCallback', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  var ZoneBinaryCallback = dart.typedef('ZoneBinaryCallback', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]);
  });
  var HandleUncaughtErrorHandler = dart.typedef('HandleUncaughtErrorHandler', function() {
    return dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]);
  });
  var RunHandler = dart.typedef('RunHandler', function() {
    return dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
  });
  var RunUnaryHandler = dart.typedef('RunUnaryHandler', function() {
    return dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]);
  });
  var RunBinaryHandler = dart.typedef('RunBinaryHandler', function() {
    return dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]);
  });
  var RegisterCallbackHandler = dart.typedef('RegisterCallbackHandler', function() {
    return dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
  });
  var RegisterUnaryCallbackHandler = dart.typedef('RegisterUnaryCallbackHandler', function() {
    return dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]);
  });
  var RegisterBinaryCallbackHandler = dart.typedef('RegisterBinaryCallbackHandler', function() {
    return dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]);
  });
  var ErrorCallbackHandler = dart.typedef('ErrorCallbackHandler', function() {
    return dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]);
  });
  var ScheduleMicrotaskHandler = dart.typedef('ScheduleMicrotaskHandler', function() {
    return dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
  });
  var CreateTimerHandler = dart.typedef('CreateTimerHandler', function() {
    return dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]);
  });
  var CreatePeriodicTimerHandler = dart.typedef('CreatePeriodicTimerHandler', function() {
    return dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]);
  });
  var PrintHandler = dart.typedef('PrintHandler', function() {
    return dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]);
  });
  var ForkHandler = dart.typedef('ForkHandler', function() {
    return dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map]);
  });
  var _ZoneFunction = function($__super) {
    function _ZoneFunction() {
      $traceurRuntime.superConstructor(_ZoneFunction).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ZoneFunction, {_ZoneFunction: function(zone, func) {
        this.zone = zone;
        this.function = func;
      }}, {}, $__super);
  }(core.Object);
  dart.setSignature(_ZoneFunction, {constructors: function() {
      return ({_ZoneFunction: [_ZoneFunction, [_Zone, core.Function]]});
    }});
  var ZoneSpecification = function($__super) {
    function ZoneSpecification() {
      $traceurRuntime.superConstructor(ZoneSpecification).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ZoneSpecification, {}, {
      new: function(opts) {
        return new _ZoneSpecification(opts);
      },
      from: function(other, opts) {
        var handleUncaughtError = opts && 'handleUncaughtError' in opts ? opts.handleUncaughtError : null;
        var run = opts && 'run' in opts ? opts.run : null;
        var runUnary = opts && 'runUnary' in opts ? opts.runUnary : null;
        var runBinary = opts && 'runBinary' in opts ? opts.runBinary : null;
        var registerCallback = opts && 'registerCallback' in opts ? opts.registerCallback : null;
        var registerUnaryCallback = opts && 'registerUnaryCallback' in opts ? opts.registerUnaryCallback : null;
        var registerBinaryCallback = opts && 'registerBinaryCallback' in opts ? opts.registerBinaryCallback : null;
        var errorCallback = opts && 'errorCallback' in opts ? opts.errorCallback : null;
        var scheduleMicrotask = opts && 'scheduleMicrotask' in opts ? opts.scheduleMicrotask : null;
        var createTimer = opts && 'createTimer' in opts ? opts.createTimer : null;
        var createPeriodicTimer = opts && 'createPeriodicTimer' in opts ? opts.createPeriodicTimer : null;
        var print = opts && 'print' in opts ? opts.print : null;
        var fork = opts && 'fork' in opts ? opts.fork : null;
        return ZoneSpecification.new({
          handleUncaughtError: handleUncaughtError != null ? handleUncaughtError : other.handleUncaughtError,
          run: run != null ? run : other.run,
          runUnary: runUnary != null ? runUnary : other.runUnary,
          runBinary: runBinary != null ? runBinary : other.runBinary,
          registerCallback: registerCallback != null ? registerCallback : other.registerCallback,
          registerUnaryCallback: registerUnaryCallback != null ? registerUnaryCallback : other.registerUnaryCallback,
          registerBinaryCallback: registerBinaryCallback != null ? registerBinaryCallback : other.registerBinaryCallback,
          errorCallback: errorCallback != null ? errorCallback : other.errorCallback,
          scheduleMicrotask: scheduleMicrotask != null ? scheduleMicrotask : other.scheduleMicrotask,
          createTimer: createTimer != null ? createTimer : other.createTimer,
          createPeriodicTimer: createPeriodicTimer != null ? createPeriodicTimer : other.createPeriodicTimer,
          print: print != null ? print : other.print,
          fork: fork != null ? fork : other.fork
        });
      }
    }, $__super);
  }(core.Object);
  dart.setSignature(ZoneSpecification, {constructors: function() {
      return ({
        new: [ZoneSpecification, [], {
          handleUncaughtError: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]),
          run: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]),
          runUnary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]),
          runBinary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]),
          registerCallback: dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]),
          registerUnaryCallback: dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]),
          registerBinaryCallback: dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]),
          errorCallback: dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]),
          scheduleMicrotask: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]),
          createTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]),
          createPeriodicTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]),
          print: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]),
          fork: dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map])
        }],
        from: [ZoneSpecification, [ZoneSpecification], {
          handleUncaughtError: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]),
          run: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]),
          runUnary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]),
          runBinary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]),
          registerCallback: dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]),
          registerUnaryCallback: dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]),
          registerBinaryCallback: dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]),
          errorCallback: dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]),
          scheduleMicrotask: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]),
          createTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]),
          createPeriodicTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]),
          print: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]),
          fork: dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map])
        }]
      });
    }});
  var _ZoneSpecification = function($__super) {
    function _ZoneSpecification() {
      $traceurRuntime.superConstructor(_ZoneSpecification).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ZoneSpecification, {_ZoneSpecification: function(opts) {
        var handleUncaughtError = opts && 'handleUncaughtError' in opts ? opts.handleUncaughtError : null;
        var run = opts && 'run' in opts ? opts.run : null;
        var runUnary = opts && 'runUnary' in opts ? opts.runUnary : null;
        var runBinary = opts && 'runBinary' in opts ? opts.runBinary : null;
        var registerCallback = opts && 'registerCallback' in opts ? opts.registerCallback : null;
        var registerUnaryCallback = opts && 'registerUnaryCallback' in opts ? opts.registerUnaryCallback : null;
        var registerBinaryCallback = opts && 'registerBinaryCallback' in opts ? opts.registerBinaryCallback : null;
        var errorCallback = opts && 'errorCallback' in opts ? opts.errorCallback : null;
        var scheduleMicrotask = opts && 'scheduleMicrotask' in opts ? opts.scheduleMicrotask : null;
        var createTimer = opts && 'createTimer' in opts ? opts.createTimer : null;
        var createPeriodicTimer = opts && 'createPeriodicTimer' in opts ? opts.createPeriodicTimer : null;
        var print = opts && 'print' in opts ? opts.print : null;
        var fork = opts && 'fork' in opts ? opts.fork : null;
        this.handleUncaughtError = handleUncaughtError;
        this.run = run;
        this.runUnary = runUnary;
        this.runBinary = runBinary;
        this.registerCallback = registerCallback;
        this.registerUnaryCallback = registerUnaryCallback;
        this.registerBinaryCallback = registerBinaryCallback;
        this.errorCallback = errorCallback;
        this.scheduleMicrotask = scheduleMicrotask;
        this.createTimer = createTimer;
        this.createPeriodicTimer = createPeriodicTimer;
        this.print = print;
        this.fork = fork;
      }}, {}, $__super);
  }(core.Object);
  _ZoneSpecification[dart.implements] = function() {
    return [ZoneSpecification];
  };
  dart.setSignature(_ZoneSpecification, {constructors: function() {
      return ({_ZoneSpecification: [_ZoneSpecification, [], {
          handleUncaughtError: HandleUncaughtErrorHandler,
          run: RunHandler,
          runUnary: RunUnaryHandler,
          runBinary: RunBinaryHandler,
          registerCallback: RegisterCallbackHandler,
          registerUnaryCallback: RegisterUnaryCallbackHandler,
          registerBinaryCallback: RegisterBinaryCallbackHandler,
          errorCallback: ErrorCallbackHandler,
          scheduleMicrotask: ScheduleMicrotaskHandler,
          createTimer: CreateTimerHandler,
          createPeriodicTimer: CreatePeriodicTimerHandler,
          print: PrintHandler,
          fork: ForkHandler
        }]});
    }});
  var ZoneDelegate = function($__super) {
    function ZoneDelegate() {
      $traceurRuntime.superConstructor(ZoneDelegate).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(ZoneDelegate, {}, {}, $__super);
  }(core.Object);
  var Zone = function($__super) {
    function Zone() {
      $traceurRuntime.superConstructor(Zone).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(Zone, {_: function() {}}, {
      get current() {
        return Zone._current;
      },
      _enter: function(zone) {
        dart.assert(zone != null);
        dart.assert(!dart.notNull(core.identical(zone, Zone._current)));
        var previous = Zone._current;
        Zone._current = zone;
        return previous;
      },
      _leave: function(previous) {
        dart.assert(previous != null);
        Zone._current = previous;
      }
    }, $__super);
  }(core.Object);
  dart.defineNamedConstructor(Zone, '_');
  dart.setSignature(Zone, {
    constructors: function() {
      return ({_: [Zone, []]});
    },
    statics: function() {
      return ({
        _enter: [Zone, [Zone]],
        _leave: [dart.void, [Zone]]
      });
    },
    names: ['_enter', '_leave']
  });
  var _Zone = function($__super) {
    function _Zone() {
      $traceurRuntime.superConstructor(_Zone).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_Zone, {
      _Zone: function() {},
      inSameErrorZone: function(otherZone) {
        return dart.notNull(core.identical(this, otherZone)) || dart.notNull(core.identical(this.errorZone, otherZone.errorZone));
      }
    }, {}, $__super);
  }(core.Object);
  _Zone[dart.implements] = function() {
    return [Zone];
  };
  dart.setSignature(_Zone, {
    constructors: function() {
      return ({_Zone: [_Zone, []]});
    },
    methods: function() {
      return ({inSameErrorZone: [core.bool, [Zone]]});
    }
  });
  var _run = Symbol('_run');
  var _runUnary = Symbol('_runUnary');
  var _runBinary = Symbol('_runBinary');
  var _registerCallback = Symbol('_registerCallback');
  var _registerUnaryCallback = Symbol('_registerUnaryCallback');
  var _registerBinaryCallback = Symbol('_registerBinaryCallback');
  var _errorCallback = Symbol('_errorCallback');
  var _scheduleMicrotask = Symbol('_scheduleMicrotask');
  var _createTimer = Symbol('_createTimer');
  var _createPeriodicTimer = Symbol('_createPeriodicTimer');
  var _print = Symbol('_print');
  var _fork = Symbol('_fork');
  var _handleUncaughtError = Symbol('_handleUncaughtError');
  var _map = Symbol('_map');
  var _delegate = Symbol('_delegate');
  var _RootZone = function($__super) {
    var $__5;
    function _RootZone() {
      $traceurRuntime.superConstructor(_RootZone).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_RootZone, ($__5 = {}, Object.defineProperty($__5, "_RootZone", {
      value: function() {
        $traceurRuntime.superGet(this, _RootZone.prototype, "_Zone").call(this);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, _run, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootRun));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _runUnary, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootRunUnary));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _runBinary, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootRunBinary));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _registerCallback, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootRegisterCallback));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _registerUnaryCallback, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootRegisterUnaryCallback));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _registerBinaryCallback, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootRegisterBinaryCallback));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _errorCallback, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootErrorCallback));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _scheduleMicrotask, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootScheduleMicrotask));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _createTimer, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootCreateTimer));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _createPeriodicTimer, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootCreatePeriodicTimer));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _print, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootPrint));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _fork, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootFork));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _handleUncaughtError, {
      get: function() {
        return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootHandleUncaughtError));
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "parent", {
      get: function() {
        return null;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _map, {
      get: function() {
        return _RootZone._rootMap;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, _delegate, {
      get: function() {
        if (_RootZone._rootDelegate != null)
          return _RootZone._rootDelegate;
        return _RootZone._rootDelegate = new _ZoneDelegate(this);
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "errorZone", {
      get: function() {
        return this;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "runGuarded", {
      value: function(f) {
        try {
          if (dart.notNull(core.identical(_ROOT_ZONE, Zone._current))) {
            return f();
          }
          return _rootRun(null, null, this, f);
        } catch (e) {
          var s = dart.stackTrace(e);
          return this.handleUncaughtError(e, s);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runUnaryGuarded", {
      value: function(f, arg) {
        try {
          if (dart.notNull(core.identical(_ROOT_ZONE, Zone._current))) {
            return dart.dcall(f, arg);
          }
          return _rootRunUnary(null, null, this, f, arg);
        } catch (e) {
          var s = dart.stackTrace(e);
          return this.handleUncaughtError(e, s);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runBinaryGuarded", {
      value: function(f, arg1, arg2) {
        try {
          if (dart.notNull(core.identical(_ROOT_ZONE, Zone._current))) {
            return dart.dcall(f, arg1, arg2);
          }
          return _rootRunBinary(null, null, this, f, arg1, arg2);
        } catch (e) {
          var s = dart.stackTrace(e);
          return this.handleUncaughtError(e, s);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "bindCallback", {
      value: function(f, opts) {
        var $__4 = this;
        var runGuarded = opts && 'runGuarded' in opts ? opts.runGuarded : true;
        if (dart.notNull(runGuarded)) {
          return dart.fn((function() {
            return $__4.runGuarded(f);
          }).bind(this));
        } else {
          return dart.fn((function() {
            return $__4.run(f);
          }).bind(this));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "bindUnaryCallback", {
      value: function(f, opts) {
        var $__4 = this;
        var runGuarded = opts && 'runGuarded' in opts ? opts.runGuarded : true;
        if (dart.notNull(runGuarded)) {
          return dart.fn((function(arg) {
            return $__4.runUnaryGuarded(f, arg);
          }).bind(this));
        } else {
          return dart.fn((function(arg) {
            return $__4.runUnary(f, arg);
          }).bind(this));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "bindBinaryCallback", {
      value: function(f, opts) {
        var $__4 = this;
        var runGuarded = opts && 'runGuarded' in opts ? opts.runGuarded : true;
        if (dart.notNull(runGuarded)) {
          return dart.fn((function(arg1, arg2) {
            return $__4.runBinaryGuarded(f, arg1, arg2);
          }).bind(this));
        } else {
          return dart.fn((function(arg1, arg2) {
            return $__4.runBinary(f, arg1, arg2);
          }).bind(this));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "get", {
      value: function(key) {
        return null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handleUncaughtError", {
      value: function(error, stackTrace) {
        return _rootHandleUncaughtError(null, null, this, error, stackTrace);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "fork", {
      value: function(opts) {
        var specification = opts && 'specification' in opts ? opts.specification : null;
        var zoneValues = opts && 'zoneValues' in opts ? opts.zoneValues : null;
        return _rootFork(null, null, this, specification, zoneValues);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "run", {
      value: function(f) {
        if (dart.notNull(core.identical(Zone._current, _ROOT_ZONE)))
          return f();
        return _rootRun(null, null, this, f);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runUnary", {
      value: function(f, arg) {
        if (dart.notNull(core.identical(Zone._current, _ROOT_ZONE)))
          return dart.dcall(f, arg);
        return _rootRunUnary(null, null, this, f, arg);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runBinary", {
      value: function(f, arg1, arg2) {
        if (dart.notNull(core.identical(Zone._current, _ROOT_ZONE)))
          return dart.dcall(f, arg1, arg2);
        return _rootRunBinary(null, null, this, f, arg1, arg2);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerCallback", {
      value: function(f) {
        return f;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerUnaryCallback", {
      value: function(f) {
        return f;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerBinaryCallback", {
      value: function(f) {
        return f;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "errorCallback", {
      value: function(error, stackTrace) {
        return null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "scheduleMicrotask", {
      value: function(f) {
        _rootScheduleMicrotask(null, null, this, f);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "createTimer", {
      value: function(duration, f) {
        return Timer._createTimer(duration, f);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "createPeriodicTimer", {
      value: function(duration, f) {
        return Timer._createPeriodicTimer(duration, f);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "print", {
      value: function(line) {
        _internal.printToConsole(line);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(_Zone);
  dart.setSignature(_RootZone, {
    constructors: function() {
      return ({_RootZone: [_RootZone, []]});
    },
    methods: function() {
      return ({
        runGuarded: [dart.dynamic, [dart.functionType(dart.dynamic, [])]],
        runUnaryGuarded: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]],
        runBinaryGuarded: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]],
        bindCallback: [ZoneCallback, [dart.functionType(dart.dynamic, [])], {runGuarded: core.bool}],
        bindUnaryCallback: [ZoneUnaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic])], {runGuarded: core.bool}],
        bindBinaryCallback: [ZoneBinaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])], {runGuarded: core.bool}],
        get: [dart.dynamic, [core.Object]],
        handleUncaughtError: [dart.dynamic, [dart.dynamic, core.StackTrace]],
        fork: [Zone, [], {
          specification: ZoneSpecification,
          zoneValues: core.Map
        }],
        run: [dart.dynamic, [dart.functionType(dart.dynamic, [])]],
        runUnary: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]],
        runBinary: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]],
        registerCallback: [ZoneCallback, [dart.functionType(dart.dynamic, [])]],
        registerUnaryCallback: [ZoneUnaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic])]],
        registerBinaryCallback: [ZoneBinaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]],
        errorCallback: [AsyncError, [core.Object, core.StackTrace]],
        scheduleMicrotask: [dart.void, [dart.functionType(dart.void, [])]],
        createTimer: [Timer, [core.Duration, dart.functionType(dart.void, [])]],
        createPeriodicTimer: [Timer, [core.Duration, dart.functionType(dart.void, [Timer])]],
        print: [dart.void, [core.String]]
      });
    }
  });
  var _ROOT_ZONE = dart.const(new _RootZone());
  Zone.ROOT = _ROOT_ZONE;
  Zone._current = _ROOT_ZONE;
  function _parentDelegate(zone) {
    if (zone.parent == null)
      return null;
    return zone.parent[_delegate];
  }
  dart.fn(_parentDelegate, ZoneDelegate, [_Zone]);
  var _delegationTarget = Symbol('_delegationTarget');
  var _ZoneDelegate = function($__super) {
    function _ZoneDelegate() {
      $traceurRuntime.superConstructor(_ZoneDelegate).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_ZoneDelegate, {
      _ZoneDelegate: function(delegationTarget) {
        this[_delegationTarget] = delegationTarget;
      },
      handleUncaughtError: function(zone, error, stackTrace) {
        var implementation = this[_delegationTarget][_handleUncaughtError];
        var implZone = implementation.zone;
        return dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, error, stackTrace);
      },
      run: function(zone, f) {
        var implementation = this[_delegationTarget][_run];
        var implZone = implementation.zone;
        return dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f);
      },
      runUnary: function(zone, f, arg) {
        var implementation = this[_delegationTarget][_runUnary];
        var implZone = implementation.zone;
        return dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f, arg);
      },
      runBinary: function(zone, f, arg1, arg2) {
        var implementation = this[_delegationTarget][_runBinary];
        var implZone = implementation.zone;
        return dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f, arg1, arg2);
      },
      registerCallback: function(zone, f) {
        var implementation = this[_delegationTarget][_registerCallback];
        var implZone = implementation.zone;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f), ZoneCallback);
      },
      registerUnaryCallback: function(zone, f) {
        var implementation = this[_delegationTarget][_registerUnaryCallback];
        var implZone = implementation.zone;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f), ZoneUnaryCallback);
      },
      registerBinaryCallback: function(zone, f) {
        var implementation = this[_delegationTarget][_registerBinaryCallback];
        var implZone = implementation.zone;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f), ZoneBinaryCallback);
      },
      errorCallback: function(zone, error, stackTrace) {
        var implementation = this[_delegationTarget][_errorCallback];
        var implZone = implementation.zone;
        if (dart.notNull(core.identical(implZone, _ROOT_ZONE)))
          return null;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, error, stackTrace), AsyncError);
      },
      scheduleMicrotask: function(zone, f) {
        var implementation = this[_delegationTarget][_scheduleMicrotask];
        var implZone = implementation.zone;
        dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, f);
      },
      createTimer: function(zone, duration, f) {
        var implementation = this[_delegationTarget][_createTimer];
        var implZone = implementation.zone;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, duration, f), Timer);
      },
      createPeriodicTimer: function(zone, period, f) {
        var implementation = this[_delegationTarget][_createPeriodicTimer];
        var implZone = implementation.zone;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, period, f), Timer);
      },
      print: function(zone, line) {
        var implementation = this[_delegationTarget][_print];
        var implZone = implementation.zone;
        dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, line);
      },
      fork: function(zone, specification, zoneValues) {
        var implementation = this[_delegationTarget][_fork];
        var implZone = implementation.zone;
        return dart.as(dart.dcall(implementation.function, implZone, _parentDelegate(implZone), zone, specification, zoneValues), Zone);
      }
    }, {}, $__super);
  }(core.Object);
  _ZoneDelegate[dart.implements] = function() {
    return [ZoneDelegate];
  };
  dart.setSignature(_ZoneDelegate, {
    constructors: function() {
      return ({_ZoneDelegate: [_ZoneDelegate, [_Zone]]});
    },
    methods: function() {
      return ({
        handleUncaughtError: [dart.dynamic, [Zone, dart.dynamic, core.StackTrace]],
        run: [dart.dynamic, [Zone, dart.functionType(dart.dynamic, [])]],
        runUnary: [dart.dynamic, [Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]],
        runBinary: [dart.dynamic, [Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]],
        registerCallback: [ZoneCallback, [Zone, dart.functionType(dart.dynamic, [])]],
        registerUnaryCallback: [ZoneUnaryCallback, [Zone, dart.functionType(dart.dynamic, [dart.dynamic])]],
        registerBinaryCallback: [ZoneBinaryCallback, [Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]],
        errorCallback: [AsyncError, [Zone, core.Object, core.StackTrace]],
        scheduleMicrotask: [dart.void, [Zone, dart.functionType(dart.dynamic, [])]],
        createTimer: [Timer, [Zone, core.Duration, dart.functionType(dart.void, [])]],
        createPeriodicTimer: [Timer, [Zone, core.Duration, dart.functionType(dart.void, [Timer])]],
        print: [dart.void, [Zone, core.String]],
        fork: [Zone, [Zone, ZoneSpecification, core.Map]]
      });
    }
  });
  var _delegateCache = Symbol('_delegateCache');
  var _CustomZone = function($__super) {
    var $__5;
    function _CustomZone() {
      $traceurRuntime.superConstructor(_CustomZone).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_CustomZone, ($__5 = {}, Object.defineProperty($__5, _delegate, {
      get: function() {
        if (this[_delegateCache] != null)
          return this[_delegateCache];
        this[_delegateCache] = new _ZoneDelegate(this);
        return this[_delegateCache];
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "_CustomZone", {
      value: function(parent, specification, map) {
        this.parent = parent;
        this[_map] = map;
        this[_runUnary] = null;
        this[_run] = null;
        this[_runBinary] = null;
        this[_registerCallback] = null;
        this[_registerUnaryCallback] = null;
        this[_registerBinaryCallback] = null;
        this[_errorCallback] = null;
        this[_scheduleMicrotask] = null;
        this[_createTimer] = null;
        this[_createPeriodicTimer] = null;
        this[_print] = null;
        this[_fork] = null;
        this[_handleUncaughtError] = null;
        this[_delegateCache] = null;
        $traceurRuntime.superGet(this, _CustomZone.prototype, "_Zone").call(this);
        this[_run] = specification.run != null ? new _ZoneFunction(this, specification.run) : this.parent[_run];
        this[_runUnary] = specification.runUnary != null ? new _ZoneFunction(this, specification.runUnary) : this.parent[_runUnary];
        this[_runBinary] = specification.runBinary != null ? new _ZoneFunction(this, specification.runBinary) : this.parent[_runBinary];
        this[_registerCallback] = specification.registerCallback != null ? new _ZoneFunction(this, specification.registerCallback) : this.parent[_registerCallback];
        this[_registerUnaryCallback] = specification.registerUnaryCallback != null ? new _ZoneFunction(this, specification.registerUnaryCallback) : this.parent[_registerUnaryCallback];
        this[_registerBinaryCallback] = specification.registerBinaryCallback != null ? new _ZoneFunction(this, specification.registerBinaryCallback) : this.parent[_registerBinaryCallback];
        this[_errorCallback] = specification.errorCallback != null ? new _ZoneFunction(this, specification.errorCallback) : this.parent[_errorCallback];
        this[_scheduleMicrotask] = specification.scheduleMicrotask != null ? new _ZoneFunction(this, specification.scheduleMicrotask) : this.parent[_scheduleMicrotask];
        this[_createTimer] = specification.createTimer != null ? new _ZoneFunction(this, specification.createTimer) : this.parent[_createTimer];
        this[_createPeriodicTimer] = specification.createPeriodicTimer != null ? new _ZoneFunction(this, specification.createPeriodicTimer) : this.parent[_createPeriodicTimer];
        this[_print] = specification.print != null ? new _ZoneFunction(this, specification.print) : this.parent[_print];
        this[_fork] = specification.fork != null ? new _ZoneFunction(this, specification.fork) : this.parent[_fork];
        this[_handleUncaughtError] = specification.handleUncaughtError != null ? new _ZoneFunction(this, specification.handleUncaughtError) : this.parent[_handleUncaughtError];
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "errorZone", {
      get: function() {
        return this[_handleUncaughtError].zone;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__5, "runGuarded", {
      value: function(f) {
        try {
          return this.run(f);
        } catch (e) {
          var s = dart.stackTrace(e);
          return this.handleUncaughtError(e, s);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runUnaryGuarded", {
      value: function(f, arg) {
        try {
          return this.runUnary(f, arg);
        } catch (e) {
          var s = dart.stackTrace(e);
          return this.handleUncaughtError(e, s);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runBinaryGuarded", {
      value: function(f, arg1, arg2) {
        try {
          return this.runBinary(f, arg1, arg2);
        } catch (e) {
          var s = dart.stackTrace(e);
          return this.handleUncaughtError(e, s);
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "bindCallback", {
      value: function(f, opts) {
        var $__4 = this;
        var runGuarded = opts && 'runGuarded' in opts ? opts.runGuarded : true;
        var registered = this.registerCallback(f);
        if (dart.notNull(runGuarded)) {
          return dart.fn((function() {
            return $__4.runGuarded(registered);
          }).bind(this));
        } else {
          return dart.fn((function() {
            return $__4.run(registered);
          }).bind(this));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "bindUnaryCallback", {
      value: function(f, opts) {
        var $__4 = this;
        var runGuarded = opts && 'runGuarded' in opts ? opts.runGuarded : true;
        var registered = this.registerUnaryCallback(f);
        if (dart.notNull(runGuarded)) {
          return dart.fn((function(arg) {
            return $__4.runUnaryGuarded(registered, arg);
          }).bind(this));
        } else {
          return dart.fn((function(arg) {
            return $__4.runUnary(registered, arg);
          }).bind(this));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "bindBinaryCallback", {
      value: function(f, opts) {
        var $__4 = this;
        var runGuarded = opts && 'runGuarded' in opts ? opts.runGuarded : true;
        var registered = this.registerBinaryCallback(f);
        if (dart.notNull(runGuarded)) {
          return dart.fn((function(arg1, arg2) {
            return $__4.runBinaryGuarded(registered, arg1, arg2);
          }).bind(this));
        } else {
          return dart.fn((function(arg1, arg2) {
            return $__4.runBinary(registered, arg1, arg2);
          }).bind(this));
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "get", {
      value: function(key) {
        var result = this[_map].get(key);
        if (result != null || dart.notNull(this[_map].containsKey(key)))
          return result;
        if (this.parent != null) {
          var value = this.parent.get(key);
          if (value != null) {
            this[_map].set(key, value);
          }
          return value;
        }
        dart.assert(dart.equals(this, _ROOT_ZONE));
        return null;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "handleUncaughtError", {
      value: function(error, stackTrace) {
        var implementation = this[_handleUncaughtError];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.dcall(implementation.function, implementation.zone, parentDelegate, this, error, stackTrace);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "fork", {
      value: function(opts) {
        var specification = opts && 'specification' in opts ? opts.specification : null;
        var zoneValues = opts && 'zoneValues' in opts ? opts.zoneValues : null;
        var implementation = this[_fork];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.as(dart.dcall(implementation.function, implementation.zone, parentDelegate, this, specification, zoneValues), Zone);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "run", {
      value: function(f) {
        var implementation = this[_run];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runUnary", {
      value: function(f, arg) {
        var implementation = this[_runUnary];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f, arg);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "runBinary", {
      value: function(f, arg1, arg2) {
        var implementation = this[_runBinary];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f, arg1, arg2);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerCallback", {
      value: function(f) {
        var implementation = this[_registerCallback];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.as(dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f), ZoneCallback);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerUnaryCallback", {
      value: function(f) {
        var implementation = this[_registerUnaryCallback];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.as(dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f), ZoneUnaryCallback);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "registerBinaryCallback", {
      value: function(f) {
        var implementation = this[_registerBinaryCallback];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.as(dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f), ZoneBinaryCallback);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "errorCallback", {
      value: function(error, stackTrace) {
        var implementation = this[_errorCallback];
        dart.assert(implementation != null);
        var implementationZone = implementation.zone;
        if (dart.notNull(core.identical(implementationZone, _ROOT_ZONE)))
          return null;
        var parentDelegate = _parentDelegate(dart.as(implementationZone, _Zone));
        return dart.as(dart.dcall(implementation.function, implementationZone, parentDelegate, this, error, stackTrace), AsyncError);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "scheduleMicrotask", {
      value: function(f) {
        var implementation = this[_scheduleMicrotask];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.dcall(implementation.function, implementation.zone, parentDelegate, this, f);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "createTimer", {
      value: function(duration, f) {
        var implementation = this[_createTimer];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.as(dart.dcall(implementation.function, implementation.zone, parentDelegate, this, duration, f), Timer);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "createPeriodicTimer", {
      value: function(duration, f) {
        var implementation = this[_createPeriodicTimer];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.as(dart.dcall(implementation.function, implementation.zone, parentDelegate, this, duration, f), Timer);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__5, "print", {
      value: function(line) {
        var implementation = this[_print];
        dart.assert(implementation != null);
        var parentDelegate = _parentDelegate(implementation.zone);
        return dart.dcall(implementation.function, implementation.zone, parentDelegate, this, line);
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__5), {}, $__super);
  }(_Zone);
  dart.setSignature(_CustomZone, {
    constructors: function() {
      return ({_CustomZone: [_CustomZone, [_Zone, ZoneSpecification, core.Map]]});
    },
    methods: function() {
      return ({
        runGuarded: [dart.dynamic, [dart.functionType(dart.dynamic, [])]],
        runUnaryGuarded: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]],
        runBinaryGuarded: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]],
        bindCallback: [ZoneCallback, [dart.functionType(dart.dynamic, [])], {runGuarded: core.bool}],
        bindUnaryCallback: [ZoneUnaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic])], {runGuarded: core.bool}],
        bindBinaryCallback: [ZoneBinaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])], {runGuarded: core.bool}],
        get: [dart.dynamic, [core.Object]],
        handleUncaughtError: [dart.dynamic, [dart.dynamic, core.StackTrace]],
        fork: [Zone, [], {
          specification: ZoneSpecification,
          zoneValues: core.Map
        }],
        run: [dart.dynamic, [dart.functionType(dart.dynamic, [])]],
        runUnary: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]],
        runBinary: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]],
        registerCallback: [ZoneCallback, [dart.functionType(dart.dynamic, [])]],
        registerUnaryCallback: [ZoneUnaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic])]],
        registerBinaryCallback: [ZoneBinaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]],
        errorCallback: [AsyncError, [core.Object, core.StackTrace]],
        scheduleMicrotask: [dart.void, [dart.functionType(dart.void, [])]],
        createTimer: [Timer, [core.Duration, dart.functionType(dart.void, [])]],
        createPeriodicTimer: [Timer, [core.Duration, dart.functionType(dart.void, [Timer])]],
        print: [dart.void, [core.String]]
      });
    }
  });
  function _rootHandleUncaughtError(self, parent, zone, error, stackTrace) {
    _schedulePriorityAsyncCallback(dart.fn(function() {
      dart.throw(new _UncaughtAsyncError(error, stackTrace));
    }));
  }
  dart.fn(_rootHandleUncaughtError, dart.void, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]);
  function _rootRun(self, parent, zone, f) {
    if (dart.equals(Zone._current, zone))
      return f();
    var old = Zone._enter(zone);
    try {
      return f();
    } finally {
      Zone._leave(old);
    }
  }
  dart.fn(_rootRun, dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
  function _rootRunUnary(self, parent, zone, f, arg) {
    if (dart.equals(Zone._current, zone))
      return dart.dcall(f, arg);
    var old = Zone._enter(zone);
    try {
      return dart.dcall(f, arg);
    } finally {
      Zone._leave(old);
    }
  }
  dart.fn(_rootRunUnary, dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]);
  function _rootRunBinary(self, parent, zone, f, arg1, arg2) {
    if (dart.equals(Zone._current, zone))
      return dart.dcall(f, arg1, arg2);
    var old = Zone._enter(zone);
    try {
      return dart.dcall(f, arg1, arg2);
    } finally {
      Zone._leave(old);
    }
  }
  dart.fn(_rootRunBinary, dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]);
  function _rootRegisterCallback(self, parent, zone, f) {
    return f;
  }
  dart.fn(_rootRegisterCallback, ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
  function _rootRegisterUnaryCallback(self, parent, zone, f) {
    return f;
  }
  dart.fn(_rootRegisterUnaryCallback, ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]);
  function _rootRegisterBinaryCallback(self, parent, zone, f) {
    return f;
  }
  dart.fn(_rootRegisterBinaryCallback, ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]);
  function _rootErrorCallback(self, parent, zone, error, stackTrace) {
    return null;
  }
  dart.fn(_rootErrorCallback, AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]);
  function _rootScheduleMicrotask(self, parent, zone, f) {
    if (!dart.notNull(core.identical(_ROOT_ZONE, zone))) {
      var hasErrorHandler = !dart.notNull(_ROOT_ZONE.inSameErrorZone(zone));
      f = zone.bindCallback(f, {runGuarded: hasErrorHandler});
    }
    _scheduleAsyncCallback(f);
  }
  dart.fn(_rootScheduleMicrotask, dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
  function _rootCreateTimer(self, parent, zone, duration, callback) {
    if (!dart.notNull(core.identical(_ROOT_ZONE, zone))) {
      callback = zone.bindCallback(callback);
    }
    return Timer._createTimer(duration, callback);
  }
  dart.fn(_rootCreateTimer, Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]);
  function _rootCreatePeriodicTimer(self, parent, zone, duration, callback) {
    if (!dart.notNull(core.identical(_ROOT_ZONE, zone))) {
      callback = dart.as(zone.bindUnaryCallback(callback), __CastType36);
    }
    return Timer._createPeriodicTimer(duration, callback);
  }
  dart.fn(_rootCreatePeriodicTimer, Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]);
  function _rootPrint(self, parent, zone, line) {
    _internal.printToConsole(line);
  }
  dart.fn(_rootPrint, dart.void, [Zone, ZoneDelegate, Zone, core.String]);
  function _printToZone(line) {
    Zone.current.print(line);
  }
  dart.fn(_printToZone, dart.void, [core.String]);
  function _rootFork(self, parent, zone, specification, zoneValues) {
    _internal.printToZone = _printToZone;
    if (specification == null) {
      specification = dart.const(ZoneSpecification.new());
    } else if (!dart.is(specification, _ZoneSpecification)) {
      dart.throw(new core.ArgumentError("ZoneSpecifications must be instantiated" + " with the provided constructor."));
    }
    var valueMap = null;
    if (zoneValues == null) {
      if (dart.is(zone, _Zone)) {
        valueMap = zone[_map];
      } else {
        valueMap = collection.HashMap.new();
      }
    } else {
      valueMap = collection.HashMap.from(zoneValues);
    }
    return new _CustomZone(dart.as(zone, _Zone), specification, valueMap);
  }
  dart.fn(_rootFork, Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map]);
  var _RootZoneSpecification = function($__super) {
    function _RootZoneSpecification() {
      $traceurRuntime.superConstructor(_RootZoneSpecification).apply(this, arguments);
    }
    return ($traceurRuntime.createClass)(_RootZoneSpecification, {
      get handleUncaughtError() {
        return _rootHandleUncaughtError;
      },
      get run() {
        return _rootRun;
      },
      get runUnary() {
        return _rootRunUnary;
      },
      get runBinary() {
        return _rootRunBinary;
      },
      get registerCallback() {
        return _rootRegisterCallback;
      },
      get registerUnaryCallback() {
        return _rootRegisterUnaryCallback;
      },
      get registerBinaryCallback() {
        return _rootRegisterBinaryCallback;
      },
      get errorCallback() {
        return _rootErrorCallback;
      },
      get scheduleMicrotask() {
        return _rootScheduleMicrotask;
      },
      get createTimer() {
        return _rootCreateTimer;
      },
      get createPeriodicTimer() {
        return _rootCreatePeriodicTimer;
      },
      get print() {
        return _rootPrint;
      },
      get fork() {
        return _rootFork;
      }
    }, {}, $__super);
  }(core.Object);
  _RootZoneSpecification[dart.implements] = function() {
    return [ZoneSpecification];
  };
  _RootZone._rootDelegate = null;
  dart.defineLazyProperties(_RootZone, {
    get _rootMap() {
      return collection.HashMap.new();
    },
    set _rootMap(_) {}
  });
  function runZoned(body, opts) {
    var zoneValues = opts && 'zoneValues' in opts ? opts.zoneValues : null;
    var zoneSpecification = opts && 'zoneSpecification' in opts ? opts.zoneSpecification : null;
    var onError = opts && 'onError' in opts ? opts.onError : null;
    var errorHandler = null;
    if (onError != null) {
      errorHandler = dart.fn(function(self, parent, zone, error, stackTrace) {
        try {
          if (dart.is(onError, ZoneBinaryCallback)) {
            return self.parent.runBinary(onError, error, stackTrace);
          }
          return self.parent.runUnary(dart.as(onError, __CastType38), error);
        } catch (e) {
          var s = dart.stackTrace(e);
          if (dart.notNull(core.identical(e, error))) {
            return parent.handleUncaughtError(zone, error, stackTrace);
          } else {
            return parent.handleUncaughtError(zone, e, s);
          }
        }
      }, dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]);
    }
    if (zoneSpecification == null) {
      zoneSpecification = ZoneSpecification.new({handleUncaughtError: errorHandler});
    } else if (errorHandler != null) {
      zoneSpecification = ZoneSpecification.from(zoneSpecification, {handleUncaughtError: errorHandler});
    }
    var zone = Zone.current.fork({
      specification: zoneSpecification,
      zoneValues: zoneValues
    });
    if (onError != null) {
      return zone.runGuarded(body);
    } else {
      return zone.run(body);
    }
  }
  dart.fn(runZoned, dart.dynamic, [dart.functionType(dart.dynamic, [])], {
    zoneValues: core.Map,
    zoneSpecification: ZoneSpecification,
    onError: core.Function
  });
  var __CastType36 = dart.typedef('__CastType36', function() {
    return dart.functionType(dart.void, [Timer]);
  });
  var __CastType38 = dart.typedef('__CastType38', function() {
    return dart.functionType(dart.dynamic, [dart.dynamic]);
  });
  dart.copyProperties(exports, {get _hasDocument() {
      return (typeof document === 'undefined' ? 'undefined' : $traceurRuntime.typeof(document)) == 'object';
    }});
  exports.AsyncError = AsyncError;
  exports.Stream$ = Stream$;
  exports.Stream = Stream;
  exports.DeferredLibrary = DeferredLibrary;
  exports.DeferredLoadException = DeferredLoadException;
  exports.Future$ = Future$;
  exports.Future = Future;
  exports.TimeoutException = TimeoutException;
  exports.Completer$ = Completer$;
  exports.Completer = Completer;
  exports.scheduleMicrotask = scheduleMicrotask;
  exports.StreamSubscription$ = StreamSubscription$;
  exports.StreamSubscription = StreamSubscription;
  exports.EventSink$ = EventSink$;
  exports.EventSink = EventSink;
  exports.StreamView$ = StreamView$;
  exports.StreamView = StreamView;
  exports.StreamConsumer$ = StreamConsumer$;
  exports.StreamConsumer = StreamConsumer;
  exports.StreamSink$ = StreamSink$;
  exports.StreamSink = StreamSink;
  exports.StreamTransformer$ = StreamTransformer$;
  exports.StreamTransformer = StreamTransformer;
  exports.StreamIterator$ = StreamIterator$;
  exports.StreamIterator = StreamIterator;
  exports.StreamController$ = StreamController$;
  exports.StreamController = StreamController;
  exports.Timer = Timer;
  exports.ZoneCallback = ZoneCallback;
  exports.ZoneUnaryCallback = ZoneUnaryCallback;
  exports.ZoneBinaryCallback = ZoneBinaryCallback;
  exports.HandleUncaughtErrorHandler = HandleUncaughtErrorHandler;
  exports.RunHandler = RunHandler;
  exports.RunUnaryHandler = RunUnaryHandler;
  exports.RunBinaryHandler = RunBinaryHandler;
  exports.RegisterCallbackHandler = RegisterCallbackHandler;
  exports.RegisterUnaryCallbackHandler = RegisterUnaryCallbackHandler;
  exports.RegisterBinaryCallbackHandler = RegisterBinaryCallbackHandler;
  exports.ErrorCallbackHandler = ErrorCallbackHandler;
  exports.ScheduleMicrotaskHandler = ScheduleMicrotaskHandler;
  exports.CreateTimerHandler = CreateTimerHandler;
  exports.CreatePeriodicTimerHandler = CreatePeriodicTimerHandler;
  exports.PrintHandler = PrintHandler;
  exports.ForkHandler = ForkHandler;
  exports.ZoneSpecification = ZoneSpecification;
  exports.ZoneDelegate = ZoneDelegate;
  exports.Zone = Zone;
  exports.runZoned = runZoned;
});
