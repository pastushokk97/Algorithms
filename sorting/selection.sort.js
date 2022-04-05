const array: number[] = [3,1,6,8,2,0,24,612,5,37];


// Big O = n^2 without swamp
function selectionSort(arr: number[]): number[] {
	for(let i = 0; i < arr.length; i++) {
        let smallest: number = i;
		for(let j = i+1; j < arr.length; j++) {
			if(arr[smallest] > arr[j]) {
				smallest = j;
			}
		}
        if(i !== smallest) {
            const temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;   
        }
	}
	return arr;
}

console.log(selectionSort(array));

export {}