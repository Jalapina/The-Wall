var mongoose = require('mongoose')

var userSchema = mongoose.Schema({

    first_name:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 32,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        minlength: 2,
        trim: true,
        maxlength: 32
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Email is required'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please input a valid email']
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    }
},{ timestamps:true });

userSchema.methods.validPassword = function(password){
    return (this.password===password);
}

mongoose.model('User', userSchema);
