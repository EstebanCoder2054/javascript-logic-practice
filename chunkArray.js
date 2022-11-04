const chunkArray = (arr, len) => {
    //initialize a chunk array
    const chunkedArr = [];

    //set index
    let i = 0;

    //loop while index is less than the array length
    while(i < arr.length) {
        //slice out from the index to the index + len
        chunkedArr.push(arr.slice(i, i + len));
        //increment by chunk length
        i += len; 
    };

    return chunkedArr

}
console.log(chunkArray([1,2,3,2,3,4,4,5,6,7], 3));




// //solution using a for loop
const chunkArray2 = (arr, len) => {
    //initialize the chunked array
    const chunkedArr = [];

    for (let i = 0; i < arr.length; i += len) {
        chunkedArr.push(arr.slice(i, i + len))
    }

    return chunkedArr
}
console.log(chunkArray2([1,2,3,4,5,6,7,8,9,10,11,12], 5));




//solution without using the while loop
const chunkArray3 = (arr, len) => {
    //initialize the chunked array
    const chunkedArr = [];

    //loop through arr
    arr.forEach((val) => {
        //get last element
        const last = chunkedArr[chunkedArr.length - 1];
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkedArr;
}
console.log(chunkArray3([1,2,3,2,3,4,4,5,6,7], 2));



