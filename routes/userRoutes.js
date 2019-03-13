var express=require('express')
var router=express.Router();


/*Contains routes for the User*/

router.get('/User/:id',function(req,res){
	res.send('The id you specified is ' + req.params.id);
});
router.get('/registration',function(req,res){
	res.send('This is the page for registration');
});


/*app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
});



app.post('/',function(req,res){
    //res.sendFile(path.join(__dirname+'/views/index.html'));
	console.log(req.body.email);
	console.log(req.body.password);

	
    res.redirect('/');

});
*/
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
});

router.post('/',function(req,res){
    //res.sendFile(path.join(__dirname+'/views/index.html'));
	if(req.body.submit && req.body.email && req.body.email){
		console.log(req.body.email);
		console.log(req.body.password);
		console.log("button");
		res.redirect('/');
	}
	if(req.body.submit && !req.body.email && !req.body.email){
		alert('gsfdsd')
	}
  
});


module.exports=router;