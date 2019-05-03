
// Lab 1

const operations = require('./operations');
// console.log(operations);

const params = process.argv.slice(2);
// console.log(params);

const currentOperationIndex = params.findIndex(item => item.startsWith('--'));
// console.log(currentOperationIndex);

const currentOperation = params.splice(currentOperationIndex , 1 ).map(e => e.substring(2));
// console.log(currentOperation);

let validate = require('./operations/validator');
const operands = params.map (e => validate(Number(e)));
// const operands = params.map (e => Number(e));

// console.log(operands);

let func = operations[currentOperation];
// console.log(func);

console.log(func(...operands));


