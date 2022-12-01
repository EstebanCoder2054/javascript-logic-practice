const alphabeticalOrder = (str) => {
    const spltted = str.split('');
    return spltted.sort().join('');
};

console.log(alphabeticalOrder(`webmaster`));