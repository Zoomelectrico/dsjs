import { isNotUndefined, isNotNull, isNotFunction, isNotArray, isUndefined, isNull, isFunction, isArray } from './helper/check';
import error from './errors/errors';
import Node from './Node';

/**
 * @class
 * @since 0.2.0
 * @access public
 * @author Jose Roberto Quevedo
 * @example
 * let list = new List();
 */
export default class List {
 
  /**
  * @constructor
  * @access public
  * @since 0.2.0 
  */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @function builder
   * @access private
   * @since 0.2.0
   * @param {List} list 
   * @return 
   */
  builder(list) {
    let node = list.head;
    let newList = new List();
    while (node) {
      newList.addLastP(list);
    }
    return newList;
  }

  /**
   * @function isEmpty
   * @access public
   * @since 0.2.0
   * @return
   * @example
   * let bool = list.isEmpty();
   */
  isEmpty = () => isNull(head);

  /**
   * @function size
   * @access public
   * @since 0.2.0
   * @return {number}
   * @example
   * let size = list.size();
   */
  size() {
    if (this.isEmpty()) {
      return 0;
    } else {
      let aux = this.head;
      let i = 0;
      while(aux) {
        aux = aux.getNext();
        i++;
      }
      return i;
    }
  }

  /**
   * @function addFirstP
   * @param {any} data
   * @access private
   * @since 0.2.0 
   */
  addFirstP(data) {
    if (this.isEmpty()) {
      this.head = this.tail = new Node(data);
      this.head.setNext(this.tail);
      this.tail.setPrev(head);
    } else {
      let node = new Node(data);
      node.setNext(this.head);
      this.head.setPrev(node);
      this.head = node;
    }
  }

  /**
   * @function addFirst
   * This method allow you to add an element in the first position of the list 
   * @param {any} data the element than you whan to add to the list
   * @access public
   * @since 0.2.0
   * @return { List } a new instance of the class with the elements of the other list and the new element added
   * @throws {Error001} when shit go bad
   * @throws {Error100} when data is null
   * @throws {Error101} when data is undefined
   * @example 
   * let l = list.addFirst(1);
   */
  addFirst(data) {
    if (isNotUndefined(data) && isNotNull(data)) {
      let list = this.builder(this);
      list.addFirstP(data);
      return list;
    } else if (isNull(data)) {
      throw error["101"];
    } else if (isUndefined(data)) {
      throw error["102"];
    } else {
      throw error["001"];
    }
  }

  /**
   * @function addLastP
   * @param {any} data
   * @access private
   * @since 0.2.0 
   */
  addLastP(data) {
    if (this.isEmpty()) {
      this.head = this.head = new Node(data);
      this.head.setNext(this.tail);
      this.tail.setPrev(this.head);
    } else {
      let node = new Node(data);
      this.tail.setNext(node);
      node.setPrev(this.tail);
      this.tail = node;
    }
  }

  /**
   * @function addLast
   * This method allow you to add an element in the last position of the list 
   * @param {any} data the element than you whan to add to the list
   * @access public
   * @since 0.2.0
   * @return { List } a new instance of the class with the elements of the other list and the new element added
   * @throws {Error001} when shit go bad
   * @throws {Error100} when data is null
   * @throws {Error101} when data is undefined
   * @example 
   * let l = list.addLast(1);
   */
  addLast(data) {
    if (isNotUndefined(data) && isNotNull(data)) {
      let list = this.builder(this);
      list.addLastP(data);
      return list;
    } else if (isNull(data)) {
      throw error["101"];
    } else if (isUndefined(data)) {
      throw error["102"];
    } else {
      throw error["001"];
    }
  }

