function naiveSearch(str, findValue) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        for (let j = 0; j < findValue.length; j++) {
            if(findValue[j] !== str[i + j]) {
                break;
            }

            if(j === findValue.length - 1) {
                count++;
            }

        }
    }
    return count;
}

console.log(naiveSearch('wowomgzomg', 'omg'));