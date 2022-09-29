let s = [..."896"];
var myAtoi = function (s) {
  let num = 0;
  let isMinus = false;
  for (let i = 0; i < s.length; i++) {
    let p = num * s[i];
    if (s[i] == "-") {
      isMinus = true;
    }
    if (!isNaN(p)) {
      num = num * 10 + (s[i] % 10);
    } else {
      continue;
    }
  }
  return isMinus ? -num : num;
};
console.log(myAtoi(s));
