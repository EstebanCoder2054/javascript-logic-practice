const compareObjects = (obj1, obj2) => {
    console.log(Object.keys(obj1));
    console.log(Object.keys(obj2));

    return Object.keys(a).every(key => b[key]);
}

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 2, d: 1 };

console.log(compareObjects(objA, objB))