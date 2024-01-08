function guestMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        next();
      }
      return res.redirect('/users/profile');
}

module.exports = guestMiddleware;