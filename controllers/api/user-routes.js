const router = require('express').Router();
const { User, Activity, UniqueActivity, UserActivity } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password']},
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Activity,
        attributes: ['id', 'activity_name'],
        through: UserActivity,
        as: 'user_activities'

      },
      {
        model: UniqueActivity,
        attributes: ['id', 'uactivity_location', 'uactivity_address', 'user_id', 'activity_id'],
        include: {
          model: Activity,
          attributes: ['activity_name']
      }
      }
    ]
  })
   .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
   })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    avatar: req.body.avatar,
    city: req.body.city,
    state: req.body.state,
    dob: req.body.dob,
    gender: req.body.gender
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
   .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }

    res.json({ user: dbUserData, message: 'You are now logged in!' });
   });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
   .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    } 
    res.json(dbUserData);
   })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) =>{
  User.destroy({
    where: {
      id: req.params.id
    }
  })
   .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
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