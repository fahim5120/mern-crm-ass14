const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
     const token = req.cookies.Admin_token || req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Token not found" });
    }

    const decoded = jwt.verify(token, process.env.secretkey);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json( error );
  }
};

module.exports = verifyToken;
