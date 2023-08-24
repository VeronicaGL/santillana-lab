const express = require('express');
const router = express.Router();
const User = require('../models/user.models');
const bcrypt = require('bcrypt');

module.exports.create = (req, res, next) => {
    res.render('register')
}

module.exports.doCreate = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      return User.create({
        name: req.body.name,
        email:req.body.email, 
        password: hash, 
        avatarUrl: req.body.avatarUrl
      })
      .then(() => {
        res.redirect('/register')
      })
    })
    .catch((error) => res.status(500).send('Fallo al registrar usuario' + error))
}    

router.get('/register', (req, res, next) => {
  res.render('users/register');
});

module.exports.login = (req, res, next) => {
  res.render('user/login')
}

module.exports.dologin = (req, res, next) => {
  User.findOne({username: req.body.username}).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password).then((match) => {
        if (match) {
          req.sessions.userId = user.id
          res.redirect('/profile')   
        } else {
          res.redirect('/login')
        }
      })
    } else { 
        res.redirect('/login')
    }
  })
}    