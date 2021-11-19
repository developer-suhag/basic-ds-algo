const numbers = [23, 54, 65, 6, 78, 400, 56, 345, 0, 1];

function babbulSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const sorted = babbulSort(numbers);

console.log(sorted);
