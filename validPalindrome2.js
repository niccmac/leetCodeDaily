const validPalindrome = function (s) {
  const lower = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let array = [...lower];

  let characters = 0;
  while (array.length >= 1) {
    console.log(array, characters);
    if (characters >= 2) {
      console.log(characters, "return in chara");
      return false;
    }
    let point2 = array.length - 1;
    if (array[0] === array[point2]) {
      array.pop();
      array.shift();
    } else if (array[1] === array[point2]) {
      array.pop();
      array.shift();
      array.shift();
      characters += 1;
    } else if (array[0] === array[point2 - 1]) {
      array.pop();
      array.pop();
      array.shift();
      characters += 1;
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
