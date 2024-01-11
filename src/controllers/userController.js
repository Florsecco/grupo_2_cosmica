const {
  index,
  findOne,
  findByEmail,
  update,
  create,
  deleteUser,
  generateId,
  passwordCheck,
} = require("../models/user.model");
const bcrypt = require("bcryptjs");
const salt = 10;
const { validationResult } = require("express-validator");

const fs = require("fs");

const path = require("path");

const userController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);

    // if (!req.file || req.fileError) {
    //   errors.errors.push({
    //     type: "field",
    //     value: undefined,
    //     msg: req.fileError || "Debe subir una imagen",
    //     path: "avatar",
    //     location: "body",
    //   });
    // }

    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("./users/register", {
        errors: errors.mapped(),
        old: req.body,
      });
    }

    const imagenEnMemoria = req.file.buffer;

    // Guardar la imagen en disco
    const uniqueSuffix = "user-" + Date.now() + '-' + Math.round(Math.random() * 1E9)
    const nombreArchivo = req.file.fieldname + '-' + uniqueSuffix + path.extname(req.file.originalname); // Nombre del archivo con extensión
    const rutaDestino = path.join(__dirname, "../../public/img/users/", nombreArchivo); // Ruta donde se guardará la imagen en disco

    // Escribir la imagen en disco
    require('fs').writeFile(rutaDestino, imagenEnMemoria, (error) => {
      if (error) {
        console.log('Se guardo en el disco la imagen');
        // return res.status(500).send('Error al guardar la imagen');
      }
      // return res.status(200).send('Imagen guardada correctamente en disco');
    });

    delete req.body.confirm_password;
    const user = {
      id: generateId(),
      ...req.body,
      password: bcrypt.hashSync(req.body.password, salt),
      category: 1,
      state: 1,
      image: nombreArchivo,
    };

    const users = index();
    users.push(user);
    create(users);

    return res.redirect("/users/login");
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
    if (req.body.rememberMe) {
      res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
    }

    return res.redirect(`profile`);
  },
  update: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("./users/editProfile", {
        errors: errors.mapped(),
        old: req.body,
        user: null,
      });
    }

    const userId = req.session.userLogged.id;
    const user = req.body;
    const passwordValidation = passwordCheck(userId, user);
    if (user.password) {
      if (!passwordValidation) {
        return res.render("./users/editProfile", {
          errors: {
            msg: "Contraseña incorrecta",
          },
          old: req.body,
          user: null,
        });
      }
    }
    if (req.file != undefined) {
      const avatarAnterior = req.session.userLogged.image;
      user.image = req.file.filename;
      fs.unlinkSync(
        path.join(__dirname, "../../public/img/users", avatarAnterior)
      );
    }

    const userUpdate = update(userId, user);
    delete userUpdate.password;


    req.session.userLogged = userUpdate;
    if (req.cookies.userEmail) {
      res.clearCookie("userEmail")
      res.cookie("userEmail", userUpdate.email, { maxAge: 1000 * 60 * 60 });
    }
    res.redirect("/users/profile");
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    res.redirect("/");
  },
  delete: (req, res) => {
    const id = req.session.userLogged.id;
    deleteUser(id);
    req.session.destroy();
    res.redirect("/users/login");
  },
};

module.exports = userController;
