const inputInt = parseInt(prompt('Enter a positive integer'));
let sum = 0;

for (let i = 0; i <= inputInt; i++) {
  sum += i;
}

document.getElementById('displayValue').innerText = 'Sum: ' + sum;
