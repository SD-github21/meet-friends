const router = require('express').Router();
const { User } = require('../../models');
const upload = require('../../config/imageStorage');
const multer = require('multer');
const authorizeUser = require('../../utils/auth');

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

// });
router.post('/logout', (req, res) => {
  if (req.session.user_id){
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


router.post('/upload', upload.single('image'), (req,res) => {
 // once image uploaded do another fetch (PUT - update image 
// .then (router.put('/profile))}
 // SAVE IMAGE NAME TO VARIABLE  FETCH PUT REQUEST TO USER UPDATE USER ../img/${variableIMAGENAME} user avatar 

 // REFRESH DASHBOARD WITH NEW USER DATA

  res.render('profile');
  res.redirect('/profile');

//   User.findOne({
//     where:{ 
//         email: req.session.email
//     }
// }).then(userData => {
//     const user = userData.get({plain:true});
//     res.render('profile', {
//         user,
//         loggedIn: true
//     });
// })


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



router.get('/edit/:id', (req, res) => {
  User.findOne({
      where: {
        id: req.params.id
      },
      
    })
      .then(dbProfileData => {
        if (!dbProfileData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
 
        const profile = dbProfileData.get({ plain: true });
  
        res.render('edit-profile', {
          profile,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put('/edit/:id', (req, res) => {
    User.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city, 
        state: req.body.state, 
        dob: req.body.dob,
        gender: req.body.gender
                
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbProfileData => {
        if (!dbProfileData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbProfileData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', authorizeUser, (req, res) => {
    console.log('id', req.params.id);
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbProfileData => {
        if (!dbProfileData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbProfileData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;