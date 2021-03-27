// graph
const nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const edges = [
    [0, 1],
    [1, 0],
    [1, 4],
    [4, 1],
    [4, 7],
    [8, 9],
    [9, 8],
    [6, 0],
    [0, 6],
    [6, 9],
    [8, 5],
    [5, 8],
    [8, 2],
    [2, 7],
    [3, 0],
    [3, 4],
    [3, 7],
    [3, 9]
];

const matrix = getMatrix(nodes, edges);
console.log(matrix)
const friends = getFreinds(matrix, 8);
console.log(friends)

function getFreinds(matrix, elementId) {
    let friends = []
    for(let i = 0; i < matrix[elementId].length; i++) {
        if (matrix[elementId][i])
            friends.push(i)
    }
    return friends
}

function getMatrix(nodes, edges) {
    let matrix = [];
    for (let i = 0; i < nodes.length; i++) {
        let row = [];
        for (let j = 0; j < nodes.length; j++) {
            row.push(0) 
        }
        matrix.push(row)
    }

    for (const [i, j] of edges) {
        matrix[i][j] = 1
    }
    return matrix;
}