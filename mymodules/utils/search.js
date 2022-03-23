const searchById = (id, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      return list[i];
    }
  }

  return null;
};

module.exports = searchById;
