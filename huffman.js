class Node {
    // Time complexity is equal to O(1);
    constructor(letter, probability) {
        this.letter = letter;
        this.probability = probability;
        this.left = null;
        this.right = null;
    }
}

// Create an instance of the node with sorting array
// Time complexity is equal to O(n log n), Where sort = O(n log n);
function insertNode(inputData) {
    const data = inputData.map(item => new Node(item.letter, item.probability));
    return data.sort((a, b) => b.probability - a.probability).reverse();
}

// Build Huffman Tree
// Time complexity is equal to O(n log n), Where sort = O(n log n) and loop = n/2;
function buildTree(nodes) {
    let rootNode;

    for (let i = 0; i < nodes.length - 1; i + 2) {
        rootNode = new Node(null, nodes[i].probability + nodes[i + 1].probability);
        rootNode.left = nodes[i];
        rootNode.right = nodes[i + 1];
        nodes.splice(0, 2);
        nodes.unshift(rootNode);
        nodes.sort((a, b) => a.probability - b.probability);
    }
    return nodes[0];
}

let codes = [];

// Generate Huffman Codes
// Time complexity is equal to O(n), Where n is the number of nodes in the tree
function getCode(node, code = "") {
    if (node.letter != null) {
        codes.push({ letter: node.letter, code: code })
    } else {
        if (node.right != null) {
            getCode(node.right, code + "1")
        }
        if (node.left != null) {
            getCode(node.left, code + "0")
        }
    }
    return codes;
}


module.exports = {
    insertNode,
    buildTree,
    getCode
}








