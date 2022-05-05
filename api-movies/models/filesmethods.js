const fs = require("fs");

const saveEntity = (entity) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/" + entity.id + ".json",
      JSON.stringify(entity),
      (err, _) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(entity);
      }
    );
  });
};

const retrieveEntity = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/" + fileName, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const getAllNames = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("./data", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

module.exports = { saveEntity, retrieveEntity, getAllNames };
