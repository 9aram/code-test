let mongoose = require('mongoose');

let BoardSchema = new mongoose.Schema({
    title: String,
    author: String,
    
});

module.exports = mongoose.model('Board', BoardSchema);
