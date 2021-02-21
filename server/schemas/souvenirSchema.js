const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    photo: {
        type: Array
    },
    price: {
        type: Number,
    }

});

module.exports = model('Souvenir', schema);