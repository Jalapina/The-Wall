var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = {
    //Login
    login: function(request,response){
        // console.log('running user.js in server side', request.body)
        // console.log(request.body.email)
        // console.log(request.body.password)
        User.findOne({ email: request.body.email }, function(error,data){
            // console.log('Logging data',data)
            if(error){
                console.log(error)
                response.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
            else if(data && data.validPassword(request.body.password)){
                console.log('successfuly logged in')
                response.json({
                    data:data
                })
            }
            else if(data && !data.validPassword(request.body.password)){
                response.json({
                    errors:{
                        login:{
                            message:'Password is incorrect'
                        }
                    }
                })
            }
            else{
                response.json({
                    errors:{
                        login:{
                            message:'Email does not exist'
                        }
                    }
                })
            }
        })
    },
    //Register
    register: function(request, response){
        console.log(request.body)
        var user = new User(request.body)
        user.save(function(error, newuser){
            if(error){
                response.json(error)
            }
            else{
                console.log('created a new user')
                response.json({
                    user:newuser
                })
            }
        })
    },
    //Show all users
    index: function(request, response){
        User.find({}), function(error, users){
            if(error){
                response.json(error)
            }
            else{
                response.json({
                    users:users
                })
            }
        }
    }
}
