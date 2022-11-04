const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return reversed === str;
}
console.log(isPalindrome('racecar'))