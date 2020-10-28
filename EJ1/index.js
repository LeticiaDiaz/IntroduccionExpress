const express = require("express");
const app = express();

app.get('/',function(req, res){
    res.send("<h1>Hola mundo</h1> <h3>desde express</h3>")
});









app.listen(3000);