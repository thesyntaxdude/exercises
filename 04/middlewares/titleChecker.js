export default function checkTitle(req, res, next) {
  if (!req.body || !Object.hasOwn(req.body, "title")) {
    return res.status(400).json({ message: "You need to add a title!" });
  }
  next();
}
