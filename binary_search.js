const numbers = [2, 4, 5, 7, 9, 23, 45, 67, 89, 99, 110, 145, 187, 230, 555];

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target < array[mid]) {
      end = mid - 1;
    }
    if (target > array[mid]) {
      end = mid + 1;
    }
  }
  return -1;
}

const index = binarySearch(numbers, 89);

console.log(index);
