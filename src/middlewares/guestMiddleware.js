function guestMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        next();
      }
      res.redirect('/');
}

module.exports = guestMiddleware;