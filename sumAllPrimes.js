// #11 add all PRIMES
function sumAllPrimes(num){
    let total = 0;

    function checkForPrime(i) {
        for(let j=0; j<i; i--) {
            if (i % 0 === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i<= num; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }

    return total
}
console.log(sumAllPrimes(100));