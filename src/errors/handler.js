export function logErrors(error, req, res, next) {
  // eslint-disable-next-line no-console
  console.log('error.stack', error.stack);
  next(error);
}

export function clientErrorHandler(error, req, res, next) {
  res.status(500).json({ message: error.message });
}
