// Import the Sequelize constructor from the library
const Sequelize = require("sequelize");

// Require dot .env to protect files 
require('dotenv').config();

// set a variable to sequelize
let sequelize;

// setup database config
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
}


module.exports = sequelize;