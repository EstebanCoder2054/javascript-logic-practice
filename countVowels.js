// #5 function that counts the number of vowels in a sentence
const howManyVowels = (str) => {
  let vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  let count = 0;
  for (char of str) {
    if (vowels.includes(char.toLowerCase())) count++;
  }

  return count;
}
console.log(howManyVowels(`Hola como estA?`)) //6