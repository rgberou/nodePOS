var express=require('express')
var router=express.Router();
var path=require('path');
var app=express();

/*Contains routes for the User*/
app.use(express.static('public'));
router.get('/User/:id',function(req,res){
	res.send('The id you specified is ' + req.params.id);
});
router.get('/registration',function(req,res){
	//res.sendFile(path.join(__dirname+'../views/registration.html'));
	//res.sendFile('views/registration.html', { root: './' });
	res.render('registration.ejs',{message:'',user:''});
});

router.get('/',function(req,res){
	//res.sendFile(path.join(__dirname+'../views/index.html'));
	//res.sendFile('views/index.html', { root: './' });

	res.render('index.ejs',{message:'',email:'',password:''});
});

router.post('/',function(req,res){

	var userEmail=req.body.email;
	var userPass=req.body.password;
	if (userEmail.trim()=="" || userPass==""){
		res.render('index.ejs',{message:'Please provide responses on the textboxes.',email:userEmail,password:userPass});
	}else{
		res.redirect('/registration');
	}
});

router.post('/registration',function(req,res){
    //res.sendFile(path.join(__dirname+'/views/index.html'));
    var user=req.body;
    var userModel=require('../models/userModel');
    if (user.password!=user.confirmpassword){
    	res.render('registration.ejs',{message:'Passwords do not match.',user:user});
    }else{
    	console.log('test');
    	userModel.addUser(user);
    	res.redirect('/');
    }
});



module.exports=router;