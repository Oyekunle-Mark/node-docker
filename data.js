const mongoose = require('mongoose');

const Languages = new mongoose.Schema({
  name: String,
  paradigm: String,
});

module.exports = mongoose.model('Languages', Languages);
