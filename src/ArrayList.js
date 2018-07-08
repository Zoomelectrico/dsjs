import { isNotNull, isNotUndefined, isNull, isUndefined, isFunction, isNotFunction, isArray, isNotArray } from './helper/check';
import error from './errors/errors';
/**
 * ArrayList class, this class allow you to use a LinkedList DS based on an array
 * @example
 * let list = new ArrayList();
 * @access public
 * @author Jose Roberto Quevedo
 * @version 1.0.0
 * @since 0.1.0
 */
export default class ArrayList {
  /**
   * @constructor this is constructor of the class, here an empty array is initialize
   * @since 0.1.0
   * @access public
   */
  constructor() {
    this.array = [];
  }

  /**
   * @function builder
   * This method is an interface for the class to create a list from the operation aplided to the other;
   * @access private
   * @since 0.1.0
   * @param {Array} array
   */
  builder(array) {
    let list = new ArrayList();
    list.array = array;
    return list;
  } 

  /**
   * @function isEmpty
   * This method say if a list is empty or not.
   * @access public
   * @since 0.1.0
   * @return { ArrayList } true if the list is empty or false otherwaise
   * @example
   * let boolean = list.isEmpty();
   */
  isEmpty() {
    return this.array.length <= 0;
  }

  /**
   * @function size
   * this method say what is the size of the list
   * @access public
   * @since 0.1.0
   * @return { ArrayList } 0 if the list is empty or an positive integer representing the list size
   * @example
   * let boolean = list.isEmpty();
   */
  size() {
    return this.array.length;
  }

  /**
   * @function addFirst
   * This method allow you to add an element in the first position of the list 
   * @param {any} data the element than you whan to add to the list
   * @access public
   * @since 0.1.0
   * @return { ArrayList } a new instance of the class with the elements of the other list and the new element added
   * @throws {Error001} when shit go bad
   * @throws {Error100} when data is null
   * @throws {Error101} when data is undefined
   * @example 
   * let l = list.addFirst(1);
   */
  addFirst(data) {
    if(isNotUndefined(data) && isNotNull(data)) {
      return this.builder([data, ...this.array]);
    } else if (isNull(data)) {
      throw error["100"];
    } else if (isUndefined(data)) {
      throw error["101"];
    } else {
      throw error["001"];
    }
  }

  /**
   * @function addLast
   * This method allow you to add an element in the last position of the list 
   * @param {any} data the element than you whan to add to the list
   * @access public
   * @since 0.1.0
   * @return { ArrayList } a new instance of the class with the elements of the other list and the new element added
   * @throws {Error001} when shit go bad
   * @throws {Error100} when data is null
   * @throws {Error101} when data is undefined
   * @example 
   * let l = list.addLast(1);
   */
  addLast(data) {
    if(isNotUndefined(data) && isNotNull(data)) {
      return this.builder([...this.array, data]);
    } else if (isNull(data)) {
      throw error["100"];
    } else if (isUndefined(data)) {
      throw error["101"];
    } else {
      throw error["001"];
    }
  }

  /**
   * @function add
   * This method allow you to add an element in the position i of the list 
   * @param {any} data the element than you whan to add to the list
   * @param {number} i the index value in which to add the element [0, list.size())
   * @access public
   * @since 0.1.0
   * @return { ArrayList } a new instance of the class with the elements of the other list and the new element added
   * @throws {Error001} when shit go bad
   * @throws {Error100} when data is null
   * @throws {Error101} when data is undefined
   * @throws {Error110} when the index is null
   * @throws {Error111} when the index is undefined
   * @throws {Error112} when the index is Not a Number
   * @example 
   * let l = list.add(1, 0);
   */
  add(data, i) {
    if(!isNaN(i) && isNotUndefined(data) && isNotUndefined(i) && isNotNull(data) && isNotNull(i)) {
      if (i === 0) {
        return this.addFirst(data);
      } else if (i === this.size() - 1) {
        return this.addLast(data);
      } else if (i < 0) {
        return this.add(data, this.size() + i);
      } else if (i >= this.size()) {
        throw error["113"];
      } else {
        let vec = [];
        for (let j = 0; j < this.array.length; j++) {
          if(i === j) {
            vec.push(data);
          }
          vec.push(this.array[i]);
          if(i === this.array.length - 1) {
            return this.builder(vec);
          }
        }
      }
    } else if (isNull(data)) {
      throw error["100"];
    } else if (isUndefined(data)) {
      throw error["101"];
    } else if (isNull(i)) {
      throw error["110"];
    } else if (isUndefined(i)) {
      throw error["111"];
    } else  if (isNaN(i)) {
      throw error["112"];
    } else {
      throw error["001"];
    }
  }

