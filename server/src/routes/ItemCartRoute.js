const itemCartController = require("../controllers/ItemCartController")

const router = require("express").Router()

router.post("/addToCart", itemCartController.addToCart)

router.post("/createCart", itemCartController.createCart)

router.post("/addQuantity", itemCartController.addQuantity)

router.post("/subtractQuantity", itemCartController.subtractQuantity)

router.post("/removeItem", itemCartController.removeItem)

router.get("/getCurrentCart/:userID", itemCartController.getCurrentCart)

router.get("/showAllItems/:itemCartID", itemCartController.showAllItems)

module.exports = router