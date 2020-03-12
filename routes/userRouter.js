const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

router
  .route("/users")
  .get(userController.index)
  .post(userController.store);

router.route("/auth").post(userController.auth);
router.get("/me", authenticate, userController.me);

module.exports = router;
