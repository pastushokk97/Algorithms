const array = [1,2,3,4,5,6,7,8,9,10]

// Working only with sorted array!!!
// Big O = O(log n)

function binarySearch(arr, value) {
    let pointerLeft = 0;
    let pointerRight = arr.length - 1;
    let middle = Math.floor((pointerLeft + pointerRight) / 2);

    while(arr[middle] !== value && pointerLeft <= pointerRight) {
        if(value < arr[middle]) {
            pointerRight = middle - 1;
        } else {
            pointerLeft = middle + 1;
        }
        middle = Math.floor((pointerLeft + pointerRight) / 2);
    }

    return arr[middle] === value ? middle : -1;
}

console.log(binarySearch(array, 5))