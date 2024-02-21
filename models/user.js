const mongoose = require('mongoose');

// Schema for storing the user data
const userSchema = new mongoose.Schema({
    facebookId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    accessToken: { type: String, required: true } 
});

module.exports = mongoose.model('User', userSchema);
