const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const bcrypt = require('bcryptjs');

const model = {
  file: join(__dirname, "../data", "users.json"),
  index: () => {
    try {
      return JSON.parse(readFileSync(model.file));
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  findOne: (id) => model.index().find((user) => user.id == id),
  findByEmail: (userInput) => {
    const user = model.index().find((user) => user.email == userInput.email);
    if (user) {
      let userIsValidPassword = bcrypt.compareSync(userInput.password, user.password);
      if (userIsValidPassword)
        return user;
    }
    return undefined;
  }
}

module.exports = model