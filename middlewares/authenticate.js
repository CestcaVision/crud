const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("X-Access-Token");
  if (token) {
    jwt.verify(token, "I love Xiaohan", (err, decoded) => {
      if (err) {
        return res.send(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      message: "没有权限访问"
    });
  }
};

module.exports = authenticate;
