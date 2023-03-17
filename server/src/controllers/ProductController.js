const fs = require("fs")
const path = require("path")
const db = require("../models")
const Category = db.productsCategory
const Product = db.products
const Ingredient = db.productsIngredient

const createCategory = async(req, res) => {
    try {
        await Category.create({
            category_name: req.body.categoryName,
        })
        res.status(201).send("Success")
    }
    catch(err) {
        res.status(400).send("Error")
    }
}

const showCategory = async(req, res) => {
    let category_id = req.params.category_id
    try {
        category = await Category.findOne({
            where: {
                category_id: category_id
            }
        })
        res.send(category)
    }
    catch(err) {
        res.status(400).send("Error fetching data from database.")
    }
}

const showAllCategories = async(req, res) => {
    try {
        category = await Category.findAll()
        res.send(category)
    }
    catch(err) {
        res.status(400).send("Error fetching data from database.")
    }
}

const createProduct = async(req, res) => {
        category = await Category.findOne({
            where: {
                category_name: req.body.productCategory
            }
        }) 
        await Product.create({
            product_name: req.body.productName,
            product_price: req.body.productPrice,
            product_description: req.body.productDesc,
            category_id: category.category_id,
            image_name1: req.files[0].filename,
            image_name2: req.files[1].filename,
            image_name3: req.files[2].filename,
            image1: fs.readFileSync(
                path.resolve(__dirname, "../../../client/src/assets/productImages/" + req.files[0].filename)
            ),
            image2: fs.readFileSync(
                path.resolve(__dirname, "../../../client/src/assets/productImages/" + req.files[1].filename)
            ),
            image3: fs.readFileSync(
                path.resolve(__dirname, "../../../client/src/assets/productImages/" + req.files[2].filename)
            ),
        })
        res.status(201).send("New Product Added")
}

const showProducts = async(req, res) => {
    let category_id = req.params.category_id
    const cakes = await Product.findAll({
        where: {
            category_id: category_id
        }
    })
    res.send(cakes)
}

const showProduct = async(req, res) => {
    const product = await Product.findOne({
        where: {
            product_id: req.params.productID
        }
    })
    res.send(product)
}

const showAllProducts = async(req, res) => {
    const cakes = await Product.findAll()
    res.send(cakes)
}

const showDetails = async(req, res) => {
    let product_id = req.params.product_id
    const details = await Product.findOne({
        where: {
            product_id: product_id
        }
    })
    res.send(details)
}

const showIngredients = async(req, res) => {
    let product_id = req.params.product_id
    const ingredients = await Ingredient.findAll({
        where: {
            product_id: product_id
        }
    })
    res.send(ingredients)
}

module.exports = {
    createCategory,
    createProduct,
    showProducts,
    showProduct,
    showAllProducts,
    showAllCategories,
    showCategory,
    showDetails,
    showIngredients
}