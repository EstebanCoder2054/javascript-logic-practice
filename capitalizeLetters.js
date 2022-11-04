const capitalizeLetters = (str) => {
    const splittedSentence = str.split(' ');
    const capitalizedArr = [];
    for (word of splittedSentence) {
        capitalizedArr.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalizedArr.join(' ')
}
console.log(capitalizeLetters('hello world again'));