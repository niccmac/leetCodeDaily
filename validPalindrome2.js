const validPalindrome = function (s) {
  const isPalindrome = function (s) {
    let point1 = 0;
    let point2 = s.length - 1;
    while (point1 < point2) {
      if (s[point1] === s[point2]) {
        point1 += 1;
        point2 -= 1;
      } else {
        return false;
      }
    }
    return true;
  };

  const lower = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let array = [...lower];

  let characters = 0;
  while (array.length >= 1) {
    if (characters >= 2) {
      return false;
    }
    let end = array.length - 1;
    if (array[0] === array[end]) {
      array.pop();
      array.shift();
    } else if (array[1] === array[end] || array[0] === array[end - 1]) {
      if (
        array[1] === array[end] &&
        isPalindrome(array.slice(array[2], array[end - 1]))
      ) {
        array.pop();
        array.shift();
        array.shift();
        characters += 1;
      } else if (
        array[0] === array[end - 1] &&
        isPalindrome(array.slice(array[1], array[end - 2]))
      ) {
        array.pop();
        array.pop();
        array.shift();
        characters += 1;
      }
    } else {
      return false;
    }
  }
  if (characters >= 2) {
    return false;
  }
  return true;
};

// console.log(validPalindrome("eeccccbebaeeabebccceea"));
// console.log(validPalindrome("abc"));
// console.log(validPalindrome("abca"));
// console.log(validPalindrome("hbakab"));
console.log(
  validPalindrome(
    "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu"
  )
);
