const { findAllServices } = require('../services/findAll');

const findAllControllers = async (_req, res, next) => {
  try {
    const recipes = await findAllServices();
    return res.send(recipes);
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllControllers };
