export default function errorHandler(err, req, res, next) {
  console.error(`Error: ${err.message}`);
  const statusCode = err.statusCode || 500;

  const message = err.isOperational ? err.message : "Something went wrong";
  res.status(statusCode).json({ error: message });
}
