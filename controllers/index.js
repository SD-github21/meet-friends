
// Init router
const router = require('express').Router();
// Link to /api related routes
const apiRoutes = require('./api');
// Link to homepage related routes 
const homeRoutes = require('./home-routes');
// Link to dashboard related routes
const dashboardRoutes = require('./dashboard-routes.js');
// Link profile-routes 

//router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.use('/', homeRoutes);


router.use((req,res) =>{
    res.status(404).end();
});

module.exports = router;