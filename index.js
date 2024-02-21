require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');

require('./config/passport-setup');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(passport.initialize());

app.use(authRoutes);
app.use(pageRoutes);
app.use(conversationRoutes);

app.get('/', (req, res) => res.send('FB Helpdesk Backend is running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));