const { application } = require('express');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('./network/response');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes', req.statusCode);
})

router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if( req.query.error == "ok" ) {
    response.error(req, res, 'Error simulado', 400);
    }else{
    response.success(req, res, 'Mensaje creado', 201);
    }
    //res.status(201).send({error: '', body: 'Mensaje creado'});    
})

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);   
    res.status(201).send({error: '', body: 'Mensaje eliminado'});
})

app.listen(3000);
console.log('Server running at http://localhost:3000/');

