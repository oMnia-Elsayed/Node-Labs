var express = require('express');
var router = express.Router();

const MessageModel = require('../Models/Message');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/Messages' , (req , res , next) => {
   MessageModel.find((err , data) => {
    res.send(data)
  });
});

router.get('/createMessage' , (req , res , next) => {
  res.send('createMessage');
});

router.post('/createMessage', (req , res , next) => {
  let data = new MessageModel (req.body);
  data.save()
  .then(MessageModel => res.send(MessageModel))

});

router.patch('/Message/:id' , async () => {
  let msg = await MessageModel.findByIdAndUpdate({_id: req.params.id} ,
     {$set: req.body} , {new : true},(err , doc) => {
      if (err){
        console.log("Something Wrong here");
      }
     });
  res.json(msg);
});

router.delete('/Message/:id', async (req, res, next) => {
  let msg =await MessageModel.findByIdAndDelete(req.params.id,
    (error,data) => {
     return data;
  });
   res.json(msg)
});
module.exports = router;
