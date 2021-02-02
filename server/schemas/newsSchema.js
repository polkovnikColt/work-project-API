const {Schema, model} = require('mongoose');

const schema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    photo: {
        type: String
    },
    date: {
        type: String,
    }

});

module.exports = model('News', schema);