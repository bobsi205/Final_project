const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Summary = require('../../models/Summary');
const { check, validationResult } = require('express-validator');
const request = require('request');
const config = require('config');

// @route   GET api/search/:query
// @desc    Get current users profile
// @access  Private
router.get('/:query', async (req, res) => {
  try {
    Summary.find(
      { title: { $regex: req.params.query, $options: 'gmi' } },
      function (err, documents) {
        if (err) {
          res.status(500).send('Server Error');
        }
        res.json(documents);
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
