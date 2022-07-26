const range = (start, end, step = 1) => {
  let arr = [];

  if (step > 0) {
    for (let i = start + 1; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push[i];
    }
  }

  console.log(arr);
  return sum(arr);
};

const sum = (array) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
};

const s = 10;
const e = 1;
const step = -1;

console.log(range(s, e, step));
