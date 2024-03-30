const numbers = [];
const evenNumbers = [];
let userInput;

do {
  userInput = prompt("Enter a number (or 'done' to finish)");
  if (userInput !== '') {
    numbers.push(userInput);
  }
} while (userInput !== 'done');

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length > 0) {
  document.getElementById('displayValue').innerText =
    'Even numbers: ' + evenNumbers.join(', ');
} else {
  document.getElementById('displayValue').innerText =
    'No even numbers entered.';
}

document.getElementById('displayEnd').innerText = 'End of the program';
