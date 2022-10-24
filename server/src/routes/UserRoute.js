const userController = require("../controllers/UserController")

const router = require("express").Router()

router.post("/createAccount", userController.createAccount)

router.post("/checkEmail", userController.checkEmail)

router.get("/verify/:token", userController.verifyEmail)

module.exports = router