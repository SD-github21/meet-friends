// setups up router
const router = require('express').Router();
// setups models
const { User, UniqueActivity , UserActivity, Activity} = require('../../models');
// setups upload
const upload = require('../../config/imageStorage');


// Get all routes
router.get('/', (req, res) => {
    User.findAll({
      include:{
        model: UniqueActivity,
         include:{ 
                  model: Activity,
                  
                 }
              
              }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// get a single user routes
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include:{
      model: UniqueActivity,
       include:{ 
                model: Activity,
                
               }
            
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

// post routes for user
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
      "age": "02/12/15",
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
      age: req.body.age,
      gender: req.body.gender,
      avatar: 'profile-image'
      
    })
    .then(userData => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.email = userData.email;
        req.session.loggedIn = true;
    
        res.json(userData);
})})
 
    
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});
// post routes for user activity
router.post('/user-activity', (req,res) =>{
  UserActivity.create({
    user_id: req.session.user_id,
    activity_id: req.body.category
  }) 
  
  .then(userData => res.json(userData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

})
// setups routes for finding a activity
router.post('/find', (req,res) =>{
  UserActivity.findOne({
    where:{
      activity_id: req.body.activity_id,
      user_id: req.body.user_id
     
    }
  })   .then(dbUserData => {
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
// delete route for user activity
router.delete('/user-activity/:id', (req,res) =>{
  UserActivity.destroy({
      where:{id:req.params.id}
  }) 
  
  .then(userData => res.json(userData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

})
// post post route to check login 
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
      req.session.user_id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});
// update route for id 
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

// delete route for user
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
// post route for signup
router.post('/signup', (req,res)=>{
  User.findOne({
    attributes:{exclude:['password']},
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    res.json(user);
   
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})
// upload post route for image
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });}


            
 
    res.redirect('/profile')
    

      
  });
// update avatar in user  
 router.put('/avatar/:id', (req,res) => {
 
  User.update(
    {
      avatar: req.body.avatar
    },
    
   {
    where:{
      id: req.session.user_id
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
 // logout post route 
 router.post('/logout',(req,res) =>{
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }

})


module.exports = router;