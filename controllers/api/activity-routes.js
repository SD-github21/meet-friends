/** @format */

const router = require("express").Router();
const { User, Activity, UserActivity, UniqueActivity } = require("../../models");

// get all users
router.get("/", (req, res) => {
  Activity.findAll({
    attributes: ["id", "activity_name"],
    include: [
      {
        model: User,
        attributes: ["id", "first_name", "last_name", "avatar", "dob"],
        through: UserActivity,
        include:{
            model: UniqueActivity

        }
        
      },
  
    ],
  })
    .then((dbActivityData) => res.json(dbActivityData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



// get one user
router.get("/:id", (req, res) => {
  
 if(isNaN(parseInt(req.params.id)) === false){
  console.log('true');

  Activity.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    attributes: ["id", "activity_name"],
    include: [
      {
        model: User,
        through: UserActivity,
      },
    ],
  })
    .then((dbActivityData) => {
      if (!dbActivityData) {
        res.status(404).json({ message: "No activity found with this id" });
        return;
      }
      res.json(dbActivityData);
    })
    .catch((err) => {
      
      res.status(500).json(err);
    });
  }
  else{
 
    console.log('second');
    Activity.findOne({
      where:{
        activity_name: req.params.id
      },
      attributes: ["id", "activity_name"],
   
    })
      .then((dbActivityData) => res.json(dbActivityData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  }
});


// router.get("/:activity_name", (req, res) => {
//   Activity.findOne({
//     where:{
//       activity_name: req.params.activity_name
//     },
//     attributes: ["id", "activity_name"],
 
//   })
//     .then((dbActivityData) => res.json(dbActivityData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// create a activity
router.post("/", (req, res) => {
  Activity.create({
    activity_name: req.body.activity_name,
    user_id: req.body.user_id,
  })
    .then((dbActivityData) => res.json(dbActivityData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update an activity's name
router.put("/:id", (req, res) => {
  Activity.update(
    {
      activity_name: req.body.activity_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbActivityData) => {
      if (!dbActivityData) {
        res.status(404).json({ message: "No activity found with this id" });
        return;
      }
      res.json(dbActivityData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Activity.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbActivityData) => {
      if (!dbActivityData) {
        res.status(404).json({ message: "No activity found with this id" });
        return;
      }
      res.json(dbActivityData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
