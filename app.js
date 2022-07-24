const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 2000;
const publicPath = path.resolve(__dirname,"./public");

app.use(express.static(publicPath));

const start = () => {
    console.log("Servidor en linea!")
};

app.listen(port,start);

app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname,"views","home.html"))
});

app.get("/register", function(req,res){
    res.sendFile(path.resolve(__dirname,"views","register.html"))
});

app.get("/login", function(req,res){
    res.sendFile(path.resolve(__dirname,"views","login.html"))
});

app.get("/carrito", function(req,res){
    res.sendFile(path.resolve(__dirname,"views","carrito.html"))
});

app.get("/detalles-producto", function(req,res){
    res.sendFile(path.resolve(__dirname,"views","detalles-producto.html"))
});