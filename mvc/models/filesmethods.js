const fs = require("fs");

const DATA_PATH = "./data/";
const FILE_EXT = ".json";

const getData = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(DATA_PATH + fileName + FILE_EXT, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const saveFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      DATA_PATH + fileName + FILE_EXT,
      JSON.stringify(data),
      (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        resolve("OK");
      }
    );
  });
};

module.exports = {
  saveFile,
  getData,
};
