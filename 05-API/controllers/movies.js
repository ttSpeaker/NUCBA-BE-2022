const Movie = require("../models/movie");

const createMovie = async (req, res, next) => {
  console.log("Creating movie:", req.body);
  if (req.body.title === "") {
    res.statusCode = 400;
    res.send("Title cannot be empty");
  }
  
  const moviesByName = await Movie.findByTitle(req.query.title);
  if (moviesByName.length > 0) {
    res.statusCode = 400;
    res.send("Movie with this title already exists");
  }

  let newMovie = new Movie(
    req.body.title,
    req.body.description,
    req.body.cast,
    req.body.director,
    req.body.genres
  );
  try {
    newMovie = await newMovie.save();
    res.send(newMovie);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

const findMovieByTitle = async (req, res, next) => {
  if (req.query.title === "") {
    res.statusCode = 400;
    res.send("Title cannot be empty");
  }
  const movie = await Movie.findByTitle(req.query.title);
  console.log("Response movie", movie);
  res.send(movie);
};
module.exports = {
  createMovie,
  findMovieByTitle,
};
