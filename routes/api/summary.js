const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const checkAdmin = require('../../middleware/checkAdmin');
const checkObjectId = require('../../middleware/checkObjectId');

const Summary = require('../../models/Summary');
const User = require('../../models/User');

// @route    POST api/summary
// @desc     Create a summary
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'Text is required').not().isEmpty(),
      check('title', 'Title is required').not().isEmpty(),
      check('category', 'Category is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newSummary = new Summary({
        text: req.body.text,
        firstName: user.firstName,
        lastName: user.lastName,
        picture: user.picture,
        title: req.body.title,
        category: req.body.category,
        user: req.user.id,
      });

      const summary = await newSummary.save();
      user.uploadedSummaries.unshift(summary._id);
      await user.save();
      res.json(summary);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/summary
// @desc     Get all summaries
// @access   Admin
router.get('/', [auth, checkAdmin], async (req, res) => {
  console.error('here');
  try {
    const summaries = await Summary.find().sort({ date: -1 });
    res.json(summaries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/summary/:id
// @desc     Get summary by ID
// @access   Public
router.get('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);

    if (!summary) {
      return res.status(404).json({ msg: 'summary not found' });
    }
    const profile = await Profile.findOne({ user: summary.user }).select(
      'education -_id'
    );
    const data = { ...summary._doc, education: profile.education };
    res.json(data);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/summary/:id
// @desc     Delete a summary
// @access   Admin
router.delete(
  '/:id',
  [auth, checkAdmin, checkObjectId('id')],
  async (req, res) => {
    try {
      const summary = await Summary.findById(req.params.id);

      if (!summary) {
        return res.status(404).json({ msg: 'Summary not found' });
      }

      await summary.remove();

      res.json({ msg: 'Summary removed' });
    } catch (err) {
      console.error(err.message);

      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT api/summary/rate/:id
// @desc     Rate a summary
// @access   Private
router.put('/rate/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    if (req.body.rate < 1 || req.body.rate > 5) {
      return res.status(400).json({ msg: 'Rating must be between 1-5' });
    }

    const summary = await Summary.findById(req.params.id);
    summary.rating = summary.rating.filter(
      (rate) => rate.user.toString() !== req.user.id
    );

    summary.rating.unshift({
      user: req.user.id,
      rate: req.body.rate,
    });

    await summary.save();
    const profile = await Profile.findOne({ user: summary.user }).select(
      'education -_id'
    );
    const data = { ...summary._doc, education: profile.education };
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/summary/view/:id
// @desc     Add views to summary
// @access   private
router.put('/view/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    let summary = await Summary.findById(req.params.id);

    let found = summary.views.filter(
      (view) => view.user.toString() === req.user.id
    );
    if (found.length !== 0) {
      return res.status(200).end();
    }
    summary.views.unshift({
      user: req.user.id,
    });
    await summary.save();
    const profile = await Profile.findOne({ user: summary.user }).select(
      'education -_id'
    );
    const data = { ...summary._doc, education: profile.education };
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/summary/comment/:id
// @desc     Comment on a summary
// @access   Private
router.post(
  '/comment/:id',
  [
    auth,
    checkObjectId('id'),
    [check('text', 'Text is required').not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const summary = await Summary.findById(req.params.id);

      const newComment = {
        firstName: user.firstName,
        lastName: user.lastName,
        text: req.body.text,
        user: req.user.id,
        picture: user.picture,
      };

      summary.comments.unshift(newComment);

      await summary.save();
      const profile = await Profile.findOne({ user: summary.user }).select(
        'education -_id'
      );
      const data = { ...summary._doc, education: profile.education };
      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT api/summary/bookmark/:id
// @desc     Add / remove summary from user bookmarked
// @access   private
router.put('/bookmark/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    var user = await User.findById(req.user.id).select('-password');
    let found = false;
    user.bookmarkedSummaries.forEach((element) =>
      element._id.toString() === req.params.id ? (found = true) : null
    );
    if (found) {
      user.bookmarkedSummaries = user.bookmarkedSummaries.filter(
        (sm) => sm._id.toString() !== req.params.id
      );
    } else {
      user.bookmarkedSummaries.push(req.params.id);
    }
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/summary/recent/:id
// @desc     Add summary to user recent
// @access   private
router.put('/recent/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    var user = await User.findById(req.user.id);
    user.recentSummaries = user.recentSummaries.filter(
      (sm) => sm._id.toString() !== req.params.id
    );
    user.recentSummaries.unshift(req.params.id);
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/summary/buy/:id
// @desc     Add summary to user bought summaries
// @access   private
router.put('/buy/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    var user = await User.findById(req.user.id).select('-password');
    if (user.balance < 5)
      return res.status(403).json({ msg: 'Not enough coins' });

    if (
      user.boughtSummaries.filter((sm) => sm._id.toString() === req.params.id)
        .length > 0
    )
      return res.status(403).json({ msg: 'Summary already owned' });
    user.boughtSummaries.unshift(req.params.id);
    user.balance -= 5;
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/summary/owned/:id'
// @desc     Check if summary is owned
// @access   Private
router.get('/owned/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    var user = await User.findById(req.user.id);
    console.log(user);
    user.boughtSummaries.forEach((sm) => {
      if (sm._id.toString() === req.params.id.toString()) {
        res.json({ owned: true });
      }
    });
    res.json({ owned: false });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// // @route    DELETE api/posts/comment/:id/:comment_id
// // @desc     Delete comment
// // @access   Private
// router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     // Pull out comment
//     const comment = post.comments.find(
//       (comment) => comment.id === req.params.comment_id
//     );
//     // Make sure comment exists
//     if (!comment) {
//       return res.status(404).json({ msg: 'Comment does not exist' });
//     }
//     // Check user
//     if (comment.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'User not authorized' });
//     }

//     post.comments = post.comments.filter(
//       ({ id }) => id !== req.params.comment_id
//     );

//     await post.save();

//     return res.json(post.comments);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).send('Server Error');
//   }
// });

module.exports = router;
