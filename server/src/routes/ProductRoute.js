const upload = require("../../uploadMiddleware")
const multer = require("multer")
const multParse = multer()

const productController = require("../controllers/ProductController")

const router = require("express").Router()

router.post("/createCategory", productController.createCategory)

router.post("/createProduct", upload.array("image", 3), productController.createProduct)

router.get("/showProducts/:category_id", productController.showProducts)

router.get("/showProduct/:productID", productController.showProduct)

router.get("/showAllProducts", productController.showAllProducts)

router.get("/showAllCategories", productController.showAllCategories)

router.get("/showCategory/:category_id", productController.showCategory)

router.get("/showDetails/:product_id", productController.showDetails)

router.get("/showIngredients/:product_id", productController.showIngredients)

module.exports = router