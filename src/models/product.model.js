const { readFileSync, writeFileSync } = require('fs');
const { join } = require("path");

const model = {
    file: join(__dirname, "../data", "products.json"),
    index: () => {
        try {
            return JSON.parse(readFileSync(model.file))
        } catch (error) {
            console.log(error);
            return [];
        }
    },
    findOne: id => model.index().find(product => product.id == id),
    create: (file) => writeFileSync(model.file, JSON.stringify(file, null, 2)),
    
}

module.exports = model;