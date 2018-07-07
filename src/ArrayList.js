import { isNotNull, isNotUndefined, isNull, isUndefined, isFunction, isNotFunction, isArray, isNotArray } from './helper/check';
import error from './errors/errors';

export default class ArrayList {
  
  constructor() {
    this.array = [];
  }

  builder(array) {
    let list = new ArrayList();
    list.array = array;
    return list;
  } 

  isEmpty() {
    return this.array.length <= 0;
  }

  size() {
    return this.array.length;
  }

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

  deleteFirst() {
    if(this.isEmpty()) {
      return null;
    } else {
      return this.builder(this.array.slice(1, this.array.length));
    }
  }

  deleteLast() {
    if(this.isEmpty()) {
      return null;
    } else {
      return this.builder(this.array.slice(0, this.array.length - 1));
    }
  }

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

  toString() {
    if(this.isEmpty()) {
      return null;
    } else {
      return this.array.join();
    }
  }

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