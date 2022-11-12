const upload = require("../../uploadMiddleware")
const multer = require("multer")
const multParse = multer()

const productController = require("../controllers/ProductController")

const router = require("express").Router()

router.post("/createCategory", productController.createCategory)

router.post("/createProduct", upload.single("image"), productController.createProducts)

router.get("/showProduct/:category_id", productController.showProducts)

router.get("/showCategory", productController.showAllCategories)

module.exports = router