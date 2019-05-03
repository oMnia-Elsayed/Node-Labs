        
const fs = require('fs');
var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')
       
var router = Router()
router.get('/', function (req, res) {
    fs.readdir('./assets' , (err , data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not Found');
        }
        else { 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
        }
    }) ;
})
router.get('/:id' , function(req , res){
    fs.readFile(`./assets/${req.params.id}.jpg` ,(err , data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not Found');
        }
        else {
            res.writeHead(200 , {'Content-Type' : 'image/jpg'})
            res.end(data);
        }
    })
})
 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(3000)

// server.listen(port , () => {
//     console.log(`Server running at http://localhost:${port}/`);
// })