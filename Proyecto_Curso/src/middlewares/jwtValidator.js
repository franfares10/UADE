require("dotenv").config();
const jwt = require("jsonwebtoken");

const validateJwt = async (req, res, next) => {
  try {
    const jwtValidate = jwt.verify(req.headers.jwt, process.env.PRIVATE_KEY);
    if (jwtValidate) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = validateJwt;
