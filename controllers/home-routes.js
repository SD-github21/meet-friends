//Setup Router
const router = require('express').Router();
// Setup sequelize incase literal search is needed 
const sequelize = require('../config/connection');
// Link to models
const { Activity, User, UniqueActivity} = require('../models');
//Setup check to see if user is signed in
const authorizeUser = require('../utils/auth');
const {storage , upload }  = require('../config/imageStorage');

// |  --------- all the routes for the html page ---------- |
router.get('/',(req,res) =>{
    res.render('homepage');
});
// sends user to dashboard
router.get('/dashboard', authorizeUser, (req,res) =>{
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
// sends user to signup page
router.get('/signup', (req,res) =>{
    res.render('signup')
})
// sends user to profile page
router.get('/profile', authorizeUser, (req,res) =>{

    User.findOne({
        where:{ 
            email: req.session.email
        },
        include:{
          model: UniqueActivity,
           include:{ 
                    model: Activity,
                    
                   }
                
                }
    }).then(userData => {
        const user = userData.get({plain:true});
      
        res.render('profile', {
            user,
            loggedIn: true
        });
    })
    

});
// sends user to private profile pages
router.get('/profile/:id', authorizeUser, (req,res) =>{

    User.findOne({
        where:{ 
            id: req.params.id
        },
        include:{
          model: UniqueActivity,
           include:{ 
                    model: Activity,
                    
                   }
                
                }
    }).then(userData => {
        const user = userData.get({plain:true});
        
        res.render('user-profile', {
            user,
            loggedIn: true
        });
    })
    

});

module.exports = router;