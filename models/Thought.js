const { Schema, model } = require('mongoose');
// import moment


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            // 280 character maximum
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            // type data
            // set value to current timestamp
            // use moement in a getter method to format the timestamp on query
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // must be between 1 and 280 characters
        },
        createdAt: {
            // type date
            // set default value to the current timestamp
            // use moement in a getter method to format the timestamp on quyery
        },
        // the user that created this thought
        username: {
            type: String,
            required: true
        },
        // like replies
        reactions: {
            //array of nested documents created with reactionSchema
        }
    },
    {
        toJson: {
            virtuals: true,
            getters: true
        }
    }
);

ThoughtSchema.virtual().get(function(){

});

ThoughtSchema = model('Thought', ThoughtSchema);

module.exports = Thought;