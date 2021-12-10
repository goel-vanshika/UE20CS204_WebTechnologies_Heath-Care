const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.route("/create").post((req,res)=>
{
  const username = req.body.mail_id;
  const password = req.body.password;
  const newUser = new User({
      username,
      password
  }); 
  newUser.save();   
})

module.exports=router;