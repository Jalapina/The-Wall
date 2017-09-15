var mongoose = require('mongoose'),
    userSchema = require('./user'),
    commentSchema = require('./comment')

var messageSchema = mongoose.Schema({
    message:{
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    user:[ userSchema ],
    comments:[ commentSchema ]
},{ timestamps:true })

mongoose.model('Message', messageSchema);
