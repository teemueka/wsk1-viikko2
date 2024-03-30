const x1 = parseFloat(prompt('Give x1'));
const x2 = parseFloat(prompt('Give x2'));
const y1 = parseFloat(prompt('Give y1'));
const y2 = parseFloat(prompt('Give y2'));

const distance = Math.sqrt(
  (parseFloat(x2) - parseFloat(x1)) ** 2 +
    (parseFloat(y2) - parseFloat(y1)) ** 2
);
const formattedDistance = distance.toFixed(2);

if (isNaN(formattedDistance)) {
  document.getElementById('displayValue').innerText =
    'Invalid input. Please enter a valid numbers.';
} else {
  document.getElementById('displayValue').innerText =
    'Distance between the points is ' + formattedDistance;
}
