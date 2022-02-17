const { updateServices } = require('../services/update');

const updateController = async (req, res, next) => {
  try {
    const { tasks, _id } = req.body;
    const update = await updateServices({ tasks, _id });
    return res.send(update);
  } catch (error) {
    next(error);
  }
};

module.exports = { updateController };
