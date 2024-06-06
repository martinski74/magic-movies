const { Movie } = require('../models/Movie');

async function getAllMovies() {
  const movies = await Movie.find().lean();
  return movies;
}

async function getMovieById(id) {
  const movie = await Movie.findById(id).lean().populate('cast');
  return movie;
}

async function createMovie(movieData) {
  const movie = new Movie({
    title: movieData.title,
    genre: movieData.genre,
    director: movieData.director,
    year: Number(movieData.year),
    rating: Number(movieData.rating),
    description: movieData.description,
    imageURL: movieData.imageURL,
  });

  await movie.save();

  return movie;
}

async function attachCastToMovie(movieId, castId) {
  const movie = await Movie.findById(movieId);

  if (!movie) {
    throw new Error(`Movie ${movieId} not found`);
  }

  movie.cast.push(castId);

  await movie.save();

  return movie;
}

async function searchMovies(title, genre, year) {
  let query = {};

  if (title) {
    query.title = new RegExp(title, 'i');
  }

  if (genre) {
    query.genre = genre.toLowerCase();
  }

  if (year) {
    query.year = year;
  }

  return Movie.find(query).lean();
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  attachCastToMovie,
  searchMovies,
};
