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

//Second attempt
const longestCommonPrefix2 = (strs) => {
  if (strs.length < 2) {
    return strs[0];
  }

  let returnString = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let k = returnString.length - 1; k > -1; k--) {
      if (returnString[k] !== strs[i][k]) {
        returnString = returnString.slice(0, k);
      }
    }
  }
  return returnString;
};
