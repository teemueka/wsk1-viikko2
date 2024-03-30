const numbers = [10, 5, 3, 7, 8];
console.log('Before sorting: ' + numbers);

function sortArray(array) {
  array.sort((a, b) => a - b);
}

sortArray(numbers);
console.log('After sorting: ' + numbers);
