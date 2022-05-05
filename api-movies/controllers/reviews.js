const Movie = require("../models/movies");
const Review = require("../models/review");

const createReview = async (req, res, next) => {
  const movieId = req.body.movie_id;
  if (!movieId) {
    res.send(400, "Movie ID is required");
  }

  const score = req.body.score;
  const content = req.body.content;
  const author = req.body.author;
  if (!score || !content || !author) {
    res.send(400, "Missing data for review ...");
  }
  const newReview = new Review(score, content, author);
  try {
    const movie = await Movie.findById(movieId);
    console.log(movie);
    movie.reviews.push(newReview);
    await movie.save();
    res.send(newReview);
  } catch (error) {
    console.log(error);
    res.send(500, error.message);
  }
};

module.exports = { createReview };
