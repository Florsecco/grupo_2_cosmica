const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");
const bcrypt = require("bcryptjs");

const model = {
  file: join(__dirname, "../data", "users.json"),
  create: (file) => writeFileSync(model.file, JSON.stringify(file, null, 2)),
  index: () => {
    try {
      const allUsers = JSON.parse(readFileSync(model.file, "utf-8"));
      const activeUsers = allUsers.filter(user => user.state === 1)
      return activeUsers
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
  findUser: (field,text)=>{
    const users= model.index()
    const userFound = users.find(user=> user[field] == text)
    return userFound
  },
  update: (userId, userUpdated) => {
    let users = model.index();
    let user = users.find((x) => x.id == userId);
    if (userUpdated.oldPassword && userUpdated.password) {
      let userIsValidPassword = bcrypt.compareSync(
        userUpdated.oldPassword,  
        user.password
      );

      if (userIsValidPassword)
        user.password = bcrypt.hashSync(userUpdated.password, 10);

    }

    user.first_name = userUpdated.first_name;
    user.last_name = userUpdated.last_name;
    user.email = userUpdated.email;
    user.address = userUpdated.address;
    user.image = userUpdated.image ? userUpdated.image : user.image;

    model.create(users);
    return user;
  },
  deleteUser: (userId) => {
    let users = model.index();
    let user = users.find((x) => x.id == userId);
    user.state = 0

    model.create(users);
    
    return true
  },
  generateId: () => {
    const users = model.index();
    if (users.length > 0) {
      id = Math.max(...users.map((x) => x.id)) + 1;
    } else {
      id = 1;
    }
    return id;
  }
};

module.exports = model;
