const isTruePalindrome = function (s, p1, p2) {
  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;
    p1++;
    p2--;
  }

  return true;
};

const validPalindrome = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2])
      return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1);
    p1++;
    p2--;
  }

  return true;
};

// console.log(validPalindrome("eeccccbebaeeabebccceea"));
// console.log(validPalindrome("abc"));
// console.log(validPalindrome("abca"));
// console.log(validPalindrome("hbakab"));
console.log(validPalindrome("abd"));
