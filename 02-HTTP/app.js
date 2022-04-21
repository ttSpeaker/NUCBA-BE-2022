const http = require("http");
const fetch = require("node-fetch");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    try {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
        method: "GET",
      });
      //.then
      const data = await result.json();
      //.then
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(data));
      res.end();
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("error al obtener el pokemon");
    }
  }
});

server.listen(3000);
