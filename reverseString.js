const reverseString = (str) => {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

//Without using the reverse method
const reverseString2 = (str) => {
    let splittedStr = str.split('');
    let reversedWordArr = [];
    for (let i = splittedStr.length; i >= 0; i--) {
        reversedWordArr.push(splittedStr[i]);
    }
    return reversedWordArr.join('');
}
console.log(reverseString2('hello'));

//Using a for of loop
const reverseString3 = (str) => {
    let revString = '';
    for (let char of str) {
        revString = char + revString;
    }
    return revString;
}
console.log(reverseString3('hello'));

// (function(array) {
//   let cerosToAddCount = 0;
//   for(let i=0; i<=array.length; i++){
//     if (array[i] === 0) {
//       array = array.splice(i, 1);
//       cerosToAddCount++;
//     }
//     i++
//   }
//   console.log(array)
//   console.log(cerosToAddCount)
// })([1,0,2,0,3,4,5,0,0,7,8,0,10,11,12,0]);