const { ValidationError } = require("express-json-validator-middleware");

const validationErrorMiddleware = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const isValidationError = err instanceof ValidationError;
  if (!isValidationError) {
    return next(err);
  }

  res.status(400).json({
    errors: err.validationErrors,
  });

  next();
}

module.exports = validationErrorMiddleware
