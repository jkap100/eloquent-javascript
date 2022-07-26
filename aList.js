const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
};

const prepend = (element, list) => {
  return { element, rest: list };
};

const nth = (list, num) => {
  if (!list) {
    return undefined;
  } else if (num == 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
};

const array = [10, 20, 30];

console.log(arrayToList(array));
console.log(listToArray(arrayToList(array)));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList(array), 1));
