const nums = [3, 3, 7, 7, 10, 11, 11];
var singleNonDuplicate = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) obj[nums[i]]++;
    else obj[nums[i]] = 1;
  }
  for (const val in obj) {
    if (obj[val] === 1) {
      return val;
    }
  }
};
console.log(singleNonDuplicate(nums));
