var express=require('express')
var router=express.Router();


/*Contains routes for the User*/

router.get('/User/:id',function(req,res){
	res.send('The id you specified is ' + req.params.id);
});



module.exports=router;