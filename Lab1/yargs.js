// Lab 2

const yargs = require('yargs');

const operations = require('./operations');
const params = process.argv.slice(2);
const currentOperationIndex = params.findIndex(item => item.startsWith('--'));
const currentOperation = params.splice(currentOperationIndex , 1 ).map(e => e.substring(2));
// const operands = params.map (e => validate(Number(e)));
let func = operations[currentOperation];

let { argv } = yargs.array('add');
// console.log(argv);    
const operands = argv.add;
// console.log(operands);
console.log(func(...operands));

 
