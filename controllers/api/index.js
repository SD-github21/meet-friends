const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const activityRoutes = require('./activity-routes.js');

router.use('/users', userRoutes);
router.use('/activities', activityRoutes);

module.exports = router;