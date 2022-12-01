const nearestTo100 = (num1, num2) => {
    if (100 - num1 < 100 - num2) return num1;
    return num2;
}

console.log(nearestTo100(80, 80));