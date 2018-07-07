'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _check = require('./helper/check');

var _errors = require('./errors/errors');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayList = function () {
  function ArrayList() {
    _classCallCheck(this, ArrayList);

    this.array = [];
  }

  _createClass(ArrayList, [{
    key: 'builder',
    value: function builder(array) {
      var list = new ArrayList();
      list.array = array;
      return list;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.array.length <= 0;
    }
  }, {
    key: 'size',
    value: function size() {
      return this.array.length;
    }
  }, {
    key: 'addFirst',
    value: function addFirst(data) {
      if ((0, _check.isNotUndefined)(data) && (0, _check.isNotNull)(data)) {
        return this.builder([data].concat(_toConsumableArray(this.array)));
      } else if ((0, _check.isNull)(data)) {
        throw _errors2.default["100"];
      } else if ((0, _check.isUndefined)(data)) {
        throw _errors2.default["101"];
      } else {
        throw _errors2.default["001"];
      }
    }
  }, {
    key: 'addLast',
    value: function addLast(data) {
      if ((0, _check.isNotUndefined)(data) && (0, _check.isNotNull)(data)) {
        return this.builder([].concat(_toConsumableArray(this.array), [data]));
      } else if ((0, _check.isNull)(data)) {
        throw _errors2.default["100"];
      } else if ((0, _check.isUndefined)(data)) {
        throw _errors2.default["101"];
      } else {
        throw _errors2.default["001"];
      }
    }
  }, {
    key: 'add',
    value: function add(data, i) {
      if (!isNaN(i) && (0, _check.isNotUndefined)(data) && (0, _check.isNotUndefined)(i) && (0, _check.isNotNull)(data) && (0, _check.isNotNull)(i)) {
        if (i === 0) {
          return this.addFirst(data);
        } else if (i === this.size() - 1) {
          return this.addLast(data);
        } else if (i < 0) {
          return this.add(data, this.size() + i);
        } else if (i >= this.size()) {
          throw _errors2.default["113"];
        } else {
          var vec = [];
          for (var j = 0; j < this.array.length; j++) {
            if (i === j) {
              vec.push(data);
            }
            vec.push(this.array[i]);
            if (i === this.array.length - 1) {
              return this.builder(vec);
            }
          }
        }
      } else if ((0, _check.isNull)(data)) {
        throw _errors2.default["100"];
      } else if ((0, _check.isUndefined)(data)) {
        throw _errors2.default["101"];
      } else if ((0, _check.isNull)(i)) {
        throw _errors2.default["110"];
      } else if ((0, _check.isUndefined)(i)) {
        throw _errors2.default["111"];
      } else if (isNaN(i)) {
        throw _errors2.default["112"];
      } else {
        throw _errors2.default["001"];
      }
    }
  }, {
    key: 'addAll',
    value: function addAll(collection) {
      if ((0, _check.isNotUndefined)(collection) && (0, _check.isNotNull)(collection) && (0, _check.isArray)(collection)) {
        return this.builder([].concat(_toConsumableArray(this.array), _toConsumableArray(collection)));
      } else if ((0, _check.isNotArray)(collection)) {
        throw _errors2.default["104"];
      } else if ((0, _check.isNull)(collection)) {
        throw _errors2.default["102"];
      } else if ((0, _check.isUndefined)(collection)) {
        throw _errors2.default["103"];
      } else {
        throw _errors2.default["001"];
      }
    }
  }, {
    key: 'deleteFirst',
    value: function deleteFirst() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.builder(this.array.slice(1, this.array.length));
      }
    }
  }, {
    key: 'deleteLast',
    value: function deleteLast() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.builder(this.array.slice(0, this.array.length - 1));
      }
    }
  }, {
    key: 'delete',
    value: function _delete(i) {
      if (this.isEmpty()) {
        return null;
      } else {
        if ((0, _check.isNotUndefined)(i) && (0, _check.isNotNull)(i) && !isNaN(i)) {
          if (i === 0) {
            return this.deleteFirst();
          } else if (i === this.size() - 1) {
            return this.deleteLast();
          } else if (i < 0) {
            this.delete(this.size() + i);
          } else if (i >= this.size()) {
            throw _errors2.default["113"];
          } else {
            var vec = [];
            for (var j = 0; j < this.array.length; j++) {
              if (i !== j) {
                vec.push(this.array[i]);
              }
              if (i === this.array.length - 1) {
                return this.builder(vec);
              }
            }
          }
        } else if (isNaN(i)) {
          throw _errors2.default["112"];
        } else if ((0, _check.isNull)(i)) {
          throw _errors2.default["110"];
        } else if ((0, _check.isUndefined)(i)) {
          throw _errors2.default["111"];
        } else {
          throw _errors2.default["001"];
        }
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this = this;

      if (!this.isEmpty()) {
        console.warn("DS.js Warning: You're clearing the list all the data will be erased. You have 5s to cancel the operation");
        setTimeout(function () {
          console.log("DS.js Warning: The data is being erased...");
          _this.array = [];
        }, 5000);
      } else {
        console.log("Your list doesn't have any data to delete");
      }
    }
  }, {
    key: 'forEach',
    value: function forEach(callback) {
      if ((0, _check.isFunction)(callback) && !this.isEmpty()) {
        var vec = this.array;
        var list = this.builder(vec);
        for (var i = 0; i < vec.length; i++) {
          callback(vec[i], i, list);
        }
      } else if (this.isEmpty()) {
        throw _errors2.default["200"];
      } else if ((0, _check.isNotFunction)(callback)) {
        throw _errors2.default["300"];
      } else {
        throw _errors2.default["001"];
      }
    }
  }, {
    key: 'map',
    value: function map(callback) {
      if (!this.isEmpty() && (0, _check.isFunction)(callback)) {
        var vec = this.array;
        var aux = [];
        for (var i = 0; i < vec.length; i++) {
          aux.push(callback(vec[i], i, vec));
          if (i === vec.length - 1) {
            return this.builder(vec);
          }
        }
      } else if (this.isEmpty()) {
        throw _errors2.default["200"];
      } else if ((0, _check.isNotFunction)(callback)) {
        throw _errors2.default["300"];
      } else {
        throw _errors2.default["001"];
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.array.join();
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      if (this.isEmpty()) {
        return null;
      } else {
        var json = {};
        for (var i = 0; i < this.array.length; i++) {
          json[i] = this.array[i];
          if (i === this.array - 1) {
            return json;
          }
        }
      }
    }
  }]);

  return ArrayList;
}();

exports.default = ArrayList;