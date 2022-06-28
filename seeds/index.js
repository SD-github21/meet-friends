const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedActivities = require('./activity-seeds');
const seedUserActivity = require('./useractivity-seeds');
const seedUnique = require('./unique-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  await seedActivities();
  console.log('\n----- Activities SEEDED -----\n');

  await seedUserActivity();
  console.log('\n----- UserActivity SEEDED -----\n');
  await seedUnique();
  console.log('\n----- UniqueUserActivity SEEDED -----\n');

  process.exit(0);
};

seedAll();
