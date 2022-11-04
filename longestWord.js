const longestWord = (sent) => {
    const wordArr = sent.toLowerCase().match(/[a-z0-9]+/g); //this is going to return everything that match the regex into an array

    //sort by length
    const sorted = wordArr.sort((a, b) =>  b.length - a.length);
  
    //if multiple longest words, put them into an array
    const longestWordArray = sorted.filter(word => {
        return word.length >= sorted[0].length;
    });

    return longestWordArray

};
console.log(longestWord('Helloo there, , is is is itt 4444 s'))