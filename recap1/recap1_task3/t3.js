const l1 = parseFloat(prompt('Enter lenght of the 1st side'));
const l2 = parseFloat(prompt('Enter lenght of the 2nd side'));
const l3 = parseFloat(prompt('Enter lenght of the 3rd side'));

if (!isNaN(l1) && !isNaN(l2) && !isNaN(l3)) {
  if (l1 === l2 && l1 === l3) {
    document.getElementById('displayValue').innerText =
      'Triangle is equilateral';
  } else if (l1 === l2 || l1 === l3 || l2 === l3) {
    document.getElementById('displayValue').innerText = 'Triangle is isosceles';
  } else {
    document.getElementById('displayValue').innerText = 'Triangle is scalene';
  }
} else {
  document.getElementById('displayValue').innerText =
    'Please enter values to the prompts';
}
