const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const index = (req, res) => {
  User.find().then(docs => res.send(docs));
};

const store = (req, res) => {
  bcrypt.hash(req.body.password, 10).then(password => {
    const user = new User({
      username: req.body.username,
      password: password
    });
    user.save().then(res.send("成功"));
  });
};

const auth = (req, res) => {
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        return Promise.reject({ message: "没找到用户" });
      }
      bcrypt.compare(req.body.password, user.password).then(equal => {
        if (equal) {
          const payload = {
            username: user.username
          };
          const secret = "I love Xiaohan";
          const token = jwt.sign(payload, secret);
          res.send(`你的token是${token}`);
        } else {
          res.status(401).send({ message: "未通过验证" });
        }
      });
    })
    .catch(err => res.status(400).send(err));
};

const me = (req, res) => {
  res.send(`hello!${req.decoded.username}`);
};

module.exports = {
  index,
  store,
  auth,
  me
};
