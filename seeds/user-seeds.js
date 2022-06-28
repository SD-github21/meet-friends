
const { User } = require('../models');

const userData = [
  {
    email: "test1@gmail.com",
    password: "test123",
    first_name: "Jane",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    age: "33",
    gender: "female",
    avatar: "girl3.jpeg"
  },
  {
    email: "test2@gmail.com",
    password: "test123",
    first_name: "Jan",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    age: "33",
    gender: "female",
    avatar: "girl4.jpeg"
  },
  {
    email: "test3@gmail.com",
    password: "test123",
    first_name: "John",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    age: "33",
    gender: "male",
    avatar: "guy1.jpeg"
  },
  {
    email: "test4@gmail.com",
    password: "test123",
    first_name: "Jim",
    last_name: "Doe",
    city: "Austin",
    state: "Texas",
    age: "44",
    gender: "male",
    avatar: "guy3.webp"
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
