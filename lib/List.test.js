"use strict";

var L = require('../lib/List').default;
var log = function log(x) {
  return console.log(x);
};
var log2 = function log2() {
  return console.log("=======================================");
};

var l = new L();
log2();
l = l.addFirst(1);
log(l);
log2();
l = l.addLast(2);
log(l);
log2();
l = l.addLast(4);
log(l);
log2();
l = l.addLast(5);
log(l);
log2();
l = l.add(3, 2);
log(l);
log2();
log(l.indexOf(3));
log2();
log(l.sort(function (x, y) {
  return y > x;
}));
log(l.addAll([6, 7, 8]));