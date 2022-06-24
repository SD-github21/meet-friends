const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_Activity extends Model {}

User_Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            prmaryKey: true,
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize, 
        freezeTableName: true,
        underscored: true,
        modelName: 'user-activity'
    }
);

module.exports = User_Activity;