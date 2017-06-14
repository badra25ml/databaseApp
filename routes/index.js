var express = require('express');
var router = express.Router();
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var User = require('../models/users');

/* GET home page. */
router.get('/home', ensureAuthenticated,function(req, res, next) {
  res.render('index', { title: 'Database app' });
});

//  get userlist

router.get('/userlist', ensureAuthenticated, function(req, res,){
  User.find({}, {}, function(e, docs){
    res.render('userlist', {'userlist':docs})
  })
});

function ensureAuthenticated(req, res, next){
if(req.isAuthenticated()){
  return next();
}else{
  req.flash('error_msg', 'You are not logged in, please login below to continue.');
  res.redirect('/login');
 }
}

// get registration page
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

// get login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

// Register user
router.post('/register', function(req, res, next) {
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;
  // validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Password2 is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  var errors = req.validationErrors()
  if(errors){
    res.render('register', {
      errors: errors
    })

  }else{
    var newUser = new User({
      name: name,
      username: username,
      email: email,
      password: password
    })
    User.createUser(newUser, function(err, user){
     if(err) throw err;
       console.log(user);
    });
    req.flash('success_msg', 'You are registered and can now login');
    res.redirect('/login');
  }
});

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
     if(err) throw err;
     if(!user){
       return done(null, false, {message: 'unknown user'})
     }
     User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
         return done(null, user);
      }else{
        return done(null, false, {message:'Invalid password'});
      }
     })
   });
  }));

  passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// user login
router.post('/login',
  passport.authenticate('local', {sucessRedirect:'/userlist', failureRedirect:'/login', failureFlash:true}),
  function(req, res) {
   res.redirect('/userlist');
  });

  // get logout page
  router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  });

module.exports = router;
