const { UniqueActivity } = require('../models');

const uniqueActivityData = [
  {
   city: 'Austin',
   state: 'Texas',
   address: '1251 example ln',
   location_name: 'Example Plaza',
   user_id: 1,
   activity_id: 3
  },
  {
    city: 'Austin',
    state: 'Texas',
    address: '1251 example ln',
    location_name: 'Example Plaza',
    user_id: 1,
    activity_id: 4
   },
   {
    city: 'Austin',
    state: 'Texas',
    address: '1251 example ln',
    location_name: 'Example Plaza',
    user_id: 1,
    activity_id: 2
   },
   {
    city: 'Austin',
    state: 'Texas',
    address: '1251 example ln',
    location_name: 'Example Plaza',
    user_id: 1,
    activity_id: 1
   },
   {
    city: 'Austin',
    state: 'Texas',
    address: '1251 example ln',
    location_name: 'Example Plaza',
    user_id: 2,
    activity_id: 1
   },
   {
     city: 'Austin',
     state: 'Texas',
     address: '1251 example ln',
     location_name: 'Example Plaza',
     user_id: 2,
     activity_id: 2
    },
    {
     city: 'Austin',
     state: 'Texas',
     address: '1251 example ln',
     location_name: 'Example Plaza',
     user_id: 2,
     activity_id: 3
    },
    {
     city: 'Austin',
     state: 'Texas',
     address: '1251 example ln',
     location_name: 'Example Plaza',
     user_id: 2,
     activity_id: 4
    },
    {
        city: 'Austin',
        state: 'Texas',
        address: '1251 example ln',
        location_name: 'Example Plaza',
        user_id: 3,
        activity_id: 1
       },
       {
         city: 'Austin',
         state: 'Texas',
         address: '1251 example ln',
         location_name: 'Example Plaza',
         user_id: 3,
         activity_id: 2
        },
        {
         city: 'Austin',
         state: 'Texas',
         address: '1251 example ln',
         location_name: 'Example Plaza',
         user_id: 3,
         activity_id: 3
        },
        {
         city: 'Austin',
         state: 'Texas',
         address: '1251 example ln',
         location_name: 'Example Plaza',
         user_id: 3,
         activity_id: 4
        },
        {
            city: 'Austin',
            state: 'Texas',
            address: '1251 example ln',
            location_name: 'Example Plaza',
            user_id: 4,
            activity_id: 1
           },
           {
             city: 'Austin',
             state: 'Texas',
             address: '1251 example ln',
             location_name: 'Example Plaza',
             user_id: 4,
             activity_id: 2
            },
            {
             city: 'Austin',
             state: 'Texas',
             address: '1251 example ln',
             location_name: 'Example Plaza',
             user_id: 4,
             activity_id: 3
            },
            {
             city: 'Austin',
             state: 'Texas',
             address: '1251 example ln',
             location_name: 'Example Plaza',
             user_id: 4,
             activity_id: 4
            },

];

const seedUnique = () => UniqueActivity.bulkCreate(uniqueActivityData);

module.exports = seedUnique;
