const Player = require("../models/player");

const searchByName = (req, res, next) => {
  const name = req.params.name;
  const foundPlayers = Player.findByName(name);
  res.send(foundPlayers);
};

const createPlayer = async (req, res, next) => {
  try {
      // validar datos, nomre, el score, el team number
      // validar que no este duplicado 
    const newPlayer = new Player(req.body.name, req.body.score, req.body.team);
    const savedPlayer = await newPlayer.save();
    res.send(newPlayer);
  } catch (err) {
    res.statusCode = 500;
    res.send(err.message);
  }
};

module.exports = {
  searchByName: searchByName,
  createPlayer: createPlayer,
};
