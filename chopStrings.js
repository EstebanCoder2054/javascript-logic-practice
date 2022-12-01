const chopStrings = (str) => {
    if (str.length < 3) return str;

    return str.slice(0, 3) + str.slice(-3);
}

console.log(chopStrings(`hi`))
console.log(chopStrings(`abc`))
console.log(chopStrings(`holawe`))
console.log(chopStrings(`holis`))
console.log(chopStrings(`holawecomoestas`))