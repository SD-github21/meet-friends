/** @format */

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// create User model
// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define tables columns and configurations
User.init(
  {
    // define id column
    id: {
      // use the special Sequelize DataTypes object to provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's NOT NULL option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    // define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true,
      },
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len: [4],
      },
    },
    // define uesr name
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define a user last name
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define a user's avatar image
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // define a user's city of residence
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define a user's state of residence
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define a user's date of birth
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // define a user's gender
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // TABLE CONFIG OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration)
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;