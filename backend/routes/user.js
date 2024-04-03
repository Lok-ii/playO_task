const express = require("express");
const {
  createUser,
  getUserData,
  deleteUser,
  updateUser,
  getSearchedData,
} = require("../controllers/user.js");

const router = express.Router();

router.post("/", createUser);
router.get("/", getUserData);
router.patch("/:id", updateUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:search", getSearchedData);

module.exports = router;
