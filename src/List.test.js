const L = require('../lib/List').default;
const log = x => console.log(x);
const log2 = () => console.log("=======================================");

let l = new L();
log2();
l = l.addFirst(1);
log(l);
log2();
l = l.addLast(2);
log(l);
log2();
l = l.addLast(4)
log(l);
log2();
l = l.addLast(5)
log(l);
log2();
l = l.add(3, 2);
log(l);
log2();
log(l.indexOf(3));
log2();
log(l.sort((x, y) => y > x));
log(l.addAll([6,7,8]));