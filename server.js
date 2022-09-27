const { application } = require('express');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

var app = express();
app.use(bodyParser);
app.use(router);


router.get('/', (req,res) => res.send('Hola desde get'));

router.post('/', (req,res) => res.send('Hola desde post'));

router.delete('/', (req,res) => res.send('Hola desde delete'));

//app.use('/', function(req, res){
//    res.send('Hello World');
//})

// app.use('/', (req,res) => res.send('Hello World')); // Another way to write the above code

app.listen(3000);
console.log('Server running at http://localhost:3000/');

