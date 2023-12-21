const { index, findOne, findByEmail, update , create, deleteUser} = require("../models/user.model");
const bcrypt = require("bcryptjs");
const salt = 10;
const { validationResult } = require("express-validator");

const fs = require("fs");

const path = require("path");

const userController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  profile: (req, res) => {
    const user = req.session.userLogged;
    if (user === undefined) res.redirect("../not-found");
    res.render("./users/profile", { user });
  },
  edit: (req, res) => {
    const user = req.session.userLogged;
    if (user === undefined) res.redirect("../not-found");
    res.render("./users/editProfile", { user });
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("./users/login", {
        errors: errors.mapped(),
        old: req.body,
      });
    }

    const user = findByEmail(req.body);
    if (!user)
      return res.render("./users/login", {
        errors: {
          msg: "Credenciales incorrectas.",
        },
        old: req.body,
      });

    delete user.password;

    req.session.userLogged = user;

    return res.redirect(`profile`);
  },
  update: (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("./users/edit", {
        errors: errors.mapped(),
        old: req.body,
      });
    }

    const userId = req.session.userLogged.id;
    const user = req.body;

    if (req.file != undefined) {
      const avatarAnterior = req.session.userLogged.image;
      user.image = req.file.filename;
      fs.unlinkSync(path.join(__dirname, '../../public/img/users', avatarAnterior))
    }


    const userUpdate = update(userId, user);
    delete userUpdate.password;
    req.session.userLogged = userUpdate;
    res.redirect("/users/profile");
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
  delete: (req, res) => {
    const id = req.session.userLogged.id;
    deleteUser(id)
    req.session.destroy()
    res.redirect('/users/login')
  }
};

module.exports = userController;
