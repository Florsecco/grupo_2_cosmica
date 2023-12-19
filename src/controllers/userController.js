const { index, findOne, findByEmail } = require("../models/user.model");
const bcrypt = require('bcryptjs');
const salt = 10;
const { validationResult } = require('express-validator');



const fs = require('fs')

const path = require('path')

const userController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  profile: (req, res) => {
    const user = req.session.userLogged;
    if (user === undefined)
      res.redirect('../not-found');
    res.render("./users/profile", { user })
  },
  edit: (req, res) => {
    const { id } = req.params;
    const user = findOne(id);
    res.render("./users/editProfile", { user })
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render('./users/login', {
        errors: errors.mapped(),
        old: req.body
      })
    }

    const user = findByEmail(req.body);
    delete user.password;
    req.session.userLogged = user;
    if (!user)
      return res.render('./users/login', {
        errors: {
          msg: 'Credenciales incorrectas.'
        },
        old: req.body
      });

    res.redirect(`profile`);
  }
};

module.exports = userController;
