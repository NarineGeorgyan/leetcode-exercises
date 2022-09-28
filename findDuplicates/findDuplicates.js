var findDuplicates = function (nums) {
  return nums.filter((num, index) => nums.indexOf(num) !== index);
  
};
const nums1 = [4, 3, 2, -7, 8, 2, 3, 1];
const nums2 = [1, 1, 2];
const nums3 = [1];
console.log(findDuplicates(nums1));
