const upload = require("../../uploadMiddleware")
const multer = require("multer")
const multParse = multer()

const productController = require("../controllers/ProductController")

const router = require("express").Router()

router.post("/createCategory", productController.createCategory)

router.post("/createProduct", upload.array("image", 3), productController.createProducts)

router.get("/showProduct/:category_id", productController.showProducts)

router.get("/showCategory", productController.showAllCategories)

router.get("/showDetails/:product_id", productController.showDetails)

router.get("/showIngredients/:product_id", productController.showIngredients)

module.exports = router