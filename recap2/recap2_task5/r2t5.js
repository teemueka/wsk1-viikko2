const numbers = [10, 5, 3, 7, 8];

function sortArray(array, order) {
  if (order === 'asc') {
    return array.sort((a, b) => a - b);
  } else if (order === 'desc') {
    return array.sort((a, b) => b - a);
  }
}

console.log('Ascending order: ' + sortArray(numbers, 'asc'));
console.log('Descending order: ' + sortArray(numbers, 'desc'));
