module.exports = function solveEquation(equation) {
  // your implementation
  let arr = [];
  equation = equation.split(' ');
  let a = +equation[0];
  let b = +(equation[3] + equation[4]);
  let c = +(equation[7] + equation[8]);
  let discrim = b*b - 4*a*c;
  arr[0] = Math.round((-b + Math.sqrt(discrim)) / (2*a));
  arr[1] = Math.round((-b - Math.sqrt(discrim)) / (2*a));
  return arr.sort((a, b) => a - b);
}
