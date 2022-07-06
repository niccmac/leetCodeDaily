/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
const isPalindrome = function (s) {
  const lower = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let array = [...lower];

  let point1 = 0;
  let point2 = array.length - 1;
  while (point1 < point2) {
    if (array[point1] === array[point2]) {
      point1 += 1;
      point2 -= 1;
    } else {
      return false;
    }
  }
  return true;
};
