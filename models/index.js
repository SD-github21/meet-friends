const User = require('./User');
const Activity = require('./Activity');

// create associations
// many to many
User.belongsToMany(Activity, {
    foreignKey: 'activity_id'
});

Activity.belongsToMany(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Activity };