var PaginationHelper = require('./PaginationHelper.js');

var pag = new PaginationHelper(['a','b','c','d','e','f'], 4);
var pag2 = new PaginationHelper([4,5,6], 2);


console.log('pag.itemCount: ', pag.itemCount());
console.log('pag.pageCount: ', pag.pageCount());

console.log('pag.pageItemsCount(0): ', pag.pageItemCount(0), " //should be 4");
console.log('pag.pageItemsCount(1): ', pag.pageItemCount(1), " //should be 2");
console.log('pag.pageItemsCount(2): ', pag.pageItemCount(2), " //should be -1");

console.log('pag.pageIndex(0): ', pag.pageIndex(0), " //should be 0");
console.log('pag.pageIndex(5): ', pag.pageIndex(5), " //should be 1");
console.log('pag.pageIndex(2): ', pag.pageIndex(2), " //should be 0");
console.log('pag.pageIndex(20): ', pag.pageIndex(20), " //should be -1");
console.log('pag.pageIndex(-10): ', pag.pageIndex(-10), " //should be -1");


console.log('pag2.itemCount: ', pag2.itemCount());
console.log('pag2.pageCount: ', pag2.pageCount());
console.log('pag2.pageIndex(3): ', pag2.pageIndex(3), " //should be -1");



