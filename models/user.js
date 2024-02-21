const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    facebookId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    accessToken: { type: String, required: true } // Store the access token for Facebook API calls
});

module.exports = mongoose.model('User', userSchema);
