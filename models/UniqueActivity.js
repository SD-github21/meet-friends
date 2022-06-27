const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UniqueActivity extends Model {}

UniqueActivity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false

        },

        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location_name:{
            type: DataTypes.STRING,
            allowNull:false
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
        modelName: 'uniqueactivity'
    }
);

module.exports = UniqueActivity;