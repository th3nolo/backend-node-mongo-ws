const { application } = require("express");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const response = require("./network/response");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes", req.statusCode);
});

router.post("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  if (req.query.error) {
    response.error(req, res, error, 400);
  } else {
    response.success(req, res, "Mensaje creado", 201);
  }
});

router.delete("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  if (req.query.error) {
    response.error(req, res, error, 400);
  } else {
    response.success(req, res, "Mensaje creado", 201);
  }
});

app.use("/app", express.static("public"));
app.listen(3000);
console.log("Server running at http://localhost:3000/");
