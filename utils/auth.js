const authorizeUser = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/');
    } else {
      console.log('hello next')
      next();
    }
  };
  
  module.exports = authorizeUser;
  