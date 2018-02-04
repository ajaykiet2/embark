var embark = {
	home : function(req,res){
		res.render("pages/home",{data : "Ajay Kumar"});
	},
	about : function(req,res){
		var data = {
			page : "About Us",
			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur error excepturi, hic illo laborum mollitia non possimus provident quibusdam rem vel. A alias aliquid architecto asperiores beatae commodi consequatur cum deleniti dicta distinctio dolores, dolorum eveniet excepturi harum incidunt minus nam nesciunt nisi nostrum odit provident."
		};
		res.render("pages/about",data);
	},
	services : function(req,res){
		res.render("pages/services",{data : "Ajay Kumar"});
	},
	contact : function(req,res){
		res.render("pages/contact",{data : "Ajay Kumar"});
	},
};

module.exports = embark;