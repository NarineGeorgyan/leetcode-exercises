function solution(a) {
  let sum = 0;
  const result = [...a.toString(2)];
  for (let i = 0; i < result.length; i++) {
    sum += result[i] * 2 ** i;
  }
  return sum;
}
solution(97);
