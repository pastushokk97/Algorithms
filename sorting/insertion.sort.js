const array = [3,1,6,8,2,0,24,612,5,37];

function insertionSort(arr) {
	for(let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
      for(let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          arr[j+1] = arr[j];
      }
      arr[j+1] = currentValue;
	}
	return arr;
}

insertionSort(array);

export {}