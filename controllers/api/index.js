// setup router
const router = require('express').Router();
//setups user routes
const userRoutes = require('./user-routes.js');
// setups activity routes
const activityRoutes = require('./activity-routes.js');
// sets up unique activity routes
const uniqueActivityRoutes = require('./unique-activity');

// setups all the routes usage
router.use('/users', userRoutes);
router.use('/activities', activityRoutes);
router.use('/unique', uniqueActivityRoutes);

module.exports = router;