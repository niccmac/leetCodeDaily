const isPalindrome = function (x) {
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
