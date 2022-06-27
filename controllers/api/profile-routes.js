// const authorizeUser = require("../../utils/auth");

// router.get('/edit/:id', (req, res) => {
//     Post.findOne({
//         where: {
//           id: req.params.user_id
//         },
//         attributes: [
//             first_name,
//             last_name,
//             email,
//             password,
//             city, 
//             state, 
//             dob,
//             gender
        
//         ],
        
//       })
//         .then(dbProfileData => {
//           if (!dbProfileData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//           }
    
//           const profile = dbProfileData.get({ plain: true });
    
//           res.render('edit-profile', {
//             profile,
//             loggedIn: req.session.loggedIn
//           });
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
//     });
    
