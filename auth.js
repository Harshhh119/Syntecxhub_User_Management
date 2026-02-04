// middleware/auth.js
const basicAuth = require("basic-auth");

// Basic auth using ADMIN_USERNAME and ADMIN_PASSWORD from .env
const adminAuth = (req, res, next) => {
  const user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    res.set("WWW-Authenticate", 'Basic realm="User Management API"');
    return res.status(401).json({ message: "Authentication required" });
  }

  const isValidUser =
    user.name === process.env.ADMIN_USERNAME &&
    user.pass === process.env.ADMIN_PASSWORD;

  if (!isValidUser) {
    return res.status(403).json({ message: "Invalid credentials" });
  }

  next();
};

module.exports = { adminAuth };
