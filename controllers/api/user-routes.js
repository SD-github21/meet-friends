const router = require('express').Router();
const { User } = require('../../models');
const upload = require('../../config/imageStorage');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/signup', upload.single('image'), (req,res) => {
  res.redirect('http://localhost:3001/dashboard');

});


module.exports = router;