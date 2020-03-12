const db = require("../config/database");
const schema = new db.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = db.model("User", schema);
module.exports = User;
