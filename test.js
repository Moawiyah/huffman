const { insertNode, buildTree, getCode } = require('./huffman');


// const inputData = [
//     { letter: 'A', probability: 0.3 },
//     { letter: 'B', probability: 0.3 },
//     { letter: 'C', probability: 0.2 },
//     { letter: 'D', probability: 0.1 },
//     { letter: 'E', probability: 0.1 },
// ];

// const inputData = [
//     { letter: 'c', probability: 0.3 },
//     { letter: 'B', probability: 0.25 },
//     { letter: 'D', probability: 0.2 },
//     { letter: 'A', probability: 0.15 },
//     { letter: 'E', probability: 0.1 },
// ];

const inputData = [
    { letter: 'A', probability: 0.3 },
    { letter: 'B', probability: 0.2 },
    { letter: 'C', probability: 0.3 },
    { letter: 'D', probability: 0.2 },
];      


const nodes =  (inputData);
console.log(nodes);
console.log(`Tree`);
const data = buildTree(nodes);
console.log(data);
console.log(`OutPut`);
const generateCodes = getCode(data);
console.log(generateCodes);