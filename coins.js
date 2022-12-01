const coins = (amount) => {
    const possibleCoins = [25, 10, 5, 2, 1];
    const totalCoins = [];

    for (let i=0; i<possibleCoins.length; i++) {
        const thisCoinNum = Math.floor(amount / possibleCoins[i]);
        for (let j=0; j<thisCoinNum; j++) {
            totalCoins.push(possibleCoins[i]);
        }
        amount -= possibleCoins[i] * thisCoinNum;
    };

    return totalCoins;


}

console.log(coins(100))