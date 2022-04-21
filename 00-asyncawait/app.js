const fs = require("fs");

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, result) => {
      if (err) {
        reject("No se pudo leer el archivo");
      }
      resolve(result);
    });
  });
};
const writeFilePromise = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err, result) => {
      if (err) {
        reject("No se pudo leer el archivo");
      }
      resolve(result);
    });
  });
};

const run = async () => {
  try {
    const data = await readFilePromise("./dataa/data.json");
    const data1 = await readFilePromise("./data/data1.json");
    await writeFilePromise("./data/datacopied.json", data + data1);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run();
console.log("Promises");
