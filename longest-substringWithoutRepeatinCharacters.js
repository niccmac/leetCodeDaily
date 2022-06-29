// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function (s) {
  let longest = "";
  let current = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    // Check if current inclues letter
    let index = current.indexOf(letter);

    if (index !== -1) {
      // Not included in current
      if (current.length > longest.length) longest = current;
      current = current.slice(index + 1) + letter;
    } else {
      // Included in current
      current += letter;
    }
  }

  if (current.length > longest.length) longest = current;
  return longest.length;
};
