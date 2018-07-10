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

/**
 * List class, this class allow you to use a LinkedList DS based on an array
 * @example
 * let list = new List();
 * @access public
 * @author Jose Roberto Quevedo
 * @version 1.0.0
 * @since 0.1.0
 */
var List = function () {
  /**
   * @constructor this is constructor of the class, here an empty array is initialize
   * @since 0.1.0
   * @access public
   */
  function List() {
    _classCallCheck(this, List);

    this.array = [];
  }

  /**
   * @function builder
   * This method is an interface for the class to create a list from the operation aplided to the other;
   * @access private
   * @since 0.1.0
   * @param {Array} array
   */


  _createClass(List, [{
    key: 'builder',
    value: function builder(array) {
      var list = new List();
      list.array = array;
      return list;
    }

    /**
     * @function isEmpty
     * This method say if a list is empty or not.
     * @access public
     * @since 0.1.0
     * @return { List } true if the list is empty or false otherwaise
     * @example
     * let boolean = list.isEmpty();
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.array.length <= 0;
    }

    /**
     * @function size
     * this method say what is the size of the list
     * @access public
     * @since 0.1.0
     * @return { List } 0 if the list is empty or an positive integer representing the list size
     * @example
     * let boolean = list.isEmpty();
     */

  }, {
    key: 'size',
    value: function size() {
      return this.array.length;
    }

    /**
     * @function addFirst
     * This method allow you to add an element in the first position of the list 
     * @param {any} data the element than you whan to add to the list
     * @access public
     * @since 0.1.0
     * @return { List } a new instance of the class with the elements of the other list and the new element added
     * @throws {Error001} when shit go bad
     * @throws {Error100} when data is null
     * @throws {Error101} when data is undefined
     * @example 
     * let l = list.addFirst(1);
     */

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

    /**
     * @function addLast
     * This method allow you to add an element in the last position of the list 
     * @param {any} data the element than you whan to add to the list
     * @access public
     * @since 0.1.0
     * @return { List } a new instance of the class with the elements of the other list and the new element added
     * @throws {Error001} when shit go bad
     * @throws {Error100} when data is null
     * @throws {Error101} when data is undefined
     * @example 
     * let l = list.addLast(1);
     */

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

    /**
     * @function add
     * This method allow you to add an element in the position i of the list 
     * @param {any} data the element than you whan to add to the list
     * @param {number} i the index value in which to add the element [0, list.size())
     * @access public
     * @since 0.1.0
     * @return { List } a new instance of the class with the elements of the other list and the new element added
     * @throws {Error001} when shit go bad
     * @throws {Error100} when data is null
     * @throws {Error101} when data is undefined
     * @throws {Error110} when the index is null
     * @throws {Error111} when the index is undefined
     * @throws {Error112} when the index is Not a Number
     * @example 
     * let l = list.add(1, 0);
     */

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

    /**
     * @function addAll
     * This method allow you to add an collection of elements to the list 
     * @param {any[]} collection an Array of elements to add 
     * @access public
     * @since 0.1.0
     * @return { List } a new instance of the class with the elements of the other list and the new elements added
     * @throws {Error001} when shit go bad
     * @throws {Error102} when collection is null
     * @throws {Error103} when collection is undefined
     * @throws {Error104} when collection is not an array
     * @example 
     * let l = list.addAll([1,'a',3]);
     */

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

    /**
     * @function deleteFirst
     * This method allow you to delete the first element of the list  
     * @access public
     * @since 0.1.0
     * @return { List } null is the list is empty or a new instance of the class with the elements of the other list except from the first
     * @example 
     * let l = list.deleteFirst();
     */

  }, {
    key: 'deleteFirst',
    value: function deleteFirst() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.builder(this.array.slice(1, this.array.length));
      }
    }

    /**
     * @function deleteLast
     * This method allow you to last the first element of the list  
     * @access public
     * @since 0.1.0
     * @return { List } null is the list is empty or a new instance of the class with the elements of the other list except from the first
     * @example 
     * let l = list.deleteLast();
     */

  }, {
    key: 'deleteLast',
    value: function deleteLast() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.builder(this.array.slice(0, this.array.length - 1));
      }
    }

    /**
     * @function delete
     * This method allow you to delete the element i from the list
     * @param {number} i the index of the element to eliminate [0, list.size())
     * @access public
     * @since 0.1.0
     * @return { List } null if the list is empty a new instance of the class with the elements of the other list except the element i
     * @throws {Error001} when shit go bad
     * @throws {Error110} when i is null
     * @throws {Error111} when i is undefined
     * @throws {Error112} when i is Not a Number
     * @throws {Error113} when i is bigger than the list size
     * @example 
     * let l = list.delete(0);
     */

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

    /**
     * @function clear
     * WARNING: This method delete all the element of the original list.
     * This should be used carefully
     * @access public
     * @since 0.1.0
     * @example
     * list.clear();
     */

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

    /**
     * @function forEach
     * This method allow us to iterate over the list
     * @param {function (value: any, i: number, vec: array)} callback this is a callback function that will be execute for every element in the list, it should not mutated the element of the list
     * @since 0.1.0
     * @access public
     * @throws {Error001} when shit go bad
     * @throws {Error200} when the list is empty
     * @throws {Error300} when callback is not a function 
     * @example
     * list.forEach((x,i,vec) => {
     *  console.log(`Value: ${x}, Index: ${i}`);
     * });
     */

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

    /**
     * @function map
     * This method allow us to map over the list
     * @param {function (value: any, i: number, vec: array)} callback this is a callback function that will be execute for every element in the list, and it should mutated the element of the list
     * @since 0.1.0
     * @access public
     * @throws {Error001} when shit go bad
     * @throws {Error200} when the list is empty
     * @throws {Error300} when callback is not a function
     * @return { List } An instance of the class with the mutated elements 
     * @example 
     * let l = list.map((x,i,vec) => x * x);
     */

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

    /**
     * @function toString
     * This method convert the current list to and string, just like this: 1,2,3,4
     * @access public
     * @since 0.1.0
     * @return null if the list is empty or a string representig the list
     * @example
     * let string = list.string();
     */

  }, {
    key: 'toString',
    value: function toString() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.array.join();
      }
    }

    /**
     * @function toJSON
     * This method parse the list to a JSON
     * @access public
     * @since 0.1.0
     * @return null if the list is empty or an object representing the list
     * @example
     * let json = list.toJSON();
     */

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

  return List;
}();

exports.default = List;