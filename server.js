var express = require('express'),
    path = require('path'),
    bodyParder =  require('body-parser'),
    app = express();

app.use(bodyParder.json());

require('./server/config/mongoose.js'); //Importing mongoose.js from config folder
require('./server/config/routes.js')(app); //Importing routes.js from config folder

app.use(express.static('./client'));
app.use(express.static('./bower_components'));


app.listen(8000, function(){
    console.log('Listening on port 8000');
});
