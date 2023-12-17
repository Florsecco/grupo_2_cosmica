const { index, findOne } = require("../models/user.model");

const fs = require('fs')

const path = require('path')

const userController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  profile: (req,res) =>{
    const id  = req.params.id;
    const user = findOne(id);
    if (user === undefined)
      res.redirect('../not-found');
    res.render("./users/profile", {user})
  },
  edit: (req,res)=>{
    const { id } = req.params;
    const user = findOne(id);
    res.render("./users/editProfile", {user})
  }
};

module.exports = userController;
