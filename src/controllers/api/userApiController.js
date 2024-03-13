const db = require("../../database/models");

const User = db.User;

const userApiController = {
  getAll: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "first_name", "last_name", "email"],
      });
      const newUsers = users.map((user) => {
        return {
          id: user.id,
          name: user.first_name + " " + user.last_name,
          email: user.email,
          detail: `http://localhost:3010/api/users/${user.id}`,
        };
      });
      res.json({
        count: users.length,
        users: newUsers,
      });
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  },
  findOne: async (req, res) => {
    try {
      const id = req.params.id;

      const user = await User.findOne({
        where: { id: id },
        attributes: [
          "id",
          "first_name",
          "last_name",
          "email",
          "image",
          "address",
        ],
      });
      if(user){
      res.json({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        image: `http://localhost:3010/img/users/${user.image}`,
        address: user.address,
      })}
      else{
        res.json({user:'Not Found'})
      }
    } catch (error) {
      res.send({ error: error });
    }
  },
  validate: async (req, res) => {
    try {
      const email = req.params.email;

      const respuesta = await User.findOne({
        where: { email: email },
      });

      if (respuesta) {
        res.json({
          noExiste: false,
        });
      } else {
        res.json({
          noExiste: true,
        });
      }
    } catch (error) {
      res.send({ error: error });
    }
  },
};

module.exports = userApiController;
