const { update } = require('../models/todo/update');

const updateServices = async ({ tasks, _id }) => {
  const updateTask = await update({ tasks, _id });
  return updateTask;
};

module.exports = { updateServices };
