const { removeServices } = require('../services/delete');

const removeControllers = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await removeServices(_id);
    return res.send();
  } catch (error) {
    next(error);
  }
};

module.exports = { removeControllers };
