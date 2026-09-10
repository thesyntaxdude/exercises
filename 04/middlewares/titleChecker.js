export default function checkTitle(req, res, next) {
  if (!Object.hasOwn(req.body, "title")) {
    return res.status(400).json({ message: "You need to add a title!" });
  }
  next();
}
