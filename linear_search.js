const numbers = [12, 54, 65, 76, 4, 778, 45, 78, 89, 4];

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }

  return -1;
}

const index = linearSearch(numbers, 45);

console.log(index);
