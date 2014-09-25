var express = require('express'),
	http    = require('http'),
	app     = express();

var Server = http.createServer(app);

app.get('/',function(req,res) {
	res.send('Bienvenido al nuevo servidor de node');
});

Server.listen(3000,function(){
	console.log('Servidor Corriendo en el puerto 3000');
})