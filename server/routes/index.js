var express = require('express');
var router = express.Router();

const passport = require('passport');
let DB = require('../config/db');
let userModel = require('../models/user');
let User = userModel.User;

router.get('/login', function(req,res,net){
  if(!req.user)
  {
    res.render('auth/login',
    {
      title:'Login',
      message: req.flash('loginMessage'),
      displayName: req.user? req.user.displayName: ""
    }
    )
  }
  else{
    return res.redirect('/')
  }
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
