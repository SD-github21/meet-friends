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


router.post('/', (req,res) => {
  /*
    expects 
    {
      "email": "test@gmail.com",
      "password": "test123",
      "first_name": "Jane",
      "last_name": "Doe",
      "city": "Austin",
      "state": "Texas",
      "dob": "02/12/15",
      "gender": "male"
    }
  */
    User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      avatar: null,
      city: req.body.city,
      state: req.body.state,
      dob: req.body.dOB,
      gender: req.body.gender,
    })
    .then(userData =
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.email =userData.email;
        req.session.loggedIn = true;
    
        res.json(userData);
      }))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});


// router.post('/signup', upload.single('image'), (req,res) => {
//   res.redirect('/dashboard');

// });


module.exports = router;