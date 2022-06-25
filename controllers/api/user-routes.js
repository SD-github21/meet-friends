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
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      city: req.body.city,
      state: req.body.state,
      dob: req.body.dob,
      gender: req.body.gender,
      avatar: 'profile-image'
      
    })
    .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});

router.get('/signup', (req,res)=>{
  User.findOne({
    attributes:{exclude:['password']},
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    res.json(user);
    console.log(user);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})
router.post('/signup', upload.single('image'), (req,res) => {
  res.redirect('/dashboard');

});


module.exports = router;