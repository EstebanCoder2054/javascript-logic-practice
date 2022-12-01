// #4 Function that returns unique values from an array
const onlyUniques = (array) => {
  let obj = {}
  const uniqueValues = [];
  for (item of array) {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  }

  for(item in obj) {
    if (obj[item] === 1) uniqueValues.push(item)
  }
  console.log(`este es el obj`, obj)
  console.log(`estos son los unique values `, uniqueValues)
  return uniqueValues
}
console.log(onlyUniques([1,2,2,`#`, `hola`, `adios`, `#`, `adios`, `$`, 3]));