var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

module.exports = {
    //Getting all messages
    index: function(request,response){
        Message.find({}).populate('user').exec(function(error, messages){
            if(error){
                response.json(error)
            }
            else{
                response.json({
                    messages:messages
                })
            }
        })
    },
    // //Getting all comments
    // commentIndex: function(response){
    //     Comment.find({}).populate('user').populate('message').exec(function(error, comments){
    //         if(error){
    //             response.json({error:error})
    //         }
    //         else{
    //             response.json({comment:comments})
    //         }
    //     })
    // },
    //make a message
    createMessage: function(request,response){
        var message = new Message(request.body);
        message.save(function(error, newMessage){
            if(error){
                response.json(error)
            }
            else{
                console.log(response)
                response.json({
                    message:newMessage
                })
            }
        })
    },
    //make a Comment
    createComment: function(request,response){
        
            var comment = new Comment(request.body)   
            console.log(comment)         
            comment.save(function(error, newComment){
                if(error){
                    response.json(error)
                }
                else{
                    console.log('Made a comment in server side!')
                    response.json({
                        comment:newComment
                    })
                }
            })
            
        }

}