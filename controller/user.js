const express = require('express');
const { User } = require('../db/model/user');
var ObjectId = require('mongodb').ObjectID;

const router = express.Router();

router.post('/create', (req, resp) => {
  var contents = req.body;
  var name = contents.name;
  var email = contents.email;
  var password = contents.password;

  let usr = new User({
    email,
    password,
    name
  });

  usr
    .save()
    .then(res => {
      console.log('saved user ');
      resp.status(200).send('User Created Successfully');
    })
    .catch(e => {
      console.log('error', e);
      resp.status(500).send('Error Occured while saving User');
    });
});

router.get('/all-users', (req, resp) => {
  let users = User.find({});
  users.then(res => {
    resp.status(200).send(res);

    console.log(res);
  });
});

router.get('/user/:id', (req, resp) => {
  let userId = req.params.id;

  let usrObj = User.find({ _id: new ObjectId(userId) });
  usrObj
    .then(res => {
      resp.status(200).send(res);
    })
    .catch(e => {
      console.log(e);
      resp.status(200).send('Error Occured');
    });
});

module.exports = router;
