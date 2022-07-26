const reverseArray = (array) => {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let a = array[i];
    let b = array[array.length - 1 - i];
    array[i] = b;
    array[array.length - 1 - i] = a;
  }
  return array;
};

const input = ["a", "b", "c", "d", "e"];

console.log(reverseArray(input));
console.log(reverseArrayInPlace(input));
