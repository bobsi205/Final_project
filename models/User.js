const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  coins: {
    type: Number,
    default: 0,
  },
  educationsOfInterest: [
    {
      education: {
        type: String,
      },
    },
  ],
  uploadedSummaries: [
    {
      summary: {
        type: Schema.Types.ObjectId,
        ref: 'summery',
      },
    },
  ],
  BoughtSummaries: [
    {
      summary: {
        type: Schema.Types.ObjectId,
        ref: 'summery',
      },
    },
  ],
});

module.exports = User = mongoose.model('user', UserSchema);
