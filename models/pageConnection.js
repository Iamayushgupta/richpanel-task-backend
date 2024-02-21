const mongoose = require('mongoose');

const pageConnectionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    pageId: { type: String, required: true },
    pageName: { type: String, required: true },
    accessToken: { type: String, required: true } // Access token specific to the page
});

module.exports = mongoose.model('PageConnection', pageConnectionSchema);
