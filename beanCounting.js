const countBs = (str) => {
  let s = str.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "B") {
      count += 1;
    }
  }
  return count;
};

const input1 = "BBC";

console.log(countBs(input1));

const countChar = (str, letter) => {
  let s = str.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) {
      count += 1;
    }
  }
  return count;
};

const input = "kakkerlak";
const letter = "k";
console.log(countChar(input, letter));
