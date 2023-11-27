const { readFileSync, writeFileSync } = require('fs');
const { join } = require("path");

const model = {
    file: join(__dirname, "../data", "products.json"),
    index: () => JSON.parse(readFileSync(model.file)),
    findOne: id => model.index().find(product => product.id == id),
    create: (file) => writeFileSync(model.file, JSON.stringify(file))
}

module.exports = model;