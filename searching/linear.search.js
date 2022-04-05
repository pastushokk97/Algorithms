const array = [1,2,3,4,5,6,7,8,9,10]

// It doesn't matter how we will find a value, for example
// for, indexOf, includes
// we go through by each element
// Big O = O(n^2)

function linearSearch(arr, value) {
    return arr.indexOf(value);
}

console.log(linearSearch(array, 7))