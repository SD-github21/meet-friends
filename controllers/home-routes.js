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

    User.findOne({
        where:{ 
            email: req.session.email
        }
    }).then(userData => {
        const user = userData.get({plain:true});
        res.render('profile', {
            user,
            loggedIn: true
        });
    })
    

});

module.exports = router;