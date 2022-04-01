const filesMethods = require("./filesmethods");

const addPlayer = async (name, email) => {
  const newPlayer = {
    name: name,
    email: email,
    score: 0,
  };
  try {
    const players = await filesMethods.getPlayers();

    players.push(newPlayer);

    await filesMethods.savePlayers(players);
  } catch (err) {
    throw err;
  }

  return newPlayer;
};

const getPlayerByName = async (name) => {};

module.exports = {
  addPlayer,
};
