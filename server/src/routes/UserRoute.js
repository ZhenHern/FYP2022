const userController = require("../controllers/UserController")

const router = require("express").Router()

// router.post("/createAccount", userController.createAccount)

router.post("/checkEmail", userController.checkEmail)

module.exports = router