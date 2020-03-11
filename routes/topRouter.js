const express = require("express");
const topController = require("../controllers/topController");
const router = express.Router();

router
  .route("/top250")
  .get(topController.index)
  .post(topController.store);

router
  .route("/top250/:id")
  .patch(topController.update)
  .delete(topController.remove);
module.exports = router;
