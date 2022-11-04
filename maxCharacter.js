const maxCharacter = (str) => {
    const splittedString = str.split('');
    let obj = {};
    let maxCounter = 0;
    let mostRepeatedLetter;

    for (char of splittedString){
        if (obj[char]) obj[char] = obj[char] + 1;
        else obj[char] = 1;
    }

    for (entry in obj) {
        if (obj[entry] > maxCounter) {
            maxCounter = obj[entry];
            mostRepeatedLetter = entry;
        }
    }

    return { mostRepeatedLetter, maxCounter }

}
console.log(maxCharacter('Hooolaaa!!!!! eeesto es un teeexttttto'))