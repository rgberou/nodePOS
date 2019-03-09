var express=require('express');
var app=express();
var path=require('path');
var bodyParser = require('body-parser');
var multer = require('multer');


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
//app.use(upload.array()); 
app.use(express.static('public'));
//Custom library directories
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS b
app.use('/custom', express.static(__dirname + '/custom'));
//Index of the site

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
	console.log(req.body.email);
	console.log(req.body.password);
});

//setting up routes
var userRoutes=require('./routes/userRoutes')
app.get('/User/:id',userRoutes);


//Invalid url Page
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
   
});



app.listen(8080);