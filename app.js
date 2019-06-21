var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var entorno = require('./utilitys/config-modules.js').config();
var mysql = require("./utilitys/conexion");
var logger = require("./utilitys/logs").log();

//configuracion
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importacion de rutas
app.get("/",function(req,res){
	logger.info("log :)");
	res.json("Hola bby");
});

app.listen(entorno.puerto);