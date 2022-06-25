const router = require('express').Router();
const { Activity, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Activity.findAll({
        attributes: ['id', 'activity_name'],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'avatar', 'dob']
            }
        ]
    })
     .then(dbActivityData => res.json(dbActivityData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });
});

// get one user
router.get('/:id', (req, res) => {
    Activity.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'activity_name'],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'avatar', 'dob', 'gender']
            }
        ]
    })
     .then(dbActivityData => {
        if (!dbActivityData) {
            res.status(404).json({ message: 'No activity found with this id' });
            return;
        }
        res.json(dbActivityData)
    })
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });
});

// create a activity
router.post('/', (req, res) => {
    Activity.create({
        activity_name: req.body.activity_name,
        user_id: req.body.user_id
    })
     .then(dbActivityData => res.json(dbActivityData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
     });
});

// update an activity's name
router.put('/:id', (req, res) => {
    Activity.update(
        {
            activity_name: req.body.activity_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
     .then(dbActivityData => {
        if (!dbActivityData) {
            res.status(404).json({ message: 'No activity found with this id' });
            return;
        }
        res.json(dbActivityData);
     })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
    Activity.destroy({
        where: {
            id: req.params.id
        }
    })
     .then(dbActivityData => {
        if (!dbActivityData) {
            res.status(404).json({ message: 'No activity found with this id' });
            return;
        }
        res.json(dbActivityData);
     })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
})

module.exports = router;