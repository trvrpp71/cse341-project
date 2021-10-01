//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userArray = ['me', 'you', 'them'];

router.post('/addUser', (req,res, next) => {
    const newUser = req.body.addUser;
    console.log(newUser);
    userArray.push(newUser);
    res.redirect('/teamActivities/ta02/');
});


router.post('/remUser', (req,res, next) => {
  const remUser = req.body.remUser;
  const index = userArray.indexOf(remUser);
  console.log(index);

  if (index !== -1) {
     userArray.splice(index,1);
  }
  res.redirect('/teamActivities/ta02/');
});



router.get('/', (req, res, next) => {
  res.render('pages/teamActivities/ta02', {
    title: 'Team Activity 02',
    path: '/teamActivities/ta02', // For pug, EJS
    users: userArray,
  });
});



module.exports = router;
