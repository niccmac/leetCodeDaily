// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s) => {
  let array = s.replace(/\s+/g, " ").trim().split(" ");
  return array.slice(-1).pop().length;
};
