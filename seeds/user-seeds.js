
const { User } = require('../models');

const userData = [
  {
    email: "test1@gmail.com",
    password: "test123",
    first_name: "Jane",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    dob: "02/12/15",
    gender: "female"
  },
  {
    email: "test2@gmail.com",
    password: "test123",
    first_name: "Jan",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    dob: "02/12/15",
    gender: "female"
  },
  {
    email: "test3@gmail.com",
    password: "test123",
    first_name: "John",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    dob: "02/12/15",
    gender: "male"
  },
  {
    email: "test4@gmail.com",
    password: "test123",
    first_name: "Jim",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    dob: "02/12/15",
    gender: "male"
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
