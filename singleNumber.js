// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let first = nums.shift();
    const index = nums.findIndex((x) => x === first);
    if (index === -1) {
      return first;
    } else {
      nums.splice(index, 1);
    }
  }
};
