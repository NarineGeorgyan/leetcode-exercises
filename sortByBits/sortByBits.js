var sortByBits = function (arr) {
  const newArr = [];
  const a = [];
  const sortByBitsArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toString(2));
    let count = 0;
    console.log(newArr);
    for (let j = newArr[i].length; j >= 0; j--) {
      if (newArr[i][j] === "1") {
        count++;
      }
    }
    a.push(count);
  }
  console.log(a);
  for (let k = 0; k < a.length; k++) {
    if (a[k] == 1) {
      sortByBitsArr.push(arr[k]);
    }
  }
  console.log(sortByBitsArr);
  console.log(arr);
};
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
