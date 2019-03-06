var express=require('express');
var app=express();




//setting up routes
var userRoutes=require('./routes/userRoutes.js')

app.get('/',userRoutes);

app.listen(8080);