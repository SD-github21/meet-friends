// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// create Activity model
// Initialize Activity model (table) by extending off Sequelize's Model class
class Activity extends Model {}

Activity.init( 
    {
        // define activity id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define name of activity
        activity_name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'activity'
    }
);

module.exports = Activity;