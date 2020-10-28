const express = require("express");
const app = express();
let array = [
  "Manu",
  "Ainara",
  "Anastasia",
  "Bego",
  "Daniel",
  "Luis",
  "Maialen",
  "Leticia",
  "Diego",
  "Elena",
  "Miriam",
  "Roberto",
  "Rafa",
];

app.get("/alumnos", function (req, res) {
  res.send(array);
});

app.get("/alumnos/:profesor", function (req, res) {
  array.push(req.params.profesor);
  res.send(array);
});

app.listen(3000);
