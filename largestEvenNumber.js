const largestEvenNumber = (arr) => {
    return Math.max(...arr.filter(num => num % 2 === 0))
};

console.log(largestEvenNumber([1,2,100, 101]));