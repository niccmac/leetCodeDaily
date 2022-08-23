const threeSum = function (nums) {
  let result = [];
  const target = 0;
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    let sum = 0;

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === target) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};
