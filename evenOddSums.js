// #15 Even and odd sums
const evenOddSums = (array) => {
    let evenCount = 0;
    let oddCount = 0;
    array.forEach(num => num % 2 === 0 ? evenCount += num : oddCount += num);
    
    return [evenCount, oddCount];
}
console.log(evenOddSums([50, 60, 60, 45, 71]))