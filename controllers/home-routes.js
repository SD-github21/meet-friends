//Setup Router
const router = require('express').Router();
// Setup sequelize incase literal search is needed 
const sequelize = require('../config/connection');
// Link to models
const { Activity, User} = require('../models');
//Setup check to see if user is signed in
const authorizeUser = require('../utils/auth');
const {storage , upload }  = require('../config/imageStorage');

router.get('/',(req,res) =>{
    res.render('homepage');
});

router.get('/dashboard', (req,res) =>{
    Activity.findAll()
    .then(activityData => {
        if(!activityData){
            res.status(404).json({message: "No activity data found"});
            return;
        }
        
        const activities = activityData.map( activities => activities.get({ plain: true }));
        
        res.render('dashboard', {activities, loggedIn: true});


    })

    
});


router.get('/signup', (req,res) =>{
    res.render('signup')
})

router.get('/profile', (req,res) =>{
    console.log(req.session);
    User.findOne({
        where:{ 
            email: req.session.username
        }
    }).then(userData => {
        const user = userData.get({plain:true});
        res.render('profile', {
            user,
            loggedIn: true
        });
    })
    

});



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
  
//     router.get('delete/:id', authorizeUser, (req, res) => {
//       console.log('DELETEPROFILE')
//       User.findOne({
//         where: {
//           id: req.params.id
//         }
//       })
    
//     .then(dbProfileData => {
//       if (!dbProfileData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbProfileData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });
  
//     router.delete('/delete/:id', authorizeUser, (req, res) => {
//       console.log('Hey You!')
//       User.destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//         .then(dbProfileData => {
//           if (!dbProfileData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//           }
//           res.json(dbProfileData);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
//     });



module.exports = router;