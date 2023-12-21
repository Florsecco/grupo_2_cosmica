function guestMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        next();
      }
      res.redirect('/users/profile');
}

module.exports = guestMiddleware;