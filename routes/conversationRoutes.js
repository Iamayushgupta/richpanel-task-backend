const router = require('express').Router();
const Conversation = require('../models/conversation');

// Getting the conversations for a page from its pageId
router.get('/conversations/:pageId', async (req, res) => {
    try {
        const conversations = await Conversation.find({ pageId: req.params.pageId });
        res.json(conversations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching conversations', error: error.message });
    }
});

// Replying to a conversation
router.post('/conversations/reply/:conversationId', async (req, res) => {
    const { messageText } = req.body;
    try {
        const conversation = await Conversation.findById(req.params.conversationId);
        if (!conversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }
        conversation.messages.push({ senderId: 'agentId', messageText, timestamp: new Date() });
        await conversation.save();
        res.json({ message: 'Reply sent successfully', conversation });
    } catch (error) {
        res.status(500).json({ message: 'Error sending reply', error: error.message });
    }
});

module.exports = router;