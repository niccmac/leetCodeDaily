const twoSumFirst = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === diff) {
        return [i, j];
      }
    }
  }
};
const twoSumSecond = function (nums, target) {
  const returnIndex = [];
  for (let i = 0; i < nums.length; i++) {
    let first = target - nums[i];
    let second;
    if ((first) => 0) {
      second = nums.lastIndexOf(first);
    }
    if (second > 0 && second !== i) {
      returnIndex[0] = i;
      returnIndex[1] = second;
      break;
    }
  }

  return returnIndex;
};
console.log(twoSumSecond([3, 3], 6));
