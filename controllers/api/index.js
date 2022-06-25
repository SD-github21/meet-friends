const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const activityRoutes = require('./activity-routes.js');
const uniqueActivityRoutes = require('./unique-activity-routes.js');

router.use('/users', userRoutes);
router.use('/activities', activityRoutes);
router.use('/unique', uniqueActivityRoutes);


module.exports = router;