const itemCartController = require("../controllers/ItemCartController")

const router = require("express").Router()

router.post("/addToCart", itemCartController.addToCart)

router.post("/createCart", itemCartController.createCart)

module.exports = router