const searchById = require("../utils/search");
const data = require("../../data/data.json");

const getById = (id) => {
  const searchResult = searchById(id, data);
  searchResult
    ? console.log("Found this character: " + JSON.stringify(searchResult))
    : console.log("No search result found for id: " + id);
};

module.exports = getById;
