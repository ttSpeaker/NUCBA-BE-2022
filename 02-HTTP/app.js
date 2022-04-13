const fetch = require("node-fetch");
// const body = { a: 1, b: 2, c: 3 };
const run = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    method: "GET",
    // body: body.toString(),
  });
  const data = await response.json();
  console.log(data);
};

run();
