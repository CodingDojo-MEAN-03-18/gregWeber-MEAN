const mongoose = require('mongoose');
const bCrypt = require('bcrypt-as-promised');
const validator = require('validator');
const { Schema, model } = mongoose;



const userSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, 'first name is a required field'],
    },
    lastName: {
        type: String,
        required: [true, 'last name is a required field'],
    },
    email: {
        type: String,
        required: [true, 'email is a required field'],
        unique: true,
        validate: {
            validator( email ) {
                return validator.isEmail(email);
            },
            message: 'not a valid email'
        }       
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character and be at least 8 characters long"
        }
      },
    dateOfBirth: {
        type: Date, //?
        required: [true, 'birthday is a required field']
    }
}, { timestamps: true });


userSchema.pre('save', function(next) {
    if (!this.isModified('password')){
        return next();
    } 
    bCrypt.hash(this.password, 10)
    .then(hashed_password => {
        this.password = hashed_password;
        next();
    })
    .catch(next);
})

userSchema.statics.validatePassword = function(passwordFromForm, storedHashedPassword){
    return bCrypt.compare(passwordFromForm, storedHashedPassword)
}

console.log(model);


module.exports = model.call(mongoose,'User', userSchema);

console.log('hey!!!!');
