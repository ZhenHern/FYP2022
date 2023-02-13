const accountController = require("../controllers/AccountController")

const router = require("express").Router()

router.post("/createAccount", accountController.createAccount)

router.post("/checkEmail", accountController.checkEmail)

router.post("/login", accountController.login)

router.post("/resendVerificationEmail", accountController.resendVerificationLink)

router.post("/saveProfile", accountController.saveProfile)

router.post("/changePassword", accountController.changePassword)

router.get("/verify/:token", accountController.verifyEmail)

router.get("/checkCurrentUser", accountController.checkCurrentUser)

router.get("/showCurrentUser/:loginID", accountController.showCurrentUser)

module.exports = router