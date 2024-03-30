const userScore = parseFloat(prompt('Enter your score for the course'));

if (isNaN(userScore)) {
  document.getElementById('displayValue').innerText =
    'Invalid input. Please enter a valid number.';
} else {
  if (userScore < 0) {
    document.getElementById('displayValue').innerText =
      'I thought 0 was the lowest score possible, impressive...';
  } else if (userScore >= 0 && userScore <= 39) {
    document.getElementById('displayValue').innerText = 'You received grade 0';
  } else if (userScore >= 40 && userScore <= 51) {
    document.getElementById('displayValue').innerText = 'You received grade 1';
  } else if (userScore >= 52 && userScore <= 63) {
    document.getElementById('displayValue').innerText = 'You received grade 2';
  } else if (userScore >= 64 && userScore <= 75) {
    document.getElementById('displayValue').innerText = 'You received grade 3';
  } else if (userScore >= 76 && userScore <= 87) {
    document.getElementById('displayValue').innerText = 'You received grade 4';
  } else if (userScore >= 88 && userScore <= 100) {
    document.getElementById('displayValue').innerText = 'You received grade 5';
  } else {
    document.getElementById('displayValue').innerText =
      'I thought you cannot get score over 100... cheater';
  }
}
