//First attempt
const longestCommonPrefix = (strs) => {
  let lcp = strs[0];
  for (let i = 0; i < strs.length; i++) {
    lcp = getLCP(strs[i], lcp);
  }
  return lcp;
};

const getLCP = (word1, word2) => {
  let returnStr = "";
  for (let i = 0; i < word1.length; i++) {
    if (word1.charAt(i) === word2.charAt(i)) {
      returnStr += word1.charAt(i);
    } else {
      return returnStr;
    }
  }
  return returnStr;
};
