function handleError(err, req, res, next) {
  res.status(500).json({ error: err.message });
  console.error(err);
}

module.exports = handleError;
