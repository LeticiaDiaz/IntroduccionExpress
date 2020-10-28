const express = require("express");
const app = express();

app.get("/:numero",function(req, res){
    let numero = parseInt(req.params.numero) ;
    res.send(`Aleatorio ${Math.floor(Math.random() * (numero - 0)) + 0}`)
});









app.listen(3000);