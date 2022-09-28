const express = require("express");
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes", req.statusCode);
});

router.post("/", (req, res) => {
    let body = req.body;
    controller.addMessage(body.user, body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201);
    }).catch(e => {
        response.error(
            req,
            res,
            "informacion invalida",
            400,
            'error en el controlador'
          );
    })    
});

router.delete("/", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  if (req.query.error) {
    response.error(req, res, error, 400);
  } else {
    response.success(req, res, "Mensaje creado", 201);
  }
});

module.exports = router;