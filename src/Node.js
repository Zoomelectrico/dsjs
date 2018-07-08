/**
 * @class Node
 * @author Jose Roberto Quevedo
 * @access public
 * @since 0.2.0
 * @example
 * let node = new Node();
 */
export default class Node {

  /**
   * @constructor
   * @param {any} data
   * @access public
   * @since 0.2.0 
   */
  constructor(data) {

    this.data = data;
    this.prev = null;
    this.next = null;
  }

  /**
   * @function
   * @param {any} next
   * @access public
   * @since 0.2.0
   * @example
   * node.setNext(new Node(2));
   */
  setNext(next) {
    this.next = next;
  }

  /**
   * @function
   * @access public
   * @since 0.2.0
   * @return the following node or null
   * @example
   * let node2 = node.getNext();
   */
  getNext() {
    return this.next;
  }

  /**
   * @function setPrev
   * @param {any} prev
   * @access public
   * @since 0.2.0
   * @example
   * node.setPrev(new Node(2));
   */
  setPrev(prev) {
    this.prev = prev;
  }

  /**
   * @function getPrev
   * @access public
   * @since 0.2.0
   * @return the previuss node or null
   * @example
   * let node2 = node.getPrev();
   */
  getNext() {
    return this.prev;
  }

  /**
   * @function setData
   * @param {any} data
   * @access public
   * @since 0.2.0
   * @example
   * node.setData(1); 
   */
  setData(data) {
    this.data = data;
  }

  /**
   * @function getData
   * @access public
   * @since 0.2.0
   * @example
   * let data = node.getData();
   */
  getData() {
    return this.data;
  }

}