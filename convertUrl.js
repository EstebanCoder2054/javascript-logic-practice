// convertURL
const urlify = (string, n) => {
  let newString = '';
  for (let i=0; i<=n; i++) {
    if (string[i] === ' '){
      newString += '%20';
    } else{
      newString += string[i];
    }
  }
  return newString;
//   return string.replaceAll(' ','%20')
}
console.log(urlify('http:este ban arg 24 .com', 24))