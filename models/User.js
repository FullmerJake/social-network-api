const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // must match valid email address, look up Mongoose matching validation
        },
        thoughts: {
            // fill out
        },
        friends: {
            // fill out
        }
    },
    {
        toJson: {
            virtuals: true
        }
    }
);

UserSchema.virtual().get(function(){

});

const User = model('User', UserSchema);

module.exports = User;