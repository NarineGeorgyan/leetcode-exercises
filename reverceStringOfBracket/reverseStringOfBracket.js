function reverseStringOfBracket(inputString) {
  while (inputString.indexOf(")") !== -1) {
    let c = inputString.indexOf(")", 0);
    let a = inputString.lastIndexOf("(", c);
    let b = inputString
      .slice(a + 1, c)
      .split("")
      .reverse()
      .join("");
    inputString = inputString.slice(0, a) + b + inputString.slice(c + 1);
  }
  return inputString;
}
reverseStringOfBracket();
