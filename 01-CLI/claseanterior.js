const fs = require("fs");

// const myArgs = { ...process.argv.slice(2) };
// console.log("myArgs: ", myArgs);

const getData = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const saveData = (path, data) => {
  return new Promise((resolve, reject) => {
    //wrete
  });
};

const run = async () => {
  try {
    // Como hacer multiples promesas en paralelo:
    // const dataAll = await Promise.all([getData("./data/data.json"),getData("./data/data.json")])
    const data1 = await getData("./data/data.json");
    const dataObject = JSON.parse(data);
    console.log(dataObject[1].name);
    // then
    // await saveData("./data/newfile.txt", data);
    // ...
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

run();
console.log("aslkdla")



