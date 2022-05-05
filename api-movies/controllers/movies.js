const Movie = require("../models/movies");

const create = async (req, res, next) => {
  // validar datos por ejemplo que este el titulo
  const title = req.body.title;
  if (title === undefined || title === "") {
    res.statusCode = 400;
    res.send("Title cannot be empty");
  }
  const releaseDate = req.body.releaseDate;
  //validar releaseDate

  let newMovie = new Movie(
    title,
    req.body.description,
    req.body.cast,
    req.body.director,
    req.body.genres,
    releaseDate
  );
  try {
    // validar que no este duplicadas
    console.log("Validate duplicates for title: ", title);
    const moviesWithName = await Movie.findByTitle(title);

    if (moviesWithName.length > 0) {
      res.send(400, `Movie with title ${title} already exists`);
      return;
    }
    //buscar si encuentro otra con el mimso nombre
    console.log("Saving movie: ", newMovie);
    const movieSaved = await newMovie.save();
    res.send(movieSaved);
  } catch (e) {
    console.log(e);
    res.send(500, e.message);
  }
};

const search = async (req, res, next) => {
  try {
    const title = req.query.title;

    if (title == undefined || title === "") {
      res.send(400, "No title specified");
    }
    const movies = await Movie.findByTitle(title);
    res.send(movies);
  } catch (error) {
    console.log(error);
    res.send(500, error.message);
  }
};
const getById = async (req, res, next) => {};
const updateById = async (req, res, next) => {
  //PATH PARAM id es parte de la ruta lo puedo acceder como parte del req
  res.send("updating movie:" + req.params.id);
};

const deleteById = async (req, res, next) => {
  //PATH PARAM id es parte de la ruta lo puedo acceder como parte del req
  res.send("deleting movie:" + req.params.id);
};

module.exports = {
  create,
  search,
  getById,
  updateById,
  deleteById,
};
