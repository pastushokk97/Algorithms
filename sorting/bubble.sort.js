const array = [3,1,6,8,2,0,24,612,5,37];


// Big O = n^2 without swamp
// Optimization with swamp
function bubbleSort(arr) {
	let notSwamp = true;
	for(let i = array.length; i >= 0; i--) {
		for(let j = 0; j < i - 1; j++) {
			if(arr[j] > arr[j+1]) {
				const temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
				notSwamp = false;
			}
		}
		if(notSwamp) {
			break;
		}
	}
	return arr;
}

console.log(bubbleSort(array));

module.exports.bubbleSort = bubbleSort;