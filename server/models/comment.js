var mongoose = require('mongoose'),
    userSchema = require('./user'),
    messageSchema = require('./message');

var commentSchema = new mongoose.Schema({
    comment:{
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    user: [userSchema],
    message: [messageSchema]
},{ timestamps:true })

mongoose.model('Comment',commentSchema);
