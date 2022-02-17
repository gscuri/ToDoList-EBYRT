const { findAll } = require('../models/todo/findAll');

const findAllServices = async () => {
  const findTasks = await findAll();
  return findTasks;
};

module.exports = { findAllServices };
