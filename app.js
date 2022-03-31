const fs = require("fs");

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
    const data = await getData("./data/data.json");
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
