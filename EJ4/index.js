const express = require("express");
const app = express();
let frase = require('./archivo');


app.get('/', function(req,res){
    res.send(frase())
})


app.listen(3000);
