const inputValue = parseFloat(prompt('Give temperature in celcius'));
const isOnlyDigits = /^-?\d+$/.test(inputValue);

if (isOnlyDigits) {
  const fahrenheit = (parseFloat(inputValue) * 9) / 5 + 32;
  const kelvin = parseFloat(inputValue) + 273.15;
  document.getElementById('displayValue').innerText =
    inputValue +
    ' celcius in Fahrenheit:' +
    fahrenheit +
    ', in Kelvin: ' +
    kelvin;
} else {
  document.getElementById('displayValue').innerText = 'Enter only numbers';
}
