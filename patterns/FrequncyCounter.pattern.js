// Frequency Counter - are most used to compare data
// Big O = O(n)
// through replace
function anagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  for(let i = 0; i < str1.length; i++) {
    if(str2.includes(str1[i])) {
      str2 = str2.replace(str1[i], '');
    }
  }

  return true;
}

// through object
function anagramSame(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  const obj = {};

  for(let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }

  for(let i = 0; i < str2.length; i++) {
    if(obj[str2[i]] && obj[str2[i]] > 0) {
      obj[str2[i]] = obj[str2[i]] - 1;
    } else {
      return false;
    }
  }

  return true;
}