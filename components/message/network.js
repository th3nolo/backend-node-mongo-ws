const express = require("express");
const response = require('../../network/response');

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
  console.log(req.query);
  console.log(req.body);
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "error inesperado",
      400,
      "Es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Mensaje creado", 201);
  }
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