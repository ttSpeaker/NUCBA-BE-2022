const filesMethods = require("./filesmethods");
const { v4: uuidv4 } = require("uuid");

class Movie {
  constructor(title, description, cast, director, genres) {
    this.id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    this.title = title;
    this.description = description ? description : "";
    this.cast = cast ? cast : [];
    this.director = director ? director : "";
    this.genres = genres ? genres : [];
    this.reviews = [];
  }

  async save() {
    try {
      await filesMethods.saveEntity(this);
      return this;
    } catch (err) {
      return err;
    }
  }

  static async findByTitle(title) {
    try {
      const allFileNames = await filesMethods.findAllFiles();
      const movies = [];
      for (let i = 0; i < allFileNames.length; i++) {
        const movie = await filesMethods.retrieveEntity(allFileNames[i]);
        if (title === movie.title) {
          console.log("Found:", movie);
          movies.push(movie);
        }
      }
      return movies;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  static async getById(id) {}
}

module.exports = Movie;
