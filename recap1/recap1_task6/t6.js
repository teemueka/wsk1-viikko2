const inputInt = parseInt(prompt('Enter a positive integer'));
const newTable = document.createElement('table');
document.body.appendChild(newTable);

for (let i = 1; i <= inputInt; i++) {
  const newRow = document.createElement('tr');
  document.body.appendChild(newRow);
  for (let j = 1; j <= inputInt; j++) {
    const column = document.createElement('td');
    column.textContent = i * j;
    newRow.appendChild(column);
  }
}

document.getElementById('displayValue').innerText = 'Multiplication table: ';
