const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/users")
  .get(userController.index)
  .post(userController.store);

router.route("/auth").post(userController.auth);

module.exports = router;
