const express = require("express");
const { parse } = require("path");
const aleatorio = require("./aleatorio");
const array = require("./array");
const app = express();

app.get("/", function (req, res) {
  array[aleatorio()] += 1;
  res.send(array);
});

app.get("/borrar/:numero", function (req, res) {
  let numero = parseInt(req.params.numero);
  for (let i = 0; i < array.length; i++) {
    if (numero === array[i]) {
      array[i] = 0;
    }
  }
  res.send(array);
});

app.listen(3000);
