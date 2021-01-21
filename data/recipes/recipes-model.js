const db = require("../../db-config");

module.exports = {
  findAll() {
    return db("recipes");
  }
};
