var express = require('express')

var app = express()
var routes = require('./app/routes/index.js');
 
var api = require('./app/api/timestamp.js');

var port =process.env.PORT || 8080;

routes(app);


api(app);

app.listen(port,function(){
  
  console.log("working h ji");
})