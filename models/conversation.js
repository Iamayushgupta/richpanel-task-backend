const mongoose = require('mongoose');

// Schema of conversation that will be stored in the database
const messageSchema = new mongoose.Schema({
    senderId: String,
    messageText: String,
    timestamp: Date
}, { _id: false });

const conversationSchema = new mongoose.Schema({
    pageId: { type: String, required: true },
    customerId: { type: String, required: true },
    messages: [messageSchema],
    lastMessageAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversation', conversationSchema);
