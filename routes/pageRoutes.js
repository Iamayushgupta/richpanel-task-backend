const router = require('express').Router();
const PageConnection = require('../models/PageConnection');

router.post('/page/add', async (req, res) => {
    const { userId, pageId, pageName, accessToken } = req.body;
    try {
        const newPageConnection = new PageConnection({ userId, pageId, pageName, accessToken });
        await newPageConnection.save();
        res.status(201).json({ message: 'Page connected successfully', pageConnection: newPageConnection });
    } catch (error) {
        res.status(500).json({ message: 'Error connecting page', error: error.message });
    }
});

router.delete('/page/delete/:id', async (req, res) => {
    try {
        const pageConnection = await PageConnection.findByIdAndDelete(req.params.id);
        if (!pageConnection) {
            return res.status(404).json({ message: 'Page connection not found' });
        }
        res.json({ message: 'Page connection deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting page connection', error: error.message });
    }
});

module.exports = router;
