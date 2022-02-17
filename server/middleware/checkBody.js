const { ObjectId } = require('mongodb');

const checkId = (req, _res, next) => {
  if ('_id' in req.body) {
    req.body._id = ObjectId(req.body._id);
  }
  next();
};

module.exports = { checkId };
