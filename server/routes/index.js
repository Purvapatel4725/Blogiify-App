var express = require('express');
var router = express.Router();

const passport = require('passport');
let DB = require('../config/db');
let userModel = require('../models/user');
let User = userModel.User;

//Login Setup
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

router.post('/login',function(req,res,net){
  passport.authenticate('local',function(err,User,info)
  {
    //server error
    if(err){
      return next(err);
    }
    //login error
    if(!User){
      req.flash('loginMessage','AuthenticationError')
    }
    req.login(User,(err)=>{
      if(err)
      {
        return next(err)
      }
      return res.redirect('/blog');
    })
  })(req,res,next)
})


router.get('/register', function(req,res,next){
  if(!req.user)
  {
    res.render('auth/register',
    {
      title:'Register',
      message: req.flash('registerMessage'),
      displayName: req.user? req.user.displayName: ""
    }
    )
  }
  else{
    return res.redirect('/')
  }
})

router.post('/register', function(req,res,net){
 let newUser = new User({
  username: req.body.username,
  //password:req.body.password,
  email: req.body.email,
  displayName: req.body.displayName
 })
 User.register(newUser, req,body.password,(err) => {
  if(err)
  {
    console.log("Error in inserting new user");
    if(err.name =="UserExistError")
    {
      req.flash('registerMessage',
      'Registration Error: User already exist')
    }
    return res.render('auth/register',
    {
      title:'Register',
      message: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName: ''
    })
  }
  else{
    return passport.authenticate('local')(req,res,()=>{
      res.redirect('/blog');
    })
  }
 })
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
