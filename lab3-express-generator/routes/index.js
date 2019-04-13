var express = require('express');
var router = express.Router();

const Books = [
  { id : 1 , name :"Harry Potter"} ,
  { id : 2 , name :"The Silent Scream"} , 
  { id : 3 , name :"A Wasted Hour"}
]

/* GET home page. List All Books */
router.get('/', function(req, res, next) {
  res.render('index', { Books });
});


// Add New Book 
router.get('/newbook' , (req , res , next) => {
  res.render('create');
});

router.post('/add' , (req , res , next) => {
  Books.push(req.body);
  res.redirect('/');
});

// Edit Book 
router.get('/editBook/:id' , (req , res , next) => {
  const book = Books.find( (b) => b.id == req.params.id);
  res.render('edit' , { book });
});

router.post('/edit' , (req , res , next) => {
  const book = Books.find( (b) => b.id == req.body.id);
  // book.id = req.body.id;
  book.name = req.body.name;
  res.redirect('/');  
});

// Delete Book 
router.get('/deletebook/:id' , (req, res ,next) => {
  for (let index = 0; index < Books.length; index++) {
    if (Books[index].id == req.params.id)
      Books.splice(index , 1);
     
    res.redirect('/');
  }
});









module.exports = router;
