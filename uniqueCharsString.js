const uniqueCharString = (str) => {
    return str.split('').filter((item, index, arr) => {
        return arr.slice(index + 1).indexOf(item) === -1
    })

    //another way (simpler) to do this
    // return [...new Set(str.split(''))];
}

console.log(uniqueCharString('aaaabbbbbcccc1222'));