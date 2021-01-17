const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {},
        // the user that created this thought
        username: {},
        reactions: {}
    },
    {
        toJson: {
            virtuals: true
        }
    }
);

ThoughtSchema.virtual().get(function(){

});

ThoughtSchema = model('Thought', ThoughtSchema);

module.exports = Thought;