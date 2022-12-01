const nestedArray = [[1,2, [3,4]], [5,6, [6.1, [6.2]]], 7, 8, 9, [10, [11]]];

const flattenArray = (arrays) => {
    //SOLUTION 1
    return arrays.reduce((a, b) => a.concat(b)); //it just work for the first level
    
    //SOLUTION 2
    return [].concat.apply([], arrays); //it just work for the first level
    
    //SOLUTION 3
    return [].concat(...arrays) //it just work for the first level
}
// console.log(flattenArray(nestedArray));


//Solution using RECURSION
const flattenArray2 = (arr) => {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flattenArray2(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}
console.log(flattenArray2(nestedArray));


//Solution flatten N levels
const flattenNLevels = (arr, depth) => {
    let result = [];
    arr.forEach((item) => {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flattenNLevels(item, depth - 1));
        } else {
            result.push(item);
        }
    });

    return result;
};

console.log('flatten N levels ', flattenNLevels(nestedArray, 3));
