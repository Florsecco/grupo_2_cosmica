const User = require('../models/user.model')

function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged = false

    let emailCookie = req.cookies.userEmail
    let user = User.findUser("email",emailCookie)
    if (user) {
		req.session.userLogged = user;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware