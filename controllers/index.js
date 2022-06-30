
// Init router
const router = require('express').Router();
const { Activity } = require('../models');
// Link to /api related routes
const apiRoutes = require('./api');
// Link to homepage related routes 
const homeRoutes = require('./home-routes');
// Link to dashboard related routes

// Link profile-routes 

//router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
// home routes usage 
router.use('/', homeRoutes);


router.use((req,res) =>{
    res.status(404).end();
});

module.exports = router;