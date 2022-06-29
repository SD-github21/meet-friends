// inits router 
const router = require('express').Router();
// inits all models 
const { User, Activity, UserActivity, UniqueActivity } = require('../../models');

// get all routes for unique activities
router.get('/', (req, res) => {
    UniqueActivity.findAll({
        include: [
            {
              model: User,

            },
            {
                model:Activity,
            },
            
        ]
    })
     .then(dbUniqueData => res.json(dbUniqueData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });

});
// get all routes for post items
router.post('/', (req, res) => {
    UniqueActivity.create({
        location_name: req.body.location_name,
        address: req.body.address,
        user_id: req.session.user_id,
        activity_id: req.body.activity_id,
        city: req.body.city,
        state: req.body.state

    })
     .then(dbUniqueData => res.json(dbUniqueData))
     .catch(err => {
        console.log(err);
        res.status(400).json(err);
     });

});
// delete routes for unique 
router.delete('/:id', (req,res) =>{

    UniqueActivity.destroy({
        where: {
          id: req.params.id
        }
      })
       .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No Unique Activity found by this id' });
          return;
        }
        res.json(dbUserData);
       })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});


module.exports = router;