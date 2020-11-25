const router = require('express').Router();
const { Users } = require('../models');
const passport = require('../middlewares/authentication');
const multer= require('multer');
const upload = multer();
const img= require('./imgPractice').upload;

router.post('/signup',/*upload.any(),*/ (req, res) => {
  console.log("POST body: ", req.body);
  Users.create({
    userName:req.body.username,
    userEmail: req.body.email,
    userPassword: req.body.password,
  }).then((user) => {
      console.log(122);
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login',
    passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
   // Users.findAll({where:{userEmail:req.user.userEmail}}).then(user=>console.log(user))
    console.log(req.user.id)
    req.session.user = req.user.id;
    
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;