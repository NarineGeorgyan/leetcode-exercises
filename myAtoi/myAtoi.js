let s = [..."a4193 w99ith words"];
var myAtoi = function (s) {
  let num = 0;
  let isMinus = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      continue;
    } else {
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
  }
  return isMinus ? -num : num;
};
console.log(myAtoi(s));
