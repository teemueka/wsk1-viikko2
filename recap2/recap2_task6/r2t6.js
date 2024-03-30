let counter = 0;

const userInput = parseInt(prompt('How many movies would you like to rate?'));
const movies = [];

do {
  const movie = {
    title: '',
    rating: '',
  };
  inputTitle = prompt('Enter a movie title');
  if (inputTitle !== '') {
    movie.title = inputTitle;
  }
  inputRating = parseFloat(prompt('Enter a rating for the movie'));
  if (!isNaN(inputRating)) {
    movie.rating = inputRating;
  }
  movies.push(movie);
  counter++;
} while (counter !== userInput);

movies.sort((a, b) => b.rating - a.rating);

const moviesList = movies
  .map((movie) => `${movie.title}: ${movie.rating}`)
  .join('\n');
document.getElementById('displayValue').innerText =
  'Movies from high to low rating:\n' + moviesList;
