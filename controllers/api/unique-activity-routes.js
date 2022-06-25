const router = require('express').Router();
const { User, Activity, UserActivity, UniqueActivity } = require('../../models');

router.get('/', (req, res) => {
    UniqueActivity.findAll()
     .then(dbUniqueData => res.json(dbUniqueData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });

});

router.post('/', (req, res) => {
    UniqueActivity.create({
        uactivity_location: req.body.uactivity_location,
        uactivity_address: req.body.uactivity_address,
        user_id: req.body.user_id,
        activity_id: req.body.activity_id
    })
     .then(dbUniqueData => res.json(dbUniqueData))
     .catch(err => {
        console.log(err);
        res.status(400).json(err);
     });

});


module.exports = router;