// getting the MAXIMUM of an array of numbers
const  getTheMaximumNumber = (numbers) => {
  const callback = (accumulator, value) => {
    if (accumulator > value) return accumulator;
    else return value;
  }

  const max = numbers.reduce(callback, -Infinity);
  return max;
}

const numbers = [21,2,3,7,8,8,11,15,15, 16];
console.log( getTheMaximumNumber(numbers) );

// other way with sort to get the MINIMUM OR MAXIMUM
const minAndMax = (array) => {
  const sortedArray = array.sort((a, b) => a - b); //ascending array

  return {
    min: sortedArray[0],
    max: sortedArray[sortedArray?.length - 1],
  };
};