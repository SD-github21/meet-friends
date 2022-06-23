//Setup Router
const router = require('express').Router();
// Setup sequelize incase literal search is needed 
const sequelize = require('../config/connection');
// Link to models
//const { Activity, User} = require('..models/');
//Setup check to see if user is signed in
const authorizeUser = require('../utils/auth');

router.get('/',(req,res) =>{
    res.render('homepage');
});

router.get('/dashboard', (req,res) =>{
    res.render('dashboard');
});


module.exports = router;