  /**
   * @function addP
   * @param {any} data
   * @param {number} i
   * @access private
   * @since 0.2.0 
   */
  add(data, i) {
    if (isNotUndefined(data) &&  isNotUndefined(i) && isNotNull(data) && isNotNull(i) && !isNaN(i)) {
      let list = this.builder(this);
      list.addP(data, i);
      return list;
    } else if (isNull(data)) {
      throw error["101"];
    } else if (isUndefined(data)) {
      throw error["102"];
    } else if (isNull(i)) {
      throw error["110"]; 
    } else if (isUndefined(i)) {
      throw error["111"];
    } else if (isNaN(i)) {
      throw error["112"];
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
   * @since 0.2.0
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
  addP(data, i) {
    if (this.isEmpty() || i === 0) {
      this.addFirstP(data);
    } else if (i === size() - 1) {
      this.addLastP(data);
    } else if (i < 0) {
      this.addP(data, this.size() + i);
    } else if (i >= this.size()) {
      throw error["113"];
    } else {
      let node = new Node(data);
      let aux = this.head;
      for (let j = 0; j < i; j++) {
        aux = aux.getNext();
      }
      node.setNext(aux.getNext())
      node.setPrev(aux);
      aux.getNext().setPrev(node);
      aux.setNext(node);
    }
  }

  deleteFirstP() {
    if (this.isEmpty()) {
      return null;
    } else {
      let temp = this.head;
      this.head = this.head.getNext();
      this.head.setPrev(null);
      temp.setNext(null);
      return temp.getData();
    }
  }

  /**
   * @function deleteFirst
   * This method allow you to delete the first element of the list  
   * @access public
   * @since 0.2.0
   * @return { List } null is the list is empty or a new instance of the class with the elements of the other list except from the first
   * @example 
   * let { l, data } = list.deleteFirst();
   */
  deleteFirst() {
    if (this.isEmpty()) {
      return null;
    } else {
      let list = this.builder(this);
      let data = list.deleteFirstP();
      return { list, data };
    }
  }

  deleteLastP() {
    if (this.isEmpty()) {
      return null;
    } else {
      let temp = this.tail;
      this.tail = this.tail.getPrev();
      this.tail.setNext(null);
      temp.setPrev(null);
      return temp.getData();
    }
  }

  /**
   * @function deleteLast
   * This method allow you to last the first element of the list  
   * @access public
   * @since 0.2.0
   * @return { List } null is the list is empty or a new instance of the class with the elements of the other list except from the first
   * @example 
   * let { l, data } = list.deleteLast();
   */
  deleteLast() {
    if(this.isEmpty()) {
      return null;
    } else {
      let list = this.builder(this);
      let data = this.deleteLastP();
      return { list, data };
    }
  }

  deleteP(i) {
    if(this.isEmpty()) {
      return null 
    } else {
      let aux = this.head;
      for (let j = 0; j < i; j++) {
        aux = aux.getNext();
      }
      let temp = aux.getNext();
      aux.getNext().getNext().setPrev(aux);
      aux.setNext(aux.getNext().getNext());
      temp.setNext(null);
      temp.setPrev(null);
      return temp.getData();
    }
  } 

  /**
   * @function delete
   * This method allow you to delete the element i from the list
   * @param {number} i the index of the element to eliminate [0, list.size())
   * @access public
   * @since 0.2.0
   * @return { List } null if the list is empty a new instance of the class with the elements of the other list except the element i
   * @throws {Error001} when shit go bad
   * @throws {Error110} when i is null
   * @throws {Error111} when i is undefined
   * @throws {Error112} when i is Not a Number
   * @throws {Error113} when i is bigger than the list size
   * @example 
   * let { list, data } = list.delete(0);
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
          let list = this.builder(this);
          let data = list.delete(i);
          return { list, data };
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
   * @since 0.2.0
   * @example
   * list.clear();
   */
  clear() {
    if(!this.isEmpty()) {
      console.warn("DS.js Warning: You're clearing the list all the data will be erased. You have 5s to cancel the operation");
      setTimeout(() => {
        console.log("DS.js Warning: The data is being erased...");
        this.head = this.tail = null;
      }, 5000);
    } else {
      console.log("Your list doesn't have any data to delete");
    }
  }

  /**
   * @function forEach
   * This method allow us to iterate over the list
   * @param {function (value: any, i: number, list: List)} callback this is a callback function that will be execute for every element in the list, it should not mutated the element of the list
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
      let aux = this.head;
      let list = this.builder(this);
      for (let i = 0; i < list.size(); i++) {
        callback(aux.getData(), i, list);  
        aux = aux.getNext();
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
   * @since 0.2.0
   * @access public
   * @throws {Error001} when shit go bad
   * @throws {Error200} when the list is empty
   * @throws {Error300} when callback is not a function
   * @return { List } An instance of the class with the mutated elements 
   * @example 
   * let l = list.map((x,i,vec) => x * x);
   */
  map(callback) {
    if(!this.isEmpty() && isFunction(callback)) {
      let aux = this.head;
      let l = new List();
      const list = this.builder(this);
      for (let i = 0; i < list.size(); i++) {
        l.addLastP(callback(aux.getData(), i, list));
        if(i === list.size() - 1) {
          return l;
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


}