var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');



var productCtrl = require('./server/productCtrl.js');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors());


app.get('/products', productCtrl.read);
app.post('/products', productCtrl.create);
app.put('/products/:id', productCtrl.update);
app.delete('/products/:id', productCtrl.delete);






app.listen(8080, function(){
	console.log('live on port 8080');
});

mongoose.connect('mongodb://localhost/ecommerce', function(erro){
	console.log(erro);
});