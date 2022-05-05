const filesMethods = require("./filesmethods");
const { v4: uuidv4 } = require("uuid");

class Movie {
  constructor(title, description, cast, genres, releaseDate, id, reviews) {
    this.id = id ? id : uuidv4();
    this.title = title;
    this.description = description ? description : "";
    this.cast = cast ? cast : [];
    this.genres = genres ? genres : [];
    this.releaseDate = releaseDate;
    this.reviews = reviews ? reviews : [];
  }

  async save() {
    try {
      const movieSaved = await filesMethods.saveEntity(this);
      return movieSaved;
    } catch (e) {}
  }

  static async findByTitle(title) {
    try {
      const moviesFound = [];
      // obtener todas las peliculas
      const allMovieNames = await filesMethods.getAllNames();

      // iterar sobre esas peliculas
      // TODO mejorar logica para que se puedan buscar en paralelo
      for (let i = 0; i < allMovieNames.length; i++) {
        const movieData = await filesMethods.retrieveEntity(allMovieNames[i]);
        const movie = new Movie(
          movieData.title,
          movieData.description,
          movieData.cast,
          movieData.genres,
          movieData.releaseDate,
          movieData.id,
          movieData.reviews
        );
        // seleccionar las que coincidan
        if (movie.title === title) {
          moviesFound.push(movie);
        }
      }
      return moviesFound;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  static async findById(id) {
    const movieData = await filesMethods.retrieveEntity(id + ".json");
    return new Movie(
      movieData.title,
      movieData.description,
      movieData.cast,
      movieData.genres,
      movieData.releaseDate,
      movieData.id,
      movieData.reviews
    );
  }
}

module.exports = Movie;
