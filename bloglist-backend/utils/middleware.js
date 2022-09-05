const logger = require("./logger");

const unKnownEndPoint = (req, res, next) => {
  res.status(404).send({ err: "unknown endpoint" });
};

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === "CastError") {
    res.status(400).send({ err: "malformatted id" });
  } else if (err.name === "ValidationError") {
    res.status(400).send({ err: err.message });
  } else if (err.name === "JsonWebTokenError") {
    res.status(401).json({ err: err.message });
  } else if (err.name === "TokenExpiredError") {
    res.status(401).json({ err: err.message });
  }

  next(err);
};

module.exports = {
  unKnownEndPoint,
  errorHandler,
};
