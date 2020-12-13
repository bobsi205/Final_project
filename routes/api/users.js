const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    //need to add check for date of birth
    check('dateOfBirth').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      picture,
      bio,
      interests,
      fieldOfStudy,
      institution,
    } = req.body;
    firstName = firstName.replace(/^./, firstName[0].toUpperCase());
    lastName = lastName.replace(/^./, lastName[0].toUpperCase());

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstName,
        lastName,
        email,
        dateOfBirth,
        password,
        picture,
        educationsOfInterest: interests,
      });
      let profile = new Profile({
        user: user._id,
        bio,
        education: {
          degree: fieldOfStudy,
          school: institution,
        },
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      await profile.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT api/users/balance
// @desc    Add coins to account balance
// @access  Private
router.put(
  '/balance',
  [auth, [check('coins', 'coins is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.arrays });
    }
    const { coins } = req.body;
    try {
      const user = await User.findById(req.user.id);
      user.balance += coins;
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/users/picture
// @desc    Update user picture
// @access  Private
router.put(
  '/picture',
  [auth, [check('picture', 'picture is required').not().isEmpty()]],
  async (req, res) => {
    console.log(req.body.picture);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.arrays });
    }
    const { picture } = req.body;
    try {
      const user = await User.findById(req.user.id);
      user.picture = picture;
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/users/me
// @desc     Get user summaries data
// @access   private
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    let uploaded, bookmarked, recent, bought;
    uploaded = user.uploadedSummaries.map((sm) => {
      return sm._id;
    });
    bookmarked = user.bookmarkedSummaries.map((sm) => {
      return sm._id;
    });
    recent = user.recentSummaries.map((sm) => {
      return sm._id;
    });
    bought = user.boughtSummaries.map((sm) => {
      return sm._id;
    });
    console.log(
      await Summary.find({
        _id: { $in: bought },
      })
    );
    let summaries = {
      uploaded: await Summary.find({
        _id: { $in: uploaded },
      }),
      bookmarked: await Summary.find({
        _id: { $in: bookmarked },
      }),
      recent: await Summary.find({
        _id: { $in: recent },
      }),
      bought: await Summary.find({
        _id: { $in: bought },
      }),
    };

    res.json(summaries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
