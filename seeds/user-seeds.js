
const { User } = require('../models');

const userData = [
  {
    email: "janedoe@gmail.com",
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
    email: "jandoe@gmail.com",
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
    email: "johndoe@gmail.com",
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
    email: "jimdoe@gmail.com",
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
