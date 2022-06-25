const User = require('./User');
const Activity = require('./Activity');
const UniqueActivity = require('./UniqueActivity');
const UserActivity = require('./UserActivity');

// create associations
// many to many associations

Activity.belongsToMany(User, {
    foreignKey: 'activity_id',
    through: UserActivity
});

User.belongsToMany(Activity, {
    through: UserActivity,
    foreignKey: 'user_id'
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