const players = require("./players");
// guardar jugadores (name, email)
// buscar jugadores
//primer argumento es la funcionalidad que queremos, del segundo en adelante los datos

// funcion run es async, para que se pueda usar el await en promesas
// y continuar la ejecucion dentro de run cuando la promesa termine
const run = async () => {
  const args = process.argv.slice(2);

  switch (args[0]) {
    case "addPlayer":
      try {
        // con el await voy hacer que la ejecucion de esta funcion en la que estoy (run)
        // se interrumpa hasta que la promesa addPlayer se resuelva y me de un resultado
        const newPlayer = await players.addPlayer(args[1], args[2]);
        console.log("Created player OK: " + JSON.stringify(newPlayer));
      } catch (err) {
        //caso la promesa haga un reject, y no obtenga un resultado, voy a entrar en el catch
        console.log("Error creating player: " + err);
      }

      //MISMO COMPORTAMIENTO con .then().catch()
      // players
      //   .addPlayer(args[1], args[2])
      //   .then((result) => {
      //     console.log("Created player OK: " + JSON.stringify(result));
      //   })
      //   .catch((err) => {
      //     console.log("Error creating player: " + err);
      //   });
      break;
    case "getPlayer":
      //some code here
      break;
    default:
      console.log("Command not found:" + args[0]);
      break;
  }
};

run();
