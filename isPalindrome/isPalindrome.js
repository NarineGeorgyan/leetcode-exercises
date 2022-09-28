const s = "race a car";
const b = "A man, a plan, a canal: Panama";
const d = "   ";

var isPalindrome = function (b) {
  let str = "";
  b = b.replaceAll(/[\W/_]/g, "").toLowerCase();
  for (let i = 0; i <= b.length; i++) {
    str += b.charAt(b.length - i);
  }

  return str == b;
};
console.log(isPalindrome(s));
