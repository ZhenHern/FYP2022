const accountController = require("../controllers/AccountController")

const router = require("express").Router()

router.post("/createAccount", accountController.createAccount)

router.post("/checkEmail", accountController.checkEmail)

router.post("/login", accountController.login)

router.post("/resendVerificationEmail", accountController.resendVerificationLink)

router.get("/verify/:token", accountController.verifyEmail)

router.get("/checkCurrentUser", accountController.checkCurrentUser)

module.exports = router