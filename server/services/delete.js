const { ObjectId } = require('mongodb');
const { AppError } = require('../middleware/error/AppError');
const { remove } = require('../models/todo/delete');

const removeServices = async (_id) => {
  const deleteTask = await remove(ObjectId(_id));
  return deleteTask;
};

module.exports = { removeServices };
