// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

const strStr = function (haystack, needle) {
  let correctOrder = false;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      correctOrder = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j] && correctOrder) {
          correctOrder = true;
        } else {
          correctOrder = false;
        }
      }
      if (correctOrder) {
        return i;
      }
    }
  }
  return -1;
};
