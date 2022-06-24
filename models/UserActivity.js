const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserActivity extends Model {}

UserActivity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        activity_location: {
            type: DataTypes.STRING,
            allowNull: false
        },

        activity_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define foreign key with user
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
            
        },
       // define foreign key with activity 
        activity_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'activity',
                key: 'id'
        }
    },

    },
    {
        sequelize, 
        freezeTableName: true,
        underscored: true,
        modelName: 'useractivity'
    }
);

module.exports = UserActivity;