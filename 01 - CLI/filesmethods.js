const fs = require("fs");

const PLAYERS_PATH = "./data/playersdata.json";

const getPlayers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(PLAYERS_PATH, "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(result));
    });
  });
};

const savePlayers = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(PLAYERS_PATH, JSON.stringify(data), (err, result) => {
      if (err) {
        reject(err);
      }
      resolve("OK");
    });
  });
};

module.exports = {
  getPlayers,
  savePlayers,
};
