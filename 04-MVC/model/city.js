const userCities = [];
let id = 0;

class City {
  constructor(name, country) {
    this.id = id++;
    this.name = name;
    this.country = country;
  }

  save() {
    userCities.push(this);
    console.log(userCities);
  }

  static delete(index) {
    userCities.splice(index, 1);
  }

  static getAllCities() {
    return userCities;
  }

  static getById(id){
      
  }
}

module.exports = City;
