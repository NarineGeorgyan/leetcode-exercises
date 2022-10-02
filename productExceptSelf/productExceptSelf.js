var productExceptSelf = function (nums) {
  const left = [1];
  const right = new Array(nums.length);
  right[right.length - 1] = 1;
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
