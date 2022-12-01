// #13 sortByHeight 
const sortByHeight = (array) => {
    let indexesToReplace = [];
    let newArr = [];

    array.forEach((num, index) => {
        if (num === -1) {
            indexesToReplace.push(index);
        } else {
            newArr.push(num);
        }
    });

    newArr.sort((a, b) => a -b);

    console.log(newArr);
    console.log(indexesToReplace);

    indexesToReplace.forEach((item, index) => newArr.splice(indexesToReplace[index], 0, -1));

    return newArr

}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 100, 200, -1, 130]));