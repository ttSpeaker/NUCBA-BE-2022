class User {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  nick;

  setNick(nick) {
    this.nick = nick;
  }
}

class conexionDB extends User {
  constructor(name, edad) {
    super(name, edad);
    this.puntaje = 0;
  }
  puntaje;
  sumarPuntaje() {}
}

class Referi extends User {
  constructor(name, edad) {
    super(name, edad);
    this.sanciones = 0;
  }
  sanciones;
  sancionar() {}
}

const player1 = new Jugador("Salvador", 31);

player1.setNick("Salvi");

const referi1 = new Referi("Luciano", 30);

console.log(player1);
console.log(referi1);
