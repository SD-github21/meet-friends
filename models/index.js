const User = require('./User');
const Activity = require('./Activity');
const UniqueActivity = require('./UniqueActivity');
const UserActivity = require('./UserActivity');

// create associations
// many to many associations
User.belongsToMany(Activity, {
    through: UserActivity,
    as: 'user_activities',
    foreignKey: 'user_id'
});

Activity.belongsToMany(User, {
    through: UserActivity,
    as: 'user_activities',
    foreignKey: 'activity_id'
});


// one to many associations
UniqueActivity.belongsTo(User, {
    foreignKey: 'user_id'
});

UniqueActivity.belongsTo(Activity, {
    foreignKey: 'activity_id'
});


User.hasMany(UniqueActivity, {
    foreignKey: 'user_id'
});

Activity.hasMany(UniqueActivity, {
    foreignKey: 'activity_id'
});



module.exports = { User, Activity, UniqueActivity, UserActivity };