
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// console.log(names); // { John: 'John', Monica: 'Monica' }

const family = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-exportAsYouGo');
console.log(data); // { items: [ 'item1', 'item2' ], my_daughter: { name: 'Stephanie' } }
require('./7-iif')

// calling the sayHi function in 5-utils  using property names
sayHi(family.John); // Hello there John
sayHi(family.Monica); // Hello there Monica
sayHi('Cindy'); // Hello there Cindy