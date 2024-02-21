const mongoose = require('mongoose');

// Schema for storing the page details
const pageConnectionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pageId: { type: String, required: true },
    pageName: { type: String, required: true },
    accessToken: { type: String, required: true } 
});

module.exports = mongoose.model('PageConnection', pageConnectionSchema);
