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

// // anagram
// const isStringPermutation = (str1, str2)=>{
//   let temp1 = str1.split("").sort().join("");
//   let temp2 = str2.split("").sort().join("");
//   return temp1 === temp2;
// }

// // convertURL
// const urlify = (string, n) => {
//   // let newString = '';
//   // for (let i=0; i<=n; i++) {
//   //   if (string[i] === ' '){
//   //     newString += '%20';
//   //   } else{
//   //     newString += string[i];
//   //   }
//   // }
//   // return newString;
//   return string.replaceAll(' ','%20')
// }
// console.log(urlify('http:este ban arg 24 .com', 24))

// const isPalindrome = (phrase) => {
//   let temp = phrase.split('').reverse().join('')
//   return phrase === temp
// }

// const isPal = isPalindrome('anitalavalatina')
// console.log(`🚀 🚀  ->  ~ isPal`, isPal);

// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// var numbers = [12, 10, 15, 11, 14, 13, 16];
// bubbleSort(numbers);
// console.log(numbers);

//getting the MAXIMUM of an array of numbers
// const  getTheMaximumNumber = (numbers) => {
//   const callback = (accumulator, value) => {
//     if (accumulator > value) return accumulator;
//     else return value;
//   }

//   const max = numbers.reduce(callback, -Infinity);
//   return max;

// }

// const numbers = [21,2,3,7,8,8,11,15,15, 16];
// console.log( getTheMaximumNumber(numbers) );

//Organize an array of numbers with the .sort() method DESCENDING
// const numbers = [10, 105, 18, 24, 32, 1, -19, 209];

// console.log(numbers.sort((a, b) => a - b));

//CODING PRACTICE
// #1 Palindrome
// const isPalindrome = (word) => {
//   return word.split('').reverse().join('') === word;
// };
// console.log(isPalindrome(`RACECARR`));

// #2 MINIMUN and MAXIMUM number in an array
// const minAndMax = (array, minOrMax) => {
//   const callback = (acc, value) => {
//     if (minOrMax === `min`) { //find the minimum
//       if (value < acc) return value;
//       else return acc;
//     } else { //find the maximum
//       if (value > acc) return value;
//       else return acc;
//     }
//   }

//   const result = array.reduce(callback, minOrMax === `min` ? Infinity : -Infinity);
//   return result;
// }
// console.log(minAndMax([1,-10,200,32,24,56,33], `max`));

//other way with sort to get the MINIMUM OR MAXIMUM
// const minAndMax = (array, operationToDo) => {
//   const sortedArray = array.sort((a, b) => a - b); //ascending array

//   return {
//     min: sortedArray[0],
//     max: sortedArray[sortedArray?.length - 1],
//   };
// };

// const array = [1, -10, 200, 32, 24, 56, 33];
// console.log(minAndMax(array));

// #3 Verify if a string balanced parenthesis
// (function isBalanced(str){
//   const splittedStr = str.split('');
//   console.log(`🚀 🚀  ->  ~ isBalanced ~ splittedStr`, splittedStr);
//   let oppeningParenthesis = 0;
//   let closingParenthesis = 0;

//   splittedStr.forEach((char) => {
//     if (char === `(`) oppeningParenthesis++;
//     else if(char === `)`) closingParenthesis++;
//   });

//   if (oppeningParenthesis === closingParenthesis) console.log(`Balanced parenthesis`);
//   else console.log(`NOT balanced parenthesis`)

// })(`()()(())`)

// #4 Function that returns unique values from an array
// const onlyUniques = (array) => {
//   let obj = {}
//   const uniqueValues = [];
//   for (item of array) {
//     if (obj[item]) {
//       obj[item] = obj[item] + 1;
//     } else {
//       obj[item] = 1;
//     }
//   }

//   for(item in obj) {
//     if (obj[item] === 1) uniqueValues.push(item)
//   }
//   console.log(`este es el obj`, obj)
//   console.log(`estos son los unique values `, uniqueValues)
//   return uniqueValues
// }
// console.log(onlyUniques([1,2,2,`#`, `hola`, `adios`, `#`, `adios`, `$`, 3]));

// #5 function that counts the number of vowels in a sentence
// const howManyVowels = (str) => {
//   let vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//   let count = 0;
//   for (char of str) {
//     if (vowels.includes(char.toLowerCase())) count++;
//   }

//   return count;
// }
// console.log(howManyVowels(`Hola como estA?`)) //6

// #6 function that capitalize all the words
// const capitalizeAll = (str) => {
//   const result = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
//   console.log(`🚀 🚀  ->  ~ capitalizeAll ~ result`, result);
// }
// console.log(capitalizeAll(`hi there!`));

// #7 Get max used character
// const mostFrequentChar = (str) => {
//   let obj = {};
//   let mostUsed = ``;
//   let max = 0;

//   for (char of str) {
//     if (obj[char]) {
//       obj[char] = obj[char] + 1;
//     } else {
//       obj[char] = 1;
//     }
//   }

//   for (char in obj) {
//     if (obj[char] > max) {
//       max = obj[char];
//       mostUsed = char;
//     }
//   }

//   console.log(obj);
//   console.log('most used -> ', mostUsed, ' it was used ', max, ' times')
// };
// console.log(mostFrequentChar(`Hooo laa 1111 ###`));

// #10 Add all numbers that comes from params - NO ARRAYS
// const addAll = (...rest) => {
//     let total = 0;
//     rest.forEach(num => total += num);
//     return total;

// }
// console.log(addAll(2,5,6,7));

// #11 add all PRIMES
// function sumAllPrimes(num){
//     let total = 0;

//     function checkForPrime(i) {
//         for(let j=0; j<i; i--) {
//             if (i % 0 === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 0; i<= num; i++) {
//         if (checkForPrime(i)) {
//             total += i;
//         }
//     }

//     return total
// }
// console.log(sumAllPrimes(100));

// #12 SEEK AND DESTROY -> REMOVE DUPLICATES
// const seekAndDestroy = (array, ...rest) => {
//     return array.filter(val => !rest.includes(val))
// }
// console.log(seekAndDestroy([2,3,4,6,6,'hello'], 2, 6))

// #13 sortByHeight 
// const sortByHeight = (array) => {
//     let indexesToReplace = [];
//     let newArr = [];

//     array.forEach((num, index) => {
//         if (num === -1) {
//             indexesToReplace.push(index);
//         } else {
//             newArr.push(num);
//         }
//     });

//     newArr.sort((a, b) => a -b);

//     console.log(newArr);
//     console.log(indexesToReplace);

//     indexesToReplace.forEach((item, index) => newArr.splice(indexesToReplace[index], 0, -1));

//     return newArr

// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 100, 200, -1, 130]));

// #14 Missing letters
// const missingLetters = (str) => {
//     let compare = str.charCodeAt(0);
//     let missing;

//     str.split('').map((char, i) => {
//         if (str.charCodeAt(i) === compare){
//             ++compare;
//         } else {
//             missing = String.fromCharCode(compare);
//         }
//     })

//     return missing;


// }
// console.log(missingLetters(`abce`))


// #15 Even and odd sums
// const evenOddSums = (array) => {
//     let evenCount = 0;
//     let oddCount = 0;
//     array.forEach(num => num % 2 === 0 ? evenCount += num : oddCount += num);
    
//     return [evenCount, oddCount];
// }
// console.log(evenOddSums([50, 60, 60, 45, 71]))



