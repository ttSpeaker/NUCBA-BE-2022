const fs = require("fs");

const findAllFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("./data/", (error, filenames) => {
      if (error) {
        reject(error);
      } else {
        resolve(filenames);
      }
    });
  });
};

const retrieveEntity = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/" + fileName, "utf8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(data));
    });
  });
};

const saveEntity = (entity) => {
  new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/" + entity.id + ".json",
      JSON.stringify(entity),
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve("OK");
      }
    );
  });
};

module.exports = { saveEntity, findAllFiles, retrieveEntity };
