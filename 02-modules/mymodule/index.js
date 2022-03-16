const APP_NAME = "modules_lesson";

function log(message) {
  console.log(APP_NAME, message);
}

module.exports.log = log;
// module.exports = log; (en este caso el export ya es la funcion y puedo invocarlo directamente mostrar ej)
console.log(module);
