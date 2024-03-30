const numbers = [];

for (let i = 1; i <= 5; i++) {
  const userInput = prompt('enter a number');
  numbers.push(userInput);
}

console.log('Numbers: ' + numbers);

const check = prompt('Enter a number to search');

console.log('Found in array? ' + numbers.includes(check));

numbers.pop();
console.log('Updated numbers: ' + numbers);
const sorted = numbers.sort((a, b) => a - b);
console.log('Sorted numbers: ' + sorted);
