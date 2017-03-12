var express = require('express')

var app = express()
var routes = require('./app/routes/index.js');
 
var api = require('./app/api/timestamp.js');

var port =process.env.PORT || 8080;

routes(app);


api(app);

pp.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});