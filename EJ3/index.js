const express = require("express");
const app = express();
let array = ["Antonio", "Almudena", "Paco", "Cristina", "Beatriz"];

app.get("/persona", function (req, res) {
  res.send(array);
});

app.get("/persona/:indice", function (req, res) {
let indice = parseInt(req.params.indice)

  res.send(array[indice]);
});

app.listen(3000);
