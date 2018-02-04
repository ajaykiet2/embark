var router = function(app){
	//Getting Controller
	var ctrler = require("./controller/embark");
	
	// Defining Routing
	app.get("/",function(req,res){
		ctrler.home(req,res);
	});
	
	app.get("/about",function(req,res){
		ctrler.about(req,res);
	});
	
	app.get("/services",function(req,res){
		ctrler.services(req,res);
	});
	
	app.get("/contact",function(req,res){
		ctrler.contact(req,res);
	});
	
	app.all("*",function(req,res){
		res.send("Error:404, File Not Found!");
	});
};

module.exports = router;
