const { application } = require('express');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

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
    res.send('Lista de mensajes');
})

router.post('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(201).send({error: '', body: 'Mensaje creado'});
})

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    //res.send('Mensaje' + req.body.text + 'eliminado');
    res.status(201).send({error: '', body: 'Mensaje eliminado'});
})

app.listen(3000);
console.log('Server running at http://localhost:3000/');

