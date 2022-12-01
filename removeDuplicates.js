// #12 SEEK AND DESTROY -> REMOVE DUPLICATES
const seekAndDestroy = (array, ...rest) => {
    return array.filter(val => !rest.includes(val))
}

console.log(seekAndDestroy([2,3,4,6,6,'hello'], 2, 6))