const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

const users = [
  {
    name: 'Harry Potter',
  },
  {
    name: 'Ronald Wesley',
  },
  {
    name: 'Hermione Granger',
  },
  {
    name: 'Albus Dumbledore',
  },
  {
    name: 'Tom Riddle',
  },
];

module.exports = { Users, users };
