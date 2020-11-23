const mongoose = require('mongoose');
const User = require('../models/User');

const checkAdmin = async (req, res, next) => {
  try {
    user = await User.findById(req.user.id);
    if (!user.type) {
      return res.status(403).json({ msg: 'User not authorized' });
    }
    next();
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = checkAdmin;
