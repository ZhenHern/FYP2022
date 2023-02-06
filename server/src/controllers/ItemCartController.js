const db = require("../models")

const ItemCart = db.itemCarts

const createCart = async(req, res) => {
    try {
        await ItemCart.create({
            user_id: req.body.userID,
            paid: req.body.paid
        })
        res.status(201).send("New Item Cart Added")
    }
    catch(err) {
        res.status(400).send("Error creating new item cart.")
    }
}

const addToCart = async(req, res) => {
    console.log(req.body.quantity)
    res.send("hi")
    return
}



module.exports = {
    addToCart,
    createCart
}