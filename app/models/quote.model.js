const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    hero: String,
    message: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);