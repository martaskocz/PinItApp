const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NOTE_TYPES = ['twitters', 'articles', 'notes'];

const NoteSchema = new Schema({
  type: {
    type: String,
    enum: NOTE_TYPES,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  articleUrl: {
    type: String,
    default: null,
  },
  twitterName: {
    type: String,
    default: null,
  },
  userID: {
    type: String,
    required: true,
  },
  created: {
    type: String
  },
});

mongoose.model('notes', NoteSchema);