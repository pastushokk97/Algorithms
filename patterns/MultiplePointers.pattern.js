// Very efficient for solving problems with minimal space complexity
// Big O = O(N)

function countUniqueValues(arr){
  if(arr.length === 0) return 0;

  let i = 0;
  for(let j = 0; j < arr.length; j++) {
    if(arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;
}