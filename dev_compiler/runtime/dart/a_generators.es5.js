dart_library.library('dart/_generators', null, [], ['dart/_operations', 'dart/_js_helper', 'dart/core', 'dart/collection', 'dart/async'], function(exports, _operations, _js_helper, core, collection, async) {
  'use strict';
  var _jsIterator = Symbol('_jsIterator');
  var _current = Symbol('_current');
  function syncStar(gen, E) {
    for (var args = [],
        $__2 = 2; $__2 < arguments.length; $__2++)
      args[$__2 - 2] = arguments[$__2];
    var SyncIterable_E = _js_helper.SyncIterable$(E);
    return new SyncIterable_E(gen, args);
  }
  exports.syncStar = syncStar;
  function async_(gen, T) {
    for (var args = [],
        $__3 = 2; $__3 < arguments.length; $__3++)
      args[$__3 - 2] = arguments[$__3];
    var iter;
    function onValue(res) {
      if (res === void 0)
        res = null;
      return next(iter.next(res));
    }
    function onError(err) {
      return next(iter.throw(err));
    }
    function next(ret) {
      if (ret.done)
        return ret.value;
      var future = ret.value;
      if (!_operations.instanceOf(future, async.Future$)) {
        future = async.Future.value(future);
      }
      return future.then(onValue, {onError: onError});
    }
    return async.Future$(T).new(function() {
      iter = gen.apply((void 0), $traceurRuntime.spread(args))[Symbol.iterator]();
      return onValue();
    });
  }
  exports.async = async_;
  var _AsyncStarStreamController = function() {
    function _AsyncStarStreamController(generator, T, args) {
      var $__1 = this;
      this.isAdding = false;
      this.isWaiting = false;
      this.isScheduled = false;
      this.isSuspendedAtYield = false;
      this.canceler = null;
      this.iterator = generator.apply((void 0), $traceurRuntime.spread([this], args))[Symbol.iterator]();
      this.controller = async.StreamController$(T).new({
        onListen: function() {
          return $__1.scheduleGenerator();
        },
        onResume: function() {
          return $__1.onResume();
        },
        onCancel: function() {
          return $__1.onCancel();
        }
      });
    }
    return ($traceurRuntime.createClass)(_AsyncStarStreamController, {
      onResume: function() {
        if (this.isSuspendedAtYield) {
          this.scheduleGenerator();
        }
      },
      onCancel: function() {
        if (this.controller.isClosed) {
          return null;
        }
        if (this.canceler == null) {
          this.canceler = async.Completer.new();
          this.scheduleGenerator();
        }
        return this.canceler.future;
      },
      close: function() {
        if (this.canceler != null && !this.canceler.isCompleted) {
          this.canceler.complete();
        }
        this.controller.close();
      },
      scheduleGenerator: function() {
        var $__1 = this;
        if (this.isScheduled || this.controller.isPaused || this.isAdding || this.isWaiting) {
          return;
        }
        this.isScheduled = true;
        async.scheduleMicrotask(function() {
          return $__1.runBody();
        });
      },
      runBody: function(opt_awaitValue) {
        var $__1 = this;
        this.isScheduled = false;
        this.isSuspendedAtYield = false;
        this.isWaiting = false;
        var iter;
        try {
          iter = this.iterator.next(opt_awaitValue);
        } catch (e) {
          this.addError(e, _operations.stackTrace(e));
          this.close();
          return;
        }
        if (iter.done) {
          this.close();
          return;
        }
        if (this.isSuspendedAtYield || this.isAdding)
          return;
        this.isWaiting = true;
        var future = iter.value;
        if (!_operations.instanceOf(future, async.Future$)) {
          future = async.Future.value(future);
        }
        return future.then(function(x) {
          return $__1.runBody(x);
        }, {onError: function(e, s) {
            return $__1.throwError(e, s);
          }});
      },
      add: function(event) {
        if (!this.controller.hasListener)
          return true;
        this.controller.add(event);
        this.scheduleGenerator();
        this.isSuspendedAtYield = true;
        return false;
      },
      addStream: function(stream) {
        var $__1 = this;
        if (!this.controller.hasListener)
          return true;
        this.isAdding = true;
        this.controller.addStream(stream, {cancelOnError: false}).then(function() {
          $__1.isAdding = false;
          $__1.scheduleGenerator();
        }, {onError: function(e, s) {
            return $__1.throwError(e, s);
          }});
      },
      throwError: function(error, stackTrace) {
        try {
          this.iterator.throw(error);
        } catch (e) {
          this.addError(e, stackTrace);
        }
      },
      addError: function(error, stackTrace) {
        if ((this.canceler != null) && !this.canceler.isCompleted) {
          this.canceler.completeError(error, stackTrace);
          return;
        }
        if (!this.controller.hasListener)
          return;
        this.controller.addError(error, stackTrace);
      }
    }, {});
  }();
  function asyncStar(gen, T) {
    for (var args = [],
        $__4 = 2; $__4 < arguments.length; $__4++)
      args[$__4 - 2] = arguments[$__4];
    return new _AsyncStarStreamController(gen, T, args).controller.stream;
  }
  exports.asyncStar = asyncStar;
});
