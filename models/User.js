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
            // array of _id values referencing the Thought model
        },
        friends: {
            // array of _id values referencing the User model (self-reference)
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