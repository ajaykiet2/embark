var embark = {
	home : function(req,res){
		res.send("Welcome to Embark Interiors");
	},
	about : function(req,res){
		res.send("About the Embark Interiors");
	},
	services : function(req,res){
		res.send("Services of Embark");
	},
	contact : function(req,res){
		res.send("contact of Embark");
	},
};

module.exports = embark;