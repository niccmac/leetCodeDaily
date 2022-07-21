// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// First attempt June 6 2022
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  const numStr = x.toString();

  let loopTimes = 0;

  if (numStr.length % 2 === 0) {
    loopTimes = numStr.length / 2;
  } else {
    loopTimes = Math.floor(numStr.length / 2);
  }

  let descIndex = numStr.length - 1;

  for (let i = 0; i < loopTimes; i++) {
    if (numStr[i] !== numStr[descIndex]) {
      return false;
    }
    descIndex -= 1;
  }

  return true;
};

// Second attempt July 21 2022
const isPalindromeSecond = function (x) {
  if (x < 0) {
    return false;
  }

  const y = x.toString().split("");
  while (y.length > 1) {
    if (y.shift() !== y.pop()) {
      return false;
    }
  }
  return true;
};
