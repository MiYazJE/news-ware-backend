const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  archivedDate: Date,
  isArchived: {
    type: Boolean
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('News', NewsSchema)
