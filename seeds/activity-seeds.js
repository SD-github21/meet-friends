const { Activity } = require('../models');

const activityData = [
  {
   activity_name: 'hiking',
  },
  {
    activity_name: 'concert',
  },
  {
    activity_name: 'fishing',
  },
  {
    activity_name: 'go out for drinks',
  }

];

const seedActivities = () => Activity.bulkCreate(activityData);

module.exports = seedActivities;
