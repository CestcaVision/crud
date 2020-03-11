const Top250 = require("../models/top250");

const index = (req, res) => {
  Top250.find().then(docs => res.send(docs));
};

const store = (req, res) => {
  const top = new Top250({
    title: req.body.title
  });
  top.save().then(docs => res.send(docs));
};

const update = (req, res) => {
  let id = req.params.id;
  let mend = {
    title: req.body.title
  };
  Top250.findByIdAndUpdate(id, { $set: mend }, { new: true }).then(doc =>
    res.send(doc)
  );
};

const remove = (req, res) => {
  let id = req.params.id;
  Top250.findByIdAndRemove(id).then(doc => {
    res.send(doc);
  });
};

module.exports = {
  index,
  store,
  update,
  remove
};
