const { createServices } = require('../services/create');

const createController = async (req, res, next) => {
  try {
    const { tasks } = req.body;
    const createTasks = await createServices({ tasks });
    return res.send( createTasks );
  } catch (error) {
    next(error);
  }
};

module.exports = { createController };
