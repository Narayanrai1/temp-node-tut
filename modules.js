//modules
//every file is module
//Encapsulated code in which we only share what we want  
const {john , peter} = require('./4-names')
const sayHi = require('./5-utils');
// console.log(names);
sayHi('susan');
sayHi(peter);
sayHi(john);
// console.log(module);