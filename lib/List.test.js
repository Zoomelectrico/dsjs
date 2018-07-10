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
l = l.map(function (x) {
  return 2 * x;
});
log(l);
log2();
log(l.toString());
log(l.toJSON());