var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const USerModel = require('../Models/user');
const MessageModel = require('../Models/Message');

/* GET users listing. */
router.get('/',async function(req, res, next) {
  let users = await USerModel.find({} , (error , data) => {
    return data;
  });
  res.json(users);
});

// Create
router.post('/Create' , (req , res , next) => {
  let data = req.body;
  USerModel.create(data);
  res.json(data);
});

router.get('/:id' , async (req , res , next) => {
let user = await USerModel.find({"_id" : req.params.id} , (error , data) => {
  return data;
});
res.json(user);
});

router.get('/:id/from', async (req, res, next) => {
  let msg =await MessageModel.find({"From": req.params.id },(error,data) => {
  return data;
});
res.json(msg)
});

router.get('/:id/to', async (req, res, next) => {
  let msg =await MessageModel.find({"To": req.params.id },(error,data) =>{
  return data;
});
res.json(msg)
});

module.exports = router;
