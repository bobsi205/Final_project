const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SummarySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  picture: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  views: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  rating: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      rate: {
        type: Number,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      picture: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Summary = mongoose.model('summary', SummarySchema);
