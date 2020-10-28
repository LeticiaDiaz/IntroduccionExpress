const express = require("express");
const app = express();

let datos = {
  nombre: "Leticia",
  apellidos: "Díaz Carmona",
  edad: "32",
};

app.get("/nombre/:parametro", function (req, res) {
  datos.nombre = req.params.parametro;
  res.send(datos);
});

app.get("/apellidos/:parametro", function (req, res) {
  datos.apellidos = req.params.parametro;
  res.send(datos);
});

app.get("/edad/:parametro", function (req, res) {
  datos.edad = parseInt(req.params.parametro);
  res.send(datos);
});

app.listen(3000);
