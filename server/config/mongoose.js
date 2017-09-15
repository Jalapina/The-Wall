var mongoose = require('mongoose'),
    path = require('path'),
    fileSystem = require('fs');
    
mongoose.connect('mongodb://localhost/the_Wall');

var models_path = path.join(__dirname,'./../models');

fileSystem.readdirSync(models_path).forEach(function(file){

    if(file.indexOf('.js') >=0){
        // console.log(file);
        require(models_path+'/'+file);
    }
    /* Algorithm to take all files from the models folder 
    and imports them into our mongoose file */
});
