const fs = require("fs")
const path = require("path")
const db = require("../models")
const Category = db.productsCategory
const Product = db.products

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

const createProducts = async(req, res) => {
    try {
        console.log(req.file)
        
        await Product.create({
            product_name: req.body.productName,
            product_description: req.body.productDesc,
            category_id: req.body.productCategory,
            image_name: req.file.filename,
            image: fs.readFileSync(
                path.resolve(__dirname, "../../../client/src/assets/" + req.file.filename)
            ),
        })
        res.status(201).send("New Product Added")
    }
    catch(err) {
        res.status(400).send(err)
    }
}

const showAllCakes = async(req, res) => {
    const cakes = await Product.findAll({
        where: {
            category_id: 1
        }
    })
    res.send(cakes)
}

module.exports = {
    createCategory,
    createProducts,
    showAllCakes
}