const { AppError } = require('./AppError');

const error = ((err, _request, response, _next) => {
  if (err instanceof AppError) {
    return response.status(err.body.status).json({ message: err.body.message });
  }
  return response.status(500).json({ 
    status: 'error', 
    message: `Internal Server error - ${err.message}`,
  });
});

module.exports = { error };

  // COM AUXILIO BRUNO AUGUSTO
