const router = require('express').Router();
const { User } = require('../../models');
const upload = require('../../config/imageStorage');
const multer = require('multer')

// GET /api/users
router.get('/', (req, res) => {
    User.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
   .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
   })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


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

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
      
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

      req.session.save(() => {
      // declare session variables
      req.session.id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
   .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    } 
    res.json(dbUserData);
   })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) =>{
  User.destroy({
    where: {
      id: req.params.id
    }
  })
   .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
   })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/signup', (req,res)=>{
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

router.post('/upload', upload.single('image'), (req,res) => {
 // once image uploaded do another fetch (PUT - update image )

 // SAVE IMAGE NAME TO VARIABLE  FETCH PUT REQUEST TO USER UPDATE USER ../img/${variableIMAGENAME} user avatar 

 // REFRESH DASHBOARD WITH NEW USER DATA

  res.render('dashboard');
  res.redirect('/dashboard');



});


module.exports = router;