const minimum = (n1, n2) => {
  if (n1 > n2) return n2;
  return n1;
};

let n1 = 10;
let n2 = 09;
console.log(minimum(n1, n2));
