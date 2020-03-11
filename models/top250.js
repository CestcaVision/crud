const db = require("../config/database");
const schema = new db.Schema({
  title: {
    type: String
  }
});

const Top250 = db.model("Top250", schema);
module.exports = Top250;
