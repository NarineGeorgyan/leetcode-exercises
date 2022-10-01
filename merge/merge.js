const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6]; //2
const n = 3;

var merge = function (nums1, m, nums2, n) {
  let j = 0;
  if (m === 0 && n > 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }

    return nums1;
  }
  if (m === 1 && n === 0) {
    return nums1;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (nums1[0] < nums2[0]) {
      if (nums1[m - 1] <= nums2[i]) {
        nums1[i + m] = nums2[i];
      } else {
        nums1[m] = nums1[m - 1];
        nums1[m - 1] = nums2[i];
      }
    } else {
      nums1[m + j] = nums1[m - i - 1];
      nums1[m - i - 1] = nums2[m - i - 1];
      j++;
    }
  }

  return nums1;
};
console.log(merge(nums1, m, nums2, n));
