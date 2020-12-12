const mongoose = require('mongoose');

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
    default:
      'https://summary-project.s3.eu-central-1.amazonaws.com/profileImages/defaultProfilePicture.jpg',
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: Boolean,
    default: false,
  },
  balance: {
    type: Number,
    default: 5,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'summary',
      },
    },
  ],
  BoughtSummaries: [
    {
      summary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'summary',
      },
    },
  ],
  RecentSummaries: [
    {
      summary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'summary',
      },
    },
  ],
});

module.exports = User = mongoose.model('user', UserSchema);
