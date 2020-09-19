export default function notFoundHandler(req, res, next) {
  if (res.headersSent) {
    return next();
  }

  res.status(404).send({
    status: 404,
    data: req.url,
    message: `The url "${req.originalUrl} does not exist"`,
  });
}