  /**
   * @function addAll
   * This method allow you to add an collection of elements to the list 
   * @param {any[]} collection an Array of elements to add 
   * @access public
   * @since 0.1.0
   * @return { ArrayList } a new instance of the class with the elements of the other list and the new elements added
   * @throws {Error001} when shit go bad
   * @throws {Error102} when collection is null
   * @throws {Error103} when collection is undefined
   * @throws {Error104} when collection is not an array
   * @example 
   * let l = list.addAll([1,'a',3]);
   */
  addAll(collection) {
    if(isNotUndefined(collection) && isNotNull(collection) && isArray(collection)) {
      return this.builder([...this.array, ...collection]);
    } else if (isNotArray(collection)) {
      throw error["104"];
    } else if (isNull(collection)) {
      throw error["102"];
    } else if (isUndefined(collection)) {
      throw error["103"];
    } else {
      throw error["001"];
    }
  }

  /**
   * @function deleteFirst
   * This method allow you to delete the first element of the list  
   * @access public
   * @since 0.1.0
   * @return { ArrayList } null is the list is empty or a new instance of the class with the elements of the other list except from the first
   * @example 
   * let l = list.deleteFirst();
   */
  deleteFirst() {
    if(this.isEmpty()) {
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
   * @return { ArrayList } null is the list is empty or a new instance of the class with the elements of the other list except from the first
   * @example 
   * let l = list.deleteLast();
   */
  deleteLast() {
    if(this.isEmpty()) {
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
   * @return { ArrayList } null if the list is empty a new instance of the class with the elements of the other list except the element i
   * @throws {Error001} when shit go bad
   * @throws {Error110} when i is null
   * @throws {Error111} when i is undefined
   * @throws {Error112} when i is Not a Number
   * @throws {Error113} when i is bigger than the list size
   * @example 
   * let l = list.delete(0);
   */
  delete(i) {
    if(this.isEmpty()) {
      return null;
    } else {
      if(isNotUndefined(i) && isNotNull(i) && !isNaN(i)) {
        if(i === 0) {
          return this.deleteFirst();
        } else if (i === this.size() - 1) {
          return this.deleteLast();
        } else if(i < 0) {
          this.delete(this.size() + i);
        } else if (i >= this.size()) {
          throw error["113"];
        } else {
          let vec = [];
          for (let j = 0; j < this.array.length; j++) {
            if(i !== j) {
              vec.push(this.array[i]);
            }
            if(i === this.array.length - 1) {
              return this.builder(vec);
            }
          } 
        }
      } else if (isNaN(i)) {
        throw error["112"];
      } else  if (isNull(i)) {
        throw error["110"];
      } else if (isUndefined(i)) {
        throw error["111"];
      } else {
        throw error["001"];
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
  clear() {
    if(!this.isEmpty()) {
      console.warn("DS.js Warning: You're clearing the list all the data will be erased. You have 5s to cancel the operation");
      setTimeout(() => {
        console.log("DS.js Warning: The data is being erased...");
        this.array = [];
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
  forEach(callback) {
    if(isFunction(callback) && !this.isEmpty()) {
      let vec = this.array;
      let list = this.builder(vec);
      for (let i = 0; i < vec.length; i++) {
        callback(vec[i], i, list);  
      } 
    } else if (this.isEmpty()) {
      throw error["200"];
    } else if (isNotFunction(callback)) {
      throw error["300"];
    } else {
      throw error["001"]
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
   * @return { ArrayList } An instance of the class with the mutated elements 
   * @example 
   * let l = list.map((x,i,vec) => x * x);
   */
  map(callback) {
    if(!this.isEmpty() && isFunction(callback)) {
      let vec = this.array;
      let aux = [];
      for (let i = 0; i < vec.length; i++) {
        aux.push(callback(vec[i], i, vec));
        if(i === vec.length - 1) {
          return this.builder(vec);
        } 
      }
    } else if (this.isEmpty()) {
      throw error["200"];
    } else if (isNotFunction(callback)) {
      throw error["300"];
    } else {
      throw error["001"];
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
  toString() {
    if(this.isEmpty()) {
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
  toJSON() {
    if(this.isEmpty()) {
      return null;
    } else {
      let json = {};
      for (let i = 0; i < this.array.length; i++) {
        json[i] = this.array[i];
        if (i === this.array - 1) {
          return json;
        }
      }
    }
  }
}