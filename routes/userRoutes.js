var express=require('express')
var router=express.Router();


/*Contains routes for the User*/

router.get('/',function(req,res){
	res.send('This is the home page')
});

module.exports=router;