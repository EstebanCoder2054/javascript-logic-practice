// #10 Add all numbers that comes from params - NO ARRAYS
const addAll = (...rest) => {
    let total = 0;
    rest.forEach(num => total += num);
    return total;

}
console.log(addAll(2,5,6,7));