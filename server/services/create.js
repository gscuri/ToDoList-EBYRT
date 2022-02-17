const { create } = require('../models/todo/create');

const createServices = async ({ tasks }) => {
  const task = await create({ tasks });
  return task;
};

module.exports = { createServices };
