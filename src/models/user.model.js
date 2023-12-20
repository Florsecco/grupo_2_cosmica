const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const bcrypt = require("bcryptjs");

const model = {
  file: join(__dirname, "../data", "users.json"),
  create: (file) => writeFileSync(model.file, JSON.stringify(file, null, 2)),
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
      let userIsValidPassword = bcrypt.compareSync(
        userInput.password,
        user.password
      );
      if (userIsValidPassword) return user;
    }
    return undefined;
  },
  update: (userId, userUpdated) => {
    let users = model.index();
    let user = users.find((x) => x.id == userId);
    if (!userUpdated.oldPassword || !userUpdated.password) {
      delete userUpdated.oldPassword;
      delete userUpdated.password;
    }

   
    let userIsValidPassword = bcrypt.compareSync(
        userUpdated.oldPassword,
        user.password
      );
    if (userIsValidPassword) {
        delete userUpdated.oldPassword;
        userUpdated.password = bcrypt.hashSync(userUpdated.password, 10);
      } else {
        delete userUpdated.oldPassword;
        delete userUpdated.password;
      }
      
    delete userUpdated.oldPassword;
    delete userUpdated.password;
    console.log("User actualizado:", userUpdated);

    // user = { ...user, ...userUpdated };
    console.log("User:\n", user);
    console.log("Users:\n", users);
    model.create(users);
  },
};

module.exports = model;
