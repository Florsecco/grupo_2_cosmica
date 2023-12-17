const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

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
}

module.exports = model