const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Summary = require('../../models/Summary');
const { check, validationResult } = require('express-validator');
const request = require('request');
const config = require('config');

// @route   GET api/search/:field/:query
// @desc    Get free text summary search by title
// @access  public
router.get('/:field/:query', async (req, res) => {
  try {
    Summary.find(
      { [req.params.field]: { $regex: req.params.query, $options: 'gmi' } },
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
