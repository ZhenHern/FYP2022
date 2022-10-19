const userController = require("../controllers/UserController")

const router = require("express").Router()

router.post("/createAccount", userController.createAccount)

module.exports = router