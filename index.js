var express = require("express");
var app = express();
app.use('/assets', express.static('assets'));
require("./app/router")(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
