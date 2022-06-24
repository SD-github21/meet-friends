const User = require('./User');
const Activity = require('./Activity');
const UserActivity = require('./UserActivity');

// create associations
User.hasMany(Activity, {
    foreignKey: 'user_id'
})


// one to many
UserActivity.belongsTo(User, {
    foreignKey: 'user_id'
});

UserActivity.belongsTo(Activity, {
    foreignKey: 'activity_id'
});


User.hasMany(UserActivity, {
    foreignKey: 'user_id'
});

Activity.hasMany(UserActivity, {
    foreignKey: 'activity_id'
});



module.exports = { User, Activity, UserActivity };