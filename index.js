var express = require("express");
var app = express();
app.use('/assets', express.static('assets'));
require("./app/router")(app);

app.listen(8080,function(){
	console.log("Server Started...");
});
