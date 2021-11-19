const numbers = [98, -4, 6, 5, 4, 40, 56, 80];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

const sorted = selectionSort(numbers);
console.log(sorted);
