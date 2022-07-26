// Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the original arrays.

const flat = (array) => {
  let flatArr = array.reduce((a, b) => {
    return a.concat(b);
  });
  return flatArr;
};

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flat(arrays));
