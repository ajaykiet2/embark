var express = require("express");
var app = express();

require("./app/router")(app);

app.listen(8888,function(){
	console.log("Server Started...");
});