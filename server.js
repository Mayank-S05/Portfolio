var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname + '/HTML')));
app.set('views', __dirname + '/HTML');


  app.get('/' , function(request , response){
    response.sendFile(path.join(__dirname+'/index.html'));  
 });
  
app.listen(8080);