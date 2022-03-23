const prompt = require("prompt");
const getById = require("./mymodules/controller/getbyid");

prompt.start();

prompt.get(["id"], (err, result) => {
  if (err) {
    return err;
  }
  getById(result);
});
